# Forms Redesign + Unified Client Capture — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the four transactional forms (ticket sale, réservation, colis, bagage) professional and uniform, give all of them a search-and-select client with civilité, link colis/bagage to a client (Passenger), and make the dashboard "clients" count distinct buyers across tickets + colis + bagage.

**Architecture:** Client = `Passenger`. Add `civility` to Passenger and a nullable `sender_client` FK to Parcel and Baggage, populated via the existing `get_or_create_passenger`. A new shared Angular `ClientFieldsComponent` (civilité · name-autocomplete · phone · ID) is dropped into all four forms, each re-laid-out on a consistent Bootstrap grid. The dashboard "clients" metric becomes distinct Passengers linked to a non-cancelled ticket/parcel/baggage.

**Tech Stack:** Django 5.1 + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db` from `backend/`), Angular standalone + Transloco, build `npx ng build --configuration development` from `angular/`.

**Spec:** `docs/superpowers/specs/2026-10-06-forms-client-capture-design.md`

## Global Constraints

- Client = `Passenger`; colis client = the **sender** (recipient stays free text).
- **Civilité codes** are exactly `mr` / `mrs` / `miss` (reuse Bagage's `Civility`), blank allowed.
- New columns are **nullable/additive**; no backfill of historical rows.
- Dashboard **clients** = distinct `Passenger`s linked to a non-cancelled ticket OR parcel(`sender_client`) OR baggage(`sender_client`), year + agency scoped (agency per source: ticket→`trip__origin__agency`, parcel→`agency`, baggage→`trip__origin__agency`).
- Backend changes are TDD. Frontend has **no unit-test harness** → the gate is `npx ng build --configuration development` succeeding (only pre-existing NG8113 warnings allowed).
- i18n for every new string in all four locales `angular/public/i18n/{fr,en,es,pt}.json`.
- Commits: author `shimi`, no co-author trailer (`git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit`).

## Review Focus

- **Dedup on link:** two colis from the same person (same phone) link the *same* Passenger, not two (Task 2 `test_register_parcel_dedups_sender`).
- **Cross-form uniqueness in the count:** a person who buys a ticket AND a colis counts **once** (Task 5 `test_clients_same_person_counts_once`).
- **Colis/bagage-only buyers appear:** a client who only ever sent a colis (never a ticket) is counted (Task 5 `test_clients_includes_parcel_only_buyer`).
- **Agency scope per source:** a colis in another agency does not count for an agency-scoped user (Task 5 `test_clients_agency_scoped_per_source`).
- **Civilité fills on pick but a new name still creates a client:** picking fills civilité; typing a new name creates the Passenger on save with its civilité (Task 1 `test_get_or_create_sets_civility`; frontend covered by build + reuse).

---

## Task 1: `Passenger.civility` + `get_or_create_passenger` civility

**Files:**
- Modify: `backend/apps/voyages_booking/models/passenger.py`
- Modify: `backend/apps/voyages_booking/services/passenger_services.py`
- Create: migration `backend/apps/voyages_booking/migrations/XXXX_passenger_civility.py` (via makemigrations)
- Test: `backend/apps/voyages_booking/test_passenger_civility.py`

**Interfaces:**
- Produces: `Passenger.civility` (CharField, choices `mr/mrs/miss`, blank); `get_or_create_passenger(company, *, id_type, id_number, phone, name, gender="", birth_date=None, email="", notes="", civility="", user=None)`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_booking/test_passenger_civility.py
import pytest
from apps.system_config.models import Company
from apps.voyages_booking.models import Passenger
from apps.voyages_booking.services.passenger_services import get_or_create_passenger


@pytest.mark.django_db
def test_get_or_create_sets_civility():
    c = Company.objects.create(name="CivCo", slug="civco")
    p = get_or_create_passenger(c, id_type="cni", id_number="A1", phone="620000001",
                                name="Awa Diallo", civility="mrs")
    assert p.civility == "mrs"


@pytest.mark.django_db
def test_get_or_create_dedups_and_keeps_existing():
    c = Company.objects.create(name="CivCo2", slug="civco2")
    first = get_or_create_passenger(c, id_type="cni", id_number="B2", phone="620000002", name="Ben", civility="mr")
    again = get_or_create_passenger(c, id_type="cni", id_number="B2", phone="620000002", name="Ben", civility="mr")
    assert again.id == first.id
    assert Passenger.objects.filter(company=c).count() == 1
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_civility.py -q --reuse-db`
Expected: FAIL — `get_or_create_passenger() got an unexpected keyword 'civility'` / `Passenger has no attribute civility`.

