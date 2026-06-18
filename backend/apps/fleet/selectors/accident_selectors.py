from apps.fleet.models import Accident
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_accidents(company_id, vehicle_id=None, status=None, severity=None,
                   date_from=None, date_to=None):
    qs = (Accident.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "internal_driver", "external_driver", "assignment")
          .order_by("-date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
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
            "vehicle", "internal_driver", "external_driver", "assignment"
        ).get(id=accident_id, vehicle__company_id=company_id, is_deleted=False)
    except Accident.DoesNotExist:
        return None


def list_vehicle_accidents(vehicle_id, company_id, status=None):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    qs = vehicle.accidents.filter(is_deleted=False).select_related(
        "internal_driver", "external_driver", "assignment"
    )
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("-date")
