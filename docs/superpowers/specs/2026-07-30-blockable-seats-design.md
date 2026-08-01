# Blockable Seats on Vehicle Categories — Design

**Date:** 2026-07-30
**Branch:** `feature/blockable-seats` (off `feature/ticketing-ui`)
**Author:** shimi + Claude

## 1. Goal

Let an operator mark specific passenger seats in a **vehicle category** as
**blocked** (permanently withheld from sale — a director's reserved seat, a seat
kept empty by policy, etc.), chosen visually on the seat map. Blocked seats are
not sellable and reduce the effective capacity.

## 2. Decisions (locked)

- **① Blocked seats reduce sellable capacity.** Availability =
  `total_seats − blocked − booked`. `total_seats` stays the physical layout
  count so the seat map still renders correctly.
- **② Blocking applies to the numbered passenger seats** (1..N) in the grid. The
  driver position is not a numbered seat; no layout change for it.

## 3. Data model

Add to `transport_config.VehicleCategory`:

```python
blocked_seats = models.JSONField(_("blocked seats"), default=list, blank=True,
    help_text=_("Seat numbers withheld from sale, e.g. [\"1\", \"2\"]."))
```

Stored as a JSON list of seat-number **strings** (matching the seat labels the
map renders and the string stored in `Booking.seat_number`). Migration:
`0003_vehiclecategory_blocked_seats` (nullable-safe default `list`).

## 4. Backend

### 4.1 Serializers (`transport_config/serializers.py`)
- `VehicleCategorySerializer`: add `blocked_seats` to `fields`.
- `VehicleCategoryWriteSerializer`: add
  `blocked_seats = serializers.ListField(child=serializers.CharField(), required=False, default=list)`.

### 4.2 Services (`transport_config/services/services.py`)
- `create_vehicle_category(...)`: add `blocked_seats: list | None = None` param;
  persist `blocked_seats or []`.
- `update_vehicle_category(...)`: add `"blocked_seats"` to the `allowed` set.

### 4.3 Booking guard (`ticketing/services/services.py`)
In `create_booking`, after resolving the trip:
- `blocked = list(getattr(trip.vehicle_category, "blocked_seats", []) or [])`
- If `seat_number and seat_number in blocked` → raise
  `ApplicationError("Seat {seat} is blocked and cannot be sold.")`.
- Change the availability check to subtract blocked:
  `available = annotated.total_seats - len(blocked) - annotated.booked_seats`.

`trip.vehicle_category` is a required FK, so it is always present.

## 5. Frontend

### 5.1 `SeatMapComponent` — blocking support (backward-compatible)
Add:
- `@Input() blocked: string[] = []` — seats rendered as blocked (both modes).
- `@Input() blockable = false` — when true, clicking a seat **toggles** blocked.
- `@Output() blockToggled = new EventEmitter<string>()`.

Behaviour:
- `isBlocked(seat)` → renders a distinct **blocked** style (dark + lock).
- **blockable mode:** clicking any seat toggles it (emit `blockToggled`);
  occupied/selected states are irrelevant here.
- **selectable mode (booking):** a blocked seat is **not pickable** (treated like
  occupied/unavailable), rendered blocked.
- Display-only mode (category preview elsewhere) unchanged when neither flag set.

### 5.2 Vehicle Categories screen
- `transport.models.ts` `VehicleCategory`: add `blocked_seats: string[]`.
- The category modal replaces the read-only preview with the **blockable** seat
  map: `[blockable]="true" [blocked]="form.value.blocked_seats" (blockToggled)="toggleBlocked($event)"`.
  `toggleBlocked(seat)` adds/removes the seat from the form's `blocked_seats`
  array. A small caption: "Cliquez un siège pour le bloquer / débloquer."
- Table: show a "Bloqués" count (`blocked_seats.length`).
- Create/edit send `blocked_seats` in the payload.

### 5.3 Booking seat picker (`ticketing/bookings`)
- When the category loads for a trip, pass its `blocked_seats` to the seat map:
  `[blocked]="category.blocked_seats"`. Blocked seats show as unavailable and
  can't be chosen (the backend also rejects them as a safety net).

## 6. Out of scope

- Per-**trip** overrides of blocked seats (blocking is per category only).
- Rendering the driver position as a blockable grid cell.
- Changing how `Trip.total_seats` is stored (kept as the physical count; blocked
  handling is computed at booking time from the category).

## 7. Sequencing

1. Backend: model field + migration → serializers → services → booking guard.
2. Frontend: `SeatMapComponent` blocking → category model/service/screen →
   booking seat-picker wiring.
3. (Optional) seed a blocked seat on the VIP category for demoing.
