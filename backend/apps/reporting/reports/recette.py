from decimal import Decimal
from collections import defaultdict
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_NATURE = {
    Transaction.Category.TICKET_SALES: "Voyage",
    Transaction.Category.PARCEL_SHIPPING: "Colis",
    Transaction.Category.BAGGAGE: "Bagage",
    Transaction.Category.OTHER_INCOME: "Autre",
}


@register("recette", "Relevé des encaissements", ["date_from", "date_to"], "portrait")
def build(company, f):
    qs = (Transaction.objects.filter(company=company, is_deleted=False,
                                     transaction_type=Transaction.Type.INCOME,
                                     category__in=list(_NATURE))
          .select_related("cash_session__cash_register", "cash_session__opened_by",
                          "voyage_booking__outbound_trip__route", "voyage_booking__outbound_trip__vehicle",
                          "voyage_booking__outbound_trip__fare_class")
          .order_by("cash_session_id", "transaction_date"))
    if f["date_from"]: qs = qs.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(transaction_date__lte=f["date_to"])
    buckets, by_mode, grand = {}, defaultdict(Decimal), Decimal(0)
    for t in qs:
        sess = t.cash_session
        key = sess.id if sess else "—"
        if key not in buckets:
            cashier = ""
            if sess and getattr(sess, "opened_by", None):
                cashier = sess.opened_by.get_full_name()
            reg = getattr(sess, "cash_register", None)
            buckets[key] = {"label": f"{reg.name if reg else '—'} — {cashier}".strip(" —"),
                            "rows": [], "sub": Decimal(0)}
        trip = getattr(t.voyage_booking, "outbound_trip", None) if t.voyage_booking_id else None
        buckets[key]["rows"].append({
            "nature": _NATURE.get(t.category, ""),
            "dep": trip.scheduled_departure.strftime("%d/%m/%Y %H:%M") if trip else "",
            "trip": getattr(trip.route, "code", "") if trip and trip.route_id else "",
            "veh": getattr(getattr(trip, "vehicle", None), "license_plate", "") if trip else "",
            "cat": getattr(getattr(trip, "fare_class", None), "name", "") if trip else "",
            "total": t.amount})
        buckets[key]["sub"] += t.amount
        by_mode[t.get_payment_mode_display()] += t.amount
        grand += t.amount

    # Remboursements de la période (sortie) -> net.
    refunds = Transaction.objects.filter(company=company, is_deleted=False,
                                         transaction_type=Transaction.Type.EXPENSE,
                                         category=Transaction.Category.REFUND)
    if f["date_from"]: refunds = refunds.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   refunds = refunds.filter(transaction_date__lte=f["date_to"])
    remb = sum((t.amount for t in refunds), Decimal(0))

    cols = [ReportColumn("nature", "Nature"), ReportColumn("dep", "Départ"), ReportColumn("trip", "Trajet"),
            ReportColumn("veh", "Véhicule"), ReportColumn("cat", "Catégorie"),
            ReportColumn("total", "Total", "right", True)]
    groups = [ReportGroup(label=b["label"], rows=b["rows"], subtotal={"total": b["sub"]}) for b in buckets.values()]
    groups.append(ReportGroup(label="RÉPARTITION PAR MODE DE PAIEMENT",
                              rows=[{"nature": m, "total": v} for m, v in sorted(by_mode.items())]))
    groups.append(ReportGroup(label="SYNTHÈSE", rows=[
        {"nature": "Total encaissé", "total": grand},
        {"nature": "Remboursements", "total": -remb},
        {"nature": "Net", "total": grand - remb},
    ]))
    return ReportResult("recette", "RELEVÉ DES ENCAISSEMENTS", cols, groups,
                        totals={"total": grand}, period_label=period_label(f))
