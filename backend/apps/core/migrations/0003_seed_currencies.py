"""Data migration — seed les devises de base (la table Currency etait vide,
ce qui faisait echouer la creation d'entreprise : 'Object with code=X does not exist')."""
from django.db import migrations

CURRENCIES = [
    ("XOF", "Franc CFA BCEAO", "FCFA", 0),
    ("XAF", "Franc CFA BEAC", "FCFA", 0),
    ("EUR", "Euro", "€", 2),
    ("USD", "Dollar americain", "$", 2),
    ("NGN", "Naira", "₦", 2),
    ("GHS", "Cedi ghaneen", "₵", 2),
    ("GNF", "Franc guineen", "FG", 0),
    ("GBP", "Livre sterling", "£", 2),
]


def seed(apps, schema_editor):
    Currency = apps.get_model("core", "Currency")
    for code, name, symbol, dp in CURRENCIES:
        Currency.objects.update_or_create(
            code=code, defaults={"name": name, "symbol": symbol, "decimal_places": dp})


def unseed(apps, schema_editor):
    Currency = apps.get_model("core", "Currency")
    Currency.objects.filter(code__in=[c[0] for c in CURRENCIES]).delete()


class Migration(migrations.Migration):
    dependencies = [("core", "0002_auditlog")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
