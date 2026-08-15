from apps.accounting.models import Account
from apps.treasury.models import MovementAccountMapping

# catégorie de mouvement → code de compte de contrepartie OHADA
_DEFAULTS = {
    "ticket_sales":    "706",
    "parcel_shipping": "707",
    "charter":         "708",
    "other_income":    "758",
    "fuel":            "601",
    "maintenance":     "624",
    "salary_advance":  "425",
    "supplies":        "605",
    "rent":            "622",
    "other_expense":   "658",
}


def seed_treasury_mapping(company, created_by=None) -> int:
    accounts = {a.code: a for a in Account.objects.filter(company=company, is_deleted=False)}
    created = 0
    for category, code in _DEFAULTS.items():
        acc = accounts.get(code)
        if not acc:
            continue
        if MovementAccountMapping.objects.filter(company=company, category=category).exists():
            continue
        MovementAccountMapping.objects.create(company=company, category=category, account=acc, created_by=created_by)
        created += 1
    return created
