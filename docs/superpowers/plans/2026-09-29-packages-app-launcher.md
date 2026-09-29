# Packages → Modules App Launcher Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an Odoo-style Package layer above modules with a post-login app launcher (login → pick a Package → see that package's modules/menus), provisioned per-company at creation, with Administration always on.

**Architecture:** Rename the commercial `Package` model → `Plan` (pricing/limits only). Packages become a code-defined app-group registry mapping package → module codes. Per-company boolean grant flags (`pkg_*`) on `Company` drive `enabled_modules` via the registry; the existing module-level `EntitlementMiddleware`/`module_map.py` are untouched. Frontend gains an `/apps` launcher, an `activePackage` signal that filters the sidebar, and a package picker in company creation.

**Tech Stack:** Django + DRF, pytest (run `../env/bin/python -m pytest` from `backend/`); Angular standalone components, Transloco i18n.

**Spec:** `docs/superpowers/specs/2026-09-29-packages-app-launcher-design.md`

## Global Constraints

- Backend tests run from `backend/` with `../env/bin/python -m pytest` (test-DB migration makes each run ~2–4 min).
- Commit as shimi; **no** Claude co-author trailer.
- French UI copy (labels, messages) — codebase is French throughout.
- Paginated list responses keep the `{success,data,pagination}` shape; don't change response envelopes.
- Back-compat: existing companies must keep all their current modules (new grant flags default `True`; no-plan/no-grant company → all packages).
- Package codes: `administration`, `transport`, `accounting` (Phase 1). Module codes (unchanged): `administration`, `fleet`, `voyage`, `colis`, `bagages`, `treasury`, `accounting`, `reporting`.
- Transport package modules = `{fleet, treasury, voyage, colis, bagages, reporting}`. Accounting package = `{accounting}`. Administration package = `{administration}`, always on.
- Keep the rename migration and the flag-change migration as **separate** migrations.

---

### Task 1: Rename `Package` model → `Plan`

