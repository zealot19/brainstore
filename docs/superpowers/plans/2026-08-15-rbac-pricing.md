# RBAC — Tranche 3, module Tarifs (`voyages_pricing`) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Appliquer le RBAC au module Tarifs (`voyages_pricing`) via `transport.fare.*` (déjà seedé) : enforcement backend + gating menu/boutons.

**Architecture:** Réutilise le mécanisme existant. Aucune migration (codes déjà seedés en 0006).

**Tech Stack:** Django 5.1 + DRF, Angular (standalone), pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-rbac-pricing-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-pricing` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- Réutiliser `transport.fare.*` ; **aucun seed**.
- ⚠️ Disque serré.

**Rappels codebase (vérifiés) :**
- `voyages_pricing/config_api/views.py` : import `from apps.core.permissions import IsInstitutionAdmin` (ligne 2). 4 vues : `FareListView`, `FareDetailView`, `FareBulkDeleteView`, `RoutePointsView`, toutes en `permission_classes = [IsInstitutionAdmin]`.
- Codes `transport.fare.view/manage` déjà seedés (migration `admin_rbac/0006`).
- Menu : `sidebar.service.ts` ligne 352 : `{ menuValue: 'Tarifs', route: routes.vcFares, base: 'fares' }`.
- Page front : `_api/pages/voyages-pricing/fares/` (route `/voyages-config/fares`). Handlers : openCreate, openEdit, delete, bulkDelete. Import directive : `../../../../app/shared/directives/has-permission.directive`.
- `apps/voyages_pricing` n'a pas de fichier de tests → créer `apps/voyages_pricing/tests.py`.

---

### Task 1: Backend — gating de `voyages_pricing`

**Files:**
- Modify: `backend/apps/voyages_pricing/config_api/views.py`
- Create: `backend/apps/voyages_pricing/tests.py`

- [ ] **Step 1: Écrire les tests (échouent)**

Créer `backend/apps/voyages_pricing/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_pricing.config_api.views import FareListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Fare RBAC Co", admin_email="fareadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="fareadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="farestaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, **kw):
    req = getattr(APIRequestFactory(), method)("/x", {}, format="json")
    force_authenticate(req, user=user)
    r = view.as_view()(req, **kw)
    return r.status_code


@pytest.mark.django_db
def test_fare_permission_gating():
    company, admin, staff = _make_staff(["transport.fare.view"])
    assert _status(FareListView, "get", staff) != 403
    assert _status(FareListView, "post", staff) == 403
    assert _status(FareListView, "get", admin) != 403


