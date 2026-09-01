from django.db import migrations

DEFAULTS = [
    ("cash",         "Espèces",            True,  "cash"),
    ("orange_money", "Orange Money",       True,  "mobile_money"),
    ("mobile_money", "Mobile Money (MTN)", True,  "mobile_money"),
    ("loyalty",      "Point fidélité",     False, "cash"),
    ("unpaid",       "Non payé",           False, "cash"),
]


def seed(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    PaymentMethod = apps.get_model("treasury", "PaymentMethod")
    for company in Company.objects.all():
        for code, name, requires, mode in DEFAULTS:
            PaymentMethod.objects.get_or_create(
                company=company, code=code,
                defaults={"name": name, "requires_payment": requires, "mode": mode, "is_system": True})


def unseed(apps, schema_editor):
    PaymentMethod = apps.get_model("treasury", "PaymentMethod")
    PaymentMethod.objects.filter(is_system=True, code__in=[d[0] for d in DEFAULTS]).delete()


class Migration(migrations.Migration):
    dependencies = [("treasury", "0011_paymentmethod")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
