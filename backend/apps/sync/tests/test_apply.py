import pytest
from django.utils import timezone
from datetime import timedelta

from apps.sync.capture import snapshot
from apps.sync.apply import apply_change
from apps.sync.models import ChangeLog
from apps.voyages_config.models import Town
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _enable_sync(settings):
    settings.SYNC_ENABLED = True


def _company(email="apply@x.com"):
    c, _ = create_company(name="ApplyCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c


def _entry(town, op=ChangeLog.OP_UPSERT):
    return {
        "entity": "voyages_config.town",
        "object_id": str(town.id),
        "op": op,
        "payload": snapshot(town) if op == ChangeLog.OP_UPSERT else {},
        "version": town.updated_at.isoformat(),
    }


def test_upsert_recreates_deleted_row_with_same_pk_and_timestamp():
    c = _company()
    town = Town.objects.create(company=c, name="Douala")
    entry = _entry(town)
    orig_updated = town.updated_at
    Town.all_objects.filter(pk=town.id).delete()  # hard-remove locally
    assert apply_change(entry) == "applied"
    restored = Town.all_objects.get(pk=town.id)
    assert restored.name == "Douala" and restored.company_id == c.id
    # incoming updated_at preserved (not overwritten by auto_now)
    assert abs((restored.updated_at - orig_updated).total_seconds()) < 1


def test_delete_entry_tombstones_row():
    c = _company("apply2@x.com")
    town = Town.objects.create(company=c, name="X")
    assert apply_change(_entry(town, ChangeLog.OP_DELETE)) == "applied"
    assert Town.all_objects.get(pk=town.id).is_deleted is True


def test_older_version_is_skipped():
    c = _company("apply3@x.com")
    town = Town.objects.create(company=c, name="New")
    stale = _entry(town)
    stale["payload"]["name"] = "Old"
    stale["version"] = (town.updated_at - timedelta(days=1)).isoformat()
    assert apply_change(stale) == "skipped"
    assert Town.all_objects.get(pk=town.id).name == "New"


def test_apply_does_not_echo_to_changelog():
    c = _company("apply4@x.com")
    town = Town.objects.create(company=c, name="Echo")
    entry = _entry(town)
    Town.all_objects.filter(pk=town.id).delete()
    before = ChangeLog.objects.count()
    apply_change(entry)
    assert ChangeLog.objects.count() == before  # suspend_capture prevented echo
