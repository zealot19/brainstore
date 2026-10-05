# Data Archiving Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let an institution admin set one global "show data from the last N days" window that hides older operational rows from the five list screens at the database query layer, with a one-click per-list toggle to reveal them; nothing is ever deleted and reporting is unaffected.

**Architecture:** A single per-company integer `Parameter` (`data.archive_window_days`) is read by one helper, `apply_archive_window(qs, date_field, company_id, include_archived)`, that appends `WHERE date_field >= now - N days` to a queryset — unless the window is disabled (0) or the request opts out. Exactly six operational selectors call the helper (each with its own anchor date field); their views thread an `include_archived` flag parsed from the query string. A new Administration screen reads/writes the setting; each affected Angular list gets a toggle that sets `?include_archived=1`.

**Tech Stack:** Django 5.1 + DRF, pytest (`../env/bin/python -m pytest <path> -q` from `backend/`), Angular standalone + Transloco, build `npx ng build --configuration development` from `angular/`.

**Spec:** `docs/superpowers/specs/2026-10-05-data-archiving-design.md`

## Global Constraints

- **I1 — Server-side enforcement:** hiding happens in the selector queryset; archived rows are never serialized unless `include_archived` is set. No client-side filtering.
- **I2 — Opt-in default:** window `0`/unset = disabled → behavior identical to today. Default value `0`.
- **I3 — Reporting exempt:** the reporting module never calls the helper; reports always see full history.
- **I4 — Configuration exempt:** only the six selectors in this plan call the helper; no reference/config list ever does.
- **I5 — Access unaffected:** the window filters lists only; detail/edit/cross-reference endpoints reach archived rows normally (they are untouched by this plan).
- **I6 — Toggle non-sticky:** `include_archived` affects only the request carrying it; never persisted.
- **Helper location:** `apps/system_config/selectors/archiving.py` (deviation from spec's `apps/core/archiving.py`, to avoid a `core → system_config` import cycle).
- **Boundary rule:** `__gte` — a row exactly at the cutoff is visible.
- **i18n:** every new UI string added to all four locales: `angular/public/i18n/{fr,en,es,pt}.json`.
- **Commits:** author `shimi`, no co-author trailer (`git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit`).

## Review Focus

- **Non-integer / negative window on PUT** → 400, stored value unchanged (Task 2 test `test_put_rejects_negative`).
- **Window disabled (0/unset)** → `apply_archive_window` is a pure no-op; lists behave exactly as today (Task 1 test `test_disabled_is_noop`).
- **Per-domain anchor correctness** — trips window by `scheduled_departure`, not `created_at`; treasury by `transaction_date` (Task 4 `test_list_trips_uses_scheduled_departure`, Task 6 `test_list_transactions_uses_transaction_date`).
- **Reporting still counts archived rows** (Task 7 `test_recette_report_counts_out_of_window_transactions`).
- **`include_archived` query-param truthiness** — `"1"`/`"true"`/`"yes"` → reveal; absent/`"0"`/other → windowed (Task 1 `test_wants_archived_parsing`).

---

## Task 1: Window helper, accessor, and query-param parser

**Files:**
- Create: `backend/apps/system_config/selectors/archiving.py`
- Test: `backend/apps/system_config/tests/test_archiving_helper.py`

**Interfaces:**
- Consumes: `apps.system_config.selectors.parameter_selectors.get_param(key, company_id=None, default=None)` (cached, returns typed value).
- Produces:
  - `archive_window_days(company_id) -> int` — 0 when unset/disabled/invalid.
  - `apply_archive_window(qs, *, date_field, company_id, include_archived) -> QuerySet` — appends `{date_field}__gte=cutoff` unless disabled or `include_archived`.
  - `wants_archived(request) -> bool` — parses `include_archived` from `request.query_params`.
  - `ARCHIVE_WINDOW_KEY = "data.archive_window_days"`.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/system_config/tests/test_archiving_helper.py
import types
import pytest
from datetime import timedelta
from django.utils import timezone
from django.core.cache import cache
from apps.system_config.models import Company, Parameter
from apps.system_config.selectors.archiving import (
    archive_window_days, apply_archive_window, wants_archived, ARCHIVE_WINDOW_KEY,
)


def _company(name):
    return Company.objects.create(name=name, slug=name.lower())


def _set_window(company, days):
    Parameter.objects.update_or_create(
        key=ARCHIVE_WINDOW_KEY, company_id=company.id,
        defaults={"value": str(days), "data_type": Parameter.DataType.INTEGER,
                  "scope": Parameter.Scope.COMPANY})
    cache.delete(f"param:{company.id}:{ARCHIVE_WINDOW_KEY}")


@pytest.mark.django_db
def test_disabled_is_noop():
    c = _company("Dis")  # no window row => disabled
    qs = Parameter.objects.all()
    out = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=False)
    assert list(out) == list(qs)
    assert archive_window_days(c.id) == 0


