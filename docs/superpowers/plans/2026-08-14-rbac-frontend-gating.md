# RBAC — Gating frontend (tranche 2 : pilote Flotte) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre l'UI cohérente avec l'application backend des permissions, via un mécanisme réutilisable (directive `*hasPermission` + filtrage de menu par `permission`), piloté sur la Flotte.

**Architecture:** Une directive structurelle standalone `*hasPermission` (masque un élément selon `PermissionService.has/hasAny`, réactive à `permissions$`). Le menu filtre les entrées portant un champ `permission`. `me/permissions` renvoie `*` pour l'admin d'institution (miroir du bypass backend). Aucun code propre à la Flotte dans le mécanisme.

**Tech Stack:** Angular (standalone components/directives), DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-14-rbac-frontend-gating-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/rbac-frontend-gating` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Angular : `cd .../ERP-master/angular && npx ng build`.
- **Réutilisable** : rien de spécifique à la Flotte dans la directive, le filtrage de menu, ou le fix backend.
- ⚠️ Disque serré — garder de l'espace pour `ng build`.

**Rappels codebase (vérifiés) :**
- `PermissionService` (`angular/src/_api/services/auth/permission.service.ts`) : `permissions$` (Observable), `has(code)`, `hasAny(...codes)`, `hasAll(...codes)`. `load()` déjà appelé au login + bootstrap.
- `me/permissions` = `MePermissionsView` (`backend/apps/authentication/views.py`, lignes ~147-159).
- Menu construit **uniquement** par `sidebar-one.component.ts` → `buildMenuForUser()` (lignes 55-68), qui mappe `this.sidebar.sidebarData1` et filtre `section.menu` par `role`. Les `subMenus` ne sont **pas** filtrés aujourd'hui.
- Données de menu : `sidebar.service.ts`. Section « Flotte » : groupe « Gestion Flotte » (`hasSubRoute:true`, `subMenus:[13]`) + groupe « Config Flotte » (`subMenus:[11]`).
- Interfaces menu : `angular/src/app/core/model/sidebar.model.ts` (`menu`, `subMenus`).
- Pages fleet standalone : `imports: [CommonModule, FormsModule, ReactiveFormsModule]`.

---

### Task 1: Backend — `me/permissions` = `*` pour l'admin d'institution

**Files:**
- Modify: `backend/apps/authentication/views.py` (`MePermissionsView.get`)
- Create: `backend/apps/authentication/tests/test_me_permissions.py`

**Interfaces:**
- Produces: `GET /auth/me/permissions/` renvoie `{"permissions": ["*"], …}` pour super-admin **ou** admin d'institution.

- [ ] **Step 1: Écrire le test (échoue)**

Créer `backend/apps/authentication/tests/test_me_permissions.py` :

```python
import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.authentication.views import MePermissionsView


@pytest.mark.django_db
def test_me_permissions_wildcard_for_institution_admin():
    from apps.system_config.services import create_company
    create_company(name="Perm Co", admin_email="perm.admin@x.com",
                   admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="perm.admin@x.com")
    req = APIRequestFactory().get("/auth/me/permissions/")
    force_authenticate(req, user=admin)
    resp = MePermissionsView.as_view()(req)
    resp.render()
    assert json.loads(resp.content)["data"]["permissions"] == ["*"]
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/authentication/tests/test_me_permissions.py -v`
Expected: FAIL (renvoie les codes de rôles, pas `["*"]`).

- [ ] **Step 3: Implémenter**

Dans `backend/apps/authentication/views.py`, remplacer le corps de `MePermissionsView.get` par :

```python
    def get(self, request):
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        company = getattr(request.user, "company", None)
        company_id = getattr(company, "id", None)
        perms = get_user_permissions(request.user, company_id)
        is_admin = request.user.is_superuser or getattr(request.user, "is_institution_admin", False)
        return success_response({
            "permissions": ["*"] if (is_admin or "*" in perms) else sorted(perms),
            "is_superuser": request.user.is_superuser,
        })
```

- [ ] **Step 4: Lancer le test (doit passer)**

Run: `../env/bin/python -m pytest apps/authentication/tests/test_me_permissions.py -v`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/authentication/views.py backend/apps/authentication/tests/test_me_permissions.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): me/permissions renvoie * pour l'admin d'institution (miroir du bypass backend)"
```

---

### Task 2: Directive réutilisable `*hasPermission` + champs de modèle

**Files:**
- Create: `angular/src/app/shared/directives/has-permission.directive.ts`
- Modify: `angular/src/app/core/model/sidebar.model.ts`

