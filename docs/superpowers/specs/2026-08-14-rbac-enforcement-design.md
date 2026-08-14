# RBAC — Application des permissions (tranche 1 : socle backend + pilote Flotte) — Design Spec

**Date :** 2026-08-14
**Sous-projet :** Administration → RBAC (application effective des permissions)
**Branche :** `feature/rbac-enforcement` (depuis `origin/master`)

## Contexte

Les fondations RBAC existent (88 permissions `<module>.<ressource>.<action>`, rôles, profils,
`get_user_permissions`, endpoint `/auth/me/permissions/`, `PermissionService` front) mais **aucune
n'est appliquée** : tous les endpoints métier utilisent `IsInstitutionAdmin` → un admin d'institution
peut tout, un employé non-admin ne peut rien, et les rôles assignés n'ont **aucun effet**.

Cette tranche rend les permissions **réellement effectives côté backend**, sur un **module pilote : Flotte**.
Le frontend (menu/boutons par permission) et les autres modules sont hors périmètre (tranches suivantes).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-enforcement` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- **Déploiement incrémental** : les vues non mappées **gardent `IsInstitutionAdmin`** (rien d'autre ne change).
- Vérif : `manage.py check`, tests pytest, (pas de build front — backend only).

## Hiérarchie (décisions validées)

- **Super-admin** (`is_superuser`) → tout, plateforme entière (`get_user_permissions` renvoie `*`).
- **Admin d'institution** (`is_institution_admin`) → **tout dans sa société** (bypass du granulaire).
- **Personnel régulier** → uniquement les permissions de ses **rôles/profils** (`get_user_permissions`).

## Seed des permissions Flotte manquantes (préalable)

Certaines ressources Flotte n'ont pas de code de permission. Une **data migration** dans
`apps/admin_rbac/migrations/` (rattachée à l'`AppModule` `fleet`) les crée (idempotent,
`update_or_create`), avec catégorie `view` pour la lecture et `update` pour l'écriture :

| Code | Libellé | Catégorie |
|---|---|---|
| `fleet.parking.view` / `.manage` | Consulter / Gérer les parkings | view / update |
| `fleet.supplier.view` / `.manage` | Consulter / Gérer les fournisseurs | view / update |
| `fleet.contract.view` / `.manage` | Consulter / Gérer les contrats | view / update |
| `fleet.recurring_cost.view` / `.manage` | Consulter / Gérer les coûts récurrents | view / update |
| `fleet.config.view` / `.manage` | Consulter / Gérer la configuration flotte (données de référence) | view / update |

`fleet.config.*` couvre **toutes** les données de référence de Config Flotte (catégories véhicule,
carburants, transmissions, tractions, unités, catégories d'unité, périodes, types de document,
étiquettes, types d'intervention, secteurs d'activité) — gérées via les vues de base
`_ConfigListView`/`_ConfigDetailView`/`_ConfigBulkDeleteView`.

Après ce seed, **toutes** les vues Flotte ont un code → aucune ne reste sur `IsInstitutionAdmin`.

## Composant — `HasModulePermission`

Nouvelle classe DRF dans `apps/core/permissions.py` :

```python
class HasModulePermission(BasePermission):
    message = _("Permission insuffisante pour cette action.")

    def has_permission(self, request, view):
        u = request.user
        if not (u and u.is_authenticated):
            return False
        if u.is_staff and u.is_superuser:        # super-admin
            return True
        if getattr(u, "is_institution_admin", False):  # admin institution (bypass)
            return True
        code = (getattr(view, "permission_map", {}) or {}).get(request.method) \
               or getattr(view, "required_permission", None)
        if not code:            # vue sans permission déclarée -> pas de restriction supplémentaire
            return True
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        cid = getattr(getattr(u, "company", None), "id", None)
        perms = get_user_permissions(u, cid)
        return "*" in perms or code in perms
