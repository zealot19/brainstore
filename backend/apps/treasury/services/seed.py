from apps.accounting.models import Account
from apps.treasury.models import MovementAccountMapping

# catégorie de mouvement → code de compte de contrepartie OHADA
_DEFAULTS = {
    "ticket_sales":    "706",
    "parcel_shipping": "707",
    "baggage":         "706",
    "charter":         "708",
    "other_income":    "758",
    "fuel":            "601",
    "maintenance":     "624",
    "salary_advance":  "425",
    "supplies":        "605",
    "rent":            "622",
    "other_expense":   "658",
    "voyage_expense":  "658",
    "general_expense": "658",
    "refund":          "706",
}


def seed_treasury_mapping(company, created_by=None) -> int:
    accounts = {a.code: a for a in Account.objects.filter(company=company, is_deleted=False)}
    existing = set(MovementAccountMapping.objects.filter(company=company).values_list("category", flat=True))
    to_create = [
        MovementAccountMapping(company=company, category=category, account=accounts[code], created_by=created_by)
        for category, code in _DEFAULTS.items()
        if category not in existing and code in accounts
    ]
    if to_create:
        MovementAccountMapping.objects.bulk_create(to_create)
    return len(to_create)


_PAYMENT_METHODS = [
    ("cash",         "Espèces",            True,  "cash"),
    ("orange_money", "Orange Money",       True,  "mobile_money"),
    ("mobile_money", "Mobile Money (MTN)", True,  "mobile_money"),
    ("loyalty",      "Point fidélité",     False, "cash"),
    ("unpaid",       "Non payé",           False, "cash"),
]


def seed_payment_methods(company, created_by=None) -> int:
    from apps.treasury.models import PaymentMethod
    created = 0
    for code, name, requires, mode in _PAYMENT_METHODS:
        _, was_created = PaymentMethod.objects.get_or_create(
            company=company, code=code,
            defaults={"name": name, "requires_payment": requires, "mode": mode,
                      "is_system": True, "created_by": created_by})
        created += int(was_created)
    return created


_XAF_DENOMINATIONS = [
    # (value, kind)
    (10000, "banknote"), (5000, "banknote"), (2000, "banknote"), (1000, "banknote"),
    (500, "coin"), (100, "coin"), (50, "coin"), (25, "coin"), (10, "coin"), (5, "coin"), (1, "coin"),
]


def seed_operation_types(company, created_by=None) -> int:
    """Types d'opération par défaut (dépense + recette), éditables ensuite."""
    from apps.treasury.models import OperationType
    rows = [("CARBURANT", "Carburant", "depense", 1), ("SALAIRE", "Salaire / avance", "depense", 2),
            ("DIVERS_DEP", "Dépense diverse", "depense", 3), ("DIVERS_REC", "Recette diverse", "recette", 1),
            ("COMMISSION", "Commission", "recette", 2)]
    created = 0
    for code, label, sens, order in rows:
        _, was_created = OperationType.objects.get_or_create(
            company=company, code=code,
            defaults={"label": label, "sens": sens, "display_order": order, "created_by": created_by})
        created += int(was_created)
    return created


def seed_cash_value_types(company, created_by=None) -> int:
    """Types de valeur billetage par défaut (bon de caisse, monnaie électronique, autre)."""
    from apps.treasury.models import CashValueType
    rows = [("BON", "Bon de caisse", 1), ("ELEC", "Monnaie électronique", 2), ("AUTRE", "Autre", 3)]
    created = 0
    for code, label, order in rows:
        _, was_created = CashValueType.objects.get_or_create(
            company=company, code=code,
            defaults={"label": label, "display_order": order, "created_by": created_by})
        created += int(was_created)
    return created


def seed_denominations(company, created_by=None) -> int:
    """Coupures XAF par défaut pour une nouvelle institution (éditable ensuite)."""
    from apps.core.models import Currency
    from apps.treasury.models import CurrencyDenomination
    xaf, _ = Currency.objects.get_or_create(
        code="XAF", defaults={"name": "Franc CFA (CEMAC)", "symbol": "FCFA", "decimal_places": 0})
    created = 0
    for order, (value, kind) in enumerate(_XAF_DENOMINATIONS):
        _, was_created = CurrencyDenomination.objects.get_or_create(
            company=company, currency=xaf, value=value,
            defaults={"kind": kind, "display_order": order, "created_by": created_by})
        created += int(was_created)
    return created