**Files:**
- Modify: `backend/apps/system_config/models/package.py` (class name `Package`→`Plan`; rename file to `plan.py`)
- Modify: `backend/apps/system_config/models/__init__.py` (export `Plan`)
- Modify: `backend/apps/system_config/models/company.py:72` (`Company.package` FK → field `plan`, target `"system_config.Plan"`) and `:110` (`Subscription.package` FK → `plan`)
- Modify: `backend/apps/system_config/serializers.py`, `backend/apps/system_config/views.py`, `backend/apps/system_config/admin.py`, `backend/apps/system_config/services/company_services.py`, `backend/apps/system_config/selectors/entitlements.py` (all `Package` references → `Plan`; `package`→`plan` where it's the model/FK)
- Create: `backend/apps/system_config/migrations/00XX_rename_package_to_plan.py`

**Interfaces:**
- Produces: `system_config.models.Plan`; `Company.plan` (FK), `Subscription.plan` (FK). All later tasks import `Plan` and read `company.plan`.

- [ ] **Step 1: Rename the model and file**

Rename `package.py` → `plan.py`; change `class Package(BaseModel)` → `class Plan(BaseModel)`. Keep all current fields for now (module `has_*` flags are removed in Task 2). Update the docstring to "Offre commerciale (plan tarifaire) souscriptible par une institution."

- [ ] **Step 2: Update model references**

In `models/__init__.py` export `Plan`. In `company.py` rename both FKs to `plan` targeting `"system_config.Plan"` (keep `related_name` values; update the `verbose_name` to `_("plan")`). Grep-replace `Package` → `Plan` and the model/FK usages `package`→`plan` in `serializers.py`, `views.py` (`PackageListView`→`PlanListView`, `PackageAdminView`→`PlanAdminView`, etc.), `admin.py`, `company_services.py` (`create_package`→`create_plan`, `change_package`→`change_plan`, param `package`/`package_id`→`plan`/`plan_id`), `entitlements.py` (`getattr(company, "package")`→`"plan"`).

```bash
cd backend
grep -rln "\bPackage\b" apps/system_config --include="*.py" | grep -v migrations
```
Fix each hit. Also update URL route names in `apps/system_config/urls.py` if they reference the view class names.

- [ ] **Step 3: Generate the rename migration**

```bash
cd backend
../env/bin/python manage.py makemigrations system_config --name rename_package_to_plan
```
Verify the generated migration uses `migrations.RenameModel(old_name="Package", new_name="Plan")` and `migrations.RenameField` for `Company.package`→`plan` and `Subscription.package`→`plan`. If Django emits deletes/creates instead of renames, hand-edit to `RenameModel`/`RenameField`.

- [ ] **Step 4: Update the superadmin frontend label (backend-side route names only)**

Leave Angular for Task 10. Here only ensure backend URL `name=` values and DRF are consistent.

- [ ] **Step 5: Verify migrations + existing tests**

```bash
cd backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python -m pytest apps/system_config -q
```
Expected: no missing migrations; system_config tests pass (or match the known baseline). Also run `../env/bin/python manage.py check`.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config
git commit -m "refactor(system_config): rename Package model -> Plan (commercial tier)"
```

---

### Task 2: Move module gating from Plan flags → per-company package grants

**Files:**
- Modify: `backend/apps/system_config/models/plan.py` (remove per-module `has_*` flags)
- Modify: `backend/apps/system_config/models/company.py` (add `pkg_transport`, `pkg_accounting` booleans)
- Create: `backend/apps/system_config/migrations/00XX_company_package_grants.py` (schema + data back-fill)
- Test: `backend/apps/system_config/tests/test_package_grants.py`

**Interfaces:**
- Produces: `Company.pkg_transport: bool`, `Company.pkg_accounting: bool` (default `True`). Administration has **no** flag (always on). Task 4 reads these.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/system_config/tests/test_package_grants.py
import pytest
from apps.system_config.models import Company

pytestmark = pytest.mark.django_db

def test_new_company_grants_default_true():
    c = Company.objects.create(name="G", slug="g")
    assert c.pkg_transport is True
    assert c.pkg_accounting is True
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_package_grants.py -q
```
Expected: FAIL (`AttributeError`/unknown field `pkg_transport`).

- [ ] **Step 3: Add grant fields; remove module flags from Plan**

In `company.py`, add under a "Packages accordés" section:
```python
pkg_transport  = models.BooleanField(_("package Transport"), default=True)
pkg_accounting = models.BooleanField(_("package Comptabilité"), default=True)
```
In `plan.py`, delete the eight per-module flags (`has_administration`, `has_fleet`, `has_voyages`, `has_colis`, `has_bagages`, `has_treasury`, `has_accounting`, `has_reporting`). Keep commercial flags (`has_api_access`, `has_multi_agency`, `has_advanced_reports`, `has_sso`) and limits/pricing.

- [ ] **Step 4: Generate schema + data migration with back-fill**

```bash
cd backend
../env/bin/python manage.py makemigrations system_config --name company_package_grants
```
Then add a `migrations.RunPython` to the same migration that back-fills grants from the (about-to-be-removed) Plan flags **before** the `RemoveField` operations run. Order operations: `AddField` grants → `RunPython` back-fill → `RemoveField` plan flags.

```python
def backfill(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    for c in Company.objects.select_related("plan").all():
        p = c.plan
        if p is None:
            continue  # no plan -> keep defaults (all granted)
        # a package is granted iff any of its modules was enabled on the old plan
        c.pkg_transport = any([p.has_fleet, p.has_treasury, p.has_voyages,
                               p.has_colis, p.has_bagages, p.has_reporting])
        c.pkg_accounting = bool(p.has_accounting)
        c.save(update_fields=["pkg_transport", "pkg_accounting"])

def noop(apps, schema_editor):
    pass
```
Reference it: `migrations.RunPython(backfill, noop)` placed between the `AddField`s and the `RemoveField`s.

- [ ] **Step 5: Run the test to verify it passes**

```bash
cd backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python -m pytest apps/system_config/tests/test_package_grants.py -q
```
Expected: PASS; no missing migrations.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config
git commit -m "feat(system_config): per-company package grants; drop module flags from Plan"
```

---

### Task 3: Package registry (code-defined)

**Files:**
- Create: `backend/apps/core/packages.py`
- Test: `backend/apps/core/tests/test_packages.py`

**Interfaces:**
- Produces:
  - `PACKAGES: list[dict]` — each `{code, label, icon, modules: list[str], always_on: bool, grant_field: str|None}`
  - `modules_for_packages(codes: Iterable[str]) -> set[str]`
  - `package_for_module(module_code: str) -> str | None`
  - `all_package_codes() -> list[str]`
  - `grant_field_for(code: str) -> str | None` (e.g. `"pkg_transport"`; `None` for always-on Administration)

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/core/tests/test_packages.py
from apps.core.packages import (modules_for_packages, package_for_module,
                                all_package_codes, grant_field_for)

def test_transport_modules():
    assert modules_for_packages(["transport"]) == {
        "fleet", "treasury", "voyage", "colis", "bagages", "reporting"}

def test_administration_always_on_has_no_grant_field():
    assert grant_field_for("administration") is None
    assert grant_field_for("transport") == "pkg_transport"

def test_package_for_module():
    assert package_for_module("fleet") == "transport"
    assert package_for_module("accounting") == "accounting"
    assert package_for_module("administration") == "administration"

def test_all_codes():
    assert set(all_package_codes()) == {"administration", "transport", "accounting"}
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/core/tests/test_packages.py -q
```
Expected: FAIL (module `apps.core.packages` not found).

- [ ] **Step 3: Implement the registry**

```python
# backend/apps/core/packages.py
"""Registre (défini en code) des Packages = groupes d'applications au-dessus des modules.
Un package regroupe des modules (cf. module_map / entitlements). L'accès effectif
reste géré au niveau module par EntitlementMiddleware ; le package pilote l'octroi
par société (grant) et la navigation (launcher + filtrage du menu)."""

PACKAGES = [
    {"code": "administration", "label": "Administration", "icon": "settings",
     "modules": ["administration"], "always_on": True,  "grant_field": None},
    {"code": "transport", "label": "Transport", "icon": "bus",
     "modules": ["fleet", "treasury", "voyage", "colis", "bagages", "reporting"],
     "always_on": False, "grant_field": "pkg_transport"},
    {"code": "accounting", "label": "Comptabilité", "icon": "calculator",
     "modules": ["accounting"], "always_on": False, "grant_field": "pkg_accounting"},
]

_BY_CODE = {p["code"]: p for p in PACKAGES}


def all_package_codes():
    return [p["code"] for p in PACKAGES]


def modules_for_packages(codes):
    out = set()
    for code in codes:
        p = _BY_CODE.get(code)
        if p:
            out.update(p["modules"])
    return out


def package_for_module(module_code):
    for p in PACKAGES:
        if module_code in p["modules"]:
            return p["code"]
    return None


def grant_field_for(code):
    p = _BY_CODE.get(code)
    return p["grant_field"] if p else None
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/core/tests/test_packages.py -q
```
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/core/packages.py backend/apps/core/tests/test_packages.py
git commit -m "feat(core): code-defined Package registry (package -> modules)"
```

---

### Task 4: Derive `enabled_modules` from package grants

**Files:**
- Modify: `backend/apps/system_config/selectors/entitlements.py`
- Test: `backend/apps/system_config/tests/test_entitlements_packages.py`

**Interfaces:**
- Consumes: `Company.pkg_*` (Task 2), `apps.core.packages.modules_for_packages` + `all_package_codes` (Task 3).
- Produces: `granted_packages(company) -> set[str]`, and an updated `enabled_modules(company) -> set[str]` (union of granted packages' modules; administration always in).

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/system_config/tests/test_entitlements_packages.py
import pytest
from apps.system_config.models import Company
from apps.system_config.selectors.entitlements import enabled_modules, granted_packages

pytestmark = pytest.mark.django_db

def test_administration_always_enabled():
    c = Company.objects.create(name="A", slug="a", pkg_transport=False, pkg_accounting=False)
    assert "administration" in granted_packages(c)
    assert "administration" in enabled_modules(c)
    assert "fleet" not in enabled_modules(c)

def test_transport_grant_enables_its_modules():
    c = Company.objects.create(name="B", slug="b", pkg_transport=True, pkg_accounting=False)
    mods = enabled_modules(c)
    assert {"fleet", "treasury", "voyage", "colis", "bagages", "reporting"} <= mods
    assert "accounting" not in mods

def test_no_company_returns_all():
    from apps.system_config.selectors.entitlements import enabled_modules_for_company_id
    import uuid
    mods = enabled_modules_for_company_id(uuid.uuid4())
    assert "fleet" in mods and "accounting" in mods
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_entitlements_packages.py -q
```
Expected: FAIL (`granted_packages` missing / old flag logic).

- [ ] **Step 3: Rewrite the selector**

```python
# backend/apps/system_config/selectors/entitlements.py
"""Résolution des modules activés pour une société via les packages accordés."""
from apps.core.packages import modules_for_packages, all_package_codes, grant_field_for

ALL_MODULES = modules_for_packages(all_package_codes())


def granted_packages(company) -> set:
    """Codes de packages accordés à la société. Administration toujours inclus.
    Société absente -> tous les packages (rétro-compat)."""
    if company is None:
        return set(all_package_codes())
    granted = set()
    for code in all_package_codes():
        field = grant_field_for(code)
        if field is None:            # always-on (administration)
            granted.add(code)
        elif getattr(company, field, True):
            granted.add(code)
    return granted


def enabled_modules(company) -> set:
    return modules_for_packages(granted_packages(company))


def enabled_modules_for_company_id(company_id) -> set:
    from apps.system_config.models import Company
    company = (Company.objects.filter(id=company_id, is_deleted=False).first())
    return enabled_modules(company)
```
Note: `enabled_modules_for_company_id` no longer needs `select_related("package")`.

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_entitlements_packages.py -q
```
Expected: PASS.

- [ ] **Step 5: Run the entitlement middleware tests (regression)**

```bash
cd backend
../env/bin/python -m pytest apps/system_config apps/core -q
```
Expected: pass / match baseline.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config/selectors/entitlements.py backend/apps/system_config/tests/test_entitlements_packages.py
git commit -m "feat(entitlements): derive enabled modules from company package grants"
```

---

### Task 5: `GET /system/my-packages/` endpoint

**Files:**
- Create: `backend/apps/system_config/selectors/packages.py` (`accessible_packages(user)`)
- Modify: `backend/apps/system_config/views.py` (add `MyPackagesView`)
- Modify: `backend/apps/system_config/urls.py` (route `my-packages/`)
- Test: `backend/apps/system_config/tests/test_my_packages.py`

**Interfaces:**
- Consumes: `granted_packages` (Task 4); `apps.core.packages.PACKAGES`; existing RBAC `has_permission` (`apps/admin_rbac/selectors/user_role_selectors.py`).
- Produces: `accessible_packages(user) -> list[dict]` (`{code,label,icon,modules}`); endpoint `GET /api/v1/system/my-packages/` → `success_response([...])`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/system_config/tests/test_my_packages.py
import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User

pytestmark = pytest.mark.django_db

def _company_admin(email="mp@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="MP Co", admin_email=email,
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)

def test_admin_sees_all_granted_packages():
    company, admin = _company_admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    assert r.status_code == 200
    codes = {p["code"] for p in r.json()["data"]}
    assert {"administration", "transport", "accounting"} <= codes

def test_ungranted_package_absent():
    company, admin = _company_admin("mp2@x.com")
    company.pkg_accounting = False; company.save(update_fields=["pkg_accounting"])
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    codes = {p["code"] for p in r.json()["data"]}
    assert "accounting" not in codes
    assert "transport" in codes
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_my_packages.py -q
```
Expected: FAIL (404 / no route).

- [ ] **Step 3: Implement the selector**

```python
# backend/apps/system_config/selectors/packages.py
"""Packages accessibles à l'utilisateur = accordés à la société ∩ où il a ≥1 permission."""
from apps.core.packages import PACKAGES
from apps.system_config.selectors.entitlements import granted_packages


def _user_can_enter(user, pkg) -> bool:
    # Admin institution/superuser : accès à tous les packages accordés.
    if getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False):
        return True
    # Sinon : au moins une permission RBAC dans un module du package.
    from apps.admin_rbac.selectors.user_role_selectors import user_permission_codes
    codes = user_permission_codes(user)  # set[str] des permissions de l'utilisateur
    prefixes = tuple(m + "." for m in pkg["modules"]) + ("ticketing.", "transport.")
    # Administration : toujours accessible à tout utilisateur authentifié.
    if pkg["code"] == "administration":
        return True
    return any(code.startswith(prefixes) for code in codes)


