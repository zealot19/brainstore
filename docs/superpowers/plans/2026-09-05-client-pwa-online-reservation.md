# Client PWA — Online Reservation Implementation Plan (modern-stack re-point)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline) or superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A public, installable PWA where clients search trips, pick a seat, pay by Mobile Money (Campay), and get a ticket/QR — backed by `online_booking` re-pointed onto the live `voyages_*` stack.

**Architecture:** Re-point `online_booking`'s model + selectors + services onto `voyages_trips`/`voyages_config`/`voyages_pricing`/`voyages_booking` (reuse `bookable_trips`, `seat_map`, `resolve_fare`, `create_booking`), keeping the Campay orchestration. Add a new public, unguarded Angular feature area (`_api/pages/reserver/`) with its own layout, driving the `/online/` endpoints. Add PWA packaging scoped so it never caches authenticated staff endpoints.

**Tech Stack:** Django 5.1 + DRF 3.15 (backend); Angular 21 standalone + signals (frontend); Campay Mobile Money (existing); `qrcode` npm for client-side QR; `@angular/service-worker`.

**Spec:** `docs/superpowers/specs/2026-09-05-client-pwa-online-reservation-design.md`

## Global Constraints

- Backend layering per app: `urls → views (APIView, permission_classes) → services/ + selectors/ → models`. Public endpoints use `permission_classes = [AllowAny]`.
- `/online/` endpoints return **bare** payloads (`Response(data)`), NOT the `{success,data}` envelope.
- Live domain data lives in the **modern `voyages_*` stack**. Never read/write the legacy `voyage`/`ticketing`/`transport_config` models for this feature.
- Reuse modern selectors/services: `voyages_booking.selectors.{bookable_trips, seat_map}`, `voyages_pricing.selectors.fare_selectors.resolve_fare`, `voyages_booking.services.create_booking`, `voyages_booking.services.passenger_services.get_or_create_passenger`.
- Backend tests run via `pytest` (pytest.ini). Full suite must stay green.
- Frontend gate is `ng build` (no unit-test runner is wired). Every frontend task ends with a green `ng build`.
- French throughout (UI copy, comments, errors).
- Angular components are **standalone**; use `inject()`, signals, and `ToastService`.
- Public area must NOT use `authGuard` and must NOT render the back-office shell.
- `company_id` for the PWA comes from `environment.onlineCompanyId`.
- Amount is resolved **server-side** (client never sends a price). Money is XAF.
- Commits: author is shimi; NO Claude co-author trailer.
- Branch: `feat/client-pwa-online-reservation` (already cut from `origin/master`).

---

## Backend

### Task 1: `create_booking` gains an optional `channel` param

**Files:**
- Modify: `backend/apps/voyages_booking/services/booking_services.py`
- Test: `backend/apps/voyages_booking/tests.py` (add a test; or a new `test_online_channel.py`)

**Interfaces:**
- Produces: `create_booking(..., channel=Booking.Channel.COUNTER)` — passes `channel` to `Booking.objects.create`. Default keeps existing behaviour.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_booking/test_online_channel.py
import pytest
from apps.voyages_booking.models import Booking

pytestmark = pytest.mark.django_db

def test_create_booking_defaults_to_counter_channel(booking_ctx):
    # booking_ctx: helper building company/admin/trip/seat + buyer/item specs (reuse existing tests.py helpers)
    b = booking_ctx.create_one_way()
    assert b.channel == Booking.Channel.COUNTER

def test_create_booking_accepts_online_channel(booking_ctx):
    b = booking_ctx.create_one_way(channel=Booking.Channel.ONLINE)
    assert b.channel == Booking.Channel.ONLINE
```

Look at the existing `apps/voyages_booking/tests.py` for how it builds a bookable trip + seat + buyer/item specs and calls `create_booking`; wrap that into the `booking_ctx` helper (or inline the setup) so both tests share it. If a fixture helper already exists there, reuse it and just add the two assertions.

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && pytest apps/voyages_booking/test_online_channel.py -v`
Expected: FAIL — `create_booking` has no `channel` kwarg (TypeError) or the online case fails.

- [ ] **Step 3: Add the param**

In `create_booking` signature, add `channel=Booking.Channel.COUNTER` (keyword, after `return_open=False`). In the `Booking.objects.create(...)` call, add `channel=channel`.

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && pytest apps/voyages_booking/test_online_channel.py -v`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_booking/
git commit -m "feat(booking): optional channel param on create_booking"
```

---

### Task 2: Re-point `OnlineBookingRequest` model onto the modern stack

**Files:**
- Modify: `backend/apps/online_booking/models/booking_request.py`
- Create: migration via `makemigrations online_booking`
- Test: covered indirectly by later tasks; this task's gate is a clean migration + `pytest` import.

**Interfaces:**
- Produces: `OnlineBookingRequest` with `trip → voyages_trips.Trip`, `trip_seat → voyages_trips.TripSeat` (null), `destination_point → voyages_config.ServicePoint` (null), `booking → voyages_booking.Booking` (null), **no** `fare` FK. Keeps `passenger_name/phone/email/passenger_type`, `amount`, payment fields, `status`, `expires_at`.

- [ ] **Step 1: Edit the model**

In `booking_request.py`:
- Change `trip` FK target to `"voyages_trips.Trip"` (`related_name="online_booking_requests"`, `on_delete=PROTECT`).
- Remove the `fare` field entirely.
- Add:
```python
    trip_seat = models.ForeignKey("voyages_trips.TripSeat", verbose_name=_("siège"),
                                  on_delete=models.SET_NULL, null=True, blank=True,
                                  related_name="online_booking_requests")
    destination_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("descente"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="online_booking_requests")
```
- Change `booking` FK target to `"voyages_booking.Booking"` (`related_name="online_request"`, `on_delete=SET_NULL`, null/blank).
- Keep everything else (passenger fields, amount, payment_*, status, expires_at, `is_expired`, `save`).

- [ ] **Step 2: Make migrations**

Run: `cd backend && python manage.py makemigrations online_booking`
Expected: a new migration altering `trip`/`booking` FKs, removing `fare`, adding `trip_seat`/`destination_point`.

- [ ] **Step 3: Migrate (handle legacy demo rows)**

