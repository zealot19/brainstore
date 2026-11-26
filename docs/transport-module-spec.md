# Transport Module — Functional & Data Specification

**Purpose of this document.** Describe, sub‑module by sub‑module, *what the Transport
domain does and how*, in enough detail to re‑implement it in a **new Django‑only app**
(server‑rendered: Django views + templates + forms, one process, no separate Angular
frontend/REST split). Each section gives: the **entities** (models + key fields + enums +
relations), the **state machine**, the **operations/workflows and their rules**, the
**configuration** it depends on, **permissions**, and **integration points**.

> The current system is Django REST Framework + Angular. In the new app, **each Angular
> screen becomes a Django view + template**, and **each DRF service function below becomes a
> plain service function called from a view**. The models and business rules carry over
> unchanged. Where this doc says "endpoint/screen", read "view + template".

---

## 0. Architecture & cross‑cutting foundations

The Transport domain spans six Django apps:

| App | Sub‑module | Role |
|---|---|---|
| `voyages_config` | **Configuration** | Reference data: points, routes, fare classes, parcel types, seating plans, schedules, settings, document/ticket templates |
| `voyages_pricing` | **Pricing** | Fare grid (price per route/segment × class × direction) |
| `fleet` (+ `partners`) | **Fleet** | Vehicles, drivers, partners/owners, maintenance, accidents, documents |
| `voyages_trips` | **Trips (Voyages)** | Trip lifecycle, seat materialisation, crew, trip expenses |
| `voyages_booking` | **Billetterie (Ticketing)** | Bookings, tickets, passengers, reservations, returns, adjustments, loyalty |
| `voyages_consignment` | **Colis & Bagages** | Parcels and baggage: registration, dispatch, reception, pickup, delivery |

Supporting domains it integrates with: **`treasury`** (cash/income/refunds/expenses),
**`reporting`**, **`sync`** (multi‑instance), **document rendering/printing**.

### Conventions every model follows
- **Primary key = UUID** (not auto‑increment). Critical: it lets records be created on
  offline agency nodes and merged by the sync engine without PK collisions.
- **Company scoping (multi‑tenant).** Almost every row has `company` (FK). All queries are
  filtered by the current user's company. A request middleware sets the current tenant/user.
- **Agency scoping.** Many transactional rows also carry `agency`. Non‑admin users
  (e.g. a *guichetier*) are restricted to their own agency's rows for most actions.
- **Soft delete.** Models use `is_deleted` + a default manager that hides deleted rows
  (`objects`), plus an `all_objects` manager that sees everything. "Delete" = set
  `is_deleted=True`.
- **Audit stamps.** `created_at`, `updated_at`, `created_by`, `updated_by`.
- **State machines.** Status is a `TextChoices` field; transitions happen only through
  service functions that validate the current state (never by editing the field directly).
- **Timezone.** `USE_TZ=True`; timestamps stored UTC. A middleware activates the **logged‑in
  user's `timezone`** per request so server‑rendered documents (receipts, manifests,
  reports) show local time. (Default user/company timezone is `Africa/Abidjan` = UTC+0 — set
  it to the real zone, e.g. `Africa/Douala` = UTC+1.)

### Permissions (RBAC)
Granular permission codes gate actions, checked per view. `.manage` implies
create/update/delete; `.view` is read‑only. Relevant namespaces:
`ticketing.booking.*`, `ticketing.parcel.*`, `ticketing.luggage.*`, `ticketing.customer.*`,
`transport.config.*`, `fleet.*`, `treasury.*`. A new permission is invisible until granted
to a role **and** the user re‑logs in (superusers bypass).

---

## 1. Sub‑module: Configuration (`voyages_config`)

Reference data an administrator sets up before operations. All are company‑scoped,
soft‑deletable, and translatable (FR/EN) for name/label fields.

### 1.1 Network — points & routes (`network.py`)
- **Town** — `name`, `code`, `region`. Internal grouping only (the UI dropped a separate
  "cities/places" config; an **Agency is itself a point**).
