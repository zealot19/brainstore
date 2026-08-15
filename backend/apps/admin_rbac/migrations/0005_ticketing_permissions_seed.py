"""Data migration — seed des permissions Billetterie/Réservations (module `ticketing`).
Absentes des migrations (présentes seulement en dev) → base fraîche/test vide."""
from django.db import migrations

PERMS = [
    ("ticketing.booking.board",  "Embarquer un passager",                 "update"),
    ("ticketing.booking.cancel", "Annuler une réservation",               "admin"),
    ("ticketing.booking.confirm","Confirmer une réservation",             "update"),
    ("ticketing.booking.create", "Créer une réservation",                 "create"),
    ("ticketing.booking.noshow", "Marquer une absence (no-show)",         "update"),
    ("ticketing.booking.update", "Modifier une réservation",              "update"),
    ("ticketing.booking.view",   "Consulter les réservations",            "view"),
    ("ticketing.customer.manage","Gérer les clients",                     "update"),
    ("ticketing.customer.view",  "Consulter les clients",                 "view"),
    ("ticketing.dashboard.view", "Accéder au tableau de bord billetterie","view"),
    ("ticketing.luggage.manage", "Gérer les bagages",                     "update"),
    ("ticketing.luggage.view",   "Consulter les bagages",                 "view"),
    ("ticketing.scan",           "Scanner un billet pour embarquement",   "update"),
    ("ticketing.ticket.print",   "Imprimer un billet (PDF)",              "export"),
    ("ticketing.ticket.view",    "Consulter les billets",                 "view"),
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
    dependencies = [("admin_rbac", "0004_voyage_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
