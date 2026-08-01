# Gestion Flotte D — Operations (Services & Contrats) — Design

**Date:** 2026-07-31
**Sub-project:** Gestion Flotte D — Operations (final Fleet analysis sub-project)
**Branch:** `feature/fleet-gestion-d-operations` (stacked on `feature/fleet-people-b`)

## Goal

Generalize the two narrow existing fleet models — `MaintenanceOrder` and `Insurance` —
into the analysis's configurable **`Service`** and **`Contract`** models, keyed off the
already-built configurable `InterventionType` and `Period`, add recurring-cost lines and
generic file attachments, and retire the static `MaintenanceType`. This fulfils the
standing directive: *"everything configurable — no static field that takes values from
Lists"* and *"refactor in place"*.

## Analysis source

`" FLEET MANAGEMENT/files/ALL_MODELS.py"` — `fleet/operations/models.py` section:
`Service`, `ServiceAttachment`, `Contract`, `RecurringCost`.

## Design decisions (locked with user)

1. **Refactor in place** (not add-alongside). Existing `MaintenanceOrder`/`Insurance`
   rows migrate to the new shape.
2. **Preventive intervals move onto the configurable `InterventionType`** — add optional
   `interval_km` / `interval_days`. Services keep computed `next_due_km`/`next_due_date`.
3. **Attachments reuse the generic `core.Attachment` (GenericFK)** — no dedicated
   `ServiceAttachment` table.
4. Old `Insurance.premium_amount` migrates into **one `RecurringCost` line** ("Prime",
   annual period).
5. `Insurance.deductible` (franchise) **stays a nullable field on `Contract`**.

## Component 1 — Config: `InterventionType` gains intervals

**Model** `apps/fleet/models/config/reference.py::InterventionType`
Add two nullable fields:
- `interval_km = DecimalField(max_digits=10, decimal_places=1, null=True, blank=True)`
- `interval_days = PositiveIntegerField(null=True, blank=True)`

`Category` (CONTRACT / SERVICE / BOTH) already exists — used to filter dropdowns:
- Services list intervention types where `category in (SERVICE, BOTH)`.
- Contracts list intervention types where `category in (CONTRACT, BOTH)`.

Config Flotte « Types d'intervention » screen (frontend) gains `interval_km` / `interval_days`
inputs. Config API serializer/service already generic — extend the field list.

Migration: additive (`0006` on fleet).

## Component 2 — `MaintenanceOrder → Service`

**Model** rename `apps/fleet/models/maintenance_order.py` → `service.py`, class `Service`.
- `vehicle` FK CASCADE, `related_name="services"`.
- **Swap** `maintenance_type` (FK MaintenanceType) → `intervention_type`
  (FK `fleet.InterventionType`, PROTECT, `related_name="services"`).
- **Swap** `provider` (CharField) → `supplier` (FK `fleet.Supplier`, SET_NULL, null=True,
  `related_name="services"`). Non-empty old `provider` text appended to `notes`.
- **Add** `description` (CharField 500, blank), `driver` (FK `fleet.ExternalDriver`,
  SET_NULL, null=True, `related_name="services"`), `currency` (CharField 3, default `XAF`).
- **Keep** `status` (NEW-equivalent: reuse existing PLANNED/IN_PROGRESS/DONE/CANCELLED —
  no enum change needed), `planned_date`, `start_date`, `done_date`,
  `odometer_at_start`, `odometer_at_done`, `cost`, `notes`, `next_due_km`, `next_due_date`.
- `next_due_*` auto-computed on completion from `intervention_type.interval_km/days`
  (repoint existing logic that read `maintenance_type.interval_*`).
- Attachments via `core.Attachment` GenericFK.

**Data migration** (hand-written): for each distinct `MaintenanceType` referenced, ensure an
`InterventionType` exists (match by name within same company scope; create if missing,
`category=SERVICE`, carrying `interval_km`/`interval_days`); rewrite each `Service.intervention_type`
FK; fold `provider` text into `notes`. Sequence: add `intervention_type_id` (nullable) +
`supplier` + `description` + `driver` + `currency` → RunPython map → make `intervention_type`
non-null → drop `maintenance_type`, `provider`.

## Component 3 — `Insurance → Contract`

**Model** rename `apps/fleet/models/insurance.py` → `contract.py`, class `Contract`.
- `vehicle` FK CASCADE, `related_name="contracts"`.
- **Add** `name` (CharField 255), `reference` (CharField 100, blank).
- **Swap** `insurance_type` enum → `intervention_type` (FK `InterventionType`, PROTECT,
  `related_name="contracts"`) + `included_services` (M2M `InterventionType`, blank,
  `related_name="included_in_contracts"`).
