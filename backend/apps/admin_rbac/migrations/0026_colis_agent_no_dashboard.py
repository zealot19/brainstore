"""Data migration — l'agent colis ne doit plus voir le tableau de bord.

Retire `voyage.dashboard.view` et `ticketing.dashboard.view` des rôles
« Agent colis & bagages » déjà semés (le top-up de seed_default_roles est additif
et ne retire jamais une permission : il faut donc un nettoyage explicite ici)."""
from django.db import migrations

ROLE_NAME = "Agent colis & bagages"
DROP = ["voyage.dashboard.view", "ticketing.dashboard.view"]


def drop_dashboard(apps, schema_editor):
    Role = apps.get_model("admin_rbac", "Role")
    RolePermission = apps.get_model("admin_rbac", "RolePermission")
    for role in Role.objects.filter(name=ROLE_NAME):
        RolePermission.objects.filter(
            role=role, permission__code__in=DROP).delete()


def noop(apps, schema_editor):
    # Retrait volontaire : on ne ré-accorde pas en arrière.
    pass


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0025_crud_permissions_split_seed")]
    operations = [migrations.RunPython(drop_dashboard, reverse_code=noop)]
