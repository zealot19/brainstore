# SP4 — Online Seat Authority (long-poll relay) — Design Spec

**Date:** 2026-09-08
**Status:** Approved (design), pending implementation
**Author:** shimi

## 1. Goal
Make online sales (PWA + WhatsApp bot) safe in the hub-and-spoke deployment:
every seat write — walk-in or online — is authored by the **origin agency** (the
sole seat authority). Online sales for a departure work only while its agency is
reachable, and degrade cleanly when it is offline (option A).

## 2. Context & decisions
- **Departures are agency-owned** (decided): each origin agency creates/runs its
  buses and owns their seats. `Trip` + `TripSeat` are therefore **UP** (agency →
  master), not `DOWN`. The master keeps an eventually-consistent read copy via
  sync (reporting + availability), but is **not** the live seat authority.
- **Transport: long-poll** over the existing gunicorn/WSGI stack (no Channels/
  ASGI/Redis). The agency runs a poller; the master's online booking waits on a
  queued job with a timeout.
- Because the master isn't authoritative for seats, an online sale must be
  **authored at the origin agency and relayed** — not created on the master.

## 3. Components

### 3.1 Registry correction (prerequisite)
Move `voyages_trips.Trip` and `voyages_trips.TripSeat` from `DOWN` → `UP` in
`apps/sync/registrations.py`. (Booking/Ticket/Passenger already UP.)

### 3.2 Presence (heartbeat)
- `AgencyPresence(agency OneToOne, last_seen)` on the master.
- `POST /sync/heartbeat/` (agency → master, `IsSyncPeer`) updates `last_seen`.
- `is_agency_online(agency, window=settings.SYNC_HEARTBEAT_TTL)` — fresh `last_seen`.

### 3.3 Relay queue
- `OnlineBookingJob` on the master: `trip_id`, `agency_id`, passenger fields
  (`name`/`phone`/`email`), `payment_method`, `payment_phone`,
  `status` (`pending`/`done`/`failed`/`expired`), `result` (JSON:
  `booking_reference`, `ticket_number`, `qr`, `seat_number`), `error`,
  `created_at`, `expires_at` (short, e.g. 30 s).

### 3.4 Endpoints (master; `IsSyncPeer` + schema parity)
- `POST /sync/heartbeat/` — presence.
- `GET  /sync/jobs/poll/` — agency long-polls for its `pending` jobs.
- `POST /sync/jobs/result/` — agency reports a job outcome (`done`+result or `failed`+error).

### 3.5 Agency worker
- `manage.py reserve_worker` — loop: heartbeat, then poll `/sync/jobs/poll/`; for
  each job run **`voyages_booking.create_booking(company, trip_type="one_way",
  outbound_trip=trip, buyer_spec, items=[{passenger, outbound_seat_id=<first
  available>}], channel=ONLINE, user=<system>)`** locally, then `POST
  /sync/jobs/result/`. The new booking/ticket/seat-sold rows flow **up** via the
  normal sync (`sync_once`). `_assert_can_sell` already exempts the system actor.

### 3.6 `online_booking` integration (master)
`initiate_booking` for an agency-owned trip:
- resolve the trip's origin agency; if **offline** → `ApplicationError`
  ("Réservation en ligne indisponible pour ce départ (agence hors ligne).").
- else create an `OnlineBookingJob` and **wait** (poll its status, ~15 s timeout):
  - `done` → populate the `OnlineBookingRequest` result (ticket number / QR from
    the job) and mark it paid; the actual `Booking` lands on the master later via
    up-sync and links by reference.
  - `failed`/`expired` → `ApplicationError`.
Under `FAKE_PAYMENTS` the job is enqueued immediately on confirm; with real
Campay later, enqueue on webhook success. The PWA + WhatsApp bot keep polling the
same `OnlineBookingRequest` status — no client-facing change.

## 4. Config
- `SYNC_HEARTBEAT_TTL` (s, default 90) — presence freshness window.
- `SYNC_JOB_TIMEOUT` (s, default 15) — how long online booking waits for the agency.
- Reuse `SYNC_ENABLED`, `NODE_ROLE`, `SYNC_TOKEN`, `SYNC_MASTER_URL`.

## 5. Error handling
- Agency offline → clear French refusal (PWA/bot surface it).
- Job timeout/expiry → refusal; the job is marked `expired` so a late agency
  result is ignored.
- All relay endpoints enforce `IsSyncPeer` + schema parity (409 on skew).

## 6. Testing (pytest, HTTP mocked)
- registry: `Trip`/`TripSeat` are `UP`.
- heartbeat endpoint updates presence; `is_agency_online` freshness.
- jobs: poll returns an agency's pending jobs; result marks done/failed; auth + parity enforced.
- reserve_worker: given a pending job (mock poll), it calls `create_booking` and posts a `done` result (mock).
- online_booking: offline agency → refusal; online agency + a `done` job → request marked paid with the ticket.

## 7. Out of scope (SP4)
- Real Campay wiring (stays `FAKE_PAYMENTS`); WebSocket transport; the per-agency
  Docker deploy (SP0) and monitoring dashboard/runbook (SP5 remainder).
