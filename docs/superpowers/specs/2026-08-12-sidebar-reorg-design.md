# Réorganisation du menu latéral (modules) — Design Spec

**Date :** 2026-08-12
**Sous-projet :** Frontend → navigation (sidebar)
**Branche :** `feature/sidebar-reorg` (depuis `origin/master`)

## Objectif

Aujourd'hui tous nos modules réels sont empilés dans **une seule section « Main »** du menu
latéral. Les **distinguer** en sections par domaine (Voyages, Flotte, Administration, Général),
avec des en-têtes clairs. **Aucune page n'est retirée**, aucun composant ni route touché : on
réorganise uniquement le regroupement et les titres du menu.

## Contraintes globales

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/sidebar-reorg` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- **Rien retiré** : les sections démo DreamsPOS (Inventory … UI Interface) restent inchangées ;
  les composants/routes ne sont pas modifiés.
- Vérif : `npx ng build` sans erreur + contrôle visuel du menu.

## Portée (fichiers)

- **Seul** `angular/src/app/core/service/sidebar/sidebar.service.ts`, tableau `sidebarData1`,
  objet de section `tittle: 'Main'` (lignes ~53-552).
- `sidebarData2` / `sidebarData3` ne contiennent **aucun** de nos modules réels (menus démo des
  mises en page alternatives) → **non modifiés**.

## Réorganisation

La section unique `{ tittle: 'Main', menu: [13 groupes] }` est **remplacée par 4 sections**,
chacune du même shape (`tittle, showAsTab, separateRoute, hasSubRoute, showSubRoute, menu`).
Les objets de menu (groupes) sont **déplacés tels quels** (mêmes `menuValue`, `route`, `icon2`,
sous-menus) — seul le regroupement change.

1. **Général**
   - Dashboard
2. **Voyages**
   - Voyages · Réservations · Colis & Bagages · Config Voyages
3. **Flotte**
   - Gestion Flotte · Config Flotte
4. **Administration**
   - Config Système · Admin RBAC · Utilisateurs · Administration (journal d'audit) · Super Admin · Sync SCIG

Ordre des sections : Général → Voyages → Flotte → Administration, puis les sections démo
existantes (Inventory, Stock, … UI Interface) inchangées, à la suite.

## Gestion des erreurs / risques

- Risque quasi nul : restructuration de données de menu dans un seul fichier ; aucun `route`
  modifié, aucun composant supprimé.
- Le gabarit du sidebar rend `tittle` comme en-tête de section et itère `menu` : ajouter des
  sections supplémentaires est déjà supporté (c'est ainsi que les sections démo fonctionnent).

## Vérification

- `npx ng build` → succès.
- Contrôle : le menu affiche désormais 4 en-têtes (Général, Voyages, Flotte, Administration)
  regroupant les modules, puis les sections démo inchangées. Tous les liens fonctionnent comme avant.

## Hors périmètre

- Aucune suppression de page/menu démo.
- Aucune modification de `sidebarData2` / `sidebarData3`.
- Aucun changement de composant, de route, ni d'icône.