- [ ] **Step 3: Add the model field**

In `passenger.py`, add a `Civility` choices class and field (place after `gender`):
```python
    class Civility(models.TextChoices):
        MR   = "mr",   _("M.")
        MRS  = "mrs",  _("Mme")
        MISS = "miss", _("Mlle")

    civility = models.CharField(_("civilité"), max_length=6, choices=Civility.choices, blank=True)
```
(ensure `_` is imported — it is used already in the model.)

- [ ] **Step 4: Thread civility through the service**

In `passenger_services.py`, add `civility=""` to the signature and to the `Passenger.objects.create(...)` call:
```python
def get_or_create_passenger(company, *, id_type, id_number, phone,
                            name, gender="", birth_date=None,
                            email="", notes="", civility="", user=None):
    ...
    return Passenger.objects.create(
        company=company, name=name, gender=gender, civility=civility,
        birth_date=birth_date, phone=phone, email=email, id_type=id_type,
        id_number=id_number, notes=notes, created_by=user)
```

- [ ] **Step 5: Make the migration + run tests**

Run: `cd backend && ../env/bin/python manage.py makemigrations voyages_booking`
Then: `../env/bin/python -m pytest apps/voyages_booking/test_passenger_civility.py -q --reuse-db` → 2 passed. Then `makemigrations --check --dry-run` → "No changes detected".

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_booking/models/passenger.py backend/apps/voyages_booking/services/passenger_services.py backend/apps/voyages_booking/migrations/ backend/apps/voyages_booking/test_passenger_civility.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(client): add civility to Passenger + get_or_create_passenger"
```

---

## Task 2: `Parcel.sender_client` + link on create

**Files:**
- Modify: `backend/apps/voyages_consignment/models/parcel.py`
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py` (`register_parcel`)
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py` (parcel create serializer — add sender client fields)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (pass new fields into `register_parcel`)
- Create: migration (via makemigrations)
- Test: `backend/apps/voyages_consignment/test_parcel_sender_client.py`

**Interfaces:**
- Consumes: `get_or_create_passenger(..., civility=...)` (Task 1).
- Produces: `Parcel.sender_client` (FK Passenger, null, `related_name="parcels_sent"`); `register_parcel(..., sender_civility="", sender_id_type="cni", sender_id_number="", ...)` links it.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_consignment/test_parcel_sender_client.py
import pytest
from decimal import Decimal
from apps.system_config.services import create_company
from apps.voyages_booking.models import Passenger
# Helpers to build the minimal consignment graph (origin agency point, destination
# agency point, consignment type) already exist in the consignment test suite;
# reuse apps/voyages_consignment/tests helpers if present, else build via services.
from apps.voyages_consignment.tests.factories import make_parcel_prereqs  # see note


@pytest.mark.django_db
def test_register_parcel_links_sender_client():
    ctx = make_parcel_prereqs()        # {company, origin, destination, ctype, user}
    from apps.voyages_consignment.services.parcel_services import register_parcel
    p = register_parcel(ctx["company"], origin_point=ctx["origin"], destination_point=ctx["destination"],
                        consignment_type=ctx["ctype"], sender_name="Awa Diallo", sender_phone="620111222",
                        sender_civility="mrs", sender_id_type="cni", sender_id_number="CNI-1",
                        recipient_name="Moussa", recipient_phone="620333444",
                        amount_due=Decimal("1000"), user=ctx["user"])
    assert p.sender_client is not None
    assert p.sender_client.civility == "mrs"
    assert p.sender_client.name == "Awa Diallo"


@pytest.mark.django_db
def test_register_parcel_dedups_sender():
    ctx = make_parcel_prereqs()
    from apps.voyages_consignment.services.parcel_services import register_parcel
    kw = dict(origin_point=ctx["origin"], destination_point=ctx["destination"], consignment_type=ctx["ctype"],
              sender_name="Awa", sender_phone="620111222", sender_id_type="cni", sender_id_number="CNI-1",
              recipient_name="M", recipient_phone="1", amount_due=Decimal("1000"), user=ctx["user"])
    p1 = register_parcel(ctx["company"], **kw)
    p2 = register_parcel(ctx["company"], **kw)
    assert p1.sender_client_id == p2.sender_client_id
    assert Passenger.objects.filter(company=ctx["company"]).count() == 1
```

