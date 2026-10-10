"""Référentiel Voyages par défaut d'une nouvelle société.

Idempotent (skip-if-exists par code/nom), sur le modèle de crew_seed / expense_seed.
Alimenté à la création de la société (system_config._bootstrap_company) pour que la
billetterie, le colis et le plan de bus soient utilisables immédiatement.
"""
from datetime import time

from apps.voyages_config.models import (
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    SeatingPlan, VoyagesSettings, VoyageType,
)

# (code, nom, par défaut)
_VOYAGE_TYPES = [("DEPART", "Départ", True), ("COMPLEMENT", "Complément", False),
                 ("ADDITIF", "Additif", False)]

# (code, nom, rang, couleur)
_FARE_CLASSES = [
    # (code, libellé, rang, couleur, location)
    ("ECO", "Économique", 1, "#2e7d32", False),
    ("VIP", "VIP",        2, "#6a1b9a", False),
    ("LOC", "Location",   3, "#00695c", True),
]

# (code, libellé, début, fin, ordre)
_TIME_SLOTS = [
    ("MATIN", "Matin",        time(6, 0),  time(12, 0), 1),
    ("APREM", "Après-midi",   time(12, 0), time(17, 0), 2),
    ("SOIR",  "Soir",         time(17, 0), time(21, 0), 3),
    ("NUIT",  "Nuit",         time(21, 0), time(6, 0),  4),
]

# (code, nom, is_fragile, requires_declaration, is_prohibited)
_NATURES = [
    ("ORD",  "Ordinaire",   False, False, False),
    ("FRAG", "Fragile",     True,  False, False),
    ("DOC",  "Documents",   False, False, False),
    ("DENR", "Denrées",     False, True,  False),
    ("INT",  "Interdit",    False, False, True),
]

# (code, libellé, code_nature, applies_to)
_CONS_TYPES = [
    ("BAG_STD", "Bagage standard", "ORD",  ConsignmentType.AppliesTo.BAGGAGE),
    ("COL_STD", "Colis standard",  "ORD",  ConsignmentType.AppliesTo.PARCEL),
    ("COL_FRG", "Colis fragile",   "FRAG", ConsignmentType.AppliesTo.PARCEL),
]

# (code, nom, rangées, colonnes)  → rangées × colonnes sièges vendables
_SEATING_PLANS = [
    # (code, nom, total, bloquées)
    ("BUS70", "Bus 70 places (2+3)",    70, 0),
    ("MINI30", "Minibus 30 places (2+1)", 30, 0),
]


def _seed_fare_classes(company, created_by):
    n = 0
    for code, name, rank, color, is_rental in _FARE_CLASSES:
        if FareClass.objects.filter(company=company, code=code).exists():
            continue
        FareClass.objects.create(company=company, code=code, name=name, rank=rank,
                                 color=color, is_rental=is_rental, created_by=created_by)
        n += 1
    return n


def _seed_time_slots(company, created_by):
    n = 0
    for code, label, start, end, order in _TIME_SLOTS:
        if TimeSlot.objects.filter(company=company, code=code).exists():
            continue
        TimeSlot.objects.create(company=company, code=code, label=label,
                                start_time=start, end_time=end, ordering=order,
                                created_by=created_by)
        n += 1
    return n


def _seed_consignments(company, created_by):
    n = 0
    for code, name, fragile, declar, prohibited in _NATURES:
        if not ConsignmentNature.objects.filter(company=company, code=code).exists():
            ConsignmentNature.objects.create(
                company=company, code=code, name=name, is_fragile=fragile,
                requires_declaration=declar, is_prohibited=prohibited, created_by=created_by)
            n += 1
    natures = {c.code: c for c in ConsignmentNature.objects.filter(company=company)}
    for code, label, nature_code, applies_to in _CONS_TYPES:
        if ConsignmentType.objects.filter(company=company, code=code).exists():
            continue
        nature = natures.get(nature_code)
        if not nature:
            continue
        ConsignmentType.objects.create(company=company, code=code, label=label,
                                       nature=nature, applies_to=applies_to,
                                       created_by=created_by)
        n += 1
    return n


def _seed_seating_plans(company, created_by):
    n = 0
    for code, name, total, blocked in _SEATING_PLANS:
        if SeatingPlan.objects.filter(company=company, code=code).exists():
            continue
        SeatingPlan.objects.create(company=company, code=code, name=name,
                                   total_seats=total, blocked_seats=blocked,
                                   created_by=created_by)
        n += 1
    return n


def _seed_voyage_types(company, created_by):
    n = 0
    for code, name, is_default in _VOYAGE_TYPES:
        if VoyageType.objects.filter(company=company, code=code).exists():
            continue
        VoyageType.objects.create(company=company, code=code, name=name, is_default=is_default,
                                  created_by=created_by)
        n += 1
    return n


def _seed_settings(company, created_by):
    if VoyagesSettings.objects.filter(company=company).exists():
        return 0
    VoyagesSettings.objects.create(company=company, created_by=created_by)
    return 1


def seed_voyages_defaults(company, created_by=None) -> int:
    """Seed fare classes, time slots, consignment natures/types, seat plans, voyage types
    and the default Voyages settings row. Returns the number of top-level rows created."""
    return (
        _seed_fare_classes(company, created_by)
        + _seed_time_slots(company, created_by)
        + _seed_consignments(company, created_by)
        + _seed_seating_plans(company, created_by)
        + _seed_voyage_types(company, created_by)
        + _seed_settings(company, created_by)
    )
