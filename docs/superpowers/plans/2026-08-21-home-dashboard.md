# Home Dashboard (real data) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the theme customiser and replace the DreamsPOS demo home dashboard with a transport dashboard fed by real, module-gated stats.

**Architecture:** Add three company-scoped stats endpoints on the *active* apps (`voyages_trips`, `voyages_booking`, `voyages_consignment`) mirroring the existing treasury/fleet stats pattern; reuse treasury & fleet stats as-is; on the frontend, a `DashboardService` calls the five stats + two recent-activity lists, and a new `HomeDashboardComponent` renders module-gated cards.

**Tech Stack:** Django + DRF, pytest (`config.settings.local`), Angular 17 (standalone components).

**Spec:** `docs/superpowers/specs/2026-08-21-home-dashboard-design.md`

## Global Constraints
- Git root `ERP-master/`; run git as `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master ...`; commit as shimi (`-c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com`), no Claude trailer.
- Backend tests: `cd backend && source ../env/bin/activate && python -m pytest <path> -q`.
- Stats are **company-level** (not agency-scoped). No schema change → no migration.
- Each stats view: `permission_classes = [IsAuthenticated, HasModulePermission]`, a `permission_map`, returns `success_response(dict)`, company via `request.user.company_id`.
- Deviation from spec §1.2: `tickets_today` is dropped (needs heavy Ticket fixtures; `bookings_today` + revenue cover the KPI).
- Frontend has no unit-test runner → the gate for FE tasks is `cd angular && npx ng build`.
- Final: merge to `master`, `git push all master` (pushes to both remotes).

## File Structure
- Create `backend/apps/voyages_trips/stats.py` — `get_trip_stats(company_id)`.
- Create `backend/apps/voyages_booking/stats.py` — `get_booking_stats(company_id)`.
- Create `backend/apps/voyages_consignment/stats.py` — `get_parcel_stats(company_id)`.
- Modify `backend/apps/voyages_trips/views.py`, `.../voyages_booking/config_api/views.py`, `.../voyages_consignment/config_api/views.py` — add the stats view.
- Modify the three `urls.py` — add `stats/`.
- Tests: `backend/apps/<app>/test_stats.py`.
- Frontend: modify `layout.component.html` (remove customiser), `api.config.ts` (3 stats URLs), create `dashboard.service.ts` + `home-dashboard.component.{ts,html}`, modify `pages.routes.ts` (repoint `index`).

---

## Task 1: Trip stats endpoint

**Files:** Create `backend/apps/voyages_trips/stats.py`; Modify `backend/apps/voyages_trips/views.py`, `backend/apps/voyages_trips/urls.py`; Test `backend/apps/voyages_trips/test_stats.py`.

**Interfaces:**
- Produces: `get_trip_stats(company_id) -> {"today_departures","upcoming_7d","in_progress","completed_today"}` (all int); `GET /api/v1/voyages/trips/stats/` (perm `voyage.trip.view`).

- [ ] **Step 1: Write the failing test** — `backend/apps/voyages_trips/test_stats.py`:
```python
import pytest
from datetime import timedelta
from django.utils import timezone


def _company_admin():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="TripStats", admin_email="tstat@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="tstat@x.com")


def _trip(company, admin, **kw):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2", is_station=True)
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    dep = kw.pop("dep", timezone.now())
    return Trip.objects.create(company=company, route=route, fare_class=fc, origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                               created_by=admin, **kw)


@pytest.mark.django_db
def test_trip_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    company, admin = _company_admin()
    _trip(company, admin, status="pending")                       # départ aujourd'hui + à venir
    _trip(company, admin, status="departed")                      # en cours
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/trips/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["today_departures"] == 2
    assert data["in_progress"] == 1
```

- [ ] **Step 2: Run — fail** — `python -m pytest apps/voyages_trips/test_stats.py -q` → 404/AttributeError.

