# Client PWA — Online Reservation — Design Spec

**Date:** 2026-09-05
**Status:** Approved (design), pending implementation plan
**Author:** shimi

## 1. Goal

Give clients a public, installable Progressive Web App to reserve and pay for
their trips online, without a staff account. The PWA is a new public front-end
that drives the already-complete `online_booking` backend channel.

## 2. Context & Motivation

The backend `online_booking` app (`/api/v1/online/`) is complete and mature:

- `GET  /online/<company_id>/trips/` — public trip search (from_city, to_city, date)
- `GET  /online/<company_id>/trips/<trip_id>/` — public trip detail
- `GET  /online/<company_id>/trips/<trip_id>/seats/` — seat availability map
- `POST /online/<company_id>/trips/<trip_id>/book/` — initiate booking + Campay MoMo payment
- `GET  /online/requests/<request_id>/` — booking-request status (UUID is the secret; polls Campay if pending)
- `POST /online/webhooks/campay/` — Campay payment confirmation webhook

All endpoints are `AllowAny`. The channel is **fully anonymous** (no client
account; status tracked by request UUID) and **per-company** (URLs keyed by
`company_id`). On payment success, `confirm_payment` already creates the real
`Booking` + `Ticket` (with QR).

What is missing is entirely the **client-facing front-end + PWA packaging**.
The existing Angular app is the staff back-office (JWT-guarded, heavy sidebar
layout). This spec adds a public, installable reservation front-end that reuses
that backend.

## 3. Scope

### In scope
- A new public feature area in the existing Angular project (`features/reserver/`).
- Minimal public layout (no sidebar/topbar), lazy-loaded, unguarded.
- Reservation flow: search → trip detail → seat pick → passenger & payment → status/ticket.
- PWA packaging: manifest + service worker (production only), installable, offline ticket viewing.
- One additive backend change: expose applicable **fares/prices** on the public trip payload.

### Out of scope (explicit v1 scope calls)
- **Single passenger per reservation** — the backend `initiate_booking` handles
  one passenger per request; multi-passenger is a future extension.
- **Mobile Money only (Campay)** — no reserve-now-pay-at-agency; the current
  channel always initiates a MoMo payment.
- **One fixed company** — `company_id` is a build config value; no institution picker.
- No client accounts / login / booking history beyond the request-UUID permalink.

## 4. Architecture

### 4.1 Placement
- New route tree `angular/src/app/features/reserver/`, lazy-loaded from
  `app.routes.ts`, **without** `authGuard`.
- Its own minimal public layout component (logo header + footer, no
  sidebar/topbar).
- Calls existing `/api/v1/online/<company_id>/…` endpoints. `company_id` is a
  fixed value read from `environment.ts` (exposed via `api.config.ts`), so
  clients land straight on trip search.

### 4.2 Reuse of existing infrastructure
- `apiUnwrapInterceptor` — unwraps `{success,data}` envelope, normalizes errors
  to explicit French messages (already in place).
- `ToastService` / `ToastContainerComponent` — top-right toasts for errors/success.
- `jwtInterceptor` — harmless for anonymous clients (no token stored);
  `/online/` endpoints are `AllowAny`.
- Existing HTTP provider chain in `app.config.ts` is unchanged.

### 4.3 Data flow
```
[Recherche] --GET /online/<co>/trips/--> trip list (with price)
[Détail]    --GET /online/<co>/trips/<id>/--> detail + fares
[Sièges]    --GET /online/<co>/trips/<id>/seats/--> seat map (skipped if free_seating)
[Paiement]  --POST /online/<co>/trips/<id>/book/--> { id (UUID), status: pending }
[Statut]    --GET /online/requests/<uuid>/ (poll)--> paid|failed|expired
                                          on paid: { ticket: {ticket_number, qr_code} }
```
The status page is reachable by permalink `/reserver/statut/<uuid>`; the UUID is
the secret, matching the backend contract.

## 5. Client Flow (screens)

1. **Recherche** — from-city, to-city, travel date → trip results list; each
   result shows route, times, available seats, and price.
2. **Détail voyage** — departure/arrival times, terminals, vehicle amenities,
   available seats, and a **fare selector** (label + price per passenger type).
3. **Sièges** — visual seat-map picker built from the seat-map payload
   (`seat_rows`, `seat_cols`, `aisle_after_col`, `has_back_row`, `booked_seats`).
   Skipped entirely when `free_seating` is true.
4. **Passager & paiement** — passenger name, phone, optional email, passenger
   type, MoMo method (MTN / Orange) + payment phone. Submits to `…/book/`.
5. **Statut / billet** — polls `GET /online/requests/<uuid>/` every few seconds
   (backend syncs Campay while pending) until `paid` / `failed` / `expired`.
   On `paid`, shows the ticket details + **QR code** (cached for offline).
   Clear pending countdown (15-min expiry), failed, and expired states, each
   with a sensible next action (Réessayer / retour recherche).

## 6. Backend Change (only one)

`PublicTripSerializer` (and/or the trip detail view) currently exposes
`fare_class` but **not the actual fares/prices**, yet `InitiateBooking` requires
`fare_id` + `amount`. Add an applicable-fares list to the public trip payload:

```
fares: [
  { "fare_id": "<uuid>", "label": "<fare class / passenger type>",
    "passenger_type": "adult|child|student|senior", "price": <decimal> }
]
```

Sourced from the route's active (`is_deleted=False`) `Fare` rows matching the
trip's `fare_class`. Additive, `AllowAny`, TDD-covered. No other backend change:
search, seat map, initiate, status, webhook, and ticket issuance are reused as-is.

## 7. PWA Packaging

- Add `@angular/service-worker`, `ngsw-config.json`, and `manifest.webmanifest`
  (via `ng add @angular/pwa`). Service worker registered **only in production**
  (`isDevMode()` guard / production build).
- **Cache strategy scoped to avoid poisoning the staff app:**
  - App shell + static assets: `prefetch` (install-time).
  - `/api/v1/online/…` data: `freshness` (network-first, short-lived cache).
  - **Never** cache authenticated staff `/api/v1/` endpoints.
  - The confirmed ticket/QR view cached so it is **viewable offline at boarding**.
- Manifest: app name, icons (multiple sizes), `theme_color`, `background_color`,
  `display: standalone`, `start_url` → `/reserver`.

## 8. Error Handling

- Reuses the explicit French error messages produced by `apiUnwrapInterceptor`
  and surfaced via toasts.
- Network failures during search/detail show inline retry states.
- Booking initiation errors (e.g., seat taken, trip departed) surface the
  backend's explicit French `ApplicationError` message.
- Status page distinguishes pending (with countdown), failed, and expired, each
  with a next action.

## 9. Testing

- **Backend:** pytest (TDD) for the new `fares` field on the public trip
  payload — correct fares for the trip's route/fare_class, empty when none,
  still `AllowAny`. Full suite stays green.
- **Frontend:** `ng build` green (prod build compiles service worker + manifest).
  Service worker only activates in the production build, so dev is unaffected.

## 10. Units & Boundaries

- `reserver` feature module — public reservation UI; depends only on the
  `/online/` API service and shared toast/pipes. No dependency on back-office
  features.
- `online` API service (Angular) — typed wrapper over the `/online/` endpoints,
  injecting the fixed `company_id`. Single responsibility: talk to the public
  channel.
- Public layout component — chrome only; no data logic.
- Backend fares addition — isolated to the online_booking serializer/selector;
  no change to booking, treasury, or ticketing services.
