# Voyages Booking (Réservations) — Design Spec

**Date:** 2026-08-02
**Sub-project:** Voyages module → Booking (réservations)
**Branch:** `feature/voyages-booking` (from `origin/master`)

## Goal

Deliver end-to-end passenger booking for the Voyages module: standalone
deduplicated passengers, header+ticket bookings (one-way and round-trip), a
Hold→Confirm seat lifecycle wired to `voyages_trips.TripSeat`, automatic
pricing from `voyages_pricing.Fare`, a payment snapshot that stops at the
(empty) treasury boundary, and a full loyalty (Fidélité) loop
(earn → threshold → free-ticket redemption).

## Global Constraints

- New app **`apps/voyages_booking`** mounted at **`/api/v1/voyages-booking/`**.
- Branch **`feature/voyages-booking`** cut from **`origin/master`**. Forward-only on shared master.
- Commit as **shimi** only — **no** `Co-Authored-By: Claude` trailer.
- **No** imports of `treasury` or `tiers` (collaborator-owned). `payment_method` renders as an **empty dropdown** labelled "(module trésorerie à venir)".
- Legacy `ticketing`, `voyage`, `transport_config`, `parcel` apps stay **dormant** and untouched.
- French throughout (UI copy, `verbose_name`, messages). XAF currency.
- Reuse established kernel: class-based `APIView`, `IsInstitutionAdmin`, selectors/services packages, `BaseModel` (UUID pk, soft-delete, audit), `StandardResultsSetPagination`, `success_response`/`created_response`/`error_response`/`no_content_response`, `ApplicationError`, `core.services.sequence_service.next_number`.
- No test framework: verify via `manage.py check`, `makemigrations --check`, fresh-DB migrate, shell smoke, `npx ng build`. Python via `../env/bin/python` from `backend/`.

---

## Architecture & Scope

Booking builds on already-shipped Voyages pieces:

- **`voyages_trips.TripSeat`** — states `AVAILABLE → HELD → SOLD → BLOCKED`, `held_until`, and a `booking_id` UUID **placeholder** this sub-project wires to the real booking.
- **`voyages_pricing.Fare`** + `resolve_fare(company, route, origin, destination, fare_class, trip_type, on_date)` — authoritative pricing (incl. `one_way` / `round_trip`).
- **`voyages_config.LoyaltyRule`** — `points_per_one_way`, `points_per_round_trip`, `reward_threshold`, `reward_label` (config exists; accounts/movements added here).

**Delivered units:** Passengers, Bookings + Tickets, seat lifecycle integration, pricing integration, loyalty (accounts + ledger).

**Boundaries:** payment posting → empty treasury boundary (booking snapshots `amount_due`/`amount_paid`, empty `payment_method`); passengers are local (not tiers).

**Bookable trips:** seats materialized + status pre-departure + future `scheduled_departure`. Not departed/completed/cancelled.

---

## Data Model

All models extend `BaseModel`; company-scoped via `company` FK.

### `Passenger` (standalone identity)
- `company`, `first_name`, `last_name`, `gender` (M/F/O choices), `birth_date` (nullable)
- `phone` (indexed — dedup/lookup key), `email` (blank)
- `id_type` (CNI / passport / driver_license / other), **`id_number`** (blank allowed but captured whenever possible)
- `notes`; `full_name` property
- Uniqueness: `(company, id_type, id_number)` enforced in service when `id_number` is provided; phone drives counter dedup.

### `Booking` (header)
- `company`, `reference` (auto `BOOK/YYYY/NNNNN` via Sequence code `BOOK`)
- `status`: `HELD` / `CONFIRMED` / `BOARDED` / `CANCELLED` / `EXPIRED` / `NO_SHOW`
- `trip_type`: `one_way` / `round_trip`
- `outbound_trip` → `voyages_trips.Trip` (PROTECT), `return_trip` → Trip (PROTECT, null for one-way)
- `buyer` → `Passenger` (PROTECT)
- `amount_due`, `amount_paid` (Decimal 12,2, default 0), `payment_method` (CharField blank — **empty dropdown**)
- `held_until` (DateTime, nullable), `channel` (counter / online, default counter), `notes`

