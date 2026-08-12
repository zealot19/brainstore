# Réorganisation du menu latéral (modules) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Découper la section unique « Main » du menu latéral en 4 sections par domaine (Général, Voyages, Flotte, Administration), sans retirer aucune page.

**Architecture:** Édition de données de menu dans un seul fichier (`sidebar.service.ts`, tableau `sidebarData1`). On remplace l'objet de section `tittle: 'Main'` par 4 objets de section de même forme, en déplaçant les groupes de menu **verbatim** (aucun `menuValue`/`route`/sous-menu modifié). `sidebarData2/3` (menus démo alternatifs, sans nos modules) ne sont pas touchés.

**Tech Stack:** Angular 21 (données de sidebar TypeScript).

## Global Constraints

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/sidebar-reorg` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- **Rien retiré** : aucun groupe/page supprimé ; composants et routes intacts ; sections démo (Inventory … UI Interface) inchangées.
- Vérif : `cd .../ERP-master/angular && npx ng build` sans erreur.

**Contenu actuel de la section « Main » (`sidebarData1`, lignes ~53-551), 15 groupes dans l'ordre :**
Voyages, Réservations, Colis & Bagages, Config Voyages, Config Flotte, Gestion Flotte, Dashboard,
Super Admin, Config Système, Admin RBAC, Utilisateurs, Administration, Sync SCIG, Application, Layouts.

**Cible — 4 sections (chaque groupe déplacé tel quel) :**
- **Général** : Dashboard, Application, Layouts *(Application & Layouts sont des groupes démo qui etaient dans « Main » ; on les conserve ici pour ne rien retirer)*
- **Voyages** : Voyages, Réservations, Colis & Bagages, Config Voyages
- **Flotte** : Gestion Flotte, Config Flotte
- **Administration** : Config Système, Admin RBAC, Utilisateurs, Administration, Super Admin, Sync SCIG

---

### Task 1: Découper « Main » en 4 sections

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (objet `tittle: 'Main'` de `sidebarData1`, lignes ~53-551)

**Interfaces:**
- Produces: 4 objets de section (`tittle` = Général / Voyages / Flotte / Administration), chacun de la forme :
  ```ts
  { tittle: '<NAME>', showAsTab: false, separateRoute: false, hasSubRoute: false, showSubRoute: true, menu: [ /* groupes */ ] },
  ```

- [ ] **Step 1: Repérer les bornes exactes**

Run: `grep -nE "tittle: 'Main'|tittle: 'Inventory'" angular/src/app/core/service/sidebar/sidebar.service.ts`
Expected : `Main` vers la ligne 54, `Inventory` vers 553. La section Main = l'objet `{ … }` qui commence à la ligne du `{` précédant `tittle: 'Main'` (~53) et se termine à `},` juste avant l'objet `tittle: 'Inventory'` (~552).

- [ ] **Step 2: Remplacer l'en-tête de section « Main » par la 1re section « Général »**

Dans `sidebar.service.ts`, remplacer :

```ts
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
```

par :

```ts
    {
      tittle: 'Général',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
```

- [ ] **Step 3: Déplacer les groupes Dashboard / Application / Layouts en tête (section Général)**

Objectif : la section **Général** ne contient que les groupes `Dashboard` (menuValue: 'Dashboard'), `Application` (menuValue: 'Application') et `Layouts` (menuValue: 'Layouts').

- Couper les 3 blocs `{ menuValue: 'Dashboard' … }`, `{ menuValue: 'Application' … }`, `{ menuValue: 'Layouts' … }` (verbatim, sans en modifier le contenu) de leurs positions actuelles.
- Les coller **au début** du `menu: [` de la section Général (juste après `menu: [`), dans cet ordre : Dashboard, Application, Layouts.
- Fermer la section Général **après** le groupe Layouts avec :

```ts
      ],
    },
```

- [ ] **Step 4: Ouvrir la section « Voyages » et y placer ses 4 groupes**

Juste après la fermeture de Général, insérer l'en-tête :

```ts
    {
      tittle: 'Voyages',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
```

Puis, dans son `menu`, laisser (dans l'ordre) les groupes **verbatim** : `Voyages`, `Réservations`,
`Colis & Bagages`, `Config Voyages`. Fermer avec :

```ts
      ],
    },
