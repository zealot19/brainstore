from decimal import Decimal
from apps.voyages_trips.models import TripExpense
from apps.treasury.models import GeneralExpense, Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("depense", "Liste des dépenses",
          ["date_from", "date_to", "periode", "agency", "register", "vehicle"], "landscape")
def build(company, f):
    items = []  # (date, row)

    vqs = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
           .select_related("expense_type", "trip", "trip__vehicle", "cash_session__cash_register"))
    if f["date_from"]: vqs = vqs.filter(date__gte=f["date_from"])
    if f["date_to"]:   vqs = vqs.filter(date__lte=f["date_to"])
    if f["vehicle"]:   vqs = vqs.filter(trip__vehicle_id=f["vehicle"])
    if f["register"]:  vqs = vqs.filter(cash_session__cash_register_id=f["register"])
    if f["agency"]:    vqs = vqs.filter(cash_session__cash_register__agency_id=f["agency"])
    for e in vqs:
        reg = getattr(e.cash_session, "cash_register", None)
        items.append((e.date, {"nature": "Voyage", "trip": e.trip.number,
                               "veh": getattr(e.trip.vehicle, "license_plate", "—"),
                               "cat": e.expense_type.name, "date": e.date.strftime("%d/%m/%Y"),
                               "desc": e.description, "tres": reg.name if reg else "—", "montant": e.amount}))

    # Générale + Remboursement : sans véhicule -> exclues si un véhicule est filtré.
    if not f["vehicle"]:
        gqs = (GeneralExpense.objects.filter(company=company, is_deleted=False, status="paid")
               .select_related("expense_type", "cash_session__cash_register"))
        if f["date_from"]: gqs = gqs.filter(expense_date__gte=f["date_from"])
        if f["date_to"]:   gqs = gqs.filter(expense_date__lte=f["date_to"])
        if f["register"]:  gqs = gqs.filter(cash_session__cash_register_id=f["register"])
        if f["agency"]:    gqs = gqs.filter(cash_session__cash_register__agency_id=f["agency"])
        for e in gqs:
            reg = getattr(e.cash_session, "cash_register", None)
            items.append((e.expense_date, {"nature": "Générale", "trip": "—", "veh": "—",
                                           "cat": e.expense_type.name, "date": e.expense_date.strftime("%d/%m/%Y"),
                                           "desc": e.label, "tres": reg.name if reg else "—", "montant": e.amount}))

        rqs = (Transaction.objects.filter(company=company, is_deleted=False,
                                          transaction_type=Transaction.Type.EXPENSE,
                                          category=Transaction.Category.REFUND)
               .select_related("cash_session__cash_register"))
        if f["date_from"]: rqs = rqs.filter(transaction_date__gte=f["date_from"])
        if f["date_to"]:   rqs = rqs.filter(transaction_date__lte=f["date_to"])
        if f["register"]:  rqs = rqs.filter(cash_session__cash_register_id=f["register"])
        if f["agency"]:    rqs = rqs.filter(cash_session__cash_register__agency_id=f["agency"])
        for t in rqs:
            reg = getattr(t.cash_session, "cash_register", None)
            items.append((t.transaction_date, {"nature": "Remboursement", "trip": "—", "veh": "—",
                                               "cat": "Remboursement", "date": t.transaction_date.strftime("%d/%m/%Y"),
                                               "desc": t.description, "tres": reg.name if reg else "—", "montant": t.amount}))

    items.sort(key=lambda x: x[0])
    rows, total = [], Decimal(0)
    for i, (_, r) in enumerate(items, 1):
        r["n"] = i
        rows.append(r)
        total += r["montant"]
    cols = [ReportColumn("n", "No"), ReportColumn("nature", "Nature"), ReportColumn("trip", "Voyage"),
            ReportColumn("veh", "Véhicule"), ReportColumn("cat", "Catégorie"), ReportColumn("date", "Date"),
            ReportColumn("desc", "Description"), ReportColumn("tres", "Trésorerie"),
            ReportColumn("montant", "Montant", "right", True)]
    return ReportResult("depense", "LISTE DES DÉPENSES", cols, [ReportGroup(rows=rows)],
                        totals={"montant": total}, period_label=period_label(f))
