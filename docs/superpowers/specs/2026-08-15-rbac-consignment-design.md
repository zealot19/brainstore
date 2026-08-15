# RBAC — Tranche 3, module Colis & Bagages (`voyages_consignment`) — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Administration → RBAC (déploiement module par module)
**Branche :** `feature/rbac-consignment` (depuis `origin/master`)

## Contexte & objectif

Suite de la tranche 3 (après Flotte, Voyages, Réservations, Config Voyages). Applique le RBAC au module
**Colis & Bagages** (`voyages_consignment`). Les **bagages** réutilisent `ticketing.luggage.*` (déjà
seedés) ; les **colis** n'ont aucun code → on seed **`ticketing.parcel.view/manage`**.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-consignment` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser `ticketing.luggage.*` ; seuls `ticketing.parcel.*` sont nouveaux.
- Autres modules restent en `IsInstitutionAdmin`.
- ⚠️ Disque serré. Vérif : `manage.py check`, pytest, `npx ng build`.

## Composant 0 — Seed `ticketing.parcel.*`

Migration `apps/admin_rbac/migrations/0007_parcel_permissions_seed.py` (module `ticketing`,
`update_or_create`) : `ticketing.parcel.view` (« Consulter les colis », category `view`) et
`ticketing.parcel.manage` (« Gérer les colis », category `update`).

## Composant 1 — Backend : `voyages_consignment/config_api/views.py`

Remplacer `permission_classes = [IsInstitutionAdmin]` par `[IsAuthenticated, HasModulePermission]` + un
`permission_map` sur **chacune des 18 vues**. Import : ajouter `IsAuthenticated, HasModulePermission`.

| Vue | `permission_map` |
|---|---|
| `ParcelListView` | `{"GET":"ticketing.parcel.view","POST":"ticketing.parcel.manage"}` |
| `ParcelDetailView` | `{"GET":"ticketing.parcel.view","PATCH":"ticketing.parcel.manage","PUT":"ticketing.parcel.manage","DELETE":"ticketing.parcel.manage"}` |
| `ParcelPendingView` | `{"GET":"ticketing.parcel.view"}` |
| `ParcelAssignTripView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelArrivedView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelUnloadView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelPickupView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelCancelView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelBulkView` | `{"POST":"ticketing.parcel.manage"}` |
| `ParcelReceiptView` | `{"GET":"ticketing.parcel.view"}` |
| `BaggageListView` | `{"GET":"ticketing.luggage.view","POST":"ticketing.luggage.manage"}` |
| `BaggageDetailView` | `{"GET":"ticketing.luggage.view","PATCH":"ticketing.luggage.manage","PUT":"ticketing.luggage.manage","DELETE":"ticketing.luggage.manage"}` |
| `BaggageLoadView` | `{"POST":"ticketing.luggage.manage"}` |
| `BaggageDeliverView` | `{"POST":"ticketing.luggage.manage"}` |
| `BaggageBulkView` | `{"POST":"ticketing.luggage.manage"}` |
| `BaggageTicketView` | `{"GET":"ticketing.luggage.view"}` |
| `BaggageLabelView` | `{"GET":"ticketing.luggage.view"}` |
| `TripManifestView` | `{"GET":"ticketing.parcel.view"}` |

Objectif : **plus aucun `IsInstitutionAdmin`** dans le fichier.
Note manifeste : gaté sur `ticketing.parcel.view` (écran de chargement centré colis) ; un agent
purement bagages ne le verrait pas — acceptable pour ce pilote.

## Composant 2 — Frontend : menu (section Colis & Bagages)

- Colis → `ticketing.parcel.view`
- Réception colis → `ticketing.parcel.view`
- Manifeste voyage → `ticketing.parcel.view`
- Bagages → `ticketing.luggage.view`

## Composant 3 — Frontend : boutons (par page)

Pages `_api/pages/voyages-consignment/{parcels,reception,manifest,baggage}`. Importer
`HasPermissionDirective` + `*hasPermission` :

| Page | Handlers → code |
|---|---|
| `parcels` | openCreate/openEdit/delete/cancel/bulkCancel/askPickup/doPickup → `ticketing.parcel.manage` ; printReceipt → `ticketing.parcel.view` |
| `reception` | receiveOne/receiveSelectedFull/bulk → `ticketing.parcel.manage` |
| `manifest` | load/loadAll/unload → `ticketing.parcel.manage` ; loadBag/deliver → `ticketing.luggage.manage` |
| `baggage` | openCreate/openEdit/delete/askDeliver/doDeliver/deliver/bulk → `ticketing.luggage.manage` ; printTicket/printLabel → `ticketing.luggage.view` |

Non gatés (navigation/lecture/filtres) : `reload`, `clearFilters`, `showDetail`.
Boutons sous `*ngIf` → enveloppés dans `<ng-container *hasPermission>`.

## Gestion des erreurs / cas limites

- Permission insuffisante → 403 backend ; entrée de menu / bouton masqué.
- Admin d'institution / super-admin → accès complet (bypass).
- Vue/bouton sans permission déclarée → comportement inchangé.

## Vérification

- **Backend** : tests `@pytest.mark.django_db` (helper staff+rôle) :
  - staff `ticketing.parcel.view` → `ParcelListView` GET ≠ 403, POST → 403 ;
  - staff `ticketing.parcel.manage` → POST ≠ 403 ;
  - staff `ticketing.luggage.view` → `BaggageListView` GET ≠ 403, POST → 403 ;
  - staff sans permission → 403 ; admin d'institution → ≠ 403.
- Seed vérifié : `ticketing.parcel.view/manage` présents.
- `manage.py check` + `npx ng build` OK.
- Non-régression : `voyages_pricing` reste en `IsInstitutionAdmin`.

## Hors périmètre

- Tarifs (`voyages_pricing`) — dernière tranche.
