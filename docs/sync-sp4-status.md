# SP4 — Online Seat Authority — Status

Merged status of the online seat-authority relay (spec:
`docs/superpowers/specs/2026-09-08-sp4-online-seat-authority-design.md`).

## Done
- **Registry:** `Trip` + `TripSeat` are **UP** (agency-owned); config stays DOWN.
- **Presence:** `AgencyPresence` + `POST /sync/heartbeat/`; `is_agency_online()` with `SYNC_HEARTBEAT_TTL` (90 s).
- **Relay queue:** `OnlineBookingJob` + `GET /sync/jobs/poll/` + `POST /sync/jobs/result/` (IsSyncPeer + schema parity).
- **Agency worker:** `manage.py reserve_worker` — heartbeat, poll jobs, `author_booking()` runs `create_booking(channel=ONLINE)` locally, posts result; booking flows up via `sync_once`.
- **online_booking integration:** `initiate_booking` refuses when the origin agency is offline; `confirm_payment` relays to the agency (`_relay_confirm` + `_wait_for_job`, `SYNC_JOB_TIMEOUT` 15 s), surfacing the ticket via `OnlineBookingRequest.ticket_number` (real `Booking` arrives later via up-sync). PWA/WhatsApp status + notify fall back to `ticket_number`.

All gated by `SYNC_ENABLED` (off by default) — standalone/single-instance behaviour is unchanged.

## Operating a node
- **Master (online):** `SYNC_ENABLED=1 NODE_ROLE=master SYNC_TOKEN=…`. Serves push/pull/snapshot/heartbeat/jobs.
- **Agency:** `SYNC_ENABLED=1 NODE_ROLE=agency NODE_AGENCY_ID=<uuid> SYNC_MASTER_URL=… SYNC_TOKEN=…`; run `bootstrap_from_master` once, then `sync_once` + `reserve_worker` on a schedule (cron/systemd timer).

## Remaining (not SP4)
- **SP0** — per-agency Docker Compose deploy config (needs hosting inputs).
- **SP5 ops** — sync monitoring dashboard + new-agency onboarding runbook.
- Real Campay wiring for the online channel (currently `FAKE_PAYMENTS`).