- [ ] **Step 3: Selector** — `backend/apps/voyages_trips/stats.py`:
```python
from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.models import Trip


def get_trip_stats(company_id):
    today = timezone.localdate()
    now = timezone.now()
    base = Trip.objects.filter(company_id=company_id, is_deleted=False)
    return {
        "today_departures": base.filter(scheduled_departure__date=today).count(),
        "upcoming_7d": base.filter(status__in=["draft", "pending"],
                                   scheduled_departure__gte=now,
                                   scheduled_departure__lte=now + timedelta(days=7)).count(),
        "in_progress": base.filter(status="departed").count(),
        "completed_today": base.filter(status="completed", actual_arrival__date=today).count(),
    }
```

- [ ] **Step 4: View** — in `backend/apps/voyages_trips/views.py`, append:
```python
class TripStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        from apps.voyages_trips.stats import get_trip_stats
        if not request.user.company_id:
            return error_response("Aucune institution.", status_code=400)
        return success_response(get_trip_stats(request.user.company_id))
```
(`APIView`, `IsAuthenticated`, `HasModulePermission`, `success_response`, `error_response` are already imported at the top of this file.)

- [ ] **Step 5: URL** — in `backend/apps/voyages_trips/urls.py`, add as the **first** entry in `urlpatterns` (before the `""` and `<uuid:trip_id>` routes):
```python
    path("stats/", v.TripStatsView.as_view()),
```

- [ ] **Step 6: Run — pass** — `python -m pytest apps/voyages_trips/test_stats.py -q`.

- [ ] **Step 7: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-trips): endpoint stats du tableau de bord"
```

---

## Task 2: Booking stats endpoint

**Files:** Create `backend/apps/voyages_booking/stats.py`; Modify `backend/apps/voyages_booking/config_api/views.py`, `backend/apps/voyages_booking/urls.py`; Test `backend/apps/voyages_booking/test_stats.py`.

**Interfaces:**
- Produces: `get_booking_stats(company_id) -> {"bookings_today":int, "revenue_today":Decimal, "revenue_month":Decimal}`; `GET /api/v1/voyages/booking/stats/` (perm `ticketing.booking.view`).

- [ ] **Step 1: Write the failing test** — `backend/apps/voyages_booking/test_stats.py`:
```python
import pytest
from datetime import timedelta
from django.utils import timezone


