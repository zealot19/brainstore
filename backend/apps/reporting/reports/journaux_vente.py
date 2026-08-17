from decimal import Decimal
from apps.treasury.models import CashSession
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("journaux-vente", "Journaux de vente", ["date_from", "date_to", "register"], "portrait")
def build(company, f):
    qs = (CashSession.objects.filter(company=company, is_deleted=False, status=CashSession.Status.CLOSED)
          .select_related("cash_register").order_by("opened_at"))
    if f["date_from"]: qs = qs.filter(opened_at__date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(opened_at__date__lte=f["date_to"])
    if f["register"]:  qs = qs.filter(cash_register_id=f["register"])
    rows, exc, man = [], Decimal(0), Decimal(0)
    for i, s in enumerate(qs, 1):
        diff = s.difference or Decimal(0)
        e = diff if diff > 0 else Decimal(0)
        m = -diff if diff < 0 else Decimal(0)
        exc += e; man += m
        rows.append({"n": i, "periode": s.opened_at.strftime("%d/%m/%Y"), "caisse": s.cash_register.name,
                     "si": s.opening_balance, "sf": s.expected_closing, "sr": s.closing_balance,
                     "exc": e, "man": m})
    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"), ReportColumn("caisse", "Caisse"),
            ReportColumn("si", "Solde initial", "right", True), ReportColumn("sf", "Solde final", "right", True),
            ReportColumn("sr", "Solde réel", "right", True), ReportColumn("exc", "Excédent", "right", True),
            ReportColumn("man", "Manquant", "right", True)]
    return ReportResult("journaux-vente", "JOURNAUX DE VENTE", cols, [ReportGroup(rows=rows)],
                        totals={"exc": exc, "man": man}, period_label=period_label(f))