def accessible_packages(user) -> list:
    company = getattr(user, "company", None)
    granted = granted_packages(company)
    out = []
    for pkg in PACKAGES:
        if pkg["code"] in granted and _user_can_enter(user, pkg):
            out.append({"code": pkg["code"], "label": pkg["label"],
                        "icon": pkg["icon"], "modules": pkg["modules"]})
    return out
```
Before writing, confirm the RBAC helper name/shape:
```bash
grep -rnE "def user_permission_codes|def has_permission|def .*permission" apps/admin_rbac/selectors/user_role_selectors.py
```
If `user_permission_codes` does not exist, use the available helper (e.g. build the set from `has_permission(user, code)` over the package's menu permissions, or the existing codes accessor) — match the real signature.

- [ ] **Step 4: Add the view + route**

```python
# in apps/system_config/views.py
from apps.system_config.selectors.packages import accessible_packages
from apps.core.responses import success_response
from apps.core.permissions import IsAuthenticated
from rest_framework.views import APIView

class MyPackagesView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return success_response(accessible_packages(request.user))
```
```python
# in apps/system_config/urls.py  (match existing path style, prefix is /api/v1/system/)
path("my-packages/", views.MyPackagesView.as_view(), name="my-packages"),
```

- [ ] **Step 5: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_my_packages.py -q
```
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/system_config
git commit -m "feat(system_config): GET /system/my-packages/ (accessible packages for launcher)"
```

---

### Task 6: `create_company(packages=[...])` provisioning

**Files:**
- Modify: `backend/apps/system_config/services/company_services.py` (`create_company` accepts `packages`)
- Modify: `backend/apps/system_config/serializers.py` (company-create serializer accepts `packages`)
- Modify: `backend/apps/system_config/views.py` (pass `packages` through)
- Test: `backend/apps/system_config/tests/test_company_packages.py`

**Interfaces:**
- Consumes: `apps.core.packages.grant_field_for`, `all_package_codes` (Task 3).
- Produces: `create_company(..., packages: list[str] | None)` sets the matching `pkg_*` flags; Administration forced on regardless.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/system_config/tests/test_company_packages.py
import pytest
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db

def test_packages_set_grants():
    company, _ = create_company(name="P Co", admin_email="p@x.com",
                                admin_first_name="A", admin_last_name="B",
                                packages=["transport"])
    company.refresh_from_db()
    assert company.pkg_transport is True
    assert company.pkg_accounting is False

def test_administration_forced_on_when_omitted():
    from apps.system_config.selectors.entitlements import granted_packages
    company, _ = create_company(name="P2 Co", admin_email="p2@x.com",
                                admin_first_name="A", admin_last_name="B",
                                packages=[])
    assert "administration" in granted_packages(company)
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_company_packages.py -q
```
Expected: FAIL (`create_company` has no `packages` kwarg / grants not set).

