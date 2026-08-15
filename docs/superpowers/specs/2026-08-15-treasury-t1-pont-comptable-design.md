# G-Trésorerie T1 — Pont comptable + RBAC — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Trésorerie — T1 (intégration comptable + RBAC), en **extension** de l'app `treasury` existante.
**Branche :** `feature/treasury-t1` (depuis `master`)
**Dépend de :** G-Accounting A1 (référentiel) + A2 (`AccountingService.create_entry/post_entry`).
**Spec source :** « G-Trésorerie » (client) + analyse d'écart de l'app `treasury` existante.

## Contexte & objectif

L'app `treasury` existe déjà (caisses, sessions, mouvements, transferts, comptes bancaires — modèles,
services, API, stats) mais **ne produit aucune écriture comptable** et **n'a pas de RBAC**. T1 greffe le
**pont comptable** : chaque mouvement/transfert et l'écart de clôture de session génèrent
automatiquement une pièce via `AccountingService`. On **étend** l'existant (pas de reconstruction).
Backend-first (frontend = T3).

Décomposition Trésorerie : **T1 (pont + RBAC)** → T2 (relevé/rapprochement bancaire + partenaire sur
mouvement) → T3 (frontend).

## Décisions validées (brainstorm)

- **Étendre** l'app `treasury` existante ; ne rien reconstruire.
- **Une écriture par mouvement** (traçabilité fine `journal_entry` ↔ mouvement) ; à la clôture de session,
  **une seule** écriture d'**écart de caisse** si `difference != 0` (pas de synthèse journalière → évite le double comptage).
