from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.fleet.models import Assignment, Vehicle, OdometerLog


@transaction.atomic
def create_assignment(
    *, vehicle, company, purpose: str, destination: str,
    planned_departure, planned_return=None,
    departure_location: str = "",
    internal_driver_id=None, external_driver_id=None,
    notes: str = "", created_by,
):
    if not internal_driver_id and not external_driver_id:
        raise ApplicationError(_("Un conducteur (interne ou externe) est requis."))

    if vehicle.status != Vehicle.Status.AVAILABLE:
        raise ApplicationError(
            _("Le véhicule {plate} n'est pas disponible (statut : {status}).").format(
                plate=vehicle.license_plate,
                status=vehicle.get_status_display(),
            )
        )

    return Assignment.objects.create(
        vehicle=vehicle,
        company=company,
        purpose=purpose,
        destination=destination,
        planned_departure=planned_departure,
        planned_return=planned_return,
        departure_location=departure_location,
        internal_driver_id=internal_driver_id,
        external_driver_id=external_driver_id,
        status=Assignment.Status.PENDING,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def start_assignment(assignment, *, actual_departure=None, start_odometer=None, updated_by):
    if assignment.status != Assignment.Status.PENDING:
        raise ApplicationError(_("Seule une mission en attente peut être démarrée."))

    vehicle = assignment.vehicle
    if vehicle.status != Vehicle.Status.AVAILABLE:
        raise ApplicationError(
            _("Le véhicule {plate} n'est plus disponible.").format(plate=vehicle.license_plate)
        )

    now = actual_departure or timezone.now()
    assignment.status = Assignment.Status.IN_PROGRESS
    assignment.actual_departure = now
    assignment.start_odometer = start_odometer or vehicle.current_odometer
    assignment.updated_by = updated_by
    assignment.save(update_fields=[
        "status", "actual_departure", "start_odometer", "updated_by", "updated_at"
    ])

    vehicle.status = Vehicle.Status.ON_MISSION
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "updated_by", "updated_at"])

    return assignment


@transaction.atomic
def complete_assignment(assignment, *, actual_return=None, end_odometer=None,
                         notes: str = None, updated_by):
    if assignment.status != Assignment.Status.IN_PROGRESS:
        raise ApplicationError(_("Seule une mission en cours peut être clôturée."))

    now = actual_return or timezone.now()
    vehicle = assignment.vehicle

    if end_odometer is not None and end_odometer < (assignment.start_odometer or 0):
        raise ApplicationError(_("Le kilométrage de retour est inférieur au kilométrage de départ."))

    assignment.status = Assignment.Status.COMPLETED
    assignment.actual_return = now
    if end_odometer is not None:
        assignment.end_odometer = end_odometer
    if notes is not None:
        assignment.notes = notes
    assignment.updated_by = updated_by
    assignment.save()

    # Mise à jour odomètre véhicule
    if end_odometer and end_odometer > vehicle.current_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle,
            value_km=end_odometer,
            date=now.date(),
            source=OdometerLog.Source.ASSIGNMENT,
            note=f"Retour mission : {assignment.destination}",
            created_by=updated_by,
        )
        vehicle.current_odometer = end_odometer

    vehicle.status = Vehicle.Status.AVAILABLE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])

    return assignment


@transaction.atomic
def cancel_assignment(assignment, *, updated_by):
    if assignment.status == Assignment.Status.COMPLETED:
        raise ApplicationError(_("Une mission terminée ne peut pas être annulée."))

    was_in_progress = assignment.status == Assignment.Status.IN_PROGRESS
    assignment.status = Assignment.Status.CANCELLED
    assignment.updated_by = updated_by
    assignment.save(update_fields=["status", "updated_by", "updated_at"])

    if was_in_progress:
        vehicle = assignment.vehicle
        vehicle.status = Vehicle.Status.AVAILABLE
        vehicle.updated_by = updated_by
        vehicle.save(update_fields=["status", "updated_by", "updated_at"])

    return assignment


@transaction.atomic
def update_assignment(assignment, *, updated_by, **fields):
    if assignment.status not in (Assignment.Status.PENDING,):
        raise ApplicationError(_("Seule une mission en attente peut être modifiée."))
    allowed = {
        "purpose", "destination", "departure_location",
        "planned_departure", "planned_return",
        "internal_driver_id", "external_driver_id", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(assignment, key, val)
    assignment.updated_by = updated_by
    assignment.save()
    return assignment


def delete_assignment(assignment, *, deleted_by):
    if assignment.status == Assignment.Status.IN_PROGRESS:
        raise ApplicationError(_("Annulez la mission avant de la supprimer."))
    assignment.soft_delete(user=deleted_by)
