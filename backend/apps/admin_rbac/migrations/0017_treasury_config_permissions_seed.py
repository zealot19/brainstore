"""Data migration — permissions Config Trésorerie (taux de remboursement) + octroi rôles caisse."""
from django.db import migrations

PERMS = [
    ("treasury.config.view",   "Consulter la config Trésorerie", "view"),
    ("treasury.config.manage", "Gérer la config Trésorerie",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    Role = apps.get_model("admin_rbac", "Role")
    RolePermission = apps.get_model("admin_rbac", "RolePermission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    created = {}
    for code, name, category in PERMS:
        perm, _ = Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})
        created[code] = perm
    reg = Permission.objects.filter(code="treasury.register.view").first()
    if reg:
        for role in Role.objects.filter(permissions=reg):
            for perm in created.values():
                RolePermission.objects.get_or_create(role=role, permission=perm)


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0016_payment_method_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
