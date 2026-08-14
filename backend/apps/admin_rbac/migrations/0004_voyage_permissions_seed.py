"""Data migration — seed des permissions Voyages (module `voyage`).

Comme pour la Flotte, ces permissions n'étaient créées par aucune migration (présentes seulement
en base de dev) : une base fraîche / de test n'en avait aucune. On les seed ici pour rendre le RBAC
du module Voyages reproductible."""
from django.db import migrations

PERMS = [
    ("voyage.crew.manage",    "Gérer l'équipage",                    "update"),
    ("voyage.crew.view",      "Consulter l'équipage",                "view"),
    ("voyage.dashboard.view", "Accéder au tableau de bord voyages",  "view"),
    ("voyage.trip.arrive",    "Marquer un voyage comme arrivé",      "update"),
    ("voyage.trip.board",     "Passer un voyage en embarquement",    "update"),
    ("voyage.trip.cancel",    "Annuler un voyage",                   "admin"),
    ("voyage.trip.create",    "Créer un voyage",                     "create"),
    ("voyage.trip.delete",    "Supprimer un voyage",                 "delete"),
    ("voyage.trip.depart",    "Marquer un voyage comme parti",       "update"),
    ("voyage.trip.update",    "Modifier un voyage",                  "update"),
    ("voyage.trip.view",      "Consulter les voyages",               "view"),
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
    dependencies = [("admin_rbac", "0003_fleet_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
