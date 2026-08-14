# RBAC — Application des permissions (tranche 1 : pilote Flotte) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre les permissions RBAC réellement appliquées côté backend sur le module Flotte : seeder les codes manquants, ajouter une classe `HasModulePermission`, et l'appliquer à toutes les vues Flotte.

**Architecture:** Une classe DRF `HasModulePermission` (super-admin + admin d'institution bypass ; sinon vérifie le code requis de la vue via `get_user_permissions`). Chaque vue Flotte déclare un `permission_map` par méthode HTTP. Les autres modules gardent `IsInstitutionAdmin` (inchangés).

**Tech Stack:** Django 5.1 + DRF, pytest (`config.settings.local`, `@pytest.mark.django_db`).

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-enforcement` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- Python : `.../ERP-master/env/bin/python`, depuis `.../ERP-master/backend`.
- Hiérarchie : super-admin = `*` ; admin d'institution (`is_institution_admin`) = bypass ; personnel = rôles/profils.
- Déploiement incrémental : seules les vues Flotte migrent ; le reste garde `IsInstitutionAdmin`.
- Vérif : `manage.py check`, migration, pytest. Backend only (pas de build front).

**Rappels codebase (vérifiés) :**
- `apps.admin_rbac.selectors.user_role_selectors.get_user_permissions(user, company_id) -> set` ( `{"*"}` si superuser).
- `apps.admin_rbac.services.create_role(*, name, description="", company_id=None, permission_ids=None, created_by=None) -> Role`.
- Modèles : `Permission(code, name, module→AppModule, category)`, `Role(permissions M2M via RolePermission)`, `UserRole(user, role, company)`, `AppModule(code)` (code `fleet` existe).
- `apps.users.services.user_services.create_user(*, created_by, company, email, first_name, last_name, is_institution_admin, default_agency_id, agency_ids) -> (user, temp_password)`.
- `apps.system_config.services.create_company(*, name, admin_email, admin_first_name, admin_last_name, …) -> (company, setup)` avec `setup["hq_agency_id"]`.
- `fleet/views.py` importe déjà `from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin`.
- Ni `apps/fleet` ni `apps/admin_rbac` n'ont de fichier de tests → créer `tests.py`. `apps/core` a un package `tests/`.

---

### Task 1: Seed des permissions Flotte manquantes

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0003_fleet_permissions_seed.py`
- Create: `backend/apps/admin_rbac/tests.py`

**Interfaces:**
- Produces: 10 `Permission` (codes `fleet.parking.*`, `fleet.supplier.*`, `fleet.contract.*`, `fleet.recurring_cost.*`, `fleet.config.*`) rattachées à l'`AppModule` `fleet`.

- [ ] **Step 1: Écrire le test (échoue)**

Créer `backend/apps/admin_rbac/tests.py` :

```python
import pytest
from apps.admin_rbac.models import Permission


@pytest.mark.django_db
def test_fleet_missing_permissions_seeded():
    codes = [
        "fleet.parking.view", "fleet.parking.manage",
        "fleet.supplier.view", "fleet.supplier.manage",
        "fleet.contract.view", "fleet.contract.manage",
        "fleet.recurring_cost.view", "fleet.recurring_cost.manage",
        "fleet.config.view", "fleet.config.manage",
    ]
    found = set(Permission.objects.filter(code__in=codes).values_list("code", flat=True))
    assert set(codes) == found, set(codes) - found
    for p in Permission.objects.filter(code__in=codes):
        assert p.module and p.module.code == "fleet"
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/admin_rbac/tests.py -v`
Expected: FAIL (codes manquants).

- [ ] **Step 3: Écrire la data migration**

Créer `backend/apps/admin_rbac/migrations/0003_fleet_permissions_seed.py` :

```python
"""Data migration — seed des permissions Flotte manquantes (parking, fournisseurs,
contrats, coûts récurrents, config) pour couvrir tout le module par le RBAC."""
from django.db import migrations

PERMS = [
    ("fleet.parking.view",         "Consulter les parkings",              "view"),
    ("fleet.parking.manage",       "Gérer les parkings",                  "update"),
    ("fleet.supplier.view",        "Consulter les fournisseurs",          "view"),
    ("fleet.supplier.manage",      "Gérer les fournisseurs",              "update"),
    ("fleet.contract.view",        "Consulter les contrats",              "view"),
    ("fleet.contract.manage",      "Gérer les contrats",                  "update"),
    ("fleet.recurring_cost.view",  "Consulter les coûts récurrents",      "view"),
    ("fleet.recurring_cost.manage","Gérer les coûts récurrents",          "update"),
    ("fleet.config.view",          "Consulter la configuration flotte",   "view"),
    ("fleet.config.manage",        "Gérer la configuration flotte",       "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(
        code="fleet", defaults={"name": "Flotte"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0002_scig_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 4: Migrer + lancer le test**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py migrate admin_rbac
../env/bin/python -m pytest apps/admin_rbac/tests.py -v
```
Expected: migration OK ; test PASS.
(Si `AppModule` a d'autres champs obligatoires sans défaut, ajuster le `defaults=` du `get_or_create` ; l'AppModule `fleet` existe déjà donc `get_or_create` le retrouve sans créer.)

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0003_fleet_permissions_seed.py backend/apps/admin_rbac/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): seed des permissions flotte manquantes (parking/fournisseurs/contrats/couts/config)"
```

---

### Task 2: Classe `HasModulePermission`

**Files:**
- Modify: `backend/apps/core/permissions.py`
- Create: `backend/apps/core/tests/test_permissions.py`

**Interfaces:**
- Consumes: `get_user_permissions` (existant), permissions seedées (Task 1 + existantes).
- Produces: `HasModulePermission(BasePermission)` lisant `view.permission_map[method]` ou `view.required_permission`.

- [ ] **Step 1: Écrire le test (échoue)**

Créer `backend/apps/core/tests/test_permissions.py` :

```python
import pytest
from types import SimpleNamespace
from apps.core.permissions import HasModulePermission
from apps.authentication.models import User


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="RBAC Co", admin_email="rbadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rbadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="rbstaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


