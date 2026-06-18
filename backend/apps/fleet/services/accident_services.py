from django.db import transaction
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.fleet.models import Accident


@transaction.atomic
def create_accident(
    *, vehicle, date, location: str, description: str,
    severity: str = Accident.Severity.MINOR,
    at_fault: bool = False,
    third_party_involved: bool = False,
    third_party_info: str = "",
    police_report_number: str = "",
    insurance_claim_number: str = "",
    estimated_damage_cost=None,
    assignment_id=None,
    internal_driver_id=None,
    external_driver_id=None,
    notes: str = "",
    created_by,
):
    return Accident.objects.create(
        vehicle=vehicle,
        date=date,
        location=location,
        description=description,
        severity=severity,
        at_fault=at_fault,
        third_party_involved=third_party_involved,
        third_party_info=third_party_info,
        police_report_number=police_report_number,
        insurance_claim_number=insurance_claim_number,
        estimated_damage_cost=estimated_damage_cost,
        assignment_id=assignment_id,
        internal_driver_id=internal_driver_id,
        external_driver_id=external_driver_id,
        status=Accident.Status.REPORTED,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_accident(accident, *, updated_by, **fields):
    if accident.status == Accident.Status.CLOSED:
        raise ApplicationError(_("Un accident clôturé ne peut pas être modifié."))
    allowed = {
        "date", "location", "description", "severity", "at_fault",
        "third_party_involved", "third_party_info",
        "police_report_number", "insurance_claim_number",
        "estimated_damage_cost", "internal_driver_id",
        "external_driver_id", "assignment_id", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(accident, key, val)
    accident.updated_by = updated_by
    accident.save()
    return accident


@transaction.atomic
def update_accident_status(accident, *, status: str, updated_by):
    valid_transitions = {
        Accident.Status.REPORTED: [Accident.Status.UNDER_REVIEW],
        Accident.Status.UNDER_REVIEW: [Accident.Status.REPAIR_IN_PROGRESS, Accident.Status.CLOSED],
        Accident.Status.REPAIR_IN_PROGRESS: [Accident.Status.CLOSED],
    }
    allowed = valid_transitions.get(accident.status, [])
    if status not in allowed:
        raise ApplicationError(
            _("Transition de statut invalide : {from_s} → {to_s}.").format(
                from_s=accident.get_status_display(), to_s=status
            )
        )
    accident.status = status
    accident.updated_by = updated_by
    accident.save(update_fields=["status", "updated_by", "updated_at"])
    return accident


@transaction.atomic
def close_accident(accident, *, actual_repair_cost=None, notes: str = None, updated_by):
    if accident.status == Accident.Status.CLOSED:
        raise ApplicationError(_("Cet accident est déjà clôturé."))
    accident.status = Accident.Status.CLOSED
    if actual_repair_cost is not None:
        accident.actual_repair_cost = actual_repair_cost
    if notes is not None:
        accident.notes = notes
    accident.updated_by = updated_by
    accident.save()
    return accident


def delete_accident(accident, *, deleted_by):
    accident.soft_delete(user=deleted_by)