Run: `cd backend && python manage.py migrate online_booking`
If it fails due to the 2 legacy `OnlineBookingRequest` rows referencing old ids, clear them first (demo data only) and retry:
```bash
python manage.py shell -c "from apps.online_booking.models import OnlineBookingRequest; OnlineBookingRequest.objects.all().delete()"
python manage.py migrate online_booking
```
Expected: migration applies cleanly.

- [ ] **Step 4: Sanity import + full suite still imports**

Run: `cd backend && pytest -q -k online_booking` (may collect 0 until later tasks — the point is no import/model errors) and `python manage.py makemigrations --check` (no pending changes).
Expected: no errors; `--check` passes.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): re-point OnlineBookingRequest onto voyages_* stack"
```

---

### Task 3: Served-towns endpoint

**Files:**
- Modify: `backend/apps/online_booking/selectors/selectors.py`
- Modify: `backend/apps/online_booking/serializers.py`
- Modify: `backend/apps/online_booking/views.py`
- Modify: `backend/apps/online_booking/urls.py`
- Test: `backend/apps/online_booking/tests/test_public_towns.py` (create `tests/` package: `tests/__init__.py` + `tests/conftest.py`)

**Interfaces:**
- Produces: `GET /api/v1/online/<company_id>/towns/` → bare `[{"id": uuid, "name": str}]`, sorted, `AllowAny`; unknown company → 404.
- Produces (Python): `selectors.get_served_towns(company_id) -> QuerySet[Town]`.

- [ ] **Step 1: Build shared test fixtures**

Create `backend/apps/online_booking/tests/__init__.py` (empty) and `backend/apps/online_booking/tests/conftest.py` with a `booking_world` fixture that builds a full modern scenario, reusing construction from `apps/voyages_booking/tests.py` and `apps/reporting/tests/test_lists.py`:

```python
# backend/apps/online_booking/tests/conftest.py
import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone


@pytest.fixture
def booking_world(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_pricing.services.fare_services import create_fare
    from apps.voyages_trips.models import Trip, TripSeat

    company, _ = create_company(name="PWA Co", admin_email="pwa@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="pwa@x.com")

    t_from = Town.objects.create(company=company, name="Douala")
    t_to   = Town.objects.create(company=company, name="Yaoundé")
    o = ServicePoint.objects.create(company=company, town=t_from, code="DLA", name="Gare Douala", is_station=True)
    d = ServicePoint.objects.create(company=company, town=t_to,   code="YDE", name="Gare Yaoundé", is_station=True)
    route = Route.objects.create(company=company, code="DLA-YDE", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="STD", name="Standard")
    fare = create_fare(company=company, route=route, origin_point=o, destination_point=d,
                       fare_class=fc, amount=Decimal("5000"), user=admin)  # verify create_fare kwargs

    dep = timezone.now() + timedelta(days=1)
    trip = Trip.objects.create(company=company, route=route, fare_class=fc,
                               origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=4),
                               status=Trip.Status.PENDING, created_by=admin)
    seat = TripSeat.objects.create(trip=trip, seat_number="1", row=1, column=1,
                                   seat_type="std", status=TripSeat.Status.AVAILABLE, created_by=admin)

    return {"company": company, "admin": admin, "town_from": t_from, "town_to": t_to,
            "o": o, "d": d, "route": route, "fc": fc, "fare": fare, "trip": trip, "seat": seat}
```

Before relying on it, verify each constructor's real kwargs by reading the models/services (`create_fare` signature in `voyages_pricing/services/fare_services.py`; `Trip` required fields in `voyages_trips/models/trip.py`; `TripSeat` in `support.py`). Adjust the fixture to match exactly — do not assume.

- [ ] **Step 2: Write the failing test**

```python
# backend/apps/online_booking/tests/test_public_towns.py
import uuid, pytest
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db

def test_towns_lists_served_towns(booking_world):
    company = booking_world["company"]
    resp = APIClient().get(reverse("online-public-towns", args=[company.id]))
    assert resp.status_code == 200
    names = [t["name"] for t in resp.data]
    assert names == ["Douala", "Yaoundé"]
    assert all("id" in t and "name" in t for t in resp.data)

def test_towns_unknown_company_404():
    resp = APIClient().get(reverse("online-public-towns", args=[uuid.uuid4()]))
    assert resp.status_code == 404
```

- [ ] **Step 3: Run to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_public_towns.py -v`
Expected: FAIL — no URL named `online-public-towns`.

- [ ] **Step 4: Rewrite the selectors module header + add `get_served_towns`**

At the top of `selectors.py`, replace the legacy imports with modern ones:
```python
from django.utils import timezone
from apps.voyages_trips.models import Trip, TripSeat
from apps.voyages_booking.models import Booking
from apps.voyages_config.models import Town
```
Add:
```python
def get_served_towns(company_id):
    """Towns that are endpoints (origin or destination) of the company's routes."""
    from apps.voyages_config.models import Route
    routes = Route.objects.filter(company_id=company_id, is_deleted=False)
    town_ids = set(routes.values_list("origin__town_id", flat=True)) | \
               set(routes.values_list("destination__town_id", flat=True))
    return Town.objects.filter(id__in=town_ids, is_deleted=False).order_by("name")
```
(The other legacy selector functions are rewritten in Tasks 4–6; leave/replace them there.)

- [ ] **Step 5: Add serializer**

In `serializers.py` add:
```python
class PublicTownSerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()
```

- [ ] **Step 6: Add view + URL**

In `views.py`:
```python
class PublicTownListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, company_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(PublicTownSerializer(selectors.get_served_towns(company.id), many=True).data)
```
Add `PublicTownSerializer` to the serializers import block. In `urls.py`:
```python
    path("<uuid:company_id>/towns/", views.PublicTownListView.as_view(), name="online-public-towns"),
```

- [ ] **Step 7: Run to verify pass**

Run: `cd backend && pytest apps/online_booking/tests/test_public_towns.py -v`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): served-towns endpoint on modern stack"
```

---

### Task 4: Public trip search + detail with resolved price (modern serializer)

**Files:**
- Modify: `backend/apps/online_booking/selectors/selectors.py`
- Modify: `backend/apps/online_booking/serializers.py`
- Modify: `backend/apps/online_booking/views.py`
- Test: `backend/apps/online_booking/tests/test_public_trips.py`

**Interfaces:**
- Consumes: `voyages_booking.selectors.bookable_trips`, `voyages_pricing…resolve_fare`, `booking_world` fixture.
- Produces: `search_trips(company_id, from_town_id, to_town_id, travel_date)`, `get_public_trip(trip_id, company_id)`, `trip_price(trip)`; `PublicTripSerializer` (modern) with `price`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_public_trips.py
import pytest
from decimal import Decimal
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db

def test_search_returns_trip_with_price(booking_world):
    w = booking_world
    url = reverse("public-trip-search", args=[w["company"].id])
    resp = APIClient().get(url, {
        "from_town_id": str(w["town_from"].id),
        "to_town_id": str(w["town_to"].id),
        "travel_date": w["trip"].scheduled_departure.date().isoformat(),
    })
    assert resp.status_code == 200
    assert len(resp.data) == 1
    row = resp.data[0]
    assert row["from_town"] == "Douala" and row["to_town"] == "Yaoundé"
    assert Decimal(str(row["price"])) == Decimal("5000")
    assert row["available_seats"] == 1

def test_detail_includes_price_and_fare_class(booking_world):
    w = booking_world
    url = reverse("public-trip-detail", args=[w["company"].id, w["trip"].id])
    resp = APIClient().get(url)
    assert resp.status_code == 200
    assert Decimal(str(resp.data["price"])) == Decimal("5000")
    assert resp.data["fare_class"]["name"] == "Standard"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_public_trips.py -v`
