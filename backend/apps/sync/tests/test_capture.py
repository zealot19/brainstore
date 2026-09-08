import pytest
from apps.sync.models import ChangeLog
from apps.sync.capture import suspend_capture
from apps.voyages_config.models import Town
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _enable_sync(settings):
    settings.SYNC_ENABLED = True


def _company(email):
    c, _ = create_company(name="Cdc", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c


def test_save_registered_model_records_upsert():
    c = _company("cdc1@x.com")
    town = Town.objects.create(company=c, name="Douala")
    row = ChangeLog.objects.filter(entity="voyages_config.town", object_id=town.id,
                                   op=ChangeLog.OP_UPSERT).first()
    assert row is not None
    assert row.payload["name"] == "Douala"
    assert row.payload["company_id"] == str(c.id)
    assert row.origin_node  # NODE_ID or NODE_ROLE


def test_delete_registered_model_records_delete():
    c = _company("cdc2@x.com")
    town = Town.objects.create(company=c, name="X")
    tid = town.id
    town.delete()
    assert ChangeLog.objects.filter(entity="voyages_config.town", object_id=tid,
                                    op=ChangeLog.OP_DELETE).exists()


def test_unregistered_model_not_captured():
    from apps.whatsapp_bot.models import WhatsAppSession
    WhatsAppSession.objects.create(wa_id="237999")
    assert not ChangeLog.objects.filter(entity="whatsapp_bot.whatsappsession").exists()


def test_suspend_capture_blocks_recording():
    c = _company("cdc3@x.com")
    before = ChangeLog.objects.count()
    with suspend_capture():
        Town.objects.create(company=c, name="Quiet")
    assert ChangeLog.objects.count() == before


def test_capture_disabled_when_sync_off(settings):
    settings.SYNC_ENABLED = False
    c = _company("cdc4@x.com")
    before = ChangeLog.objects.count()
    Town.objects.create(company=c, name="Off")
    assert ChangeLog.objects.count() == before