### `Ticket` (line — one passenger on one seat)
- `booking` → Booking (CASCADE, related_name `tickets`), `number` (auto `TKT/YYYY/NNNNN` via Sequence code `TKT`)
- `passenger` → Passenger (PROTECT)
- `trip` → Trip (PROTECT), `trip_seat` → `voyages_trips.TripSeat` (PROTECT)
- `direction`: `OUTBOUND` / `RETURN`; `return_of` → self FK (SET_NULL, null except return legs)
- `fare` → `voyages_pricing.Fare` (SET_NULL, snapshot ref), `fare_class` → `voyages_config.FareClass` (PROTECT), `amount` (Decimal 12,2)
- `is_reward` (bool, default False), `status` (HELD/SOLD/BOARDED/CANCELLED), `boarded_at` (nullable)

### `LoyaltyAccount` (one per passenger/company)
- `company`, `passenger` (OneToOne, CASCADE), `points_balance` (int, default 0), `lifetime_points` (int, default 0)
- Uniqueness `(company, passenger)`

### `LoyaltyMovement` (ledger)
- `account` → LoyaltyAccount (CASCADE, related_name `movements`)
- `kind`: `EARN` / `REVERSAL` / `REDEEM`; `points` (signed int)
- `booking` → Booking (SET_NULL), `rule` → `voyages_config.LoyaltyRule` (SET_NULL), `note` (blank)

**Round-trip shape:** one passenger round-trip → 2 tickets (OUTBOUND + RETURN, linked by `return_of`); the `round_trip` fare priced **once** — full amount on the outbound ticket, `0` on the return — so `Booking.amount_due` = round-trip fare per passenger. `Ticket.trip_seat` flips `TripSeat.status` and stamps `TripSeat.booking_id`.

---

## Selectors & Services

### `selectors/booking_selectors.py`
- `bookable_trips(company)` — materialized seats + pre-departure status + future departure
- `seat_map(trip)` — `TripSeat` grid with status (visual picker)
- `find_passengers(company, q)` — search phone / id_number / name
- `list_bookings(company, **filters)` (status, trip, q), `booking_detail(id)`
- `loyalty_view(passenger)` — account balance + movements

### `services/passenger_services.py`
- `get_or_create_passenger(company, *, id_type, id_number, phone, ...)` — match on `(id_type,id_number)` else phone; return existing else create (prevents duplicate loyalty accounts)

### `services/booking_services.py` (all `@transaction.atomic`)
- `create_booking(company, trip_type, outbound_trip, return_trip, buyer, tickets_spec, user)`:
  1. Validate trips bookable; round-trip requires both trips.
  2. Per requested (passenger, outbound_seat[, return_seat]): resolve/get passenger; `select_for_update` the seat(s); verify `AVAILABLE` else `ApplicationError("Siège déjà pris")`.
  3. Price via `resolve_fare(...)`; if no fare → `ApplicationError` naming origin→destination + class + trip_type (no silent manual amount).
  4. Create `Booking` (HELD, `held_until` = now + hold window), create `Ticket`s, set seats HELD + stamp `booking_id`, compute `amount_due` (round-trip: full on outbound, 0 on return).
- `confirm_booking(booking, payment_method, amount_paid, user)` — require HELD & unexpired → seats SOLD, tickets SOLD, status CONFIRMED, payment snapshot, **accrue loyalty**.
- `cancel_booking(booking, user)` — release seats → AVAILABLE, tickets/booking CANCELLED, **reverse loyalty** if earned.
- `board_ticket(ticket, user)` — ticket/seat BOARDED, `boarded_at` set. `mark_no_show(booking, user)`.
- `expire_holds(company=None)` — sweep HELD bookings past `held_until` → release seats, status EXPIRED. Exposed via `manage.py expire_booking_holds`.

