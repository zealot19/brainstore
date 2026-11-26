# Transport Module — Screens & Flows (frontend companion)

Companion to **`transport-module-spec.md`** (the backend data/rules spec). This document
captures the **UI layer** — every screen, its fields, its actions, the client‑side logic,
and which backend operation each button calls — so the new **Django‑only** app reproduces
not just the rules but the *experience*.

> **How to read it.** Each screen = one Angular component (`.ts` + `.html`) → becomes **one
> Django view + template** in the rebuild. "Endpoints" are the backend service operations
> from the spec (its §4–§6). "Actions" are the buttons. Services named `xSvc.list()` are
> reference‑data lookups to fill dropdowns (routes, fare classes, payment methods, points,
> trips, vehicles, plans, types).
>
> **Patterns used everywhere:**
> - List screens: a filter bar (search `q`, date range, status/type/trip filters) + a
>   paginated table + per‑row action buttons + a **create/edit modal**.
> - Create modals **reset and stay open** after save (for fast repeat entry) — except a few
>   (reservation/colis/bagage/voyage) which close.
> - Printing a receipt/ticket/label/manifest posts the rendered HTML to the **local print
>   agent** (`127.0.0.1:9113`); no server print dialog.
> - Money entry shows **amount received → change due** live.

---

## 1. Billetterie / Ticketing  (`voyages-booking`)

### 1.1 `new-booking` — Sell a ticket (the core wizard)
A flat, single‑form sale (one‑way or round‑trip).
- **Fields:** `tripType` (one_way/round_trip), `routeCode`, `destinationId` (segment),
  `fareClassId`, `outDate`, `outSlotId` (time slot), `outboundTripId`, `outSeatId`;
  round‑trip adds `retDate`, `retSlotId`, `returnTripId`, `retSeatId`, `returnOpen` (leave
  return trip open); `paymentMethod`, `holdUntil` (to reserve instead of sell).
- **Lookups:** `routeSvc.list`, `fcSvc.list` (fare classes), `tsSvc.list` (time slots),
  `pmSvc.list` (payment methods); `routeDestinations`/`destinations` (segment points);
  `bookableTrips` (trips matching route/day/slot); `availability` (seats left);
  `seatMap` (interactive seat picker).
- **Action `submit`:** → `svc.create` (sell) **or** `svc.reserve` (if `holdUntil` set), then
  `svc.renderTickets` to print. Maps to backend `create_booking` / `create_reservation` (spec §5.2).
- **Client logic:** cascading dropdowns (route→destinations→trips→seats); seat‑map
  materialised from the trip's plan; passenger captured inline (name + id); live price +
  change.

### 1.2 `bookings` — All tickets (list)
- **Filters:** `q`, `dateField`+`dateFrom/To`, `statusFilter`, `typeFilter`, `tripFilter`,
  `channelFilter` (counter/online).
- **Row actions:** `open` (detail), `cancel`, `noShow`, `printDuplicata` (reprint with
  DUPLICATA watermark → `renderDuplicata`). Top: `newBooking`.
- **Endpoints:** `svc.list`, `svc.cancel`, `svc.noShow`, `svc.renderDuplicata`.

### 1.3 `booking-detail` — One sale + its tickets
- **Shows:** booking header, passengers, per‑ticket status/seat/segment, adjustments history.
- **Actions:** `board` (board ticket), `cancel`, `printTickets` (`renderTickets`/`printData`),
  `goAssignReturn`; **Report** a ticket (`openReport`→`submitReport`→`reportTicket`: move to
  another trip — fields `rpTrip`, `rpSeat`, `rpReason`); **Regularize** (`openRegularize`→
  `submitRegularize`→`regularizeTicket`: fields `rgClass`, `rgDest`, `rgPay`, `rgReason`).
- Maps to backend `board_ticket`, `cancel_booking`, `report_ticket`, `regularize_ticket`.

### 1.4 `reservations` — Unpaid holds
- **List** of held seats; **Pay** (`openPay`→`submitPay`→`svc.pay`, fields `payAmount`,
  `payMethod`) converts a hold to a sale; **Cancel** (`svc.cancel`) releases it.
- Maps to `pay_reservation` / `release_reservation` (spec §5.2). (Expired holds auto‑release
  server‑side.)

### 1.5 `open-returns` — Tickets awaiting a return leg
- **List** round‑trip tickets with `returnOpen`. Pick a return trip (`pick`/`cancelPick`,
  fields `date`, `slotId`, `fareClassId`, `returnTripId`) → `assign` (`svc.assignReturn`).
- Lookups: `openReturns`, `bookableTrips`, `seatMap`.

### 1.6 `cancelled` — Cancelled tickets + vouchers
- Date‑range list (`cancelledBookings`); `voucher` prints a cancellation voucher
  (`cancellationVoucher`).

