"""Data migration — seed des permissions Partenaires (module `treasury`)."""
from django.db import migrations

PERMS = [
    ("treasury.partner.view",   "Consulter les partenaires", "view"),
    ("treasury.partner.manage", "Gérer les partenaires",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0020_treasury_session_operate_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
