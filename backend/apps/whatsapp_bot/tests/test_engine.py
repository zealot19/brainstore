import pytest
from apps.whatsapp_bot.services import engine
from apps.whatsapp_bot.models import WhatsAppSession
from apps.online_booking.models import OnlineBookingRequest

pytestmark = pytest.mark.django_db


@pytest.fixture
def wa(booking_world, settings):
    settings.WHATSAPP_COMPANY_ID = str(booking_world["company"].id)
    settings.FAKE_PAYMENTS = True
    return booking_world


def test_greeting_lists_towns(wa):
    out = engine.handle_message("237650", "bonjour")
    assert out[-1].kind == "list"
    titles = [r["title"] for r in out[-1].rows]
    assert "Douala" in titles and "Yaoundé" in titles
    assert WhatsAppSession.objects.get(wa_id="237650").step == WhatsAppSession.Step.ASK_FROM


def test_full_flow_to_confirm_and_pay(wa):
    w = wa
    from_id = str(w["town_from"].id)
    to_id = str(w["town_to"].id)
    date = w["trip"].scheduled_departure.date().isoformat()
    engine.handle_message("237651", "bonjour")            # -> ASK_FROM (towns)
    engine.handle_message("237651", from_id)              # from -> ASK_TO
    engine.handle_message("237651", to_id)                # to -> ASK_DATE
    engine.handle_message("237651", f"date:{date}")       # date -> SHOW_TRIPS
    engine.handle_message("237651", str(w["trip"].id))    # trip -> ASK_NAME
    engine.handle_message("237651", "Jean Client")        # name -> ASK_PAY_METHOD
    engine.handle_message("237651", "pm:mtn_momo")        # method -> ASK_PAYMENT_PHONE
    engine.handle_message("237651", "670000000")          # phone -> CONFIRM
    out = engine.handle_message("237651", "confirm:yes")  # confirm -> AWAIT_PAYMENT
    assert any(m.kind == "buttons" for m in out)          # PAYER button
    br = OnlineBookingRequest.objects.get(passenger_name="Jean Client")
    assert br.source == "whatsapp" and br.passenger_phone == "237651"
    engine.handle_message("237651", "pay")                # simulate approval
    br.refresh_from_db()
    assert br.status == OnlineBookingRequest.Status.PAID
    assert WhatsAppSession.objects.get(wa_id="237651").step == WhatsAppSession.Step.DONE


def test_confirm_no_restarts(wa):
    w = wa
    engine.handle_message("237652", "bonjour")
    engine.handle_message("237652", str(w["town_from"].id))
    engine.handle_message("237652", str(w["town_to"].id))
    engine.handle_message("237652", f"date:{w['trip'].scheduled_departure.date().isoformat()}")
    engine.handle_message("237652", str(w["trip"].id))
    engine.handle_message("237652", "Jean")
    engine.handle_message("237652", "pm:orange_money")
    engine.handle_message("237652", "690")
    out = engine.handle_message("237652", "confirm:no")
    assert out[-1].kind == "list"  # back to town list
    assert WhatsAppSession.objects.get(wa_id="237652").step == WhatsAppSession.Step.ASK_FROM