### 1.7 `passengers` — Customer directory
- CRUD: `openCreate`/`openEdit`/`delete` → `svc.create`/`update`/`delete`.
- **Fields:** `name` (single), `gender`, `civility`, `birth_date`, `phone`, `email`,
  `id_type`, `id_number`, `notes`. `showLoyalty` → `svc.loyalty` (points).

---

## 2. Colis & Bagages  (`voyages-consignment`)

### 2.1 `parcels` — Register & list parcels ("Nouveau colis" / "Tout Afficher")
- **Filters:** `q`, `originFilter`, `destFilter`, `statusFilter`, `typeFilter`, `tripFilter`,
  `dateField`+range.
- **Create/edit** (`openCreate`/`openEdit` → `svc.create`/`edit`): route (origin/dest),
  sender (name/phone, or client), recipient (name/phone/address/id), content
  (`consignment_type` → price fixed/range/free, quantity, declared value, weight), payment.
- **Row actions:** `showDetail` (tracking timeline), `printReceipt`, `printLabel`,
  `doPickup` (`open? ` → `svc.pickup`; fields `pickupKind` destinataire/mandataire,
  `pickupName`, `pickupId`, `pickupPhone`), `cancel`, `bulkCancel` (`svc.bulk`).
- **Numbering:** `openNumbering`→`saveNumbering` (`getNumbering`/`setNumbering`) — set next
  reference number (forward‑only).
- Maps to `register_parcel`, `pickup_parcel`, `cancel_parcel`, numbering (spec §6.3).

### 2.2 `manifest` — Expédition (dispatch to a trip)
- **Step 1 filters:** `fRoute`, `fDest`, `fDay` (defaults today), `tripId` (vehicle/code).
- **Two panes:** ready parcels ↔ parcels on the trip. **Actions:** `loadOne`/`loadSelected`
  (assign), `validateAll`, `unvalidate`, `withdraw`/`withdrawAll` (**admin‑only** once
  validated), `printManifest`.
- **Client logic:** `routeServes(route, point)` filters trips that actually serve the
  destination (origin/stop/destination). Lookups `routeSvc`, `spSvc`, `tripSvc`.
- Maps to shipment dispatch/withdraw (spec §6.3).

### 2.3 `reception` — Réception colis (arrival)
- **Filters:** `fRoute`, `fDest`, `q`. List of in‑transit shipments; per row enter
  received/missing/damaged → `receiveOne` (`svc.receiveShipment`); `arrivedShipments` loads.

### 2.4 `pickup` — Retrait colis
- Tabs **À retirer / Retirés** (`setTab`). `openPickup`/`openMandate` → `confirm`
  (`svc.pickup`): fields `pName`, `pCni`, `pPhone`, `pQty` (partial). `showDetail` tracking.

### 2.5 `livraison` — Home delivery (paid)
- Tabs À livrer / Livrées. `deliver`/`livrer`→`svc.deliverHome`: fields `address`, `amount`,
  `deliveredTo`, `deliveredToId`, `paymentMethod`. Records delivery income.

### 2.6 `baggage` — Bagages
- CRUD + trip attach. Create: trip + passenger (optional) / sender identity, type, qty,
  value, fare. Row: `printTicket`, `printLabel`, `doDeliver` (`askDeliver`→`svc.deliver`,
  `deliverComment`), `cancel`, `bulk`.

### 2.7 `baggage-retrait` — Baggage withdrawal
- Search by `ref`; `remit` (`svc.deliver`) hands over to the passenger (`comment`).

---

## 3. Voyages / Trips  (`voyages`)

### 3.1 `list` — Trips
- **Filters:** `filterRoute`, `filterStatus`, `filterVehicle`, `dateField`+range.
- **Create** (`openCreate`→`svc.create`): route, fare class, voyage type, seating plan,
  vehicle (optional), schedule, crew (`crewPick`/`removeCrew`), limits.
- **Generate** (`openGen`→`generate`→`svc.generateBatch`): from a service pattern
  (`genPatternId`, `genStart`, `genEnd`).
- **Row lifecycle actions:** `submitTrip`, `departTrip`, `completeTrip`, `suspendTrip`,
  `resumeTrip`, `cancelTrip`, `markDelayed`/`clearDelay`, `deleteTrip`; `printManifest`,
  `roadmap`, `goReservations`, `goExpenses`, `open` (detail).
- Lookups: routes, fare classes, plans, vehicles, voyage types, crew.

### 3.2 `trip-detail` — One trip
- **Vehicle:** `assign`/`removeVehicle` (`assignVehicle`/`unassignVehicle`,
  `eligibleVehicles`). **Seats:** `listSeats`, `blockSeats`/`unblockSeats`. **Crew:**
  `addCrew`/`removeCrew`. **Lifecycle:** submit/depart/complete/suspend/resume/cancel,
  markDelayed/clearDelay. **Expenses:** `tripExpenses`, `tripResult` (net).
