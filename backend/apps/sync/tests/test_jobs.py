import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from apps.sync.models import OnlineBookingJob
from apps.sync.schema import schema_fingerprint
from apps.system_config.models import Agency
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _cfg(settings):
    settings.SYNC_ENABLED = True
    settings.SYNC_TOKEN = "secret"


def _hdr():
    return {"HTTP_AUTHORIZATION": "Bearer secret", "HTTP_X_SCHEMA_VERSION": schema_fingerprint()}


def _agency():
    c, _ = create_company(name="J", admin_email="j@x.com", admin_first_name="A", admin_last_name="B")
    return Agency.objects.create(company=c, name="Douala", code="DLA")


def _job(ag):
    import uuid
    return OnlineBookingJob.objects.create(
        trip_id=uuid.uuid4(), agency=ag, passenger_name="Jean", passenger_phone="670",
        payment_method="mtn_momo", payment_phone="670")


def test_poll_returns_pending_jobs_for_agency():
    ag = _agency()
    job = _job(ag)
    r = APIClient().get(reverse("sync-jobs-poll") + f"?agency_id={ag.id}", **_hdr())
    assert r.status_code == 200
    assert [j["id"] for j in r.data["jobs"]] == [str(job.id)]


def test_result_marks_job_done():
    ag = _agency()
    job = _job(ag)
    r = APIClient().post(reverse("sync-jobs-result"),
                         {"job_id": str(job.id), "status": "done",
                          "result": {"ticket_number": "TKT-1"}},
                         format="json", **_hdr())
    assert r.status_code == 200
    job.refresh_from_db()
    assert job.status == OnlineBookingJob.DONE and job.result["ticket_number"] == "TKT-1"
    # done jobs no longer polled
    r2 = APIClient().get(reverse("sync-jobs-poll") + f"?agency_id={ag.id}", **_hdr())
    assert r2.data["jobs"] == []


def test_jobs_require_token():
    ag = _agency()
    assert APIClient().get(reverse("sync-jobs-poll") + f"?agency_id={ag.id}").status_code in (401, 403)
