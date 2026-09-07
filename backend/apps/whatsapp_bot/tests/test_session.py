import pytest
from apps.whatsapp_bot.models import WhatsAppSession

pytestmark = pytest.mark.django_db


def test_get_or_start_creates_then_reuses():
    s1, new1 = WhatsAppSession.get_or_start("237650")
    assert new1 and s1.step == WhatsAppSession.Step.START
    s2, new2 = WhatsAppSession.get_or_start("237650")
    assert not new2 and s2.id == s1.id


def test_context_roundtrips():
    s, _ = WhatsAppSession.get_or_start("237651")
    s.context = {"from_town_id": "abc"}
    s.save()
    assert WhatsAppSession.objects.get(wa_id="237651").context["from_town_id"] == "abc"
