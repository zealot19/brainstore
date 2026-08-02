from datetime import timedelta
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_booking.models import Booking, Ticket, Passenger
from apps.voyages_booking.services.passenger_services import get_or_create_passenger
from apps.voyages_booking.services import loyalty_services
from apps.voyages_trips.models import TripSeat
from apps.voyages_config.models import VoyagesSettings
from apps.voyages_pricing.selectors.fare_selectors import resolve_fare

_PRE_DEPARTURE = ["draft", "pending"]


def _booking_reference():
    Sequence.objects.get_or_create(
        code="BOOK", defaults={"name": "Réservations", "prefix": "BOOK", "padding": 5, "reset_yearly": True})
    return next_number("BOOK")


def _ticket_number():
    Sequence.objects.get_or_create(
        code="TKT", defaults={"name": "Billets", "prefix": "TKT", "padding": 5, "reset_yearly": True})
    return next_number("TKT")


def _hold_window_hours(company):
    s = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
         or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
    return s.ticket_expiry_days * 24 if s else 24


def _assert_bookable(trip):
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert à la réservation."))
    if not TripSeat.objects.filter(is_deleted=False, trip=trip).exists():
        raise ApplicationError(_("Les sièges de ce voyage ne sont pas encore générés."))


def _resolve_passenger(company, spec, user):
    if spec.get("id"):
        p = Passenger.objects.filter(is_deleted=False, company=company, id=spec["id"]).first()
        if not p:
            raise ApplicationError(_("Passager introuvable."))
        return p
    return get_or_create_passenger(
        company, user=user,
        id_type=spec.get("id_type", "cni"), id_number=spec.get("id_number", ""),
        phone=spec.get("phone", ""), first_name=spec.get("first_name", ""),
        last_name=spec.get("last_name", ""), gender=spec.get("gender", ""),
        birth_date=spec.get("birth_date"), email=spec.get("email", ""))


def _lock_seat(trip, seat_id):
    seat = (TripSeat.objects.select_for_update()
            .filter(is_deleted=False, trip=trip, id=seat_id).first())
    if not seat:
        raise ApplicationError(_("Siège introuvable pour ce voyage."))
    if seat.status != TripSeat.Status.AVAILABLE:
        raise ApplicationError(_("Siège déjà pris."))
    return seat


def _price(company, trip, seat_trip_type):
    fare = resolve_fare(company, trip.route, trip.origin, trip.destination,
                        trip.fare_class, trip_type=seat_trip_type)
    if not fare:
        raise ApplicationError(
            _("Aucun tarif défini pour %(o)s → %(d)s (%(c)s, %(t)s).") % {
                "o": trip.origin.name, "d": trip.destination.name,
                "c": trip.fare_class.name, "t": seat_trip_type})
    return fare


