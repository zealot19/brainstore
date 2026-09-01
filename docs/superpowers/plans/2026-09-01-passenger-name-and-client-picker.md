# Passenger single "Nom" + client picker — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Passenger `first_name`/`last_name` with a single `name` (Nom) field and make the booking Nom input a type-or-create client typeahead.

**Architecture:** Keep `full_name` as a property alias (`= name`) so all existing read paths are untouched; only the model, migration, write/search services, serializers, seeds, and two frontend spots change. A new `ClientAutocompleteComponent` drives the booking Nom field, reusing the existing `GET passengers/?q=` search.

**Tech Stack:** Django + DRF, pytest; Angular 17 standalone components.

**Spec:** `docs/superpowers/specs/2026-09-01-passenger-name-and-client-picker-design.md`

## Global Constraints

- French UI copy; the field label is **"Nom"**.
- `Passenger.full_name` remains a property returning `self.name` — never remove it; it is the read API used everywhere.
- Booking still supports selecting an existing client by `id` (the `_resolve_passenger` id branch is unchanged).
- The booking passenger/buyer spec is a free `DictField` (service reads keys) — the booking serializer needs **no** field change; only `_resolve_passenger` changes.
- List/search responses keep their existing shapes; `GET passengers/?q=` returns the passenger list.
- Backend tests via `pytest` from `backend/` using `../env/bin/python -m pytest`. Frontend verified with `cd angular && npx ng build`.
- Commits authored as shimi, no Claude trailer:
  `git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "..."`

---

### Task 1: Passenger model + data migration

**Files:**
- Modify: `backend/apps/voyages_booking/models/passenger.py`
- Create: `backend/apps/voyages_booking/migrations/0005_passenger_single_name.py`
- Test: `backend/apps/voyages_booking/test_passenger_name.py`

**Interfaces:**
- Produces: `Passenger.name` (CharField), `Passenger.full_name` (property → `name`).

- [ ] **Step 1: Write the failing test**

Create `backend/apps/voyages_booking/test_passenger_name.py`:

```python
import pytest
from apps.voyages_booking.models import Passenger


def _company(name="PaxCo", email="pax@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_passenger_has_single_name_and_full_name_alias():
    company = _company()
    p = Passenger.objects.create(company=company, name="Alice Ngo", phone="699000001")
    assert p.name == "Alice Ngo"
    assert p.full_name == "Alice Ngo"
    assert not hasattr(Passenger, "first_name") or "first_name" not in [f.name for f in Passenger._meta.fields]
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: FAIL — `Passenger() got unexpected keyword arguments: 'name'` (field missing).

- [ ] **Step 3: Edit the model**

In `backend/apps/voyages_booking/models/passenger.py`, replace the two name fields and update ordering/property:

```python
    # remove: first_name = ...  and  last_name = ...
    name       = models.CharField(_("nom"), max_length=300)
```

Set `class Meta` ordering to `["name"]`, keep `__str__` as-is, and make the property:

```python
    @property
    def full_name(self) -> str:
        return self.name
```

- [ ] **Step 4: Create the migration**

Create `backend/apps/voyages_booking/migrations/0005_passenger_single_name.py`:

```python
from django.db import migrations, models


def combine(apps, schema_editor):
    Passenger = apps.get_model("voyages_booking", "Passenger")
    for p in Passenger.objects.all():
        p.name = f"{p.first_name} {p.last_name}".strip()
        p.save(update_fields=["name"])


def split(apps, schema_editor):
    Passenger = apps.get_model("voyages_booking", "Passenger")
    for p in Passenger.objects.all():
        first, _, last = (p.name or "").partition(" ")
        p.first_name, p.last_name = first, last


class Migration(migrations.Migration):
    dependencies = [("voyages_booking", "0004_booking_return_open")]
    operations = [
        migrations.AddField(
            model_name="passenger",
            name="name",
            field=models.CharField(default="", max_length=300, verbose_name="nom"),
            preserve_default=False,
        ),
        migrations.RunPython(combine, split),
        migrations.RemoveField(model_name="passenger", name="first_name"),
        migrations.RemoveField(model_name="passenger", name="last_name"),
        migrations.AlterModelOptions(name="passenger", options={"ordering": ["name"], "verbose_name": "passager", "verbose_name_plural": "passagers"}),
    ]