- **ServicePoint** — a point on the network (station/agency location). Fields: `code`,
  `name`, `latitude`, `longitude`, `town` (FK), **`agency` (FK)**. Each operating agency has
  a ServicePoint; parcel/trip "departure/arrival points" are ServicePoints.
- **Route** — `code`, `label`, `origin` (ServicePoint), `destination` (ServicePoint),
  `distance_km`, `estimated_duration`.
- **RouteStop** — intermediate stops: `route`, `service_point`, `sequence`,
  `distance_from_origin_km`, `offset_from_departure` (duration). A route "serves" a point if
  the point is its origin, destination, or a stop (used by parcel dispatch filtering).

### 1.2 Commercial (`commercial.py`)
- **FareClass** — `code`, `name`, `rank`, `color`, **`is_rental`** (a rental/charter class
  behaves differently — whole‑vehicle hire). Drives pricing and ticket class.
- **TimeSlot** — `code`, `label`, `start_time`, `end_time`, `ordering`. Departure windows
  used by service patterns (e.g. "Morning").
- **ConsignmentNature** — parcel classification: `code`, `name`, `is_fragile`,
  `requires_declaration`, `is_prohibited`. Optional.
- **ConsignmentType** — **drives parcel/baggage pricing**: `code`, `label`, `applies_to`
  (`PARCEL`/`BAGGAGE`/`BOTH`), `max_weight_kg`, `max_volume_m3`, and pricing:
  - `fixed_price` set → price is **imposed** (not editable);
  - `min_price`/`max_price` set → clerk enters a price **within range**;
  - none set → **free entry**.

### 1.3 Seating (`seating.py`)
- **SeatingPlan** — `code`, `name`, `total_seats`, `blocked_seats` (+ a numeric seat layout).
  A trip references a plan; **the plan drives how many seats exist** (vehicle is optional).

### 1.4 Scheduling (`scheduling.py`)
- **ServicePattern** — a recurring timetable to auto‑generate trips: `route`, `time_slot`,
  `fare_class`, `default_seating_plan`, weekday booleans (`monday`…`sunday`),
  `valid_from`/`valid_to`. "Generate trips from pattern" materialises Trip rows for a date
  range.

### 1.5 Voyage type (`voyage_type.py`)
- **VoyageType** — `code`, `name`, `is_default`. A label/category for trips (e.g. regular,
  express).

### 1.6 Settings — `VoyagesSettings` (singleton per company, `settings.py`)
One row of global flags; falls back to a global default row:
- `departure_lead_hours` (24) — how early a trip opens for departure automation.
- `arrival_grace_hours` (48) — window to auto‑arrive.
- `ticket_expiry_days` (7) — printed ticket validity.
- `shift_duration_hours` (8), `document_alert_days` (30).
- `auto_print_default` (false), `sms_notification_default` (false).
- **`auto_manage_trips`** (false) — if on, a scheduled job auto‑departs/arrives trips.
- `baggage_free_allowance_kg` (23).
- **`parcel_trip_max_weight_kg`**, **`parcel_trip_max_count`** — parcel loading caps per trip.
- **`allow_partial_pickup`** (true) — can a multi‑piece parcel be collected before it fully
  arrives.

### 1.7 Documents & templates (`manifest.py`, `ticket.py`, `document_format.py`, `printer_config.py`)
- **ManifestTemplate** — app‑wide **header/footer** config (logo, company name, slogan,
  legal IDs, colours) applied to *all* printed docs (receipts, tickets, manifests, reports)
  via a single `resolve_doc_template`.
- **TicketTemplate** — the printed passenger ticket layout (size, colours, QR, band).
- **Printer config / document formats** — per‑document page size and (optionally) a central
  printer mapping. Printing is otherwise **per workstation** (see §9).

**Permissions:** `transport.config.view` / `transport.config.manage`.

---

## 2. Sub‑module: Pricing (`voyages_pricing`)

