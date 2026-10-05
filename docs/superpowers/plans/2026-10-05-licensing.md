# Licensing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enforce a super-admin-set, Ed25519-signed, offline-verifiable license expiry per company — past expiry every user of that institution is hard-locked to a single "Licence expirée" message, while the platform super admin is never gated.

**Architecture:** The master mints a signed token from a super-admin-set `License.expires_at`; the `License` row syncs DOWN to agencies; a `LicenseMiddleware` on both roles verifies the token with a bundled public key and blocks all requests (except auth + license-status) when invalid. Enforcement trusts only the verified token (tamper-evident). Signing uses `cryptography` (Ed25519); the private key lives in master env only.

**Tech Stack:** Django 5.1 + DRF, `cryptography` (new), pytest (`../env/bin/python -m pytest <path> -q --reuse-db` from `backend/`), Angular standalone + Transloco, build `npx ng build --configuration development` from `angular/`.

**Spec:** `docs/superpowers/specs/2026-10-05-licensing-design.md`

## Global Constraints

- **I1** Master mints; both roles verify the signed token (one validity function).
- **I2** Offline-capable: agency verifies the synced token with no network; token expiry = license expiry (no leash).
- **I3** Tamper-evident: a direct DB edit of any license column is ignored — only the verified token counts.
- **I4** Fail closed per company: missing/malformed/bad-signature/revoked/expired token → locked.
- **I5** License management is `IsSuperAdmin`-only; no institution-admin surface.
- **I6** Requests with no tenant (anonymous + platform super admin, `company_id is None`) are never license-blocked.
- **I7** Hard total lockout: past expiry, every request blocked except `/api/v1/auth/*` and `/api/v1/system/license/`.
- **Lock response (exact):** HTTP 403 `{"success": false, "error": {"code": "LICENSE_EXPIRED", "message": "Licence expirée, veuillez contacter l'administrateur."}}`.
- **Validity rule:** valid iff Ed25519 signature verifies for its `key_version` AND `status == "active"` AND `today_utc <= expires_at` (valid through that day).
- **System opt-in (rollout safety, refinement of spec I4):** if `settings.LICENSE_PUBLIC_KEYS` is empty, the middleware passes through (licensing not yet installed) — avoids bricking every tenant on first deploy before keys/tokens exist. Per-company fail-closed applies once keys are configured.
- **Key hygiene:** private key from env `LICENSE_PRIVATE_KEY` on the master only, NEVER committed. Public keys shipped as a plain constant. New dependency `cryptography` in `requirements/base.txt`.
- **i18n:** every new UI string in all four locales `angular/public/i18n/{fr,en,es,pt}.json`.
- **Commits:** author `shimi`, no co-author trailer.

## Review Focus

- **Tampered token** (DB `expires_at` edited to the future) → still locked: signature covers the payload, columns are not trusted (Task 1 `test_tampered_token_invalid`).
- **Missing/malformed token** on a minted-system company → locked, fail closed (Task 1 `test_missing_and_malformed_invalid`; Task 5 `test_company_without_license_is_locked`).
- **Platform super admin never locked** (no tenant) even when a company is expired (Task 5 `test_no_tenant_passes`).
- **Agency verify with public key only** (no private key present) → verification still works; only signing needs the private key (Task 1 `test_verify_without_private_key`).
- **Date boundary**: valid through `expires_at`, expired the next day in UTC (Task 1 `test_expiry_boundary`).

---

## Task 1: Signed-token core + keys, settings, dependency, keypair command

**Files:**
- Create: `backend/apps/core/license_keys.py` (public-key constant; no Django imports)
- Create: `backend/apps/core/licensing.py` (`sign_license`, `verify_license`, `license_is_valid`)
- Create: `backend/apps/core/management/commands/generate_license_keypair.py`
- Modify: `backend/requirements/base.txt` (add `cryptography`)
- Modify: `backend/config/settings/base.py` (license settings)
- Test: `backend/apps/core/tests/test_licensing_token.py`