**Interfaces:**
- Produces: `HasPermissionDirective` (standalone, sélecteur `[hasPermission]`, entrée `hasPermission: string | string[]`).
- Produces: champs optionnels `role?: string` et `permission?: string | string[]` sur `menu` et `subMenus`.

- [ ] **Step 1: Créer la directive**

Créer `angular/src/app/shared/directives/has-permission.directive.ts` :

```typescript
import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PermissionService } from '../../../_api/services/auth/permission.service';

/**
 * Affiche l'élément uniquement si l'utilisateur possède la/les permission(s).
 * Réutilisable par tous les modules :
 *   <button *hasPermission="'fleet.vehicle.create'">Nouveau</button>
 *   <a *hasPermission="['x.update','x.delete']">…</a>   (au moins un)
 */
@Directive({ selector: '[hasPermission]', standalone: true })
export class HasPermissionDirective implements OnDestroy {
  private readonly tpl  = inject(TemplateRef<unknown>);
  private readonly vcr  = inject(ViewContainerRef);
  private readonly perm = inject(PermissionService);

  private codes: string | string[] = [];
  private rendered = false;
  private sub?: Subscription;

  @Input() set hasPermission(value: string | string[]) {
    this.codes = value ?? [];
    if (!this.sub) this.sub = this.perm.permissions$.subscribe(() => this.update());
    this.update();
  }

  private allowed(): boolean {
    return Array.isArray(this.codes) ? this.perm.hasAny(...this.codes) : this.perm.has(this.codes);
  }

  private update(): void {
    const allow = this.allowed();
    if (allow && !this.rendered) { this.vcr.createEmbeddedView(this.tpl); this.rendered = true; }
    else if (!allow && this.rendered) { this.vcr.clear(); this.rendered = false; }
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
```

- [ ] **Step 2: Ajouter les champs optionnels au modèle**

Dans `angular/src/app/core/model/sidebar.model.ts`, ajouter aux interfaces `menu` **et** `subMenus`
(à côté des champs existants) :

```typescript
  role?: string;
  permission?: string | string[];
```

- [ ] **Step 3: Build (vérifie la compilation)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/shared/directives/has-permission.directive.ts angular/src/app/core/model/sidebar.model.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): directive reutilisable *hasPermission + champs permission/role du menu"
```

---

### Task 3: Filtrage du menu par permission (générique) + données Flotte

**Files:**
- Modify: `angular/src/app/layouts/sidebar-one/sidebar-one.component.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: `PermissionService` (`permissions$`, `has`, `hasAny`).

- [ ] **Step 1: Injecter PermissionService + reconstruire le menu**

Dans `angular/src/app/layouts/sidebar-one/sidebar-one.component.ts` :