@pytest.mark.django_db
def test_booking_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.authentication.models import User
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    from apps.voyages_booking.models import Passenger, Booking
    company, _ = create_company(name="BkStats", admin_email="bk@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="bk@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2", is_station=True)
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    dep = timezone.now()
    trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                               created_by=admin)
    pax = Passenger.objects.create(company=company, first_name="J", last_name="D", phone="690")
    Booking.objects.create(company=company, reference="B1", outbound_trip=trip, buyer=pax,
                           amount_paid=15000, created_by=admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/booking/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["bookings_today"] == 1
    assert float(data["revenue_today"]) == 15000.0
```

- [ ] **Step 2: Run — fail** — `python -m pytest apps/voyages_booking/test_stats.py -q`.

- [ ] **Step 3: Selector** — `backend/apps/voyages_booking/stats.py`:
```python
from django.db.models import Sum
from django.utils import timezone
from apps.voyages_booking.models import Booking


def get_booking_stats(company_id):
    today = timezone.localdate()
    base = Booking.objects.filter(company_id=company_id, is_deleted=False)
    today_qs = base.filter(created_at__date=today)
    return {
        "bookings_today": today_qs.count(),
        "revenue_today": today_qs.aggregate(t=Sum("amount_paid"))["t"] or 0,
        "revenue_month": base.filter(created_at__year=today.year, created_at__month=today.month)
                             .aggregate(t=Sum("amount_paid"))["t"] or 0,
    }
```

- [ ] **Step 4: View** — in `backend/apps/voyages_booking/config_api/views.py`, append:
```python
class BookingStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.booking.view"}

    def get(self, request):
        from apps.voyages_booking.stats import get_booking_stats
        if not request.user.company_id:
            return error_response("Aucune institution.", status_code=400)
        return success_response(get_booking_stats(request.user.company_id))
```
> Verify the top of this file imports `APIView`, `IsAuthenticated`, `HasModulePermission`, `success_response`, `error_response`. `success_response`/`error_response` are imported (line 3). If `APIView`/`IsAuthenticated`/`HasModulePermission` are not, add: `from rest_framework.views import APIView` and `from apps.core.permissions import IsAuthenticated, HasModulePermission`.

- [ ] **Step 5: URL** — in `backend/apps/voyages_booking/urls.py`, add near the top of `urlpatterns`:
```python
    path("stats/", v.BookingStatsView.as_view()),
```

- [ ] **Step 6: Run — pass** — `python -m pytest apps/voyages_booking/test_stats.py -q`.

- [ ] **Step 7: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_booking
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-booking): endpoint stats du tableau de bord"
```

---

## Task 3: Parcel stats endpoint

**Files:** Create `backend/apps/voyages_consignment/stats.py`; Modify `backend/apps/voyages_consignment/config_api/views.py`, `backend/apps/voyages_consignment/urls.py`; Test `backend/apps/voyages_consignment/test_stats.py`.

**Interfaces:**
- Produces: `get_parcel_stats(company_id) -> {"registered":int,"in_transit":int,"to_collect":int,"registered_today":int}`; `GET /api/v1/voyages/consignment/stats/` (perm `ticketing.parcel.view`).

- [ ] **Step 1: Write the failing test** — `backend/apps/voyages_consignment/test_stats.py`:
```python
import pytest


@pytest.mark.django_db
def test_parcel_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.authentication.models import User
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentType
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="PkStats", admin_email="pk@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="pk@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2", is_station=True)
    ct = ConsignmentType.objects.create(company=company, code="STD", name="Standard")

    def _parcel(status):
        return Parcel.objects.create(company=company, origin_point=o, destination_point=d,
                                     consignment_type=ct, sender_name="S", sender_phone="1",
                                     recipient_name="R", recipient_phone="2", status=status,
                                     created_by=admin)
    _parcel("registered"); _parcel("registered"); _parcel("loaded"); _parcel("arrived")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/consignment/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["registered"] == 2 and data["in_transit"] == 1 and data["to_collect"] == 1
```
> If `ConsignmentType` requires more fields, check `apps/voyages_config/models` and add them; `code`+`name`+`company` should suffice.

- [ ] **Step 2: Run — fail** — `python -m pytest apps/voyages_consignment/test_stats.py -q`.

- [ ] **Step 3: Selector** — `backend/apps/voyages_consignment/stats.py`:
```python
from django.utils import timezone
from apps.voyages_consignment.models import Parcel


def get_parcel_stats(company_id):
    today = timezone.localdate()
    base = Parcel.objects.filter(company_id=company_id, is_deleted=False)
    return {
        "registered": base.filter(status="registered").count(),
        "in_transit": base.filter(status="loaded").count(),
        "to_collect": base.filter(status="arrived").count(),
        "registered_today": base.filter(status="registered", created_at__date=today).count(),
    }
```

- [ ] **Step 4: View** — in `backend/apps/voyages_consignment/config_api/views.py`, append:
```python
class ParcelStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.parcel.view"}

    def get(self, request):
        from apps.voyages_consignment.stats import get_parcel_stats
        if not request.user.company_id:
            return error_response("Aucune institution.", status_code=400)
        return success_response(get_parcel_stats(request.user.company_id))
```
> Same import check as Task 2 for `APIView`/`IsAuthenticated`/`HasModulePermission`.

- [ ] **Step 5: URL** — in `backend/apps/voyages_consignment/urls.py`, add near the top of `urlpatterns`:
```python
    path("stats/", v.ParcelStatsView.as_view()),
```

- [ ] **Step 6: Run — pass** — `python -m pytest apps/voyages_consignment/test_stats.py -q`.

- [ ] **Step 7: Guard + commit** — `python -m pytest apps/voyages_trips apps/voyages_booking apps/voyages_consignment -q` (all green), then:
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_consignment
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-consignment): endpoint stats du tableau de bord"
```

---

## Task 4: Remove the theme customiser

**Files:** Modify `angular/src/app/layouts/layout/layout.component.html`.

- [ ] **Step 1: Remove markup** — Read the file. Delete two elements:
  1. the `<div class="toggle-theme" ... data-bs-target="#theme-setting">…</div>` (the cog button, near the top);
  2. the entire offcanvas panel `<div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting"> … </div>` (match its closing tag — it is a large block).
