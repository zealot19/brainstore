# Segment-Based Trips & Fares Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let operators sell sub-trip tickets (origin→destination segments along a route) at explicit per-segment prices, keeping trip-level seat capacity (Option A).

**Architecture:** A "route point" is a Terminal on the route with a derived order (`from_terminal`=0, each `RouteStop`=`stop_order`, `to_terminal`=last). `Fare` gains `origin_terminal`/`destination_terminal`; `Booking` gains `boarding_terminal`/`alighting_terminal`. Seat capacity is unchanged. Frontend Fares screen becomes segment-aware.

**Tech Stack:** Django + DRF (backend), Angular standalone components (frontend), SQLite (dev).

## Global Constraints

- **No test framework exists** (backend or frontend). Verification per task = the stated Django command (`makemigrations`, `migrate`, `check`) and/or `npx ng build`, plus a shell/seed smoke-check where noted. No pytest/jasmine.
- **Capacity is trip-level (Option A).** Do NOT add any leg-based seat math. The existing `create_booking` availability check stays as-is.
- **Pricing is explicit per origin→destination pair.** A segment is sellable iff a `Fare` exists for it.
- All user-facing copy in **French**; currency default **XAF**.
- Backend runs via `../env/bin/python manage.py <cmd>` from `ERP-master/backend/`. Frontend builds via `cd ERP-master/angular && npx ng build`.
- Commit after each task. Work continues on branch `feature/transport-voyage-ui`.
- Backend migrations: `transport_config` is at `0001_initial`; `ticketing` is at `0001_initial`. New migrations chain from those.

---

## PHASE 1 — BACKEND: route points + segment fares

### Task 1: `Route.ordered_points()` helper

**Files:**
- Modify: `backend/apps/transport_config/models/route.py`

**Interfaces:**
- Produces: `Route.ordered_points() -> list[dict]`, each `{"terminal": Terminal, "order": int}`, ordered origin→destination. Also `Route.point_order(terminal_id) -> int | None`.

- [ ] **Step 1: Add the helper to the `Route` class** (after `save()`), matching existing style:

```python
    def ordered_points(self):
        """Ordered route points: origin (0), intermediate stops, destination (last)."""
        points = [{"terminal": self.from_terminal, "order": 0}]
        for stop in self.stops.filter(is_deleted=False).order_by("stop_order"):
            points.append({"terminal": stop.terminal, "order": stop.stop_order})
        points.append({"terminal": self.to_terminal, "order": 9999})
        return points

    def point_order(self, terminal_id):
        """Return the order of a terminal on this route, or None if not a point."""
        for p in self.ordered_points():
            if str(p["terminal"].id) == str(terminal_id):
                return p["order"]
        return None
```

- [ ] **Step 2: Verify Django loads the model**

Run: `../env/bin/python manage.py check 2>&1 | grep -iE "error|System check identified no issues" | head`
Expected: "System check identified no issues" (warnings about staticfiles are fine).

- [ ] **Step 3: Smoke-test the helper in shell**

Run:
```bash
../env/bin/python manage.py shell -c "
from apps.transport_config.models import Route
r = Route.objects.filter(stops__isnull=False).first() or Route.objects.first()
print([(p['terminal'].name, p['order']) for p in r.ordered_points()])
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: a list like `[('Gare Bonabéri', 0), ('Agence Nsam', 1), ('Gare Mvan', 9999)]`.

- [ ] **Step 4: Commit**

```bash
git add backend/apps/transport_config/models/route.py
git commit -m "feat(transport): Route.ordered_points helper"
```

---

### Task 2: `routes/<id>/points/` read endpoint

**Files:**
- Modify: `backend/apps/transport_config/views.py`
- Modify: `backend/apps/transport_config/urls.py`

**Interfaces:**
- Consumes: `Route.ordered_points()` (Task 1), existing `selectors.get_route`, `_scope_company_id`, `IsInstitutionAdmin`, `success_response`, `error_response`.
- Produces: `GET /transport/routes/<uuid:route_id>/points/` → `{"data": [{terminal_id, terminal_name, city_name, order}]}`.

- [ ] **Step 1: Add the view** (place after the `RouteFaresView` class; mirror its structure):

```python
class RoutePointsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, route_id):
        route = selectors.get_route(route_id, _scope_company_id(request))
        if not route:
            return error_response(_("Route not found."), status_code=404)
        data = [
            {
                "terminal_id":   str(p["terminal"].id),
                "terminal_name": p["terminal"].name,
                "city_name":     p["terminal"].city.name,
                "order":         p["order"],
            }
            for p in route.ordered_points()
        ]
        return success_response(data)
