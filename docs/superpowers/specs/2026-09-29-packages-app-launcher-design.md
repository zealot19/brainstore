# Packages → Modules app launcher — Design

**Date:** 2026-09-29
**Status:** Approved design, pending spec review
**Author:** shimi (with Claude)

## 1. Goal

Introduce an Odoo-style **Package** layer above the existing modules, and a
post-login **app launcher**. After login the user sees the **Packages** they can
access; picking one enters that package's app shell, where the sidebar shows only
that package's **modules / menus**. Companies are provisioned with a chosen set of
packages at creation; **Administration is always included**.

Three-level hierarchy:

```
Package (app / business domain)   →  Module               →  Menus
Administration (always on)        →  admin, users, RBAC, system config, partners, config-docs, super-admin
Transport                         →  fleet, treasury, voyage, colis, bagages, reporting
Accounting                        →  accounting
Human Resources (future)          →  hr…
Payroll (future)                  →  payroll…
```

## 2. Current state (what exists today)

- **`system_config.Package`** is a **shared commercial tier catalog** ("Offre
  commerciale" — Starter / Professional / Enterprise) with pricing
  (`price_monthly/yearly`), limits (`max_users`, `max_agencies`, `max_storage_gb`),
  commercial flags (`has_api_access`, `has_multi_agency`, `has_advanced_reports`,
  `has_sso`) **and per-module flags** (`has_administration`, `has_fleet`,
  `has_voyages`, `has_colis`, `has_bagages`, `has_treasury`, `has_accounting`,
  `has_reporting`). A `Company` points to one via `company.package` (FK).
  Because these module flags live on the shared tier, module access is effectively
  **per-tier, not per-company**.
- **`system_config.Subscription`** — trial/billing record linking a company to its
  package (created by `create_company` → `_create_trial_subscription`).
- **`enabled_modules(company)`** (`system_config/selectors/entitlements.py`) derives
  the active module set from the package's `has_*` flags. `_MODULE_FLAGS` maps module
  code → flag. No package → all modules (back-compat).
- **`EntitlementMiddleware`** + **`core/module_map.py`** 403 any URL whose module is
  not in the company's `enabled_modules`. Module codes: `administration`, `fleet`,
  `voyage`, `colis`, `bagages`, `treasury`, `accounting`, `reporting`.
- **Frontend** `sidebarData1` (`core/service/sidebar/sidebar.service.ts`) groups menus
  by top-level `module`: `administration`, `treasury`, `fleet`, `voyage`, `colis`,
  `accounting`, `reporting`. The app shell is `PagesComponent`
  (`features/pages/pages.component.ts`), path `''`, guarded by `authGuard`.
- **Super-admin** has a "Packages" + "Subscriptions" management UI
  (`superadminPackages`, `superadminSubscriptions`).

## 3. Concepts & terminology (after this change)

- **Plan** — the renamed `Package` model. The commercial subscription tier
  (pricing, limits, commercial feature flags). Shared catalog. **Loses** the
  per-module `has_*` flags.
- **Package** — a **code-defined app-group** (Administration, Transport, Accounting,
  HR, Payroll). Not a DB table; a static registry mapping a package → a set of module
  codes.
- **Module** — unchanged (`fleet`, `voyage`, …). Still the unit the middleware gates.
- **Menu** — unchanged sidebar entries, already tagged with a `module`.

## 4. Data model changes

### 4.1 Rename `Package` → `Plan`
- Rename model `system_config.Package` → `system_config.Plan` (and its table). Keep:
  `name`, `tier`, `description`, limits, pricing, and commercial flags
  (`has_api_access`, `has_multi_agency`, `has_advanced_reports`, `has_sso`).
- **Remove** the per-module flags (`has_administration`, `has_fleet`, `has_voyages`,
  `has_colis`, `has_bagages`, `has_treasury`, `has_accounting`, `has_reporting`) —
  they move to package grants (§4.3). Preserve their information during migration
  (§7).
- Update all references: `Company.package` FK (`related_name`, field kept as
  `package` or renamed to `plan` — **rename to `plan`** for clarity), `Subscription`
  FK, `company_services` (`create_package`→`create_plan`, `change_package`→`change_plan`,
  etc.), serializers, `PackageListView`/`PackageAdminView` → `Plan…`, admin,
  superadmin frontend menu label "Packages" → "Plans".

### 4.2 Package registry (code-defined)
New module `apps/core/packages.py`:

```python
PACKAGES = [
    {"code": "administration", "label": "Administration", "icon": "settings",
     "modules": ["administration"], "always_on": True},
    {"code": "transport", "label": "Transport", "icon": "bus",
     "modules": ["fleet", "treasury", "voyage", "colis", "bagages", "reporting"]},
    {"code": "accounting", "label": "Comptabilité", "icon": "calculator",
     "modules": ["accounting"]},
    # future: hr, payroll (declared, not yet enabled)
]
```
Helpers: `package_codes()`, `modules_for_packages(codes) -> set`, `package_for_module(mod)`.

### 4.3 Per-company package grants
Add per-package boolean grant flags on the **Company** (not the shared Plan):
`pkg_transport`, `pkg_accounting` (and future `pkg_hr`, `pkg_payroll`), each
`default=True` for back-compat. `administration` is implicit-always (no flag needed;
`always_on`). Store as booleans (per the chosen "per-package grant flags" model);
adding a package later = one field + migration.

## 5. Entitlement resolution changes

Rewrite `enabled_modules(company)`:
1. Collect the company's granted package codes: `administration` (always) + every
   `pkg_*` flag that is true.
2. Expand to modules via `modules_for_packages(codes)`.
3. Return that set.

`EntitlementMiddleware`, `module_map.py`, and `_MODULE_FLAGS` consumers keep working
unchanged — only the *source* of the module set changes. No-plan / no-grants company
→ all packages granted (back-compat).

## 6. Backend API

- **`GET /api/v1/system/my-packages/`** — returns the packages the current user can
  enter: `granted_to_company ∩ user_has_at_least_one_permission_inside`. Each item:
  `{code, label, icon, modules}`. Institution admins see all granted packages.
  Drives the launcher. Permission check reuses existing RBAC (`has_permission`) over
  the menus' permissions in a package.
- **`create_company`** accepts `packages: list[str]` (codes). Administration forced
  on. Sets the corresponding `pkg_*` flags. Company-creation serializer/view updated.
- **Superadmin plan management** endpoints renamed `Package*`→`Plan*` (behaviour
  unchanged).

## 7. Migration & back-compat

- Data migration: for every existing `Company`, set `pkg_*` grants from the old
  per-tier module flags (if the tier had the module, grant the package that contains
  it — a package is granted iff **any** of its modules was enabled). Default all new
  `pkg_*` to `True` so nothing disappears for existing tenants.
- Rename migration for `Package`→`Plan` (Django `migrations.RenameModel` +
  `RenameField` for `Company.package`→`plan`). Keep it a **separate** migration from
  the flag changes for reviewability.

## 8. Sync considerations

`Package` is a **synced** model (`system_config` not blocklisted). The rename must be
mirrored on all instances via the same migration, and the schema fingerprint changes
(all instances must upgrade together — expected for any migration). The new Company
`pkg_*` fields sync normally (Company is syncable). No blocklist change needed. Verify
`makemigrations --check` is clean and both instances rebuild from the same commit
(same fingerprint) before syncing — consistent with existing deployment rule.

## 9. Frontend

### 9.1 App launcher (`/apps`)
- New standalone route `/apps` (its own lightweight layout, not inside the sidebar
  shell). Guarded by `authGuard`. Calls `GET /system/my-packages/`, renders a card
  grid (icon + label). **Always shown after login** (even for one package).
- Selecting a package: store `activePackage` (a signal in a new
  `PackageService` + `localStorage`), navigate into the shell (`/…` first module of
  the package, or a package landing route).

### 9.2 Shell filtering
- `PagesComponent` sidebar filters `sidebarData1` to the groups whose `module`
  belongs to `activePackage.modules`. Administration package → the `administration`
  group.
- Add an **app-switcher** control (top-left, Odoo-style) that returns to `/apps`.
- If no `activePackage` is set when entering the shell → redirect to `/apps`.

### 9.3 Login redirect
- Change the post-login success redirect (in `signin.component.ts` / auth flow) from
  the current default landing to **`/apps`**.

## 10. Company creation UI

- Add a **Packages** selector to the create-company form: `Administration` shown
  checked + disabled; `Transport`, `Comptabilité` as checkboxes (future packages
  appear as they ship). Submit the selected codes to `create_company`.

## 11. RBAC / permissions

- Package access is gated by **both** entitlement (company grant) **and** RBAC (the
  user must hold ≥1 permission among the package's menus). A user with no permission
  in a granted package does not see that package card and cannot deep-link into it
  (existing per-menu `permission` + `HasModulePermission` already enforce the menu
  level; the launcher filter is a UX layer over the same rules).

## 12. Phasing

- **Phase 1** (this spec): rename Package→Plan; package registry + company grants for
  **Administration + Transport + Accounting**; rewire `enabled_modules`;
  `my-packages` endpoint; launcher + sidebar filter + app-switcher; login redirect;
  company-creation package picker; migrations + back-compat.
- **Phase 2** (future): add `hr` and `payroll` packages as those apps are built
  (one registry entry + one `pkg_*` flag + migration each).

## 13. Testing

- **Backend (pytest):**
  - `enabled_modules`: administration always present; granting Transport enables its
    6 modules; ungranted package's modules 403 via middleware; no-grants company →
    all (back-compat).
  - `my-packages`: returns only granted ∩ permitted packages; institution admin sees
    all granted; a user with no Transport permission doesn't get the Transport card.
  - `create_company(packages=[...])`: sets the right `pkg_*` flags; Administration
    forced on even if omitted.
  - Migration: existing company keeps its modules after the flag→grant back-fill.
- **Frontend:** launcher renders granted packages; selecting sets `activePackage` and
  filters the sidebar; entering the shell with no `activePackage` redirects to
  `/apps`; app-switcher returns to `/apps`.
- **Baseline:** the 14 known-red master tests remain the baseline; no new reds.

## 14. Non-goals / decisions

- Packages are **code-defined**, not admin-managed data (YAGNI while the catalog is
  tiny; Phase-2 packages are a one-line registry addition).
- The `Plan` (commercial tier) no longer gates modules — module access is purely
  package-grant-driven per company. Tiers remain for pricing/limits only.
- No change to the module-level middleware or `module_map.py`.
- HR / Payroll UIs are out of scope here (packages declared but disabled).
