import django.db.models.deletion
from django.db import migrations, models

VT_MAP = {"car": "Voiture", "van": "Fourgon/Van", "truck": "Camion",
          "bus": "Bus", "motorcycle": "Moto", "other": "Autre"}
FT_MAP = {"gasoline": "Essence", "diesel": "Diesel", "electric": "Électrique",
          "hybrid": "Hybride", "lpg": "GPL", "other": "Autre"}


def map_enums(apps, schema_editor):
    VehicleModel = apps.get_model("fleet", "VehicleModel")
    VehicleType = apps.get_model("fleet", "VehicleType")
    FuelType = apps.get_model("fleet", "FuelType")
    vt_cache, ft_cache = {}, {}

    def vt(name):
        if name not in vt_cache:
            vt_cache[name] = VehicleType.objects.get_or_create(company=None, name=name)[0]
        return vt_cache[name]

    def ft(name):
        if name not in ft_cache:
            ft_cache[name] = FuelType.objects.get_or_create(company=None, name=name)[0]
        return ft_cache[name]

    for m in VehicleModel.objects.all():
        old_vt = getattr(m, "vehicle_type_old", None)
        old_ft = getattr(m, "fuel_type_old", None)
        if old_vt:
            m.vehicle_type = vt(VT_MAP.get(old_vt, "Autre"))
        if old_ft:
            m.fuel_type = ft(FT_MAP.get(old_ft, "Autre"))
        m.save(update_fields=["vehicle_type", "fuel_type"])


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("fleet", "0002_activitysector_documenttype_fueltype_and_more"),
    ]

    operations = [
        migrations.RenameField("vehiclemodel", "vehicle_type", "vehicle_type_old"),
        migrations.RenameField("vehiclemodel", "fuel_type", "fuel_type_old"),
        migrations.AddField(
            "vehiclemodel", "vehicle_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                              related_name="vehicle_models", to="fleet.vehicletype", verbose_name="type"),
        ),
        migrations.AddField(
            "vehiclemodel", "fuel_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                              related_name="vehicle_models", to="fleet.fueltype", verbose_name="carburant"),
        ),
        migrations.AddField(
            "vehiclemodel", "transmission",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                              related_name="vehicle_models", to="fleet.transmission", verbose_name="transmission"),
        ),
        migrations.AddField(
            "vehiclemodel", "traction_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                              related_name="vehicle_models", to="fleet.tractiontype", verbose_name="traction"),
        ),
        migrations.RunPython(map_enums, noop),
        migrations.RemoveField("vehiclemodel", "vehicle_type_old"),
        migrations.RemoveField("vehiclemodel", "fuel_type_old"),
    ]