@pytest.mark.django_db
def test_window_hides_old_and_keeps_recent():
    c = _company("Win")
    _set_window(c, 30)
    recent = Parameter.objects.create(key="probe", value="r", company_id=c.id)
    old = Parameter.objects.create(key="probe", value="o", company_id=c.id)
    # just inside / just outside the 30-day window (avoid exact-cutoff timing races)
    Parameter.objects.filter(id=recent.id).update(created_at=timezone.now() - timedelta(days=29))
    Parameter.objects.filter(id=old.id).update(created_at=timezone.now() - timedelta(days=31))
    qs = Parameter.objects.filter(key="probe")
    default = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=False)
    assert set(default.values_list("id", flat=True)) == {recent.id}
    revealed = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=True)
    assert set(revealed.values_list("id", flat=True)) == {recent.id, old.id}


@pytest.mark.django_db
def test_invalid_stored_value_is_treated_as_zero():
    c = _company("Bad")
    Parameter.objects.create(key=ARCHIVE_WINDOW_KEY, company_id=c.id, value="abc",
                             data_type=Parameter.DataType.STRING, scope=Parameter.Scope.COMPANY)
    cache.delete(f"param:{c.id}:{ARCHIVE_WINDOW_KEY}")
    assert archive_window_days(c.id) == 0


@pytest.mark.parametrize("raw,expected", [
    ("1", True), ("true", True), ("TRUE", True), ("yes", True),
    ("0", False), ("", False), ("no", False), (None, False),
])
def test_wants_archived_parsing(raw, expected):
    qp = {} if raw is None else {"include_archived": raw}
    req = types.SimpleNamespace(query_params=qp)
    assert wants_archived(req) is expected
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_archiving_helper.py -q`
Expected: FAIL — `ModuleNotFoundError: apps.system_config.selectors.archiving`.

- [ ] **Step 3: Implement the module**

```python
# backend/apps/system_config/selectors/archiving.py
from datetime import timedelta
from django.utils import timezone
from apps.system_config.selectors.parameter_selectors import get_param

ARCHIVE_WINDOW_KEY = "data.archive_window_days"


def archive_window_days(company_id) -> int:
    """Configured visibility window in days for a company; 0 = disabled/unset/invalid."""
    val = get_param(ARCHIVE_WINDOW_KEY, company_id=company_id, default=0)
    try:
        return max(0, int(val or 0))
    except (TypeError, ValueError):
        return 0


def apply_archive_window(qs, *, date_field, company_id, include_archived):
    """Restrict qs to rows whose `date_field` is within the company's window.
    No-op when the window is disabled (0) or include_archived is truthy (I1, I2)."""
    n = archive_window_days(company_id)
    if include_archived or not n:
        return qs
    cutoff = timezone.now() - timedelta(days=n)
    return qs.filter(**{f"{date_field}__gte": cutoff})


def wants_archived(request) -> bool:
    """Parse the per-request opt-out flag from the query string (I6)."""
    return str(request.query_params.get("include_archived", "")).lower() in ("1", "true", "yes")
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_archiving_helper.py -q`
Expected: PASS (11 items: 3 `django_db` tests + 8 parametrized `test_wants_archived_parsing` cases).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/system_config/selectors/archiving.py backend/apps/system_config/tests/test_archiving_helper.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): window helper, accessor, and query-param parser"
```

---

## Task 2: Setting service and admin endpoint

**Files:**
- Create: `backend/apps/system_config/services/archiving.py`
- Modify: `backend/apps/system_config/views.py` (add `ArchivingSettingsView`)
- Modify: `backend/apps/system_config/urls.py` (add `archiving/` route)
- Test: `backend/apps/system_config/tests/test_archiving_endpoint.py`