- [ ] **Step 3: Implement**

Add `packages=None` to `create_company`'s signature. After the `Company.objects.create(...)` call, apply grants:
```python
from apps.core.packages import all_package_codes, grant_field_for
if packages is not None:
    selected = set(packages) | {"administration"}   # administration toujours inclus
    updates = {}
    for code in all_package_codes():
        field = grant_field_for(code)
        if field:                                    # skip always-on
            updates[field] = code in selected
    if updates:
        for k, v in updates.items():
            setattr(company, k, v)
        company.save(update_fields=list(updates))
```
In the create serializer add `packages = serializers.ListField(child=serializers.CharField(), required=False)`; in the view pass `packages=serializer.validated_data.get("packages")` into `create_company`.

- [ ] **Step 4: Run the test to verify it passes**

```bash
cd backend
../env/bin/python -m pytest apps/system_config/tests/test_company_packages.py -q
```
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/system_config
git commit -m "feat(system_config): choose packages at company creation (Administration forced on)"
```

---

### Task 7: Frontend `PackageService` (active package + my-packages)

**Files:**
- Create: `angular/src/app/core/service/packages/package.service.ts`
- Modify: `angular/src/app/core/helpers/routes.ts` (add `appsLauncher: '/apps'`)

**Interfaces:**
- Produces: `PackageService` with:
  - `loadMyPackages(): Observable<AppPackage[]>` → `GET /system/my-packages/` (interceptor unwraps `{success,data}` to the array — see the list-response memory)
  - `activePackage: signal<AppPackage | null>` (persisted in `localStorage` key `activePackage`)
  - `setActive(pkg: AppPackage): void`, `clear(): void`
  - type `AppPackage = { code: string; label: string; icon: string; modules: string[] }`

- [ ] **Step 1: Implement the service**

```typescript
// angular/src/app/core/service/packages/package.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AppPackage { code: string; label: string; icon: string; modules: string[]; }