```

- [ ] **Step 2: Register the URL** in `urls.py`, in the Routes block after the `routes/<uuid:route_id>/fares/` line:

```python
    path("routes/<uuid:route_id>/points/",  views.RoutePointsView.as_view()),
```

- [ ] **Step 3: Verify**

Run: `../env/bin/python manage.py check 2>&1 | grep -iE "error|no issues" | head`
Expected: no issues.

- [ ] **Step 4: Commit**

```bash
git add backend/apps/transport_config/views.py backend/apps/transport_config/urls.py
git commit -m "feat(transport): route points endpoint"
```

---

### Task 3: `Fare` origin/destination fields + backfill migration

**Files:**
- Modify: `backend/apps/transport_config/models/fare.py`
- Create: `backend/apps/transport_config/migrations/0002_fare_segment.py`

**Interfaces:**
- Produces: `Fare.origin_terminal`, `Fare.destination_terminal` (FK → Terminal, non-null after backfill); new `unique_together` including both.

- [ ] **Step 1: Add the fields** to the `Fare` model (after `route` FK). Add them **nullable first** so the auto-migration can backfill:

```python
    origin_terminal      = models.ForeignKey("transport_config.Terminal",
                              verbose_name=_("origin stop"), on_delete=models.PROTECT,
                              related_name="fares_from", null=True, blank=True)
    destination_terminal = models.ForeignKey("transport_config.Terminal",
                              verbose_name=_("destination stop"), on_delete=models.PROTECT,
                              related_name="fares_to", null=True, blank=True)
```

- [ ] **Step 2: Update `Meta.unique_together`** on `Fare` to include the segment:

```python
        unique_together = [("route", "origin_terminal", "destination_terminal",
                            "vehicle_category", "fare_class", "passenger_type")]
```

- [ ] **Step 3: Generate the schema migration**

Run: `../env/bin/python manage.py makemigrations transport_config 2>&1 | tail -5`
Expected: creates `0002_...` adding the two nullable fields and altering unique_together.
Rename the generated file to `0002_fare_segment.py` if needed (and its class stays `Migration`).

- [ ] **Step 4: Add a data-migration operation to backfill** existing fares. Open the generated `0002_fare_segment.py` and insert a `RunPython` **before** any `AlterUniqueTogether` operation:

```python
def backfill_segments(apps, schema_editor):
    Fare = apps.get_model("transport_config", "Fare")
    for fare in Fare.objects.select_related("route").all():
        fare.origin_terminal_id = fare.route.from_terminal_id
        fare.destination_terminal_id = fare.route.to_terminal_id
        fare.save(update_fields=["origin_terminal", "destination_terminal"])


def noop(apps, schema_editor):
    pass
```

Add `migrations.RunPython(backfill_segments, noop)` to `operations` — after the two `AddField`s, before `AlterUniqueTogether`.

- [ ] **Step 5: Apply and verify backfill**

Run:
```bash
../env/bin/python manage.py migrate transport_config 2>&1 | tail -3
../env/bin/python manage.py shell -c "
from apps.transport_config.models import Fare
print('fares:', Fare.objects.count(), '| null origin:', Fare.objects.filter(origin_terminal__isnull=True).count())
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `null origin: 0` (all backfilled).

- [ ] **Step 6: Commit**

```bash
git add backend/apps/transport_config/models/fare.py backend/apps/transport_config/migrations/0002_fare_segment.py
git commit -m "feat(transport): add origin/destination to Fare with backfill"
```

