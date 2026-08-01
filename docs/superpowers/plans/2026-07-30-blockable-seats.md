# Blockable Seats Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let operators mark passenger seats in a vehicle category as blocked (unsellable), chosen on the seat map; blocked seats reduce capacity and can't be booked.

**Architecture:** Add `blocked_seats` (JSON string list) to `VehicleCategory`; the booking service rejects blocked seats and nets them out of availability. The shared `SeatMapComponent` gains a blockable edit mode and a `blocked` render input; the category form edits the list, and the booking seat-picker renders category-blocked seats as unavailable.

**Tech Stack:** Django + DRF (backend), Angular 21 standalone components (frontend), SQLite (dev).

## Global Constraints

- **No test framework** (backend or frontend). Verify via `../env/bin/python manage.py check`/`migrate` + shell smoke-checks (backend) and `cd angular && npx ng build` + manual check (frontend). No pytest/jasmine.
- **① Blocked seats reduce capacity:** availability = `total_seats − blocked − booked`. `total_seats` stays the physical layout count.
- **② Blocking applies to numbered passenger seats** (1..N); seat numbers are **strings** matching `Booking.seat_number`.
- Backend runs via `../env/bin/python manage.py <cmd>` from `ERP-master/backend/`. Frontend from `angular/`.
- French UI. Commit after each task. Branch `feature/blockable-seats`.
- `transport_config` migrations are at `0002_fare_segment`; new migration chains from it.

---

### Task 1: `blocked_seats` field + migration

**Files:**
- Modify: `backend/apps/transport_config/models/vehicle_category.py`
- Create: `backend/apps/transport_config/migrations/0003_vehiclecategory_blocked_seats.py`

**Interfaces:**
- Produces: `VehicleCategory.blocked_seats` — JSON list, default `[]`.

- [ ] **Step 1: Add the field** after `free_seating` in the model:

```python
    blocked_seats    = models.JSONField(_("blocked seats"), default=list, blank=True,
                                        help_text=_("Seat numbers withheld from sale, e.g. [\"1\", \"2\"]."))
```

- [ ] **Step 2: Generate the migration**

Run: `../env/bin/python manage.py makemigrations transport_config 2>&1 | tail -4`
Expected: creates a migration adding `blocked_seats`. Rename the file to `0003_vehiclecategory_blocked_seats.py` if the generated name differs (class stays `Migration`).

- [ ] **Step 3: Apply + verify**

Run:
```bash
../env/bin/python manage.py migrate transport_config 2>&1 | tail -2
../env/bin/python manage.py shell -c "
from apps.transport_config.models import VehicleCategory
c = VehicleCategory.objects.first()
print('blocked_seats default:', c.blocked_seats, type(c.blocked_seats))
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `blocked_seats default: [] <class 'list'>`.

- [ ] **Step 4: Commit**

```bash
git add backend/apps/transport_config/models/vehicle_category.py backend/apps/transport_config/migrations/0003_vehiclecategory_blocked_seats.py
git commit -m "feat(transport): add blocked_seats to VehicleCategory"
```

---

### Task 2: Serializers + service accept blocked_seats

**Files:**
- Modify: `backend/apps/transport_config/serializers.py`
- Modify: `backend/apps/transport_config/services/services.py`

**Interfaces:**
- Consumes: `VehicleCategory.blocked_seats` (Task 1).
- Produces: `VehicleCategorySerializer` exposes `blocked_seats`; `VehicleCategoryWriteSerializer` accepts it; `create_vehicle_category(..., blocked_seats=None)`; update allows `blocked_seats`.

- [ ] **Step 1: `VehicleCategorySerializer`** — add `"blocked_seats"` to `Meta.fields` (after `"free_seating",`).

- [ ] **Step 2: `VehicleCategoryWriteSerializer`** — add the field (after `free_seating`):

```python
    blocked_seats    = serializers.ListField(child=serializers.CharField(), required=False, default=list)
