from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.ticketing.models import Customer, Booking, Ticket, Luggage


# ── Reference generators ───────────────────────────────────────────────────────

def _next_booking_reference(company) -> str:
    date_str = timezone.now().strftime("%Y%m%d")
    prefix = f"BKG-{date_str}-"
    count = Booking.objects.filter(company=company, reference__startswith=prefix).count()
    return f"{prefix}{count + 1:04d}"


def _next_ticket_number(company) -> str:
    date_str = timezone.now().strftime("%Y%m%d")
    prefix = f"TKT-{date_str}-"
    count = Ticket.objects.filter(booking__company=company,
                                   ticket_number__startswith=prefix).count()
    return f"{prefix}{count + 1:04d}"


def _next_luggage_tag(company) -> str:
    date_str = timezone.now().strftime("%Y%m%d")
    prefix = f"LGG-{date_str}-"
    count = Luggage.objects.filter(booking__company=company,
                                    tag_number__startswith=prefix).count()
    return f"{prefix}{count + 1:04d}"


# ── Customers ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_customer(*, company, first_name, last_name, phone,
                    email="", id_type=Customer.IdType.CNI,
                    id_number="", date_of_birth=None, notes="", created_by):
    return Customer.objects.create(
        company=company,
        first_name=first_name, last_name=last_name,
        phone=phone, email=email,
        id_type=id_type, id_number=id_number,
        date_of_birth=date_of_birth, notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_customer(customer, *, updated_by, **fields):
    allowed = {
        "first_name", "last_name", "phone", "email",
        "id_type", "id_number", "date_of_birth", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(customer, key, val)
    customer.updated_by = updated_by
    customer.save()
    return customer


def delete_customer(customer, *, deleted_by):
    if customer.bookings.filter(is_deleted=False,
                                 status__in=[Booking.Status.CONFIRMED,
                                             Booking.Status.BOARDED]).exists():
        raise ApplicationError(_("Ce client a des réservations actives : il ne peut pas être supprimé."))
    customer.soft_delete(user=deleted_by)


# ── Bookings ───────────────────────────────────────────────────────────────────

@transaction.atomic
def create_booking(
    *, company, trip, customer,
    passenger_type=Booking.PassengerType.ADULT,
    seat_number="", fare=None, amount_paid=0,
    notes="", created_by,
):
    from apps.voyage.models import Trip as TripModel

    if trip.status in (TripModel.Status.ARRIVED, TripModel.Status.CANCELLED):
        raise ApplicationError(_("Impossible de réserver : ce voyage est terminé ou annulé."))
    if trip.status == TripModel.Status.DEPARTED:
        raise ApplicationError(_("Impossible de réserver : ce voyage est déjà parti."))

    # Seat availability check (annotate on the fly)
    from django.db.models import Count, Q
    annotated = TripModel.objects.annotate(
        booked_seats=Count("bookings", filter=Q(
            bookings__is_deleted=False,
            bookings__status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED]
        ))
    ).get(id=trip.id)
    available = annotated.total_seats - annotated.booked_seats
    if available <= 0:
        raise ApplicationError(_("No seats available on this trip."))

    # Seat number uniqueness for assigned seating
    if seat_number and not trip.free_seating:
        if Booking.objects.filter(
            trip=trip, seat_number=seat_number, is_deleted=False,
            status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED, Booking.Status.PENDING]
        ).exists():
            raise ApplicationError(
                _("Seat {seat} is already taken.").format(seat=seat_number)
            )

    reference = _next_booking_reference(company)
    booking = Booking.objects.create(
        company=company, reference=reference,
        trip=trip, customer=customer,
        passenger_type=passenger_type,
        seat_number=seat_number,
        fare=fare, amount_paid=amount_paid,
        status=Booking.Status.CONFIRMED,
        notes=notes, created_by=created_by,
    )

    # Auto-create ticket
    _issue_ticket(booking, issued_by=created_by)
    return booking


def _issue_ticket(booking, *, issued_by):
    ticket_number = _next_ticket_number(booking.company)
    return Ticket.objects.create(
        booking=booking,
        ticket_number=ticket_number,
        issued_by=issued_by,
    )


