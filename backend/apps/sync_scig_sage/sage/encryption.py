"""
Password encryption for SageConnection using Fernet symmetric encryption.
Key is derived from Django's SECRET_KEY so no extra secret to manage.

Falls back gracefully if 'cryptography' is not installed — stores plaintext
with a warning (acceptable for dev, not for production).
"""
import base64
import hashlib
import logging

from django.conf import settings

logger = logging.getLogger(__name__)

try:
    from cryptography.fernet import Fernet
    _CRYPTO_AVAILABLE = True
except ImportError:
    _CRYPTO_AVAILABLE = False
    logger.warning(
        "cryptography package not installed — Sage passwords stored as plaintext. "
        "Run: pip install cryptography"
    )


def _get_fernet() -> "Fernet":
    """Derive a stable 32-byte Fernet key from SECRET_KEY."""
    raw = settings.SECRET_KEY.encode()
    digest = hashlib.sha256(raw).digest()          # 32 bytes
    key = base64.urlsafe_b64encode(digest)         # Fernet requires urlsafe base64
    return Fernet(key)


def encrypt_password(plaintext: str) -> str:
    """Encrypt a password for storage. Returns a base64 token string."""
    if not plaintext:
        return ""
    if not _CRYPTO_AVAILABLE:
        return plaintext  # dev fallback
    token = _get_fernet().encrypt(plaintext.encode())
    return token.decode()


def decrypt_password(token: str) -> str:
    """Decrypt a stored password token back to plaintext."""
    if not token:
        return ""
    if not _CRYPTO_AVAILABLE:
        return token  # dev fallback
    try:
        return _get_fernet().decrypt(token.encode()).decode()
    except Exception:
        logger.error("Failed to decrypt Sage password — token may be corrupted or key changed.")
        return ""
