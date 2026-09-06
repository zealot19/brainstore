import pytest
from decimal import Decimal
from apps.online_booking import services
from apps.online_booking.models import OnlineBookingRequest
from apps.voyages_booking.models import Booking, Ticket
from apps.voyages_trips.models import TripSeat

pytestmark = pytest.mark.django_db


def _no_campay(monkeypatch):
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br)


def test_initiate_resolves_price_and_stores_seat(booking_world, monkeypatch):
    _no_campay(monkeypatch)
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"],
        passenger_name="Jean Client", passenger_phone="670000000",
        passenger_email="", seat_id=w["seat"].id,
        payment_method="mtn_momo", payment_phone="670000000")
    assert br.amount == Decimal("5000")
    assert br.trip_seat_id == w["seat"].id
    assert br.status == OnlineBookingRequest.Status.PENDING


def test_initiate_rejects_unavailable_seat(booking_world, monkeypatch):
    _no_campay(monkeypatch)
    w = booking_world
    seat = w["seat"]
    seat.status = TripSeat.Status.SOLD
    seat.save(update_fields=["status"])
    from apps.core.exceptions import ApplicationError
    with pytest.raises(ApplicationError):
        services.initiate_booking(
            company=w["company"], trip=w["trip"],
            passenger_name="X", passenger_phone="6", passenger_email="",
            seat_id=seat.id, payment_method="mtn_momo", payment_phone="6")


def test_confirm_creates_online_booking(booking_world, monkeypatch):
    _no_campay(monkeypatch)
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"],
        passenger_name="Jean Client", passenger_phone="670000000",
        passenger_email="", seat_id=w["seat"].id,
        payment_method="mtn_momo", payment_phone="670000000")
    services.confirm_payment(br)
    br.refresh_from_db()
    assert br.status == OnlineBookingRequest.Status.PAID
    assert br.booking_id is not None
    b = Booking.objects.get(id=br.booking_id)
    assert b.channel == Booking.Channel.ONLINE
    assert Ticket.objects.filter(booking=b).count() == 1
    assert TripSeat.objects.get(id=w["seat"].id).status == TripSeat.Status.SOLD