Expected: FAIL — `search_trips` new signature / `price` key missing.

- [ ] **Step 3: Rewrite selectors `search_trips` / `get_public_trip` / add `trip_price`**

Replace the legacy `search_trips` and `get_public_trip` with:
```python
def search_trips(company_id, *, from_town_id, to_town_id, travel_date):
    from apps.system_config.models import Company
    from apps.voyages_booking.selectors import bookable_trips
    company = Company.objects.get(id=company_id)
    qs = bookable_trips(company, travel_date=travel_date)
    return [t for t in qs
            if t.origin.town_id == from_town_id and t.destination.town_id == to_town_id]


def get_public_trip(trip_id, company_id):
    return (Trip.objects
            .filter(company_id=company_id, is_deleted=False, status="pending")
            .select_related("route", "origin__town", "destination__town", "fare_class", "seating_plan", "vehicle")
            .filter(id=trip_id).first())


def trip_price(trip):
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare
    fare = resolve_fare(trip.company, trip.route, trip.origin, trip.destination,
                        trip.fare_class, trip_type="one_way")
    return fare  # or None


def trip_seat_counts(trip):
    total = TripSeat.objects.filter(is_deleted=False, trip=trip).count()
    available = TripSeat.objects.filter(is_deleted=False, trip=trip, status=TripSeat.Status.AVAILABLE).count()
    return total, available
```
(`bookable_trips` returns a queryset or list; treat it as iterable. Verify the `origin.town_id` attribute path — `ServicePoint.town` FK exists.)

- [ ] **Step 4: Rewrite `PublicTripSerializer` (modern)**

Replace the legacy `PublicTripSerializer` in `serializers.py` with:
```python
class PublicTripSerializer(serializers.Serializer):
    id                  = serializers.UUIDField()
    reference           = serializers.SerializerMethodField()
    status              = serializers.CharField()
    scheduled_departure = serializers.DateTimeField()
    scheduled_arrival   = serializers.DateTimeField()
    from_town           = serializers.SerializerMethodField()
    to_town             = serializers.SerializerMethodField()
    origin              = serializers.SerializerMethodField()
    destination         = serializers.SerializerMethodField()
    vehicle_category    = serializers.SerializerMethodField()
    fare_class          = serializers.SerializerMethodField()
    total_seats         = serializers.SerializerMethodField()
    available_seats     = serializers.SerializerMethodField()
    free_seating        = serializers.SerializerMethodField()
    price               = serializers.SerializerMethodField()
    currency            = serializers.SerializerMethodField()

    def get_reference(self, o): return o.number or o.code or str(o.id)
    def get_from_town(self, o): return o.origin.town.name
    def get_to_town(self, o):   return o.destination.town.name
    def get_origin(self, o):      return {"id": str(o.origin.id), "name": o.origin.name}
    def get_destination(self, o): return {"id": str(o.destination.id), "name": o.destination.name}
    def get_vehicle_category(self, o):
        return {"name": o.seating_plan.name if o.seating_plan_id else "", "amenities": []}
    def get_fare_class(self, o):
        return {"id": str(o.fare_class.id), "name": o.fare_class.name} if o.fare_class_id else None
    def _counts(self, o):
        from apps.online_booking import selectors
        return selectors.trip_seat_counts(o)
    def get_total_seats(self, o):     return self._counts(o)[0]
    def get_available_seats(self, o): return self._counts(o)[1]
    def get_free_seating(self, o):    return False
    def get_price(self, o):
        from apps.online_booking import selectors
        f = selectors.trip_price(o)
        return str(f.amount) if f else None
    def get_currency(self, o):
        from apps.online_booking import selectors
        f = selectors.trip_price(o)
        return f.currency if f else "XAF"


class TripSearchQuerySerializer(serializers.Serializer):
    from_town_id = serializers.UUIDField()
    to_town_id   = serializers.UUIDField()
    travel_date  = serializers.DateField()
```
Remove the old `TripSearchQuerySerializer` (city-based) — replace with the town-based one above.

- [ ] **Step 5: Update the views to the new query params**

In `PublicTripSearchView.get`, use the new serializer keys:
```python
        d = ser.validated_data
        trips = selectors.search_trips(company.id,
                                       from_town_id=d["from_town_id"],
                                       to_town_id=d["to_town_id"],
                                       travel_date=d["travel_date"])
```
`PublicTripDetailView.get` stays (calls `get_public_trip`), still returns `PublicTripSerializer`.

- [ ] **Step 6: Run to verify pass**