**Note for the implementer:** if `apps/voyages_consignment/tests/factories.py::make_parcel_prereqs` does not exist, create a tiny local helper in the test file that builds the prerequisites the way the existing consignment tests do (grep `apps/voyages_consignment/tests` for how parcels are built — reuse `create_company` + the `voyages_config` ServicePoint/ConsignmentType factories already used there). The helper must return a dict with `company, origin, destination, ctype, user` where `destination.station_kind == "AGENCY"`.

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_parcel_sender_client.py -q --reuse-db`
Expected: FAIL — unexpected keyword `sender_civility` / `Parcel has no attribute sender_client`.

- [ ] **Step 3: Add the model field**

In `parcel.py`, after the sender fields:
```python
    sender_client = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("client expéditeur"),
                                      on_delete=models.SET_NULL, null=True, blank=True,
                                      related_name="parcels_sent")
```

- [ ] **Step 4: Link it in `register_parcel`**

Add the kwargs `sender_civility="", sender_id_type="cni", sender_id_number=""` to the signature. Before `Parcel.objects.create(...)`, resolve the client:
```python
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    sender_client = get_or_create_passenger(
        company, id_type=sender_id_type, id_number=sender_id_number, phone=sender_phone,
        name=sender_name, civility=sender_civility, user=user) if sender_name else None
```
Add `sender_client=sender_client,` to the `Parcel.objects.create(...)` kwargs.

- [ ] **Step 5: Serializer + view**

In the parcel **create serializer** (`config_api/serializers.py`), add write fields `sender_civility` (choices mr/mrs/miss, allow blank), `sender_id_type` (default "cni"), `sender_id_number` (allow blank). In the create **view** (`config_api/views.py`, the parcel `post`), pass them into `register_parcel(...)`.

- [ ] **Step 6: Make migration + run tests**

Run: `cd backend && ../env/bin/python manage.py makemigrations voyages_consignment`
Then the test file → 2 passed; `makemigrations --check` clean.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment/ 
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis): link sender_client (Passenger) on parcel registration"
```

---

## Task 3: `Baggage.sender_client` + link on create

**Files:**
- Modify: `backend/apps/voyages_consignment/models/baggage.py`
- Modify: `backend/apps/voyages_consignment/services/baggage_services.py` (`add_baggage`)
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py` (baggage create serializer)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (baggage create view)
- Create: migration (via makemigrations)
- Test: `backend/apps/voyages_consignment/test_baggage_sender_client.py`

**Interfaces:**
- Consumes: `get_or_create_passenger` (Task 1).
- Produces: `Baggage.sender_client` (FK Passenger, null, `related_name="baggage_sent"`); `add_baggage(..., id_type="cni", id_number="", ...)` links it from `sender_name`/`civility` (when there is no linked ticket passenger).

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_consignment/test_baggage_sender_client.py
import pytest
from apps.system_config.services import create_company
from apps.voyages_booking.models import Passenger
from apps.voyages_consignment.tests.factories import make_trip_for_baggage  # see note


@pytest.mark.django_db
def test_add_baggage_links_sender_client():
    ctx = make_trip_for_baggage()      # {company, trip, ctype, user}
    from apps.voyages_consignment.services.baggage_services import add_baggage
    b = add_baggage(ctx["company"], trip=ctx["trip"], consignment_type=ctx["ctype"],
                    sender_name="Awa Diallo", sender_phone="620111222", civility="mrs",
                    id_type="cni", id_number="CNI-9", declared_value=1, user=ctx["user"])
    assert b.sender_client is not None
    assert b.sender_client.civility == "mrs"
    assert b.sender_client.name == "Awa Diallo"
```

