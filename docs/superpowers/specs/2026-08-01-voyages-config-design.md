# Config Voyages — Design Spec

**Date:** 2026-08-01
**Sub-project:** Config Voyages (sub-project 1 of the Voyages module)
**Branch:** `feature/voyages-config` (off `origin/master`)
**Source analysis:** "Passenger Transport Suite — Design Guide" (§4 Configuration Voyages)

## Goal

Build the **Config Voyages** module: the configurable reference data for the passenger
transport suite — network (towns, service points, routes, escales), seating plans (with a
visual editor), commercial reference data (fare classes, time slots, consignment
taxonomy), scheduling patterns, loyalty rules, and module settings. New self-contained
`voyages_config` Django app + a « Config Voyages » Angular section, mirroring the
« Config Flotte » pattern.

## Guiding constraints (from the user)

1. **Do not modify or abandon any existing module.** Leave `treasury`, `tiers`, and the
   legacy `voyage` / `transport_config` / `ticketing` / `parcel` apps **dormant and
   untouched**. This is greenfield alongside them.
2. **Treasury/tiers are owned by another collaborator.** Where a future selector would
   point at treasury or tiers/parties, render the **dropdown empty (no data)** so their
   module plugs in later without rework. (Config Voyages needs none of these directly.)
3. **Fresh, from `origin/master`.** Commit as **shimi** (no Claude trailer). Branch from
   `origin/master` going forward.
4. **Multitenancy = mirror Config Flotte:** every config row has a nullable `company` FK
   (`NULL` = global default, `X` = company-specific), per-scope uniqueness validated in the
   service layer, "Périmètre: Global/Spécifique" badge.
5. **Fare *amounts* are deferred** to the Pricing sub-project. Config Voyages builds the
   network so escale-based segment pricing is possible later, but stores no amounts.

## Architecture

New app **`apps/voyages_config`** (distinct label from the dormant `transport_config`).
Follows the established codebase patterns: class-based `APIView`, `IsInstitutionAdmin`,
selectors/services packages, `BaseModel` (UUID pk, soft-delete, audit, `is_active`),
`StandardResultsSetPagination`, standard response helpers, scoped-config CRUD +
bulk-delete factories (as in `apps/fleet/config_api`).

Import direction: `voyages_config` may import `core` and `fleet`; nothing imports it back.
No imports from treasury/tiers/parties.

## Component 1 — Network

**`Town` (Ville)** — `company` (nullable), `name`, `code` (blank), `region` (blank),
`is_active`. Created first; every service point belongs to a town.

**`ServicePoint` (Point de service)** — `company`, `town` FK (PROTECT), `code`, `name`,
`is_station` (bool), `station_kind` (TERMINAL / AGENCY; meaningful only when
`is_station=true`, blank otherwise), `latitude` (nullable), `longitude` (nullable),
`is_active`. A *station* is a service point where the company has a terminal/agency
(sells tickets, will host a cashbox, drives ticket numbering). A non-station service point
is a physical roadside stop.

**`Route` (Trajet)** — `company`, `code` (e.g. BTA-AYOS), `label`, `origin` FK ServicePoint
(PROTECT), `destination` FK ServicePoint (PROTECT), `distance_km` (nullable),
`estimated_duration` (DurationField, nullable), `is_active`.
`clean()` enforces `origin.is_station and destination.is_station`, and origin != destination.

**`RouteStop` (Escale)** — `route` FK (CASCADE, related_name `stops`), `service_point` FK
(PROTECT, any service point — station or not), `sequence` (PositiveInteger),
`distance_from_origin_km` (nullable), `offset_from_departure` (DurationField, nullable).
`unique_together (route, sequence)`; ordered by `sequence`. Rationale: a service point sits
on many routes at different positions/distances, so ordering/distance is a property of
`(route, service_point)`, not of the service point. Not a separate entity — just the ordered
membership. Endpoints stay explicit FKs on `Route`; `RouteStop` holds only intermediate
escales. Drives manifests and future segment pricing.

## Component 2 — Seating

**`SeatingPlan` (Plan de bus)** — `company`, `code` (BUS70), `name`, `rows`
(PositiveSmallInt), `columns` (PositiveSmallInt), `total_seats` (derived: count of sellable
PlanSeats, stored for display), `is_active`. Reusable template, not owned by a vehicle.

**`PlanSeat`** — `plan` FK (CASCADE, related_name `seats`), `seat_number` (char),
`row` (int), `column` (int), `seat_type` (STANDARD / VIP / DRIVER / CREW, default STANDARD),
`is_sellable` (bool, default true). `unique_together (plan, seat_number)` and
`unique_together (plan, row, column)`.

**`VehicleSeatingAssignment`** — `company`, `vehicle` FK → `fleet.Vehicle` (PROTECT),
`seating_plan` FK (PROTECT), `valid_from`, `valid_to` (nullable), `is_active`. The only place
Config Voyages references fleet; keeps re-fit history (a vehicle can change plan over time).

**Visual editor (frontend):** a grid seat-map builder. The user sets `rows × columns`; a
live bus-layout canvas renders cells. Clicking an empty cell places a seat (auto-numbered,
editable); clicking a seat cycles/opens its type (**colour-coded**: standard / VIP / driver
/ crew) and a sellable toggle; empty cells are aisles. A live counter shows the sellable
total. Save persists `PlanSeat` rows in one request. The same rendering later drives the
per-trip seat map (TripSeat) in Gestion Voyages.

