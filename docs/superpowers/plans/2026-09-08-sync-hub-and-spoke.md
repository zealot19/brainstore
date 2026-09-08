# Hub-and-Spoke Synchronisation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans / superpowers:subagent-driven-development. This plan is **phased** (SP0–SP5); each phase is its own execution cycle and gets a detailed task breakdown when reached. It depends on the Pre-Sync plan being fully landed first.

**Goal:** Run a full app instance (Angular + Django + Postgres) in each agency, operating fully offline, synchronising with an online master so all data converges — without double-booking or id/number collisions.

**Architecture (agreed):** Hub-and-spoke, **master-authoritative**. Spokes (agencies) sync only with the hub (master), never each other. **Application-level** sync via a **ChangeLog/outbox (CDC)** + watermarked push/pull. A separate **live channel** (master ↔ origin agency) backs online seat sales (option A: origin agency is the sole seat authority).

**Depends on:** `docs/superpowers/plans/2026-09-08-presync-prerequisites.md` (UUID everywhere, soft-delete, CDC-ready writes, agency-namespaced numbers, non-null ownership, agency stamping, origin-agency selling). **Do not start SP1 until pre-sync is merged.**

**Tech Stack:** Django + DRF, Postgres, Docker/Compose, a live transport for SP4 (Django Channels/WebSocket or long-poll), pytest.

## Global Constraints
- Spokes talk only to the master. Master is the tie-breaker for conflicts.
- **Data ownership rules** (from pre-sync): config = master-owned (down-sync, read-only at agencies); transactions = agency-owned (up-sync, single-origin); seats = origin-agency-owned; online sales relayed to the origin agency.
- Every synced row is identified by its **UUID**; upserts are **idempotent** by UUID + version. Deletions travel as soft-delete tombstones.
- All instances must run **compatible migrations**; sync refuses on version mismatch (SP5).
- pytest green per phase; French user-facing copy. Commits: author shimi; no Claude co-author trailer.

## Data classification (the registry that drives sync)
A central **sync registry** declares, per model: `direction` (`down` = master→agency, `up` = agency→master, `none` = instance-local) and `conflict_policy`.
- **`down` (master-authoritative config):** `system_config` (companies, agencies, packages), `admin_rbac` (roles/permissions/profiles/links), `authentication.User` + `UserAgency`, `voyages_config` (towns, service points, routes, fare classes, seating plans, schedules), `voyages_pricing` (fares), `fleet` config, `voyages_trips.Trip` schedule (departures) + `TripSeat` skeleton.
- **`up` (agency-owned transactions):** `voyages_booking` (Booking, Ticket, Passenger), `voyages_consignment` (Parcel, Baggage), `treasury` (Transaction, sessions, expenses/incomes), `hr` transactional, `fleet` logs. Seat **status** transitions for a departure flow up from its origin agency.
- **`none` (instance-local):** sessions, login attempts, password-reset tokens, WhatsApp sessions, Sage sync logs, stock levels; legacy dead stack entirely.

---

## SP0 — Instance topology & deploy
**Goal:** one command brings up an agency stack; each instance knows who it is; a new agency can be bootstrapped from the master.

**Key components / tasks:**
- **`NodeInstance` config** (settings + a small `system_config` model or settings block): `NODE_ROLE` (`master`|`agency`), `NODE_ID` (uuid), `AGENCY_ID` (for agency nodes), `MASTER_URL`, `SYNC_TOKEN`.
- **Docker Compose per agency:** Django + Postgres + built Angular (reuse the existing `backend/docker-compose.yml` as the base; parameterise env). Master uses the existing cloud deploy.
- **Bootstrap command** `manage.py bootstrap_from_master`: pulls the full config snapshot (down-sync, full) to seed a fresh agency DB, then registers the node with the master.
- **Node registration endpoint** on master: agency announces `NODE_ID`/`AGENCY_ID`; master records it and issues/validates the `SYNC_TOKEN`.

**Testing:** compose stack boots; `manage.py check`; bootstrap seeds a fresh DB with config and zero transactions; registration round-trips.

**Deliverable:** two instances (a master + one agency) running locally via Compose, agency seeded from master.

---

## SP1 — Sync backbone (ChangeLog/outbox + push/pull)
**Goal:** reliable, idempotent, resumable change capture and transfer between an agency and the master.

**Key components / tasks:**
- **`ChangeLog` model** (append-only): `entity` (label), `object_id` (uuid), `op` (`upsert`|`delete`), `payload` (json snapshot), `version` (monotonic per row, e.g. `updated_at` + counter), `origin_node`, `created_at`, `synced_at` (null until shipped). Populated by a **capture layer**: `post_save`/`post_delete` signals for `.save()` paths **plus** explicit `record_change()` calls in the soft-delete/`bulk-update` helpers built in pre-sync (so bulk ops are captured too).
- **Sync registry** (the classification table above) — decides which models are captured and their direction.
- **Watermarks** per `(peer, direction)`: last successfully applied `version`/cursor.
- **Master endpoints** (`/api/v1/sync/`): `POST push` (agency → master: batch of ChangeLog entries; idempotent upsert by UUID; per-entity conflict policy; returns accepted/rejected + assigned display data), `GET pull?since=<cursor>` (master → agency: config changes since watermark). Inter-instance auth via `SYNC_TOKEN`.
- **Agency sync worker** `manage.py sync_once` (and a scheduler): push local `up` changes, pull `down` changes, advance watermarks, resumable on failure, ordered per entity, retry with backoff.
- **Idempotent apply**: upsert by UUID; ignore already-applied versions; apply tombstones as soft-deletes.

