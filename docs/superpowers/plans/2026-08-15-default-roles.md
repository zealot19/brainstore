# RBAC — Rôles & profils par défaut (tranche 4) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer automatiquement un jeu de 6 rôles + profils par défaut (scopés à la société) à la création d'une société, avec une commande de backfill pour l'existant.

**Architecture:** Helper `seed_default_roles(company, created_by)` dans `admin_rbac.services.defaults` (permissions résolues par requête, idempotent), appelé par `_bootstrap_company`, + management command de backfill.

**Tech Stack:** Django 5.1 + DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-default-roles-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/default-roles` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Idempotent (skip si nom déjà pris) ; jamais d'`ApplicationError` dur ; aucune auto-assignation.
- Backend only. Vérif : `manage.py check`, pytest.

**Rappels codebase (vérifiés) :**
- `create_role(*, name, description="", company_id=None, permission_ids=None, is_system=False, created_by=None)` et `create_profile(*, name, description="", company_id=None, role_ids=None, is_default=False, is_system=False, created_by=None)` (`apps/admin_rbac/services/`) — lèvent si le nom existe déjà pour la société.
- `Role.permissions` = M2M ; `Profile` ↔ `Role` via `ProfileRole`.
- `_bootstrap_company(...)` (`apps/system_config/services/company_services.py`) crée HQ + 1er admin puis `return {...}` — insérer l'appel juste avant le `return`.
- `apps/admin_rbac/services/__init__.py` agrège les exports.
- `apps/admin_rbac/tests.py` existe → y ajouter les tests.
- `Company` est soft-delete (`is_deleted`).

---

### Task 1: Helper `seed_default_roles` + accroche à la création de société

**Files:**
- Create: `backend/apps/admin_rbac/services/defaults.py`
- Modify: `backend/apps/admin_rbac/services/__init__.py`
- Modify: `backend/apps/system_config/services/company_services.py`
- Modify: `backend/apps/admin_rbac/tests.py` (append)

- [ ] **Step 1: Écrire les tests (échouent)**

Append dans `backend/apps/admin_rbac/tests.py` :

```python
DEFAULT_ROLE_NAMES = {
    "Chef d'agence", "Guichetier", "Régulateur",
    "Gestionnaire de flotte", "Agent colis & bagages", "Comptable (lecture)",
}


