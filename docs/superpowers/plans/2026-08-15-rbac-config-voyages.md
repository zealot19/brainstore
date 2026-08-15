# RBAC — Tranche 3, module Config Voyages (`voyages_config`) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Appliquer le RBAC au module Config Voyages (`voyages_config`) via les codes `transport.*` + un couple groupé `transport.config.*`.

**Architecture:** Réutilise `HasModulePermission` + `permission_map`. Les bases `_Config*` portent un `permission_map` par défaut `transport.config` ; la factory `_pair`/`_bulk` accepte un `perm` pour les ressources à code dédié ; les vues dédiées sont annotées. Menu + boutons gatés côté front.

**Tech Stack:** Django 5.1 + DRF, Angular (standalone), pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-rbac-config-voyages-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-config-voyages` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- Réutiliser `transport.*` ; seuls `transport.config.view/manage` sont nouveaux. Autres modules → `IsInstitutionAdmin`.
- ⚠️ Disque serré.

**Rappels codebase (vérifiés) :**
- `voyages_config/config_api/views.py` : import `from apps.core.permissions import IsInstitutionAdmin` (ligne 4).
- Bases : `_ConfigListView` (ligne 24), `_ConfigDetailView` (62), `_ConfigBulkDeleteView` (107).
- Factory : `_pair(model_cls, read_cls, write_cls, unique="name", search=("name",))` (ligne 130), `_bulk(model_cls)` (ligne 139).
- Appels `_pair` : Town, FareClass, TimeSlot, ConsignmentNature, LoyaltyRule (lignes 144-148). Appels `_bulk` : Town, FareClass, TimeSlot, ConsignmentNature, LoyaltyRule, ServicePoint, ConsignmentType, SeatingPlan, VehicleSeatingAssignment, ServicePattern.
- Vues dédiées `(_ConfigListView/_ConfigDetailView)` sans ligne `permission_classes` (héritent) : ServicePointList/Detail, ConsignmentTypeList/Detail, SeatingPlanList/Detail.
- Vues dédiées `(APIView)` avec `permission_classes = [IsInstitutionAdmin]` : RouteList/Detail, RouteStopList/Detail, SeatingPlanSeats, VehicleSeatingAssignmentList/Detail, ServicePatternList/Detail, VoyagesSettings, TicketTemplate, TicketTemplateReset, TicketTemplatePreview.
- Menu : `sidebar.service.ts` section « Config Voyages » (lignes 341-354). L'entrée « Tarifs » (`vcFares`, base `fares`) = module Tarifs → **ne pas gater**.
- Pages front : `_api/pages/voyages-config/**` (+ wrapper). `apps/voyages_config/tests.py` existe → y ajouter les tests.
- Dernière migration `admin_rbac` : `0005_ticketing_permissions_seed`.

---

### Task 1: Backend — seed `transport.*` + gating de `voyages_config`

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0006_transport_permissions_seed.py`
- Modify: `backend/apps/voyages_config/config_api/views.py`
- Modify: `backend/apps/voyages_config/tests.py` (append)

- [ ] **Step 1: Migration de seed**

Créer `backend/apps/admin_rbac/migrations/0006_transport_permissions_seed.py` :

```python
"""Data migration — seed des permissions Config Voyages (module `transport`).
12 codes existants (absents des migrations) + transport.config.view/manage (nouveau, groupé)."""
from django.db import migrations

PERMS = [
    ("transport.category.manage",  "Gérer les catégories de véhicule",      "update"),
    ("transport.category.view",    "Consulter les catégories de véhicule",  "view"),
    ("transport.city.manage",      "Gérer les villes",                      "update"),
    ("transport.city.view",        "Consulter les villes",                  "view"),
    ("transport.config.manage",    "Gérer la configuration voyages",        "update"),
    ("transport.config.view",      "Consulter la configuration voyages",    "view"),
    ("transport.fare.manage",      "Gérer les tarifs",                      "update"),
    ("transport.fare.view",        "Consulter les tarifs",                  "view"),
    ("transport.fareclass.manage", "Gérer les classes de service",          "update"),
    ("transport.fareclass.view",   "Consulter les classes de service",      "view"),
    ("transport.route.manage",     "Gérer les itinéraires et arrêts",       "update"),
    ("transport.route.view",       "Consulter les itinéraires",             "view"),
    ("transport.terminal.manage",  "Gérer les terminaux",                   "update"),
    ("transport.terminal.view",    "Consulter les terminaux",               "view"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="transport", defaults={"name": "Transport / Config voyages"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=["transport.config.view", "transport.config.manage"]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0005_ticketing_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire les tests (échouent)**

Append dans `backend/apps/voyages_config/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_config.config_api.views import TownListView, TimeSlotListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Cfg RBAC Co", admin_email="cfgadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cfgadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="cfgstaff@x.com",
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
def test_town_permission_gating():
    company, admin, staff = _make_staff(["transport.city.view"])
    assert _status(TownListView, "get", staff) != 403
    assert _status(TownListView, "post", staff) == 403
    assert _status(TownListView, "get", admin) != 403


@pytest.mark.django_db
def test_town_manage_permission():
    company, admin, staff = _make_staff(["transport.city.view", "transport.city.manage"])
    assert _status(TownListView, "post", staff) != 403


@pytest.mark.django_db
def test_grouped_config_gating():
    # time-slots relèvent du groupe transport.config
    company, admin, staff = _make_staff(["transport.config.view"])
    assert _status(TimeSlotListView, "get", staff) != 403
    assert _status(TimeSlotListView, "post", staff) == 403


@pytest.mark.django_db
def test_staff_without_config_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(TownListView, "get", staff) == 403
```

- [ ] **Step 3: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_config/tests.py -k "permission or gating or denied" -v`
Expected: FAIL (vues encore `IsInstitutionAdmin`).

- [ ] **Step 4: Migrer**

Run: `../env/bin/python manage.py migrate admin_rbac`
Expected: `Applying admin_rbac.0006… OK`.

- [ ] **Step 5: Import + bases + factory (édition manuelle)**

Dans `apps/voyages_config/config_api/views.py` :

a) Import :
`from apps.core.permissions import IsInstitutionAdmin`
→ `from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission`

b) `_ConfigListView` — remplacer `permission_classes = [IsInstitutionAdmin]` par :
```python
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage"}
```

c) `_ConfigDetailView` — idem :
```python
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PATCH": "transport.config.manage",
                      "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}
```

d) `_ConfigBulkDeleteView` — idem :
```python
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "transport.config.manage"}
```

e) Factory — remplacer les définitions `_pair` et `_bulk` par :
```python
def _perm_maps(perm):
    return (
        {"GET": f"{perm}.view", "POST": f"{perm}.manage"},
        {"GET": f"{perm}.view", "PATCH": f"{perm}.manage", "PUT": f"{perm}.manage", "DELETE": f"{perm}.manage"},
    )


def _pair(model_cls, read_cls, write_cls, unique="name", search=("name",), perm=None):
    lst_attrs = {"model": model_cls, "read": read_cls, "write": write_cls,
                 "unique_field": unique, "search_fields": list(search)}
    det_attrs = {"model": model_cls, "read": read_cls, "write": write_cls, "unique_field": unique}
    if perm:
        lmap, dmap = _perm_maps(perm)
        lst_attrs["permission_map"] = lmap
        det_attrs["permission_map"] = dmap
    lst = type(f"{model_cls.__name__}ListView", (_ConfigListView,), lst_attrs)
    det = type(f"{model_cls.__name__}DetailView", (_ConfigDetailView,), det_attrs)
    return lst, det


def _bulk(model_cls, perm=None):
    attrs = {"model": model_cls}
    if perm:
        attrs["permission_map"] = {"POST": f"{perm}.manage"}
    return type(f"{model_cls.__name__}BulkDeleteView", (_ConfigBulkDeleteView,), attrs)
```

f) Appels `_pair` — passer `perm` pour les ressources à code dédié :
- `Town` → ajouter `, perm="transport.city"`
- `FareClass` → ajouter `, perm="transport.fareclass"`
- (TimeSlot, ConsignmentNature, LoyaltyRule : ne rien changer → héritent `transport.config`.)

g) Appels `_bulk` — passer `perm` :
- `_bulk(Town)` → `_bulk(Town, perm="transport.city")`
- `_bulk(FareClass)` → `_bulk(FareClass, perm="transport.fareclass")`
- `_bulk(ServicePoint)` → `_bulk(ServicePoint, perm="transport.terminal")`
- (les autres `_bulk(...)` inchangés → `transport.config`.)

- [ ] **Step 6: Annoter les vues dédiées (script)**

Depuis `.../backend` :
```python
../env/bin/python - <<'PYEOF'
import re
path = "apps/voyages_config/config_api/views.py"
src = open(path, encoding="utf-8").read()
MAP = {
 "ServicePointListView":"transport.terminal","ServicePointDetailView":"transport.terminal",
 "RouteListView":"transport.route","RouteDetailView":"transport.route",
 "RouteStopListView":"transport.route","RouteStopDetailView":"transport.route",
 "SeatingPlanSeatsView":"transport.config",
 "VehicleSeatingAssignmentListView":"transport.config","VehicleSeatingAssignmentDetailView":"transport.config",
 "ServicePatternListView":"transport.config","ServicePatternDetailView":"transport.config",
 "VoyagesSettingsView":"transport.config","TicketTemplateView":"transport.config",
 "TicketTemplateResetView":"transport.config","TicketTemplatePreviewView":"transport.config",
}
def pmap(code):
    return ('{"GET": "%s.view", "POST": "%s.manage", "PATCH": "%s.manage", '
            '"PUT": "%s.manage", "DELETE": "%s.manage"}' % (code, code, code, code, code))
lines = src.split("\n")
idx = {}
for i, ln in enumerate(lines):
    m = re.match(r"class (\w+)\(", ln)
    if m: idx[m.group(1)] = i
done, missing = 0, []
# traiter en ordre décroissant pour ne pas décaler les indices lors des insertions
for name in sorted(MAP, key=lambda n: idx.get(n, -1), reverse=True):
    code = MAP[name]
    if name not in idx: missing.append(name); continue
    start = idx[name]
    others = [idx[n] for n in idx if idx[n] > start]
    end = min(others) if others else len(lines)
    indent = "    "
    replaced = False
    for j in range(start, end):
        if lines[j].strip() == "permission_classes = [IsInstitutionAdmin]":
            indent = lines[j][:len(lines[j]) - len(lines[j].lstrip())]
            lines[j] = (f"{indent}permission_classes = [IsAuthenticated, HasModulePermission]\n"
                        f"{indent}permission_map = {pmap(code)}")
            replaced = True; done += 1; break
    if not replaced:
        # pas de ligne permission_classes (hérite d'une base _Config*) → insérer après la def de classe
        lines.insert(start + 1,
            f"{indent}permission_classes = [IsAuthenticated, HasModulePermission]\n"
            f"{indent}permission_map = {pmap(code)}")
        done += 1
open(path, "w", encoding="utf-8").write("\n".join(lines))
print("annotated:", done, "| missing:", missing)
PYEOF
```
Attendu : `annotated: 15 | missing: []`. Puis vérifier `grep -c "permission_classes = \[IsInstitutionAdmin\]" apps/voyages_config/config_api/views.py` → `0`.

- [ ] **Step 7: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/voyages_config/tests.py -q && ../env/bin/python manage.py check`
Expected: tests PASS + check OK.

- [ ] **Step 8: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0006_transport_permissions_seed.py backend/apps/voyages_config/config_api/views.py backend/apps/voyages_config/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur voyages_config + seed transport.* (+transport.config.*)"
```

---

### Task 2: Frontend — menu Config Voyages

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 1: Ajouter `permission` aux entrées (sauf « Tarifs »)**

Remplacer les sous-entrées de la section « Config Voyages » par (ordre inchangé) :
```typescript
            { menuValue: 'Villes',              route: routes.vcTowns,              base: 'towns',                permission: 'transport.city.view' },
            { menuValue: 'Points de service',   route: routes.vcServicePoints,      base: 'service-points',       permission: 'transport.terminal.view' },
            { menuValue: 'Trajets',             route: routes.vcRoutes,             base: 'routes',               permission: 'transport.route.view' },
            { menuValue: 'Plans de bus',        route: routes.vcSeatingPlans,       base: 'seating-plans',        permission: 'transport.config.view' },
            { menuValue: 'Affectations de plan',route: routes.vcVehicleAssignments, base: 'vehicle-assignments',  permission: 'transport.config.view' },
            { menuValue: 'Catégories tarifaires',route: routes.vcFareClasses,       base: 'fare-classes',         permission: 'transport.fareclass.view' },
            { menuValue: 'Plages horaires',     route: routes.vcTimeSlots,          base: 'time-slots',           permission: 'transport.config.view' },
            { menuValue: 'Natures de colis',    route: routes.vcConsignmentNatures, base: 'consignment-natures',  permission: 'transport.config.view' },
            { menuValue: 'Types de colis',      route: routes.vcConsignmentTypes,   base: 'consignment-types',    permission: 'transport.config.view' },
            { menuValue: 'Planifications',      route: routes.vcServicePatterns,    base: 'service-patterns',     permission: 'transport.config.view' },
            { menuValue: 'Fidélité',            route: routes.vcLoyalty,            base: 'loyalty-rules',        permission: 'transport.config.view' },
            { menuValue: 'Tarifs',              route: routes.vcFares,              base: 'fares'                },
            { menuValue: 'Config billets',      route: routes.vcTicketTemplate,     base: 'ticket-template',      permission: 'transport.config.view' },
            { menuValue: 'Paramètres Voyages',  route: routes.vcSettings,           base: 'settings',             permission: 'transport.config.view' },
```

- [ ] **Step 2: Build + commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): entrees de menu Config Voyages gatees (transport.*)"
```
Expected: build OK.

---

### Task 3: Frontend — boutons des pages Config Voyages

**Files:**
- Modify: `angular/src/_api/pages/voyages-config/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/voyages-config/**/*.component.html` (boutons)

- [ ] **Step 1: Importer la directive (skip wrapper + page `fares`)**

Depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, os, re
imp = "import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';"
done=0
for f in glob.glob("src/_api/pages/voyages-config/**/*.component.ts", recursive=True):
    d = os.path.basename(os.path.dirname(f))
    if d in ("voyages-config", "fares"):   # wrapper + page Tarifs (module pricing)
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

- [ ] **Step 2: Poser `*hasPermission` par page (code `.manage` de la ressource)**

Depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, os
# dossier de page -> code manage
FOLDER_CODE = {
 "towns":"transport.city.manage",
 "service-points":"transport.terminal.manage",
 "routes":"transport.route.manage",
 "fare-classes":"transport.fareclass.manage",
}
DEFAULT = "transport.config.manage"
HANDLERS = ("openCreate","openEdit","delete","bulkDelete","addStop","removeStop","save","reset")
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
for f in glob.glob("src/_api/pages/voyages-config/**/*.component.html", recursive=True):
    folder = os.path.basename(os.path.dirname(f))
    if folder == "fares":   # module Tarifs, hors périmètre
        continue
    code = FOLDER_CODE.get(folder, DEFAULT)
    s=open(f,encoding="utf-8").read(); fc=0
    for h in HANDLERS:
        s,c=inject(s,h,code); fc+=c
    if fc: open(f,"w",encoding="utf-8").write(s); total+=fc
print("buttons gated:", total)
PYEOF
```
Puis vérifier les boutons restés non gatés (élément avec `*ngIf`) et les envelopper à la main dans
`<ng-container *hasPermission="'CODE'">…</ng-container>` :
```
grep -rnE '\(click\)="(openCreate|openEdit|delete|bulkDelete|addStop|removeStop|save|reset)\(' src/_api/pages/voyages-config/*/*.html | grep -v hasPermission | grep -v /fares/
```

