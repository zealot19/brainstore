"""Réservations (billets non payés avec échéance).

Une réservation tient des sièges en HELD jusqu'à une échéance (`hold_until`).
Elle peut ensuite être payée (→ billets vendus) ou expirer (libération auto
des sièges). Réutilise les helpers de billetterie (booking_services)."""
from decimal import Decimal

from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.voyages_trips.models import TripSeat
from apps.voyages_booking.models import Booking, Ticket
from apps.voyages_booking.services import booking_services as B


@transaction.atomic
def create_reservation(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items,
                       hold_until, return_open=False, channel=Booking.Channel.COUNTER, user=None):
    if not items:
        raise ApplicationError(_("Aucun passager sélectionné."))
    B._assert_can_sell(user, outbound_trip)
    B._assert_bookable(outbound_trip)
    now = timezone.now()
    if not hold_until or hold_until <= now:
        raise ApplicationError(_("L'échéance de la réservation doit être dans le futur."))
    if hold_until > outbound_trip.scheduled_departure:
        hold_until = outbound_trip.scheduled_departure

    is_round = trip_type == Booking.TripType.ROUND_TRIP
    open_return = is_round and (return_open or not return_trip)
    if is_round and not open_return:
        B._assert_bookable(return_trip)

    # Plafond de réservations (non payées) autorisées sur le voyage aller.
    if outbound_trip.max_reservations is not None:
        held = TripSeat.objects.filter(trip=outbound_trip, is_deleted=False,
                                       status=TripSeat.Status.HELD).count()
        if held + len(items) > outbound_trip.max_reservations:
            raise ApplicationError(_("Nombre de réservations autorisées atteint pour ce voyage."))

    buyer = B._resolve_passenger(company, buyer_spec, user)
    booking = Booking.objects.create(
        company=company, agency=outbound_trip.origin.agency,
        reference=B._booking_reference(outbound_trip, outbound_trip.origin, outbound_trip.destination),
        status=Booking.Status.RESERVED, hold_until=hold_until,
        trip_type=trip_type, outbound_trip=outbound_trip,
        return_trip=return_trip if (is_round and not open_return) else None,
        return_open=open_return, buyer=buyer, channel=channel,
        payment_method="unpaid", created_by=user)

    total = Decimal("0")
    for item in items:
        passenger = B._resolve_passenger(company, item["passenger"], user)
        dest = B._resolve_destination(outbound_trip, item.get("destination_point_id"))
        fare = B._price(company, outbound_trip, dest, trip_type)
        out_seat = B._pick_seat(outbound_trip, item.get("outbound_seat_id"))
        out_ticket = Ticket.objects.create(
            booking=booking, number=B._ticket_number(outbound_trip, outbound_trip.origin, dest), passenger=passenger,
            trip=outbound_trip, trip_seat=out_seat, origin_point=outbound_trip.origin, destination_point=dest,
            direction=Ticket.Direction.OUTBOUND, fare=fare, fare_class=outbound_trip.fare_class,
            amount=fare.amount, status=Ticket.Status.RESERVED, created_by=user)
        _hold_seat(out_seat, booking, hold_until, user)
        total += fare.amount

        if is_round and not open_return:
            ret_seat = B._pick_seat(return_trip, item.get("return_seat_id"))
            Ticket.objects.create(
                booking=booking, number=B._ticket_number(return_trip, return_trip.origin, return_trip.destination), passenger=passenger,
                trip=return_trip, trip_seat=ret_seat, origin_point=return_trip.origin,
                destination_point=return_trip.destination, direction=Ticket.Direction.RETURN,
                return_of=out_ticket, fare=None, fare_class=return_trip.fare_class,
                amount=0, status=Ticket.Status.RESERVED, created_by=user)
            _hold_seat(ret_seat, booking, hold_until, user)

    booking.amount_due = total
    booking.amount_paid = Decimal("0")
    booking.updated_by = user
    booking.save(update_fields=["amount_due", "amount_paid", "updated_by", "updated_at"])
    return booking


def _hold_seat(seat, booking, hold_until, user):
    seat.status = TripSeat.Status.HELD
    seat.held_until = hold_until
    seat.booking_id = booking.id
    seat.updated_by = user
    seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])


@transaction.atomic
def pay_reservation(booking, *, payment_method, amount_received=None, user=None, cash_register_id=None):
    """Convertit une réservation en vente : billets vendus, sièges vendus, encaissement."""
    if booking.status != Booking.Status.RESERVED:
        raise ApplicationError(_("Seule une réservation non payée peut être encaissée."))
    if booking.hold_until and booking.hold_until < timezone.now():
        raise ApplicationError(_("Cette réservation a expiré ; les sièges ont été libérés."))

    total = booking.amount_due or Decimal("0")
    from apps.treasury.services.payment_resolution import resolve_payment
    pm = resolve_payment(booking.company, payment_method)
    no_payment = pm is not None and not pm.requires_payment
    received = Decimal("0") if no_payment else (Decimal(str(amount_received)) if amount_received is not None else total)
    if not no_payment and received < total:
        raise ApplicationError(_("Montant encaissé insuffisant : %(r)s < %(t)s.") % {"r": received, "t": total})

    for t in booking.tickets.filter(is_deleted=False, status=Ticket.Status.RESERVED):
        t.status = Ticket.Status.SOLD
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
        seat = t.trip_seat
        if seat and seat.status == TripSeat.Status.HELD:
            seat.status = TripSeat.Status.SOLD
            seat.held_until = None
            seat.updated_by = user
            seat.save(update_fields=["status", "held_until", "updated_by", "updated_at"])

    booking.status = Booking.Status.CONFIRMED
    booking.hold_until = None
    booking.amount_paid = total
    booking.amount_received = received
    booking.change_due = Decimal("0") if no_payment else received - total
    booking.payment_method = payment_method or ""
    booking.updated_by = user
    booking.save(update_fields=["status", "hold_until", "amount_paid", "amount_received",
                                "change_due", "payment_method", "updated_by", "updated_at"])

    from apps.voyages_booking.services import loyalty_services
    loyalty_services.accrue(booking, user=user)
    from apps.treasury.services import record_booking_payment
    record_booking_payment(booking.company, booking=booking, amount=total, payment_method=payment_method, user=user,
                           cash_register_id=cash_register_id)
    return booking


@transaction.atomic
def release_reservation(booking, *, user=None):
    """Libère une réservation (expiration ou annulation) : sièges libres, billets annulés."""
    if booking.status != Booking.Status.RESERVED:
        return booking
    for t in booking.tickets.filter(is_deleted=False):
        seat = t.trip_seat
        if seat and seat.status == TripSeat.Status.HELD:
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
    return booking


def release_expired_reservations(*, company=None, trip=None, now=None) -> int:
    """Libère les réservations dont l'échéance est passée. Renvoie le nombre libéré."""
    now = now or timezone.now()
    qs = Booking.objects.filter(status=Booking.Status.RESERVED, is_deleted=False,
                                hold_until__lt=now)
    if company is not None:
        qs = qs.filter(company=company)
    if trip is not None:
        qs = qs.filter(outbound_trip=trip)
    count = 0
    for booking in qs:
        release_reservation(booking, user=None)
        count += 1
    return count
