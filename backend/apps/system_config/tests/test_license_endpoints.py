import pytest
from datetime import date, timedelta
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.system_config.services.licensing import company_is_licensed


@pytest.mark.django_db
def test_superadmin_can_extend():
    company, _ = create_company(name="E", admin_email="e@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() - timedelta(days=1))
    assert company_is_licensed(company.id) is False       # starts expired
    su = User.objects.create_superuser(username="su", email="su@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.put(f"/api/v1/system/companies/{company.id}/license/",
              {"expires_at": (date.today() + timedelta(days=20)).isoformat()}, format="json")
    assert r.status_code == 200
    assert company_is_licensed(company.id) is True         # extended into the future


@pytest.mark.django_db
def test_put_rejects_bad_date():
    company, _ = create_company(name="BD", admin_email="bd@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    su = User.objects.create_superuser(username="subd", email="subd@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.put(f"/api/v1/system/companies/{company.id}/license/", {"expires_at": "not-a-date"}, format="json")
    assert r.status_code == 400


@pytest.mark.django_db
def test_non_superadmin_forbidden():
    company, _ = create_company(name="F", admin_email="f@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    admin = User.objects.get(email="f@x.com")
    c = APIClient(); c.force_authenticate(admin)
    r = c.put(f"/api/v1/system/companies/{company.id}/license/",
              {"expires_at": (date.today() + timedelta(days=99)).isoformat()}, format="json")
    assert r.status_code == 403


@pytest.mark.django_db
def test_company_license_get_returns_empty_when_no_row():
    company, _ = create_company(name="NR", admin_email="nr@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    company.license.delete()  # simulate a company with no row yet
    su = User.objects.create_superuser(username="sunr", email="sunr@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.get(f"/api/v1/system/companies/{company.id}/license/")
    assert r.status_code == 200
    assert r.json()["expires_at"] is None


@pytest.mark.django_db
def test_status_endpoint_reports_validity():
    company, _ = create_company(name="S", admin_email="s@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    admin = User.objects.get(email="s@x.com")
    c = APIClient(); c.force_authenticate(admin)
    r = c.get("/api/v1/system/license/")
    assert r.status_code == 200 and r.json()["valid"] is True


@pytest.mark.django_db
def test_status_endpoint_platform_superadmin_not_gated():
    su = User.objects.create_superuser(username="su2", email="su2@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.get("/api/v1/system/license/")
    assert r.status_code == 200 and r.json()["valid"] is True