class _StubView:
    permission_map = {"GET": "fleet.vehicle.view", "POST": "fleet.vehicle.create"}


@pytest.mark.django_db
def test_has_module_permission_scopes_by_code():
    perm = HasModulePermission()
    company, admin, staff = _make_staff(["fleet.vehicle.view"])

    def req(user, method):
        return SimpleNamespace(user=user, method=method)

    # staff : possède .view -> GET ok, mais pas .create -> POST refusé
    assert perm.has_permission(req(staff, "GET"), _StubView()) is True
    assert perm.has_permission(req(staff, "POST"), _StubView()) is False
    # admin d'institution -> bypass
    assert perm.has_permission(req(admin, "POST"), _StubView()) is True
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/core/tests/test_permissions.py -v`
Expected: FAIL (`cannot import name 'HasModulePermission'`).

- [ ] **Step 3: Implémenter la classe**

Dans `backend/apps/core/permissions.py`, ajouter à la fin :

```python
class HasModulePermission(BasePermission):
    """Autorise si super-admin, admin d'institution (bypass), ou si l'utilisateur possède
    le code de permission requis par la vue (view.permission_map[method] ou view.required_permission)."""
    message = _("Permission insuffisante pour cette action.")

    def has_permission(self, request, view):
        u = request.user
        if not (u and u.is_authenticated):
            return False
        if u.is_staff and u.is_superuser:
            return True
        if getattr(u, "is_institution_admin", False):
            return True
        code = (getattr(view, "permission_map", {}) or {}).get(request.method) \
            or getattr(view, "required_permission", None)
        if not code:
            return True
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        company_id = getattr(getattr(u, "company", None), "id", None)
        perms = get_user_permissions(u, company_id)
        return "*" in perms or code in perms
```

- [ ] **Step 4: Lancer le test (doit passer)**

Run: `../env/bin/python -m pytest apps/core/tests/test_permissions.py -v`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/core/permissions.py backend/apps/core/tests/test_permissions.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): classe HasModulePermission (application des permissions)"
```

---

### Task 3: Appliquer aux vues Flotte opérationnelles (`fleet/views.py`)

**Files:**
- Modify: `backend/apps/fleet/views.py`
- Create: `backend/apps/fleet/tests.py`

