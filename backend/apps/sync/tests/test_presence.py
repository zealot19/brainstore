import pytest
from django.urls import reverse
from django.utils import timezone
from datetime import timedelta
from rest_framework.test import APIClient

from apps.sync.presence import is_agency_online, touch
from apps.sync.models import AgencyPresence
from apps.sync.schema import schema_fingerprint
from apps.system_config.models import Agency
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _cfg(settings):
    settings.SYNC_ENABLED = True
    settings.SYNC_TOKEN = "secret"


def _agency():
    c, _ = create_company(name="P", admin_email="pr@x.com", admin_first_name="A", admin_last_name="B")
    return Agency.objects.create(company=c, name="Douala", code="DLA")


def test_is_agency_online_freshness():
    ag = _agency()
    assert not is_agency_online(ag.id)
    touch(ag.id)
    assert is_agency_online(ag.id)
    AgencyPresence.objects.filter(agency_id=ag.id).update(last_seen=timezone.now() - timedelta(seconds=999))
    assert not is_agency_online(ag.id)


def test_heartbeat_endpoint_updates_presence():
    ag = _agency()
    r = APIClient().post(reverse("sync-heartbeat"), {"agency_id": str(ag.id)}, format="json",
                         HTTP_AUTHORIZATION="Bearer secret", HTTP_X_SCHEMA_VERSION=schema_fingerprint())
    assert r.status_code == 200
    assert is_agency_online(ag.id)


def test_heartbeat_requires_token():
    ag = _agency()
    r = APIClient().post(reverse("sync-heartbeat"), {"agency_id": str(ag.id)}, format="json")
    assert r.status_code in (401, 403)
