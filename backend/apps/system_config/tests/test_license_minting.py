import pytest
from datetime import date, timedelta
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization as _ser
from apps.core.licensing import license_is_valid
from apps.system_config.models import Company, License


@pytest.fixture
def keyed(settings):
    priv = Ed25519PrivateKey.generate()
    settings.LICENSE_PRIVATE_KEY = priv.private_bytes(_ser.Encoding.PEM, _ser.PrivateFormat.PKCS8, _ser.NoEncryption()).decode()
    settings.LICENSE_PUBLIC_KEYS = {1: priv.public_key().public_bytes(_ser.Encoding.PEM, _ser.PublicFormat.SubjectPublicKeyInfo).decode()}
    settings.LICENSE_KEY_VERSION = 1
    return settings


@pytest.mark.django_db
def test_mint_produces_valid_token(keyed):
    from apps.system_config.services.licensing import mint_license
    c = Company.objects.create(name="M1", slug="m1")
    License.objects.create(company=c, expires_at=date.today() + timedelta(days=30))
    lic = mint_license(c)
    assert lic.token and license_is_valid(lic.token) is True


@pytest.mark.django_db
def test_set_expiry_remints(keyed):
    from apps.system_config.services.licensing import set_license_expiry
    c = Company.objects.create(name="M2", slug="m2")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    assert license_is_valid(c.license.token) is False   # expired
    set_license_expiry(c, expires_at=date.today() + timedelta(days=5))
    assert license_is_valid(c.license.token) is True     # extended


@pytest.mark.django_db
def test_suspend_status_invalidates(keyed):
    from apps.system_config.services.licensing import set_license_expiry
    c = Company.objects.create(name="M3", slug="m3")
    set_license_expiry(c, expires_at=date.today() + timedelta(days=30))
    set_license_expiry(c, expires_at=c.license.expires_at, status=License.Status.SUSPENDED)
    assert license_is_valid(c.license.token) is False


@pytest.mark.django_db
def test_reissue_backfills_all(keyed):
    Company.objects.create(name="R1", slug="r1")
    Company.objects.create(name="R2", slug="r2")
    from apps.system_config.services.licensing import reissue_all
    n = reissue_all()
    assert n >= 2
    for c in Company.objects.all():
        assert license_is_valid(c.license.token) is True
