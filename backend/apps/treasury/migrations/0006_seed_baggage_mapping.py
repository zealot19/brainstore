from django.db import migrations


def seed_baggage_mapping(apps, schema_editor):
    """Backfill la contrepartie 'baggage' → 706 pour les sociétés existantes.
    Les nouvelles sociétés l'obtiennent via seed_treasury_mapping au bootstrap."""
    Company = apps.get_model("system_config", "Company")
    Account = apps.get_model("accounting", "Account")
    Mapping = apps.get_model("treasury", "MovementAccountMapping")

    for company in Company.objects.filter(is_deleted=False):
        if Mapping.objects.filter(company=company, category="baggage").exists():
            continue
        account = Account.objects.filter(company=company, code="706", is_deleted=False).first()
        if not account:
            continue
        Mapping.objects.create(company=company, category="baggage", account=account)


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("treasury", "0005_transaction_voyages_baggage_and_more"),
        ("system_config", "0001_initial"),
        ("accounting", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_baggage_mapping, noop),
    ]
