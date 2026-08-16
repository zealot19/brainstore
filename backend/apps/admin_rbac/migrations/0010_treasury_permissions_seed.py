"""Data migration — seed des permissions Trésorerie."""
from django.db import migrations

PERMS = [
    ("treasury.register.view",     "Consulter les caisses",            "view"),
    ("treasury.register.manage",   "Gérer les caisses",                "update"),
    ("treasury.bank.view",         "Consulter les comptes bancaires",  "view"),
    ("treasury.bank.manage",       "Gérer les comptes bancaires",      "update"),
    ("treasury.session.view",      "Consulter les sessions",           "view"),
    ("treasury.session.manage",    "Ouvrir/clôturer les sessions",     "update"),
    ("treasury.transaction.view",  "Consulter les mouvements",         "view"),
    ("treasury.transaction.manage","Saisir des mouvements",            "update"),
    ("treasury.transfer.view",     "Consulter les transferts",         "view"),
    ("treasury.transfer.manage",   "Effectuer des transferts",         "update"),
    ("treasury.dashboard.view",    "Consulter le tableau de bord Trésorerie", "view"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0009_accounting_entry_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
