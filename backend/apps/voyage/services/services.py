from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from datetime import timedelta

from apps.core.exceptions import ApplicationError
from apps.voyage.models import Trip, TripCrew


# ── Reference generator ────────────────────────────────────────────────────────

def _next_trip_reference(company, departure_datetime) -> str:
    date_str = departure_datetime.strftime("%Y%m%d")
    prefix = f"TRIP-{date_str}-"
    count = (Trip.objects
             .filter(company=company, reference__startswith=prefix)
             .count())
    return f"{prefix}{count + 1:03d}"


# ── Trips ──────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_trip(
    *, company, route, vehicle_category, departure_datetime,
    vehicle=None, fare_class=None,
    free_seating: bool = False, notes: str = "", created_by,
):
    if departure_datetime <= timezone.now():
        raise ApplicationError(_("Departure date must be in the future."))

    if vehicle and vehicle.company_id != company.id:
        raise ApplicationError(_("This vehicle does not belong to your company."))

    if vehicle and vehicle.status not in ("available",):
        raise ApplicationError(
            _("Vehicle {plate} is not available (status: {status}).").format(
                plate=vehicle.license_plate,
                status=vehicle.get_status_display(),
            )
        )

    # Estimated arrival from route duration
    estimated_arrival = None
    if route.duration_minutes:
        estimated_arrival = departure_datetime + timedelta(minutes=route.duration_minutes)

    reference = _next_trip_reference(company, departure_datetime)

    return Trip.objects.create(
        company=company,
        reference=reference,
        route=route,
        vehicle=vehicle,
        vehicle_category=vehicle_category,
        fare_class=fare_class,
        departure_datetime=departure_datetime,
        estimated_arrival_datetime=estimated_arrival,
        total_seats=vehicle_category.total_seats,
        free_seating=free_seating or vehicle_category.free_seating,
        status=Trip.Status.SCHEDULED,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_trip(trip, *, updated_by, **fields):
    if trip.status not in (Trip.Status.SCHEDULED,):
        raise ApplicationError(_("Only scheduled trips can be edited."))
    allowed = {
        "departure_datetime", "estimated_arrival_datetime",
        "vehicle_id", "fare_class_id", "free_seating", "notes",
    }
    if "departure_datetime" in fields and fields["departure_datetime"] <= timezone.now():
        raise ApplicationError(_("Departure date must be in the future."))
    for key, val in fields.items():
        if key in allowed:
            setattr(trip, key, val)
    trip.updated_by = updated_by
    trip.save()
    return trip


@transaction.atomic
def board_trip(trip, *, updated_by):
    """Open boarding — passengers start embarking."""
    if trip.status != Trip.Status.SCHEDULED:
        raise ApplicationError(_("Only scheduled trips can move to boarding."))
    trip.status = Trip.Status.BOARDING
    trip.updated_by = updated_by
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def depart_trip(trip, *, actual_departure=None, updated_by):
    """Mark trip as departed and update vehicle status in fleet."""
    if trip.status not in (Trip.Status.SCHEDULED, Trip.Status.BOARDING):
        raise ApplicationError(_("Only scheduled or boarding trips can depart."))

    now = actual_departure or timezone.now()
    trip.status = Trip.Status.DEPARTED
    trip.actual_departure_datetime = now
    trip.updated_by = updated_by
    trip.save(update_fields=[
        "status", "actual_departure_datetime", "updated_by", "updated_at"
    ])

    # Sync fleet vehicle status
    if trip.vehicle_id:
        from apps.fleet.models import Vehicle
        Vehicle.objects.filter(id=trip.vehicle_id).update(status="on_mission")

    return trip


@transaction.atomic
def arrive_trip(trip, *, actual_arrival=None, updated_by):
    """Mark trip as arrived and release vehicle."""
    if trip.status != Trip.Status.DEPARTED:
        raise ApplicationError(_("Only departed trips can be marked as arrived."))

    now = actual_arrival or timezone.now()
    trip.status = Trip.Status.ARRIVED
    trip.actual_arrival_datetime = now
    trip.updated_by = updated_by
    trip.save(update_fields=[
        "status", "actual_arrival_datetime", "updated_by", "updated_at"
    ])

    # Release vehicle in fleet
    if trip.vehicle_id:
        from apps.fleet.models import Vehicle
        Vehicle.objects.filter(id=trip.vehicle_id).update(status="available")

    return trip


@transaction.atomic
def cancel_trip(trip, *, updated_by):
    if trip.status in (Trip.Status.DEPARTED, Trip.Status.ARRIVED):
        raise ApplicationError(_("Departed or arrived trips cannot be cancelled."))

    was_departed = trip.status == Trip.Status.DEPARTED
    trip.status = Trip.Status.CANCELLED
    trip.updated_by = updated_by
    trip.save(update_fields=["status", "updated_by", "updated_at"])

    # Release vehicle if it was locked
    if trip.vehicle_id and was_departed:
        from apps.fleet.models import Vehicle
        Vehicle.objects.filter(id=trip.vehicle_id).update(status="available")

    return trip


def delete_trip(trip, *, deleted_by):
    if trip.status in (Trip.Status.DEPARTED, Trip.Status.ARRIVED):
        raise ApplicationError(_("Departed or arrived trips cannot be deleted."))
    trip.soft_delete(user=deleted_by)


# ── Crew ───────────────────────────────────────────────────────────────────────

@transaction.atomic
def add_crew_member(*, trip, user, role: str = TripCrew.Role.CONDUCTOR,
                    notes: str = "", created_by):
    if trip.status in (Trip.Status.ARRIVED, Trip.Status.CANCELLED):
        raise ApplicationError(_("Cannot modify crew for a finished or cancelled trip."))
    if TripCrew.objects.filter(trip=trip, user=user, is_deleted=False).exists():
        raise ApplicationError(
            _("{name} is already assigned to this trip.").format(
                name=user.get_full_name() or user.username
            )
        )
    return TripCrew.objects.create(
        trip=trip, user=user, role=role,
        notes=notes, created_by=created_by,
    )


def remove_crew_member(crew_member, *, deleted_by):
    if crew_member.trip.status in (Trip.Status.ARRIVED, Trip.Status.CANCELLED):
        raise ApplicationError(_("Cannot modify crew for a finished or cancelled trip."))
    crew_member.soft_delete(user=deleted_by)