Leave everything else (router-outlet, sidebar, header) untouched.

- [ ] **Step 2: Verify removal** — Run: `grep -n "theme-setting\|toggle-theme\|sidebar-themesettings" angular/src/app/layouts/layout/layout.component.html` → **no output**.

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/layouts/layout/layout.component.html
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "chore(ui): supprimer le customiseur de thème"
```

---

## Task 5: Dashboard API config + service

**Files:** Modify `angular/src/_api/config/api.config.ts`; Create `angular/src/_api/services/dashboard/dashboard.service.ts`.

**Interfaces:**
- Consumes: stats endpoints from Tasks 1–3 + existing treasury/fleet stats + booking & movements lists.
- Produces: `DashboardService` with `treasury()`, `trips()`, `bookings()`, `parcels()`, `fleet()`, `recentBookings(limit)`, `recentMovements(limit)` — each returns `Observable<any>` (unwrapped by the interceptor).

- [ ] **Step 1: Add stats URLs** — in `api.config.ts`:
  - In the export object built on `VT` (`const VT = ${API_BASE}/voyages/trips`), add: `tripsStats: \`${VT}/stats/\`,`
  - In the export object built on `VB` (`const VB = ${API_BASE}/voyages/booking`), add: `stats: \`${VB}/stats/\`,`
  - In the export object built on `VCG` (`const VCG = ${API_BASE}/voyages/consignment`), add: `stats: \`${VCG}/stats/\`,`
  - Confirm the treasury export (built on `TRZ`) already has `stats` and a transactions/movements list URL (e.g. `movements: \`${TRZ}/movements/\``); note its exact key for Step 2. Confirm `FLEET.stats` exists.

- [ ] **Step 2: Create the service** — `angular/src/_api/services/dashboard/dashboard.service.ts`:
```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);

  treasury(): Observable<any> { return this.http.get(`${API_BASE}/treasury/stats/`); }
  fleet():    Observable<any> { return this.http.get(`${API_BASE}/fleet/stats/`); }
  trips():    Observable<any> { return this.http.get(`${API_BASE}/voyages/trips/stats/`); }
  bookings(): Observable<any> { return this.http.get(`${API_BASE}/voyages/booking/stats/`); }
  parcels():  Observable<any> { return this.http.get(`${API_BASE}/voyages/consignment/stats/`); }

  recentBookings(limit = 6): Observable<any> {
    return this.http.get(`${API_BASE}/voyages/booking/bookings/`,
      { params: new HttpParams().set('page_size', String(limit)) });
  }
  recentMovements(limit = 6): Observable<any> {
    return this.http.get(`${API_BASE}/treasury/movements/`,
      { params: new HttpParams().set('page_size', String(limit)) });
  }
}
```
> Confirm `API_BASE` is exported from `api.config.ts` (it is used by the other consts). If the movements list path differs, use the treasury movements/transactions URL that the existing Mouvements page uses.

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/services/dashboard
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(dashboard-fe): config + service des stats"
```

---

## Task 6: Home dashboard component + route

**Files:** Create `angular/src/_api/pages/dashboard/home/home-dashboard.component.{ts,html}`; Modify `angular/src/app/features/pages/pages.routes.ts`.

**Interfaces:** Consumes `DashboardService` (Task 5), `PermissionService.hasModule` + `HasModuleDirective`.

- [ ] **Step 1: Component TS** — `home-dashboard.component.ts`:
```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { HasModuleDirective } from '../../../../app/shared/directives/has-module.directive';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  templateUrl: './home-dashboard.component.html',
  imports: [CommonModule, RouterLink, HasModuleDirective],
})
export class HomeDashboardComponent implements OnInit {
  private dash = inject(DashboardService);
  private perm = inject(PermissionService);

