from django.db import migrations

_XAF = [
    (10000, "banknote"), (5000, "banknote"), (2000, "banknote"), (1000, "banknote"),
    (500, "coin"), (100, "coin"), (50, "coin"), (25, "coin"), (10, "coin"), (5, "coin"), (1, "coin"),
]


def seed(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    Currency = apps.get_model("core", "Currency")
    Denomination = apps.get_model("treasury", "CurrencyDenomination")
    xaf, _ = Currency.objects.get_or_create(
        code="XAF", defaults={"name": "Franc CFA (CEMAC)", "symbol": "FCFA", "decimal_places": 0})
    for company in Company.objects.all():
        for order, (value, kind) in enumerate(_XAF):
            Denomination.objects.get_or_create(
                company=company, currency=xaf, value=value,
                defaults={"kind": kind, "display_order": order})


def unseed(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [
        ("treasury", "0017_cashcount_currencydenomination_cashcountitem"),
        ("system_config", "0001_initial"),
        ("core", "0001_initial"),
    ]
    operations = [migrations.RunPython(seed, unseed)]