1. Importer en tête :
```typescript
import { PermissionService } from '../../../_api/services/auth/permission.service';
import { Subscription } from 'rxjs';
```
2. Ajouter le service au constructeur (à côté de `private authService: AuthService`) :
```typescript
    private permissionService: PermissionService,
```
3. Ajouter un champ dans la classe :
```typescript
  private permSub?: Subscription;
```
4. Dans `ngOnInit()`, après le code existant, s'abonner pour reconstruire quand les permissions arrivent :
```typescript
    this.permSub = this.permissionService.permissions$.subscribe(() => {
      this.side_bar_data = this.buildMenuForUser();
    });
```
5. Ajouter (ou compléter) `ngOnDestroy()` pour se désabonner :
```typescript
  ngOnDestroy(): void {
    this.permSub?.unsubscribe();
  }
```
(et s'assurer que la classe `implements OnDestroy` ; importer `OnDestroy` depuis `@angular/core`.)

- [ ] **Step 2: Étendre `buildMenuForUser()` (filtrage générique par permission)**

Remplacer le corps de `buildMenuForUser()` par :

```typescript
  private buildMenuForUser(): Array<any> {
    const user = this.authService.currentUser;
    const isSuperAdmin       = user?.is_superuser ?? false;
    const isInstitutionAdmin = user?.is_institution_admin ?? false;

    const allowed = (p: string | string[] | undefined): boolean =>
      !p || (Array.isArray(p) ? this.permissionService.hasAny(...p) : this.permissionService.has(p));

    const roleOk = (item: any): boolean => {
      if (item.role === 'institution_admin') return isInstitutionAdmin || isSuperAdmin;
      if (item.role === 'super_admin')       return isSuperAdmin;
      return true;
    };

    return this.sidebar.sidebarData1.map((section: any) => ({
      ...section,
      menu: section.menu
        .filter((item: any) => roleOk(item) && allowed(item.permission))
        .map((item: any) => {
          if (item.hasSubRoute && Array.isArray(item.subMenus)) {
            return { ...item, subMenus: item.subMenus.filter((s: any) => allowed(s.permission)) };
          }
          return item;
        })
        .filter((item: any) =>
          !(item.hasSubRoute && Array.isArray(item.subMenus)) || item.subMenus.length > 0),
    }));
  }
```

- [ ] **Step 3: Ajouter `permission` aux entrées Flotte**

Dans `angular/src/app/core/service/sidebar/sidebar.service.ts`, section « Flotte » :

Groupe « Gestion Flotte » — ajouter `permission` à chaque sous-entrée :
```typescript
{ menuValue: 'Tableau de bord',  route: routes.fleetDashboard,       base: 'dashboard',        permission: 'fleet.dashboard.view' },
{ menuValue: 'Véhicules',        route: routes.fleetVehicles,        base: 'vehicles',         permission: 'fleet.vehicle.view' },
{ menuValue: 'Marques',          route: routes.fleetBrands,          base: 'brands',           permission: 'fleet.brand.view' },
{ menuValue: 'Modèles',          route: routes.fleetModels,          base: 'models',           permission: 'fleet.model.view' },
{ menuValue: 'Conducteurs ext.', route: routes.fleetExternalDrivers, base: 'external-drivers', permission: 'fleet.driver.view' },
{ menuValue: 'Carburant',        route: routes.fleetFuelLogs,        base: 'fuel-logs',        permission: 'fleet.fuel.view' },
{ menuValue: 'Services',         route: routes.fleetServices,        base: 'services',         permission: 'fleet.maintenance.view' },
{ menuValue: 'Contrats',         route: routes.fleetContracts,       base: 'contracts',        permission: 'fleet.contract.view' },
{ menuValue: 'Documents',        route: routes.fleetDocuments,       base: 'documents',        permission: 'fleet.document.view' },
{ menuValue: 'Missions',         route: routes.fleetAssignments,     base: 'assignments',      permission: 'fleet.assignment.view' },
{ menuValue: 'Accidents',        route: routes.fleetAccidents,       base: 'accidents',        permission: 'fleet.accident.view' },
{ menuValue: 'Parkings',         route: routes.fleetParking,         base: 'parking',          permission: 'fleet.parking.view' },
{ menuValue: 'Fournisseurs',     route: routes.fleetSuppliers,       base: 'suppliers',        permission: 'fleet.supplier.view' },
```

Groupe « Config Flotte » — ajouter `permission: 'fleet.config.view'` à **chacune** des 11 sous-entrées.

- [ ] **Step 4: Build + contrôle**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/layouts/sidebar-one/sidebar-one.component.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): filtrage du menu par permission + entrees flotte gatees"
```

---

### Task 4: Gating des boutons — pages `fleet/*`

**Files:**
- Modify: `angular/src/_api/pages/fleet/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/fleet/**/*.component.html` (boutons)

**Interfaces:**
- Consumes: `HasPermissionDirective` (Task 2).

- [ ] **Step 1: Importer la directive dans chaque composant fleet**

Pour chaque `*.component.ts` sous `angular/src/_api/pages/fleet/` : ajouter l'import
`import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';`
(ajuster le nombre de `../` selon la profondeur : depuis `_api/pages/fleet/<page>/` la racine `src/` est à 4 niveaux → `../../../../app/shared/directives/has-permission.directive`) et l'ajouter au tableau `imports: [...]` du décorateur `@Component`.

- [ ] **Step 2: Poser `*hasPermission` sur les boutons d'action**

Convention (codes de la tranche 1). Sur chaque page, ajouter l'attribut `*hasPermission="'<code>'"` à
l'élément bouton correspondant :
- Bouton « Nouveau … » → `create` (véhicules) sinon `manage`.
- Bouton/lien « Modifier » → `update` (véhicules) sinon `manage`.
- Bouton/lien « Supprimer » → `delete` (véhicules) sinon `manage`.
- Actions métier (Démarrer/Clôturer/Annuler mission ou service, Clôturer/statut accident) → `manage`.

Table page → ressource :

