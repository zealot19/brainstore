# RBAC — Tranche 3, module Colis & Bagages (`voyages_consignment`) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Appliquer le RBAC au module Colis & Bagages (`voyages_consignment`) : seed `ticketing.parcel.*`, enforcement backend, gating menu/boutons.

**Architecture:** Réutilise le mécanisme existant. Colis → `ticketing.parcel.*` (nouveau) ; bagages → `ticketing.luggage.*` (déjà seedé).

**Tech Stack:** Django 5.1 + DRF, Angular (standalone), pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-rbac-consignment-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-consignment` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- Réutiliser `ticketing.luggage.*` ; seuls `ticketing.parcel.*` sont nouveaux. Autres modules → `IsInstitutionAdmin`.
- ⚠️ Disque serré.

**Rappels codebase (vérifiés) :**
- `voyages_consignment/config_api/views.py` : import `from apps.core.permissions import IsInstitutionAdmin` (ligne 3). 18 vues, toutes en `permission_classes = [IsInstitutionAdmin]`.
- Dernière migration `admin_rbac` : `0006_transport_permissions_seed` ; module `ticketing` existe (luggage déjà seedé en 0005).
- Menu : `sidebar.service.ts` section « Colis & Bagages » : `vcgParcels` (base `parcels`), `vcgReception` (`reception`), `vcgManifest` (`manifest`), `vcgBaggage` (`baggage`).
- Directive : import depuis une page consignment : `../../../../app/shared/directives/has-permission.directive`.
- Pages : `_api/pages/voyages-consignment/{parcels,reception,manifest,baggage}` (+ wrapper `voyages-consignment.component.ts`).
- `apps/voyages_consignment/tests.py` existe → y ajouter les tests RBAC.

---

### Task 1: Backend — seed `ticketing.parcel.*` + gating de `voyages_consignment`

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0007_parcel_permissions_seed.py`
- Modify: `backend/apps/voyages_consignment/config_api/views.py`
- Modify: `backend/apps/voyages_consignment/tests.py` (append)

- [ ] **Step 1: Migration de seed**

Créer `backend/apps/admin_rbac/migrations/0007_parcel_permissions_seed.py` :

```python
"""Data migration — seed des permissions Colis (module `ticketing`).
Les bagages (ticketing.luggage.*) sont déjà seedés (0005) ; les colis n'avaient aucun code."""
from django.db import migrations

PERMS = [
    ("ticketing.parcel.view",   "Consulter les colis", "view"),
    ("ticketing.parcel.manage", "Gérer les colis",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="ticketing", defaults={"name": "Billetterie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0006_transport_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire les tests (échouent)**

Append dans `backend/apps/voyages_consignment/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_consignment.config_api.views import ParcelListView, BaggageListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Cons RBAC Co", admin_email="consadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="consadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="consstaff@x.com",
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
def test_parcel_permission_gating():
    company, admin, staff = _make_staff(["ticketing.parcel.view"])
    assert _status(ParcelListView, "get", staff) != 403
    assert _status(ParcelListView, "post", staff) == 403
    assert _status(ParcelListView, "get", admin) != 403


@pytest.mark.django_db
def test_parcel_manage_permission():
    company, admin, staff = _make_staff(["ticketing.parcel.view", "ticketing.parcel.manage"])
    assert _status(ParcelListView, "post", staff) != 403


@pytest.mark.django_db
def test_baggage_permission_gating():
    company, admin, staff = _make_staff(["ticketing.luggage.view"])
    assert _status(BaggageListView, "get", staff) != 403
    assert _status(BaggageListView, "post", staff) == 403


@pytest.mark.django_db
def test_staff_without_consignment_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(ParcelListView, "get", staff) == 403
```

- [ ] **Step 3: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_consignment/tests.py -k "permission or gating or denied" -v`
Expected: FAIL (vues encore `IsInstitutionAdmin`).

- [ ] **Step 4: Migrer + annoter les vues**

Run la migration :
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py migrate admin_rbac
```
Puis annoter (script depuis `.../backend`) :
```python
../env/bin/python - <<'PYEOF'
import re
path = "apps/voyages_consignment/config_api/views.py"
src = open(path, encoding="utf-8").read()
src = src.replace(
  "from apps.core.permissions import IsInstitutionAdmin",
  "from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission", 1)
