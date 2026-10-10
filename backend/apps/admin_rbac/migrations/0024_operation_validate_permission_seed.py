"""Data migration — seed de la permission `treasury.operation.validate` (M26).

UUID DÉTERMINISTE (uuid5 du code) pour rester cohérent avec 0023_deterministic_rbac_uuids
(sinon la synchro RBAC diverge entre instances)."""
import uuid
from django.db import migrations

RBAC_NS = uuid.UUID("5b3e0b6e-6c2a-5f8a-9e1d-2a7c9f0b1a55")
PERMS = [("treasury.operation.validate", "Valider les opérations de trésorerie", "update")]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            id=uuid.uuid5(RBAC_NS, code),
            defaults={"code": code, "name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0023_deterministic_rbac_uuids")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