**Interfaces:**
- Produces:
  - `sign_license(payload: dict) -> str` — raises `RuntimeError` if no private key.
  - `verify_license(token: str) -> dict | None` — payload if signature valid, else None.
  - `license_is_valid(token: str, *, today=None) -> bool` — full validity rule.
  - settings: `LICENSE_PRIVATE_KEY: str`, `LICENSE_PUBLIC_KEYS: dict[int,str]`, `LICENSE_KEY_VERSION: int`, `LICENSE_BACKFILL_DAYS: int`.

- [ ] **Step 1: Add the dependency**

Append to `backend/requirements/base.txt`:
```
cryptography==43.0.1
```
Install: `cd backend && ../env/bin/pip install cryptography==43.0.1`

- [ ] **Step 2: Write the failing tests**

```python
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
```

- [ ] **Step 3: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_licensing_token.py -q --reuse-db`
Expected: FAIL — `ModuleNotFoundError: apps.core.licensing`.

- [ ] **Step 4: Implement the public-key constant**

```python
# backend/apps/core/license_keys.py
"""Bundled license-verification public keys, keyed by version. Safe to ship.
Private keys live only in the master env (LICENSE_PRIVATE_KEY) and are never
committed. Populate version 1 after running `generate_license_keypair`."""
PUBLIC_KEYS: dict[int, str] = {
    # 1: "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----\n",
}
```

- [ ] **Step 5: Implement the token module**

```python
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
```

- [ ] **Step 6: Add settings**

In `backend/config/settings/base.py`, near the `NODE_ROLE` block, add:
```python
from apps.core.license_keys import PUBLIC_KEYS as LICENSE_PUBLIC_KEYS   # bundled, safe
LICENSE_PRIVATE_KEY = env("LICENSE_PRIVATE_KEY", default="")            # PEM, master only
LICENSE_KEY_VERSION = env.int("LICENSE_KEY_VERSION", default=1)
LICENSE_BACKFILL_DAYS = env.int("LICENSE_BACKFILL_DAYS", default=365)
```
(`apps/core/license_keys.py` has no Django imports, so importing it in settings is safe.)

- [ ] **Step 7: Implement the keypair command**

```python
# backend/apps/core/management/commands/generate_license_keypair.py
from django.core.management.base import BaseCommand
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization


class Command(BaseCommand):
    help = "Generate an Ed25519 license keypair. Private key -> master env LICENSE_PRIVATE_KEY; public key -> apps/core/license_keys.py."

    def handle(self, *args, **opts):
        priv = Ed25519PrivateKey.generate()
        priv_pem = priv.private_bytes(serialization.Encoding.PEM,
                                      serialization.PrivateFormat.PKCS8,
                                      serialization.NoEncryption()).decode()
        pub_pem = priv.public_key().public_bytes(serialization.Encoding.PEM,
                                                 serialization.PublicFormat.SubjectPublicKeyInfo).decode()
        self.stdout.write("=== PRIVATE KEY (set as LICENSE_PRIVATE_KEY on the master; DO NOT COMMIT) ===")
        self.stdout.write(priv_pem)
        self.stdout.write("=== PUBLIC KEY (paste into apps/core/license_keys.py PUBLIC_KEYS[1]) ===")
        self.stdout.write(pub_pem)
```

- [ ] **Step 8: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_licensing_token.py -q --reuse-db`
Expected: PASS (8).

- [ ] **Step 9: Commit**

```bash
git add backend/apps/core/license_keys.py backend/apps/core/licensing.py backend/apps/core/management/commands/generate_license_keypair.py backend/apps/core/tests/test_licensing_token.py backend/requirements/base.txt backend/config/settings/base.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): Ed25519 signed-token core + keys, settings, keypair command"
```

---

## Task 2: License model + migration

**Files:**
- Create: `backend/apps/system_config/models/license.py`
- Modify: `backend/apps/system_config/models/__init__.py` (export `License`)
- Create: migration `backend/apps/system_config/migrations/XXXX_license.py` (via makemigrations)
- Test: `backend/apps/system_config/tests/test_license_model.py`