```

- [ ] **Step 5: Ouvrir la section « Flotte » et y placer ses 2 groupes**

Insérer l'en-tête :

```ts
    {
      tittle: 'Flotte',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
```

Puis, dans l'ordre, les groupes **verbatim** : `Gestion Flotte`, `Config Flotte`. Fermer avec :

```ts
      ],
    },
```

- [ ] **Step 6: Ouvrir la section « Administration » et y placer ses 6 groupes**

Insérer l'en-tête :

```ts
    {
      tittle: 'Administration',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
```

Puis, dans l'ordre, les groupes **verbatim** : `Config Système`, `Admin RBAC`, `Utilisateurs`,
`Administration`, `Super Admin`, `Sync SCIG`. Fermer avec :

```ts
      ],
    },
```

Après cette fermeture doit venir, inchangé, l'objet `{ tittle: 'Inventory', … }` (les sections démo).

- [ ] **Step 7: Vérifier l'équilibre des accolades / la syntaxe**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx tsc --noEmit -p tsconfig.app.json 2>&1 | grep -i "sidebar.service" | head`
Expected: aucune erreur pointant `sidebar.service.ts` (pas de parenthèse/accolade manquante).
(Si `tsconfig.app.json` n'existe pas, passer directement au build à l'étape suivante.)

- [ ] **Step 8: Build Angular**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete` (warnings existants tolérés).

- [ ] **Step 9: Vérifier le résultat (grep de contrôle)**

Run: `grep -nE "tittle: '(Général|Voyages|Flotte|Administration|Main)'" angular/src/app/core/service/sidebar/sidebar.service.ts`
Expected: présence de `Général`, `Voyages`, `Flotte`, `Administration` ; **absence** de `'Main'`.

Run: `grep -cE "menuValue: '(Voyages|Réservations|Colis & Bagages|Config Voyages|Config Flotte|Gestion Flotte|Dashboard|Super Admin|Config Système|Admin RBAC|Utilisateurs|Administration|Sync SCIG|Application|Layouts)'" angular/src/app/core/service/sidebar/sidebar.service.ts`
Expected: ≥ 15 (aucun groupe perdu ; nombre inchangé par rapport à avant).

- [ ] **Step 10: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "refactor(menu): decoupe la section Main en sections General/Voyages/Flotte/Administration"
```

---

### Task 2: Vérification finale + fusion

**Files:** aucun (vérification).

- [ ] **Step 1: Build de contrôle**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 2: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push) :
```
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master checkout master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master merge --ff-only feature/sidebar-reorg
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master push origin master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master branch -d feature/sidebar-reorg
```

---

## Self-Review

**Spec coverage :**
- Découpe « Main » en 4 sections (Général, Voyages, Flotte, Administration) → Task 1. ✅
- Groupes déplacés verbatim, rien retiré → Task 1 (blocs coupés/collés sans modification), Step 9 (contrôle ≥ 15 groupes). ✅
- `sidebarData2/3` non touchés ; composants/routes intacts → aucune tâche ne les modifie. ✅
- Vérif `ng build` → Task 1 Step 8 + Task 2. ✅
- Placement de Application & Layouts (groupes démo présents dans Main) sous Général pour ne rien retirer → Task 1 Step 3 (documenté). ✅

**Placeholder scan :** aucun TBD/TODO. Les manipulations sont des déplacements verbatim de blocs identifiés par leur `menuValue` ; l'ordre et les en-têtes exacts sont fournis.

**Type consistency :** l'objet de section conserve exactement les clés existantes (`tittle, showAsTab, separateRoute, hasSubRoute, showSubRoute, menu`) ; aucun champ de groupe/sous-menu n'est renommé.