```

- [ ] **Step 3: `create_vehicle_category`** — add param + persist. Change the signature to include `blocked_seats: list | None = None,` (before `created_by`) and add `blocked_seats=blocked_seats or [],` to the `VehicleCategory.objects.create(...)` call.

- [ ] **Step 4: `update_vehicle_category`** — add `"blocked_seats"` to the `allowed` set:

```python
    allowed = {
        "name", "total_seats", "seat_rows", "seat_cols", "aisle_after_col",
        "has_back_row", "free_seating", "blocked_seats",
        "has_wifi", "has_ac", "has_tv", "has_usb", "has_snack", "description",
    }
```

- [ ] **Step 5: Verify**

Run:
```bash
../env/bin/python manage.py check 2>&1 | grep -iE "error|Traceback" | head
../env/bin/python manage.py shell -c "
from apps.system_config.models import Company
from apps.authentication.models import User
from apps.transport_config.services import services as s
from apps.transport_config.serializers import VehicleCategorySerializer
co = Company.objects.get(slug='voyageur-express'); admin = User.objects.get(username='admin')
c = s.create_vehicle_category(company=co, name='TEST-blocked', total_seats=10, blocked_seats=['1','2'], created_by=admin)
print('created blocked:', VehicleCategorySerializer(c).data['blocked_seats'])
s.update_vehicle_category(c, updated_by=admin, blocked_seats=['3'])
print('updated blocked:', VehicleCategorySerializer(c).data['blocked_seats'])
c.delete()
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `created blocked: ['1', '2']` then `updated blocked: ['3']`.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/transport_config/serializers.py backend/apps/transport_config/services/services.py
git commit -m "feat(transport): blocked_seats through category serializer/service"
```

---

### Task 3: Booking rejects blocked seats + nets capacity

**Files:**
- Modify: `backend/apps/ticketing/services/services.py`

**Interfaces:**
- Consumes: `trip.vehicle_category.blocked_seats` (Task 1).

- [ ] **Step 1:** In `create_booking`, change the availability block to subtract blocked seats and reject a blocked seat. Replace the existing availability + seat-uniqueness region:

```python
    # Blocked seats (from the trip's vehicle category)
    blocked = list(getattr(trip.vehicle_category, "blocked_seats", []) or [])

    # Seat availability check (annotate on the fly), net of blocked seats
    from django.db.models import Count, Q
    annotated = TripModel.objects.annotate(
        booked_seats=Count("bookings", filter=Q(
            bookings__is_deleted=False,
            bookings__status__in=[Booking.Status.CONFIRMED, Booking.Status.BOARDED]
        ))
    ).get(id=trip.id)
    available = annotated.total_seats - len(blocked) - annotated.booked_seats
    if available <= 0:
        raise ApplicationError(_("No seats available on this trip."))

    if seat_number and seat_number in blocked:
        raise ApplicationError(
            _("Seat {seat} is blocked and cannot be sold.").format(seat=seat_number)
        )
```
(Keep the existing `if seat_number and not trip.free_seating:` uniqueness check that follows.)

- [ ] **Step 2: Verify** (segment + blocked interplay):

Run:
```bash
../env/bin/python manage.py shell -c "
from apps.system_config.models import Company
from apps.authentication.models import User
from apps.voyage.models import Trip
from apps.ticketing.models import Customer
from apps.ticketing.services import services as s
co = Company.objects.get(slug='voyageur-express'); admin = User.objects.get(username='admin')
trip = Trip.objects.filter(company=co, status='scheduled').first()
trip.vehicle_category.blocked_seats = ['5']; trip.vehicle_category.save(update_fields=['blocked_seats'])
cust = Customer.objects.create(company=co, first_name='B', last_name='Test', phone='+237600000009', created_by=admin)
try:
    s.create_booking(company=co, trip=trip, customer=cust, seat_number='5', created_by=admin)
    print('ERROR: blocked seat allowed')
