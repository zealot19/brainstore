# RBAC — Tranche 3, module Tarifs (`voyages_pricing`) — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Administration → RBAC (déploiement module par module — dernier module)
**Branche :** `feature/rbac-pricing` (depuis `origin/master`)

## Contexte & objectif

Dernier module de la tranche 3. Applique le RBAC au module **Tarifs** (`voyages_pricing`) via les codes
`transport.fare.*` **déjà seedés** (migration `admin_rbac/0006`). Aucun nouveau code. Après cette tranche,
tous les modules métier (Flotte, Voyages, Réservations, Config Voyages, Colis/Bagages, Tarifs) sont gatés.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-pricing` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser `transport.fare.*` (existants). **Aucun seed.**
- ⚠️ Disque serré. Vérif : `manage.py check`, pytest, `npx ng build`.

## Composant 1 — Backend : `voyages_pricing/config_api/views.py`

Remplacer `permission_classes = [IsInstitutionAdmin]` par `[IsAuthenticated, HasModulePermission]` + un
`permission_map` sur les 4 vues. Import : ajouter `IsAuthenticated, HasModulePermission`.

| Vue | `permission_map` |
|---|---|
| `FareListView` | `{"GET":"transport.fare.view","POST":"transport.fare.manage"}` |
| `FareDetailView` | `{"GET":"transport.fare.view","PATCH":"transport.fare.manage","PUT":"transport.fare.manage","DELETE":"transport.fare.manage"}` |
| `FareBulkDeleteView` | `{"POST":"transport.fare.manage"}` |
| `RoutePointsView` | `{"GET":"transport.fare.view"}` |

Objectif : **plus aucun `IsInstitutionAdmin`** dans le fichier.

## Composant 2 — Frontend : menu

Gater l'entrée « Tarifs » (`vcFares`, base `fares`, section Config Voyages) avec
`permission: 'transport.fare.view'` (elle avait été laissée ouverte lors de la tranche Config Voyages).

## Composant 3 — Frontend : boutons

Page `_api/pages/voyages-config/fares` (la page Tarifs vit sous voyages-config). Importer
`HasPermissionDirective` et poser `*hasPermission="'transport.fare.manage'"` sur
Nouveau / Modifier / Supprimer / suppression groupée (openCreate/openEdit/delete/bulkDelete).

## Gestion des erreurs / cas limites

- Permission insuffisante → 403 backend ; entrée de menu / bouton masqué.
- Admin d'institution / super-admin → accès complet (bypass).

## Vérification

- **Backend** : tests `@pytest.mark.django_db` (helper staff+rôle) :
  - staff `transport.fare.view` → `FareListView` GET ≠ 403, POST → 403 ;
  - staff `transport.fare.manage` → POST ≠ 403 ;
  - staff sans permission → 403 ; admin d'institution → ≠ 403.
- `manage.py check` + `npx ng build` OK.
- Non-régression : aucun autre module modifié.

## Hors périmètre

- Rien : c'est le dernier module métier de la tranche 3.
