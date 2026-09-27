"""Full snapshot of master config (DOWN), for seeding a fresh agency.

The ChangeLog only holds deltas since capture was enabled, so pre-existing config
can't be replayed from it — a new agency is seeded from a full snapshot instead.
Emitted in registration order, which is FK-dependency order.
"""
from django.apps import apps as django_apps
from django.db.models import ForeignKey

from apps.sync import registry, membership
from apps.sync.capture import snapshot as row_snapshot, m2m_object_id
from apps.sync.models import ChangeLog


def _emit_m2m(through) -> list[dict]:
    """Lignes de liaison M2M (couple de FK) — object_id dérivé du couple."""
    label = through._meta.label_lower
    fk_attnames = [f.attname for f in through._meta.concrete_fields if isinstance(f, ForeignKey)]
    out = []
    for row in through._default_manager.all():
        ids = {a: str(getattr(row, a)) for a in fk_attnames}
        out.append({
            "entity": label,
            "object_id": m2m_object_id(label, ids),
            "op": ChangeLog.OP_UPSERT,
            "payload": ids,
            "version": None,
        })
    return out


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
    for through in membership.syncable_m2m_throughs():   # liens M2M (ex. gestionnaires de caisse)
        entries.extend(_emit_m2m(through))
    return entries


def full_down_snapshot() -> list[dict]:
    """(Historique) snapshot de la config DOWN uniquement — conservé pour compat."""
    entries = []
    for label in registry.labels_for_direction(registry.DOWN):
        entries.extend(_emit(django_apps.get_model(label)))
    return entries