@transaction.atomic
def create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items, user):
    if not items:
        raise ApplicationError(_("Aucun passager sélectionné."))
    _assert_bookable(outbound_trip)
    is_round = trip_type == Booking.TripType.ROUND_TRIP
    if is_round:
        if not return_trip:
            raise ApplicationError(_("Le voyage retour est requis pour un aller-retour."))
        _assert_bookable(return_trip)

    buyer = _resolve_passenger(company, buyer_spec, user)
    booking = Booking.objects.create(
        company=company, reference=_booking_reference(), status=Booking.Status.HELD,
        trip_type=trip_type, outbound_trip=outbound_trip, return_trip=return_trip if is_round else None,
        buyer=buyer, held_until=timezone.now() + timedelta(hours=_hold_window_hours(company)),
        created_by=user)

    # The round-trip fare on the outbound route covers the whole journey; the
    # return leg is a seat allocation priced at 0 (no separate return fare required).
    out_fare = _price(company, outbound_trip, trip_type)
    total = 0
    for item in items:
        passenger = _resolve_passenger(company, item["passenger"], user)
        out_seat = _lock_seat(outbound_trip, item["outbound_seat_id"])
        out_ticket = Ticket.objects.create(
            booking=booking, number=_ticket_number(), passenger=passenger, trip=outbound_trip,
            trip_seat=out_seat, direction=Ticket.Direction.OUTBOUND, fare=out_fare,
            fare_class=outbound_trip.fare_class, amount=out_fare.amount, status=Ticket.Status.HELD,
            created_by=user)
        out_seat.status = TripSeat.Status.HELD
        out_seat.held_until = booking.held_until
        out_seat.booking_id = booking.id
        out_seat.updated_by = user
        out_seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])
        total += out_fare.amount
        if is_round:
            if not item.get("return_seat_id"):
                raise ApplicationError(_("Un siège retour est requis pour chaque passager."))
            ret_seat = _lock_seat(return_trip, item["return_seat_id"])
            Ticket.objects.create(
                booking=booking, number=_ticket_number(), passenger=passenger, trip=return_trip,
                trip_seat=ret_seat, direction=Ticket.Direction.RETURN, return_of=out_ticket,
                fare=None, fare_class=return_trip.fare_class, amount=0, status=Ticket.Status.HELD,
                created_by=user)
            ret_seat.status = TripSeat.Status.HELD
            ret_seat.held_until = booking.held_until
            ret_seat.booking_id = booking.id
            ret_seat.updated_by = user
            ret_seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])

    booking.amount_due = total
    booking.updated_by = user
    booking.save(update_fields=["amount_due", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def confirm_booking(booking, *, payment_method, amount_paid, user):
    if booking.status != Booking.Status.HELD:
        raise ApplicationError(_("Seule une réservation en attente peut être confirmée."))
    if booking.held_until and booking.held_until < timezone.now():
        raise ApplicationError(_("La réservation a expiré."))
    for t in booking.tickets.filter(is_deleted=False):
        seat = t.trip_seat
        seat.status = TripSeat.Status.SOLD
        seat.updated_by = user
        seat.save(update_fields=["status", "updated_by", "updated_at"])
        t.status = Ticket.Status.SOLD
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
    booking.status = Booking.Status.CONFIRMED
    booking.payment_method = payment_method or ""
    booking.amount_paid = amount_paid or booking.amount_due
    booking.held_until = None
    booking.updated_by = user
    booking.save(update_fields=["status", "payment_method", "amount_paid", "held_until", "updated_by", "updated_at"])
    loyalty_services.accrue(booking, user=user)
    return booking


@transaction.atomic
def cancel_booking(booking, *, user):
    if booking.status in (Booking.Status.CANCELLED, Booking.Status.EXPIRED):
        return booking
    was_confirmed = booking.status in (Booking.Status.CONFIRMED, Booking.Status.BOARDED)
    for t in booking.tickets.filter(is_deleted=False):
        seat = t.trip_seat
        seat.status = TripSeat.Status.AVAILABLE
        seat.held_until = None
        seat.booking_id = None
        seat.updated_by = user
        seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])
        t.status = Ticket.Status.CANCELLED
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
    booking.status = Booking.Status.CANCELLED
    booking.updated_by = user
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    if was_confirmed:
        loyalty_services.reverse(booking, user=user)
    return booking


@transaction.atomic
def board_ticket(ticket, *, user):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être embarqué."))
    ticket.status = Ticket.Status.BOARDED
    ticket.boarded_at = timezone.now()
    ticket.updated_by = user
    ticket.save(update_fields=["status", "boarded_at", "updated_by", "updated_at"])
    seat = ticket.trip_seat
    seat.updated_by = user
    seat.save(update_fields=["updated_by", "updated_at"])
    if not ticket.booking.tickets.filter(is_deleted=False).exclude(status=Ticket.Status.BOARDED).exists():
        ticket.booking.status = Booking.Status.BOARDED
        ticket.booking.updated_by = user
        ticket.booking.save(update_fields=["status", "updated_by", "updated_at"])
    return ticket


@transaction.atomic
def mark_no_show(booking, *, user):
    if booking.status not in (Booking.Status.CONFIRMED,):
        raise ApplicationError(_("Seule une réservation confirmée peut être marquée non présentée."))
    booking.status = Booking.Status.NO_SHOW
    booking.updated_by = user
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def expire_holds(company=None):
    now = timezone.now()
    qs = Booking.objects.filter(is_deleted=False, status=Booking.Status.HELD, held_until__lt=now)
    if company:
        qs = qs.filter(company=company)
    count = 0
    for booking in qs.select_for_update():
        for t in booking.tickets.filter(is_deleted=False):
            seat = t.trip_seat
            seat.status = TripSeat.Status.AVAILABLE
            seat.held_until = None
            seat.booking_id = None
            seat.save(update_fields=["status", "held_until", "booking_id", "updated_at"])
            t.status = Ticket.Status.CANCELLED
            t.save(update_fields=["status", "updated_at"])
        booking.status = Booking.Status.EXPIRED
        booking.save(update_fields=["status", "updated_at"])
        count += 1
    return count
