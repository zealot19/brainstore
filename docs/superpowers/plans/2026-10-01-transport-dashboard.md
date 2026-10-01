# Transport Dashboard + Clients Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Transport operations dashboard — per-trip cards (counts + revenue for tickets/baggage/colis, with a date-range picker defaulting to today) and four monthly count charts (tickets, baggage, colis, clients) with per-chart year pickers — and re-add the Clients (passengers) menu.

**Architecture:** Two new read-only DRF endpoints under `apps/voyages_trips/dashboard/` aggregate over existing tables (no new models/migrations), agency-scoped. A new Angular `TransportDashboardComponent` renders the cards + `ng-apexcharts` bar charts. The Transport "Dashboard" sidebar item and the launcher's `transport` landing point to it; the Clients menu re-uses the existing passengers list.

**Tech Stack:** Django + DRF, pytest (run `../env/bin/python -m pytest` from `backend/`); Angular standalone components, `ng-apexcharts`, Transloco i18n.

**Spec:** `docs/superpowers/specs/2026-10-01-transport-dashboard-design.md`

## Global Constraints

- Backend tests run from `backend/` as `../env/bin/python -m pytest <path> -q`; `manage.py` as `../env/bin/python manage.py <cmd>`. Each run is slow (~2–4 min, test-DB migration).
- Commit as shimi; **no** Claude co-author trailer. Work on branch `feat/transport-dashboard`. Do not push until the user asks.
- French UI copy; app is French throughout. Paginated list envelope stays `{success,data,pagination}`; `success_response(data)` wraps as `{success, data}` (frontend reads `d?.data ?? d`).
- No new DB models or migrations — pure aggregation over existing tables.
- **Card counts** = all **non-cancelled** items on the trip (status != `cancelled`). **Card revenue** = sum of item amount fields: `Ticket.amount`, `Baggage.amount_received`, `Parcel.amount_received`. `total_revenue` = tickets + baggage + parcels.
- **Trips shown** = `scheduled_departure__date` in `[date_from, date_to]`; default both = today (local date).
- **Charts** = count only (y = number), x = Jan→Dec; date basis = item `created_at` month; one `metric` per request; per-chart year (4 independent fetches).
- **Agency scope:** cards + charts scope to `user_agency_ids(user)` (None = institution admin → all). Trip/ticket/baggage agency via `trip.origin.agency_id`; parcels in the series via `Parcel.agency_id`.
- Vehicle plate field is `license_plate`. Trip header = `vehicle.license_plate` if a vehicle is set, else `trip.code` (else `trip.number`).
- Permission on dashboard endpoints: `voyage.trip.view` (+ `HasModulePermission`).
- Known ~14-red master pytest baseline exists — add no new failures.

---

### Task 1: Dashboard selector — trip cards aggregation

**Files:**
- Create: `backend/apps/voyages_trips/dashboard/__init__.py` (empty)
- Create: `backend/apps/voyages_trips/dashboard/selectors.py`
- Create: `backend/apps/voyages_trips/dashboard/tests/__init__.py` (empty)
- Test: `backend/apps/voyages_trips/dashboard/tests/test_trip_cards.py`

**Interfaces:**
- Consumes: `apps.core.agency_scope.user_agency_ids`; models `voyages_trips.Trip`, `voyages_booking.Ticket`, `voyages_consignment.Baggage`, `voyages_consignment.Parcel`.
- Produces: `trip_cards(company, user, date_from, date_to) -> list[dict]` where each dict has keys: `id`(str), `header`(str), `route_label`(str), `status`(str), `status_display`(str), `scheduled_departure`(iso str), `tickets_count`(int), `tickets_revenue`(float), `baggage_count`(int), `baggage_revenue`(float), `parcels_count`(int), `parcels_revenue`(float), `total_revenue`(float).

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_trips/dashboard/tests/test_trip_cards.py
import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import trip_cards

pytestmark = pytest.mark.django_db


