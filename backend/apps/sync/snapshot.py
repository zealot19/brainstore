"""Full snapshot of master config (DOWN), for seeding a fresh agency.

The ChangeLog only holds deltas since capture was enabled, so pre-existing config
can't be replayed from it — a new agency is seeded from a full snapshot instead.
Emitted in registration order, which is FK-dependency order.
"""
from django.apps import apps as django_apps

from apps.sync import registry
from apps.sync.capture import snapshot as row_snapshot
from apps.sync.models import ChangeLog


def full_down_snapshot() -> list[dict]:
    entries = []
    for label in registry.labels_for_direction(registry.DOWN):
        model = django_apps.get_model(label)
        manager = getattr(model, "all_objects", None) or model._default_manager
        for row in manager.all():
            v = getattr(row, "updated_at", None)
            entries.append({
                "entity": label,
                "object_id": str(row.pk),
                "op": ChangeLog.OP_UPSERT,
                "payload": row_snapshot(row),
                "version": v.isoformat() if v else None,
            })
    return entries
