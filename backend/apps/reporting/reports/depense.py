from decimal import Decimal
from apps.voyages_trips.models import TripExpense
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("depense", "Liste des dépenses", ["date_from", "date_to", "agency", "register", "vehicle"], "landscape")
def build(company, f):
    qs = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
          .select_related("expense_type", "trip", "trip__vehicle", "cash_session__cash_register")
          .order_by("date"))
    if f["date_from"]: qs = qs.filter(date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(date__lte=f["date_to"])
    if f["vehicle"]:   qs = qs.filter(trip__vehicle_id=f["vehicle"])
    if f["register"]:  qs = qs.filter(cash_session__cash_register_id=f["register"])
    if f["agency"]:    qs = qs.filter(cash_session__cash_register__agency_id=f["agency"])
    rows, total = [], Decimal(0)
    for i, e in enumerate(qs, 1):
        total += e.amount
        reg = getattr(e.cash_session, "cash_register", None)
        rows.append({"n": i, "trip": e.trip.number,
                     "veh": getattr(e.trip.vehicle, "license_plate", "—"),
                     "cat": e.expense_type.name, "date": e.date.strftime("%d/%m/%Y"),
                     "desc": e.description, "tres": reg.name if reg else "—", "montant": e.amount})
    cols = [ReportColumn("n", "No"), ReportColumn("trip", "Voyage"), ReportColumn("veh", "Véhicule"),
            ReportColumn("cat", "Catégorie"), ReportColumn("date", "Date"), ReportColumn("desc", "Description"),
            ReportColumn("tres", "Trésorerie"), ReportColumn("montant", "Montant", "right", True)]
    return ReportResult("depense", "LISTE DES DÉPENSES", cols, [ReportGroup(rows=rows)],
                        totals={"montant": total}, period_label=period_label(f))