**Note for the implementer:** build `make_trip_for_baggage` the way existing baggage tests build a trip + consignment type (grep `apps/voyages_consignment/tests` and `apps/voyages_trips` test helpers). Must return `company, trip, ctype, user`.

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_baggage_sender_client.py -q --reuse-db`
Expected: FAIL — `Baggage has no attribute sender_client` / unexpected keyword `id_number`.

- [ ] **Step 3: Add the model field**

In `baggage.py`, after the sender/civility fields:
```python
    sender_client = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("client"),
                                      on_delete=models.SET_NULL, null=True, blank=True,
                                      related_name="baggage_sent")
```

- [ ] **Step 4: Link it in `add_baggage`**

`add_baggage` already accepts `sender_name, sender_phone, civility`. Add `id_type="cni", id_number=""` to the signature. Before/at `Baggage.objects.create(...)`, resolve the client when there is a standalone sender (no ticket passenger):
```python
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    sender_client = None
    if sender_name:
        sender_client = get_or_create_passenger(
            company, id_type=id_type, id_number=id_number, phone=sender_phone,
            name=sender_name, civility=civility, user=user)
```
Add `sender_client=sender_client,` to the create kwargs. Add `id_type`/`id_number` to the `Baggage.objects.create(...)` too if the model stores them (it has `id_type`/`id_number` columns per the model) — keep snapshot consistent.

- [ ] **Step 5: Serializer + view**

In the baggage **create serializer**, add write fields `id_type` (default "cni") and `id_number` (blank) if not already present; `civility` already exists. In the baggage create **view**, pass `id_type`/`id_number` into `add_baggage(...)`.

- [ ] **Step 6: Make migration + run tests**

Run: `cd backend && ../env/bin/python manage.py makemigrations voyages_consignment`
Then the test → 1 passed; `makemigrations --check` clean.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(bagage): link sender_client (Passenger) on baggage registration"
```

---

## Task 4: Booking/réservation buyer carries civilité

**Files:**
- Modify: `backend/apps/voyages_booking/services/booking_services.py` and/or `reservation_services.py` (`_resolve_passenger`)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (buyer spec serializer — add `civility`)
- Test: `backend/apps/voyages_booking/test_buyer_civility.py`

**Interfaces:**
- Consumes: `get_or_create_passenger(..., civility=...)` (Task 1).
- Produces: the buyer spec accepts `civility` and it reaches the created Passenger.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_booking/test_buyer_civility.py
import pytest
from apps.voyages_booking.services.booking_services import _resolve_passenger
from apps.system_config.models import Company


@pytest.mark.django_db
def test_resolve_passenger_passes_civility():
    c = Company.objects.create(name="BuyCo", slug="buyco")
    spec = {"name": "Awa", "phone": "620999000", "id_type": "cni", "id_number": "Z9", "civility": "mrs"}
    p = _resolve_passenger(c, spec, None)
    assert p.civility == "mrs"
```

**Note:** confirm `_resolve_passenger`'s spec access pattern (it reads keys from the buyer dict). If it uses `.get(...)`, add `civility=spec.get("civility", "")` to its `get_or_create_passenger(...)` call. Adjust the import/signature in the test to match the real `_resolve_passenger` signature (grep it first).

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_buyer_civility.py -q --reuse-db`
Expected: FAIL — civility empty (not threaded).

- [ ] **Step 3: Thread civility**

In `_resolve_passenger`, pass `civility=spec.get("civility", "")` into `get_or_create_passenger(...)`. In the buyer spec serializer, add a `civility` write field (choices mr/mrs/miss, blank).

- [ ] **Step 4: Run to verify pass**