---

### Task 4: Fare serializers, selector, service, view (segment-aware)

**Files:**
- Modify: `backend/apps/transport_config/serializers.py`
- Modify: `backend/apps/transport_config/selectors/selectors.py`
- Modify: `backend/apps/transport_config/services/services.py`
- Modify: `backend/apps/transport_config/views.py`

**Interfaces:**
- Consumes: `Route.point_order` (Task 1), `Fare` O-D fields (Task 3).
- Produces: `FareSerializer` exposes `origin_terminal`,`origin_terminal_name`,`destination_terminal`,`destination_terminal_name`; `FareWriteSerializer` accepts `origin_terminal_id`,`destination_terminal_id`; `create_fare(..., origin_terminal, destination_terminal)`.

- [ ] **Step 1: `FareSerializer`** — add read fields (after `route_name`):

```python
    origin_terminal_name      = serializers.CharField(source="origin_terminal.name", read_only=True)
    destination_terminal_name = serializers.CharField(source="destination_terminal.name", read_only=True)
```

And add `"origin_terminal", "origin_terminal_name", "destination_terminal", "destination_terminal_name",` to `Meta.fields` (after `"route_name",`).

- [ ] **Step 2: `FareWriteSerializer`** — add the two ids (after `route_id`):

```python
    origin_terminal_id      = serializers.UUIDField()
    destination_terminal_id = serializers.UUIDField()
```

- [ ] **Step 3: `create_fare` service** — accept and persist the segment, validate ordering. Replace the body of `create_fare` in `services.py`:

```python
def create_fare(*, company, route, vehicle_category, fare_class,
                passenger_type: str, amount, origin_terminal, destination_terminal,
                currency: str = "XAF", is_active: bool = True, created_by):
    o = route.point_order(origin_terminal.id)
    d = route.point_order(destination_terminal.id)
    if o is None or d is None:
        raise ApplicationError(_("Origin and destination must be points on this route."))
    if o >= d:
        raise ApplicationError(_("Origin must come before destination on the route."))
    if Fare.objects.filter(
        company=company, route=route, origin_terminal=origin_terminal,
        destination_terminal=destination_terminal, vehicle_category=vehicle_category,
        fare_class=fare_class, passenger_type=passenger_type, is_deleted=False,
    ).exists():
        raise ApplicationError(_("A fare already exists for this combination."))
    return Fare.objects.create(
        company=company, route=route,
        origin_terminal=origin_terminal, destination_terminal=destination_terminal,
        vehicle_category=vehicle_category, fare_class=fare_class,
        passenger_type=passenger_type, amount=amount,
        currency=currency, is_active=is_active, created_by=created_by,
    )
```

- [ ] **Step 4: `list_fares` selector** — add origin/destination filters. In `list_fares` add params `origin_terminal_id=None, destination_terminal_id=None` and, after the existing filters:

```python
    if origin_terminal_id:
        qs = qs.filter(origin_terminal_id=origin_terminal_id)
    if destination_terminal_id:
        qs = qs.filter(destination_terminal_id=destination_terminal_id)
```

Also ensure the queryset `select_related` includes `"origin_terminal", "destination_terminal"` (append to the existing `select_related(...)`).

- [ ] **Step 5: `FareListView.post`** (in `views.py`) — resolve and pass the terminals. After the `fare_class` lookup, add:

```python
        from apps.transport_config.models import Terminal
        try:
            origin_t = Terminal.objects.get(id=d["origin_terminal_id"], company=company, is_deleted=False)
            destination_t = Terminal.objects.get(id=d["destination_terminal_id"], company=company, is_deleted=False)
        except Terminal.DoesNotExist:
            return error_response(_("Origin/destination terminal not found."), status_code=404)
```

And add to the `services.create_fare(...)` call:

```python
                origin_terminal=origin_t, destination_terminal=destination_t,
```

Also pass the new query filters into `selectors.list_fares(...)` in `FareListView.get`:

