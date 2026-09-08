import uuid
import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from apps.system_config.models import Agency
from apps.system_config.services import create_company
from apps.authentication.models import User
from apps.sync.presence import touch
from apps.sync.models import OnlineBookingJob

pytestmark = pytest.mark.django_db


def _setup():
    c, _ = create_company(name="M", admin_email="m@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m@x.com")
    ag = Agency.objects.create(company=c, name="Douala", code="DLA")
    return c, admin, ag


def test_status_requires_auth():
    assert APIClient().get(reverse("sync-status")).status_code in (401, 403)


def test_status_reports_presence_and_jobs():
    c, admin, ag = _setup()
    touch(ag.id)
    OnlineBookingJob.objects.create(trip_id=uuid.uuid4(), agency=ag, passenger_name="X",
                                    passenger_phone="6", status=OnlineBookingJob.FAILED, error="complet")
    client = APIClient()
    client.force_authenticate(user=admin)
    r = client.get(reverse("sync-status"))
    assert r.status_code == 200
    data = r.data["data"]
    assert any(a["agency_id"] == str(ag.id) and a["online"] for a in data["agencies"])
    assert data["jobs"]["failed"] == 1
    assert data["recent_failures"][0]["error"] == "complet"
