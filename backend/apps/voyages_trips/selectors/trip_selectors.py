from apps.voyages_trips.models import Trip
from apps.core.filters import resolve_date_field, apply_date_range

_TRIP_DATE_FIELDS = {"created": "created_at", "departure": "scheduled_departure",
                     "arrival": "scheduled_arrival"}


def list_trips(company, status=None, route=None, vehicle=None,
               date_field=None, date_from=None, date_to=None, auto_expenses=None):
    qs = (Trip.objects.filter(company=company, is_deleted=False)
          .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
          .order_by("-scheduled_departure"))
    if status:
        qs = qs.filter(status=status)
    if route:
        qs = qs.filter(route_id=route)
    if vehicle:
        qs = qs.filter(vehicle_id=vehicle)
    if auto_expenses is not None:
        qs = qs.filter(auto_expenses=auto_expenses)
    field = resolve_date_field(_TRIP_DATE_FIELDS, date_field, "departure")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs


def get_trip(company, trip_id):
    return (Trip.objects.filter(company=company, id=trip_id, is_deleted=False)
            .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
            .first())
