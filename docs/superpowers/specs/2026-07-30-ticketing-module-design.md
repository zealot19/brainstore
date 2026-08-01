# Ticketing Module (Phase 1) — Design

**Date:** 2026-07-30
**Branch:** `feature/ticketing-ui` (off `feature/transport-voyage-ui`)
**Author:** shimi + Claude

## 1. Goal

Build the Angular admin UI for the existing `ticketing` backend
(`/api/v1/ticketing/…`), segment-aware from the start, following the
fleet/transport/voyage pattern. Phase 1 covers day-to-day selling and boarding.
The **ticket template studio** and **server-side template→PDF** are explicitly
**Phase 2** (separate spec).

## 2. Decisions (locked)

- **Full core module now:** Dashboard, Customers, Bookings (+ segment + seat),
  Booking detail (ticket + luggage), Boarding (manifest + scan). Studio deferred.
- **① Seat selection = interactive seat map.** Extend the shared
  `SeatMapComponent` with a selectable mode that greys out taken seats.
- **② Ticket printing = client-side print view.** A print-optimised Angular
  ticket component with the QR rendered in-browser (`angularx-qrcode`), printed
  via the browser (Ctrl/Cmd-P → Save as PDF). No backend PDF library in Phase 1.
- **③ QR scan = manual code-entry box** (works with USB/keyboard-wedge
  scanners). Camera scanning deferred.
- **Capacity is trip-level (Option A)** and segment pricing already exist in the
  backend — unchanged.

## 3. Backend (already exists — no changes in Phase 1)

Endpoints under `/api/v1/ticketing/`:

- `bookings/stats/` → total, pending, confirmed, boarded, cancelled, no_show, revenue
- `bookings/scan/` (POST `{qr_code}`) → boards the passenger
- `customers/`, `customers/<id>/` — CRUD
- `bookings/`, `bookings/<id>/` — CRUD
- `bookings/<id>/confirm|board|cancel|no-show/` — status transitions
- `trips/<trip_id>/bookings/` — per-trip boarding manifest
- `bookings/<id>/luggage/`, `.../luggage/<id>/`, `.../luggage/<id>/status/`

Booking already carries `boarding_terminal`/`alighting_terminal` (segment) and
auto-issues a `Ticket` with a `qr_code` (UUID) + `ticket_number`.

## 4. Frontend structure (mirrors existing modules)

```
src/_api/
  config/api.config.ts         → add TICKETING endpoint group
  models/ticketing.models.ts   → Customer, Booking, Ticket, Luggage, BookingStats, ...
  services/ticketing/
    customer.service.ts
    booking.service.ts         → list/get/create + confirm/board/cancel/noShow/stats/scan/manifest
    luggage.service.ts
  pages/ticketing/
    ticketing.component.ts      → router-outlet wrapper
    dashboard/                  → stats tiles + recent bookings
    customers/                  → CRUD
    bookings/                   → list + filters + new-booking modal (segment + seat)
    booking-detail/             → summary + ticket (QR, printable) + luggage panel
    boarding/                   → trip picker → manifest + scan box
  pages/shared/seat-map/        → extend for selectable mode (see §6)
```

Wire routes in `pages.routes.ts`, path constants in `routes.ts`, menu block
« Billetterie » in `sidebar.service.ts`.

## 5. Screens

### 5.1 Dashboard (`/ticketing/dashboard`)
Stat tiles from `bookings/stats/`: total, pending, confirmed, boarded,
cancelled, no-show, and **revenue** (XAF). Plus a short list of recent bookings.

### 5.2 Customers (`/ticketing/customers`)
CRUD like fleet/brands. Fields: first_name*, last_name*, phone*, email,
id_type (CNI/passport/driver_license/other), id_number, date_of_birth, notes.
Search by name/phone.

### 5.3 Bookings (`/ticketing/bookings`)
- **List:** reference, customer, trip (from→to city + departure), segment
  (boarding→alighting), seat, amount, status badge. Filters: status, trip.
- **New-booking modal (the core flow):**
  1. Choose **trip** (upcoming, not departed/arrived/cancelled).
  2. Choose **customer** — searchable select, with a "**+ Nouveau client**"
     inline option that creates one via `customer.service` then selects it.
  3. Choose **segment** — boarding/alighting from the trip route's points
     (`transport/routes/<id>/points/`); default = full route.
  4. **Fare auto-suggest:** query `transport/fares/` filtered by the trip route +
     segment + category/fare_class + passenger_type; prefill `amount_paid`
     (editable). Passenger type selectable.
  5. **Seat:** interactive seat map (§6) if the trip is not free-seating; else no
     seat. Taken seats come from the trip manifest.
  6. Save → `bookings/` POST (sends trip_id, customer_id, boarding/alighting
     terminal ids, passenger_type, seat_number, fare_id, amount_paid). Ticket is
     auto-issued by the backend.
- **Row actions:** view (→ detail), board, cancel, no-show (gated by status).

### 5.4 Booking detail (`/ticketing/bookings/:id`)
- Summary: reference, status, customer, trip, segment, seat, amount.
- **Ticket card:** ticket_number, **QR code** (rendered from `ticket.qr_code`),
  and a **"Imprimer"** button that opens a print-optimised ticket layout
  (CSS `@media print`) → browser Save-as-PDF. Fields substituted from booking
  data (company, customer, trip, segment, seat, price, QR).
- **Luggage panel:** table (tag, description, weight, status) with add/remove and
  a status dropdown (checked_in → loaded → delivered / lost).
- Status actions (confirm/board/cancel/no-show) as available.

### 5.5 Boarding (`/ticketing/boarding`)
- Pick a **trip**; load its **manifest** (`trips/:id/bookings/`): passenger,
  segment, seat, status.
- **Scan box:** a focused text input; on submit call `bookings/scan/` with the
  entered `qr_code` → shows pass/fail toast and refreshes the manifest. A
  keyboard-wedge scanner types the code and hits Enter.
- Per-row **board** button as a manual fallback.

## 6. Shared `SeatMapComponent` — selectable mode

Extend (backward-compatible) with:
- `@Input() selectable = false`
- `@Input() occupied: string[] = []` (taken seat numbers)
- `@Input() selected: string | null = null`
- `@Output() seatPicked = new EventEmitter<string>()`

Display-only behaviour is unchanged when `selectable` is false. When true:
occupied seats render disabled/greyed, clicking a free seat emits its number and
highlights it. Seat numbers are the sequential labels already rendered (1..N),
matching the string stored in `Booking.seat_number`.

## 7. Dependency

Add `angularx-qrcode` (Angular-compatible QR component) to render the ticket QR
in-browser. No other new dependencies.

## 8. Out of scope (Phase 2+)

- **Ticket template studio** (user-designed templates) and **server-side
  template→PDF** rendering.
- Camera-based QR scanning.
- Online/public booking (separate `online_booking` module).
- Leg-based seat inventory (Option B).

## 9. Sequencing

1. Plumbing: `TICKETING` endpoints, `ticketing.models.ts`, three services.
2. `SeatMapComponent` selectable mode.
3. Customers screen.
4. Bookings list + new-booking flow (segment + fare auto-suggest + seat map).
5. Booking detail (ticket + QR + print + luggage).
6. Boarding (manifest + scan).
7. Dashboard.
8. Wire routes + « Billetterie » menu; build & smoke-test.
