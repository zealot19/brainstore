"""Data migration — permission « Imprimer un duplicata de billet »."""
from django.db import migrations

PERMS = [
    ("ticketing.ticket.duplicata", "Imprimer un duplicata de billet", "export"),
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
    dependencies = [("admin_rbac", "0018_profilerole_created_at_profilerole_created_by_and_more")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
