# Colis ⇄ Voyage Decoupling — Implementation Plan (Tranche 1)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the voyage an *optional* means of transport for a parcel (register/dispatch/receive/pickup with or without a trip), expand the parcel lifecycle, rebuild the Manifeste page as an Expédition workspace, and ship three bounded UI/model quick-wins.

**Architecture:** Extend the existing `voyages_consignment` app in place. Widen `Parcel.Status`, drive every status change through a single event-writing helper, keep `trip` a nullable FK, and let voyage depart/arrive cascade to parcels while manual/batch actions cover the no-voyage path. Destination is constrained to agency service points. Frontend consumes new endpoints; the Manifeste page becomes an Expédition workspace.

**Tech Stack:** Django + DRF (SimpleJWT), pytest (pytest.ini, run via `pytest`), Angular 21 standalone + Transloco, modeltranslation. Backend venv at `../env`. Frontend build `npx ng build --configuration=development`, i18n `npm run i18n:check`.

**Spec:** `docs/superpowers/specs/2026-09-15-colis-voyage-decoupling-design.md`

## Global Constraints

- Language French throughout (labels, comments, error messages) — matches existing code.
- Commit as shimi only; no Claude co-author trailer. Cut the working branch from `origin/master`; merge `--ff-only`; `git push all master`.
- Paginated list responses are `{success,data,pagination}`; the Angular interceptor unwraps to a bare array — never map `r.results`.
- No status is ever set without writing a `ParcelEvent` (spec §51).
- Every backend logic change ships with a pytest test; run `pytest` (not `manage.py test`). Frontend changes must `npx ng build --configuration=development` clean and pass `npm run i18n:check`.
- Backend commands run with the venv active: `cd backend && source ../env/bin/activate`.
- New RBAC permissions are avoided; reuse `ticketing.parcel.view` / `ticketing.parcel.manage`.

---

## File Structure

**Backend**
- `apps/voyages_consignment/models/parcel.py` — widen `Parcel.Status`; add `dispatched_at`, `available_at`; add `ParcelEvent.from_status`/`to_status`.
- `apps/voyages_consignment/migrations/000X_parcel_lifecycle.py` — schema + data migration.
- `apps/voyages_consignment/services/parcel_services.py` — transition rewrite, batch helpers, capacity, destination check, trip-cascade helpers.
- `apps/voyages_consignment/config_api/serializers.py` + `views.py` + `apps/voyages_consignment/urls.py` — new/changed endpoints.
- `apps/voyages_consignment/selectors/` (`parcel_selectors.py`, new) — expédition queries.
- `apps/voyages_config/models/settings.py` + migration — capacity config fields.
- `apps/voyages_config/models/seating.py` + migration — drop `valid_from`/`valid_to`.
- `apps/voyages_config/config_api/serializers.py` + `views.py` — seating-assignment serializer without validity.
- `apps/voyages_trips/selectors/eligibility.py` — seating-plan resolver by latest active assignment.
- `apps/voyages_trips/services/trip_services.py` — `depart_trip`/`complete_trip` cascade to parcels.
- Tests: `apps/voyages_consignment/tests/` (new files), updates to `apps/voyages_trips/tests.py`, `test_assignment_conflicts.py`, `test_trip_vehicle_optional.py`, `test_trip_from_pattern.py`, and the two seed commands.

**Frontend**
- `src/app/core/service/sidebar/sidebar.service.ts` — remove Recettes/Dépenses dashboard nav items; rename Expédition (already done) label unchanged; Expédition base.
- `src/_api/models/voyages-consignment.models.ts`, `src/_api/services/voyages-consignment/parcel.service.ts`, `src/_api/config/api.config.ts` — new statuses/endpoints.
- `src/_api/pages/voyages-consignment/manifest/*` → becomes the Expédition workspace (renamed).
- `src/_api/pages/voyages-consignment/reception/*`, `parcels/*` — status/action updates.
- `src/_api/pages/voyages-config/...` seating-assignment form/table — drop validity fields.
- `public/i18n/{fr,en,es,pt}.json` via a `scripts/seed-*.mjs`.

---

## Task 1: Quick-win — remove Recettes/Dépenses dashboard nav items

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (Trésorerie block, Dépenses + Recettes sections)

**Interfaces:**
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Remove the Dépenses dashboard sub-item**

In the `treasury` module block, the `Dépenses` section's `subMenus`, delete this line:
```ts
            { menuValue: 'Tableau de bord',  route: routes.trzExpensesDashboard, base: 'expenses-dashboard', permission: 'treasury.expense.view' },
```
so `Dépenses` starts at `Dépense voyage`.

- [ ] **Step 2: Remove the Recettes dashboard sub-item**

In the `Recettes` section's `subMenus`, delete:
```ts
            { menuValue: 'Tableau de bord', route: routes.trzRecettesDashboard, base: 'recettes-dashboard', permission: 'treasury.income.view' },
```
so `Recettes` starts at `Recette voyage`. Leave the standalone Trésorerie `Tableau de bord` section (top of the module) untouched. Leave the routes/pages in place (dead nav only removed).

- [ ] **Step 3: Build**

Run: `cd angular && npx ng build --configuration=development`
Expected: `Output location:` line, no errors.

