"""Data migration — retire « voir le détail d'un billet » (ticketing.ticket.view)
des rôles « Guichetier » existants (contrôle anti-fraude : le guichetier vend et
imprime à la vente, mais ne consulte ni ne réimprime les billets).

Ne touche que les rôles nommés exactement « Guichetier » (rôle par défaut) ; les
rôles personnalisés portant un autre nom ne sont pas modifiés.
"""
from django.db import migrations


def unassign(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    RolePermission = apps.get_model("admin_rbac", "RolePermission")
    perm = Permission.objects.filter(code="ticketing.ticket.view").first()
    if not perm:
        return
    RolePermission.objects.filter(role__name="Guichetier", permission=perm).delete()


def noop(apps, schema_editor):
    # Réversibilité : ne pas re-attribuer automatiquement (le top-up des rôles par
    # défaut est de toute façon additif et ne remettra plus ticket.view au guichetier).
    pass


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0021_partner_permissions_seed")]
    operations = [migrations.RunPython(unassign, reverse_code=noop)]
