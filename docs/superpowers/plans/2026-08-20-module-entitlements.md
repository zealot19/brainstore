# Module Entitlements (Tranche 1) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every module optional per company: the company's package decides which modules are enabled; disabled modules disappear from the menu and return 403 from the API.

**Architecture:** Boolean module flags on `Package`; `enabled_modules(company)` derives the set; `GET /auth/me/permissions/` also returns `modules`; the frontend gates the sidebar by module; a Django `EntitlementMiddleware` (after `TenantMiddleware`, which already decodes the JWT → company) enforces it server-side by URL prefix.

**Tech Stack:** Django 5.1 + DRF, pytest (`config.settings.local`), Angular 17.

**Spec:** `docs/superpowers/specs/2026-08-20-module-entitlements-design.md`

## Global Constraints
- Git root `ERP-master/`; `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master ...`; commit as shimi, no Claude trailer.
- Tests: `cd backend && source ../env/bin/activate && python -m pytest`.
- Module codes: `administration, fleet, voyage, colis, bagages, treasury, accounting, reporting`. All `Package` flags default **True** (existing companies keep everything).
- Super Admin is never gated. `administration` is **UI-gated only** (sidebar); its API (`/system`, `/users`, `/rbac`) is never hard-blocked to avoid lockout. Middleware hard-gates: fleet, voyage, colis, bagages, treasury, accounting, reporting.
- **Correction to spec §1.5:** enforcement is a **middleware**, not a DRF permission — view-level `permission_classes` overrides would bypass a global DRF permission; a middleware runs for every request.
- Before merge: `git status --short` clean + `python manage.py makemigrations --check`.

## File Structure
- `backend/apps/system_config/models/package.py` — 8 boolean flags (modify).
- `backend/apps/system_config/serializers.py` — Package (read/write) fields (modify).
- `backend/apps/system_config/selectors/entitlements.py` — `enabled_modules`, `ALL_MODULES`, `enabled_modules_for_company_id` (create).
- `backend/apps/authentication/views.py` — `MePermissionsView` returns `modules` (modify).
- `backend/apps/core/module_map.py` — `module_for_path(path)` (create).
- `backend/apps/core/entitlement_middleware.py` — `EntitlementMiddleware` (create).
- `backend/config/settings/base.py` — register middleware (modify).
- Angular: `_api/services/auth/permission.service.ts` (modify), `app/shared/directives/has-module.directive.ts` (create), `core/service/sidebar/sidebar.service.ts` (add `module` per group, modify), `app/layouts/sidebar-one/sidebar-one.component.ts` (filter by module, modify).

---

## Task 1: Package module flags + serializers + migration

**Files:** modify `system_config/models/package.py`, `system_config/serializers.py`; test `system_config/tests/test_entitlements.py`.

**Interfaces:**
- Produces: `Package.has_administration/has_fleet/has_voyages/has_colis/has_bagages/has_treasury/has_accounting/has_reporting` (BooleanField, default True), exposed by `PackageSerializer` & `PackageWriteSerializer`.

- [ ] **Step 1: Write the failing test**

`backend/apps/system_config/tests/test_entitlements.py`:
```python
import pytest


@pytest.mark.django_db
def test_package_has_module_flags_default_true():
    from apps.system_config.models import Package
    p = Package.objects.create(name="Full", tier="pro")
    for attr in ["has_administration", "has_fleet", "has_voyages", "has_colis",
                 "has_bagages", "has_treasury", "has_accounting", "has_reporting"]:
        assert getattr(p, attr) is True
```
> Check `Package.tier` choices first (`grep -n "class Tier" backend/apps/system_config/models/package.py`) and use a valid value.

- [ ] **Step 2: Run — fail** — `cd backend && python -m pytest apps/system_config/tests/test_entitlements.py -q` → AttributeError.

- [ ] **Step 3: Add the flags** — in `package.py`, after `has_sso`:
```python
    has_administration = models.BooleanField(_("module Administration"), default=True)
    has_fleet          = models.BooleanField(_("module Flotte"), default=True)
    has_voyages        = models.BooleanField(_("module Voyages"), default=True)
    has_colis          = models.BooleanField(_("module Colis"), default=True)
    has_bagages        = models.BooleanField(_("module Bagages"), default=True)
    has_treasury       = models.BooleanField(_("module Trésorerie"), default=True)
    has_accounting     = models.BooleanField(_("module Comptabilité"), default=True)
    has_reporting      = models.BooleanField(_("module Reporting"), default=True)
```

