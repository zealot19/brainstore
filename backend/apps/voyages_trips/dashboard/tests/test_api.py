import datetime as dt
import pytest
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def _admin(email="api@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="ApiCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return User.objects.get(email=email)


def test_trips_endpoint_defaults_today():
    admin = _admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/dashboard/trips/")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert "trips" in body and "date_from" in body


def test_series_endpoint_shape():
    admin = _admin("api2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/dashboard/series/?year=2026&metric=tickets")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert body["metric"] == "tickets"
    assert isinstance(body["data"], list) and len(body["data"]) == 12
