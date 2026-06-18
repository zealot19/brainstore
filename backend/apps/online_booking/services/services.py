import logging
from django.conf import settings
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.online_booking.models import OnlineBookingRequest
from apps.online_booking.campay import CampayClient, CampayError
from apps.ticketing.models import Booking

logger = logging.getLogger(__name__)


def _webhook_url() -> str:
    return getattr(settings, "CAMPAY_WEBHOOK_URL", "")


def _redirect_url() -> str:
    return getattr(settings, "CAMPAY_REDIRECT_URL", "")


# ── Booking initiation ─────────────────────────────────────────────────────────

@transaction.atomic
def initiate_booking(
    *, company, trip,
    passenger_name, passenger_phone, passenger_email="",
    passenger_type="adult", seat_number="",
    fare=None, amount,
    payment_method, payment_phone,
):
    """
    Validate availability, create the OnlineBookingRequest and call Campay.
    Returns the created request (with payment_reference set).
    """
    from django.db.models import Count, Q

    if trip.status in (trip.Status.ARRIVED, trip.Status.CANCELLED, trip.Status.DEPARTED):
        raise ApplicationError(_("This trip is no longer available for booking."))

    # Seat availability
    annotated = (
        type(trip).objects
        .annotate(booked_seats=Count("bookings", filter=Q(
            bookings__is_deleted=False,
            bookings__status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED]
        )))
        .get(id=trip.id)
    )
    available = annotated.total_seats - annotated.booked_seats
    if available <= 0:
        raise ApplicationError(_("No seats available on this trip."))

    # Seat uniqueness for assigned seating
    if seat_number and not trip.free_seating:
        if Booking.objects.filter(
            trip=trip, seat_number=seat_number, is_deleted=False,
            status__in=[Booking.Status.PENDING, Booking.Status.CONFIRMED, Booking.Status.BOARDED]
        ).exists():
            raise ApplicationError(
                _("Seat {seat} is already taken.").format(seat=seat_number)
            )

    # Create pending request
    booking_request = OnlineBookingRequest.objects.create(
        company=company, trip=trip,
        passenger_name=passenger_name, passenger_phone=passenger_phone,
        passenger_email=passenger_email,
        passenger_type=passenger_type, seat_number=seat_number,
        fare=fare, amount=amount,
        payment_method=payment_method, payment_phone=payment_phone,
        status=OnlineBookingRequest.Status.PENDING,
    )

    # Call Campay
    try:
        client = CampayClient()
        resp = client.collect(
            amount=str(int(amount)),
            from_phone=payment_phone,
            description=(
                f"Booking {trip.route} — {passenger_name} "
                f"[{trip.departure_datetime:%Y-%m-%d %H:%M}]"
            ),
            external_reference=str(booking_request.id),
            webhook_url=_webhook_url(),
            redirect_url=_redirect_url(),
        )
        booking_request.payment_reference = resp.get("reference", "")
        booking_request.save(update_fields=["payment_reference"])
    except CampayError as exc:
        logger.error("Campay collect failed for request %s: %s", booking_request.id, exc)
        booking_request.status = OnlineBookingRequest.Status.FAILED
        booking_request.save(update_fields=["status"])
        raise ApplicationError(
            _("Payment initiation failed. Please try again later.")
        ) from exc

    return booking_request


# ── Payment confirmation (called by webhook) ───────────────────────────────────

@transaction.atomic
def confirm_payment(booking_request, *, operator_ref=""):
    """
    Called when Campay confirms a successful payment.
    Creates a Customer + Booking + Ticket in the ticketing module.
    """
    if booking_request.status != OnlineBookingRequest.Status.PENDING:
        return booking_request  # already processed

    if booking_request.is_expired:
        booking_request.status = OnlineBookingRequest.Status.EXPIRED
        booking_request.save(update_fields=["status"])
        return booking_request

    from apps.ticketing.models import Customer
    from apps.ticketing.services import create_booking

    # Get or create customer by phone
    customer, _ = Customer.objects.get_or_create(
        company=booking_request.company,
        phone=booking_request.passenger_phone,
        defaults={
            "first_name": booking_request.passenger_name.split()[0],
            "last_name":  " ".join(booking_request.passenger_name.split()[1:]) or "-",
            "email":      booking_request.passenger_email,
        },
    )

    # Create booking as system action (no user — use None-safe pattern)
    booking = create_booking(
        company=booking_request.company,
        trip=booking_request.trip,
        customer=customer,
        passenger_type=booking_request.passenger_type,
        seat_number=booking_request.seat_number,
        fare=booking_request.fare,
        amount_paid=booking_request.amount,
        notes="Online booking via Mobile Money",
        created_by=None,
    )

    booking_request.booking = booking
    booking_request.status  = OnlineBookingRequest.Status.PAID
    if operator_ref:
        booking_request.payment_operator_ref = operator_ref
    booking_request.save(update_fields=["booking", "status", "payment_operator_ref"])
    return booking_request


@transaction.atomic
def fail_payment(booking_request, *, operator_ref=""):
    """Called when Campay reports a failed payment."""
    if booking_request.status != OnlineBookingRequest.Status.PENDING:
        return booking_request
    booking_request.status = OnlineBookingRequest.Status.FAILED
    if operator_ref:
        booking_request.payment_operator_ref = operator_ref
    booking_request.save(update_fields=["status", "payment_operator_ref"])
    return booking_request


# ── Status polling (fallback if webhook not received) ─────────────────────────

def sync_payment_status(booking_request):
    """
    Polls Campay for the current status of a pending payment.
    Called when the customer checks their booking status.
    """
    if booking_request.status != OnlineBookingRequest.Status.PENDING:
        return booking_request
    if booking_request.is_expired:
        booking_request.status = OnlineBookingRequest.Status.EXPIRED
        booking_request.save(update_fields=["status"])
        return booking_request
    if not booking_request.payment_reference:
        return booking_request

    try:
        client = CampayClient()
        resp   = client.check_transaction(booking_request.payment_reference)
        campay_status = resp.get("status", "")

        if campay_status == "SUCCESSFUL":
            return confirm_payment(
                booking_request,
                operator_ref=resp.get("operator_reference", ""),
            )
        elif campay_status == "FAILED":
            return fail_payment(
                booking_request,
                operator_ref=resp.get("operator_reference", ""),
            )
    except CampayError as exc:
        logger.warning("Could not sync payment status for %s: %s",
                       booking_request.id, exc)

    return booking_request


# ── Expiry helper ──────────────────────────────────────────────────────────────

def expire_stale_requests():
    """
    Mark all PENDING requests past their expiry as EXPIRED.
    Call from a management command or periodic task.
    """
    updated = (OnlineBookingRequest.objects
               .filter(status=OnlineBookingRequest.Status.PENDING,
                       expires_at__lt=timezone.now())
               .update(status=OnlineBookingRequest.Status.EXPIRED))
    return updated
