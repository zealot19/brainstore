from django.db.models import Q, Sum, Count
from django.utils import timezone
from datetime import timedelta

from apps.fleet.models import (
    VehicleBrand, VehicleModel, ExternalDriver,
    Vehicle, OdometerLog, Insurance, VehicleDocument, MaintenanceOrder,
)


# ── Marques ────────────────────────────────────────────────────────────────────

def list_vehicle_brands(search=None):
    qs = VehicleBrand.objects.filter(is_deleted=False).order_by("name")
    if search:
        qs = qs.filter(name__icontains=search)
    return qs


def get_vehicle_brand(brand_id):
    try:
        return VehicleBrand.objects.get(id=brand_id, is_deleted=False)
    except VehicleBrand.DoesNotExist:
        return None


# ── Modèles ────────────────────────────────────────────────────────────────────

def list_vehicle_models(brand_id=None, vehicle_type=None, search=None):
    qs = (VehicleModel.objects
          .filter(is_deleted=False)
          .select_related("brand")
          .order_by("brand__name", "name"))
    if brand_id:
        qs = qs.filter(brand_id=brand_id)
    if vehicle_type:
        qs = qs.filter(vehicle_type=vehicle_type)
    if search:
        qs = qs.filter(Q(name__icontains=search) | Q(brand__name__icontains=search))
    return qs


def get_vehicle_model(model_id):
    try:
        return VehicleModel.objects.select_related("brand").get(id=model_id, is_deleted=False)
    except VehicleModel.DoesNotExist:
        return None


# ── Conducteurs externes ───────────────────────────────────────────────────────

def list_external_drivers(company_id, search=None):
    qs = ExternalDriver.objects.filter(company_id=company_id, is_deleted=False).order_by("last_name")
    if search:
        qs = qs.filter(
            Q(first_name__icontains=search)
            | Q(last_name__icontains=search)
            | Q(license_number__icontains=search)
            | Q(phone__icontains=search)
        )
    return qs


def get_external_driver(driver_id, company_id):
    try:
        return ExternalDriver.objects.get(id=driver_id, company_id=company_id, is_deleted=False)
    except ExternalDriver.DoesNotExist:
        return None


# ── Véhicules ──────────────────────────────────────────────────────────────────

def list_vehicles(company_id, *, agency_id=None, status=None, vehicle_type=None,
                  is_active=None, search=None):
    qs = (Vehicle.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("model__brand", "agency", "internal_driver", "external_driver")
          .order_by("license_plate"))
    if agency_id:
        qs = qs.filter(agency_id=agency_id)
    if status:
        qs = qs.filter(status=status)
    if vehicle_type:
        qs = qs.filter(model__vehicle_type=vehicle_type)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if search:
        qs = qs.filter(
            Q(license_plate__icontains=search)
            | Q(vin__icontains=search)
            | Q(model__name__icontains=search)
            | Q(model__brand__name__icontains=search)
        )
    return qs


def get_vehicle(vehicle_id, company_id):
    try:
        qs = (Vehicle.objects
              .select_related("model__brand", "agency", "internal_driver", "external_driver")
              .filter(id=vehicle_id, is_deleted=False))
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.get()
    except Vehicle.DoesNotExist:
        return None


