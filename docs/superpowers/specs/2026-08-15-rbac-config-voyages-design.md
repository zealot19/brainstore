# RBAC — Tranche 3, module Config Voyages (`voyages_config`) — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Administration → RBAC (déploiement module par module)
**Branche :** `feature/rbac-config-voyages` (depuis `origin/master`)

## Contexte & objectif

Suite de la tranche 3 (après Flotte, Voyages, Réservations). Applique le RBAC au module **Config
Voyages** (`voyages_config`), en réutilisant les codes `transport.*` et en comblant le trou de
taxonomie par un couple groupé **`transport.config.view/manage`** (comme `fleet.config.*`).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/rbac-config-voyages` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les codes `transport.*` ; seuls `transport.config.view/manage` sont nouveaux.
- Les autres modules restent en `IsInstitutionAdmin`.
- ⚠️ Disque serré. Vérif : `manage.py check`, pytest, `npx ng build`.

## Composant 0 — Seed des codes `transport.*` (préalable)

Migration `apps/admin_rbac/migrations/0006_transport_permissions_seed.py` (module `transport`,
`update_or_create`), seedant les **12 codes existants** (`transport.city/route/fare/fareclass/terminal/category` × view/manage)
**+ 2 nouveaux** : `transport.config.view` (« Consulter la configuration voyages ») et
`transport.config.manage` (« Gérer la configuration voyages »). Motif identique aux tranches précédentes
(codes absents des migrations → base fraîche/test vide).

## Mapping ressource → code (view / manage)

| Ressource (menu / modèle) | Code |
|---|---|
| Villes (`Town`) | `transport.city` |
| Points de service (`ServicePoint`) | `transport.terminal` |
| Trajets (`Route`) + arrêts (`RouteStop`) | `transport.route` |
| Catégories tarifaires (`FareClass`) | `transport.fareclass` |
| Plans de bus (`SeatingPlan`) + sièges | `transport.config` |
| Affectations de plan (`VehicleSeatingAssignment`) | `transport.config` |
| Plages horaires (`TimeSlot`) | `transport.config` |
| Natures de colis (`ConsignmentNature`) | `transport.config` |
| Types de colis (`ConsignmentType`) | `transport.config` |
| Planifications (`ServicePattern`) | `transport.config` |
| Fidélité (`LoyaltyRule`) | `transport.config` |
| Paramètres (`VoyagesSettings`) | `transport.config` |
| Config billets (`TicketTemplate` + reset/preview) | `transport.config` |

GET → `<code>.view` ; écriture (POST/PATCH/PUT/DELETE, y compris bulk-delete) → `<code>.manage`.
`transport.category` et `transport.fare` ne sont pas utilisés ici (fare = module Tarifs ;
category = pas de ressource config correspondante).

## Composant 1 — Backend : `voyages_config/config_api/views.py`

- Import : ajouter `IsAuthenticated, HasModulePermission`.
- Bases `_ConfigListView` / `_ConfigDetailView` / `_ConfigBulkDeleteView` : `permission_classes =
  [IsAuthenticated, HasModulePermission]` (plus de `IsInstitutionAdmin`). Pas de `permission_map` par
  défaut ; chaque vue concrète en déclare un.
- Factory `_pair(model, ..., perm=...)` et `_bulk(model, perm=...)` : nouveau paramètre `perm` (base de
  code, ex. `"transport.city"`). Les classes générées reçoivent
  `permission_map = {"GET": f"{perm}.view", "POST"/"PATCH"/"PUT"/"DELETE": f"{perm}.manage"}` (List : GET+POST ;
  Detail : GET+PATCH+PUT+DELETE ; Bulk : POST→manage).
  Appels : Town→`transport.city`, FareClass→`transport.fareclass`, TimeSlot/ConsignmentNature/LoyaltyRule→`transport.config`.
- Vues dédiées : ajouter `permission_classes` + `permission_map` selon le mapping :
  ServicePoint(+bulk)→`transport.terminal` ; Route/RouteStop→`transport.route` ;
  ConsignmentType(+bulk), SeatingPlan(+bulk, +seats), VehicleSeatingAssignment(+bulk), ServicePattern(+bulk),
  VoyagesSettings, TicketTemplate/Reset/Preview→`transport.config`.
  (Reset/Preview du modèle de billet : POST/GET → `transport.config.manage`/`.view` selon la méthode.)
- Objectif : **plus aucun `IsInstitutionAdmin`** dans `voyages_config/config_api/views.py`.

## Composant 2 — Frontend : menu (section Config Voyages)

Ajouter `permission` à chaque sous-entrée :
Villes→`transport.city.view` ; Points de service→`transport.terminal.view` ; Trajets→`transport.route.view` ;
Catégories tarifaires→`transport.fareclass.view` ; Plans de bus / Affectations de plan / Plages horaires /
Natures de colis / Types de colis / Planifications / Fidélité / Config billets / Paramètres Voyages
→`transport.config.view`.
**Exclusion :** l'entrée « Tarifs » (`vcFares`) relève du module Tarifs (`voyages_pricing`, tranche
suivante) → **non gatée** ici.

## Composant 3 — Frontend : boutons

Pages `_api/pages/voyages-config/**`. Importer `HasPermissionDirective` et poser `*hasPermission` sur
Nouveau/Modifier/Supprimer/suppression groupée, avec le code `.manage` de la ressource de la page :
towns→`transport.city.manage` ; service-points→`transport.terminal.manage` ; routes→`transport.route.manage` ;
fare-classes→`transport.fareclass.manage` ; toutes les autres pages config→`transport.config.manage`.
(La page `fares` = module Tarifs → non touchée ici.)

## Gestion des erreurs / cas limites

- Permission insuffisante → 403 backend ; entrée de menu / bouton masqué.
- Admin d'institution / super-admin → accès complet (bypass).
- Vue concrète sans `permission_map` → risque « trop permissif » : s'assurer que **toutes** les vues
  concrètes en ont un (contrôle : 0 `IsInstitutionAdmin` restant + revue du diff).

## Vérification

- **Backend** : tests `@pytest.mark.django_db` (helper staff+rôle) :
  - staff `transport.city.view` → Town list GET ≠ 403, POST → 403 ;
  - staff `transport.city.manage` → POST ≠ 403 ;
  - staff `transport.config.view` → une ressource groupée (ex. time-slots) GET ≠ 403, POST → 403 ;
  - staff sans permission → 403 ; admin d'institution → ≠ 403.
- Seed vérifié : 14 codes `transport.*` présents (dont `transport.config.*`).
- `manage.py check` + `npx ng build` OK.
- Non-régression : `voyages_consignment`, `voyages_pricing` restent en `IsInstitutionAdmin`.

## Hors périmètre

- Tarifs (`voyages_pricing`) et Colis/Bagages (`voyages_consignment`) — tranches suivantes.
- `transport.category` / `transport.fare` (non pertinents pour ce module).
