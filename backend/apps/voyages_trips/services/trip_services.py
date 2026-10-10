from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.services.sequence_service import next_number
from apps.core.models import Sequence
from apps.fleet.models import Vehicle, OdometerLog
from apps.voyages_config.models import RouteStop
from apps.voyages_trips.models import Trip, TripStop


def _point_code(point):
    """Code d'un point (gare/agence) pour la référence voyage : code du point de
    service, à défaut code de son agence, sinon 'XX'."""
    if not point:
        return "XX"
    return (getattr(point, "code", "") or (point.agency.code if getattr(point, "agency_id", None) else "") or "XX")


def _trip_number(company, origin, destination, departure_dt):
    """Référence voyage : DEP-ARR-AAAAMMJJ-NNN (bordereau journalier par institution)."""
    day = timezone.localtime(departure_dt).strftime("%Y%m%d")
    seq_code = f"VOY-{company.id}-{day}"
    Sequence.objects.get_or_create(
        code=seq_code, defaults={"name": f"Voyages {day}", "prefix": "", "padding": 3, "reset_yearly": False})
    n = next_number(seq_code)  # préfixe/année vides -> juste le numéro « 001 »
    return f"{_point_code(origin)}-{_point_code(destination)}-{day}-{n}"


@transaction.atomic
def create_trip(*, company, route, fare_class, scheduled_departure, scheduled_arrival,
                service_pattern=None, origin=None, destination=None, code="", notes="",
                seat_assignment_mode=Trip.SeatAssignment.MANUAL, auto_expenses=True,
                seating_plan=None, vehicle=None, max_reservations=None,
                blocked_seats_count=0, crew_member_ids=None, voyage_type=None, user):
    if scheduled_arrival <= scheduled_departure:
        raise ApplicationError(_("L'arrivée prévue doit être postérieure au départ."))
    o = origin or route.origin
    d = destination or route.destination
    if voyage_type is None:
        # M11 : type par défaut de la société (Départ), si défini.
        from apps.voyages_config.models import VoyageType
        voyage_type = VoyageType.objects.filter(
            company=company, is_default=True, is_deleted=False).first()
    trip = Trip.objects.create(
        company=company, number=_trip_number(company, o, d, scheduled_departure), code=code,
        route=route, service_pattern=service_pattern, fare_class=fare_class,
        voyage_type=voyage_type,
        origin=o, destination=d,
        scheduled_departure=scheduled_departure, scheduled_arrival=scheduled_arrival,
        status=Trip.Status.DRAFT, seat_assignment_mode=seat_assignment_mode,
        auto_expenses=auto_expenses, seating_plan=seating_plan, vehicle=vehicle,
        max_reservations=max_reservations, blocked_seats_count=blocked_seats_count or 0,
        notes=notes, created_by=user,
    )
    for rs in RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"):
        sched = scheduled_departure + rs.offset_from_departure if rs.offset_from_departure else None
        TripStop.objects.create(trip=trip, service_point=rs.service_point, sequence=rs.sequence,
                                scheduled_arrival=sched, created_by=user)
    # La charte (plan de bus) suffit à générer les sièges — le véhicule est optionnel.
    if trip.seating_plan_id:
        from apps.voyages_trips.services.assignment import materialise_seats
        from apps.voyages_trips.models import TripSeat
        materialise_seats(trip)
        _block_seats(trip, blocked_seats_count or 0, user)
        # M12 : quota de réservation réglable par l'agent, défauté aux places vendables
        # (total − bloquées) et plafonné à celles-ci.
        sellable = trip.seats.filter(is_deleted=False, status=TripSeat.Status.AVAILABLE).count()
        if max_reservations is None:
            trip.max_reservations = sellable
        elif max_reservations > sellable:
            raise ApplicationError(
                _("Le quota de réservation ne peut pas dépasser %(n)s places vendables.") % {"n": sellable})
        else:
            trip.max_reservations = max_reservations
        trip.save(update_fields=["max_reservations", "updated_by", "updated_at"])
    _assign_crew(trip, crew_member_ids or [], company, user)
    if auto_expenses:
        from apps.voyages_trips.services.expense_services import apply_expense_schedule
        apply_expense_schedule(trip)
    return trip


def _block_seats(trip, count, user):
    """Bloque les `count` premiers sièges disponibles (non vendables)."""
    if count <= 0:
        return
    from apps.voyages_trips.models import TripSeat
    seats = list(TripSeat.objects.filter(trip=trip, is_deleted=False, status=TripSeat.Status.AVAILABLE)
                 .order_by("row", "column", "seat_number")[:count])
    for s in seats:
        s.status = TripSeat.Status.BLOCKED
        s.updated_by = user
        s.save(update_fields=["status", "updated_by", "updated_at"])