- **Transbordement** (`openTransbord`→`doTransbord`, fields `tbVehicle`, `tbOverflowTrip`,
  `tbReason`, `tbNote`) and **Selection** (`openSelection`→`doSelection`) move
  passengers/parcels to another vehicle/trip (`transbord*`, `selectionOptions`).

### 3.3 `roadmap` — Boarding / feuille de route
- `load`/`get`; `board`/`boardAll` (`boardAll`), `openPdf` (`svc.pdf`) — driver's manifest +
  boarding.

### 3.4 `transbordement` — Standalone transfer tool
- `doVehicle` (vehicle→vehicle) / `doGeneral` (trip overflow): `srcTrip`, `srcVehicle`,
  `targetVehicle`, `gDestTrip`, reasons.

---

## 4. Configuration  (`voyages-config`) — reference CRUD

All are list + create/edit‑modal CRUD screens (search + table + modal), company‑scoped.
Map each to a Django `ListView`/`CreateView`/`UpdateView` pair.

| Screen | Manages (→ spec) |
|---|---|
| `towns` | Towns (§1.1) |
| `service-points` | ServicePoints / points & agencies (§1.1) |
| `routes` | Routes + stops (§1.1) |
| `fare-classes` | FareClass (§1.2) |
| `time-slots` | TimeSlot (§1.2) |
| `consignment-types` | Parcel types + pricing fixed/range (§1.2) |
| `consignment-natures` | Parcel natures (§1.2) |
| `seating-plans` | SeatingPlan + numeric layout (§1.3) |
| `service-patterns` | ServicePattern (trip auto‑gen) (§1.4) |
| `voyage-types` | VoyageType (§1.5) |
| `settings` | VoyagesSettings flags incl. partial pickup, parcel caps (§1.6) |
| `manifest-template` | Doc header/footer (§1.7) |
| `ticket-template` | Printed ticket layout (§1.7) |
| `workstation-printers` | **Per‑PC** printer choice (Imprimantes ce poste, §9) |
| `crew-member-types` | Crew role types |
| `expense-types` / `expense-schedules` | Trip expense types + auto‑seed schedules |
| `loyalty-rules` | Loyalty accrual rules |

---

## 5. Fleet  (`fleet`) — CRUD + logs

| Screen | Manages (→ spec §3) |
|---|---|
| `vehicles` | Vehicle (incl. partner % split, seating plan, driver) |
| `brands` / `models` | VehicleBrand / VehicleModel |
| `documents` | VehicleDocument (expiry alerts) |
| `assignments` | Vehicle↔driver assignment |
| `crew` | Crew members |
| `external-drivers` | ExternalDriver |
| `fuel-logs` | FuelLog |
| `parking` | Parking lots |
| `suppliers` | Suppliers |
| `contracts` | Contracts |
| `dashboard` | Fleet KPIs |

(Accidents are voyage‑driven — created from a trip, no status workflow.)

---

## 6. Treasury  (`treasury`) — where transport money lands

Transport actions feed these; reproduce the integration (spec §7).

| Screen | Role |
|---|---|
| `registers` | Cash registers (caisses) — guichet vs principale |
| `sessions` | Open/close/schedule sessions (RBAC `treasury.session.manage`) |
| `recettes` | Income read from transactions: ticket/colis/bagage/livraison |
| `refunds` | Refund config per type (percentage/fixed, default 0%) + refund list |
| `expenses` | Voyage + general expenses, disbursed from a principale register |
| `operations` / `movements` / `transfers` | Cash operations, movements, inter‑register transfers |
| `partners` | Partner net‑share results (Gross − Expenses = Net) |
| `banks` / `config` / `dashboard` | Bank accounts, treasury config, KPIs |

---

## 7. Rebuild notes (frontend → Django)

- **Each list screen** → a Django `ListView` with a filter form (GET params mirror the
  Angular filters: `q`, `date_from/to`, `status`, `trip`, `type`…) + server‑side pagination
  + row action links/forms.
- **Each create/edit modal** → a Django ModelForm rendered in a modal (or a page); POST →
  the matching service function; on success re‑render the list (or re‑open blank for the
  "stay open" screens).
- **Lifecycle buttons** (depart/cancel/board/receive/pickup…) → small POST forms hitting a
  view that calls the one transition service (never set `status` directly).
- **Cascading dropdowns** (route→destinations→trips→seats; dispatch filters) → either HTMX
  partials or a few JSON endpoints; the `routeServes`/`availability`/`seatMap` logic moves
  server‑side.
- **Seat picker & two‑pane dispatch** are the only genuinely interactive pieces — keep a
  little JS (or HTMX) there; everything else is forms + tables.
- **Printing** — return a server‑rendered PDF, or keep the local print‑agent POST for thermal
  label printers (spec §9).

---

*Paired with `transport-module-spec.md`. Together they give the data model + rules (backend)
and the screens + flows (frontend) needed to reproduce the Transport module in a single
server‑rendered Django app.*
