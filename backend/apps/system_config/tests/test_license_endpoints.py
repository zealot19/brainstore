import pytest
from datetime import date, timedelta
from rest_framework.test import APIClient
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization as _ser
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.core.licensing import license_is_valid


@pytest.fixture
def keyed(settings):
    priv = Ed25519PrivateKey.generate()
    settings.LICENSE_PRIVATE_KEY = priv.private_bytes(_ser.Encoding.PEM, _ser.PrivateFormat.PKCS8, _ser.NoEncryption()).decode()
    settings.LICENSE_PUBLIC_KEYS = {1: priv.public_key().public_bytes(_ser.Encoding.PEM, _ser.PublicFormat.SubjectPublicKeyInfo).decode()}
    settings.LICENSE_KEY_VERSION = 1
    return settings


@pytest.mark.django_db
def test_superadmin_can_extend(keyed):
    company, _ = create_company(name="E", admin_email="e@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() - timedelta(days=1))
    su = User.objects.create_superuser(username="su", email="su@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.put(f"/api/v1/system/companies/{company.id}/license/",
              {"expires_at": (date.today() + timedelta(days=20)).isoformat()}, format="json")
    assert r.status_code == 200
    company.refresh_from_db()
    assert license_is_valid(company.license.token) is True


@pytest.mark.django_db
def test_non_superadmin_forbidden(keyed):
    company, _ = create_company(name="F", admin_email="f@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    admin = User.objects.get(email="f@x.com")
    c = APIClient(); c.force_authenticate(admin)
    r = c.put(f"/api/v1/system/companies/{company.id}/license/",
              {"expires_at": (date.today() + timedelta(days=99)).isoformat()}, format="json")
    assert r.status_code == 403


@pytest.mark.django_db
def test_status_endpoint_reports_validity(keyed):
    company, _ = create_company(name="S", admin_email="s@x.com", admin_first_name="A", admin_last_name="B",
                                license_expires_at=date.today() + timedelta(days=5))
    admin = User.objects.get(email="s@x.com")
    c = APIClient(); c.force_authenticate(admin)
    r = c.get("/api/v1/system/license/")
    assert r.status_code == 200 and r.json()["valid"] is True


@pytest.mark.django_db
def test_status_endpoint_platform_superadmin_not_gated(keyed):
    su = User.objects.create_superuser(username="su2", email="su2@x.com", password="x", first_name="S", last_name="U")
    c = APIClient(); c.force_authenticate(su)
    r = c.get("/api/v1/system/license/")
    assert r.status_code == 200 and r.json()["valid"] is True
