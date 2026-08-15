# RBAC — Tranche 3, module Réservations (`voyages_booking`) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Appliquer le RBAC au module Réservations (`voyages_booking`) via les codes `ticketing.*` : seed des codes, enforcement backend, gating menu/boutons.

**Architecture:** Réutilise le mécanisme existant (`HasModulePermission` + `permission_map`, directive `*hasPermission`, filtrage du menu). Ajoute une migration de seed pour les codes `ticketing.*` (absents des migrations).

**Tech Stack:** Django 5.1 + DRF, Angular (standalone), pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-rbac-reservations-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-reservations` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- Réutiliser les codes `ticketing.*`. Les autres modules restent en `IsInstitutionAdmin`.
- ⚠️ Disque serré — garder de l'espace pour `ng build`.

**Rappels codebase (vérifiés) :**
- `voyages_booking/config_api/views.py` : import `from apps.core.permissions import IsInstitutionAdmin` (ligne 2). 17 vues, toutes en `permission_classes = [IsInstitutionAdmin]`.
- Dernière migration `admin_rbac` : `0004_voyage_permissions_seed`.
- Menu : `sidebar.service.ts`, section « Réservations » (base `voyages-booking`) → sous-entrées `vbPassengers` (base `passengers`), `vbBookings` (`bookings`), `vbBookingNew` (`bookings/new`), `vbOpenReturns` (`open-returns`).
- Directive : import depuis une page voyages-booking : `../../../../app/shared/directives/has-permission.directive`.
- Pages : `_api/pages/voyages-booking/{passengers,bookings,new-booking,booking-detail,open-returns}` (+ wrapper `voyages-booking.component.ts`).
- `apps/voyages_booking/tests.py` existe (fichier) → y ajouter les tests RBAC.

---

### Task 1: Backend — seed `ticketing.*` + `HasModulePermission` sur `voyages_booking`

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0005_ticketing_permissions_seed.py`
- Modify: `backend/apps/voyages_booking/config_api/views.py`
- Modify: `backend/apps/voyages_booking/tests.py` (append)

**Interfaces:**
- Produces: 15 permissions `ticketing.*` (module `ticketing`) ; vues `voyages_booking` gatées.

- [ ] **Step 1: Créer la migration de seed**

Créer `backend/apps/admin_rbac/migrations/0005_ticketing_permissions_seed.py` :

```python
"""Data migration — seed des permissions Billetterie/Réservations (module `ticketing`).
Absentes des migrations (présentes seulement en dev) → base fraîche/test vide."""
from django.db import migrations

PERMS = [
    ("ticketing.booking.board",  "Embarquer un passager",                 "update"),
    ("ticketing.booking.cancel", "Annuler une réservation",               "admin"),
    ("ticketing.booking.confirm","Confirmer une réservation",             "update"),
    ("ticketing.booking.create", "Créer une réservation",                 "create"),
    ("ticketing.booking.noshow", "Marquer une absence (no-show)",         "update"),
    ("ticketing.booking.update", "Modifier une réservation",              "update"),
    ("ticketing.booking.view",   "Consulter les réservations",            "view"),
    ("ticketing.customer.manage","Gérer les clients",                     "update"),
    ("ticketing.customer.view",  "Consulter les clients",                 "view"),
    ("ticketing.dashboard.view", "Accéder au tableau de bord billetterie","view"),
    ("ticketing.luggage.manage", "Gérer les bagages",                     "update"),
    ("ticketing.luggage.view",   "Consulter les bagages",                 "view"),
    ("ticketing.scan",           "Scanner un billet pour embarquement",   "update"),
    ("ticketing.ticket.print",   "Imprimer un billet (PDF)",              "export"),
    ("ticketing.ticket.view",    "Consulter les billets",                 "view"),
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
    dependencies = [("admin_rbac", "0004_voyage_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire les tests (échouent)**

Append dans `backend/apps/voyages_booking/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_booking.config_api.views import BookingListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Resa RBAC Co", admin_email="resaadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="resaadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="resastaff@x.com",
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
def test_booking_view_permission_gating():
    company, admin, staff = _make_staff(["ticketing.booking.view"])
    assert _status(BookingListView, "get", staff) != 403
    assert _status(BookingListView, "post", staff) == 403
    assert _status(BookingListView, "get", admin) != 403
    assert _status(BookingListView, "post", admin) != 403