const KEY = 'activePackage';

@Injectable({ providedIn: 'root' })
export class PackageService {
  activePackage = signal<AppPackage | null>(this.read());
  constructor(private http: HttpClient) {}

  loadMyPackages(): Observable<AppPackage[]> {
    return this.http.get<AppPackage[]>(`${environment.apiUrl}/system/my-packages/`);
  }
  setActive(pkg: AppPackage): void {
    localStorage.setItem(KEY, JSON.stringify(pkg));
    this.activePackage.set(pkg);
  }
  clear(): void { localStorage.removeItem(KEY); this.activePackage.set(null); }
  private read(): AppPackage | null {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) as AppPackage : null;
  }
}
```
Confirm the response is unwrapped to a bare array by the existing HTTP interceptor (per the list-response-shape convention); if `my-packages` returns `{success,data}` and the interceptor only unwraps paginated shapes, map `res.data` here instead.

- [ ] **Step 2: Add the route constant**

In `routes.ts`, add `appsLauncher: '/apps',` near the top-level routes.

- [ ] **Step 3: Verify build**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -15
```
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add angular/src/app/core/service/packages/package.service.ts angular/src/app/core/helpers/routes.ts
git commit -m "feat(ui): PackageService (active package + my-packages)"
```

---

### Task 8: `/apps` launcher screen + login redirect

**Files:**
- Create: `angular/src/_api/pages/apps/apps-launcher.component.ts` (+ `.html`, `.scss`)
- Modify: `angular/src/app/app.routes.ts` (add protected `/apps` route; change default redirect `dashboard/index` → `apps`)
- Modify: `angular/src/_api/pages/auth/signin/signin.component.ts:54` (default post-login target → `/apps`)

**Interfaces:**
- Consumes: `PackageService` (Task 7), `authGuard` (existing), `routes.appsLauncher`.
- Produces: route `/apps` rendering accessible packages as cards; clicking sets active package and navigates into the shell.

- [ ] **Step 1: Build the launcher component**

Standalone component: on init call `packages.loadMyPackages()`, render a responsive card grid (icon + label). On card click: `packages.setActive(pkg); this.router.navigateByUrl('/' + firstRouteFor(pkg))`. For Phase 1 the landing per package: Administration → `routes.admAgencies` (or admin home), Transport → `routes.voyageList`/first Transport menu, Accounting → accounting home. Implement `firstRouteFor(pkg)` as a small map from package code → landing route constant.

```typescript
// apps-launcher.component.ts (essential logic)
packages = inject(PackageService);
private router = inject(Router);
items: AppPackage[] = [];
ngOnInit() { this.packages.loadMyPackages().subscribe(p => this.items = p); }
open(pkg: AppPackage) {
  this.packages.setActive(pkg);
  const landing: Record<string,string> = {
    administration: '/admin/agencies',
    transport: '/voyages/trips',
    accounting: '/accounting/accounts',
  };
  this.router.navigateByUrl(landing[pkg.code] ?? '/dashboard/index');
}
```
Confirm the exact landing route strings against `routes.ts` before finalizing (`grep -nE "admAgencies|voyage|accounting" src/app/core/helpers/routes.ts`).

- [ ] **Step 2: Register the `/apps` route**

In `app.routes.ts`, change the default redirect and add the launcher (guarded):
```typescript
{ path: '', redirectTo: 'apps', pathMatch: 'full' },
{ path: 'apps', canActivate: [authGuard],
  loadComponent: () => import('../_api/pages/apps/apps-launcher.component').then(m => m.AppsLauncherComponent) },
