import pytest
from datetime import date, timedelta
from django.http import HttpResponse
from django.test import RequestFactory
from apps.system_config.models import Company, License
from apps.system_config.services.licensing import set_license_expiry
import apps.core.license_middleware as mw
from apps.core.license_middleware import LicenseMiddleware


def _run(path="/api/v1/users/"):
    return LicenseMiddleware(lambda r: HttpResponse("ok"))(RequestFactory().get(path))


def _tenant(monkeypatch, company_id):
    monkeypatch.setattr(mw, "get_current_tenant",
                        lambda: {"company_id": company_id} if company_id else None)


@pytest.mark.django_db
def test_locks_when_expired(monkeypatch):
    c = Company.objects.create(name="Exp", slug="exp")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    resp = _run()
    assert resp.status_code == 403
    import json
    assert json.loads(resp.content)["error"]["code"] == "LICENSE_EXPIRED"


@pytest.mark.django_db
def test_passes_when_valid(monkeypatch):
    c = Company.objects.create(name="Ok", slug="ok")
    set_license_expiry(c, expires_at=date.today() + timedelta(days=30))
    _tenant(monkeypatch, c.id)
    assert _run().status_code == 200


@pytest.mark.django_db
def test_company_without_license_row_passes(monkeypatch):
    c = Company.objects.create(name="NoRow", slug="norow")   # not provisioned → allowed
    _tenant(monkeypatch, c.id)
    assert _run().status_code == 200


@pytest.mark.django_db
def test_suspended_is_locked(monkeypatch):
    c = Company.objects.create(name="Susp", slug="susp")
    set_license_expiry(c, expires_at=date.today() + timedelta(days=30), status=License.Status.SUSPENDED)
    _tenant(monkeypatch, c.id)
    assert _run().status_code == 403


@pytest.mark.django_db
def test_exempt_path_passes_even_if_expired(monkeypatch):
    c = Company.objects.create(name="Exm", slug="exm")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    assert _run("/api/v1/system/license/").status_code == 200


@pytest.mark.django_db
def test_auth_path_passes_even_if_expired(monkeypatch):
    c = Company.objects.create(name="Au", slug="au")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    assert _run("/api/v1/auth/refresh/").status_code == 200


@pytest.mark.django_db
def test_path_containing_auth_substring_is_not_exempt(monkeypatch):
    c = Company.objects.create(name="Sub", slug="sub")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    assert _run("/api/v1/users/import-auth-records/").status_code == 403


@pytest.mark.django_db
def test_no_tenant_passes(monkeypatch):
    _tenant(monkeypatch, None)   # platform super admin / anonymous
    assert _run().status_code == 200
