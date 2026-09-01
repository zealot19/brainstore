"""Transbordement : remplacement du bus d'un voyage + bascule du surplus."""
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def overflow_split(sold_ids, capacity):
    """Sépare les billets gardés (dans la capacité) du surplus."""
    return sold_ids[:capacity], sold_ids[capacity:]


@transaction.atomic
def apply_transbord(trip, new_plan, *, overflow_trip=None, user=None):
    """Applique un nouveau plan de sièges au voyage : ré-attribue les billets vendus,
    bascule le surplus vers `overflow_trip`. Ne touche pas au véhicule (voir transbord_trip)."""
    from apps.voyages_config.models import PlanSeat
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_consignment.models import Baggage

    sold = list(trip.tickets.filter(is_deleted=False, status__in=["sold", "boarded"])
                .select_related("trip_seat")
                .order_by("trip_seat__row", "trip_seat__column", "trip_seat__seat_number"))
    plan_seats = list(PlanSeat.objects.filter(plan=new_plan, is_deleted=False).order_by("row", "column"))
    capacity = sum(1 for ps in plan_seats if ps.is_sellable)

    kept_ids, overflow_ids = overflow_split([t.id for t in sold], capacity)
    if overflow_ids and overflow_trip is None:
        raise ApplicationError(
            _("Capacité insuffisante : %(n)s place(s) manquante(s). Choisissez un voyage de bascule.")
            % {"n": len(overflow_ids)})

    same_plan = (trip.seating_plan_id == new_plan.id)
    trip.seating_plan = new_plan
    kept_set, overflow_set = set(kept_ids), set(overflow_ids)

    if not same_plan:
        # Libère l'espace de nommage des sièges puis reconstruit le nouveau plan.
        TripSeat.objects.filter(trip=trip).exclude(status=TripSeat.Status.SOLD).delete()
        for s in trip.seats.filter(status=TripSeat.Status.SOLD):
            s.seat_number = f"OLD-{s.id}"
            s.save(update_fields=["seat_number"])
        TripSeat.objects.bulk_create([
            TripSeat(trip=trip, seat_number=ps.seat_number, row=ps.row, column=ps.column,
                     seat_type=ps.seat_type,
                     status=TripSeat.Status.AVAILABLE if ps.is_sellable else TripSeat.Status.BLOCKED,
                     created_by=user)
            for ps in plan_seats])
        free_new = list(trip.seats.filter(status=TripSeat.Status.AVAILABLE).order_by("row", "column"))
        kept_tickets = [t for t in sold if t.id in kept_set]
        for tk, seat in zip(kept_tickets, free_new):
            tk.trip_seat = seat
            tk.updated_by = user
            tk.save(update_fields=["trip_seat", "updated_by", "updated_at"])
            seat.status = TripSeat.Status.SOLD
            seat.save(update_fields=["status"])

    # Bascule du surplus vers overflow_trip (avant purge des sièges temporaires).
    moved_overflow = 0
    baggage_moved = 0
    if overflow_ids:
        overflow_tickets = [t for t in sold if t.id in overflow_set]
        dest_free = list(overflow_trip.seats.filter(status=TripSeat.Status.AVAILABLE).order_by("row", "column"))
        if len(dest_free) < len(overflow_tickets):
            raise ApplicationError(_("Le voyage de bascule n'a pas assez de places."))
        for tk, seat in zip(overflow_tickets, dest_free):
            tk.trip = overflow_trip
            tk.trip_seat = seat
            tk.updated_by = user
            tk.save(update_fields=["trip", "trip_seat", "updated_by", "updated_at"])
            seat.status = TripSeat.Status.SOLD
            seat.save(update_fields=["status"])
            moved_overflow += 1
            for bag in Baggage.objects.filter(is_deleted=False, ticket=tk):
                bag.trip = overflow_trip
                bag.updated_by = user
                bag.save(update_fields=["trip", "updated_by", "updated_at"])
                baggage_moved += 1

    if not same_plan:
        TripSeat.objects.filter(trip=trip, seat_number__startswith="OLD-").delete()

    trip.updated_by = user
    trip.save(update_fields=["seating_plan", "updated_by", "updated_at"])
    return {"passengers_moved": len(kept_ids), "passengers_overflow": moved_overflow,
            "baggage_moved": baggage_moved}


@transaction.atomic
def transbord_trip(trip, to_vehicle, *, overflow_trip=None, user=None, note=""):
    from apps.voyages_trips.models import Transbordement
    from apps.voyages_trips.selectors.eligibility import (
        blocking_reasons, active_seating_plan, document_warnings)

    if trip.status not in ("pending", "departed"):
        raise ApplicationError(_("Ce voyage ne peut pas être transbordé (statut invalide)."))

    reasons = blocking_reasons(to_vehicle, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip)
    if reasons:
        raise ApplicationError(" ".join(str(r) for r in reasons))

    new_plan = active_seating_plan(to_vehicle, trip.scheduled_departure.date())
    if new_plan is None:
        raise ApplicationError(_("Aucun plan de bus actif pour ce véhicule."))

    if overflow_trip is not None:
        if overflow_trip.id == trip.id or overflow_trip.route_id != trip.route_id \
                or overflow_trip.status not in ("draft", "pending"):
            raise ApplicationError(_("Voyage de bascule invalide (même trajet, non parti)."))

    from_vehicle = trip.vehicle
    counts = apply_transbord(trip, new_plan, overflow_trip=overflow_trip, user=user)

    trip.vehicle = to_vehicle
    trip.updated_by = user
    trip.save(update_fields=["vehicle", "updated_by", "updated_at"])

    tb = Transbordement.objects.create(
        company=trip.company, kind="bus", trip=trip, from_vehicle=from_vehicle, to_vehicle=to_vehicle,
        overflow_trip=overflow_trip, note=note or "", created_by=user, **counts)
    warnings = document_warnings(to_vehicle, before_date=trip.scheduled_arrival.date(), alert_days=30)
    return {"transbordement_id": str(tb.id), "warnings": warnings, **counts}