### `services/loyalty_services.py`
- `accrue(booking)` — per non-reward ticket, add points from applicable `LoyaltyRule` (one-way vs round-trip rate), write `EARN`, bump `points_balance`/`lifetime_points`.
- `reverse(booking)` — write `REVERSAL`, subtract points earned for that booking.
- `redeem_reward(booking, passenger, ticket)` — if `points_balance ≥ reward_threshold`: `ticket.is_reward=True`, `ticket.amount=0`, deduct threshold points, write `REDEEM`, recompute `Booking.amount_due`.

**Concurrency:** seat grabs use `select_for_update` inside atomic `create_booking`. Money/points mutations atomic; cancel reverses seats + loyalty together.

---

## API (`/api/v1/voyages-booking/`)

Class-based `APIView`, `IsInstitutionAdmin`:
- `passengers/` (GET list+search `?q=`, POST); `passengers/<id>/` (GET/PATCH/DELETE)
- `passengers/<id>/loyalty/` (GET — balance + movements)
- `bookings/` (GET list `?status=&trip=&q=`, POST create); `bookings/<id>/` (GET/PATCH/DELETE)
- `bookings/<id>/confirm/`, `bookings/<id>/cancel/`, `bookings/<id>/no-show/`, `bookings/<id>/redeem/` (POST)
- `tickets/<id>/board/` (POST)
- `trips/bookable/` (GET), `trips/<id>/seat-map/` (GET)

---

## Frontend (Angular 21 standalone, DreamsPOS, `ti` icons, French)

1. **Passagers** (`pages/voyages-booking/passengers/`) — list + search (phone/ID/name), create/edit modal (identity + **ID number**), Fidélité points badge, loyalty-history drawer.
2. **Réservations** (`pages/voyages-booking/bookings/`) — list with status badges, filters, actions (Confirmer / Annuler / No-show), reference + total columns.
3. **Nouvelle réservation** — stepper:
   - Étape 1 — Voyage: trip type; pick outbound trip; if round-trip, pick return trip.
   - Étape 2 — Sièges: visual seat map per leg (reuse Gestion Voyages seat-map styling); AVAILABLE clickable, others disabled.
   - Étape 3 — Passagers: one row per selected seat — autocomplete existing passenger or capture new inline; buyer selector.
   - Étape 4 — Tarification & paiement: auto-priced lines from `resolve_fare`, total, "Utiliser récompense fidélité" toggle when eligible, empty payment-method dropdown, Confirmer.
4. **Détail réservation** — tickets (seat, passenger, direction, amount, reward flag), lifecycle actions, per-ticket boarding, loyalty accrued.

`models/voyages-booking.models.ts` (Passenger, Booking, Ticket, LoyaltyAccount, LoyaltyMovement) + per-resource services. `info-banner` on each screen. Empty payment dropdown labelled "(module trésorerie à venir)".

---

## Error Handling

All guards raise French `ApplicationError` → `error_response`:
- Non-bookable trip (departed/completed/cancelled or no seats materialized)
- Round-trip missing return trip; outbound/return seat count mismatch per passenger
- No fare for a segment (message names segment + class + trip_type)
- Confirm on non-HELD/expired booking; redeem below `reward_threshold`
- Seat contention → `Siège déjà pris` (via row lock)

---

## Verification

- `manage.py check` + `makemigrations --check`
- Fresh-DB `migrate` (`DATABASE_URL=sqlite:///…`)
- Shell smoke: passenger → hold booking (one-way + round-trip) → confirm → assert seats SOLD + loyalty accrued → cancel → assert seats released + loyalty reversed → redeem reward → assert free ticket + points deducted → expire stale hold
- `npx ng build`