- **Mapping catégorie → compte OHADA configurable** (modèle seedé par société, éditable), comme le plan comptable.
- **Pont non-bloquant** : si la config comptable est incomplète/erronée, le mouvement de caisse est créé
  quand même (`journal_entry` reste vide) ; jamais d'échec de l'opération de caisse à cause de la compta.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/treasury-t1` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Réutiliser `AccountingService` (A2), `HasModulePermission` (`apps.core.permissions`), `ApplicationError`.
- Vérif : `manage.py check`, `makemigrations --check`, pytest.

**Acquis réutilisés (vérifiés) :**
- `treasury/services/services.py` : `create_transaction(...)` (fin : après `_apply_transaction_balance`), `create_transfer(...)` (fin : après maj soldes), `close_session(session, ...)` (calcule déjà `difference`). Ce sont les points d'accroche.
- `Transaction` (Type income/expense, Category [ticket_sales, parcel_shipping, charter, other_income, fuel, maintenance, salary_advance, supplies, rent, other_expense], AccountType cash/bank, FK `cash_session`/`bank_account`).
- `CashRegister`, `BankAccount`, `Transfer` (from/to register/bank).
- A1 a seedé par société les journaux `CAISSE`(571), `BANQUE`(521), `OD`, et les comptes 571/521/706/707/708/758/601/624/622/605/625/658/425…
- `AccountingService.create_entry(EntryRequest(company_id, journal_code, date, label, lines=[LineRequest(account_code, label, debit, credit)], reference, entry_type, source_model, source_id))` puis `post_entry(entry.id)`.

## Composant 1 — Champs de liaison comptable

Ajouts de champs (migration `treasury/0002`) :
- `CashRegister.account` (FK `accounting.Account` null) — compte de trésorerie 571x de la caisse.
- `CashRegister.journal` (FK `accounting.Journal` null) — journal de caisse.
- `BankAccount.account` (FK `accounting.Account` null) — compte 52x.
- `BankAccount.journal` (FK `accounting.Journal` null) — journal de banque.
- `Transaction.journal_entry` (FK `accounting.JournalEntry` null, `SET_NULL`, related_name `+`).
- `Transfer.journal_entry` (FK `accounting.JournalEntry` null, `SET_NULL`, related_name `+`).

Ces champs sont **facultatifs** ; le pont utilise des **valeurs par défaut** si non renseignés (voir §3).

## Composant 2 — Mapping catégorie → compte (configurable, seedé)

Modèle `apps/treasury/models/posting_rule.py::MovementAccountMapping` :
`company` (FK), `category` (CharField, valeurs = `Transaction.Category`), `account` (FK `accounting.Account`).
`unique_together = [("company", "category")]`.

Seeding `apps/treasury/services/seed.py::seed_treasury_mapping(company)` (idempotent) — défauts (résolus
par code de compte sur le plan de la société) :

| Catégorie | Compte OHADA |
|---|---|
| `ticket_sales` | 706 |
| `parcel_shipping` | 707 |
| `charter` | 708 |
| `other_income` | 758 |
| `fuel` | 601 |
| `maintenance` | 624 |
| `salary_advance` | 425 |
| `supplies` | 605 |
| `rent` | 622 |
| `other_expense` | 658 |

Accroche : appel dans `_bootstrap_company` (après `seed_accounting`). Commande de backfill :
`manage.py seed_treasury_mapping [--company <id>]`.

*Note :* `425` (avances au personnel) est un compte **lettrable** (tiers) : tant que le partenaire sur
mouvement n'existe pas (T2), une avance de salaire restera **non postée** (`journal_entry` vide) — le pont
étant non-bloquant, le mouvement se crée normalement. Les autres catégories (produits 70x/758, charges 60x/62x/658)
postent immédiatement.

## Composant 3 — `TreasuryAccountingBridge`

`apps/treasury/services/accounting_bridge.py`. Résolution des comptes/journaux (avec défauts) :
- **Caisse** : `journal = register.journal or Journal(company, code="CAISSE")` ; `liquidity_account = register.account or Account(company, code="571")`.
- **Banque** : `journal = bank.journal or Journal(company, code="BANQUE")` ; `liquidity_account = bank.account or Account(company, code="521")`.
- **Contrepartie** : `MovementAccountMapping(company, category).account`.

### `post_movement(txn) -> JournalEntry | None`
Construit et poste une pièce ; en cas d'échec (`ApplicationError`, mapping/compte manquant) : retourne
`None` (non-bloquant, journalisé). Sinon renseigne `txn.journal_entry` et retourne la pièce.
- Recette (`income`) : **Débit** liquidité / **Crédit** contrepartie, `amount`.
- Dépense (`expense`) : **Débit** contrepartie / **Crédit** liquidité, `amount`.
- `journal_code` = journal de la liquidité (CAISSE/BANQUE) ; `entry_type="auto_payment"` ;
  `label` = description ou libellé de catégorie ; `reference` = `txn.reference` ;
  `source_model="treasury.Transaction"`, `source_id=txn.id`. `date = txn.transaction_date`.

### `post_transfer(transfer) -> JournalEntry | None`
**Débit** compte destination / **Crédit** compte source, `amount`, journal `OD`,
`entry_type="auto_transfer"`, `source_model="treasury.Transfer"`. (Comptes/défauts comme ci-dessus selon
que la source/destination est une caisse ou une banque.)

### `post_session_difference(session) -> JournalEntry | None`
Si `session.difference` (calculé par `close_session`) `!= 0` :
- **Manquant** (`difference < 0`) : **Débit** `658` / **Crédit** compte de la caisse, `abs(difference)`.
- **Excédent** (`difference > 0`) : **Débit** compte de la caisse / **Crédit** `758`, `difference`.
- journal `OD`, `entry_type="manual"`, `source_model="treasury.CashSession"`. Retourne la pièce ou `None`.

Chaque méthode fait `create_entry(...)` puis `post_entry(...)` et lie la pièce à l'objet source.

## Composant 4 — Accroche dans le service layer

Modifs `treasury/services/services.py` (imports locaux pour éviter les cycles) :
- `create_transaction(...)` : après `_apply_transaction_balance(txn, +1)`, appeler
  `entry = TreasuryAccountingBridge.post_movement(txn)` ; si `entry`, `txn.journal_entry = entry ; txn.save(update_fields=["journal_entry"])`.
- `create_transfer(...)` : après création du `Transfer`, `entry = post_transfer(transfer)` ; si `entry`, lier + save.
- `close_session(session, ...)` : après calcul de `difference` et save, `post_session_difference(session)`.
- `delete_transaction(...)` : si `txn.journal_entry` et pièce `posted`, appeler
  `AccountingService.cancel_entry(txn.journal_entry_id, reason="Annulation mouvement")` (extourne) avant le soft-delete ; non-bloquant.

## Composant 5 — RBAC `treasury.*`

- **Codes** seedés via `admin_rbac/0010_treasury_permissions_seed.py` (module `treasury`, nom « Trésorerie ») :
  `treasury.register.view/manage`, `treasury.bank.view/manage`, `treasury.session.view/manage`,
  `treasury.transaction.view/manage`, `treasury.transfer.view/manage`, `treasury.dashboard.view`.
- **Enforcement** : passer les vues de `treasury/views.py` de `[IsAuthenticated]` à
  `[IsAuthenticated, HasModulePermission]` + `permission_map` (GET → `.view`, écritures → `.manage` ;
  `TreasuryStatsView` → `treasury.dashboard.view`). Scinder le code selon la ressource (registers/banks/sessions/transactions/transfers).

## Gestion des erreurs / cas limites

- Pont **non-bloquant** : toute exception du bridge est capturée ; l'opération de caisse réussit, `journal_entry` reste vide (re-postable en T2).
- Défauts de résolution : journal/compte de liquidité manquants (ni sur l'objet ni via CAISSE/BANQUE/571/521) → pas de pièce, mouvement conservé.
- Mapping catégorie absent → pas de pièce (log), mouvement conservé.
- Annulation d'un mouvement déjà posté → extourne via `cancel_entry` (idempotent, non-bloquant).
- Seeding mapping idempotent (skip si `(company, category)` existe déjà).

## Vérification

Tests `@pytest.mark.django_db` (société via `create_company`, qui seede plan + journaux + mapping) :
- `create_transaction` recette cash `ticket_sales` → une pièce `posted` **Débit 571 / Crédit 706**, `txn.journal_entry` lié.
- `create_transaction` dépense cash `fuel` → **Débit 601 / Crédit 571**.
- `create_transaction` recette bank → journal `BANQUE`, **Débit 521 / Crédit 70x**.
- `create_transfer` caisse→banque → **Débit 521 / Crédit 571**, journal `OD`, `transfer.journal_entry` lié.
- `close_session` avec `closing_balance` < attendu → pièce d'écart **Débit 658 / Crédit 571**.
- Pont non-bloquant : sans mapping pour une catégorie, `create_transaction` réussit et `journal_entry is None`.
- `seed_treasury_mapping` idempotent ; `create_company` → mapping présent.
- RBAC : staff `treasury.transaction.view` → GET transactions ≠ 403, POST → 403 ; `.manage` → POST ≠ 403 ; codes seedés présents.
- `manage.py check` + `makemigrations --check` OK.

## Hors périmètre (T1)

- `BankStatement`/`BankStatementLine` et rapprochement bancaire → **T2**.
- `partner` sur mouvement + postage des avances (425) → **T2**.
- Ré-postage manuel des mouvements non postés (endpoint) → T2.
- Frontend Angular (caisses, sessions, mouvements, transferts, dashboard) → **T3**.
- Renommage des modèles/champs EN→FR (cosmétique) — non requis ; les libellés FR seront exposés côté API/UI en T3.
