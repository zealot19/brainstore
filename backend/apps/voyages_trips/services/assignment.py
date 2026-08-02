from django.db import transaction
from apps.voyages_config.models import PlanSeat
from apps.voyages_trips.models import TripSeat
from apps.voyages_trips.exceptions import VehicleNotEligible
from apps.voyages_trips.selectors.eligibility import (
    blocking_reasons, document_warnings, active_seating_plan,
)


def materialise_seats(trip):
    """Rebuild TripSeat rows from the trip's snapshot seating plan."""
    trip.seats.all().delete()
    if not trip.seating_plan_id:
        return
    rows = []
    for ps in PlanSeat.objects.filter(plan=trip.seating_plan, is_deleted=False):
        rows.append(TripSeat(
            trip=trip, seat_number=ps.seat_number, row=ps.row, column=ps.column,
            seat_type=ps.seat_type,
            status=TripSeat.Status.AVAILABLE if ps.is_sellable else TripSeat.Status.BLOCKED,
            created_by=trip.updated_by or trip.created_by,
        ))
    TripSeat.objects.bulk_create(rows)


@transaction.atomic
def assign_vehicle(trip, vehicle, *, user, alert_days=30):
    reasons = blocking_reasons(vehicle, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip)
    if reasons:
        raise VehicleNotEligible(" ".join(reasons))
    plan = active_seating_plan(vehicle, trip.scheduled_departure.date())
    trip.vehicle = vehicle
    trip.seating_plan = plan
    trip.updated_by = user
    trip.save(update_fields=["vehicle", "seating_plan", "updated_by", "updated_at"])
    materialise_seats(trip)
    return document_warnings(vehicle, before_date=trip.scheduled_arrival.date(), alert_days=alert_days)
