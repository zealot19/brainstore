# Uniformisation des boutons + icône sidebar — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corriger l'icône sidebar cassée et uniformiser les boutons sur toutes nos pages `_api` selon une convention unique (classes, tailles, icône + libellé, ordre des classes).

**Architecture:** Refactor de balisage HTML uniquement (templates `*.component.html` sous `src/_api/pages`). Aucune logique/TS/route touchée. Une valeur d'icône changée dans `sidebar.service.ts`. Normalisation module par module, avec `npx ng build` comme garde-fou après chaque groupe.

**Tech Stack:** Angular 21 (templates), Bootstrap 5 (classes `btn`), Tabler Icons (`ti ti-*`).

## Global Constraints

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/ui-buttons-icons` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- **Balisage boutons uniquement** (+ 1 icône). Aucun handler/route/logique modifié. Français.
- Ne pas toucher : `btn-close` des modales, boutons de plan de sièges (`seatClass(...)`), selects/inputs, pages démo `src/app/features/*`.
- ⚠️ Disque quasi plein : garder de l'espace ; si `ng build` échoue pour disque, libérer puis relancer.

## Convention (référence — appliquée à chaque page)

**Primaire (créer)** : `class="btn btn-primary"` + `<i class="ti ti-circle-plus me-2"></i>` + « Nouveau X / Nouvelle X ».

**Actions de ligne** : `<button type="button" class="btn btn-sm btn-outline-<couleur> me-1">` + `<i class="ti ti-<icone> me-1"></i>` + libellé. Table :

| Action | Couleur | Icône | Libellé |
|---|---|---|---|
| Détail / Voir | `secondary` | `eye` | Détail |
| Modifier | `primary` | `edit` | Modifier |
| Supprimer | `danger` | `trash` | Supprimer |
| Annuler | `danger` | `x` | Annuler |
| Positive (Livrer, Retrait, Embarquer, Charger, Valider) | `success` | contextuelle | libellé |
| Impression (reçu, ticket, étiquette, billets) | `secondary` | `printer`/`ticket`/`tag` | libellé |
| Info / secondaire | `info`/`secondary` | contextuelle | libellé |

**Règles :**
- Ordre des classes : `btn` → `btn-sm` → `btn-outline-<couleur>` → modificateurs (`me-1`, `w-100`). Corriger toute inversion (`btn-danger btn-sm` → `btn btn-sm btn-outline-danger`).
- Élément `<button type="button">` pour une action ; conserver `<a [routerLink]>` seulement pour une vraie navigation.
- Dernier bouton d'une rangée : `me-1` optionnel.
- **Pied de modale** : Annuler `class="btn btn-light"` (gauche) ; action `class="btn btn-primary"` (droite).
- **Barre d'actions groupées** (sélection multiple) : `class="btn btn-sm btn-<couleur>"` plein (ex. `btn-danger`), icône + libellé, taille `btn-sm`.

**Méthode par page (répétée dans chaque tâche) :**
1. Lister les boutons du dossier : `grep -rn "class=\"btn" <dossier>`.
2. Pour chaque bouton d'action, aligner classes/icône/libellé sur la table. Laisser `btn-close`, boutons de sièges, primaires déjà conformes.
3. Build + commit.

---

### Task 1: Icône sidebar (Administration)

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 1: Remplacer l'icône invalide**

Dans le groupe `menuValue: 'Administration'`, remplacer `icon2: 'shield-user',` par `icon2: 'shield-check',`.

Run (repérage) : `grep -n "shield-user" angular/src/app/core/service/sidebar/sidebar.service.ts`

- [ ] **Step 2: Vérifier qu'aucun `shield-user` ne subsiste**

Run: `grep -c "shield-user" angular/src/app/core/service/sidebar/sidebar.service.ts`
Expected: `0`.

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "fix(menu): icone Administration valide (shield-check)"
```

---

### Task 2: Boutons — `voyages-config` (13 pages)

**Files:**
- Modify: `angular/src/_api/pages/voyages-config/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/voyages-config | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention**

Pour chaque bouton (hors `btn-close`, sièges) : aligner sur la table de la section « Convention ».
Points fréquents à corriger dans ces pages : boutons Modifier/Supprimer de ligne en
`btn btn-sm btn-outline-primary me-1` / `btn btn-sm btn-outline-danger me-1` avec `ti-edit`/`ti-trash` +
libellé ; primaires déjà en `btn btn-primary` + `ti-circle-plus me-2` (laisser) ; pieds de modale
Annuler `btn btn-light` / action `btn btn-primary`.

- [ ] **Step 3: Vérifier l'ordre des classes (aucune inversion)**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/voyages-config`
Expected: aucun résultat (sinon corriger).

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(voyages-config): boutons uniformises (convention)"
```

---

### Task 3: Boutons — `voyages` + `voyages-booking` (6 pages)

**Files:**
- Modify: `angular/src/_api/pages/voyages/**/*.component.html`
- Modify: `angular/src/_api/pages/voyages-booking/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/voyages angular/src/_api/pages/voyages-booking | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention**

Aligner chaque bouton d'action sur la table. Cas présents : détail (`btn btn-sm btn-outline-secondary me-1`
`ti-eye`), embarquement/valider (`btn btn-sm btn-outline-success me-1`), annuler (`btn btn-sm
btn-outline-danger me-1` `ti-x`), transbordement (garder les 2 boutons du détail voyage en
`btn btn-sm btn-outline-primary`/`btn btn-sm btn-outline-secondary`). Pieds de modale homogènes.
Ne pas toucher aux boutons de sièges (`seatClass(...)`).

