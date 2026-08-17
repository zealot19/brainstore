# Dépenses voyage — Design (spec)

**Date:** 2026-08-17
**Statut:** approuvé pour rédaction du plan
**Sous-projet 1 / 2** (le second étant le **Module Reporting**, spec séparée).

## But
Gérer les **dépenses liées aux voyages** (ration chauffeur, ration convoyeur, carburant,
péage, autres) via un **barème configurable** appliqué automatiquement aux voyages, avec
**décaissement depuis une caisse** (mouvement de trésorerie + écriture comptable OHADA).
Ces données alimenteront les rapports **Dépense** et **Récapitulatif (marge)** du futur
module Reporting.

## Décisions verrouillées
1. **Pas de lien** flotte↔voyage pour le carburant. Le `FuelLog` (flotte) reste la donnée
   réelle de consommation/TCO ; le « carburant » du voyage est une dépense de voyage à part
   entière (allocation par trajet). Un rapprochement éventuel se fera **en lecture** dans le
   module Reporting (alloué vs réel par véhicule/période) — hors périmètre ici.
2. Le barème est clé sur **(Route × Fare Class)** — la catégorie tarifaire est toujours
   connue à la création du voyage (le véhicule peut être affecté plus tard), et c'est la
   colonne CATEGORY des rapports. (Modifiable vers la catégorie de véhicule flotte si besoin.)
3. Les dépenses **décaissent depuis une caisse** : chaque dépense décaissée crée un
   mouvement de trésorerie EXPENSE + une écriture OHADA (débit compte de charge du type,
   crédit caisse 571). C'est la source de la colonne TRÉSORERIE du rapport Dépense, et cela
   garde les soldes de caisse / Journaux de vente exacts.

## Architecture (apps touchées)
- `apps/voyages_config` — nouveaux modèles de config `ExpenseType`, `ExpenseSchedule`,
  `ExpenseScheduleLine` + config API + seed.
- `apps/voyages_trips` — nouveau modèle `TripExpense` + services (copie barème, décaissement)
  + views/urls + hook à la création de voyage.
- `apps/treasury` — champ `Transaction.counterpart_account` (override) + `Transaction.voyage_expense`
  FK + bridge `record_trip_expense` + `post_movement` qui préfère l'override.
- `apps/system_config` — `_bootstrap_company` appelle `seed_expense_types`.
- `apps/admin_rbac` — data-migration : permissions `voyage.expense.view` / `voyage.expense.manage`.
- Frontend Angular — écrans config (Types de dépense, Barème) + section Dépenses du
  trip-detail + service/models/sidebar/RBAC.

---

## 1. Configuration (voyages_config)

### `ExpenseType` (_CompanyScoped)
| champ | type | notes |
|---|---|---|
| code | Char(30) | unique (company, code) |
| name | Char(150) | ex. Carburant, Péage, Ration chauffeur |
| account_code | Char(10) | compte OHADA de charge (contrepartie). **Choisi via un sélecteur** parmi les comptes de charge (classe 6) du plan de la société ; **validé côté backend** (le compte doit exister) → aucun code invalide possible. Stocké en code. |
| is_active | bool (hérité) | |

- Exposé via la **factory `_pair`** (perm par défaut `transport.config.*`), comme
  `CrewMemberType`. Le write-serializer valide que `account_code` existe dans
  `accounting.Account(company, code=..., account_type="expense")`.
