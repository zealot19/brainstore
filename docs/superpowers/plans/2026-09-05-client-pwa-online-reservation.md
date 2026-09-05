# Client PWA — Online Reservation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give clients a public, installable PWA to search trips, pick a seat, pay by Mobile Money (Campay), and get a ticket/QR — driving the existing `online_booking` backend.

**Architecture:** A new public, unguarded Angular feature area (`_api/pages/reserver/`) with its own minimal layout, lazy-loaded as a top-level sibling of the authenticated shell. It talks to the existing `/api/v1/online/<company_id>/…` endpoints (`company_id` fixed in `environment`). Two additive, `AllowAny` backend endpoints are added (served-cities list; fares on trip payload). PWA packaging (manifest + service worker) is added, scoped so it never caches authenticated staff endpoints.

**Tech Stack:** Django 5.1 + DRF 3.15 + SimpleJWT (backend); Angular 21 standalone + signals (frontend); Campay Mobile Money (existing); `qrcode` npm for client-side QR; `@angular/service-worker` for PWA.

**Spec:** `docs/superpowers/specs/2026-09-05-client-pwa-online-reservation-design.md`

## Global Constraints

- Backend layering per app: `urls → views (APIView, permission_classes) → services/ + selectors/ → models`. Public endpoints use `permission_classes = [AllowAny]`.
- `/online/` endpoints return **bare** payloads (plain `Response(data)`), NOT the `{success,data}` envelope. Do not wrap them.
- Backend tests run via `pytest` (pytest.ini), not `manage.py test`. Full suite must stay green (currently ~219 passed / 4 skipped).
- Frontend gate is `ng build` (no unit-test runner is wired). Every frontend task ends with a green `ng build`.
- French throughout (UI copy, comments, error messages) — the product language.
- Angular components are **standalone** (no NgModules); use `inject()`, signals, and the existing `ToastService` for user feedback.
- The public area must NOT use `authGuard` and must NOT render the back-office shell (`PagesComponent`).
- `company_id` for the PWA comes from `environment.onlineCompanyId` — never hard-coded in components.
- Money is XAF (integer amounts for Campay: `str(int(amount))`, already handled by the backend).
- Commits: author is shimi; NO Claude co-author trailer.
- Work happens on branch `feat/client-pwa-online-reservation` (already cut from `origin/master`).

---

### Task 1: Backend — public served-cities endpoint

