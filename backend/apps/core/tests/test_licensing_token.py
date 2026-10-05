# backend/apps/core/tests/test_licensing_token.py
import pytest
from datetime import date, timedelta
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization as _ser
from apps.core.licensing import sign_license, verify_license, license_is_valid


def _keypair():
    priv = Ed25519PrivateKey.generate()
    priv_pem = priv.private_bytes(_ser.Encoding.PEM, _ser.PrivateFormat.PKCS8,
                                  _ser.NoEncryption()).decode()
    pub_pem = priv.public_key().public_bytes(_ser.Encoding.PEM,
                                             _ser.PublicFormat.SubjectPublicKeyInfo).decode()
    return priv_pem, pub_pem


@pytest.fixture
def keyed(settings):
    priv_pem, pub_pem = _keypair()
    settings.LICENSE_PRIVATE_KEY = priv_pem
    settings.LICENSE_PUBLIC_KEYS = {1: pub_pem}
    settings.LICENSE_KEY_VERSION = 1
    return settings


def _payload(exp):
    return {"v": 1, "company_id": "c1", "status": "active",
            "expires_at": exp.isoformat(), "issued_at": "2026-01-01T00:00:00+00:00",
            "key_version": 1}


def test_sign_verify_roundtrip(keyed):
    tok = sign_license(_payload(date(2030, 1, 1)))
    assert verify_license(tok)["company_id"] == "c1"


def test_valid_active_future(keyed):
    assert license_is_valid(sign_license(_payload(date.today() + timedelta(days=10)))) is True


def test_expired_invalid(keyed):
    assert license_is_valid(sign_license(_payload(date.today() - timedelta(days=1)))) is False


def test_expiry_boundary(keyed):
    today = date.today()
    assert license_is_valid(sign_license(_payload(today)), today=today) is True
    assert license_is_valid(sign_license(_payload(today)), today=today + timedelta(days=1)) is False


def test_suspended_status_invalid(keyed):
    p = _payload(date.today() + timedelta(days=10)); p["status"] = "suspended"
    assert license_is_valid(sign_license(p)) is False


def test_tampered_token_invalid(keyed):
    tok = sign_license(_payload(date(2030, 1, 1)))
    seg, sig = tok.split(".")
    import base64, json
    payload = json.loads(base64.urlsafe_b64decode(seg + "=="))
    payload["expires_at"] = "2099-01-01"
    bad_seg = base64.urlsafe_b64encode(json.dumps(payload, separators=(",", ":"), sort_keys=True).encode()).rstrip(b"=").decode()
    assert verify_license(f"{bad_seg}.{sig}") is None


def test_missing_and_malformed_invalid(keyed):
    assert verify_license("") is None
    assert verify_license("not-a-token") is None
    assert license_is_valid("garbage") is False


def test_verify_without_private_key(keyed):
    tok = sign_license(_payload(date(2030, 1, 1)))
    keyed.LICENSE_PRIVATE_KEY = ""   # agency has no signing key
    assert license_is_valid(tok) is True  # verification uses the public key only