**Interfaces:**
- Consumes: `HasModulePermission` (Task 2), codes seedés (Task 1 + existants).

- [ ] **Step 1: Écrire le test d'intégration (échoue)**

Créer `backend/apps/fleet/tests.py` :

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.fleet.views import VehicleListView, VehicleBrandListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Fleet RBAC Co", admin_email="fradmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="fradmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="frstaff@x.com",
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
def test_vehicle_view_permission_gating():
    company, admin, staff = _make_staff(["fleet.vehicle.view"])
    # staff avec .view : GET autorisé (pas 403), POST refusé (403)
    assert _status(VehicleListView, "get", staff) != 403
    assert _status(VehicleListView, "post", staff) == 403
    # admin d'institution : GET et POST non bloqués par les permissions
    assert _status(VehicleListView, "get", admin) != 403
    assert _status(VehicleListView, "post", admin) != 403


@pytest.mark.django_db
def test_manage_resource_gating():
    company, admin, staff = _make_staff(["fleet.brand.view"])
    assert _status(VehicleBrandListView, "get", staff) != 403   # a .view
    assert _status(VehicleBrandListView, "post", staff) == 403  # pas .manage


@pytest.mark.django_db
def test_staff_without_fleet_perm_denied():
    company, admin, staff = _make_staff([])   # aucune permission
    assert _status(VehicleListView, "get", staff) == 403
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/fleet/tests.py -v`
Expected: FAIL (les vues sont encore en `IsInstitutionAdmin` → staff reçoit 403 partout, donc `GET != 403` échoue).

- [ ] **Step 3: Importer les classes de permission**

Dans `backend/apps/fleet/views.py`, remplacer la ligne
`from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin`
par :
`from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin, IsAuthenticated, HasModulePermission`

- [ ] **Step 4: Annoter chaque vue opérationnelle**

Pour **chaque** classe de vue ci-dessous, remplacer `permission_classes = [IsInstitutionAdmin]` par
`permission_classes = [IsAuthenticated, HasModulePermission]` **et ajouter** l'attribut `permission_map`
indiqué (juste sous `permission_classes`). Les clés de méthode superflues sont sans effet.

| Vue | `permission_map` |
|---|---|
| `VehicleListView` | `{"GET": "fleet.vehicle.view", "POST": "fleet.vehicle.create"}` |
| `VehicleDetailView` | `{"GET": "fleet.vehicle.view", "PATCH": "fleet.vehicle.update", "PUT": "fleet.vehicle.update", "DELETE": "fleet.vehicle.delete"}` |
| `VehicleOdometerView` | `{"GET": "fleet.vehicle.view", "POST": "fleet.vehicle.update"}` |
| `VehicleStatsView` | `{"GET": "fleet.vehicle.view"}` |
| `FleetStatsView` | `{"GET": "fleet.dashboard.view"}` |
| `FleetAlertsView` | `{"GET": "fleet.dashboard.view"}` |
| `VehicleBrandListView` | `{"GET": "fleet.brand.view", "POST": "fleet.brand.manage"}` |
| `VehicleBrandDetailView` | `{"GET": "fleet.brand.view", "PATCH": "fleet.brand.manage", "PUT": "fleet.brand.manage", "DELETE": "fleet.brand.manage"}` |
| `VehicleModelListView` | `{"GET": "fleet.model.view", "POST": "fleet.model.manage"}` |
| `VehicleModelDetailView` | `{"GET": "fleet.model.view", "PATCH": "fleet.model.manage", "PUT": "fleet.model.manage", "DELETE": "fleet.model.manage"}` |
| `ExternalDriverListView` | `{"GET": "fleet.driver.view", "POST": "fleet.driver.manage"}` |
| `ExternalDriverDetailView` | `{"GET": "fleet.driver.view", "PATCH": "fleet.driver.manage", "PUT": "fleet.driver.manage", "DELETE": "fleet.driver.manage"}` |
| `VehicleFuelLogListView` | `{"GET": "fleet.fuel.view", "POST": "fleet.fuel.manage"}` |
| `FuelLogDetailView` | `{"GET": "fleet.fuel.view", "PATCH": "fleet.fuel.manage", "PUT": "fleet.fuel.manage", "DELETE": "fleet.fuel.manage"}` |
| `ServiceListView` | `{"GET": "fleet.maintenance.view", "POST": "fleet.maintenance.manage"}` |
| `VehicleServiceListView` | `{"GET": "fleet.maintenance.view"}` |
| `ServiceDetailView` | `{"GET": "fleet.maintenance.view", "PATCH": "fleet.maintenance.manage", "PUT": "fleet.maintenance.manage", "DELETE": "fleet.maintenance.manage"}` |
| `ServiceStartView` | `{"POST": "fleet.maintenance.manage"}` |
| `ServiceCompleteView` | `{"POST": "fleet.maintenance.manage"}` |
| `ServiceCancelView` | `{"POST": "fleet.maintenance.manage"}` |
| `ServiceAttachmentListView` | `{"GET": "fleet.maintenance.view", "POST": "fleet.maintenance.manage"}` |
| `ServiceAttachmentDetailView` | `{"GET": "fleet.maintenance.view", "DELETE": "fleet.maintenance.manage"}` |
| `VehicleDocumentListView` | `{"GET": "fleet.document.view", "POST": "fleet.document.manage"}` |
| `VehicleDocumentDetailView` | `{"GET": "fleet.document.view", "PATCH": "fleet.document.manage", "PUT": "fleet.document.manage", "DELETE": "fleet.document.manage"}` |
| `AssignmentListView` | `{"GET": "fleet.assignment.view", "POST": "fleet.assignment.manage"}` |
| `VehicleAssignmentListView` | `{"GET": "fleet.assignment.view"}` |
| `AssignmentDetailView` | `{"GET": "fleet.assignment.view", "PATCH": "fleet.assignment.manage", "PUT": "fleet.assignment.manage", "DELETE": "fleet.assignment.manage"}` |
| `AssignmentStartView` | `{"POST": "fleet.assignment.manage"}` |
| `AssignmentCompleteView` | `{"POST": "fleet.assignment.manage"}` |
| `AssignmentCancelView` | `{"POST": "fleet.assignment.manage"}` |
| `AccidentListView` | `{"GET": "fleet.accident.view", "POST": "fleet.accident.manage"}` |
| `VehicleAccidentListView` | `{"GET": "fleet.accident.view"}` |
| `AccidentDetailView` | `{"GET": "fleet.accident.view", "PATCH": "fleet.accident.manage", "PUT": "fleet.accident.manage", "DELETE": "fleet.accident.manage"}` |
| `AccidentCloseView` | `{"POST": "fleet.accident.manage"}` |
| `AccidentStatusView` | `{"POST": "fleet.accident.manage", "PATCH": "fleet.accident.manage"}` |
| `ParkingListView` | `{"GET": "fleet.parking.view", "POST": "fleet.parking.manage"}` |
| `ParkingDetailView` | `{"GET": "fleet.parking.view", "PATCH": "fleet.parking.manage", "PUT": "fleet.parking.manage", "DELETE": "fleet.parking.manage"}` |
| `SupplierListView` | `{"GET": "fleet.supplier.view", "POST": "fleet.supplier.manage"}` |
| `SupplierDetailView` | `{"GET": "fleet.supplier.view", "PATCH": "fleet.supplier.manage", "PUT": "fleet.supplier.manage", "DELETE": "fleet.supplier.manage"}` |
| `ContractListView` | `{"GET": "fleet.contract.view", "POST": "fleet.contract.manage"}` |
| `VehicleContractListView` | `{"GET": "fleet.contract.view"}` |
| `ContractDetailView` | `{"GET": "fleet.contract.view", "PATCH": "fleet.contract.manage", "PUT": "fleet.contract.manage", "DELETE": "fleet.contract.manage"}` |
| `RecurringCostListView` | `{"GET": "fleet.recurring_cost.view", "POST": "fleet.recurring_cost.manage"}` |
| `RecurringCostDetailView` | `{"GET": "fleet.recurring_cost.view", "PATCH": "fleet.recurring_cost.manage", "PUT": "fleet.recurring_cost.manage", "DELETE": "fleet.recurring_cost.manage"}` |

Exemple d'édition (VehicleListView) :

```python
class VehicleListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "fleet.vehicle.view", "POST": "fleet.vehicle.create"}
```

- [ ] **Step 5: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/fleet/tests.py -v && ../env/bin/python manage.py check`
Expected: 3 tests PASS + check OK (warning staticfiles toléré).

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/fleet/views.py backend/apps/fleet/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur les vues flotte operationnelles"
```

---

### Task 4: Appliquer aux vues de config Flotte (`config_api`)

**Files:**
- Modify: `backend/apps/fleet/config_api/views.py`
- Modify: `backend/apps/fleet/tests.py` (append)

**Interfaces:**
- Consumes: `HasModulePermission` (Task 2), `fleet.config.*` (Task 1).

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/fleet/tests.py` :

