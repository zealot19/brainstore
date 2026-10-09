from django.db import transaction
from django.utils import timezone
from apps.voyages_trips.models import TripSeat
from apps.voyages_trips.exceptions import VehicleNotEligible
from apps.voyages_trips.selectors.eligibility import (
    blocking_reasons, document_warnings, active_seating_plan,
)


def set_seats_status(trip, seat_ids, target_status, *, from_status=None, user=None):
    """Bulk-set TripSeat status, bumping updated_at so the change is CDC-visible.

    (`QuerySet.update()` fires no signals and skips auto_now — we set updated_at
    explicitly so the sync watermark/CDC layer captures the change.)
    """
    qs = TripSeat.objects.filter(trip=trip, is_deleted=False, id__in=list(seat_ids))
    if from_status is not None:
        qs = qs.filter(status=from_status)
    return qs.update(status=target_status, updated_by=user, updated_at=timezone.now())


def materialise_seats(trip):
    """Génère les TripSeat 1..N depuis les compteurs du plan (M05).

    Les `blocked_seats` derniers sièges sont bloqués ; les autres sont vendables.
    Séquence plate (row=i, column=1) — les champs restent renseignés pour le rendu."""
    trip.seats.all().delete()
    plan = trip.seating_plan
    if not plan:
        return
    total = plan.total_seats or 0
    blocked = min(plan.blocked_seats or 0, total)
    first_blocked = total - blocked  # sièges de numéro > first_blocked => bloqués
    rows = [
        TripSeat(
            trip=trip, seat_number=str(i), row=i, column=1, seat_type="STANDARD",
            status=TripSeat.Status.BLOCKED if i > first_blocked else TripSeat.Status.AVAILABLE,
            created_by=trip.updated_by or trip.created_by,
        )
        for i in range(1, total + 1)
    ]
    TripSeat.objects.bulk_create(rows)


@transaction.atomic
def assign_vehicle(trip, vehicle, *, user, alert_days=30):
    # vehicle=None : désaffectation (retirer le véhicule du voyage). Les sièges déjà
    # générés sont conservés (des billets peuvent exister) ; on ne touche qu'au lien.
    if vehicle is None:
        trip.vehicle = None
        trip.updated_by = user
        trip.save(update_fields=["vehicle", "updated_by", "updated_at"])
        return []
    reasons = blocking_reasons(vehicle, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip)
    if reasons:
        raise VehicleNotEligible(" ".join(reasons))
    trip.vehicle = vehicle
    fields = ["vehicle", "updated_by", "updated_at"]
    # Ne jamais réécraser des sièges déjà générés (des billets peuvent être vendus).
    # On ne prend le plan du véhicule que si aucune charte n'est encore définie.
    has_seats = trip.seats.filter(is_deleted=False).exists()
    if not trip.seating_plan_id and not has_seats:
        trip.seating_plan = active_seating_plan(vehicle, trip.scheduled_departure.date())
        fields.insert(1, "seating_plan")
    trip.updated_by = user
    trip.save(update_fields=fields)
    if not has_seats and trip.seating_plan_id:
        materialise_seats(trip)
    return document_warnings(vehicle, before_date=trip.scheduled_arrival.date(), alert_days=alert_days)
