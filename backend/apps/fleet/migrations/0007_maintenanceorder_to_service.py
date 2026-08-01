import django.db.models.deletion
from django.db import migrations, models


def map_types(apps, schema_editor):
    Service = apps.get_model("fleet", "Service")
    InterventionType = apps.get_model("fleet", "InterventionType")
    for svc in Service.objects.all():
        mt = svc.maintenance_type
        it, _ = InterventionType.objects.get_or_create(
            name=mt.name, company_id=mt.company_id,
            defaults={"category": "SERVICE", "interval_km": mt.interval_km,
                      "interval_days": mt.interval_days, "is_active": True},
        )
        svc.intervention_type = it
        if svc.provider:
            svc.notes = (svc.notes + "\n" if svc.notes else "") + f"Prestataire : {svc.provider}"
        svc.save(update_fields=["intervention_type", "notes"])


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("fleet", "0006_interventiontype_intervals"),
    ]

    operations = [
        migrations.RenameModel("MaintenanceOrder", "Service"),
        migrations.AlterModelOptions(
            name="service",
            options={"ordering": ["-planned_date"],
                     "verbose_name": "service / intervention",
                     "verbose_name_plural": "services / interventions"},
        ),
        migrations.AlterField(
            model_name="service", name="vehicle",
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                    related_name="services", to="fleet.vehicle",
                                    verbose_name="véhicule"),
        ),
        migrations.AlterField(
            model_name="service", name="cost",
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=18,
                                      null=True, verbose_name="coût"),
        ),
        migrations.AddField(
            model_name="service", name="description",
            field=models.CharField(blank=True, default="", max_length=500,
                                   verbose_name="description"),
        ),
        migrations.AddField(
            model_name="service", name="currency",
            field=models.CharField(default="XAF", max_length=3, verbose_name="devise"),
        ),
        migrations.AddField(
            model_name="service", name="intervention_type",
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name="services", to="fleet.interventiontype",
                                    verbose_name="type d'intervention"),
        ),
        migrations.AddField(
            model_name="service", name="supplier",
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name="services", to="fleet.supplier",
                                    verbose_name="fournisseur / garage"),
        ),
        migrations.AddField(
            model_name="service", name="driver",
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name="services", to="fleet.externaldriver",
                                    verbose_name="conducteur"),
        ),
        migrations.RunPython(map_types, noop),
        migrations.AlterField(
            model_name="service", name="intervention_type",
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                                    related_name="services", to="fleet.interventiontype",
                                    verbose_name="type d'intervention"),
        ),
        migrations.RemoveField(model_name="service", name="maintenance_type"),
        migrations.RemoveField(model_name="service", name="provider"),
    ]
