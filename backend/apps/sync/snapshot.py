"""Full snapshot of master config (DOWN), for seeding a fresh agency.

The ChangeLog only holds deltas since capture was enabled, so pre-existing config
can't be replayed from it — a new agency is seeded from a full snapshot instead.
Emitted in registration order, which is FK-dependency order.
"""
from django.apps import apps as django_apps

from apps.sync import registry, membership
from apps.sync.capture import snapshot as row_snapshot
from apps.sync.models import ChangeLog


def _emit(model) -> list[dict]:
    label = model._meta.label_lower
    manager = getattr(model, "all_objects", None) or model._default_manager
    out = []
    for row in manager.all():
        v = getattr(row, "updated_at", None)
        out.append({
            "entity": label,
            "object_id": str(row.pk),
            "op": ChangeLog.OP_UPSERT,
            "payload": row_snapshot(row),
            "version": v.isoformat() if v else None,
        })
    return out


def full_snapshot() -> list[dict]:
    """Snapshot COMPLET (toutes les tables synchronisables, cf. membership) pour
    amorcer une agence avec une réplique intégrale. L'ordre importe peu : le
    bootstrap applique sous `constraint_checks_disabled` (FK vérifiées au commit)."""
    entries = []
    for model in membership.syncable_models():
        entries.extend(_emit(model))
    return entries


def full_down_snapshot() -> list[dict]:
    """(Historique) snapshot de la config DOWN uniquement — conservé pour compat."""
    entries = []
    for label in registry.labels_for_direction(registry.DOWN):
        entries.extend(_emit(django_apps.get_model(label)))
    return entries
