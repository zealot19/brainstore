from apps.voyages_config.models import ExpenseType

# (code, nom, compte de charge OHADA classe 6)
_DEFAULTS = [
    ("CARBURANT", "Carburant", "604"),
    ("PEAGE",     "Péage",     "658"),
    ("RATION_CH", "Ration chauffeur", "637"),
    ("RATION_CV", "Ration convoyeur", "637"),
    ("AUTRES",    "Autres",    "658"),
]


def seed_expense_types(company, created_by=None) -> int:
    created = 0
    for code, name, account_code in _DEFAULTS:
        if ExpenseType.objects.filter(company=company, code=code).exists():
            continue
        ExpenseType.objects.create(company=company, code=code, name=name,
                                   account_code=account_code, created_by=created_by)
        created += 1
    return created
