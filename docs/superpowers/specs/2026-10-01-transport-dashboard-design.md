# Transport Dashboard + Clients menu — Design

**Date:** 2026-10-01
**Status:** Approved design, pending spec review
**Author:** shimi (with Claude)

## 1. Goal

Replace the Transport sidebar's placeholder "Dashboard" with a real operations
dashboard:

1. **Trip cards** for a selected period (default: today, via a date-range picker).
   Each card shows the vehicle matricule (or trip code), the route (Trajet), the
   trip status, and — for tickets, baggage, and parcels — the count and the
   revenue, plus a grand total.
2. **Four monthly charts** (Billets, Bagages, Colis, Clients) below the cards,
   x-axis Jan→Dec, y-axis = count, each with its own year picker.
3. Re-add the **Clients** menu (the existing Passengers list with loyalty points),
   removed from the sidebar earlier.

## 2. Current state (grounding)

- **Trip** (`voyages_trips.Trip`): `number`, `code`, `vehicle` (FK `fleet.Vehicle`,
  optional), `route` (FK), `origin` (FK `voyages_config.ServicePoint`, carries
  `agency_id`), `scheduled_departure`, `status` (DRAFT/…); `__str__` uses
  `number` or `route.code + date`.
- **Ticket** (`voyages_booking.Ticket`): direct `trip` FK, `amount`, `status`
  (reserved/sold/boarded/**cancelled**/no_show), `passenger` FK, `created_at`.