@pytest.mark.django_db
def test_fare_manage_permission():
    company, admin, staff = _make_staff(["transport.fare.view", "transport.fare.manage"])
    assert _status(FareListView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_fare_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(FareListView, "get", staff) == 403
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_pricing/tests.py -v`
Expected: FAIL (vues encore `IsInstitutionAdmin`).

- [ ] **Step 3: Annoter les vues**

Script depuis `.../backend` :
```python
../env/bin/python - <<'PYEOF'
import re
path = "apps/voyages_pricing/config_api/views.py"
src = open(path, encoding="utf-8").read()
src = src.replace(
  "from apps.core.permissions import IsInstitutionAdmin",
  "from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission", 1)
MAP = {
 "FareListView": {"GET":"transport.fare.view","POST":"transport.fare.manage"},
 "FareDetailView": {"GET":"transport.fare.view","PATCH":"transport.fare.manage","PUT":"transport.fare.manage","DELETE":"transport.fare.manage"},
 "FareBulkDeleteView": {"POST":"transport.fare.manage"},
 "RoutePointsView": {"GET":"transport.fare.view"},
}
lines = src.split("\n")
class_idx = {}
for i, ln in enumerate(lines):
    m = re.match(r"class (\w+)\(", ln)
    if m: class_idx[m.group(1)] = i
done, missing = 0, []
for name, pmap in MAP.items():
    if name not in class_idx: missing.append(name); continue
    start = class_idx[name]
    ends = [class_idx[n] for n in class_idx if class_idx[n] > start]
    end = min(ends) if ends else len(lines)
    ok = False
    for j in range(start, end):
        if lines[j].strip() == "permission_classes = [IsInstitutionAdmin]":
            indent = lines[j][:len(lines[j]) - len(lines[j].lstrip())]
            lines[j] = (f"{indent}permission_classes = [IsAuthenticated, HasModulePermission]\n"
                        f"{indent}permission_map = {pmap!r}")
            ok = True; done += 1; break
    if not ok: missing.append(name + " (no line)")
open(path, "w", encoding="utf-8").write("\n".join(lines))
print("annotated:", done, "| missing:", missing)
PYEOF
```
Attendu : `annotated: 4 | missing: []`. Vérifier : `grep -c "permission_classes = \[IsInstitutionAdmin\]" apps/voyages_pricing/config_api/views.py` → `0`.

- [ ] **Step 4: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/voyages_pricing/tests.py -q && ../env/bin/python manage.py check`
Expected: 3 tests PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_pricing/config_api/views.py backend/apps/voyages_pricing/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur voyages_pricing (transport.fare.*)"
```

---

### Task 2: Frontend — menu + boutons Tarifs

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`
- Modify: `angular/src/_api/pages/voyages-pricing/fares/*.component.ts` (import)
- Modify: `angular/src/_api/pages/voyages-pricing/fares/*.component.html` (boutons)

- [ ] **Step 1: Gater l'entrée de menu « Tarifs »**

Remplacer :
```typescript
            { menuValue: 'Tarifs',              route: routes.vcFares,              base: 'fares'                },
```
par :
```typescript
            { menuValue: 'Tarifs',              route: routes.vcFares,              base: 'fares',                permission: 'transport.fare.view' },
```

- [ ] **Step 2: Importer la directive + gater les boutons de la page fares**

Depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, re
imp = "import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';"
# .ts import
for f in glob.glob("src/_api/pages/voyages-pricing/fares/*.component.ts"):
    s = open(f, encoding="utf-8").read()
    if "HasPermissionDirective" in s: continue
    lines = s.split("\n")
    li = max(i for i,l in enumerate(lines) if l.startswith("import "))
    lines.insert(li+1, imp); s="\n".join(lines)
    m = re.search(r"imports:\s*\[", s)
    if m: s = s[:m.end()] + "HasPermissionDirective, " + s[m.end():]
    open(f,"w",encoding="utf-8").write(s); print("ts updated:", f)
# .html buttons
def inject(s, handler, code="transport.fare.manage"):
    needle = f'(click)="{handler}('
    out=[]; i=0; cnt=0
    while True:
        j=s.find(needle,i)
        if j==-1: out.append(s[i:]); break
        ts=s.rfind('<',0,j); seg=s[ts:j]
        if ('*ngIf' in seg) or ('*ngFor' in seg) or ('*hasPermission' in seg):
            out.append(s[i:j+len(needle)]); i=j+len(needle); continue
        out.append(s[i:j]); out.append(f'*hasPermission="\'{code}\'" '); out.append(needle); i=j+len(needle); cnt+=1
    return "".join(out), cnt
total=0
for f in glob.glob("src/_api/pages/voyages-pricing/fares/*.component.html"):
    s=open(f,encoding="utf-8").read(); fc=0
    for h in ("openCreate","openEdit","delete","bulkDelete"):
        s,c=inject(s,h); fc+=c
    if fc: open(f,"w",encoding="utf-8").write(s); total+=fc
print("buttons gated:", total)
PYEOF
```
Vérifier les boutons non gatés (élément avec `*ngIf`) et les envelopper à la main si besoin :
```
grep -rnE '\(click\)="(openCreate|openEdit|delete|bulkDelete)\(' src/_api/pages/voyages-pricing/fares/*.html | grep -v hasPermission
```

- [ ] **Step 3: Build + commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/_api/pages/voyages-pricing
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): menu + boutons Tarifs gates (transport.fare.*)"
```
Expected: build OK.

---

### Task 3: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check && ../env/bin/python -m pytest apps/voyages_pricing/tests.py -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: check OK ; tests PASS ; build OK.

- [ ] **Step 2: 0 IsInstitutionAdmin dans pricing**

Run: `grep -c "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_pricing/config_api/views.py`
Expected : `0`.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 1 (HasModulePermission sur les 4 vues) → Task 1. ✅
- Composant 2 (menu « Tarifs ») → Task 2 Step 1. ✅
- Composant 3 (boutons page fares) → Task 2 Step 2. ✅
- Tests staff/admin + 0 IsInstitutionAdmin → Task 1, Task 3. ✅
- Aucun seed (codes déjà présents) → confirmé (pas de migration dans le plan). ✅

**Placeholder scan :** aucun TBD/TODO ; scripts complets ; mapping des 4 vues exact.

**Type consistency :** codes `transport.fare.*` identiques entre vues (Task 1), menu et boutons (Task 2).
Helper `_make_staff` = patron des tranches précédentes. Directive `*hasPermission` et import identiques.
