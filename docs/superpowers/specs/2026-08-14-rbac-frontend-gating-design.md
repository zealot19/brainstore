# RBAC — Gating frontend (tranche 2 : pilote Flotte, mécanisme réutilisable) — Design Spec

**Date :** 2026-08-14
**Sous-projet :** Administration → RBAC (application côté interface)
**Branche :** `feature/rbac-frontend-gating` (depuis `origin/master`)

## Contexte & objectif

Le backend applique déjà les permissions (tranche 1, module Flotte). Mais l'UI ne les reflète pas :
le menu et les boutons s'affichent quels que soient les droits (filtrés seulement par les flags
`is_superuser`/`is_institution_admin`). Cette tranche rend l'**interface cohérente avec le backend**,
en **pilote sur la Flotte**, avec un **mécanisme 100 % réutilisable** : les futurs modules (même non
encore codés) n'auront qu'à (a) ajouter un champ `permission` à leurs entrées de menu et (b) poser la
directive `*hasPermission` sur leurs boutons. **Rien de spécifique à la Flotte dans le mécanisme.**

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-frontend-gating` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutilisable avant tout : aucun code/identifiant propre à la Flotte dans la directive, le service, ou le filtrage de menu.
- Vérif : test backend (`me/permissions`), `npx ng build`. ⚠️ Disque serré → garder de l'espace.

## Acquis (vérifiés, réutilisés tels quels)

- `PermissionService` (`src/_api/services/auth/permission.service.ts`) : `load()` (appelé au login + bootstrap dans `auth.service.ts`), `permissions$` (Observable), `has(code)` = `codes.has('*') || is_superuser || codes.has(code)`, `hasAny(...codes)`, `hasAll(...codes)`.
- `me/permissions` (`MePermissionsView`) renvoie `["*"]` si superuser, sinon les codes des rôles/profils.
- Menu Flotte : section « Flotte » → groupes « Gestion Flotte » (13 entrées) et « Config Flotte » (11 entrées), dans `sidebar.service.ts`. Filtrage du menu dans le(s) composant(s) de sidebar via `buildMenuForUser()`.

## Composant 1 — Backend : `me/permissions` = `*` pour l'admin d'institution

Dans `apps/authentication/views.py`, `MePermissionsView.get` : renvoyer `["*"]` si
`request.user.is_superuser` **ou** `request.user.is_institution_admin`. Cela reflète le bypass backend
(`HasModulePermission`) → un admin d'institution a **toutes** les permissions de sa société côté UI.
Le personnel régulier conserve ses codes. Générique (tous modules).

```python
is_admin = request.user.is_superuser or getattr(request.user, "is_institution_admin", False)
perms = get_user_permissions(request.user, company_id)
return success_response({
    "permissions": ["*"] if (is_admin or "*" in perms) else sorted(perms),
    "is_superuser": request.user.is_superuser,
})
```

## Composant 2 — Directive réutilisable `*hasPermission`

Fichier : `src/app/shared/directives/has-permission.directive.ts` (standalone, sélecteur `[hasPermission]`).

- Entrée : `hasPermission: string | string[]` — un code, ou plusieurs (**au moins un** requis, via `hasAny`).
- Injecte `PermissionService`, `TemplateRef`, `ViewContainerRef`.
- Rend le template si l'utilisateur a la permission ; sinon ne rend rien.
- S'abonne à `permissions$` et **réévalue** à chaque émission (les permissions se chargent en async
  après login) ; se désabonne à la destruction.
- Logique : `allowed = Array.isArray(codes) ? perm.hasAny(...codes) : perm.has(codes)`.

Usage (générique, tout module) :
```html
<button *hasPermission="'fleet.vehicle.create'">Nouveau</button>
<a *hasPermission="['fleet.vehicle.update','fleet.vehicle.delete']">Actions</a>
```

## Composant 3 — Filtrage du menu par permission (réutilisable)

Dans le(s) composant(s) de sidebar qui construisent le menu (`buildMenuForUser()`), injecter
`PermissionService` et étendre le filtrage **de façon générique** :

- Chaque entrée peut porter un champ optionnel `permission?: string | string[]`.
- Une **sous-entrée** est visible si : (marqueur `role` satisfait, logique existante) **ET**
  (`!item.permission || perm.has(item.permission)` — ou `hasAny` si tableau).
- Un **groupe** (avec `subMenus`) est masqué si, après filtrage, il ne reste **aucune** sous-entrée visible.
- **Reconstruire** `side_bar_data` sur émission de `permissions$` (en plus de l'init), afin que le menu
  se recalcule quand les permissions arrivent. Se désabonner à la destruction.

Ce mécanisme est indépendant de la Flotte : n'importe quelle entrée de n'importe quel module devient
gérable en ajoutant `permission`.

## Composant 4 — Application à la Flotte (données + gabarits)

**Menu** (`sidebar.service.ts`) — ajouter `permission` à chaque entrée :

| Entrée | `permission` |
|---|---|
| Tableau de bord | `fleet.dashboard.view` |
| Véhicules | `fleet.vehicle.view` |
| Marques | `fleet.brand.view` |
| Modèles | `fleet.model.view` |
| Conducteurs ext. | `fleet.driver.view` |
| Carburant | `fleet.fuel.view` |
| Services | `fleet.maintenance.view` |
| Contrats | `fleet.contract.view` |
| Documents | `fleet.document.view` |
| Missions | `fleet.assignment.view` |
| Accidents | `fleet.accident.view` |
| Parkings | `fleet.parking.view` |
| Fournisseurs | `fleet.supplier.view` |
| Config Flotte — les 11 entrées | `fleet.config.view` |

**Boutons** — sur les pages `_api/pages/fleet/*` et `_api/pages/fleet-config/*`, importer la directive
et l'appliquer aux boutons d'action selon la convention de la tranche 1 :
- « Nouveau … » → `.create` (véhicule) ou `.manage` (autres) ; Config Flotte → `fleet.config.manage`.
- « Modifier » → `.update`/`.manage` ; « Supprimer » → `.delete`/`.manage`.
- Actions métier (Démarrer/Clôturer/Annuler mission ou service, Clôturer accident…) → `.manage` de la ressource.

## Gestion des erreurs / cas limites

- Permissions non encore chargées (juste après login) → `permissions$` émet, la directive et le menu se
  recalculent. Pas d'état figé.
- Admin d'institution / super-admin → `has()` renvoie vrai partout (`*`) → voient tout.
- Entrée/bouton sans `permission`/directive → comportement inchangé (visible).

## Vérification

- **Backend** : test `@pytest.mark.django_db` — `me/permissions` renvoie `["*"]` pour un admin
  d'institution ; renvoie les codes exacts pour un staff porteur d'un rôle.
- **Frontend** : `npx ng build` OK.
- **Contrôle manuel** : staff avec seulement `fleet.vehicle.view` → menu Flotte réduit à « Véhicules »
  (+ dashboard si accordé), page Véhicules **sans** bouton « Nouveau/Modifier/Supprimer ». Admin
  d'institution → menu et boutons complets.

## Hors périmètre

- Autres modules (Voyages, Config…) — tranche 3 (ils réutiliseront directive + `permission` de menu).
- Guards de route (durcissement ultérieur).
- Désactivation (`[disabled]`) des boutons : on **masque** (choix retenu).
- Tests unitaires Angular de la directive (pas d'infra de tests front en place ; vérif par `ng build` + contrôle manuel).
