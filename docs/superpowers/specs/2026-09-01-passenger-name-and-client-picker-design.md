# Passenger single "Nom" + searchable client picker — design

**Date:** 2026-09-01
**Module:** Voyages · Réservations (clients)
**Author:** shimi (with Claude)
**Wave/Item:** Wave 4 · #8

## Goal

1. Replace the passenger's `first_name` + `last_name` with a **single `name` (Nom)** field (data migration, keeping display compatibility via a `full_name` alias).
2. On booking, make each passenger's **Nom** a searchable typeahead: as the user types, it searches existing clients; picking one fills phone + pièce and links that client; typing a new name creates a new client on save.

## Context

`Passenger` (`apps/voyages_booking/models/passenger.py`) currently has
`first_name`, `last_name`, and a `full_name` property
(`"{first} {last}".strip()`). `full_name` is the display used everywhere:
tickets, loyalty, bookings, roadmap/manifest views and PDFs, treasury
`source_party` (indirectly). Direct field references to
`first_name`/`last_name` are limited to: the model, `PassengerRead`/`PassengerWrite`
serializers, `get_or_create_passenger`, `find_passengers`, the seed
commands, and the frontend Passagers page + booking flow.

Existing infra to reuse:
- `find_passengers(company, q)` (`apps/voyages_booking/selectors/__init__.py`) — searches passengers; served by `GET /api/v1/voyage/... /passengers/?q=` (`PassengerListView`).
- `SearchableSelectComponent` (pick-from-list). The client picker needs **type-or-create**, so it's a new small component, not this one.
- Booking already supports an existing client: `buyer_spec`/item `passenger` spec with an `id` resolves via `_resolve_passenger`.

## Non-goals (YAGNI)

- No merge/dedup UI for existing duplicate clients.
- No change to phone/pièce/genre/birth_date fields — only the name is merged.
- No change to CrewMember, fleet ExternalDriver, HR employee, or `User` names (those keep first/last).
- The `full_name` alias stays permanently (not a temporary shim) — it is the read API.

## Architecture

Keep the change surface minimal by preserving `full_name` as the read
interface. Only write paths, search, serializers, and two frontend spots
change.

### A. Model & migration — `apps/voyages_booking/`

`models/passenger.py`:
- Remove `first_name`, `last_name`.
- Add `name = models.CharField(_("nom"), max_length=300)`.
- `full_name` property returns `self.name` (kept for compatibility).
- `Meta.ordering = ["name"]`.
- `__str__` unchanged (`f"{self.full_name} ({self.phone})"`).

Migration `apps/voyages_booking/migrations/00XX_passenger_single_name.py`
(one file, three operations):
1. `AddField` `name` (`default=""`).
2. `RunPython(combine, split)`:
   - forward `combine`: for each passenger, `name = f"{first_name} {last_name}".strip()`.
   - reverse `split`: `first_name, _, last_name = name.partition(" ")` (best-effort).
3. `RemoveField` `first_name`, `RemoveField` `last_name`.
4. `AlterModelOptions` ordering → `["name"]`.

Use `apps.get_model` in the data function.

### B. Backend service / serializers / search

`services/passenger_services.py::get_or_create_passenger` — signature
takes `name` instead of `first_name, last_name`; dedup logic unchanged
(id_number then phone); `Passenger.objects.create(..., name=name, ...)`.

`services/booking_services.py::_resolve_passenger` — build the create
call with `name=spec.get("name", "")` instead of first/last. The `id`
branch (existing client) is unchanged.

`selectors/__init__.py::find_passengers` — filter
`Q(name__icontains=q) | Q(phone__icontains=q) | Q(id_number__icontains=q)`;
order by `name`.

`config_api/serializers.py`:
- `PassengerRead.Meta.fields`: replace `first_name, last_name` with `name` (keep `full_name`).
- `PassengerWrite`: replace `first_name`/`last_name` with `name = CharField(max_length=300)`.
- `BookingCreateSerializer` passenger/buyer spec: accept `name` (drop required first/last). Confirm the buyer/item passenger inline serializer field names and update to `name`.

`config_api/views.py` — any dict building that reads
`passenger.first_name`/`last_name` directly (none expected; all use
`full_name`) — grep and fix if present.

### C. Frontend — Passagers page (`pages/voyages-booking/passengers/`)

- Form: replace the two `first_name`/`last_name` controls with a single
  `name` control (`Validators.required`). Update `openEdit` patch and the
  table's displayed column to `name` (or keep `full_name`).
- `PassengerSpec` (and `Passenger`) TS types (`models/voyages-booking.models.ts`):
  replace `first_name`/`last_name` with `name` (keep `full_name`).

