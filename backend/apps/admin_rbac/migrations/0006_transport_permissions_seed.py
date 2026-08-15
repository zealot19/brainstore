"""Data migration — seed des permissions Config Voyages (module `transport`).
12 codes existants (absents des migrations) + transport.config.view/manage (nouveau, groupé)."""
from django.db import migrations

PERMS = [
    ("transport.category.manage",  "Gérer les catégories de véhicule",      "update"),
    ("transport.category.view",    "Consulter les catégories de véhicule",  "view"),
    ("transport.city.manage",      "Gérer les villes",                      "update"),
    ("transport.city.view",        "Consulter les villes",                  "view"),
    ("transport.config.manage",    "Gérer la configuration voyages",        "update"),
    ("transport.config.view",      "Consulter la configuration voyages",    "view"),
    ("transport.fare.manage",      "Gérer les tarifs",                      "update"),
    ("transport.fare.view",        "Consulter les tarifs",                  "view"),
    ("transport.fareclass.manage", "Gérer les classes de service",          "update"),
    ("transport.fareclass.view",   "Consulter les classes de service",      "view"),
    ("transport.route.manage",     "Gérer les itinéraires et arrêts",       "update"),
    ("transport.route.view",       "Consulter les itinéraires",             "view"),
    ("transport.terminal.manage",  "Gérer les terminaux",                   "update"),
    ("transport.terminal.view",    "Consulter les terminaux",               "view"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(
        code="transport", defaults={"name": "Transport / Config voyages"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=["transport.config.view", "transport.config.manage"]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0005_ticketing_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
