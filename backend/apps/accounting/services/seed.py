from datetime import date
from calendar import monthrange
from apps.accounting import chart
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod

_MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
           "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

# (code, nom, type, compte défaut)
_JOURNALS = [
    ("VTE",    "Journal des ventes",      "sale",     "706"),
    ("ACH",    "Journal des achats",      "purchase", "601"),
    ("OD",     "Opérations diverses",     "general",  None),
    ("PAIE",   "Journal de paie",         "general",  "421"),
    ("CAISSE", "Caisse (défaut)",         "cash",     "571"),
    ("BANQUE", "Banque (défaut)",         "bank",     "521"),
]


def seed_accounting(company, created_by=None):
    res = {"accounts": 0, "journals": 0, "fiscal_year": None, "periods": 0}

    # 1) Comptes (2 passes : création puis liaison parent)
    if not Account.objects.filter(company=company).exists():
        rows = chart.load_ohada_accounts()
        by_code = {}
        for r in rows:
            acc = Account.objects.create(
                company=company, code=r["code"], name=r["name"],
                account_type=r["type"], reconcile=bool(r.get("reconcile")),
                created_by=created_by)
            by_code[r["code"]] = acc
            res["accounts"] += 1
        for r in rows:
            p = r.get("parent")
            if p and p in by_code:
                acc = by_code[r["code"]]
                acc.parent = by_code[p]
                acc.save(update_fields=["parent"])

    accounts = {a.code: a for a in Account.objects.filter(company=company)}

    # 2) Journaux standard
    for code, name, jtype, def_code in _JOURNALS:
        if Journal.objects.filter(company=company, code=code).exists():
            continue
        Journal.objects.create(
            company=company, code=code, name=name, journal_type=jtype,
            default_account=accounts.get(def_code) if def_code else None,
            sequence_prefix=f"{code}/{{YYYY}}/", created_by=created_by)
        res["journals"] += 1

    # 3) Exercice courant + 12 périodes
    year = date.today().year
    fy_code = f"FY{year}"
    if not FiscalYear.objects.filter(company=company, code=fy_code).exists():
        fy = FiscalYear.objects.create(
            company=company, code=fy_code, name=f"Exercice {year}",
            date_start=date(year, 1, 1), date_end=date(year, 12, 31), created_by=created_by)
        res["fiscal_year"] = fy_code
        for m in range(1, 13):
            AccountingPeriod.objects.create(
                company=company, fiscal_year=fy, code=f"{year}-{m:02d}",
                name=f"{_MONTHS[m - 1]} {year}",
                date_start=date(year, m, 1),
                date_end=date(year, m, monthrange(year, m)[1]), created_by=created_by)
            res["periods"] += 1

    return res
