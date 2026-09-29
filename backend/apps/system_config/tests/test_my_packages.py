"""Tests pour GET /api/v1/system/my-packages/ (app launcher post-login)."""
import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User

pytestmark = pytest.mark.django_db


def _company_admin(email="mp@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="MP Co", admin_email=email,
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def test_admin_sees_all_granted_packages():
    company, admin = _company_admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    assert r.status_code == 200
    codes = {p["code"] for p in r.json()["data"]}
    assert {"administration", "transport", "accounting"} <= codes


def test_ungranted_package_absent():
    company, admin = _company_admin("mp2@x.com")
    company.pkg_accounting = False; company.save(update_fields=["pkg_accounting"])
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    codes = {p["code"] for p in r.json()["data"]}
    assert "accounting" not in codes
    assert "transport" in codes