```
Import `authGuard` at top (same import the pages shell uses).

- [ ] **Step 3: Redirect login to the launcher**

In `signin.component.ts`, set the default `returnUrl` to `/apps` (only when no explicit `returnUrl` query param was provided) so `this.router.navigateByUrl(this.returnUrl)` lands on `/apps`.

- [ ] **Step 4: Verify build + manual smoke**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -15
```
Manual: log in → land on `/apps` → see package cards → clicking enters the app.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/apps angular/src/app/app.routes.ts angular/src/_api/pages/auth/signin/signin.component.ts
git commit -m "feat(ui): /apps launcher + post-login redirect to launcher"
```

---

### Task 9: Sidebar filtering by active package + app-switcher

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (add a getter that filters `sidebarData1` by active package modules)
- Modify: the sidebar component that renders `sidebarData1` (find with grep) to use the filtered list
- Modify: `angular/src/app/features/pages/pages.component.ts` (redirect to `/apps` if no active package) + add an app-switcher control (top-left) that calls `packages.clear()` and navigates to `/apps`

**Interfaces:**
- Consumes: `PackageService.activePackage` (Task 7); `apps.core.packages` module lists mirrored on the frontend via the package's `modules` array (already returned by `/my-packages` and stored in `activePackage`).

- [ ] **Step 1: Add a filtered sidebar accessor**

In `sidebar.service.ts`, add:
```typescript
filteredSidebar(activeModules: string[] | null) {
  if (!activeModules) return this.sidebarData1;
  const set = new Set(activeModules.concat('administration'));
  return this.sidebarData1.filter((g: any) => set.has(g.module));
}
```
(Administration always included so its group shows within any package if desired; if Administration should ONLY show in its own package, drop the `.concat('administration')` and rely on the active package's modules.)

- [ ] **Step 2: Use it in the sidebar component**

```bash
cd angular && grep -rln "sidebarData1" src/app --include="*.ts" --include="*.html"
```
In that component, inject `PackageService`, compute `menu = this.sidebar.filteredSidebar(this.packages.activePackage()?.modules ?? null)`, and bind the template to `menu` instead of the raw `sidebarData1`.

- [ ] **Step 3: Guard the shell + add app-switcher**

In `pages.component.ts` `ngOnInit`: if `!packages.activePackage()` → `router.navigateByUrl('/apps')`. Add a header/top-left button ("app-switcher", Odoo-style grid icon) whose click does `packages.clear(); router.navigateByUrl('/apps')`. Place it in the existing top bar template.

- [ ] **Step 4: Verify build + manual smoke**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -15
```
Manual: pick Transport → sidebar shows only Transport modules; app-switcher returns to `/apps`; entering the shell URL directly with no active package redirects to `/apps`.

