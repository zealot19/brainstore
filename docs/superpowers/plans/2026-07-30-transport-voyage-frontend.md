# Transport-Config & Voyage Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Angular admin UIs for the `transport_config` and `voyage` backend modules, mirroring the existing `fleet` module.

**Architecture:** Standalone Angular components under `src/_api/pages/<module>/<entity>/`, one HttpClient service per entity under `src/_api/services/<module>/`, endpoint constants in `src/_api/config/api.config.ts`, typed models in `src/_api/models/`, lazy routes in `pages.routes.ts`, path constants in `routes.ts`, and menu blocks in `sidebar.service.ts`. UI reuses the DreamsPOS template classes (list + search + stat cards + Bootstrap modal CRUD).

**Tech Stack:** Angular (standalone components, `@if/@for` control flow), TypeScript, RxJS, Bootstrap 5 modals, Tabler/Feather icons. French UI copy.

## Global Constraints

- **No test framework** exists in this frontend (fleet has zero unit tests). The verification cycle for every task is `npx ng build` (compile + type-check succeeds) plus the stated manual check — NOT pytest/jasmine. This deviates from the skill's default TDD cycle by design.
- All user-facing copy in **French**. Currency default **XAF**.
- **Do not send `company_id`** from the frontend; the backend infers company from the authenticated user. No company picker.
- Every component is `standalone` with `imports: [CommonModule, FormsModule, ReactiveFormsModule]` (add `RouterModule` where links/outlets are used) and a `templateUrl`.
- Mirror `src/_api/pages/fleet/brands/brands.component.{ts,html}` as the canonical CRUD template unless a task says otherwise.
- API base is `environment.apiUrl` (already wired). Backend paths: transport → `/transport/…`, voyage → `/voyage/…`.
- Frontend route base paths: `/transport-config/…` and `/voyage/…`.
- Build is run from `angular/`: `cd angular && npx ng build`.
- Commit after each task. Branch: `feature/transport-voyage-ui` (already created).

---

## PHASE 1 — TRANSPORT CONFIG

### Task 1: Transport endpoints + models

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (append `TRANSPORT` const)
- Create: `angular/src/_api/models/transport.models.ts`

**Interfaces:**
- Produces: `TRANSPORT` endpoint object; interfaces `City`, `Terminal`, `Route`, `RouteDetail`, `RouteStop`, `VehicleCategory`, `FareClass`, `Fare`, and the `PassengerType` union.

- [ ] **Step 1: Add `TRANSPORT` to `api.config.ts`** (append after the `FLEET` block, before `PUBLIC_URLS`):

```typescript
export const TRANSPORT = {
  // Cities
  cities: `${API_BASE}/transport/cities/`,
  city:   (id: string) => `${API_BASE}/transport/cities/${id}/`,

  // Terminals
  terminals: `${API_BASE}/transport/terminals/`,
  terminal:  (id: string) => `${API_BASE}/transport/terminals/${id}/`,

  // Routes
  routes:      `${API_BASE}/transport/routes/`,
  route:       (id: string) => `${API_BASE}/transport/routes/${id}/`,
  routeStops:  (id: string) => `${API_BASE}/transport/routes/${id}/stops/`,
  routeStop:   (id: string, stopId: string) => `${API_BASE}/transport/routes/${id}/stops/${stopId}/`,
  routeFares:  (id: string) => `${API_BASE}/transport/routes/${id}/fares/`,

  // Vehicle categories
  vehicleCategories: `${API_BASE}/transport/vehicle-categories/`,
  vehicleCategory:   (id: string) => `${API_BASE}/transport/vehicle-categories/${id}/`,

  // Fare classes
  fareClasses: `${API_BASE}/transport/fare-classes/`,
  fareClass:   (id: string) => `${API_BASE}/transport/fare-classes/${id}/`,

  // Fares
  fares: `${API_BASE}/transport/fares/`,
  fare:  (id: string) => `${API_BASE}/transport/fares/${id}/`,
};
```

- [ ] **Step 2: Create `transport.models.ts`** with the exact interfaces below (field names match the DRF read serializers):

```typescript
// ── City ────────────────────────────────────────────────────────────────────
export interface City {
  id: string;
  name: string;
  code: string;
  region: string;
  country: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ── Terminal ────────────────────────────────────────────────────────────────
export interface Terminal {
  id: string;
  name: string;
  city: string;            // city id
  city_name: string;
  city_code: string;
  address: string;
  phone: string;
  gps_lat: string | null;
  gps_lng: string | null;
  is_active: boolean;
  notes: string;
  created_at: string;
  updated_at: string;
}

// ── Route ───────────────────────────────────────────────────────────────────
export interface Route {
  id: string;
  name: string;
  from_terminal: string;
  from_terminal_name: string;
  from_city: string;
  to_terminal: string;
  to_terminal_name: string;
  to_city: string;
  distance_km: string | null;
  duration_minutes: number | null;
  is_active: boolean;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface RouteStop {
  id: string;
  terminal: string;
  terminal_name: string;
  city_name: string;
  stop_order: number;
  arrival_offset_minutes: number;
  distance_from_start_km: string | null;
}

export interface RouteDetail extends Route {
  stops: RouteStop[];
}

// ── Vehicle Category ──────────────────────────────────────────────────────────
export interface VehicleCategory {
  id: string;
  name: string;
  total_seats: number;
  seat_rows: number;
  seat_cols: number;
  aisle_after_col: number;
  has_back_row: boolean;
  free_seating: boolean;
  has_wifi: boolean;
  has_ac: boolean;
  has_tv: boolean;
  has_usb: boolean;
  has_snack: boolean;
  amenities_list: string[];
  description: string;
  created_at: string;
  updated_at: string;
}

// ── Fare Class ────────────────────────────────────────────────────────────────
export interface FareClass {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ── Fare ──────────────────────────────────────────────────────────────────────
export type PassengerType = 'adult' | 'child' | 'student' | 'senior';

export interface Fare {
  id: string;
  route: string;
  route_name: string;
  vehicle_category: string;
  vehicle_category_name: string;
  fare_class: string;
  fare_class_name: string;
  passenger_type: PassengerType;
  passenger_type_display: string;
  amount: string;
  currency: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
```

- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success (new files compile; nothing imports them yet).
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/transport.models.ts
git commit -m "feat(transport): add endpoints and typed models"
```

---

### Task 2: Transport services

**Files:**
- Create: `angular/src/_api/services/transport/city.service.ts`
- Create: `angular/src/_api/services/transport/terminal.service.ts`
- Create: `angular/src/_api/services/transport/route.service.ts`
- Create: `angular/src/_api/services/transport/vehicle-category.service.ts`
- Create: `angular/src/_api/services/transport/fare-class.service.ts`
- Create: `angular/src/_api/services/transport/fare.service.ts`

**Interfaces:**
- Consumes: `TRANSPORT` (Task 1), transport models (Task 1).
- Produces: `CityService`, `TerminalService`, `RouteService`, `VehicleCategoryService`, `FareClassService`, `FareService`, each `providedIn: 'root'` with `list/get/create/update/delete` and the extra methods noted.

- [ ] **Step 1: `city.service.ts`** — mirror `vehicle-brand.service.ts` structure:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TRANSPORT } from '../../config/api.config';
import { City } from '../../models/transport.models';

@Injectable({ providedIn: 'root' })
export class CityService {
  constructor(private http: HttpClient) {}

  list(opts?: { search?: string; is_active?: boolean }): Observable<City[]> {
    let params = new HttpParams().set('page_size', '500');
    if (opts?.search) params = params.set('search', opts.search);
    if (opts?.is_active !== undefined) params = params.set('is_active', String(opts.is_active));
    return this.http.get<City[]>(TRANSPORT.cities, { params });
  }
  get(id: string): Observable<City> { return this.http.get<City>(TRANSPORT.city(id)); }
  create(data: Record<string, unknown>): Observable<City> { return this.http.post<City>(TRANSPORT.cities, data); }
  update(id: string, data: Record<string, unknown>): Observable<City> { return this.http.patch<City>(TRANSPORT.city(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TRANSPORT.city(id)); }
}
```

- [ ] **Step 2: `terminal.service.ts`** — same shape; `list(opts?: { city_id?; is_active?; search? })` sets `city_id`, `is_active`, `search`; endpoints `TRANSPORT.terminals` / `TRANSPORT.terminal(id)`; type `Terminal`.

- [ ] **Step 3: `route.service.ts`** — type `Route`; `get(id)` returns `RouteDetail`; `list(opts?: { from_city_id?; to_city_id?; is_active?; search? })`. Add stop methods:

```typescript
  listStops(routeId: string): Observable<RouteStop[]> {
    return this.http.get<RouteStop[]>(TRANSPORT.routeStops(routeId));
  }
  addStop(routeId: string, data: Record<string, unknown>): Observable<RouteStop> {
    return this.http.post<RouteStop>(TRANSPORT.routeStops(routeId), data);
  }
  updateStop(routeId: string, stopId: string, data: Record<string, unknown>): Observable<RouteStop> {
    return this.http.patch<RouteStop>(TRANSPORT.routeStop(routeId, stopId), data);
  }
  deleteStop(routeId: string, stopId: string): Observable<unknown> {
    return this.http.delete(TRANSPORT.routeStop(routeId, stopId));
  }
  listFares(routeId: string): Observable<Fare[]> {
    return this.http.get<Fare[]>(TRANSPORT.routeFares(routeId));
  }
```
(import `RouteDetail, Route, RouteStop, Fare` from transport.models.)

- [ ] **Step 4: `vehicle-category.service.ts`** — type `VehicleCategory`; `list(opts?: { search? })`; endpoints `TRANSPORT.vehicleCategories` / `TRANSPORT.vehicleCategory(id)`.

- [ ] **Step 5: `fare-class.service.ts`** — type `FareClass`; `list(opts?: { is_active? })`; endpoints `TRANSPORT.fareClasses` / `TRANSPORT.fareClass(id)`.

- [ ] **Step 6: `fare.service.ts`** — type `Fare`; `list(opts?: { route_id?; vehicle_category_id?; fare_class_id?; passenger_type?; is_active? })`; endpoints `TRANSPORT.fares` / `TRANSPORT.fare(id)`.

- [ ] **Step 7: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 8: Commit**

```bash
git add angular/src/_api/services/transport/
git commit -m "feat(transport): add entity services"
```

---

### Task 3: Cities screen

**Files:**
- Create: `angular/src/_api/pages/transport-config/cities/cities.component.ts`
- Create: `angular/src/_api/pages/transport-config/cities/cities.component.html`

**Interfaces:**
- Consumes: `CityService`, `City`.
- Produces: `CitiesComponent` (selector `app-transport-cities`).

