from decimal import Decimal
from django.db.models import Sum, Case, When, DecimalField
from apps.treasury.models import Transaction, CashRegister, BankAccount
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_D = DecimalField()


def _flows(qs, key):
    """{key_id: (entrees, sorties)} pour un queryset de transactions groupé par `key`."""
    out = {}
    for r in (qs.values(key)
              .annotate(e=Sum(Case(When(transaction_type=Transaction.Type.INCOME, then="amount"),
                                    default=Decimal(0), output_field=_D)),
                        s=Sum(Case(When(transaction_type=Transaction.Type.EXPENSE, then="amount"),
                                   default=Decimal(0), output_field=_D)))):
        out[r[key]] = (r["e"] or Decimal(0), r["s"] or Decimal(0))
    return out


def _opening(qs, key):
    """{key_id: solde} = Σ(entrées − sorties) avant la période."""
    return {k: e - s for k, (e, s) in _flows(qs, key).items()}


@register("tresorerie", "Relevé de trésorerie",
          ["date_from", "date_to", "periode", "register", "bank", "agency"],
          "portrait")
def build(company, f):
    base = Transaction.objects.filter(company=company, is_deleted=False)
    period = base
    if f["date_from"]: period = period.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   period = period.filter(transaction_date__lte=f["date_to"])
    before = base.filter(transaction_date__lt=f["date_from"]) if f["date_from"] else base.none()

    rows, te, ts = [], Decimal(0), Decimal(0)
    n = 0

    # Caisses (une banque n'est pas rattachée à une agence → exclues si agence filtrée).
    if not f["bank"]:
        regs = CashRegister.objects.filter(company=company, is_deleted=False)
        if f["register"]: regs = regs.filter(id=f["register"])
        if f["agency"]:   regs = regs.filter(agency_id=f["agency"])
        reg_flow = _flows(period, "cash_session__cash_register_id")
        reg_open = _opening(before, "cash_session__cash_register_id")
        for r in regs.order_by("name"):
            e, s = reg_flow.get(r.id, (Decimal(0), Decimal(0)))
            o = reg_open.get(r.id, Decimal(0))
            n += 1; te += e; ts += s
            rows.append({"n": n, "compte": r.name, "type": "Caisse",
                         "si": o, "entrees": e, "sorties": s, "sf": o + e - s})

    # Banques (pas de notion d'agence).
    if not f["register"] and not f["agency"]:
        banks = BankAccount.objects.filter(company=company, is_deleted=False)
        if f["bank"]: banks = banks.filter(id=f["bank"])
        bk_flow = _flows(period, "bank_account_id")
        bk_open = _opening(before, "bank_account_id")
        for b in banks.order_by("bank_name", "account_name"):
            e, s = bk_flow.get(b.id, (Decimal(0), Decimal(0)))
            o = bk_open.get(b.id, Decimal(0))
            n += 1; te += e; ts += s
            rows.append({"n": n, "compte": f"{b.bank_name} — {b.account_name}", "type": "Banque",
                         "si": o, "entrees": e, "sorties": s, "sf": o + e - s})

    cols = [ReportColumn("n", "No"), ReportColumn("compte", "Compte"), ReportColumn("type", "Type"),
            ReportColumn("si", "Solde initial", "right", True),
            ReportColumn("entrees", "Entrées", "right", True),
            ReportColumn("sorties", "Sorties", "right", True),
            ReportColumn("sf", "Solde final", "right", True)]
    return ReportResult("tresorerie", "RELEVÉ DE TRÉSORERIE", cols, [ReportGroup(rows=rows)],
                        totals={"entrees": te, "sorties": ts}, period_label=period_label(f))