except Exception as e:
    print('blocked seat rejected:', e)
b = s.create_booking(company=co, trip=trip, customer=cust, seat_number='6', created_by=admin)
print('non-blocked seat ok:', b.reference, b.seat_number)
b.delete(); cust.delete()
trip.vehicle_category.blocked_seats = []; trip.vehicle_category.save(update_fields=['blocked_seats'])
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `blocked seat rejected: Seat 5 is blocked and cannot be sold.` then `non-blocked seat ok: ...`.

- [ ] **Step 3: Commit**

```bash
git add backend/apps/ticketing/services/services.py
git commit -m "feat(ticketing): reject blocked seats and net them from availability"
```

---

### Task 4: SeatMapComponent — blocking support

**Files:**
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.ts`
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.html`
- Modify: `angular/src/_api/pages/shared/seat-map/seat-map.component.css`

**Interfaces:**
- Produces: `@Input() blocked: string[]`, `@Input() blockable`, `@Output() blockToggled: EventEmitter<string>`. Backward-compatible: existing display-only and selectable modes unchanged when the new flags are default.

- [ ] **Step 1: `seat-map.component.ts`** — add inputs/handlers (after the existing `selected`/`seatPicked`):

```typescript
  @Input() blocked: string[] = [];
  @Input() blockable = false;
  @Output() blockToggled = new EventEmitter<string>();

  isBlocked(seat: number): boolean { return this.blocked.includes(String(seat)); }
  toggleBlock(seat: number): void { if (this.blockable) this.blockToggled.emit(String(seat)); }
```
Also update `pick` so blocked seats aren't selectable:
```typescript
  pick(seat: number): void {
    if (this.blockable) { this.toggleBlock(seat); return; }
    if (!this.selectable || this.isOccupied(seat) || this.isBlocked(seat)) return;
    this.seatPicked.emit(String(seat));
  }
```

- [ ] **Step 2: `seat-map.component.html`** — add blocked state + clickable when blockable:

```html
        } @else {
          <span class="seat-map__seat"
                [class.seat-map__seat--occupied]="isOccupied(cell)"
                [class.seat-map__seat--selected]="isSelected(cell)"
                [class.seat-map__seat--blocked]="isBlocked(cell)"
                [class.seat-map__seat--clickable]="(blockable) || (selectable && !isOccupied(cell) && !isBlocked(cell))"
                (click)="pick(cell)">{{ cell }}</span>
        }
```

- [ ] **Step 3: `seat-map.component.css`** — add blocked style:

```css
.seat-map__seat--blocked { background: #343a40; color: #fff; border-color: #343a40; }
```

- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success (category preview + booking picker still compile).
- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/shared/seat-map/
git commit -m "feat(shared): seat-map blocking support"
```

---

### Task 5: Vehicle Categories screen — edit blocked seats

**Files:**
- Modify: `angular/src/_api/models/transport.models.ts`
- Modify: `angular/src/_api/pages/transport-config/vehicle-categories/vehicle-categories.component.ts`
- Modify: `angular/src/_api/pages/transport-config/vehicle-categories/vehicle-categories.component.html`

**Interfaces:**
- Consumes: `SeatMapComponent` blocking (Task 4), `blocked_seats` API (Task 2).
- Produces: category create/edit sends `blocked_seats`; table shows a blocked count.

- [ ] **Step 1: `transport.models.ts`** — add to `VehicleCategory` (after `free_seating`):

```typescript
  blocked_seats:    string[];
```

- [ ] **Step 2: `vehicle-categories.component.ts`** — add `blocked_seats` to the form group (init `[[]]`), reset it in `openCreate` (`blocked_seats: []`), patch it in `openEdit` (`blocked_seats: c.blocked_seats`), and add the toggle handler:

```typescript
  toggleBlocked(seat: string): void {
    const list: string[] = [...(this.form.value.blocked_seats || [])];
    const i = list.indexOf(seat);
    if (i >= 0) list.splice(i, 1); else list.push(seat);
    this.form.patchValue({ blocked_seats: list });
  }