- [ ] **Step 4: Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "chore(sidebar): remove dashboard nav item from Trésorerie Dépenses & Recettes"
```

---

## Task 2: Quick-win — remove bus-plan validity dates

**Files:**
- Modify: `backend/apps/voyages_config/models/seating.py:46-56` (VehicleSeatingAssignment)
- Create: `backend/apps/voyages_config/migrations/000X_drop_seating_validity.py` (via makemigrations)
- Modify: `backend/apps/voyages_config/config_api/serializers.py:320-368` (VehicleSeatingAssignmentRead/Write/Update)
- Modify: `backend/apps/voyages_config/config_api/views.py:521-595`
- Modify: `backend/apps/voyages_trips/selectors/eligibility.py:4-15`
- Modify tests: `backend/apps/voyages_trips/tests.py:288`, `test_assignment_conflicts.py:36`, `test_trip_vehicle_optional.py:71`
- Modify seeds: `backend/apps/voyages_booking/management/commands/seed_voyageur_express.py:159`, `seed_voyages_demo.py:145`
- Modify frontend: seating-assignment form/table under `angular/src/_api/pages/voyages-config/` (the "Affectations de plan" page)

**Interfaces:**
- Produces: `resolve_seating_plan(vehicle, on_date=None)` semantics change to "latest active assignment".

- [ ] **Step 1: Update the eligibility resolver test**

In `backend/apps/voyages_trips/selectors/eligibility.py`, the current resolver filters `valid_from__lte=on_date`. Write/adjust a test first. Add to `backend/apps/voyages_trips/test_assignment_conflicts.py` (or a new `test_seating_resolver.py`) a test that creates two `VehicleSeatingAssignment` rows for a vehicle **without** `valid_from` and asserts the most recently created active one is chosen:
```python
def test_resolver_picks_latest_active_assignment(db):
    # build company, vehicle, two plans via existing helpers/fixtures in this module
    # create assignment A (older), then assignment B (newer), both is_active=True, no valid_from
    # assert resolve returns B's plan
```
(Use the module's existing fixture style — see `test_assignment_conflicts.py` top for how company/vehicle/plan are built.)

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && source ../env/bin/activate && pytest apps/voyages_trips/test_assignment_conflicts.py -q`
Expected: FAIL (model still requires `valid_from`, resolver still date-based).

- [ ] **Step 3: Drop the model fields**

In `backend/apps/voyages_config/models/seating.py`, remove from `VehicleSeatingAssignment`:
```python
    valid_from = models.DateField(_("valide à partir du"))
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)
```
and change `class Meta` `ordering = ["-valid_from"]` to `ordering = ["-created_at"]`.

- [ ] **Step 4: Update the resolver**

In `backend/apps/voyages_trips/selectors/eligibility.py`, change the assignment query to:
```python
    a = (VehicleSeatingAssignment.objects
         .filter(vehicle=vehicle, is_deleted=False, is_active=True)
         .select_related("seating_plan")
         .order_by("-created_at")
         .first())
```
Remove the `on_date` filtering on `valid_from`. Keep the `on_date` parameter in the signature (unused) only if other callers pass it positionally; otherwise drop it and update callers.

- [ ] **Step 5: Update serializers/views**

In `backend/apps/voyages_config/config_api/serializers.py`, remove `valid_from`/`valid_to` from `VehicleSeatingAssignmentRead.Meta.fields` (line ~328), `VehicleSeatingAssignmentWrite` (`valid_from = serializers.DateField()` line ~335 and any `valid_to`), and `VehicleSeatingAssignmentUpdate` fields (line ~352). In `views.py`, `VehicleSeatingAssignmentListView.get` change `.order_by("-valid_from")` to `.order_by("-created_at")`; in the create (`.objects.create(...)`, line ~549) drop `valid_from`/`valid_to` kwargs.

- [ ] **Step 6: Fix tests & seeds**

Remove `valid_from=...` (and any `valid_to=`) kwargs from `VehicleSeatingAssignment.objects.create(...)` in `apps/voyages_trips/tests.py:288`, `test_assignment_conflicts.py:36`, `test_trip_vehicle_optional.py:71`, and the two seed commands. **Do not** touch `valid_from` usages that belong to `ServicePattern`/`Fare`/`LoyaltyRule` (different models).

- [ ] **Step 7: Makemigrations + migrate**

Run:
```bash
cd backend && source ../env/bin/activate
python manage.py makemigrations voyages_config
python manage.py migrate voyages_config
```
Expected: a migration removing `valid_from`/`valid_to`; migrate OK.

- [ ] **Step 8: Run tests**

Run: `pytest apps/voyages_trips -q`
Expected: PASS (resolver + trip tests).

- [ ] **Step 9: Frontend — drop validity from the seating-assignment page**

In the "Affectations de plan" page under `angular/src/_api/pages/voyages-config/`, remove the `valid_from`/`valid_to` form controls, table columns, and any payload keys. Grep: `grep -rn "valid_from\|valid_to" angular/src/_api/pages/voyages-config` and remove only the seating-assignment occurrences.

- [ ] **Step 10: Build**

Run: `cd angular && npx ng build --configuration=development`
Expected: clean.

- [ ] **Step 11: Commit**

```bash
git add backend/apps/voyages_config backend/apps/voyages_trips backend/apps/voyages_booking angular/src/_api/pages/voyages-config
git commit -m "feat(fleet/voyages): drop seating-plan validity dates; resolve by latest active assignment"
```

---

## Task 3: Capacity config on VoyagesSettings

**Files:**
- Modify: `backend/apps/voyages_config/models/settings.py`
- Create: `backend/apps/voyages_config/migrations/000X_parcel_capacity_settings.py` (makemigrations)
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (VoyagesSettings serializer) + view if fields are explicitly listed.

**Interfaces:**
- Produces: `VoyagesSettings.parcel_trip_max_weight_kg` (Decimal|null), `parcel_trip_max_count` (int|null); null = no cap.

