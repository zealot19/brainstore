# Licensing — Design Spec

**Date:** 2026-10-05
**Status:** Approved for planning
**Author:** shimi (brainstormed with Claude)

## 1. Purpose & intent

BrainStore (the vendor) must enforce a **time-bound right to use** the ERP against
each client institution. Today the `Plan`/`Subscription`/`Company.status`
scaffolding exists but is **unenforced**: an expired subscription keeps working.
This feature makes licensing real: a **super admin** sets a license **expiry
date** per company; when that date passes, the institution is **hard-locked** —
every logged-in user sees only *"Licence expirée, veuillez contacter
l'administrateur"* and nothing else works until the super admin extends it.

Enforcement must work in the project's **hub-and-spoke** deployment: an online
**master** and **agency** instances that may run **offline**. The master is the
source of truth and signs licenses; agencies verify them locally, offline.

Success looks like: the super admin sets/extends/reduces a license expiry date
(at company creation and anytime after); the signed license propagates to
agencies through the existing sync backbone; past expiry, both master and agency
block the whole institution with the lock message; the platform super admin is
never locked out and can always extend the license.

### What this is NOT
- Not plan-limit enforcement (max_users / max_agencies / storage stay
  informational). Out of scope.
- Not module/package gating — that already exists (`EntitlementMiddleware`) and
  is unchanged.
- Not a graduated warn→grace→read-only lifecycle. Expiry is a hard, total
  lockout.
- Not billing/payment. The `Subscription` model stays as commercial metadata and
  is **not** the enforcement source of truth.
- Not an offline "leash": the signed token's expiry equals the license expiry;
  there is no shorter revalidation window.

## 2. Core invariants

- **I1 — Master mints, everyone verifies.** Only the master issues (signs)
  licenses. Both master and agency enforce by **verifying the signed token**
  with the bundled public key — one uniform code path.
- **I2 — Offline-capable.** An agency enforces from its synced-down token with
  no network call. Token expiry = license expiry (no leash).
- **I3 — Tamper-evident.** A direct DB edit of any license field is useless: it
  invalidates the Ed25519 signature → treated as invalid → lockout.
- **I4 — Fail closed.** Missing, malformed, bad-signature, revoked, or expired
  token → locked. Valid is the only pass.
- **I5 — Super admin only.** License management (set/extend/reduce expiry) is
  gated to the platform super admin. An institution admin can never manage its
  own license and is locked out with everyone else.
- **I6 — Super admin never gated.** Requests with no tenant (anonymous, and the
  platform super admin whose `company_id` is `None`) are never license-blocked,
  so the master is always reachable to extend a license.
- **I7 — Hard, total lockout.** Past expiry, every request for that company is
  blocked except the auth and license-status endpoints; the user sees only the
  lock message.

## 3. Data model

A new **`License`** model in `system_config`, one row per company:

- `company` — `OneToOneField(Company)`.
- `expires_at` — `DateField`, **super-admin-set**; the license is valid **through
  the end of this day** (expired when `today > expires_at`, compared in UTC).
- `status` — `CharField`: `active` | `suspended` | `cancelled` (super-admin
  controlled; mirrors Company suspension). Only `active` is valid.
- `token` — `TextField`: the signed license string (**authoritative** for
  enforcement).
- `issued_at` — `DateTimeField`: when the token was minted.
- `key_version` — `SmallIntegerField`: which signing key produced the token
  (enables rotation).

`expires_at`/`status` are also encoded **inside** the signed token; the columns
are denormalized mirrors for querying/admin display and are **not trusted** for
enforcement (only the verified token is).

## 4. Token format & signing

- **Algorithm:** Ed25519 (via the `cryptography` package).
- **Payload (JSON):** `{ "v": 1, "company_id": "<uuid>", "status": "active",
  "expires_at": "YYYY-MM-DD", "issued_at": "<iso8601>", "key_version": 1 }`.
- **Token:** the payload + a detached Ed25519 signature, encoded as a compact
  string (base64url `payload.signature`, JWT-style).
- **Keys:** an Ed25519 keypair. The **private key** is loaded on the **master
  only** from env `LICENSE_PRIVATE_KEY` (PEM/base64) — **never committed**. The
  **public key** ships in the codebase as a setting/constant (public keys are
  safe to distribute) so every instance verifies offline. `key_version` selects
  the public key for verification, allowing rotation.
- A `generate_license_keypair` management command prints a fresh keypair for ops
  (private → master env, public → settings constant).

**Validity rule** (single function used by middleware and the status endpoint):
a license is **valid** iff the signature verifies against the public key for its
`key_version` **and** `status == "active"` **and** `today_utc <= expires_at`.
Anything else → invalid.

## 5. Minting on the master

- **`mint_license(company)`** (master-authoritative service): reads the
  company's `License.expires_at` + `status`, builds the payload, signs it with
  the private key, and upserts the `License` row (`token`, `issued_at`,
  `key_version`).
- **Triggers** (every place the license could change):
  - inside `_bootstrap_company` at company creation (so a new company is never
    born unlicensed/locked);
  - whenever the super admin changes `expires_at` (extend/reduce);
  - on suspend / activate / cancel (status change).
