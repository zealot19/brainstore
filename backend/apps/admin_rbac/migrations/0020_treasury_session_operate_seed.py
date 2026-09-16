"""Data migration — permission « opérer sa session de caisse » (guichetier).

Le guichetier assigné à une session ne la gère pas (ouverture/clôture réservées
au gestionnaire via treasury.session.manage) : il fait seulement le billetage de
fin et clôture SA session. Cette permission dédiée permet de désigner un
guichetier ; le personnel de guichet (vente billets/colis/bagages) est de toute
façon déjà considéré comme guichetier assignable.
"""
from django.db import migrations

CODE = "treasury.session.operate"
NAME = "Opérer sa session de caisse (billetage)"


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    Permission.objects.update_or_create(
        code=CODE, defaults={"name": NAME, "module": module, "category": "update"})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code=CODE).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0019_ticket_duplicata_permission_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
