# G-Trésorerie T3b — Frontend (Sessions, Mouvements, Transferts) — Design Spec

**Date :** 2026-08-16
**Sous-projet :** Trésorerie — T3b (frontend : opérations)
**Branche :** `feature/treasury-t3b` (depuis `master`)
**Dépend de :** Trésorerie T1 (pont comptable) + T3a (caisses/banques), Accounting A1/A2.

## Contexte & objectif

T3a a livré caisses/banques/tableau de bord. T3b livre les **opérations quotidiennes** : ouvrir/clôturer
une **session de caisse**, saisir des **mouvements** (recettes/dépenses) qui génèrent automatiquement une
écriture via le pont T1, et effectuer des **transferts**. C'est ce qui rend la caisse réellement opérable.

## Décisions validées (brainstorm)

- 3 écrans : **Sessions**, **Mouvements**, **Transferts**, ajoutés au groupe menu « Trésorerie ».
- Listes **paginées** → les services lisent `.results`.
- Badge **« comptabilisé »** sur les mouvements → petite touche backend (exposer `journal_entry`).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Frontend `angular/`.
- Branche `feature/treasury-t3b` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Réutiliser les patrons existants. Vérif backend : pytest + `manage.py check` ; frontend : `npx ng build`.

**Rappels codebase (vérifiés) :**
- Endpoints : `GET /treasury/sessions/` (paginé, filtres `register_id`,`status`,`date_from`,`date_to`), `POST /treasury/sessions/open/` ({cash_register_id, opening_balance?, notes?}), `POST /treasury/sessions/<id>/close/` ({closing_balance, notes?}), `GET /treasury/sessions/<id>/`. `GET /treasury/transactions/` (paginé, filtres `type`,`category`,`account_type`,`session_id`,`bank_account_id`,`date_from`,`date_to`,`trip_id`), `POST /treasury/transactions/`, `GET/DELETE /treasury/transactions/<id>/`. `GET /treasury/transfers/` (paginé), `POST /treasury/transfers/`, `GET /treasury/transfers/<id>/`.
- Réponses treasury = **brutes** (interceptor ne déballe que `{success,data}`) → listes paginées `{count, next, previous, results}` ; POST/erreurs `{detail}`.
- `TransactionWriteSerializer` : `transaction_type, category, account_type, amount, payment_mode, description?, transaction_date?, cash_session_id?, bank_account_id?, trip_id?, booking_id?, parcel_id?`. `Transaction.Category` : income = `ticket_sales, parcel_shipping, charter, other_income` ; expense = `fuel, maintenance, salary_advance, supplies, rent, other_expense`. `PaymentMode` : `cash, mobile_money, transfer, check`. `AccountType` : `cash, bank`.
- `TransferWriteSerializer` : `amount, description?, transfer_date?, from_cash_register_id?, from_bank_account_id?, to_cash_register_id?, to_bank_account_id?` (exactement une source, une destination).
- `CashSessionReadSerializer` : `register_name, status, status_display, opening_balance, closing_balance, expected_closing, difference, opened_by_name, closed_by_name, opened_at, closed_at, notes`.
- `TransactionReadSerializer` : `reference, transaction_type/type_display, category/category_display, account_type/account_label, amount, payment_mode/payment_display, description, transaction_date` (+ à ajouter : `journal_entry`).
- `TransferReadSerializer` : `reference, from_label, to_label, amount, description, transfer_date, by_name`.
- Front T3a : `RegisterService`/`BankService` (`list()`), `TREASURY` config, modèles treasury, écran `_api/pages/treasury/` (shell + dashboard/registers/banks), menu « Trésorerie » (`sidebar.service.ts`), routes `/treasury/…`. `HasPermissionDirective`, `InfoBannerComponent`.

## Composant 0 — Touche backend (badge comptabilisé)

`TransactionReadSerializer` : ajouter `journal_entry` (id) et `journal_entry_name = serializers.CharField(source="journal_entry.name", read_only=True, default=None)` ; compléter `fields`.

## Composant 1 — Endpoints & services front

`api.config.ts` — compléter le bloc `TREASURY` :
```
sessions:     `${TRZ}/sessions/`,      session:     (id) => `${TRZ}/sessions/${id}/`,
sessionOpen:  `${TRZ}/sessions/open/`, sessionClose:(id) => `${TRZ}/sessions/${id}/close/`,
transactions: `${TRZ}/transactions/`,  transaction: (id) => `${TRZ}/transactions/${id}/`,
transfers:    `${TRZ}/transfers/`,     transfer:    (id) => `${TRZ}/transfers/${id}/`,
```