```

> Note: match the `verbose_name_plural` to whatever `BaseModel.Meta`/the model currently produces; if the model has no explicit plural, use `"passagers"`. Run Step 5; if `makemigrations --check` reports a diff on options, copy the exact options dict it wants.

- [ ] **Step 5: Run test + migration check**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: PASS.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_booking/models/passenger.py backend/apps/voyages_booking/migrations/0005_passenger_single_name.py backend/apps/voyages_booking/test_passenger_name.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): passager Nom unique + migration (full_name alias)"
```

---

### Task 2: Services + search + seeds

**Files:**
- Modify: `backend/apps/voyages_booking/services/passenger_services.py`
- Modify: `backend/apps/voyages_booking/services/booking_services.py` (`_resolve_passenger`, ~line 43-48)
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (`find_passengers`, ~line 12-17)
- Modify: `backend/apps/voyages_booking/management/commands/seed_voyageur_express.py`, `seed_voyages_demo.py`
- Modify: `backend/apps/voyages_booking/tests_integration_treasury.py` (shared `_book` helper), `backend/apps/voyages_booking/test_stats.py`
- Test: append to `backend/apps/voyages_booking/test_passenger_name.py`

**Interfaces:**
- Consumes: `Passenger.name` (Task 1).
- Produces: `get_or_create_passenger(company, *, id_type, id_number, phone, name, gender="", birth_date=None, email="", notes="", user=None)`; `find_passengers(company, q)` matching name/phone/id_number.

- [ ] **Step 1: Write the failing tests**

Append to `backend/apps/voyages_booking/test_passenger_name.py`:

```python
@pytest.mark.django_db
def test_get_or_create_passenger_with_name():
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    company = _company(name="GC", email="gc@x.com")
    p = get_or_create_passenger(company, id_type="cni", id_number="", phone="690111",
                                name="Bruno Foka")
    assert p.name == "Bruno Foka"
    # dedup on phone regardless of name
    again = get_or_create_passenger(company, id_type="cni", id_number="", phone="690111",
                                    name="Autre Nom")
    assert again.id == p.id


@pytest.mark.django_db
def test_find_passengers_by_name():
    from apps.voyages_booking.selectors import find_passengers
    company = _company(name="FP", email="fp@x.com")
    Passenger.objects.create(company=company, name="Alice Ngo", phone="699000001")
    Passenger.objects.create(company=company, name="Bob Sar", phone="699000002")
    assert find_passengers(company, "ali").count() == 1
    assert find_passengers(company, "699000002").count() == 1
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: FAIL — `get_or_create_passenger() got an unexpected keyword argument 'name'`.

- [ ] **Step 3: Update the services + selector**

`services/passenger_services.py` — change the signature and create call:

```python
def get_or_create_passenger(company, *, id_type, id_number, phone,
                            name, gender="", birth_date=None,
                            email="", notes="", user=None):
```
and in the `Passenger.objects.create(...)` call replace `first_name=first_name, last_name=last_name,` with `name=name,`.

`services/booking_services.py::_resolve_passenger` — in the
`get_or_create_passenger(...)` call, replace
`first_name=spec.get("first_name", ""), last_name=spec.get("last_name", ""),`
with `name=spec.get("name", ""),`.

`selectors/__init__.py::find_passengers` — replace the filter:

```python
    if q:
        qs = qs.filter(Q(name__icontains=q) | Q(phone__icontains=q) | Q(id_number__icontains=q))
