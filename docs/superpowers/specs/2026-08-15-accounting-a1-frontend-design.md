# G-Accounting A1 — Écrans Comptabilité (frontend) — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Comptabilité (G-Accounting) — A1-FE (interfaces du référentiel)
**Branche :** `feature/accounting-a1-frontend` (depuis `master`)
**Dépend de :** A1 backend (fusionné) — API `/api/v1/accounting/…` + codes RBAC `accounting.*`.

## Contexte & objectif

A1 backend est livré (modèles, plan OHADA seedé, API, RBAC) mais **aucun écran** n'existe : le module
n'apparaît pas dans l'app. Cette tranche ajoute les **écrans gérables** du référentiel comptable dans
l'Angular, en réutilisant les patrons existants (`_api/pages`, `_api/services`, `BaseConfigService`,
directive `*hasPermission`, menu `sidebar.service.ts`). Objectif : rendre le plan comptable, les journaux
et les exercices/périodes consultables et modifiables depuis l'interface, avec gating RBAC.

## Décisions validées (brainstorm)

- **Les 3 écrans** : Plan comptable, Journaux, Exercices & Périodes.
- Nouvelle section de menu **« Comptabilité »** ; routes sous `/accounting/…` (aucune collision : le
  `base2:'accounting'` du template de démo n'a pas de routes réelles).
- Périmètre gérable = **CRUD complet** (créer/modifier + déprécier compte, clôturer période).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/accounting-a1-frontend` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les patrons existants ; ne pas restructurer l'existant.
- L'`apiUnwrapInterceptor` déballe `{success,data}` → les services reçoivent directement `T`/`T[]`.
- Vérif : `ng build` (le frontend n'a pas de suite de tests unitaires ; build = garde-fou).

## Patrons réutilisés (vérifiés)

- Service CRUD générique : `_api/services/fleet-config/base.config.service.ts::BaseConfigService<T>`
  (`list(search?)`, `get(id)`, `create(data)`, `update(id,data)`, `delete(id)`).
- Endpoints centralisés : `_api/config/api.config.ts` (ex. bloc `FLEET_CONFIG`), `API_BASE = environment.apiUrl` (= `…/api/v1`).
- Écran CRUD type : `_api/pages/fleet-config/fuel-types/*` (table + modale Bootstrap `#…-modal` + `*hasPermission` + control-flow `@if/@for/@empty` + `InfoBannerComponent`).
- Shell module : `_api/pages/fleet-config/fleet-config.component.ts` (`template: '<router-outlet></router-outlet>'`).
- Routes : `src/app/features/pages/pages.routes.ts` (parent `path` + `children` lazy `loadComponent`).
- Menu : `src/app/core/service/sidebar/sidebar.service.ts` (`sidebarData1` → sections `{tittle,menu:[…]}`,
  groupe `{menuValue,hasSubRoute,icon2,base,subMenus:[{menuValue,route,base,permission}]}`), filtré par
  `sidebar-one.component.ts::buildMenuForUser` (masque items/groupes/sections sans permission visible).
- Constantes de routes : `src/app/core/helpers/routes.ts`.
- Directive : `app/shared/directives/has-permission.directive.ts` (`*hasPermission="'code'"`).

## Composant 1 — Endpoints & modèles

`api.config.ts` : ajouter un bloc
```
export const ACCOUNTING = {
  accounts:    `${API_BASE}/accounting/accounts/`,
  account:     (id) => `${API_BASE}/accounting/accounts/${id}/`,
  journals:    `${API_BASE}/accounting/journals/`,
  journal:     (id) => `${API_BASE}/accounting/journals/${id}/`,
  fiscalYears: `${API_BASE}/accounting/fiscal-years/`,
  periods:     `${API_BASE}/accounting/periods/`,
  periodClose: (id) => `${API_BASE}/accounting/periods/${id}/close/`,
};
```
`_api/models/accounting.models.ts` : interfaces `Account`, `Journal`, `FiscalYear`, `AccountingPeriod`
(champs alignés sur les sérialiseurs backend) + tableaux d'options de type (`ACCOUNT_TYPES`, `JOURNAL_TYPES`)
avec libellés FR pour les `<select>` et badges.

## Composant 2 — Services

`_api/services/accounting/` :
- `account.service.ts` : `AccountService extends BaseConfigService<Account>` (ACCOUNTING.accounts/account).
- `journal.service.ts` : `JournalService extends BaseConfigService<Journal>`.
- `fiscal-year.service.ts` : `FiscalYearService extends BaseConfigService<FiscalYear>`.
- `period.service.ts` : `PeriodService extends BaseConfigService<AccountingPeriod>` + méthodes
  `listByYear(fyId)` (GET periods?fiscal_year=…) et `close(id)` (POST periodClose).

## Composant 3 — Écrans (pages)

Shell : `_api/pages/accounting/accounting.component.ts` (`<router-outlet>`).

### 3.1 Plan comptable — `accounting/accounts/accounts.component`
Table (Code, Libellé, Type [badge], Lettrable, Statut [Actif/Déprécié], Actions). Recherche + filtre par
type (`<select>` sur `ACCOUNT_TYPES`). Modale create/edit : `code`, `name`, `account_type` (select),
`parent` (select des comptes existants, optionnel), `reconcile` (switch), `note`. Actions par ligne :
**Modifier** ; **Déprécier / Réactiver** (PATCH `deprecated`). Boutons gated `*hasPermission="'accounting.account.manage'"`.
(Pas de suppression dure : la dépréciation est le retrait standard d'un compte.)

### 3.2 Journaux — `accounting/journals/journals.component`
Table (Code, Nom, Type [badge], Compte défaut, Actif, Actions). Modale : `code`, `name`, `journal_type`
(select), `default_account` (select des comptes), `sequence_prefix`, `active` (switch). Actions : **Modifier**.
Gated `accounting.journal.manage`.

### 3.3 Exercices & Périodes — `accounting/fiscal-years/fiscal-years.component`
Deux zones : (a) **Exercices** — table (Code, Nom, Début, Fin, État) + « Nouvel exercice » (modale : code,
name, date_start, date_end) gated `accounting.fiscalyear.manage` ; clic sur une ligne sélectionne l'exercice.
(b) **Périodes de l'exercice sélectionné** — table (Code, Nom, Début, Fin, État) + « Nouvelle période »
(modale) gated `accounting.period.manage` + bouton **Clôturer** par période ouverte (POST close) gated
`accounting.period.manage`. Un `InfoBannerComponent` explique que le plan/journaux/exercice sont pré‑remplis
par la création de la société.

Chaque écran suit le patron `fuel-types` (chargement spinner, `errorMsg`, fermeture de modale via
`[data-bs-dismiss]`, `@if/@for/@empty`). Import de `HasPermissionDirective`, `CommonModule`, `FormsModule`,
`ReactiveFormsModule`, `InfoBannerComponent`.

## Composant 4 — Routes & menu

- `routes.ts` : constantes `accAccounts='/accounting/accounts'`, `accJournals='/accounting/journals'`,
  `accFiscalYears='/accounting/fiscal-years'`.
- `pages.routes.ts` : bloc module `path:'accounting'` (shell) + 3 enfants lazy `loadComponent`.
- `sidebar.service.ts` : nouvelle section **« Comptabilité »** avec un groupe `menuValue:'Comptabilité'`
  (`hasSubRoute:true`, `icon2`), `subMenus` :
  - Plan comptable → `accAccounts`, `permission:'accounting.account.view'`
  - Journaux → `accJournals`, `permission:'accounting.journal.view'`
  - Exercices & Périodes → `accFiscalYears`, `permission:'accounting.fiscalyear.view'`
  (super-admin / admin d'institution voient tout via `buildMenuForUser`.)

## Gestion des erreurs / cas limites

- Erreur API : `errorMsg` dans la modale (`e?.error?.detail ?? e?.error?.message ?? 'Erreur.'`) ; erreurs de
  liste → arrêt du spinner, table vide.
- Compte parent : le `<select>` liste les comptes de la société (198) ; parent optionnel.
- Clôture période : bouton masqué/inactif si période non `open` ; message backend si refus.
- Aucune donnée : lignes `@empty`.

## Vérification

- `cd angular && npx ng build` réussit (compilation stricte des standalone/templates).
- Contrôle manuel documenté : connexion → section « Comptabilité » visible ; Plan comptable liste 198
  comptes ; création d'un sous‑compte ; un utilisateur avec seulement `accounting.account.view` voit la
  liste sans boutons de gestion (gating `*hasPermission`).

## Hors périmètre

- Écritures / saisie d'OD, `AccountingService.create_entry` (A2 backend + son UI).
- Reporting (grand livre, balance, résultat, bilan) — A3 (réutilisera les pages template `finance/*`).
- Dashboard comptable, export PDF/Excel, lettrage, clôture d'exercice.
- Resynchronisation des rôles par défaut existants (déjà notée en A1 backend).
