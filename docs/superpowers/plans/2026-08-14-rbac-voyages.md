# RBAC — Tranche 3, pilote Voyages (`voyages_trips`) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Appliquer le RBAC au module Voyages (`voyages_trips`) en réutilisant les codes `voyage.*` : enforcement backend + gating menu/boutons frontend.

**Architecture:** Réutilise le mécanisme existant — `HasModulePermission` + `permission_map` sur les vues, `permission` sur l'entrée de menu, directive `*hasPermission` sur les boutons. Aucun nouveau code de permission à seeder.

**Tech Stack:** Django 5.1 + DRF, Angular (standalone), pytest.

**Spec:** `docs/superpowers/specs/2026-08-14-rbac-voyages-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-voyages` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- Réutiliser les codes `voyage.*` existants ; aucun seed. Les autres apps restent en `IsInstitutionAdmin`.
- ⚠️ Disque serré — garder de l'espace pour `ng build`.

**Rappels codebase (vérifiés) :**
- `voyages_trips/views.py` : import `from apps.core.permissions import IsInstitutionAdmin` (ligne 3). Classes de vues aux lignes ~33-361 (voir tableau Task 1).
- `apps.core.permissions.HasModulePermission` + `IsAuthenticated` existent.
- Codes `voyage.*` seedés (11) : `voyage.trip.view/create/update/delete/depart/arrive/board/cancel`, `voyage.crew.view/manage`, `voyage.dashboard.view`.
- Menu : `sidebar.service.ts`, section « Voyages » → groupe « Voyages » (base `voyages`) → sous-entrée `{ menuValue: 'Voyages', route: routes.voyagesList, base: 'list' }`.
- Directive : `angular/src/app/shared/directives/has-permission.directive.ts` (import depuis une page voyages : `../../../../app/shared/directives/has-permission.directive`).
- Pages voyages : `_api/pages/voyages/{list,trip-detail,roadmap}`. Boutons dans des blocs `@if` (control-flow) → la directive s'attache directement à l'élément bouton.
- Helper de test staff+rôle : même patron que `apps/fleet/tests.py`.
- `apps/voyages_trips/tests.py` existe (fichier) → y ajouter les tests RBAC.

---

### Task 1: Backend — `HasModulePermission` sur `voyages_trips`

**Files:**
- Modify: `backend/apps/voyages_trips/views.py`
- Modify: `backend/apps/voyages_trips/tests.py` (append)

**Interfaces:**
- Consumes: `HasModulePermission`, codes `voyage.*`.

- [ ] **Step 1: Écrire les tests (échouent)**

Append dans `backend/apps/voyages_trips/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_trips.views import TripListCreateView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Voy RBAC Co", admin_email="voyadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="voyadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="voystaff@x.com",
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
def test_trip_view_permission_gating():
    company, admin, staff = _make_staff(["voyage.trip.view"])
    assert _status(TripListCreateView, "get", staff) != 403
    assert _status(TripListCreateView, "post", staff) == 403
    assert _status(TripListCreateView, "get", admin) != 403
    assert _status(TripListCreateView, "post", admin) != 403


@pytest.mark.django_db
def test_trip_create_permission():
    company, admin, staff = _make_staff(["voyage.trip.view", "voyage.trip.create"])
    assert _status(TripListCreateView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_voyage_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(TripListCreateView, "get", staff) == 403
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py -k "permission or denied" -v`
Expected: FAIL (vues encore `IsInstitutionAdmin` → staff 403 partout → `GET != 403` échoue).

- [ ] **Step 3: Importer les classes de permission**

Dans `backend/apps/voyages_trips/views.py`, remplacer la ligne
`from apps.core.permissions import IsInstitutionAdmin`
par :
`from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission`

- [ ] **Step 4: Annoter chaque vue**

Pour **chaque** classe ci-dessous, remplacer `permission_classes = [IsInstitutionAdmin]` par
`permission_classes = [IsAuthenticated, HasModulePermission]` et ajouter l'attribut `permission_map`.
Script (exécuter depuis `.../ERP-master/backend`) :