def _clone_trip_for_vehicle(trip, vehicle, *, user):
    """Crée un VRAI voyage (via create_trip) desservi par `vehicle` : numéro, étapes et
    dépenses (barème) inclus, puis rattache le bus, matérialise les sièges et le rend « en attente »."""
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.selectors.eligibility import active_seating_plan
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_trips.services.trip_services import create_trip
    dest = create_trip(
        company=trip.company, route=trip.route, fare_class=trip.fare_class,
        scheduled_departure=trip.scheduled_departure, scheduled_arrival=trip.scheduled_arrival,
        origin=trip.origin, destination=trip.destination, user=user)
    dest.vehicle = vehicle
    dest.seating_plan = active_seating_plan(vehicle, trip.scheduled_departure.date())
    dest.status = Trip.Status.PENDING
    dest.updated_by = user
    dest.save(update_fields=["vehicle", "seating_plan", "status", "updated_by", "updated_at"])
    materialise_seats(dest)
    return dest


@transaction.atomic
def transbord_selection(trip, *, ticket_ids, parcel_ids, baggage_ids,
                        dest_trip=None, dest_vehicle=None, user=None, note=""):
    """Déplace une sélection (passagers/colis/bagages) vers un voyage existant ou un nouveau
    voyage créé pour un bus de remplacement."""
    from apps.voyages_trips.models import Transbordement, TripSeat
    from apps.voyages_trips.selectors.eligibility import blocking_reasons, active_seating_plan
    from apps.voyages_booking.models import Ticket
    from apps.voyages_consignment.models import Parcel, Baggage

    if trip.status not in ("pending", "departed"):
        raise ApplicationError(_("Ce voyage ne peut pas être transbordé (statut invalide)."))

    ticket_ids = [str(x) for x in (ticket_ids or [])]
    parcel_ids = [str(x) for x in (parcel_ids or [])]
    baggage_ids = [str(x) for x in (baggage_ids or [])]
    if not (ticket_ids or parcel_ids or baggage_ids):
        raise ApplicationError(_("Sélectionnez au moins un passager, un colis ou un bagage."))

    if bool(dest_trip) == bool(dest_vehicle):
        raise ApplicationError(_("Choisissez une seule destination : un voyage existant OU un bus."))

    if dest_vehicle is not None:
        reasons = blocking_reasons(dest_vehicle, window_start=trip.scheduled_departure,
                                   window_end=trip.scheduled_arrival, exclude_trip=trip)
        if reasons:
            raise ApplicationError(" ".join(str(r) for r in reasons))
        if active_seating_plan(dest_vehicle, trip.scheduled_departure.date()) is None:
            raise ApplicationError(_("Aucun plan de bus actif pour ce véhicule."))
        dest = _clone_trip_for_vehicle(trip, dest_vehicle, user=user)
    else:
        if dest_trip.id == trip.id or dest_trip.route_id != trip.route_id \
                or dest_trip.status not in ("draft", "pending"):
            raise ApplicationError(_("Voyage de destination invalide (même trajet, non parti)."))
        dest = dest_trip

    # Passagers
    tickets = list(trip.tickets.filter(is_deleted=False, id__in=ticket_ids,
                                       status__in=["sold", "boarded"]).select_related("trip_seat"))
    dest_free = list(dest.seats.filter(status=TripSeat.Status.AVAILABLE).order_by("row", "column"))
    if len(dest_free) < len(tickets):
        raise ApplicationError(_("Le voyage de destination n'a pas assez de places."))
    passengers_moved = 0
    for tk, seat in zip(tickets, dest_free):
        old = tk.trip_seat
        if old is not None:
            old.status = TripSeat.Status.AVAILABLE
            old.save(update_fields=["status"])
        tk.trip = dest
        tk.trip_seat = seat
        tk.updated_by = user
        tk.save(update_fields=["trip", "trip_seat", "updated_by", "updated_at"])
        seat.status = TripSeat.Status.SOLD
        seat.save(update_fields=["status"])
        passengers_moved += 1

    # Colis
    parcels_moved = 0
    for p in Parcel.objects.filter(is_deleted=False, company=trip.company, trip=trip, id__in=parcel_ids):
        p.trip = dest
        p.updated_by = user
        p.save(update_fields=["trip", "updated_by", "updated_at"])
        parcels_moved += 1

    # Bagages
    baggage_moved = 0
    for bg in Baggage.objects.filter(is_deleted=False, company=trip.company, trip=trip, id__in=baggage_ids):
        bg.trip = dest
        bg.updated_by = user
        bg.save(update_fields=["trip", "updated_by", "updated_at"])
        baggage_moved += 1

    tb = Transbordement.objects.create(
        company=trip.company, kind="selection", trip=trip, from_vehicle=trip.vehicle,
        to_vehicle=dest.vehicle, destination_trip=dest, note=note or "", created_by=user,
        passengers_moved=passengers_moved, parcels_moved=parcels_moved, baggage_moved=baggage_moved)
    return {"transbordement_id": str(tb.id), "destination_trip_id": str(dest.id),
            "passengers_moved": passengers_moved, "parcels_moved": parcels_moved,
            "baggage_moved": baggage_moved}