**Interfaces:**
- Produces: `system_config.License` with fields `company` (OneToOne), `expires_at` (DateField, null), `status` (CharField default `active`), `token` (TextField blank), `issued_at` (DateTimeField null), `key_version` (SmallIntegerField default 1).

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/system_config/tests/test_license_model.py
import pytest
from datetime import date
from apps.system_config.models import Company, License


@pytest.mark.django_db
def test_license_defaults():
    c = Company.objects.create(name="LicCo", slug="licco")
    lic = License.objects.create(company=c, expires_at=date(2030, 1, 1))
    assert lic.status == "active"
    assert lic.key_version == 1
    assert lic.token == ""
    assert lic.company_id == c.id
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_model.py -q --reuse-db`
Expected: FAIL — `ImportError: cannot import name 'License'`.

- [ ] **Step 3: Implement the model**

```python
# backend/apps/system_config/models/license.py
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class License(BaseModel):
    """Licence d'utilisation signée d'une institution. L'autorité d'enforcement
    est le jeton signé (`token`) ; les autres colonnes sont des miroirs."""

    class Status(models.TextChoices):
        ACTIVE    = "active",    _("Active")
        SUSPENDED = "suspended", _("Suspendue")
        CANCELLED = "cancelled", _("Résiliée")

    company     = models.OneToOneField("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="license")
    expires_at  = models.DateField(_("expiration"), null=True, blank=True)
    status      = models.CharField(_("statut"), max_length=20,
                                   choices=Status.choices, default=Status.ACTIVE)
    token       = models.TextField(_("jeton signé"), blank=True, default="")
    issued_at   = models.DateTimeField(_("émis le"), null=True, blank=True)
    key_version = models.SmallIntegerField(_("version de clé"), default=1)

    class Meta(BaseModel.Meta):
        verbose_name        = _("licence")
        verbose_name_plural = _("licences")

    def __str__(self):
        return f"{self.company} — {self.status} (exp {self.expires_at})"
```

Add to `backend/apps/system_config/models/__init__.py`: import and export `License` (follow the existing `from .company import Company` + `__all__` pattern).

- [ ] **Step 4: Make the migration**

Run: `cd backend && ../env/bin/python manage.py makemigrations system_config`
Expected: creates one migration adding `License`.

- [ ] **Step 5: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_model.py -q --reuse-db`
Expected: PASS (1). Then `../env/bin/python manage.py makemigrations --check --dry-run` → "No changes detected".

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config/models/ backend/apps/system_config/migrations/ backend/apps/system_config/tests/test_license_model.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): License model + migration"
```

---

## Task 3: Minting service, lifecycle wiring, and reissue command

**Files:**
- Create: `backend/apps/system_config/services/licensing.py`
- Modify: `backend/apps/system_config/services/company_services.py` (`create_company`, `_bootstrap_company`, `change_plan`/suspend/activate/cancel helpers if present)
- Modify: `backend/apps/system_config/views.py` (CompanySuspend/Activate/Cancel views re-mint)
- Create: `backend/apps/system_config/management/commands/reissue_licenses.py`
- Test: `backend/apps/system_config/tests/test_license_minting.py`

**Interfaces:**
- Consumes: `apps.core.licensing.sign_license`, `license_is_valid` (Task 1); `system_config.License` (Task 2).
- Produces:
  - `mint_license(company) -> License` — builds payload from the company's `License` row (`expires_at`,`status`), signs, stores `token`/`issued_at`/`key_version`.
  - `set_license_expiry(company, *, expires_at, status=None, actor=None) -> License` — upsert expiry/status then `mint_license`.
  - `reissue_all() -> int` — ensure every company has a License (default `expires_at = today + LICENSE_BACKFILL_DAYS`) and re-mint; returns count.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/system_config/tests/test_license_minting.py
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
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_minting.py -q --reuse-db`
Expected: FAIL — `ModuleNotFoundError: apps.system_config.services.licensing`.

- [ ] **Step 3: Implement the service**

