# SP4 — Online Seat Authority — Implementation Plan

> Execute task-by-task (TDD). Each task ends green + committed.

**Spec:** `docs/superpowers/specs/2026-09-08-sp4-online-seat-authority-design.md`
**Goal:** origin agency authors every seat write; online sales relay to it via long-poll and degrade when it's offline.

## Global Constraints
- No new infra (long-poll over gunicorn/WSGI). Relay endpoints: `IsSyncPeer` + schema parity (reuse `_schema_mismatch`). Gated by `SYNC_ENABLED`.
- Reuse `apps/sync` (registry, client, apply). French copy. Branch `feat/sp4-seat-authority`. Commits: shimi, no Claude trailer. Tests via pytest `--create-db`.

---

### Task 1 — Registry: Trip/TripSeat → UP
- Modify `apps/sync/registrations.py`: move `voyages_trips.Trip`, `voyages_trips.TripSeat` from `_DOWN` to `_UP`.
- Test (`apps/sync/tests/test_registry_directions.py`): `registry.spec_for("voyages_trips.trip").direction == UP`; same for tripseat.
- Commit: `refactor(sync): trips/seats are agency-owned (UP)`.

### Task 2 — Presence (heartbeat)
- `AgencyPresence(agency OneToOneField, last_seen auto_now)` model (+migration). Helper `apps/sync/presence.py::is_agency_online(agency)` using `settings.SYNC_HEARTBEAT_TTL` (add setting, default 90).
- `SyncHeartbeatView` (`POST /sync/heartbeat/`, `IsSyncPeer`+parity): body `{agency_id}` → upsert presence.
- Tests: heartbeat updates `last_seen`; `is_agency_online` true within TTL, false after; auth/parity enforced.
- Commit: `feat(sync): agency presence heartbeat`.

### Task 3 — Relay job model + endpoints
- `OnlineBookingJob` model (fields per spec §3.3) (+migration). Add `SYNC_JOB_TIMEOUT` (default 15).
- `SyncJobsPollView` (`GET /sync/jobs/poll/`): return this... determine agency from body/param `agency_id`; return `pending` jobs for it (mark none — poll is read; agency claims by posting result).
- `SyncJobsResultView` (`POST /sync/jobs/result/`): `{job_id, status, result?, error?}` → update job.
- Tests: poll returns pending jobs for the agency; result marks done/failed; expired jobs excluded; auth/parity.
- Commit: `feat(sync): online-booking relay job queue + poll/result endpoints`.

### Task 4 — Agency reserve_worker
- `manage.py reserve_worker` (one pass; loop optional): heartbeat; poll jobs; for each, `create_booking(company, trip_type="one_way", outbound_trip=<trip by id>, return_trip=None, buyer_spec={name,phone,email}, items=[{passenger:{...}, destination_point_id:None, outbound_seat_id: first_available_seat(trip).id}], payment_method, channel=Booking.Channel.ONLINE, user=_system_user(company))`; on success post result `done` with booking.reference + ticket number + seat; on `ApplicationError` post `failed`.
- `_system_user(company)` = first active institution admin (reuse online_booking `_actor`).
- Test: with a pending job in the DB (single-node test acting as both), invoke the worker's job-handling function directly (bypass HTTP) → a Booking is created (channel=online) and the job → done. Mock the HTTP poll/result via the client.
- Commit: `feat(sync): agency reserve_worker authors online bookings locally`.

### Task 5 — online_booking integration (master)
- In `online_booking.services.initiate_booking`: when `settings.SYNC_ENABLED` and the trip's origin agency is a remote agency node context (master), instead of the current direct path: if `is_agency_online(agency)` false → `ApplicationError` (offline). Else create `OnlineBookingJob`, poll its status up to `SYNC_JOB_TIMEOUT`; on `done` set the `OnlineBookingRequest` amount/status paid + stash ticket info (in `payment_reference`/a result field the status serializer already exposes); on `failed`/`expired` → `ApplicationError`.
- Keep the existing non-sync path (SYNC_ENABLED off) unchanged so all current tests pass.
- Tests: offline agency → refusal; online agency + pre-seeded `done` job → request paid with ticket. (Drive with SYNC_ENABLED on and presence seeded.)
- Commit: `feat(online): route agency-owned online bookings through the seat-authority relay`.

### Task 6 — Full suite + docs
- `pytest -q` green; `makemigrations --check` clean.
- Update `docs/sync-prerequisites-status.md` / a short SP4 note; update the sync roadmap status.
- Commit: `docs: SP4 status`.

## Notes / risks
- Task 5 is the intricate one (master request ↔ agency-authored booking; the real `Booking` lands on the master later via up-sync and links by reference). Keep the SYNC-off path intact to avoid disturbing the 295 existing tests.
- In-process tests act as a single node for both roles (mock the HTTP client) — a true two-node test is out of scope.
