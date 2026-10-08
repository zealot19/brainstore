from django.db import migrations, models


def backfill_code(apps, schema_editor):
    Vehicle = apps.get_model("fleet", "Vehicle")
    for v in Vehicle.objects.all():
        if not v.code:
            v.code = v.license_plate or str(v.id)
            v.save(update_fields=["code"])


class Migration(migrations.Migration):

    dependencies = [
        ("fleet", "0019_remove_vehicle_partner_share_percent_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="vehicle",
            name="code",
            field=models.CharField(default="", max_length=30, verbose_name="code véhicule"),
        ),
        migrations.RunPython(backfill_code, migrations.RunPython.noop),
        migrations.AlterModelOptions(
            name="vehicle",
            options={"ordering": ["code"], "verbose_name": "véhicule",
                     "verbose_name_plural": "véhicules"},
        ),
        migrations.AlterUniqueTogether(
            name="vehicle",
            unique_together={("company", "license_plate"), ("company", "code")},
        ),
    ]
