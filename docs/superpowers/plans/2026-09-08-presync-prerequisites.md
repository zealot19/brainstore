# Pre-Sync Prerequisites Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline) or superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing single-instance codebase safe to run as many independent agency instances that later synchronise with an online master — by enforcing the invariants that hub-and-spoke sync depends on, *before* any sync code exists.

**Architecture (agreed):** Hub-and-spoke, master-authoritative. Each agency runs a full stack (Angular + Django + Postgres) and operates offline; an online master consolidates. Sync (a later plan) is application-level with a **ChangeLog/outbox (CDC)**. This plan only closes the prerequisites; it adds **no** sync machinery.

**Tech Stack:** Django 5.1 + DRF, Postgres (agency + master), pytest.

**Design context / decisions this plan encodes:**
- Every **syncable** row must have a **UUID PK + `updated_at` + soft-delete** (so changes are collision-free, delta-detectable, and deletions propagate as tombstones). `BaseModel` and `User` already satisfy this; the stragglers don't.
- **Change capture must be reliable:** no hard deletes on syncable tables; bulk `QuerySet.update()` on syncable tables must bump `updated_at`.
- **Human numbers** (BOOK/TKT/receipts) must be **agency-namespaced** so they don't collide across instances.
- **Every departure is owned by exactly one origin agency** (`Trip.origin → ServicePoint.agency`), which must be **non-null**.
- **Only the origin agency may sell/write a departure's seats** (walk-in); round trips are **agency-to-agency**, the return assigned **only at the destination agency** (open-return).
- **Owning agency is stamped** on transactional rows so the master knows ownership.

## Global Constraints
- Do NOT build any sync/ChangeLog/endpoint here — prerequisites only.
- "Syncable" tables = domain data that must converge across instances. **Exclude instance-local tables**: `UserSession`, `LoginAttempt`, `PasswordResetToken`, `WhatsAppSession`, `sync_scig_sage.SyncLog`, `sync_scig_sage.StockLevel`, and the entire **legacy dead stack** (`voyage`, `ticketing`, `transport_config`, `parcel`). Live domain data is the modern `voyages_*` + `treasury` + `hr` + `fleet` + `admin_rbac` + `authentication` (User/UserAgency) + `system_config` apps.
- PK-type changes are heavy migrations — do them here, early, before any agency has diverging data.
- Backend tests via `pytest` (pytest.ini). Full suite stays green after every task.
- French copy for user-facing errors. Commits: author shimi; no Claude co-author trailer. Branch: `feat/presync`.
- Reuse the `booking_world` fixture pattern from `apps/online_booking/tests/conftest.py` where a full scenario is needed.

---

### Task 1: RBAC link tables → `BaseModel` (UUID)

**Files:**
- Modify: `apps/admin_rbac/models/role.py` (`RolePermission`), `apps/admin_rbac/models/user_role.py` (`UserRole`, `UserProfile`), `apps/admin_rbac/models/profile.py` (`ProfileRole`)
- Migration: `makemigrations admin_rbac`
- Test: `apps/admin_rbac/tests/test_uuid_pk.py`

**Interfaces:**
- Produces: all four link tables have UUID PK + `updated_at` + soft-delete. Existing behaviour (role→permission, user→role, profile→role, user→profile links) unchanged.

- [ ] **Step 1: Write the failing test**
```python
# apps/admin_rbac/tests/test_uuid_pk.py
import uuid, pytest
from apps.admin_rbac.models import RolePermission, UserRole, ProfileRole
pytestmark = pytest.mark.django_db

def test_rbac_link_tables_have_uuid_pk():
    for M in (RolePermission, UserRole, ProfileRole):
        f = M._meta.pk
        assert f.get_internal_type() == "UUIDField", f"{M.__name__} PK not UUID"
```

- [ ] **Step 2: Run to verify it fails**
Run: `cd backend && python -m pytest apps/admin_rbac/tests/test_uuid_pk.py -q --reuse-db`
Expected: FAIL (integer PK).

