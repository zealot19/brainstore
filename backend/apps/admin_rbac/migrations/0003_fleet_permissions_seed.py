"""Data migration — seed du jeu COMPLET des permissions Flotte.

Les permissions Flotte n'étaient créées par aucune migration (présentes uniquement en base de dev) :
une base fraîche / de test n'en avait aucune. On seed ici l'ensemble du module (existantes + nouvelles :
parking, fournisseurs, contrats, coûts récurrents, config) pour que le RBAC couvre toute la Flotte
de façon reproductible."""
from django.db import migrations

PERMS = [
    ("fleet.accident.manage",       "Gérer les accidents",                   "update"),
    ("fleet.accident.view",         "Consulter les accidents",               "view"),
    ("fleet.assignment.manage",     "Gérer les missions",                    "update"),
    ("fleet.assignment.view",       "Consulter les missions",                "view"),
    ("fleet.brand.manage",          "Gérer les marques",                     "update"),
    ("fleet.brand.view",            "Consulter les marques",                 "view"),
    ("fleet.config.manage",         "Gérer la configuration flotte",         "update"),
    ("fleet.config.view",           "Consulter la configuration flotte",     "view"),
    ("fleet.contract.manage",       "Gérer les contrats",                    "update"),
    ("fleet.contract.view",         "Consulter les contrats",                "view"),
    ("fleet.dashboard.view",        "Accéder au tableau de bord flotte",     "view"),
    ("fleet.document.manage",       "Gérer les documents véhicule",          "update"),
    ("fleet.document.view",         "Consulter les documents véhicule",      "view"),
    ("fleet.driver.manage",         "Gérer les conducteurs externes",        "update"),
    ("fleet.driver.view",           "Consulter les conducteurs externes",    "view"),
    ("fleet.fuel.manage",           "Enregistrer / gérer le carburant",      "create"),
    ("fleet.fuel.view",             "Consulter les pleins de carburant",     "view"),
    ("fleet.insurance.manage",      "Gérer les assurances",                  "update"),
    ("fleet.insurance.view",        "Consulter les assurances",              "view"),
    ("fleet.maintenance.manage",    "Gérer types et ordres de maintenance",  "update"),
    ("fleet.maintenance.view",      "Consulter la maintenance",              "view"),
    ("fleet.model.manage",          "Gérer les modèles",                     "update"),
    ("fleet.model.view",            "Consulter les modèles",                 "view"),
    ("fleet.parking.manage",        "Gérer les parkings",                    "update"),
    ("fleet.parking.view",          "Consulter les parkings",                "view"),
    ("fleet.recurring_cost.manage", "Gérer les coûts récurrents",            "update"),
    ("fleet.recurring_cost.view",   "Consulter les coûts récurrents",        "view"),
    ("fleet.supplier.manage",       "Gérer les fournisseurs",                "update"),
    ("fleet.supplier.view",         "Consulter les fournisseurs",            "view"),
    ("fleet.vehicle.create",        "Créer un véhicule",                     "create"),
    ("fleet.vehicle.delete",        "Supprimer un véhicule",                 "delete"),
    ("fleet.vehicle.update",        "Modifier un véhicule",                  "update"),
    ("fleet.vehicle.view",          "Consulter les véhicules",               "view"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(
        code="fleet", defaults={"name": "Flotte"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    # On ne retire que les codes ajoutés par cette tranche (les autres préexistaient).
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[
        "fleet.parking.view", "fleet.parking.manage",
        "fleet.supplier.view", "fleet.supplier.manage",
        "fleet.contract.view", "fleet.contract.manage",
        "fleet.recurring_cost.view", "fleet.recurring_cost.manage",
        "fleet.config.view", "fleet.config.manage",
    ]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0002_scig_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