```python
            origin_terminal_id=request.query_params.get("origin_terminal_id"),
            destination_terminal_id=request.query_params.get("destination_terminal_id"),
```

- [ ] **Step 6: Verify**

Run: `../env/bin/python manage.py check 2>&1 | grep -iE "error|no issues" | head`
Expected: no issues.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/transport_config/serializers.py backend/apps/transport_config/selectors/selectors.py backend/apps/transport_config/services/services.py backend/apps/transport_config/views.py
git commit -m "feat(transport): segment-aware fare create/list"
```

---

### Task 5: Seed segment data (`seed_demo`)

**Files:**
- Modify: `backend/apps/system_config/management/commands/seed_demo.py`

**Interfaces:**
- Consumes: `create_fare` new signature (Task 4), `Route.ordered_points` (Task 1).

- [ ] **Step 1: Add intermediate terminals** in `_terminals` data list (two new rows):

```python
            ("DLA", "Arrêt Boumnyébel", "Boumnyébel",           "+237 690 66 66 61"),
            ("YDE", "Arrêt Édéa",       "Édéa",                 "+237 690 77 77 71"),
```
(These are stored under their nearest city code purely for the demo; the segment logic only uses terminals.)

- [ ] **Step 2: Add stops to the Douala→Yaoundé route** — replace the single-stop block in `_routes` with two ordered stops:

```python
        dla_yde = routes[0]
        if dla_yde.stops.count() < 2:
            dla_yde.stops.all().delete()
            RouteStop.objects.create(route=dla_yde, terminal=terminals[("DLA", "Arrêt Boumnyébel")],
                                     stop_order=1, arrival_offset_minutes=90)
            RouteStop.objects.create(route=dla_yde, terminal=terminals[("YDE", "Arrêt Édéa")],
                                     stop_order=2, arrival_offset_minutes=150)
            self.stdout.write("  + 2 RouteStops on Douala → Yaoundé")
```

- [ ] **Step 3: Rewrite `_fares`** to create explicit segment fares. Replace the `_fares` method body:

```python
    def _fares(self, company, routes, categories, classes):
        from apps.transport_config.services import services as tsvc
        from apps.transport_config.models import Fare
        count = 0
        for route in routes:
            points = route.ordered_points()
            origin = points[0]["terminal"]
            # Full route + each origin→intermediate + intermediate→destination
            pairs = []
            for i in range(len(points)):
                for j in range(i + 1, len(points)):
                    pairs.append((points[i]["terminal"], points[j]["terminal"]))
            base = {"std": Decimal("6000"), "vip": Decimal("10000")}
            for o_term, d_term in pairs:
                # price scales with number of legs spanned
                span = route.point_order(d_term.id) - route.point_order(o_term.id)
                total_span = points[-1]["order"] - points[0]["order"]
                for key in ("std", "vip"):
                    amount = (base[key] * Decimal(span) / Decimal(total_span)).quantize(Decimal("1"))
                    for ptype in ("adult", "child"):
                        amt = amount if ptype == "adult" else (amount * Decimal("0.6")).quantize(Decimal("1"))
                        exists = Fare.objects.filter(
                            company=company, route=route, origin_terminal=o_term,
                            destination_terminal=d_term, vehicle_category=categories[key],
                            fare_class=classes[key], passenger_type=ptype, is_deleted=False).exists()
                        if exists:
                            continue
                        tsvc.create_fare(
                            company=company, route=route,
                            vehicle_category=categories[key], fare_class=classes[key],
                            passenger_type=ptype, amount=amt,
                            origin_terminal=o_term, destination_terminal=d_term,
                            currency="XAF", is_active=True, created_by=None)
                        count += 1
        self.stdout.write(f"  Segment fares ensured ({count} new)")
