# Transport-Config & Voyage — Frontend Design

**Date:** 2026-07-30
**Branch:** `feature/transport-voyage-ui` (off `feature/fleet-ui`)
**Author:** shimi + Claude

## 1. Goal

Build Angular admin interfaces for two backend modules, mirroring the pattern
already established for the `fleet` module:

- **`transport_config`** (`/api/v1/transport/…`) — reference data for the
  transport network: cities, terminals, routes, vehicle categories, fare
  classes, and fares.
- **`voyage`** (`/api/v1/voyage/…`) — scheduled trips (departures), their status
  workflow, and crew assignment.

Delivery order: **Transport Config first, then Voyage.**

## 2. Established pattern (from `fleet`)

Every screen replicates the fleet conventions exactly:

- **Components:** standalone Angular components under
  `src/_api/pages/<module>/<entity>/<entity>.component.{ts,html}`. Each is
  `imports: [CommonModule, FormsModule, ReactiveFormsModule]`, uses a
  `templateUrl`, and follows the list + search + stat-cards + Bootstrap-modal
  CRUD layout with the DreamsPOS template CSS classes.
- **Services:** one injectable per entity under
  `src/_api/services/<module>/<entity>.service.ts`, exposing
  `list/get/create/update/delete` plus any custom actions, using `HttpClient`
  and the endpoint constants.
- **Endpoints:** grouped constants (`TRANSPORT`, `VOYAGE`) in
  `src/_api/config/api.config.ts`.
- **Models:** typed interfaces in `src/_api/models/transport.models.ts` and
  `src/_api/models/voyage.models.ts`.
- **Routing:** lazy `loadComponent` children added to
  `src/app/features/pages/pages.routes.ts`, with path constants in
  `src/app/core/helpers/routes.ts`.
- **Menu:** collapsible menu blocks added to
  `src/app/core/service/sidebar/sidebar.service.ts`.
- **Language:** all UI text in French. Money in XAF.
- **Company scoping:** the backend infers the company from the logged-in user
  (non-superusers). The frontend does **not** send `company_id` and shows no
  company picker — identical to fleet.

## 3. Module A — Transport Config

Menu group **« Réseau transport »**, base path `/transport-config`.

### 3.1 Cities — `transport/cities/`
- **List:** name, code, region, country, active badge. Search box
  (`?search=`), active filter (`?is_active=`). Stat card: total cities.
- **Form (modal):** name*, code* (short, unique), region, country
  (default `Cameroon`), is_active.
- Write payload uses flat fields (`CityWriteSerializer`).

### 3.2 Terminals — `transport/terminals/`
- **List:** name, city (`city_name` / `city_code`), phone, active badge.
  Filters: `?city_id=`, `?is_active=`, `?search=`. Stat card: total terminals.
- **Form:** `city_id`* (dropdown, loaded from Cities service), name*, address,
  phone, gps_lat, gps_lng, is_active, notes.

### 3.3 Routes — `transport/routes/` (+ detail)
- **List:** name (auto `From → To`), from_city / to_city, distance_km,
  duration_minutes, active badge. Filters: `?from_city_id=`, `?to_city_id=`,
  `?is_active=`, `?search=`.
- **Create/edit modal:** `from_terminal_id`* and `to_terminal_id`* (terminal
  dropdowns, must differ — validated server-side and client-side), optional
  name, distance_km, duration_minutes, is_active, notes.
- **Route detail screen** (`/transport-config/routes/:id`):
  - Route summary header.
  - **Ordered stops panel** — table of intermediate stops (`routes/:id/stops/`)
    with add/edit/delete. Fields: `terminal_id`*, `stop_order`*,
    `arrival_offset_minutes`, `distance_from_start_km`. Ordered by
    `stop_order`.
  - **Fares panel** — read-only list of fares for this route
    (`routes/:id/fares/`), with a link to the Fares screen to add/edit.

### 3.4 Vehicle Categories — `transport/vehicle-categories/`
- **List:** name, total_seats, amenities (chips from `amenities_list`),
  free-seating badge. Search `?search=`. Stat card: total categories.
