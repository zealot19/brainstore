from django.db import migrations


def seed_refund_mapping(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    Account = apps.get_model("accounting", "Account")
    Mapping = apps.get_model("treasury", "MovementAccountMapping")
    for company in Company.objects.filter(is_deleted=False):
        if Mapping.objects.filter(company=company, category="refund").exists():
            continue
        account = Account.objects.filter(company=company, code="706", is_deleted=False).first()
        if not account:
            continue
        Mapping.objects.create(company=company, category="refund", account=account)


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("treasury", "0013_alter_transaction_category")]
    operations = [migrations.RunPython(seed_refund_mapping, noop)]