```

- [ ] **Step 4: Run the seed and verify**

Run:
```bash
../env/bin/python manage.py seed_demo 2>&1 | grep -iE "RouteStop|Segment fares|Error" | head
../env/bin/python manage.py shell -c "
from apps.transport_config.models import Fare
print('fares total:', Fare.objects.count())
print('distinct segments on DLA-YDE:', Fare.objects.filter(route__from_terminal__name='Gare Bonabéri').values('origin_terminal','destination_terminal').distinct().count())
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: multiple segments on Douala→Yaoundé (origin/destination combos across Bonabéri, Boumnyébel, Édéa, Mvan).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/system_config/management/commands/seed_demo.py
git commit -m "chore(seed): segment fares + intermediate stops"
```

---

## PHASE 2 — BACKEND: booking segment fields

### Task 6: `Booking` boarding/alighting fields + migration

**Files:**
- Modify: `backend/apps/ticketing/models/booking.py`
- Create: `backend/apps/ticketing/migrations/0002_booking_segment.py`

**Interfaces:**
- Produces: `Booking.boarding_terminal`, `Booking.alighting_terminal` (FK → Terminal, nullable).

- [ ] **Step 1: Add fields** to `Booking` (after `seat_number`):

```python
    boarding_terminal  = models.ForeignKey("transport_config.Terminal",
                            verbose_name=_("boarding stop"), on_delete=models.PROTECT,
                            related_name="boardings", null=True, blank=True)
    alighting_terminal = models.ForeignKey("transport_config.Terminal",
                            verbose_name=_("alighting stop"), on_delete=models.PROTECT,
                            related_name="alightings", null=True, blank=True)
```

- [ ] **Step 2: Generate migration**

Run: `../env/bin/python manage.py makemigrations ticketing 2>&1 | tail -4`
Expected: creates `0002_...` adding two nullable FKs. Rename to `0002_booking_segment.py` if desired.

- [ ] **Step 3: Apply and verify**

Run: `../env/bin/python manage.py migrate ticketing 2>&1 | tail -2 && ../env/bin/python manage.py check 2>&1 | grep -iE "error|no issues" | head`
Expected: migration OK, no issues.

- [ ] **Step 4: Commit**

```bash
git add backend/apps/ticketing/models/booking.py backend/apps/ticketing/migrations/0002_booking_segment.py
git commit -m "feat(ticketing): add boarding/alighting to Booking"
```

---

### Task 7: Booking create — accept & validate segment

**Files:**
- Modify: `backend/apps/ticketing/serializers.py`
- Modify: `backend/apps/ticketing/services/services.py`
- Modify: `backend/apps/ticketing/views.py`

**Interfaces:**
- Consumes: `Booking` O-D fields (Task 6), `Route.point_order` (Task 1).
- Produces: `create_booking(..., boarding_terminal=None, alighting_terminal=None)`; `BookingReadSerializer` exposes boarding/alighting (+names); `BookingWriteSerializer` accepts `boarding_terminal_id`/`alighting_terminal_id`.

- [ ] **Step 1: `BookingWriteSerializer`** — add optional ids (after `seat_number`):

```python
    boarding_terminal_id  = serializers.UUIDField(required=False, allow_null=True)
    alighting_terminal_id = serializers.UUIDField(required=False, allow_null=True)
```

- [ ] **Step 2: `BookingReadSerializer`** — add read fields + names (after `seat_number`):

```python
    boarding_terminal_name  = serializers.CharField(source="boarding_terminal.name", read_only=True, default=None)
    alighting_terminal_name = serializers.CharField(source="alighting_terminal.name", read_only=True, default=None)
```

Add `"boarding_terminal", "boarding_terminal_name", "alighting_terminal", "alighting_terminal_name",` to `Meta.fields` (after `"seat_number",`).

- [ ] **Step 3: `create_booking` service** — accept the terminals, validate ordering against the trip's route. Add params to the signature and validation near the top of the function body (after the trip-status checks, before seat checks):

```python
    # (signature) add:  boarding_terminal=None, alighting_terminal=None,
    if boarding_terminal and alighting_terminal:
        o = trip.route.point_order(boarding_terminal.id)
        a = trip.route.point_order(alighting_terminal.id)
        if o is None or a is None:
            raise ApplicationError(_("Boarding/alighting must be points on the trip route."))
        if o >= a:
            raise ApplicationError(_("Boarding must come before alighting."))