@pytest.mark.django_db
def test_booking_create_permission():
    company, admin, staff = _make_staff(["ticketing.booking.view", "ticketing.booking.create"])
    assert _status(BookingListView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_booking_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(BookingListView, "get", staff) == 403
```

- [ ] **Step 3: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_booking/tests.py -k "permission or denied or booking_create" -v`
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
path = "apps/voyages_booking/config_api/views.py"
src = open(path, encoding="utf-8").read()
src = src.replace(
  "from apps.core.permissions import IsInstitutionAdmin",
  "from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission", 1)
MAP = {
 "PassengerListView": {"GET":"ticketing.customer.view","POST":"ticketing.customer.manage"},
 "PassengerDetailView": {"GET":"ticketing.customer.view","PATCH":"ticketing.customer.manage","PUT":"ticketing.customer.manage","DELETE":"ticketing.customer.manage"},
 "BookableTripsView": {"GET":"ticketing.booking.view"},
 "TripSeatMapView": {"GET":"ticketing.booking.view"},
 "TripDestinationsView": {"GET":"ticketing.booking.view"},
 "BookingListView": {"GET":"ticketing.booking.view","POST":"ticketing.booking.create"},
 "OpenReturnsView": {"GET":"ticketing.booking.view"},
 "BookingAssignReturnView": {"POST":"ticketing.booking.update"},
 "BookingDetailView": {"GET":"ticketing.booking.view","DELETE":"ticketing.booking.cancel"},
 "BookingCancelView": {"POST":"ticketing.booking.cancel"},
 "BookingNoShowView": {"POST":"ticketing.booking.noshow"},
 "TicketBoardView": {"POST":"ticketing.booking.board"},
 "TripBoardAllView": {"POST":"ticketing.booking.board"},
 "PassengerLoyaltyView": {"GET":"ticketing.customer.view"},
 "TripRoadmapView": {"GET":"ticketing.booking.view"},
 "BookingRenderTicketsView": {"GET":"ticketing.ticket.view"},
 "BookingPrintView": {"GET":"ticketing.ticket.print"},
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
Attendu : `annotated: 17 | missing: []`. Puis vérifier qu'il ne reste aucun `IsInstitutionAdmin` :
`grep -c "permission_classes = \[IsInstitutionAdmin\]" apps/voyages_booking/config_api/views.py` → `0`.

- [ ] **Step 5: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/voyages_booking/tests.py -q && ../env/bin/python manage.py check`
Expected: tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0005_ticketing_permissions_seed.py backend/apps/voyages_booking/config_api/views.py backend/apps/voyages_booking/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur voyages_booking + seed des codes ticketing.*"
```

---

### Task 2: Frontend — entrées de menu Réservations

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 1: Ajouter `permission` aux 4 sous-entrées**

Remplacer le bloc `subMenus` de la section « Réservations » par :
```typescript
            { menuValue: 'Passagers',            route: routes.vbPassengers, base: 'passengers',   permission: 'ticketing.customer.view' },
            { menuValue: 'Réservations',         route: routes.vbBookings,   base: 'bookings',     permission: 'ticketing.booking.view' },
            { menuValue: 'Nouvelle réservation', route: routes.vbBookingNew, base: 'bookings/new', permission: 'ticketing.booking.create' },
            { menuValue: 'Retours à traiter',    route: routes.vbOpenReturns, base: 'open-returns', permission: 'ticketing.booking.view' },
```

- [ ] **Step 2: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 3: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): entrees de menu Reservations gatees (ticketing.*)"
```

---

### Task 3: Frontend — boutons des pages Réservations

**Files:**
- Modify: `angular/src/_api/pages/voyages-booking/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/voyages-booking/**/*.component.html` (boutons)

**Interfaces:**
- Consumes: `HasPermissionDirective`.

- [ ] **Step 1: Importer la directive (skip le wrapper `voyages-booking.component.ts`)**

Script depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob, os, re
imp = "import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';"
done=0
for f in glob.glob("src/_api/pages/voyages-booking/**/*.component.ts", recursive=True):
    if os.path.basename(os.path.dirname(f)) == "voyages-booking":
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

- [ ] **Step 2: Poser `*hasPermission` sur les boutons**

Script depuis `.../ERP-master/angular` :
```python
python3 - <<'PYEOF'
import glob
HMAP = {
 "openCreate":"ticketing.customer.manage","openEdit":"ticketing.customer.manage","delete":"ticketing.customer.manage",
 "newBooking":"ticketing.booking.create","submit":"ticketing.booking.create","toggleSeat":"ticketing.booking.create",
 "cancel":"ticketing.booking.cancel","noShow":"ticketing.booking.noshow","board":"ticketing.booking.board",
 "pick":"ticketing.booking.update","goAssignReturn":"ticketing.booking.update","assign":"ticketing.booking.update",
 "printTickets":"ticketing.ticket.print",
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
for f in glob.glob("src/_api/pages/voyages-booking/**/*.component.html", recursive=True):
    s=open(f,encoding="utf-8").read(); fc=0
    for h,code in HMAP.items():
        s,c=inject(s,h,code); fc+=c
    if fc: open(f,"w",encoding="utf-8").write(s); total+=fc
print("buttons gated:", total)
PYEOF
```
Puis vérifier les boutons restés non gatés (élément portant déjà `*ngIf`) et les envelopper à la main
dans `<ng-container *hasPermission="'CODE'">…</ng-container>` (patron Flotte) :
```
grep -rnE '\(click\)="(openCreate|openEdit|delete|newBooking|submit|toggleSeat|cancel|noShow|board|pick|goAssignReturn|assign|printTickets)\(' src/_api/pages/voyages-booking/*/*.html | grep -v hasPermission
```

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-booking
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons des pages Reservations"
```

---

### Task 4: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check && ../env/bin/python -m pytest apps/voyages_booking/tests.py apps/admin_rbac/tests.py -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: check OK ; tests PASS ; build OK.

- [ ] **Step 2: Non-régression (modules non migrés)**

Run: `grep -rln "permission_classes = \[IsInstitutionAdmin\]" backend/apps/voyages_config backend/apps/voyages_consignment backend/apps/voyages_pricing | head`
Expected: présent (ces modules ne sont pas migrés dans cette tranche).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 0 (seed `ticketing.*`) → Task 1 Step 1. ✅
- Composant 1 (HasModulePermission sur les 17 vues) → Task 1 Step 4. ✅
- Composant 2 (menu) → Task 2. ✅
- Composant 3 (boutons) → Task 3. ✅
- Tests staff/admin + non-régression → Task 1, Task 4. ✅

**Placeholder scan :** aucun TBD/TODO ; scripts et migration complets ; mapping exact des 17 vues.

**Type consistency :** codes `ticketing.*` identiques entre seed (Task 1), vues (Task 1), menu (Task 2),
boutons (Task 3). `permission_map` (dict par méthode) cohérent. Helper `_make_staff(codes)` = patron
Flotte/Voyages. Directive `*hasPermission` et son import identiques aux tranches précédentes.
