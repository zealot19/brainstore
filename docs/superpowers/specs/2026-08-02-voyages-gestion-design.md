# Gestion Voyages — Design Spec

**Date:** 2026-08-02
**Sub-project:** Gestion Voyages (sub-project 2 of the Voyages module)
**Branch:** `feature/voyages-gestion` (stacked on `feature/voyages-config`, which is a PR under review — not yet on `origin/master`)
**Source analysis:** "Passenger Transport Suite — Design Guide" (§5 Gestion Voyages, §5.2 status machine, §5.3 eligibility, §5.4 supporting models)

## Goal

Build the operational core of the Voyages module: **Trip** lifecycle management with the
**fleet-eligibility** cross-check. New self-contained `voyages_trips` Django app + a
« Voyages » Angular section. Consumes Config Voyages (routes, service points, seating
plans, fare classes, service patterns) and fleet (vehicles, drivers, documents, services).

## Guiding constraints (from the user)

1. **Do not modify or abandon** `treasury`, `tiers`, or the legacy `voyage`/`transport_config`/
   `ticketing`/`parcel` apps. Greenfield alongside them.
2. **Treasury/tiers owned by a collaborator** — no imports, no writes. Where a link would
   target them, leave it empty/deferred.
3. Commit as **shimi** (no Claude trailer).
4. French-first UI, in-app `info-banner`, Tabler `ti` icons, spaced `btn btn-sm` action buttons.
5. Verify via `manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke;
   `npx ng build`.

## Scope

**In scope:** `Trip` (+ snapshots), `TripStop`, `TripCrew`, `TripSeat`, the status machine,
vehicle eligibility & assignment, and the frontend to manage trips.

**Deferred to later sub-projects:**
- `Transfer` / transbordement — needs Booking/Consignments to have something to move.
- `TripCost` / `TripRevenue` P&L — posts to treasury (collaborator-owned).
- Booking-driven seat transitions (HELD/SOLD), no-show handling, manifests.

## Architecture

New app **`apps/voyages_trips`** (label `voyages_trips`; distinct from dormant `voyage`).
Class-based `APIView`, `IsInstitutionAdmin`, selectors/services packages, `BaseModel`
(UUID pk, soft-delete, audit). Import direction: `voyages_trips` → `voyages_config`,
`fleet`, `core`. Nothing imports it back. No treasury/tiers imports.

Trips are **company-scoped operational data** (always owned by a company — `company` FK
non-null), not the global-default config pattern. Scoping via `request.user.company`
(superuser: `company_id` query param), not `resolve_company_or_global`.

## Component 1 — Trip

**`Trip`** (`voyages_trips.models.trip`)
- `company` FK → `system_config.Company` (CASCADE, non-null)
- `number` CharField (from `core.services.sequence_service.next_number("VOY")`; unique per company)
- `code` CharField (blank, optional free code)
- `route` FK → `voyages_config.Route` (PROTECT)
- `service_pattern` FK → `voyages_config.ServicePattern` (SET_NULL, null — prefill source)
- `fare_class` FK → `voyages_config.FareClass` (PROTECT — snapshot of class in force)
- `vehicle` FK → `fleet.Vehicle` (SET_NULL, null until assigned)
- `seating_plan` FK → `voyages_config.SeatingPlan` (SET_NULL, null — snapshot set on vehicle assignment)
- `scheduled_departure`, `scheduled_arrival` (DateTimeField)
- `actual_departure`, `actual_arrival` (DateTimeField, null)
- `origin`, `destination` FK → `voyages_config.ServicePoint` (PROTECT — snapshot of route endpoints, overridable at creation)
- `status` CharField (enum, below), default DRAFT
- `is_delayed` BooleanField (default False — a marker, not a status)
- `delayed_until` (DateTimeField, null), `delay_reason` (TextField, blank)
- `notes` (TextField, blank)

Snapshots (`fare_class`, `seating_plan`, `origin`, `destination`) are deliberate so a later
config edit doesn't rewrite a running/printed trip.

### Status enum & machine

`DRAFT, PENDING, DEPARTED, COMPLETED, SUSPENDED, CANCELLED`.

```
DRAFT ──► PENDING ──► DEPARTED ──► COMPLETED
            │  ▲          │
   SUSPENDED┘  │          └──► CANCELLED
            └──► CANCELLED