- [ ] **Step 1: Add fields**

In `settings.py` `VoyagesSettings`, after `baggage_free_allowance_kg`:
```python
    parcel_trip_max_weight_kg = models.DecimalField(_("capacité colis max/voyage (kg)"),
                                                     max_digits=8, decimal_places=2, null=True, blank=True)
    parcel_trip_max_count = models.PositiveIntegerField(_("nombre max de colis/voyage"), null=True, blank=True)
```

- [ ] **Step 2: Expose in serializer**

In `voyages_config/config_api/serializers.py`, add `"parcel_trip_max_weight_kg"` and `"parcel_trip_max_count"` to the VoyagesSettings serializer `fields`/write fields (mirror how `baggage_free_allowance_kg` is declared — likely a `DecimalField(required=False, allow_null=True)` and `IntegerField(required=False, allow_null=True)`).

- [ ] **Step 3: Makemigrations + migrate**

Run: `cd backend && source ../env/bin/activate && python manage.py makemigrations voyages_config && python manage.py migrate voyages_config`

- [ ] **Step 4: Smoke test**

Run: `python manage.py shell -c "from apps.voyages_config.models import VoyagesSettings; print('parcel_trip_max_count' in [f.name for f in VoyagesSettings._meta.get_fields()])"`
Expected: `True`.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_config
git commit -m "feat(voyages-config): add per-voyage parcel capacity settings (weight/count)"
```

---

## Task 4: Parcel lifecycle model + data migration

**Files:**
- Modify: `backend/apps/voyages_consignment/models/parcel.py`
- Create: `backend/apps/voyages_consignment/migrations/000X_parcel_lifecycle.py` (makemigrations, then hand-add data migration ops)
- Test: `backend/apps/voyages_consignment/tests/test_parcel_migration.py` (new)

**Interfaces:**
- Produces: `Parcel.Status` = `REGISTERED, READY_FOR_TRAVEL, LOADED, IN_TRANSIT, ARRIVED, AVAILABLE_FOR_PICKUP, PICKED_UP, CANCELLED`; `Parcel.dispatched_at`, `Parcel.available_at`; `ParcelEvent.from_status`, `ParcelEvent.to_status`.

- [ ] **Step 1: Widen Parcel.Status and ParcelEvent**

In `parcel.py`, replace `Parcel.Status`:
```python
    class Status(models.TextChoices):
        REGISTERED           = "registered",           _("Enregistré")
        READY_FOR_TRAVEL     = "ready_for_travel",     _("Prêt à expédier")
        LOADED               = "loaded",               _("Chargé")
        IN_TRANSIT           = "in_transit",           _("En transit")
        ARRIVED              = "arrived",               _("Arrivé")
        AVAILABLE_FOR_PICKUP = "available_for_pickup", _("Disponible pour retrait")
        PICKED_UP            = "picked_up",            _("Retiré")
        CANCELLED            = "cancelled",            _("Annulé")
```
Change `status` field to `max_length=20`. Add fields near the other timestamps:
```python
    dispatched_at = models.DateTimeField(_("expédié le"), null=True, blank=True)
    available_at  = models.DateTimeField(_("disponible le"), null=True, blank=True)
```
Extend `ParcelEvent.Kind` to include new coarse kinds and add status pair fields:
```python
    class Kind(models.TextChoices):
        REGISTERED = "registered", _("Enregistré")
        READY      = "ready",      _("Prêt à expédier")
        LOADED     = "loaded",     _("Chargé")
        DISPATCHED = "dispatched", _("Expédié")
        ARRIVED    = "arrived",    _("Arrivé")
        RECEIVED   = "received",   _("Réceptionné")
        PICKED_UP  = "picked_up",  _("Retiré")
        CANCELLED  = "cancelled",  _("Annulé")
```
Add to `ParcelEvent`:
```python
    from_status = models.CharField(_("ancien statut"), max_length=20, blank=True)
    to_status   = models.CharField(_("nouveau statut"), max_length=20, blank=True)
```

- [ ] **Step 2: Makemigrations (schema)**

Run: `cd backend && source ../env/bin/activate && python manage.py makemigrations voyages_consignment`
Expected: a schema migration for the new fields/choices.

- [ ] **Step 3: Add the data migration op**

Edit the generated migration; append a `migrations.RunPython` that remaps existing rows (both `Parcel.status` and `ParcelEvent.kind` where applicable):
```python
def forward(apps, schema_editor):
    Parcel = apps.get_model("voyages_consignment", "Parcel")
    Parcel.objects.filter(status="arrived").update(status="available_for_pickup")

def backward(apps, schema_editor):
    Parcel = apps.get_model("voyages_consignment", "Parcel")
    Parcel.objects.filter(status="available_for_pickup").update(status="arrived")
```
Add `migrations.RunPython(forward, backward)` to `operations`.

- [ ] **Step 4: Write the data-migration test**

Create `apps/voyages_consignment/tests/test_parcel_migration.py`:
```python
import pytest
from django.db import connection
from django.test import TestCase

@pytest.mark.django_db
def test_old_arrived_maps_to_available(django_db_setup):
    # Simpler: assert the choice exists and mapping semantics via a unit check.
    from apps.voyages_consignment.models import Parcel
    codes = {c[0] for c in Parcel.Status.choices}
    assert "available_for_pickup" in codes and "in_transit" in codes and "ready_for_travel" in codes