def _assign_crew(trip, crew_member_ids, company, user):
    from apps.voyages_trips.models import CrewMember, TripCrew
    for cid in crew_member_ids:
        member = CrewMember.objects.filter(id=cid, company=company, is_deleted=False).first()
        if member and not TripCrew.objects.filter(trip=trip, member=member, is_deleted=False).exists():
            TripCrew.objects.create(trip=trip, member=member, created_by=user)


_WEEKDAY_FIELDS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


@transaction.atomic
def create_trip_from_pattern(*, company, pattern, service_date, code="", notes="",
                             seat_assignment_mode=Trip.SeatAssignment.MANUAL, auto_expenses=True,
                             max_reservations=None, blocked_seats_count=0, crew_member_ids=None, user):
    """Crée un voyage à partir d'une planification : trajet, catégorie, plan et
    horaires sont dérivés du modèle ; l'utilisateur ne choisit que la date."""
    from datetime import datetime, timedelta

    # La planification doit circuler ce jour-là et être dans sa période de validité.
    if not getattr(pattern, _WEEKDAY_FIELDS[service_date.weekday()]):
        raise ApplicationError(_("Cette planification ne circule pas ce jour-là."))
    if pattern.valid_from and service_date < pattern.valid_from:
        raise ApplicationError(_("Cette planification n'est pas encore valide à cette date."))
    if pattern.valid_to and service_date > pattern.valid_to:
        raise ApplicationError(_("Cette planification n'est plus valide à cette date."))

    ts = pattern.time_slot
    departure = timezone.make_aware(datetime.combine(service_date, ts.start_time))
    arrival = timezone.make_aware(datetime.combine(service_date, ts.end_time))
    if ts.end_time <= ts.start_time:  # créneau de nuit -> arrivée le lendemain
        arrival += timedelta(days=1)

    trip = create_trip(
        company=company, route=pattern.route, fare_class=pattern.fare_class,
        scheduled_departure=departure, scheduled_arrival=arrival,
        service_pattern=pattern, code=code, notes=notes,
        seat_assignment_mode=seat_assignment_mode, auto_expenses=auto_expenses,
        seating_plan=pattern.default_seating_plan if pattern.default_seating_plan_id else None,
        max_reservations=max_reservations, blocked_seats_count=blocked_seats_count,
        crew_member_ids=crew_member_ids, user=user)
    return trip


_MAX_RANGE_DAYS = 366


def generate_trips_from_pattern(*, company, pattern, start_date, end_date, user):
    """M13 : crée un voyage par date circulée de [start_date, end_date] (idempotent).

    Ignore les jours non circulés (flag jour de semaine / hors validité) et les dates
    déjà pourvues d'un voyage pour cette charte. Réutilise create_trip_from_pattern."""
    from datetime import timedelta
    if end_date < start_date:
        raise ApplicationError(_("La date de fin doit être postérieure ou égale à la date de début."))
    if (end_date - start_date).days + 1 > _MAX_RANGE_DAYS:
        raise ApplicationError(_("La période ne peut pas dépasser 366 jours."))
    created = skipped_existing = skipped_offday = 0
    d = start_date
    while d <= end_date:
        circulates = bool(getattr(pattern, _WEEKDAY_FIELDS[d.weekday()]))
        in_validity = ((not pattern.valid_from or d >= pattern.valid_from)
                       and (not pattern.valid_to or d <= pattern.valid_to))
        if not circulates or not in_validity:
            skipped_offday += 1
        elif Trip.objects.filter(company=company, service_pattern=pattern, is_deleted=False,
                                 scheduled_departure__date=d).exists():
            skipped_existing += 1
        else:
            create_trip_from_pattern(company=company, pattern=pattern, service_date=d, user=user)
            created += 1
        d += timedelta(days=1)
    return {"created": created, "skipped_existing": skipped_existing, "skipped_offday": skipped_offday}


