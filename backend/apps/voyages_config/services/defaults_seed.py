"""Référentiel Voyages par défaut d'une nouvelle société.

Idempotent (skip-if-exists par code/nom), sur le modèle de crew_seed / expense_seed.
Alimenté à la création de la société (system_config._bootstrap_company) pour que la
billetterie, le colis et le plan de bus soient utilisables immédiatement.
"""
from datetime import time

from apps.voyages_config.models import (
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    SeatingPlan, PlanSeat, VoyagesSettings,
)

# (code, nom, rang, couleur)
_FARE_CLASSES = [
    ("ECO", "Économique", 1, "#2e7d32"),
    ("VIP", "VIP",        2, "#6a1b9a"),
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
    ("BUS70", "Bus 70 places (2+3)",    14, 5),
    ("MINI30", "Minibus 30 places (2+1)", 10, 3),
]


def _seed_fare_classes(company, created_by):
    n = 0
    for code, name, rank, color in _FARE_CLASSES:
        if FareClass.objects.filter(company=company, code=code).exists():
            continue
        FareClass.objects.create(company=company, code=code, name=name, rank=rank,
                                 color=color, created_by=created_by)
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
    for code, name, rows, cols in _SEATING_PLANS:
        if SeatingPlan.objects.filter(company=company, code=code).exists():
            continue
        plan = SeatingPlan.objects.create(company=company, code=code, name=name,
                                          rows=rows, columns=cols, total_seats=rows * cols,
                                          created_by=created_by)
        seat_no = 0
        seats = []
        for r in range(1, rows + 1):
            for c in range(1, cols + 1):
                seat_no += 1
                seats.append(PlanSeat(company=company, plan=plan, seat_number=str(seat_no),
                                      row=r, column=c, seat_type=PlanSeat.SeatType.STANDARD,
                                      is_sellable=True, created_by=created_by))
        PlanSeat.objects.bulk_create(seats)
        n += 1
    return n


def _seed_settings(company, created_by):
    if VoyagesSettings.objects.filter(company=company).exists():
        return 0
    VoyagesSettings.objects.create(company=company, created_by=created_by)
    return 1


def seed_voyages_defaults(company, created_by=None) -> int:
    """Seed fare classes, time slots, consignment natures/types, seat plans and the
    default Voyages settings row. Returns the number of top-level rows created."""
    return (
        _seed_fare_classes(company, created_by)
        + _seed_time_slots(company, created_by)
        + _seed_consignments(company, created_by)
        + _seed_seating_plans(company, created_by)
        + _seed_settings(company, created_by)
    )
