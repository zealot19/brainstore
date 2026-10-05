# backend/apps/core/licensing.py
import base64
import json
from datetime import date, datetime, timezone as _tz
from django.conf import settings
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey  # noqa: F401
from cryptography.hazmat.primitives import serialization


def _b64e(b: bytes) -> str:
    return base64.urlsafe_b64encode(b).rstrip(b"=").decode()


def _b64d(s: str) -> bytes:
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))


def sign_license(payload: dict) -> str:
    key_pem = getattr(settings, "LICENSE_PRIVATE_KEY", "")
    if not key_pem:
        raise RuntimeError("LICENSE_PRIVATE_KEY not configured (master only)")
    priv = serialization.load_pem_private_key(key_pem.encode(), password=None)
    seg = _b64e(json.dumps(payload, separators=(",", ":"), sort_keys=True).encode())
    sig = priv.sign(seg.encode())
    return f"{seg}.{_b64e(sig)}"


def verify_license(token: str) -> dict | None:
    """Return the payload dict iff the signature verifies, else None (fail closed)."""
    try:
        seg, sig_b64 = token.split(".")
        payload = json.loads(_b64d(seg))
        pub_pem = (getattr(settings, "LICENSE_PUBLIC_KEYS", {}) or {}).get(payload.get("key_version"))
        if not pub_pem:
            return None
        serialization.load_pem_public_key(pub_pem.encode()).verify(_b64d(sig_b64), seg.encode())
        return payload
    except Exception:
        return None


def license_is_valid(token: str, *, today=None) -> bool:
    payload = verify_license(token)
    if not payload or payload.get("status") != "active":
        return False
    try:
        exp = date.fromisoformat(payload["expires_at"])
    except (KeyError, ValueError, TypeError):
        return False
    today = today or datetime.now(_tz.utc).date()
    return today <= exp
