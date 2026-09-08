import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from apps.sync.apply import apply_change
from apps.sync.snapshot import full_down_snapshot
from apps.voyages_config.models import Town
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _cfg(settings):
    settings.SYNC_ENABLED = True
    settings.SYNC_TOKEN = "secret"


def _co(email):
    c, _ = create_company(name="Snap", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c


def test_full_down_snapshot_includes_config_rows():
    c = _co("s1@x.com")
    Town.objects.create(company=c, name="Douala")
    labels = {e["entity"] for e in full_down_snapshot()}
    assert "voyages_config.town" in labels
    assert "system_config.company" in labels


def test_snapshot_endpoint_requires_token():
    assert APIClient().get(reverse("sync-snapshot")).status_code in (401, 403)


def test_snapshot_endpoint_returns_changes_and_cursor():
    c = _co("s2@x.com")
    Town.objects.create(company=c, name="Yaoundé")
    r = APIClient().get(reverse("sync-snapshot"), HTTP_AUTHORIZATION="Bearer secret")
    assert r.status_code == 200
    assert "voyages_config.town" in {e["entity"] for e in r.data["changes"]}
    assert "cursor" in r.data


def test_snapshot_entry_reseeds_deleted_row():
    c = _co("s3@x.com")
    town = Town.objects.create(company=c, name="Bafoussam")
    entry = next(e for e in full_down_snapshot()
                 if e["entity"] == "voyages_config.town" and e["object_id"] == str(town.id))
    Town.all_objects.filter(pk=town.id).delete()
    assert apply_change(entry) == "applied"
    assert Town.all_objects.get(pk=town.id).name == "Bafoussam"
