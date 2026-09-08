import pytest
from apps.system_config.models import Agency
from apps.voyages_booking.tests_integration_treasury import _setup, _book
from apps.treasury.services import create_cash_register, open_session

pytestmark = pytest.mark.django_db


def test_booking_records_owning_agency():
    company, admin, trip = _setup()
    # give the departure's origin an owning agency
    agency = Agency.objects.create(company=company, name="Douala", code="DLA")
    trip.origin.agency = agency
    trip.origin.save(update_fields=["agency"])

    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = _book(company, admin, trip)
    assert b.agency_id == agency.id