### D. Frontend — booking client typeahead (`pages/voyages-booking/new-booking/`)

New standalone component `ClientAutocompleteComponent`
(`pages/voyages-booking/shared/client-autocomplete/`):
- Inputs: `value` (the PaxRow, two-way via `[(client)]` or individual
  bindings). Emits selection.
- Template: a text input bound to `name`; a dropdown listing search
  results (`Nom · téléphone`). Debounced (250 ms) call to
  `PassengerService.list(q)` (existing `GET passengers/?q=`).
- Behaviour:
  - Typing updates `name` and triggers search.
  - Selecting a result sets `id`, `name`, `phone`, `id_type`, `id_number`
    on the row (phone/pièce remain editable afterwards).
  - Editing the name after a selection clears the linked `id` (it becomes
    a new/edited client on save) — prevents silently overwriting an
    existing client.
- `new-booking.component`: each `PaxRow`'s Nom uses this component; the
  `passengers.some(p => !p.first_name || !p.last_name ...)` validity check
  becomes `!p.name`. The submit payload item `passenger` sends
  `{ id?, name, phone, id_type, id_number }`. Buyer selection stays
  `buyerIndex`.

### E. Seed commands

`management/commands/seed_voyageur_express.py`, `seed_voyages_demo.py`:
replace `first_name=…, last_name=…` and `buyer_spec/passenger` dicts with
`name="First Last"`. (Non-production, but must stay runnable.)

## Data flow

1. Counter agent types "Ali" in a passenger's Nom → debounced
   `GET passengers/?q=Ali` → dropdown of matches.
2. Picks "Alice Ngo · 699000001" → row gets `id`, `name`, `phone`, pièce.
3. On booking submit → item `passenger = { id, name, phone, … }` →
   `_resolve_passenger` reuses the client by `id`.
4. If no pick (new client) → `passenger = { name, phone, … }` →
   `get_or_create_passenger` matches on phone/id or creates with `name`.

## Error handling

- Empty `name` blocks booking submit (client-side) and is rejected by
  `PassengerWrite` / booking serializer (server-side).
- Search endpoint errors → dropdown shows nothing; free typing still
  works (degrades to new-client entry).
- Migration is reversible (name → first/last split on first space) so a
  rollback is possible, with the caveat that multi-word names collapse
  into last_name.

## Testing

Backend (pytest):
- `get_or_create_passenger(name=…)` creates a passenger with that `name`
  and `full_name == name`.
- `get_or_create_passenger` dedups on phone regardless of name.
- `find_passengers("Ali")` matches on name; also matches phone/id_number.
- Booking with `passenger={"name": "...", "phone": "..."}` creates a
  client; booking with `passenger={"id": <existing>}` reuses it (no new
  client row).
- `PassengerRead` exposes `name` + `full_name`; `PassengerWrite` accepts
  `name` and rejects missing `name`.
- Migration behaviour: a unit test constructing a passenger via the new
  model asserts `name`/`full_name`; the data-combine step is covered by
  running the suite on a migrated test DB (fresh migrations).

Frontend: `ng build` (no unit-test suite).

## Files

**Modify (backend)**
- `apps/voyages_booking/models/passenger.py`
- `apps/voyages_booking/migrations/00XX_passenger_single_name.py` (create)
- `apps/voyages_booking/services/passenger_services.py`
- `apps/voyages_booking/services/booking_services.py` (`_resolve_passenger`)
- `apps/voyages_booking/selectors/__init__.py` (`find_passengers`)
- `apps/voyages_booking/config_api/serializers.py` (PassengerRead/Write + booking spec)
- `apps/voyages_booking/config_api/views.py` (only if any direct first/last refs)
- `apps/voyages_booking/management/commands/seed_voyageur_express.py`, `seed_voyages_demo.py`
- tests: `apps/voyages_booking/test_passenger_name.py` (create)

**Modify (frontend)**
- `src/_api/models/voyages-booking.models.ts` (Passenger, PassengerSpec)
- `src/_api/pages/voyages-booking/passengers/passengers.component.{ts,html}`
- `src/_api/pages/voyages-booking/new-booking/new-booking.component.{ts,html}`
- `src/_api/pages/voyages-booking/shared/client-autocomplete/client-autocomplete.component.{ts,html}` (create)

## Global constraints

- French UI copy; `name` label = "Nom".
- `full_name` remains the read alias = `name`; do not remove it.
- Booking still supports selecting an existing client by `id` (unchanged path).
- List responses keep `{success,data,pagination}` conventions; the search
  endpoint returns the existing passenger list shape.
- Commits authored as shimi, no Claude co-author trailer.
- Backend tests via `pytest`; frontend verified with `ng build`.
