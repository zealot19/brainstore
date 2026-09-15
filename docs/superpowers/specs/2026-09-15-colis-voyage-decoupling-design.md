# Colis ⇄ Voyage Decoupling — Design (Tranche 1)

**Status:** Draft for review
**Date:** 2026-09-15
**Author:** shimi (with Claude)
**Module:** `voyages_consignment` (Colis), with touch points in `voyages_trips`, `voyages_config`, treasury sidebar.

---

## 1. Context & goal

The Colis module currently forces every parcel through a voyage: a parcel cannot advance past `registered` unless it is assigned to a `Trip` whose route serves its origin→destination. Some agencies run parcels **without** using the Trips module, and even trip-using agencies want to register/dispatch before a voyage is chosen.

**Goal (Tranche 1):** make the voyage an *optional means of transport* for a parcel while keeping full traceability, and rebuild the "Manifeste" page into an **Expédition** workspace. Reference the full functional spec (`§1–59`, provided by the user) as the north star; this document scopes only Tranche 1.

**Guiding rule (spec §52):** the module is *not* a last-mile delivery platform. Core flow: `AGENCE DÉPÔT → COLIS → (VOYAGE) → AGENCE DESTINATION → RETRAIT`.

## 2. Non-goals (deferred to later tranches)

Incidents (DAMAGED/LOST with photos/investigation), returns & unclaimed (RETURN_*/UNCLAIMED with delays/fees), rule-based pricing grid, a dedicated payments table (PENDING/PARTIAL/REFUNDED), public tracking page, notifications (SMS/WhatsApp), parcel dashboards & reports, QR labels. These are acknowledged by the spec but **out of scope** here.

## 3. Decisions (from brainstorming)

1. **Decoupling model:** `trip` stays an optional FK on `Parcel`. Parcels advance via manual/batch transitions when no voyage is set; when a voyage is set, the voyage's depart/arrive **auto-advance** its parcels (plus optional scan-by-scan control).
2. **Status scope:** full mainline + `CANCELLED`. Defer DAMAGED/LOST/RETURNED/UNCLAIMED.
3. **Capacity cap:** running count+weight totals always shown; an enforced cap only if the company configures one (off by default).
4. **Destination:** a parcel can only be sent to a **ServicePoint whose `station_kind == AGENCY`**.

## 4. Status model

Replace the 5-status enum with:

```
REGISTERED → READY_FOR_TRAVEL → LOADED → IN_TRANSIT → ARRIVED → AVAILABLE_FOR_PICKUP → PICKED_UP
                                                                                        CANCELLED
```

`Parcel.Status` choices (code → French label):
- `registered` → « Enregistré »
- `ready_for_travel` → « Prêt à expédier »
- `loaded` → « Chargé »
- `in_transit` → « En transit »
- `arrived` → « Arrivé »
- `available_for_pickup` → « Disponible pour retrait »
- `picked_up` → « Retiré »
- `cancelled` → « Annulé »

### 4.1 Allowed transitions

| From | To | Trigger |
|---|---|---|
| registered | ready_for_travel | agent accepts / assigns destination (auto on register if destination set) |
| registered, ready_for_travel | cancelled | cancel (agent/manager) |
| ready_for_travel | loaded | scan-load onto a voyage vehicle |
| ready_for_travel | in_transit | dispatch **without voyage** (skip loaded) |
| loaded | in_transit | voyage departs (bulk) OR manual dispatch |
| in_transit | arrived | voyage arrives (bulk) OR manual "Arrivé" |
| arrived | available_for_pickup | reception (scan + piece reconciliation) |
| available_for_pickup | picked_up | retrait |

Any other transition is rejected with `ApplicationError`. **No status is ever set without writing a `ParcelEvent`** (spec §51).

`LOADED` is optional: the no-voyage path uses `ready_for_travel → in_transit`. To keep the register UX unchanged, registering a parcel lands it in `ready_for_travel` directly when a destination agency is set (there is always one — see §7), so `registered` is effectively transient; we still record the `registered` event for the timeline.

### 4.2 Existing-data migration (semantic shift)

Today's `arrived` means "réceptionné, ready for retrait" — that is the **new `available_for_pickup`**. Data migration maps existing rows:

| old | new |
|---|---|
| registered | registered |
| loaded | loaded |
| arrived | available_for_pickup |
| picked_up | picked_up |
| cancelled | cancelled |

`ParcelEvent.kind` values are remapped the same way where present.

## 5. Data model changes

### 5.1 `Parcel`
- `status`: widen `max_length` to 20; new choices (§4).
- New timestamps: `dispatched_at` (→ in_transit), `available_at` (→ available_for_pickup). Keep `loaded_at`, `arrived_at`, `picked_up_at`.
- `trip`: unchanged (nullable SET_NULL).

### 5.2 `ParcelEvent`
- Add `from_status` (`max_length=20`, blank) and `to_status` (`max_length=20`, blank) for a clean timeline (spec §31).
- Widen/extend `kind` choices to cover the new transitions (`ready`, `dispatched`, `received`, `available`, `pickup`, `cancel`), OR keep `kind` coarse and rely on `from_status`/`to_status`. **Decision:** keep `kind` as a coarse action label and add the status pair; a generic `_event(parcel, kind, from_status, to_status, trip, user, note)` helper writes all events.

### 5.3 Capacity config
Add to `VoyagesSettings` (Paramètres Voyages, per company): `parcel_trip_max_weight_kg` (Decimal, null = no cap) and `parcel_trip_max_count` (int, null = no cap). Null ⇒ totals shown, nothing enforced.

