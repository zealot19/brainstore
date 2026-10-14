from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.services.sequence_service import daily_route_ref
from apps.voyages_booking.models import Booking, Ticket, Passenger
from apps.voyages_booking.services.passenger_services import get_or_create_passenger
from apps.voyages_booking.services import loyalty_services
from apps.voyages_trips.models import TripSeat
from apps.voyages_config.models import ServicePoint
from apps.voyages_pricing.selectors.fare_selectors import resolve_fare, route_points

# Un voyage n'est réservable qu'une fois soumis (statut « pending »), pas en brouillon.
_BOOKABLE = ["pending"]


def _booking_reference(trip, origin, destination):
    """Référence réservation, même modèle que voyage/colis/billet : DEP-ARR-AAAAMMJJ-NNN."""
    return daily_route_ref("BKG", trip.company_id, origin, destination, trip.scheduled_departure)


def _ticket_number(trip, origin, destination):
    """Numéro de billet, même style que la référence voyage : DEP-ARR-AAAAMMJJ-NNN."""
    return daily_route_ref("TKT", trip.company_id, origin, destination, trip.scheduled_departure)


def _assert_bookable(trip):
    if trip.status not in _BOOKABLE:
        raise ApplicationError(_("Le voyage doit être soumis avant toute réservation (les brouillons ne sont pas réservables)."))
    if trip.fare_class.is_rental:
        raise ApplicationError(_("Aucune vente de billet sur un voyage en location (bus loué en entier)."))
    if not TripSeat.objects.filter(is_deleted=False, trip=trip).exists():
        raise ApplicationError(_("Les sièges de ce voyage ne sont pas encore générés."))


def _assert_can_sell(user, trip):
    """Only the origin agency may sell a departure's seats (multi-instance rule).

    Exempt: system/online actor (user is None) and institution admins (manage all
    agencies). Skipped when the departure has no owning agency (legacy/unowned).
    """
    if user is None or getattr(user, "is_institution_admin", False):
        return
    origin_agency_id = trip.origin.agency_id
    if not origin_agency_id:
        return
    member_ids = set(user.agencies.values_list("id", flat=True))
    if getattr(user, "default_agency_id", None):
        member_ids.add(user.default_agency_id)
    if origin_agency_id not in member_ids:
        raise ApplicationError(
            _("Vous ne pouvez vendre que les voyages au départ de votre agence.")
        )


def _resolve_passenger(company, spec, user):
    if spec.get("id"):
        p = Passenger.objects.filter(is_deleted=False, company=company, id=spec["id"]).first()
        if not p:
            raise ApplicationError(_("Passager introuvable."))
        return p
    return get_or_create_passenger(
        company, user=user,
        id_type=spec.get("id_type", "cni"), id_number=spec.get("id_number", ""),
        phone=spec.get("phone", ""), name=spec.get("name", ""),
        gender=spec.get("gender", ""), civility=spec.get("civility", ""),
        birth_date=spec.get("birth_date"), email=spec.get("email", ""))


def _lock_seat(trip, seat_id):
    seat = (TripSeat.objects.select_for_update()
            .filter(is_deleted=False, trip=trip, id=seat_id).first())
    if not seat:
        raise ApplicationError(_("Siège introuvable pour ce voyage."))
    if seat.status != TripSeat.Status.AVAILABLE:
        raise ApplicationError(_("Siège déjà pris."))
    return seat


def _auto_pick_seat(trip):
    """Attribution automatique : premier siège disponible (rangée, colonne, numéro)."""
    seat = (TripSeat.objects.select_for_update()
            .filter(is_deleted=False, trip=trip, status=TripSeat.Status.AVAILABLE)
            .order_by("row", "column", "seat_number").first())
    if not seat:
        raise ApplicationError(_("Voyage complet : plus aucun siège disponible."))
    return seat


