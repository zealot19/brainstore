# RBAC — Tranche 3, module Réservations (`voyages_booking`) — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Administration → RBAC (déploiement module par module)
**Branche :** `feature/rbac-reservations` (depuis `origin/master`)

## Contexte & objectif

Suite de la tranche 3 (après Flotte et Voyages). Applique le RBAC au module **Réservations**
(`voyages_booking`) en **réutilisant les codes existants `ticketing.*`**. Même mécanisme éprouvé :
`HasModulePermission` + `permission_map` (backend), `permission` de menu et directive `*hasPermission`
(frontend).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-reservations` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les codes `ticketing.*` existants. Les autres modules restent en `IsInstitutionAdmin`.
- ⚠️ Disque serré. Vérif : `manage.py check`, pytest, `npx ng build`.

## Composant 0 — Seed des codes `ticketing.*` (préalable)

Comme `voyage.*` et `fleet.*`, les 15 codes `ticketing.*` ne sont créés par aucune migration (présents
seulement en base de dev) → base fraîche/de test vide. Migration `apps/admin_rbac/migrations/0005_ticketing_permissions_seed.py`
(module `ticketing`, `update_or_create`, catégories reprises de la base) seedant :
`ticketing.booking.view/create/update/cancel/confirm/board/noshow`, `ticketing.customer.view/manage`,
`ticketing.ticket.view/print`, `ticketing.luggage.view/manage`, `ticketing.dashboard.view`, `ticketing.scan`.

## Composant 1 — Backend : `HasModulePermission` sur `voyages_booking/config_api/views.py`

Remplacer `permission_classes = [IsInstitutionAdmin]` par `[IsAuthenticated, HasModulePermission]` + un
`permission_map` sur **chacune des 17 vues**. Import : ajouter `IsAuthenticated, HasModulePermission`.

| Vue | `permission_map` |
|---|---|
| `PassengerListView` | `{"GET":"ticketing.customer.view","POST":"ticketing.customer.manage"}` |
| `PassengerDetailView` | `{"GET":"ticketing.customer.view","PATCH":"ticketing.customer.manage","PUT":"ticketing.customer.manage","DELETE":"ticketing.customer.manage"}` |
| `BookableTripsView` | `{"GET":"ticketing.booking.view"}` |
| `TripSeatMapView` | `{"GET":"ticketing.booking.view"}` |
| `TripDestinationsView` | `{"GET":"ticketing.booking.view"}` |
| `BookingListView` | `{"GET":"ticketing.booking.view","POST":"ticketing.booking.create"}` |
| `OpenReturnsView` | `{"GET":"ticketing.booking.view"}` |
| `BookingAssignReturnView` | `{"POST":"ticketing.booking.update"}` |
| `BookingDetailView` | `{"GET":"ticketing.booking.view","DELETE":"ticketing.booking.cancel"}` |
| `BookingCancelView` | `{"POST":"ticketing.booking.cancel"}` |
| `BookingNoShowView` | `{"POST":"ticketing.booking.noshow"}` |
| `TicketBoardView` | `{"POST":"ticketing.booking.board"}` |
| `TripBoardAllView` | `{"POST":"ticketing.booking.board"}` |
| `PassengerLoyaltyView` | `{"GET":"ticketing.customer.view"}` |
| `TripRoadmapView` | `{"GET":"ticketing.booking.view"}` |
| `BookingRenderTicketsView` | `{"GET":"ticketing.ticket.view"}` |
| `BookingPrintView` | `{"GET":"ticketing.ticket.print"}` |

(17 vues, toutes ont aujourd'hui `permission_classes = [IsInstitutionAdmin]`.)

## Composant 2 — Frontend : menu (section Réservations)

Ajouter `permission` à chaque sous-entrée : Passagers → `ticketing.customer.view` ;
Réservations → `ticketing.booking.view` ; Nouvelle réservation → `ticketing.booking.create` ;
Retours à traiter → `ticketing.booking.view`.

## Composant 3 — Frontend : boutons

Pages `_api/pages/voyages-booking/{passengers,bookings,new-booking,booking-detail,open-returns}`.
Importer `HasPermissionDirective` + `*hasPermission` selon le handler :

| Handler(s) | Code |
|---|---|
| `openCreate`, `openEdit`, `delete` | `ticketing.customer.manage` |
| `newBooking`, `submit`, `toggleSeat` | `ticketing.booking.create` |
| `cancel` | `ticketing.booking.cancel` |
| `noShow` | `ticketing.booking.noshow` |
| `board` | `ticketing.booking.board` |
| `pick`, `goAssignReturn`, `assign` | `ticketing.booking.update` |
| `printTickets` | `ticketing.ticket.print` |

Non gatés (navigation/lecture/filtres) : `open`, `reload`, `clearFilters`, `back`, `cancelPick`,
`showLoyalty`, `toggle`. Boutons sous `*ngIf` → enveloppés dans `<ng-container *hasPermission>`.

## Gestion des erreurs / cas limites

- Permission insuffisante → 403 backend ; bouton/menu masqué côté front.
- Admin d'institution / super-admin → accès complet (bypass).
- Vue/bouton sans permission déclarée → comportement inchangé.

## Vérification

- **Backend** : tests `@pytest.mark.django_db` (helper staff+rôle, même patron) :
  - staff `ticketing.booking.view` → `BookingListView` GET ≠ 403, POST → 403 ;
  - staff `ticketing.booking.create` → POST ≠ 403 ;
  - staff sans permission → GET → 403 ; admin d'institution → GET/POST ≠ 403.
- Seed vérifié : les 15 codes existent, rattachés au module `ticketing`.
- `manage.py check` + `npx ng build` OK.
- Non-régression : `voyages_config`, `voyages_consignment`, `voyages_pricing` restent en `IsInstitutionAdmin`.

## Hors périmètre

- Colis/Bagages (`voyages_consignment`, codes `ticketing.luggage.*`) — tranche suivante.
- Config Voyages / Tarifs — tranches suivantes.
- `ticketing.scan` (pas de vue dans `voyages_booking`).
