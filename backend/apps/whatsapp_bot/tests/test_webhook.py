import hashlib
import hmac
import json
import pytest
from django.test import override_settings
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


@override_settings(WHATSAPP_VERIFY_TOKEN="V")
def test_get_verification_echoes_challenge():
    r = APIClient().get(reverse("whatsapp-webhook"),
                        {"hub.mode": "subscribe", "hub.verify_token": "V", "hub.challenge": "123"})
    assert r.status_code == 200 and r.content.decode() == "123"


@override_settings(WHATSAPP_VERIFY_TOKEN="V")
def test_get_verification_bad_token_403():
    r = APIClient().get(reverse("whatsapp-webhook"),
                        {"hub.mode": "subscribe", "hub.verify_token": "X", "hub.challenge": "123"})
    assert r.status_code == 403


@override_settings(WHATSAPP_APP_SECRET="S")
def test_post_bad_signature_403():
    body = json.dumps({"entry": []})
    r = APIClient().post(reverse("whatsapp-webhook"), data=body,
                         content_type="application/json",
                         HTTP_X_HUB_SIGNATURE_256="sha256=deadbeef")
    assert r.status_code == 403


@override_settings(WHATSAPP_APP_SECRET="S")
def test_post_valid_signature_dispatches(monkeypatch, settings):
    settings.FAKE_PAYMENTS = True
    calls = []
    from apps.whatsapp_bot.services import engine
    monkeypatch.setattr(engine, "handle_message", lambda wa, val: calls.append((wa, val)) or [])
    payload = {"entry": [{"changes": [{"value": {"messages": [
        {"id": "wamid.1", "from": "237650", "type": "text", "text": {"body": "bonjour"}}
    ]}}]}]}
    body = json.dumps(payload).encode()
    sig = "sha256=" + hmac.new(b"S", body, hashlib.sha256).hexdigest()
    r = APIClient().post(reverse("whatsapp-webhook"), data=body,
                         content_type="application/json", HTTP_X_HUB_SIGNATURE_256=sig)
    assert r.status_code == 200
    assert calls == [("237650", "bonjour")]


@override_settings(WHATSAPP_APP_SECRET="S")
def test_post_dedupes_repeated_message_id(monkeypatch, settings):
    settings.FAKE_PAYMENTS = True
    calls = []
    from apps.whatsapp_bot.services import engine
    monkeypatch.setattr(engine, "handle_message", lambda wa, val: calls.append((wa, val)) or [])
    payload = {"entry": [{"changes": [{"value": {"messages": [
        {"id": "wamid.dup", "from": "237651", "type": "text", "text": {"body": "hi"}}
    ]}}]}]}
    body = json.dumps(payload).encode()
    sig = "sha256=" + hmac.new(b"S", body, hashlib.sha256).hexdigest()
    c = APIClient()
    c.post(reverse("whatsapp-webhook"), data=body, content_type="application/json",
           HTTP_X_HUB_SIGNATURE_256=sig)
    c.post(reverse("whatsapp-webhook"), data=body, content_type="application/json",
           HTTP_X_HUB_SIGNATURE_256=sig)
    assert len(calls) == 1  # second delivery ignored
