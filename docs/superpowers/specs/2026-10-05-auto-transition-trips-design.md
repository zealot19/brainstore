# Auto start/stop trips — Design

**Date:** 2026-10-05
**Status:** Approved design, pending spec review
**Author:** shimi (with Claude)

## 1. Goal

Operators should not have to manually start (depart) and stop (complete) every
trip. A company-level setting turns on automatic lifecycle management: a trip
auto-**departs** when it gets close enough to its scheduled departure, and
auto-**completes** once it is far enough past its scheduled arrival — using the
delays already configured in Trip settings.

## 2. Current state (grounding)

- **`VoyagesSettings`** (`voyages_config`, company-scoped) already has
  `departure_lead_hours` (default 24) and `arrival_grace_hours` (default 48).
- **`trip_services.depart_trip(trip, *, user, lead_hours=24)`**: PENDING → DEPARTED.
  Guards: status must be `PENDING`; raises "Trop tôt" if
  `(scheduled_departure - now) > lead_hours`. Side effects: sets `actual_departure`,
  flips the vehicle (if any) to `ON_MISSION`, cascades ready/loaded parcels to
  in-transit.
- **`trip_services.complete_trip(trip, *, user)`**: DEPARTED → COMPLETED. Sets
  `actual_arrival`, frees the vehicle, logs odometer, cascades parcels to arrived.
- Trip statuses: `draft, pending, departed, completed, suspended, cancelled`.
- **No scheduler exists.** The only periodic worker loops are the agency
  `sync_once` (~90s) and `reserve_worker` loops (see `agency/docker-compose*.yml`).
- Both services accept `user`; `updated_by` is nullable, so a system actor
  (`user=None`) is acceptable.

## 3. Decisions (locked)

- **Units:** reuse the existing `departure_lead_hours` / `arrival_grace_hours`
  (hours). No new duration fields.
- **Toggle:** add one boolean `auto_manage_trips` (default `False`) to
  `VoyagesSettings` — opt-in per company.
- **Mechanism:** an idempotent management command run every cycle from the
  existing worker loop (works offline per-agency); status guards make repeated and
  multi-node runs safe.

## 4. Backend

### 4.1 Model + migration
Add to `VoyagesSettings`:
```python
auto_manage_trips = models.BooleanField(_("démarrage/arrêt auto des voyages"), default=False)
```
One migration (field add, default False — no data backfill needed; existing
companies stay manual until they opt in).

### 4.2 Service — `auto_transition_trips`
New function `apps/voyages_trips/services/auto_transition.py::run_auto_transitions(now=None) -> dict`:
- `now = now or timezone.now()`.
- Iterate companies that have `VoyagesSettings.auto_manage_trips = True`
  (`VoyagesSettings.objects.filter(auto_manage_trips=True)`), carrying each
  company's `departure_lead_hours` / `arrival_grace_hours`.
- **Auto-depart:** for `Trip.objects.filter(company=…, is_deleted=False,
  status=PENDING, scheduled_departure__lte = now + lead_hours)` — i.e. the trip is
  within its lead window — call `depart_trip(trip, user=None,
  lead_hours=lead_hours)`. (The `__lte now+lead` filter guarantees the service's
  "too early" guard never triggers.)
- **Auto-complete:** for `Trip.objects.filter(company=…, is_deleted=False,
  status=DEPARTED, scheduled_arrival__lte = now - grace_hours)` call
  `complete_trip(trip, user=None)`.
- Each transition wrapped so one failing trip (e.g. an eligibility/parcel error)
  is logged and skipped, not fatal to the batch. Return counts
  `{"departed": n, "completed": m, "skipped": k}`.
- Idempotent: only `PENDING`/`DEPARTED` trips are selected; a second run in the
  same window finds nothing to do.

### 4.3 Management command
`apps/voyages_trips/management/commands/auto_transition_trips.py`: thin wrapper that
calls `run_auto_transitions()` and prints the counts. Safe to run on any node and
on every cycle.

### 4.4 Worker-loop wiring
Add the command to the existing worker loop so it fires each cycle, next to
`sync_once`, in the agency compose worker command(s)
(`agency/docker-compose.local.yml`, `agency/docker-compose.yml`, and the
`deploy/agency/*` variants) and document running it on the online master too
(cron or its own loop). Example (agency worker command):
```
sh -c 'while true; do python manage.py sync_once || true; python manage.py auto_transition_trips || true; sleep ${SYNC_INTERVAL:-90}; done'
```
`|| true` keeps a transition error from killing the sync loop. The ~90s cadence is
fine (the lead/grace windows are in hours).

### 4.5 Sync considerations
`Trip` is a synced model. A trip auto-departed on one node syncs to the others via
the normal `sync_once` push/pull; if two nodes transition the same trip in the same
window, both produce the same status and LWW reconciles — no divergence. The new
`VoyagesSettings.auto_manage_trips` field syncs normally (settings are syncable).
Schema fingerprint changes (one migration) — all instances rebuild from the same
commit before syncing, per the existing deployment rule.

## 5. Frontend

The Voyages settings screen (`voyages-config/settings`) already edits
`VoyagesSettings`. Add the `auto_manage_trips` toggle there (a checkbox), with a
short helper noting it uses the existing "délai de démarrage (h)" /
"délai d'arrêt (h)" values. The two hour fields already exist on that form — no new
inputs. The settings serializer must include `auto_manage_trips` (confirm the field
list at build).

## 6. Testing

**pytest** (`apps/voyages_trips/`):
- Company with `auto_manage_trips=True`: a PENDING trip whose
  `scheduled_departure` is within `departure_lead_hours` → becomes DEPARTED after
  `run_auto_transitions()`; a PENDING trip still further out than the lead → stays
  PENDING.
- A DEPARTED trip whose `scheduled_arrival` is older than `arrival_grace_hours`
  → becomes COMPLETED; one not yet past grace → stays DEPARTED.
- `auto_manage_trips=False` → nothing transitions.
- Idempotent: running twice yields the same state (second run transitions 0).
- A DRAFT trip is never auto-started (only PENDING).

**Baseline:** the known ~14-red master pytest baseline stays the baseline; no new
reds.

## 7. Non-goals / notes

- Auto-transition does not auto-**submit** DRAFT trips — a trip must be submitted
  (PENDING) before it can auto-depart. (Submission stays a human/explicit step.)
- No new duration fields; hours reused as decided.
- Suspended/cancelled trips are untouched by the job.
- A trip with no vehicle still auto-departs (vehicle is optional on trips).