**Files:**
- Modify: `backend/apps/online_booking/selectors/selectors.py`
- Modify: `backend/apps/online_booking/serializers.py`
- Modify: `backend/apps/online_booking/views.py`
- Modify: `backend/apps/online_booking/urls.py`
- Test: `backend/apps/online_booking/tests/test_public_cities.py` (create; if `tests/` is a single file, create the `tests/` package or add to the existing test module — match the app's existing layout)

**Interfaces:**
- Produces: `GET /api/v1/online/<company_id>/cities/` → bare JSON `[{"id": "<uuid>", "name": "<city>"}]`, sorted by name, `AllowAny`. Unknown/deleted company → 404.
- Produces (Python): `selectors.get_served_cities(company_id) -> QuerySet[City]` (distinct, ordered by name).

- [ ] **Step 1: Write the failing test**

First inspect the app's existing test layout: `ls backend/apps/online_booking/tests* ` and mirror how other apps build fixtures (look at an existing `test_*.py` under `backend/apps/voyage/` or `backend/apps/online_booking/` for the company/route/trip factory pattern). Then:

```python
# backend/apps/online_booking/tests/test_public_cities.py
import pytest
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def test_served_cities_lists_distinct_route_endpoints(company, route_factory):
    # route_factory must create routes whose from/to terminals resolve to cities.
    # Build two routes: A->B and B->C, all under `company`.
    route_factory(company=company, from_city_name="Douala", to_city_name="Yaoundé")
    route_factory(company=company, from_city_name="Yaoundé", to_city_name="Bafoussam")

    client = APIClient()
    url = reverse("online-public-cities", args=[company.id])
    resp = client.get(url)

    assert resp.status_code == 200
    names = [c["name"] for c in resp.data]
    assert names == ["Bafoussam", "Douala", "Yaoundé"]  # distinct, sorted
    assert all("id" in c and "name" in c for c in resp.data)


def test_served_cities_unknown_company_returns_404():
    import uuid
    client = APIClient()
    url = reverse("online-public-cities", args=[uuid.uuid4()])
    assert client.get(url).status_code == 404
```

If the app has no shared `conftest.py` fixtures (`company`, `route_factory`), add them in `backend/apps/online_booking/tests/conftest.py` following the construction already used by the existing online_booking tests (reuse their City/Terminal/Route/Company creation helpers verbatim rather than inventing new ones).

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_public_cities.py -v`
Expected: FAIL — `reverse` can't find `online-public-cities` (URL not defined).

- [ ] **Step 3: Add the selector**

In `backend/apps/online_booking/selectors/selectors.py`, add:

```python
def get_served_cities(company_id):
    """Distinct cities that are endpoints (from or to) of the company's active routes."""
    from apps.transport_config.models import City
    from apps.transport_config.models import Route

    routes = Route.objects.filter(company_id=company_id, is_deleted=False)
    city_ids = set(
        routes.values_list("from_terminal__city_id", flat=True)
    ) | set(
        routes.values_list("to_terminal__city_id", flat=True)
    )
    return (City.objects
            .filter(id__in=city_ids, is_deleted=False)
            .order_by("name"))
```

(Confirm the `Route` import path — it is `apps.transport_config.models.Route`, per `transport_config/models/route.py`. If `Route` has a `company` FK, filter by it as shown; if routes are company-scoped via terminal→city→? instead, filter by whatever FK `Route` actually carries — verify by reading `route.py`.)

- [ ] **Step 4: Add the serializer**

In `backend/apps/online_booking/serializers.py`, add:

```python
class PublicCitySerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()
```

- [ ] **Step 5: Add the view**

In `backend/apps/online_booking/views.py`, import the serializer and add:

```python
class PublicCityListView(APIView):
    """Public: cities the company serves (route endpoints)."""
    permission_classes = [AllowAny]

    def get(self, request, company_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        cities = selectors.get_served_cities(company.id)
        return Response(PublicCitySerializer(cities, many=True).data)
```

Add `PublicCitySerializer` to the existing `from apps.online_booking.serializers import (...)` block.

- [ ] **Step 6: Wire the URL**

In `backend/apps/online_booking/urls.py`, add inside `urlpatterns` (with the other per-company routes):

```python
    path("<uuid:company_id>/cities/",
         views.PublicCityListView.as_view(), name="online-public-cities"),
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `cd backend && pytest apps/online_booking/tests/test_public_cities.py -v`
Expected: PASS (both tests).

- [ ] **Step 8: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): public served-cities endpoint for PWA search"
```

---

### Task 2: Backend — expose fares (and price) on the public trip payload

**Files:**
- Modify: `backend/apps/online_booking/selectors/selectors.py`
- Modify: `backend/apps/online_booking/serializers.py`
- Modify: `backend/apps/online_booking/views.py` (translate two English error strings)
- Test: `backend/apps/online_booking/tests/test_public_fares.py` (create)

**Interfaces:**
- Consumes: existing `selectors.get_public_trip(trip_id, company_id)`.
- Produces: `PublicTripSerializer` output gains `fares: [{"fare_id": uuid, "label": str, "passenger_type": str, "price": "<decimal>"}]`. Present on both search list and detail.
- Produces (Python): `selectors.get_trip_fares(trip) -> QuerySet[Fare]`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_public_fares.py
import pytest
from decimal import Decimal
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def test_trip_detail_includes_applicable_fares(company, trip_with_fares):
    trip = trip_with_fares  # a Trip with >=1 active Fare on its route+category(+fare_class)
    client = APIClient()
    url = reverse("public-trip-detail", args=[company.id, trip.id])
    resp = client.get(url)

    assert resp.status_code == 200
    fares = resp.data["fares"]
    assert len(fares) >= 1
    f = fares[0]
    assert set(f) == {"fare_id", "label", "passenger_type", "price"}
    assert Decimal(str(f["price"])) > 0


def test_trip_with_no_fares_returns_empty_list(company, trip_without_fares):
    client = APIClient()
    url = reverse("public-trip-detail", args=[company.id, trip_without_fares.id])
    resp = client.get(url)
    assert resp.status_code == 200
    assert resp.data["fares"] == []
```

Add fixtures `trip_with_fares` / `trip_without_fares` to the app's `tests/conftest.py`, reusing the existing Trip/Fare construction from other online_booking tests. A `Fare` needs `company`, `route`, `vehicle_category`, `fare_class`, `passenger_type`, `amount`, `is_active=True`. Build the trip so its `route`/`vehicle_category`/`fare_class` match the created fare.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_public_fares.py -v`
Expected: FAIL — `KeyError: 'fares'`.

- [ ] **Step 3: Add the selector**

In `selectors.py`:

```python
def get_trip_fares(trip):
    """Active fares applicable to a trip (route + vehicle category [+ fare class])."""
    from apps.transport_config.models import Fare

    qs = Fare.objects.filter(
        route_id=trip.route_id,
        vehicle_category_id=trip.vehicle_category_id,
        is_active=True, is_deleted=False,
    ).select_related("fare_class")
    if trip.fare_class_id:
        qs = qs.filter(fare_class_id=trip.fare_class_id)
    return qs.order_by("passenger_type")
```

- [ ] **Step 4: Add serializer field + nested serializer**

In `serializers.py`, add above `PublicTripSerializer`:

```python
class PublicFareSerializer(serializers.Serializer):
    fare_id        = serializers.UUIDField(source="id")
    label          = serializers.SerializerMethodField()
    passenger_type = serializers.CharField()
    price          = serializers.DecimalField(source="amount", max_digits=12, decimal_places=2)

    def get_label(self, obj):
        cls = obj.fare_class.name if obj.fare_class_id else ""
        pax = obj.get_passenger_type_display()
        return f"{cls} — {pax}".strip(" —") if cls else pax
```

Then add to `PublicTripSerializer` a field + method:

```python
    fares = serializers.SerializerMethodField()

    def get_fares(self, obj):
        from apps.online_booking import selectors
        return PublicFareSerializer(selectors.get_trip_fares(obj), many=True).data
```

(Place `get_fares` alongside the other `get_*` methods; keep the import local to avoid a circular import at module load.)

- [ ] **Step 5: Translate the two English error strings in the initiate view**

In `views.py` `InitiateBookingView.post`, replace:
- `"Trip not found or no longer available."` → `"Voyage introuvable ou plus disponible."`
- `"Fare not found."` → `"Tarif introuvable."`

- [ ] **Step 6: Run tests to verify they pass**

Run: `cd backend && pytest apps/online_booking/tests/test_public_fares.py -v`
Expected: PASS.

- [ ] **Step 7: Run the full backend suite**

Run: `cd backend && pytest -q`
Expected: all pass (previously green count + the new tests), 0 failures.

- [ ] **Step 8: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): expose applicable fares/prices on public trip payload"
```

---

### Task 3: Angular — online config, models, service, and interceptor detail fallback

**Files:**
- Modify: `angular/src/environments/environment.ts`
- Modify: `angular/src/environments/environment.prod.ts`
- Modify: `angular/src/_api/config/api.config.ts`
- Create: `angular/src/_api/models/online-booking.models.ts`
- Create: `angular/src/_api/services/online/online-booking.service.ts`
- Modify: `angular/src/_api/interceptors/api-unwrap.interceptor.ts`

**Interfaces:**
- Produces: `OnlineBookingService` with methods `cities()`, `searchTrips(q)`, `trip(tripId)`, `seatMap(tripId)`, `initiate(tripId, body)`, `status(requestId)`; all returning `Observable<T>` of the bare payload types below.
- Produces: `environment.onlineCompanyId: string`.
- Consumed by: Tasks 5, 6, 8, 9.

- [ ] **Step 1: Add company id to environments**

In `environment.ts`:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api/v1',
  onlineCompanyId: '00000000-0000-0000-0000-000000000000', // dev: replace with a real seeded company id
};
```
In `environment.prod.ts` add the same `onlineCompanyId` key (production value set at deploy time). Keep existing keys untouched.

- [ ] **Step 2: Add ONLINE endpoints to api.config.ts**