@transaction.atomic
def confirm_booking(booking, *, updated_by):
    """Move a PENDING booking to CONFIRMED and issue ticket."""
    if booking.status != Booking.Status.PENDING:
        raise ApplicationError(_("Only pending bookings can be confirmed."))
    booking.status = Booking.Status.CONFIRMED
    booking.updated_by = updated_by
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    if not hasattr(booking, "ticket"):
        _issue_ticket(booking, issued_by=updated_by)
    return booking


@transaction.atomic
def board_passenger(booking, *, updated_by):
    """Scan ticket: mark passenger as boarded."""
    if booking.status != Booking.Status.CONFIRMED:
        raise ApplicationError(
            _("Only confirmed bookings can be boarded (current: {s}).").format(
                s=booking.get_status_display()
            )
        )
    now = timezone.now()
    booking.status = Booking.Status.BOARDED
    booking.updated_by = updated_by
    booking.save(update_fields=["status", "updated_by", "updated_at"])

    if hasattr(booking, "ticket"):
        booking.ticket.is_used = True
        booking.ticket.used_at = now
        booking.ticket.save(update_fields=["is_used", "used_at"])
    return booking


@transaction.atomic
def board_by_qr(qr_code, company_id, *, updated_by):
    """Board a passenger by scanning their QR code."""
    from apps.ticketing.selectors import get_ticket_by_qr
    ticket = get_ticket_by_qr(qr_code, company_id)
    if not ticket:
        raise ApplicationError(_("Billet introuvable."))
    if ticket.is_used:
        raise ApplicationError(_("Ce billet a déjà été utilisé."))
    return board_passenger(ticket.booking, updated_by=updated_by)


@transaction.atomic
def cancel_booking(booking, *, updated_by):
    if booking.status in (Booking.Status.BOARDED, Booking.Status.CANCELLED):
        raise ApplicationError(
            _("Cannot cancel a booking that is already boarded or cancelled.")
        )
    booking.status = Booking.Status.CANCELLED
    booking.updated_by = updated_by
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def mark_no_show(booking, *, updated_by):
    if booking.status != Booking.Status.CONFIRMED:
        raise ApplicationError(_("Only confirmed bookings can be marked as no-show."))
    booking.status = Booking.Status.NO_SHOW
    booking.updated_by = updated_by
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    return booking


# ── Luggage ────────────────────────────────────────────────────────────────────

_LUGGAGE_TRANSITIONS = {
    Luggage.Status.CHECKED_IN: [Luggage.Status.LOADED, Luggage.Status.LOST],
    Luggage.Status.LOADED:     [Luggage.Status.DELIVERED, Luggage.Status.LOST],
    Luggage.Status.DELIVERED:  [],
    Luggage.Status.LOST:       [],
}


@transaction.atomic
def add_luggage(*, booking, description="", weight_kg=None, created_by):
    tag_number = _next_luggage_tag(booking.company)
    return Luggage.objects.create(
        booking=booking, tag_number=tag_number,
        description=description, weight_kg=weight_kg,
        status=Luggage.Status.CHECKED_IN,
        created_by=created_by,
    )


@transaction.atomic
def update_luggage_status(luggage, *, new_status: str, updated_by):
    allowed_next = _LUGGAGE_TRANSITIONS.get(luggage.status, [])
    if new_status not in allowed_next:
        raise ApplicationError(
            _("Cannot move luggage from {current} to {next}.").format(
                current=luggage.get_status_display(),
                next=Luggage.Status(new_status).label,
            )
        )
    luggage.status = new_status
    luggage.updated_by = updated_by
    luggage.save(update_fields=["status", "updated_by", "updated_at"])
    return luggage


def delete_luggage(luggage, *, deleted_by):
    if luggage.status in (Luggage.Status.LOADED, Luggage.Status.DELIVERED):
        raise ApplicationError(_("Impossible de retirer un bagage déjà chargé ou livré."))
    luggage.soft_delete(user=deleted_by)
