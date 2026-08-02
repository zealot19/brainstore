from apps.voyages_trips.models import Trip


def list_trips(company, status=None):
    qs = (Trip.objects.filter(company=company, is_deleted=False)
          .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
          .order_by("-scheduled_departure"))
    if status:
        qs = qs.filter(status=status)
    return qs


def get_trip(company, trip_id):
    return (Trip.objects.filter(company=company, id=trip_id, is_deleted=False)
            .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
            .first())
