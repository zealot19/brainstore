"""Apply engine — idempotently apply an incoming change to the local DB.

Runs under `suspend_capture()` so applying a remote change does not re-emit a
local ChangeLog entry (no echo loop). Upserts by UUID; preserves the incoming
`updated_at` (via QuerySet.update, which bypasses auto_now) so watermarks and
last-write-wins conflict resolution stay coherent.
"""
from django.apps import apps as django_apps
from django.db import IntegrityError, transaction
from django.db.models import ForeignKey
from django.utils.dateparse import parse_datetime

from apps.sync.capture import suspend_capture


def _unique_conflict(model, manager, defaults):
    """Ligne locale partageant une clé naturelle (unique / unique_together) avec
    `defaults`, sous un PK différent (seed par instance). Renvoie None si aucune."""
    for f in model._meta.concrete_fields:
        if getattr(f, "unique", False) and not f.primary_key \
                and f.attname in defaults and defaults[f.attname] is not None:
            row = manager.filter(**{f.attname: defaults[f.attname]}).first()
            if row is not None:
                return row
    for ut in getattr(model._meta, "unique_together", ()):  # tuples de noms de champs
        keys, ok = {}, True
        for name in ut:
            an = model._meta.get_field(name).attname
            if an not in defaults:
                ok = False
                break
            keys[an] = defaults[an]
        if ok and keys:
            row = manager.filter(**keys).first()
            if row is not None:
                return row
    return None


def _field_by_attname(model, attname):
    for f in model._meta.concrete_fields:
        if f.attname == attname:
            return f
    return None


def _to_python(field, value):
    if value is None:
        return None
    if isinstance(field, ForeignKey):
        return field.target_field.to_python(value)
    return field.to_python(value)


def _incoming_dt(entry):
    v = entry.get("version")
    if isinstance(v, str):
        return parse_datetime(v)
    return v


def apply_change(entry) -> str:
    """Apply one change entry. Returns 'applied' | 'skipped' | 'ignored'."""
    model = django_apps.get_model(entry["entity"])
    pk = entry["object_id"]
    op = entry["op"]
    manager = getattr(model, "all_objects", None) or model._default_manager

    with suspend_capture():
        if op == "delete":
            local = manager.filter(pk=pk).first()
            if local is None:
                return "ignored"
            if hasattr(local, "is_deleted"):
                manager.filter(pk=pk).update(is_deleted=True)
            else:
                local.delete()
            return "applied"

        # upsert
        payload = entry.get("payload") or {}
        pk_name = model._meta.pk.attname
        defaults = {}
        for attname, raw in payload.items():
            if attname == pk_name:
                continue
            f = _field_by_attname(model, attname)
            if f is None:
                continue
            defaults[attname] = _to_python(f, raw)

        local = manager.filter(pk=pk).first()
        if local is not None:
            incoming = _incoming_dt(entry)
            local_v = getattr(local, "updated_at", None)
            if incoming and local_v and local_v > incoming:
                return "skipped"  # local is newer (out-of-order replay)
            manager.filter(pk=pk).update(**defaults)
            return "applied"

        # create with the given pk, then pin the timestamps the snapshot carried
        obj = model(pk=pk, **defaults)
        try:
            with transaction.atomic():
                obj.save(force_insert=True)
        except IntegrityError:
            # Un enregistrement local partage une clé naturelle unique sous un
            # autre PK (seed par instance : devise, UdM, permission…). Le master
            # fait autorité -> on remplace le seed local puis on ré-insère.
            conflict = _unique_conflict(model, manager, defaults)
            if conflict is None or str(conflict.pk) == str(pk):
                raise
            manager.filter(pk=conflict.pk).delete()
            obj.save(force_insert=True)
        ts = {k: defaults[k] for k in ("created_at", "updated_at") if k in defaults}
        if ts:
            manager.filter(pk=pk).update(**ts)
        return "applied"
