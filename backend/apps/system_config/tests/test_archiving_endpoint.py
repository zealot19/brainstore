import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.system_config.selectors.archiving import archive_window_days


def _admin_client(email):
    company, _ = create_company(name=f"Co {email}", admin_email=email,
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    c = APIClient()
    c.force_authenticate(admin)
    return c, company, admin


@pytest.mark.django_db
def test_get_returns_zero_by_default():
    c, company, _ = _admin_client("a1@x.com")
    r = c.get("/api/v1/system/archiving/")
    assert r.status_code == 200
    assert r.data["archive_window_days"] == 0


@pytest.mark.django_db
def test_put_sets_window():
    c, company, _ = _admin_client("a2@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": 90}, format="json")
    assert r.status_code == 200
    assert r.data["archive_window_days"] == 90
    assert archive_window_days(company.id) == 90


@pytest.mark.django_db
def test_put_rejects_negative():
    c, company, _ = _admin_client("a3@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": -5}, format="json")
    assert r.status_code == 400
    assert archive_window_days(company.id) == 0


@pytest.mark.django_db
def test_put_rejects_non_integer():
    c, company, _ = _admin_client("a4@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": "lots"}, format="json")
    assert r.status_code == 400
