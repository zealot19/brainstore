# Client PWA — Online Reservation — Design Spec

**Date:** 2026-09-05 (revised: re-pointed to the modern `voyages_*` stack)
**Status:** Approved (design), pending implementation
**Author:** shimi

## 1. Goal

Give clients a public, installable Progressive Web App to reserve and pay for
their trips online, without a staff account. The PWA is a new public front-end
that drives the `online_booking` backend channel — which is re-pointed onto the
live `voyages_*` stack the ERP actually uses.

## 2. Context & Motivation

The `online_booking` app (`/api/v1/online/`) already exposes an anonymous,
per-company booking channel with Campay Mobile Money payment (initiate → webhook
/ poll → confirm). However, it was built against a **legacy first-generation
stack** (`voyage`, `ticketing`, `transport_config`) that the live ERP no longer
populates. Operators manage trips, routes, fares, seats, and bookings in the
**modern `voyages_*` stack** (`voyages_trips`, `voyages_config`,
`voyages_pricing`, `voyages_booking`), which is what the staff back-office,
reporting, and treasury/recettes all use.

Therefore this project does two things:

1. **Re-point `online_booking`'s data + service layer onto the modern stack**, so
   online reservations use the real trips operators run, and confirmed online
   bookings appear in the staff booking list, reporting, and treasury/recettes
   (tagged `channel = online`). The Campay payment orchestration is reused.
2. **Build the client-facing front-end + PWA packaging** (the current Angular app
   is the JWT-guarded staff back-office; there is no public client UI).

### Modern-stack building blocks reused
- `voyages_booking.selectors.bookable_trips(company, …, travel_date)` — submitted
  (`status="pending"`), seat-materialised, future trips.
- `voyages_booking.selectors.seat_map(trip)` — `TripSeat` rows
  (`id, seat_number, row, column, seat_type, status`).
- `voyages_pricing.selectors.resolve_fare(company, route, origin, destination,
  fare_class, trip_type)` — the applicable `Fare` (amount + currency).
- `voyages_booking.services.create_booking(...)` — creates Passenger + Booking +
  Tickets and locks the `TripSeat`. Takes `buyer_spec`, `items`, and `user`.
- `Booking.Channel.ONLINE` — first-class online-sale channel.
- Network model: `Town → ServicePoint (is_station) → Route (origin/destination
  ServicePoint)`; `Trip` has `origin`/`destination` ServicePoints, one
  `fare_class`, and a `seating_plan` that materialises `TripSeat`s.

## 3. Scope

### In scope
- Re-point `online_booking` selectors, serializers, views, and the
  `OnlineBookingRequest` model onto the modern stack (new migration).
- Public, `AllowAny` endpoints: served-towns, trip search, trip detail (with
  single resolved price), seat map, initiate booking, request status. Campay
  webhook reused as-is.
- A new public feature area in the existing Angular project (`_api/pages/reserver/`):
  minimal layout, lazy-loaded, unguarded.
- Reservation flow: search → trip detail (price) → seat pick → passenger &
  payment → status/ticket.
- PWA packaging: manifest + service worker (production only), installable,
  offline ticket viewing.

### Out of scope (explicit v1 scope calls)
- **Single passenger per reservation** — one `TripSeat`, one ticket per request;
  multi-passenger is a future extension.
- **One-way to the trip's final destination** — no intermediate drop-point
  picker in v1 (the backend still resolves the fare via `destination_point`, and
  the model stores it, so adding a picker later is additive).
- **Mobile Money only (Campay)** — no reserve-now-pay-at-agency.
- **One fixed company** — `company_id` is a build config value; no institution picker.
- No client accounts / login / booking history beyond the request-UUID permalink.

## 4. Architecture

### 4.1 Placement (Angular)
- New route tree `angular/src/_api/pages/reserver/`, lazy-loaded from
  `app.routes.ts` as a top-level sibling **without** `authGuard`, with its own
  minimal public layout (logo header + footer, no back-office shell).
