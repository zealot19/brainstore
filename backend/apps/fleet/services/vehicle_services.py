from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.fleet.models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle, OdometerLog,
    Insurance, VehicleDocument,
)


# ── Marques ────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_vehicle_brand(*, name: str, country_of_origin: str = "", created_by):
    if VehicleBrand.objects.filter(name__iexact=name, is_deleted=False).exists():
        raise ApplicationError(_("Une marque avec ce nom existe déjà."))
    return VehicleBrand.objects.create(
        name=name,
        country_of_origin=country_of_origin,
        created_by=created_by,
    )


@transaction.atomic
def update_vehicle_brand(brand, *, updated_by, name=None, country_of_origin=None):
    if name is not None:
        if (VehicleBrand.objects
                .filter(name__iexact=name, is_deleted=False)
                .exclude(id=brand.id)
                .exists()):
            raise ApplicationError(_("Une marque avec ce nom existe déjà."))
        brand.name = name
    if country_of_origin is not None:
        brand.country_of_origin = country_of_origin
    brand.updated_by = updated_by
    brand.save()
    return brand


def delete_vehicle_brand(brand, *, deleted_by):
    if brand.models.filter(is_deleted=False).exists():
        raise ApplicationError(_("Impossible de supprimer une marque ayant des modèles actifs."))
    brand.soft_delete(user=deleted_by)


# ── Modèles ────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_vehicle_model(
    *, brand, name: str, vehicle_type: str, fuel_type: str,
    seats=None, doors=None, horsepower=None, payload_kg=None, created_by,
):
    if (VehicleModel.objects
            .filter(brand=brand, name__iexact=name, is_deleted=False)
            .exists()):
        raise ApplicationError(_("Ce modèle existe déjà pour cette marque."))
    return VehicleModel.objects.create(
        brand=brand,
        name=name,
        vehicle_type=vehicle_type,
        fuel_type=fuel_type,
        seats=seats,
        doors=doors,
        horsepower=horsepower,
        payload_kg=payload_kg,
        created_by=created_by,
    )


@transaction.atomic
def update_vehicle_model(model, *, updated_by, **fields):
    allowed = {"name", "vehicle_type", "fuel_type", "seats", "doors", "horsepower", "payload_kg"}
    for key, val in fields.items():
        if key in allowed:
            setattr(model, key, val)
    model.updated_by = updated_by
    model.save()
    return model


def delete_vehicle_model(model, *, deleted_by):
    if model.vehicles.filter(is_deleted=False).exists():
        raise ApplicationError(_("Impossible de supprimer un modèle utilisé par des véhicules actifs."))
    model.soft_delete(user=deleted_by)


# ── Conducteurs externes ───────────────────────────────────────────────────────

@transaction.atomic
def create_external_driver(
    *, company, first_name: str, last_name: str, license_number: str,
    license_category: str = "B", license_expiry=None,
    phone: str = "", email: str = "", notes: str = "", created_by,
):
    return ExternalDriver.objects.create(
        company=company,
        first_name=first_name,
        last_name=last_name,
        license_number=license_number,
        license_category=license_category,
        license_expiry=license_expiry,
        phone=phone,
        email=email,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_external_driver(driver, *, updated_by, **fields):
    allowed = {
        "first_name", "last_name", "phone", "email",
        "license_number", "license_category", "license_expiry", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(driver, key, val)
    driver.updated_by = updated_by
    driver.save()
    return driver


def delete_external_driver(driver, *, deleted_by):
    driver.soft_delete(user=deleted_by)


# ── Véhicules ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_vehicle(
    *, company, model, license_plate: str,
    vin: str = "", color: str = "", year=None,
    acquisition_date=None, acquisition_cost=None,
    agency_id=None, internal_driver_id=None, external_driver_id=None,
    tank_capacity_liters=None, notes: str = "",
    initial_odometer=0, created_by,
):
    if (Vehicle.objects
            .filter(company=company, license_plate=license_plate, is_deleted=False)
            .exists()):
        raise ApplicationError(_("Un véhicule avec cette immatriculation existe déjà dans votre institution."))

    vehicle = Vehicle.objects.create(
        company=company,
        model=model,
        license_plate=license_plate,
        vin=vin,
        color=color,
        year=year,
        acquisition_date=acquisition_date,
        acquisition_cost=acquisition_cost,
        agency_id=agency_id,
        internal_driver_id=internal_driver_id,
        external_driver_id=external_driver_id,
        tank_capacity_liters=tank_capacity_liters,
        notes=notes,
        status=Vehicle.Status.AVAILABLE,
        current_odometer=initial_odometer,
        created_by=created_by,
    )

    if initial_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle,
            value_km=initial_odometer,
            date=timezone.now().date(),
            source=OdometerLog.Source.MANUAL,
            note=_("Kilométrage initial à la création"),
            created_by=created_by,
        )

    return vehicle


