from decimal import Decimal
from django.db.models import Sum, Case, When, DecimalField
from django.db.models.functions import TruncDay, TruncWeek, TruncMonth
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label
from apps.reporting.filter_apply import apply_filters

_TRUNC = {"day": TruncDay, "week": TruncWeek, "month": TruncMonth}
_FMT = {
    "day":   lambda d: d.strftime("%d/%m/%Y"),
    "week":  lambda d: f"S{d.isocalendar()[1]:02d} {d.year}",
    "month": lambda d: d.strftime("%m/%Y"),
}


@register("cashflow", "Flux de trésorerie",
          ["date_from", "date_to", "periode", "bucket", "register", "bank", "agency"],
          "portrait")
def build(company, f):
    bucket = f["bucket"] if f["bucket"] in _TRUNC else "month"
    qs = Transaction.objects.filter(company=company, is_deleted=False)
    if f["date_from"]: qs = qs.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(transaction_date__lte=f["date_to"])
    qs = apply_filters(qs, f, {
        "register": "cash_session__cash_register_id",
        "bank": "bank_account_id",
        "agency": "agency_id"})

    agg = (qs.annotate(b=_TRUNC[bucket]("transaction_date"))
           .values("b")
           .annotate(entrees=Sum(Case(When(transaction_type=Transaction.Type.INCOME, then="amount"),
                                       default=Decimal(0), output_field=DecimalField())),
                     sorties=Sum(Case(When(transaction_type=Transaction.Type.EXPENSE, then="amount"),
                                       default=Decimal(0), output_field=DecimalField())))
           .order_by("b"))

    rows, cumul, tot_e, tot_s = [], Decimal(0), Decimal(0), Decimal(0)
    for i, r in enumerate(agg, 1):
        e = r["entrees"] or Decimal(0)
        s = r["sorties"] or Decimal(0)
        net = e - s
        cumul += net
        tot_e += e; tot_s += s
        rows.append({"n": i, "periode": _FMT[bucket](r["b"]) if r["b"] else "—",
                     "entrees": e, "sorties": s, "net": net, "cumul": cumul})

    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"),
            ReportColumn("entrees", "Entrées", "right", True),
            ReportColumn("sorties", "Sorties", "right", True),
            ReportColumn("net", "Flux net", "right", True),
            ReportColumn("cumul", "Cumul", "right")]
    return ReportResult("cashflow", "FLUX DE TRÉSORERIE", cols, [ReportGroup(rows=rows)],
                        totals={"entrees": tot_e, "sorties": tot_s, "net": tot_e - tot_s},
                        period_label=period_label(f))