- [ ] **Step 1:** Copy the structure of `fleet/brands/brands.component.ts` into `cities.component.ts`. Rename class `CitiesComponent`, selector `app-transport-cities`, inject `CityService`. Form group fields: `name` (required), `code` (required), `region` (''), `country` ('Cameroon'), `is_active` (true). `applyFilter` matches on name/code/region. Modal id `city-modal`. Delete confirm text `'Supprimer cette ville ?'`.
- [ ] **Step 2:** Write `cities.component.html` mirroring `brands.component.html`: page header "Villes" / "Référentiel des villes desservies", refresh + "Nouvelle ville" button (`data-bs-target="#city-modal"`), one stat card (total), search box, table columns: Nom, Code, Région, Pays, Statut (active badge), Actions (edit/delete). Modal `#city-modal` with fields name*, code*, region, country, and an `is_active` checkbox.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/cities/
git commit -m "feat(transport): cities screen"
```

---

### Task 4: Terminals screen

**Files:**
- Create: `angular/src/_api/pages/transport-config/terminals/terminals.component.ts`
- Create: `angular/src/_api/pages/transport-config/terminals/terminals.component.html`

**Interfaces:**
- Consumes: `TerminalService`, `CityService`, `Terminal`, `City`.
- Produces: `TerminalsComponent` (selector `app-transport-terminals`).

- [ ] **Step 1:** `terminals.component.ts` mirrors brands. Additionally load `cities: City[]` in `ngOnInit` via `CityService.list({ is_active: true })` for the city dropdown. Form fields: `city_id` (required), `name` (required), `address`, `phone`, `gps_lat` (null), `gps_lng` (null), `is_active` (true), `notes`. On `openEdit`, patch `city_id` from `t.city`. Modal id `terminal-modal`. Optional `cityFilter` + `applyFilter` on name/city_name/phone.
- [ ] **Step 2:** `terminals.component.html`: header "Terminaux" / "Gares et agences par ville". Stat card total. Optional city filter `<select>` bound to `cityFilter`. Table columns: Terminal, Ville (`{{ t.city_name }} ({{ t.city_code }})`), Téléphone, Statut, Actions. Modal `#terminal-modal` with city `<select formControlName="city_id">` (`@for` over cities), name*, address, phone, gps_lat, gps_lng (number inputs), is_active checkbox, notes textarea.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/terminals/
git commit -m "feat(transport): terminals screen"
```

---

### Task 5: Routes list + create/edit

**Files:**
- Create: `angular/src/_api/pages/transport-config/routes/routes.component.ts`
- Create: `angular/src/_api/pages/transport-config/routes/routes.component.html`

**Interfaces:**
- Consumes: `RouteService`, `TerminalService`, `Route`, `Terminal`.
- Produces: `RoutesComponent` (selector `app-transport-routes`). Uses `RouterModule` for a "détails" link to `/transport-config/routes/:id`.

- [ ] **Step 1:** `routes.component.ts` mirrors brands + loads `terminals: Terminal[]` for the two dropdowns. Form fields: `from_terminal_id` (required), `to_terminal_id` (required), `name` (''), `distance_km` (null), `duration_minutes` (null), `is_active` (true), `notes`. Add a client-side check in `submit()`: if `from_terminal_id === to_terminal_id`, set `errorMsg = 'Les terminaux de départ et d'arrivée doivent être différents.'` and return. Add `RouterModule` to `imports`. Modal id `route-modal`.
- [ ] **Step 2:** `routes.component.html`: header "Itinéraires" / "Liaisons entre terminaux". Stat card total. Table columns: Itinéraire (`{{ r.name }}`), Départ (`{{ r.from_city }}`), Arrivée (`{{ r.to_city }}`), Distance (`{{ r.distance_km || '—' }} km`), Durée (`{{ r.duration_minutes || '—' }} min`), Statut, Actions. Actions include a `[routerLink]="['/transport-config/routes', r.id]"` "détails" icon (`ti ti-eye`) plus edit/delete. Modal `#route-modal`: two `<select>` (from/to terminal, `@for` terminals showing `{{ t.name }} — {{ t.city_name }}`), optional name, distance_km, duration_minutes, is_active, notes.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/routes/
git commit -m "feat(transport): routes list with create/edit"
```

---

### Task 6: Route detail (stops + fares)

**Files:**
- Create: `angular/src/_api/pages/transport-config/route-detail/route-detail.component.ts`
- Create: `angular/src/_api/pages/transport-config/route-detail/route-detail.component.html`

**Interfaces:**
- Consumes: `RouteService` (`get`, `listStops`, `addStop`, `updateStop`, `deleteStop`, `listFares`), `TerminalService`, `RouteDetail`, `RouteStop`, `Fare`, `Terminal`; `ActivatedRoute`.
- Produces: `RouteDetailComponent` (selector `app-transport-route-detail`).

- [ ] **Step 1:** `route-detail.component.ts`:
  - Read `id` from `ActivatedRoute.snapshot.paramMap.get('id')`.
  - `ngOnInit`: load `route: RouteDetail` via `routeService.get(id)`, `stops` via `listStops(id)`, `fares` via `listFares(id)`, and `terminals` via `TerminalService.list({ is_active: true })` for the stop dropdown.
  - Stop form group: `terminal_id` (required), `stop_order` (required, number), `arrival_offset_minutes` (0), `distance_from_start_km` (null). `editStopId: string | null`.
  - Methods `openCreateStop()`, `openEditStop(s)`, `submitStop()` (calls `addStop`/`updateStop` then reloads stops + closes `#stop-modal`), `deleteStop(id)` (confirm `'Supprimer cet arrêt ?'`).
  - `imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]`.