Run: `cd backend && pytest apps/online_booking/tests/test_public_trips.py -v`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): town-based search + trip detail with resolved price"
```

---

### Task 5: Seat map on modern `TripSeat`

**Files:**
- Modify: `backend/apps/online_booking/selectors/selectors.py`
- Modify: `backend/apps/online_booking/serializers.py`
- Modify: `backend/apps/online_booking/views.py`
- Test: `backend/apps/online_booking/tests/test_public_seatmap.py`

**Interfaces:**
- Produces: `GET /online/<co>/trips/<id>/seats/` → bare `[{id, seat_number, row, column, seat_type, status}]`.
- Produces (Python): `selectors.get_seat_map(trip)`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_public_seatmap.py
import pytest
from django.urls import reverse
from rest_framework.test import APIClient
pytestmark = pytest.mark.django_db

def test_seat_map_returns_trip_seats(booking_world):
    w = booking_world
    url = reverse("public-seat-map", args=[w["company"].id, w["trip"].id])
    resp = APIClient().get(url)
    assert resp.status_code == 200
    assert len(resp.data) == 1
    s = resp.data[0]
    assert set(s) >= {"id", "seat_number", "row", "column", "status"}
    assert s["seat_number"] == "1" and s["status"] == "available"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_public_seatmap.py -v`
Expected: FAIL (old SeatMap shape).

- [ ] **Step 3: Add selector + serializer**

In `selectors.py`:
```python
def get_seat_map(trip):
    from apps.voyages_booking.selectors import seat_map
    return seat_map(trip)
```
Replace the old `SeatMapSerializer` in `serializers.py` with:
```python
class SeatSerializer(serializers.Serializer):
    id          = serializers.UUIDField()
    seat_number = serializers.CharField()
    row         = serializers.IntegerField()
    column      = serializers.IntegerField()
    seat_type   = serializers.CharField()
    status      = serializers.CharField()
```

- [ ] **Step 4: Rewrite the view**

```python
class PublicSeatMapView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, company_id, trip_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        trip = selectors.get_public_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(SeatSerializer(selectors.get_seat_map(trip), many=True).data)
```
Add `SeatSerializer` to the imports; remove references to the old `SeatMapSerializer`.

- [ ] **Step 5: Run to verify pass**

Run: `cd backend && pytest apps/online_booking/tests/test_public_seatmap.py -v`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): seat map from modern TripSeat"
```

---

### Task 6: Re-point initiate + confirm booking onto the modern stack

**Files:**
- Modify: `backend/apps/online_booking/services/services.py`
- Modify: `backend/apps/online_booking/serializers.py` (`InitiateBookingSerializer`, `BookingRequestStatusSerializer`)
- Modify: `backend/apps/online_booking/views.py` (`InitiateBookingView`)
- Test: `backend/apps/online_booking/tests/test_booking_flow.py`

**Interfaces:**
- Consumes: `resolve_fare`, `create_booking`, `TripSeat`, `booking_world`.
- Produces: `initiate_booking(company, trip, passenger_name, passenger_phone, passenger_email, seat_id, payment_method, payment_phone, destination_point_id=None)` → `OnlineBookingRequest`; `confirm_payment(request)` → creates a `voyages_booking.Booking` (`channel=ONLINE`) + Ticket, marks seat sold, links `booking_request.booking`.
- InitiateBooking request body: `{passenger_name, passenger_phone, passenger_email?, seat_id, payment_method, payment_phone, destination_point_id?}`.

- [ ] **Step 1: Write the failing test (payment stubbed)**

```python
# backend/apps/online_booking/tests/test_booking_flow.py
import pytest
from decimal import Decimal
from apps.online_booking import services
from apps.online_booking.models import OnlineBookingRequest
from apps.voyages_booking.models import Booking, Ticket
from apps.voyages_trips.models import TripSeat

pytestmark = pytest.mark.django_db

def _no_campay(monkeypatch):
    # Neutralise the external Campay call in initiate_booking.
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br, raising=False)

def test_initiate_resolves_price_and_stores_seat(booking_world, monkeypatch):
    _no_campay(monkeypatch)
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"],
        passenger_name="Jean Client", passenger_phone="670000000",
        passenger_email="", seat_id=w["seat"].id,
        payment_method="mtn_momo", payment_phone="670000000")
    assert br.amount == Decimal("5000")
    assert br.trip_seat_id == w["seat"].id
    assert br.status == OnlineBookingRequest.Status.PENDING

def test_confirm_creates_online_booking(booking_world, monkeypatch):
    _no_campay(monkeypatch)
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"],
        passenger_name="Jean Client", passenger_phone="670000000",
        passenger_email="", seat_id=w["seat"].id,
        payment_method="mtn_momo", payment_phone="670000000")
    services.confirm_payment(br)
    br.refresh_from_db()
    assert br.status == OnlineBookingRequest.Status.PAID
    assert br.booking_id is not None
    b = Booking.objects.get(id=br.booking_id)
    assert b.channel == Booking.Channel.ONLINE
    assert Ticket.objects.filter(booking=b).count() == 1
    assert TripSeat.objects.get(id=w["seat"].id).status == TripSeat.Status.SOLD
```

Before finalising, read the current `services.py` to see how the Campay call is structured, and refactor the external call into a private helper (`_start_campay_payment(booking_request)`) so the test can stub it. If a different function name already isolates the HTTP call, monkeypatch that instead and adjust the test.

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && pytest apps/online_booking/tests/test_booking_flow.py -v`
Expected: FAIL — new `initiate_booking` signature / modern `create_booking` not wired.

- [ ] **Step 3: Rewrite `initiate_booking`**

Rewrite so it: validates the seat belongs to the trip and is `available`; resolves `destination_point` (default `trip.destination`); resolves the fare via `resolve_fare` and stores `amount`; creates the `OnlineBookingRequest` with `trip`, `trip_seat`, `destination_point`, `amount`, payment fields, `status=PENDING`; then calls `_start_campay_payment(br)` (the isolated external call, unchanged behaviour). Raise `ApplicationError` with explicit French messages for: seat not found / not available, no fare defined.

