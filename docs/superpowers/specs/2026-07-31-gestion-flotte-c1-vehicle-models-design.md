# Gestion Flotte C1 — Vehicle Models → Config Flotte

**Date:** 2026-07-31
**Branch:** `feature/fleet-gestion-c1` (off `feature/fleet-config`)
**Author:** shimi
**Parent effort:** Fleet re-architecture. Config Flotte (Sub-project A) is done.
This is **C1** of Sub-project C (Vehicles). C2 (Vehicle-level enrichment:
category/tags/parking/fiscal) and B (People) / D (Operations) follow separately.

## 1. Goal

Make `fleet.VehicleModel` consume **Config Flotte** instead of hardcoded enums:
convert `vehicle_type` and `fuel_type` to FKs, add `transmission` and
`traction_type` FKs, and feed the Modèles screen from the configurable lists —
with a data migration so existing models keep their values.

## 2. Decisions (locked)

- Refactor in place; **non-breaking** via data migration.
- `vehicle_type`, `fuel_type` → FK to `fleet.VehicleType` / `fleet.FuelType`
  (Config Flotte). Add `transmission` → `Transmission`, `traction_type` →
  `TractionType`. All FKs `on_delete=PROTECT`, `null=True, blank=True`.
- Config lookups resolve within scope: **globals (`company=NULL`) + the user's
  company** rows.
- `Vehicle.status` stays an operational enum. Vehicle-level fields (category,
  tags, parking, fiscal) are **out of scope** here (C2).
- `seats/doors/horsepower/payload_kg` unchanged (power/range/emission-with-units
  is a later enrichment).
- French UI.

## 3. Backend

### 3.1 Model (`apps/fleet/models/vehicle_model.py`)
Replace the two `TextChoices` enums + CharFields with FKs, and add two FKs:

```python
vehicle_type  = models.ForeignKey("fleet.VehicleType", on_delete=models.PROTECT,
                    related_name="vehicle_models", null=True, blank=True)
fuel_type     = models.ForeignKey("fleet.FuelType", on_delete=models.PROTECT,
                    related_name="vehicle_models", null=True, blank=True)
transmission  = models.ForeignKey("fleet.Transmission", on_delete=models.PROTECT,
                    related_name="vehicle_models", null=True, blank=True)
traction_type = models.ForeignKey("fleet.TractionType", on_delete=models.PROTECT,
                    related_name="vehicle_models", null=True, blank=True)
```
Delete the `VehicleType`/`FuelType` inner `TextChoices` classes.

### 3.2 Migration (hand-written, single file)
`makemigrations` would drop+recreate (data loss), so hand-write
`apps/fleet/migrations/00XX_vehiclemodel_config_fks.py` with operations **in order**:

1. `RenameField('vehiclemodel', 'vehicle_type', 'vehicle_type_old')`
2. `RenameField('vehiclemodel', 'fuel_type', 'fuel_type_old')`
3. `AddField` `vehicle_type` (FK, null=True) — resolves to column `vehicle_type_id`
4. `AddField` `fuel_type` (FK, null=True)
5. `AddField` `transmission` (FK, null=True)
6. `AddField` `traction_type` (FK, null=True)
7. `RunPython(map_enums, noop)` — see below
8. `RemoveField('vehiclemodel', 'vehicle_type_old')`
9. `RemoveField('vehiclemodel', 'fuel_type_old')`

`map_enums` (uses historical models via `apps.get_model`):
- Ensure the global config rows exist (create if missing, `company=None`):
  - VehicleType: `car→Voiture`, `van→Fourgon/Van`, `truck→Camion`, `bus→Bus`,
    `motorcycle→Moto`, `other→Autre`.
  - FuelType: `gasoline→Essence`, `diesel→Diesel`, `electric→Électrique`,
    `hybrid→Hybride`, `lpg→GPL`, `other→Autre`.
- For each `VehicleModel`, set `vehicle_type` / `fuel_type` FK from the mapping of
  `vehicle_type_old` / `fuel_type_old`.

`makemigrations fleet --check` must be clean after (model matches migrations).

### 3.3 Serializers (`apps/fleet/serializers.py`)
- `VehicleModelSerializer`: add `vehicle_type_name` (`source="vehicle_type.name"`,
  `default=None`), `fuel_type_name`, `transmission` (id) + `transmission_name`,
  `traction_type` (id) + `traction_type_name`. Keep `vehicle_type`/`fuel_type`
  (the FK ids) in `fields`.
- `VehicleModelWriteSerializer`: replace the two `ChoiceField`s with
  `vehicle_type_id = UUIDField()`, `fuel_type_id = UUIDField()`, and add optional
  `transmission_id`, `traction_type_id` (`required=False, allow_null=True`).
- `VehicleListSerializer.vehicle_type`: change to
  `serializers.CharField(source="model.vehicle_type.name", read_only=True, default=None)`.

### 3.4 Service (`apps/fleet/services/vehicle_services.py`)
- `create_vehicle_model(...)`: accept `vehicle_type`, `fuel_type` (model
  instances), `transmission=None`, `traction_type=None`; persist them.
- `update_vehicle_model` `allowed`: replace `"vehicle_type","fuel_type"` with
  `"vehicle_type_id","fuel_type_id","transmission_id","traction_type_id"` (plus
  the unchanged `name/seats/doors/horsepower/payload_kg`).

### 3.5 View (`apps/fleet/views.py`)
- `VehicleModelListView.post`: resolve the config FKs by id within scope
  (globals + user's company) and pass instances to `create_vehicle_model`. A
  small helper `_get_config(model_cls, id, company_id)` returns the row if it is
  global or belongs to the company, else `None` → 404.
- `VehicleModelDetailView.patch`: the validated `*_id` keys flow through
  `update_vehicle_model` via `setattr(model, "<field>_id", value)`; validate that
  provided ids exist in scope (else 404).
- List filter `?vehicle_type=` now takes a VehicleType **id**.

## 4. Frontend

- `models/fleet.models.ts` `FleetVehicleModel`: `vehicle_type: string | null`
  (id) + `vehicle_type_name: string`; same for `fuel_type`; add
  `transmission`, `transmission_name`, `traction_type`, `traction_type_name`.
  Drop the `VehicleType`/`FuelType` string-union types (or leave unused).
- **Modèles screen** (`pages/fleet/models/models.component.*`): inject the
  Config Flotte services `VehicleTypeService`, `FuelTypeService`,
  `TransmissionService`, `TractionTypeService`; load their lists in `ngOnInit`.
  Replace the hardcoded type/fuel `<select>` option arrays with dropdowns fed by
  those lists (label = `name`), bound to `vehicle_type_id` / `fuel_type_id`; add
  `transmission_id` / `traction_type_id` dropdowns (optional). The table shows
  `vehicle_type_name` / `fuel_type_name`. On edit, patch the `_id` controls.

## 5. Out of scope

- Vehicle-level enrichment (C2), People (B), Operations (D).
- Power/range/emission with units; converting `horsepower` to `power`+`unit`.
- Any change to `Vehicle.status` or the seat model.

## 6. Sequencing

1. Backend: model FKs → hand-written data migration → serializers → service →
   view; `manage.py check` + shell smoke (existing models keep type/fuel).
2. Frontend: models.ts + Modèles screen dropdowns; `ng build` + manual check.
