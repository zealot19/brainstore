import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from apps.sync.capture import snapshot
from apps.voyages_config.models import Town
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _cfg(settings):
    settings.SYNC_ENABLED = True
    settings.SYNC_TOKEN = "secret"


def _auth():
    return {"HTTP_AUTHORIZATION": "Bearer secret"}


def _co(email):
    c, _ = create_company(name="E", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c


def test_pull_requires_token():
    assert APIClient().get(reverse("sync-pull")).status_code in (401, 403)


def test_push_requires_token():
    r = APIClient().post(reverse("sync-push"), {"changes": []}, format="json")
    assert r.status_code in (401, 403)


def test_pull_returns_down_changes():
    c = _co("p1@x.com")
    Town.objects.create(company=c, name="Douala")
    r = APIClient().get(reverse("sync-pull") + "?since=0", **_auth())
    assert r.status_code == 200
    assert "voyages_config.town" in [e["entity"] for e in r.data["changes"]]
    assert r.data["cursor"] >= 1


def test_push_applies_changes():
    c = _co("p2@x.com")
    town = Town.objects.create(company=c, name="Yaoundé")
    entry = {"entity": "voyages_config.town", "object_id": str(town.id), "op": "upsert",
             "payload": snapshot(town), "version": town.updated_at.isoformat()}
    Town.all_objects.filter(pk=town.id).delete()
    r = APIClient().post(reverse("sync-push"), {"changes": [entry]}, format="json", **_auth())
    assert r.status_code == 200 and r.data["applied"] == 1
    assert Town.all_objects.filter(pk=town.id).exists()
