from decimal import Decimal
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
from apps.voyages_config.models import ServicePoint
from apps.voyages_pricing.selectors.fare_selectors import resolve_fare, route_points

# Un voyage n'est réservable qu'une fois soumis (statut « pending »), pas en brouillon.
_BOOKABLE = ["pending"]


def _booking_reference():
    Sequence.objects.get_or_create(
        code="BOOK", defaults={"name": "Réservations", "prefix": "BOOK", "padding": 5, "reset_yearly": True})
    return next_number("BOOK")


def _ticket_number():
    Sequence.objects.get_or_create(
        code="TKT", defaults={"name": "Billets", "prefix": "TKT", "padding": 5, "reset_yearly": True})
    return next_number("TKT")


def _assert_bookable(trip):
    if trip.status not in _BOOKABLE:
        raise ApplicationError(_("Le voyage doit être soumis avant toute réservation (les brouillons ne sont pas réservables)."))
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


def _resolve_destination(trip, destination_point_id):
    """The chosen drop point must be a route point downstream of the origin."""
    pts = route_points(trip.route)          # [origin, escales..., destination]
    downstream = {p.id: p for p in pts[1:]}
    if destination_point_id is None:
        # Default to the trip's final destination
        return trip.destination
    dest = downstream.get(destination_point_id)
    if not dest:
        dest = ServicePoint.objects.filter(is_deleted=False, company=trip.company, id=destination_point_id).first()
        if dest is None or dest.id not in downstream:
            raise ApplicationError(_("Point de descente invalide pour ce voyage."))
    return dest


def _price(company, trip, destination_point, trip_type):
    fare = resolve_fare(company, trip.route, trip.origin, destination_point, trip.fare_class, trip_type=trip_type)
    if not fare:
        raise ApplicationError(
            _("Aucun tarif défini pour %(o)s → %(d)s (%(c)s, %(t)s).") % {
                "o": trip.origin.name, "d": destination_point.name,
                "c": trip.fare_class.name, "t": trip_type})
    return fare


@transaction.atomic
def create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items,
                   payment_method="", amount_received=None, return_open=False, user):
    """Create a fully-paid booking in a single step (no hold/confirm phase).

    items: [{"passenger": <spec>, "destination_point_id": UUID|None,
             "outbound_seat_id": UUID, "return_seat_id": UUID|None}]

    Aller-retour a retour ouvert : trip_type=round_trip + return_open=True + pas de
    return_trip -> seuls les billets aller sont crees, le tarif A/R est facture,
    le retour sera affecte plus tard via assign_return().
    """
    if not items:
        raise ApplicationError(_("Aucun passager sélectionné."))
    _assert_bookable(outbound_trip)
    is_round = trip_type == Booking.TripType.ROUND_TRIP
    open_return = is_round and (return_open or not return_trip)
    if is_round and not open_return:
        _assert_bookable(return_trip)

    buyer = _resolve_passenger(company, buyer_spec, user)
    booking = Booking.objects.create(
        company=company, reference=_booking_reference(), status=Booking.Status.CONFIRMED,
        trip_type=trip_type, outbound_trip=outbound_trip,
        return_trip=return_trip if (is_round and not open_return) else None,
        return_open=open_return, buyer=buyer, created_by=user)

    total = Decimal("0")
    for item in items:
        passenger = _resolve_passenger(company, item["passenger"], user)
        dest = _resolve_destination(outbound_trip, item.get("destination_point_id"))
        fare = _price(company, outbound_trip, dest, trip_type)

        out_seat = _lock_seat(outbound_trip, item["outbound_seat_id"])
        out_ticket = Ticket.objects.create(
            booking=booking, number=_ticket_number(), passenger=passenger, trip=outbound_trip,
            trip_seat=out_seat, origin_point=outbound_trip.origin, destination_point=dest,
            direction=Ticket.Direction.OUTBOUND, fare=fare, fare_class=outbound_trip.fare_class,
            amount=fare.amount, status=Ticket.Status.SOLD, created_by=user)
        out_seat.status = TripSeat.Status.SOLD
        out_seat.booking_id = booking.id
        out_seat.updated_by = user
        out_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
        total += fare.amount

        if is_round and not open_return:
            if not item.get("return_seat_id"):
                raise ApplicationError(_("Un siège retour est requis pour chaque passager."))
            ret_seat = _lock_seat(return_trip, item["return_seat_id"])
            Ticket.objects.create(
                booking=booking, number=_ticket_number(), passenger=passenger, trip=return_trip,
                trip_seat=ret_seat, origin_point=return_trip.origin, destination_point=return_trip.destination,
                direction=Ticket.Direction.RETURN, return_of=out_ticket, fare=None,
                fare_class=return_trip.fare_class, amount=0, status=Ticket.Status.SOLD, created_by=user)
            ret_seat.status = TripSeat.Status.SOLD
            ret_seat.booking_id = booking.id
            ret_seat.updated_by = user
            ret_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])

    received = Decimal(str(amount_received)) if amount_received is not None else total
    if received < total:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(t)s.") % {"r": received, "t": total})

    booking.amount_due = total
    booking.amount_paid = total
    booking.amount_received = received
    booking.change_due = received - total
    booking.payment_method = payment_method or ""
    booking.updated_by = user
    booking.save(update_fields=["amount_due", "amount_paid", "amount_received", "change_due",
                                "payment_method", "updated_by", "updated_at"])
    loyalty_services.accrue(booking, user=user)

    from apps.treasury.services import record_booking_payment
    record_booking_payment(company, booking=booking, amount=total, payment_method=payment_method, user=user)
    return booking


