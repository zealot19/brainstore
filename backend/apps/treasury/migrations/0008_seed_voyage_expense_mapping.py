from django.db import migrations


def seed_voyage_expense_mapping(apps, schema_editor):
    """Contrepartie de repli 'voyage_expense' → 658 pour les sociétés existantes.
    (Le compte réel est fourni par transaction.counterpart_account ; ceci n'est qu'un repli.)"""
    Company = apps.get_model("system_config", "Company")
    Account = apps.get_model("accounting", "Account")
    Mapping = apps.get_model("treasury", "MovementAccountMapping")

    for company in Company.objects.filter(is_deleted=False):
        if Mapping.objects.filter(company=company, category="voyage_expense").exists():
            continue
        account = Account.objects.filter(company=company, code="658", is_deleted=False).first()
        if not account:
            continue
        Mapping.objects.create(company=company, category="voyage_expense", account=account)


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("treasury", "0007_transaction_counterpart_account_and_more"),
        ("system_config", "0001_initial"),
        ("accounting", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_voyage_expense_mapping, noop),
    ]