```python
def initiate_booking(*, company, trip, passenger_name, passenger_phone,
                     passenger_email="", seat_id, payment_method, payment_phone,
                     destination_point_id=None):
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare

    seat = TripSeat.objects.filter(is_deleted=False, trip=trip, id=seat_id).first()
    if not seat:
        raise ApplicationError("Siège introuvable pour ce voyage.")
    if seat.status != TripSeat.Status.AVAILABLE:
        raise ApplicationError("Ce siège vient d'être pris. Choisissez-en un autre.")

    dest = trip.destination
    if destination_point_id:
        from apps.voyages_config.models import ServicePoint
        dest = ServicePoint.objects.filter(is_deleted=False, company=company,
                                            id=destination_point_id).first() or trip.destination

    fare = resolve_fare(company, trip.route, trip.origin, dest, trip.fare_class, trip_type="one_way")
    if not fare:
        raise ApplicationError("Aucun tarif n'est défini pour ce trajet. Contactez l'agence.")

    br = OnlineBookingRequest.objects.create(
        company=company, trip=trip, trip_seat=seat, destination_point=dest,
        passenger_name=passenger_name, passenger_phone=passenger_phone,
        passenger_email=passenger_email, amount=fare.amount,
        payment_method=payment_method, payment_phone=payment_phone,
        status=OnlineBookingRequest.Status.PENDING,
    )
    return _start_campay_payment(br)
```
Keep `_start_campay_payment` doing exactly what the current initiate does for the Campay HTTP call + storing `payment_reference` (extract it from the existing code verbatim).

- [ ] **Step 4: Rewrite `confirm_payment`**

```python
@transaction.atomic
def confirm_payment(booking_request, *, operator_ref=""):
    if booking_request.status != OnlineBookingRequest.Status.PENDING:
        return booking_request
    if booking_request.is_expired:
        booking_request.status = OnlineBookingRequest.Status.EXPIRED
        booking_request.save(update_fields=["status"])
        return booking_request

    from apps.voyages_booking.services import create_booking
    from apps.voyages_booking.models import Booking

    booking = create_booking(
        company=booking_request.company,
        trip_type="one_way",
        outbound_trip=booking_request.trip,
        return_trip=None,
        buyer_spec={"name": booking_request.passenger_name,
                    "phone": booking_request.passenger_phone,
                    "email": booking_request.passenger_email},
        items=[{"passenger": {"name": booking_request.passenger_name,
                              "phone": booking_request.passenger_phone,
                              "email": booking_request.passenger_email},
                "destination_point_id": booking_request.destination_point_id,
                "outbound_seat_id": booking_request.trip_seat_id}],
        payment_method=booking_request.payment_method,
        channel=Booking.Channel.ONLINE,
        user=None,
    )
    booking_request.booking = booking
    booking_request.status = OnlineBookingRequest.Status.PAID
    if operator_ref:
        booking_request.payment_operator_ref = operator_ref
    booking_request.save(update_fields=["booking", "status", "payment_operator_ref"])
    return booking_request
```
**System-user check:** run the test; if `create_booking`/`get_or_create_passenger` raises because `user` is `None` (e.g. sets `created_by=user` on a non-null field, or dereferences `user`), resolve a system user instead: `user = <the company admin>` via a helper `_system_user(company)` that returns the company's first active admin (or a dedicated service user). Document the chosen approach in a code comment. Keep `fail_payment`/`sync_payment_status` as-is (they don't create bookings).

- [ ] **Step 5: Update `InitiateBookingSerializer` + view**

Replace `InitiateBookingSerializer` with:
```python
class InitiateBookingSerializer(serializers.Serializer):
    passenger_name      = serializers.CharField(max_length=150)
    passenger_phone     = serializers.CharField(max_length=30)
    passenger_email     = serializers.EmailField(required=False, allow_blank=True, default="")
    seat_id             = serializers.UUIDField()
    destination_point_id = serializers.UUIDField(required=False, allow_null=True)
    payment_method      = serializers.ChoiceField(choices=OnlineBookingRequest.PaymentMethod.choices)
    payment_phone       = serializers.CharField(max_length=30)
```
Rewrite `InitiateBookingView.post` to call the new `initiate_booking(...)` with these fields (drop `fare`/`amount`/`seat_number` handling; keep the trip lookup + 404 + `ApplicationError`→400 with the French message). Update `BookingRequestStatusSerializer`:
- `trip_summary`: `{reference: trip.number or trip.code, from_town: trip.origin.town.name, to_town: trip.destination.town.name, departure: trip.scheduled_departure.isoformat()}`.
- `seat_number`: source from `trip_seat.seat_number` (SerializerMethodField; `""` if null).
- `ticket`: from `booking.tickets.first()` → `{ticket_number: t.number, qr_code: t.number}` (modern Ticket has no separate QR field; encode the number). Return `None` when no booking/ticket.
- Update its `Meta.fields` accordingly (remove the old `fare`-related field if present; it referenced `seat_number` model field which still exists but we now surface the seat via `trip_seat`).

- [ ] **Step 6: Run to verify pass + full suite**

Run: `cd backend && pytest apps/online_booking/tests/ -v` then `cd backend && pytest -q`
Expected: online_booking tests pass; full suite green (0 failures).

- [ ] **Step 7: `makemigrations --check`**

Run: `cd backend && python manage.py makemigrations --check`
Expected: no pending migrations.

