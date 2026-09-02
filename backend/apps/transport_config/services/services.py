from django.db import transaction
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.transport_config.models import (
    City, Terminal, Route, RouteStop, VehicleCategory, FareClass, Fare,
)


# ── Cities ─────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_city(*, name: str, code: str, region: str = "", country: str = "Cameroon",
                is_active: bool = True, created_by):
    code = code.upper().strip()
    if City.objects.filter(code=code, is_deleted=False).exists():
        raise ApplicationError(_("Une ville portant ce code existe déjà."))
    return City.objects.create(
        name=name, code=code, region=region,
        country=country, is_active=is_active, created_by=created_by,
    )


@transaction.atomic
def update_city(city, *, updated_by, **fields):
    allowed = {"name", "code", "region", "country", "is_active"}
    if "code" in fields:
        code = fields["code"].upper().strip()
        if City.objects.filter(code=code, is_deleted=False).exclude(id=city.id).exists():
            raise ApplicationError(_("Une ville portant ce code existe déjà."))
        fields["code"] = code
    for key, val in fields.items():
        if key in allowed:
            setattr(city, key, val)
    city.updated_by = updated_by
    city.save()
    return city


def delete_city(city, *, deleted_by):
    if city.terminals.filter(is_deleted=False).exists():
        raise ApplicationError(_("Impossible de supprimer cette ville : elle contient encore des points de service actifs."))
    city.soft_delete(user=deleted_by)


# ── Terminals ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_terminal(*, company, city, name: str, address: str = "",
                    phone: str = "", gps_lat=None, gps_lng=None,
                    is_active: bool = True, notes: str = "", created_by):
    if Terminal.objects.filter(company=company, city=city,
                                name__iexact=name, is_deleted=False).exists():
        raise ApplicationError(_("Un point de service portant ce nom existe déjà dans cette ville."))
    return Terminal.objects.create(
        company=company, city=city, name=name, address=address,
        phone=phone, gps_lat=gps_lat, gps_lng=gps_lng,
        is_active=is_active, notes=notes, created_by=created_by,
    )


@transaction.atomic
def update_terminal(terminal, *, updated_by, **fields):
    allowed = {"name", "address", "phone", "gps_lat", "gps_lng", "is_active", "notes", "city_id"}
    for key, val in fields.items():
        if key in allowed:
            setattr(terminal, key, val)
    terminal.updated_by = updated_by
    terminal.save()
    return terminal


def delete_terminal(terminal, *, deleted_by):
    if (terminal.routes_from.filter(is_deleted=False).exists() or
            terminal.routes_to.filter(is_deleted=False).exists()):
        raise ApplicationError(_("Impossible de supprimer ce point de service : il est utilisé par des trajets actifs."))
    terminal.soft_delete(user=deleted_by)


