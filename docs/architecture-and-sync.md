# Architecture & Synchronisation — whole‑project guide

How the system is structured, **how synchronisation works**, and the project‑wide
subtleties (language, timezone, money, deployment) you must carry into the **Django‑only
rebuild** (server‑rendered, one process, no REST/SPA split).

---

## 1. The big picture: two tiers, offline‑first

This is a **multi‑company transport ERP** that must keep selling **even with no internet**.
So it runs as **hub‑and‑spoke**:

```
                    ┌──────────────────────────────┐
                    │   ONLINE MASTER (the hub)     │
                    │   VPS · PostgreSQL · HTTPS    │
                    │   - all companies/agencies    │
                    │   - public online booking     │
                    │   - authoritative config      │
                    └───────────────┬──────────────┘
                 sync over HTTPS (push/pull, token)
          ┌───────────────┬─────────┴───────┬───────────────┐
          │               │                 │               │
   ┌──────┴─────┐  ┌──────┴─────┐    ┌──────┴─────┐   (more agencies)
   │  AGENCY A  │  │  AGENCY B  │    │  AGENCY C  │
   │ Windows PC │  │ Windows PC │    │ Windows PC │
   │ SQLite     │  │ SQLite     │    │ SQLite     │
   │ LAN clients│  │ LAN clients│    │ LAN clients│
   └────────────┘  └────────────┘    └────────────┘
```

- **Online master** — one server (a VPS: Postgres + Django behind nginx/HTTPS, or Railway).
  Holds every company, serves the **public online booking PWA**, and is the authoritative
  source for **configuration**.
- **Agency node** — a Windows PC at each branch running the full app on **SQLite**,
  **offline‑capable**. Other PCs in the branch use it over the **LAN** (browser →
  `http://<agency‑ip>:port`). Each node **syncs** to the master when it has a connection.

Every node runs the **same codebase**; its role is set by env (`NODE_ROLE=master|agency`).

---

## 2. Tech stack — now vs the Django‑only rebuild

| Concern | Current | Rebuild (Django‑only) |
|---|---|---|
| Backend | Django + **DRF** (REST API) | Django (keep) |
| Frontend | **Angular SPA** (separate) | **Django templates + forms** (server‑rendered); a little HTMX/JS only for the seat‑picker & two‑pane dispatch |
| Auth | JWT (SimpleJWT) for the SPA | Django **session auth** (server‑rendered) |
| DB | SQLite (dev/agency) · **Postgres** (master) | Same split |
| i18n | modeltranslation + gettext + transloco | modeltranslation + gettext (drop transloco — it was the Angular layer) |
| Packaging | Docker (master) · `start-erp.bat` (agency) | Same |
| Sync | `apps/sync` (CDC) | **Keep almost verbatim** — it's backend‑only (see §4) |

**The sync engine, the models, and the business rules are all backend‑only — they port
directly.** What you're really replacing is the *presentation* layer (Angular → templates).

---

## 3. Architecting the new Django‑only app

