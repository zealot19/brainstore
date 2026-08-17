from decimal import Decimal
from django.db.models import Sum
from django.db.models.functions import ExtractMonth
from django.utils import timezone
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register

_MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]


@register("ca", "Production par agence et par mois", ["year"], "landscape")
def build(company, f):
    year = f.get("year") or timezone.now().year
    agg = (Transaction.objects.filter(company=company, is_deleted=False,
                                      transaction_type=Transaction.Type.INCOME,
                                      category=Transaction.Category.TICKET_SALES,
                                      transaction_date__year=year)
           .annotate(month=ExtractMonth("transaction_date"))
           .values("cash_session__cash_register__agency__name", "month")
           .annotate(total=Sum("amount")))
    matrix = {}
    for r in agg:
        name = r["cash_session__cash_register__agency__name"] or "— Sans agence —"
        matrix.setdefault(name, {}).setdefault(r["month"], Decimal(0))
        matrix[name][r["month"]] += r["total"] or Decimal(0)
    cols = [ReportColumn("n", "No"), ReportColumn("agence", "Centre d'activité")]
    cols += [ReportColumn(f"m{m}", _MONTHS[m - 1], "right", True) for m in range(1, 13)]
    cols += [ReportColumn("tot", "Total", "right", True)]
    rows, col_tot = [], {f"m{m}": Decimal(0) for m in range(1, 13)}
    grand = Decimal(0)
    for i, (name, months) in enumerate(sorted(matrix.items()), 1):
        row = {"n": i, "agence": name}
        line = Decimal(0)
        for m in range(1, 13):
            v = months.get(m, Decimal(0))
            row[f"m{m}"] = v
            col_tot[f"m{m}"] += v
            line += v
        row["tot"] = line
        grand += line
        rows.append(row)
    totals = {"agence": "TOTAL", **col_tot, "tot": grand}
    return ReportResult("ca", f"PRODUCTION PAR AGENCE ET PAR MOIS — {year}", cols,
                        [ReportGroup(rows=rows)], totals=totals, period_label=f"Année : {year}")