```python
# backend/apps/system_config/services/licensing.py
from datetime import date, timedelta
from django.conf import settings
from django.utils import timezone
from apps.core.licensing import sign_license
from apps.system_config.models import License


def mint_license(company) -> License:
    """(Re)sign the company's license token from its current expires_at/status."""
    lic = company.license
    payload = {
        "v": 1,
        "company_id": str(company.id),
        "status": lic.status,
        "expires_at": lic.expires_at.isoformat() if lic.expires_at else "",
        "issued_at": timezone.now().isoformat(),
        "key_version": settings.LICENSE_KEY_VERSION,
    }
    lic.token = sign_license(payload)
    lic.issued_at = timezone.now()
    lic.key_version = settings.LICENSE_KEY_VERSION
    lic.save(update_fields=["token", "issued_at", "key_version", "updated_at"])
    return lic


def set_license_expiry(company, *, expires_at, status=None, actor=None) -> License:
    lic, _ = License.objects.get_or_create(company=company)
    lic.expires_at = expires_at
    if status is not None:
        lic.status = status
    lic.updated_by = actor
    lic.save(update_fields=["expires_at", "status", "updated_by", "updated_at"])
    return mint_license(company)


def reissue_all() -> int:
    """Ensure every company has a minted License; backfill missing expiry with the
    configured default. Idempotent. Returns the number processed."""
    from apps.system_config.models import Company
    default_exp = date.today() + timedelta(days=settings.LICENSE_BACKFILL_DAYS)
    count = 0
    for company in Company.objects.all():
        lic, _ = License.objects.get_or_create(company=company, defaults={"expires_at": default_exp})
        if lic.expires_at is None:
            lic.expires_at = default_exp
            lic.save(update_fields=["expires_at", "updated_at"])
        mint_license(company)
        count += 1
    return count
```

- [ ] **Step 4: Wire lifecycle hooks**

In `backend/apps/system_config/services/company_services.py`:
- Add a keyword `license_expires_at=None` to `create_company(...)`; after `_bootstrap_company(...)` runs, call `set_license_expiry(company, expires_at=license_expires_at or (date.today()+timedelta(days=settings.LICENSE_BACKFILL_DAYS)), actor=created_by)` (import `set_license_expiry`, `date`, `timedelta`, `settings` at top). This guarantees a new company is minted (I4).

In `backend/apps/system_config/views.py` — `CompanySuspendView.post`, `CompanyActivateView.post`, `CompanyCancelView.post`: after the existing status change, re-mint by calling `set_license_expiry(company, expires_at=company.license.expires_at, status=<License.Status.SUSPENDED|ACTIVE|CANCELLED>, actor=request.user)` (guard: create the License first if absent via `get_or_create`). Import `set_license_expiry` and `License`.

- [ ] **Step 5: Implement the reissue command**

```python
# backend/apps/system_config/management/commands/reissue_licenses.py
from django.core.management.base import BaseCommand
from apps.system_config.services.licensing import reissue_all


class Command(BaseCommand):
    help = "Backfill + re-sign license tokens for all companies (idempotent). Run after installing the signing key."

    def handle(self, *args, **opts):
        n = reissue_all()
        self.stdout.write(self.style.SUCCESS(f"Reissued licenses for {n} companies."))
```

- [ ] **Step 6: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_minting.py -q --reuse-db`
Expected: PASS (4).

- [ ] **Step 7: Commit**

```bash
git add backend/apps/system_config/services/ backend/apps/system_config/views.py backend/apps/system_config/management/commands/reissue_licenses.py backend/apps/system_config/tests/test_license_minting.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): mint service, lifecycle wiring, reissue command"
```

---

## Task 4: Register License for DOWN sync

**Files:**
- Modify: `backend/apps/sync/registrations.py` (add `system_config.License` to `_DOWN`)
- Test: `backend/apps/sync/tests/test_license_sync_registration.py`

**Interfaces:**
- Consumes: `apps.sync.registry.{spec_for, DOWN}`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/sync/tests/test_license_sync_registration.py
from apps.sync import registry
import apps.sync.registrations  # noqa: F401  (ensures registrations are loaded)


def test_license_registered_down():
    spec = registry.spec_for("system_config.license")
    assert spec is not None
    assert spec.direction == registry.DOWN
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/sync/tests/test_license_sync_registration.py -q --reuse-db`
Expected: FAIL — `spec is None`.