Append after the existing export blocks:
```ts
export const ONLINE = {
  cities:   (co: string) => `${API_BASE}/online/${co}/cities/`,
  trips:    (co: string) => `${API_BASE}/online/${co}/trips/`,
  trip:     (co: string, tripId: string) => `${API_BASE}/online/${co}/trips/${tripId}/`,
  seatMap:  (co: string, tripId: string) => `${API_BASE}/online/${co}/trips/${tripId}/seats/`,
  book:     (co: string, tripId: string) => `${API_BASE}/online/${co}/trips/${tripId}/book/`,
  status:   (requestId: string) => `${API_BASE}/online/requests/${requestId}/`,
};
```

- [ ] **Step 3: Create the models**

```ts
// angular/src/_api/models/online-booking.models.ts
export interface OnlineCity { id: string; name: string; }

export interface OnlineFare {
  fare_id: string; label: string;
  passenger_type: 'adult' | 'child' | 'student' | 'senior';
  price: string;
}

export interface OnlineTerminal { id: string; name: string; city: string; }

export interface OnlineTrip {
  id: string; reference: string; status: string;
  departure_datetime: string; estimated_arrival_datetime: string | null;
  from_city: string; to_city: string;
  from_terminal: OnlineTerminal; to_terminal: OnlineTerminal;
  vehicle_category: { id: string; name: string; total_seats: number; amenities: string[] };
  fare_class: { id: string; name: string } | null;
  total_seats: number; booked_seats: number; available_seats: number;
  free_seating: boolean;
  fares: OnlineFare[];
}

export interface OnlineSeatMap {
  total_seats: number; free_seating: boolean;
  seat_rows: number; seat_cols: number;
  aisle_after_col: number | null; has_back_row: boolean;
  booked_seats: string[]; available_count: number;
}

export interface TripSearchQuery {
  from_city_id: string; to_city_id: string; travel_date: string; // YYYY-MM-DD
}

export interface InitiateBookingBody {
  passenger_name: string; passenger_phone: string;
  passenger_email?: string;
  passenger_type: 'adult' | 'child' | 'student' | 'senior';
  seat_number?: string;
  fare_id?: string; amount: string;
  payment_method: 'mtn_momo' | 'orange_money';
  payment_phone: string;
}

export interface BookingRequestStatus {
  id: string;
  status: 'pending' | 'paid' | 'failed' | 'expired';
  status_display: string;
  passenger_name: string; passenger_phone: string;
  passenger_type: string; seat_number: string;
  amount: string; payment_method: string; payment_method_display: string;
  payment_reference: string;
  expires_at: string; is_expired: boolean;
  trip_summary: { reference: string; from_city: string; to_city: string; departure_datetime: string };
  ticket: { ticket_number: string; qr_code: string } | null;
  created_at: string;
}
```

- [ ] **Step 4: Create the service**

```ts
// angular/src/_api/services/online/online-booking.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ONLINE } from '../../config/api.config';
import {
  OnlineCity, OnlineTrip, OnlineSeatMap, TripSearchQuery,
  InitiateBookingBody, BookingRequestStatus,
} from '../../models/online-booking.models';

@Injectable({ providedIn: 'root' })
export class OnlineBookingService {
  private http = inject(HttpClient);
  private co = environment.onlineCompanyId;

  cities(): Observable<OnlineCity[]> {
    return this.http.get<OnlineCity[]>(ONLINE.cities(this.co));
  }

  searchTrips(q: TripSearchQuery): Observable<OnlineTrip[]> {
    const params = new HttpParams()
      .set('from_city_id', q.from_city_id)
      .set('to_city_id', q.to_city_id)
      .set('travel_date', q.travel_date);
    return this.http.get<OnlineTrip[]>(ONLINE.trips(this.co), { params });
  }

  trip(tripId: string): Observable<OnlineTrip> {
    return this.http.get<OnlineTrip>(ONLINE.trip(this.co, tripId));
  }

  seatMap(tripId: string): Observable<OnlineSeatMap> {
    return this.http.get<OnlineSeatMap>(ONLINE.seatMap(this.co, tripId));
  }

  initiate(tripId: string, body: InitiateBookingBody): Observable<BookingRequestStatus> {
    return this.http.post<BookingRequestStatus>(ONLINE.book(this.co, tripId), body);
  }

  status(requestId: string): Observable<BookingRequestStatus> {
    return this.http.get<BookingRequestStatus>(ONLINE.status(requestId));
  }
}
```

- [ ] **Step 5: Interceptor — fall back to `err.error.detail`**

In `api-unwrap.interceptor.ts` `catchError`, before the final `statusMessage` branch, add a branch so bare `{detail: "..."}` bodies (used by `/online/`) keep their explicit message:

```ts
      // Bare { detail: "..." } bodies (e.g. public /online/ endpoints).
      const bareDetail = err?.error?.detail;
      if (typeof bareDetail === 'string' && bareDetail.trim()) {
        return throwError(() => new HttpErrorResponse({
          error: { detail: bareDetail },
          status: err.status, statusText: err.statusText,
          url: err.url ?? undefined, headers: err.headers,
        }));
      }
```

Place it immediately after the `if (errBody) { … }` block and before the synthesized `statusMessage` return.

- [ ] **Step 6: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds (service/models compile; unused-until-later is fine).

- [ ] **Step 7: Commit**

```bash
git add angular/src/environments angular/src/_api
git commit -m "feat(pwa): online booking Angular service, models, config + detail error fallback"
```

---

### Task 4: Angular — public layout + reserver routes wired into the app

**Files:**
- Create: `angular/src/_api/pages/reserver/reserver-layout.component.ts`
- Create: `angular/src/_api/pages/reserver/reserver-layout.component.html`
- Create: `angular/src/_api/pages/reserver/reserver-layout.component.scss`
- Create: `angular/src/_api/pages/reserver/reserver.routes.ts`
- Create (placeholder): `angular/src/_api/pages/reserver/search/search.component.ts` (minimal, replaced in Task 5)
- Modify: `angular/src/app/app.routes.ts`

**Interfaces:**
- Produces: top-level route `reserver` (no guard, no back-office shell) rendering `ReserverLayoutComponent` with child routes.
- Consumed by: Tasks 5, 6, 8, 9 add their pages as children of `reserver.routes.ts`.

- [ ] **Step 1: Create the layout component**

```ts
// reserver-layout.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserver-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reserver-layout.component.html',
  styleUrls: ['./reserver-layout.component.scss'],
})
export class ReserverLayoutComponent {}
```