**Interfaces:**
- Consumes: `archive_window_days` (Task 1); `apps.core.exceptions.ApplicationError`; `apps.core.permissions.{IsAuthenticated,IsInstitutionAdmin}`; `apps.system_config.services.create_company`.
- Produces:
  - `set_archive_window_days(company_id, days, updated_by=None) -> int` — validates `int ≥ 0`, upserts the `Parameter`, busts cache.
  - `GET/PUT /api/v1/system/archiving/` → `{"archive_window_days": <int>}`.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/system_config/tests/test_archiving_endpoint.py
import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.system_config.selectors.archiving import archive_window_days


def _admin_client(email):
    company, _ = create_company(name=f"Co {email}", admin_email=email,
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    c = APIClient()
    c.force_authenticate(admin)
    return c, company, admin


@pytest.mark.django_db
def test_get_returns_zero_by_default():
    c, company, _ = _admin_client("a1@x.com")
    r = c.get("/api/v1/system/archiving/")
    assert r.status_code == 200
    assert r.data["archive_window_days"] == 0


@pytest.mark.django_db
def test_put_sets_window():
    c, company, _ = _admin_client("a2@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": 90}, format="json")
    assert r.status_code == 200
    assert r.data["archive_window_days"] == 90
    assert archive_window_days(company.id) == 90


@pytest.mark.django_db
def test_put_rejects_negative():
    c, company, _ = _admin_client("a3@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": -5}, format="json")
    assert r.status_code == 400
    assert archive_window_days(company.id) == 0


@pytest.mark.django_db
def test_put_rejects_non_integer():
    c, company, _ = _admin_client("a4@x.com")
    r = c.put("/api/v1/system/archiving/", {"archive_window_days": "lots"}, format="json")
    assert r.status_code == 400
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_archiving_endpoint.py -q`
Expected: FAIL — 404 (route absent) / import error.

- [ ] **Step 3: Implement service**

```python
# backend/apps/system_config/services/archiving.py
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Parameter
from apps.system_config.selectors.archiving import ARCHIVE_WINDOW_KEY


def set_archive_window_days(company_id, days, updated_by=None) -> int:
    if not isinstance(days, int) or isinstance(days, bool) or days < 0:
        raise ApplicationError(_("Le nombre de jours doit être un entier positif ou nul."))
    param, created = Parameter.objects.get_or_create(
        key=ARCHIVE_WINDOW_KEY, company_id=company_id,
        defaults={"value": str(days), "data_type": Parameter.DataType.INTEGER,
                  "scope": Parameter.Scope.COMPANY})
    if not created:
        param.value = str(days)
        param.data_type = Parameter.DataType.INTEGER
        param.scope = Parameter.Scope.COMPANY
        param.updated_by = updated_by
        param.save()
    cache.delete(f"param:{company_id or 'global'}:{ARCHIVE_WINDOW_KEY}")
    return days
```

- [ ] **Step 4: Implement view**

Add to `backend/apps/system_config/views.py` (the file already imports `IsInstitutionAdmin`; ensure `APIView`, `Response`, `status`, `IsAuthenticated`, and `ApplicationError` are imported — add any missing):

```python
class ArchivingSettingsView(APIView):
    """GET/PUT the per-company data-archiving window (institution admin only)."""
    permission_classes = [IsAuthenticated, IsInstitutionAdmin]

    def get(self, request):
        from apps.system_config.selectors.archiving import archive_window_days
        return Response({"archive_window_days": archive_window_days(request.user.company_id)})

    def put(self, request):
        from apps.system_config.services.archiving import set_archive_window_days
        raw = request.data.get("archive_window_days")
        try:
            days = int(raw)
        except (TypeError, ValueError):
            return Response({"detail": "archive_window_days doit être un entier."},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            set_archive_window_days(request.user.company_id, days, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"archive_window_days": days})
```

Add the route in `backend/apps/system_config/urls.py` (near the Parameters block):

```python
    path("archiving/", views.ArchivingSettingsView.as_view(), name="archiving-settings"),
```

- [ ] **Step 5: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/system_config/tests/test_archiving_endpoint.py -q`
Expected: PASS (4).

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config/services/archiving.py backend/apps/system_config/views.py backend/apps/system_config/urls.py backend/apps/system_config/tests/test_archiving_endpoint.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): institution-admin setting endpoint + service"
```

---

## Task 3: Window the booking selectors (Billetterie + Réservations + Retours à traiter)

**Files:**
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (`list_bookings`, `open_return_bookings`)
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`BookingListView`, `OpenReturnsView`)
- Test: `backend/apps/voyages_booking/test_archiving_wiring.py`

**Interfaces:**
- Consumes: `apply_archive_window`, `wants_archived` (Task 1).
- Produces: `list_bookings(..., include_archived=False)` and `open_return_bookings(..., include_archived=False)`, both windowed on `created_at`.

- [ ] **Step 1: Write the failing spy tests**

```python
# backend/apps/voyages_booking/test_archiving_wiring.py
import pytest
from apps.system_config.services import create_company
from apps.voyages_booking import selectors


