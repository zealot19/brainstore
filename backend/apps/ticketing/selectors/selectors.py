from django.db.models import Q, Count, Sum
from django.utils import timezone

from apps.ticketing.models import Customer, Booking, Ticket, Luggage


# ── Customers ──────────────────────────────────────────────────────────────────

def list_customers(company_id, *, search=None):
    qs = (Customer.objects
          .filter(company_id=company_id, is_deleted=False)
          .order_by("last_name", "first_name"))
    if search:
        qs = qs.filter(
            Q(first_name__icontains=search) |
            Q(last_name__icontains=search) |
            Q(phone__icontains=search) |
            Q(id_number__icontains=search)
        )
    return qs


def get_customer(customer_id, company_id):
    try:
        return Customer.objects.get(id=customer_id, company_id=company_id, is_deleted=False)
    except Customer.DoesNotExist:
        return None


# ── Bookings ───────────────────────────────────────────────────────────────────

def list_bookings(company_id, *, trip_id=None, customer_id=None,
                  status=None, date_from=None, date_to=None):
    qs = (Booking.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("trip__route", "customer", "fare")
          .order_by("-created_at"))
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if customer_id:
        qs = qs.filter(customer_id=customer_id)
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(trip__departure_datetime__date__gte=date_from)
    if date_to:
        qs = qs.filter(trip__departure_datetime__date__lte=date_to)
    return qs


def get_booking(booking_id, company_id):
    try:
        return (Booking.objects
                .select_related("trip__route__from_terminal__city",
                                "trip__route__to_terminal__city",
                                "customer", "fare", "ticket")
                .get(id=booking_id, company_id=company_id, is_deleted=False))
    except Booking.DoesNotExist:
        return None


def get_booking_by_reference(reference, company_id):
    try:
        return (Booking.objects
                .select_related("trip", "customer", "ticket")
                .get(reference=reference, company_id=company_id, is_deleted=False))
    except Booking.DoesNotExist:
        return None


def list_trip_bookings(trip_id, company_id):
    return (Booking.objects
            .filter(trip_id=trip_id, company_id=company_id, is_deleted=False)
            .select_related("customer", "ticket")
            .order_by("seat_number", "customer__last_name"))


def get_booking_stats(company_id, *, trip_id=None):
    qs = Booking.objects.filter(company_id=company_id, is_deleted=False)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    return {
        "total":     qs.count(),
        "pending":   qs.filter(status=Booking.Status.PENDING).count(),
        "confirmed": qs.filter(status=Booking.Status.CONFIRMED).count(),
        "boarded":   qs.filter(status=Booking.Status.BOARDED).count(),
        "cancelled": qs.filter(status=Booking.Status.CANCELLED).count(),
        "no_show":   qs.filter(status=Booking.Status.NO_SHOW).count(),
        "revenue":   qs.filter(status__in=[Booking.Status.CONFIRMED,
                                            Booking.Status.BOARDED])
                       .aggregate(total=Sum("amount_paid"))["total"] or 0,
    }


# ── Tickets ────────────────────────────────────────────────────────────────────

def get_ticket_by_qr(qr_code, company_id):
    try:
        return (Ticket.objects
                .select_related("booking__trip__route", "booking__customer")
                .get(qr_code=qr_code,
                     booking__company_id=company_id,
                     booking__is_deleted=False))
    except Ticket.DoesNotExist:
        return None


# ── Luggage ────────────────────────────────────────────────────────────────────

def list_luggage(booking_id, company_id):
    booking = get_booking(booking_id, company_id)
    if not booking:
        return None
    return booking.luggage_items.filter(is_deleted=False).order_by("tag_number")


def get_luggage(luggage_id, booking_id, company_id):
    booking = get_booking(booking_id, company_id)
    if not booking:
        return None
    try:
        return booking.luggage_items.get(id=luggage_id, is_deleted=False)
    except Luggage.DoesNotExist:
        return None