### 5.4 Seating-plan validity removal (quick-win, unrelated to colis)
- Remove `valid_from` / `valid_to` from `VehicleSeatingAssignment` (model + migration + `config_api` serializers/views + Angular form/table + i18n).
- **Resolver change:** `voyages_trips/selectors/eligibility.py` currently picks the plan via `valid_from__lte=on_date` ordered by `-valid_from`. Switch to "latest active assignment for the vehicle" (`is_active=True`, order by `-created_at`).
- Update tests that construct `VehicleSeatingAssignment(..., valid_from=...)` (`voyages_trips/tests.py`, `test_assignment_conflicts.py`, `test_trip_vehicle_optional.py`) and the two seed commands.

## 6. Services (`parcel_services.py`)

- `register_parcel`: validate `destination_point.station_kind == AGENCY` (§7); land in `ready_for_travel` (record `registered` then `ready_for_travel` events). Payment/treasury unchanged.
- `assign_to_trip(parcel, trip, *, user)`: set `parcel.trip`; status → `ready_for_travel` (or `loaded` if `scan=True`). Route-serves-destination becomes a **soft filter** in the Expédition query, not a hard error. Guard: only `registered`/`ready_for_travel`/`loaded` (re-assignable before dispatch).
- `unassign_from_trip(parcel, *, user)`: clear `trip`, back to `ready_for_travel` (only if not yet in_transit).
- `load_parcel(parcel, *, user)`: `ready_for_travel → loaded` (scan).
- `dispatch_parcel(parcel, *, user)`: `ready_for_travel|loaded → in_transit`, set `dispatched_at`. Works **with or without** a trip.
- `mark_arrived(parcel, *, user)`: `in_transit → arrived`.
- `receive_parcel(parcel, ...)`: `arrived → available_for_pickup` (keep received/missing/damaged reconciliation), set `available_at`.
- `pickup_parcel(parcel, ...)`: `available_for_pickup → picked_up` (guard updated from `arrived`).
- `cancel_parcel`: `registered|ready_for_travel → cancelled` (block once in_transit+ without special permission).
- **Batch helpers:** `dispatch_batch(parcels)`, `mark_arrived_batch(parcels)` for the no-voyage path (multi-select on Expédition/Réception screens).
- **Trip hooks:** `depart_trip` (voyages_trips) calls `dispatch_parcels_for_trip(trip)` → all `loaded`/`ready_for_travel` parcels on the trip → `in_transit`. `complete_trip` calls `arrive_parcels_for_trip(trip)` → all `in_transit` → `arrived`. Both write events and are idempotent.
- **Capacity check** (in `assign_to_trip` / Expédition add): if company cap set and adding would exceed weight/count → `ApplicationError`.

## 7. Destination = agency

`register_parcel` and `edit_parcel` validate that `destination_point` is a ServicePoint with `station_kind == AGENCY` (and `is_station`). Origin remains the depositing agency's point (unchanged). Frontend destination pickers filter to `station_kind=AGENCY`. Add a backend selector `agency_service_points(company)` and a query param on the service-point list.

## 8. Expédition workspace (frontend)

Rename sidebar **« Manifeste voyage » → « Expédition »** (Colis module) and rebuild the page:
- **Voyage mode:** filter to pick a voyage (destination / date / route). Dual pane: *ready parcels for that destination* ↔ *parcels assigned to this voyage*, shuttle to assign/unassign. Running **count + weight** totals; capacity bar if a cap is set. Actions: **Dispatch** (departs the voyage → parcels in_transit) and **Imprimer manifeste / étiquettes**.
- **Sans-voyage mode:** multi-select ready parcels for a destination and **Expédier** (batch → in_transit, no trip).
- The printable manifest (spec §33) is generated from the assigned list.

Reception page: works on `arrived` parcels → `available_for_pickup`, with the existing reconciliation; supports trip-level "receive all" and scan.

## 9. API surface

New/changed endpoints under `voyages/consignment/`:
- `POST /parcels/{id}/dispatch` — → in_transit (with/without trip).
- `POST /parcels/{id}/arrive` — → arrived.
- `POST /parcels/{id}/unassign` — clear trip.
- `POST /parcels/batch-dispatch`, `POST /parcels/batch-arrive` — batch (ids[]).
- `POST /parcels/{id}/load` — scan load.
- Existing `assign`, `receive`, `pickup`, `cancel` retained with updated guards.
- Trip depart/arrive endpoints (voyages_trips) unchanged in shape; they now cascade to parcels.

## 10. Bounded quick-wins (bundled)

1. **Treasury sidebar:** remove the « Tableau de bord » sub-item from the **Dépenses** and **Recettes** sections in `sidebarData1` (leave the standalone Trésorerie dashboard). Front-end only; the dashboard routes/pages may be left in place (dead nav removed) or removed in a follow-up.
2. **Bus-plan validity dates:** §5.4.
3. **Rename Manifeste → Expédition:** §8.

## 11. i18n

New parcel status labels + Expédition workspace strings across fr/en/es/pt via a `seed-*.mjs` script; `npm run i18n:check` must pass.

## 12. Testing

- Transition matrix unit tests (each allowed transition + representative rejects).
- No-voyage happy path: register → dispatch → arrive → receive → pickup.
- Voyage path: assign → depart_trip cascades to in_transit → complete_trip cascades to arrived → receive → pickup.
- Destination-must-be-agency rejection.
- Capacity cap enforced only when configured.
- Data-migration test: old `arrived` → `available_for_pickup`.
- Seating-plan resolver returns latest active assignment after validity removal; existing eligibility tests updated.

## 13. Rollout / risk

- Status widening + data migration is the main risk; dev has few parcels, prod effectively none (module young). Migration is reversible in shape (not semantics).
- Removing seating `valid_from` changes plan resolution — covered by updating `eligibility.py` + tests.
- No entitlement changes (colis module already standalone).
