import pytest
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Agency
from apps.voyages_booking.services.booking_services import create_booking
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.users.services.user_services import create_user
from apps.treasury.services import create_cash_register, open_session

pytestmark = pytest.mark.django_db


def _item(trip):
    seat = trip.seats.order_by("column").first()
    return [{"passenger": {"name": "X", "phone": "6"},
             "destination_point_id": None, "outbound_seat_id": str(seat.id)}]


def _own(trip, company):
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    trip.origin.agency = ag
    trip.origin.save(update_fields=["agency"])
    return ag


def test_agent_from_other_agency_cannot_sell():
    company, admin, trip = _setup()
    _own(trip, company)
    other = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    stranger, _ = create_user(created_by=admin, company=company, email="agent@x.com",
                              first_name="S", last_name="T", is_institution_admin=False,
                              default_agency_id=other.id, agency_ids=[other.id])
    with pytest.raises(ApplicationError):
        create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "X", "phone": "6"}, items=_item(trip),
                       payment_method="cash", user=stranger)


def test_institution_admin_is_exempt():
    company, admin, trip = _setup()
    ag = _own(trip, company)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "X", "phone": "6"}, items=_item(trip),
                       payment_method="cash", user=admin)
    assert b.agency_id == ag.id
