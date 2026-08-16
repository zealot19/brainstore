# G-Trésorerie T3a — Frontend (Caisses, Banques, Tableau de bord) — Design Spec

**Date :** 2026-08-16
**Sous-projet :** Trésorerie — T3a (frontend : référentiel & consultation)
**Branche :** `feature/treasury-t3a` (depuis `master`)
**Dépend de :** Trésorerie T1 (modèles + API + RBAC), Accounting A1 (comptes/journaux).

## Contexte & objectif

La Trésorerie a un backend complet (T1) mais **aucun écran**. T3a livre le premier lot d'UI : le
**tableau de bord** et la gestion des **caisses** et **comptes bancaires**, y compris le **lien vers la
comptabilité** (compte 571x/52x + journal) pour que le pont poste sur le bon sous-compte. Les opérations
(sessions, mouvements, transferts) sont le lot suivant (T3b).

## Décisions validées (brainstorm)

- Frontend Trésorerie en **deux lots** : **T3a** (caisses, banques, dashboard) puis T3b (sessions, mouvements, transferts).
- Formulaires Caisse/Banque avec **sélecteurs compte comptable + journal** → nécessite une petite
  **extension backend** (exposer `account`/`journal` sur les API register/bank).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Frontend dans `angular/`.
- Branche `feature/treasury-t3a` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les patrons existants (Accounting FE). Vérif backend : pytest + `manage.py check` ; frontend : `npx ng build`.

**Rappels codebase (vérifiés) :**
- Interceptor `apiUnwrapInterceptor` ne déballe QUE `{success,data}`. Les vues treasury renvoient des données **brutes** → `registers/`, `banks/` = **tableaux directs** ; `sessions/`/`transactions/`/`transfers/` = **paginés** (`{count,results}`) ; `stats/` = objet ; erreurs = `{detail}`.
- API T1 : `GET/POST /treasury/registers/`, `GET/PATCH/DELETE /treasury/registers/<id>/`, idem `banks/`, `GET /treasury/stats/`. RBAC `treasury.register.*`, `treasury.bank.*`, `treasury.dashboard.view` déjà seedés.
- Modèles `CashRegister`/`BankAccount` ont déjà `account` (FK accounting.Account) et `journal` (FK accounting.Journal) — **non exposés** par l'API.
- Services `create_cash_register(*, company, name, terminal, responsible, opening_balance, notes, created_by)`, `update_cash_register(register, *, updated_by, **fields)` (allowed set), idem bank.
- Accounting FE : `AccountService`/`JournalService` (`_api/services/accounting/`) exposent `list(search?)` (comptes/journaux de la société). `ACCOUNTING.accounts` accepte `?type=asset_cash`.
- Patron écran : `_api/pages/accounting/accounts/*` ; shell `_api/pages/accounting/accounting.component.ts` ; menu `sidebar.service.ts` ; routes `pages.routes.ts` ; constantes `core/helpers/routes.ts` ; `HasPermissionDirective`.

## Composant 1 — Extension backend (API register/bank ↔ compta)

`apps/treasury/serializers.py` :
- `CashRegisterReadSerializer` : ajouter `account`, `journal` (ids) + `account_code` (`source="account.code"`, read-only, default None), `journal_code` (`source="journal.code"`, default None), `journal_name` (`source="journal.name"`, default None).
- `CashRegisterWriteSerializer` + `CashRegisterUpdateSerializer` : ajouter `account_id` (UUID, required=False, allow_null), `journal_id` (idem).
- Idem `BankAccountReadSerializer`/`WriteSerializer`/`UpdateSerializer`.

`apps/treasury/services/services.py` :
- `create_cash_register(...)` : accepter `account_id=None, journal_id=None` et les passer au `CashRegister.objects.create(...)`.
- `update_cash_register` : ajouter `"account_id"`, `"journal_id"` au set `allowed`.
- Idem `create_bank_account`/`update_bank_account`.

`apps/treasury/views.py` :
- `CashRegisterListView.post` : passer `account_id=d.get("account_id")`, `journal_id=d.get("journal_id")` à `create_cash_register`.
- `BankAccountListView.post` : `**d` inclut déjà `account_id`/`journal_id` (create_bank_account les accepte).

(Pas de migration : les champs modèles existent depuis T1.)

## Composant 2 — Endpoints & services front