```python
from apps.fleet.config_api.views import UnitListView


@pytest.mark.django_db
def test_fleet_config_gating():
    company, admin, staff = _make_staff(["fleet.config.view"])
    assert _status(UnitListView, "get", staff) != 403    # a fleet.config.view
    assert _status(UnitListView, "post", staff) == 403   # pas fleet.config.manage
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/fleet/tests.py::test_fleet_config_gating -v`
Expected: FAIL (encore `IsInstitutionAdmin` → staff 403 au GET).

- [ ] **Step 3: Annoter les vues de base config**

Dans `backend/apps/fleet/config_api/views.py` : en tête, s'assurer de l'import
`from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission`
(ajouter `IsAuthenticated, HasModulePermission` à l'import existant). Puis, sur les 3 classes de base,
remplacer `permission_classes = [IsInstitutionAdmin]` et ajouter le `permission_map` :

```python
class _ConfigListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "fleet.config.view", "POST": "fleet.config.manage"}
    # … reste inchangé …


class _ConfigDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "fleet.config.view", "PATCH": "fleet.config.manage",
                      "PUT": "fleet.config.manage", "DELETE": "fleet.config.manage"}
    # … reste inchangé …


class _ConfigBulkDeleteView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "fleet.config.manage"}
    # … reste inchangé …
```

`UnitListView`/`UnitDetailView` héritent des bases → aucune annotation supplémentaire nécessaire.

- [ ] **Step 4: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/fleet/tests.py -v && ../env/bin/python manage.py check`
Expected: tous PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/fleet/config_api/views.py backend/apps/fleet/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): application des permissions sur la config flotte"
```

---

### Task 5: Vérification finale + fusion

- [ ] **Step 1: Suite complète RBAC/fleet + check**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py check
../env/bin/python -m pytest apps/admin_rbac/tests.py apps/core/tests/test_permissions.py apps/fleet/tests.py -v
```
Expected: check OK ; tous les tests PASS.

- [ ] **Step 2: Non-régression — une vue non-fleet reste en IsInstitutionAdmin**

Run: `grep -rn "permission_classes = \[IsInstitutionAdmin\]" apps/voyages_booking apps/voyages_consignment apps/voyages_config apps/voyages_trips | head`
Expected: présent (ces modules ne sont pas migrés dans cette tranche).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Seed des 10 codes fleet manquants → Task 1. ✅
- Classe `HasModulePermission` (bypass super/admin, sinon code) → Task 2. ✅
- Convention GET→.view / écriture→.manage (véhicule granulaire) → tableaux Tasks 3-4. ✅
- Application à **toutes** les vues fleet (opérationnelles + config) → Tasks 3-4. ✅
- Autres modules gardent `IsInstitutionAdmin` → Task 5 Step 2 (contrôle). ✅
- Tests staff/admin/super + config + seed → Tasks 1-4. ✅

**Placeholder scan :** aucun TBD/TODO ; code complet. Le tableau `permission_map` par vue est la
source de vérité exacte pour l'annotation (édition mécanique de 2 lignes par classe).

**Type consistency :** `HasModulePermission` / `permission_map` / `required_permission` cohérents entre
Task 2 (déf.) et Tasks 3-4 (usage). Helper `_make_staff(codes)` identique (core + fleet). Codes de
permission identiques entre seed (Task 1), classe (Task 2) et mappings (Tasks 3-4).
