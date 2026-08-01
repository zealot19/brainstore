from apps.fleet.models import Service, Contract
from apps.fleet.selectors.vehicle_selectors import get_vehicle


def list_services(company_id, vehicle_id=None, status=None, date_from=None, date_to=None):
    qs = (Service.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "intervention_type", "supplier", "driver")
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


def get_service(service_id, company_id):
    try:
        return Service.objects.select_related(
            "vehicle", "intervention_type", "supplier", "driver"
        ).get(id=service_id, vehicle__company_id=company_id, is_deleted=False)
    except Service.DoesNotExist:
        return None


def list_vehicle_services(vehicle_id, company_id, status=None):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    qs = vehicle.services.filter(is_deleted=False).select_related("intervention_type", "supplier")
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("-planned_date")


def list_service_attachments(service):
    from django.contrib.contenttypes.models import ContentType
    from apps.core.models import Attachment
    ct = ContentType.objects.get_for_model(Service)
    return Attachment.objects.filter(
        content_type=ct, object_id=service.id, is_deleted=False
    ).order_by("created_at")


# ── Contrats ────────────────────────────────────────────────────────────────────

def list_contracts(company_id, vehicle_id=None, status=None):
    qs = (Contract.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "intervention_type", "supplier",
                          "billing_period", "responsible", "driver")
          .prefetch_related("included_services", "recurring_costs__period")
          .order_by("-start_date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
    return qs


def get_contract(contract_id, company_id):
    try:
        return (Contract.objects
                .select_related("vehicle", "intervention_type", "supplier",
                                "billing_period", "responsible", "driver")
                .prefetch_related("included_services", "recurring_costs__period")
                .get(id=contract_id, vehicle__company_id=company_id, is_deleted=False))
    except Contract.DoesNotExist:
        return None


def list_vehicle_contracts(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    return (vehicle.contracts.filter(is_deleted=False)
            .select_related("intervention_type", "supplier")
            .order_by("-start_date"))


def list_recurring_costs(contract):
    return contract.recurring_costs.filter(is_deleted=False).select_related("period").order_by("description")
