import pytest
from apps.core.exceptions import ApplicationError
from apps.online_booking import selectors
from apps.voyages_trips.models import TripSeat

pytestmark = pytest.mark.django_db


def test_first_available_seat_returns_available(booking_world):
    seat = selectors.first_available_seat(booking_world["trip"])
    assert seat is not None and seat.status == TripSeat.Status.AVAILABLE


def test_first_available_seat_raises_when_full(booking_world):
    TripSeat.objects.filter(trip=booking_world["trip"]).update(status=TripSeat.Status.SOLD)
    with pytest.raises(ApplicationError):
        selectors.first_available_seat(booking_world["trip"])


def test_initiate_stores_source(booking_world, monkeypatch):
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br)
    w = booking_world
    br = S.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="X",
        passenger_phone="1", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="1", source="whatsapp")
    assert br.source == "whatsapp"