- [ ] **Step 3: Implement**

In `backend/apps/sync/registrations.py`, add to the `_DOWN` list (near `system_config.Company`):
```python
    "system_config.License",
```

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/sync/tests/test_license_sync_registration.py -q --reuse-db`
Expected: PASS (1).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/sync/registrations.py backend/apps/sync/tests/test_license_sync_registration.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): sync License DOWN to agencies"
```

---

## Task 5: LicenseMiddleware (enforcement)

**Files:**
- Create: `backend/apps/core/license_middleware.py`
- Modify: `backend/config/settings/base.py` (register middleware after TenantMiddleware, before EntitlementMiddleware)
- Test: `backend/apps/core/tests/test_license_middleware.py`

**Interfaces:**
- Consumes: `apps.core.licensing.license_is_valid`; `apps.core.middleware.get_current_tenant`; `system_config.License`.

**Test approach:** `LicenseMiddleware` reads the company from `get_current_tenant()` (populated from the JWT by `TenantMiddleware`), which is NOT set under DRF's `force_authenticate`. So these are **direct unit tests** of the middleware using `RequestFactory` + a monkeypatched `get_current_tenant` — the correct, non-vacuous way to exercise it. (Full HTTP + JWT paths are covered indirectly by Task 6.)

- [ ] **Step 1: Write the failing tests**

```python
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
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_license_middleware.py -q --reuse-db`
Expected: FAIL — `ModuleNotFoundError: apps.core.license_middleware`.

- [ ] **Step 3: Implement the middleware**

```python
# backend/apps/core/license_middleware.py
from django.conf import settings
from django.http import JsonResponse
from apps.core.middleware import get_current_tenant

_LOCK = {"success": False,
         "error": {"code": "LICENSE_EXPIRED",
                   "message": "Licence expirée, veuillez contacter l'administrateur."}}


def _is_exempt(path: str) -> bool:
    return "/api/v1/auth/" in path or path.rstrip("/").endswith("/api/v1/system/license")


class LicenseMiddleware:
    """Hard-locks an institution whose signed license is invalid/expired (I7).
    Runs after TenantMiddleware (company_id resolved) and before EntitlementMiddleware.
    Inert when no public key is configured (licensing not yet installed)."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if getattr(settings, "LICENSE_PUBLIC_KEYS", None):
            tenant = get_current_tenant()
            company_id = tenant["company_id"] if tenant else None
            if company_id and not _is_exempt(request.path):
                from apps.core.licensing import license_is_valid
                from apps.system_config.models import License
                lic = License.objects.filter(company_id=company_id).first()
                if not (lic and license_is_valid(lic.token)):
                    return JsonResponse(_LOCK, status=403)
        return self.get_response(request)
```

In `backend/config/settings/base.py` `MIDDLEWARE`, insert right after `TenantMiddleware` and before `EntitlementMiddleware`:
```python
    "apps.core.license_middleware.LicenseMiddleware",       # licence (hard lock)
```

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_license_middleware.py -q --reuse-db`
Expected: PASS (6). (All self-contained — no HTTP/JWT; the exempt-path test checks the path string, not a live route.)

- [ ] **Step 5: Commit**

```bash
git add backend/apps/core/license_middleware.py backend/config/settings/base.py backend/apps/core/tests/test_license_middleware.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): LicenseMiddleware hard-lock on invalid license"
```

---

## Task 6: License API endpoints + company-create field

**Files:**
- Modify: `backend/apps/system_config/views.py` (`LicenseStatusView`, `CompanyLicenseView`)
- Modify: `backend/apps/system_config/urls.py` (routes)
- Modify: `backend/apps/system_config/serializers.py` (`CompanyCreateSerializer` gains `license_expires_at`)
- Modify: `backend/apps/system_config/views.py` (company-create view passes `license_expires_at` into `create_company`)
- Test: `backend/apps/system_config/tests/test_license_endpoints.py`

**Interfaces:**
- Consumes: `set_license_expiry` (Task 3); `license_is_valid` (Task 1); `IsSuperAdmin`, `IsAuthenticated`.
- Produces:
  - `GET /api/v1/system/license/` → `{valid, status, expires_at, message}` (current tenant; exempt from lock).
  - `GET/PUT /api/v1/system/companies/<uuid:pk>/license/` → IsSuperAdmin; PUT body `{expires_at, status?}` re-mints.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/system_config/tests/test_license_endpoints.py
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
    su = User.objects.create_superuser(email="su@x.com", password="x", first_name="S", last_name="U")
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
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_endpoints.py -q --reuse-db`
Expected: FAIL — `create_company() got an unexpected keyword 'license_expires_at'` / routes 404.

