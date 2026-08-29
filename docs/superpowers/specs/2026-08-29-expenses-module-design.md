# Module Dépenses (Trésorerie) — Design (spec)

**Date:** 2026-08-29
**Statut:** en attente de revue

## But
Centraliser **toutes les dépenses** dans la Trésorerie : celles liées à un voyage
(déjà gérées) et les **dépenses générales / d'agence** (papier toilette, détergent,
électricité…) qui n'existaient pas. Le tout **DRY** : réutiliser l'infrastructure
existante (types de dépense, `create_transaction`, pont comptable OHADA, décaissement
depuis une caisse).

## Décisions verrouillées
1. Un **menu « Dépenses » dans Trésorerie** avec **3 sous-modules** :
   - **Tableau de bord** — synthèse de **toutes** les dépenses (voyage + générales).
   - **Dépense voyage** — **consultation** des dépenses liées aux voyages (créées
     **automatiquement** par le barème) + **décaissement**. Pas de CRUD.
   - **Dépense générale** — **CRUD** complet.
2. Les dépenses sont **retirées de la page Voyage** (fiche voyage / trip-detail) :
   le service et l'endpoint de décaissement restent, seule l'UI déménage en Trésorerie.
3. Catégories : **réutiliser `ExpenseType`** (« Types de dépense » : code, nom,
   `account_code` OHADA). Un seul référentiel partagé voyage/général.
4. Portée : dépense générale **liée à une agence** (nullable → siège). Le **caissier
   qui crée** la dépense la gère et la **décaisse depuis SA caisse** (session ouverte),
   dans le respect du scoping d'agence des caisses déjà en place.
5. Comptabilité : inchangée — DR compte de charge (du type) / CR caisse, via
   `create_transaction` (aucune duplication de logique de comptabilisation).

---

## Modèle de données (app `treasury`)

### `GeneralExpense` (nouveau)
```
company       FK system_config.Company
agency        FK system_config.Agency  (null=True, blank=True)  # null = siège
expense_type  FK voyages_config.ExpenseType  (PROTECT)          # réutilisé
label         CharField(200)            # l'article précis, ex. "Papier toilette x10"
amount        Decimal(12,2)
expense_date  DateField(default=today)
status        unpaid | paid
cash_session  FK treasury.CashSession   (null=True)             # posé au décaissement
created_by    (BaseModel)
```
CRUD autorisé **uniquement tant que `unpaid`** (interdit d'éditer/supprimer une dépense décaissée).

### `Transaction` (extension — miroir de `voyage_expense`)
- Ajouter `general_expense = FK("treasury.GeneralExpense", null=True)`.
- Ajouter la catégorie `Category.GENERAL_EXPENSE = "general_expense"`.
Migration (schéma). Aucun autre changement de schéma.

---

## Services backend (DRY)

### Réutilisation du pont trésorerie→compta
`record_general_expense(company, *, expense, cash_session, user)` (treasury) — **calque
de `record_trip_expense`** : idempotent, résout le compte OHADA depuis
`expense.expense_type.account_code`, appelle le **même `create_transaction`**
(`type=EXPENSE`, `category=GENERAL_EXPENSE`, `account_type=CASH`,
`counterpart_account=<compte>`, `cash_session`, `description=f"{type.name} — {label}"`),
puis lie `txn.general_expense`.

### Facteur commun (suppression de la duplication)
Extraire `resolve_disbursement_session(company_id, user, cash_session)` :
- session = `cash_session` fourni **ou** session ouverte de l'utilisateur
  (`get_open_session_for_user`) ; sinon `ApplicationError("Choisissez une caisse…")` ;
- garde d'agence : la caisse doit appartenir à l'agence de l'utilisateur (réutilise
  `register_agency_scope`).
`disburse_trip_expense` **et** `disburse_general_expense` l'appellent (refactor ciblé
de l'existant pour éviter le copier-coller).

### CRUD + décaissement (général)
- `create_general_expense / update_general_expense / delete_general_expense` (bloqués si `paid`).
- `disburse_general_expense(expense, *, user, cash_session=None)` : résout la session
  (helper ci-dessus), `record_general_expense`, passe `status=paid`, `cash_session`.

### Décaissement voyage
Inchangé : `disburse_trip_expense` et son endpoint restent (appelés depuis la nouvelle
page Dépense voyage).

---

