import pytest
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S


def _parcel(company, trip, origin, dest, ctype, status):
    return Parcel.objects.create(
        company=company, status=status, origin_point=origin, destination_point=dest,
        consignment_type=ctype, trip=trip, sender_name="E", sender_phone="6",
        recipient_name="R", recipient_phone="7")


@pytest.mark.django_db
def test_depart_and_complete_cascade_to_parcels():
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    from apps.voyages_trips.services.trip_services import depart_trip, complete_trip
    company, admin, trip = _setup()
    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    p1 = _parcel(company, trip, trip.origin, trip.destination, ctype, Parcel.Status.READY_FOR_TRAVEL)
    p2 = _parcel(company, trip, trip.origin, trip.destination, ctype, Parcel.Status.LOADED)

    depart_trip(trip, user=admin, lead_hours=48)
    p1.refresh_from_db(); p2.refresh_from_db()
    assert p1.status == Parcel.Status.IN_TRANSIT
    assert p2.status == Parcel.Status.IN_TRANSIT

    complete_trip(trip, user=admin)
    p1.refresh_from_db(); p2.refresh_from_db()
    assert p1.status == Parcel.Status.ARRIVED
    assert p2.status == Parcel.Status.ARRIVED