- Seed `seed_expense_types(company)` (idempotent), appelé au bootstrap société. Défauts
  (tous éditables ensuite via le sélecteur ; comptes confirmés présents dans le plan semé) :
  - `CARBURANT` → Carburant → **604** (matières et fournitures consommables)
  - `PEAGE` → Péage → **658** (charges diverses — pas de compte péage dédié)
  - `RATION_CH` → Ration chauffeur → **637** (personnel extérieur ; équipage souvent externe)
  - `RATION_CV` → Ration convoyeur → **637**
  - `AUTRES` → Autres → **658**
  (Le seed ne crée un type que si le compte existe ; sinon il l'ignore.)

### `ExpenseSchedule` (barème) + `ExpenseScheduleLine`
- `ExpenseSchedule` (_CompanyScoped) : `route` FK, `fare_class` FK, `is_active`.
  Unique (company, route, fare_class).
- `ExpenseScheduleLine` : `schedule` FK (related_name="lines"), `expense_type` FK,
  `amount` Decimal.
- Config API **dédiée** (non `_pair`, car imbriquée) : list/detail avec sérialiseur imbriqué
  des lignes (create/update remplace les lignes). Perm `transport.config.*`.

---

## 2. Dépenses par voyage (voyages_trips)

### `TripExpense` (BaseModel)
| champ | type | notes |
|---|---|---|
| trip | FK voyages_trips.Trip | related_name="expenses" |
| expense_type | FK voyages_config.ExpenseType (PROTECT) | |
| amount | Decimal(14,2) | |
| description | Char(255) blank | |
| date | Date | défaut = jour |
| status | choices PLANNED/PAID/CANCELLED | défaut PLANNED |
| cash_session | FK treasury.CashSession (SET_NULL, null) | renseigné au décaissement |
| created_by | (hérité) | |

### Cycle de vie
- **À la création d'un voyage** (`create_trip`) : copier les lignes du barème correspondant
  à `(trip.route, trip.fare_class)` en `TripExpense(status=PLANNED, amount=ligne.amount)`.
  Hook non-bloquant (pas de barème → aucune dépense pré-remplie).
- **Ajout/édition manuelle** : l'opérateur peut ajouter/ajuster/supprimer des `TripExpense`
  tant qu'elles sont PLANNED.
- **Décaissement** (`disburse_trip_expense`) : exige une **session de caisse ouverte** ;
  appelle le bridge `record_trip_expense` → mouvement + écriture ; passe la dépense à PAID et
  renseigne `cash_session`. Idempotent (une dépense déjà PAID n'est pas re-postée).
- Endpoints (RBAC `voyage.expense.view` / `voyage.expense.manage`), `success_response` /
  `created_response` : list/create/detail/patch/delete + action `disburse`.

---

## 3. Intégration trésorerie / comptabilité (treasury)

### Modèle
- `Transaction.voyage_expense` = FK `voyages_trips.TripExpense` (SET_NULL, null) —
  lien + idempotence (comme `voyage_booking` / `voyages_parcel`).
- `Transaction.counterpart_account` = FK `accounting.Account` (SET_NULL, null) — **override**
  du compte de contrepartie. `TreasuryAccountingBridge.post_movement` utilise
  `txn.counterpart_account or MovementAccountMapping(category)`. Généralise proprement le cas
  des charges à compte configurable.
- Nouvelle catégorie `Transaction.Category.VOYAGE_EXPENSE = "voyage_expense"` (classification /
  filtrage trésorerie). Mapping de repli `voyage_expense → 658` semé (fallback si pas d'override).

### Bridge `record_trip_expense(company, *, trip_expense, cash_session, user)`
- Résout le compte de charge : `accounting.Account(company, code=expense_type.account_code)`.
- `create_transaction(type=EXPENSE, category=VOYAGE_EXPENSE, account_type=CASH,
  cash_session=..., amount=trip_expense.amount, counterpart_account=<compte charge>,
  description=..., created_by=user)`.
  → l'écriture auto (post_movement) débite le compte de charge, crédite 571 (caisse).
- Idempotence : si une `Transaction(voyage_expense=trip_expense, is_deleted=False)` existe, no-op.
- Relie `txn.voyage_expense = trip_expense` après création.
- `create_transaction` reçoit un nouveau kwarg `counterpart_account=None`.

---

## 4. Carburant / flotte
Aucune modification de la flotte. `FuelLog` inchangé. Aucun FK. (Rapprochement en lecture =
module Reporting, plus tard.)

---

## 5. RBAC
- Data-migration `admin_rbac` : module `voyage` (existant) + permissions
  `voyage.expense.view`, `voyage.expense.manage` (catégorie « Voyages »).
- Config (types + barème) : `transport.config.view` / `transport.config.manage` (factory).

---

## 6. Frontend (Angular)
- **Config Voyages** :
  - « Types de dépense » — écran CRUD via `BaseConfigService` (comme types d'équipage),
    avec un **sélecteur de compte** (dropdown des comptes de charge classe 6 de la société).
  - « Barème dépenses » — écran maître/détail (route + fare class + lignes {type, montant}).
- **Voyage → trip-detail** : nouvelle carte **Dépenses** — liste des `TripExpense`
  (type, montant, statut), ajout/édition (PLANNED), bouton **Décaisser** (choix implicite de
  la session de caisse ouverte). `*hasPermission="voyage.expense.manage"`.
- `_api` : endpoints dans `api.config.ts`, models, services ; entrées sidebar sous Config
  Voyages (`transport.config.view`) et sous Voyages (`voyage.expense.view`).

---

## 7. Seeds & bootstrap
- `seed_expense_types(company, created_by=None)` — idempotent, défauts ci-dessus.
- `_bootstrap_company` : ajouter l'appel après `seed_crew_member_types`.
- Migration data trésorerie : mapping de repli `voyage_expense → 658` pour sociétés existantes
  (nouvelles via `seed_treasury_mapping` étendu).

---

## 8. Tests (pytest)
- `seed_expense_types` idempotent ; bootstrap crée les types + mapping.
- Copie du barème à la création d'un voyage : `TripExpense` PLANNED créées pour
  `(route, fare_class)` correspondants ; aucune si pas de barème.
- `disburse_trip_expense` : sans session ouverte → erreur ; avec session → `Transaction`
  EXPENSE + écriture (débit compte type, crédit 571), dépense PAID, `counterpart_account`
  respecté ; second appel idempotent.
- RBAC : `voyage.expense.view` autorise GET, refuse le décaissement sans `manage`.

## 9. Hors périmètre (→ sous-projet Reporting)
Les 9 rapports (Dépense, Recette, CA, Récapitulatif, Voyages, Réservation, Bagages, Colis,
Journaux de vente), leurs filtres (période, bus, agence, caisse, agent), l'export PDF à
en-tête société et le rapprochement carburant alloué vs réel.
