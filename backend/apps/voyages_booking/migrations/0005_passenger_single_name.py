from django.db import migrations, models


def combine(apps, schema_editor):
    Passenger = apps.get_model("voyages_booking", "Passenger")
    for p in Passenger.objects.all():
        p.name = f"{p.first_name} {p.last_name}".strip()
        p.save(update_fields=["name"])


def split(apps, schema_editor):
    Passenger = apps.get_model("voyages_booking", "Passenger")
    for p in Passenger.objects.all():
        first, _, last = (p.name or "").partition(" ")
        p.first_name, p.last_name = first, last
        p.save(update_fields=["first_name", "last_name"])


class Migration(migrations.Migration):
    dependencies = [("voyages_booking", "0004_booking_return_open")]

    operations = [
        migrations.AddField(
            model_name="passenger",
            name="name",
            field=models.CharField(default="", max_length=300, verbose_name="nom"),
            preserve_default=False,
        ),
        migrations.RunPython(combine, split),
        migrations.RemoveField(model_name="passenger", name="first_name"),
        migrations.RemoveField(model_name="passenger", name="last_name"),
        migrations.AlterModelOptions(
            name="passenger",
            options={"ordering": ["name"], "verbose_name": "passager"},
        ),
    ]
