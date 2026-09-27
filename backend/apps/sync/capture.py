"""CDC capture: snapshot registered rows into the ChangeLog on every change.

Full-row snapshots (FKs as UUID strings, decimals/dates/uuids JSON-safe) so the
receiver can idempotently upsert by UUID. Deletions are captured as delete
events (Django fires post_delete per row for both instance and QuerySet deletes).
Bulk `.update()` bypasses signals, so those paths call `record_change` explicitly
(see set_seats_status / soft_delete_qs consumers).
"""
import contextlib
import datetime
import decimal
import uuid
from threading import local

from django.conf import settings
from django.db.models import ForeignKey
from django.db.models.signals import post_save, post_delete, pre_migrate, post_migrate, m2m_changed
from django.utils import timezone

from apps.sync import membership
from apps.sync.models import ChangeLog

# Namespace fixe pour dériver un object_id (UUID) stable d'un lien M2M (couple de FK).
_M2M_NS = uuid.UUID("9d1e7c40-2f6b-5a8c-b3d4-6e0a1f2c3d4e")

_state = local()


def _suspended() -> bool:
    return getattr(_state, "suspended", False)


@contextlib.contextmanager
def suspend_capture():
    """Suspend capture (used while applying incoming changes, to avoid echo)."""
    prev = _suspended()
    _state.suspended = True
    try:
        yield
    finally:
        _state.suspended = prev


def _json_safe(v):
    if isinstance(v, uuid.UUID):
        return str(v)
    if isinstance(v, (datetime.datetime, datetime.date)):
        return v.isoformat()
    if isinstance(v, decimal.Decimal):
        return str(v)
    try:
        import json
        json.dumps(v)
        return v
    except (TypeError, ValueError):
        return str(v)


def snapshot(instance) -> dict:
    """Full-row snapshot keyed by field attname (FKs become '<field>_id')."""
    data = {}
    for f in instance._meta.concrete_fields:
        data[f.attname] = _json_safe(f.value_from_object(instance))
    return data


def _node() -> str:
    return getattr(settings, "NODE_ID", "") or getattr(settings, "NODE_ROLE", "")


def record_change(instance, op):
    label = instance._meta.label_lower
    if not getattr(settings, "SYNC_ENABLED", False) or _suspended() \
            or not membership.is_syncable_model(type(instance)):
        return None
    version = getattr(instance, "updated_at", None) or timezone.now()
    return ChangeLog.objects.create(
        entity=label,
        object_id=instance.pk,
        op=op,
        payload=snapshot(instance) if op == ChangeLog.OP_UPSERT else {},
        version=version,
        origin_node=_node(),
    )


def _on_save(sender, instance, **kwargs):
    if membership.is_syncable_model(sender):
        record_change(instance, ChangeLog.OP_UPSERT)


def _on_delete(sender, instance, **kwargs):
    if membership.is_syncable_model(sender):
        record_change(instance, ChangeLog.OP_DELETE)


# ── Liens M2M (tables de liaison auto-créées) ────────────────────────────────
# PK bigint non fiable entre instances -> on identifie le lien par le COUPLE de FK
# et on dérive un object_id (UUID) stable de ce couple.
def m2m_object_id(label: str, ids: dict) -> str:
    key = label + "|" + "|".join(f"{k}={ids[k]}" for k in sorted(ids))
    return str(uuid.uuid5(_M2M_NS, key))


def record_m2m(through, ids: dict, op):
    if not getattr(settings, "SYNC_ENABLED", False) or _suspended():
        return None
    label = through._meta.label_lower
    return ChangeLog.objects.create(
        entity=label, object_id=m2m_object_id(label, ids), op=op,
        payload=ids, version=timezone.now(), origin_node=_node(),
    )


def _on_m2m_changed(sender, instance, action, pk_set, model, **kwargs):
    # sender = table de liaison ; instance = objet modifié ; pk_set = pk de l'autre côté.
    if action not in ("post_add", "post_remove"):
        return
    if not membership.is_syncable_m2m(sender):
        return
    fks = [f for f in sender._meta.concrete_fields if isinstance(f, ForeignKey)]
    if len(fks) != 2:
        return
    inst_cm = type(instance)._meta.concrete_model
    op = ChangeLog.OP_UPSERT if action == "post_add" else ChangeLog.OP_DELETE
    for pk in (pk_set or set()):
        ids = {}
        for f in fks:
            if f.related_model._meta.concrete_model == inst_cm and f.attname not in ids:
                ids[f.attname] = str(instance.pk)
            else:
                ids[f.attname] = str(pk)
        if len(ids) == 2:
            record_m2m(sender, ids, op)


# ── Suspension pendant les migrations ────────────────────────────────────────
# Django émet pre_migrate avant d'appliquer le plan et post_migrate après. Les
# seeds de migration (RBAC, OHADA, …) ne sont PAS des changements incrémentaux —
# ils font partie du snapshot de base (tiré par bootstrap_from_master). Les
# capturer échouerait d'ailleurs sur une base neuve (table sync_changelog pas
# encore créée). On suspend donc la capture le temps du `migrate`.
def _suspend_for_migrate(**kwargs):
    _state.suspended = True


def _resume_after_migrate(**kwargs):
    _state.suspended = False


def connect():
    post_save.connect(_on_save, dispatch_uid="sync_capture_save")
    post_delete.connect(_on_delete, dispatch_uid="sync_capture_delete")
    m2m_changed.connect(_on_m2m_changed, dispatch_uid="sync_capture_m2m")
    pre_migrate.connect(_suspend_for_migrate, dispatch_uid="sync_capture_pre_migrate")
    post_migrate.connect(_resume_after_migrate, dispatch_uid="sync_capture_post_migrate")
