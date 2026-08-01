# Segment-Based Trips & Fares — Design

**Date:** 2026-07-30
**Branch:** continues on `feature/transport-voyage-ui` (or a follow-up branch)
**Author:** shimi + Claude

## 1. Problem

A trip runs along a route with intermediate stops (e.g. Douala → Boumnyébel →
Édéa → Yaoundé). Today a ticket only covers the whole route and has one price.
Operators need to sell **sub-trips**: tickets for any forward origin→destination
pair along the route (Douala→Édéa, Douala→Boumnyébel, Édéa→Yaoundé, …), each at
its own price.

## 2. Decisions (locked with the user)

- **Capacity model = Option A (trip-level).** Any ticket, whatever its segment,
  consumes one of the trip's `total_seats` for the entire trip. Seats freed at
  an intermediate stop are **not** resold. The existing availability check
  (`total_seats` − active bookings) is unchanged. Leg-based inventory is
  explicitly **out of scope** (future Option B).
- **Pricing = explicit per origin→destination pair.** Each segment fare is set
  directly; no automatic summing of legs.
- **Sellable = a fare exists.** A segment is offered iff a `Fare` is defined for
  it. No separate enable/disable toggle.
- **Boarding at intermediate stops is allowed** (e.g. Édéa→Yaoundé).

## 3. Route points (modeling)

A **route point** is a `Terminal` that appears on the route, with a derived
order:

- `Route.from_terminal` → order `0`
- each `RouteStop.terminal` → its `stop_order`
- `Route.to_terminal` → order `9999` (always last)

Add a helper on `Route`:

```python
def ordered_points(self):
    """Return [(terminal, order), …] from origin to destination, in order."""
```

A terminal appears at most once per route (`RouteStop` has
`unique_together (route, terminal)`, and the endpoints are distinct), so the
terminal→order mapping is unambiguous. No new table; `RouteStop` semantics and
the routes UI are unchanged.

*Alternatives rejected:* promoting endpoints into `RouteStop` as one unified
list, or a dedicated `RouteSegment` table — both add migration/churn without
benefit given "sellable = a fare exists."

## 4. Backend changes

### 4.1 Fare — add origin/destination (`transport_config`)

Add two FKs to `Fare`:

```python
origin_terminal      = models.ForeignKey("transport_config.Terminal",
                          on_delete=models.PROTECT, related_name="fares_from")
destination_terminal = models.ForeignKey("transport_config.Terminal",
                          on_delete=models.PROTECT, related_name="fares_to")
```

- New `unique_together`:
  `(route, origin_terminal, destination_terminal, vehicle_category, fare_class, passenger_type)`.
- Validation (service layer): both terminals must be points on `route`, and
  `order(origin) < order(destination)`.
- **Data migration (backfill):** for every existing `Fare`, set
  `origin_terminal = route.from_terminal`, `destination_terminal = route.to_terminal`.
  Make the migration non-nullable only after backfill (add nullable → backfill →
  alter to non-null, or a single data migration between the schema steps).

### 4.2 Booking — add boarding/alighting (`ticketing`)

Add two FKs to `Booking`:

```python
boarding_terminal  = models.ForeignKey("transport_config.Terminal",
                        on_delete=models.PROTECT, related_name="boardings", null=True)
alighting_terminal = models.ForeignKey("transport_config.Terminal",
                        on_delete=models.PROTECT, related_name="alightings", null=True)
```

- Both must be points on the **trip's** route, boarding before alighting.
- Nullable for backward compatibility; when null, the booking is understood as
  full-route (origin→destination of the trip's route).
- `create_booking` accepts `boarding_terminal` / `alighting_terminal`, validates
  ordering against the trip route, and resolves the segment `Fare` for pricing
  (fallback to provided `amount_paid` if no exact fare match).
- **Capacity unchanged** — no leg math.

### 4.3 Serializers / selectors

- `FareReadSerializer`: add `origin_terminal`, `destination_terminal` (+ `_name`
  display fields). `FareWriteSerializer`: add `origin_terminal_id`,
  `destination_terminal_id`.
- `list_fares` selector: allow filtering by `origin_terminal_id` /
  `destination_terminal_id`.
- `BookingReadSerializer`: add boarding/alighting (+ `_name`).
  `BookingWriteSerializer`: add `boarding_terminal_id` / `alighting_terminal_id`.
- Add a read endpoint to fetch a route's ordered points for the UI:
  `GET /transport/routes/<id>/points/` → `[{terminal_id, terminal_name, city_name, order}]`.

### 4.4 Seed update (`seed_demo`)

- Add Boumnyébel + Édéa terminals and `RouteStop`s on the Douala→Yaoundé route.
- Add segment fares (Douala→Boumnyébel, Douala→Édéa, Douala→Yaoundé,
  Édéa→Yaoundé …) at distinct prices for at least the Standard class/category.

## 5. Frontend changes

### 5.1 Transport-config Fares screen (built → segment-aware)

- The fare create/edit modal: after choosing a route, call
  `routes/<id>/points/` and populate **origin** + **destination** dropdowns
  (origin options exclude the last point; destination options are points after
  the chosen origin).
- Fares table: add **Origine** and **Destination** columns.
- `transport.models.ts` `Fare` interface + `FareService` gain the O-D fields and
  a `routePoints(routeId)` call.

### 5.2 Ticketing (built later, segment-aware from the start)

New-booking flow: trip → **boarding/alighting** point → auto-suggested segment
fare → seat → pay. Covered by the ticketing module spec; this spec only
guarantees the backend + fares support it.

## 6. Sequencing

1. **Backend:** `Route.ordered_points()`, `routes/<id>/points/` endpoint,
   `Fare` O-D fields + backfill migration, `Booking` O-D fields, serializers /
   services / selectors, `seed_demo` update.
2. **Transport-config frontend:** segment-aware Fares screen.
3. **Ticketing module:** built segment-aware (separate spec/plan).

## 7. Out of scope

- Leg-based inventory / reselling seats freed at intermediate stops (Option B).
- Automatic leg-sum pricing (Option B pricing).
- Any change to how intermediate stops are managed on the route (unchanged).
