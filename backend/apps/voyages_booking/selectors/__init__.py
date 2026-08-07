from django.utils import timezone
from django.db.models import Q
from apps.voyages_booking.models import Passenger, Booking, LoyaltyAccount
from apps.voyages_trips.models import Trip, TripSeat
from apps.voyages_config.models import TimeSlot
from apps.voyages_pricing.selectors.fare_selectors import route_points, resolve_fare

_PRE_DEPARTURE = ["draft", "pending"]


def find_passengers(company, q=None):
    qs = Passenger.objects.filter(is_deleted=False, company=company).order_by("last_name", "first_name")
    if q:
        qs = qs.filter(Q(phone__icontains=q) | Q(id_number__icontains=q) |
                       Q(first_name__icontains=q) | Q(last_name__icontains=q))
    return qs


def bookable_trips(company, fare_class_id=None, time_slot_id=None, travel_date=None):
    qs = (Trip.objects.filter(is_deleted=False, company=company,
                              status__in=_PRE_DEPARTURE,
                              scheduled_departure__gte=timezone.now())
          .filter(seats__isnull=False).distinct()
          .select_related("route", "origin", "destination", "fare_class", "service_pattern")
          .order_by("scheduled_departure"))
    if fare_class_id:
        qs = qs.filter(fare_class_id=fare_class_id)
    if travel_date:
        # Match on the trip's local departure date.
        qs = qs.filter(scheduled_departure__date=travel_date)
    if not time_slot_id:
        return qs
    slot = TimeSlot.objects.filter(is_deleted=False, id=time_slot_id).first()
    if not slot:
        return qs
    # A trip matches the plage horaire either via its service pattern or by its
    # local departure time falling inside the slot window.
    out = []
    for t in qs:
        if t.service_pattern_id and t.service_pattern.time_slot_id == slot.id:
            out.append(t)
            continue
        lt = timezone.localtime(t.scheduled_departure).time()
        if slot.start_time <= lt <= slot.end_time:
            out.append(t)
    return out


def seat_map(trip):
    return (TripSeat.objects.filter(is_deleted=False, trip=trip)
            .order_by("row", "column"))


def trip_destinations(trip):
    """Selectable drop points for a trip (every route point after the origin),
    each with the resolved one-way and round-trip fare for the trip's class."""
    company = trip.company
    pts = route_points(trip.route)  # [origin, escales..., destination]
    out = []
    for p in pts[1:]:
        ow = resolve_fare(company, trip.route, trip.origin, p, trip.fare_class, trip_type="one_way")
        rt = resolve_fare(company, trip.route, trip.origin, p, trip.fare_class, trip_type="round_trip")
        out.append({
            "id": p.id, "name": p.name, "code": p.code, "is_station": p.is_station,
            "one_way_amount": ow.amount if ow else None,
            "round_trip_amount": rt.amount if rt else None,
        })
    return out


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


def open_return_bookings(company, q=None):
    qs = (Booking.objects.filter(is_deleted=False, company=company, return_open=True)
          .exclude(status=Booking.Status.CANCELLED)
          .select_related("outbound_trip", "buyer")
          .order_by("-created_at"))
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(buyer__phone__icontains=q) |
                       Q(buyer__last_name__icontains=q) | Q(buyer__first_name__icontains=q))
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


def trip_passengers(trip):
    """Billets vendus/embarqués d'un voyage, triés par siège (pour la feuille de route)."""
    from apps.voyages_booking.models import Ticket
    return (Ticket.objects.filter(is_deleted=False, trip=trip,
                                  status__in=[Ticket.Status.SOLD, Ticket.Status.BOARDED])
            .select_related("passenger", "trip_seat", "destination_point")
            .order_by("trip_seat__row", "trip_seat__column"))


__all__ = ["find_passengers", "bookable_trips", "seat_map", "trip_destinations",
           "list_bookings", "booking_detail", "loyalty_view", "trip_passengers",
           "open_return_bookings"]