### Entity — `Fare` (`fare.py`)
`route` (FK), `origin_point`, `destination_point`, `fare_class`, `trip_type`
(`one_way`/`round_trip`), `amount`, `currency`, `valid_from`, `valid_to`. Company‑scoped
(nullable company = global default fare).

### Rule — fare resolution
When a ticket is sold, the price is looked up by **(route or origin→destination segment) ×
fare_class × trip_type**, valid for the travel date. Segment fares (origin/destination
points) let a passenger pay for a sub‑leg rather than the whole route. Rental fare classes
(`is_rental`) price the whole vehicle instead of per seat.

> Reproduction: one `resolve_fare(trip, origin, destination, fare_class, trip_type, when)`
> function returns the `amount`; the booking service calls it (see §5 `_price`).

---

## 3. Sub‑module: Fleet (`fleet`, `partners`)

### 3.1 Vehicle (`vehicle.py`)
Key fields: `company`, `agency`, `category` (FK), `tags` (M2M), `parking` (FK),
`model` (→ brand/model), `license_plate`, `code`, `vin`, `color`, `year`,
**`seating_plan`** (FK — default plan when this vehicle runs a trip), `status`,
`current_odometer`, `internal_driver`/`external_driver`, fiscal/value fields
(`registration_date`, `catalog_value`, `purchase_value`, `residual_value`,
`acquisition_date`, `acquisition_cost`), `tank_capacity_liters`, `is_active`.
- **Partner ownership & revenue split:** `owner_partner` (FK `partners.Partner`) plus
  **three** percentages: `partner_pct_ticket`, `partner_pct_parcel`, `partner_pct_baggage`.
  These feed the **partner‑shares net report** (§10): `Gross − Expenses = Net`, split
  agency/partner per revenue type.

### 3.2 Supporting fleet entities
`VehicleBrand`, `VehicleModel`, `VehicleDocument` (with expiry alerts via
`document_alert_days`), `FuelLog`, `OdometerLog`, `RecurringCost`, `Service`/maintenance,
`Supplier`, `Parking`, `Assignment` (vehicle↔driver), `ExternalDriver`, `Contract`.
- **Accident** (`accident.py`) — **voyage‑driven**: requires a `trip` FK; the vehicle is
  derived from the trip; **no status workflow**; scoped by `trip__company_id`.

### 3.3 Partner (`partners.Partner`)
A vehicle owner/investor; referenced by `Vehicle.owner_partner` for revenue sharing.

**Permissions:** `fleet.*`.

---

## 4. Sub‑module: Trips / Voyages (`voyages_trips`)

The operational heart: a **Trip** is one scheduled departure that tickets, parcels and
baggage attach to.

### 4.1 Entities
**Trip** (`trip.py`): `company`, `number`, `code`, `route` (FK), `service_pattern` (FK, if
generated), `fare_class`, `voyage_type`, **`vehicle` (nullable — the seating plan, not the
vehicle, drives seats)**, `seating_plan`, `scheduled_departure`, `scheduled_arrival`,
`actual_departure`, `actual_arrival`, `origin`/`destination` (ServicePoints), `status`,
`seat_assignment_mode` (`MANUAL`/`AUTO`), `auto_expenses` (bool), **`max_reservations`**
(quota of unpaid holds), `blocked_seats_count`, delay fields (`is_delayed`, `delayed_until`,
`delay_reason`), `notes`.

**TripSeat** (materialised seats) — one row per seat with
`status` ∈ { `available`, `held` (temporary reservation), `sold`, `blocked` }, seat number,
and a link to its ticket when sold. Seats are **materialised from the seating plan** when
the trip is created/vehicle assigned.

**TripExpense** (`trip_expense.py`): `trip`, `expense_type`, `amount`, `description`,
`date`, `status` (`PLANNED`/`PAID`/`CANCELLED`), `cash_session` (FK). Can be auto‑seeded
from an expense schedule and later disbursed from a cash register.

**CrewMember / crew assignment**, **Support**, **Transbordement** (vehicle transfer /
overflow split) are additional entities.

