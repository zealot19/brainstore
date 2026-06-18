from apps.fleet.models import FuelLog
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_fuel_logs(company_id, vehicle_id=None, date_from=None, date_to=None):
    qs = (FuelLog.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle")
          .order_by("-date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if date_from:
        qs = qs.filter(date__gte=date_from)
    if date_to:
        qs = qs.filter(date__lte=date_to)
    return qs


def get_fuel_log(log_id, company_id):
    try:
        return FuelLog.objects.select_related("vehicle").get(
            id=log_id, vehicle__company_id=company_id, is_deleted=False
        )
    except FuelLog.DoesNotExist:
        return None


def list_vehicle_fuel_logs(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    return vehicle.fuel_logs.filter(is_deleted=False).order_by("-date")