- [ ] **Step 5: Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/app/features/pages
git commit -m "feat(ui): filter sidebar by active package + app-switcher"
```

---

### Task 10: Company-creation package picker + superadmin "Plans" relabel

**Files:**
- Modify: the company-create form component (find with grep) — add a Packages selector
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (superadmin menu "Packages" → "Plans")
- Modify: i18n JSONs (`fr/en/es/pt`) for any new keys (`packages.select`, package labels, app-switcher tooltip)

**Interfaces:**
- Consumes: the `create_company` `packages` field (Task 6).
- Produces: create-company payload includes `packages: string[]`.

- [ ] **Step 1: Locate the create-company form**

```bash
cd angular && grep -rln "create_company\|createCompany\|companies" src/_api/pages --include="*.ts" | head
```

- [ ] **Step 2: Add the Packages selector**

In the create form: render checkboxes for `Transport` and `Comptabilité`; show `Administration` checked + disabled (always on). Bind to a `packages: string[]` field; include it in the submit payload. Labels via Transloco keys.

- [ ] **Step 3: Relabel superadmin menu**

In `sidebar.service.ts`, change the Super Admin submenu `{ menuValue: 'Packages', route: routes.superadminPackages, ... }` → `menuValue: 'Plans'` (keep the route; the underlying screen manages the commercial `Plan` catalog).

- [ ] **Step 4: Add i18n keys**

Add matching keys to `fr/en/es/pt` translation JSONs for the new labels/tooltips (French primary).

- [ ] **Step 5: Verify build + manual smoke**

```bash
cd angular && npx ng build --configuration development 2>&1 | tail -15
```
Manual: create a company with only Transport → new company's `pkg_accounting` is false; its users see only Administration + Transport in the launcher.

- [ ] **Step 6: Commit**

```bash
git add angular/src
git commit -m "feat(ui): package picker in company creation + superadmin Plans relabel"
```

---

## Final verification

- [ ] Backend: `cd backend && ../env/bin/python manage.py makemigrations --check --dry-run` (clean) and `../env/bin/python -m pytest apps/system_config apps/core -q` (green vs baseline).
- [ ] Full touched-area regression: `../env/bin/python -m pytest apps/system_config apps/core apps/voyages_booking apps/treasury -q` — confirm no NEW failures beyond the 14 known-red master baseline.
- [ ] Frontend: `cd angular && npx ng build --configuration development` succeeds.
- [ ] Manual E2E: login → `/apps` shows granted packages → select Transport → sidebar filtered → app-switcher returns → create a company with a package subset → its users see only those packages.
- [ ] Sync sanity: `makemigrations --check` clean; note the schema fingerprint changed (all instances must rebuild from the same commit before syncing — per the deployment rule).

## Notes for the executor

- The rename (Task 1) is the widest-blast-radius change; run the full `grep` and `manage.py check` before moving on.
- Confirm the RBAC permission accessor name in Task 5 before writing (`grep` shown in-step) — do not invent `user_permission_codes` if the real helper differs.
- Confirm landing route constants in Task 8 and the sidebar-rendering component in Task 9 via the greps shown; the exact route strings/component path must match the repo.
- Do all work on the existing branch `feat/packages-launcher`; do not push until the user asks.