### 4.2 Trip state machine
`DRAFT → PENDING → DEPARTED → COMPLETED`, plus `SUSPENDED` and `CANCELLED`.
(`DRAFT`=being built, `PENDING`=open/bookable, `DEPARTED`=left, `COMPLETED`=arrived.)

### 4.3 Operations (`services/`)
- **`create_trip`** — builds a trip; computes `number`/`code` from the point codes + date;
  `_block_seats` and `_assign_crew`; materialises seats from the plan.
- **`create_trip_from_pattern` / `generate_trips_from_pattern`** — bulk‑generate trips from a
  `ServicePattern` over a date range (respecting weekdays + validity window).
- **`assign_vehicle`** / `materialise_seats` / `set_seats_status` — attach a vehicle, (re)build
  `TripSeat` rows, change seat statuses.
- **Lifecycle:** `submit_trip` (draft→pending), `depart_trip`, `complete_trip`,
  `cancel_trip`, `suspend_trip`, `resume_trip`, `mark_delayed`/`clear_delay`.
- **`run_auto_transitions`** — scheduled job: when `auto_manage_trips` is on, auto‑depart at
  `scheduled_departure` − lead and auto‑complete after arrival grace.
- **Trip expenses:** `apply_expense_schedule` (seed planned expenses on creation),
  `disburse_trip_expense` (pay from a cash session → treasury `EXPENSE`).
- **Transbordement:** `transbord_vehicle` / `transbord_trip` / `overflow_split` /
  `transbord_selection` — move passengers/parcels to another vehicle/trip (clones a trip for
  the receiving vehicle) when a vehicle breaks down or overflows.

### 4.4 Rules
- Vehicle is **optional**; the **seating plan** determines seat count. `max_reservations`
  caps simultaneous unpaid holds. `blocked_seats` are never sold.
- Seat status is CDC‑tracked (changes captured for sync).

**Permissions:** trip management under the ticketing/transport namespaces; agency‑scoped.

---

## 5. Sub‑module: Billetterie / Ticketing (`voyages_booking`)

Selling and managing passenger tickets.

### 5.1 Entities
**Booking** (`booking.py`) — a sale that groups one or more tickets: `company`, `agency`,
`reference`, `status`, `trip_type` (`one_way`/`round_trip`), `outbound_trip`,
`return_trip` (nullable), `buyer` (FK customer), money fields (`amount_due`, `amount_paid`,
`amount_received`, `change_due`), `payment_method`, **`channel`** (`counter`/`online`),
`return_open`, `hold_until`, cancellation fields (`cancellation_reason`, `cancelled_at`,
`cancelled_by`, `refund_amount`).
- Booking `status` ∈ { `reserved` (unpaid), `confirmed` (paid), `boarded`, `cancelled`,
  `no_show` }.

**Ticket** — one seat for one passenger on one trip: `booking`, `number`, `passenger`,
`trip`, `trip_seat`, `origin_point`/`destination_point` (segment), `direction`
(`outbound`/`return`), `status` ∈ { `reserved`, `sold`, `boarded`, `cancelled`,
`no_show` }, `fare_class`, `amount`.

**Passenger** (`passenger.py`) — `company`, **single `name` field** (never first/last),
`gender`, `civility` (`mr`/`mrs`/`miss`), `birth_date`, `phone`, `email`, `id_type`
(`cni`/`passport`/`driver_license`/`other`), `id_number`, `notes`.

**Adjustment** (`adjustment.py`) — post‑sale change: `kind` (`report` = move to another
trip/date, `regularisation`).

**Loyalty** (`loyalty.py`) — `LoyaltyAccount` + movements (`earn`/`reversal`/`redeem`).