## Component 3 — Commercial reference & consignment taxonomy

**`FareClass` (Catégorie tarifaire)** — `company`, `code` (VIP, CLASS), `name`, `rank` (int),
`color` (char, hex), `is_active`. Commercial class; distinct from physical `PlanSeat.seat_type`.

**`TimeSlot` (Plage horaire)** — `company`, `code`, `label` ("00h00–05h00"), `start_time`,
`end_time`, `ordering` (int), `is_active`.

**`ConsignmentNature` (Nature des colis)** — `company`, `code`, `name`, `is_fragile` (bool),
`requires_declaration` (bool), `is_prohibited` (bool), `is_active`.

**`ConsignmentType` (Type de colis)** — `company`, `code` (C50K), `label`
("colis ≤ 50 Kg"), `nature` FK (PROTECT), `max_weight_kg` (nullable), `max_volume_m3`
(nullable), `applies_to` (BAGGAGE / PARCEL / BOTH, default BOTH), `is_active`.
Consumed by the later Bagages/Colisage module; built now per the user's request for a
complete Config Voyages.

## Component 4 — Scheduling

**`ServicePattern` (Planification)** — `company`, `route` FK (PROTECT), `time_slot` FK
(PROTECT), `fare_class` FK (PROTECT), `default_seating_plan` FK (SET_NULL, nullable),
seven weekday booleans (`monday`…`sunday`), `valid_from`, `valid_to` (nullable),
`is_active`. No trip generation. It prefills the Nouveau Voyage form and powers the
`(route, date, time_slot, vehicle) → Trip` resolution used later by booking/consignments.
Weekdays as 7 booleans (DB-agnostic on SQLite; maps to checkboxes).

## Component 5 — Fidélité (loyalty rule)

**`LoyaltyRule` (Règle de fidélité)** — `company`, `points_per_one_way` (default 1),
`points_per_round_trip` (default 2), `reward_threshold` (points earning a free ticket,
default 10), `reward_label` ("1 billet gratuit"), `valid_from`, `valid_to` (nullable),
`is_active`. In the user's terms: after `reward_threshold` qualifying voyages/points the
passenger earns a free ticket. Runtime loyalty **accounts/movements** are deferred to the
Booking sub-project (they depend on customers/parties = collaborator territory).

## Component 6 — Settings

**`VoyagesSettings`** — one row per company (singleton per tenant), typed fields:
`departure_lead_hours`, `arrival_grace_hours`, `ticket_expiry_days`, `shift_duration_hours`,
`document_alert_days`, `archive_delay_days`, `auto_print_default` (bool),
`sms_notification_default` (bool). Edited on a single settings screen (get-or-create per
company), not a list.

## API

Under `/api/v1/voyages/config/`, one resource per model, mirroring `apps/fleet/config_api`:
- Generic scoped list/create, detail (get/patch/delete), and `bulk-delete` for the simple
  reference tables (Town, ServicePoint, FareClass, TimeSlot, ConsignmentNature,
  ConsignmentType, LoyaltyRule).
- **Route** + nested escales: `routes/`, `routes/<id>/`, `routes/<id>/stops/`,
  `routes/<id>/stops/<stop_id>/` (ordered CRUD).
- **SeatingPlan** + seats: `seating-plans/`, `seating-plans/<id>/`,
  `seating-plans/<id>/seats/` (bulk replace of PlanSeat rows from the editor).
- **VehicleSeatingAssignment**: standard CRUD.
- **VoyagesSettings**: `settings/` (GET returns get-or-create; PATCH updates).
All `IsInstitutionAdmin`, company-scoped selectors (`Q(company_id=cid) | Q(company__isnull=True)`),
per-scope uniqueness in services.

## Frontend

New **« Config Voyages »** Angular section (standalone components, reactive forms, Bootstrap
modals, Tabler `ti` icons, config-fed dropdowns, French-first, in-app `info-banner`):
- Simple table screens: Villes, Points de service, Catégories tarifaires, Plages horaires,
  Natures de colis, Types de colis, Fidélité, Affectations de plan (VehicleSeatingAssignment).
- **Trajets** screen with the Route editor (origin/destination station selectors + ordered
  escales via "+ Ajouter escale").
- **Plans de bus** screen with the visual grid seat-map editor.
- **Paramètres Voyages** single settings screen.
- Sidebar section + routes + `api.config` VOYAGES_CONFIG block, added on `origin/master`'s
  files (fleet-style, additive).

## Out of scope (later sub-projects)

- Fare **amounts** / pricing rule engine (Pricing sub-project).
- Trips and trip management (Gestion Voyages sub-project).
- Bookings, loyalty accounts/movements, consignments (Booking & Consignments sub-projects).
- Any treasury/tiers/parties models (collaborator-owned).

## Verification

No test framework: `manage.py check`, `makemigrations --check`, `migrate` on a fresh DB,
shell smoke for scoped CRUD + Route/escale + SeatingPlan seat persistence; `npx ng build`
for frontend. Commits authored as shimi.
