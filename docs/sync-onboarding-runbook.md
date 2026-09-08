# New-Agency Onboarding Runbook (hub-and-spoke sync)

How to bring a new **agency instance** online against the **master**. Assumes the
full stack (Angular + Django + Postgres) is deployed for the agency (see SP0
Docker deploy — pending) and the master is reachable over HTTPS.

## 0. Prerequisites (on the master, once)
- `SYNC_ENABLED=1`, `NODE_ROLE=master`, a strong shared `SYNC_TOKEN`.
- The agency exists in config (`system_config.Agency`) with a **code** and its
  station `ServicePoint`s have `agency` set (enforced by `ServicePoint.clean`).
- All instances run the **same code/migrations** (version-parity guard returns
  409 on skew — migrate the master first, then agencies).

## 1. Configure the agency instance (env)
```
SYNC_ENABLED=1
NODE_ROLE=agency
NODE_ID=<uuid for this instance>
NODE_AGENCY_ID=<the Agency UUID this instance serves>
SYNC_MASTER_URL=https://<master-host>/api/v1
SYNC_TOKEN=<same shared token as the master>
# Postgres DB for this agency (its own database)
DATABASE_URL=...
```

## 2. Migrate + seed from the master
```
python manage.py migrate
python manage.py bootstrap_from_master     # pulls full config snapshot, sets pull watermark
```
`bootstrap_from_master` seeds all master-owned config (companies, agencies,
users, RBAC, network, pricing) in dependency order, so the agency can operate
immediately. (Departures/seats are agency-owned and created locally.)

## 3. Schedule the sync workers (cron / systemd timers)
- **`python manage.py sync_once`** — every 1–2 min: push agency-owned transactions
  (bookings, parcels, treasury, trips, seats) up; pull master config down.
- **`python manage.py reserve_worker`** — every ~15–30 s (or a loop): heartbeat to
  the master and fulfil online-booking relay jobs (PWA + WhatsApp bot sales for
  this agency's departures).

Example (systemd timer or cron):
```
*/2 * * * *  cd /app/backend && python manage.py sync_once   >> /var/log/sync.log 2>&1
*/1 * * * *  cd /app/backend && python manage.py reserve_worker >> /var/log/reserve.log 2>&1
```

## 4. Verify
- On the master, `GET /api/v1/sync/status/` (institution admin) shows the agency
  as **online** with a recent `last_seen`, and job counts.
- Create a booking on the agency → after `sync_once` it appears on the master
  (agency-stamped). Edit a fare on the master → after `sync_once` it appears on
  the agency.
- Online booking (PWA/WhatsApp) for one of the agency's departures succeeds while
  `reserve_worker` runs; if the agency stops heartbeating, online booking for its
  departures is refused ("agence hors ligne").

## Notes / guardrails
- **Read-only config on agencies:** local edits to master-owned config are blocked
  (edit config on the master; it flows down).
- **Schema skew:** if the agency and master differ in migrations, sync returns
  409 — upgrade + migrate both, master first.
- **Payments:** the online channel currently uses `FAKE_PAYMENTS`; set
  `FAKE_PAYMENTS=0` and configure Campay to take real Mobile Money.
- **Backups:** back up each agency DB independently; the master is the
  consolidated source of truth.
