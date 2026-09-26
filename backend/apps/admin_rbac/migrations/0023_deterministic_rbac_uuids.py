"""Re-clé AppModule + Permission vers des UUID DÉTERMINISTES (uuid5 du `code`).

Le catalogue RBAC (modules + permissions) est semé indépendamment par les
migrations de CHAQUE instance -> UUID aléatoires, donc divergents entre le master
et les agences. Résultat : la synchro RBAC casse (au bootstrap, `Permission.code`
est unique -> collision ; et `Permission.module_id` du master ne résout pas côté
agence). En dérivant l'UUID du `code` (uuid5, stable), toute instance converge
vers les MÊMES UUID : l'upsert par PK retrouve la ligne locale (plus de collision)
et la FK module est cohérente.

Idempotent : ignore les lignes déjà déterministes. Met à jour les FK référentes
(Permission.module, Menu.module, AppModule.parent, RolePermission.permission).
Les FK Django sont DEFERRABLE INITIALLY DEFERRED -> la ré-affectation de PK dans
une transaction est vérifiée seulement au commit (état cohérent à ce moment).
"""
import uuid
from django.db import migrations

# Namespace fixe et stable — NE JAMAIS CHANGER (sinon les UUID divergeraient à nouveau).
RBAC_NS = uuid.UUID("5b3e0b6e-6c2a-5f8a-9e1d-2a7c9f0b1a55")


def _rekey(apps, schema_editor):
    AppModule      = apps.get_model("admin_rbac", "AppModule")
    Permission     = apps.get_model("admin_rbac", "Permission")
    RolePermission = apps.get_model("admin_rbac", "RolePermission")
    Menu           = apps.get_model("admin_rbac", "Menu")

    # ── Modules : PK -> uuid5(code) ──
    for m in list(AppModule.objects.all()):
        new = uuid.uuid5(RBAC_NS, m.code)
        if m.pk == new:
            continue
        old = m.pk
        AppModule.objects.filter(parent_id=old).update(parent_id=new)   # arborescence
        Permission.objects.filter(module_id=old).update(module_id=new)
        Menu.objects.filter(module_id=old).update(module_id=new)
        AppModule.objects.filter(pk=old).update(id=new)

    # ── Permissions : PK -> uuid5(code) ──
    for p in list(Permission.objects.all()):
        new = uuid.uuid5(RBAC_NS, p.code)
        if p.pk == new:
            continue
        old = p.pk
        RolePermission.objects.filter(permission_id=old).update(permission_id=new)
        Permission.objects.filter(pk=old).update(id=new)


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0022_guichetier_no_ticket_view")]
    operations = [migrations.RunPython(_rekey, migrations.RunPython.noop)]