  treasury: any = null; trips: any = null; bookings: any = null; parcels: any = null; fleet: any = null;
  recentBookings: any[] = []; recentMovements: any[] = [];

  private has(code: string): boolean { return this.perm.hasModule(code); }
  private arr(r: any): any[] { return Array.isArray(r) ? r : (r?.data ?? r?.results ?? []); }

  ngOnInit(): void {
    if (this.has('treasury')) {
      this.dash.treasury().subscribe({ next: d => this.treasury = d, error: () => {} });
      this.dash.recentMovements().subscribe({ next: d => this.recentMovements = this.arr(d).slice(0, 6), error: () => {} });
    }
    if (this.has('voyage')) {
      this.dash.trips().subscribe({ next: d => this.trips = d, error: () => {} });
      this.dash.bookings().subscribe({ next: d => this.bookings = d, error: () => {} });
      this.dash.recentBookings().subscribe({ next: d => this.recentBookings = this.arr(d).slice(0, 6), error: () => {} });
    }
    if (this.has('colis')) this.dash.parcels().subscribe({ next: d => this.parcels = d, error: () => {} });
    if (this.has('fleet')) this.dash.fleet().subscribe({ next: d => this.fleet = d, error: () => {} });
  }
}
```

- [ ] **Step 2: Component HTML** — `home-dashboard.component.html`:
```html
<div class="page-wrapper"><div class="content">
  <h4 class="mb-3">Tableau de bord</h4>

  <div class="row g-3">
    <!-- Trésorerie -->
    <div class="col-xl-3 col-md-6" *hasModule="'treasury'">
      <div class="card h-100"><div class="card-body">
        <h6 class="text-muted mb-2">Trésorerie</h6>
        <div class="fs-4 fw-semibold">{{ (treasury?.total_balance ?? 0) | number }} </div>
        <div class="small text-muted">Solde total</div>
        <div class="d-flex justify-content-between mt-2 small">
          <span class="text-success">+ {{ (treasury?.today_income ?? 0) | number }}</span>
          <span class="text-danger">- {{ (treasury?.today_expense ?? 0) | number }}</span>
        </div>
        <div class="small text-muted mt-1">{{ treasury?.open_sessions ?? 0 }} session(s) ouverte(s)</div>
      </div></div>
    </div>

    <!-- Voyages -->
    <div class="col-xl-3 col-md-6" *hasModule="'voyage'">
      <div class="card h-100"><div class="card-body">
        <h6 class="text-muted mb-2">Voyages</h6>
        <div class="fs-4 fw-semibold">{{ trips?.today_departures ?? 0 }}</div>
        <div class="small text-muted">Départs aujourd'hui</div>
        <div class="small mt-2">À venir (7j) : <b>{{ trips?.upcoming_7d ?? 0 }}</b></div>
        <div class="small">En cours : <b>{{ trips?.in_progress ?? 0 }}</b></div>
      </div></div>
    </div>

    <!-- Réservations -->
    <div class="col-xl-3 col-md-6" *hasModule="'voyage'">
      <div class="card h-100"><div class="card-body">
        <h6 class="text-muted mb-2">Réservations</h6>
        <div class="fs-4 fw-semibold">{{ bookings?.bookings_today ?? 0 }}</div>
        <div class="small text-muted">Réservations du jour</div>
        <div class="small mt-2">Recette du jour : <b>{{ (bookings?.revenue_today ?? 0) | number }}</b></div>
        <div class="small">Ce mois : <b>{{ (bookings?.revenue_month ?? 0) | number }}</b></div>
      </div></div>
    </div>

    <!-- Colis -->
    <div class="col-xl-3 col-md-6" *hasModule="'colis'">
      <div class="card h-100"><div class="card-body">
        <h6 class="text-muted mb-2">Colis</h6>
        <div class="fs-4 fw-semibold">{{ parcels?.to_collect ?? 0 }}</div>
        <div class="small text-muted">À retirer</div>
        <div class="small mt-2">À charger : <b>{{ parcels?.registered ?? 0 }}</b></div>
        <div class="small">En transit : <b>{{ parcels?.in_transit ?? 0 }}</b></div>
      </div></div>
    </div>

    <!-- Flotte -->
    <div class="col-xl-3 col-md-6" *hasModule="'fleet'">
      <div class="card h-100"><div class="card-body">
        <h6 class="text-muted mb-2">Flotte</h6>
        <div class="fs-4 fw-semibold">{{ fleet?.available ?? fleet?.total ?? 0 }}</div>
        <div class="small text-muted">Véhicules</div>
      </div></div>
    </div>
  </div>

  <div class="row g-3 mt-1">
    <!-- Dernières réservations -->
    <div class="col-lg-6" *hasModule="'voyage'">
      <div class="card"><div class="card-body">
        <h6 class="mb-3">Dernières réservations</h6>
        <div class="table-responsive"><table class="table table-sm mb-0">
          <thead><tr><th>Réf.</th><th>Montant</th><th>Date</th></tr></thead>
          <tbody>
            @for (b of recentBookings; track b.id) {
              <tr><td>{{ b.reference }}</td><td>{{ (b.amount_paid ?? 0) | number }}</td><td>{{ b.created_at | date:'dd/MM HH:mm' }}</td></tr>
            } @empty { <tr><td colspan="3" class="text-center text-muted">Aucune réservation récente.</td></tr> }
          </tbody>
        </table></div>
      </div></div>
    </div>

    <!-- Derniers mouvements -->
    <div class="col-lg-6" *hasModule="'treasury'">
      <div class="card"><div class="card-body">
        <h6 class="mb-3">Derniers mouvements</h6>
        <div class="table-responsive"><table class="table table-sm mb-0">
          <thead><tr><th>Libellé</th><th>Montant</th><th>Date</th></tr></thead>
          <tbody>
            @for (m of recentMovements; track m.id) {
              <tr><td>{{ m.description || m.category }}</td><td>{{ (m.amount ?? 0) | number }}</td><td>{{ m.transaction_date | date:'dd/MM' }}</td></tr>
            } @empty { <tr><td colspan="3" class="text-center text-muted">Aucun mouvement récent.</td></tr> }
          </tbody>
        </table></div>
      </div></div>
    </div>
  </div>
</div></div>
```
> The recent-list field names (`amount_paid`, `reference`, `description`, `amount`, `transaction_date`) mirror the booking/transaction serializers; if a field is absent it just renders blank (no crash).

- [ ] **Step 3: Repoint the route** — in `angular/src/app/features/pages/pages.routes.ts`, change the `path: 'index'` route to load the new component:
```ts
{ path: 'index', loadComponent: () => import('../../../_api/pages/dashboard/home/home-dashboard.component').then(m => m.HomeDashboardComponent) },
```

- [ ] **Step 4: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 5: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/dashboard angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(dashboard-fe): tableau de bord d'accueil (données réelles, cartes par module)"
```

---

## Task 7: Verify + finish

- [ ] **Step 1:** `cd backend && python -m pytest -q` → all green; `python manage.py makemigrations --check` → no changes.
- [ ] **Step 2:** `cd angular && npx ng build` → success. `git -C <repo> status --short` clean.
- [ ] **Step 3:** superpowers:finishing-a-development-branch → merge to `master`, `git push all master`.

> Manual smoke after deploy: log in, land on `/dashboard/index`; the customiser cog is gone; cards show real numbers and only for modules the company's package includes; recent lists populate.
