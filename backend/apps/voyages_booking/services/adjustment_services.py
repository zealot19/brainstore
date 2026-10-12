"""Report & régularisation des billets (M21)."""
from decimal import Decimal

from django.db import transaction
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import Ticket, TicketAdjustment
from apps.voyages_booking.services import booking_services as B


def _assert_sold(ticket):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être reporté ou régularisé."))


@transaction.atomic
def report_ticket(ticket, *, new_trip, new_seat_id=None, reason="", user=None):
    _assert_sold(ticket)
    if new_trip.route_id != ticket.trip.route_id:
        raise ApplicationError(_("Le report n'est possible que vers un voyage de la même route."))
    B._assert_bookable(new_trip)
    from apps.voyages_trips.models import TripSeat
    old_seat = ticket.trip_seat
    old_trip = ticket.trip
    # Report : siège explicite si fourni, sinon attribution automatique sur le nouveau voyage.
    new_seat = B._lock_seat(new_trip, new_seat_id) if new_seat_id else B._auto_pick_seat(new_trip)
    if old_seat:
        old_seat.status = TripSeat.Status.AVAILABLE
        old_seat.booking_id = None
        old_seat.updated_by = user
        old_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
    ticket.trip = new_trip
    ticket.trip_seat = new_seat
    ticket.updated_by = user
    ticket.save(update_fields=["trip", "trip_seat", "updated_by", "updated_at"])
    new_seat.status = TripSeat.Status.SOLD
    new_seat.booking_id = ticket.booking_id
    new_seat.updated_by = user
    new_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
    return TicketAdjustment.objects.create(
        company=ticket.booking.company, ticket=ticket, booking=ticket.booking,
        kind=TicketAdjustment.Kind.REPORT, from_trip=old_trip, to_trip=new_trip,
        price_difference=Decimal("0"), reason=reason, created_by=user)


@transaction.atomic
def regularize_ticket(ticket, *, new_fare_class=None, new_destination_id=None,
                      payment_method="", reason="", user=None, cash_register_id=None):
    _assert_sold(ticket)
    booking = ticket.booking
    company = booking.company
    target_class = new_fare_class or ticket.fare_class
    if target_class.rank < ticket.fare_class.rank:
        raise ApplicationError(_("Déclassement interdit : seul le surclassement est permis."))
    dest = (B._resolve_destination(ticket.trip, new_destination_id)
            if new_destination_id is not None else ticket.destination_point) or ticket.trip.destination
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare
    fare = resolve_fare(company, ticket.trip.route, ticket.trip.origin, dest, target_class,
                        trip_type=booking.trip_type)
    if not fare:
        raise ApplicationError(_("Aucun tarif défini pour cette régularisation."))
    diff = Decimal(str(fare.amount)) - (ticket.amount or Decimal("0"))
    if diff < 0:
        raise ApplicationError(_("La régularisation ne peut pas diminuer le tarif."))
    from_class = ticket.fare_class
    from_dest = ticket.destination_point
    if diff > 0:
        from apps.treasury.services import record_adjustment_income
        record_adjustment_income(company, booking=booking, amount=diff, payment_method=payment_method, user=user,
                                 cash_register_id=cash_register_id)
        booking.amount_due = (booking.amount_due or Decimal("0")) + diff
        booking.amount_paid = (booking.amount_paid or Decimal("0")) + diff
        booking.updated_by = user
        booking.save(update_fields=["amount_due", "amount_paid", "updated_by", "updated_at"])
    ticket.fare_class = target_class
    ticket.destination_point = dest
    ticket.fare = fare
    ticket.amount = fare.amount
    ticket.updated_by = user
    ticket.save(update_fields=["fare_class", "destination_point", "fare", "amount", "updated_by", "updated_at"])
    return TicketAdjustment.objects.create(
        company=company, ticket=ticket, booking=booking, kind=TicketAdjustment.Kind.REGULARISATION,
        from_fare_class=from_class, to_fare_class=target_class, from_destination=from_dest,
        to_destination=dest, price_difference=diff, reason=reason, created_by=user)