```html
<!-- reserver-layout.component.html -->
<div class="rsv-shell">
  <header class="rsv-header">
    <a routerLink="/reserver" class="rsv-brand">Réservation en ligne</a>
  </header>
  <main class="rsv-content">
    <router-outlet></router-outlet>
  </main>
  <footer class="rsv-footer">
    <small>© SCIG — Réservez votre voyage en quelques clics.</small>
  </footer>
</div>
```

```scss
// reserver-layout.component.scss
.rsv-shell { min-height: 100vh; display: flex; flex-direction: column; background: #f6f8fb; }
.rsv-header { padding: 16px 20px; background: #0d6efd; color: #fff; }
.rsv-brand { color: #fff; font-weight: 700; text-decoration: none; font-size: 1.1rem; }
.rsv-content { flex: 1; width: 100%; max-width: 960px; margin: 0 auto; padding: 20px; }
.rsv-footer { padding: 16px 20px; text-align: center; color: #6c757d; }
```

- [ ] **Step 2: Create a minimal placeholder search page (replaced in Task 5)**

```ts
// search/search.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-rsv-search', standalone: true,
  template: `<p>Recherche de voyages (à venir).</p>`,
})
export class RsvSearchComponent {}
```

- [ ] **Step 3: Create the reserver routes**

```ts
// reserver.routes.ts
import { Routes } from '@angular/router';

export const Reserver_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reserver-layout.component').then(m => m.ReserverLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./search/search.component').then(m => m.RsvSearchComponent) },
      // Task 6 adds: 'voyage/:tripId'
      // Task 8 adds: 'voyage/:tripId/reserver'
      // Task 9 adds: 'statut/:requestId'
    ],
  },
];
```

- [ ] **Step 4: Wire into app.routes.ts (unguarded, before the wildcard)**

In `angular/src/app/app.routes.ts`, add BEFORE the `path: '**'` wildcard entry:

```ts
  //Réservation en ligne (PWA publique)
  { path: 'reserver', loadChildren: () => import('../_api/pages/reserver/reserver.routes').then(m => m.Reserver_routes) },
```

(Adjust the relative import depth to match `app.routes.ts` location — from `src/app/` to `src/_api/` is `../_api/…`.)

- [ ] **Step 5: Verify build + route loads**

Run: `cd angular && npx ng build`
Expected: build succeeds. (Manual: `ng serve` then visit `/reserver` shows the layout + placeholder; no login redirect.)

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/reserver angular/src/app/app.routes.ts
git commit -m "feat(pwa): public reserver layout + unguarded route tree"
```

---

### Task 5: Angular — search page (recherche)

**Files:**
- Modify: `angular/src/_api/pages/reserver/search/search.component.ts` (replace placeholder)
- Create: `angular/src/_api/pages/reserver/search/search.component.html`
- Create: `angular/src/_api/pages/reserver/search/search.component.scss`

**Interfaces:**
- Consumes: `OnlineBookingService.cities()`, `.searchTrips()`; `OnlineCity`, `OnlineTrip`.
- Produces: navigates to `['/reserver/voyage', trip.id]` on trip selection.

- [ ] **Step 1: Implement the component**

```ts
// search/search.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineCity, OnlineTrip } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-search', standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class RsvSearchComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private router = inject(Router);
  private toast = inject(ToastService);

  cities = signal<OnlineCity[]>([]);
  trips = signal<OnlineTrip[] | null>(null);
  loading = signal(false);

  fromCity = ''; toCity = ''; travelDate = '';

  ngOnInit(): void {
    this.svc.cities().subscribe({
      next: c => this.cities.set(c),
      error: e => this.toast.error(e?.error?.detail ?? 'Impossible de charger les villes.'),
    });
  }

  search(): void {
    if (!this.fromCity || !this.toCity || !this.travelDate) {
      this.toast.warning('Veuillez choisir le départ, la destination et la date.');
      return;
    }
    if (this.fromCity === this.toCity) {
      this.toast.warning('Le départ et la destination doivent être différents.');
      return;
    }
    this.loading.set(true);
    this.svc.searchTrips({ from_city_id: this.fromCity, to_city_id: this.toCity, travel_date: this.travelDate })
      .subscribe({
        next: t => { this.trips.set(t); this.loading.set(false); },
        error: e => { this.loading.set(false); this.toast.error(e?.error?.detail ?? 'La recherche a échoué. Réessayez.'); },
      });
  }

  open(trip: OnlineTrip): void {
    this.router.navigate(['/reserver/voyage', trip.id]);
  }
}
```

- [ ] **Step 2: Implement the template**

```html
<!-- search/search.component.html -->
<h1 class="h4 mb-3">Rechercher un voyage</h1>

<div class="card p-3 mb-4">
  <div class="row g-3">
    <div class="col-md-4">
      <label class="form-label">Départ</label>
      <select class="form-select" [(ngModel)]="fromCity">
        <option value="" disabled>Ville de départ</option>
        @for (c of cities(); track c.id) { <option [value]="c.id">{{ c.name }}</option> }
      </select>
    </div>
    <div class="col-md-4">
      <label class="form-label">Destination</label>
      <select class="form-select" [(ngModel)]="toCity">
        <option value="" disabled>Ville d'arrivée</option>
        @for (c of cities(); track c.id) { <option [value]="c.id">{{ c.name }}</option> }
      </select>
    </div>
    <div class="col-md-4">
      <label class="form-label">Date</label>
      <input type="date" class="form-control" [(ngModel)]="travelDate">
    </div>
  </div>
  <button class="btn btn-primary mt-3" (click)="search()" [disabled]="loading()">
    {{ loading() ? 'Recherche…' : 'Rechercher' }}
  </button>
</div>

@if (trips() !== null) {
  @if (trips()!.length === 0) {
    <p class="text-muted">Aucun voyage disponible pour cette date. Essayez une autre date.</p>
  } @else {
    <div class="d-flex flex-column gap-2">
      @for (t of trips()!; track t.id) {
        <div class="card p-3 rsv-trip" (click)="open(t)">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="fw-bold">{{ t.from_city }} → {{ t.to_city }}</div>
              <div class="text-muted small">{{ t.departure_datetime | date:'EEEE d MMM, HH:mm' }} · {{ t.vehicle_category.name }}</div>
            </div>
            <div class="text-end">
              <div class="small">{{ t.available_seats }} place(s)</div>
              @if (t.fares.length) { <div class="fw-bold">{{ t.fares[0].price }} XAF</div> }
            </div>
          </div>
        </div>
      }
    </div>
  }
}
```

```scss
// search/search.component.scss
.rsv-trip { cursor: pointer; transition: box-shadow .15s ease; }
.rsv-trip:hover { box-shadow: 0 4px 14px rgba(0,0,0,.08); }
```

- [ ] **Step 3: Verify build**

Run: `cd angular && npx ng build`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/reserver/search
git commit -m "feat(pwa): trip search page"
```