def _spy(calls):
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    return fake


@pytest.mark.django_db
def test_list_bookings_windows_created_at(monkeypatch):
    company, _ = create_company(name="BkA", admin_email="bka@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.list_bookings(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]


@pytest.mark.django_db
def test_list_bookings_threads_include_archived(monkeypatch):
    company, _ = create_company(name="BkB", admin_email="bkb@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.list_bookings(company, include_archived=True)
    assert calls[0]["include_archived"] is True


@pytest.mark.django_db
def test_open_returns_windows_created_at(monkeypatch):
    company, _ = create_company(name="BkC", admin_email="bkc@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.open_return_bookings(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_archiving_wiring.py -q`
Expected: FAIL — `list_bookings() got an unexpected keyword argument 'include_archived'` (and no `apply_archive_window` attribute to patch).

- [ ] **Step 3: Implement**

In `backend/apps/voyages_booking/selectors/__init__.py`, add the import at module top:

```python
from apps.system_config.selectors.archiving import apply_archive_window
```

Change `list_bookings` signature to end with `user=None, include_archived=False)` and, immediately before `return qs`, add:

```python
    qs = apply_archive_window(qs, date_field="created_at", company_id=company.id,
                              include_archived=include_archived)
```

Change `open_return_bookings(company, q=None, user=None)` → `open_return_bookings(company, q=None, user=None, include_archived=False)` and, before `return qs`, add the same `apply_archive_window(... date_field="created_at", company_id=company.id ...)` line.

In `backend/apps/voyages_booking/config_api/views.py`, add `from apps.system_config.selectors.archiving import wants_archived` and pass `include_archived=wants_archived(request)` into both `selectors.list_bookings(...)` (in `BookingListView.get`) and `selectors.open_return_bookings(...)` (in `OpenReturnsView.get`).

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_archiving_wiring.py -q`
Expected: PASS (3).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_booking/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): window booking + open-return lists on created_at"
```

---

## Task 4: Window the trips selector (Voyages) on `scheduled_departure`

**Files:**
- Modify: `backend/apps/voyages_trips/selectors/trip_selectors.py` (`list_trips`)
- Modify: `backend/apps/voyages_trips/views.py` (`TripListCreateView.get`)
- Test: `backend/apps/voyages_trips/test_archiving_wiring.py`

**Interfaces:**
- Consumes: `apply_archive_window`, `wants_archived` (Task 1).
- Produces: `list_trips(..., include_archived=False)` windowed on `scheduled_departure`.

- [ ] **Step 1: Write the failing spy test**

```python
# backend/apps/voyages_trips/test_archiving_wiring.py
import pytest
from apps.system_config.services import create_company
from apps.voyages_trips.selectors import trip_selectors


@pytest.mark.django_db
def test_list_trips_uses_scheduled_departure(monkeypatch):
    company, _ = create_company(name="TrA", admin_email="tra@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.voyages_trips.selectors.trip_selectors.apply_archive_window", fake)
    trip_selectors.list_trips(company, include_archived=True)
    assert calls == [{"date_field": "scheduled_departure", "company_id": company.id, "include_archived": True}]
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_trips/test_archiving_wiring.py -q`
Expected: FAIL — unexpected keyword `include_archived`.

- [ ] **Step 3: Implement**

In `backend/apps/voyages_trips/selectors/trip_selectors.py`, add at module top:

```python
from apps.system_config.selectors.archiving import apply_archive_window
```

Change `list_trips` signature to end with `auto_expenses=None, include_archived=False)` and, immediately before `return qs`, add:

```python
    qs = apply_archive_window(qs, date_field="scheduled_departure", company_id=company.id,
                              include_archived=include_archived)
```

In `backend/apps/voyages_trips/views.py`, add `from apps.system_config.selectors.archiving import wants_archived` and pass `include_archived=wants_archived(request)` into the `selectors.list_trips(...)` call in `TripListCreateView.get`.

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_trips/test_archiving_wiring.py -q`
Expected: PASS (1).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): window trips list on scheduled_departure"
```

---

## Task 5: Window the consignment selectors (Colis + Bagages) on `created_at`

**Files:**
- Modify: `backend/apps/voyages_consignment/selectors/__init__.py` (`list_parcels`, `list_baggage`)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (parcel list view, baggage list view)
- Test: `backend/apps/voyages_consignment/test_archiving_wiring.py`

**Interfaces:**
- Consumes: `apply_archive_window`, `wants_archived` (Task 1).
- Produces: `list_parcels(..., include_archived=False)` and `list_baggage(..., include_archived=False)`, both windowed on `created_at`. This task also carries the one real end-to-end proof (via `Baggage`, which needs only `company`).

- [ ] **Step 1: Write the failing tests (spy for parcels, real end-to-end for baggage)**

```python
# backend/apps/voyages_consignment/test_archiving_wiring.py
import pytest
from datetime import timedelta
from django.utils import timezone
from apps.system_config.services import create_company
from apps.system_config.services.archiving import set_archive_window_days
from apps.voyages_consignment import selectors
from apps.voyages_consignment.models import Baggage


@pytest.mark.django_db
def test_list_parcels_windows_created_at(monkeypatch):
    company, _ = create_company(name="PcA", admin_email="pca@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.voyages_consignment.selectors.apply_archive_window", fake)
    selectors.list_parcels(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]


@pytest.mark.django_db
def test_list_baggage_hides_out_of_window_rows_end_to_end():
    company, _ = create_company(name="BgA", admin_email="bga@x.com", admin_first_name="A", admin_last_name="B")
    set_archive_window_days(company.id, 30)
    recent = Baggage.objects.create(company=company)
    old = Baggage.objects.create(company=company)
    Baggage.objects.filter(id=old.id).update(created_at=timezone.now() - timedelta(days=60))
    default_ids = set(selectors.list_baggage(company).values_list("id", flat=True))
    assert recent.id in default_ids and old.id not in default_ids
    revealed_ids = set(selectors.list_baggage(company, include_archived=True).values_list("id", flat=True))
    assert old.id in revealed_ids
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_archiving_wiring.py -q`
Expected: FAIL — unexpected keyword `include_archived`.

- [ ] **Step 3: Implement**

In `backend/apps/voyages_consignment/selectors/__init__.py`, add at module top:

```python
from apps.system_config.selectors.archiving import apply_archive_window
```

Change `list_parcels` signature to end with `user=None, include_archived=False)` and, immediately before its `return qs`, add:

```python
    qs = apply_archive_window(qs, date_field="created_at", company_id=company.id,
                              include_archived=include_archived)
```

Change `list_baggage` signature to end with `user=None, include_archived=False)` and add the identical `apply_archive_window(... date_field="created_at", company_id=company.id ...)` line before its `return qs`.

In `backend/apps/voyages_consignment/config_api/views.py`, add `from apps.system_config.selectors.archiving import wants_archived` and pass `include_archived=wants_archived(request)` into the `selectors.list_parcels(...)` and `selectors.list_baggage(...)` calls in their list views. (Grep the file for `selectors.list_parcels(` and `selectors.list_baggage(` to find the two `get` call sites.)

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_archiving_wiring.py -q`
Expected: PASS (2).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_consignment/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): window parcels + baggage lists on created_at"
```

---

## Task 6: Window the treasury transactions selector (Trésorerie) on `transaction_date`

**Files:**
- Modify: `backend/apps/treasury/selectors/selectors.py` (`list_transactions`)
- Modify: `backend/apps/treasury/views.py` (`TransactionListView.get`)
- Test: `backend/apps/treasury/test_archiving_wiring.py`

**Interfaces:**
- Consumes: `apply_archive_window`, `wants_archived` (Task 1).
- Produces: `list_transactions(company_id, *, ..., include_archived=False)` windowed on `transaction_date`.

- [ ] **Step 1: Write the failing spy test**

```python
# backend/apps/treasury/test_archiving_wiring.py
import pytest
from apps.system_config.services import create_company
from apps.treasury.selectors import selectors


@pytest.mark.django_db
def test_list_transactions_uses_transaction_date(monkeypatch):
    company, _ = create_company(name="TxA", admin_email="txa@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.treasury.selectors.selectors.apply_archive_window", fake)
    selectors.list_transactions(company.id, include_archived=False)
    assert calls == [{"date_field": "transaction_date", "company_id": company.id, "include_archived": False}]
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/test_archiving_wiring.py -q`
Expected: FAIL — unexpected keyword `include_archived`.

- [ ] **Step 3: Implement**

In `backend/apps/treasury/selectors/selectors.py`, add at module top:

```python
from apps.system_config.selectors.archiving import apply_archive_window
```

Change `list_transactions` signature to add `include_archived=False` as the last keyword-only argument (after `agency_scope=None`), and immediately before `return qs` add:

```python
    qs = apply_archive_window(qs, date_field="transaction_date", company_id=company_id,
                              include_archived=include_archived)
```

In `backend/apps/treasury/views.py`, add `from apps.system_config.selectors.archiving import wants_archived` and pass `include_archived=wants_archived(request)` into the `selectors.list_transactions(...)` call in `TransactionListView.get`.

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/test_archiving_wiring.py -q`
Expected: PASS (1).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): window treasury transactions list on transaction_date"
```

---

## Task 7: Reporting-exempt guard (invariant I3)

**Files:**
- Test: `backend/apps/reporting/tests/test_archiving_exempt.py`

**Interfaces:**
- Consumes: `set_archive_window_days` (Task 2); `apps.reporting.registry.REPORTS["recette"]["build"]`; treasury services.

- [ ] **Step 1: Write the test (this guards that reports ignore the window)**

```python
# backend/apps/reporting/tests/test_archiving_exempt.py
import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.system_config.services.archiving import set_archive_window_days
from apps.treasury.services.services import create_cash_register, open_session, create_transaction
from apps.treasury.models import Transaction
from apps.reporting.registry import REPORTS


@pytest.mark.django_db
def test_recette_report_counts_out_of_window_transactions():
    company, _ = create_company(name="RepCo", admin_email="repco@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="repco@x.com")
    set_archive_window_days(company.id, 1)  # aggressive 1-day window
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    t = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                           category=Transaction.Category.TICKET_SALES,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal("5000"), payment_mode=Transaction.PaymentMode.CASH,
                           created_by=admin)
    Transaction.objects.filter(id=t.id).update(transaction_date=timezone.now() - timedelta(days=365))
    result = REPORTS["recette"]["build"](company, {"date_from": None, "date_to": None})
    assert result.totals["total"] == Decimal("5000")  # counted despite being far outside the 1-day window
```

- [ ] **Step 2: Run to verify it passes immediately**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_archiving_exempt.py -q`
Expected: PASS. (This is a regression guard, not RED→GREEN: reporting never calls the helper, so it must already count the row. If it FAILS, a selector change leaked into reporting — investigate before proceeding.)

- [ ] **Step 3: Commit**

```bash
git add backend/apps/reporting/tests/test_archiving_exempt.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "test(archiving): guard that reporting ignores the window (I3)"
```

---

## Task 8: Administration "Archivage des données" screen

**Files:**
- Create: `angular/src/_api/pages/admin/archiving/archiving.component.ts`
- Create: `angular/src/_api/pages/admin/archiving/archiving.component.html`
- Create: `angular/src/_api/services/system/archiving.service.ts`
- Modify: `angular/src/_api/config/api.config.ts` (add `archiving` endpoint)
- Modify: the admin feature routes file that defines `adminInstAudit` (add an `adminInstArchiving` route pointing to the new component)
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (add the menu item after "Journal d'audit")
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `GET/PUT /api/v1/system/archiving/` (Task 2). The global `apiUnwrapInterceptor` unwraps `{success,data}` → `data`; this endpoint returns a bare object, so the service receives `{archive_window_days}` directly — do NOT add a `.data` map.

- [ ] **Step 1: Add the API endpoint constant**

In `angular/src/_api/config/api.config.ts`, locate the system base (the `SYS`/`/system/` group) and add:

```typescript
  archiving: `${SYS}/archiving/`,
```

(If the base const is named differently, use the same one the other `/system/` routes use.)

- [ ] **Step 2: Create the service**

```typescript
// angular/src/_api/services/system/archiving.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class ArchivingService {
  private http = inject(HttpClient);
  get(): Observable<{ archive_window_days: number }> {
    return this.http.get<{ archive_window_days: number }>(API.archiving);
  }
  set(days: number): Observable<{ archive_window_days: number }> {
    return this.http.put<{ archive_window_days: number }>(API.archiving, { archive_window_days: days });
  }
}
```

- [ ] **Step 3: Create the component (mirror the voyages-config settings component pattern)**

```typescript
// angular/src/_api/pages/admin/archiving/archiving.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ArchivingService } from '../../../services/system/archiving.service';

@Component({
  selector: 'app-admin-archiving',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './archiving.component.html',
})
export class ArchivingComponent implements OnInit {
  private fb = inject(FormBuilder);
  private svc = inject(ArchivingService);
  loading = true; saving = false; okMsg = ''; errorMsg = '';
  form = this.fb.group({ archive_window_days: [0] });

  ngOnInit() {
    this.svc.get().subscribe({
      next: (r) => { this.form.patchValue({ archive_window_days: r.archive_window_days }); this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  save() {
    this.okMsg = ''; this.errorMsg = '';
    const n = Number(this.form.value.archive_window_days);
    if (!Number.isInteger(n) || n < 0) { this.errorMsg = 'Valeur invalide'; return; }
    this.saving = true;
    this.svc.set(n).subscribe({
      next: () => { this.saving = false; this.okMsg = 'OK'; },
      error: (e) => { this.saving = false; this.errorMsg = e?.error?.detail || 'Erreur'; },
    });
  }
}
```

```html
<!-- angular/src/_api/pages/admin/archiving/archiving.component.html -->
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title">
    <h4>{{ 'admin.archiving.title' | transloco }}</h4>
    <h6>{{ 'admin.archiving.subtitle' | transloco }}</h6>
  </div></div>
</div>
<div class="card"><div class="card-body">
  @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
  @else {
    <form [formGroup]="form" (ngSubmit)="save()">
      @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
      @if (okMsg) { <div class="alert alert-success py-2">{{ 'shared.actions.saved' | transloco }}</div> }
      <p class="text-muted">{{ 'admin.archiving.info' | transloco }}</p>
      <div class="col-md-4 mb-3">
        <label class="form-label">{{ 'admin.archiving.f_days' | transloco }}</label>
        <input formControlName="archive_window_days" type="number" min="0" class="form-control" />
        <small class="text-muted">{{ 'admin.archiving.f_days_hint' | transloco }}</small>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="saving">
        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>{{ 'shared.actions.save' | transloco }}
      </button>
    </form>
  }
</div></div>
```

- [ ] **Step 4: Wire the route**

In the admin feature routes file that defines the audit route (grep `angular/src` for `adminInstAudit` to find it), add a sibling route whose path mirrors the audit entry, lazy-loading `ArchivingComponent`, and export its path as `routes.adminInstArchiving` in the routes/paths file where `adminInstAudit` is defined.

- [ ] **Step 5: Add the sidebar menu item**

In `angular/src/app/core/service/sidebar/sidebar.service.ts`, immediately **after** the "Journal d'audit" entry (the block with `route: routes.adminInstAudit`), add:

```typescript
        {
          menuValue: 'Archivage des données',
          hasSubRoute: false,
          showSubRoute: false,
          icon2: 'archive',
          route: routes.adminInstArchiving,
          base: 'archiving',
          role: 'institution_admin',
          subMenus: [],
        },
```

- [ ] **Step 6: Add i18n keys to all four locales**

Add to `angular/public/i18n/fr.json` (and the English/Spanish/Portuguese equivalents in `en.json`, `es.json`, `pt.json`) under an `admin.archiving` object:

```json
"admin": {
  "archiving": {
    "title": "Archivage des données",
    "subtitle": "Fenêtre d'affichage des données opérationnelles",
    "info": "Les listes opérationnelles n'affichent que les données des N derniers jours. Les données plus anciennes sont masquées (jamais supprimées) et restent accessibles via « Afficher les archives » et les rapports.",
    "f_days": "Afficher les données des N derniers jours",
    "f_days_hint": "0 = tout afficher (archivage désactivé)"
  }
}
```

(English: "Data archiving" / "Display window for operational data" / "Operational lists only show data from the last N days. Older data is hidden (never deleted) and remains reachable via \"Show archives\" and reports." / "Show data from the last N days" / "0 = show everything (archiving disabled)". Provide natural Spanish and Portuguese translations. If an `admin` object already exists in a locale file, merge the `archiving` key into it rather than duplicating `admin`.)

- [ ] **Step 7: Verify the build**

Run: `cd angular && npx ng build --configuration development`
Expected: build succeeds with no errors. (No Angular unit-test harness is configured in this repo; build success is the gate, consistent with prior frontend work.)

- [ ] **Step 8: Commit**

```bash
git add angular/src/_api/pages/admin/archiving/ angular/src/_api/services/system/archiving.service.ts angular/src/_api/config/api.config.ts angular/src/app/core/service/sidebar/sidebar.service.ts angular/public/i18n/
# plus the admin routes file(s) touched in Step 4
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): Administration screen for the data-archiving window"
```

---

## Task 9: Per-list "Afficher les archives" toggles

**Files:**
- Modify the five operational list components and their list services:
  - Billetterie "Tout Afficher" + Réservations list(s) (the components calling the bookings list endpoint)
  - Retours à traiter list component (open-returns)
  - Voyages list: `angular/src/_api/pages/voyages/list/voyages-list.component.{ts,html}`
  - Colis list component (parcels)
  - Bagages list component (baggage)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (one toggle label)

**Interfaces:**
- Consumes: the six windowed list endpoints (Tasks 3–6). Sending `include_archived=1` reveals archived rows; omitting it (or `0`) keeps the windowed view (I6).

**Decision (flagged for review):** the toggle is rendered on every affected list unconditionally and simply sends `include_archived=1` when on. Spec §7 said hide it when the window is disabled; doing that would require each list to fetch the window first. Rendering it always is harmless when the window is `0` (the backend ignores the flag) and avoids threading the setting into five components. If you want the spec's hide-when-disabled behavior, that is a follow-up.

- [ ] **Step 1: Locate the five list components**

Run (from repo root):
```bash
rg -rln "list_parcels|vcgBaggage|openReturns|open-returns|vbBookings|vbReservations|list_transactions" angular/src/_api/pages
rg -rln "include_archived|showArchived" angular/src/_api  # should be empty before this task
```
Identify each list component's `.ts` (where it builds the query params object for its list request) and `.html` (toolbar area).

- [ ] **Step 2: Add the toggle to each list (repeat per component)**

In each list component `.ts`, add a field and include the flag in the params the list request already sends:

```typescript
showArchived = false;
// where the component assembles query params for the list call, add:
//   ...(this.showArchived ? { include_archived: 1 } : {})
// then call the existing reload method when the toggle changes:
toggleArchived() { this.showArchived = !this.showArchived; this.load(); }  // use the component's existing reload method name
```

In each list component `.html`, add to the toolbar:

```html
<div class="form-check form-switch ms-2">
  <input class="form-check-input" type="checkbox" id="arch-{{ /* unique per list */ '' }}"
         [(ngModel)]="showArchived" (change)="toggleArchived()" />
  <label class="form-check-label" for="arch-...">{{ 'shared.archiving.show_archived' | transloco }}</label>
</div>
```

(Ensure `FormsModule` is imported in each standalone component for `[(ngModel)]`; if a component builds params via `HttpParams`, append `include_archived` conditionally in the same place it appends its other filters.)

- [ ] **Step 3: Add the toggle label to all four locales**

Add under a `shared.archiving` key in `fr/en/es/pt`:
- fr: `"show_archived": "Afficher les archives"`
- en: `"show_archived": "Show archives"`
- es: `"show_archived": "Mostrar archivadas"`
- pt: `"show_archived": "Mostrar arquivadas"`

- [ ] **Step 4: Verify the build**

Run: `cd angular && npx ng build --configuration development`
Expected: build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages angular/public/i18n/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(archiving): per-list Afficher les archives toggles"
```

---

## Final verification (after all tasks)

Run the full set of new/affected backend tests together:

```bash
cd backend && ../env/bin/python -m pytest \
  apps/system_config/tests/test_archiving_helper.py \
  apps/system_config/tests/test_archiving_endpoint.py \
  apps/voyages_booking/test_archiving_wiring.py \
  apps/voyages_trips/test_archiving_wiring.py \
  apps/voyages_consignment/test_archiving_wiring.py \
  apps/treasury/test_archiving_wiring.py \
  apps/reporting/tests/test_archiving_exempt.py -q
```

Expected: all pass. Then `../env/bin/python manage.py makemigrations --check --dry-run` → "No changes detected" (this feature adds no model fields — the setting is a `Parameter` row, not a schema change). Then `cd angular && npx ng build --configuration development` → success.