- [ ] **Step 4: Serializer fields** — in `system_config/serializers.py`, add the 8 names to the `fields` list of **both** `PackageSerializer` (read) and `PackageWriteSerializer` (write). Add after `"has_sso"` in each list:
```python
            "has_administration", "has_fleet", "has_voyages", "has_colis",
            "has_bagages", "has_treasury", "has_accounting", "has_reporting",
```

- [ ] **Step 5: Migration + run** — `python manage.py makemigrations system_config && python -m pytest apps/system_config/tests/test_entitlements.py -q` → PASS.

- [ ] **Step 6: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/system_config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(packages): flags de module par package (8 modules, defaut active)"
```

---

## Task 2: `enabled_modules` selector + expose in `me/permissions`

**Files:** create `system_config/selectors/entitlements.py`; modify `system_config/selectors/__init__.py` (export), `authentication/views.py`; test append to `test_entitlements.py`.

**Interfaces:**
- Consumes: Package flags (Task 1).
- Produces: `ALL_MODULES: set[str]`; `enabled_modules(company) -> set[str]`; `enabled_modules_for_company_id(company_id) -> set[str]`; `MePermissionsView` response gains `"modules": [...]`.

- [ ] **Step 1: Write the failing test** — append:
```python
@pytest.mark.django_db
def test_enabled_modules_reflects_package():
    from apps.system_config.models import Package, Company
    from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
    # no package -> everything
    c0 = Company.objects.create(name="NoPkg")
    assert enabled_modules(c0) == ALL_MODULES
    # package with voyages off -> 'voyage' excluded
    pkg = Package.objects.create(name="ColisOnly", tier="basic", has_voyages=False)
    c1 = Company.objects.create(name="ColisCo", package=pkg)
    mods = enabled_modules(c1)
    assert "voyage" not in mods and "colis" in mods
```
> Check `Company` required fields (`grep -n "models\." backend/apps/system_config/models/company.py | head`); pass any non-null ones (e.g. code/slug are auto or blank — adjust the `Company.objects.create(...)` kwargs so it saves).

- [ ] **Step 2: Run — fail** (ImportError).

- [ ] **Step 3: Create the selector** `backend/apps/system_config/selectors/entitlements.py`:
```python
_MODULE_FLAGS = {
    "administration": "has_administration", "fleet": "has_fleet", "voyage": "has_voyages",
    "colis": "has_colis", "bagages": "has_bagages", "treasury": "has_treasury",
    "accounting": "has_accounting", "reporting": "has_reporting",
}
ALL_MODULES = set(_MODULE_FLAGS)


def enabled_modules(company) -> set:
    pkg = getattr(company, "package", None)
    if pkg is None:
        return set(ALL_MODULES)
    return {code for code, attr in _MODULE_FLAGS.items() if getattr(pkg, attr, True)}


def enabled_modules_for_company_id(company_id) -> set:
    from apps.system_config.models import Company
    company = Company.objects.select_related("package").filter(id=company_id, is_deleted=False).first()
    return enabled_modules(company) if company else set(ALL_MODULES)
```
Export in `system_config/selectors/__init__.py`: `from .entitlements import enabled_modules, ALL_MODULES, enabled_modules_for_company_id  # noqa`.

- [ ] **Step 4: Expose in MePermissions** — in `authentication/views.py` `MePermissionsView.get`, before the `return`:
```python
        from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
        modules = sorted(ALL_MODULES) if (request.user.is_superuser or not company) else sorted(enabled_modules(company))
```
and add `"modules": modules,` to the `success_response({...})` dict.

- [ ] **Step 5: API test** — append:
```python
@pytest.mark.django_db
def test_me_permissions_returns_modules():
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.views import MePermissionsView
    from apps.system_config.models import Package
    pkg = Package.objects.create(name="ColisOnly2", tier="basic", has_voyages=False)
    company, _ = create_company(name="MC", admin_email="mc@x.com", admin_first_name="A", admin_last_name="B")
    company.package = pkg; company.save(update_fields=["package"])
    admin = User.objects.get(email="mc@x.com")
    req = APIRequestFactory().get("/x"); force_authenticate(req, user=admin)
    resp = MePermissionsView.as_view()(req)
    assert "modules" in resp.data["data"]
    # admin d'institution : entitlement NON contourné -> voyage absent
    assert "voyage" not in resp.data["data"]["modules"] and "colis" in resp.data["data"]["modules"]
```
> `create_company` seeds an institution admin; institution admins are NOT super users, so entitlement applies. Confirm `resp.data` shape (`success_response` → `{"success":true,"data":{...}}`).

- [ ] **Step 6: Run — pass** — `python -m pytest apps/system_config/tests/test_entitlements.py -q`.