```
(The whole `form.value` is posted on create; on the update path include `blocked_seats` in the payload — the category screen posts the full form value, so no extra change.)

- [ ] **Step 3: `vehicle-categories.component.html`** — in the modal, make the seat-map preview blockable and add a caption:

```html
                <app-seat-map
                  [rows]="f.seat_rows"
                  [cols]="f.seat_cols"
                  [aisleAfterCol]="f.aisle_after_col"
                  [hasBackRow]="f.has_back_row"
                  [totalSeats]="f.total_seats"
                  [blockable]="true"
                  [blocked]="f.blocked_seats || []"
                  (blockToggled)="toggleBlocked($event)">
                </app-seat-map>
                <p class="text-muted small mt-2">Cliquez un siège pour le bloquer / débloquer.</p>
```
And add a **Bloqués** column to the table:
```html
              <th>Bloqués</th>
```
```html
                <td>{{ c.blocked_seats.length || 0 }}</td>
```
(Increase the empty-state `colspan` from 5 to 6.)

- [ ] **Step 4: Build** — success.
- [ ] **Step 5: Manual check** (backend running): open `/transport-config/vehicle-categories`, edit a category, click seats to block them (they turn dark), save; reopen — the same seats are still blocked; table shows the count.
- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/models/transport.models.ts angular/src/_api/pages/transport-config/vehicle-categories/
git commit -m "feat(transport-fe): block seats in vehicle category form"
```

---

### Task 6: Booking seat-picker respects blocked seats

**Files:**
- Modify: `angular/src/_api/pages/ticketing/bookings/bookings.component.html`

**Interfaces:**
- Consumes: `category.blocked_seats` (already loaded via `VehicleCategoryService.get` in `onTripChange`), `SeatMapComponent` `blocked` input (Task 4).

- [ ] **Step 1:** In the booking modal's seat map, pass the category's blocked seats:

```html
                <app-seat-map [selectable]="true"
                  [rows]="category.seat_rows" [cols]="category.seat_cols"
                  [aisleAfterCol]="category.aisle_after_col" [hasBackRow]="category.has_back_row"
                  [totalSeats]="category.total_seats" [occupied]="occupiedSeats"
                  [blocked]="category.blocked_seats"
                  [selected]="form.value.seat_number" (seatPicked)="onSeatPicked($event)">
                </app-seat-map>
```

- [ ] **Step 2: Build** — success.
- [ ] **Step 3: Manual check:** with a category that has blocked seats, start a new booking on a trip using it — the blocked seats show dark and cannot be selected; the backend also rejects them.
- [ ] **Step 4: Commit**

```bash
git add angular/src/_api/pages/ticketing/bookings/bookings.component.html
git commit -m "feat(ticketing-fe): booking seat-picker shows blocked seats"
```

---

## Self-Review Notes

- **Spec coverage:** §3 field+migration→T1; §4.1 serializers→T2; §4.2 services→T2; §4.3 booking guard→T3; §5.1 seat-map blocking→T4; §5.2 category screen→T5; §5.3 booking picker→T6. Optional seed of a blocked seat (spec §7.3) is left as a manual step, not a task.
- **Placeholder scan:** none.
- **Type consistency:** `blocked_seats` is a **string list** end-to-end (model JSON, serializer `ListField(CharField)`, TS `string[]`, seat labels). Seat-map API `blocked`/`blockable`/`blockToggled` used consistently in Tasks 4–6. Booking guard reads `trip.vehicle_category.blocked_seats`.
- **Backward compatibility:** seat-map default flags leave the vehicle-category *preview* (Task 8 of the transport plan) and the booking *selectable* picker behaving as before until `blocked`/`blockable` are passed.
- **Verification adaptation:** no test framework; `manage.py check`/`migrate` + shell smoke-tests (backend), `npx ng build` + manual checks (frontend).