### 5.2 Core workflows (`services/`)
**Sell a ticket — `create_booking`:**
1. `_assert_bookable` (trip is `pending`/open, not departed) and `_assert_can_sell`
   (agency sell rules — a clerk sells only their agency's trips/visibility).
2. `_resolve_passenger` / `get_or_create_passenger` (dedupe by id/phone).
3. `_resolve_destination` (segment) → `_price` (calls pricing §2) → compute `amount_due`.
4. Seat: `_auto_pick_seat` or `_pick_seat` + **`_lock_seat`** (sets `TripSeat` → `sold`).
5. Create Booking + Ticket(s); number them (`_booking_reference`, `_ticket_number`).
6. **Payment** → records treasury **income** (if the payment method `requires_payment`);
   computes `change_due`.
7. Optional loyalty accrual.

**Round trip / return — `assign_return`:** attaches a return trip + return‑direction tickets.

**Reservation (hold without paying) — `reservation_services`:**
- `create_reservation` → `_hold_seat` (TripSeat → `held`, `hold_until` set), respecting the
  trip's `max_reservations` quota.
- `pay_reservation` → converts hold to a sale (income recorded).
- `release_reservation` / **`release_expired_reservations`** (scheduled job frees holds past
  `hold_until`).

**Boarding:** `board_ticket` / `board_all_tickets` (→ `boarded`), `mark_no_show`.

**Cancellation — `cancel_booking`:** allowed per state; frees the seat(s); **refund** via
treasury `refund_on_cancel` (ticket refund rate/method, default 0%); **cascades to linked
baggage**; stamps `cancelled_*`.

**Adjustments — `report_ticket` / `regularize_ticket`:** `_assert_sold` then move a sold
ticket to another trip/date or correct it (open‑returns queue = tickets awaiting a return
leg).

### 5.3 Screens (→ Django views)
"Vendre un billet" (sell), "Réservations", "Retours à traiter" (open returns),
"Tickets annulés", "Tout Afficher" (all bookings), passenger directory. Printed ticket via
`ticket_render` (§9).

**Permissions:** `ticketing.booking.create/view/cancel`, `ticketing.customer.*`. A
*guichetier* sells + does cash drawer only; session management is separate RBAC.

---

## 6. Sub‑module: Colis & Bagages / Consignment (`voyages_consignment`)

Parcels and baggage. (This is the live module; `apps/parcel` is legacy/dead.)
API base `/api/v1/voyages/consignment/`.

### 6.1 Parcel (`parcel.py`)
Fields: `company`, `agency`, **`reference`** (monthly per‑agency sequence
`DLA/0001/MM/YYYY`), `status`, `origin_point`, `destination_point`, `trip` (nullable),
`sender_client` (FK customer) + `sender_name`/`sender_phone`,
`recipient_name`/`recipient_phone`/`recipient_address`/`recipient_id_number`,
`consignment_type` (**pricing**, §1.2), `nature`, `description`/`content`, `weight_kg`,
**`quantity`** and the piece counters `received_pieces`, `missing_pieces`, `damaged_pieces`,
`picked_up_pieces`, `declared_value`, money (`amount_due`/`amount_received`/`change_due`,
`payment_method`, `paid_at`), and timestamps (`loaded_at`, `dispatched_at`, …).

**Parcel state machine:**
`REGISTERED → READY_FOR_TRAVEL → LOADED → (PARTIAL_TRANSIT) → IN_TRANSIT → ARRIVED →
AVAILABLE_FOR_PICKUP → PICKED_UP`, plus `CANCELLED`.

**ParcelShipment** (`shipment.py`) — links **pieces of a parcel to a trip** (a parcel can be
split across trips): `parcel`, `quantity`, `trip`, `status` (`DRAFT → VALIDATED → LOADED →
IN_TRANSIT → ARRIVED → RECEIVED`, `CANCELLED`), `is_primary`, `validated_by/at`. Shipments
**merge** when the same parcel is added to the same trip.

**ParcelEvent** — audit/tracking log with `Kind` (registered/ready/loaded/dispatched/
arrived/received/picked_up/cancelled); drives the "Suivi" (tracking) timeline on the receipt.

**Pickup identity**: pickups record who collected — `DESTINATAIRE` or `MANDATAIRE` (proxy).

### 6.2 Baggage (`baggage.py`)
Attached to a trip at check‑in; passenger optional (if no ticket, capture sender identity).
Status: `CHECKED_IN → LOADED → DELIVERED`, `CANCELLED`. Free allowance
(`baggage_free_allowance_kg`) then fare. Withdrawn to the passenger on arrival.

### 6.3 Core workflows (`services/`)
**Register — `register_parcel`:** capture parties + content; **price from
`consignment_type`** (fixed / range / free); record **income**; assign `reference` from the
monthly agency `Sequence`. Status → `REGISTERED`.

**Dispatch / ship — shipment services:** on the "Expédition" screen, choose a trip (filter by
destination/day/route‑serves‑point), **assign** pieces (`dispatch_shipment` creates/merges a
`ParcelShipment`), then **ship** (`dispatch`) → parcel `IN_TRANSIT`/`PARTIAL_TRANSIT`.
`recompute_parcel_state` derives the parcel status from its shipments' statuses + piece
counters. **Withdraw after validation is admin‑only** (`withdraw_shipment` guards non‑draft
removals).

**Receive — `arrive_shipment` / reception:** at destination, enter received/missing/damaged
pieces → `RECEIVED`; parcel becomes `AVAILABLE_FOR_PICKUP`. Only received pieces are
collectable.

**Pickup — `pickup_parcel`:** verify recipient **ID (CNI)** (or proxy name+ID); optional
**partial** quantity (`allow_partial_pickup` setting + `fully_here` gate); → `PICKED_UP`.

**Home delivery — `livraison`:** paid service; address + amount + received‑by → records
**delivery income** separately.

**Cancel — `cancel_parcel`:** only `REGISTERED`/`READY_FOR_TRAVEL`; **refund** per treasury
"colis" config (percentage/fixed, default 0%, from the open cash drawer).

**Numbering — bulk resume:** after an outage where parcels were hand‑logged, set the **next
system number** (forward‑only) to realign references and avoid duplicates.

### 6.4 Screens (→ Django views)
Nouveau colis (register), Expédition (dispatch), Réception colis, Retrait colis (pickup),
Livraison colis (delivery), Tout Afficher (list); Bagages + Retrait bagage. Printed
receipt/label via `doc_render.py` (§9).

**Permissions:** `ticketing.parcel.view/manage`, `ticketing.luggage.view/manage`.

---

## 7. Cross‑module: Treasury integration

Transport feeds money into `treasury` — **no duplicate income models**; income is read from
`Transaction` rows.
- **Income on sale.** Selling a ticket, registering a paid parcel, or delivering records a
  treasury **income** transaction (category per type: ticket/colis/bagage/livraison), tied
  to the agent's **open cash session** (caisse). Payment methods flagged "no‑payment" record
  nothing.
- **Change/overpayment** computed and stored on the sale row.
- **Refunds.** Cancelling a ticket/parcel creates an **EXPENSE / category `refund`**
  from the open cash drawer, using the configurable **refund method per type** (percentage
  or fixed; default **0%**). ⚠️ Refund config is **per company** — never a global parameter
  (a global one leaks to all companies).
- **Trip expenses** disburse from a **principale** cash register.
- **Cash sessions (caisses).** A *guichetier* sells + does denomination counting (billetage)
  but no longer opens/closes; session lifecycle is `treasury.session.manage` + agency scope.
- **Partner/agency split** is **net‑based** (`Gross − Expenses = Net`), can go negative; see
  §10.

---

## 8. Cross‑module: Reporting

Metadata‑driven: a `FILTER_DEFS` registry + ~13 registered reports. Transport reports
include passenger manifests, parcel/baggage manifests, revenue (recettes), and
**`resultat_partenaires`** (partner net shares: Gross − Expenses = Net split agency/partner,
filtered by period/agency/vehicle/partner). Exports use `?fmt=` (never `?format=` — DRF
reserves it). All PDFs use the shared `resolve_doc_template` header/footer.

---

## 9. Cross‑module: Documents & printing

- **Rendering.** Server builds **HTML** for each document: parcel receipt/label
  (`voyages_consignment/doc_render.py`), passenger ticket (`voyages_config/ticket_render.py`),
  manifests (`voyages_booking/manifest_render.py`, `parcel_manifest.py`). All date/times go
  through `timezone.localtime()` (user tz). All share header/footer via `resolve_doc_template`.
- **Printing is per workstation.** Each counter PC runs a tiny local **print agent** on
  `http://127.0.0.1:9113`; the browser posts the document HTML to it; the agent renders
  HTML→PDF with headless Edge/Chrome and prints silently via SumatraPDF to that PC's chosen
  printer ("Imprimantes (ce poste)"). No WeasyPrint. Receipt → one printer, label → another.
- **Reproduction note.** In a Django‑only server‑rendered app you can instead return a PDF
  (WeasyPrint/wkhtmltopdf) or keep the local‑agent model for thermal label printers.

---

## 10. Partner revenue split (detail)

Per vehicle, three percentages (`partner_pct_ticket/parcel/baggage`). The
`resultat_partenaires` report, for a period/agency/vehicle/partner:
`Net = Gross revenue (by type) − Expenses`, then split **agency vs partner** by the per‑type
percentages. The partner share can be **negative** when expenses exceed gross (partner shares
the losses). This is net‑based, not gross‑based.

---

## 11. Multi‑instance sync (context)

Agency nodes run offline (SQLite) and sync to an online master (Postgres), hub‑and‑spoke.
This is why **PKs are UUIDs**, rows carry `origin_node`, and a change‑log (CDC) + pull
cursor drive push/pull. For a single‑server Django rebuild you can ignore sync, **but keep
UUID PKs** if you ever want offline branches again.

---

## 12. Permission matrix (summary)

| Area | View | Manage/act |
|---|---|---|
| Config (points, routes, types, plans, settings) | `transport.config.view` | `transport.config.manage` |
| Fleet | `fleet.*view` | `fleet.*manage` |
| Trips | ticketing/transport view | management + agency scope |
| Tickets | `ticketing.booking.view` | `.create`, `.cancel` |
| Customers | `ticketing.customer.view` | `.manage` |
| Parcels | `ticketing.parcel.view` | `.manage` (withdraw validated = **admin only**) |
| Baggage | `ticketing.luggage.view` | `.manage` |
| Cash income/refunds | `treasury.income.view` | sale records income; session mgmt `treasury.session.manage` |

---

## 13. Reproduction checklist for a Django‑only app

1. **Models first.** Recreate the entities above with UUID PKs, `company`/`agency` FKs,
   `is_deleted`, audit stamps, and the exact `TextChoices` state enums.
2. **Config CRUD** (§1–§2, §3) as Django admin‑style CRUD views + forms.
3. **Services as plain functions** (one module per sub‑module) implementing each operation
   with its state guards — call them from views, wrap in `transaction.atomic`.
4. **State machines**: never set `status` in a view; only via a transition service that
   validates the current state.
5. **Scoping**: a middleware sets the current company/user + activates the user timezone;
   every queryset filters by company (and agency for non‑admins).
6. **Money**: integrate with a cash/treasury module — record income on sale, refund on
   cancel (per‑type config, default 0%), expenses from a principale drawer.
7. **Documents**: server‑render HTML per doc through one shared header/footer resolver;
   print to a PDF or a per‑workstation agent.
8. **Permissions**: gate each view with the codes in §12; new perms need role grant + re‑login.
9. **Timezone**: `USE_TZ=True`, store UTC, display in the user's timezone (set it to the real
   zone, not the `Africa/Abidjan` default).

---

*Source of truth: the `voyages_*` and `fleet` Django apps (models/, services/, config_api/).
This spec captures entities, state machines, operations and rules; for exact field lists and
edge‑case validation, read the corresponding `models/*.py` and `services/*.py`.*