---

### Task 6: Angular — trip detail page with fare selection

**Files:**
- Create: `angular/src/_api/pages/reserver/trip-detail/trip-detail.component.ts`
- Create: `angular/src/_api/pages/reserver/trip-detail/trip-detail.component.html`
- Modify: `angular/src/_api/pages/reserver/reserver.routes.ts` (add child route)

**Interfaces:**
- Consumes: `OnlineBookingService.trip(tripId)`; route param `:tripId`.
- Produces: navigates to `['/reserver/voyage', tripId, 'reserver']` with `queryParams: { fare: fareId }`.

- [ ] **Step 1: Implement the component**

```ts
// trip-detail/trip-detail.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineTrip, OnlineFare } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-trip-detail', standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-detail.component.html',
})
export class RsvTripDetailComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);

  trip = signal<OnlineTrip | null>(null);
  loading = signal(true);
  error = signal(false);

  private tripId = '';

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId') ?? '';
    this.svc.trip(this.tripId).subscribe({
      next: t => { this.trip.set(t); this.loading.set(false); },
      error: e => { this.loading.set(false); this.error.set(true); this.toast.error(e?.error?.detail ?? 'Voyage introuvable.'); },
    });
  }

  choose(fare: OnlineFare): void {
    this.router.navigate(['/reserver/voyage', this.tripId, 'reserver'], { queryParams: { fare: fare.fare_id } });
  }
}
```

- [ ] **Step 2: Implement the template**

```html
<!-- trip-detail/trip-detail.component.html -->
@if (loading()) {
  <p>Chargement…</p>
} @else if (error()) {
  <p class="text-danger">Ce voyage n'est plus disponible. <a routerLink="/reserver">Nouvelle recherche</a>.</p>
} @else if (trip(); as t) {
  <h1 class="h4">{{ t.from_city }} → {{ t.to_city }}</h1>
  <div class="card p-3 my-3">
    <div><strong>Départ :</strong> {{ t.departure_datetime | date:'EEEE d MMM y, HH:mm' }}</div>
    <div><strong>Gare de départ :</strong> {{ t.from_terminal.name }} ({{ t.from_terminal.city }})</div>
    <div><strong>Gare d'arrivée :</strong> {{ t.to_terminal.name }} ({{ t.to_terminal.city }})</div>
    <div><strong>Véhicule :</strong> {{ t.vehicle_category.name }}</div>
    <div><strong>Places disponibles :</strong> {{ t.available_seats }}</div>
    @if (t.vehicle_category.amenities?.length) {
      <div><strong>Commodités :</strong> {{ t.vehicle_category.amenities.join(', ') }}</div>
    }
  </div>

  <h2 class="h6">Choisissez un tarif</h2>
  @if (t.fares.length === 0) {
    <p class="text-muted">Aucun tarif n'est configuré pour ce voyage. Contactez l'agence.</p>
  } @else {
    <div class="d-flex flex-column gap-2">
      @for (f of t.fares; track f.fare_id) {
        <button class="btn btn-outline-primary d-flex justify-content-between" (click)="choose(f)" [disabled]="t.available_seats === 0">
          <span>{{ f.label }}</span><span class="fw-bold">{{ f.price }} XAF</span>
        </button>
      }
    </div>
    @if (t.available_seats === 0) { <p class="text-danger mt-2">Ce voyage est complet.</p> }
  }
}
```

(Add `RouterModule` to `imports` since the template uses `routerLink`.)

- [ ] **Step 3: Add the child route**

In `reserver.routes.ts` children, add after the `''` route:
```ts
      { path: 'voyage/:tripId', loadComponent: () => import('./trip-detail/trip-detail.component').then(m => m.RsvTripDetailComponent) },
```

- [ ] **Step 4: Verify build**

Run: `cd angular && npx ng build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/reserver
git commit -m "feat(pwa): trip detail page with fare selection"
```

---

### Task 7: Angular — seat picker component

**Files:**
- Create: `angular/src/_api/pages/reserver/seats/seat-picker.component.ts`
- Create: `angular/src/_api/pages/reserver/seats/seat-picker.component.html`
- Create: `angular/src/_api/pages/reserver/seats/seat-picker.component.scss`

**Interfaces:**
- Consumes: `OnlineSeatMap`.
- Produces: `@Input() map: OnlineSeatMap`; `@Output() seatChange = EventEmitter<string>` (the chosen seat label, or '' when cleared). Seat labels are `"1".."total_seats"` in row-major order; a seat is taken when its label is in `map.booked_seats`.

- [ ] **Step 1: Implement the component**

```ts
// seats/seat-picker.component.ts
import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineSeatMap } from '../../../models/online-booking.models';

interface SeatCell { label: string; taken: boolean; }

@Component({
  selector: 'app-seat-picker', standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.scss'],
})
export class SeatPickerComponent {
  private _map = signal<OnlineSeatMap | null>(null);
  @Input() set map(v: OnlineSeatMap) { this._map.set(v); this.selected.set(''); }

  @Output() seatChange = new EventEmitter<string>();

  selected = signal<string>('');

  /** Row-major grid: seat_cols seats per row; leftover seats form the last (back) row. */
  rows = computed<SeatCell[][]>(() => {
    const m = this._map();
    if (!m) return [];
    const taken = new Set(m.booked_seats);
    const cells: SeatCell[] = Array.from({ length: m.total_seats }, (_, i) => {
      const label = String(i + 1);
      return { label, taken: taken.has(label) };
    });
    const cols = Math.max(1, m.seat_cols);
    const out: SeatCell[][] = [];
    for (let i = 0; i < cells.length; i += cols) out.push(cells.slice(i, i + cols));
    return out;
  });

  aisleAfter = computed(() => this._map()?.aisle_after_col ?? null);

  pick(cell: SeatCell): void {
    if (cell.taken) return;
    const next = this.selected() === cell.label ? '' : cell.label;
    this.selected.set(next);
    this.seatChange.emit(next);
  }
}
```