```

Guards, all in `voyages_trips.services`:
- **DRAFT → PENDING** (`submit_trip`): vehicle assigned, `seating_plan` resolved, TripSeat
  materialised, crew has ≥1 driver. Else `ApplicationError`.
- **PENDING → DEPARTED** (`depart_trip`): now within `departure_lead_hours`
  (`VoyagesSettings`) of `scheduled_departure`; vehicle eligibility re-checked; sets
  `actual_departure = now`; vehicle.status → `on_mission`.
- **DEPARTED → COMPLETED** (`complete_trip`): sets `actual_arrival = now`; writes a
  `fleet.OdometerLog` from `Route.distance_km` (fleet is ours); vehicle.status → `available`.
- **PENDING → SUSPENDED** (`suspend_trip`) / **SUSPENDED → PENDING** (`resume_trip`).
- **→ CANCELLED** (`cancel_trip`) from DRAFT/PENDING/SUSPENDED: releases TripSeat rows
  (delete/reset), vehicle.status → `available` if it was held.
- **`mark_delayed`**: sets `is_delayed`, `delayed_until`, `delay_reason`; status unchanged
  (stays PENDING). `clear_delay` unsets it.

## Component 2 — Vehicle eligibility

`voyages_trips.selectors.eligible_vehicles(company, *, window_start, window_end, exclude_trip=None)`
returns a `Vehicle` queryset. `voyages_trips.services.assign_vehicle(trip, vehicle, *, user)`
raises `VehicleNotEligible(reason)` (subclass of `ApplicationError`) when any **block** holds,
else assigns and returns a list of **warnings**.

Blocks:
- `vehicle.status != "available"` or `vehicle.is_active is False`
- no active `VehicleSeatingAssignment` for the vehicle valid on the trip date
  (`valid_from <= date <= valid_to or valid_to is null`, `is_active`)
- an open `fleet.Service` (status `planned`/`in_progress`, not deleted) on the vehicle whose
  `planned_date` falls within the trip window (date range of scheduled_departure..arrival)
- another `Trip` (status DRAFT/PENDING/DEPARTED) on the same vehicle whose
  scheduled window overlaps this trip's window (excluding this trip)
- any `TripCrew` driver on the trip with `license_expiry < scheduled_arrival.date()`

Warnings (assignment still allowed):
- a `fleet.VehicleDocument` with `expiry_date` before `scheduled_arrival.date()` or within
  `document_alert_days` (`VoyagesSettings`).

`assign_vehicle` also: snapshots `trip.seating_plan` from the vehicle's active
`VehicleSeatingAssignment`, then materialises TripSeat (Component 4).

## Component 3 — TripStop & TripCrew

**`TripStop`** — `trip` FK (CASCADE, related_name `stops`), `service_point` FK (PROTECT),
`sequence`, `scheduled_arrival` (DateTimeField, null), `actual_arrival` (DateTimeField, null),
`boarded_count` (int default 0), `alighted_count` (int default 0).
`unique_together (trip, sequence)`. **Copied from `RouteStop`** at trip creation;
`scheduled_arrival` computed as `trip.scheduled_departure + offset_from_departure` when set.

**`TripCrew`** — `trip` FK (CASCADE, related_name `crew`), `driver` FK →
`fleet.ExternalDriver` (PROTECT), `role` (DRIVER / CONVOYEUR / CONTROLEUR), `boarded_at`
(DateTimeField, null). A trip needs ≥1 DRIVER-role crew to leave DRAFT.

## Component 4 — TripSeat

**`TripSeat`** — `trip` FK (CASCADE, related_name `seats`), `seat_number`, `row`, `column`,
`seat_type`, `status` (AVAILABLE / HELD / SOLD / BLOCKED), `held_until` (DateTimeField, null),
`booking_id` (**UUIDField, null** — placeholder; Booking wires a real link later without a
migration dependency). `unique_together (trip, seat_number)`.

**Materialisation** (`materialise_seats(trip)`), called from `assign_vehicle` once
`seating_plan` is set: delete existing TripSeat rows, then for each `PlanSeat` of the
snapshot plan create a TripSeat — `is_sellable` seats → `AVAILABLE`, non-sellable
(driver/crew) → `BLOCKED`. Enables the seat counter and atomic locking later.

Seat operations in this sub-project: **block/unblock** only (AVAILABLE ⇄ BLOCKED).
HELD/SOLD transitions and `select_for_update` locking arrive with Booking.

## API

Under `/api/v1/voyages/trips/`, `IsInstitutionAdmin`, company-scoped:
- `trips/` (GET list, POST create), `trips/<id>/` (GET/PATCH/DELETE)
- `trips/<id>/eligible-vehicles/` (GET)
- `trips/<id>/assign-vehicle/` (POST `{vehicle_id}` → assign + warnings)
- `trips/<id>/crew/` (GET/POST), `trips/<id>/crew/<crew_id>/` (DELETE)
- `trips/<id>/seats/` (GET), `trips/<id>/seats/block/` & `trips/<id>/seats/unblock/`
  (POST `{seat_ids: []}`)
- `trips/<id>/stops/` (GET)
- Lifecycle (POST): `submit/`, `depart/`, `complete/`, `cancel/`, `suspend/`, `resume/`,
  `mark-delayed/` (`{delayed_until, delay_reason}`), `clear-delay/`
- Registered in `api/v1/router.py` as `path("voyages/trips/", include("apps.voyages_trips.urls"))`.

Create payload: `route_id`, `fare_class_id`, `scheduled_departure`, `scheduled_arrival`,
optional `service_pattern_id`, optional `origin_id`/`destination_id` (default from route),
`code`, `notes`. On create: snapshot origin/destination, snapshot fare_class, copy TripStops,
assign number.

## Frontend — « Voyages » section

Standalone Angular components, French-first, `info-banner`, Tabler icons, spaced action
buttons. New `models/voyages.models.ts`, `services/voyages/*.service.ts`, `pages/voyages/…`,
`api.config` `VOYAGES` block, routes, sidebar « Voyages » group.

- **Voyages** list — number, route, vehicle plate, scheduled departure, status badge,
  `is_delayed` marker, seat counter (sellable available/total), filters by status.
- **Nouveau Voyage** modal/form — route (dropdown), optional service pattern (prefills
  fare class + times), fare class, scheduled departure/arrival, origin/destination
  (default route endpoints), code, notes.
- **Trip detail** page —
  - Info header + status + delayed marker.
  - **Vehicle assignment**: dropdown fed by `eligible-vehicles`; on assign, show returned
    document **warnings**; displays resolved seating plan.
  - **Crew**: add driver (dropdown of fleet ExternalDrivers) + role, remove.
  - **Seat map**: read-only grid reusing the seat-map rendering (colour by type/status),
    with block/unblock.
  - **Lifecycle buttons** by status: Soumettre (submit), Départ, Clôturer, Suspendre/
    Reprendre, Annuler, Mettre en retard.
- No treasury/tiers dropdowns needed here.

## Out of scope (later)

Transfer/transbordement, Trip P&L (treasury), Booking (seats HELD/SOLD, resolution,
loyalty), Consignments, station-scoped ticket-number formatting (kernel enhancement).

## Verification

`manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke (create trip →
copy stops → assign eligible vehicle → materialise seats → run lifecycle), `npx ng build`.
Commits as shimi.
