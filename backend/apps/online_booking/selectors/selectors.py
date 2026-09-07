from apps.online_booking.models import OnlineBookingRequest
from apps.voyages_trips.models import Trip, TripSeat


def get_served_towns(company_id):
    """Towns that are endpoints (origin or destination) of the company's routes."""
    from apps.voyages_config.models import Route, Town
    routes = Route.objects.filter(company_id=company_id, is_deleted=False)
    town_ids = set(routes.values_list("origin__town_id", flat=True)) | \
        set(routes.values_list("destination__town_id", flat=True))
    return Town.objects.filter(id__in=town_ids, is_deleted=False).order_by("name")


def search_trips(company_id, *, from_town_id, to_town_id, travel_date):
    """Bookable trips between two towns on a date (modern voyages_* stack)."""
    from apps.system_config.models import Company
    from apps.voyages_booking.selectors import bookable_trips
    company = Company.objects.get(id=company_id)
    trips = bookable_trips(company, travel_date=travel_date)
    return [t for t in trips
            if t.origin.town_id == from_town_id and t.destination.town_id == to_town_id]


def get_public_trip(trip_id, company_id):
    """Single bookable trip for public display, or None."""
    return (Trip.objects
            .filter(company_id=company_id, is_deleted=False, status="pending")
            .select_related("route", "origin__town", "destination__town",
                            "fare_class", "seating_plan", "vehicle")
            .filter(id=trip_id).first())


def trip_price(trip):
    """The applicable one-way Fare for origin → final destination, or None."""
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare
    return resolve_fare(trip.company, trip.route, trip.origin, trip.destination,
                        trip.fare_class, trip_type="one_way")


def trip_seat_counts(trip):
    """(total, available) seat counts for a trip."""
    total = TripSeat.objects.filter(is_deleted=False, trip=trip).count()
    available = TripSeat.objects.filter(is_deleted=False, trip=trip,
                                        status=TripSeat.Status.AVAILABLE).count()
    return total, available


def get_seat_map(trip):
    """TripSeat rows for a trip (modern seat map)."""
    from apps.voyages_booking.selectors import seat_map
    return seat_map(trip)


def first_available_seat(trip):
    """Next AVAILABLE TripSeat for a trip, or raise if the trip is full."""
    from apps.core.exceptions import ApplicationError
    from django.utils.translation import gettext as _
    seat = (TripSeat.objects.filter(is_deleted=False, trip=trip,
                                    status=TripSeat.Status.AVAILABLE)
            .order_by("row", "column").first())
    if not seat:
        raise ApplicationError(_("Ce voyage est complet."))
    return seat


def get_booking_request(request_id):
    """Fetch an online booking request — no company check (UUID is the secret)."""
    try:
        return (OnlineBookingRequest.objects
                .select_related("trip__origin__town", "trip__destination__town",
                                "trip_seat", "booking")
                .get(id=request_id, is_deleted=False))
    except OnlineBookingRequest.DoesNotExist:
        return None


def get_booking_request_by_payment_ref(payment_reference):
    try:
        return OnlineBookingRequest.objects.get(
            payment_reference=payment_reference, is_deleted=False
        )
    except OnlineBookingRequest.DoesNotExist:
        return None
