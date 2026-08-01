# Gestion Flotte B — People (Suppliers & Drivers)

**Date:** 2026-07-31
**Branch:** `feature/fleet-people-b` (off `feature/fleet-gestion-c2`)
**Author:** shimi
**Parent effort:** Fleet re-architecture. A (Config Flotte), C1, C2 are done. This
is **Sub-project B**. D (Operations) follows and will consume Suppliers/Drivers.

## 1. Goal

Add **Fournisseurs** (Supplier — new company-scoped entity + CRUD) and enrich
**Conducteurs** (`ExternalDriver`) with an optional employee link
(`employee_id` + optional `user` FK).

## 2. Decisions (locked)

- **Additive / non-breaking.** New `Supplier` model + two nullable Driver fields.
- Supplier is **company-scoped** (mirrors `Parking`/`ExternalDriver`) — no global.
- Driver gets an **optional link to an employee**: `employee_id` (free text
  internal number) + optional `user` FK (link to the system account).
- `license_category` stays the current enum (not made configurable in B).
- **Manufacturer logo deferred** (Brand already covers name + country).
- French UI. Commit as shimi (no trailer).

## 3. Backend

### 3.1 New model `Supplier` (`apps/fleet/models/supplier.py`)
```python
class Supplier(BaseModel):
    company        = FK(system_config.Company, CASCADE, related_name="suppliers")
    name           = CharField(max_length=255)
    code           = CharField(max_length=20)          # unique per company (service-checked)
    tax_id         = CharField(max_length=50, blank=True)   # NIU
    address        = TextField(blank=True)
    city           = CharField(max_length=100, blank=True)
    country        = CharField(max_length=2, default="CM")
    phone          = CharField(max_length=30, blank=True)
    email          = EmailField(blank=True)
    website        = URLField(blank=True)
    contact_person = CharField(max_length=255, blank=True)
    notes          = TextField(blank=True)
    class Meta(BaseModel.Meta): ordering = ["name"]
```
(`is_active` inherited from BaseModel.) Export from `models/__init__.py`.

### 3.2 `ExternalDriver` new fields (`apps/fleet/models/external_driver.py`)
```python
employee_id = CharField(max_length=30, blank=True)      # numéro d'employé interne
user        = FK(settings.AUTH_USER_MODEL, SET_NULL, null=True, blank=True,
                 related_name="driver_profiles")
```
Both migrations additive (auto-generated).

### 3.3 Supplier CRUD (mirrors Parking/ExternalDriver)
- `SupplierSerializer` (all fields + `is_active`) / `SupplierWriteSerializer`
  (name*, code*, tax_id, address, city, country, phone, email, website,
  contact_person, notes, is_active).
- Selectors `list_suppliers(company_id, search=None)` (search name/code),
  `get_supplier(id, company_id)`.
- Services `create_supplier` / `update_supplier` / `delete_supplier`;
  `create_supplier` and `update_supplier` enforce **code unique per company**
  (raise `ApplicationError` on clash).
- Views `SupplierListView` / `SupplierDetailView` (`IsInstitutionAdmin`); urls
  `/fleet/suppliers/` and `/fleet/suppliers/<uuid:supplier_id>/`.

### 3.4 Driver serializer / service
- `ExternalDriverSerializer`: add `employee_id`, `user` (id), `user_name`
  (SerializerMethodField → full name/username or None).
- `ExternalDriverWriteSerializer`: add `employee_id` (optional, default ""),
  `user_id` (optional, allow_null).
- `create_external_driver`: add `employee_id="", user_id=None` params → persist.
- `update_external_driver`: add `"employee_id", "user_id"` to `allowed`.
- View resolves nothing special — `user_id` is a plain FK id; the driver create
  view passes validated data through (verify a bad `user_id` is tolerated: the FK
  is `SET_NULL`/nullable; DRF `UUIDField` only validates format — acceptable, an
  invalid id simply won't match a real user and Django will error on save, so the
  **view validates** `user_id` belongs to the company when provided).

## 4. Frontend

### 4.1 Fournisseurs (new, Gestion Flotte)
- `FLEET.suppliers` endpoints; `Supplier` interface; `SupplierService`
  (`services/fleet/supplier.service.ts`).
- « Fournisseurs » CRUD screen (`pages/fleet/suppliers/`) mirroring the brands
  screen: list (Nom, Code, Contact, Téléphone, Statut) + modal (all fields).
  Route `/fleet/suppliers` + a **Gestion Flotte** menu entry « Fournisseurs ».

### 4.2 Conducteurs enrichment
- `ExternalDriver` model interface (`fleet.models.ts`): add `employee_id`,
  `user`, `user_name`.
- The Conducteurs form gains **N° d'employé** (`employee_id`) and an optional
  **Employé lié** dropdown (`user_id`), fed by `UserService.list()`
  (company users). Table optionally shows the employee number.

## 5. Out of scope

- Manufacturer logo / image upload; making `license_category` configurable;
  `VehicleModel.suppliers` M2M (a later bite); Operations (D).

## 6. Sequencing

1. Backend: `Supplier` model + `ExternalDriver` fields + migration.
2. Backend: Supplier CRUD + Driver serializer/service/view.
3. Frontend: Supplier service/model/screen/menu.
4. Frontend: Conducteurs screen enrichment.