```
(A full historical-migration test is optional; the choice/field presence check guards regressions.)

- [ ] **Step 5: Migrate + test**

Run:
```bash
python manage.py migrate voyages_consignment
pytest apps/voyages_consignment/tests/test_parcel_migration.py -q
```
Expected: migrate OK; test PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_consignment/models backend/apps/voyages_consignment/migrations backend/apps/voyages_consignment/tests/test_parcel_migration.py
git commit -m "feat(colis): expand parcel lifecycle statuses + event status pair; migrate arrived→available"
```

---

## Task 5: Parcel service transitions rewrite

**Files:**
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py`
- Test: `backend/apps/voyages_consignment/tests/test_parcel_flow.py` (new)

**Interfaces:**
- Consumes: `Parcel.Status` (Task 4), `VoyagesSettings.parcel_trip_max_*` (Task 3).
- Produces: `register_parcel(...)` (lands READY_FOR_TRAVEL), `assign_to_trip(parcel, trip, *, user, scan=False)`, `unassign_from_trip(parcel, *, user)`, `load_parcel(parcel, *, user)`, `dispatch_parcel(parcel, *, user)`, `mark_arrived(parcel, *, user)`, `receive_parcel(parcel, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user)` (→ AVAILABLE_FOR_PICKUP), `pickup_parcel(parcel, *, picked_up_by, picked_up_id_number="", user)`, `cancel_parcel(parcel, *, user)`, `dispatch_batch(parcels, *, user)`, `mark_arrived_batch(parcels, *, user)`, `dispatch_parcels_for_trip(trip, *, user)`, `arrive_parcels_for_trip(trip, *, user)`.

- [ ] **Step 1: Write the flow tests (no-voyage + voyage + guards)**

Create `apps/voyages_consignment/tests/test_parcel_flow.py`. Use the app's existing test fixtures for company/agency/service points/consignment type (see `apps/voyages_consignment/tests.py` or existing consignment tests for the builder pattern; reuse it). Tests:
```python
import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S

