from django.db.models import Q
from apps.fleet.models import Assignment
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_assignments(company_id, vehicle_id=None, status=None,
                     internal_driver_id=None, external_driver_id=None,
                     date_from=None, date_to=None):
    qs = (Assignment.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("vehicle__model__brand", "internal_driver", "external_driver")
          .order_by("-planned_departure"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
    if internal_driver_id:
        qs = qs.filter(internal_driver_id=internal_driver_id)
    if external_driver_id:
        qs = qs.filter(external_driver_id=external_driver_id)
    if date_from:
        qs = qs.filter(planned_departure__date__gte=date_from)
    if date_to:
        qs = qs.filter(planned_departure__date__lte=date_to)
    return qs


def get_assignment(assignment_id, company_id):
    try:
        qs = Assignment.objects.select_related(
            "vehicle__model__brand", "internal_driver", "external_driver"
        ).filter(id=assignment_id, is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.get()
    except Assignment.DoesNotExist:
        return None


def list_vehicle_assignments(vehicle_id, company_id, status=None):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    qs = vehicle.assignments.filter(is_deleted=False).select_related(
        "internal_driver", "external_driver"
    )
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("-planned_departure")