- `company_id` read from `environment.onlineCompanyId`.
- Reuses `apiUnwrapInterceptor`, `ToastService`, and the HTTP provider chain.
  `/online/` endpoints are `AllowAny` and return **bare** payloads (no
  `{success,data}` envelope).

### 4.2 Backend re-point (data + service layer)
`OnlineBookingRequest` FKs change:
- `trip`: `voyage.Trip` → `voyages_trips.Trip`
- add `trip_seat`: `voyages_trips.TripSeat` (nullable)
- add `destination_point`: `voyages_config.ServicePoint` (nullable; defaults to
  trip final destination)
- `booking`: `ticketing.Booking` → `voyages_booking.Booking`
- remove `fare`: `transport_config.Fare` (price resolved server-side, stored in
  the existing `amount` field)

`services.initiate_booking(...)` resolves the fare server-side via
`resolve_fare` (client no longer supplies `amount`/`fare_id`), stores the
`amount`, `trip_seat`, `destination_point`, then initiates Campay payment
(reused). `services.confirm_payment(...)` builds the real booking via
`voyages_booking.create_booking(company, trip_type="one_way",
outbound_trip=trip, return_trip=None, buyer_spec={name,phone,email},
items=[{passenger, destination_point_id, outbound_seat_id}], channel=ONLINE,
user=<system context>)` and links `booking_request.booking`.

`voyages_booking.create_booking` gains an optional `channel` parameter (default
`Booking.Channel.COUNTER`, additive) so the online path tags `channel=ONLINE`.

### 4.3 Data flow
```
[Towns]     GET  /online/<co>/towns/                       -> [{id,name}]
[Recherche] GET  /online/<co>/trips/?from_town_id&to_town_id&travel_date
                                                            -> [trip + price]
[Détail]    GET  /online/<co>/trips/<id>/                   -> trip + price + fare_class
[Sièges]    GET  /online/<co>/trips/<id>/seats/             -> [TripSeat {id,seat_number,row,column,status}]
[Paiement]  POST /online/<co>/trips/<id>/book/
              { passenger_name, passenger_phone, passenger_email?,
                seat_id, payment_method, payment_phone }     -> { id (UUID), status: pending }
[Statut]    GET  /online/requests/<uuid>/ (poll)            -> paid|failed|expired
                                          on paid: { ticket: {ticket_number, qr_code} }
[Webhook]   POST /online/webhooks/campay/  (Campay → confirm/fail)  [reused]
```
The status page is reached by permalink `/reserver/statut/<uuid>`; the UUID is
the secret.

## 5. Client Flow (screens)

1. **Recherche** — from-town, to-town (from `/towns/`), travel date → trip list;
   each result shows route, times, available seats, and the single price.
2. **Détail voyage** — times, service points, vehicle/amenities, available
   seats, and the price + a **Réserver** button (no fare picker).
3. **Sièges** — seat-map picker from `TripSeat` rows; a seat is selectable when
   `status == "available"`; selection yields a `seat_id` (UUID).
4. **Passager & paiement** — passenger name, phone, optional email, MoMo method
   (MTN/Orange) + payment phone → `POST …/book/` (amount resolved server-side).
5. **Statut / billet** — polls `GET /online/requests/<uuid>/` until
   `paid`/`failed`/`expired`; on `paid` shows ticket + **QR** (offline-cached),
   with clear pending (15-min countdown), failed, and expired states.

## 6. Backend Changes

### 6.1 Served-towns endpoint
`GET /online/<company_id>/towns/` (`AllowAny`) → `[{ "id": uuid, "name": str }]`,
distinct towns that are endpoints of the company's routes carrying bookable
trips, sorted by name. Unknown company → 404.

### 6.2 Search by town + single resolved price on trip payload
- Public search selector: `bookable_trips(company, travel_date=…)` filtered by
  `origin__town_id = from_town_id` and `destination__town_id = to_town_id`.
