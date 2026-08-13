# Uniformisation des boutons + icône sidebar — Design Spec

**Date :** 2026-08-13
**Sous-projet :** Frontend → cohérence UI (boutons, icône sidebar)
**Branche :** `feature/ui-buttons-icons` (depuis `origin/master`)

## Objectif

1. Corriger l'icône de sidebar cassée (`shield-user`, Administration) — absente du jeu Tabler installé.
2. **Uniformiser les boutons** sur **toutes nos pages `_api`** (voyages, config, flotte, admin,
   système, RBAC, utilisateurs, SCIG) selon une convention unique : mêmes classes, mêmes tailles,
   icône + libellé, ordre de classes normalisé. Aucune logique modifiée — uniquement le balisage.

## Contraintes globales

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/ui-buttons-icons` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- **Aucune logique/route/composant TS modifié** hors balisage des boutons et une valeur d'icône.
- ⚠️ Disque quasi plein : garder de l'espace pour `npx ng build`.
- Vérif : `npx ng build` sans erreur après chaque module.

## A. Icône sidebar

Dans `angular/src/app/core/service/sidebar/sidebar.service.ts`, groupe `menuValue: 'Administration'` :
`icon2: 'shield-user'` → `icon2: 'shield-check'` (valide dans `assets/icons/tabler-icons/tabler-icons.css`).
Rendu via `<i class="ti ti-<icon2>">`. Aucun autre `icon2` du menu n'est invalide (vérifié).

## B. Convention de boutons

**Primaire (créer/nouveau)** — en tête de liste :
`class="btn btn-primary"` + `<i class="ti ti-circle-plus me-2"></i>` + « Nouveau X / Nouvelle X ».

**Actions de ligne** (tableaux) — `<button type="button">`, `class="btn btn-sm btn-outline-<couleur> me-1"`,
**icône `ti` + libellé court** (icône avec `me-1`) :

| Action | Couleur | Icône | Libellé |
|---|---|---|---|
| Détail / Voir | `outline-secondary` | `ti-eye` | Détail |
| Modifier | `outline-primary` | `ti-edit` | Modifier |
| Supprimer / Annuler | `outline-danger` | `ti-trash` (suppr.) / `ti-x` (annuler) | Supprimer / Annuler |
| Action positive (Livrer, Retrait, Embarquer, Valider, Charger…) | `outline-success` | contextuelle | libellé |
| Impression (reçu, ticket, étiquette, billets) | `outline-secondary` | `ti-printer` / `ti-ticket` / `ti-tag` | libellé |
| Info / secondaire | `outline-info` ou `outline-secondary` | contextuelle | libellé |

Règles :
- **Ordre des classes** : `btn` → `btn-sm` → `btn-outline-<couleur>` → modificateurs (`me-1`, `w-100`).
  Corriger les inversions type `btn-danger btn-sm` → `btn btn-sm btn-outline-danger`.
- **Élément** : `<button type="button">` pour une action ; garder `<a [routerLink]>` uniquement pour une
  vraie navigation.
- Le dernier bouton d'une rangée peut omettre `me-1`.

**Pied de modale** : Annuler = `class="btn btn-light"` (à gauche) ; action = `class="btn btn-primary"`
(ou couleur d'action) (à droite) — toujours dans cet ordre.

**Barre d'actions groupées** (sélection multiple) : `class="btn btn-sm btn-<couleur>"` en couleur pleine
(ex. `btn-danger` pour suppression de masse) — taille `btn-sm` uniforme ; icône + libellé.

## Périmètre (modules `_api` à normaliser)

Par groupe (un commit + `ng build` par groupe) :
1. `pages/voyages/*` (liste, détail, transbordement…)
2. `pages/voyages-config/*`
3. `pages/voyages-booking/*`
4. `pages/voyages-consignment/*`
5. `pages/fleet/*`
6. `pages/fleet-config/*`
7. `pages/admin/*`, `pages/system-config/*`, `pages/admin-rbac/*`, `pages/users/*`, `pages/scig/*`
   (ou équivalents réels selon l'arborescence)

Pour chaque page : aligner les boutons sur la convention ci-dessus (classes, ordre, icône+libellé,
élément). Ne pas toucher aux contrôles non-boutons (selects, inputs, `btn-close` des modales, boutons de
plan de sièges `seatClass`).

## Hors périmètre

- Pas de refonte de mise en page ni de couleurs de thème.
- Pas de modification des pages démo DreamsPOS (`src/app/features/*`).
- Pas de changement de comportement (handlers, routes, logique inchangés).
- Boutons spéciaux (sélecteurs de sièges, `btn-close`) laissés tels quels.

## Vérification

- `npx ng build` OK après chaque groupe de modules.
- Contrôle visuel : dans les tableaux, les actions ont toutes le même gabarit (`btn btn-sm
  btn-outline-*` + icône + libellé), l'icône Administration s'affiche, les pieds de modale sont homogènes.
- Grep de non-régression : plus de motif `btn-(danger|success|primary|secondary|info|warning) btn-sm`
  (ordre inversé) dans les pages `_api`.