- [ ] **Step 2: Implement the template**

```html
<!-- seats/seat-picker.component.html -->
<div class="seat-grid">
  @for (row of rows(); track $index) {
    <div class="seat-row">
      @for (cell of row; track cell.label) {
        <button type="button" class="seat"
                [class.taken]="cell.taken"
                [class.selected]="selected() === cell.label"
                [disabled]="cell.taken"
                (click)="pick(cell)">{{ cell.label }}</button>
        @if (aisleAfter() !== null && $index + 1 === aisleAfter()) { <span class="aisle"></span> }
      }
    </div>
  }
</div>
<div class="seat-legend small text-muted mt-2">
  <span class="dot free"></span> Libre
  <span class="dot selected ms-3"></span> Sélectionné
  <span class="dot taken ms-3"></span> Occupé
</div>
```

```scss
// seats/seat-picker.component.scss
.seat-grid { display: flex; flex-direction: column; gap: 8px; }
.seat-row { display: flex; align-items: center; gap: 8px; }
.seat { width: 40px; height: 40px; border: 1px solid #adb5bd; border-radius: 6px; background: #fff; cursor: pointer; }
.seat.taken { background: #dee2e6; color: #adb5bd; cursor: not-allowed; }
.seat.selected { background: #0d6efd; color: #fff; border-color: #0d6efd; }
.aisle { width: 20px; display: inline-block; }
.seat-legend .dot { display: inline-block; width: 14px; height: 14px; border-radius: 3px; vertical-align: middle; }
.seat-legend .dot.free { background: #fff; border: 1px solid #adb5bd; }
.seat-legend .dot.selected { background: #0d6efd; }
.seat-legend .dot.taken { background: #dee2e6; }
```

- [ ] **Step 3: Verify build**

Run: `cd angular && npx ng build`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/reserver/seats
git commit -m "feat(pwa): seat picker component"
```

---

### Task 8: Angular — booking page (seat + passenger + payment)

**Files:**
- Create: `angular/src/_api/pages/reserver/booking/booking.component.ts`
- Create: `angular/src/_api/pages/reserver/booking/booking.component.html`
- Modify: `angular/src/_api/pages/reserver/reserver.routes.ts` (add child route)

**Interfaces:**
- Consumes: `OnlineBookingService.trip()`, `.seatMap()`, `.initiate()`; `SeatPickerComponent`; route param `:tripId`, query param `fare`.
- Produces: navigates to `['/reserver/statut', requestId]` on successful initiation.

- [ ] **Step 1: Implement the component**

```ts
// booking/booking.component.ts
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineTrip, OnlineSeatMap, OnlineFare, InitiateBookingBody } from '../../../models/online-booking.models';
import { SeatPickerComponent } from '../seats/seat-picker.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-booking', standalone: true,
  imports: [CommonModule, FormsModule, SeatPickerComponent],
  templateUrl: './booking.component.html',
})
export class RsvBookingComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);

  trip = signal<OnlineTrip | null>(null);
  seatMap = signal<OnlineSeatMap | null>(null);
  loading = signal(true);
  submitting = signal(false);

  private tripId = '';
  private fareId = '';

  fare = computed<OnlineFare | null>(() => {
    const t = this.trip(); if (!t) return null;
    return t.fares.find(f => f.fare_id === this.fareId) ?? null;
  });
  needsSeat = computed(() => !(this.seatMap()?.free_seating ?? true));

  // form model
  name = ''; phone = ''; email = ''; seat = '';
  method: 'mtn_momo' | 'orange_money' = 'mtn_momo';
  paymentPhone = '';

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId') ?? '';
    this.fareId = this.route.snapshot.queryParamMap.get('fare') ?? '';
    forkJoin({ trip: this.svc.trip(this.tripId), seats: this.svc.seatMap(this.tripId) }).subscribe({
      next: ({ trip, seats }) => {
        this.trip.set(trip); this.seatMap.set(seats); this.loading.set(false);
        if (!this.fare()) this.toast.warning('Tarif non trouvé. Veuillez le choisir à nouveau.');
      },
      error: e => { this.loading.set(false); this.toast.error(e?.error?.detail ?? 'Impossible de charger le voyage.'); },
    });
  }

  onSeat(label: string): void { this.seat = label; }

  submit(): void {
    const fare = this.fare();
    if (!fare) { this.toast.error('Veuillez choisir un tarif.'); return; }
    if (!this.name.trim() || !this.phone.trim()) { this.toast.warning('Nom et téléphone du passager sont requis.'); return; }
    if (!this.paymentPhone.trim()) { this.toast.warning('Numéro de paiement Mobile Money requis.'); return; }
    if (this.needsSeat() && !this.seat) { this.toast.warning('Veuillez choisir un siège.'); return; }

    const body: InitiateBookingBody = {
      passenger_name: this.name.trim(),
      passenger_phone: this.phone.trim(),
      passenger_email: this.email.trim() || undefined,
      passenger_type: fare.passenger_type,
      seat_number: this.needsSeat() ? this.seat : '',
      fare_id: fare.fare_id,
      amount: fare.price,
      payment_method: this.method,
      payment_phone: this.paymentPhone.trim(),
    };

    this.submitting.set(true);
    this.svc.initiate(this.tripId, body).subscribe({
      next: req => this.router.navigate(['/reserver/statut', req.id]),
      error: e => { this.submitting.set(false); this.toast.error(e?.error?.detail ?? 'La réservation a échoué. Réessayez.'); },
    });
  }
}
```

- [ ] **Step 2: Implement the template**

```html
<!-- booking/booking.component.html -->
@if (loading()) {
  <p>Chargement…</p>
} @else if (trip(); as t) {
  <h1 class="h5">{{ t.from_city }} → {{ t.to_city }}</h1>
  <div class="text-muted mb-3">{{ t.departure_datetime | date:'EEEE d MMM y, HH:mm' }}
    @if (fare(); as f) { · {{ f.label }} · <strong>{{ f.price }} XAF</strong> }
  </div>

  @if (needsSeat()) {
    <h2 class="h6">Choisissez votre siège</h2>
    <app-seat-picker [map]="seatMap()!" (seatChange)="onSeat($event)"></app-seat-picker>
    <div class="my-2">Siège : <strong>{{ seat || '—' }}</strong></div>
  }

  <h2 class="h6 mt-3">Passager</h2>
  <div class="row g-2">
    <div class="col-md-6"><input class="form-control" placeholder="Nom complet" [(ngModel)]="name"></div>
    <div class="col-md-6"><input class="form-control" placeholder="Téléphone" [(ngModel)]="phone"></div>
    <div class="col-md-6"><input class="form-control" placeholder="Email (facultatif)" [(ngModel)]="email"></div>
  </div>

  <h2 class="h6 mt-3">Paiement Mobile Money</h2>
  <div class="row g-2">
    <div class="col-md-6">
      <select class="form-select" [(ngModel)]="method">
        <option value="mtn_momo">MTN Mobile Money</option>
        <option value="orange_money">Orange Money</option>
      </select>
    </div>
    <div class="col-md-6"><input class="form-control" placeholder="Numéro de paiement" [(ngModel)]="paymentPhone"></div>
  </div>

  <button class="btn btn-primary mt-3" (click)="submit()" [disabled]="submitting()">
    {{ submitting() ? 'Traitement…' : 'Payer et réserver' }}
  </button>
  <p class="small text-muted mt-2">Vous recevrez une demande de confirmation sur votre téléphone Mobile Money.</p>
}
```

- [ ] **Step 3: Add the child route**

In `reserver.routes.ts` children:
```ts
      { path: 'voyage/:tripId/reserver', loadComponent: () => import('./booking/booking.component').then(m => m.RsvBookingComponent) },