- [ ] **Step 2:** `route-detail.component.html`:
  - Page header showing `{{ route?.name }}` with a back link `[routerLink]="['/transport-config/routes']"`, and summary line (from_city → to_city, distance, duration).
  - **Stops card:** header "Arrêts intermédiaires" + "Ajouter un arrêt" button (`#stop-modal`). Table columns: Ordre, Terminal (`{{ s.terminal_name }}`), Ville (`{{ s.city_name }}`), Décalage (`{{ s.arrival_offset_minutes }} min`), Distance (`{{ s.distance_from_start_km || '—' }} km`), Actions (edit/delete). Empty state "Aucun arrêt."
  - **Fares card (read-only):** header "Tarifs de l'itinéraire" with a `[routerLink]="['/transport-config/fares']"` "Gérer les tarifs" link. Table columns: Catégorie (`fare_class_name`)… use: Classe (`fare_class_name`), Catégorie véhicule (`vehicle_category_name`), Type passager (`passenger_type_display`), Montant (`{{ f.amount }} {{ f.currency }}`). Empty state "Aucun tarif défini."
  - Modal `#stop-modal`: terminal `<select formControlName="terminal_id">`, stop_order (number), arrival_offset_minutes (number), distance_from_start_km (number).
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/route-detail/
git commit -m "feat(transport): route detail with stops and fares"
```

---

### Task 7: Shared SeatMapComponent

**Files:**
- Create: `angular/src/_api/pages/shared/seat-map/seat-map.component.ts`
- Create: `angular/src/_api/pages/shared/seat-map/seat-map.component.html`
- Create: `angular/src/_api/pages/shared/seat-map/seat-map.component.css`

**Interfaces:**
- Produces: `SeatMapComponent` (selector `app-seat-map`) with `@Input()` `rows: number`, `cols: number`, `aisleAfterCol: number`, `hasBackRow: boolean`, `totalSeats: number`. Display-only.

- [ ] **Step 1:** `seat-map.component.ts`:

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css'],
  imports: [CommonModule],
})
export class SeatMapComponent {
  @Input() rows = 8;
  @Input() cols = 4;
  @Input() aisleAfterCol = 2;
  @Input() hasBackRow = true;
  @Input() totalSeats = 0;

  /** Sequentially numbered seat grid; null = aisle gap cell. */
  get grid(): (number | null)[][] {
    const out: (number | null)[][] = [];
    let seat = 1;
    const seatCols = Math.max(1, this.cols);
    for (let r = 0; r < Math.max(0, this.rows); r++) {
      const row: (number | null)[] = [];
      for (let c = 1; c <= seatCols; c++) {
        row.push(seat <= this.effectiveMax ? seat++ : null);
        if (c === this.aisleAfterCol && c < seatCols) row.push(null); // aisle
      }
      out.push(row);
    }
    if (this.hasBackRow) {
      const back: (number | null)[] = [];
      for (let c = 0; c < seatCols; c++) back.push(seat <= this.effectiveMax ? seat++ : null);
      out.push(back);
    }
    return out;
  }

  private get effectiveMax(): number {
    return this.totalSeats > 0 ? this.totalSeats : Number.MAX_SAFE_INTEGER;
  }
}
```

- [ ] **Step 2:** `seat-map.component.html`:

```html
<div class="seat-map">
  <div class="seat-map__driver"><i class="ti ti-steering-wheel"></i></div>
  @for (row of grid; track $index) {
    <div class="seat-map__row">
      @for (cell of row; track $index) {
        @if (cell === null) {
          <span class="seat-map__aisle"></span>
        } @else {
          <span class="seat-map__seat">{{ cell }}</span>
        }
      }
    </div>
  }
</div>
```

- [ ] **Step 3:** `seat-map.component.css`:

```css
.seat-map { display: inline-block; padding: 12px; background: #f8f9fa; border-radius: 8px; }
.seat-map__driver { text-align: right; margin-bottom: 8px; color: #6c757d; }
.seat-map__row { display: flex; gap: 6px; margin-bottom: 6px; }
.seat-map__seat {
  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
  font-size: 11px; border: 1px solid #cfd4da; border-radius: 6px 6px 3px 3px; background: #fff;
}
.seat-map__aisle { width: 16px; }
```

