from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.fleet.models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle, OdometerLog,
    VehicleDocument, Parking, Supplier,
)


# ── Fournisseurs ────────────────────────────────────────────────────────────────

def _generate_supplier_code(company, name):
    """Génère un code unique à partir du nom (ex. « Total Cameroun » → « TOT-01 »)."""
    base = "".join(c for c in (name or "").upper() if c.isalnum())[:3] or "FRN"
    n = 1
    while True:
        code = f"{base}-{n:02d}"
        if not Supplier.objects.filter(company=company, code=code, is_deleted=False).exists():
            return code
        n += 1


@transaction.atomic
def create_supplier(*, company, name, code="", created_by, **fields):
    if not code:
        code = _generate_supplier_code(company, name)
    elif Supplier.objects.filter(company=company, code=code, is_deleted=False).exists():
        raise ApplicationError(_("Un fournisseur avec ce code existe déjà."))
    return Supplier.objects.create(company=company, name=name, code=code, created_by=created_by, **fields)


@transaction.atomic
def update_supplier(supplier, *, updated_by, **fields):
    allowed = {"name", "code", "tax_id", "address", "city", "country", "phone",
               "email", "website", "contact_person", "notes", "is_active"}
    if "code" in fields and Supplier.objects.filter(
            company=supplier.company, code=fields["code"], is_deleted=False).exclude(id=supplier.id).exists():
        raise ApplicationError(_("Un fournisseur avec ce code existe déjà."))
    for key, val in fields.items():
        if key in allowed:
            setattr(supplier, key, val)
    supplier.updated_by = updated_by
    supplier.save()
    return supplier


@transaction.atomic
def delete_supplier(supplier, *, deleted_by):
    supplier.soft_delete(user=deleted_by)


# ── Parkings ────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_parking(*, company, name, location="", notes="", created_by):
    return Parking.objects.create(company=company, name=name, location=location,
                                  notes=notes, created_by=created_by)


@transaction.atomic
def update_parking(parking, *, updated_by, **fields):
    for key in ("name", "location", "notes"):
        if key in fields:
            setattr(parking, key, fields[key])
    parking.updated_by = updated_by
    parking.save()
    return parking


@transaction.atomic
def delete_parking(parking, *, deleted_by):
    parking.soft_delete(user=deleted_by)


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
    *, brand, name: str, fuel_type=None,
    transmission=None, traction_type=None,
    seats=None, doors=None, horsepower=None, payload_kg=None, created_by,
):
    if (VehicleModel.objects
            .filter(brand=brand, name__iexact=name, is_deleted=False)
            .exists()):
        raise ApplicationError(_("Ce modèle existe déjà pour cette marque."))
    return VehicleModel.objects.create(
        brand=brand,
        name=name,
        fuel_type=fuel_type,
        transmission=transmission,
        traction_type=traction_type,
        seats=seats,
        doors=doors,
        horsepower=horsepower,
        payload_kg=payload_kg,
        created_by=created_by,
    )


@transaction.atomic
def update_vehicle_model(model, *, updated_by, **fields):
    allowed = {"name", "fuel_type_id", "transmission_id",
               "traction_type_id", "seats", "doors", "horsepower", "payload_kg"}
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
    *, company, employee, license_number: str,
    license_category: str = "B", license_expiry=None,
    notes: str = "", created_by,
):
    return ExternalDriver.objects.create(
        company=company,
        employee=employee,
        license_number=license_number,
        license_category=license_category,
        license_expiry=license_expiry,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_external_driver(driver, *, updated_by, **fields):
    allowed = {
        "employee", "license_number", "license_category", "license_expiry", "notes",
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
    category=None, parking_id=None, tag_ids=None,
    registration_date=None, fiscal_horsepower=None, catalog_value=None,
    purchase_value=None, residual_value=None,
    owner_partner_id=None, partner_pct_ticket=0, partner_pct_parcel=0, partner_pct_baggage=0,
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
        category=category,
        parking_id=parking_id,
        registration_date=registration_date,
        fiscal_horsepower=fiscal_horsepower,
        catalog_value=catalog_value,
        purchase_value=purchase_value,
        residual_value=residual_value,
        owner_partner_id=owner_partner_id,
        partner_pct_ticket=(partner_pct_ticket or 0) if owner_partner_id else 0,
        partner_pct_parcel=(partner_pct_parcel or 0) if owner_partner_id else 0,
        partner_pct_baggage=(partner_pct_baggage or 0) if owner_partner_id else 0,
        status=Vehicle.Status.AVAILABLE,
        current_odometer=initial_odometer,
        created_by=created_by,
    )

    if tag_ids:
        vehicle.tags.set(tag_ids)

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
        "category_id", "parking_id", "registration_date",
        "fiscal_horsepower", "catalog_value", "purchase_value", "residual_value",
        "owner_partner_id", "partner_pct_ticket", "partner_pct_parcel", "partner_pct_baggage",
    }
    tag_ids = fields.pop("tag_ids", None)
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
    # Sans partenaire propriétaire, les parts partenaire n'ont pas de sens : on les remet à 0.
    if not vehicle.owner_partner_id:
        vehicle.partner_pct_ticket = 0
        vehicle.partner_pct_parcel = 0
        vehicle.partner_pct_baggage = 0
    vehicle.updated_by = updated_by
    vehicle.save()
    if tag_ids is not None:
        vehicle.tags.set(tag_ids)
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
