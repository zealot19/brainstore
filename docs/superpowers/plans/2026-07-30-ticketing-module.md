# Ticketing Module (Phase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Angular admin UI for the existing `ticketing` backend — customers, bookings (segment + seat), ticket/QR, luggage, boarding/scan, dashboard — segment-aware from the start.

**Architecture:** Mirror the fleet/transport/voyage frontend pattern: `TICKETING` endpoint group, `ticketing.models.ts`, per-entity services under `services/ticketing/`, standalone components under `pages/ticketing/`, lazy routes + « Billetterie » sidebar block. Reuse the voyage `TripService` and transport `RouteService`/`FareService`/`VehicleCategoryService` for the booking flow. Extend the shared `SeatMapComponent` with a selectable mode. QR rendered client-side.

**Tech Stack:** Angular 21 standalone components, RxJS, Bootstrap 5 modals, `qrcode` npm (client-side QR). No backend changes.

## Global Constraints

- **No test framework exists** (frontend). Verification per task = `cd angular && npx ng build` (compile/type-check) plus the stated manual check. No jasmine.
- **No backend changes** in Phase 1 — all endpoints already exist.
- All user-facing copy in **French**; currency **XAF**.
- Every component is `standalone`, `imports: [CommonModule, FormsModule, ReactiveFormsModule]` (+ `RouterModule` where links/outlets are used), `templateUrl`. Mirror `pages/fleet/brands/brands.component.{ts,html}` for plain CRUD.
- **Do not send `company_id`** — backend infers company from the user.
- Booking POST body (matches `BookingWriteSerializer`): `trip_id`, `customer_id`, `passenger_type`, `seat_number`, `boarding_terminal_id`, `alighting_terminal_id`, `fare_id`, `amount_paid`, `notes`.
- QR: use the **`qrcode`** npm package (not angularx-qrcode — Angular 21 peer-dep risk).
- Build from `angular/`. Commit after each task. Branch: `feature/ticketing-ui`.

---

### Task 1: Endpoints + models

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (append `TICKETING`)
- Create: `angular/src/_api/models/ticketing.models.ts`

**Interfaces:**
- Produces: `TICKETING` endpoints; `Customer`, `Booking`, `Ticket`, `Luggage`, `BookingStats`, `IdType`, `BookingStatus`, `LuggageStatus`, `PassengerType`.

- [ ] **Step 1: Append `TICKETING` to `api.config.ts`** (before `PUBLIC_URLS`):

```typescript
export const TICKETING = {
  stats:     `${API_BASE}/ticketing/bookings/stats/`,
  scan:      `${API_BASE}/ticketing/bookings/scan/`,

  customers: `${API_BASE}/ticketing/customers/`,
  customer:  (id: string) => `${API_BASE}/ticketing/customers/${id}/`,

  bookings:  `${API_BASE}/ticketing/bookings/`,
  booking:   (id: string) => `${API_BASE}/ticketing/bookings/${id}/`,
  bookingConfirm: (id: string) => `${API_BASE}/ticketing/bookings/${id}/confirm/`,
  bookingBoard:   (id: string) => `${API_BASE}/ticketing/bookings/${id}/board/`,
  bookingCancel:  (id: string) => `${API_BASE}/ticketing/bookings/${id}/cancel/`,
  bookingNoShow:  (id: string) => `${API_BASE}/ticketing/bookings/${id}/no-show/`,

  tripBookings: (tripId: string) => `${API_BASE}/ticketing/trips/${tripId}/bookings/`,

  luggageList: (bookingId: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/`,
  luggage:     (bookingId: string, id: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/${id}/`,
  luggageStatus: (bookingId: string, id: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/${id}/status/`,
};
```

- [ ] **Step 2: Create `ticketing.models.ts`** (field names match the DRF read serializers):

```typescript
export type IdType = 'cni' | 'passport' | 'driver_license' | 'other';
export type PassengerType = 'adult' | 'child' | 'student' | 'senior';
export type BookingStatus = 'pending' | 'confirmed' | 'boarded' | 'cancelled' | 'no_show';
export type LuggageStatus = 'checked_in' | 'loaded' | 'delivered' | 'lost';