@transaction.atomic
def submit_trip(trip, *, user):
    if trip.status != Trip.Status.DRAFT:
        raise ApplicationError(_("Seul un brouillon peut être soumis."))
    # La charte (plan de bus) suffit pour ouvrir la vente ; le véhicule et
    # l'équipage peuvent être ajoutés plus tard depuis le détail du voyage.
    if not trip.seating_plan_id:
        raise ApplicationError(_("Choisissez un plan de bus (charte) avant de soumettre."))
    if not trip.seats.filter(is_deleted=False).exists():
        from apps.voyages_trips.services.assignment import materialise_seats
        materialise_seats(trip)
    trip.status = Trip.Status.PENDING
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def depart_trip(trip, *, user, lead_hours=24):
    if trip.status != Trip.Status.PENDING:
        raise ApplicationError(_("Seul un voyage en attente peut démarrer."))
    # M15 : un voyage ne peut pas démarrer tant que ses dépenses définies ne sont pas décaissées.
    from apps.voyages_trips.models import TripExpense
    unpaid = trip.expenses.filter(is_deleted=False, status=TripExpense.Status.PLANNED)
    if unpaid.exists():
        total = sum((e.amount for e in unpaid), 0)
        raise ApplicationError(
            _("Ce voyage a des dépenses non décaissées (%(n)d, total %(t)s). Décaissez-les avant le départ.")
            % {"n": unpaid.count(), "t": total})
    now = timezone.now()
    delta = (trip.scheduled_departure - now).total_seconds() / 3600
    if delta > lead_hours:
        raise ApplicationError(_("Trop tôt pour démarrer ce voyage."))
    trip.status = Trip.Status.DEPARTED
    trip.actual_departure = now
    trip.updated_by = user
    trip.save(update_fields=["status", "actual_departure", "updated_by", "updated_at"])
    if trip.vehicle_id:
        v = trip.vehicle
        v.status = Vehicle.Status.ON_MISSION
        v.updated_by = user
        v.save(update_fields=["status", "updated_by", "updated_at"])
    # Cascade : les colis prêts/chargés de ce voyage passent en transit.
    from apps.voyages_consignment.services import parcel_services as _p
    _p.dispatch_parcels_for_trip(trip, user=user)
    return trip


@transaction.atomic
def complete_trip(trip, *, user):
    if trip.status != Trip.Status.DEPARTED:
        raise ApplicationError(_("Seul un voyage parti peut être clôturé."))
    now = timezone.now()
    trip.status = Trip.Status.COMPLETED
    trip.actual_arrival = now
    trip.updated_by = user
    trip.save(update_fields=["status", "actual_arrival", "updated_by", "updated_at"])
    if trip.vehicle_id:
        v = trip.vehicle
        if trip.route.distance_km:
            new_km = (v.current_odometer or 0) + trip.route.distance_km
            OdometerLog.objects.create(vehicle=v, value_km=new_km, date=now.date(),
                                       source=OdometerLog.Source.MANUAL,
                                       note=f"Voyage {trip.number}", created_by=user)
            v.current_odometer = new_km
        v.status = Vehicle.Status.AVAILABLE
        v.updated_by = user
        v.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])
    # Cascade : les colis en transit de ce voyage passent arrivés.
    from apps.voyages_consignment.services import parcel_services as _p
    _p.arrive_parcels_for_trip(trip, user=user)
    return trip


@transaction.atomic
def cancel_trip(trip, *, user):
    if trip.status in (Trip.Status.COMPLETED, Trip.Status.CANCELLED):
        raise ApplicationError(_("Ce voyage ne peut pas être annulé."))
    was_held = trip.status in (Trip.Status.PENDING, Trip.Status.SUSPENDED, Trip.Status.DEPARTED)
    trip.seats.all().delete()
    trip.status = Trip.Status.CANCELLED
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    if was_held and trip.vehicle_id:
        v = trip.vehicle
        v.status = Vehicle.Status.AVAILABLE
        v.updated_by = user
        v.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def suspend_trip(trip, *, user):
    if trip.status != Trip.Status.PENDING:
        raise ApplicationError(_("Seul un voyage en attente peut être suspendu."))
    trip.status = Trip.Status.SUSPENDED
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def resume_trip(trip, *, user):
    if trip.status != Trip.Status.SUSPENDED:
        raise ApplicationError(_("Seul un voyage suspendu peut être repris."))
    trip.status = Trip.Status.PENDING
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def mark_delayed(trip, *, delayed_until=None, delay_reason="", user):
    trip.is_delayed = True
    trip.delayed_until = delayed_until
    trip.delay_reason = delay_reason
    trip.updated_by = user
    trip.save(update_fields=["is_delayed", "delayed_until", "delay_reason", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def clear_delay(trip, *, user):
    trip.is_delayed = False
    trip.delayed_until = None
    trip.delay_reason = ""
    trip.updated_by = user
    trip.save(update_fields=["is_delayed", "delayed_until", "delay_reason", "updated_by", "updated_at"])
    return trip