- [ ] **Step 3: Implement the views**

Add to `backend/apps/system_config/views.py`:
```python
class LicenseStatusView(APIView):
    """GET current tenant's license status (exempt from the lock)."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        from apps.core.licensing import license_is_valid
        from .models import License
        company_id = getattr(request.user, "company_id", None)
        lic = License.objects.filter(company_id=company_id).first() if company_id else None
        valid = bool(lic and license_is_valid(lic.token))
        return Response({
            "valid": valid,
            "status": lic.status if lic else None,
            "expires_at": lic.expires_at.isoformat() if lic and lic.expires_at else None,
            "message": "" if valid else "Licence expirée, veuillez contacter l'administrateur.",
        })


class CompanyLicenseView(APIView):
    """Super-admin: read / set a company's license expiry (re-mints)."""
    permission_classes = [IsAuthenticated, IsSuperAdmin]

    def get(self, request, pk):
        from .models import License
        lic = License.objects.filter(company_id=pk).first()
        if not lic:
            return Response({"detail": "Licence introuvable."}, status=status.HTTP_404_NOT_FOUND)
        return Response({"status": lic.status,
                         "expires_at": lic.expires_at.isoformat() if lic.expires_at else None})

    def put(self, request, pk):
        from datetime import date as _date
        from .models import Company, License
        from .services.licensing import set_license_expiry
        company = Company.objects.filter(id=pk).first()
        if not company:
            return Response({"detail": "Institution introuvable."}, status=status.HTTP_404_NOT_FOUND)
        raw = request.data.get("expires_at")
        try:
            exp = _date.fromisoformat(raw)
        except (TypeError, ValueError):
            return Response({"detail": "expires_at doit être une date (YYYY-MM-DD)."},
                            status=status.HTTP_400_BAD_REQUEST)
        new_status = request.data.get("status") or License.Status.ACTIVE
        lic = set_license_expiry(company, expires_at=exp, status=new_status, actor=request.user)
        return Response({"status": lic.status,
                         "expires_at": lic.expires_at.isoformat() if lic.expires_at else None})
```

Add routes in `backend/apps/system_config/urls.py`:
```python
    path("license/", views.LicenseStatusView.as_view(), name="license-status"),
    path("companies/<uuid:pk>/license/", views.CompanyLicenseView.as_view(), name="company-license"),
```

In `backend/apps/system_config/serializers.py`, add to `CompanyCreateSerializer` a write-only required field:
```python
    license_expires_at = serializers.DateField(write_only=True)
```
(add `"license_expires_at"` to its `fields`).

In the company-create view (the `post` that calls `create_company`), pop `license_expires_at` from validated data and pass it: `create_company(..., license_expires_at=data["license_expires_at"])`.

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_license_endpoints.py -q --reuse-db`
Expected: PASS (3).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/system_config/views.py backend/apps/system_config/urls.py backend/apps/system_config/serializers.py backend/apps/system_config/tests/test_license_endpoints.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): status + super-admin license endpoints, create field"
```

---

## Task 7: Frontend license interceptor + full-screen lock