export interface Customer {
  id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  id_type: IdType;
  id_type_display: string;
  id_number: string;
  date_of_birth: string | null;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface Ticket {
  id: string;
  ticket_number: string;
  qr_code: string;      // UUID
  issued_at: string;
  is_used: boolean;
  used_at: string | null;
}

export interface Luggage {
  id: string;
  tag_number: string;
  description: string;
  weight_kg: string | null;
  status: LuggageStatus;
  status_display: string;
  created_at: string;
}

export interface BookingTripSummary {
  id: string;
  reference: string;
  from_city: string;
  to_city: string;
  departure_datetime: string;
  status: string;
}

export interface Booking {
  id: string;
  reference: string;
  status: BookingStatus;
  status_display: string;
  trip: BookingTripSummary;
  customer: Customer;
  passenger_type: PassengerType;
  passenger_type_display: string;
  seat_number: string;
  boarding_terminal: string | null;
  boarding_terminal_name: string | null;
  alighting_terminal: string | null;
  alighting_terminal_name: string | null;
  amount_paid: string;
  ticket: Ticket | null;
  luggage_items: Luggage[];
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface BookingStats {
  total: number;
  pending: number;
  confirmed: number;
  boarded: number;
  cancelled: number;
  no_show: number;
  revenue: string;
}
```

- [ ] **Step 3: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: `Application bundle generation complete`.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/ticketing.models.ts
git commit -m "feat(ticketing-fe): endpoints and models"
```

---

### Task 2: Services

**Files:**
- Create: `angular/src/_api/services/ticketing/customer.service.ts`
- Create: `angular/src/_api/services/ticketing/booking.service.ts`
- Create: `angular/src/_api/services/ticketing/luggage.service.ts`

**Interfaces:**
- Consumes: `TICKETING`, ticketing models.
- Produces: `CustomerService` (`list/get/create/update/delete`), `BookingService` (`list/get/create/confirm/board/cancel/noShow/stats/scan/tripBookings`), `LuggageService` (`list/add/remove/setStatus`).

- [ ] **Step 1: `customer.service.ts`** — mirror `services/transport/city.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TICKETING } from '../../config/api.config';
import { Customer } from '../../models/ticketing.models';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}
  list(opts?: { search?: string }): Observable<Customer[]> {
    let params = new HttpParams().set('page_size', '500');
    if (opts?.search) params = params.set('search', opts.search);
    return this.http.get<Customer[]>(TICKETING.customers, { params });
  }
  get(id: string): Observable<Customer> { return this.http.get<Customer>(TICKETING.customer(id)); }
  create(data: Record<string, unknown>): Observable<Customer> { return this.http.post<Customer>(TICKETING.customers, data); }
  update(id: string, data: Record<string, unknown>): Observable<Customer> { return this.http.patch<Customer>(TICKETING.customer(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TICKETING.customer(id)); }
}
```

- [ ] **Step 2: `booking.service.ts`**:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TICKETING } from '../../config/api.config';
import { Booking, BookingStats } from '../../models/ticketing.models';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}
  list(opts?: { status?: string; trip_id?: string }): Observable<Booking[]> {
    let params = new HttpParams().set('page_size', '200');
    if (opts?.status)  params = params.set('status', opts.status);
    if (opts?.trip_id) params = params.set('trip_id', opts.trip_id);
    return this.http.get<Booking[]>(TICKETING.bookings, { params });
  }
  get(id: string): Observable<Booking> { return this.http.get<Booking>(TICKETING.booking(id)); }
  create(data: Record<string, unknown>): Observable<Booking> { return this.http.post<Booking>(TICKETING.bookings, data); }
  confirm(id: string): Observable<Booking> { return this.http.post<Booking>(TICKETING.bookingConfirm(id), {}); }
  board(id: string): Observable<Booking> { return this.http.post<Booking>(TICKETING.bookingBoard(id), {}); }
  cancel(id: string): Observable<Booking> { return this.http.post<Booking>(TICKETING.bookingCancel(id), {}); }
  noShow(id: string): Observable<Booking> { return this.http.post<Booking>(TICKETING.bookingNoShow(id), {}); }
  stats(): Observable<BookingStats> { return this.http.get<BookingStats>(TICKETING.stats); }
  scan(qr_code: string): Observable<Booking> { return this.http.post<Booking>(TICKETING.scan, { qr_code }); }
  tripBookings(tripId: string): Observable<Booking[]> { return this.http.get<Booking[]>(TICKETING.tripBookings(tripId)); }
}
```

- [ ] **Step 3: `luggage.service.ts`**:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TICKETING } from '../../config/api.config';
import { Luggage } from '../../models/ticketing.models';

@Injectable({ providedIn: 'root' })
export class LuggageService {
  constructor(private http: HttpClient) {}
  list(bookingId: string): Observable<Luggage[]> { return this.http.get<Luggage[]>(TICKETING.luggageList(bookingId)); }
  add(bookingId: string, data: Record<string, unknown>): Observable<Luggage> { return this.http.post<Luggage>(TICKETING.luggageList(bookingId), data); }
  remove(bookingId: string, id: string): Observable<unknown> { return this.http.delete(TICKETING.luggage(bookingId, id)); }
  setStatus(bookingId: string, id: string, status: string): Observable<Luggage> { return this.http.post<Luggage>(TICKETING.luggageStatus(bookingId, id), { status }); }
}
```

- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/services/ticketing/
git commit -m "feat(ticketing-fe): services"
```

---

### Task 3: SeatMapComponent — selectable mode

**Files:**
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.ts`
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.html`
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.css`

**Interfaces:**
- Produces: new `@Input() selectable`, `@Input() occupied: string[]`, `@Input() selected: string | null`, `@Output() seatPicked: EventEmitter<string>`. Display-only behaviour unchanged when `selectable` is false.

- [ ] **Step 1: `seat-map.component.ts`** — add `Output`/`EventEmitter` import and inputs/handler:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
```
Add inside the class:
```typescript
  @Input() selectable = false;
  @Input() occupied: string[] = [];
  @Input() selected: string | null = null;
  @Output() seatPicked = new EventEmitter<string>();

  isOccupied(seat: number): boolean { return this.occupied.includes(String(seat)); }
  isSelected(seat: number): boolean { return this.selected === String(seat); }
  pick(seat: number): void {
    if (!this.selectable || this.isOccupied(seat)) return;
    this.seatPicked.emit(String(seat));
  }
```

- [ ] **Step 2: `seat-map.component.html`** — make seats clickable/stateful:

```html
        } @else {
          <span class="seat-map__seat"
                [class.seat-map__seat--occupied]="isOccupied(cell)"
                [class.seat-map__seat--selected]="isSelected(cell)"
                [class.seat-map__seat--clickable]="selectable && !isOccupied(cell)"
                (click)="pick(cell)">{{ cell }}</span>
        }
