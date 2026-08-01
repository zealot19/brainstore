# Config Flotte (Fleet Configuration) — Design

**Date:** 2026-07-30
**Branch:** `feature/fleet-config` (off `feature/blockable-seats`)
**Author:** shimi + Claude
**Parent effort:** Fleet re-architecture toward the analysis in ` FLEET MANAGEMENT/`.
This is **Sub-project A** of that effort (foundation). B (People), C (Vehicles),
D (Operations), E (Config/Gestion UX polish + dashboards) follow.

## 1. Goal

Stand up the **configurable reference layer** for Fleet — replacing hardcoded
lists with company-configurable tables — and split the Fleet UI into
**« Config Flotte »** (reference data) and **« Gestion Flotte »** (the existing
management screens, relabelled). Every screen carries a short French helper.

## 2. Decisions (locked with the user)

- **Refactor in place:** evolve the existing multi-tenant `fleet` app; no rebuild.
- **Multi-tenant config with configurable scope:** each reference row has a
  nullable `company`. `company = NULL` → **shared/global** default (visible to
  all institutions); `company = X` → that institution's own entry. A company
  sees globals **+** its own. (Same pattern as `transport_config.FareClass`.)
- **Classification lists are configurable; workflow statuses stay code enums.**
  Only the analysis' reference tables are built here.
- **Seat layouts stay in Voyages** — untouched.
- **In-app guidance:** every config screen shows a short French info banner.
- **French-first UI.**
- **Additive / non-breaking:** existing enums (`VehicleModel.vehicle_type`/
  `fuel_type`, `ExternalDriver.license_category`, `VehicleDocument.doc_type`) are
  **not** converted here — that lands in Sub-projects B/C with data migrations.

## 3. The 12 reference tables

All under the `fleet` app in a new `models/config/` submodule, all subclass
`apps.core.models.BaseModel` (UUID pk, timestamps, soft-delete, audit,
`is_active`) and add `company = FK(system_config.Company, null=True, blank=True)`
for scope. `company=NULL` = global.

| Model | Fields (beyond BaseModel + company) | Notes |
|---|---|---|
| `VehicleCategory` | `name` | Grouping: Utilitaire, Berline, SUV, Bus, Minibus |
| `VehicleType` | `name` | Voiture, Moto, Camion, Bus |
| `FuelType` | `name` | Essence, Diesel, Électrique, Hybride, GPL |
| `Transmission` | `name` | Manuelle, Automatique, Semi-automatique |
| `TractionType` | `name` | Traction avant, Propulsion, 4x4, AWD |
| `UnitCategory` | `name` | Puissance, Distance, Émission, Volume |
| `Unit` | `unit_category` FK, `code`, `name` | ch/kW, km/mi, g/km |
| `Period` | `name` | Mensuel, Trimestriel, Annuel |
| `DocumentType` | `code`, `label`, `requires_expiration` (bool) | Assurance, Carte grise, Visite technique |
| `Tag` | `name`, `color` (hex) | Pool, Direction, Chantier |
| `InterventionType` | `name`, `category` (enum CONTRACT/SERVICE/BOTH) | Maintenance/contract classification |
| `ActivitySector` | `code`, `name` | Transport urbain, Logistique, Mining |

**Uniqueness within scope:** the human key (`name`, or `code` where present) is
unique per `company` (globals form their own scope). Implemented with a
validation in the service layer (a DB `unique_together` on a nullable FK does not
enforce per-scope uniqueness for NULL rows, so the check is done in code —
mirroring how transport-config validates).

`InterventionType.category` is the **one** enum kept here (it classifies where
the type applies; it is not a user list) — matching the analysis.

## 4. Backend

Follows the `transport_config` conventions exactly (selectors / services /
serializers / class-based views / `IsInstitutionAdmin`).

- **Models:** `apps/fleet/models/config/*.py`, exported from
  `apps/fleet/models/__init__.py`. One migration `apps/fleet/migrations/00XX_fleet_config.py`.
- **Scope resolution:** reuse the transport-config helpers pattern —
  `_scope_company_id(request)` (superuser → `?company_id`, else user's company)
  and `_resolve_company(request, body_company_id)`.
- **Selectors:** `list_<x>(company_id, search=None, is_active=None)` returning
  `Q(company_id=company_id) | Q(company__isnull=True)` (globals + own), ordered
  by name/code.
- **Services:** `create_<x>` / `update_<x>` / `delete_<x>` with per-scope
  uniqueness validation (raise `ApplicationError` on clash). A company admin
  creates company-scoped rows; a superuser with no `company_id` creates a global
  row (`company=NULL`).
- **Serializers:** read (`id`, fields, `company`, `is_active`, timestamps) +
  write (flat fields). `Unit` read includes `unit_category_name`.
- **URLs:** a new block in `apps/fleet/urls.py` under `config/…`, e.g.
  `/api/v1/fleet/config/vehicle-types/`, `…/units/`, etc.
- **Seed:** extend `seed_demo` (or a `seed_fleet_config` command) to insert the
  **global** defaults listed in §3 (company=NULL) so every institution starts
  with sensible values.

## 5. Frontend

Mirrors the transport-config module (services / models / standalone components /
lazy routes / sidebar).

- **Endpoints:** `FLEET_CONFIG` group in `api.config.ts`.
- **Models:** `models/fleet-config.models.ts` (12 interfaces + `InterventionCategory` union).
- **Services:** `services/fleet-config/` — one per table (`list/get/create/update/delete`).
- **Pages:** `pages/fleet-config/<entity>/` — CRUD screens mirroring
  `transport-config/fare-classes` (list + search + modal). `Unit` has a
  `unit_category` dropdown. Each row shows a **scope** badge: *Global* when
  `company` is null, else *Spécifique*.
- **Wrapper + routes:** `fleet-config.component.ts` (router-outlet), route block
  `/fleet-config/…`, path constants, and a **« Config Flotte »** sidebar group.
- **Relabel:** the existing "Flotte" sidebar group → **« Gestion Flotte »** (no
  route changes, label only).

### 5.1 In-app help banner (reused across the ERP)

Add a small shared standalone component
`pages/shared/info-banner/info-banner.component.ts`:

```
<app-info-banner text="Types de carburant utilisés par vos modèles…"></app-info-banner>
```

Renders a dismissible Bootstrap `alert-info` with an info icon. Each Config
Flotte screen includes one with a one-line French explanation. (This component is
intentionally generic so later modules can reuse it.)

## 6. Out of scope (this sub-project)

- Converting existing fleet enums to FKs (Sub-projects B/C).
- People / Vehicles / Operations model enrichment (B/C/D).
- Dashboards, alerts, cost reports (E).
- Any change to Voyages/ticketing seat layouts.

## 7. Sequencing

1. Backend: config models + migration → selectors/services/serializers → views/urls → seed globals.
2. Frontend: endpoints + models + services → info-banner component → the 12 CRUD screens → wire routes + « Config Flotte » menu + relabel to « Gestion Flotte ».