- **Form:** name*, total_seats*, seat_rows, seat_cols, aisle_after_col,
  has_back_row, free_seating, amenity toggles (wifi/ac/tv/usb/snack),
  description.
- **Live seat-map preview** — a shared `SeatMapComponent` renders a bus seat
  grid that updates live as rows/cols/aisle/back-row change, so the operator
  sees the resulting layout while editing. Read-only in this context (display
  only); built to be reused later for seat selection in ticketing.

### 3.5 Fare Classes — `transport/fare-classes/`
- **List:** name, description, active badge. Stat card: total classes.
- **Form:** name*, description, is_active.

### 3.6 Fares — `transport/fares/`
- **List:** route_name, vehicle_category_name, fare_class_name,
  passenger_type_display, amount + currency, active badge.
  Filters: `?route_id=`, `?vehicle_category_id=`, `?fare_class_id=`,
  `?passenger_type=`, `?is_active=`.
- **Create modal:** `route_id`*, `vehicle_category_id`*, `fare_class_id`*,
  `passenger_type`* (adult/child/student/senior), amount*, currency
  (default XAF), is_active. Dropdowns fed by the respective services.
- **Edit modal:** amount, currency, is_active only (`FareUpdateSerializer`).

## 4. Module B — Voyage

Menu group **« Voyages »**, base path `/voyage`.

### 4.1 Dashboard — `voyage/dashboard` (`trips/stats/`)
Stat tiles: total, upcoming, boarding, in-transit, arrived-today, cancelled.
Plus a short list of the next upcoming departures (from `trips/` filtered).

### 4.2 Trips — `voyage/trips/`
- **List:** reference, route (from_city → to_city), departure_datetime,
  vehicle / category, status badge (`status_display`), seats
  (`booked_seats` / `available_seats`). Filters: status, route, date range
  (whatever `trips/` query params support).
- **Create modal** (`TripWriteSerializer`): `route_id`*,
  `vehicle_category_id`*, `departure_datetime`*, optional `vehicle_id`,
  `fare_class_id`, `estimated_arrival_datetime`, free_seating, notes.
- **Edit modal** (`TripUpdateSerializer`): departure/arrival datetimes,
  vehicle, fare_class, free_seating, notes.
- **Status actions** (buttons gated by current status):
  - `board` → `trips/:id/board/`
  - `depart` → `trips/:id/depart/` (optional actual departure datetime)
  - `arrive` → `trips/:id/arrive/` (optional actual arrival datetime)
  - `cancel` → `trips/:id/cancel/`
  Status badge colours: scheduled=info, boarding=warning, departed=primary,
  arrived=success, cancelled=danger.

### 4.3 Trip detail — `voyage/trips/:id`
- Trip summary header (route, timing, vehicle, seats, status + actions).
- **Crew panel** (`trips/:id/crew/`): table of assigned staff with
  role (driver / conductor / supervisor / other) and notes. Add via modal
  (`user_id`* from users service, role, notes); remove per row.

## 5. Shared component

`SeatMapComponent` (`src/_api/pages/shared/seat-map/`): inputs `rows`, `cols`,
`aisleAfterCol`, `hasBackRow`, `totalSeats`; renders a numbered seat grid with
an aisle gap. Display-only for now; a later `selectable`/`occupied` mode will
serve ticketing. Kept dependency-free (plain CSS grid).

## 6. Out of scope

- Public trip search (`trips/search/`) — belongs to the online-booking module,
  not this internal admin build.
- Reservations / ticketing / seat *selection* logic (later module).
- Backend changes — endpoints already exist and are unchanged.

## 7. Delivery order

1. Config plumbing: `transport.models.ts`, `TRANSPORT` endpoints, services.
2. Transport screens in dependency order: Cities → Terminals → Routes (+detail)
   → Vehicle Categories (+seat map) → Fare Classes → Fares.
3. Wire routes + menu for Transport Config; verify build.
4. Voyage plumbing: `voyage.models.ts`, `VOYAGE` endpoints, services.
5. Voyage screens: Dashboard → Trips (+status actions) → Trip detail (+crew).
6. Wire routes + menu for Voyage; verify build.
