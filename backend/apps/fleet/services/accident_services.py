from django.db import transaction

from apps.fleet.models import Accident


def _vehicle_of(trip):
    return trip.vehicle if (trip and trip.vehicle_id) else None


@transaction.atomic
def create_accident(
    *, trip, date, location: str, description: str,
    severity: str = Accident.Severity.MINOR,
    at_fault: bool = False,
    third_party_involved: bool = False,
    third_party_info: str = "",
    police_report_number: str = "",
    insurance_claim_number: str = "",
    notes: str = "",
    created_by,
):
    return Accident.objects.create(
        trip=trip,
        vehicle=_vehicle_of(trip),
        date=date,
        location=location,
        description=description,
        severity=severity,
        at_fault=at_fault,
        third_party_involved=third_party_involved,
        third_party_info=third_party_info,
        police_report_number=police_report_number,
        insurance_claim_number=insurance_claim_number,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def update_accident(accident, *, updated_by, **fields):
    allowed = {
        "trip_id", "date", "location", "description", "severity", "at_fault",
        "third_party_involved", "third_party_info",
        "police_report_number", "insurance_claim_number", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(accident, key, val)
    if "trip_id" in fields:
        accident.vehicle = _vehicle_of(accident.trip)   # véhicule dérivé du voyage
    accident.updated_by = updated_by
    accident.save()
    return accident


def delete_accident(accident, *, deleted_by):
    accident.soft_delete(user=deleted_by)
