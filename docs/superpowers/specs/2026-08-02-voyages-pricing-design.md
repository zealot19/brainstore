# Voyages Pricing — Design Spec

**Date:** 2026-08-02
**Sub-project:** Pricing (sub-project 3 of the Voyages module)
**Branch:** `feature/voyages-pricing` (stacked on `feature/voyages-gestion` → `feature/voyages-config`, all PRs under review — not yet on `origin/master`)
**Source analysis:** "Passenger Transport Suite — Design Guide" (§8.3 pricing) + the user's segment-tariff requirement.

## Goal

Build **fare pricing** for the Voyages module: per-route, per-segment, per-fare-class
tariffs, with a resolution service that Booking will consume. A focused `Fare` model
(not the generic rule engine), matching the user's "full-trip tariff + per-escale segment
prices" UX. New `voyages_pricing` Django app + a « Tarifs » Angular screen.

## Guiding constraints (from the user)

1. **Do not modify or abandon** `treasury`, `tiers`, or legacy `voyage`/`transport_config`/
   `ticketing`/`parcel`. Greenfield alongside them.
2. No treasury/tiers imports. Pricing depends only on `voyages_config` + `core`.
3. Commit as **shimi** (no Claude trailer).
4. French-first UI, `info-banner`, Tabler `ti` icons, spaced `btn btn-sm` action buttons.
5. Company-scoped with the global-default pattern (nullable `company`), like the rest.
6. Verify: `manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke; `npx ng build`.

## Decision (from brainstorming)

**Approach A — a focused segment `Fare` model**, not the analysis's generic `PricingRule`
engine. Rationale: it's exactly the user's described behaviour; the engine's extra power
(commissions, route-cost rules) depends on partners/tiers and treasury which are off-limits;
YAGNI. Can generalise later if commissions/route-costs land.

## Architecture

New app **`apps/voyages_pricing`** (label `voyages_pricing`). Class-based `APIView`,
`IsInstitutionAdmin`, selectors/services packages, `_CompanyScoped(BaseModel)` reused
pattern (nullable `company`). Import direction: `voyages_pricing` → `voyages_config`,
`core`. Nothing imports it back (Booking will later, via `selectors.resolve_fare`).

## Component 1 — Fare model

**`Fare`** (`voyages_pricing.models.fare`), subclasses a local `_CompanyScoped` (copy of the
voyages_config base: nullable `company` FK):
- `route` FK → `voyages_config.Route` (CASCADE, related_name `fares`)
- `origin_point` FK → `voyages_config.ServicePoint` (PROTECT, related_name `fares_from`)
- `destination_point` FK → `voyages_config.ServicePoint` (PROTECT, related_name `fares_to`)
- `fare_class` FK → `voyages_config.FareClass` (PROTECT, related_name `fares`)
- `amount` DecimalField(max_digits=12, decimal_places=2)
- `currency` CharField(max_length=3, default "XAF")
- `valid_from` / `valid_to` (DateField, null)
- (`is_active`, `company` from base)
- `Meta`: `unique_together (company, route, origin_point, destination_point, fare_class)`,
  `ordering = ["route", "origin_point", "destination_point"]`, `verbose_name = "tarif"`.

**Segment semantics:** the complete trip = the row with `origin_point = route.origin` and
`destination_point = route.destination`. Escale segments are rows with intermediate points.
Rows are **sparse** — only the segments the operator sells exist.

**Validation** (service layer + `clean()`): both `origin_point` and `destination_point` must
be in the route's ordered path (`route.origin`, its `RouteStop.service_point`s by sequence,
`route.destination`), and `origin_point` must precede `destination_point` in that order.

## Component 2 — Resolution & helpers

`voyages_pricing.selectors`:
- `route_points(route) -> list[ServicePoint]` — ordered `[origin, *escales_by_sequence,
  destination]`, de-duplicated (endpoints may also appear as stops). Used by the editor and
  by validation (`point_index(route, sp)`).
- `resolve_fare(company, route, origin_point, destination_point, fare_class, on_date=None) -> Fare | None`
  — filters route+origin_point+destination_point+fare_class, `is_active`, not deleted;
  scope `Q(company=company) | Q(company__isnull=True)`; validity `valid_from <= on_date (or
  null)` and `valid_to >= on_date (or null)`; orders company rows before global then by
  `-valid_from`; returns first or None. `on_date` defaults to today.
- `list_fares(company, route_id=None)` — scoped list, optional route filter.

`voyages_pricing.services`:
- `create_fare(*, company, route, origin_point, destination_point, fare_class, amount,
  currency="XAF", valid_from=None, valid_to=None, user)` — validates points-on-route +
  order + per-scope uniqueness (`ensure_unique`-style), creates.
- `update_fare(fare, *, user, **fields)` — allowed set {amount, currency, valid_from,
  valid_to, origin_point, destination_point, fare_class, is_active}; re-validates points.
- `delete_fare(fare, *, user)` — soft delete.
- `VehicleNotEligible`-style domain errors via `ApplicationError`.

## API

Under `/api/v1/voyages/pricing/`, `IsInstitutionAdmin`, company-scoped-with-global:
- `fares/` (GET list — `?route_id=` filter; POST create), `fares/bulk-delete/` (POST `{ids}`),
  `fares/<id>/` (GET/PATCH/DELETE).
- `routes/<uuid:route_id>/points/` (GET → ordered `[{id, name, code, is_station, kind}]`).
- Serializers: `FareRead` (id, route, route_code, origin_point, origin_point_name,
  destination_point, destination_point_name, fare_class, fare_class_name, amount, currency,
  valid_from, valid_to, company, scope, is_active, timestamps), `FareWrite` (route_id,
  origin_point_id, destination_point_id, fare_class_id, amount, currency, valid_from,
  valid_to, is_active).
- Registered `path("voyages/pricing/", include("apps.voyages_pricing.urls"))`.

## Frontend — « Tarifs »

Standalone Angular, French-first, `info-banner`, Tabler icons, spaced action buttons.
Added to the « Config Voyages » sidebar group as **« Tarifs »**; page under
`pages/voyages-pricing/fares/`.
- Route selector (dropdown from `RouteService`) → loads the route's ordered points and its
  fares (`?route_id=`).
- **Fares table**: De → À, catégorie tarifaire, montant + devise, validité, périmètre;
  edit/delete + bulk-delete; globals read-only.
- **"+ Ajouter un tarif"** modal: `from_point` / `to_point` (dropdowns of the route's
  ordered points), `fare_class`, `amount`, `currency`, optional `valid_from`/`valid_to`.
  Complete trip = origin→destination; adding an intermediate pair = an escale segment.
- Info-banner explaining segment pricing feeds Booking later.
- New `models/voyages-pricing.models.ts`, `services/voyages-pricing/fare.service.ts`,
  `api.config` `VOYAGES_PRICING` block, route constant, sidebar entry.

## Out of scope (later)

- Generic `PricingRule` engine, `CommissionRule`, `RouteCostRule` (need partners/tiers +
  treasury).
- Booking consumption of `resolve_fare` (Booking sub-project).
- Consignment tariffs (Consignments sub-project).

## Verification

`manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke (create route
with escales → create full-trip + segment fares → `resolve_fare` returns the right row →
reject an out-of-order/off-route pair), `npx ng build`. Commits as shimi.