```python
../env/bin/python - <<'PYEOF'
import re
path = "apps/voyages_trips/views.py"
src = open(path, encoding="utf-8").read()
src = src.replace(
  "from apps.core.permissions import IsInstitutionAdmin",
  "from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission", 1)

MAP = {
 "TripListCreateView": {"GET":"voyage.trip.view","POST":"voyage.trip.create"},
 "TripDetailView": {"GET":"voyage.trip.view","PATCH":"voyage.trip.update","PUT":"voyage.trip.update","DELETE":"voyage.trip.delete"},
 "TripEligibleVehiclesView": {"GET":"voyage.trip.view"},
 "TripAssignVehicleView": {"POST":"voyage.trip.update"},
 "TripCrewView": {"GET":"voyage.crew.view","POST":"voyage.crew.manage"},
 "TripCrewDetailView": {"DELETE":"voyage.crew.manage"},
 "TripSeatsView": {"GET":"voyage.trip.view"},
 "_TripSeatStatusView": {"POST":"voyage.trip.update"},
 "TripStopsView": {"GET":"voyage.trip.view"},
 "_LifecycleView": {"POST":"voyage.trip.update"},
 "TripSubmitView": {"POST":"voyage.trip.update"},
 "TripDepartView": {"POST":"voyage.trip.depart"},
 "TripCompleteView": {"POST":"voyage.trip.arrive"},
 "TripCancelView": {"POST":"voyage.trip.cancel"},
 "TripSuspendView": {"POST":"voyage.trip.update"},
 "TripResumeView": {"POST":"voyage.trip.update"},
 "TripMarkDelayedView": {"POST":"voyage.trip.update"},
 "TripClearDelayView": {"POST":"voyage.trip.update"},
 "TripTransbordEligibleView": {"GET":"voyage.trip.view"},
 "TripTransbordView": {"POST":"voyage.trip.update"},
 "TripTransbordHistoryView": {"GET":"voyage.trip.view"},
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
    if not ok: missing.append(name + " (no IsInstitutionAdmin line)")
open(path, "w", encoding="utf-8").write("\n".join(lines))
print("annotated:", done, "| missing:", missing)
PYEOF
```
Résultat attendu : `annotated: 21 | missing: []` (ou proche ; toute classe listée comme *missing (no IsInstitutionAdmin line)* est une sous-classe qui hérite déjà — l'ignorer si le mapping parent la couvre). Si des vues `voyages_trips` supplémentaires existent sans `permission_map`, elles restent lisibles pour tout authentifié : si besoin d'un défaut, leur ajouter `permission_map = {"GET": "voyage.trip.view"}`.

- [ ] **Step 5: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/voyages_trips/tests.py -k "permission or denied or create" -v && ../env/bin/python manage.py check`
Expected: tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/views.py backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur les vues voyages_trips"
```

---

### Task 2: Frontend — entrée de menu Voyages

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 1: Ajouter `permission` à l'entrée Voyages**

Remplacer la sous-entrée :
```typescript
            { menuValue: 'Voyages', route: routes.voyagesList, base: 'list' },
```
par :
```typescript
            { menuValue: 'Voyages', route: routes.voyagesList, base: 'list', permission: 'voyage.trip.view' },
```

- [ ] **Step 2: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 3: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): entree de menu Voyages gatee (voyage.trip.view)"
```

---

### Task 3: Frontend — boutons des pages Voyages

**Files:**
- Modify: `angular/src/_api/pages/voyages/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/voyages/**/*.component.html` (boutons)

**Interfaces:**
- Consumes: `HasPermissionDirective`.

- [ ] **Step 1: Importer la directive dans chaque composant voyages**

Script (depuis `.../ERP-master/angular`) — ajoute l'import + l'entrée `imports:[]` aux composants de page
(pas le wrapper `voyages.component.ts`, qui n'a pas de boutons) :

```python
python3 - <<'PYEOF'
import glob, os, re
imp = "import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';"
done=0
for f in glob.glob("src/_api/pages/voyages/**/*.component.ts", recursive=True):
    if os.path.basename(os.path.dirname(f)) == "voyages":  # wrapper voyages.component.ts
        continue
    s = open(f, encoding="utf-8").read()
    if "HasPermissionDirective" in s: continue
    lines = s.split("\n")
    li = max(i for i,l in enumerate(lines) if l.startswith("import "))
    lines.insert(li+1, imp); s="\n".join(lines)
    m = re.search(r"imports:\s*\[", s)
    if m: s = s[:m.end()] + "HasPermissionDirective, " + s[m.end():]
    open(f,"w",encoding="utf-8").write(s); done+=1