```
and change the base `.order_by("last_name", "first_name")` to `.order_by("name")`.

- [ ] **Step 4: Update seed commands**

In `seed_voyageur_express.py` and `seed_voyages_demo.py`, replace every
passenger `first_name=fn, last_name=ln` and `{"first_name": ..., "last_name": ...}`
buyer/passenger spec with `name=f"{fn} {ln}"` / `{"name": f"{fn} {ln}", ...}`.
(Leave CrewMember/employee/`user.first_name` lines untouched — those are not Passenger.)

Verify they still import:
Run: `cd backend && ../env/bin/python -c "import apps.voyages_booking.management.commands.seed_voyages_demo, apps.voyages_booking.management.commands.seed_voyageur_express"`
Expected: no error.

Also update the shared test helpers that construct passengers with the old keys (they are imported by many tests, including this feature's):
- `tests_integration_treasury.py` `_book`: change `buyer_spec={"first_name": "Cli", "last_name": "Ent", "phone": "690"}` → `buyer_spec={"name": "Cli Ent", "phone": "690"}`, and the item `"passenger": {"first_name": "Cli", "last_name": "Ent", "phone": "690"}` → `{"name": "Cli Ent", "phone": "690"}`.
- `test_stats.py:27`: `Passenger.objects.create(company=company, first_name="J", last_name="D", phone="690")` → `Passenger.objects.create(company=company, name="J D", phone="690")`.

- [ ] **Step 5: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: PASS (all).

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_booking/services/passenger_services.py backend/apps/voyages_booking/services/booking_services.py backend/apps/voyages_booking/selectors/__init__.py backend/apps/voyages_booking/management/commands/seed_voyageur_express.py backend/apps/voyages_booking/management/commands/seed_voyages_demo.py backend/apps/voyages_booking/test_passenger_name.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): services/recherche passager par Nom + seeds"
```

---

### Task 3: Serializers + booking API tests

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (`PassengerRead` fields ~line 12, `PassengerWrite` ~line 18-19)
- Test: append to `backend/apps/voyages_booking/test_passenger_name.py`

**Interfaces:**
- Consumes: services from Task 2; `_setup`/`_book` from `apps/voyages_booking/tests_integration_treasury.py`.
- Produces: `PassengerRead` exposes `name` + `full_name`; `PassengerWrite` requires `name`.

- [ ] **Step 1: Write the failing tests**

Append to `backend/apps/voyages_booking/test_passenger_name.py`:

```python
@pytest.mark.django_db
def test_passenger_write_serializer_requires_name():
    from apps.voyages_booking.config_api.serializers import PassengerWrite, PassengerRead
    company = _company(name="SC", email="sc@x.com")
    assert not PassengerWrite(data={"phone": "690"}).is_valid()
    ser = PassengerWrite(data={"name": "Carine Meli", "phone": "690"})
    assert ser.is_valid(), ser.errors
    p = Passenger.objects.create(company=company, name="Carine Meli", phone="690")
    data = PassengerRead(p).data
    assert data["name"] == "Carine Meli" and data["full_name"] == "Carine Meli"


@pytest.mark.django_db
def test_booking_with_name_creates_client_and_id_reuses():
    from apps.voyages_booking.models import Passenger
    from apps.voyages_booking.services.booking_services import create_booking
    from apps.voyages_booking.tests_integration_treasury import _setup
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    seat = trip.seats.order_by("column").first()
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "Alice Ngo", "phone": "699"},
                       items=[{"passenger": {"name": "Alice Ngo", "phone": "699"},
                               "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
                       payment_method="cash", user=admin)
    pax = Passenger.objects.get(company=company, name="Alice Ngo")
    seat2 = trip.seats.order_by("column").last()
    create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                   buyer_spec={"id": str(pax.id)},
                   items=[{"passenger": {"id": str(pax.id)},
                           "destination_point_id": None, "outbound_seat_id": str(seat2.id)}],
                   payment_method="cash", user=admin)
    assert Passenger.objects.filter(company=company, name="Alice Ngo").count() == 1
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: FAIL — `PassengerWrite` has no `name` field / `PassengerRead` KeyError `name`.

- [ ] **Step 3: Update serializers**

`config_api/serializers.py`:
- `PassengerRead.Meta.fields`: replace `"first_name", "last_name",` with `"name",` (keep `"full_name"`).
- `PassengerWrite`: replace the two lines
  `first_name = serializers.CharField(max_length=150)` /
  `last_name = serializers.CharField(max_length=150)` with
  `name = serializers.CharField(max_length=300)`.

- [ ] **Step 4: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_booking/test_passenger_name.py -q`
Expected: PASS (all).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_booking/config_api/serializers.py backend/apps/voyages_booking/test_passenger_name.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): serializers passager Nom (read/write) + tests reservation"
```

---

### Task 4: Frontend types + Passagers page

**Files:**
- Modify: `angular/src/_api/models/voyages-booking.models.ts` (`Passenger` ~line 2, `PassengerSpec` ~line 47-49)
- Modify: `angular/src/_api/pages/voyages-booking/passengers/passengers.component.ts` (form ~line 25-26, `openEdit` ~line 41)
- Modify: `angular/src/_api/pages/voyages-booking/passengers/passengers.component.html` (fields ~line 46-47, table cell ~line 24 already uses `full_name`)

**Interfaces:**
- Consumes: backend `name` field (Tasks 1-3).
- Produces: `Passenger.name`, `PassengerSpec.name` (TS).

- [ ] **Step 1: Update TS types**

In `models/voyages-booking.models.ts`:
- `Passenger`: replace `first_name: string; last_name: string;` with `name: string;` (keep `full_name: string;`).
- `PassengerSpec`: replace `first_name?: string; last_name?: string;` with `name?: string;`.

- [ ] **Step 2: Update the Passagers form (TS)**

In `passengers.component.ts`:
- Form group: replace
  `first_name: [null, Validators.required], last_name: [null, Validators.required],`
  with `name: [null, Validators.required],`.
- `openEdit`: replace `first_name: r.first_name, last_name: r.last_name,` with `name: r.name,`.

- [ ] **Step 3: Update the Passagers form (HTML)**

In `passengers.component.html`, replace the two columns (Prénom + Nom, ~lines 46-47):

```html
      <div class="col-md-12 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