- **One Django project, many apps** (mirror today's split): `system_config`, `authentication`,
  `admin_rbac`, `users`, `voyages_config`, `voyages_pricing`, `voyages_trips`,
  `voyages_booking`, `voyages_consignment`, `fleet`, `treasury`, `reporting`, `sync`,
  `online_booking`, `core`.
- **Fat services, thin views.** All logic lives in `services/*.py` functions (as today);
  a view just validates a form, calls one service inside `transaction.atomic()`, and renders.
  **Never mutate `status` in a view** — only via a transition service that checks the state.
- **Multi‑tenant scoping** is non‑negotiable:
  - A **middleware** resolves the current user → sets the **company** (and activates the
    user's **timezone**). Every queryset filters by `company`; non‑admin users are further
    scoped to their **agency**.
  - Keep the `objects` (hides soft‑deleted) / `all_objects` manager split.
- **Modules/entitlements.** Companies subscribe to optional modules (Colis, etc.) via
  **Package flags**, enforced by an `EntitlementMiddleware` (not a per‑view permission).
- **RBAC.** Granular permission codes (`ticketing.parcel.manage`, …); `.manage` implies CRUD.
  A new permission is **invisible until granted to a role and the user re‑logs in**
  (superusers bypass). Gate each view with a permission check.
- **UUID primary keys everywhere** (see §4 — required for sync).
- **Server‑rendered documents.** Receipts/tickets/manifests are HTML built from a shared
  header/footer resolver; print to PDF (WeasyPrint) or to the **per‑workstation print agent**
  (§6).

---

## 4. Synchronisation — the full design (port this as‑is)

The sync lives entirely in **`apps/sync`** and depends only on four model conventions, so it
moves to the Django‑only app unchanged.

### 4.1 Prerequisites every syncable model must have
1. **UUID primary key** — so a row created offline on agency A never collides with one on
   agency B or the master. This is the single most important rule.
2. **`updated_at`** (auto) — the **version** used for conflict resolution.
3. **Soft delete** (`is_deleted`) — deletes replicate as an "upsert with is_deleted=True",
   never a hard gap.
4. **`company`** scoping — sync is always within a company/agency boundary.

### 4.2 What syncs, and which way — the **registry**
Each model declares a **direction** (`apps/sync/registrations.py`, `registry.py`):
- **DOWN (master → agency):** configuration — routes, fares, parcel types, seating plans,
  settings, users/roles, templates. **Master‑authoritative**, read‑only at agencies.
- **UP (agency → master):** the agency's own transactions — bookings, tickets, parcels,
  baggage, cash movements. **Single‑origin** (only the owning agency writes them).

Conflict policy per model defaults to **`MASTER_WINS`**.

### 4.3 CDC capture — how a change becomes a sync record (`capture.py`)
- Django **signals** (`post_save`, `post_delete`, `m2m_changed`) on registered models write a
  **`ChangeLog`** row on every change: `{entity, object_id, op (upsert|delete), payload
  (full row snapshot, media as base64), version (updated_at), origin_node, created_at,
  synced_at}`.
- **Bulk `.update()`/`.delete()` bypass signals**, so those code paths call `record_change()`
  explicitly. (Watch this in the rebuild: anywhere you use `.update()` on a synced model, add
  the explicit capture.)
- Capture is gated by `SYNC_ENABLED` and **suppressed while applying remote changes**
  (`suspend_capture()`), so applying a pulled change never re‑emits a local change (no echo
  loop).

### 4.4 The protocol — `sync_once`, run every ~90 s
A background loop on each agency (`manage.py sync_once`) does, per cycle:
1. **PUSH** — send local, not‑yet‑synced ChangeLog rows (`origin_node = me`,
   `synced_at IS NULL`) to the master `POST /sync/push/`, in **batches of 500**; mark them
   `synced_at`.
2. **PULL** — `GET /sync/pull/?since=<pull_cursor>&node=me`, apply each change, advance the
   `pull_cursor` watermark. (Excludes the node's own changes.)

First run uses **`bootstrap_from_master`** → `GET /sync/snapshot/` → a full config seed
applied with FK checks deferred, then sets the initial cursor.

Auth between nodes: a shared **bearer token** (`SYNC_TOKEN`) checked by an `IsSyncPeer`
permission. Config env: `NODE_ROLE`, `NODE_ID` (uuid), `NODE_AGENCY_ID`, `SYNC_MASTER_URL`
(e.g. `https://master/api/v1`), `SYNC_TOKEN`, `SYNC_ENABLED`, `SYNC_INTERVAL`.

### 4.5 Apply & conflict resolution (`apply.py`)
- **Idempotent upsert by UUID**, run under `suspend_capture()`.
- Preserves the incoming `updated_at` (via `QuerySet.update`, which bypasses `auto_now`) so
  watermarks stay coherent.
- **Last‑write‑wins by `updated_at`:** if the local row is **newer** than the incoming
  version, the change is **skipped** (handles out‑of‑order replay). Combined with the
  registry's `MASTER_WINS` for config.
- Robustness rules it already encodes (keep them): a **DateField** receiving a full datetime
  keeps the date part; an FK to a **non‑syncable nullable** target is nulled; media files are
  reconstructed from base64 into `MEDIA_ROOT`.
- The whole pulled batch should apply with **FK constraint checks deferred** (so a child can
  arrive before its parent within a batch).

### 4.6 Online booking relay (the clever bit)
Seats are **authoritative at the owning agency**, but online customers book on the **master**.
So:
1. A customer books online → the master creates an **`OnlineBookingJob`** (trip, seat,
   passenger, `expires_at`).
2. The owning agency runs a **`reserve_worker`** that **heartbeats** (`/sync/heartbeat/` →
   `AgencyPresence`) and **polls** `/sync/jobs/poll/?agency_id=…`, performs the reservation
   **locally** (authoritative seat lock), and posts the result back (`/sync/jobs/result/`).
3. If the agency is **offline** (no recent heartbeat), the master can hold or decline the
   online seat. This prevents double‑selling a seat online and at the counter.

### 4.7 Sync — reproduction summary
Keep `apps/sync` essentially verbatim: `models.py` (ChangeLog, SyncCursor, AgencyPresence,
OnlineBookingJob), `capture.py`, `apply.py`, `registry.py` + `registrations.py`, `client.py`,
`snapshot.py`, `views.py` (push/pull/snapshot/heartbeat/jobs), and the `sync_once` /
`reserve_worker` / `bootstrap_from_master` management commands. The only thing tied to the UI
is nothing — it's all backend.

---

## 5. Language & i18n (a real subtlety)

- **The project is French‑first.** Comments, variable names, docstrings, UI labels, and
  business terms are **French** (guichetier, voyage, colis, bagage, caisse, reçu, expédition).
  Keep it that way for consistency with operators and existing data.
- **Three i18n layers today** — in the rebuild you keep two:
  1. **`modeltranslation`** — translatable **reference data** (payment methods, consignment/
     crew/expense types) with `_fr`/`_en` columns. **Keep.**
  2. **`gettext` + `.po`/`.mo`** — translatable **error/system messages** (`_()`), compiled
     catalogs. **Keep** (and commit the `.mo` files).
  3. **transloco (`fr.json`/`en.json`)** — the **Angular** UI strings. **Drop** — in a
     server‑rendered app, templates use Django's `{% trans %}` / `gettext` instead.
- Operators see French; English is a secondary catalog. Default language `fr`.

---

## 6. Other project‑wide subtleties to carry over

- **Timezone.** `USE_TZ=True`, store UTC. A middleware activates the **logged‑in user's
  `timezone`** per request so server‑rendered docs show local time. ⚠️ The default user/
  company timezone is **`Africa/Abidjan` (UTC+0)** — a trap; set the real zone (e.g.
  `Africa/Douala` = UTC+1). Changing `settings.TIME_ZONE`/`.env` does **not** fix a logged‑in
  user whose own `timezone` is wrong.
- **Money / OHADA.** Treasury uses OHADA accounting (e.g. income → account 706, refunds
  likewise). Income is **read from `Transaction` rows** (no duplicate income tables). Cash is
  organised as **registers (caisses) + sessions**; a *guichetier* sells + counts denominations
  but doesn't open/close sessions. Partner/agency revenue split is **net‑based**
  (`Gross − Expenses = Net`, can go negative).
- **Printing is per workstation.** Each counter PC runs a tiny **local print agent**
  (`127.0.0.1:9113`) that renders the document HTML to PDF (headless Edge/Chrome) and prints
  silently (SumatraPDF) to that PC's chosen printer. Server never opens a print dialog.
- **Soft delete + audit everywhere** (`is_deleted`, `created_by/at`, `updated_by/at`).
- **Numbering** is **per‑agency, per‑month sequences** (e.g. `DLA/0001/MM/YYYY`), with a
  forward‑only "resume" tool after outages.
- **Deployment.**
  - *Master:* a VPS — Docker (Postgres + Django/gunicorn + nginx) with Let's Encrypt HTTPS
    (or a free `sslip.io` hostname when there's only an IP); **Postgres 18** data dir is at
    `/var/lib/postgresql` (not `/data`). Keep nightly `pg_dump` backups off‑box.
  - *Agency:* Windows `start-erp.bat` — installs Python/Node, runs the app on SQLite, serves
    the LAN, 90 s sync loop; a **background (no‑window) mode** and **auto‑start on boot**
    exist. Clients on other PCs just open the browser; printing is per‑PC.
- **Security / scoping.** Always filter by **company**, then **agency** for non‑admins.
  New RBAC permissions need a **role grant + re‑login**. Online payments are **simulated**
  (`FAKE_PAYMENTS=1`) until the mobile‑money provider is wired.

---

## 7. Recommendations for the rebuild

1. **Keep:** UUID PKs, soft delete, company/agency scoping, the service‑function pattern, the
   state machines, RBAC, entitlements, OHADA treasury, numbering sequences, and **`apps/sync`
   verbatim**.
2. **Replace:** Angular SPA → Django templates + forms (+ HTMX for the 2–3 interactive
   screens); JWT → session auth; transloco → `{% trans %}`.
3. **Mind the traps we hit this session:** the user‑timezone override (Abidjan vs Douala),
   the global‑vs‑company refund parameter leak, bulk `.update()` bypassing CDC capture,
   DateField/datetime in sync apply, FK ordering in a pulled batch, and Postgres 18's data‑dir
   path. All are documented above.
4. **Offline‑first is the whole point.** Design every transactional write to be valid on an
   isolated SQLite node and reconcilable later — that's what UUIDs + ChangeLog + last‑write‑
   wins buy you.

---

*Pairs with `transport-module-spec.md` (data + rules) and `transport-module-screens.md`
(screens + flows). This document covers the system architecture and the synchronisation
mechanism for the whole project.*
