# SP0 — Per-Agency Deployment (template)

A generic, parameterised per-agency stack lives in `deploy/agency/`. It is a
**starting point** — fill `deploy/agency/.env` with your real hosting values
(host, DB password, `SYNC_TOKEN`, `NODE_AGENCY_ID`, master URL).

## Stack (`deploy/agency/docker-compose.yml`)
- **db** — the agency's own Postgres (separate DB per agency).
- **web** — the Django app (built from `backend/`); its Dockerfile CMD runs
  `migrate` then gunicorn. Serves the agency locally and exposes the sync client.
- **sync_worker** — loops `manage.py sync_once` (push transactions up / pull config down).
- **reserve_worker** — loops `manage.py reserve_worker` (heartbeat + fulfil online-booking relay jobs).

## Bring up a new agency
```
cd deploy/agency
cp .env.example .env          # then edit .env
docker compose build
docker compose run --rm web python manage.py bootstrap_from_master   # one-time seed
docker compose up -d
```
Verify on the master: `GET /api/v1/sync/status/` shows the agency **online**.
Full details + guardrails: `docs/sync-onboarding-runbook.md`.

## Notes
- The **master** keeps its current cloud deployment (`backend/Dockerfile`,
  gunicorn) with `SYNC_ENABLED=1 NODE_ROLE=master SYNC_TOKEN=…`.
- All instances must run the **same migrations** (version-parity guard → 409 on
  skew; migrate the master first, then agencies).
- Serve the built Angular front-end however you already do (WhiteNoise/static or a
  separate web server); it is unchanged by sync.
- This template intentionally omits TLS/reverse-proxy and secrets management —
  wire those to your host (Caddy/Traefik/nginx + your secrets store).
