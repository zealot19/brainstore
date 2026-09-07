import sys
import types
import pytest
from django.test import override_settings
from apps.online_booking import services

pytestmark = pytest.mark.django_db


def _fake_tickets_module(calls, monkeypatch):
    for name in ("apps.whatsapp_bot", "apps.whatsapp_bot.services"):
        if name not in sys.modules:
            monkeypatch.setitem(sys.modules, name, types.ModuleType(name))
    mod = types.ModuleType("apps.whatsapp_bot.services.tickets")
    mod.notify_ticket = lambda br: calls.append(br.id)
    monkeypatch.setitem(sys.modules, "apps.whatsapp_bot.services.tickets", mod)


def _initiate(w, source):
    return services.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="J",
        passenger_phone="1", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="1", source=source)


@override_settings(FAKE_PAYMENTS=True)
def test_paid_whatsapp_request_notifies(booking_world, monkeypatch):
    calls = []
    _fake_tickets_module(calls, monkeypatch)
    br = _initiate(booking_world, "whatsapp")
    services.simulate_payment(br)
    assert calls == [br.id]


@override_settings(FAKE_PAYMENTS=True)
def test_paid_pwa_request_does_not_notify(booking_world, monkeypatch):
    calls = []
    _fake_tickets_module(calls, monkeypatch)
    br = _initiate(booking_world, "pwa")
    services.simulate_payment(br)
    assert calls == []
