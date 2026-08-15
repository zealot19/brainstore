"""Data migration — seed des permissions Comptabilité A2 (écritures + partenaires)."""
from django.db import migrations

PERMS = [
    ("accounting.entry.view",     "Consulter les écritures",   "view"),
    ("accounting.entry.create",   "Saisir des écritures",      "create"),
    ("accounting.entry.post",     "Valider des écritures",     "update"),
    ("accounting.entry.cancel",   "Annuler des écritures",     "update"),
    ("accounting.partner.view",   "Consulter les partenaires", "view"),
    ("accounting.partner.manage", "Gérer les partenaires",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="accounting", defaults={"name": "Comptabilité"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0008_accounting_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
