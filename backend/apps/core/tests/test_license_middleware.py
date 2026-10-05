# backend/apps/core/tests/test_license_middleware.py
import pytest
from datetime import date, timedelta
from django.http import HttpResponse
from django.test import RequestFactory
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization as _ser
from apps.system_config.models import Company
from apps.system_config.services.licensing import set_license_expiry
import apps.core.license_middleware as mw
from apps.core.license_middleware import LicenseMiddleware


@pytest.fixture
def keyed(settings):
    priv = Ed25519PrivateKey.generate()
    settings.LICENSE_PRIVATE_KEY = priv.private_bytes(_ser.Encoding.PEM, _ser.PrivateFormat.PKCS8, _ser.NoEncryption()).decode()
    settings.LICENSE_PUBLIC_KEYS = {1: priv.public_key().public_bytes(_ser.Encoding.PEM, _ser.PublicFormat.SubjectPublicKeyInfo).decode()}
    settings.LICENSE_KEY_VERSION = 1
    return settings


def _run(path="/api/v1/users/"):
    return LicenseMiddleware(lambda r: HttpResponse("ok"))(RequestFactory().get(path))


def _tenant(monkeypatch, company_id):
    monkeypatch.setattr(mw, "get_current_tenant",
                        lambda: {"company_id": company_id} if company_id else None)


@pytest.mark.django_db
def test_locks_when_expired(keyed, monkeypatch):
    c = Company.objects.create(name="Exp", slug="exp")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    resp = _run()
    assert resp.status_code == 403
    import json
    assert json.loads(resp.content)["error"]["code"] == "LICENSE_EXPIRED"


@pytest.mark.django_db
def test_passes_when_valid(keyed, monkeypatch):
    c = Company.objects.create(name="Ok", slug="ok")
    set_license_expiry(c, expires_at=date.today() + timedelta(days=30))
    _tenant(monkeypatch, c.id)
    assert _run().status_code == 200


@pytest.mark.django_db
def test_exempt_path_passes_even_if_expired(keyed, monkeypatch):
    c = Company.objects.create(name="Exm", slug="exm")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    assert _run("/api/v1/system/license/").status_code == 200


@pytest.mark.django_db
def test_company_without_license_is_locked(keyed, monkeypatch):
    c = Company.objects.create(name="NoLic", slug="nolic")   # no License row minted
    _tenant(monkeypatch, c.id)
    assert _run().status_code == 403


@pytest.mark.django_db
def test_no_tenant_passes(keyed, monkeypatch):
    _tenant(monkeypatch, None)   # platform super admin / anonymous
    assert _run().status_code == 200


@pytest.mark.django_db
def test_inert_without_public_keys(keyed, monkeypatch, settings):
    c = Company.objects.create(name="NoKey", slug="nokey")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    _tenant(monkeypatch, c.id)
    settings.LICENSE_PUBLIC_KEYS = {}   # licensing not installed -> inert
    assert _run().status_code == 200