@transaction.atomic
def update_vehicle(vehicle, *, updated_by, **fields):
    allowed = {
        "model_id", "license_plate", "vin", "color", "year",
        "acquisition_date", "acquisition_cost",
        "agency_id", "internal_driver_id", "external_driver_id",
        "tank_capacity_liters", "notes", "is_active",
    }
    if "license_plate" in fields:
        new_plate = fields["license_plate"]
        if (Vehicle.objects
                .filter(company=vehicle.company, license_plate=new_plate, is_deleted=False)
                .exclude(id=vehicle.id)
                .exists()):
            raise ApplicationError(_("Cette immatriculation est déjà utilisée."))
    for key, val in fields.items():
        if key in allowed:
            setattr(vehicle, key, val)
    vehicle.updated_by = updated_by
    vehicle.save()
    return vehicle


@transaction.atomic
def update_vehicle_odometer(vehicle, *, value_km, date=None, source=OdometerLog.Source.MANUAL,
                             note: str = "", updated_by):
    if value_km < vehicle.current_odometer:
        raise ApplicationError(
            _("Le kilométrage saisi ({new}) est inférieur au kilométrage actuel ({current}).").format(
                new=value_km, current=vehicle.current_odometer
            )
        )
    OdometerLog.objects.create(
        vehicle=vehicle,
        value_km=value_km,
        date=date or timezone.now().date(),
        source=source,
        note=note,
        created_by=updated_by,
    )
    vehicle.current_odometer = value_km
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["current_odometer", "updated_by", "updated_at"])
    return vehicle


def delete_vehicle(vehicle, *, deleted_by):
    if vehicle.status == Vehicle.Status.ON_MISSION:
        raise ApplicationError(_("Impossible de supprimer un véhicule en mission."))
    if vehicle.status == Vehicle.Status.IN_MAINTENANCE:
        raise ApplicationError(_("Impossible de supprimer un véhicule en maintenance."))
    vehicle.soft_delete(user=deleted_by)


# ── Assurances ─────────────────────────────────────────────────────────────────

@transaction.atomic
def create_insurance(
    *, vehicle, company_name: str, policy_number: str, insurance_type: str,
    start_date, end_date, premium_amount,
    deductible=None, insurer_contact: str = "", notes: str = "", created_by,
):
    return Insurance.objects.create(
        vehicle=vehicle,
        company_name=company_name,
        policy_number=policy_number,
        insurance_type=insurance_type,
        start_date=start_date,
        end_date=end_date,
        premium_amount=premium_amount,
        deductible=deductible,
        insurer_contact=insurer_contact,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_insurance(insurance, *, updated_by, **fields):
    allowed = {
        "company_name", "policy_number", "insurance_type",
        "start_date", "end_date", "premium_amount",
        "deductible", "insurer_contact", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(insurance, key, val)
    insurance.updated_by = updated_by
    insurance.save()
    return insurance


def delete_insurance(insurance, *, deleted_by):
    insurance.soft_delete(user=deleted_by)


# ── Documents ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_vehicle_document(
    *, vehicle, doc_type: str, name: str,
    number: str = "", issue_date=None, expiry_date=None, notes: str = "", created_by,
):
    return VehicleDocument.objects.create(
        vehicle=vehicle,
        doc_type=doc_type,
        name=name,
        number=number,
        issue_date=issue_date,
        expiry_date=expiry_date,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_vehicle_document(document, *, updated_by, **fields):
    allowed = {"doc_type", "name", "number", "issue_date", "expiry_date", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(document, key, val)
    document.updated_by = updated_by
    document.save()
    return document


def delete_vehicle_document(document, *, deleted_by):
    document.soft_delete(user=deleted_by)