def list_vehicle_odometer_logs(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    return vehicle.odometer_logs.order_by("-date", "-created_at")


def get_vehicle_stats(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None

    fuel_agg = vehicle.fuel_logs.filter(is_deleted=False).aggregate(
        total_fuel_cost=Sum("total_cost"),
        total_liters=Sum("liters"),
        fuel_count=Count("id"),
    )
    maintenance_agg = vehicle.maintenance_orders.filter(
        is_deleted=False, status="done"
    ).aggregate(
        total_maintenance_cost=Sum("cost"),
        maintenance_count=Count("id"),
    )
    insurance_agg = vehicle.insurances.filter(is_deleted=False).aggregate(
        total_insurance_cost=Sum("premium_amount"),
    )
    assignment_count = vehicle.assignments.filter(is_deleted=False).count()
    accident_count = vehicle.accidents.filter(is_deleted=False).count()

    return {
        "vehicle_id": str(vehicle.id),
        "license_plate": vehicle.license_plate,
        "current_odometer": vehicle.current_odometer,
        "status": vehicle.status,
        "fuel": {
            "total_cost": fuel_agg["total_fuel_cost"] or 0,
            "total_liters": fuel_agg["total_liters"] or 0,
            "count": fuel_agg["fuel_count"],
        },
        "maintenance": {
            "total_cost": maintenance_agg["total_maintenance_cost"] or 0,
            "count": maintenance_agg["maintenance_count"],
        },
        "insurance": {
            "total_premium": insurance_agg["total_insurance_cost"] or 0,
        },
        "assignments": assignment_count,
        "accidents": accident_count,
        "tco": (
            (fuel_agg["total_fuel_cost"] or 0)
            + (maintenance_agg["total_maintenance_cost"] or 0)
            + (insurance_agg["total_insurance_cost"] or 0)
        ),
    }


# ── Alertes flotte ─────────────────────────────────────────────────────────────

def get_fleet_alerts(company_id, days_ahead: int = 30):
    """
    Retourne les alertes actives pour la flotte d'une institution :
    - Assurances expirant dans `days_ahead` jours ou déjà expirées
    - Documents expirant dans `days_ahead` jours ou déjà expirés
    - Maintenances planifiées dépassées (planned_date < aujourd'hui)
    - Véhicules dépassant le km d'un prochain entretien
    """
    today = timezone.now().date()
    horizon = today + timedelta(days=days_ahead)

    # Assurances
    expiring_insurance = (
        Insurance.objects
        .filter(vehicle__company_id=company_id, vehicle__is_deleted=False,
                is_deleted=False, end_date__lte=horizon)
        .select_related("vehicle")
        .order_by("end_date")
    )

    # Documents
    expiring_documents = (
        VehicleDocument.objects
        .filter(vehicle__company_id=company_id, vehicle__is_deleted=False,
                is_deleted=False, expiry_date__lte=horizon, expiry_date__isnull=False)
        .select_related("vehicle")
        .order_by("expiry_date")
    )

    # Maintenances planifiées en retard
    overdue_maintenance = (
        MaintenanceOrder.objects
        .filter(vehicle__company_id=company_id, vehicle__is_deleted=False,
                is_deleted=False, status="planned", planned_date__lt=today)
        .select_related("vehicle", "maintenance_type")
        .order_by("planned_date")
    )

    # Véhicules ayant dépassé le km du prochain entretien
    vehicles_overdue_km = (
        Vehicle.objects
        .filter(company_id=company_id, is_deleted=False,
                maintenance_orders__next_due_km__lte=models_current_odometer_ref())
        .distinct()
    )

    return {
        "expiring_insurance": expiring_insurance,
        "expiring_documents": expiring_documents,
        "overdue_maintenance": overdue_maintenance,
    }


def models_current_odometer_ref():
    from django.db.models import F
    return F("current_odometer")


# ── Stats globales flotte ──────────────────────────────────────────────────────

def get_fleet_stats(company_id):
    from django.db.models import Count
    vehicles = Vehicle.objects.filter(company_id=company_id, is_deleted=False)

    by_status = dict(
        vehicles.values_list("status").annotate(cnt=Count("id")).values_list("status", "cnt")
    )
    by_type = dict(
        vehicles.values_list("model__vehicle_type")
        .annotate(cnt=Count("id"))
        .values_list("model__vehicle_type", "cnt")
    )

    fuel_total = FuelLog_total(company_id)
    maintenance_total = MaintenanceCost_total(company_id)

    return {
        "total_vehicles": vehicles.count(),
        "active_vehicles": vehicles.filter(is_active=True).count(),
        "by_status": by_status,
        "by_type": by_type,
        "total_fuel_cost": fuel_total,
        "total_maintenance_cost": maintenance_total,
    }


def FuelLog_total(company_id):
    from apps.fleet.models import FuelLog
    result = FuelLog.objects.filter(
        vehicle__company_id=company_id, is_deleted=False
    ).aggregate(t=Sum("total_cost"))
    return result["t"] or 0


def MaintenanceCost_total(company_id):
    result = MaintenanceOrder.objects.filter(
        vehicle__company_id=company_id, is_deleted=False, status="done"
    ).aggregate(t=Sum("cost"))
    return result["t"] or 0
