from django.db.models import Q
from apps.transport_config.models import (
    City, Terminal, Route, RouteStop, VehicleCategory, FareClass, Fare,
)


# ── Cities ─────────────────────────────────────────────────────────────────────

def list_cities(search=None, is_active=None):
    qs = City.objects.filter(is_deleted=False).order_by("name")
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if search:
        qs = qs.filter(Q(name__icontains=search) | Q(code__icontains=search) | Q(region__icontains=search))
    return qs


def get_city(city_id):
    try:
        return City.objects.get(id=city_id, is_deleted=False)
    except City.DoesNotExist:
        return None


# ── Terminals ──────────────────────────────────────────────────────────────────

def list_terminals(company_id, city_id=None, is_active=None, search=None):
    qs = (Terminal.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("city")
          .order_by("city__name", "name"))
    if city_id:
        qs = qs.filter(city_id=city_id)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if search:
        qs = qs.filter(Q(name__icontains=search) | Q(city__name__icontains=search))
    return qs


def get_terminal(terminal_id, company_id):
    try:
        return Terminal.objects.select_related("city").get(
            id=terminal_id, company_id=company_id, is_deleted=False
        )
    except Terminal.DoesNotExist:
        return None


# ── Routes ─────────────────────────────────────────────────────────────────────

def list_routes(company_id, from_city_id=None, to_city_id=None,
                is_active=None, search=None):
    qs = (Route.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related(
              "from_terminal__city",
              "to_terminal__city",
          )
          .order_by("from_terminal__city__name", "to_terminal__city__name"))
    if from_city_id:
        qs = qs.filter(from_terminal__city_id=from_city_id)
    if to_city_id:
        qs = qs.filter(to_terminal__city_id=to_city_id)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if search:
        qs = qs.filter(
            Q(name__icontains=search)
            | Q(from_terminal__city__name__icontains=search)
            | Q(to_terminal__city__name__icontains=search)
        )
    return qs


def get_route(route_id, company_id):
    try:
        return (Route.objects
                .select_related("from_terminal__city", "to_terminal__city")
                .get(id=route_id, company_id=company_id, is_deleted=False))
    except Route.DoesNotExist:
        return None


def get_route_with_stops(route_id, company_id):
    route = get_route(route_id, company_id)
    if route is None:
        return None, None
    stops = (route.stops
             .filter(is_deleted=False)
             .select_related("terminal__city")
             .order_by("stop_order"))
    return route, stops


def list_route_stops(route_id, company_id):
    route = get_route(route_id, company_id)
    if route is None:
        return None
    return (route.stops
            .filter(is_deleted=False)
            .select_related("terminal__city")
            .order_by("stop_order"))


def get_route_stop(stop_id, route_id, company_id):
    route = get_route(route_id, company_id)
    if route is None:
        return None
    try:
        return route.stops.select_related("terminal__city").get(id=stop_id, is_deleted=False)
    except RouteStop.DoesNotExist:
        return None


# ── Vehicle categories ─────────────────────────────────────────────────────────

def list_vehicle_categories(company_id, search=None):
    qs = (VehicleCategory.objects
          .filter(Q(company_id=company_id) | Q(company__isnull=True), is_deleted=False)
          .order_by("name"))
    if search:
        qs = qs.filter(name__icontains=search)
    return qs


def get_vehicle_category(category_id, company_id):
    try:
        return VehicleCategory.objects.get(
            Q(company_id=company_id) | Q(company__isnull=True),
            id=category_id, is_deleted=False,
        )
    except VehicleCategory.DoesNotExist:
        return None


# ── Fare classes ───────────────────────────────────────────────────────────────

def list_fare_classes(company_id, is_active=None):
    qs = (FareClass.objects
          .filter(Q(company_id=company_id) | Q(company__isnull=True), is_deleted=False)
          .order_by("name"))
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    return qs


def get_fare_class(class_id, company_id):
    try:
        return FareClass.objects.get(
            Q(company_id=company_id) | Q(company__isnull=True),
            id=class_id, is_deleted=False,
        )
    except FareClass.DoesNotExist:
        return None


# ── Fares ──────────────────────────────────────────────────────────────────────

def list_fares(company_id, route_id=None, vehicle_category_id=None,
               fare_class_id=None, passenger_type=None, is_active=None):
    qs = (Fare.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("route", "vehicle_category", "fare_class")
          .order_by("route", "vehicle_category", "fare_class", "passenger_type"))
    if route_id:
        qs = qs.filter(route_id=route_id)
    if vehicle_category_id:
        qs = qs.filter(vehicle_category_id=vehicle_category_id)
    if fare_class_id:
        qs = qs.filter(fare_class_id=fare_class_id)
    if passenger_type:
        qs = qs.filter(passenger_type=passenger_type)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    return qs


def get_fare(fare_id, company_id):
    try:
        return Fare.objects.select_related(
            "route", "vehicle_category", "fare_class"
        ).get(id=fare_id, company_id=company_id, is_deleted=False)
    except Fare.DoesNotExist:
        return None


def get_fares_for_route(route_id, company_id, vehicle_category_id=None,
                         fare_class_id=None, passenger_type=None):
    return list_fares(
        company_id,
        route_id=route_id,
        vehicle_category_id=vehicle_category_id,
        fare_class_id=fare_class_id,
        passenger_type=passenger_type,
        is_active=True,
    )
