# RBAC — Tranche 3, pilote Voyages (`voyages_trips`) — Design Spec

**Date :** 2026-08-14
**Sous-projet :** Administration → RBAC (déploiement module par module)
**Branche :** `feature/rbac-voyages` (depuis `origin/master`)

## Contexte & objectif

Le mécanisme RBAC est en place (backend `HasModulePermission`, directive frontend `*hasPermission`,
filtrage du menu par `permission`) et validé sur la Flotte (tranches 1-2). Cette tranche l'applique au
module **Voyages** (`voyages_trips`), en **réutilisant les codes de permission existants** `voyage.*`
(décision validée : pas de re-seed). C'est le premier module de la tranche 3 ; les autres modules Voyage
(réservations, config, colis, tarifs) suivront.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-voyages` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les codes `voyage.*` **existants** ; **aucun nouveau code** à seeder pour ce pilote.
- Déploiement incrémental : seules les vues `voyages_trips` migrent ; les autres modules gardent `IsInstitutionAdmin`.
- Hiérarchie : super-admin & admin d'institution = bypass (déjà géré par `HasModulePermission` et le menu).
- Vérif : `manage.py check`, pytest ; `npx ng build`. ⚠️ Disque serré.

## Acquis réutilisés (vérifiés)

- `apps.core.permissions.HasModulePermission` : bypass super-admin/admin institution, sinon vérifie
  `view.permission_map[method]` via `get_user_permissions`.
- Directive `*hasPermission` (standalone) + filtrage du menu par `permission` (sidebar-one) + `me/permissions`
  renvoyant `*` pour les admins.
- Codes `voyage.*` seedés (11) : `voyage.trip.view/create/update/delete/depart/arrive/board/cancel`,
  `voyage.crew.view/manage`, `voyage.dashboard.view`.

## Composant 1 — Backend : `HasModulePermission` sur `voyages_trips/views.py`

Remplacer `permission_classes = [IsInstitutionAdmin]` par `[IsAuthenticated, HasModulePermission]` et
ajouter un `permission_map` sur **chaque** vue. Import : ajouter `IsAuthenticated, HasModulePermission`
à l'import `from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin`.

Convention (les actions sans code dédié → `voyage.trip.update`) :

| Vue | `permission_map` |
|---|---|
| `TripListCreateView` | `{"GET": "voyage.trip.view", "POST": "voyage.trip.create"}` |
| `TripDetailView` | `{"GET": "voyage.trip.view", "PATCH": "voyage.trip.update", "PUT": "voyage.trip.update", "DELETE": "voyage.trip.delete"}` |
| `TripEligibleVehiclesView` | `{"GET": "voyage.trip.view"}` |
| `TripAssignVehicleView` | `{"POST": "voyage.trip.update"}` |
| `TripCrewView` | `{"GET": "voyage.crew.view", "POST": "voyage.crew.manage"}` |
| `TripCrewDetailView` | `{"DELETE": "voyage.crew.manage"}` |
| `TripSeatsView` | `{"GET": "voyage.trip.view"}` |
| `_TripSeatStatusView` (→ `TripSeatBlockView`, `TripSeatUnblockView`) | `{"POST": "voyage.trip.update"}` |
| `TripStopsView` | `{"GET": "voyage.trip.view"}` |
| `_LifecycleView` (base) | `{"POST": "voyage.trip.update"}` |
| `TripSubmitView` | `{"POST": "voyage.trip.update"}` |
| `TripDepartView` | `{"POST": "voyage.trip.depart"}` |
| `TripCompleteView` | `{"POST": "voyage.trip.arrive"}` |
| `TripCancelView` | `{"POST": "voyage.trip.cancel"}` |
| `TripSuspendView` | `{"POST": "voyage.trip.update"}` |
| `TripResumeView` | `{"POST": "voyage.trip.update"}` |
| `TripMarkDelayedView` | `{"POST": "voyage.trip.update"}` |
| `TripClearDelayView` | `{"POST": "voyage.trip.update"}` |
| `TripTransbordEligibleView` | `{"GET": "voyage.trip.view"}` |
| `TripTransbordView` | `{"POST": "voyage.trip.update"}` |
| `TripTransbordHistoryView` | `{"GET": "voyage.trip.view"}` |

Note : les sous-classes de `_LifecycleView` avec un code spécifique (Depart/Complete/Cancel) **redéclarent**
leur `permission_map` ; celles sans spécificité héritent de la base (`voyage.trip.update`). Comme
`TripClearDelayView` hérite de `_LifecycleView`, elle prend `voyage.trip.update` (OK). Pour être explicite
et robuste, on déclare `permission_map` sur chaque sous-classe listée.

Toute vue `voyages_trips` non listée (ex. lecture d'un plan de sièges) prend `voyage.trip.view`.

## Composant 2 — Frontend : menu

Dans `sidebar.service.ts`, section « Voyages » : ajouter `permission: 'voyage.trip.view'` à l'entrée
« Voyages » (route `voyagesList`). Le filtrage générique existant masque l'entrée/section si l'utilisateur
n'a pas ce code (admins bypass).

## Composant 3 — Frontend : boutons

Pages `_api/pages/voyages/{list,trip-detail,roadmap}`. Importer `HasPermissionDirective` et poser
`*hasPermission` selon le handler `(click)` :

| Handler(s) | Code |
|---|---|
| `openCreate` | `voyage.trip.create` |
| `depart` | `voyage.trip.depart` |
| `complete` | `voyage.trip.arrive` |
| `cancel` | `voyage.trip.cancel` |
| `board`, `boardAll` | `voyage.trip.board` |
| `submit`, `suspend`, `resume`, `markDelayed`, `clearDelay`, `assign`, `openTransbord`, `doTransbord`, `openSelection`, `doSelection`, `toggleSeat` | `voyage.trip.update` |
| `addCrew`, `removeCrew` | `voyage.crew.manage` |

Non gatés (navigation/lecture/filtres) : `open`, `roadmap`, `printDoc`, `back`, `clearFilters`.
Les boutons déjà sous `*ngIf` (statut) sont enveloppés dans `<ng-container *hasPermission="…">` (comme Flotte).

## Gestion des erreurs / cas limites

- Permission insuffisante → 403 backend ; bouton/menu masqué côté front.
- Admin institution / super-admin → accès complet (bypass).
- Vue/bouton sans permission déclarée → comportement inchangé.

## Vérification

- **Backend** : tests `@pytest.mark.django_db` (helper staff+rôle) :
  - staff `voyage.trip.view` → `TripListCreateView` GET ≠ 403, POST → 403 ;
  - staff `voyage.trip.create` → POST ≠ 403 ;
  - staff sans permission voyage → GET → 403 ; admin d'institution → GET/POST ≠ 403.
- `manage.py check` OK ; `npx ng build` OK.
- Non-régression : les autres apps restent en `IsInstitutionAdmin`.

## Hors périmètre

- Autres modules Voyage : réservations (`voyages_booking`), config (`voyages_config`), colis/bagages
  (`voyages_consignment`), tarifs (`voyages_pricing`) — tranches suivantes.
- Re-seed de taxonomie (décision : réutiliser les codes existants).
- Guards de route.
