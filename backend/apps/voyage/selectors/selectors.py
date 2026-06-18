from django.db.models import Q, Count, F
from django.utils import timezone

from apps.voyage.models import Trip, TripCrew


# ── Trips ──────────────────────────────────────────────────────────────────────

def list_trips(company_id, *, route_id=None, status=None, vehicle_id=None,
               from_city_id=None, to_city_id=None,
               date_from=None, date_to=None, upcoming_only=False):
    qs = (Trip.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related(
              "route__from_terminal__city",
              "route__to_terminal__city",
              "vehicle",
              "vehicle_category",
              "fare_class",
          )
          .annotate(booked_seats=Count("bookings", filter=Q(bookings__is_deleted=False,
                                                             bookings__status__in=["confirmed", "boarded"])))
          .order_by("departure_datetime"))

    if route_id:
        qs = qs.filter(route_id=route_id)
    if status:
        qs = qs.filter(status=status)
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if from_city_id:
        qs = qs.filter(route__from_terminal__city_id=from_city_id)
    if to_city_id:
        qs = qs.filter(route__to_terminal__city_id=to_city_id)
    if date_from:
        qs = qs.filter(departure_datetime__date__gte=date_from)
    if date_to:
        qs = qs.filter(departure_datetime__date__lte=date_to)
    if upcoming_only:
        qs = qs.filter(departure_datetime__gt=timezone.now(),
                       status__in=[Trip.Status.SCHEDULED, Trip.Status.BOARDING])
    return qs


def get_trip(trip_id, company_id):
    try:
        qs = (Trip.objects
              .select_related(
                  "route__from_terminal__city",
                  "route__to_terminal__city",
                  "vehicle",
                  "vehicle_category",
                  "fare_class",
              )
              .annotate(booked_seats=Count("bookings", filter=Q(bookings__is_deleted=False,
                                                                 bookings__status__in=["confirmed", "boarded"])))
              .filter(id=trip_id, is_deleted=False))
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.get()
    except Trip.DoesNotExist:
        return None


def search_trips(company_id, *, from_city_id, to_city_id, travel_date):
    """Search available trips for a given route and date — used by online booking."""
    return list_trips(
        company_id,
        from_city_id=from_city_id,
        to_city_id=to_city_id,
        date_from=travel_date,
        date_to=travel_date,
        upcoming_only=True,
    )


def get_trip_stats(company_id):
    now = timezone.now()
    trips = Trip.objects.filter(company_id=company_id, is_deleted=False)
    return {
        "total": trips.count(),
        "upcoming": trips.filter(departure_datetime__gt=now,
                                  status=Trip.Status.SCHEDULED).count(),
        "boarding": trips.filter(status=Trip.Status.BOARDING).count(),
        "in_transit": trips.filter(status=Trip.Status.DEPARTED).count(),
        "arrived_today": trips.filter(actual_arrival_datetime__date=now.date(),
                                       status=Trip.Status.ARRIVED).count(),
        "cancelled": trips.filter(status=Trip.Status.CANCELLED).count(),
    }


# ── Crew ───────────────────────────────────────────────────────────────────────

def list_trip_crew(trip_id, company_id):
    trip = get_trip(trip_id, company_id)
    if trip is None:
        return None
    return (trip.crew
            .filter(is_deleted=False)
            .select_related("user")
            .order_by("role"))


def get_trip_crew_member(crew_id, trip_id, company_id):
    trip = get_trip(trip_id, company_id)
    if trip is None:
        return None
    try:
        return trip.crew.select_related("user").get(id=crew_id, is_deleted=False)
    except TripCrew.DoesNotExist:
        return None