@pytest.mark.django_db
def test_default_roles_seeded_on_company_create():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role, Profile
    company, _ = create_company(
        name="Seed Co", admin_email="seedadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    role_names = set(Role.objects.filter(company=company).values_list("name", flat=True))
    profile_names = set(Profile.objects.filter(company=company).values_list("name", flat=True))
    assert DEFAULT_ROLE_NAMES <= role_names, DEFAULT_ROLE_NAMES - role_names
    assert DEFAULT_ROLE_NAMES <= profile_names, DEFAULT_ROLE_NAMES - profile_names


@pytest.mark.django_db
def test_default_role_bundles():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role
    company, _ = create_company(
        name="Bundle Co", admin_email="bundleadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    guichet = set(Role.objects.get(company=company, name="Guichetier")
                  .permissions.values_list("code", flat=True))
    assert "ticketing.booking.create" in guichet
    assert "fleet.vehicle.create" not in guichet
    fleet = set(Role.objects.get(company=company, name="Gestionnaire de flotte")
                .permissions.values_list("code", flat=True))
    assert "fleet.vehicle.create" in fleet


@pytest.mark.django_db
def test_default_roles_idempotent():
    from apps.system_config.services import create_company
    from apps.admin_rbac.services.defaults import seed_default_roles
    from apps.admin_rbac.models import Role
    company, _ = create_company(
        name="Idem Co", admin_email="idemadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    before = Role.objects.filter(company=company).count()
    seed_default_roles(company)  # rappel
    assert Role.objects.filter(company=company).count() == before
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/admin_rbac/tests.py -k "default_role" -v`
Expected: FAIL (`seed_default_roles` inexistant / rôles absents).

- [ ] **Step 3: Créer le helper**

Créer `backend/apps/admin_rbac/services/defaults.py` :

```python
"""Rôles & profils par défaut créés à la création d'une société (RBAC tranche 4).
Permissions résolues par requête sur le catalogue → robuste. Idempotent (par nom)."""
from apps.admin_rbac.models import Permission, Role, Profile
from .role_services import create_role
from .profile_services import create_profile


def _views(codes, *prefixes):
    return {c for c in codes if c.endswith(".view") and any(c.startswith(p + ".") for p in prefixes)}


def _allof(codes, *prefixes):
    return {c for c in codes if any(c == p or c.startswith(p + ".") for p in prefixes)}


def _role_specs(codes):
    guichet = {
        "ticketing.booking.view", "ticketing.booking.create", "ticketing.booking.cancel",
        "ticketing.booking.noshow", "ticketing.booking.board",
        "ticketing.customer.view", "ticketing.customer.manage",
        "ticketing.ticket.view", "ticketing.ticket.print", "ticketing.dashboard.view",
    }
    return [
        ("Chef d'agence", "Gestion opérationnelle complète de l'agence",
         _allof(codes, "voyage") | _allof(codes, "ticketing")
         | _views(codes, "transport") | _views(codes, "fleet")),
        ("Guichetier", "Vente au guichet : réservations, clients, billets, colis, bagages",
         guichet | _allof(codes, "ticketing.parcel") | _allof(codes, "ticketing.luggage")
         | {"voyage.trip.view", "voyage.dashboard.view"}
         | {"transport.city.view", "transport.route.view", "transport.fareclass.view",
            "transport.terminal.view", "transport.fare.view"}),
        ("Régulateur", "Exploitation : voyages, équipages, affectations véhicules",
         _allof(codes, "voyage")
         | {"fleet.vehicle.view", "fleet.assignment.view", "fleet.assignment.manage",
            "fleet.driver.view", "fleet.dashboard.view"}
         | {"transport.route.view", "transport.city.view", "transport.terminal.view",
            "transport.fareclass.view"}),
        ("Gestionnaire de flotte", "Gestion complète de la flotte",
         _allof(codes, "fleet")),
        ("Agent colis & bagages", "Enregistrement et suivi des colis et bagages",
         _allof(codes, "ticketing.parcel") | _allof(codes, "ticketing.luggage")
         | {"ticketing.dashboard.view", "voyage.trip.view"}),
        ("Comptable (lecture)", "Consultation générale, impressions et rapports",
         {c for c in codes if c.endswith(".view")}
         | {"ticketing.ticket.print", "scig.report.view", "scig.report.export"}),
    ]


def seed_default_roles(company, created_by=None):
    """Crée les rôles/profils par défaut manquants pour la société. Retourne les noms créés."""
    codes = set(Permission.objects.values_list("code", flat=True))
    created = []
    for name, desc, want in _role_specs(codes):
        want = {c for c in want if c in codes}
        if Role.objects.filter(name=name, company_id=company.id).exists():
            continue
        perm_ids = list(Permission.objects.filter(code__in=want).values_list("id", flat=True))
        role = create_role(name=name, description=desc, company_id=company.id,
                           permission_ids=perm_ids, created_by=created_by)
        if not Profile.objects.filter(name=name, company_id=company.id).exists():
            create_profile(name=name, description=desc, company_id=company.id,
                           role_ids=[role.id], created_by=created_by)
        created.append(name)
    return created
```

- [ ] **Step 4: Exporter le helper**

Dans `backend/apps/admin_rbac/services/__init__.py` : ajouter après la ligne
`from .user_role_services import assign_role, revoke_role, assign_profile, revoke_profile` :
```python
from .defaults import seed_default_roles
```
et ajouter `"seed_default_roles",` au `__all__`.

- [ ] **Step 5: Accrocher à `_bootstrap_company`**

Dans `backend/apps/system_config/services/company_services.py`, dans `_bootstrap_company`, **juste avant**
le `return {`, ajouter :
```python
    from apps.admin_rbac.services.defaults import seed_default_roles
    seed_default_roles(company, created_by=created_by)
```

- [ ] **Step 6: Lancer les tests + check**

Run: `../env/bin/python -m pytest apps/admin_rbac/tests.py -k "default_role" -v && ../env/bin/python manage.py check`
Expected: 3 tests PASS + check OK.

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/services/defaults.py backend/apps/admin_rbac/services/__init__.py backend/apps/system_config/services/company_services.py backend/apps/admin_rbac/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): roles & profils par defaut a la creation d'une societe"
```

---

### Task 2: Management command de backfill

**Files:**
- Create: `backend/apps/admin_rbac/management/commands/seed_default_roles.py`
- Modify: `backend/apps/admin_rbac/tests.py` (append)

**Interfaces:**
- Consumes: `seed_default_roles` (Task 1).

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/admin_rbac/tests.py` :

```python
@pytest.mark.django_db
def test_seed_default_roles_command_backfills():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role
    from django.core.management import call_command
    # société créée SANS bootstrap (pas d'admin_email) → aucun rôle par défaut
    company, _ = create_company(name="NoBootstrap Co")
    assert Role.objects.filter(company=company).count() == 0
    call_command("seed_default_roles", company=str(company.id))
    assert Role.objects.filter(company=company).count() == 6
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/admin_rbac/tests.py -k "command_backfills" -v`
Expected: FAIL (`Unknown command: 'seed_default_roles'`).

- [ ] **Step 3: Créer la commande**

Créer `backend/apps/admin_rbac/management/commands/seed_default_roles.py` :

```python
from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.admin_rbac.services.defaults import seed_default_roles


class Command(BaseCommand):
    help = "Crée les rôles/profils par défaut pour les sociétés existantes (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None, help="UUID d'une société précise (sinon toutes).")

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        total = 0
        for company in qs:
            created = seed_default_roles(company)
            total += len(created)
            self.stdout.write(f"{company.name}: {len(created)} rôle(s) créé(s)")
        self.stdout.write(self.style.SUCCESS(f"Terminé — {total} rôle(s) créés au total."))
```

(S'assurer que `backend/apps/admin_rbac/management/` et `.../commands/` contiennent un `__init__.py` — ils existent déjà, la commande `seed_scig_roles` y étant présente.)

- [ ] **Step 4: Lancer le test + check**

Run: `../env/bin/python -m pytest apps/admin_rbac/tests.py -k "command_backfills" -v && ../env/bin/python manage.py check`
Expected: PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/management/commands/seed_default_roles.py backend/apps/admin_rbac/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): commande seed_default_roles (backfill des societes existantes)"
```

---

### Task 3: Vérification finale + backfill dev + fusion

- [ ] **Step 1: Suite complète + check**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py check
../env/bin/python -m pytest apps/admin_rbac/tests.py apps/system_config/tests/ -q
```
Expected: check OK ; tests PASS.

- [ ] **Step 2: Backfill de la base de dev (pratique)**

Run: `../env/bin/python manage.py seed_default_roles`
Expected: un récap par société (« … rôle(s) créé(s) »), sans erreur.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 1 (helper `seed_default_roles` + 6 rôles/profils + bundles par requête) → Task 1 Step 3. ✅
- Composant 2 (accroche `_bootstrap_company`) → Task 1 Step 5. ✅
- Composant 3 (management command backfill) → Task 2. ✅
- Idempotence + bundles corrects (guichetier vs flotte) + backfill → Tasks 1-2 tests. ✅

**Placeholder scan :** aucun TBD/TODO ; helper, hook, commande et tests complets.

**Type consistency :** `seed_default_roles(company, created_by=None)` signature identique (déf. Task 1,
usage Task 1 hook + Task 2 commande). Noms de rôles identiques entre helper, tests et `DEFAULT_ROLE_NAMES`.
`create_role`/`create_profile` appelés avec les kwargs vérifiés.
