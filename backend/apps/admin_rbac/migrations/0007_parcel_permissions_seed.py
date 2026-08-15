"""Data migration — seed des permissions Colis (module `ticketing`).
Les bagages (ticketing.luggage.*) sont déjà seedés (0005) ; les colis n'avaient aucun code."""
from django.db import migrations

PERMS = [
    ("ticketing.parcel.view",   "Consulter les colis", "view"),
    ("ticketing.parcel.manage", "Gérer les colis",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="ticketing", defaults={"name": "Billetterie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0006_transport_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
