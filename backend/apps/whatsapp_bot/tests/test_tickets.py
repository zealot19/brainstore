import pytest
from django.test import override_settings
from apps.whatsapp_bot.services import tickets, wa_client
from apps.online_booking import services

pytestmark = pytest.mark.django_db


@override_settings(FAKE_PAYMENTS=True)
def test_notify_ticket_sends_image(booking_world, monkeypatch):
    sent = {"media": 0, "image": None, "text": 0}
    monkeypatch.setattr(wa_client, "upload_media",
                        lambda b, **k: sent.__setitem__("media", sent["media"] + 1) or "MID")
    monkeypatch.setattr(wa_client, "send_image",
                        lambda to, mid, caption="": sent.__setitem__("image", (to, mid)))
    monkeypatch.setattr(wa_client, "send_text",
                        lambda to, body: sent.__setitem__("text", sent["text"] + 1))
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="Jean",
        passenger_phone="237650", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="237650", source="whatsapp")
    services.confirm_payment(br)  # triggers the hook -> notify_ticket
    assert sent["media"] == 1
    assert sent["image"][0] == "237650" and sent["image"][1] == "MID"


def test_qr_png_is_valid_png(booking_world):
    png = tickets._qr_png("TKT-0001")
    assert png[:8] == b"\x89PNG\r\n\x1a\n"