@transaction.atomic
def assign_return(booking, return_trip, *, items, user):
    """Affecte le voyage retour d'un A/R a retour ouvert et emet les billets retour.

    items: [{"outbound_ticket_id": UUID, "return_seat_id": UUID}] — un par billet aller.
    """
    if booking.trip_type != Booking.TripType.ROUND_TRIP or not booking.return_open:
        raise ApplicationError(_("Cette réservation n'a pas de retour ouvert à affecter."))
    _assert_bookable(return_trip)
    outbound_tickets = list(booking.tickets.filter(is_deleted=False, direction=Ticket.Direction.OUTBOUND))
    if len(items) != len(outbound_tickets):
        raise ApplicationError(_("Un siège retour est requis pour chaque passager."))
    by_id = {str(t.id): t for t in outbound_tickets}
    for item in items:
        out_ticket = by_id.get(str(item.get("outbound_ticket_id")))
        if not out_ticket:
            raise ApplicationError(_("Billet aller introuvable pour cette réservation."))
        if out_ticket.return_tickets.filter(is_deleted=False).exists():
            raise ApplicationError(_("Un billet retour existe déjà pour ce passager."))
        ret_seat = _lock_seat(return_trip, item["return_seat_id"])
        Ticket.objects.create(
            booking=booking, number=_ticket_number(), passenger=out_ticket.passenger, trip=return_trip,
            trip_seat=ret_seat, origin_point=return_trip.origin, destination_point=return_trip.destination,
            direction=Ticket.Direction.RETURN, return_of=out_ticket, fare=None,
            fare_class=return_trip.fare_class, amount=0, status=Ticket.Status.SOLD, created_by=user)
        ret_seat.status = TripSeat.Status.SOLD
        ret_seat.booking_id = booking.id
        ret_seat.updated_by = user
        ret_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
    booking.return_trip = return_trip
    booking.return_open = False
    booking.updated_by = user
    booking.save(update_fields=["return_trip", "return_open", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def cancel_booking(booking, *, user):
    if booking.status == Booking.Status.CANCELLED:
        return booking
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
    loyalty_services.reverse(booking, user=user)
    return booking


@transaction.atomic
def board_ticket(ticket, *, user):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être embarqué."))
    if ticket.trip.status not in ("pending", "departed"):
        raise ApplicationError(_("L'embarquement n'est possible qu'à l'approche du départ."))
    ticket.status = Ticket.Status.BOARDED
    ticket.boarded_at = timezone.now()
    ticket.updated_by = user
    ticket.save(update_fields=["status", "boarded_at", "updated_by", "updated_at"])
    if not ticket.booking.tickets.filter(is_deleted=False).exclude(status=Ticket.Status.BOARDED).exists():
        ticket.booking.status = Booking.Status.BOARDED
        ticket.booking.updated_by = user
        ticket.booking.save(update_fields=["status", "updated_by", "updated_at"])
    return ticket


@transaction.atomic
def board_all_tickets(trip, *, user):
    """Embarque tous les billets vendus non encore embarqués d'un voyage. Idempotent."""
    if trip.status not in ("pending", "departed"):
        raise ApplicationError(_("L'embarquement n'est possible qu'à l'approche du départ."))
    done = 0
    for t in trip.tickets.filter(is_deleted=False, status=Ticket.Status.SOLD):
        board_ticket(t, user=user)
        done += 1
    return done


@transaction.atomic
def mark_no_show(booking, *, user):
    if booking.status != Booking.Status.CONFIRMED:
        raise ApplicationError(_("Seule une réservation payée peut être marquée non présentée."))
    booking.status = Booking.Status.NO_SHOW
    booking.updated_by = user
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    return booking
