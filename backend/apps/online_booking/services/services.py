import logging
from django.conf import settings
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.online_booking.models import OnlineBookingRequest
from apps.online_booking.campay import CampayClient, CampayError

logger = logging.getLogger(__name__)


def _webhook_url() -> str:
    return getattr(settings, "CAMPAY_WEBHOOK_URL", "")


def _redirect_url() -> str:
    return getattr(settings, "CAMPAY_REDIRECT_URL", "")


def _actor(company):
    """A real user to attribute a system-initiated online booking to.

    create_booking / get_or_create_passenger stamp created_by; online sales have no
    logged-in user, so we attribute them to the institution's admin.
    """
    from apps.authentication.models import User
    return (User.objects.filter(company=company, is_institution_admin=True, is_active=True)
            .order_by("date_joined").first())


def _start_campay_payment(booking_request):
    """Initiate the Mobile Money collection with Campay and store its reference."""
    trip = booking_request.trip
    try:
        client = CampayClient()
        resp = client.collect(
            amount=str(int(booking_request.amount)),
            from_phone=booking_request.payment_phone,
            description=(
                f"Réservation {trip.route} — {booking_request.passenger_name} "
                f"[{trip.scheduled_departure:%Y-%m-%d %H:%M}]"
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
            _("L'initiation du paiement a échoué. Veuillez réessayer dans un instant.")
        ) from exc
    return booking_request


# ── Booking initiation ─────────────────────────────────────────────────────────

@transaction.atomic
def initiate_booking(
    *, company, trip,
    passenger_name, passenger_phone, passenger_email="",
    seat_id, payment_method, payment_phone,
    destination_point_id=None,
):
    """Validate the seat, resolve the fare server-side, create the request, call Campay."""
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_config.models import ServicePoint
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare

    seat = TripSeat.objects.filter(is_deleted=False, trip=trip, id=seat_id).first()
    if not seat:
        raise ApplicationError(_("Siège introuvable pour ce voyage."))
    if seat.status != TripSeat.Status.AVAILABLE:
        raise ApplicationError(_("Ce siège vient d'être pris. Veuillez en choisir un autre."))

    dest = trip.destination
    if destination_point_id:
        dest = (ServicePoint.objects.filter(is_deleted=False, company=company,
                                            id=destination_point_id).first()
                or trip.destination)

    fare = resolve_fare(company, trip.route, trip.origin, dest, trip.fare_class,
                        trip_type="one_way")
    if not fare:
        raise ApplicationError(_("Aucun tarif n'est défini pour ce trajet. Contactez l'agence."))

    booking_request = OnlineBookingRequest.objects.create(
        company=company, trip=trip, trip_seat=seat, destination_point=dest,
        passenger_name=passenger_name, passenger_phone=passenger_phone,
        passenger_email=passenger_email, amount=fare.amount,
        payment_method=payment_method, payment_phone=payment_phone,
        status=OnlineBookingRequest.Status.PENDING,
    )
    return _start_campay_payment(booking_request)


# ── Payment confirmation (called by webhook / status poll) ──────────────────────

@transaction.atomic
def confirm_payment(booking_request, *, operator_ref=""):
    """Called when Campay confirms a successful payment: create the real booking."""
    if booking_request.status != OnlineBookingRequest.Status.PENDING:
        return booking_request  # already processed

    if booking_request.is_expired:
        booking_request.status = OnlineBookingRequest.Status.EXPIRED
        booking_request.save(update_fields=["status"])
        return booking_request

    from apps.voyages_booking.services import create_booking
    from apps.voyages_booking.models import Booking

    passenger_spec = {
        "name": booking_request.passenger_name,
        "phone": booking_request.passenger_phone,
        "email": booking_request.passenger_email,
    }
    booking = create_booking(
        booking_request.company,
        trip_type="one_way",
        outbound_trip=booking_request.trip,
        return_trip=None,
        buyer_spec=passenger_spec,
        items=[{
            "passenger": passenger_spec,
            "destination_point_id": booking_request.destination_point_id,
            "outbound_seat_id": booking_request.trip_seat_id,
        }],
        payment_method=booking_request.payment_method,
        channel=Booking.Channel.ONLINE,
        user=_actor(booking_request.company),
    )

    booking_request.booking = booking
    booking_request.status = OnlineBookingRequest.Status.PAID
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
    """Poll Campay for the current status of a pending payment."""
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
        resp = client.check_transaction(booking_request.payment_reference)
        campay_status = resp.get("status", "")
        if campay_status == "SUCCESSFUL":
            return confirm_payment(booking_request, operator_ref=resp.get("operator_reference", ""))
        elif campay_status == "FAILED":
            return fail_payment(booking_request, operator_ref=resp.get("operator_reference", ""))
    except CampayError as exc:
        logger.warning("Could not sync payment status for %s: %s", booking_request.id, exc)

    return booking_request


# ── Expiry helper ──────────────────────────────────────────────────────────────

def expire_stale_requests():
    """Mark all PENDING requests past their expiry as EXPIRED."""
    return (OnlineBookingRequest.objects
            .filter(status=OnlineBookingRequest.Status.PENDING,
                    expires_at__lt=timezone.now())
            .update(status=OnlineBookingRequest.Status.EXPIRED))