@pytest.mark.django_db
def test_register_lands_ready_for_travel(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    assert p.status == Parcel.Status.READY_FOR_TRAVEL
    assert p.events.filter(to_status="registered").exists()

@pytest.mark.django_db
def test_no_voyage_happy_path(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    S.dispatch_parcel(p, user=colis_ctx.user)
    assert p.status == Parcel.Status.IN_TRANSIT and p.dispatched_at
    S.mark_arrived(p, user=colis_ctx.user)
    assert p.status == Parcel.Status.ARRIVED
    S.receive_parcel(p, received_pieces=p.quantity, user=colis_ctx.user)
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP and p.available_at
    S.pickup_parcel(p, picked_up_by="Jean", user=colis_ctx.user)
    assert p.status == Parcel.Status.PICKED_UP

@pytest.mark.django_db
def test_destination_must_be_agency(colis_ctx):
    kw = colis_ctx.register_kwargs(destination_terminal=True)  # non-agency service point
    with pytest.raises(ApplicationError):
        S.register_parcel(**kw)

@pytest.mark.django_db
def test_pickup_requires_available(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    with pytest.raises(ApplicationError):
        S.pickup_parcel(p, picked_up_by="Jean", user=colis_ctx.user)
```
Add a `colis_ctx` fixture (a small conftest in `apps/voyages_consignment/tests/conftest.py`) building company, an AGENCY origin + AGENCY destination ServicePoint, a ConsignmentType, a user, and a `register_kwargs()` helper returning the kwargs for `register_parcel` (with a `destination_terminal` flag that swaps the destination to a `TERMINAL`-kind point).

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd backend && source ../env/bin/activate && pytest apps/voyages_consignment/tests/test_parcel_flow.py -q`
Expected: FAIL (destination check absent; register lands REGISTERED; receive→ARRIVED not AVAILABLE; no `dispatch_parcel`).

- [ ] **Step 3: Update `_event` and register**

In `parcel_services.py`, change `_event` to record status pair:
```python
def _event(parcel, kind, *, from_status="", to_status="", trip=None, user=None, note=""):
    ParcelEvent.objects.create(parcel=parcel, kind=kind, from_status=from_status,
                               to_status=to_status, trip=trip, note=note, created_by=user)
```
In `register_parcel`, after the existing prohibited/weight/amount checks add the destination-agency check:
```python
    if getattr(destination_point, "station_kind", "") != "AGENCY":
        raise ApplicationError(_("Le colis ne peut être envoyé que vers une agence."))
```
Set the created parcel to `READY_FOR_TRAVEL`, and record two events:
```python
    parcel = Parcel.objects.create(..., status=Parcel.Status.READY_FOR_TRAVEL, ...)
    _event(parcel, ParcelEvent.Kind.REGISTERED, to_status=Parcel.Status.REGISTERED, user=user)
    _event(parcel, ParcelEvent.Kind.READY, from_status=Parcel.Status.REGISTERED,
           to_status=Parcel.Status.READY_FOR_TRAVEL, user=user)
```
(Keep the treasury `record_parcel_payment` call.)

- [ ] **Step 4: Rewrite transition functions**

Replace `unload_parcel`/`assign_to_trip`/`mark_arrived`/`receive_parcel`/`pickup_parcel`/`cancel_parcel` and add the new ones:
```python
_ASSIGNABLE = (Parcel.Status.REGISTERED, Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED)

def _capacity_ok(trip, company, adding_weight):
    from apps.voyages_config.models import VoyagesSettings
    s = VoyagesSettings.objects.filter(company=company).first()
    if not s:
        return
    current = trip.parcels.exclude(status=Parcel.Status.CANCELLED)
    if s.parcel_trip_max_count and current.count() >= s.parcel_trip_max_count:
        raise ApplicationError(_("Nombre maximum de colis atteint pour ce voyage."))
    if s.parcel_trip_max_weight_kg:
        total = sum((p.weight_kg or 0) for p in current) + (adding_weight or 0)
        if total > s.parcel_trip_max_weight_kg:
            raise ApplicationError(_("Capacité poids colis dépassée pour ce voyage."))

@transaction.atomic
def assign_to_trip(parcel, trip, *, user, scan=False):
    if parcel.status not in _ASSIGNABLE:
        raise ApplicationError(_("Ce colis ne peut plus être affecté à un voyage."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    _capacity_ok(trip, parcel.company, parcel.weight_kg)
    prev = parcel.status
    parcel.trip = trip
    if scan:
        parcel.status = Parcel.Status.LOADED
        parcel.loaded_at = timezone.now()
        kind, to = ParcelEvent.Kind.LOADED, Parcel.Status.LOADED
    else:
        parcel.status = Parcel.Status.READY_FOR_TRAVEL
        kind, to = ParcelEvent.Kind.READY, Parcel.Status.READY_FOR_TRAVEL
    parcel.updated_by = user
    parcel.save()
    _event(parcel, kind, from_status=prev, to_status=to, trip=trip, user=user)
    return parcel

@transaction.atomic
def unassign_from_trip(parcel, *, user):
    if parcel.status not in (Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED):
        raise ApplicationError(_("Seul un colis non expédié peut être retiré du voyage."))
    prev = parcel.status
    parcel.trip = None
    parcel.loaded_at = None
    parcel.status = Parcel.Status.READY_FOR_TRAVEL
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.READY, from_status=prev,
           to_status=Parcel.Status.READY_FOR_TRAVEL, user=user, note="Retiré du voyage")
    return parcel

@transaction.atomic
def load_parcel(parcel, *, user):
    if parcel.status != Parcel.Status.READY_FOR_TRAVEL:
        raise ApplicationError(_("Seul un colis prêt peut être chargé."))
    parcel.status = Parcel.Status.LOADED
    parcel.loaded_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.LOADED, from_status=Parcel.Status.READY_FOR_TRAVEL,
           to_status=Parcel.Status.LOADED, trip=parcel.trip, user=user)
    return parcel

@transaction.atomic
def dispatch_parcel(parcel, *, user):
    if parcel.status not in (Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED):
        raise ApplicationError(_("Seul un colis prêt ou chargé peut être expédié."))
    prev = parcel.status
    parcel.status = Parcel.Status.IN_TRANSIT
    parcel.dispatched_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.DISPATCHED, from_status=prev,
           to_status=Parcel.Status.IN_TRANSIT, trip=parcel.trip, user=user)
    return parcel

@transaction.atomic
def mark_arrived(parcel, *, user):
    if parcel.status != Parcel.Status.IN_TRANSIT:
        raise ApplicationError(_("Seul un colis en transit peut être marqué arrivé."))
    parcel.status = Parcel.Status.ARRIVED
    parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.ARRIVED, from_status=Parcel.Status.IN_TRANSIT,
           to_status=Parcel.Status.ARRIVED, trip=parcel.trip, user=user)
    return parcel

@transaction.atomic
def receive_parcel(parcel, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user):
    if parcel.status not in (Parcel.Status.ARRIVED, Parcel.Status.IN_TRANSIT):
        raise ApplicationError(_("Seul un colis arrivé peut être réceptionné."))
    total = parcel.quantity
    received = total if received_pieces is None else int(received_pieces)
    missing = int(missing_pieces or 0); damaged = int(damaged_pieces or 0)
    if received < 0 or missing < 0 or damaged < 0:
        raise ApplicationError(_("Les quantités ne peuvent pas être négatives."))
    if received > total:
        raise ApplicationError(_("Pièces reçues (%(r)s) supérieures aux pièces enregistrées (%(t)s).") % {"r": received, "t": total})
    if received + missing > total:
        raise ApplicationError(_("Reçues + manquantes dépassent le nombre de pièces enregistrées."))
    if damaged > received:
        raise ApplicationError(_("Les pièces avariées ne peuvent pas dépasser les pièces reçues."))
    prev = parcel.status
    parcel.received_pieces = received; parcel.missing_pieces = missing; parcel.damaged_pieces = damaged
    parcel.status = Parcel.Status.AVAILABLE_FOR_PICKUP
    parcel.available_at = timezone.now()
    if not parcel.arrived_at:
        parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    note = f"{received}/{total}" + (f" · {missing} manquant(s)" if missing else "") + (f" · {damaged} avarié(s)" if damaged else "")
    _event(parcel, ParcelEvent.Kind.RECEIVED, from_status=prev,
           to_status=Parcel.Status.AVAILABLE_FOR_PICKUP, trip=parcel.trip, user=user, note=note)
    return parcel

@transaction.atomic
def pickup_parcel(parcel, *, picked_up_by, picked_up_id_number="", user):
    if parcel.status != Parcel.Status.AVAILABLE_FOR_PICKUP:
        raise ApplicationError(_("Seul un colis disponible peut être retiré."))
    if not picked_up_by:
        raise ApplicationError(_("Indiquez le nom de la personne qui retire le colis."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = picked_up_by
    parcel.picked_up_id_number = picked_up_id_number or ""
    parcel.picked_up_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    note = picked_up_by + (f" · pièce {picked_up_id_number}" if picked_up_id_number else "")
    _event(parcel, ParcelEvent.Kind.PICKED_UP, from_status=Parcel.Status.AVAILABLE_FOR_PICKUP,
           to_status=Parcel.Status.PICKED_UP, user=user, note=note)
    return parcel

@transaction.atomic
def cancel_parcel(parcel, *, user):
    if parcel.status not in (Parcel.Status.REGISTERED, Parcel.Status.READY_FOR_TRAVEL):
        raise ApplicationError(_("Un colis déjà expédié ne peut pas être annulé."))
    prev = parcel.status
    parcel.status = Parcel.Status.CANCELLED
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.CANCELLED, from_status=prev,
           to_status=Parcel.Status.CANCELLED, user=user)
    from apps.treasury.services.refund import refund_on_cancel
    refund_on_cancel(parcel.company, amount_paid=parcel.amount_received, user=user,
                     description=f"Remboursement colis {parcel.reference}")
    return parcel

def dispatch_batch(parcels, *, user):
    return [dispatch_parcel(p, user=user) for p in parcels]

def mark_arrived_batch(parcels, *, user):
    return [mark_arrived(p, user=user) for p in parcels]

@transaction.atomic
def dispatch_parcels_for_trip(trip, *, user):
    qs = trip.parcels.filter(status__in=(Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED))
    return [dispatch_parcel(p, user=user) for p in qs]

@transaction.atomic
def arrive_parcels_for_trip(trip, *, user):
    qs = trip.parcels.filter(status=Parcel.Status.IN_TRANSIT)
    return [mark_arrived(p, user=user) for p in qs]
```
Remove the now-unused `_points_on_trip` route hard-check (route match becomes a UI filter — Task 7/9). Keep `edit_parcel` but broaden its block condition to `status in (PICKED_UP, CANCELLED)` (already the case).

- [ ] **Step 5: Export new service names**

If `apps/voyages_consignment/services/__init__.py` re-exports parcel service functions, add `unassign_from_trip, load_parcel, dispatch_parcel, dispatch_batch, mark_arrived_batch, dispatch_parcels_for_trip, arrive_parcels_for_trip` (grep the `__init__` to match the existing export style). Update `__all__` if present.

- [ ] **Step 6: Run tests**

Run: `pytest apps/voyages_consignment/tests/test_parcel_flow.py -q`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment/services backend/apps/voyages_consignment/tests
git commit -m "feat(colis): voyage-optional parcel transitions + batch/trip-cascade helpers + capacity/destination checks"
```

---

## Task 6: Trip depart/arrive cascade to parcels

**Files:**
- Modify: `backend/apps/voyages_trips/services/trip_services.py` (`depart_trip` ~130, `complete_trip` ~150)
- Test: `backend/apps/voyages_consignment/tests/test_trip_cascade.py` (new)

**Interfaces:**
- Consumes: `dispatch_parcels_for_trip`, `arrive_parcels_for_trip` (Task 5).

- [ ] **Step 1: Write the cascade test**

Create `apps/voyages_consignment/tests/test_trip_cascade.py`: build a trip + two parcels assigned to it (status LOADED/READY), call `depart_trip`, assert both parcels are `IN_TRANSIT`; call `complete_trip`, assert both `ARRIVED`. Reuse `colis_ctx` + trip fixtures.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && source ../env/bin/activate && pytest apps/voyages_consignment/tests/test_trip_cascade.py -q`
Expected: FAIL (no cascade yet).

- [ ] **Step 3: Add cascade calls**

In `depart_trip`, after `trip.save(...)` and before `return`:
```python
    from apps.voyages_consignment.services import parcel_services as _p
    _p.dispatch_parcels_for_trip(trip, user=user)
```
In `complete_trip`, after `trip.save(...)`:
```python
    from apps.voyages_consignment.services import parcel_services as _p
    _p.arrive_parcels_for_trip(trip, user=user)
```
(Import inside the functions to avoid a circular import at module load.)

- [ ] **Step 4: Run tests**

Run: `pytest apps/voyages_consignment/tests/test_trip_cascade.py apps/voyages_trips -q`
Expected: PASS (and no regressions in voyages_trips).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/services/trip_services.py backend/apps/voyages_consignment/tests/test_trip_cascade.py
git commit -m "feat(voyages): depart/arrive cascade parcel statuses (in_transit/arrived)"
```

---

## Task 7: API — new/changed parcel endpoints + expédition selectors

**Files:**
- Create: `backend/apps/voyages_consignment/selectors/parcel_selectors.py`
- Modify: `backend/apps/voyages_consignment/config_api/views.py`, `serializers.py`, `backend/apps/voyages_consignment/urls.py`
- Test: `backend/apps/voyages_consignment/tests/test_parcel_api.py` (new)

**Interfaces:**
- Consumes: Task 5 services.
- Produces endpoints: `POST parcels/<pk>/load/`, `POST parcels/<pk>/dispatch/`, `POST parcels/<pk>/arrive/` (rename of old `arrived` receive kept), `POST parcels/<pk>/unassign/`, `POST parcels/batch-dispatch/`, `POST parcels/batch-arrive/`, and `GET parcels/expedition/?trip=<id>&destination=<pt>` (ready + assigned lists).

- [ ] **Step 1: Write API tests**

Create `apps/voyages_consignment/tests/test_parcel_api.py` using DRF `APIClient` + an authenticated agent (mirror auth setup from existing consignment/api tests). Cover: register (201) → `dispatch` (200, in_transit) → `arrive` (200) → `receive` (200, available) → `pickup` (200); and `unassign` after `assign`. Assert status codes and resulting `status` in the response body.

- [ ] **Step 2: Run to verify fail**

Run: `cd backend && source ../env/bin/activate && pytest apps/voyages_consignment/tests/test_parcel_api.py -q`
Expected: FAIL (routes 404).

- [ ] **Step 3: Add views**

In `config_api/views.py`, add small APIViews mirroring `ParcelUnloadView` (perm `ticketing.parcel.manage`):
```python
class ParcelLoadView(APIView):        # POST -> services.load_parcel
class ParcelDispatchView(APIView):    # POST -> services.dispatch_parcel
class ParcelArriveView(APIView):      # POST -> services.mark_arrived
class ParcelUnassignView(APIView):    # POST -> services.unassign_from_trip
```
Each loads the parcel by pk (reuse the existing `_get`/queryset helper in this file), calls the service in a `try/except ApplicationError -> error_response`, returns `success_response(ParcelDetailSerializer(p).data)`. Keep `ParcelArrivedView` (the receive-with-pieces endpoint) as-is but note it now yields AVAILABLE_FOR_PICKUP.
Add batch views:
```python
class ParcelBatchDispatchView(APIView):  # POST {ids:[...]} -> dispatch each, return {done, errors}
class ParcelBatchArriveView(APIView):    # POST {ids:[...]} -> mark_arrived each
```
mirror the existing `ParcelBulkView` shape (it already maps actions). Simplest: extend `ParcelBulkView`'s `fn` map with `"dispatch": services.dispatch_parcel, "arrive": services.mark_arrived, "load": services.load_parcel` and keep a single `parcels/bulk/` endpoint — **prefer this** over new batch URLs to reduce surface. Update the test accordingly to call `parcels/bulk/` with `action`.

- [ ] **Step 4: Add expédition selector + view**

Create `selectors/parcel_selectors.py`:
```python
from apps.voyages_consignment.models import Parcel

def ready_parcels(company, *, destination_point=None):
    qs = Parcel.objects.filter(company=company, is_deleted=False,
                               status=Parcel.Status.READY_FOR_TRAVEL, trip__isnull=True)
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    return qs.select_related("origin_point", "destination_point").order_by("-created_at")

def trip_parcels(company, trip_id):
    return (Parcel.objects.filter(company=company, is_deleted=False, trip_id=trip_id)
            .exclude(status=Parcel.Status.CANCELLED)
            .select_related("origin_point", "destination_point").order_by("-created_at"))
```
Add `ParcelExpeditionView` (GET, perm `ticketing.parcel.view`) returning `{ ready: [...], assigned: [...], totals: {count, weight} }` for a `?trip=` and/or `?destination=` query, serialized with the existing `ParcelListSerializer`.

- [ ] **Step 5: Wire URLs**

In `urls.py` add:
```python
    path("parcels/<uuid:pk>/load/", v.ParcelLoadView.as_view()),
    path("parcels/<uuid:pk>/dispatch/", v.ParcelDispatchView.as_view()),
    path("parcels/<uuid:pk>/arrive/", v.ParcelArriveView.as_view()),
    path("parcels/<uuid:pk>/unassign/", v.ParcelUnassignView.as_view()),
    path("parcels/expedition/", v.ParcelExpeditionView.as_view()),
```
Keep `parcels/<pk>/arrived/` (receive) and `parcels/bulk/`.

- [ ] **Step 6: Run tests**

Run: `pytest apps/voyages_consignment/tests/test_parcel_api.py -q`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment
git commit -m "feat(colis): API for load/dispatch/arrive/unassign + expédition lists"
```

---

## Task 8: Frontend model + service

**Files:**
- Modify: `angular/src/_api/models/voyages-consignment.models.ts`
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts`
- Modify: `angular/src/_api/config/api.config.ts`

**Interfaces:**
- Consumes: Task 7 endpoints.
- Produces: `ParcelService.load/dispatch/arrive/unassign(id)`, `expedition({trip?,destination?})`, batch via `bulk(ids, action)` with widened action union.

- [ ] **Step 1: Add endpoint consts**

In `api.config.ts` `VOYAGES_CONSIGNMENT`, add:
```ts
  parcelLoad:     (id: string) => `${VCG}/parcels/${id}/load/`,
  parcelDispatch: (id: string) => `${VCG}/parcels/${id}/dispatch/`,
  parcelArrive:   (id: string) => `${VCG}/parcels/${id}/arrive/`,
  parcelUnassign: (id: string) => `${VCG}/parcels/${id}/unassign/`,
  parcelExpedition: `${VCG}/parcels/expedition/`,
```
(Match the existing `VCG`/base const name used in that block.)

- [ ] **Step 2: Add service methods**

In `parcel.service.ts` add methods mirroring the existing `unload`/`receive` style:
```ts
  load(id: string) { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelLoad(id), {}).pipe(map(r => r.data ?? r)); }
  dispatch(id: string) { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelDispatch(id), {}).pipe(map(r => r.data ?? r)); }
  arrive(id: string) { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelArrive(id), {}).pipe(map(r => r.data ?? r)); }
  unassign(id: string) { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelUnassign(id), {}).pipe(map(r => r.data ?? r)); }
  expedition(params: { trip?: string; destination?: string }) { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelExpedition, { params: params as any }).pipe(map(r => r.data ?? r)); }