- **Swap** `company_name` + `insurer_contact` (text) → `supplier`
  (FK `Supplier`, SET_NULL, null=True, `related_name="contracts"`); old text folded into `terms`.
- **Add** `responsible` (FK `AUTH_USER_MODEL`, SET_NULL, null=True,
  `related_name="managed_contracts"`), `driver` (FK `ExternalDriver`, SET_NULL, null=True,
  `related_name="contracts"`), `activation_cost` (Decimal 18,2, default 0),
  `billing_period` (FK `Period`, SET_NULL, null=True, `related_name="contracts"`),
  `currency` (default `XAF`), `terms` (TextField, blank), `creation_date` (DateField, null=True).
- **Keep** `policy_number`, `start_date`, `end_date`, `deductible` (nullable),
  `notes`, `is_expired`/`days_until_expiry` properties.
- **Remove** `premium_amount` (migrated to a RecurringCost line).
- **Status enum** DRAFT / ACTIVE / EXPIRED / CANCELLED (default ACTIVE for migrated rows
  whose `end_date >= today`, else EXPIRED).

**Data migration** (hand-written): create global `InterventionType` rows for each
`insurance_type` value ("Assurance tous risques", "Responsabilité civile",
"Multi-risques", "Autre"), `category=CONTRACT`; rewrite `intervention_type`; set
`name` from `company_name`+policy; fold `company_name`/`insurer_contact` into `terms`;
create one `RecurringCost` ("Prime", `amount=premium_amount`, annual `Period`) per contract.

## Component 4 — `RecurringCost` (new, child of Contract)

**Model** `apps/fleet/models/recurring_cost.py`:
- `contract` (FK CASCADE, `related_name="recurring_costs"`)
- `description` (CharField 255)
- `amount` (Decimal 18,2)
- `currency` (CharField 3, default `XAF`)
- `period` (FK `Period`, PROTECT)

Managed as inline lines within the Contract editor.

## Component 5 — Backend API

Follow existing fleet patterns (class-based `APIView`, `IsInstitutionAdmin`,
selectors/services packages, standard response helpers, `StandardResultsSetPagination`).
- Rename `maintenance-orders/` → `services/`; add `services/<uuid:id>/attachments/`
  (list/upload) and `services/<uuid:id>/attachments/<uuid:att_id>/` (delete).
- Rename `insurance/` → `contracts/`; add `contracts/<uuid:id>/recurring-costs/` and
  `contracts/<uuid:id>/recurring-costs/<uuid:rc_id>/`.
- **Retire** `maintenance-types/` endpoints (config InterventionType covers it).
- Update `admin.py` registrations, and fleet **stats/alerts**: "overdue maintenance" →
  overdue Services (status != DONE and `planned_date`/`next_due_date` past); "expiring
  insurance" → expiring Contracts (`end_date` within window, status ACTIVE).
- selectors/services: rename `maintenance_selectors`/`maintenance_services` →
  `operations_selectors`/`operations_services`; add supplier/attachment/recurring-cost helpers.

## Component 6 — Frontend (Angular, French-first)

- Config Flotte « Types d'intervention »: add `interval_km` / `interval_days` inputs.
- Rename `pages/fleet/maintenance-orders` → `services` (« Services / Interventions »):
  intervention-type + supplier + driver dropdowns, attachments upload/list/delete.
- Rename `pages/fleet/insurance` → `contracts` (« Contrats »): intervention-type +
  included-services multi-select, supplier, billing period, responsible (user),
  status, recurring-cost line editor, deductible.
- **Delete** `pages/fleet/maintenance-types` screen + service (config now covers it).
- Rename services (`maintenance-order.service.ts` → `service.service.ts` /
  `insurance.service.ts` → `contract.service.ts`), models, routes, sidebar labels,
  `api.config.ts` entries.
- Small in-app French info banners per standing directive.

## Migrations & verification

- Hand-written migrations where renaming/remapping (add-new → RunPython → drop-old);
  additive where possible. `makemigrations --check` to confirm no drift.
- Verify: `manage.py check`, `manage.py migrate`, shell smoke (create Service with
  InterventionType + attachment; create Contract with RecurringCost line; check
  stats/alerts). Frontend: `npx ng build`.
- Commits authored as **shimi** (no Claude co-author trailer).

## Out of scope

- Manufacturer logo, VehicleModel power/range/emission-with-units, converting
  `VehicleDocument.doc_type` → `DocumentType` FK, making `license_category` configurable
  (all previously deferred).
- Multi-currency conversion logic (currency is stored, not converted).
