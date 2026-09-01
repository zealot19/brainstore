from decimal import Decimal
from collections import defaultdict
from apps.treasury.models import Transaction, GeneralExpense
from apps.voyages_trips.models import TripExpense
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_CAT_KEY = {
    Transaction.Category.TICKET_SALES: "voyage",
    Transaction.Category.BAGGAGE: "bagage",
    Transaction.Category.PARCEL_SHIPPING: "transit",
    Transaction.Category.OTHER_INCOME: "autre",
}
_LINK_TRIP = {
    "voyage": lambda t: getattr(t.voyage_booking, "outbound_trip", None) if t.voyage_booking_id else None,
    "bagage": lambda t: getattr(t.voyages_baggage, "trip", None) if t.voyages_baggage_id else None,
    "transit": lambda t: getattr(t.voyages_parcel, "trip", None) if t.voyages_parcel_id else None,
    "autre": lambda t: None,
}


def _zero():
    return {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0),
            "autre": Decimal(0), "depense": Decimal(0)}


@register("recapitulatif", "État récapitulatif de trésorerie",
          ["date_from", "date_to", "vehicle"], "landscape")
def build(company, f):
    cell = defaultdict(_zero)

    txns = (Transaction.objects.filter(company=company, is_deleted=False,
                                       transaction_type=Transaction.Type.INCOME, category__in=list(_CAT_KEY))
            .select_related("voyage_booking__outbound_trip__vehicle", "voyages_baggage__trip__vehicle",
                            "voyages_parcel__trip__vehicle"))
    if f["date_from"]: txns = txns.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   txns = txns.filter(transaction_date__lte=f["date_to"])
    for t in txns:
        bucket = _CAT_KEY[t.category]
        trip = _LINK_TRIP[bucket](t)
        veh = getattr(getattr(trip, "vehicle", None), "license_plate", "—") if trip else "—"
        cell[(veh, t.transaction_date.strftime("%d/%m/%Y"))][bucket] += t.amount

    exps = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
            .select_related("trip__vehicle"))
    if f["date_from"]: exps = exps.filter(date__gte=f["date_from"])
    if f["date_to"]:   exps = exps.filter(date__lte=f["date_to"])
    for e in exps:
        veh = getattr(e.trip.vehicle, "license_plate", "—")
        cell[(veh, e.date.strftime("%d/%m/%Y"))]["depense"] += e.amount

    # Dépenses générales payées (sans véhicule -> "—").
    gexp = GeneralExpense.objects.filter(company=company, is_deleted=False, status="paid")
    if f["date_from"]: gexp = gexp.filter(expense_date__gte=f["date_from"])
    if f["date_to"]:   gexp = gexp.filter(expense_date__lte=f["date_to"])
    for e in gexp:
        cell[("—", e.expense_date.strftime("%d/%m/%Y"))]["depense"] += e.amount

    # Remboursements (sortie) -> comptés en dépense.
    refunds = Transaction.objects.filter(company=company, is_deleted=False,
                                         transaction_type=Transaction.Type.EXPENSE,
                                         category=Transaction.Category.REFUND)
    if f["date_from"]: refunds = refunds.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   refunds = refunds.filter(transaction_date__lte=f["date_to"])
    for t in refunds:
        cell[("—", t.transaction_date.strftime("%d/%m/%Y"))]["depense"] += t.amount

    if f["vehicle"]:
        from apps.fleet.models import Vehicle
        plate = getattr(Vehicle.objects.filter(id=f["vehicle"]).first(), "license_plate", None)
        if plate:
            cell = {k: v for k, v in cell.items() if k[0] == plate}

    rows = []
    tot = {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0),
           "autre": Decimal(0), "depense": Decimal(0), "marge": Decimal(0)}
    for i, ((veh, day), v) in enumerate(sorted(cell.items()), 1):
        rec = v["voyage"] + v["bagage"] + v["transit"] + v["autre"]
        marge = rec - v["depense"]
        rows.append({"n": i, "periode": day, "vehicule": veh, "partenaire": company.name,
                     "voyage": v["voyage"], "bagage": v["bagage"], "transit": v["transit"],
                     "autre": v["autre"], "depense": v["depense"], "marge": marge})
        for k in ("voyage", "bagage", "transit", "autre", "depense"):
            tot[k] += v[k]
        tot["marge"] += marge
    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"), ReportColumn("vehicule", "Véhicule"),
            ReportColumn("partenaire", "Partenaire"), ReportColumn("voyage", "Voyage", "right", True),
            ReportColumn("bagage", "Bagage", "right", True), ReportColumn("transit", "Transit", "right", True),
            ReportColumn("autre", "Autre", "right", True),
            ReportColumn("depense", "Dépense", "right", True), ReportColumn("marge", "Marge", "right", True)]
    return ReportResult("recapitulatif", "ÉTAT RÉCAPITULATIF DE TRÉSORERIE", cols,
                        [ReportGroup(rows=rows)], totals={"partenaire": "TOTAL", **tot},
                        period_label=period_label(f))