- `PublicTripSerializer` (rewritten for the modern `Trip`) exposes: `id`,
  `number`/`reference`, `status`, `scheduled_departure`, `scheduled_arrival`,
  `from_town`, `to_town`, `origin` `{id,name}`, `destination` `{id,name}`,
  `vehicle_category` name/amenities (from the trip's seating plan / vehicle),
  `fare_class` `{id,name}`, `total_seats`, `available_seats`, and `price`
  (+ `currency`) = `resolve_fare(origin→destination, fare_class, one_way).amount`
  or `null` when unpriced.

### 6.3 Seat map (modern)
`GET /online/<co>/trips/<id>/seats/` → `seat_map(trip)` serialised as
`[{ id, seat_number, row, column, seat_type, status }]` (+ `free_seating: false`
— the modern stack always materialises seats).

### 6.4 Model re-point + booking creation
As described in §4.2. `initiate_booking` resolves the fare server-side and
validates the seat is `available`; `confirm_payment` calls `create_booking(...,
channel=ONLINE)`. `create_booking` gains an optional `channel` param.

### 6.5 System-user handling
`create_booking` and `get_or_create_passenger` require a `user` (for
`created_by`). In the webhook/public context there is none. The implementation
will pass `user=None` if `BaseModel.created_by` and those services tolerate it;
otherwise it will resolve a dedicated per-company system user. The chosen
approach is verified against the code during implementation and documented in
the plan.

## 7. PWA Packaging

- Add `@angular/service-worker`, `ngsw-config.json`, `manifest.webmanifest`
  (via `ng add @angular/pwa`). SW registered **only in production**.
- Cache strategy scoped to avoid poisoning the staff app:
  - App shell + static assets: `prefetch` / `lazy+prefetch`.
  - `/api/v1/online/…` data: `freshness` (network-first, short cache).
  - **Never** cache authenticated staff `/api/v1/` endpoints.
  - The confirmed ticket/QR view cached for **offline viewing at boarding**.
- Manifest: name, icons, `theme_color`, `background_color`,
  `display: standalone`, `start_url` → `/reserver`.

## 8. Error Handling

- `apiUnwrapInterceptor` gains a fallback: bare `{detail: "..."}` bodies (used by
  `/online/`) keep their explicit French message (instead of a generic
  status-code message). Surfaced via toasts.
- Booking initiation errors (seat taken, trip not bookable, no fare) surface the
  backend's explicit French `ApplicationError` message.
- Status page distinguishes pending (countdown), failed, and expired, each with a
  next action.

## 9. Testing

- **Backend (pytest, TDD):**
  - served-towns endpoint: distinct town endpoints of bookable trips, `AllowAny`,
    unknown company → 404.
  - search by town + `price` on trip payload: correct trips for from/to town +
    date; `price` resolved from `resolve_fare`; `null` when unpriced.
  - seat map returns modern `TripSeat` rows.
  - `initiate_booking`: resolves fare server-side, rejects an unavailable seat,
    stores `trip_seat`/`destination_point`/`amount`.
  - `confirm_payment`: creates a `voyages_booking.Booking` with `channel=ONLINE`,
    a `Ticket`, and the `TripSeat` marked `sold`; links `booking_request.booking`.
  - `create_booking` still works for the existing counter path (channel default
    unchanged) — existing suite stays green.
- **Frontend:** `ng build` green; production build emits the service worker +
  manifest. SW only active in production.

## 10. Units & Boundaries

- `online_booking` (backend) — anonymous public channel; depends on
  `voyages_trips`/`voyages_config`/`voyages_pricing` selectors and
  `voyages_booking.create_booking`. Owns the Campay orchestration and
  `OnlineBookingRequest`.
- `reserver` feature (Angular) — public reservation UI; depends only on the
  `/online/` API service + shared toast/pipes. No back-office coupling.
- `OnlineBookingService` (Angular) — typed wrapper over `/online/`, injecting the
  fixed `company_id`.
- Public layout component — chrome only; no data logic.