print("ts updated:", done)
PYEOF
```
Si un composant de page n'a pas de tableau `imports:[]` (peu probable pour un standalone), l'ajouter au décorateur.

- [ ] **Step 2: Poser `*hasPermission` sur les boutons**

Script (depuis `.../ERP-master/angular`) — insère `*hasPermission="'CODE'"` juste avant le `(click)`
de chaque bouton, en sautant les éléments portant déjà `*ngIf`/`*ngFor`/`*hasPermission` :

```python
python3 - <<'PYEOF'
import glob
HMAP = {
 "openCreate":"voyage.trip.create","depart":"voyage.trip.depart","complete":"voyage.trip.arrive",
 "cancel":"voyage.trip.cancel","board":"voyage.trip.board","boardAll":"voyage.trip.board",
 "submit":"voyage.trip.update","suspend":"voyage.trip.update","resume":"voyage.trip.update",
 "markDelayed":"voyage.trip.update","clearDelay":"voyage.trip.update","assign":"voyage.trip.update",
 "openTransbord":"voyage.trip.update","doTransbord":"voyage.trip.update","openSelection":"voyage.trip.update",
 "doSelection":"voyage.trip.update","toggleSeat":"voyage.trip.update",
 "addCrew":"voyage.crew.manage","removeCrew":"voyage.crew.manage",
}
def inject(s, handler, code):
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
for f in glob.glob("src/_api/pages/voyages/**/*.component.html", recursive=True):
    s=open(f,encoding="utf-8").read(); fc=0
    for h,code in HMAP.items():
        s,c=inject(s,h,code); fc+=c
    if fc: open(f,"w",encoding="utf-8").write(s); total+=fc
print("buttons gated:", total)
PYEOF
```
Puis, pour les boutons **restés** non gatés parce qu'ils portent `*ngIf` (les vérifier via le grep ci-dessous),
les envelopper à la main dans `<ng-container *hasPermission="'CODE'">…</ng-container>` (même patron que Flotte) :
```
grep -rnE '\(click\)="(openCreate|depart|complete|cancel|board|boardAll|submit|suspend|resume|markDelayed|clearDelay|assign|openTransbord|doTransbord|openSelection|doSelection|toggleSeat|addCrew|removeCrew)\(' src/_api/pages/voyages/*/*.html | grep -v hasPermission
```
Attendu : idéalement aucun résultat (les boutons voyages sont dans des blocs `@if`, pas des attributs `*ngIf`).

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons des pages Voyages"
```

---

### Task 4: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check && ../env/bin/python -m pytest apps/voyages_trips/tests.py -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: check OK ; tests PASS ; build OK.

- [ ] **Step 2: Non-régression (autres modules inchangés)**

Run: `grep -rn "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_booking backend/apps/voyages_config backend/apps/voyages_consignment backend/apps/voyages_pricing | head`
Expected: présent (ces modules ne sont pas migrés dans cette tranche).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 1 (HasModulePermission sur voyages_trips + mapping) → Task 1. ✅
- Composant 2 (menu `voyage.trip.view`) → Task 2. ✅
- Composant 3 (boutons via directive) → Task 3. ✅
- Réutilisation des codes `voyage.*` sans seed → Tasks 1-3 (aucune migration). ✅
- Tests staff/admin + non-régression → Task 1, Task 4. ✅

**Placeholder scan :** aucun TBD/TODO ; scripts complets ; mapping exact.

**Type consistency :** `permission_map` (dict par méthode) cohérent backend ; codes `voyage.*` identiques
entre vues (Task 1), menu (Task 2) et boutons (Task 3). Helper `_make_staff(codes)` identique au patron Flotte.
Directive `*hasPermission` et son import identiques à ceux de la tranche 2.