## Endpoints (préfixe `/api/v1/treasury/`)
Permissions : `treasury.expense.view` (lecture), `treasury.expense.manage` (écriture/décaissement).

- `GET  expenses/voyage/` — liste des dépenses voyage (TripExpense) normalisées
  (voyage №, type, montant, statut, date), filtrables (statut, trip, dates).
  **Portée société** (les voyages ne sont pas rattachés à une agence).
- `GET  expenses/general/` · `POST expenses/general/` — liste (scoping agence pour les
  non-admins) + création.
- `GET/PATCH/DELETE expenses/general/<id>/` — détail / édition / suppression (si `unpaid`).
- `POST expenses/general/<id>/disburse/` — décaissement (caisse choisie ou session ouverte).
- `POST expenses/voyage/<trip_id>/<id>/disburse/` — **réutilise** `disburse_trip_expense`
  (ou, plus simple, l'UI appelle l'endpoint voyages existant
  `/voyages/trips/<trip_id>/expenses/<id>/disburse/`). Choix retenu : réutiliser
  l'endpoint voyages existant → zéro duplication.
- `GET  expenses/dashboard/` — agrégats sur **toutes** les dépenses :
  `total_paid, total_unpaid, count_unpaid, by_type[], voyage_total, general_total,
  month_total` (scoping agence appliqué au volet général).

Les serializers de lecture renvoient une forme commune `{kind: 'voyage'|'general', type,
label, amount, agency, status, date, trip_number?}` pour un affichage homogène.

---

## Frontend

### Retrait de la fiche voyage
Supprimer la carte « Dépenses » (liste + décaissement) de
`trip-detail.component.{ts,html}` et le sélecteur de caisse associé. Le service
`trip-expense.service` (décaissement) est **conservé** et réutilisé par la page
Dépense voyage.

### Sidebar (Trésorerie) — groupe « Dépenses »
Nouveau groupe (après Caisse/Banque) avec 3 entrées :
- **Tableau de bord** → `/treasury/expenses/dashboard` (lien direct)
- **Dépense voyage** → `/treasury/expenses/voyage`
- **Dépense générale** → `/treasury/expenses/general`
Gating module `treasury` + permission `treasury.expense.view`.

### Pages
- **expenses-dashboard** : cartes KPI (à payer, payé du mois, voyage vs général) +
  répartition par type. Lecture seule.
- **voyage-expenses** : liste des dépenses voyage (auto-créées), filtre par voyage/statut ;
  action **Décaisser** (choix de caisse, même UI que l'ancienne carte trip-detail) via
  l'endpoint voyages existant.
- **general-expenses** : liste + **CRUD** (modale création/édition : agence, type, libellé,
  montant, date) + **Décaisser** (session ouverte du caissier). `*hasPermission` sur les
  actions.
- Raccourci **Nouvelle dépense** possible (comme Nouveau colis) — optionnel.

### Services
`general-expense.service` (CRUD + disburse), `expense-dashboard.service`,
réutilisation de `trip-expense.service` pour le décaissement voyage.

---

## Amorçage / RBAC
- Migration de données `admin_rbac` : permissions `treasury.expense.view` /
  `treasury.expense.manage` (module `treasury`).
- `MovementAccountMapping` : mapping par défaut pour `GENERAL_EXPENSE` (compte de charge
  de repli, ex. `6…`), utilisé si `expense_type.account_code` est vide (le
  `counterpart_account` explicite reste prioritaire).

## Hors périmètre
- Dépenses voyage **ad hoc** (hors barème) : Dépense voyage reste en lecture+décaissement ;
  une dépense imprévue se saisit en Dépense générale. (Extension possible plus tard.)
- Filtrage des dépenses **voyage** par agence (restent au niveau société).
- Rapprochement bancaire des dépenses (paiement caisse uniquement ici).

## Tests / done
- Backend pytest : création/édition/suppression général (bloqué si payé) ; décaissement
  général poste DR charge / CR caisse (compte du type) et est idempotent ; helper de session
  partagé (voyage + général) ; garde d'agence sur la caisse ; dashboard agrège les deux
  sources ; `makemigrations --check` propre après ajout des 2 migrations (schéma + data RBAC).
- Frontend : `ng build` OK ; carte Dépenses absente de la fiche voyage ; 3 pages Trésorerie
  fonctionnelles ; actions gated par permission/module.