```

- [ ] **Step 4: Verify build**

Run: `cd angular && npx ng build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/reserver
git commit -m "feat(pwa): booking page (seat + passenger + Mobile Money payment)"
```

---

### Task 9: Angular — status/ticket page (poll + QR)

**Files:**
- Create: `angular/src/_api/pages/reserver/status/status.component.ts`
- Create: `angular/src/_api/pages/reserver/status/status.component.html`
- Create: `angular/src/_api/pages/reserver/status/status.component.scss`
- Modify: `angular/src/_api/pages/reserver/reserver.routes.ts` (add child route)
- Modify: `angular/package.json` (add `qrcode` + `@types/qrcode`)

**Interfaces:**
- Consumes: `OnlineBookingService.status(requestId)`; route param `:requestId`; `qrcode` npm.
- Produces: terminal page; renders ticket + QR on `paid`.

- [ ] **Step 1: Add the QR dependency**

Run: `cd angular && npm install qrcode && npm install -D @types/qrcode`
Expected: both install; `package.json` updated.

- [ ] **Step 2: Implement the component**

```ts
// status/status.component.ts
import { Component, OnDestroy, OnInit, inject, signal, effect, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import QRCode from 'qrcode';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { BookingRequestStatus } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-status', standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class RsvStatusComponent implements OnInit, OnDestroy {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private toast = inject(ToastService);

  req = signal<BookingRequestStatus | null>(null);
  loading = signal(true);
  private timer: any = null;
  private requestId = '';

  qrCanvas = viewChild<ElementRef<HTMLCanvasElement>>('qr');

  constructor() {
    // When paid + ticket present + canvas rendered, draw the QR.
    effect(() => {
      const r = this.req();
      const el = this.qrCanvas()?.nativeElement;
      if (r?.status === 'paid' && r.ticket && el) {
        QRCode.toCanvas(el, r.ticket.qr_code, { width: 220 }).catch(() => {});
      }
    });
  }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('requestId') ?? '';
    this.poll(true);
    this.timer = setInterval(() => this.poll(false), 5000);
  }

  private poll(first: boolean): void {
    this.svc.status(this.requestId).subscribe({
      next: r => {
        this.req.set(r); this.loading.set(false);
        if (r.status !== 'pending') this.stop();
      },
      error: e => {
        this.loading.set(false);
        if (first) this.toast.error(e?.error?.detail ?? 'Réservation introuvable.');
      },
    });
  }

  private stop(): void { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
  ngOnDestroy(): void { this.stop(); }
}
```

- [ ] **Step 3: Implement the template**

```html
<!-- status/status.component.html -->
@if (loading()) {
  <p>Vérification du paiement…</p>
} @else if (req(); as r) {
  @switch (r.status) {
    @case ('pending') {
      <div class="text-center py-4">
        <div class="spinner-border text-primary mb-3"></div>
        <h1 class="h5">En attente de votre paiement</h1>
        <p class="text-muted">Confirmez la demande sur votre téléphone ({{ r.payment_method_display }}).
          Cette page se met à jour automatiquement.</p>
      </div>
    }
    @case ('paid') {
      <div class="text-center py-3">
        <h1 class="h4 text-success">Réservation confirmée ✓</h1>
        <p>{{ r.trip_summary.from_city }} → {{ r.trip_summary.to_city }} ·
           {{ r.trip_summary.departure_datetime | date:'d MMM y, HH:mm' }}</p>
        @if (r.ticket) {
          <div class="ticket card p-3 d-inline-block">
            <div><strong>Billet :</strong> {{ r.ticket.ticket_number }}</div>
            <div><strong>Passager :</strong> {{ r.passenger_name }}</div>
            @if (r.seat_number) { <div><strong>Siège :</strong> {{ r.seat_number }}</div> }
            <div><strong>Montant :</strong> {{ r.amount }} XAF</div>
            <canvas #qr class="mt-3"></canvas>
            <div class="small text-muted">Présentez ce QR code à l'embarquement.</div>
          </div>
        }
      </div>
    }
    @case ('failed') {
      <div class="text-center py-4">
        <h1 class="h5 text-danger">Paiement échoué</h1>
        <p class="text-muted">Le paiement n'a pas abouti. Vous pouvez réessayer.</p>
        <a class="btn btn-primary" routerLink="/reserver">Nouvelle réservation</a>
      </div>
    }
    @case ('expired') {
      <div class="text-center py-4">
        <h1 class="h5 text-warning">Demande expirée</h1>
        <p class="text-muted">Le délai de paiement est dépassé. Veuillez recommencer.</p>
        <a class="btn btn-primary" routerLink="/reserver">Nouvelle réservation</a>
      </div>
    }
  }
} @else {
  <p class="text-danger">Réservation introuvable. <a routerLink="/reserver">Nouvelle recherche</a>.</p>
}
```

```scss
// status/status.component.scss
.ticket { text-align: left; min-width: 260px; }
```

- [ ] **Step 4: Add the child route**

In `reserver.routes.ts` children:
```ts
      { path: 'statut/:requestId', loadComponent: () => import('./status/status.component').then(m => m.RsvStatusComponent) },