```

And add to the `Booking.objects.create(...)` call:

```python
        boarding_terminal=boarding_terminal, alighting_terminal=alighting_terminal,
```

- [ ] **Step 4: `BookingListView.post`** (views.py) — resolve terminals and pass them. After the `fare` lookup block, add:

```python
        boarding_t = alighting_t = None
        from apps.transport_config.models import Terminal
        if d.get("boarding_terminal_id"):
            boarding_t = Terminal.objects.filter(id=d["boarding_terminal_id"], is_deleted=False).first()
        if d.get("alighting_terminal_id"):
            alighting_t = Terminal.objects.filter(id=d["alighting_terminal_id"], is_deleted=False).first()
```

And add to the `services.create_booking(...)` call:

```python
                boarding_terminal=boarding_t, alighting_terminal=alighting_t,
```

- [ ] **Step 5: Verify**

Run: `../env/bin/python manage.py check 2>&1 | grep -iE "error|no issues" | head`
Expected: no issues.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/ticketing/serializers.py backend/apps/ticketing/services/services.py backend/apps/ticketing/views.py
git commit -m "feat(ticketing): booking accepts boarding/alighting segment"
```

---

## PHASE 3 — FRONTEND: segment-aware Fares screen

### Task 8: Fare model + service (frontend)

**Files:**
- Modify: `angular/src/_api/models/transport.models.ts`
- Modify: `angular/src/_api/config/api.config.ts`
- Modify: `angular/src/_api/services/transport/route.service.ts`
- Modify: `angular/src/_api/services/transport/fare.service.ts`

**Interfaces:**
- Produces: `Fare` interface with O-D fields; `RoutePoint` interface; `RouteService.points(routeId)`; `FareService.list` accepts O-D filters.

- [ ] **Step 1: `transport.models.ts`** — add O-D to `Fare` (after `route_name`) and a `RoutePoint` type:

```typescript
  origin_terminal: string;
  origin_terminal_name: string;
  destination_terminal: string;
  destination_terminal_name: string;
```

```typescript
export interface RoutePoint {
  terminal_id: string;
  terminal_name: string;
  city_name: string;
  order: number;
}
```

- [ ] **Step 2: `api.config.ts`** — add the points endpoint to `TRANSPORT` (after `routeFares`):

```typescript
  routePoints: (id: string) => `${API_BASE}/transport/routes/${id}/points/`,
```

- [ ] **Step 3: `route.service.ts`** — import `RoutePoint` and add:

```typescript
  points(routeId: string): Observable<RoutePoint[]> {
    return this.http.get<RoutePoint[]>(TRANSPORT.routePoints(routeId));
  }
```

- [ ] **Step 4: `fare.service.ts`** — extend `list` opts with `origin_terminal_id?` and `destination_terminal_id?`, and set them as params when present (mirror the existing param lines).

- [ ] **Step 5: Build**

Run: `cd ../../angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head` (from `backend/`; adjust to `cd angular`)
Expected: `Application bundle generation complete`.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/models/transport.models.ts angular/src/_api/config/api.config.ts angular/src/_api/services/transport/route.service.ts angular/src/_api/services/transport/fare.service.ts
git commit -m "feat(transport-fe): route points + segment fare model/service"
```

---

### Task 9: Fares component — origin/destination selectors

**Files:**
- Modify: `angular/src/_api/pages/transport-config/fares/fares.component.ts`
- Modify: `angular/src/_api/pages/transport-config/fares/fares.component.html`

**Interfaces:**
- Consumes: `RouteService.points`, `RoutePoint`, `Fare` O-D fields (Task 8).

- [ ] **Step 1: `fares.component.ts`** — add `routePoints: RoutePoint[] = []`, inject nothing new (RouteService already injected). Add form controls `origin_terminal_id` and `destination_terminal_id` (both `['', Validators.required]`) to the create form group.
- [ ] **Step 2:** Add a method that loads points when the route changes and computes valid destination options:

```typescript
  onRouteChange(routeId: string): void {
    this.routePoints = [];
    if (!routeId) return;
    this.routeService.points(routeId).subscribe({ next: p => this.routePoints = p });
  }
  get originOptions(): RoutePoint[] { return this.routePoints.slice(0, -1); }
  destinationOptions(originId: string): RoutePoint[] {
    const o = this.routePoints.find(p => p.terminal_id === originId);
    return o ? this.routePoints.filter(p => p.order > o.order) : [];
  }