- **Baggage** (`voyages_consignment.Baggage`): direct `trip` FK, `amount_received`,
  `status` (checked_in/loaded/delivered/**cancelled**), `created_at`.
- **Parcel** (`voyages_consignment.Parcel`): direct `trip` FK, `amount_received`,
  `status` (… /**cancelled**), `created_at`, `origin_point`/`destination_point`
  (carry `agency_id`).
- **Passenger** (`voyages_booking.Passenger`): `company`, `created_at` (BaseModel).
- **Agency scoping** helper exists: `apps.core.agency_scope.user_agency_ids(user)`
  (None = institution admin → all; else set of the user's agency UUIDs) and
  `scope_by_agency` / `scope_by_agency_q`.
- **Vehicle**: has a plate/matricule field (confirm exact attname at build:
  `grep -nE "plate|matricule|immatric|registration" backend/apps/fleet/models/*vehicle*.py`).
- **Frontend charts:** `ng-apexcharts` (2.4.0) + `apexcharts` available.
- **Clients list:** `PassengerListView` (`GET /api/v1/voyages/booking/passengers/`,
  perm `ticketing.customer.view`); frontend `passengers.component`
  (route `routes.vbPassengers = '/voyages-booking/passengers'`) already shows
  name/phone/ID + a loyalty-points modal. Only the sidebar entry was removed.

## 3. Decisions (locked)

- **Card counts:** all **non-cancelled** items attached to the trip.
- **Card revenue:** summed from the items' own amount fields — `Ticket.amount`,
  `Baggage.amount_received`, `Parcel.amount_received` (non-cancelled). This keeps
  count and revenue from one source and avoids round-trip booking / Transaction
  join ambiguity. `total_revenue` = tickets + baggage + parcels.
- **Trip scope:** trips whose `scheduled_departure` date ∈ the selected period;
  default period = **today**.
- **Chart metric:** **count only** (y = number).
- **Chart date basis:** item `created_at` month (sale/registration); clients =
  `Passenger.created_at`.
- **Agency scope:** scope to the user's agencies (institution admins see all) for
  both cards and charts.
- **Chart years:** **per-chart** year picker (4 independent fetches).
- **Card header:** vehicle matricule if present, else trip `code` (else `number`).

## 4. Backend (`apps/voyages_trips`)

New module `apps/voyages_trips/dashboard/` with a selector + two API views, wired
into the voyages URL conf (prefix `/api/v1/voyages/`). Permission:
`voyage.trip.view` (+ `HasModulePermission`); module gating already covers
`voyage`.

### 4.1 Agency scoping
A trip belongs to an agency via `trip.origin.agency_id`. For tickets/baggage/
parcels we scope by their trip's origin agency (join `trip__origin__agency_id`).
`user_agency_ids(user)` → None means no filter (admin).

### 4.2 `GET /voyages/dashboard/trips/?date_from=YYYY-MM-DD&date_to=YYYY-MM-DD`
- Defaults: both = today (local date) when omitted.
- Base queryset: `Trip.objects.filter(is_deleted=False, company=…,
  scheduled_departure__date__range=(date_from, date_to))`, agency-scoped on
  `origin__agency_id`, `select_related("vehicle", "route", "origin")`,
  ordered by `scheduled_departure`.
- Aggregates computed **without N+1** using conditional aggregation on the related
  sets (filtered to exclude cancelled). Approach: per-model grouped aggregates
  keyed by `trip_id`, merged in Python:
  - Tickets: `Ticket.objects.filter(trip__in=trips, is_deleted=False)
    .exclude(status="cancelled").values("trip").annotate(c=Count("id"),
    r=Sum("amount"))`
  - Baggage: same shape, `Sum("amount_received")`, exclude `cancelled`.
  - Parcels: same shape, `Sum("amount_received")`, exclude `cancelled`.
- Response: `success_response({ "date_from", "date_to", "trips": [ {
  "id", "header" (matricule|code|number), "route_label", "status", "status_display",
  "scheduled_departure",
  "tickets_count", "tickets_revenue",
  "baggage_count", "baggage_revenue",
  "parcels_count", "parcels_revenue",
  "total_revenue" } ] })`.

### 4.3 `GET /voyages/dashboard/series/?year=YYYY&metric=tickets|baggage|parcels|clients`
- Default `year` = current year; default `metric` = `tickets`.
- Returns a 12-length integer array (Jan→Dec) of **counts** for the metric,
  company- and agency-scoped, for that year:
  - `tickets`: Ticket, `created_at__year=year`, exclude cancelled, agency via
    `trip__origin__agency_id`.
  - `baggage`: Baggage, same.
  - `parcels`: Parcel, `created_at__year=year`, exclude cancelled, agency via
    `trip__origin__agency_id` (parcels always have a trip? parcels may have null
    trip before assignment — scope by `agency_id` directly on Parcel, which is set
    at registration; and for null-trip parcels still count them by their own
    agency). Use `Parcel.agency_id` for scoping (origin agency A) to avoid missing
    unassigned parcels.
  - `clients`: Passenger, `created_at__year=year`, company-scoped. Passengers have
    no agency dimension → for agency-scoped (non-admin) users, count passengers
    who have at least one ticket on a trip of the user's agencies that year
    (distinct passenger via `tickets__trip__origin__agency_id`); admins count all
    new passengers. (Keeps "clients" meaningful per agency.)
- Response: `success_response({ "year", "metric", "data": [12 ints] })`.
- One `metric` per request (frontend issues 4 calls, each with its own year).

### 4.4 Selector module
`apps/voyages_trips/dashboard/selectors.py`: `trip_cards(company, user, date_from,
date_to) -> list[dict]` and `monthly_series(company, user, year, metric) ->
list[int]`. Views are thin wrappers. Keep the agency-scope joins in the selector.

## 5. Frontend

### 5.1 Route + component
- New standalone `TransportDashboardComponent` at
  `src/_api/pages/voyages-dashboard/transport-dashboard.component.{ts,html,scss}`.
- Route `voyages/dashboard` added under the voyages children in `pages.routes.ts`;
  route constant `routes.voyagesDashboard = '/voyages/dashboard'`.
- Service `transport-dashboard.service.ts`: `loadTrips(dateFrom, dateTo)` and
  `loadSeries(year, metric)` hitting the two endpoints, reading the `{success,data}`
  envelope the app convention uses (map `res.data`).

### 5.2 Trip cards
- Top bar: a date-range picker (two date inputs or the template's range picker),
  default today→today; "Rafraîchir" triggers reload. Also show period summary
  (total trips, grand total revenue).
- Responsive card grid. Card layout:
  - Header row: **matricule/code** (bold) + status badge (colored by status).
  - Sub-header: route label (Trajet).
  - Three stat rows: Billets (count · revenue), Bagages (count · revenue),
    Colis (count · revenue).
  - Footer: **Total** (total_revenue), emphasized.
  - Reuse template card classes; money formatted with the app's currency pipe/format.

### 5.3 Charts
- Four `apx-chart` bar charts (Billets, Bagages, Colis, Clients). Each:
  - Its own year `<select>` (e.g. current year and a few back).
  - x categories Jan→Dec (localized month labels), y = count.
  - On year change → `loadSeries(year, metric)` for that chart only.

### 5.4 Sidebar wiring
- The Transport "Dashboard" item (currently → coming-soon) now points to
  `routes.voyagesDashboard`, perm `voyage.trip.view`, icon `chart-bar`.
- Launcher landing for package `transport` → `/voyages/dashboard` (was
  `/voyages/list`).
- Re-add **Clients** menu item in the Transport sidebar (under the Voyages/Trips
  group): `menuValue: 'Clients'`, `route: routes.vbPassengers`,
  `permission: 'ticketing.customer.view'`, icon e.g. `users`.

### 5.5 i18n
- Add a `trdash.*` namespace (fr/en/es/pt) for: title, period, refresh, billets,
  bagages, colis, total, clients, the 4 chart titles, year, and month labels
  (or reuse existing month labels if present). Sidebar "Clients" and "Dashboard"
  stay hardcoded like the other `menuValue`s (consistent with the sidebar), OR
  via nav label pipe if that's the pattern (match existing).

## 6. Testing

**Backend (pytest)** — `apps/voyages_trips/dashboard/tests/`:
- `trip_cards`: counts exclude cancelled; revenue sums the right amount fields;
  total = sum of three; header falls back matricule→code; only trips in the date
  window appear; default = today.
- Agency scope: a user of agency A sees only A's trips; institution admin sees all.
- `monthly_series`: correct month buckets for tickets/baggage/parcels/clients;
  count-only; year filter; agency scope; empty year → zeros.

**Frontend:** `ng build` succeeds; manual smoke (cards render for today, date
change reloads, charts render and react to year change, Clients menu opens the
passengers list).

**Baseline:** the known ~14-red master pytest baseline remains the baseline; no new
reds.

## 7. Non-goals / notes

- No new DB models or migrations — pure read/aggregation over existing tables.
- Revenue uses item amount fields (not Transaction) by decision; this can differ
  slightly from treasury "Recettes" (which reads Transaction) — acceptable for an
  operations dashboard; noted so it isn't mistaken for a bug.
- The real currency formatting/currency code reuses whatever the app already uses
  on money screens (confirm at build).
- Charter/other income is out of scope for the cards (tickets/baggage/colis only,
  as specified).
