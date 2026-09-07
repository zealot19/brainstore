import pytest
from django.test import override_settings
from apps.whatsapp_bot.services import wa_client

pytestmark = pytest.mark.django_db


@override_settings(WHATSAPP_TOKEN="T", WHATSAPP_PHONE_NUMBER_ID="PNID")
def test_send_text_posts_expected_payload(monkeypatch):
    captured = {}

    def fake_post(path, payload, **kw):
        captured["path"] = path
        captured["payload"] = payload
        return {"messages": [{"id": "wamid.1"}]}

    monkeypatch.setattr(wa_client, "_post", fake_post)
    wa_client.send_text("237650000000", "Bonjour")
    assert captured["path"] == "messages"
    assert captured["payload"]["to"] == "237650000000"
    assert captured["payload"]["text"]["body"] == "Bonjour"
    assert captured["payload"]["messaging_product"] == "whatsapp"


@override_settings(WHATSAPP_TOKEN="T", WHATSAPP_PHONE_NUMBER_ID="PNID")
def test_send_list_builds_interactive(monkeypatch):
    captured = {}
    monkeypatch.setattr(wa_client, "_post", lambda p, payload, **kw: captured.update(payload) or {})
    wa_client.send_list("237", "Villes", "Choisissez", [{"id": "a", "title": "Douala"}])
    assert captured["interactive"]["type"] == "list"
    sec = captured["interactive"]["action"]["sections"][0]
    assert sec["rows"][0]["id"] == "a"
    assert sec["rows"][0]["title"] == "Douala"


@override_settings(WHATSAPP_TOKEN="T", WHATSAPP_PHONE_NUMBER_ID="PNID")
def test_send_buttons_caps_at_three(monkeypatch):
    captured = {}
    monkeypatch.setattr(wa_client, "_post", lambda p, payload, **kw: captured.update(payload) or {})
    wa_client.send_buttons("237", "Payer ?", [
        {"id": "a", "title": "1"}, {"id": "b", "title": "2"},
        {"id": "c", "title": "3"}, {"id": "d", "title": "4"}])
    btns = captured["interactive"]["action"]["buttons"]
    assert len(btns) == 3 and btns[0]["reply"]["id"] == "a"