**Files:**
- Create: `angular/src/_api/interceptors/license.interceptor.ts`
- Create: `angular/src/_api/services/system/license.service.ts`
- Create: `angular/src/app/shared/license-lock/license-lock.component.ts` (+ inline template)
- Modify: `angular/src/app/app.config.ts` (register interceptor)
- Modify: `angular/src/app/app.component.{ts,html}` (render the lock overlay globally)
- Modify: `angular/src/_api/config/api.config.ts` (add `SYSTEM.license`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (lock strings)

**Interfaces:**
- Consumes: `GET /api/v1/system/license/`. The global `apiUnwrapInterceptor` unwraps `{success,data}`; the lock error is `{success:false,error:{code}}` — detect it in the interceptor BEFORE unwrap confuses it (the interceptor sees the raw `HttpErrorResponse` with status 403).

- [ ] **Step 1: Add the endpoint + a shared lock state**

In `angular/src/_api/config/api.config.ts`, add to `SYSTEM`:
```typescript
  license:               `${API_BASE}/system/license/`,
```

- [ ] **Step 2: Create the license service + lock signal**

```typescript
// angular/src/_api/services/system/license.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SYSTEM } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class LicenseService {
  private http = inject(HttpClient);
  readonly locked = signal(false);
  readonly message = signal('Licence expirée, veuillez contacter l\'administrateur.');
  lock(msg?: string) { if (msg) this.message.set(msg); this.locked.set(true); }
  check() {
    this.http.get<{ valid: boolean; message: string }>(SYSTEM.license)
      .subscribe({ next: r => { if (!r.valid) this.lock(r.message); } });
  }
}
```

- [ ] **Step 3: Create the interceptor**

```typescript
// angular/src/_api/interceptors/license.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LicenseService } from '../services/system/license.service';

export const licenseInterceptor: HttpInterceptorFn = (req, next) => {
  const lic = inject(LicenseService);
  return next(req).pipe(catchError((err) => {
    if (err?.status === 403 && err?.error?.error?.code === 'LICENSE_EXPIRED') {
      lic.lock(err.error.error.message);
    }
    return throwError(() => err);
  }));
};
```

Register it in `angular/src/app/app.config.ts` in the `withInterceptors([...])` array (after `errorInterceptor`, before `apiUnwrapInterceptor`):
```typescript
      jwtInterceptor, errorInterceptor, licenseInterceptor, apiUnwrapInterceptor, acceptLanguageInterceptor,
```
(add the import `import { licenseInterceptor } from '../_api/interceptors/license.interceptor';`).

- [ ] **Step 4: Create the full-screen lock component**

```typescript
// angular/src/app/shared/license-lock/license-lock.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { LicenseService } from '../../../_api/services/system/license.service';

@Component({
  selector: 'app-license-lock',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  template: `
    @if (lic.locked()) {
      <div class="license-lock-overlay">
        <div class="text-center p-4">
          <i class="ti ti-lock" style="font-size:3rem"></i>
          <h3 class="mt-3">{{ 'license.expired_title' | transloco }}</h3>
          <p class="text-muted">{{ lic.message() }}</p>
        </div>
      </div>
    }
  `,
  styles: [`
    .license-lock-overlay {
      position: fixed; inset: 0; z-index: 20000;
      background: #fff; display: flex; align-items: center; justify-content: center;
    }
  `],
})
export class LicenseLockComponent {
  lic = inject(LicenseService);
}
```

- [ ] **Step 5: Mount the lock in the app shell + check after login**

In `angular/src/app/app.component.ts`: import `LicenseLockComponent` (add to `imports`) and inject `LicenseService`; in `ngOnInit`, if a token exists (user authenticated), call `this.licenseService.check()`.
In `angular/src/app/app.component.html`: add `<app-license-lock></app-license-lock>` at the end (renders nothing unless locked).

- [ ] **Step 6: Add i18n**

Add `license.expired_title` to all four locales: fr "Licence expirée", en "License expired", es "Licencia expirada", pt "Licença expirada".

- [ ] **Step 7: Build**

Run: `cd angular && npx ng build --configuration development`
Expected: build succeeds; `dist/angular` emitted. (No Angular test harness in this repo; build is the gate.)

- [ ] **Step 8: Commit**

```bash
git add angular/src/_api/interceptors/license.interceptor.ts angular/src/_api/services/system/license.service.ts angular/src/app/shared/license-lock/ angular/src/app/app.config.ts angular/src/app/app.component.ts angular/src/app/app.component.html angular/src/_api/config/api.config.ts angular/public/i18n/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): frontend lock interceptor + full-screen lock"
```

---

## Task 8: Super-admin license management UI

**Files:**
- Modify: `angular/src/_api/services/system/company.service.ts` (add `getLicense`, `setLicense`)
- Modify: the super-admin companies component `angular/src/_api/pages/system/companies/companies.component.{ts,html}` (expiry date field in create form + a per-company "Licence" action/modal to extend/reduce)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (management strings)

**Interfaces:**
- Consumes: `GET/PUT /api/v1/system/companies/<id>/license/` (Task 6); `SYSTEM.companies`.

- [ ] **Step 1: Add service methods**

In `angular/src/_api/services/system/company.service.ts` add:
```typescript
  getLicense(id: string) {
    return this.http.get<{ status: string; expires_at: string | null }>(`${SYSTEM.companies}${id}/license/`);
  }
  setLicense(id: string, expires_at: string, status?: string) {
    return this.http.put<{ status: string; expires_at: string | null }>(
      `${SYSTEM.companies}${id}/license/`, { expires_at, status });
  }
```
(ensure `SYSTEM` is imported in this service.)

- [ ] **Step 2: Add the create-form expiry field**

In the companies create form (`companies.component.html` create modal), add a required date input bound to a `license_expires_at` form control; include it in the create payload the component sends to `create_company`'s endpoint. Add the control to the component's reactive form group with `Validators.required`.

- [ ] **Step 3: Add the per-company license action**

In `companies.component.ts`, add:
```typescript
licCompanyId: string | null = null; licDate = ''; licSaving = false; licErr = '';
openLicense(c: any) { this.licCompanyId = c.id; this.licErr = '';
  this.svc.getLicense(c.id).subscribe(r => this.licDate = r.expires_at ?? ''); }
saveLicense() {
  if (!this.licCompanyId || !this.licDate) return;
  this.licSaving = true; this.licErr = '';
  this.svc.setLicense(this.licCompanyId, this.licDate).subscribe({
    next: () => { this.licSaving = false; this.licCompanyId = null; this.reload?.(); },
    error: e => { this.licSaving = false; this.licErr = e?.error?.detail ?? 'Erreur'; } });
}
```
In `companies.component.html`, add a "Licence" button per company row that calls `openLicense(c)`, and a small modal/panel (shown when `licCompanyId`) with a date input bound to `licDate`, a save button calling `saveLicense()`, and the `licErr` message. Use existing modal markup patterns in the file.

- [ ] **Step 4: Add i18n**

Add `license.manage_title` ("Gérer la licence" / "Manage license" / "Gestionar licencia" / "Gerir licença") and `license.expires_at_label` ("Date d'expiration" / "Expiry date" / "Fecha de expiración" / "Data de expiração") to all four locales.

- [ ] **Step 5: Build**

Run: `cd angular && npx ng build --configuration development`
Expected: build succeeds; `dist/angular` emitted.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/services/system/company.service.ts angular/src/_api/pages/system/companies/ angular/public/i18n/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(licensing): super-admin license management UI"
```

---

## Final verification (after all tasks)

```bash
cd backend && ../env/bin/python -m pytest \
  apps/core/tests/test_licensing_token.py \
  apps/system_config/tests/test_license_model.py \
  apps/system_config/tests/test_license_minting.py \
  apps/sync/tests/test_license_sync_registration.py \
  apps/core/tests/test_license_middleware.py \
  apps/system_config/tests/test_license_endpoints.py -q --reuse-db
```
Expected: all pass. Then `../env/bin/python manage.py makemigrations --check --dry-run` → only the Task 2 License migration exists (no drift). Then `cd angular && npx ng build --configuration development` → success.

**Deploy prerequisite (document in the PR):** run `generate_license_keypair`, set `LICENSE_PRIVATE_KEY` on the master env, paste the public key into `apps/core/license_keys.py` `PUBLIC_KEYS[1]`, deploy/migrate, then run `reissue_licenses` to backfill + mint existing companies. Licensing stays inert until `PUBLIC_KEYS` is populated.
