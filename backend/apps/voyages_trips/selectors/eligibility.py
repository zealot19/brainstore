from datetime import timedelta
from django.db.models import Q
from apps.fleet.models import Vehicle, VehicleDocument, Service
from apps.voyages_config.models import VehicleSeatingAssignment
from apps.voyages_trips.models import Trip


def active_seating_plan(vehicle, on_date):
    """The seating plan assigned to a vehicle and valid on `on_date`, else None."""
    a = (VehicleSeatingAssignment.objects
         .filter(vehicle=vehicle, is_deleted=False, is_active=True, valid_from__lte=on_date)
         .filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date))
         .order_by("-valid_from")
         .first())
    return a.seating_plan if a else None


def blocking_reasons(vehicle, *, window_start, window_end, exclude_trip=None):
    """Human reasons a vehicle CANNOT run the trip window. Empty list = eligible."""
    reasons = []
    if not vehicle.is_active or vehicle.status != Vehicle.Status.AVAILABLE:
        reasons.append("Véhicule non disponible.")
    if active_seating_plan(vehicle, window_start.date()) is None:
        reasons.append("Aucun plan de bus actif pour ce véhicule à cette date.")
    svc = Service.objects.filter(
        vehicle=vehicle, is_deleted=False,
        status__in=[Service.Status.PLANNED, Service.Status.IN_PROGRESS],
        planned_date__gte=window_start.date(), planned_date__lte=window_end.date(),
    )
    if svc.exists():
        reasons.append("Une intervention est planifiée sur ce véhicule pendant le voyage.")
    other = Trip.objects.filter(
        vehicle=vehicle, is_deleted=False,
        status__in=[Trip.Status.DRAFT, Trip.Status.PENDING, Trip.Status.DEPARTED],
        scheduled_departure__lt=window_end, scheduled_arrival__gt=window_start,
    )
    if exclude_trip:
        other = other.exclude(id=exclude_trip.id)
    if other.exists():
        reasons.append("Ce véhicule est déjà affecté à un voyage sur ce créneau.")

    # Mission flotte (Assignment) en cours/à venir chevauchant le créneau.
    from apps.fleet.models import Assignment
    missions = Assignment.objects.filter(
        vehicle=vehicle, is_deleted=False,
        status__in=[Assignment.Status.PENDING, Assignment.Status.IN_PROGRESS],
        planned_departure__lt=window_end,
    ).filter(Q(planned_return__isnull=True) | Q(planned_return__gt=window_start))
    if missions.exists():
        reasons.append("Ce véhicule est en mission (flotte) sur ce créneau.")
    return reasons


def crew_member_conflict(company, member, *, window_start, window_end, exclude_trip=None):
    """Autre voyage (non terminé/annulé) chevauchant le créneau où ce membre est déjà affecté."""
    qs = Trip.objects.filter(
        company=company, is_deleted=False,
        status__in=[Trip.Status.DRAFT, Trip.Status.PENDING, Trip.Status.DEPARTED],
        scheduled_departure__lt=window_end, scheduled_arrival__gt=window_start,
        crew__member=member, crew__is_deleted=False,
    )
    if exclude_trip:
        qs = qs.exclude(id=exclude_trip.id)
    return qs.first()


def document_warnings(vehicle, *, before_date, alert_days):
    horizon = before_date + timedelta(days=alert_days)
    docs = (VehicleDocument.objects
            .filter(vehicle=vehicle, is_deleted=False, expiry_date__isnull=False, expiry_date__lte=horizon)
            .order_by("expiry_date"))
    return [f"Document « {d.get_doc_type_display()} » expire le {d.expiry_date:%d/%m/%Y}." for d in docs]


def eligible_vehicles(company, *, window_start, window_end, exclude_trip=None):
    qs = Vehicle.objects.filter(company=company, is_deleted=False, is_active=True,
                                status=Vehicle.Status.AVAILABLE).select_related("model__brand")
    ok = [v.id for v in qs
          if not blocking_reasons(v, window_start=window_start, window_end=window_end, exclude_trip=exclude_trip)]
    return Vehicle.objects.filter(id__in=ok).select_related("model__brand")
