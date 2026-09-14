from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.services.sequence_service import next_number
from apps.core.models import Sequence
from apps.fleet.models import Vehicle, OdometerLog
from apps.voyages_config.models import RouteStop
from apps.voyages_trips.models import Trip, TripStop


def _trip_number():
    Sequence.objects.get_or_create(
        code="VOY", defaults={"name": "Voyages", "prefix": "VOY", "padding": 5, "reset_yearly": True})
    return next_number("VOY")


@transaction.atomic
def create_trip(*, company, route, fare_class, scheduled_departure, scheduled_arrival,
                service_pattern=None, origin=None, destination=None, code="", notes="",
                seat_assignment_mode=Trip.SeatAssignment.MANUAL, user):
    if scheduled_arrival <= scheduled_departure:
        raise ApplicationError(_("L'arrivée prévue doit être postérieure au départ."))
    trip = Trip.objects.create(
        company=company, number=_trip_number(), code=code,
        route=route, service_pattern=service_pattern, fare_class=fare_class,
        origin=origin or route.origin, destination=destination or route.destination,
        scheduled_departure=scheduled_departure, scheduled_arrival=scheduled_arrival,
        status=Trip.Status.DRAFT, seat_assignment_mode=seat_assignment_mode,
        notes=notes, created_by=user,
    )
    for rs in RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"):
        sched = scheduled_departure + rs.offset_from_departure if rs.offset_from_departure else None
        TripStop.objects.create(trip=trip, service_point=rs.service_point, sequence=rs.sequence,
                                scheduled_arrival=sched, created_by=user)
    from apps.voyages_trips.services.expense_services import apply_expense_schedule
    apply_expense_schedule(trip)
    return trip


_WEEKDAY_FIELDS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


@transaction.atomic
def create_trip_from_pattern(*, company, pattern, service_date, code="", notes="",
                             seat_assignment_mode=Trip.SeatAssignment.MANUAL, user):
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
        seat_assignment_mode=seat_assignment_mode, user=user)
    if pattern.default_seating_plan_id:
        trip.seating_plan = pattern.default_seating_plan
        trip.updated_by = user
        trip.save(update_fields=["seating_plan", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def submit_trip(trip, *, user):
    if trip.status != Trip.Status.DRAFT:
        raise ApplicationError(_("Seul un brouillon peut être soumis."))
    if not trip.vehicle_id or not trip.seating_plan_id:
        raise ApplicationError(_("Affectez un véhicule (avec plan de bus) avant de soumettre."))
    if not trip.crew.filter(is_deleted=False, member__member_type__is_driver=True).exists():
        raise ApplicationError(_("Ajoutez au moins un chauffeur à l'équipage."))
    trip.status = Trip.Status.PENDING
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def depart_trip(trip, *, user, lead_hours=24):
    if trip.status != Trip.Status.PENDING:
        raise ApplicationError(_("Seul un voyage en attente peut démarrer."))
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