- [ ] **Step 3: Convert each model to inherit `BaseModel`**
For each of `RolePermission`, `UserRole`, `UserProfile`, `ProfileRole`: change the base from `models.Model` to `BaseModel` (`from apps.core.models import BaseModel`). Remove any now-duplicated `created_at`/`updated_at`/`id` fields if present. Keep existing FKs and `unique_together`/`Meta`. (These are **leaf** tables — nothing FKs *to* them — so the PK change is self-contained.)

- [ ] **Step 4: Make migration (recreate PK as UUID)**
Run: `cd backend && python manage.py makemigrations admin_rbac`
Because these are leaf link tables, the simplest safe migration is **drop + recreate** (they are rebuilt from roles/permissions, which are unchanged). If `makemigrations` produces an `AlterField` on the PK that the DB rejects, replace it with `migrations.DeleteModel` + `CreateModel` in the generated file (data is reconstructable via re-seeding/re-assigning roles). Document the choice in the migration docstring.

- [ ] **Step 5: Migrate + run RBAC suite**
Run: `cd backend && python manage.py migrate admin_rbac && python -m pytest apps/admin_rbac -q --reuse-db`
Expected: PASS (the new test + existing RBAC/permission tests).

- [ ] **Step 6: Commit**
```bash
git add backend/apps/admin_rbac/
git commit -m "refactor(rbac): UUID PK on link tables (sync prerequisite)"
```

---

### Task 2: `UserAgency` + implicit M2M through-tables → UUID

**Files:**
- Modify: `apps/authentication/models.py` (`UserAgency`; verify `User.agencies` uses `through=UserAgency`)
- Modify: `apps/fleet/models/vehicle.py` (`tags` M2M), `apps/fleet/models/tag.py` (new `VehicleTag` through) — and `apps/fleet/models/contract.py` (`included_services` M2M) → new explicit through model
- Migration: `makemigrations authentication fleet`
- Test: `apps/authentication/tests/test_uuid_pk.py`

**Interfaces:**
- Produces: `UserAgency` UUID; `User.agencies` explicit through with UUID; `Vehicle.tags` and `Contract.included_services` use explicit UUID through-models.

- [ ] **Step 1: Write the failing test**
```python
# apps/authentication/tests/test_uuid_pk.py
import pytest
from apps.authentication.models import UserAgency
pytestmark = pytest.mark.django_db

def test_useragency_uuid_pk():
    assert UserAgency._meta.pk.get_internal_type() == "UUIDField"
```

- [ ] **Step 2: Run to verify it fails** — `python -m pytest apps/authentication/tests/test_uuid_pk.py -q --reuse-db` → FAIL.

