"""Data migration — permissions Dépenses voyage (module `voyage`)."""
from django.db import migrations

PERMS = [
    ("voyage.expense.view",   "Consulter les dépenses de voyage", "view"),
    ("voyage.expense.manage", "Gérer les dépenses de voyage",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="voyage", defaults={"name": "Voyages"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0011_agency_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