- [ ] **Step 7: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/system_config backend/apps/authentication/views.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(entitlements): enabled_modules + modules dans me/permissions"
```

---

## Task 3: Backend enforcement — module_map + EntitlementMiddleware

**Files:** create `core/module_map.py`, `core/entitlement_middleware.py`; modify `config/settings/base.py`; test `apps/core/tests/test_entitlement_gate.py`.

**Interfaces:**
- Consumes: `enabled_modules_for_company_id` (Task 2), `get_current_tenant` (`apps.core.middleware`).
- Produces: `module_for_path(path) -> str|None`; `EntitlementMiddleware` returning **403** JSON when the tenant's company lacks the path's module.

- [ ] **Step 1: Write the failing test**

`backend/apps/core/tests/test_entitlement_gate.py`:
```python
import pytest
from apps.core.module_map import module_for_path


def test_module_for_path():
    assert module_for_path("/api/v1/voyages/trips/") == "voyage"
    assert module_for_path("/api/v1/voyages/consignment/parcels/") == "colis"
    assert module_for_path("/api/v1/voyages/consignment/baggage/") == "bagages"
    assert module_for_path("/api/v1/treasury/sessions/") == "treasury"
    assert module_for_path("/api/v1/reporting/catalog/") == "reporting"
    assert module_for_path("/api/v1/system/agencies/") is None   # core, never gated
    assert module_for_path("/static/x") is None


