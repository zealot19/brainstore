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
from django.db.models.signals import post_save, post_delete
from django.utils import timezone

from apps.sync import registry
from apps.sync.models import ChangeLog

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
            or not registry.is_syncable(label):
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
    if registry.is_syncable(sender._meta.label_lower):
        record_change(instance, ChangeLog.OP_UPSERT)


def _on_delete(sender, instance, **kwargs):
    if registry.is_syncable(sender._meta.label_lower):
        record_change(instance, ChangeLog.OP_DELETE)


def connect():
    post_save.connect(_on_save, dispatch_uid="sync_capture_save")
    post_delete.connect(_on_delete, dispatch_uid="sync_capture_delete")