`api.config.ts` — bloc :
```
export const TREASURY = {
  stats:     `${API_BASE}/treasury/stats/`,
  registers: `${API_BASE}/treasury/registers/`,  register: (id) => `${API_BASE}/treasury/registers/${id}/`,
  banks:     `${API_BASE}/treasury/banks/`,      bank:     (id) => `${API_BASE}/treasury/banks/${id}/`,
};
```

`_api/models/treasury.models.ts` : interfaces `CashRegister`, `BankAccount`, `TreasuryStats` (champs alignés
sur les read serializers, incl. `account`, `journal`, `account_code`, `journal_code`).

`_api/services/treasury/` :
- `register.service.ts` : `list()` (GET → tableau direct), `create(data)`, `update(id,data)`, `delete(id)`.
- `bank.service.ts` : idem.
- `stats.service.ts` : `get()` (GET stats → objet).
(Services dédiés — pas de `BaseConfigService` car réponses brutes/non paginées.)

## Composant 3 — Écrans (pages)

Shell : `_api/pages/treasury/treasury.component.ts` (`<router-outlet>`).

### 3.1 Tableau de bord — `treasury/dashboard/dashboard.component`
Cartes de synthèse depuis `stats/` (ex. total caisses, total banques, soldes, nombre de sessions ouvertes —
selon les champs de `TreasuryStatsSerializer`). Lecture seule (`treasury.dashboard.view`).

### 3.2 Caisses — `treasury/registers/registers.component`
Table (Nom, Terminal, Responsable, Solde, Compte compta, Statut, Actions). Recherche. Modale create/edit :
`name`, `notes`, `is_active` (edit), **`account_id`** (select des comptes `type=asset_cash`, affiche `code — name`),
**`journal_id`** (select des journaux de type `cash`), `opening_balance` (create only). Suppression.
Boutons gated `*hasPermission="'treasury.register.manage'"`.

### 3.3 Comptes bancaires — `treasury/banks/banks.component`
Table (Banque, Intitulé, N° compte, Solde, Compte compta, Statut, Actions). Modale : `bank_name`,
`account_name`, `account_number`, `notes`, `is_active` (edit), **`account_id`** (select `type=asset_cash`),
**`journal_id`** (select journaux type `bank`), `opening_balance` (create). Gated `treasury.bank.manage`.

Chaque écran suit le patron `fuel-types`/accounts (spinner, `errorMsg` = `e?.error?.detail`, modale Bootstrap,
`@if/@for/@empty`, `HasPermissionDirective`, `InfoBannerComponent`).

## Composant 4 — Routes & menu

- `routes.ts` : `trzDashboard='/treasury/dashboard'`, `trzRegisters='/treasury/registers'`, `trzBanks='/treasury/banks'`.
- `pages.routes.ts` : bloc `path:'treasury'` (shell) + enfants `dashboard`, `registers`, `banks` (lazy) + `{path:'', redirectTo:'dashboard', pathMatch:'full'}`.
- `sidebar.service.ts` : section **« Trésorerie »**, groupe `menuValue:'Trésorerie'` (`hasSubRoute`, `icon2:'settings-cog'`, `base:'treasury'`), subMenus :
  - Tableau de bord → `trzDashboard`, `permission:'treasury.dashboard.view'`
  - Caisses → `trzRegisters`, `permission:'treasury.register.view'`
  - Comptes bancaires → `trzBanks`, `permission:'treasury.bank.view'`
  - (Sessions/Mouvements/Transferts ajoutés en T3b.)

## Gestion des erreurs / cas limites

- Erreurs affichées via `e?.error?.detail` (format treasury) — l'interceptor laisse passer `{detail}`.
- Listes brutes (registers/banks) : pas de `.results` ; le service retourne le tableau tel quel.
- Sélecteurs compte/journal vides si le plan n'est pas chargé → options « — Aucun — » ; champs facultatifs.
- Suppression refusée par le backend (ex. banque à solde non nul) → message `detail`.

## Vérification

- **Backend** : test `@pytest.mark.django_db` — POST `/treasury/registers/` avec `account_id`/`journal_id` → la caisse est créée avec le compte/journal liés ; le read serializer renvoie `account_code`/`journal_code`. `manage.py check` OK.
- **Frontend** : `npx ng build` réussit. Contrôle manuel : section « Trésorerie » visible ; création d'une caisse avec sélection du compte 571 et du journal CAISSE ; dashboard affiche les cartes.

## Hors périmètre (T3a)

- Sessions (ouvrir/clôturer), Mouvements (saisie), Transferts → **T3b**.
- Rapprochement bancaire, partenaire sur mouvement → T2.
- Modification du pont comptable (déjà livré en T1).