```

Lecture de la permission requise :
- `view.permission_map` : dict `{"GET": "code.view", "POST": "code.create", "PATCH": "code.update", "DELETE": "code.delete"}` (par méthode HTTP) ;
- sinon `view.required_permission` (code unique, toutes méthodes).

## Convention de mapping

- **GET** (liste, détail, stats, alertes, dashboard) → `<ressource>.view`.
- **Écriture** (POST/PATCH/DELETE) → `<ressource>.manage`, sauf **véhicule** qui a le granulaire
  `fleet.vehicle.create` / `.update` / `.delete`.
- **Actions custom** (start/complete/cancel/close/status POST) → `<ressource>.manage`.
- **Bulk-delete** → `<ressource>.manage` (ou `.delete`).

## Application au module Flotte

Pour **chaque** vue fleet (toutes ont désormais un code), remplacer
`permission_classes = [IsInstitutionAdmin]` par `permission_classes = [IsAuthenticated, HasModulePermission]`
et déclarer `permission_map`. Ressources et codes :

| Ressource | Vues | GET | Écriture |
|---|---|---|---|
| Véhicule | VehicleList/Detail, VehicleOdometer, VehicleStats | `fleet.vehicle.view` | `fleet.vehicle.create` (POST) / `.update` (PATCH) / `.delete` (DELETE) |
| Tableau de bord / alertes | FleetStats, FleetAlerts | `fleet.dashboard.view` | — |
| Marque | VehicleBrandList/Detail | `fleet.brand.view` | `fleet.brand.manage` |
| Modèle | VehicleModelList/Detail | `fleet.model.view` | `fleet.model.manage` |
| Conducteur externe | ExternalDriverList/Detail | `fleet.driver.view` | `fleet.driver.manage` |
| Carburant | VehicleFuelLogList, FuelLogDetail | `fleet.fuel.view` | `fleet.fuel.manage` |
| Maintenance / services | Service(+Vehicle)List/Detail, ServiceStart/Complete/Cancel, ServiceAttachment* | `fleet.maintenance.view` | `fleet.maintenance.manage` |
| Documents véhicule | VehicleDocumentList/Detail | `fleet.document.view` | `fleet.document.manage` |
| Missions | Assignment(+Vehicle)List/Detail, AssignmentStart/Complete/Cancel | `fleet.assignment.view` | `fleet.assignment.manage` |
| Accidents | Accident(+Vehicle)List/Detail, AccidentClose/Status | `fleet.accident.view` | `fleet.accident.manage` |
| Parkings | ParkingList/Detail | `fleet.parking.view` | `fleet.parking.manage` |
| Fournisseurs | SupplierList/Detail | `fleet.supplier.view` | `fleet.supplier.manage` |
| Contrats | Contract(+Vehicle)List/Detail | `fleet.contract.view` | `fleet.contract.manage` |
| Coûts récurrents | RecurringCostList/Detail | `fleet.recurring_cost.view` | `fleet.recurring_cost.manage` |
| Config flotte (référence) | `_ConfigListView`/`_ConfigDetailView`/`_ConfigBulkDeleteView` + Unit* | `fleet.config.view` | `fleet.config.manage` |

`IsAuthenticated` et `HasModulePermission` sont importés depuis `apps.core.permissions`. Toutes les
vues Flotte sont couvertes (aucune ne reste sur `IsInstitutionAdmin`).

## Gestion des erreurs

- Non authentifié → 401. Permission insuffisante → 403 (message « Permission insuffisante… »).
- Vue sans `permission_map`/`required_permission` sous `HasModulePermission` → autorisée (utile pour
  actions communes ; mais dans cette tranche toutes les vues fleet migrées déclarent leur mapping).

## Vérification

Tests `@pytest.mark.django_db` (construction d'un utilisateur staff + rôle + permission) :
- staff avec `fleet.vehicle.view` → GET véhicules **≠ 403** ; POST véhicule → **403**.
- staff avec `fleet.vehicle.view` + `fleet.vehicle.create` → POST véhicule **≠ 403**.
- staff sans aucune permission fleet → GET véhicules → **403**.
- **admin d'institution** (is_institution_admin) → GET et POST **≠ 403** (bypass).
- **super-admin** → tout **≠ 403**.
- staff avec `fleet.config.view` → GET d'une ressource de config (ex. unités) **≠ 403** ;
  POST/PATCH sans `fleet.config.manage` → **403**.
- Seed vérifié : les 10 nouveaux codes existent et sont rattachés à l'`AppModule` `fleet`.

`manage.py check` + migration OK.

## Hors périmètre

- Frontend : filtrage du menu + directive/boutons par permission (tranche 2).
- Rôles/profils par défaut à la création d'une société (tranche 4).
- Application aux **autres modules** (Voyages, Réservations, Config Voyages…) + seed de leurs codes manquants (tranche 3).
- Modification de `get_user_permissions` (réutilisé tel quel).
- Granularité par ressource pour la config flotte (regroupée sous `fleet.config.*` dans cette tranche).