- [ ] **Step 4: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/shared/seat-map/
git commit -m "feat(shared): add seat-map preview component"
```

---

### Task 8: Vehicle Categories screen (with seat map)

**Files:**
- Create: `angular/src/_api/pages/transport-config/vehicle-categories/vehicle-categories.component.ts`
- Create: `angular/src/_api/pages/transport-config/vehicle-categories/vehicle-categories.component.html`

**Interfaces:**
- Consumes: `VehicleCategoryService`, `VehicleCategory`, `SeatMapComponent`.
- Produces: `VehicleCategoriesComponent` (selector `app-transport-vehicle-categories`).

- [ ] **Step 1:** `vehicle-categories.component.ts` mirrors brands. Add `SeatMapComponent` to `imports`. Form fields: `name` (required), `total_seats` (required, number), `seat_rows` (8), `seat_cols` (4), `aisle_after_col` (2), `has_back_row` (true), `free_seating` (false), `has_wifi` (false), `has_ac` (false), `has_tv` (false), `has_usb` (false), `has_snack` (false), `description`. Modal id `category-modal`. Expose `form.value` for live preview binding (bind `[rows]="form.value.seat_rows"` etc. directly in template).
- [ ] **Step 2:** `vehicle-categories.component.html`: header "Catégories de véhicule" / "Plans de sièges et prestations". Stat card total. Table columns: Nom, Sièges (`total_seats`), Prestations (`@for (a of c.amenities_list)` render small badges), Placement (free_seating ? "Libre" : "Numéroté"), Actions. Modal `#category-modal` is **two-column** (`modal-lg`): left column = form fields (name*, total_seats*, seat_rows, seat_cols, aisle_after_col as number inputs; has_back_row + free_seating + amenity checkboxes; description); right column = `<app-seat-map [rows]="form.value.seat_rows" [cols]="form.value.seat_cols" [aisleAfterCol]="form.value.aisle_after_col" [hasBackRow]="form.value.has_back_row" [totalSeats]="form.value.total_seats">`. The preview updates live as the reactive form values change.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/vehicle-categories/
git commit -m "feat(transport): vehicle categories with live seat-map"
```

---

### Task 9: Fare Classes screen

**Files:**
- Create: `angular/src/_api/pages/transport-config/fare-classes/fare-classes.component.ts`
- Create: `angular/src/_api/pages/transport-config/fare-classes/fare-classes.component.html`

**Interfaces:**
- Consumes: `FareClassService`, `FareClass`.
- Produces: `FareClassesComponent` (selector `app-transport-fare-classes`).

- [ ] **Step 1:** `fare-classes.component.ts` mirrors brands. Form fields: `name` (required), `description` (''), `is_active` (true). Modal id `fare-class-modal`. Delete confirm `'Supprimer cette classe ?'`.
- [ ] **Step 2:** `fare-classes.component.html`: header "Classes de service" / "Standard, VIP, Business…". Stat card total. Table columns: Nom, Description, Statut, Actions. Modal `#fare-class-modal`: name*, description textarea, is_active checkbox.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/fare-classes/
git commit -m "feat(transport): fare classes screen"
```

---

### Task 10: Fares screen

**Files:**
- Create: `angular/src/_api/pages/transport-config/fares/fares.component.ts`
- Create: `angular/src/_api/pages/transport-config/fares/fares.component.html`

**Interfaces:**
- Consumes: `FareService`, `RouteService`, `VehicleCategoryService`, `FareClassService`, `Fare`, `Route`, `VehicleCategory`, `FareClass`, `PassengerType`.
- Produces: `FaresComponent` (selector `app-transport-fares`).

- [ ] **Step 1:** `fares.component.ts` mirrors brands. In `ngOnInit` also load `routes`, `categories`, `fareClasses` for the dropdowns. Define `passengerTypes = [{value:'adult',label:'Adulte'},{value:'child',label:'Enfant'},{value:'student',label:'Étudiant'},{value:'senior',label:'Senior'}]`. Filter state: `routeFilter`, `categoryFilter`, `classFilter`, `typeFilter` → passed to `FareService.list(...)`, reload via a `load()` that reads them. Create form fields: `route_id`* , `vehicle_category_id`*, `fare_class_id`*, `passenger_type`* (default 'adult'), `amount`* (number), `currency` ('XAF'), `is_active` (true). **On edit**, only `amount`, `currency`, `is_active` are sent (per `FareUpdateSerializer`) and the route/category/class/type selects are disabled. Modal id `fare-modal`.
- [ ] **Step 2:** `fares.component.html`: header "Tarifs" / "Grille tarifaire par itinéraire". Filter row with four `<select>` (route/category/class/passenger-type) calling `load()` on change. Table columns: Itinéraire (`route_name`), Catégorie (`vehicle_category_name`), Classe (`fare_class_name`), Type (`passenger_type_display`), Montant (`{{ f.amount }} {{ f.currency }}`), Statut, Actions. Modal `#fare-modal` with the four selects (disabled when `editId`), amount, currency, is_active.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/transport-config/fares/
git commit -m "feat(transport): fares grid screen"
```

---

### Task 11: Wire Transport Config routes + menu

**Files:**
- Create: `angular/src/_api/pages/transport-config/transport-config.component.ts` (router-outlet wrapper)
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/helpers/routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: all Task 3–10 components.
- Produces: reachable `/transport-config/*` routes + "Réseau transport" sidebar group.

- [ ] **Step 1:** Create `transport-config.component.ts` identical to `fleet.component.ts` but selector `app-transport-config`, class `TransportConfigComponent`.
- [ ] **Step 2:** In `pages.routes.ts`, add a sibling block after the `fleet` module block:

```typescript
      // ── MODULE : Configuration transport ──────────────────────────────────────
      {
        path: 'transport-config',
        loadComponent: () => import('../../../_api/pages/transport-config/transport-config.component').then(m => m.TransportConfigComponent),
        children: [
          { path: 'cities',              loadComponent: () => import('../../../_api/pages/transport-config/cities/cities.component').then(m => m.CitiesComponent) },
          { path: 'terminals',           loadComponent: () => import('../../../_api/pages/transport-config/terminals/terminals.component').then(m => m.TerminalsComponent) },
          { path: 'routes',              loadComponent: () => import('../../../_api/pages/transport-config/routes/routes.component').then(m => m.RoutesComponent) },
          { path: 'routes/:id',          loadComponent: () => import('../../../_api/pages/transport-config/route-detail/route-detail.component').then(m => m.RouteDetailComponent) },
          { path: 'vehicle-categories',  loadComponent: () => import('../../../_api/pages/transport-config/vehicle-categories/vehicle-categories.component').then(m => m.VehicleCategoriesComponent) },
          { path: 'fare-classes',        loadComponent: () => import('../../../_api/pages/transport-config/fare-classes/fare-classes.component').then(m => m.FareClassesComponent) },
          { path: 'fares',               loadComponent: () => import('../../../_api/pages/transport-config/fares/fares.component').then(m => m.FaresComponent) },
        ],
      },
```

- [ ] **Step 3:** In `routes.ts`, add after the fleet block:

```typescript
  // ── Configuration transport ────────────────────────────────────────────────
  transportCities:            '/transport-config/cities',
  transportTerminals:         '/transport-config/terminals',
  transportRoutes:            '/transport-config/routes',
  transportVehicleCategories: '/transport-config/vehicle-categories',
  transportFareClasses:       '/transport-config/fare-classes',
  transportFares:             '/transport-config/fares',
```

- [ ] **Step 4:** In `sidebar.service.ts`, add a menu block after the fleet block (same object shape):

```typescript
        {
          menuValue: 'Réseau transport',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'route',
          base: 'transport-config',
          subMenus: [
            { menuValue: 'Villes',       route: routes.transportCities,            base: 'cities'             },
            { menuValue: 'Terminaux',    route: routes.transportTerminals,         base: 'terminals'          },
            { menuValue: 'Itinéraires',  route: routes.transportRoutes,            base: 'routes'             },
            { menuValue: 'Catégories',   route: routes.transportVehicleCategories, base: 'vehicle-categories' },
            { menuValue: 'Classes',      route: routes.transportFareClasses,       base: 'fare-classes'       },
            { menuValue: 'Tarifs',       route: routes.transportFares,             base: 'fares'              },
          ],
        },
```

- [ ] **Step 5: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 6:** Manual check: `cd angular && npx ng serve`, log in, open each `/transport-config/*` page — list loads, create/edit modal saves, seat map renders live, route detail stops add/remove.
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/pages/transport-config/transport-config.component.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(transport): wire routes and sidebar menu"
```

---

## PHASE 2 — VOYAGE

### Task 12: Voyage endpoints + models + services

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (append `VOYAGE`)
- Create: `angular/src/_api/models/voyage.models.ts`
- Create: `angular/src/_api/services/voyage/trip.service.ts`
- Create: `angular/src/_api/services/voyage/trip-crew.service.ts`

**Interfaces:**
- Produces: `VOYAGE` endpoints; `Trip`, `TripStats`, `TripCrew`, `TripStatus`, `CrewRole`, nested summary types; `TripService`, `TripCrewService`.

- [ ] **Step 1:** Append `VOYAGE` to `api.config.ts`:

```typescript
export const VOYAGE = {
  stats:  `${API_BASE}/voyage/trips/stats/`,
  search: `${API_BASE}/voyage/trips/search/`,
  trips:  `${API_BASE}/voyage/trips/`,
  trip:   (id: string) => `${API_BASE}/voyage/trips/${id}/`,
  tripBoard:  (id: string) => `${API_BASE}/voyage/trips/${id}/board/`,
  tripDepart: (id: string) => `${API_BASE}/voyage/trips/${id}/depart/`,
  tripArrive: (id: string) => `${API_BASE}/voyage/trips/${id}/arrive/`,
  tripCancel: (id: string) => `${API_BASE}/voyage/trips/${id}/cancel/`,
  tripCrew:   (id: string) => `${API_BASE}/voyage/trips/${id}/crew/`,
  tripCrewMember: (id: string, crewId: string) => `${API_BASE}/voyage/trips/${id}/crew/${crewId}/`,
};
```

- [ ] **Step 2:** Create `voyage.models.ts`:

```typescript
export type TripStatus = 'scheduled' | 'boarding' | 'departed' | 'arrived' | 'cancelled';
export type CrewRole   = 'driver' | 'conductor' | 'supervisor' | 'other';

export interface TripRouteSummary {
  id: string;
  name: string;
  from_city: string | null;
  to_city: string | null;
  distance_km: number | null;
  duration_minutes: number | null;
}
export interface TripVehicleSummary { id: string; license_plate: string; status: string; }
export interface TripVehicleCategorySummary { id: string; name: string; total_seats: number; free_seating: boolean; }
export interface TripFareClassSummary { id: string; name: string; }
export interface CrewUserSummary { id: string; full_name: string; email: string; }

export interface Trip {
  id: string;
  reference: string;
  status: TripStatus;
  status_display: string;
  route: TripRouteSummary;
  from_city: string;
  to_city: string;
  departure_datetime: string;
  estimated_arrival_datetime: string | null;
  actual_departure_datetime: string | null;
  actual_arrival_datetime: string | null;
  vehicle: TripVehicleSummary | null;
  vehicle_category: TripVehicleCategorySummary | null;
  fare_class: TripFareClassSummary | null;
  total_seats: number;
  free_seating: boolean;
  booked_seats: number;
  available_seats: number;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface TripStats {
  total: number;
  upcoming: number;
  boarding: number;
  in_transit: number;
  arrived_today: number;
  cancelled: number;
}

export interface TripCrew {
  id: string;
  user: CrewUserSummary;
  role: CrewRole;
  role_display: string;
  notes: string;
  created_at: string;
}
```

- [ ] **Step 3:** Create `trip.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGE } from '../../config/api.config';
import { Trip, TripStats } from '../../models/voyage.models';

@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) {}

  list(opts?: { status?: string; route_id?: string; date_from?: string; date_to?: string }): Observable<Trip[]> {
    let params = new HttpParams().set('page_size', '200');
    if (opts?.status)    params = params.set('status', opts.status);
    if (opts?.route_id)  params = params.set('route_id', opts.route_id);
    if (opts?.date_from) params = params.set('date_from', opts.date_from);
    if (opts?.date_to)   params = params.set('date_to', opts.date_to);
    return this.http.get<Trip[]>(VOYAGE.trips, { params });
  }
  get(id: string): Observable<Trip> { return this.http.get<Trip>(VOYAGE.trip(id)); }
  create(data: Record<string, unknown>): Observable<Trip> { return this.http.post<Trip>(VOYAGE.trips, data); }
  update(id: string, data: Record<string, unknown>): Observable<Trip> { return this.http.patch<Trip>(VOYAGE.trip(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGE.trip(id)); }

  stats(): Observable<TripStats> { return this.http.get<TripStats>(VOYAGE.stats); }
  board(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGE.tripBoard(id), {}); }
  depart(id: string, data: { actual_departure_datetime?: string } = {}): Observable<Trip> { return this.http.post<Trip>(VOYAGE.tripDepart(id), data); }
  arrive(id: string, data: { actual_arrival_datetime?: string } = {}): Observable<Trip> { return this.http.post<Trip>(VOYAGE.tripArrive(id), data); }
  cancel(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGE.tripCancel(id), {}); }
}
```

- [ ] **Step 4:** Create `trip-crew.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGE } from '../../config/api.config';
import { TripCrew } from '../../models/voyage.models';

@Injectable({ providedIn: 'root' })
export class TripCrewService {
  constructor(private http: HttpClient) {}
  list(tripId: string): Observable<TripCrew[]> { return this.http.get<TripCrew[]>(VOYAGE.tripCrew(tripId)); }
  add(tripId: string, data: Record<string, unknown>): Observable<TripCrew> { return this.http.post<TripCrew>(VOYAGE.tripCrew(tripId), data); }
  remove(tripId: string, crewId: string): Observable<unknown> { return this.http.delete(VOYAGE.tripCrewMember(tripId, crewId)); }
}
```

- [ ] **Step 5: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/voyage.models.ts angular/src/_api/services/voyage/
git commit -m "feat(voyage): add endpoints, models and services"
```

---

### Task 13: Trips list + create/edit + status actions

**Files:**
- Create: `angular/src/_api/pages/voyage/trips/trips.component.ts`
- Create: `angular/src/_api/pages/voyage/trips/trips.component.html`

**Interfaces:**
- Consumes: `TripService`, `RouteService`, `VehicleCategoryService`, `FareClassService`, `VehicleService` (from `services/fleet/vehicle.service`), `Trip`, `TripStatus`.
- Produces: `TripsComponent` (selector `app-voyage-trips`). Uses `RouterModule` for detail link.

- [ ] **Step 1:** `trips.component.ts`:
  - `ngOnInit`: load trips via `load()`, plus `routes`, `categories`, `fareClasses`, `vehicles` for dropdowns.
  - Filters: `statusFilter`, `routeFilter`, `dateFrom`, `dateTo` → passed to `TripService.list(...)` in `load()`.
  - Create form (`TripWriteSerializer`): `route_id`*, `vehicle_category_id`*, `departure_datetime`* (datetime-local), `vehicle_id` (null), `fare_class_id` (null), `estimated_arrival_datetime` (null), `free_seating` (false), `notes`.
  - Edit form (`TripUpdateSerializer`) sends only `departure_datetime`, `estimated_arrival_datetime`, `vehicle_id`, `fare_class_id`, `free_seating`, `notes`; route + category selects disabled on edit.
  - Status action methods: `board(t)`, `depart(t)`, `arrive(t)`, `cancel(t)` — each calls the service then `load()`. `cancel` behind `confirm('Annuler ce voyage ?')`.
  - Helper `statusClass(s: TripStatus)` → `'badge bg-info'|'bg-warning'|'bg-primary'|'bg-success'|'bg-danger'`.
  - Helper `canBoard/canDepart/canArrive/canCancel` from current status: scheduled→board; boarding→depart; departed→arrive; scheduled|boarding→cancel.
  - Modal id `trip-modal`. `imports` include `RouterModule`.
- [ ] **Step 2:** `trips.component.html`: header "Voyages" / "Départs planifiés" + "Nouveau voyage" button. Filter row (status select of the five statuses + route select + two date inputs) calling `load()`. Table columns: Référence, Trajet (`{{ t.from_city }} → {{ t.to_city }}`), Départ (`{{ t.departure_datetime | date:'dd/MM/yyyy HH:mm' }}`), Véhicule (`{{ t.vehicle?.license_plate || '—' }}` / `{{ t.vehicle_category?.name }}`), Places (`{{ t.booked_seats }}/{{ t.total_seats }}`), Statut (badge via `statusClass`), Actions. Actions: detail link (`[routerLink]="['/voyage/trips', t.id]"`), edit, and status buttons shown conditionally (`@if (canBoard(t))` etc.), delete. Modal `#trip-modal` with the create/edit form (route select, category select, vehicle select optional, fare class select optional, departure_datetime `type="datetime-local"`, estimated_arrival_datetime, free_seating checkbox, notes).
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/voyage/trips/
git commit -m "feat(voyage): trips list with create/edit and status actions"
```

---

### Task 14: Voyage dashboard

**Files:**
- Create: `angular/src/_api/pages/voyage/dashboard/dashboard.component.ts`
- Create: `angular/src/_api/pages/voyage/dashboard/dashboard.component.html`

**Interfaces:**
- Consumes: `TripService` (`stats`, `list`), `TripStats`, `Trip`.
- Produces: `VoyageDashboardComponent` (selector `app-voyage-dashboard`). Uses `RouterModule`.

- [ ] **Step 1:** `dashboard.component.ts`: `ngOnInit` loads `stats: TripStats | null` via `TripService.stats()` and `upcoming: Trip[]` via `TripService.list({ status: 'scheduled' })` (show first ~10). `loading` flag. `imports` include `RouterModule`.
- [ ] **Step 2:** `dashboard.component.html`: header "Tableau de bord — Voyages". A row of stat cards (mirror the fleet dashboard card style): Total, À venir (`upcoming`), Embarquement (`boarding`), En route (`in_transit`), Arrivés aujourd'hui (`arrived_today`), Annulés (`cancelled`). Below, a card "Prochains départs" listing `upcoming` trips (reference, trajet, départ, places) with a `[routerLink]` to each trip and a "Voir tous les voyages" link to `/voyage/trips`.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/voyage/dashboard/
git commit -m "feat(voyage): operations dashboard"
```

---

### Task 15: Trip detail + crew

**Files:**
- Create: `angular/src/_api/pages/voyage/trip-detail/trip-detail.component.ts`
- Create: `angular/src/_api/pages/voyage/trip-detail/trip-detail.component.html`

**Interfaces:**
- Consumes: `TripService`, `TripCrewService`, `UserService` (from `services/users/user.service`), `Trip`, `TripCrew`, `CrewRole`; `ActivatedRoute`.
- Produces: `TripDetailComponent` (selector `app-voyage-trip-detail`).

- [ ] **Step 1:** `trip-detail.component.ts`:
  - Read `id` from `ActivatedRoute`.
  - Load `trip: Trip` via `TripService.get(id)`, `crew: TripCrew[]` via `TripCrewService.list(id)`, and `users` via `UserService.list()` (confirm method name in `services/users/user.service.ts`; use its list method) for the crew dropdown.
  - Crew form: `user_id`* , `role` (default 'conductor'), `notes`. `crewRoles = [{value:'driver',label:'Chauffeur'},{value:'conductor',label:'Receveur'},{value:'supervisor',label:'Superviseur'},{value:'other',label:'Autre'}]`.
  - Methods `addCrew()` (POST then reload crew, close `#crew-modal`), `removeCrew(c)` (confirm `'Retirer ce membre ?'`).
  - Status action methods `board/depart/arrive/cancel` reloading the trip (reuse the same logic/`statusClass` helper as Task 13).
  - `imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]`.
- [ ] **Step 2:** `trip-detail.component.html`:
  - Header with back link to `/voyage/trips`, trip reference + status badge, and status action buttons (`@if (canBoard(trip))` …).
  - **Summary card:** trajet, départ/arrivée prévue, véhicule + catégorie, classe, places (`booked_seats/total_seats`, `available_seats`), notes.
  - **Crew card:** header "Équipage" + "Ajouter" button (`#crew-modal`). Table: Membre (`c.user.full_name`), Rôle (`c.role_display`), Notes, Actions (remove). Empty state "Aucun membre d'équipage."
  - Modal `#crew-modal`: user `<select formControlName="user_id">` (`@for` users, show `u.full_name`/email), role select, notes input.
- [ ] **Step 3: Build** — `cd angular && npx ng build`. Expected: success. (If `UserService` list signature differs, adjust the call — verify against `services/users/user.service.ts`.)
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/voyage/trip-detail/
git commit -m "feat(voyage): trip detail with crew management"
```

---

### Task 16: Wire Voyage routes + menu

**Files:**
- Create: `angular/src/_api/pages/voyage/voyage.component.ts` (router-outlet wrapper)
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/helpers/routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: Task 13–15 components.
- Produces: reachable `/voyage/*` routes + "Voyages" sidebar group.

- [ ] **Step 1:** Create `voyage.component.ts` like `fleet.component.ts` (selector `app-voyage`, class `VoyageComponent`).
- [ ] **Step 2:** Add to `pages.routes.ts` after the transport-config block:

```typescript
      // ── MODULE : Voyages ──────────────────────────────────────────────────────
      {
        path: 'voyage',
        loadComponent: () => import('../../../_api/pages/voyage/voyage.component').then(m => m.VoyageComponent),
        children: [
          { path: 'dashboard', loadComponent: () => import('../../../_api/pages/voyage/dashboard/dashboard.component').then(m => m.VoyageDashboardComponent) },
          { path: 'trips',     loadComponent: () => import('../../../_api/pages/voyage/trips/trips.component').then(m => m.TripsComponent) },
          { path: 'trips/:id', loadComponent: () => import('../../../_api/pages/voyage/trip-detail/trip-detail.component').then(m => m.TripDetailComponent) },
        ],
      },
```

- [ ] **Step 3:** Add to `routes.ts`:

```typescript
  // ── Voyages ─────────────────────────────────────────────────────────────────
  voyageDashboard: '/voyage/dashboard',
  voyageTrips:     '/voyage/trips',
```

- [ ] **Step 4:** Add sidebar block in `sidebar.service.ts` after the transport-config block:

```typescript
        {
          menuValue: 'Voyages',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'bus',
          base: 'voyage',
          subMenus: [
            { menuValue: 'Tableau de bord', route: routes.voyageDashboard, base: 'dashboard' },
            { menuValue: 'Départs',         route: routes.voyageTrips,     base: 'trips'     },
          ],
        },
```

- [ ] **Step 5: Build** — `cd angular && npx ng build`. Expected: success.
- [ ] **Step 6:** Manual check: `npx ng serve`, log in, open `/voyage/dashboard`, `/voyage/trips` (create a trip, run board→depart→arrive), open a trip detail, add/remove a crew member.
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/pages/voyage/voyage.component.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(voyage): wire routes and sidebar menu"
```

---

## Self-Review Notes

- **Spec coverage:** Cities (T3), Terminals (T4), Routes+stops+fares (T5,T6), Vehicle Categories + live seat map (T7,T8), Fare Classes (T9), Fares (T10), transport wiring (T11); Voyage plumbing (T12), Trips+status (T13), Dashboard (T14), Trip detail+crew (T15), voyage wiring (T16). Public `trips/search/` intentionally out of scope per spec §6.
- **Type consistency:** service method names (`list/get/create/update/delete`, `board/depart/arrive/cancel`, `listStops/addStop/updateStop/deleteStop/listFares`, `stats`, crew `list/add/remove`) are referenced consistently across tasks.
- **Known verification-time check:** Task 15 depends on the exact list method of the existing `UserService`; verify its signature when implementing (flagged in the task).