Run: the test file → 1 passed.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_booking/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(booking): buyer civility flows to the client record"
```

---

## Task 5: Dashboard "clients" = distinct buyers across tickets + colis + bagage

**Files:**
- Modify: `backend/apps/voyages_trips/dashboard/selectors.py` (`monthly_series`, `metric == "clients"`)
- Test: `backend/apps/voyages_trips/dashboard/tests/test_clients_metric.py`

**Interfaces:**
- Consumes: `Parcel.sender_client` (Task 2), `Baggage.sender_client` (Task 3), `Booking.buyer`/`Ticket`.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/voyages_trips/dashboard/tests/test_clients_metric.py
import pytest
from datetime import date
from apps.system_config.services import create_company
from apps.authentication.models import User
from apps.voyages_booking.models import Passenger
from apps.voyages_trips.dashboard.selectors import monthly_series


def _link_parcel_sender(company, passenger):
    # minimal: create a non-cancelled Parcel with sender_client=passenger in this company.
    # Build prereqs as in apps/voyages_consignment tests; set created_at year = today.
    ...


@pytest.mark.django_db
def test_clients_includes_parcel_only_buyer():
    company, _ = create_company(name="DCo", admin_email="d@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="d@x.com")
    p = Passenger.objects.create(company=company, name="ColisOnly", phone="620000001")
    _link_parcel_sender(company, p)
    series = monthly_series(company, admin, date.today().year, "clients")
    assert sum(series) >= 1


@pytest.mark.django_db
def test_clients_same_person_counts_once():
    # a passenger linked to BOTH a ticket and a parcel contributes 1, not 2.
    ...
```

**Note for the implementer:** flesh out `_link_parcel_sender` and the ticket/baggage linking using the consignment + booking test helpers (grep existing dashboard tests `test_series.py` for how tickets are created). The three assertions to cover: parcel-only buyer counted; same person across ticket+parcel counts once; a parcel in another agency is excluded for an agency-scoped user.

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/test_clients_metric.py -q --reuse-db`
Expected: FAIL — parcel-only buyer not counted (current metric only sees ticket passengers).

- [ ] **Step 3: Rewrite the `clients` branch**

Replace the `metric == "clients"` branch in `monthly_series` with a two-step (ids then bucket, to avoid join multiplication):
```python
    if metric == "clients":
        from django.db.models import Q
        from apps.voyages_booking.models import Passenger
        tick = Q(tickets__is_deleted=False) & ~Q(tickets__status="cancelled")
        parc = Q(parcels_sent__is_deleted=False) & ~Q(parcels_sent__status="cancelled")
        bag  = Q(baggage_sent__is_deleted=False) & ~Q(baggage_sent__status="cancelled")
        if ids is not None:
            tick &= Q(tickets__trip__origin__agency_id__in=ids)
            parc &= Q(parcels_sent__agency_id__in=ids)
            bag  &= Q(baggage_sent__trip__origin__agency_id__in=ids)
        client_ids = list(
            Passenger.objects.filter(is_deleted=False, company=company, created_at__year=year)
            .filter(tick | parc | bag).values_list("id", flat=True).distinct())
        out = [0] * 12
        rows = (Passenger.objects.filter(id__in=client_ids)
                .annotate(m=ExtractMonth("created_at")).values("m")
                .annotate(c=Count("id", distinct=True)))
        for row in rows:
            if row["m"]:
                out[row["m"] - 1] = row["c"]
        return out
```

- [ ] **Step 4: Run to verify pass**

Run: the test file → all pass. Also run the existing dashboard tests: `../env/bin/python -m pytest apps/voyages_trips/dashboard/tests/ -q --reuse-db` → green (confirm the metric change didn't break `test_series.py`; if its assertions assumed the old ticket-only definition, update them to the new cross-source definition and note it).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_trips/dashboard/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(dashboard): clients = distinct buyers across tickets, colis, bagage"
```

---

## Task 6: Shared `ClientFieldsComponent` + `PassengerSpec.civility`

**Files:**
- Modify: `angular/src/_api/models/voyages-booking.models.ts` (`PassengerSpec` += `civility?`)
- Create: `angular/src/_api/pages/voyages-booking/shared/client-fields/client-fields.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/shared/client-fields/client-fields.component.html`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (shared civility labels)

**Interfaces:**
- Produces: `app-client-fields` with `@Input({required:true}) row!: PassengerSpec`, rendering civilité + name-autocomplete + phone + ID, mutating `row`.

- [ ] **Step 1: Extend the model**

In `voyages-booking.models.ts`, add `civility?: string;` to `PassengerSpec`.

- [ ] **Step 2: Create the component**