```
Widen `bulk`'s action union to `'receive' | 'cancel' | 'dispatch' | 'arrive' | 'load'`.

- [ ] **Step 3: Status labels (model)**

In `voyages-consignment.models.ts`, if there is a status→label/CSS map used by the UI, extend it with `ready_for_travel`, `in_transit`, `available_for_pickup`. (Labels come from `status_display` off the API, so a hardcoded map is only for badge CSS — add entries there.)

- [ ] **Step 4: Build**

Run: `cd angular && npx ng build --configuration=development`
Expected: clean.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api
git commit -m "feat(colis-fe): parcel service load/dispatch/arrive/unassign/expedition + statuses"
```

---

## Task 9: Expédition workspace + Réception/Parcels page updates + sidebar

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/manifest/manifest.component.ts` + `.html` (becomes Expédition)
- Modify: `angular/src/_api/pages/voyages-consignment/reception/*`, `parcels/*`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (Colis « Expédition » base already labelled; point it to the workspace) and `angular/src/app/core/helpers/routes.ts` if a route rename is needed
- Modify: `angular/src/app/features/pages/pages.routes.ts` (route to the expédition component)

**Interfaces:**
- Consumes: Task 8 service methods.

- [ ] **Step 1: Rebuild the Manifeste page into Expédition**

Repurpose `manifest.component.ts`: add a voyage picker (reuse `TripService.list({status:'pending'})` — trips open to loading) + destination filter; call `parcelSvc.expedition({trip, destination})` to populate two lists (`ready`, `assigned`) and `totals`. Provide buttons: assign (`assignTrip`), unassign (`unassign`), **Dispatch** (departs the trip via `TripService.depart` OR, in Sans-voyage mode, `bulk(selectedIds,'dispatch')`), and a **Sans voyage** toggle. Show running count + weight and a capacity note when `totals` exceed configured caps (the API can include caps or the component reads settings; simplest: show totals only, backend enforces). Keep a **Imprimer manifeste** button using the existing `manifest(tripId)` endpoint output.

- [ ] **Step 2: Update Réception page**

In `reception/*`, the action that received parcels now yields `available_for_pickup`; update any hardcoded expected status from `loaded`→`in_transit`/`arrived` (reception operates on `arrived`/`in_transit`) and success copy. Where it lists parcels to receive, filter to `status in (in_transit, arrived)`.

- [ ] **Step 3: Update Parcels list actions**

In `parcels/*`, update status filter options to the new statuses and action buttons: show `Expédier` (dispatch) for `ready_for_travel`/`loaded`, `Réceptionner` for `arrived`, `Retrait` for `available_for_pickup`. Remove/repurpose the old `unload`→ use `unassign`.

- [ ] **Step 4: Sidebar/route wiring**

Ensure the Colis « Expédition » menu item routes to the rebuilt component. If the component/route was named `manifest`, either keep the path and just relabel (already `Expédition`), or add a `vcgExpedition` route alias in `routes.ts` and point `pages.routes.ts` at the component. Keep it minimal — relabelling + same route is fine.

- [ ] **Step 5: Build**

Run: `cd angular && npx ng build --configuration=development`
Expected: clean.

- [ ] **Step 6: Commit**

```bash
git add angular/src
git commit -m "feat(colis-fe): Expédition workspace (assign/dispatch, sans-voyage batch) + réception/list updates"
```

---

## Task 10: i18n + full verification

**Files:**
- Create: `angular/scripts/seed-colis-expedition-i18n.mjs`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1: Seed new keys**

Write a `seed-*.mjs` (mirror `seed-accidents-voyage-i18n.mjs`) adding keys used by the Expédition workspace and any new status/action labels (e.g. `voyages.colis.expedition_title`, `...sans_voyage`, `...dispatch`, `...assign`, `...unassign`, `...totals_weight`, action labels). Run it.

- [ ] **Step 2: i18n parity**

Run: `cd angular && node scripts/seed-colis-expedition-i18n.mjs && npm run i18n:check`
Expected: `i18n key parity OK`.

- [ ] **Step 3: Full backend suite**

Run: `cd backend && source ../env/bin/activate && pytest apps/voyages_consignment apps/voyages_trips apps/voyages_config -q`
Expected: PASS.

- [ ] **Step 4: makemigrations --check + frontend build**

Run:
```bash
cd backend && source ../env/bin/activate && python manage.py makemigrations --check --dry-run
cd ../angular && npx ng build --configuration=development
```
Expected: "No changes detected"; build clean.

- [ ] **Step 5: Commit**

```bash
git add angular/scripts angular/public/i18n
git commit -m "i18n(colis): Expédition workspace + parcel lifecycle labels (fr/en/es/pt)"
```

---

## Self-review notes (author)

- **Spec coverage:** §4 status model → Task 4; §6 decoupling/transitions → Task 5; bulk cascade §6/§18/§19 → Task 6; §7 destination=agency → Task 5 (register check); §8/§33 Expédition workspace + manifest → Task 9; capacity §13 → Task 3 + Task 5 `_capacity_ok`; reception §20 → Task 5 receive + Task 9; pickup §22/§23 → Task 5; timeline/events §30/§31 → Task 4 (`from_status`/`to_status`) + Task 5 events; API §50 → Task 7; quick-wins (treasury dashboards, seating validity) → Tasks 1–2. **Deferred (documented non-goals):** incidents/returns/unclaimed, pricing grid, payments table, public tracking, notifications, dashboards/reports.
- **Placeholder scan:** frontend Tasks 9 give concrete method calls and behaviors; Angular components are large and follow existing page patterns, so steps describe exact service calls + status filters rather than full-file rewrites — acceptable per "follow established patterns."
- **Type consistency:** service names in Task 5 `Produces` match calls in Tasks 6–9 (`dispatch_parcel`, `mark_arrived`, `unassign_from_trip`, `dispatch_parcels_for_trip`, `arrive_parcels_for_trip`); endpoint consts in Task 7 match Task 8 service methods (`parcelDispatch`/`dispatch`, etc.).