**Conflict policy (rare by design):** `down` tables → master wins (LWW by version). `up` tables → single-origin, so no real conflict; if the same row is seen twice, last-version wins. Seats handled by ownership (origin agency only) — no merge needed.

**Testing:** unit-test capture (save/soft-delete/bulk-update all produce ChangeLog rows); round-trip a batch master↔agency in-process (two DBs or two test schemas); idempotency (replay a batch → no dupes); tombstone application; watermark resume after simulated failure.

**Deliverable:** a booking created on the agency instance appears on the master after `sync_once`; a fare edited on the master appears on the agency after `sync_once`.

---

## SP2 — Config down-sync (prove it safely)
**Goal:** master→agency mirror of all `down` config, read-only at agencies.

**Key components / tasks:**
- Register all `down` models in the sync registry; ensure agency-side apply is idempotent and marks these read-only (agency UI/services must not edit master-owned config — guard or hide).
- **Departure (Trip) + TripSeat skeleton** flow down so an agency has its own departures to sell; seat **status** then flows up (SP3).
- Full snapshot on bootstrap (SP0) + incremental deltas thereafter.

**Testing:** edit routes/fares/RBAC/departures on master → converge to agency; deleting (soft) a fare on master tombstones it at the agency; agency cannot mutate `down` rows.

**Deliverable:** agencies always have current config/routes/fares/departures without manual copying.

---

## SP3 — Transaction up-sync (agency → master)
**Goal:** all agency-owned transactions consolidate at the master, single-origin, no collisions.

**Key components / tasks:**
- Register `up` models (bookings, tickets, passengers, parcels/baggage, treasury movements/sessions, logs).
- Rely on pre-sync guarantees: UUID PKs (no collisions), agency-namespaced numbers (no number clashes), owning-agency stamp (routing/reporting), soft-delete (cancellations propagate).
- Master consolidation views: cross-agency reporting reads the merged data.
- Handle the **open-return handoff**: the return Ticket created at the destination agency (SP: its own `up` row) + the one-way `return_open→false` transition on the origin's Booking — applied as a normal field update, no conflict.

**Testing:** create bookings/parcels/cash at two agencies → both consolidate at master with distinct numbers and correct owning agency; cancel at agency → tombstone at master; round-trip: outbound at A + return assigned at B both land on the master linked to one booking.

**Deliverable:** master has a complete, correct, cross-agency picture; existing reporting works against consolidated data.

---

## SP4 — Online seat authority (live channel) — option A
**Goal:** online channels (PWA + WhatsApp bot) sell an agency's departure only when that agency is reachable, relaying the reservation to the origin agency (the sole seat authority).

**Key components / tasks:**
- **Heartbeat:** each online agency holds a persistent connection to the master (Django Channels/WebSocket or long-poll) and heartbeats; master tracks per-agency liveness.
- **Reserve relay:** master sends a `reserve_seat(departure, seat|auto)` request down the origin agency's connection; the agency (authority) writes the reservation (`first_available_seat`/specific) and replies; the sale completes on the master and the reservation flows up via SP3.
- **Degrade:** no heartbeat for a departure's origin agency → online booking for that departure is unavailable (`online_booking` search hides it / booking returns a clear message). Wire this into `online_booking.initiate_booking` and the WhatsApp `engine`/PWA search.
- **Timeout/rollback:** if the agency doesn't confirm in time, release and fail the online attempt cleanly.

**Testing:** with the origin agency "online" (mock channel), an online booking reserves via the agency and appears in its inventory; with it "offline", online booking for that departure is refused; no double-booking under interleaved walk-in + online.

**Deliverable:** the PWA and WhatsApp bot we built now book against the authoritative agency, safely, with correct offline degradation.

---

## SP5 — Ops hardening
**Goal:** run N instances safely in production.

**Key components / tasks:**
- **Migration/version parity:** each instance advertises its migration hash; sync refuses (with a clear error) when master/agency schemas are incompatible; documented rollout order (migrate master, then agencies).
- **Monitoring:** sync lag per agency, last-heartbeat, failed batches, tombstone counts; an admin dashboard.
- **Conflict/rejection surface:** rejected push entries (rare) visible for operator action.
- **New-agency onboarding runbook** (bootstrap + register + verify).
- **Backups** per instance; master as the consolidated source of truth.

**Testing:** version-skew is refused; a killed sync resumes; onboarding a fresh agency converges.

**Deliverable:** documented, monitored, resumable multi-instance operation.

---

## Sequencing & risk
1. **Pre-sync** (separate plan) — must land first.
2. **SP0 → SP1 → SP2** — the backbone + safe one-way config sync (lowest risk; prove the machinery).
3. **SP3** — transactions up (single-origin, low conflict thanks to pre-sync).
4. **SP4** — online seat authority (introduces the live channel; highest new complexity).
5. **SP5** — ops hardening (parallelisable with SP3/SP4).

**Biggest risks:** (a) the capture layer missing a write path → mitigated by pre-sync's no-hard-delete + bulk-update-bumps rules and explicit `record_change()` hooks; (b) SP4 live channel over NAT → mitigated by agency-initiated persistent connections; (c) migration skew across instances → mitigated by SP5 parity guard. Each phase is independently shippable and testable.