```
(The table cell at line 24 already renders `r.full_name` — leave it.)

- [ ] **Step 4: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/models/voyages-booking.models.ts angular/src/_api/pages/voyages-booking/passengers/passengers.component.ts angular/src/_api/pages/voyages-booking/passengers/passengers.component.html
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): passager Nom unique (types + page Passagers)"
```

---

### Task 5: ClientAutocompleteComponent

**Files:**
- Create: `angular/src/_api/pages/voyages-booking/shared/client-autocomplete/client-autocomplete.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/shared/client-autocomplete/client-autocomplete.component.html`

**Interfaces:**
- Consumes: `PassengerService.list(q)` (`services/voyages-booking/passenger.service.ts`) returning `Passenger[]`.
- Produces: `<app-client-autocomplete [row]="p">` — a component that mutates the bound row's `name`, `phone`, `id_type`, `id_number`, and `id` fields. `row` is a `PassengerSpec`-shaped object (`{ id?, name?, phone?, id_type?, id_number? }`).

- [ ] **Step 1: Create the component TS**

Create `client-autocomplete.component.ts`:

```ts
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PassengerService } from '../../../../services/voyages-booking/passenger.service';
import { Passenger, PassengerSpec } from '../../../../models/voyages-booking.models';

@Component({
  selector: 'app-client-autocomplete',
  standalone: true,
  templateUrl: './client-autocomplete.component.html',
  imports: [CommonModule, FormsModule],
})
export class ClientAutocompleteComponent {
  @Input({ required: true }) row!: PassengerSpec;
  private passengerSvc = inject(PassengerService);
  results: Passenger[] = [];
  open = false;
  private q$ = new Subject<string>();

  constructor() {
    this.q$.pipe(
      debounceTime(250), distinctUntilChanged(),
      switchMap(q => this.passengerSvc.list(q)),
    ).subscribe(r => { this.results = (r ?? []).slice(0, 8); this.open = this.results.length > 0; });
  }

  onInput(value: string): void {
    this.row.name = value;
    this.row.id = undefined;          // typing after a pick unlinks the client
    if (value && value.trim().length >= 2) this.q$.next(value.trim());
    else { this.results = []; this.open = false; }
  }

  pick(p: Passenger): void {
    this.row.id = p.id;
    this.row.name = p.name;
    this.row.phone = p.phone;
    this.row.id_type = p.id_type;
    this.row.id_number = p.id_number;
    this.open = false;
  }

  hide(): void { setTimeout(() => (this.open = false), 150); }
}
```

- [ ] **Step 2: Create the component HTML**

Create `client-autocomplete.component.html`:

```html
<div class="position-relative">
  <input class="form-control form-control-sm" [ngModel]="row.name"
         (ngModelChange)="onInput($event)" (blur)="hide()" placeholder="Nom du client" />
  @if (open) {
    <ul class="list-group position-absolute w-100 shadow-sm" style="z-index:1080; max-height:220px; overflow:auto;">
      @for (p of results; track p.id) {
        <li class="list-group-item list-group-item-action py-1 px-2" style="cursor:pointer;"
            (mousedown)="pick(p)">
          <span class="fw-medium">{{ p.name }}</span>
          <small class="text-muted"> · {{ p.phone }}</small>
        </li>
      }
    </ul>
  }
</div>
```

> Note: `(mousedown)` (not `(click)`) so the pick fires before the input's `(blur)` closes the list.

- [ ] **Step 3: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds (component compiles even though not yet used).

- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/voyages-booking/shared/client-autocomplete
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): ClientAutocompleteComponent (recherche client type-or-create)"
```

---

### Task 6: Integrate autocomplete into new-booking

**Files:**
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.ts` (imports, PaxRow default ~line 116-119, validity ~line 146, payload ~line 155-158)
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.html` (passenger table header ~line 94, rows ~line 99-100)

**Interfaces:**
- Consumes: `ClientAutocompleteComponent` (Task 5); `PassengerSpec.name` (Task 4).

- [ ] **Step 1: Import the component + fix PaxRow defaults**

In `new-booking.component.ts`:
- Add to `imports`: `ClientAutocompleteComponent` (import from `../shared/client-autocomplete/client-autocomplete.component`).
- In the row-building code (`rows.push(this.passengers[i] ?? { first_name: '', last_name: '', phone: '', id_type: 'cni', id_number: '', ... })`), replace `first_name: '', last_name: '',` with `name: '',`.

- [ ] **Step 2: Fix validity + payload**

In `new-booking.component.ts`:
- Validity check: replace
  `if (this.passengers.some(p => !p.first_name || !p.last_name || !p.phone)) return false;`
  with `if (this.passengers.some(p => !p.name || !p.phone)) return false;`.
- Payload build: in the item `passenger` object, replace
  `first_name: p.first_name, last_name: p.last_name,` with `id: p.id, name: p.name,`.

- [ ] **Step 3: Update the passenger table (HTML)**

In `new-booking.component.html`:
- Header (~line 94): replace `<th>Prénom</th><th>Nom</th>` with a single `<th>Nom</th>`.
- Rows (~lines 99-100): replace the two `<td><input ... [(ngModel)]="p.first_name" /></td>` /
  `[(ngModel)]="p.last_name"` cells with one:

```html
            <td><app-client-autocomplete [row]="p"></app-client-autocomplete></td>
```

- [ ] **Step 4: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.ts angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.html
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): reservation - selecteur client (Nom) type-or-create"
```

---

### Task 7: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Full backend suite**

Run: `cd backend && ../env/bin/python -m pytest -q`
Expected: all pass (watch for any test still constructing a Passenger with `first_name`/`last_name` — `test_stats.py:27` must be updated to `name="J D"` if it fails).

- [ ] **Step 2: Fix stragglers if any**

If `test_stats.py` (or another) fails because it builds `Passenger(first_name=..., last_name=...)`, change it to `name="..."` and re-run.

- [ ] **Step 3: Migration drift check**

Run: `cd backend && ../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 4: Frontend build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 5: Apply migration to dev DB (manual note)**

Note for the human: run `../env/bin/python manage.py migrate` on the dev DB so existing passengers get their `name` combined (prod auto-migrates on deploy).

---

## Notes for the executor

- **Do not remove `full_name`** — it is a property alias; removing it breaks tickets, loyalty, roadmap/manifest PDFs, and booking read serializers.
- The booking `passenger`/`buyer` spec is a `DictField`, so the only booking-side change is `_resolve_passenger` reading `spec.get("name")`.
- `test_stats.py:27` and `tests_integration_treasury.py:41-42` construct passengers with first/last — Task 7 updates any that fail. (The integration file's `_book` helper uses `buyer_spec`/`passenger` dicts with `first_name`/`last_name`; update those to `{"name": "Cli Ent", ...}` when they surface in Step 1.)
- `(mousedown)` on the dropdown item is deliberate — it beats the input `(blur)`.
