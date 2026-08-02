from django.utils import timezone
from django.db.models import Q
from apps.voyages_booking.models import Passenger, Booking, LoyaltyAccount
from apps.voyages_trips.models import Trip, TripSeat

_PRE_DEPARTURE = ["draft", "pending"]


def find_passengers(company, q=None):
    qs = Passenger.objects.filter(is_deleted=False, company=company).order_by("last_name", "first_name")
    if q:
        qs = qs.filter(Q(phone__icontains=q) | Q(id_number__icontains=q) |
                       Q(first_name__icontains=q) | Q(last_name__icontains=q))
    return qs


def bookable_trips(company):
    return (Trip.objects.filter(is_deleted=False, company=company,
                                status__in=_PRE_DEPARTURE,
                                scheduled_departure__gte=timezone.now())
            .filter(seats__isnull=False).distinct()
            .select_related("route", "origin", "destination", "fare_class")
            .order_by("scheduled_departure"))


def seat_map(trip):
    return (TripSeat.objects.filter(is_deleted=False, trip=trip)
            .order_by("row", "column"))


def list_bookings(company, status=None, trip_id=None, q=None):
    qs = (Booking.objects.filter(is_deleted=False, company=company)
          .select_related("outbound_trip", "return_trip", "buyer")
          .order_by("-created_at"))
    if status:
        qs = qs.filter(status=status)
    if trip_id:
        qs = qs.filter(Q(outbound_trip_id=trip_id) | Q(return_trip_id=trip_id))
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(buyer__phone__icontains=q) |
                       Q(buyer__last_name__icontains=q))
    return qs


def booking_detail(company, pk):
    return (Booking.objects.filter(is_deleted=False, company=company, id=pk)
            .select_related("outbound_trip", "return_trip", "buyer")
            .prefetch_related("tickets__passenger", "tickets__trip_seat", "tickets__fare_class")
            .first())


def loyalty_view(passenger):
    acc = LoyaltyAccount.objects.filter(is_deleted=False, passenger=passenger).first()
    movements = acc.movements.filter(is_deleted=False).select_related("rule")[:100] if acc else []
    return acc, movements


__all__ = ["find_passengers", "bookable_trips", "seat_map",
           "list_bookings", "booking_detail", "loyalty_view"]
