"""Data migration — seed des permissions Agences (module system)."""
from django.db import migrations

PERMS = [
    ("system.agency.view",   "Consulter les agences", "view"),
    ("system.agency.manage", "Gérer les agences",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="system", defaults={"name": "Configuration système"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0010_treasury_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