Reuse the existing autocomplete search logic (copy the debounced `PassengerService.list(q)` lookup from `client-autocomplete.component.ts`). Component:
```typescript
// client-fields.component.ts
import { Component, Input, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TranslocoModule } from '@jsverse/transloco';
import { PassengerService } from '../../../../services/voyages-booking/passenger.service';
import { Passenger, PassengerSpec } from '../../../../models/voyages-booking.models';

@Component({
  selector: 'app-client-fields',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './client-fields.component.html',
})
export class ClientFieldsComponent {
  @Input({ required: true }) row!: PassengerSpec;
  private svc = inject(PassengerService);
  private host = inject(ElementRef<HTMLElement>);
  results: Passenger[] = [];
  open = false;
  private q$ = new Subject<string>();
  constructor() {
    this.q$.pipe(debounceTime(250), distinctUntilChanged(), switchMap(q => this.svc.list(q)))
      .subscribe(r => { this.results = (r ?? []).slice(0, 8); this.open = this.results.length > 0; });
  }
  onInput(v: string) {
    this.row.name = v; this.row.id = undefined;
    if (v && v.trim().length >= 2) this.q$.next(v.trim()); else { this.results = []; this.open = false; }
  }
  pick(p: Passenger) {
    this.row.id = p.id; this.row.name = p.name; this.row.phone = p.phone;
    this.row.id_type = p.id_type; this.row.id_number = p.id_number;
    this.row.civility = (p as any).civility ?? '';
    this.open = false;
  }
  hide() { setTimeout(() => (this.open = false), 150); }
}
```

```html
<!-- client-fields.component.html -->
<div class="row g-3">
  <div class="col-md-2">
    <label class="form-label">{{ 'shared.civility.label' | transloco }}</label>
    <select class="form-select" [(ngModel)]="row.civility">
      <option value="">—</option>
      <option value="mr">{{ 'shared.civility.mr' | transloco }}</option>
      <option value="mrs">{{ 'shared.civility.mrs' | transloco }}</option>
      <option value="miss">{{ 'shared.civility.miss' | transloco }}</option>
    </select>
  </div>
  <div class="col-md-4 position-relative">
    <label class="form-label">{{ 'shared.client.name' | transloco }}</label>
    <input class="form-control" [ngModel]="row.name" (ngModelChange)="onInput($event)" (blur)="hide()"
           [placeholder]="'shared.client.name_ph' | transloco" autocomplete="off" />
    @if (open) {
      <ul class="list-group position-absolute w-100 shadow-sm" style="z-index:1050; max-height:240px; overflow:auto">
        @for (p of results; track p.id) {
          <li class="list-group-item list-group-item-action" (mousedown)="pick(p)">
            {{ p.name }} @if (p.phone) { <small class="text-muted">· {{ p.phone }}</small> }
            @if (p.id_number) { <small class="text-muted">· {{ p.id_type_display || 'CNI' }} {{ p.id_number }}</small> }
          </li>
        }
      </ul>
    }
  </div>
  <div class="col-md-2">
    <label class="form-label">{{ 'shared.client.phone' | transloco }}</label>
    <input class="form-control" [(ngModel)]="row.phone" />
  </div>
  <div class="col-md-2">
    <label class="form-label">{{ 'shared.client.id_type' | transloco }}</label>
    <select class="form-select" [(ngModel)]="row.id_type">
      <option value="cni">CNI</option><option value="passport">{{ 'shared.client.passport' | transloco }}</option>
      <option value="permis">{{ 'shared.client.license' | transloco }}</option>
    </select>
  </div>
  <div class="col-md-2">
    <label class="form-label">{{ 'shared.client.id_number' | transloco }}</label>
    <input class="form-control" [(ngModel)]="row.id_number" />
  </div>
</div>
```

- [ ] **Step 3: Add i18n**

Add `shared.civility.{label,mr,mrs,miss}` and `shared.client.{name,name_ph,phone,id_type,id_number,passport,license}` to all four locales (fr/en/es/pt). fr civility: label "Civilité", mr "M.", mrs "Mme", miss "Mlle".

- [ ] **Step 4: Build**

