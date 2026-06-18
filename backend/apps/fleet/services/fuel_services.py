from django.db import transaction
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.fleet.models import FuelLog, OdometerLog


@transaction.atomic
def create_fuel_log(
    *, vehicle, date, odometer_km, liters, cost_per_liter,
    total_cost=None, fuel_type: str = "", station: str = "",
    full_tank: bool = True, notes: str = "", created_by,
):
    if odometer_km < vehicle.current_odometer:
        raise ApplicationError(
            _("Le kilométrage au plein ({new}) est inférieur au kilométrage actuel ({current}).").format(
                new=odometer_km, current=vehicle.current_odometer
            )
        )

    if total_cost is None:
        total_cost = liters * cost_per_liter

    log = FuelLog.objects.create(
        vehicle=vehicle,
        date=date,
        odometer_km=odometer_km,
        liters=liters,
        cost_per_liter=cost_per_liter,
        total_cost=total_cost,
        fuel_type=fuel_type,
        station=station,
        full_tank=full_tank,
        notes=notes,
        created_by=created_by,
    )

    # Mise à jour odomètre si le relevé est supérieur
    if odometer_km > vehicle.current_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle,
            value_km=odometer_km,
            date=date,
            source=OdometerLog.Source.FUEL,
            note=f"Plein — {station}" if station else "Plein de carburant",
            created_by=created_by,
        )
        vehicle.current_odometer = odometer_km
        vehicle.updated_by = created_by
        vehicle.save(update_fields=["current_odometer", "updated_by", "updated_at"])

    return log


@transaction.atomic
def update_fuel_log(log, *, updated_by, **fields):
    allowed = {
        "date", "odometer_km", "liters", "cost_per_liter",
        "total_cost", "fuel_type", "station", "full_tank", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(log, key, val)
    log.updated_by = updated_by
    log.save()
    return log


def delete_fuel_log(log, *, deleted_by):
    log.soft_delete(user=deleted_by)
