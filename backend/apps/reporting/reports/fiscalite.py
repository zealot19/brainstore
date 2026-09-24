from decimal import Decimal
from django.db.models import Sum
from apps.accounting.models import JournalEntry, JournalEntryLine
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("fiscalite", "Fiscalité (comptes OHADA)",
          ["date_from", "date_to", "periode", "year"], "portrait")
def build(company, f):
    lines = JournalEntryLine.objects.filter(
        entry__company=company, is_deleted=False, entry__is_deleted=False,
        entry__state=JournalEntry.State.POSTED)
    if f["date_from"]: lines = lines.filter(entry__date__gte=f["date_from"])
    if f["date_to"]:   lines = lines.filter(entry__date__lte=f["date_to"])
    if f["year"]:      lines = lines.filter(entry__date__year=f["year"])

    agg = (lines.values("account__code", "account__name")
           .annotate(d=Sum("debit"), c=Sum("credit"))
           .order_by("account__code"))

    rows, td, tc = [], Decimal(0), Decimal(0)
    for i, r in enumerate(agg, 1):
        d = r["d"] or Decimal(0)
        c = r["c"] or Decimal(0)
        td += d; tc += c
        rows.append({"n": i, "code": r["account__code"], "libelle": r["account__name"],
                     "debit": d, "credit": c, "solde": d - c})

    cols = [ReportColumn("n", "No"), ReportColumn("code", "Compte"), ReportColumn("libelle", "Libellé"),
            ReportColumn("debit", "Débit", "right", True),
            ReportColumn("credit", "Crédit", "right", True),
            ReportColumn("solde", "Solde", "right", True)]
    return ReportResult("fiscalite", "FISCALITÉ — BALANCE DES COMPTES (OHADA)", cols,
                        [ReportGroup(rows=rows)],
                        totals={"debit": td, "credit": tc, "solde": td - tc},
                        period_label=period_label(f))