- [ ] **Step 3: Vérifier l'ordre des classes**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/voyages angular/src/_api/pages/voyages-booking`
Expected: aucun résultat.

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages angular/src/_api/pages/voyages-booking
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(voyages, reservations): boutons uniformises (convention)"
```

---

### Task 4: Boutons — `voyages-consignment` + `voyages-pricing` (5 pages)

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/**/*.component.html`
- Modify: `angular/src/_api/pages/voyages-pricing/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/voyages-consignment angular/src/_api/pages/voyages-pricing | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention**

Colis/Bagages : détail (`outline-secondary` `ti-eye`), Modifier (`outline-primary` `ti-edit`),
Livrer/Retrait (`outline-success`), Annuler (`outline-danger` `ti-x`), impressions Reçu/Ticket/Étiquette
(`outline-secondary` `ti-printer`/`ti-ticket`/`ti-tag`). Barre d'actions groupées (Charger/Retirer/Annuler
en masse) : `btn btn-sm btn-<couleur>` plein + icône + libellé. Normaliser l'ordre des classes.

- [ ] **Step 3: Vérifier l'ordre des classes**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/voyages-consignment angular/src/_api/pages/voyages-pricing`
Expected: aucun résultat.

- [ ] **Step 4: Build + Commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-consignment angular/src/_api/pages/voyages-pricing
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(colis/bagages, pricing): boutons uniformises (convention)"
```

---

### Task 5: Boutons — `fleet` (13 pages)

**Files:**
- Modify: `angular/src/_api/pages/fleet/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/fleet | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention**

Aligner chaque bouton d'action (Détail/Modifier/Supprimer + actions métier) sur la table. Primaires
« Nouveau » en `btn btn-primary` + `ti-circle-plus me-2`. Pieds de modale homogènes.

- [ ] **Step 3: Vérifier l'ordre des classes**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/fleet`
Expected: aucun résultat.

- [ ] **Step 4: Build + Commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/fleet
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(fleet): boutons uniformises (convention)"
```

---

### Task 6: Boutons — `fleet-config` (11 pages)

**Files:**
- Modify: `angular/src/_api/pages/fleet-config/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/fleet-config | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention** (mêmes règles que Task 2 pour des pages de configuration CRUD).

- [ ] **Step 3: Vérifier l'ordre des classes**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/fleet-config`
Expected: aucun résultat.

- [ ] **Step 4: Build + Commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/fleet-config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(fleet-config): boutons uniformises (convention)"
```

---

### Task 7: Boutons — `admin` + `system` + `rbac` + `users` + `scig` (19 pages)

**Files:**
- Modify: `angular/src/_api/pages/admin/**/*.component.html`
- Modify: `angular/src/_api/pages/system/**/*.component.html`
- Modify: `angular/src/_api/pages/rbac/**/*.component.html`
- Modify: `angular/src/_api/pages/users/**/*.component.html`
- Modify: `angular/src/_api/pages/scig/**/*.component.html`

- [ ] **Step 1: Lister les boutons**

Run: `grep -rn "class=\"btn" angular/src/_api/pages/admin angular/src/_api/pages/system angular/src/_api/pages/rbac angular/src/_api/pages/users angular/src/_api/pages/scig | grep -v btn-close`

- [ ] **Step 2: Appliquer la convention** (mêmes règles).

- [ ] **Step 3: Vérifier l'ordre des classes**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages/admin angular/src/_api/pages/system angular/src/_api/pages/rbac angular/src/_api/pages/users angular/src/_api/pages/scig`
Expected: aucun résultat.

- [ ] **Step 4: Build + Commit**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/admin angular/src/_api/pages/system angular/src/_api/pages/rbac angular/src/_api/pages/users angular/src/_api/pages/scig
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "style(admin/systeme/rbac/users/scig): boutons uniformises (convention)"
```

---

### Task 8: Vérification finale + fusion

- [ ] **Step 1: Non-régression globale (ordre des classes)**

Run: `grep -rnE "class=\"btn btn-(danger|success|primary|secondary|info|warning) btn-sm" angular/src/_api/pages`
Expected: aucun résultat (toutes les inversions corrigées).

- [ ] **Step 2: Build de contrôle**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Icône `shield-user` → `shield-check` → Task 1. ✅
- Convention de boutons (primaire, actions de ligne icône+libellé, ordre des classes, pied de modale,
  actions groupées) → section « Convention » + Tasks 2-7. ✅
- Périmètre : tous les groupes `_api` (voyages, config, booking, consignment, pricing, fleet, fleet-config,
  admin, system, rbac, users, scig) → Tasks 2-7. ✅
- Hors périmètre (btn-close, sièges, pages démo) → rappelé dans Global Constraints et chaque tâche. ✅
- Vérif `ng build` par groupe + grep de non-régression → chaque tâche + Task 8. ✅

**Placeholder scan :** pas de TBD/TODO. La transformation est rule-based : la table de convention +
les greps de repérage/vérification donnent le « comment » exact ; reproduire chaque bouton des 64
templates n'est pas pertinent (refactor de style), la table est la source de vérité.

**Type consistency :** aucun symbole TS introduit ; seules des classes CSS Bootstrap (`btn`, `btn-sm`,
`btn-outline-*`) et des classes d'icônes Tabler (`ti ti-*`) sont utilisées, identiques d'une tâche à
l'autre.