```

- [ ] **Step 3: `seat-map.component.css`** — add states:

```css
.seat-map__seat--clickable { cursor: pointer; }
.seat-map__seat--clickable:hover { border-color: #6c5ce7; }
.seat-map__seat--occupied { background: #e9ecef; color: #adb5bd; cursor: not-allowed; }
.seat-map__seat--selected { background: #6c5ce7; color: #fff; border-color: #6c5ce7; }
```

- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success. (Existing vehicle-category preview still compiles — new inputs are optional.)
- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/shared/seat-map/
git commit -m "feat(shared): seat-map selectable mode"
```

---

### Task 4: Customers screen

**Files:**
- Create: `angular/src/_api/pages/ticketing/customers/customers.component.ts`
- Create: `angular/src/_api/pages/ticketing/customers/customers.component.html`

**Interfaces:**
- Consumes: `CustomerService`, `Customer`.
- Produces: `TicketingCustomersComponent` (selector `app-ticketing-customers`).

- [ ] **Step 1:** Copy `pages/fleet/brands/brands.component.ts` structure into `customers.component.ts`; class `TicketingCustomersComponent`, selector `app-ticketing-customers`, inject `CustomerService`. Form fields: `first_name`* , `last_name`* , `phone`* , `email` (''), `id_type` ('cni'), `id_number` (''), `date_of_birth` (null), `notes` (''). Modal id `customer-modal`. `applyFilter` matches full_name/phone. Delete confirm `'Supprimer ce client ?'`. Define `idTypes = [{value:'cni',label:'CNI'},{value:'passport',label:'Passeport'},{value:'driver_license',label:'Permis'},{value:'other',label:'Autre'}]`.
- [ ] **Step 2:** `customers.component.html` mirrors brands: header "Clients"/"Répertoire des passagers"; stat card total; search; table columns Nom (`full_name`), Téléphone, Email, Pièce (`id_type_display` + `id_number`), Actions. Modal `#customer-modal` with the fields (id_type `<select>` over `idTypes`, date_of_birth `type="date"`).
- [ ] **Step 3: Build** — success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/ticketing/customers/
git commit -m "feat(ticketing-fe): customers screen"
```

---

### Task 5: Bookings list + new-booking flow

**Files:**
- Create: `angular/src/_api/pages/ticketing/bookings/bookings.component.ts`
- Create: `angular/src/_api/pages/ticketing/bookings/bookings.component.html`

**Interfaces:**
- Consumes: `BookingService`, `CustomerService`, voyage `TripService` (`../../../services/voyage/trip.service`), transport `RouteService` (`points`), transport `FareService` (`list`), transport `VehicleCategoryService` (`get`), models `Booking`, `Customer`, voyage `Trip`, transport `RoutePoint`, `VehicleCategory`.
- Produces: `TicketingBookingsComponent` (selector `app-ticketing-bookings`, uses `RouterModule` + `SeatMapComponent`).

- [ ] **Step 1:** `bookings.component.ts`:
  - `ngOnInit`: `load()` bookings; load `customers` (CustomerService.list) and `trips` via voyage `TripService.list({ status: 'scheduled' })`.
  - Filters `statusFilter`, `tripFilter` → `BookingService.list(...)`.
  - `passengerTypes = [{value:'adult',label:'Adulte'},{value:'child',label:'Enfant'},{value:'student',label:'Étudiant'},{value:'senior',label:'Senior'}]`.
  - Booking form: `trip_id`* , `customer_id`* , `passenger_type` ('adult'), `boarding_terminal_id` (''), `alighting_terminal_id` (''), `seat_number` (''), `fare_id` (null), `amount_paid` (0), `notes` ('').
  - `selectedTrip: Trip | null`; `routePoints: RoutePoint[] = []`; `category: VehicleCategory | null = null`; `occupiedSeats: string[] = []`.
  - `onTripChange(tripId)`: find trip in `trips`; set `selectedTrip`; load `RouteService.points(trip.route.id)` → `routePoints` (default boarding=first, alighting=last); load `VehicleCategoryService.get(trip.vehicle_category.id)` → `category` (for seat map layout); load `BookingService.tripBookings(tripId)` → set `occupiedSeats` = active bookings' `seat_number` (status in confirmed/boarded/pending, non-empty); reset seat_number.
  - `onSegmentOrTypeChange()`: call `suggestFare()`.
  - `suggestFare()`: if trip + boarding + alighting set, `FareService.list({ route_id: selectedTrip.route.id, origin_terminal_id, destination_terminal_id, vehicle_category_id: selectedTrip.vehicle_category.id, passenger_type })` → take first; patch `fare_id` and `amount_paid` from it (if none, clear fare_id, leave amount editable).
  - `onSeatPicked(seat)`: patch `seat_number`.
  - `originOptions`/`destinationOptions(originId)`: same pattern as fares screen.
  - `get isFreeSeating(): boolean { return !!this.selectedTrip?.vehicle_category?.free_seating; }`
  - `openCreate()`: reset form + clear selectedTrip/routePoints/category/occupiedSeats.
  - `addQuickCustomer(name/phone…)`: out of scope — instead the customer select includes existing customers only; a "+ Nouveau client" button opens the customers modal is **not** required. Simpler: a `newCustomer` sub-form inside the modal toggled by `creatingCustomer` boolean; on submit if `creatingCustomer`, first `CustomerService.create(...)` then use returned id. (Fields: first_name, last_name, phone.)
  - `submit()`: if `creatingCustomer`, create the customer first then continue; POST booking via `BookingService.create(form.value)`; on success reload + close `#booking-modal`.
  - Status actions `board/cancel/noShow/confirm` calling the service then `load()`; `statusClass(s)` badge helper (pending=warning, confirmed=info, boarded=success, cancelled=danger, no_show=secondary).
  - `imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SeatMapComponent]`.
- [ ] **Step 2:** `bookings.component.html`:
  - Header "Réservations" + "Nouvelle réservation" button.
  - Filter row: status select + trip select.
  - Table: Référence, Client (`customer.full_name`), Trajet (`trip.from_city → trip.to_city`), Segment (`boarding_terminal_name || trip.from_city` → `alighting_terminal_name || trip.to_city`), Place (`seat_number || '—'`), Montant (`amount_paid`), Statut badge, Actions (detail routerLink `/ticketing/bookings/:id`, board if confirmed, cancel, no-show, per status).
  - Modal `#booking-modal` (`modal-lg`): trip `<select>` (`(change)="onTripChange(form.value.trip_id)"`); customer `<select>` + a "Nouveau client" checkbox toggling three inputs; passenger_type select (`(change)="onSegmentOrTypeChange()"`); origin/destination selects (from routePoints, `(change)="onSegmentOrTypeChange()"`); amount_paid input; when `!isFreeSeating && category`, render `<app-seat-map [selectable]="true" [rows]="category.seat_rows" [cols]="category.seat_cols" [aisleAfterCol]="category.aisle_after_col" [hasBackRow]="category.has_back_row" [totalSeats]="category.total_seats" [occupied]="occupiedSeats" [selected]="form.value.seat_number" (seatPicked)="onSeatPicked($event)">` with the chosen seat shown; notes.
- [ ] **Step 3: Build** — success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/ticketing/bookings/
git commit -m "feat(ticketing-fe): bookings list and new-booking flow"
```

---

### Task 6: Booking detail (ticket + QR + print + luggage)

**Files:**
- Modify: `angular/package.json` (add `qrcode`)
- Create: `angular/src/_api/pages/ticketing/booking-detail/booking-detail.component.ts`
- Create: `angular/src/_api/pages/ticketing/booking-detail/booking-detail.component.html`
- Create: `angular/src/_api/pages/ticketing/booking-detail/booking-detail.component.css`

**Interfaces:**
- Consumes: `BookingService`, `LuggageService`, `Booking`, `Luggage`; `ActivatedRoute`; `qrcode`.
- Produces: `BookingDetailComponent` (selector `app-ticketing-booking-detail`).

- [ ] **Step 1: Install QR lib**

Run: `cd angular && npm install qrcode && npm install -D @types/qrcode`
Expected: added to `package.json`.

- [ ] **Step 2:** `booking-detail.component.ts`:
  - Read `id` from `ActivatedRoute`. `load()` via `BookingService.get(id)` → `booking`. On load, if `booking.ticket`, render QR: `import QRCode from 'qrcode'; QRCode.toDataURL(booking.ticket.qr_code).then(url => this.qrDataUrl = url)`.
  - Luggage: `luggage: Luggage[]` via `LuggageService.list(id)`; `luggageForm` (description, weight_kg); `addLuggage()`, `removeLuggage(l)`, `setLuggageStatus(l, status)` (`luggageStatuses = [{value:'checked_in',label:'Enregistré'},{value:'loaded',label:'Chargé'},{value:'delivered',label:'Livré'},{value:'lost',label:'Perdu'}]`).
  - Status actions confirm/board/cancel/noShow reloading booking.
  - `print(): void { window.print(); }`.
  - `imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]`.
- [ ] **Step 3:** `booking-detail.component.html`:
  - Header with back link `/ticketing/bookings`, reference + status badge + status action buttons.
  - **Summary card** (class `no-print` optional): customer, trip, segment (`boarding_terminal_name || '—'` → `alighting_terminal_name || '—'`), seat, amount.
  - **Ticket card** (id `ticket-print`): company/agency title, customer name, trip trajet + departure, segment, seat, price, `ticket_number`, and `<img [src]="qrDataUrl" alt="QR">`. A "Imprimer" button `(click)="print()"`.
  - **Luggage card:** table (tag_number, description, weight, status `<select>` bound to `setLuggageStatus`) + add form + remove button.
- [ ] **Step 4:** `booking-detail.component.css` — print rules:

```css
@media print {
  body * { visibility: hidden; }
  #ticket-print, #ticket-print * { visibility: visible; }
  #ticket-print { position: absolute; left: 0; top: 0; width: 100%; }
  .no-print { display: none !important; }
}
```

- [ ] **Step 5: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success (a CommonJS warning for `qrcode` is acceptable, like the existing `ngx-filesaver` warning).
- [ ] **Step 6: Commit**

```bash
git add angular/package.json angular/package-lock.json angular/src/_api/pages/ticketing/booking-detail/
git commit -m "feat(ticketing-fe): booking detail with QR ticket and luggage"
```

---

### Task 7: Boarding (manifest + scan)

**Files:**
- Create: `angular/src/_api/pages/ticketing/boarding/boarding.component.ts`
- Create: `angular/src/_api/pages/ticketing/boarding/boarding.component.html`

**Interfaces:**
- Consumes: `BookingService` (`tripBookings`, `scan`, `board`), voyage `TripService` (`list`), `Booking`, voyage `Trip`.
- Produces: `BoardingComponent` (selector `app-ticketing-boarding`).

- [ ] **Step 1:** `boarding.component.ts`:
  - `ngOnInit`: load `trips` via voyage `TripService.list({})` (all upcoming/boarding). `selectedTripId = ''`, `manifest: Booking[] = []`, `scanCode = ''`, `scanMsg = ''`, `scanOk = false`.
  - `onTripChange()`: if selected, `BookingService.tripBookings(selectedTripId)` → `manifest`.
  - `submitScan()`: `BookingService.scan(scanCode)` → on success `scanOk=true; scanMsg='Embarqué: ' + b.customer.full_name`, reload manifest; on error `scanOk=false; scanMsg = err.error.detail`. Clear `scanCode`.
  - `board(b)`: `BookingService.board(b.id)` → reload manifest.
  - `statusClass(s)` badge helper (same mapping as bookings).
- [ ] **Step 2:** `boarding.component.html`:
  - Header "Embarquement".
  - Trip `<select>` bound to `selectedTripId` (`(ngModelChange)="onTripChange()"`), options `{{ t.reference }} — {{ t.from_city }} → {{ t.to_city }} ({{ t.departure_datetime | date:'dd/MM HH:mm' }})`.
  - **Scan box:** an input bound to `scanCode` with `(keyup.enter)="submitScan()"` + a "Valider" button; show `scanMsg` in a success/danger alert via `scanOk`.
  - **Manifest table:** Référence, Passager (`customer.full_name`), Segment, Place, Statut badge, Action (Embarquer button when status === 'confirmed'). Empty state "Aucune réservation."
- [ ] **Step 3: Build** — success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/ticketing/boarding/
git commit -m "feat(ticketing-fe): boarding manifest and QR scan"
```

---

### Task 8: Dashboard

**Files:**
- Create: `angular/src/_api/pages/ticketing/dashboard/dashboard.component.ts`
- Create: `angular/src/_api/pages/ticketing/dashboard/dashboard.component.html`

**Interfaces:**
- Consumes: `BookingService` (`stats`, `list`), `BookingStats`, `Booking`.
- Produces: `TicketingDashboardComponent` (selector `app-ticketing-dashboard`, uses `RouterModule`).

- [ ] **Step 1:** `dashboard.component.ts`: `ngOnInit` loads `stats` via `BookingService.stats()` and `recent: Booking[]` via `BookingService.list({})` (first ~10). `loading` flag.
- [ ] **Step 2:** `dashboard.component.html`: header "Tableau de bord — Billetterie"; stat tiles (mirror voyage dashboard card style): Total, En attente (`pending`), Confirmées (`confirmed`), Embarquées (`boarded`), Annulées (`cancelled`), No-show (`no_show`), and a **Revenu** tile (`{{ stats?.revenue }} XAF`). Below, a "Réservations récentes" card listing `recent` (reference, client, trajet, montant, statut) with detail links, and a "Voir toutes" link to `/ticketing/bookings`.
- [ ] **Step 3: Build** — success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/ticketing/dashboard/
git commit -m "feat(ticketing-fe): dashboard"
```

---

### Task 9: Wire routes + menu

**Files:**
- Create: `angular/src/_api/pages/ticketing/ticketing.component.ts` (router-outlet wrapper)
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/helpers/routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: all Task 4–8 components.
- Produces: reachable `/ticketing/*` routes + « Billetterie » sidebar group.

- [ ] **Step 1:** Create `ticketing.component.ts` like `pages/voyage/voyage.component.ts` (selector `app-ticketing`, class `TicketingComponent`, template `<router-outlet></router-outlet>`).
- [ ] **Step 2:** In `pages.routes.ts`, add after the `voyage` module block:

```typescript
      // ── MODULE : Billetterie ──────────────────────────────────────────────────
      {
        path: 'ticketing',
        loadComponent: () => import('../../../_api/pages/ticketing/ticketing.component').then(m => m.TicketingComponent),
        children: [
          { path: 'dashboard', loadComponent: () => import('../../../_api/pages/ticketing/dashboard/dashboard.component').then(m => m.TicketingDashboardComponent) },
          { path: 'customers', loadComponent: () => import('../../../_api/pages/ticketing/customers/customers.component').then(m => m.TicketingCustomersComponent) },
          { path: 'bookings',  loadComponent: () => import('../../../_api/pages/ticketing/bookings/bookings.component').then(m => m.TicketingBookingsComponent) },
          { path: 'bookings/:id', loadComponent: () => import('../../../_api/pages/ticketing/booking-detail/booking-detail.component').then(m => m.BookingDetailComponent) },
          { path: 'boarding',  loadComponent: () => import('../../../_api/pages/ticketing/boarding/boarding.component').then(m => m.BoardingComponent) },
        ],
      },
```

- [ ] **Step 3:** In `routes.ts`, add after the voyage block:

```typescript
  // ── Billetterie ─────────────────────────────────────────────────────────────
  ticketingDashboard: '/ticketing/dashboard',
  ticketingCustomers: '/ticketing/customers',
  ticketingBookings:  '/ticketing/bookings',
  ticketingBoarding:  '/ticketing/boarding',
```

- [ ] **Step 4:** In `sidebar.service.ts`, add after the Voyages block:

```typescript
        {
          menuValue: 'Billetterie',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'ticket',
          base: 'ticketing',
          subMenus: [
            { menuValue: 'Tableau de bord', route: routes.ticketingDashboard, base: 'dashboard' },
            { menuValue: 'Réservations',    route: routes.ticketingBookings,  base: 'bookings'  },
            { menuValue: 'Clients',         route: routes.ticketingCustomers, base: 'customers' },
            { menuValue: 'Embarquement',    route: routes.ticketingBoarding,  base: 'boarding'  },
          ],
        },
```

- [ ] **Step 5: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 6: Manual smoke check** (backend running + seeded, logged in as `admin@demo.cm`): open `/ticketing/customers` (add one), `/ticketing/bookings` (new booking on the Douala→Yaoundé trip: pick segment Bonabéri→Édéa, confirm fare auto-fills 2000, pick a seat, save), open the booking detail (QR renders, print preview shows the ticket, add a luggage item), `/ticketing/boarding` (select the trip, see the manifest, scan/board), `/ticketing/dashboard` (tiles + revenue).
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/pages/ticketing/ticketing.component.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(ticketing-fe): wire routes and sidebar menu"
```

---

## Self-Review Notes

- **Spec coverage:** §5.1 Dashboard→T8; §5.2 Customers→T4; §5.3 Bookings+flow→T5; §5.4 Booking detail (ticket/QR/print/luggage)→T6; §5.5 Boarding→T7; §6 seat-map selectable→T3; §7 QR dep→T6; plumbing→T1/T2; wiring→T9. Studio/server-PDF/camera-scan intentionally out of scope (spec §8).
- **QR dependency deviation:** spec named `angularx-qrcode`; plan uses framework-agnostic **`qrcode`** because Angular 21 is newer than angularx-qrcode's supported range. Same visual result (a data-URL `<img>`), no Angular peer-dep.
- **Type consistency:** service methods (`list/get/create/confirm/board/cancel/noShow/stats/scan/tripBookings`, luggage `list/add/remove/setStatus`, seat-map `seatPicked`/`occupied`/`selected`/`selectable`) referenced consistently. Booking POST body matches `BookingWriteSerializer` exactly.
- **Reuse:** booking flow reuses voyage `TripService`, transport `RouteService.points`, `FareService.list` (segment filters), `VehicleCategoryService.get` (seat layout), and the extended `SeatMapComponent` — no duplication.
- **Verification adaptation:** no test framework; each task verifies via `npx ng build` + the Task 9 manual smoke check.