- **`reissue_licenses`** management command re-mints all companies (idempotent) —
  for backfill of existing companies and for key rotation.
- Minting only runs on the master. On an agency, `mint_license` is never called;
  the agency only ever verifies the synced-down token.

## 6. Delivery to agencies

- Register **`system_config.License`** as **`DOWN`** in
  `apps/sync/registrations.py`. The master owns it; the existing sync backbone
  pushes each row to its agency; `apps/sync/guard.py` already blocks agency-side
  writes to DOWN-registered models. No new transport.
- A re-mint (new token) propagates on the next sync cycle; an offline agency
  keeps enforcing its last token until it syncs.

## 7. Enforcement

- **`LicenseMiddleware`** in `apps/core`, registered in `MIDDLEWARE`
  **immediately after `TenantMiddleware` and before `EntitlementMiddleware`**.
- Logic per request:
  1. Resolve `company_id` from `get_current_tenant()`. If `None` (anonymous or
     super admin) → pass through (I6).
  2. Load the company's `License`; run the §4 validity rule on its `token`.
  3. If **valid** → pass through.
  4. If **invalid** → if the path is **exempt**, pass through; else return the
     lock response.
- **Exempt paths:** anything under `/api/v1/auth/` (login, 2FA, refresh, logout,
  me) and the license-status endpoint `/api/v1/system/license/`. Everything else
  is blocked.
- **Lock response** (HTTP 403):
  `{"success": false, "error": {"code": "LICENSE_EXPIRED", "message": "Licence
  expirée, veuillez contacter l'administrateur."}}`
- **Performance:** Ed25519 verification is microseconds; the computed validity is
  cached keyed by the token string with a short TTL (e.g. 60s). Because the cache
  key is the token value, a re-mint (new token) auto-invalidates it.

## 8. API surface

All under `/api/v1/system/`:

- `GET /system/license/` — **always reachable** (exempt from the lockout).
  Returns `{ "valid": bool, "status": str, "expires_at": "YYYY-MM-DD"|null,
  "message": str }` for the current tenant (or a given company for the super
  admin). Drives the frontend lock screen.
- `GET /system/companies/<id>/license/` — **`IsSuperAdmin`**: read a company's
  license.
- `PUT /system/companies/<id>/license/` — **`IsSuperAdmin`**: set/extend/reduce
  `expires_at` (and optionally `status`); validates it's a real date; re-mints
  the token; returns the updated license.
- Company **creation** (super admin, existing flow) gains a **required
  `license_expires_at`** field; `_bootstrap_company` mints the initial token from
  it.

Every license-management endpoint is `IsSuperAdmin`-gated (I5). None are exposed
to institution admins.

## 9. Frontend

- **Lock interception:** a global HTTP interceptor detects
  `error.code === "LICENSE_EXPIRED"` on any response and flips a global
  `licenseLocked` signal. The app shell, when locked, renders a **full-screen
  lock** component showing the message — no nav, no content. After login the app
  calls `GET /system/license/` so the lock shows immediately, not only after the
  first blocked call. The login page stays reachable.
- **Super-admin license management** (master, `IsSuperAdmin`): an
  **`expires_at` date field in the company create form** (required), and a
  per-company **license screen/action** (date picker) to extend/reduce later.
  Saving calls the §8 endpoints and re-mints. No institution-admin surface.
- **i18n:** the lock message and the management UI strings added to all four
  locales (fr/en/es/pt).

## 10. Edge cases & failure modes

- **Fail closed (I4):** missing/malformed/bad-signature/expired/suspended →
  locked.
- **New company not born locked:** `license_expires_at` is required at creation
  and `_bootstrap_company` mints immediately.
- **Super admin never gated (I6):** platform super admin (no tenant) always
  reaches the master to extend an expired license — this is who "l'administrateur"
  refers to.
- **Agency offline at renewal:** stays locked until it next syncs the re-minted
  token (renewal implies connectivity — accepted, no leash).
- **Date boundary:** valid **through** `expires_at` (inclusive); expired when
  `today_utc > expires_at`.
- **Clock rollback offline:** with no leash, a tampered local clock could extend
  validity. Accepted per the no-leash decision; optional future hardening
  (persist last-seen max server time, refuse backward jumps) is **out of scope**.
- **Key hygiene:** the private key is env-only on the master, never committed —
  explicitly tied to the repo's existing committed-plaintext-secret problem; no
  key material in git, ever.

## 11. Security notes

- Enforcement trusts **only** the verified signed token, never the denormalized
  columns or any agency-writable state.
- The sync guard (DOWN) + the signature are layered defenses: the guard stops
  app-level edits on agencies; the signature stops direct-DB edits anywhere.
- `cryptography` is a new dependency (`requirements/base.txt`).

## 12. Out of scope
- Plan-limit enforcement (max_users / max_agencies / max_storage_gb).
- Feature-flag gating (has_api_access / has_advanced_reports / has_multi_agency).
- Graduated warn/grace/read-only lifecycle.
- Billing/payment integration; the `Subscription` model's role.
- Clock-rollback hardening for offline instances.
- Online phone-home / instant remote revocation (an offline agency revokes only
  on next sync).
