import pytest
from apps.voyages_booking.models import Booking
from apps.voyages_booking.services.booking_services import create_booking
from apps.voyages_booking.tests_integration_treasury import _setup

pytestmark = pytest.mark.django_db


def _open_caisse(company, admin):
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)


def _book(company, admin, trip, **extra):
    seat = trip.seats.order_by("column").first()
    return create_booking(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec={"name": "Cli Ent", "phone": "690"},
        items=[{"passenger": {"name": "Cli Ent", "phone": "690"},
                "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
        payment_method="cash", user=admin, **extra)


def test_create_booking_defaults_to_counter_channel():
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip)
    assert b.channel == Booking.Channel.COUNTER


def test_create_booking_accepts_online_channel():
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip, channel=Booking.Channel.ONLINE)
    assert b.channel == Booking.Channel.ONLINE
