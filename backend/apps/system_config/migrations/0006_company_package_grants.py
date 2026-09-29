"""
Migration: per-company package grants + drop per-module flags from Plan.

Operation order is load-bearing:
  1. AddField  — add Company.pkg_transport, Company.pkg_accounting
  2. RunPython — back-fill grants from Plan.has_* (read BEFORE removal)
  3. RemoveField — drop the eight Plan.has_* flags
"""

from django.db import migrations, models


def backfill(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    for c in Company.objects.select_related("plan").all():
        p = c.plan
        if p is None:
            continue  # no plan -> keep defaults (all granted)
        # a package is granted iff any of its modules was enabled on the old plan
        c.pkg_transport = any([p.has_fleet, p.has_treasury, p.has_voyages,
                               p.has_colis, p.has_bagages, p.has_reporting])
        c.pkg_accounting = bool(p.has_accounting)
        c.save(update_fields=["pkg_transport", "pkg_accounting"])


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("system_config", "0005_rename_package_to_plan"),
    ]

    operations = [
        # 1. Add grant fields to Company (must come before RunPython and RemoveField)
        migrations.AddField(
            model_name="company",
            name="pkg_transport",
            field=models.BooleanField(default=True, verbose_name="package Transport"),
        ),
        migrations.AddField(
            model_name="company",
            name="pkg_accounting",
            field=models.BooleanField(default=True, verbose_name="package Comptabilité"),
        ),
        # 2. Back-fill from Plan.has_* (reads old flags before they are removed)
        migrations.RunPython(backfill, noop),
        # 3. Remove the eight per-module flags from Plan
        migrations.RemoveField(
            model_name="plan",
            name="has_administration",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_fleet",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_voyages",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_colis",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_bagages",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_treasury",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_accounting",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="has_reporting",
        ),
    ]