```

- [ ] **Step 3:** In `openCreate`, reset the two new controls to `''` and clear `routePoints`. In `openEdit`, the route/origin/destination selects are already disabled (edit only sends amount/currency/is_active) — also `patchValue` the two ids and call `onRouteChange(f.route)` so labels show. Keep the update payload unchanged (amount/currency/is_active only).
- [ ] **Step 4:** In `submit()` create branch, the form value now includes `origin_terminal_id`/`destination_terminal_id` — no change needed since the whole `form.value` is posted.
- [ ] **Step 5: `fares.component.html`** — add **Origine**/**Destination** columns to the table (after Itinéraire):

```html
              <th>Origine</th>
              <th>Destination</th>
```
```html
                <td>{{ f.origin_terminal_name }}</td>
                <td>{{ f.destination_terminal_name }}</td>
```
(Increase the empty-state `colspan` from 7 to 9.)

- [ ] **Step 6:** In the modal, make the route `<select>` call `(ngModelChange)` equivalent — since it's reactive, add `(change)="onRouteChange(form.value.route_id)"` on the route select, then add origin/destination selects after it:

```html
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Origine <span class="text-danger">*</span></label>
              <select formControlName="origin_terminal_id" class="form-select">
                <option value="">— Choisir —</option>
                @for (p of originOptions; track p.terminal_id) { <option [value]="p.terminal_id">{{ p.terminal_name }}</option> }
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Destination <span class="text-danger">*</span></label>
              <select formControlName="destination_terminal_id" class="form-select">
                <option value="">— Choisir —</option>
                @for (p of destinationOptions(form.value.origin_terminal_id); track p.terminal_id) { <option [value]="p.terminal_id">{{ p.terminal_name }}</option> }
              </select>
            </div>
          </div>
```

- [ ] **Step 7: Build**

Run: `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`
Expected: `Application bundle generation complete`.

- [ ] **Step 8: Manual smoke check** (backend running + seeded): open `/transport-config/fares`, create a fare — pick the Douala→Yaoundé route, confirm Origine lists Bonabéri/Boumnyébel/Édéa and Destination updates to only later points; save; confirm the row shows Origine/Destination.

- [ ] **Step 9: Commit**

```bash
git add angular/src/_api/pages/transport-config/fares/
git commit -m "feat(transport-fe): segment-aware fares screen"
```

---

## Self-Review Notes

- **Spec coverage:** §3 route points → Task 1/2; §4.1 Fare O-D + backfill → Task 3/4; §4.4 seed → Task 5; §4.2 Booking O-D → Task 6/7; §4.3 serializers/selectors/points endpoint → Tasks 2,4,7; §5.1 Fares screen → Task 8/9. §4.2 fare auto-resolution from segment and §5.2 ticketing booking UI are **intentionally deferred** to the ticketing module (spec §6 sequencing item 3) — this plan guarantees the backend accepts a segment and prices it via the provided `fare_id`/`amount_paid`.
- **Type consistency:** field names `origin_terminal`/`destination_terminal` (Fare) and `boarding_terminal`/`alighting_terminal` (Booking) used consistently across model, serializer, service, view, and frontend model/service/component. `Route.point_order` / `ordered_points` referenced consistently in Tasks 1,4,7.
- **Verification adaptation:** no unit-test framework exists; each task verifies via `manage.py check`/`migrate` + shell/seed smoke-checks (backend) or `npx ng build` + manual check (frontend), per Global Constraints.
- **Capacity:** no task adds leg-based seat math — Option A preserved.
