import pytest
from django.test import override_settings
from apps.online_booking import services
from apps.online_booking.models import OnlineBookingRequest as OBR
from apps.voyages_booking.models import Booking

pytestmark = pytest.mark.django_db


def _initiate(w):
    return services.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="Jean",
        passenger_phone="670", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="670", source="whatsapp")


@override_settings(FAKE_PAYMENTS=True)
def test_initiate_skips_campay_when_fake(booking_world, monkeypatch):
    called = {"n": 0}
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment",
                        lambda br: called.__setitem__("n", called["n"] + 1) or br)
    br = _initiate(booking_world)
    assert called["n"] == 0
    assert br.status == OBR.Status.PENDING
    assert br.payment_reference.startswith("FAKE-")


@override_settings(FAKE_PAYMENTS=True)
def test_simulate_payment_confirms(booking_world):
    br = _initiate(booking_world)
    services.simulate_payment(br)
    br.refresh_from_db()
    assert br.status == OBR.Status.PAID
    assert Booking.objects.filter(id=br.booking_id, channel=Booking.Channel.ONLINE).exists()


@override_settings(FAKE_PAYMENTS=False)
def test_simulate_payment_noop_when_real(booking_world, monkeypatch):
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br)
    br = _initiate(booking_world)
    services.simulate_payment(br)
    br.refresh_from_db()
    assert br.status == OBR.Status.PENDING  # unchanged
