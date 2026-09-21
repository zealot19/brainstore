"""Référentiel Parc (fleet) par défaut d'une nouvelle société.

Idempotent (skip-if-exists), alimenté à la création de la société pour que les
formulaires véhicule / documents / entretien aient des listes prêtes à l'emploi.
"""
from apps.fleet.models import (
    FuelType, Transmission, VehicleCategoryCfg, DocumentType, InterventionType,
)

_FUEL_TYPES     = ["Diesel", "Essence", "Hybride", "Électrique", "GPL"]
_TRANSMISSIONS  = ["Manuelle", "Automatique"]
_CATEGORIES     = ["Bus", "Minibus", "Car", "Utilitaire", "Voiture"]

# (code, libellé, expiration_requise)
_DOCUMENT_TYPES = [
    ("CG",   "Carte grise",       False),
    ("ASSUR", "Assurance",        True),
    ("VT",   "Visite technique",  True),
    ("VIGN", "Vignette",          True),
]

# (nom, catégorie, intervalle_km, intervalle_jours)
_INTERVENTIONS = [
    ("Vidange",           InterventionType.Category.SERVICE, 10000, None),
    ("Révision générale", InterventionType.Category.SERVICE, 20000, 365),
    ("Freins",            InterventionType.Category.SERVICE, 30000, None),
    ("Pneumatiques",      InterventionType.Category.SERVICE, 40000, None),
]


def _seed_named(model, company, names, created_by):
    n = 0
    for name in names:
        if model.objects.filter(company=company, name=name).exists():
            continue
        model.objects.create(company=company, name=name, created_by=created_by)
        n += 1
    return n


def seed_fleet_reference(company, created_by=None) -> int:
    """Seed fuel types, transmissions, vehicle categories, document types and
    intervention types. Returns the number of rows created."""
    n = _seed_named(FuelType, company, _FUEL_TYPES, created_by)
    n += _seed_named(Transmission, company, _TRANSMISSIONS, created_by)
    n += _seed_named(VehicleCategoryCfg, company, _CATEGORIES, created_by)

    for code, label, requires_exp in _DOCUMENT_TYPES:
        if DocumentType.objects.filter(company=company, code=code).exists():
            continue
        DocumentType.objects.create(company=company, code=code, label=label,
                                    requires_expiration=requires_exp, created_by=created_by)
        n += 1

    for name, category, km, days in _INTERVENTIONS:
        if InterventionType.objects.filter(company=company, name=name).exists():
            continue
        InterventionType.objects.create(company=company, name=name, category=category,
                                        interval_km=km, interval_days=days, created_by=created_by)
        n += 1
    return n
