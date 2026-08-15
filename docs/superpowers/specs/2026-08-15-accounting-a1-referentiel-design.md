# G-Accounting — Sous-projet A1 : Référentiel comptable — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Comptabilité (G-Accounting) — A1 (fondation)
**Branche :** `feature/accounting-a1` (depuis `origin/master`)
**Spec source :** « G-Accounting — Spécification du Module de Comptabilité Générale v1.0 » (fournie par le client)

## Contexte & objectif

Premier sous-projet du module Comptabilité, socle de toute la suite financière. Il pose le **référentiel
comptable OHADA** (plan de comptes, journaux, exercices, périodes), multi-tenant, seedé par société.
Il ne contient **pas** encore le moteur d'écritures (A2), le reporting (A3) ni le lettrage/clôtures (A4).

Ordre validé : **A1 (référentiel) -> A2 (moteur d'écritures) -> Trésorerie -> A3/A4**.

## Décisions validées (brainstorm)

- Plan comptable **SYSCOHADA complet** (standard, extensible/éditable par société).
- **Copie par société** : chaque société reçoit sa propre copie du plan + journaux + exercice courant,
  seedée à la création (hook `_bootstrap_company`) + commande de backfill.
- **Backend-first** : modèles, seed, API, RBAC backend. Frontend Angular (écrans plan/journaux/périodes)
  hors A1 (viendra quand les écrans seront conçus).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/accounting-a1` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Multi-tenant : tout modèle scopé `company` (FK `system_config.Company`), `unique_together(company, code)`.
  Étend `apps.core.models.BaseModel` (TimeStamped + SoftDelete + Audit).
- Devise de référence XAF. Référentiel : SYSCOHADA Révisé (OHADA 2017).
- Vérif : `manage.py check`, `manage.py makemigrations --check`, pytest.

## Composant 1 — App `accounting` + modèles

Nouvelle app `apps/accounting` (ajoutée à `INSTALLED_APPS` et au router `api/v1/`).

### 1.1 `Account`
Champs : `company` (FK), `code` (CharField 10), `name` (255), `account_type` (choices), `reconcile` (bool,
défaut False), `deprecated` (bool, défaut False), `currency` (défaut "XAF"), `parent` (self FK null),
`note` (TextField blank). `Meta.unique_together = [("company", "code")]`, ordering par `code`.

`account_type` (TextChoices) : `asset_cash`, `asset_receivable`, `asset_current`, `asset_fixed`,
`liability_payable`, `liability_current`, `equity`, `income`, `expense`, `tax`.

### 1.2 `Journal`
Champs : `company` (FK), `code` (10), `name` (100), `journal_type` (choices : `cash`,`bank`,`sale`,
`purchase`,`general`), `default_account` (FK Account null), `sequence_prefix` (CharField, ex
`"VTE/{YYYY}/"`), `agency` (FK `system_config.Agency` null), `active` (bool défaut True).
`unique_together = [("company", "code")]`.

### 1.3 `FiscalYear`
Champs : `company` (FK), `name` (ex « Exercice 2026 »), `code` (ex « FY2026 »), `date_start`, `date_end`,
`state` (choices `open`/`closed`, défaut `open`). `unique_together = [("company", "code")]`.

### 1.4 `AccountingPeriod`
Champs : `company` (FK), `fiscal_year` (FK), `name` (ex « Janvier 2026 »), `code` (ex « 2026-01 »),
`date_start`, `date_end`, `state` (choices `open`/`closed`/`locked`, défaut `open`).
`unique_together = [("company", "code")]`, ordering par `date_start`.

## Composant 2 — Plan OHADA de référence (JSON)

Fichier versionné `apps/accounting/data/ohada_syscohada.json` : liste d'objets
`{ "code", "name", "type", "reconcile", "parent" }` couvrant le plan **SYSCOHADA révisé standard**
(classes 1 à 8 : divisions à 2 chiffres + comptes principaux à 3 chiffres + sous-comptes usuels — dont
tous les comptes cités dans la spec client : 401, 408, 411, 418, 421, 424, 425, 431, 447, 443/445,
521/522, 571/572/573/574/575, 601, 605, 621, 622, 625, 627, 658, 661, 664, 671, 681, 706, 707, 708, 758,
13…). `parent` = code parent (résolu au seed). C'est un plan de référence **exhaustif et standard**,
éditable par société ensuite (ajout de sous-comptes, dépréciation).

`account_type` déduit de la classe/compte selon une table de correspondance documentée dans le JSON/loader
(ex : 5xx trésorerie -> asset_cash ; 41x -> asset_receivable ; 40x -> liability_payable ; 1x -> equity ;
2x -> asset_fixed ; 3x -> asset_current ; 44x -> tax ; 6x -> expense ; 7x -> income).
`reconcile=True` pour 401, 408→non, 411, 421, 425, 431, 447 (comptes de tiers lettrables listés).

## Composant 3 — Seeding par société

Service `apps/accounting/services/seed.py::seed_accounting(company, created_by=None)` (idempotent) :
1. **Comptes** : crée les `Account` depuis le JSON (2 passes : création, puis liaison `parent` par code).
   Skip si la société a déjà des comptes.
2. **Journaux standard** (non liés à une agence) : `VTE` (sale, défaut 706), `ACH` (purchase, défaut 601),
   `OD` (general), `PAIE` (general, défaut 421), `CAISSE` (cash, défaut 571), `BANQUE` (bank, défaut 521).
   (Les journaux caisse/banque spécifiques par agence seront créés par la Trésorerie.)
3. **Exercice courant** : `FiscalYear` de l'année en cours (01/01 → 31/12) + ses **12 périodes mensuelles**
   (state `open`). Skip si l'exercice de l'année existe déjà.

Accroche : appel dans `_bootstrap_company` (après `seed_default_roles`). Commande de backfill :
`python manage.py seed_accounting [--company <id>]` (itère les sociétés, idempotent, récap par société).

## Composant 4 — API (DRF) + service layer

Service `AccountingReferentialService` (selectors + gestion admin). Endpoints sous `/api/v1/accounting/` :

| Méthode | URL | Description |
|---|---|---|
| GET | `accounts/` | Liste des comptes (société courante ; filtres type, search, deprecated). |
| GET | `accounts/tree/` | Plan hiérarchique (parent/enfants). |
| POST | `accounts/` | Créer un (sous-)compte. |
| GET/PATCH/DELETE | `accounts/<id>/` | Détail / modifier / déprécier. |
| GET/POST | `journals/` | Liste / créer un journal. |
| GET/PATCH/DELETE | `journals/<id>/` | Détail / modifier. |
| GET/POST | `fiscal-years/` | Liste / créer un exercice. |
| GET | `fiscal-years/<id>/` | Détail. |
| GET/POST | `periods/` | Liste / créer une période. |
| POST | `periods/<id>/close/` | Clôturer une période (open -> closed). |

Toutes les vues scopées à `request.user.company`. Sérialiseurs DRF dédiés.

## Composant 5 — RBAC (backend)

- **Codes** (module `accounting`) seedés via migration `admin_rbac/0008_accounting_permissions_seed.py` :
  `accounting.account.view/manage`, `accounting.journal.view/manage`,
  `accounting.fiscalyear.view/manage`, `accounting.period.view/manage`.
- **Enforcement** : chaque vue en `permission_classes = [IsAuthenticated, HasModulePermission]` + `permission_map`
  (GET -> `<res>.view`, écriture -> `<res>.manage`).
- **Rôles par défaut** : le bundle « Comptable (lecture) » = « tous les codes `.view` » inclut donc
  automatiquement `accounting.*.view` pour les **nouvelles** sociétés. (Resynchronisation des rôles des
  sociétés existantes : hors A1, à traiter ultérieurement.)
- Frontend (menu/boutons) : hors A1 (pas encore d'écrans Accounting).

## Gestion des erreurs / cas limites

- Seeding idempotent : ne recrée pas comptes/journaux/exercice déjà présents pour la société.
- Un compte `deprecated=True` reste lisible mais sera refusé à l'écriture (contrôle en A2).
- Suppression d'un compte : soft-delete (BaseModel) ; refus si des enfants/écritures existent (écritures = A2).
- Périodes : `close` interdit si déjà `closed`/`locked`.

## Vérification

- Tests `@pytest.mark.django_db` :
  - `seed_accounting(company)` crée > N comptes, les journaux standard, un exercice + 12 périodes ;
    parent d'un compte (ex 411 -> 41) correctement lié ; idempotent (2e appel = pas de doublon).
  - `create_company(..., admin_email=…)` -> la société a un plan comptable non vide (hook).
  - Commande `seed_accounting` backfill une société créée sans bootstrap.
  - RBAC : staff `accounting.account.view` -> GET accounts ≠ 403, POST -> 403 ; `.manage` -> POST ≠ 403 ;
    admin d'institution -> tout ; codes seedés présents.
- `manage.py check` + `makemigrations --check` OK.

## Hors périmètre (A1)

- Moteur d'écritures `JournalEntry`/`JournalEntryLine`, `AccountingService.create_entry/post/cancel`, séquences de pièces, saisie OD (**A2**).
- `Partner` (décidé en A2), taxes, lettrage, clôture d'exercice / à-nouveaux, reporting (**A3/A4**).
- Frontend Angular (écrans plan/journaux/périodes) et gating menu/boutons.
- Resynchronisation des rôles par défaut des sociétés existantes avec les nouveaux codes `accounting.*`.