- [ ] **Step 3: Convert `UserAgency` to `BaseModel`**; confirm `User.agencies = ManyToManyField("system_config.Agency", through="authentication.UserAgency")` (if it's implicit, add `through=UserAgency`). Remove duplicate timestamp fields.

- [ ] **Step 4: Add explicit UUID through-models for the implicit M2M**
In `fleet`: create `VehicleTag(BaseModel)` with FKs `vehicle`, `tag` (+ `unique_together`) and set `Vehicle.tags = ManyToManyField("fleet.Tag", through="fleet.VehicleTag", ...)`. Same for `Contract.included_services` → `ContractService(BaseModel)`.

- [ ] **Step 5: Migrate + run tests**
Run: `cd backend && python manage.py makemigrations authentication fleet && python manage.py migrate && python -m pytest apps/authentication apps/fleet -q --reuse-db`
Expected: PASS. (For the M2M conversion migration, Django needs the through table recreated; if data exists, add a data migration copying the auto through rows — in dev the tables are small/rebuildable.)

- [ ] **Step 6: Commit**
```bash
git add backend/apps/authentication backend/apps/fleet
git commit -m "refactor(auth,fleet): UUID PK on UserAgency + explicit M2M through models"
```

---

### Task 3: Remaining config/HR/fleet line & log tables → `BaseModel` (UUID)

**Files:**
- Modify: `apps/voyages_config/models/expense.py` (`ExpenseScheduleLine`), `apps/hr/models/leave_request.py` (`LeaveBalance`), `apps/fleet/models/odometer_log.py` (`OdometerLog`)
- Decision: `apps/core/models/audit_log.py` (`AuditLog`) — convert **only if** audit is consolidated to master; otherwise leave instance-local (default: **leave as-is**, exclude from sync).
- Migration + Test: `apps/voyages_config/tests/test_uuid_pk.py`

**Interfaces:**
- Produces: `ExpenseScheduleLine`, `LeaveBalance`, `OdometerLog` UUID + `updated_at` + soft-delete.

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_config/tests/test_uuid_pk.py
import pytest
from apps.voyages_config.models import ExpenseScheduleLine
from apps.hr.models import LeaveBalance
from apps.fleet.models import OdometerLog
pytestmark = pytest.mark.django_db

def test_line_and_log_tables_uuid_pk():
    for M in (ExpenseScheduleLine, LeaveBalance, OdometerLog):
        assert M._meta.pk.get_internal_type() == "UUIDField", M.__name__
```

- [ ] **Step 2: Run to verify it fails** → FAIL.
- [ ] **Step 3: Convert each to `BaseModel`** (remove duplicate timestamps; keep FKs/Meta). `ExpenseScheduleLine` is FK'd by its parent schedule — verify the parent's `related_name` still resolves after the PK change (it references by FK, unaffected).
- [ ] **Step 4: Migrate + tests** — `makemigrations voyages_config hr fleet && migrate && python -m pytest apps/voyages_config apps/hr apps/fleet -q --reuse-db` → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_config backend/apps/hr backend/apps/fleet
git commit -m "refactor: UUID PK on schedule-line/leave/odometer tables (sync prerequisite)"
```

---

### Task 4: Eliminate hard deletes on syncable tables (soft-delete only)

**Files:**
- Modify: `apps/admin_rbac/services/profile_services.py`, `user_role_services.py`, `role_services.py`
- Modify: `apps/users/services/user_services.py` (`UserAgency` delete)
- Modify: `apps/voyages_config/config_api/serializers.py` (`schedule.lines.all().delete()`), `apps/voyages_config/config_api/views.py` (`plan.seats.all().delete()`)
- Modify: `apps/voyages_trips/services/assignment.py`, `transbordement.py`, `trip_services.py` (`trip.seats...delete()`)
- Test: `apps/voyages_trips/test_seat_soft_delete.py` + assertions in RBAC tests

**Interfaces:**
- Produces: a `soft_delete_qs(qs, user=None)` helper in `apps/core/` that sets `is_deleted=True, updated_at=now` (and `updated_by`), used in place of hard `.delete()` on syncable tables. Seat regeneration soft-deletes old seats (tombstones) then creates new ones.

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_trips/test_seat_soft_delete.py
import pytest
from apps.voyages_trips.models import TripSeat
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.voyages_trips.services.assignment import materialise_seats
pytestmark = pytest.mark.django_db

def test_reseating_soft_deletes_old_seats():
    company, admin, trip = _setup()
    first = list(TripSeat.objects.filter(trip=trip).values_list("id", flat=True))
    materialise_seats(trip)  # regenerate
    # old seats tombstoned, not hard-deleted
    assert TripSeat.all_objects.filter(id__in=first, is_deleted=True).count() == len(first)
```
(Use the model's soft-delete manager name — verify it's `all_objects`/`objects` in `SoftDeleteMixin`; adjust the query accordingly.)

- [ ] **Step 2: Run to verify it fails** → FAIL (rows hard-deleted / manager name).
- [ ] **Step 3: Add the helper** in `apps/core/services/` (`soft_delete_qs`) and replace each hard `.delete()` on a syncable table with it. For seat regeneration, soft-delete old + create new (new UUIDs). Leave instance-local deletes (sessions etc.) alone.
- [ ] **Step 4: Run to verify pass** + affected suites (`apps/voyages_trips apps/admin_rbac apps/voyages_config`) → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps/core backend/apps/admin_rbac backend/apps/users backend/apps/voyages_config backend/apps/voyages_trips
git commit -m "refactor: soft-delete instead of hard delete on syncable tables"
```

---

### Task 5: Make bulk `QuerySet.update()` sync-safe

**Files:**
- Modify the syncable-table `.update()` sites: `apps/voyages_trips/views.py:277` (seat status), `apps/online_booking/services/services.py` (`expire_stale_requests`), `apps/system_config/services/company_services.py` (subscription cancel), `apps/hr/services/employee_services.py` (contracts), `apps/admin_rbac/services/profile_services.py` (default flag)
- Test: `apps/voyages_trips/test_seat_update_bumps_updated_at.py`

**Interfaces:**
- Produces: every `.update()` on a syncable table also sets `updated_at=timezone.now()` (so a delta/CDC watermark sees it). Leave instance-local `.update()` (UserSession, WhatsAppSession) alone.

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_trips/test_seat_update_bumps_updated_at.py
import pytest
from django.utils import timezone
from datetime import timedelta
from apps.voyages_trips.models import TripSeat
from apps.voyages_booking.tests_integration_treasury import _setup
pytestmark = pytest.mark.django_db

def test_bulk_seat_status_update_bumps_updated_at():
    company, admin, trip = _setup()
    old = timezone.now() - timedelta(days=1)
    TripSeat.objects.filter(trip=trip).update(updated_at=old)
    # the app's bulk status update path must bump updated_at:
    from apps.voyages_trips.services.assignment import set_seats_status  # create if missing
    set_seats_status(trip, list(TripSeat.objects.filter(trip=trip)), "blocked", user=admin)
    assert TripSeat.objects.filter(trip=trip, updated_at__gt=old).count() == TripSeat.objects.filter(trip=trip).count()
```
(If the bulk status change lives inline in the view, extract it into a service `set_seats_status(...)` that the test and view both call.)

- [ ] **Step 2: Run to verify it fails** → FAIL.
- [ ] **Step 3: Fix each syncable `.update()`** to include `updated_at=timezone.now()`; extract the seat-status view logic into a service that does so.
- [ ] **Step 4: Run to verify pass** + `python -m pytest apps/voyages_trips apps/online_booking apps/hr -q --reuse-db` → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps
git commit -m "refactor: bulk updates on syncable tables bump updated_at (CDC-ready)"
```

---

### Task 6: Per-agency human numbering

**Files:**
- Modify: `apps/core/services/sequence_service.py` (`next_number`)
- Modify callers that mint BOOK/TKT/receipt numbers to pass the acting agency (`voyages_booking/services/booking_services.py` `_booking_reference`/`_ticket_number`, treasury receipts)
- Test: `apps/core/tests/test_sequence_per_agency.py`

**Interfaces:**
- Produces: `next_number(code, *, agency=None) -> str`. When `agency` is given, the agency's short code is injected into the prefix (e.g., `DLA/BOOK/2026/00001`), so numbers from different agencies never collide. The counter stays per-instance; the **prefix** provides global uniqueness.

- [ ] **Step 1: Write the failing test**
```python
# apps/core/tests/test_sequence_per_agency.py
import pytest
from apps.core.services.sequence_service import next_number
from apps.core.models import Sequence
pytestmark = pytest.mark.django_db

class _Ag:  # stand-in with a .code
    def __init__(self, code): self.code = code

def test_numbers_are_agency_namespaced():
    Sequence.objects.create(code="BOOK", name="Resa", prefix="BOOK", padding=5)
    a = next_number("BOOK", agency=_Ag("DLA"))
    b = next_number("BOOK", agency=_Ag("YDE"))
    assert "DLA" in a and "YDE" in b
    assert a.split("/")[-1] != b.split("/")[-1] or a != b  # distinct series identity
```

- [ ] **Step 2: Run to verify it fails** → FAIL (no `agency` kwarg / no code in output).
- [ ] **Step 3: Implement** `agency` kwarg: prepend `agency.code` to the parts list in `next_number`. Update booking/ticket/receipt callers to pass the acting agency (from the actor's `default_agency` or the departure's origin agency).
- [ ] **Step 4: Run to verify pass** + `python -m pytest apps/core apps/voyages_booking -q --reuse-db` → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps/core backend/apps/voyages_booking backend/apps/treasury
git commit -m "feat(core): agency-namespaced sequence numbers (sync prerequisite)"
```

---

### Task 7: Non-null departure ownership

**Files:**
- Modify: `apps/voyages_config/models/network.py` (`ServicePoint.clean` — require `agency` when `is_station=True`)
- Optional: data backfill management command for existing station service points without an agency
- Test: `apps/voyages_config/test_station_requires_agency.py`

**Interfaces:**
- Produces: a station `ServicePoint` (`is_station=True`) must have an `agency`; `Trip.origin.agency` is therefore always resolvable for a real departure. (Keep the field nullable at the DB level for non-station points, but enforce via `clean()`/serializer validation.)

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_config/test_station_requires_agency.py
import pytest
from django.core.exceptions import ValidationError
from apps.voyages_config.models import Town, ServicePoint
from apps.system_config.services import create_company
pytestmark = pytest.mark.django_db

def test_station_without_agency_is_invalid():
    company, _ = create_company(name="Ag", admin_email="ag@x.com", admin_first_name="A", admin_last_name="B")
    town = Town.objects.create(company=company, name="Douala")
    sp = ServicePoint(company=company, town=town, code="DLA", name="Gare", is_station=True, agency=None)
    with pytest.raises(ValidationError):
        sp.full_clean()
```

- [ ] **Step 2: Run to verify it fails** → FAIL.
- [ ] **Step 3: Add `clean()`** raising `ValidationError({"agency": _("Une gare/agence doit être rattachée à une agence.")})` when `is_station and not agency_id`; call it from the serializer. Add a backfill command for existing stations.
- [ ] **Step 4: Run to verify pass** + `python -m pytest apps/voyages_config -q --reuse-db` → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_config
git commit -m "feat(config): stations must belong to an agency (departure ownership)"
```

---

### Task 8: Stamp owning agency on transactional rows

**Files:**
- Modify: `apps/voyages_booking/models/booking.py` (`Booking.agency`), and set it in `create_booking`
- Modify: `apps/voyages_consignment/models/*` (Parcel/Baggage `agency`), `apps/treasury/models/transaction.py` (`Transaction.agency`) — set on creation
- Migration + Test: `apps/voyages_booking/test_booking_agency_stamp.py`

**Interfaces:**
- Produces: `Booking.agency` (+ Parcel/Transaction) = the owning agency, set at creation from the actor's agency / departure origin. Nullable at DB level (legacy rows) but always set by services going forward.

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_booking/test_booking_agency_stamp.py
import pytest
from apps.voyages_booking.tests_integration_treasury import _setup, _book
from apps.treasury.services import create_cash_register, open_session
pytestmark = pytest.mark.django_db

def test_booking_records_owning_agency():
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = _book(company, admin, trip)
    assert b.agency_id is not None
    assert b.agency_id == trip.origin.agency_id
```
(The `_setup` fixture must give the trip's origin an agency — extend it if needed, consistent with Task 7.)

- [ ] **Step 2: Run to verify it fails** → FAIL.
- [ ] **Step 3: Add `agency` FK** to `Booking` (and Parcel/Transaction); in `create_booking` set `agency=outbound_trip.origin.agency`. Migrate.
- [ ] **Step 4: Run to verify pass** + `python -m pytest apps/voyages_booking apps/treasury apps/voyages_consignment -q --reuse-db` → PASS.
- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_booking backend/apps/treasury backend/apps/voyages_consignment
git commit -m "feat: stamp owning agency on transactional rows (sync ownership)"
```

---

### Task 9: Enforce "only origin agency sells" + round-trip agency-to-agency

**Files:**
- Modify: `apps/voyages_booking/services/booking_services.py` (`create_booking`, `assign_return`)
- Test: `apps/voyages_booking/test_agency_sell_rules.py`

**Interfaces:**
- Produces: `create_booking` rejects (`ApplicationError`) when the acting user's agency ≠ `outbound_trip.origin.agency`; round-trip requires both endpoints be agency stations and uses open-return; `assign_return` rejects when the acting user's agency ≠ `return_trip.origin.agency`. Online/system actor (`user=None`) is exempt (handled by the SP4 relay later).

- [ ] **Step 1: Write the failing test**
```python
# apps/voyages_booking/test_agency_sell_rules.py
import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.services.booking_services import create_booking
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.treasury.services import create_cash_register, open_session
pytestmark = pytest.mark.django_db

def test_agent_from_other_agency_cannot_sell(other_agency_user_factory):
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    stranger = other_agency_user_factory(company)  # user whose agency != trip.origin.agency
    seat = trip.seats.order_by("column").first()
    with pytest.raises(ApplicationError):
        create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "X", "phone": "6"},
                       items=[{"passenger": {"name": "X", "phone": "6"},
                               "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
                       payment_method="cash", user=stranger)
```
(Add `other_agency_user_factory` to the test or a conftest: a user with a `default_agency` different from `trip.origin.agency`.)

- [ ] **Step 2: Run to verify it fails** → FAIL (no enforcement).
- [ ] **Step 3: Implement** the actor-agency check in `create_booking` (derive the acting agency from `user.default_agency`; skip when `user is None`), the round-trip endpoint check, and the `assign_return` destination-agency check. Clear French `ApplicationError` messages.
- [ ] **Step 4: Run to verify pass** + full `python -m pytest apps/voyages_booking -q --reuse-db` → PASS (existing booking tests may need a same-agency actor — update fixtures so `_setup`'s admin belongs to the trip's origin agency).
- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_booking
git commit -m "feat(booking): enforce origin-agency selling + agency-to-agency round trips"
```

---

### Task 10: Full-suite green + prerequisites checklist doc

**Files:**
- Create: `docs/sync-prerequisites-status.md`
- Verification otherwise.

- [ ] **Step 1: `makemigrations --check`** clean.
- [ ] **Step 2: Full suite** — `cd backend && python -m pytest -q --reuse-db` → all pass.
- [ ] **Step 3: Write `docs/sync-prerequisites-status.md`** — a table of the 9 conditions from the audit, each marked DONE with the enforcing task/commit, plus the deferred ones (#8 online authority → SP4; #9 version parity → SP5; AuditLog consolidation → optional).
- [ ] **Step 4: Commit**
```bash
git add docs/sync-prerequisites-status.md
git commit -m "docs: sync prerequisites status"
```

## Final Verification
- [ ] All syncable tables: UUID PK + `updated_at` + soft-delete.
- [ ] No hard deletes / no `updated_at`-bypassing updates on syncable tables.
- [ ] Numbers agency-namespaced; stations require an agency; transactional rows stamped with owning agency; origin-agency selling enforced; round trips agency-to-agency.
- [ ] `pytest -q` green; `makemigrations --check` clean.

## Self-Review Notes
- Tasks 1–3 (UUID) are heavy migrations → done first, before divergence.
- Tasks 4–5 make change-capture reliable for the CDC layer the sync plan will add.
- Tasks 6–9 enforce the domain invariants (numbers, ownership, selling rules).
- **Assumptions to verify in-task:** the `SoftDeleteMixin` manager name (`objects` vs `all_objects`); whether `User.agencies` is already `through=UserAgency`; whether `_setup`/`booking_world` fixtures give the origin a non-null agency (extend them for Tasks 7–9); the exact `Transaction` model path for agency stamping.