def _pick_seat(trip, seat_id):
    """Manuel : siège choisi ; Auto : siège attribué par le système (aucun choix)."""
    if trip.seat_assignment_mode == trip.SeatAssignment.AUTO:
        return _auto_pick_seat(trip)
    if not seat_id:
        raise ApplicationError(_("Veuillez choisir un siège pour chaque passager."))
    return _lock_seat(trip, seat_id)


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
                   payment_method="", amount_received=None, return_open=False,
                   channel=Booking.Channel.COUNTER, user=None, cash_register_id=None):
    """Create a fully-paid booking in a single step (no hold/confirm phase).

    items: [{"passenger": <spec>, "destination_point_id": UUID|None,
             "outbound_seat_id": UUID, "return_seat_id": UUID|None}]

    Aller-retour a retour ouvert : trip_type=round_trip + return_open=True + pas de
    return_trip -> seuls les billets aller sont crees, le tarif A/R est facture,
    le retour sera affecte plus tard via assign_return().
    """
    if not items:
        raise ApplicationError(_("Aucun passager sélectionné."))
    # M19 : un règlement « Non payé » (requires_payment=False) crée une RÉSERVATION
    # (sièges tenus, quota consommé), pas une vente ; elle est convertie au paiement
    # via pay_reservation. Échéance = départ du voyage par défaut.
    from apps.treasury.services.payment_resolution import resolve_payment
    _pm = resolve_payment(company, payment_method)
    if _pm is not None and not _pm.requires_payment:
        from apps.voyages_booking.services.reservation_services import create_reservation
        return create_reservation(
            company, trip_type=trip_type, outbound_trip=outbound_trip, return_trip=return_trip,
            buyer_spec=buyer_spec, items=items, hold_until=outbound_trip.scheduled_departure,
            return_open=return_open, channel=channel, user=user)
    _assert_can_sell(user, outbound_trip)
    _assert_bookable(outbound_trip)
    is_round = trip_type == Booking.TripType.ROUND_TRIP
    open_return = is_round and (return_open or not return_trip)
    if is_round and not open_return:
        _assert_bookable(return_trip)

    buyer = _resolve_passenger(company, buyer_spec, user)
    booking = Booking.objects.create(
        company=company, agency=outbound_trip.origin.agency,
        reference=_booking_reference(outbound_trip, outbound_trip.origin, outbound_trip.destination),
        status=Booking.Status.CONFIRMED,
        trip_type=trip_type, outbound_trip=outbound_trip,
        return_trip=return_trip if (is_round and not open_return) else None,
        return_open=open_return, buyer=buyer, channel=channel, created_by=user)

    total = Decimal("0")
    for item in items:
        passenger = _resolve_passenger(company, item["passenger"], user)
        dest = _resolve_destination(outbound_trip, item.get("destination_point_id"))
        fare = _price(company, outbound_trip, dest, trip_type)

        out_seat = _pick_seat(outbound_trip, item.get("outbound_seat_id"))
        out_ticket = Ticket.objects.create(
            booking=booking, number=_ticket_number(outbound_trip, outbound_trip.origin, dest), passenger=passenger, trip=outbound_trip,
            trip_seat=out_seat, origin_point=outbound_trip.origin, destination_point=dest,
            direction=Ticket.Direction.OUTBOUND, fare=fare, fare_class=outbound_trip.fare_class,
            amount=fare.amount, status=Ticket.Status.SOLD, created_by=user)
        out_seat.status = TripSeat.Status.SOLD
        out_seat.booking_id = booking.id
        out_seat.updated_by = user
        out_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
        total += fare.amount

        if is_round and not open_return:
            if return_trip.seat_assignment_mode != return_trip.SeatAssignment.AUTO and not item.get("return_seat_id"):
                raise ApplicationError(_("Un siège retour est requis pour chaque passager."))
            ret_seat = _pick_seat(return_trip, item.get("return_seat_id"))
            Ticket.objects.create(
                booking=booking, number=_ticket_number(return_trip, return_trip.origin, return_trip.destination), passenger=passenger, trip=return_trip,
                trip_seat=ret_seat, origin_point=return_trip.origin, destination_point=return_trip.destination,
                direction=Ticket.Direction.RETURN, return_of=out_ticket, fare=None,
                fare_class=return_trip.fare_class, amount=0, status=Ticket.Status.SOLD, created_by=user)
            ret_seat.status = TripSeat.Status.SOLD
            ret_seat.booking_id = booking.id
            ret_seat.updated_by = user
            ret_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])

    from apps.treasury.services.payment_resolution import resolve_payment
    _pm = resolve_payment(company, payment_method)
    no_payment = _pm is not None and not _pm.requires_payment
    received = Decimal("0") if no_payment else (Decimal(str(amount_received)) if amount_received is not None else total)
    if not no_payment and received < total:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(t)s.") % {"r": received, "t": total})

    booking.amount_due = total
    booking.amount_paid = total
    booking.amount_received = received
    booking.change_due = Decimal("0") if no_payment else received - total
    booking.payment_method = payment_method or ""
    booking.updated_by = user
    booking.save(update_fields=["amount_due", "amount_paid", "amount_received", "change_due",
                                "payment_method", "updated_by", "updated_at"])
    loyalty_services.accrue(booking, user=user)

    from apps.treasury.services import record_booking_payment
    record_booking_payment(company, booking=booking, amount=total, payment_method=payment_method, user=user,
                           cash_register_id=cash_register_id)
    return booking