# ── Routes ─────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_route(*, company, from_terminal, to_terminal, name: str = "",
                 distance_km=None, duration_minutes=None,
                 is_active: bool = True, notes: str = "", created_by):
    if from_terminal.id == to_terminal.id:
        raise ApplicationError(_("Les points de départ et d'arrivée doivent être différents."))
    if Route.objects.filter(company=company, from_terminal=from_terminal,
                             to_terminal=to_terminal, is_deleted=False).exists():
        raise ApplicationError(_("Ce trajet existe déjà."))
    return Route.objects.create(
        company=company,
        from_terminal=from_terminal,
        to_terminal=to_terminal,
        name=name,
        distance_km=distance_km,
        duration_minutes=duration_minutes,
        is_active=is_active,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_route(route, *, updated_by, **fields):
    allowed = {"name", "distance_km", "duration_minutes", "is_active", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(route, key, val)
    route.updated_by = updated_by
    route.save()
    return route


def delete_route(route, *, deleted_by):
    route.soft_delete(user=deleted_by)


@transaction.atomic
def add_route_stop(*, route, terminal, stop_order: int,
                   arrival_offset_minutes: int = 0, distance_from_start_km=None,
                   created_by):
    if terminal.id == route.from_terminal.id or terminal.id == route.to_terminal.id:
        raise ApplicationError(_("Ce point de service est déjà le départ ou l'arrivée du trajet."))
    if RouteStop.objects.filter(route=route, stop_order=stop_order, is_deleted=False).exists():
        raise ApplicationError(_("L'ordre d'escale {n} est déjà utilisé sur ce trajet.").format(n=stop_order))
    if RouteStop.objects.filter(route=route, terminal=terminal, is_deleted=False).exists():
        raise ApplicationError(_("Ce point de service est déjà une escale de ce trajet."))
    return RouteStop.objects.create(
        route=route, terminal=terminal,
        stop_order=stop_order,
        arrival_offset_minutes=arrival_offset_minutes,
        distance_from_start_km=distance_from_start_km,
        created_by=created_by,
    )


@transaction.atomic
def update_route_stop(stop, *, updated_by, **fields):
    allowed = {"stop_order", "arrival_offset_minutes", "distance_from_start_km"}
    for key, val in fields.items():
        if key in allowed:
            setattr(stop, key, val)
    stop.updated_by = updated_by
    stop.save()
    return stop


def remove_route_stop(stop, *, deleted_by):
    stop.soft_delete(user=deleted_by)


# ── Vehicle categories ─────────────────────────────────────────────────────────

@transaction.atomic
def create_vehicle_category(
    *, company=None, name: str, total_seats: int,
    seat_rows: int = 8, seat_cols: int = 4, aisle_after_col: int = 2,
    has_back_row: bool = True, free_seating: bool = False,
    has_wifi: bool = False, has_ac: bool = False, has_tv: bool = False,
    has_usb: bool = False, has_snack: bool = False,
    description: str = "", created_by,
):
    return VehicleCategory.objects.create(
        company=company, name=name, total_seats=total_seats,
        seat_rows=seat_rows, seat_cols=seat_cols, aisle_after_col=aisle_after_col,
        has_back_row=has_back_row, free_seating=free_seating,
        has_wifi=has_wifi, has_ac=has_ac, has_tv=has_tv,
        has_usb=has_usb, has_snack=has_snack,
        description=description, created_by=created_by,
    )


@transaction.atomic
def update_vehicle_category(category, *, updated_by, **fields):
    allowed = {
        "name", "total_seats", "seat_rows", "seat_cols", "aisle_after_col",
        "has_back_row", "free_seating",
        "has_wifi", "has_ac", "has_tv", "has_usb", "has_snack", "description",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(category, key, val)
    category.updated_by = updated_by
    category.save()
    return category


def delete_vehicle_category(category, *, deleted_by):
    category.soft_delete(user=deleted_by)


# ── Fare classes ───────────────────────────────────────────────────────────────

@transaction.atomic
def create_fare_class(*, company=None, name: str, description: str = "",
                      is_active: bool = True, created_by):
    return FareClass.objects.create(
        company=company, name=name, description=description,
        is_active=is_active, created_by=created_by,
    )


@transaction.atomic
def update_fare_class(fare_class, *, updated_by, **fields):
    allowed = {"name", "description", "is_active"}
    for key, val in fields.items():
        if key in allowed:
            setattr(fare_class, key, val)
    fare_class.updated_by = updated_by
    fare_class.save()
    return fare_class


def delete_fare_class(fare_class, *, deleted_by):
    if fare_class.fares.filter(is_deleted=False, is_active=True).exists():
        raise ApplicationError(_("Impossible de supprimer cette catégorie tarifaire : des tarifs actifs l'utilisent encore."))
    fare_class.soft_delete(user=deleted_by)


# ── Fares ──────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_fare(*, company, route, vehicle_category, fare_class,
                passenger_type: str, amount, currency: str = "XAF",
                is_active: bool = True, created_by):
    if Fare.objects.filter(
        company=company, route=route, vehicle_category=vehicle_category,
        fare_class=fare_class, passenger_type=passenger_type, is_deleted=False,
    ).exists():
        raise ApplicationError(_("Un tarif existe déjà pour cette combinaison (trajet et catégorie)."))
    return Fare.objects.create(
        company=company, route=route,
        vehicle_category=vehicle_category, fare_class=fare_class,
        passenger_type=passenger_type, amount=amount,
        currency=currency, is_active=is_active, created_by=created_by,
    )


@transaction.atomic
def update_fare(fare, *, updated_by, **fields):
    allowed = {"amount", "currency", "is_active"}
    for key, val in fields.items():
        if key in allowed:
            setattr(fare, key, val)
    fare.updated_by = updated_by
    fare.save()
    return fare


def delete_fare(fare, *, deleted_by):
    fare.soft_delete(user=deleted_by)
