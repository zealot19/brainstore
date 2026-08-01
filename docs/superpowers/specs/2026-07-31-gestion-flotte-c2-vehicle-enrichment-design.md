# Gestion Flotte C2 — Vehicle Enrichment

**Date:** 2026-07-31
**Branch:** `feature/fleet-gestion-c2` (off `feature/fleet-gestion-c1`)
**Author:** shimi
**Parent effort:** Fleet re-architecture. A (Config Flotte) and C1 (Vehicle Models
→ Config) are done. This is **C2** of Sub-project C.

## 1. Goal

Enrich `fleet.Vehicle` toward the analysis: configurable **category** and **tags**
(from Config Flotte), a new **Parking** location entity, and **fiscal** fields —
surfaced on the Véhicules screen. Purely additive.

## 2. Decisions (locked)

- **Additive / non-breaking:** all new fields are nullable / M2M; migration only
  adds columns + one table + one M2M table (no data mapping).
- Config-backed fields resolve in scope (**globals + company**), reusing the
  `_cfg` helper added in C1.
- Keep operational `status`; **skip** the analysis' separate lifecycle `state`.
- `vin` already exists — not re-added.
- French UI. Commit as shimi (no trailer).

## 3. Backend

### 3.1 New model `Parking` (`apps/fleet/models/parking.py`)
Company-scoped location:
```python
class Parking(BaseModel):
    company  = FK(system_config.Company, CASCADE, related_name="parkings")
    name     = CharField(max_length=255)
    location = CharField(max_length=255, blank=True)   # adresse / GPS
    notes    = TextField(blank=True)
    class Meta(BaseModel.Meta): ordering = ["name"]
```
Export from `models/__init__.py`.

### 3.2 `Vehicle` new fields (`apps/fleet/models/vehicle.py`)
```python
category   = FK("fleet.VehicleCategoryCfg", PROTECT, null=True, blank=True,
                related_name="vehicles")
tags       = ManyToManyField("fleet.Tag", blank=True, related_name="vehicles")
parking    = FK("fleet.Parking", SET_NULL, null=True, blank=True,
                related_name="vehicles")
registration_date = DateField(null=True, blank=True)
fiscal_horsepower = DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
catalog_value     = DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)
purchase_value    = DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)
residual_value    = DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)
```
Migration via `makemigrations fleet` (additive — safe to auto-generate).

### 3.3 Parking CRUD (company-scoped, mirrors existing fleet entities)
- Serializers `ParkingSerializer` / `ParkingWriteSerializer` (name*, location, notes).
- Selectors `list_parkings(company_id, search=None)`, `get_parking(id, company_id)`.
- Services `create_parking` / `update_parking` / `delete_parking` (block delete if
  vehicles reference it? — use `SET_NULL`, so deletion just detaches; allow it).
- Views `ParkingListView` / `ParkingDetailView` (`IsInstitutionAdmin`), urls
  `/fleet/parking/` and `/fleet/parking/<uuid:parking_id>/`.

### 3.4 Vehicle serializers / service / view
- `VehicleListSerializer`: add `category_name` (`source="category.name"`, default None),
  `parking_name` (default None), `tags` (a `SerializerMethodField` → list of
  `{id, name, color}`).
- `VehicleDetailSerializer`: add `category`, `category_name`, `parking`,
  `parking_name`, `tags` (same list), `registration_date`, `fiscal_horsepower`,
  `catalog_value`, `purchase_value`, `residual_value`.
- `VehicleCreateSerializer` / `VehicleUpdateSerializer`: add `category_id`
  (optional), `parking_id` (optional), `tag_ids` (`ListField(UUIDField)`, optional),
  and the four fiscal fields + `registration_date`.
- `create_vehicle`: accept `category=None, parking_id=None, tag_ids=None,
  registration_date=None, fiscal_horsepower=None, catalog_value=None,
  purchase_value=None, residual_value=None`; persist scalar/FK fields, and after
  create `if tag_ids: vehicle.tags.set(tag_ids)`.
- `update_vehicle`: add to `allowed` the `category_id`, `parking_id`,
  `registration_date`, and four fiscal keys; handle `tag_ids` separately
  (`vehicle.tags.set(tag_ids)` when provided, popped before the `allowed` loop).
- `VehicleListView.post` / `VehicleDetailView.patch`: resolve `category_id` via
  `_cfg(VehicleCategoryCfg, ...)` (scope) → pass instance; resolve `parking_id`
  within the company; validate `tag_ids` are in scope (globals+company) before
  `.set()`.

## 4. Frontend

### 4.1 Parking (new, under Gestion Flotte)
- `FLEET.parking` endpoints in `api.config.ts`; `Parking` interface in
  `fleet.models.ts`; `ParkingService` (`services/fleet/parking.service.ts`).
- « Parkings » CRUD screen (`pages/fleet/parking/`) mirroring the brands screen
  (name, location, notes). Route `/fleet/parking` + a **Gestion Flotte** menu
  entry « Parkings ».

### 4.2 Véhicules screen
- `fleet.models.ts`: `VehicleListItem` add `category_name`, `parking_name`,
  `tags: {id,name,color}[]`; `VehicleDetail` add the same + fiscal + registration.
- Vehicle form gains: **Catégorie** dropdown (`VehicleCategoryCfgService`),
  **Tags** multi-select (`TagService`, rendered as colored chips in the list),
  **Parking** dropdown (`ParkingService`), **Date d'immatriculation**, and a
  fiscal group (puissance fiscale, valeur catalogue, valeur d'achat, valeur
  résiduelle). List shows Catégorie + tag chips. Create/edit send
  `category_id`, `parking_id`, `tag_ids`, fiscal + `registration_date`.

## 5. Out of scope

- Lifecycle `state`; VehicleModel power/range/emission units; People (B);
  Operations (D). Documents already exist (converting `doc_type` → `DocumentType`
  FK is a later bite).

## 6. Sequencing

1. Backend: `Parking` model + `Vehicle` fields + migration.
2. Backend: Parking CRUD + Vehicle serializers/service/view.
3. Frontend: Parking service/model/screen/menu.
4. Frontend: Véhicules screen enrichment + models.ts.