P, L = "ticketing.parcel", "ticketing.luggage"
MAP = {
 "ParcelListView": {"GET":f"{P}.view","POST":f"{P}.manage"},
 "ParcelDetailView": {"GET":f"{P}.view","PATCH":f"{P}.manage","PUT":f"{P}.manage","DELETE":f"{P}.manage"},
 "ParcelPendingView": {"GET":f"{P}.view"},
 "ParcelAssignTripView": {"POST":f"{P}.manage"},
 "ParcelArrivedView": {"POST":f"{P}.manage"},
 "ParcelUnloadView": {"POST":f"{P}.manage"},
 "ParcelPickupView": {"POST":f"{P}.manage"},
 "ParcelCancelView": {"POST":f"{P}.manage"},
 "ParcelBulkView": {"POST":f"{P}.manage"},
 "ParcelReceiptView": {"GET":f"{P}.view"},
 "BaggageListView": {"GET":f"{L}.view","POST":f"{L}.manage"},
 "BaggageDetailView": {"GET":f"{L}.view","PATCH":f"{L}.manage","PUT":f"{L}.manage","DELETE":f"{L}.manage"},
 "BaggageLoadView": {"POST":f"{L}.manage"},
 "BaggageDeliverView": {"POST":f"{L}.manage"},
 "BaggageBulkView": {"POST":f"{L}.manage"},
 "BaggageTicketView": {"GET":f"{L}.view"},
 "BaggageLabelView": {"GET":f"{L}.view"},
 "TripManifestView": {"GET":f"{P}.view"},
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
Attendu : `annotated: 18 | missing: []`. Vérifier : `grep -c "permission_classes = \[IsInstitutionAdmin\]" apps/voyages_consignment/config_api/views.py` → `0`.

- [ ] **Step 5: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/voyages_consignment/tests.py -q && ../env/bin/python manage.py check`
Expected: tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0007_parcel_permissions_seed.py backend/apps/voyages_consignment/config_api/views.py backend/apps/voyages_consignment/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur voyages_consignment + seed ticketing.parcel.*"
```

---

### Task 2: Frontend — entrées de menu Colis & Bagages

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 1: Ajouter `permission` aux 4 sous-entrées**

Remplacer le bloc `subMenus` de la section « Colis & Bagages » par :
```typescript
            { menuValue: 'Colis',            route: routes.vcgParcels,   base: 'parcels',   permission: 'ticketing.parcel.view' },
            { menuValue: 'Réception colis',  route: routes.vcgReception, base: 'reception', permission: 'ticketing.parcel.view' },
            { menuValue: 'Manifeste voyage', route: routes.vcgManifest,  base: 'manifest',  permission: 'ticketing.parcel.view' },
            { menuValue: 'Bagages',          route: routes.vcgBaggage,   base: 'baggage',   permission: 'ticketing.luggage.view' },
```

- [ ] **Step 2: Build + commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): entrees de menu Colis & Bagages gatees"
```
Expected: build OK.

---

### Task 3: Frontend — boutons des pages Colis & Bagages

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/voyages-consignment/**/*.component.html` (boutons)

- [ ] **Step 1: Importer la directive (skip wrapper)**

Depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, os, re
imp = "import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';"
done=0
for f in glob.glob("src/_api/pages/voyages-consignment/**/*.component.ts", recursive=True):
    if os.path.basename(os.path.dirname(f)) == "voyages-consignment":
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

- [ ] **Step 2: Poser `*hasPermission` (par page, handler → code)**

Depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, os
P, L = "ticketing.parcel", "ticketing.luggage"
# par dossier de page : handler -> code
PAGE = {
 "parcels": {"openCreate":f"{P}.manage","openEdit":f"{P}.manage","delete":f"{P}.manage",
             "cancel":f"{P}.manage","bulkCancel":f"{P}.manage","askPickup":f"{P}.manage",
             "doPickup":f"{P}.manage","printReceipt":f"{P}.view"},
 "reception": {"receiveOne":f"{P}.manage","receiveSelectedFull":f"{P}.manage","bulk":f"{P}.manage"},
 "manifest": {"load":f"{P}.manage","loadAll":f"{P}.manage","unload":f"{P}.manage",
              "loadBag":f"{L}.manage","deliver":f"{L}.manage"},
 "baggage": {"openCreate":f"{L}.manage","openEdit":f"{L}.manage","delete":f"{L}.manage",
             "askDeliver":f"{L}.manage","doDeliver":f"{L}.manage","deliver":f"{L}.manage",
             "bulk":f"{L}.manage","printTicket":f"{L}.view","printLabel":f"{L}.view"},
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
for f in glob.glob("src/_api/pages/voyages-consignment/**/*.component.html", recursive=True):
    folder = os.path.basename(os.path.dirname(f))
    hmap = PAGE.get(folder)
    if not hmap: continue
    s=open(f,encoding="utf-8").read(); fc=0
    for h,code in hmap.items():
        s,c=inject(s,h,code); fc+=c
    if fc: open(f,"w",encoding="utf-8").write(s); total+=fc
print("buttons gated:", total)
PYEOF
```
Puis vérifier les boutons restés non gatés (élément avec `*ngIf`) et les envelopper à la main dans
`<ng-container *hasPermission="'CODE'">…</ng-container>` :
```
grep -rnE '\(click\)="(openCreate|openEdit|delete|cancel|bulkCancel|askPickup|doPickup|printReceipt|receiveOne|receiveSelectedFull|bulk|load|loadAll|unload|loadBag|deliver|askDeliver|doDeliver|printTicket|printLabel)\(' src/_api/pages/voyages-consignment/*/*.html | grep -v hasPermission
```

- [ ] **Step 3: Build + commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-consignment
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons des pages Colis & Bagages"
```
Expected: build OK.

---

### Task 4: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check && ../env/bin/python -m pytest apps/voyages_consignment/tests.py apps/admin_rbac/tests.py -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: check OK ; tests PASS ; build OK.

- [ ] **Step 2: Non-régression + 0 IsInstitutionAdmin**

Run:
```
grep -c "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_consignment/config_api/views.py
grep -rln "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_pricing | wc -l
```
Expected : `0` pour voyages_consignment ; ≥1 pour pricing (non migré).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 0 (seed `ticketing.parcel.*`) → Task 1 Step 1. ✅
- Composant 1 (HasModulePermission sur les 18 vues) → Task 1 Step 4. ✅
- Composant 2 (menu) → Task 2. ✅
- Composant 3 (boutons par page) → Task 3. ✅
- Tests colis + bagages + non-régression → Task 1, Task 4. ✅

**Placeholder scan :** aucun TBD/TODO ; migration et scripts complets ; mapping des 18 vues exact.

**Type consistency :** codes `ticketing.parcel.*` / `ticketing.luggage.*` identiques entre seed (Task 1),
vues (Task 1), menu (Task 2), boutons (Task 3). Helper `_make_staff` = patron des tranches précédentes.
Directive `*hasPermission` et import identiques.