@transaction.atomic
def assign_return(booking, return_trip, *, items, user):
    """Affecte le voyage retour d'un A/R a retour ouvert et emet les billets retour.

    items: [{"outbound_ticket_id": UUID, "return_seat_id": UUID}] — un par billet aller.
    """
    if booking.trip_type != Booking.TripType.ROUND_TRIP or not booking.return_open:
        raise ApplicationError(_("Cette réservation n'a pas de retour ouvert à affecter."))
    # The return leg leaves from the destination agency — only it may validate it.
    _assert_can_sell(user, return_trip)
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
        ret_seat = _pick_seat(return_trip, item.get("return_seat_id"))
        Ticket.objects.create(
            booking=booking, number=_ticket_number(return_trip, return_trip.origin, return_trip.destination), passenger=out_ticket.passenger, trip=return_trip,
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
def cancel_booking(booking, *, user, reason=""):
    if booking.status == Booking.Status.CANCELLED:
        return booking
    if booking.status == Booking.Status.BOARDED:
        raise ApplicationError(_("Une réservation embarquée ne peut pas être annulée."))
    if not (reason or "").strip():
        raise ApplicationError(_("Le motif d'annulation est obligatoire."))
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

    # Annuler les bagages liés aux billets ; rembourser billets et bagages à
    # leurs taux respectifs (deux mouvements distincts).
    from apps.voyages_consignment.models import Baggage
    from apps.voyages_consignment.services.baggage_services import cancel_baggage
    from apps.treasury.services.refund import refund_on_cancel
    bag_total = Decimal("0")
    for bag in Baggage.objects.filter(ticket__booking=booking, is_deleted=False).exclude(status="cancelled"):
        cancel_baggage(bag, user=user, _skip_refund=True)
        bag_total += bag.amount_received or Decimal("0")
    tkt_refund = refund_on_cancel(booking.company, amount_paid=(booking.amount_paid or Decimal("0")),
                     user=user, description=f"Remboursement réservation {booking.reference}", kind="ticket")
    bag_refund = None
    if bag_total > 0:
        bag_refund = refund_on_cancel(booking.company, amount_paid=bag_total, user=user,
                         description=f"Remboursement bagages réservation {booking.reference}", kind="bagage")
    # M22 : motif + montant effectivement remboursé + traçabilité.
    refund_total = (tkt_refund.amount if tkt_refund else Decimal("0")) + (bag_refund.amount if bag_refund else Decimal("0"))
    booking.cancellation_reason = reason
    booking.cancelled_at = timezone.now()
    booking.cancelled_by = user
    booking.refund_amount = refund_total
    booking.save(update_fields=["cancellation_reason", "cancelled_at", "cancelled_by",
                                "refund_amount", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def board_ticket(ticket, *, user):
    if ticket.booking.status in (Booking.Status.CANCELLED, Booking.Status.NO_SHOW):
        raise ApplicationError(_("Cette réservation est annulée ou non présentée : embarquement impossible."))
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
    # Propager aux billets pour que l'embarquement les refuse et que les listes reflètent l'absence.
    for t in booking.tickets.filter(is_deleted=False, status=Ticket.Status.SOLD):
        t.status = Ticket.Status.NO_SHOW
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
    return booking