def _setup(email="dash@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route
    from apps.voyages_trips.models import Trip
    company, _ = create_company(name="DashCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    town = Town.objects.create(company=company, name="Dla")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Orig",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    today = dt.date.today()
    trip = Trip.objects.create(company=company, code="TR1", route=route, origin=o,
                               scheduled_departure=dt.datetime.combine(today, dt.time(8, 0)),
                               status=Trip.Status.DRAFT)
    return company, admin, ag, o, d, route, trip, today


def _passenger(company):
    from apps.voyages_booking.models import Passenger
    return Passenger.objects.create(company=company, name="X", phone="6")


def _booking(company, trip):
    from apps.voyages_booking.models import Booking
    return Booking.objects.create(company=company, outbound_trip=trip, agency=trip.origin.agency)


def test_trip_card_counts_and_revenue_exclude_cancelled():
    from apps.voyages_booking.models import Ticket
    company, admin, ag, o, d, route, trip, today = _setup()
    p = _passenger(company); b = _booking(company, trip)
    Ticket.objects.create(company=company, booking=b, passenger=p, trip=trip,
                          amount=1000, status=Ticket.Status.SOLD)
    Ticket.objects.create(company=company, booking=b, passenger=p, trip=trip,
                          amount=1000, status=Ticket.Status.CANCELLED)  # excluded
    cards = trip_cards(company, admin, today, today)
    assert len(cards) == 1
    c = cards[0]
    assert c["tickets_count"] == 1
    assert c["tickets_revenue"] == 1000.0
    assert c["total_revenue"] == 1000.0
    assert c["header"] == "TR1"           # no vehicle -> code


def test_trip_outside_period_excluded():
    import datetime as dt
    company, admin, ag, o, d, route, trip, today = _setup("dash2@x.com")
    cards = trip_cards(company, admin, today - dt.timedelta(days=5), today - dt.timedelta(days=4))
    assert cards == []
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_trip_cards.py -q
```
Expected: FAIL (module `apps.voyages_trips.dashboard.selectors` not found).

- [ ] **Step 3: Implement the selector**

```python
# backend/apps/voyages_trips/dashboard/selectors.py
"""Agrégations du tableau de bord Transport (lecture seule, cloisonné par agence)."""
from django.db.models import Count, Sum
from apps.core.agency_scope import user_agency_ids
from apps.voyages_trips.models import Trip
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Baggage, Parcel


def _by_trip(qs, amount_field):
    """{trip_id: (count, revenue)} pour un queryset d'items (hors annulés)."""
    rows = (qs.exclude(status="cancelled")
              .values("trip_id")
              .annotate(c=Count("id"), r=Sum(amount_field)))
    return {row["trip_id"]: (row["c"], float(row["r"] or 0)) for row in rows}


def trip_cards(company, user, date_from, date_to):
    ids = user_agency_ids(user)
    trips = (Trip.objects.filter(is_deleted=False, company=company,
                                 scheduled_departure__date__range=(date_from, date_to))
             .select_related("vehicle", "route", "origin")
             .order_by("scheduled_departure"))
    if ids is not None:
        trips = trips.filter(origin__agency_id__in=ids)
    trips = list(trips)
    trip_ids = [t.id for t in trips]

    tk = _by_trip(Ticket.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount")
    bg = _by_trip(Baggage.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount_received")
    pc = _by_trip(Parcel.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount_received")

    cards = []
    for t in trips:
        tc, tr = tk.get(t.id, (0, 0.0))
        bc, br = bg.get(t.id, (0, 0.0))
        cc, cr = pc.get(t.id, (0, 0.0))
        header = (t.vehicle.license_plate if t.vehicle_id else "") or t.code or t.number or "—"
        cards.append({
            "id": str(t.id),
            "header": header,
            "route_label": t.route.code if t.route_id else "",
            "status": t.status,
            "status_display": t.get_status_display(),
            "scheduled_departure": t.scheduled_departure.isoformat() if t.scheduled_departure else None,
            "tickets_count": tc, "tickets_revenue": tr,
            "baggage_count": bc, "baggage_revenue": br,
            "parcels_count": cc, "parcels_revenue": cr,
            "total_revenue": tr + br + cr,
        })
    return cards
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_trip_cards.py -q
```
Expected: PASS. If a model field used in `_setup` (e.g. `Route` requires more fields) errors, adjust the test fixture to the real required fields — confirm with `grep -nE "= models\." apps/voyages_config/models/route.py` — but do NOT change the selector's logic.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/dashboard
git commit -m "feat(transport-dash): trip-cards aggregation selector"
```

---

### Task 2: Agency-scope test for trip cards

**Files:**
- Test: `backend/apps/voyages_trips/dashboard/tests/test_trip_cards_scope.py`

**Interfaces:**
- Consumes: `trip_cards` (Task 1); `apps.users.services.user_services.create_user`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_trips/dashboard/tests/test_trip_cards_scope.py
import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import trip_cards

pytestmark = pytest.mark.django_db


def test_other_agency_user_sees_no_cards_admin_sees_all():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route
    from apps.voyages_trips.models import Trip
    from apps.users.services.user_services import create_user

    company, _ = create_company(name="ScopeCo", admin_email="sc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="sc@x.com")
    a = Agency.objects.create(company=company, name="Douala", code="DLA")
    b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O",
                                    is_station=True, station_kind="AGENCY", agency=a)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D",
                                    is_station=True, station_kind="AGENCY", agency=a)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    today = dt.date.today()
    Trip.objects.create(company=company, code="TR1", route=route, origin=o,
                        scheduled_departure=dt.datetime.combine(today, dt.time(8, 0)),
                        status=Trip.Status.DRAFT)
    other, _ = create_user(created_by=admin, company=company, email="u@x.com",
                           first_name="S", last_name="T", is_institution_admin=False,
                           default_agency_id=b.id, agency_ids=[b.id])

    assert trip_cards(company, other, today, today) == []       # agency B: none
    assert len(trip_cards(company, admin, today, today)) == 1    # admin: all
```

- [ ] **Step 2: Run it to verify it fails/passes**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_trip_cards_scope.py -q
```
Expected: PASS (the Task 1 selector already scopes). If it ERRORS on fixture fields, fix the fixture to match real required model fields; if it FAILS on the assertion, the scope logic is wrong — fix `trip_cards` scoping.

- [ ] **Step 3: Commit**

```bash
git add backend/apps/voyages_trips/dashboard/tests/test_trip_cards_scope.py
git commit -m "test(transport-dash): agency scoping for trip cards"
```

---

### Task 3: Dashboard selector — monthly series

**Files:**
- Modify: `backend/apps/voyages_trips/dashboard/selectors.py`
- Test: `backend/apps/voyages_trips/dashboard/tests/test_series.py`

**Interfaces:**
- Consumes: same models; `user_agency_ids`.
- Produces: `monthly_series(company, user, year, metric) -> list[int]` (length 12, Jan→Dec). `metric` ∈ `{"tickets","baggage","parcels","clients"}`; unknown → all zeros.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_trips/dashboard/tests/test_series.py
import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import monthly_series

pytestmark = pytest.mark.django_db


def _base(email):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route
    from apps.voyages_trips.models import Trip
    company, _ = create_company(name="SerCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    ag = Agency.objects.create(company=company, name="D", code="DLA")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    trip = Trip.objects.create(company=company, code="TR1", route=route, origin=o,
                               scheduled_departure=dt.datetime.now(), status=Trip.Status.DRAFT)
    return company, admin, trip


def test_tickets_series_counts_by_created_month():
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    company, admin, trip = _base("ser@x.com")
    p = Passenger.objects.create(company=company, name="X", phone="6")
    b = Booking.objects.create(company=company, outbound_trip=trip, agency=trip.origin.agency)
    t = Ticket.objects.create(company=company, booking=b, passenger=p, trip=trip,
                              amount=500, status=Ticket.Status.SOLD)
    year = t.created_at.year
    series = monthly_series(company, admin, year, "tickets")
    assert len(series) == 12
    assert series[t.created_at.month - 1] == 1
    assert sum(series) == 1


def test_unknown_metric_zero():
    company, admin, trip = _base("ser2@x.com")
    assert monthly_series(company, admin, 2026, "bogus") == [0] * 12
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_series.py -q
```
Expected: FAIL (`monthly_series` not defined).

- [ ] **Step 3: Implement `monthly_series`**

Append to `selectors.py`:

```python
from django.db.models.functions import ExtractMonth


def _months(qs):
    """Liste de 12 compteurs (jan..déc) à partir d'un queryset filtré sur l'année."""
    out = [0] * 12
    rows = qs.annotate(m=ExtractMonth("created_at")).values("m").annotate(c=Count("id"))
    for row in rows:
        if row["m"]:
            out[row["m"] - 1] = row["c"]
    return out


def monthly_series(company, user, year, metric):
    ids = user_agency_ids(user)
    if metric == "tickets":
        qs = Ticket.objects.filter(is_deleted=False, company=company,
                                   created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(trip__origin__agency_id__in=ids)
        return _months(qs)
    if metric == "baggage":
        qs = Baggage.objects.filter(is_deleted=False, company=company,
                                    created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(trip__origin__agency_id__in=ids)
        return _months(qs)
    if metric == "parcels":
        qs = Parcel.objects.filter(is_deleted=False, company=company,
                                   created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(agency_id__in=ids)   # colis : agence d'origine (peut ne pas avoir de voyage)
        return _months(qs)
    if metric == "clients":
        from apps.voyages_booking.models import Passenger
        qs = Passenger.objects.filter(is_deleted=False, company=company, created_at__year=year)
        if ids is not None:
            # clients « de l'agence » = passagers ayant un billet sur un voyage de ces agences
            qs = qs.filter(tickets__trip__origin__agency_id__in=ids).distinct()
        return _months(qs)
    return [0] * 12
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_series.py -q
```
Expected: PASS. (Note: `_months` on a `.distinct()` passenger queryset with annotate is fine — the clients branch counts distinct passengers per month via `Count("id")` after the distinct filter; if duplicates arise from the join, change its count to `Count("id", distinct=True)` in `_months` only for that path — but first run and see; the test asserts tickets, which is unaffected.)

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/dashboard/selectors.py backend/apps/voyages_trips/dashboard/tests/test_series.py
git commit -m "feat(transport-dash): monthly count series selector"
```

---

### Task 4: Dashboard API views + URLs

**Files:**
- Create: `backend/apps/voyages_trips/dashboard/views.py`
- Create: `backend/apps/voyages_trips/dashboard/urls.py`
- Modify: `backend/api/v1/router.py` (add `path("voyages/dashboard/", include("apps.voyages_trips.dashboard.urls"))`)
- Test: `backend/apps/voyages_trips/dashboard/tests/test_api.py`

**Interfaces:**
- Consumes: `trip_cards`, `monthly_series` (Tasks 1,3); `success_response`; `IsAuthenticated`, `HasModulePermission` from `apps.core.permissions`.
- Produces: `GET /api/v1/voyages/dashboard/trips/?date_from=&date_to=` → `{success, data:{date_from,date_to,trips:[...]}}`; `GET /api/v1/voyages/dashboard/series/?year=&metric=` → `{success, data:{year,metric,data:[12]}}`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_trips/dashboard/tests/test_api.py
import datetime as dt
import pytest
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def _admin(email="api@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="ApiCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return User.objects.get(email=email)


def test_trips_endpoint_defaults_today():
    admin = _admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/dashboard/trips/")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert "trips" in body and "date_from" in body


def test_series_endpoint_shape():
    admin = _admin("api2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/dashboard/series/?year=2026&metric=tickets")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert body["metric"] == "tickets"
    assert isinstance(body["data"], list) and len(body["data"]) == 12
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_api.py -q
```
Expected: FAIL (404 — routes not wired).

- [ ] **Step 3: Implement views + urls + router**

```python
# backend/apps/voyages_trips/dashboard/views.py
import datetime as dt
from rest_framework.views import APIView
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response
from apps.voyages_trips.dashboard import selectors


def _parse_date(s, default):
    if not s:
        return default
    try:
        return dt.date.fromisoformat(s)
    except (TypeError, ValueError):
        return default


class TripCardsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        today = dt.date.today()
        date_from = _parse_date(request.query_params.get("date_from"), today)
        date_to = _parse_date(request.query_params.get("date_to"), today)
        cards = selectors.trip_cards(request.user.company, request.user, date_from, date_to)
        return success_response({
            "date_from": date_from.isoformat(),
            "date_to": date_to.isoformat(),
            "trips": cards,
        })


class SeriesView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        try:
            year = int(request.query_params.get("year", dt.date.today().year))
        except (TypeError, ValueError):
            year = dt.date.today().year
        metric = request.query_params.get("metric", "tickets")
        data = selectors.monthly_series(request.user.company, request.user, year, metric)
        return success_response({"year": year, "metric": metric, "data": data})
```

```python
# backend/apps/voyages_trips/dashboard/urls.py
from django.urls import path
from apps.voyages_trips.dashboard import views as v

urlpatterns = [
    path("trips/", v.TripCardsView.as_view()),
    path("series/", v.SeriesView.as_view()),
]
```

In `backend/api/v1/router.py`, add after the existing `voyages/trips/` line:
```python
    path("voyages/dashboard/", include("apps.voyages_trips.dashboard.urls")),
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_api.py -q
../env/bin/python manage.py check
```
Expected: PASS; check clean.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/dashboard/views.py backend/apps/voyages_trips/dashboard/urls.py backend/api/v1/router.py backend/apps/voyages_trips/dashboard/tests/test_api.py
git commit -m "feat(transport-dash): dashboard API endpoints (trips, series)"
```

---

### Task 5: Frontend service + route constant

**Files:**
- Create: `angular/src/_api/services/voyages/transport-dashboard.service.ts`
- Modify: `angular/src/app/core/helpers/routes.ts` (add `voyagesDashboard: '/voyages/dashboard'`)

**Interfaces:**
- Produces: `TransportDashboardService` with:
  - `loadTrips(dateFrom: string, dateTo: string): Observable<TripCardsResponse>`
  - `loadSeries(year: number, metric: string): Observable<SeriesResponse>`
  - types `TripCard`, `TripCardsResponse = { date_from: string; date_to: string; trips: TripCard[] }`, `SeriesResponse = { year: number; metric: string; data: number[] }`.

- [ ] **Step 1: Implement the service**

```typescript
// angular/src/_api/services/voyages/transport-dashboard.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface TripCard {
  id: string; header: string; route_label: string; status: string; status_display: string;
  scheduled_departure: string | null;
  tickets_count: number; tickets_revenue: number;
  baggage_count: number; baggage_revenue: number;
  parcels_count: number; parcels_revenue: number;
  total_revenue: number;
}
export interface TripCardsResponse { date_from: string; date_to: string; trips: TripCard[]; }
export interface SeriesResponse { year: number; metric: string; data: number[]; }

@Injectable({ providedIn: 'root' })
export class TransportDashboardService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/voyages/dashboard`;

  loadTrips(dateFrom: string, dateTo: string): Observable<TripCardsResponse> {
    return this.http.get<any>(`${this.base}/trips/`, { params: { date_from: dateFrom, date_to: dateTo } })
      .pipe(map(r => r?.data ?? r));
  }
  loadSeries(year: number, metric: string): Observable<SeriesResponse> {
    return this.http.get<any>(`${this.base}/series/`, { params: { year, metric } })
      .pipe(map(r => r?.data ?? r));
  }
}
```

- [ ] **Step 2: Add route constant**

In `angular/src/app/core/helpers/routes.ts`, in the Voyages section (near `voyagesList: '/voyages/list'`), add:
```typescript
  voyagesDashboard: '/voyages/dashboard',
```

- [ ] **Step 3: Verify build**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -6
```
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/services/voyages/transport-dashboard.service.ts angular/src/app/core/helpers/routes.ts
git commit -m "feat(transport-dash): frontend service + route constant"
```

---

### Task 6: Transport dashboard component (cards + charts) + route

**Files:**
- Create: `angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.ts`
- Create: `angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.html`
- Create: `angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.scss`
- Modify: `angular/src/app/features/pages/pages.routes.ts` (add `dashboard` child to the `voyages` route block)

**Interfaces:**
- Consumes: `TransportDashboardService` + its types (Task 5); `NgApexchartsModule` from `ng-apexcharts`; `TranslocoModule`.

- [ ] **Step 1: Implement the component TS**

```typescript
// angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TransportDashboardService, TripCard } from '../../services/voyages/transport-dashboard.service';

interface ChartModel { metric: string; title: string; year: number; series: any; chart: any; xaxis: any; yaxis: any; colors: string[]; dataLabels: any; plotOptions: any; }

@Component({
  selector: 'app-transport-dashboard',
  standalone: true,
  templateUrl: './transport-dashboard.component.html',
  styleUrls: ['./transport-dashboard.component.scss'],
  imports: [CommonModule, FormsModule, NgApexchartsModule, TranslocoModule],
})
export class TransportDashboardComponent implements OnInit {
  private svc = inject(TransportDashboardService);
  private t = inject(TranslocoService);

  private today = new Date().toISOString().slice(0, 10);
  dateFrom = this.today;
  dateTo = this.today;
  trips: TripCard[] = [];
  loadingTrips = true;

  readonly currentYear = new Date().getFullYear();
  readonly years = [this.currentYear, this.currentYear - 1, this.currentYear - 2];
  readonly months = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'];
  charts: ChartModel[] = [];

  get totalRevenue(): number { return this.trips.reduce((s, t) => s + (t.total_revenue || 0), 0); }

  ngOnInit(): void {
    this.reloadTrips();
    const defs = [
      { metric: 'tickets',  title: 'trdash.chart_tickets',  color: '#4361ee' },
      { metric: 'baggage',  title: 'trdash.chart_baggage',  color: '#12b76a' },
      { metric: 'parcels',  title: 'trdash.chart_parcels',  color: '#f59e0b' },
      { metric: 'clients',  title: 'trdash.chart_clients',  color: '#7c3aed' },
    ];
    this.charts = defs.map(d => this.blankChart(d.metric, d.title, d.color));
    this.charts.forEach(c => this.reloadChart(c));
  }

  reloadTrips(): void {
    this.loadingTrips = true;
    this.svc.loadTrips(this.dateFrom, this.dateTo).subscribe({
      next: res => { this.trips = res.trips || []; this.loadingTrips = false; },
      error: () => { this.loadingTrips = false; },
    });
  }

  private blankChart(metric: string, title: string, color: string): ChartModel {
    return {
      metric, title, year: this.currentYear,
      series: [{ name: this.t.translate(title), data: new Array(12).fill(0) }],
      chart: { type: 'bar', height: 260, toolbar: { show: false }, fontFamily: 'inherit' },
      xaxis: { categories: this.months },
      yaxis: { labels: { formatter: (v: number) => `${Math.round(v)}` } },
      colors: [color],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    };
  }

  reloadChart(c: ChartModel): void {
    this.svc.loadSeries(c.year, c.metric).subscribe({
      next: res => { c.series = [{ name: this.t.translate(c.title), data: res.data || new Array(12).fill(0) }]; },
      error: () => {},
    });
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      draft: 'bg-secondary', pending: 'bg-info', boarding: 'bg-warning',
      departed: 'bg-primary', arrived: 'bg-success', cancelled: 'bg-danger',
    };
    return map[status] ?? 'bg-secondary';
  }
}
```
Before finalizing, confirm the Trip status codes for `statusClass` against the model: `grep -nA10 "class Status" backend/apps/voyages_trips/models/trip.py`. Use the real status values; any unmapped status falls back to `bg-secondary` (safe).

- [ ] **Step 2: Implement the component HTML**

```html
<!-- angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.html -->
<div class="page-header">
  <div class="page-title"><h4>{{ 'trdash.title' | transloco }}</h4></div>
</div>

<!-- Période -->
<div class="card mb-3"><div class="card-body d-flex flex-wrap align-items-end gap-2">
  <div><label class="form-label mb-1">{{ 'trdash.from' | transloco }}</label>
    <input type="date" class="form-control" [(ngModel)]="dateFrom"></div>
  <div><label class="form-label mb-1">{{ 'trdash.to' | transloco }}</label>
    <input type="date" class="form-control" [(ngModel)]="dateTo"></div>
  <button class="btn btn-primary" (click)="reloadTrips()">{{ 'trdash.refresh' | transloco }}</button>
  <div class="ms-auto text-end">
    <div class="text-muted small">{{ 'trdash.total' | transloco }}</div>
    <div class="h5 mb-0">{{ totalRevenue | number:'1.0-0' }} XAF</div>
  </div>
</div></div>

<!-- Cartes voyages -->
@if (loadingTrips) {
  <div class="text-center py-4"><div class="spinner-border text-primary"></div></div>
} @else if (trips.length === 0) {
  <div class="text-center py-4 text-muted">{{ 'trdash.empty' | transloco }}</div>
} @else {
  <div class="trip-grid mb-4">
    @for (t of trips; track t.id) {
      <div class="card trip-card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <span class="trip-head">{{ t.header }}</span>
            <span class="badge {{ statusClass(t.status) }}">{{ t.status_display }}</span>
          </div>
          <div class="text-muted small mb-2">{{ t.route_label }}</div>
          <div class="trip-row"><span>{{ 'trdash.tickets' | transloco }}</span>
            <span>{{ t.tickets_count }} · {{ t.tickets_revenue | number:'1.0-0' }}</span></div>
          <div class="trip-row"><span>{{ 'trdash.baggage' | transloco }}</span>
            <span>{{ t.baggage_count }} · {{ t.baggage_revenue | number:'1.0-0' }}</span></div>
          <div class="trip-row"><span>{{ 'trdash.parcels' | transloco }}</span>
            <span>{{ t.parcels_count }} · {{ t.parcels_revenue | number:'1.0-0' }}</span></div>
          <div class="trip-total d-flex justify-content-between">
            <span>{{ 'trdash.total' | transloco }}</span>
            <strong>{{ t.total_revenue | number:'1.0-0' }} XAF</strong></div>
        </div>
      </div>
    }
  </div>
}

<!-- Graphiques -->
<div class="chart-grid">
  @for (c of charts; track c.metric) {
    <div class="card"><div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h6 class="mb-0">{{ c.title | transloco }}</h6>
        <select class="form-select form-select-sm w-auto" [(ngModel)]="c.year" (ngModelChange)="reloadChart(c)">
          @for (y of years; track y) { <option [ngValue]="y">{{ y }}</option> }
        </select>
      </div>
      <apx-chart [series]="c.series" [chart]="c.chart" [xaxis]="c.xaxis" [yaxis]="c.yaxis"
                 [colors]="c.colors" [dataLabels]="c.dataLabels" [plotOptions]="c.plotOptions"></apx-chart>
    </div></div>
  }
</div>
```

- [ ] **Step 3: Implement the component SCSS**

```scss
// angular/src/_api/pages/voyages-dashboard/transport-dashboard.component.scss
.trip-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
.chart-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (max-width: 991.98px) { .chart-grid { grid-template-columns: 1fr; } }

.trip-card .trip-head { font-weight: 700; font-size: 1rem; color: #1b2559; }
.trip-row { display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.15rem 0; color: #475467; }
.trip-total { margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #eceef3; }
```

- [ ] **Step 4: Add the route**

In `angular/src/app/features/pages/pages.routes.ts`, inside the `voyages` route block's `children` (next to `{ path: 'list', … }` around line 122), add:
```typescript
                { path: 'dashboard', loadComponent: () => import('../../../_api/pages/voyages-dashboard/transport-dashboard.component').then(m => m.TransportDashboardComponent) },
```

- [ ] **Step 5: Verify build**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -8
```
Expected: build succeeds (ignore pre-existing NG8113 unused-import warnings in other files).

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/voyages-dashboard angular/src/app/features/pages/pages.routes.ts
git commit -m "feat(transport-dash): dashboard page (trip cards + monthly charts)"
```

---

### Task 7: Wire sidebar Dashboard + launcher landing + Clients menu + i18n

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (point Dashboard item to `voyagesDashboard`; add Clients item under Voyages)
- Modify: `angular/src/_api/pages/apps/apps-launcher.component.ts` (transport landing → `/voyages/dashboard`)
- Modify: `angular/public/i18n/fr.json`, `en.json`, `es.json`, `pt.json` (add `trdash.*`)

**Interfaces:**
- Consumes: `routes.voyagesDashboard` (Task 5); `routes.vbPassengers` (exists).

- [ ] **Step 1: Point the Dashboard sidebar item at the real page**

In `sidebar.service.ts`, the Transport "Dashboard" group's item currently uses `route: routes.comingSoon, base: 'coming-soon'` (the block whose `tittle: 'Dashboard'` has `module: 'voyage'`). Change that item to:
```typescript
          route: routes.voyagesDashboard,
          base: 'dashboard',
          permission: 'voyage.trip.view',
```
(Keep `menuValue: 'Tableau de bord'`, `icon2: 'chart-bar'`.)

- [ ] **Step 2: Add the Clients item under the Voyages group**

In `sidebar.service.ts`, inside the `tittle: 'Voyages'` group's `menu` array, add an item (after the Billetterie block):
```typescript
        {
          menuValue: 'Clients',
          hasSubRoute: false,
          showSubRoute: false,
          icon2: 'users',
          route: routes.vbPassengers,
          base: 'passengers',
          permission: 'ticketing.customer.view',
          subMenus: [],
        },
```

- [ ] **Step 3: Launcher landing → dashboard**

In `apps-launcher.component.ts`, change the `LANDING` map entry:
```typescript
  transport:      '/voyages/dashboard',
```
(was `/voyages/list`).

- [ ] **Step 4: Add i18n keys (all four locales)**

Add a `trdash` namespace. **fr.json** (insert as a top-level key near the others):
```json
  "trdash": {
    "title": "Tableau de bord",
    "from": "Du",
    "to": "Au",
    "refresh": "Actualiser",
    "total": "Total",
    "empty": "Aucun voyage sur la période.",
    "tickets": "Billets",
    "baggage": "Bagages",
    "parcels": "Colis",
    "chart_tickets": "Ventes de billets",
    "chart_baggage": "Bagages",
    "chart_parcels": "Colis",
    "chart_clients": "Clients"
  },
```
**en.json:**
```json
  "trdash": {
    "title": "Dashboard", "from": "From", "to": "To", "refresh": "Refresh",
    "total": "Total", "empty": "No trips for this period.",
    "tickets": "Tickets", "baggage": "Baggage", "parcels": "Parcels",
    "chart_tickets": "Ticket sales", "chart_baggage": "Baggage",
    "chart_parcels": "Parcels", "chart_clients": "Clients"
  },
```
**es.json:**
```json
  "trdash": {
    "title": "Panel", "from": "Desde", "to": "Hasta", "refresh": "Actualizar",
    "total": "Total", "empty": "No hay viajes en el período.",
    "tickets": "Billetes", "baggage": "Equipaje", "parcels": "Paquetes",
    "chart_tickets": "Venta de billetes", "chart_baggage": "Equipaje",
    "chart_parcels": "Paquetes", "chart_clients": "Clientes"
  },
```
**pt.json:**
```json
  "trdash": {
    "title": "Painel", "from": "De", "to": "Até", "refresh": "Atualizar",
    "total": "Total", "empty": "Nenhuma viagem no período.",
    "tickets": "Bilhetes", "baggage": "Bagagem", "parcels": "Encomendas",
    "chart_tickets": "Venda de bilhetes", "chart_baggage": "Bagagem",
    "chart_parcels": "Encomendas", "chart_clients": "Clientes"
  },
```

- [ ] **Step 5: Validate JSON + build**

```bash
cd angular
for f in fr en es pt; do node -e "JSON.parse(require('fs').readFileSync('public/i18n/$f.json','utf8'));console.log('$f ok')"; done
npx ng build --configuration development 2>&1 | tail -6
```
Expected: all `ok`; build succeeds.

- [ ] **Step 6: Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/_api/pages/apps/apps-launcher.component.ts angular/public/i18n
git commit -m "feat(transport-dash): wire sidebar Dashboard + Clients menu + launcher landing + i18n"
```

---

## Final verification

- [ ] Backend: `cd backend && ../env/bin/python -m pytest apps/voyages_trips/dashboard -q` (green) and `../env/bin/python manage.py check` (clean) and `../env/bin/python manage.py makemigrations --check --dry-run` (no new migrations — this feature adds none).
- [ ] Regression: `../env/bin/python -m pytest apps/voyages_trips apps/voyages_booking apps/voyages_consignment -q` — no NEW failures beyond the ~14-red baseline.
- [ ] Frontend: `cd angular && npx ng build --configuration development` succeeds.
- [ ] Manual E2E: launcher → Transport lands on `/voyages/dashboard`; cards show today's trips; changing dates reloads; 4 charts render and react to year change; sidebar "Clients" opens the passengers list with the loyalty modal.

## Notes for the executor

- No DB migrations in this feature; if `makemigrations --check` reports changes, something imported a model wrong — investigate, don't generate a migration.
- Test fixtures (Task 1–4) construct `Route`/`ServicePoint`/`Trip`/`Booking` — confirm each model's required fields with a quick `grep -nE "= models\." <model file>` and adjust the fixture (NOT the selector) if a NOT NULL field is missing. Keep assertions intact.
- Confirm Trip status codes for `statusClass` and the currency label (`XAF`) against how other money screens render (e.g. treasury dashboard uses `… XAF`); match it.
- Do all work on `feat/transport-dashboard`; do not push until the user asks.
