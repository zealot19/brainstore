"""Data migration — seed des permissions Comptabilité (module `accounting`, référentiel A1)."""
from django.db import migrations

PERMS = [
    ("accounting.account.view",      "Consulter le plan comptable",   "view"),
    ("accounting.account.manage",    "Gérer le plan comptable",       "update"),
    ("accounting.journal.view",      "Consulter les journaux",        "view"),
    ("accounting.journal.manage",    "Gérer les journaux",            "update"),
    ("accounting.fiscalyear.view",   "Consulter les exercices",       "view"),
    ("accounting.fiscalyear.manage", "Gérer les exercices",           "update"),
    ("accounting.period.view",       "Consulter les périodes",        "view"),
    ("accounting.period.manage",     "Gérer les périodes",            "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="accounting", defaults={"name": "Comptabilité"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0007_parcel_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
