"""Visibilité des réservations cloisonnée par agence : un utilisateur ne voit que
les réservations de son/ses agence(s) ; l'admin institution voit tout."""
import pytest
from apps.system_config.models import Agency
from apps.voyages_booking.services.booking_services import create_booking
from apps.voyages_booking.selectors import list_bookings
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


def _booking_at(company, admin, trip):
    ag = _own(trip, company)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "X", "phone": "6"}, items=_item(trip),
                       payment_method="cash", user=admin)
    return ag, b


def _ids(company, user):
    return set(list_bookings(company, user=user).values_list("id", flat=True))


def test_other_agency_user_does_not_see_booking():
    company, admin, trip = _setup()
    ag, b = _booking_at(company, admin, trip)
    other = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    stranger, _ = create_user(created_by=admin, company=company, email="stranger@x.com",
                              first_name="S", last_name="T", is_institution_admin=False,
                              default_agency_id=other.id, agency_ids=[other.id])
    assert b.id not in _ids(company, stranger)


def test_same_agency_user_sees_booking():
    company, admin, trip = _setup()
    ag, b = _booking_at(company, admin, trip)
    agent, _ = create_user(created_by=admin, company=company, email="agent@x.com",
                           first_name="S", last_name="T", is_institution_admin=False,
                           default_agency_id=ag.id, agency_ids=[ag.id])
    assert b.id in _ids(company, agent)


def test_institution_admin_sees_all_bookings():
    company, admin, trip = _setup()
    ag, b = _booking_at(company, admin, trip)
    assert b.id in _ids(company, admin)