Run: `cd angular && npx ng build --configuration development` → success.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/models/voyages-booking.models.ts angular/src/_api/pages/voyages-booking/shared/client-fields/ angular/public/i18n/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(ui): shared ClientFieldsComponent (civilité + name search + phone + ID)"
```

---

## Task 7: Redesign the ticket-sale / réservation form (`new-booking`)

**Files:**
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.ts` (swap import, send `civility` in buyer spec)
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.html` (grid redesign + `app-client-fields`)

- [ ] **Step 1: Swap the client capture**

Replace the `ClientAutocompleteComponent` import/usage with `ClientFieldsComponent` (`app-client-fields`). Ensure the buyer object sent on submit includes `civility` (it's on the bound `PassengerSpec`).

- [ ] **Step 2: Redesign the layout**

Restructure the template into grouped sections per the spec (§6): **Client** (`<app-client-fields [row]="buyer">`), **Voyage** (trip/route/seat), **Paiement** (method/amount). Every input row is a `.row g-3` with `col-md-*` summing to 12; all controls `form-control`/`form-select`; labels `form-label`; footer buttons right-aligned. Remove stray inline widths that cause the uneven/overlap. Keep both modes (ticket sale & réservation) working — the mode flag only changes labels/submit, not the client section.

- [ ] **Step 3: Build**

Run: `cd angular && npx ng build --configuration development` → success.

- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/voyages-booking/new-booking/
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(ui): professional redesign of ticket-sale/réservation form + client fieldset"
```

---

## Task 8: Redesign the colis form (`parcels`)

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts` (client spec object + send sender_civility/id fields)
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html` (grid redesign + `app-client-fields` for sender)
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts` (include sender client fields in the create payload)

- [ ] **Step 1: Add a client spec + wire the fieldset**

Add a `senderClient: PassengerSpec = {}` to the component; render `<app-client-fields [row]="senderClient">` for the **sender** section. On create, map it into the payload: `sender_name: senderClient.name, sender_phone: senderClient.phone, sender_civility: senderClient.civility, sender_id_type: senderClient.id_type, sender_id_number: senderClient.id_number`.

- [ ] **Step 2: Redesign the layout**

Grouped sections (§6): **Client — expéditeur** (`app-client-fields`), **Destinataire** (free-text name/phone/address, `.row g-3`), **Colis** (type/weight/description/declared value), **Paiement**. Consistent grid, no overlaps.

- [ ] **Step 3: Build + commit**

Run: `cd angular && npx ng build --configuration development` → success.
```bash
git add angular/src/_api/pages/voyages-consignment/parcels/ angular/src/_api/services/voyages-consignment/parcel.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(ui): professional redesign of colis form + sender client fieldset"
```

---

## Task 9: Redesign the bagage form (`baggage`)

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts` (client spec + send id fields; drop the ad-hoc civility select)
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html` (grid redesign + `app-client-fields`)
- Modify: `angular/src/_api/services/voyages-consignment/baggage.service.ts` (include id_type/id_number in payload)

- [ ] **Step 1: Wire the fieldset**

Replace the standalone sender name/phone/civility inputs with `<app-client-fields [row]="senderClient">` (a `PassengerSpec` on the component). Map to the create payload: `sender_name, sender_phone, civility, id_type, id_number` from `senderClient`. (The form keeps its ticket-passenger path unchanged; the fieldset governs the standalone-sender case.)

- [ ] **Step 2: Redesign the layout**

Grouped sections (§6): **Client** (`app-client-fields`), **Bagage** (trip/type/weight/value), **Paiement**. Consistent grid.

- [ ] **Step 3: Build + commit**

Run: `cd angular && npx ng build --configuration development` → success.
```bash
git add angular/src/_api/pages/voyages-consignment/baggage/ angular/src/_api/services/voyages-consignment/baggage.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(ui): professional redesign of bagage form + client fieldset"
```

---

## Final verification (after all tasks)

```bash
cd backend && ../env/bin/python -m pytest \
  apps/voyages_booking/test_passenger_civility.py \
  apps/voyages_booking/test_buyer_civility.py \
  apps/voyages_consignment/test_parcel_sender_client.py \
  apps/voyages_consignment/test_baggage_sender_client.py \
  apps/voyages_trips/dashboard/tests/ -q --reuse-db
```
Expected: all pass. Then `../env/bin/python manage.py makemigrations --check --dry-run` → only the three new field migrations exist (no drift). Then `cd angular && npx ng build --configuration development` → success.

**Verification note (frontend):** the professional redesign of the three forms is visual; the build proves it compiles, but the user confirms look/feel on the running build. The implementer should keep each form's existing submit/validation behavior intact — only the client capture and layout change.