```

- [ ] **Step 5: Verify build**

Run: `cd angular && npx ng build`
Expected: success (qrcode resolves; effect + viewChild compile).

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/reserver angular/package.json angular/package-lock.json
git commit -m "feat(pwa): booking status page with polling + QR ticket"
```

---

### Task 10: PWA packaging (manifest + service worker, scoped)

**Files:**
- Modify: `angular/angular.json` (add `serviceWorker` + `ngswConfigPath` to production; ensure `manifest.webmanifest` + `icons` in assets)
- Create: `angular/ngsw-config.json`
- Create: `angular/src/manifest.webmanifest`
- Create: `angular/src/assets/icons/icon-192.png`, `icon-512.png` (app icons; generate simple placeholder PNGs if none exist)
- Modify: `angular/src/index.html` (link manifest + theme-color)
- Modify: `angular/src/app/app.config.ts` (register service worker, production-only)
- Modify: `angular/package.json` (add `@angular/service-worker` matching the installed Angular version)

**Interfaces:**
- Consumes: nothing new at runtime; wraps the built app.
- Produces: installable PWA; SW active only in production build; `/api/v1/online/…` cached network-first; authenticated staff endpoints never cached.

- [ ] **Step 1: Install the service worker package**

Run: `cd angular && npm install @angular/service-worker@$(node -p "require('./package.json').dependencies['@angular/core'].replace(/[^0-9.]/g,'')")`
(If that pin fails, install the version matching `@angular/core` shown in `package.json`.)
Expected: `@angular/service-worker` added to dependencies.

- [ ] **Step 2: Create the manifest**

```json
// angular/src/manifest.webmanifest
{
  "name": "SCIG — Réservation en ligne",
  "short_name": "SCIG Réserver",
  "theme_color": "#0d6efd",
  "background_color": "#f6f8fb",
  "display": "standalone",
  "scope": "/reserver",
  "start_url": "/reserver",
  "icons": [
    { "src": "assets/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "assets/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

- [ ] **Step 3: Create ngsw-config.json (scoped caching)**

```json
// angular/ngsw-config.json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": { "files": ["/favicon.ico", "/index.html", "/manifest.webmanifest", "/*.css", "/*.js"] }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": { "files": ["/assets/**", "/*.(png|jpg|svg|webp|woff2)"] }
    }
  ],
  "dataGroups": [
    {
      "name": "online-api",
      "urls": ["/api/v1/online/**"],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 100,
        "maxAge": "1h",
        "timeout": "5s"
      }
    }
  ]
}
```

Note: only `/api/v1/online/**` is listed. Authenticated staff endpoints (`/api/v1/auth`, `/api/v1/treasury`, …) are deliberately absent, so the SW never caches them.

- [ ] **Step 4: Wire angular.json**

In `angular.json`, under `projects.<name>.architect.build.configurations.production`, add:
```json
"serviceWorker": "ngsw-config.json"
```
(Newer Angular schema uses `"serviceWorker": "ngsw-config.json"`; if the installed schema expects a boolean + separate `ngswConfigPath`, use `"serviceWorker": true, "ngswConfigPath": "ngsw-config.json"` instead — match the schema the CLI accepts.)
Ensure `src/manifest.webmanifest` is in the build `assets` array (add `"src/manifest.webmanifest"` if missing).

- [ ] **Step 5: Link manifest + theme in index.html**

In `angular/src/index.html` `<head>`, add:
```html
  <link rel="manifest" href="manifest.webmanifest">
  <meta name="theme-color" content="#0d6efd">
```

- [ ] **Step 6: Register the service worker (production only)**

In `angular/src/app/app.config.ts`, add to the `providers` array:
```ts
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';
// ...
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
```

- [ ] **Step 7: Add app icons**

If `src/assets/icons/` has no icons, add `icon-192.png` and `icon-512.png` (a simple solid-color square with "SCIG" is acceptable as a first pass). Confirm the paths match the manifest.

- [ ] **Step 8: Verify production build produces the service worker**

Run: `cd angular && npx ng build --configuration production`
Expected: build succeeds AND `dist/**/ngsw-worker.js` + `dist/**/manifest.webmanifest` exist. Verify: `ls angular/dist/*/ngsw-worker.js` (path depends on project output dir).

- [ ] **Step 9: Commit**

```bash
git add angular/angular.json angular/ngsw-config.json angular/src/manifest.webmanifest angular/src/index.html angular/src/app/app.config.ts angular/src/assets/icons angular/package.json angular/package-lock.json
git commit -m "feat(pwa): installable PWA — manifest + scoped service worker"
```

---

## Final Verification

- [ ] Backend suite green: `cd backend && pytest -q` (all pass).
- [ ] Frontend prod build green with SW + manifest emitted: `cd angular && npx ng build --configuration production`.
- [ ] Manual smoke (dev): set `environment.onlineCompanyId` to a seeded company with active routes/trips/fares; `ng serve`; visit `/reserver`; search → detail → choose fare → pick seat → fill passenger + payment → status page polls. (Campay sandbox credentials needed for a real payment; without them the request stays `pending`/`failed`, which the status page handles.)
- [ ] Confirm `/reserver` is reachable without login and does not render the back-office shell.

## Self-Review Notes

- **Spec coverage:** served-cities endpoint (Task 1) ↔ spec §6.1; fares on trip (Task 2) ↔ §6.2; public area + layout + unguarded route (Task 4) ↔ §4.1; search/detail/seat/passenger/payment/status flow (Tasks 5–9) ↔ §5; PWA packaging + scoped caching + offline ticket (Task 10) ↔ §7; explicit French errors reused + detail fallback (Task 3) ↔ §8; single passenger / MoMo-only / one company ↔ §3 scope calls (honored: one passenger per initiate call, only MoMo methods offered, `onlineCompanyId` config).
- **Type consistency:** `OnlineFare.fare_id`/`price` produced by Task 2 serializer and consumed identically in Tasks 6/8; `SeatPicker` emits a seat label string consumed as `seat_number` in Task 8; `BookingRequestStatus.status` union matches the `@switch` cases in Task 9.
- **Known assumption to verify during Task 1/2:** the exact `Route` company FK path and the online_booking test fixture helpers — the plan instructs reading `route.py` and the existing tests before writing fixtures rather than assuming.