`treasury.models.ts` : ajouter `CashSession`, `Transaction`, `Transfer` (champs alignés read) + `Paginated<T> = { count: number; results: T[] }` + options `MOVEMENT_CATEGORIES` (par type), `PAYMENT_MODES`.

`_api/services/treasury/` :
- `session.service.ts` : `list(params?) -> Observable<CashSession[]>` (GET paginé → `map(r => r.results)`), `open(data)`, `close(id, data)`.
- `movement.service.ts` : `list(params?) -> Observable<Transaction[]>` (idem), `create(data)`, `delete(id)`.
- `transfer.service.ts` : `list(params?) -> Observable<Transfer[]>` (idem), `create(data)`.

## Composant 2 — Écrans

Ajouts sous `_api/pages/treasury/` (le shell existe déjà).

### 2.1 Sessions — `sessions/sessions.component`
Table (Caisse, Statut, Ouverture, Attendu, Écart, Ouvert par, Ouvert le). Filtre par statut (ouvert/clôturé).
Bouton **« Ouvrir une session »** (modale : caisse [via `RegisterService`], solde d'ouverture, notes) — gated `treasury.session.manage`.
Action par ligne pour une session **ouverte** : **« Clôturer »** (modale : solde compté, notes → à la réponse, affiche attendu/écart) — gated `treasury.session.manage`.

### 2.2 Mouvements — `movements/movements.component`
Table (Réf, Type [badge], Catégorie, Compte [account_label], Montant, Mode, Date, **Comptabilisé** [badge vert si `journal_entry`]). Filtres type/catégorie/date.
Bouton **« Nouveau mouvement »** (modale) — gated `treasury.transaction.manage` :
- `transaction_type` (recette/dépense) → recharge la liste `category` correspondante ;
- `account_type` (caisse/banque) → si caisse : select des **sessions ouvertes** (`SessionService.list({status:'open'})`) ; si banque : select des comptes (`BankService.list()`) ;
- `amount`, `payment_mode`, `description`, `transaction_date`.
Action supprimer (gated manage ; le backend refuse si session clôturée et extourne la pièce le cas échéant).

### 2.3 Transferts — `transfers/transfers.component`
Table (Réf, Source, Destination, Montant, Date, Par). Bouton **« Nouveau transfert »** (modale) — gated `treasury.transfer.manage` :
- source : type (caisse/banque) + entité ; destination : type + entité ; `amount`, `description`, `transfer_date`.
- construit le payload avec le bon couple `from_*_id`/`to_*_id`.

Chaque écran suit le patron existant (spinner, `errorMsg = e?.error?.detail`, modale Bootstrap, `@if/@for/@empty`, `HasPermissionDirective`, `InfoBannerComponent`).

## Composant 3 — Routes & menu

- `routes.ts` : `trzSessions='/treasury/sessions'`, `trzMovements='/treasury/movements'`, `trzTransfers='/treasury/transfers'`.
- `pages.routes.ts` : ajouter 3 enfants au bloc `path:'treasury'` (`sessions`, `movements`, `transfers`).
- `sidebar.service.ts` : ajouter au groupe « Trésorerie » les entrées Sessions (`treasury.session.view`), Mouvements (`treasury.transaction.view`), Transferts (`treasury.transfer.view`).

## Gestion des erreurs / cas limites

- Erreurs affichées via `e?.error?.detail` (format treasury).
- Mouvement caisse : nécessite une **session ouverte** ; si aucune, le select est vide → message explicite.
- Catégorie dépend du type : au changement de type, réinitialiser `category`.
- Transfert : exactement une source et une destination distinctes (le backend valide ; l'UI guide via selects).
- Listes paginées : `page_size` élevé (ex. 200) + recherche/filtre côté client.

## Vérification

- **Backend** : test `TransactionReadSerializer` expose `journal_entry` (via un mouvement posté, `journal_entry` non nul). `manage.py check`.
- **Frontend** : `npx ng build` OK. Contrôle manuel : ouvrir une session, saisir une recette « ticket_sales » (badge comptabilisé vert), clôturer la session (écart affiché), faire un transfert caisse→banque.

## Hors périmètre (T3b)

- Relevé & rapprochement bancaire + partenaire sur mouvement (T2).
- Détail d'une session avec ses mouvements imbriqués (peut venir plus tard ; les mouvements sont filtrables par session côté écran Mouvements).
- Reporting comptable (A3).
