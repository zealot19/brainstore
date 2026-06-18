from django.db.models import Q
from apps.fleet.models import MaintenanceType, MaintenanceOrder
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_maintenance_types(company_id, search=None):
    qs = (MaintenanceType.objects
          .filter(Q(company_id=company_id) | Q(company__isnull=True), is_deleted=False)
          .order_by("name"))
    if search:
        qs = qs.filter(name__icontains=search)
    return qs


def get_maintenance_type(type_id, company_id):
    try:
        return MaintenanceType.objects.get(
            Q(company_id=company_id) | Q(company__isnull=True),
            id=type_id, is_deleted=False
        )
    except MaintenanceType.DoesNotExist:
        return None


def list_maintenance_orders(company_id, vehicle_id=None, status=None, date_from=None, date_to=None):
    qs = (MaintenanceOrder.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "maintenance_type")
          .order_by("-planned_date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(planned_date__gte=date_from)
    if date_to:
        qs = qs.filter(planned_date__lte=date_to)
    return qs


def get_maintenance_order(order_id, company_id):
    try:
        return MaintenanceOrder.objects.select_related("vehicle", "maintenance_type").get(
            id=order_id, vehicle__company_id=company_id, is_deleted=False
        )
    except MaintenanceOrder.DoesNotExist:
        return None


def list_vehicle_maintenance_orders(vehicle_id, company_id, status=None):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    qs = vehicle.maintenance_orders.filter(is_deleted=False).select_related("maintenance_type")
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("-planned_date")
