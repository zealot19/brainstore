from django.db import migrations


def seed(apps, schema_editor):
    CashRegister = apps.get_model("treasury", "CashRegister")
    for reg in CashRegister.objects.exclude(responsible__isnull=True):
        reg.managers.add(reg.responsible_id)


def unseed(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("treasury", "0021_cashregister_managers_transfer_cash_session")]
    operations = [migrations.RunPython(seed, unseed)]