- [ ] **Step 3: Build + commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons des pages Config Voyages"
```
Expected: build OK.

---

### Task 4: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check && ../env/bin/python -m pytest apps/voyages_config/tests.py apps/admin_rbac/tests.py -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: check OK ; tests PASS ; build OK.

- [ ] **Step 2: Non-régression + 0 IsInstitutionAdmin**

Run:
```
grep -c "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_config/config_api/views.py
grep -rln "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_consignment backend/apps/voyages_pricing | wc -l
```
Expected : `0` pour voyages_config ; ≥1 pour consignment/pricing (non migrés).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 0 (seed `transport.*` + `transport.config.*`) → Task 1 Step 1. ✅
- Composant 1 (bases + factory `perm` + vues dédiées) → Task 1 Steps 5-6. ✅
- Composant 2 (menu, hors « Tarifs ») → Task 2. ✅
- Composant 3 (boutons par page) → Task 3. ✅
- Tests city (factory dédié) + config (groupé) + non-régression → Task 1, Task 4. ✅

**Placeholder scan :** aucun TBD/TODO ; migration, factory et scripts complets ; mapping ressource→code exact.

**Type consistency :** codes `transport.*`/`transport.config.*` identiques entre seed (Task 1), bases/factory/vues
(Task 1), menu (Task 2), boutons (Task 3). `_perm_maps(perm)` produit les dicts cohérents. Helper `_make_staff`
= patron des tranches précédentes. Directive `*hasPermission` et import identiques.