@pytest.mark.django_db
def test_middleware_blocks_disabled_module():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.models import Package
    pkg = Package.objects.create(name="ColisOnly3", tier="basic", has_voyages=False)
    company, _ = create_company(name="GC", admin_email="gc@x.com", admin_first_name="A", admin_last_name="B")
    company.package = pkg; company.save(update_fields=["package"])
    admin = User.objects.get(email="gc@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    assert c.get("/api/v1/voyages/trips/").status_code == 403          # voyage disabled
    assert c.get("/api/v1/voyages/consignment/parcels/").status_code != 403  # colis enabled
```

- [ ] **Step 2: Run — fail** (ImportError / no 403).

- [ ] **Step 3: module_map** `backend/apps/core/module_map.py`:
```python
_PREFIX_MODULE = [
    ("voyages/consignment/parcels", "colis"),
    ("voyages/consignment/baggage", "bagages"),
    ("voyages/consignment", "colis"),
    ("voyages/config", "voyage"), ("voyages/trips", "voyage"),
    ("voyages/pricing", "voyage"), ("voyages/booking", "voyage"),
    ("voyage/", "voyage"), ("transport/", "voyage"),
    ("fleet/", "fleet"), ("treasury/", "treasury"),
    ("accounting/", "accounting"), ("reporting/", "reporting"),
]
_MARK = "/api/v1/"


def module_for_path(path: str):
    i = path.find(_MARK)
    if i == -1:
        return None
    rest = path[i + len(_MARK):]
    for prefix, mod in _PREFIX_MODULE:
        if rest.startswith(prefix):
            return mod
    return None
```

- [ ] **Step 4: middleware** `backend/apps/core/entitlement_middleware.py`:
```python
from django.http import JsonResponse
from apps.core.module_map import module_for_path
from apps.core.middleware import get_current_tenant


class EntitlementMiddleware:
    """Bloque (403) l'accès aux modules non inclus dans le package de la société.
    S'exécute APRÈS TenantMiddleware (qui a décodé le JWT → company_id)."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        module = module_for_path(request.path)
        if module:
            tenant = get_current_tenant()
            company_id = tenant["company_id"] if tenant else None
            if company_id:  # super admin (pas de company) et anonymes -> laisser passer
                from apps.system_config.selectors.entitlements import enabled_modules_for_company_id
                if module not in enabled_modules_for_company_id(company_id):
                    return JsonResponse(
                        {"success": False, "error": {"message": "Module non inclus dans votre offre."}},
                        status=403)
        return self.get_response(request)
```

- [ ] **Step 5: Register** — in `config/settings/base.py` `MIDDLEWARE`, add **immediately after** `"apps.core.middleware.TenantMiddleware"`:
```python
    "apps.core.entitlement_middleware.EntitlementMiddleware",
```

- [ ] **Step 6: Run — pass** — `python -m pytest apps/core/tests/test_entitlement_gate.py -q`.

- [ ] **Step 7: Guard the suite** — run `python -m pytest apps/voyages_trips apps/treasury -q` to confirm the middleware doesn't 403 normal tests (those companies have no package → all modules on). Expected: green.

- [ ] **Step 8: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/core backend/config/settings/base.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(entitlements): EntitlementMiddleware (403 sur module non inclus)"
```

---

## Task 4: Frontend — `PermissionService.hasModule` + `*hasModule` directive

**Files:** modify `_api/services/auth/permission.service.ts`; create `app/shared/directives/has-module.directive.ts`.

**Interfaces:**
- Consumes: `me/permissions` `modules` (Task 2).
- Produces: `PermissionService.hasModule(code): boolean`, `modules$`; directive `*hasModule`.

- [ ] **Step 1: Extend PermissionService** — in `permission.service.ts`:
  - Add to the `PermissionsResponse` interface: `modules: string[];`.
  - Add `private _modules$ = new BehaviorSubject<Set<string>>(this._loadModules());` and `readonly modules$ = this._modules$.asObservable();`.
  - In `load()` `tap`, add: `this._modules$.next(new Set(res.modules ?? [])); localStorage.setItem('drp_modules', JSON.stringify(res.modules ?? []));`.
  - In `clear()`: `this._modules$.next(new Set()); localStorage.removeItem('drp_modules');`.
  - Add method:
```ts
  hasModule(code: string): boolean {
    return this._superuser$.getValue() || this._modules$.getValue().has(code);
  }
```
  - Add `private _loadModules(): Set<string> { try { const r = localStorage.getItem('drp_modules'); return r ? new Set(JSON.parse(r) as string[]) : new Set(); } catch { return new Set(); } }`.

- [ ] **Step 2: Directive** `app/shared/directives/has-module.directive.ts` (mirror `HasPermissionDirective`):
```ts
import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PermissionService } from '../../../_api/services/auth/permission.service';

@Directive({ selector: '[hasModule]', standalone: true })
export class HasModuleDirective implements OnDestroy {
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vcr = inject(ViewContainerRef);
  private readonly perm = inject(PermissionService);
  private code = ''; private rendered = false; private sub?: Subscription;

  @Input() set hasModule(value: string) {
    this.code = value ?? '';
    if (!this.sub) this.sub = this.perm.modules$.subscribe(() => this.update());
    this.update();
  }
  private update(): void {
    const allow = this.perm.hasModule(this.code);
    if (allow && !this.rendered) { this.vcr.createEmbeddedView(this.tpl); this.rendered = true; }
    else if (!allow && this.rendered) { this.vcr.clear(); this.rendered = false; }
  }
  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
```

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(entitlements-fe): PermissionService.hasModule + directive *hasModule"
```

---

## Task 5: Frontend — sidebar gating by module

**Files:** modify `core/service/sidebar/sidebar.service.ts`, `app/layouts/sidebar-one/sidebar-one.component.ts`.

**Interfaces:** Consumes `PermissionService.hasModule` (Task 4).

- [ ] **Step 1: Tag each sidebar group with its module** — in `sidebar.service.ts` `sidebarData1`, add a `module` key to each section object:
  - Voyages → `module: 'voyage'`, Flotte → `'fleet'`, Trésorerie → `'treasury'`, Comptabilité → `'accounting'`, Administration → `'administration'`, Reporting → `'reporting'`.
  - For the **Config Voyages** group (if present) → `'voyage'`. The Colis/Bagages menu entries (under their group) keep working via §Step 2 group-level gate; fine to gate the whole group by `'voyage'` for now (Tranche 2 refines Colis standalone visibility).

- [ ] **Step 2: Filter groups by module** — in `sidebar-one.component.ts`, where the sidebar data is filtered by permission (the `.map/.filter` block that calls `allowed(...)`), add a section-level filter: keep a section only if it has no `module` **or** `this.perm.hasModule(section.module)`. Inject `PermissionService` if not already, e.g.:
```ts
    .filter((section: any) => !section.module || this.perm.hasModule(section.module))
```
  Apply this filter to the top-level sections array (before/after the existing permission filter). Ensure `perm` is available (`private perm = inject(PermissionService)` or constructor injection matching the file's style).

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(entitlements-fe): masquer les modules non inclus dans le menu"
```

---

## Task 6: Verify + finish

- [ ] **Step 1:** `cd backend && python -m pytest -q` → all green (existing companies have no package → all modules on, so nothing regresses).
- [ ] **Step 2:** `git -C <repo> status --short` clean + `python manage.py makemigrations --check` clean.
- [ ] **Step 3:** superpowers:finishing-a-development-branch → merge to `master`, `git push all master`.

> After merge: a company can be sold "colis only" by putting it on a package with `has_voyages=False` (Super Admin → Companies → change package, or edit the package). Voyages/Flotte vanish from its menu and its `/voyages/*` API returns 403. Tranche 2 then makes the colis flow work end-to-end without a trip.
