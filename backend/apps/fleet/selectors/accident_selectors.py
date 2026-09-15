from apps.fleet.models import Accident
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_accidents(company_id, vehicle_id=None, severity=None,
                   date_from=None, date_to=None):
    # Un accident est rattaché à un voyage ; le périmètre institution passe par
    # le voyage (le véhicule, dérivé du voyage, peut être nul).
    qs = (Accident.objects
          .filter(trip__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "trip", "trip__vehicle")
          .order_by("-date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if severity:
        qs = qs.filter(severity=severity)
    if date_from:
        qs = qs.filter(date__gte=date_from)
    if date_to:
        qs = qs.filter(date__lte=date_to)
    return qs


def get_accident(accident_id, company_id):
    try:
        return Accident.objects.select_related(
            "vehicle", "trip", "trip__vehicle"
        ).get(id=accident_id, trip__company_id=company_id, is_deleted=False)
    except Accident.DoesNotExist:
        return None


def list_vehicle_accidents(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    return (vehicle.accidents.filter(is_deleted=False)
            .select_related("trip", "trip__vehicle")
            .order_by("-date"))