- [ ] **Step 8: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): initiate/confirm booking via voyages_booking (channel=online)"
```

---

## Frontend

### Task 7: Angular — config, models, service, interceptor detail fallback

**Files:**
- Modify: `angular/src/environments/environment.ts`, `environment.prod.ts`
- Modify: `angular/src/_api/config/api.config.ts`
- Create: `angular/src/_api/models/online-booking.models.ts`
- Create: `angular/src/_api/services/online/online-booking.service.ts`
- Modify: `angular/src/_api/interceptors/api-unwrap.interceptor.ts`

**Interfaces:**
- Produces: `OnlineBookingService` with `towns()`, `searchTrips(q)`, `trip(id)`, `seatMap(id)`, `initiate(id, body)`, `status(reqId)`; `environment.onlineCompanyId`.

- [ ] **Step 1: environments** — add `onlineCompanyId: '<seeded-company-uuid>'` to both `environment.ts` and `environment.prod.ts` (dev: a real seeded company id; prod: set at deploy).

- [ ] **Step 2: api.config.ts** — append:
```ts
export const ONLINE = {
  towns:   (co: string) => `${API_BASE}/online/${co}/towns/`,
  trips:   (co: string) => `${API_BASE}/online/${co}/trips/`,
  trip:    (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/`,
  seatMap: (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/seats/`,
  book:    (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/book/`,
  status:  (reqId: string) => `${API_BASE}/online/requests/${reqId}/`,
};
```

- [ ] **Step 3: models** — create `online-booking.models.ts`:
```ts
export interface OnlineTown { id: string; name: string; }
export interface OnlinePoint { id: string; name: string; }
export interface OnlineTrip {
  id: string; reference: string; status: string;
  scheduled_departure: string; scheduled_arrival: string;
  from_town: string; to_town: string;
  origin: OnlinePoint; destination: OnlinePoint;
  vehicle_category: { name: string; amenities: string[] };
  fare_class: { id: string; name: string } | null;
  total_seats: number; available_seats: number; free_seating: boolean;
  price: string | null; currency: string;
}
export interface OnlineSeat {
  id: string; seat_number: string; row: number; column: number;
  seat_type: string; status: 'available' | 'held' | 'sold' | string;
}
export interface TripSearchQuery { from_town_id: string; to_town_id: string; travel_date: string; }
export interface InitiateBookingBody {
  passenger_name: string; passenger_phone: string; passenger_email?: string;
  seat_id: string; destination_point_id?: string;
  payment_method: 'mtn_momo' | 'orange_money'; payment_phone: string;
}
export interface BookingRequestStatus {
  id: string; status: 'pending' | 'paid' | 'failed' | 'expired';
  status_display: string; passenger_name: string; passenger_phone: string;
  seat_number: string; amount: string;
  payment_method: string; payment_method_display: string; payment_reference: string;
  expires_at: string; is_expired: boolean;
  trip_summary: { reference: string; from_town: string; to_town: string; departure: string };
  ticket: { ticket_number: string; qr_code: string } | null;
  created_at: string;
}
```

- [ ] **Step 4: service** — create `online-booking.service.ts`:
```ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ONLINE } from '../../config/api.config';
import { OnlineTown, OnlineTrip, OnlineSeat, TripSearchQuery, InitiateBookingBody, BookingRequestStatus } from '../../models/online-booking.models';

@Injectable({ providedIn: 'root' })
export class OnlineBookingService {
  private http = inject(HttpClient);
  private co = environment.onlineCompanyId;
  towns(): Observable<OnlineTown[]> { return this.http.get<OnlineTown[]>(ONLINE.towns(this.co)); }
  searchTrips(q: TripSearchQuery): Observable<OnlineTrip[]> {
    const params = new HttpParams().set('from_town_id', q.from_town_id).set('to_town_id', q.to_town_id).set('travel_date', q.travel_date);
    return this.http.get<OnlineTrip[]>(ONLINE.trips(this.co), { params });
  }
  trip(id: string): Observable<OnlineTrip> { return this.http.get<OnlineTrip>(ONLINE.trip(this.co, id)); }
  seatMap(id: string): Observable<OnlineSeat[]> { return this.http.get<OnlineSeat[]>(ONLINE.seatMap(this.co, id)); }
  initiate(id: string, body: InitiateBookingBody): Observable<BookingRequestStatus> { return this.http.post<BookingRequestStatus>(ONLINE.book(this.co, id), body); }
  status(reqId: string): Observable<BookingRequestStatus> { return this.http.get<BookingRequestStatus>(ONLINE.status(reqId)); }
}
```

- [ ] **Step 5: interceptor** — in `api-unwrap.interceptor.ts` `catchError`, after the `if (errBody) {…}` block and before the synthesized `statusMessage` return, add the bare-`detail` fallback:
```ts
      const bareDetail = err?.error?.detail;
      if (typeof bareDetail === 'string' && bareDetail.trim()) {
        return throwError(() => new HttpErrorResponse({
          error: { detail: bareDetail },
          status: err.status, statusText: err.statusText,
          url: err.url ?? undefined, headers: err.headers,
        }));
      }
```

- [ ] **Step 6: build** — `cd angular && npx ng build` → success.

- [ ] **Step 7: commit**
```bash
git add angular/src/environments angular/src/_api
git commit -m "feat(pwa): online booking service, models, config + detail error fallback"
```

---

### Task 8: Angular — public layout + reserver routes wired into the app

**Files:** Create `reserver-layout.component.{ts,html,scss}`, `reserver.routes.ts`, placeholder `search/search.component.ts`; Modify `angular/src/app/app.routes.ts`.

(Identical to the previously reviewed layout task — the modern re-point does not change it.)

- [ ] **Step 1: layout component** — `ReserverLayoutComponent` (standalone, imports `RouterModule`) with header (brand `routerLink="/reserver"`), `<router-outlet>`, footer. SCSS: flex column shell, max-width 960px content. (Copy is French; brand "Réservation en ligne".)

- [ ] **Step 2: placeholder search** —
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-rsv-search', standalone: true, template: `<p>Recherche de voyages (à venir).</p>` })
export class RsvSearchComponent {}
```

- [ ] **Step 3: reserver.routes.ts** —
```ts
import { Routes } from '@angular/router';
export const Reserver_routes: Routes = [{
  path: '',
  loadComponent: () => import('./reserver-layout.component').then(m => m.ReserverLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./search/search.component').then(m => m.RsvSearchComponent) },
  ],
}];
```

- [ ] **Step 4: app.routes.ts** — add BEFORE the `path: '**'` wildcard:
```ts
  { path: 'reserver', loadChildren: () => import('../_api/pages/reserver/reserver.routes').then(m => m.Reserver_routes) },
```

- [ ] **Step 5: build** — `cd angular && npx ng build` → success; `/reserver` loads with no auth redirect (manual `ng serve`).

- [ ] **Step 6: commit**
```bash
git add angular/src/_api/pages/reserver angular/src/app/app.routes.ts
git commit -m "feat(pwa): public reserver layout + unguarded route tree"
```

---

### Task 9: Angular — search page (towns)

**Files:** Modify `search/search.component.ts` (replace placeholder); create `search.component.html`, `search.component.scss`.

**Interfaces:** Consumes `OnlineBookingService.towns()/searchTrips()`; navigates to `['/reserver/voyage', trip.id]`.

- [ ] **Step 1: component** — signals `towns`, `trips`, `loading`; fields `fromTown`, `toTown`, `travelDate`. On init load `towns()`. `search()` validates all three set + from≠to (French toast warnings), calls `searchTrips({from_town_id, to_town_id, travel_date})`, sets `trips`. `open(trip)` navigates to detail. Inject `ToastService`; error handlers use `e?.error?.detail ?? '<explicit French fallback>'`.

- [ ] **Step 2: template** — two `<select>`s bound to `towns()` (option value = `t.id`), a `<input type="date">`, a "Rechercher" button (disabled while loading). Results: `@if (trips() !== null)` → empty message or a clickable card per trip showing `from_town → to_town`, `scheduled_departure | date`, `available_seats`, and `price` + ` XAF` when non-null. (Mirror the structure from the reviewed search template, replacing city with town and `t.fares[0].price` with `t.price`.)

- [ ] **Step 3: build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: commit**
```bash
git add angular/src/_api/pages/reserver/search
git commit -m "feat(pwa): trip search page (towns)"
```

---

### Task 10: Angular — trip detail page (price, no fare picker)

**Files:** Create `trip-detail/trip-detail.component.{ts,html}`; modify `reserver.routes.ts` (child `voyage/:tripId`).

**Interfaces:** Consumes `OnlineBookingService.trip(id)`; navigates to `['/reserver/voyage', tripId, 'reserver']` (no query param — one price per trip).

- [ ] **Step 1: component** — signals `trip`, `loading`, `error`; read `:tripId`; load `trip(id)`. `reserve()` navigates to the booking route. Inject `ToastService`, `RouterModule` (for `routerLink`).

- [ ] **Step 2: template** — loading / error / detail states. Detail shows: `from_town → to_town`, `scheduled_departure | date`, origin/destination point names, `vehicle_category.name`, `available_seats`, `fare_class?.name`, the `price + ' XAF'`, and a **Réserver** button (disabled when `available_seats === 0` or `price === null`; when price null show "Tarif indisponible — contactez l'agence").

- [ ] **Step 3: child route** — add `{ path: 'voyage/:tripId', loadComponent: () => import('./trip-detail/trip-detail.component').then(m => m.RsvTripDetailComponent) }`.

- [ ] **Step 4: build** — success.

- [ ] **Step 5: commit**
```bash
git add angular/src/_api/pages/reserver
git commit -m "feat(pwa): trip detail page with price"
```

---

### Task 11: Angular — seat picker component (TripSeat)

**Files:** Create `seats/seat-picker.component.{ts,html,scss}`.

**Interfaces:** `@Input() seats: OnlineSeat[]`; `@Output() seatChange = EventEmitter<string>` (chosen `seat.id`, or '' when cleared). A seat is selectable when `status === 'available'`.

- [ ] **Step 1: component** — build rows via `computed()` grouping `seats` by `row` (sorted by `column`), like the back-office `new-booking` does (`rows()`/`seatsInRow()`), but from `OnlineSeat[]`. `selected` signal holds the chosen `seat.id`. `pick(seat)` ignores non-available, toggles selection, emits `seat.id` or ''. Expose a `seatClass(seat)` returning taken/selected/free classes.

```ts
import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineSeat } from '../../../models/online-booking.models';

@Component({ selector: 'app-seat-picker', standalone: true, imports: [CommonModule],
  templateUrl: './seat-picker.component.html', styleUrls: ['./seat-picker.component.scss'] })
export class SeatPickerComponent {
  private _seats = signal<OnlineSeat[]>([]);
  @Input() set seats(v: OnlineSeat[]) { this._seats.set(v ?? []); this.selected.set(''); }
  @Output() seatChange = new EventEmitter<string>();
  selected = signal<string>('');
  rows = computed<number[]>(() => [...new Set(this._seats().map(s => s.row))].sort((a, b) => a - b));
  seatsInRow(row: number): OnlineSeat[] { return this._seats().filter(s => s.row === row).sort((a, b) => a.column - b.column); }
  isTaken(s: OnlineSeat): boolean { return s.status !== 'available'; }
  pick(s: OnlineSeat): void {
    if (this.isTaken(s)) return;
    const next = this.selected() === s.id ? '' : s.id;
    this.selected.set(next); this.seatChange.emit(next);
  }
}
```

- [ ] **Step 2: template + scss** — for each `row of rows()`, a `.seat-row` of `<button>`s from `seatsInRow(row)`, labelled `seat.seat_number`, classes `.taken`/`.selected`, disabled when taken; plus a small legend. SCSS mirrors the reviewed seat-picker styles.

- [ ] **Step 3: build** — success.

- [ ] **Step 4: commit**
```bash
git add angular/src/_api/pages/reserver/seats
git commit -m "feat(pwa): seat picker component (TripSeat)"
```

---

### Task 12: Angular — booking page (seat + passenger + payment)

**Files:** Create `booking/booking.component.{ts,html}`; modify `reserver.routes.ts` (child `voyage/:tripId/reserver`).

**Interfaces:** Consumes `trip()`, `seatMap()`, `initiate()`, `SeatPickerComponent`; navigates to `['/reserver/statut', requestId]`.

- [ ] **Step 1: component** — on init `forkJoin({ trip: trip(id), seats: seatMap(id) })`; signals for both + `loading`, `submitting`. Form model: `name, phone, email, seatId='', method, paymentPhone`. `onSeat(id)` sets `seatId`. `submit()` validates: name+phone+paymentPhone present, seat chosen (`seatId` required — modern trips always have seats); build `InitiateBookingBody { passenger_name, passenger_phone, passenger_email?, seat_id: seatId, payment_method: method, payment_phone }`; call `initiate(id, body)` → navigate to status. French toasts on validation + error (`e?.error?.detail ?? '<fallback>'`).

- [ ] **Step 2: template** — trip header (`from_town → to_town`, departure, `price XAF`); `<app-seat-picker [seats]="seats()" (seatChange)="onSeat($event)">` + chosen seat display; passenger inputs (nom/téléphone/email); payment `<select>` (mtn_momo / orange_money) + payment phone; "Payer et réserver" button (disabled while submitting); helper note about the MoMo prompt.

- [ ] **Step 3: child route** — add `{ path: 'voyage/:tripId/reserver', loadComponent: () => import('./booking/booking.component').then(m => m.RsvBookingComponent) }`.

- [ ] **Step 4: build** — success.

- [ ] **Step 5: commit**
```bash
git add angular/src/_api/pages/reserver
git commit -m "feat(pwa): booking page (seat + passenger + Mobile Money)"
```

---

### Task 13: Angular — status/ticket page (poll + QR)

**Files:** Create `status/status.component.{ts,html,scss}`; modify `reserver.routes.ts` (child `statut/:requestId`); modify `angular/package.json` (`qrcode` + `@types/qrcode`).

**Interfaces:** Consumes `OnlineBookingService.status(reqId)`; `qrcode` npm.

- [ ] **Step 1: deps** — `cd angular && npm install qrcode && npm install -D @types/qrcode`.

- [ ] **Step 2: component** — read `:requestId`; poll `status(reqId)` immediately then every 5s via `setInterval`; stop when `status !== 'pending'`; clear timer in `ngOnDestroy`. `effect()` draws the QR (`QRCode.toCanvas(canvasEl, r.ticket.qr_code, {width:220})`) when `status==='paid'` && `ticket` && canvas present (use `viewChild('qr')`). Inject `ToastService` for the initial-load error only. (Same shape as the reviewed status component.)

- [ ] **Step 3: template + scss** — `@switch (r.status)` with `pending` (spinner + "confirmez sur votre téléphone"), `paid` (success + ticket card: `ticket_number`, `passenger_name`, `seat_number` if any, `amount XAF`, `<canvas #qr>`, "Présentez ce QR à l'embarquement"), `failed` and `expired` (message + "Nouvelle réservation" `routerLink="/reserver"`); plus a not-found fallback.

- [ ] **Step 4: child route** — add `{ path: 'statut/:requestId', loadComponent: () => import('./status/status.component').then(m => m.RsvStatusComponent) }`.

- [ ] **Step 5: build** — success.

- [ ] **Step 6: commit**
```bash
git add angular/src/_api/pages/reserver angular/package.json angular/package-lock.json
git commit -m "feat(pwa): booking status page with polling + QR ticket"
```

---

### Task 14: PWA packaging (manifest + scoped service worker)

**Files:** Modify `angular/angular.json`, `angular/src/index.html`, `angular/src/app/app.config.ts`, `angular/package.json`; create `angular/ngsw-config.json`, `angular/src/manifest.webmanifest`, `angular/src/assets/icons/icon-192.png`, `icon-512.png`.

- [ ] **Step 1: install** — `cd angular && npm install @angular/service-worker@<match @angular/core version>`.

- [ ] **Step 2: manifest** — `src/manifest.webmanifest`: name "SCIG — Réservation en ligne", short_name, `theme_color #0d6efd`, `background_color #f6f8fb`, `display standalone`, `scope /reserver`, `start_url /reserver`, icons 192/512 (`purpose "any maskable"`).

- [ ] **Step 3: ngsw-config.json** — assetGroups `app` (prefetch: index/css/js/manifest/favicon) + `assets` (lazy+prefetch: `/assets/**`, images/fonts); dataGroups **only** `online-api` → `urls: ["/api/v1/online/**"]`, `strategy: "freshness"`, `maxAge "1h"`, `timeout "5s"`, `maxSize 100`. Do NOT list any authenticated staff endpoints.

- [ ] **Step 4: angular.json** — add `"serviceWorker": "ngsw-config.json"` to `build.configurations.production` (or `"serviceWorker": true` + `"ngswConfigPath"` if the installed schema requires it — match what the CLI accepts). Ensure `"src/manifest.webmanifest"` is in the build `assets` array.

- [ ] **Step 5: index.html** — add `<link rel="manifest" href="manifest.webmanifest">` and `<meta name="theme-color" content="#0d6efd">`.

- [ ] **Step 6: app.config.ts** — add to `providers`:
```ts
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';
// ...
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' }),
```

- [ ] **Step 7: icons** — add `icon-192.png` / `icon-512.png` under `src/assets/icons/` (simple SCIG square placeholder acceptable).

- [ ] **Step 8: prod build emits SW** — `cd angular && npx ng build --configuration production`; verify `ls angular/dist/*/ngsw-worker.js` and `manifest.webmanifest` exist.

- [ ] **Step 9: commit**
```bash
git add angular/angular.json angular/ngsw-config.json angular/src/manifest.webmanifest angular/src/index.html angular/src/app/app.config.ts angular/src/assets/icons angular/package.json angular/package-lock.json
git commit -m "feat(pwa): installable PWA — manifest + scoped service worker"
```

---

## Final Verification

- [ ] Backend suite green: `cd backend && pytest -q`.
- [ ] `makemigrations --check` clean.
- [ ] Frontend prod build green with SW + manifest emitted.
- [ ] Manual smoke (dev): set `environment.onlineCompanyId` to a seeded company with **submitted (`pending`) seat-materialised trips + fares** on the modern stack; `ng serve`; `/reserver` search → detail → seat → passenger + payment → status polls. Confirm a `paid` request produces a `voyages_booking.Booking` with `channel=online` visible in the staff booking list.
- [ ] `/reserver` reachable without login and without the back-office shell.

## Self-Review Notes

- **Spec coverage:** channel param (T1) ↔ §4.2/§6.4; model re-point (T2) ↔ §4.2; served-towns (T3) ↔ §6.1; search+price (T4) ↔ §6.2; seat map (T5) ↔ §6.3; initiate/confirm (T6) ↔ §6.4/§6.5; Angular service/models/interceptor (T7) ↔ §4.1/§8; layout+routes (T8) ↔ §4.1; search/detail/seat/booking/status (T9–T13) ↔ §5; PWA (T14) ↔ §7.
- **Type consistency:** `OnlineSeat.id` produced by T5 serializer, consumed as `seat_id` in T6 body + T11/T12 frontend; `OnlineTrip.price` produced by T4, consumed in T9/T10; `BookingRequestStatus` union matches the T13 `@switch`.
- **Assumptions verified during implementation (flagged in-task):** exact `create_fare`/`Trip`/`TripSeat` constructor kwargs (T3 fixture); `user=None` tolerance in `create_booking`/`get_or_create_passenger` (T6, with system-user fallback); the Campay HTTP call isolated as `_start_campay_payment` for stubbing (T6); `angular.json` serviceWorker schema shape (T14).