| Page (dossier) | view | create/manage écriture |
|---|---|---|
| `vehicles` | fleet.vehicle.view | `fleet.vehicle.create` / `.update` / `.delete` |
| `brands` | — | `fleet.brand.manage` |
| `models` | — | `fleet.model.manage` |
| `external-drivers` | — | `fleet.driver.manage` |
| `fuel-logs` | — | `fleet.fuel.manage` |
| `services` | — | `fleet.maintenance.manage` |
| `contracts` | — | `fleet.contract.manage` |
| `documents` | — | `fleet.document.manage` |
| `assignments` | — | `fleet.assignment.manage` |
| `accidents` | — | `fleet.accident.manage` |
| `parking` | — | `fleet.parking.manage` |
| `suppliers` | — | `fleet.supplier.manage` |

Exemple (`vehicles.component.html`) — bouton Nouveau (≈ ligne 13), Modifier (≈145), Supprimer (≈151) :
```html
<a href="javascript:void(0);" class="btn btn-primary" *hasPermission="'fleet.vehicle.create'"
   data-bs-toggle="modal" data-bs-target="#create-vehicle-modal" (click)="openCreate()">
  <i class="ti ti-circle-plus me-2"></i>Nouveau véhicule
</a>
...
<a ... *hasPermission="'fleet.vehicle.update'" (click)="openEdit(v)" title="Modifier">…Modifier</a>
<a ... *hasPermission="'fleet.vehicle.delete'" (click)="delete(v.id)" title="Supprimer">…Supprimer</a>
```
Pour les ressources en `.manage`, utiliser le même code pour Nouveau/Modifier/Supprimer (ex. `brands` : `*hasPermission="'fleet.brand.manage'"` sur les trois).

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/fleet
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons d'action des pages flotte"
```

---

### Task 5: Gating des boutons — pages `fleet-config/*`

**Files:**
- Modify: `angular/src/_api/pages/fleet-config/**/*.component.ts` (imports)
- Modify: `angular/src/_api/pages/fleet-config/**/*.component.html` (boutons)

**Interfaces:**
- Consumes: `HasPermissionDirective` (Task 2).

- [ ] **Step 1: Importer la directive dans chaque composant fleet-config**

Pour chaque `*.component.ts` sous `angular/src/_api/pages/fleet-config/` : ajouter
`import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';`
et l'ajouter au tableau `imports: [...]`.

- [ ] **Step 2: Poser `*hasPermission` sur les boutons**

Toutes les ressources de config utilisent `fleet.config.*`. Sur chaque page fleet-config :
- « Nouveau … » → `*hasPermission="'fleet.config.manage'"`.
- « Modifier »/« Supprimer » (et suppression groupée) → `*hasPermission="'fleet.config.manage'"`.

(La lecture de la page est déjà gouvernée par le menu `fleet.config.view` ; ici on masque les actions d'écriture.)

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/fleet-config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): gating des boutons de la config flotte"
```

---

### Task 6: Vérification finale + fusion

- [ ] **Step 1: Tests backend + build final**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/authentication/tests/ -q
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
```
Expected: tests PASS ; build OK.

- [ ] **Step 2: Contrôle de non-régression (mécanisme générique, pas de code fleet en dur)**

Run: `grep -rn "fleet\." angular/src/app/shared/directives/has-permission.directive.ts angular/src/app/layouts/sidebar-one/sidebar-one.component.ts`
Expected: aucun résultat (la directive et le filtrage sont génériques ; les codes fleet ne vivent que dans les données de menu et les gabarits).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Composant 1 (`me/permissions` = `*` admin institution) → Task 1. ✅
- Composant 2 (directive `*hasPermission` réutilisable, `string|string[]`, réactive) → Task 2. ✅
- Composant 3 (filtrage menu générique + rebuild sur `permissions$`) → Task 3 Steps 1-2. ✅
- Composant 4 (données Flotte : menu + boutons fleet/fleet-config) → Task 3 Step 3, Tasks 4-5. ✅
- Réutilisabilité (rien de fleet dans le mécanisme) → Task 6 Step 2 (contrôle). ✅
- Vérif (test backend + `ng build`) → Tasks 1, 6. ✅

**Placeholder scan :** aucun TBD/TODO. Code complet pour la directive, le filtrage, le fix backend ;
tables exactes pour les données Flotte (édition mécanique).

**Type consistency :** `HasPermissionDirective` / entrée `hasPermission: string | string[]` cohérents
(Task 2 déf., Tasks 4-5 usage). `permission?: string | string[]` du modèle (Task 2) = utilisé par
`allowed()` (Task 3) et les données (Task 3 Step 3). `permissionService.hasAny/has` cohérents partout.
