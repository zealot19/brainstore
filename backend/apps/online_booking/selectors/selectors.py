from django.db.models import Count, Q
from django.utils import timezone

from apps.online_booking.models import OnlineBookingRequest
from apps.voyage.models import Trip
from apps.ticketing.models import Booking


def get_served_towns(company_id):
    """Towns that are endpoints (origin or destination) of the company's routes."""
    from apps.voyages_config.models import Route, Town
    routes = Route.objects.filter(company_id=company_id, is_deleted=False)
    town_ids = set(routes.values_list("origin__town_id", flat=True)) | \
        set(routes.values_list("destination__town_id", flat=True))
    return Town.objects.filter(id__in=town_ids, is_deleted=False).order_by("name")


def search_trips(company_id, *, from_city_id, to_city_id, travel_date):
    """Available trips for online booking — same logic as voyage.selectors.search_trips."""
    return (Trip.objects
            .filter(company_id=company_id, is_deleted=False,
                    status__in=[Trip.Status.SCHEDULED, Trip.Status.BOARDING],
                    departure_datetime__date=travel_date,
                    departure_datetime__gt=timezone.now(),
                    route__from_terminal__city_id=from_city_id,
                    route__to_terminal__city_id=to_city_id)
            .select_related(
                "route__from_terminal__city",
                "route__to_terminal__city",
                "vehicle_category", "fare_class",
            )
            .annotate(booked_seats=Count("bookings", filter=Q(
                bookings__is_deleted=False,
                bookings__status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED]
            )))
            .order_by("departure_datetime"))


def get_public_trip(trip_id, company_id):
    """Single trip detail for public display."""
    try:
        return (Trip.objects
                .filter(company_id=company_id, is_deleted=False,
                        status__in=[Trip.Status.SCHEDULED, Trip.Status.BOARDING])
                .select_related(
                    "route__from_terminal__city",
                    "route__to_terminal__city",
                    "vehicle_category", "fare_class",
                )
                .annotate(booked_seats=Count("bookings", filter=Q(
                    bookings__is_deleted=False,
                    bookings__status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED]
                )))
                .get(id=trip_id))
    except Trip.DoesNotExist:
        return None


def get_booked_seats(trip_id):
    """Return list of taken seat numbers for assigned-seating trips."""
    return list(
        Booking.objects
        .filter(trip_id=trip_id, is_deleted=False,
                status__in=[Booking.Status.PENDING, Booking.Status.CONFIRMED,
                             Booking.Status.BOARDED],
                seat_number__gt="")
        .values_list("seat_number", flat=True)
    )


def get_booking_request(request_id):
    """Fetch an online booking request — no company check (UUID is the secret)."""
    try:
        return (OnlineBookingRequest.objects
                .select_related("trip__route__from_terminal__city",
                                "trip__route__to_terminal__city",
                                "booking__ticket")
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
