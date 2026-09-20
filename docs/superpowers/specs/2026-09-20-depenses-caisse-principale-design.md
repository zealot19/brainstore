# Trésorerie D2 — Dépenses depuis la caisse principale + bon de dépense

**Date:** 2026-09-20
**Status:** Design — pending user review
**Sub-plan:** D2 of the Trésorerie rework (D). Suit D1 (types de caisse + clôture-vers-caisse). Précède D3.
**Modules:** `treasury` + `voyages_trips` (décaissement dépense voyage) + Angular treasury frontend.

## Contexte

Le **bon de dépense existe déjà** (`render_expense_voucher`, PDF A5, commun aux dépenses
générales et voyage ; endpoints déjà en place). Une dépense se crée en statut **`unpaid`
(« à décaisser »)** puis passe **`paid` (« décaissée »)** lors du décaissement depuis une
caisse. Les deux décaissements passent par le résolveur partagé
`resolve_disbursement_session(company_id, user, cash_session=None)` :
- `disburse_general_expense` (treasury) ;
- `disburse_trip_expense` (voyages_trips).

Ce résolveur est **aussi** utilisé par les **recettes** (`record_other_income`) et les
**remboursements** (`refund`) — qui, eux, ne doivent PAS être limités à la caisse principale.

**Découverte :** pendant une session ouverte, `current_balance` de la caisse n'est PAS mis à
jour par les ventes/dépenses (seuls les transferts et la clôture le touchent). La trésorerie
réelle d'une session se calcule donc à partir de son grand livre + des transferts.

## Objectif (item 4 du demandeur)

« Toutes les dépenses se font depuis la caisse principale ; s'il n'y a pas d'argent dans la
principale, le chef d'agence transfère d'un guichet vers la principale, valide la dépense et
fournit un bon de dépense pour que la personne aille encaisser à la caisse. »

## Décisions

- **Portée « principale uniquement » = dépenses seulement.** Recettes et remboursements
  gardent le comportement actuel. On ajoute donc un **opt-in** au résolveur plutôt que de
  changer son comportement global.
- **Blocage (pas avertissement)** si la principale est à court : `ApplicationError` invitant à
  transférer d'un guichet vers la principale d'abord (le transfert existe déjà, D1 a ajouté le
  type de caisse).
- **Bon de dépense inchangé** : il existe déjà et reste téléchargeable dès le statut `unpaid`
  (dépense validée / à décaisser). Aucune nouvelle étape « valider » : le couple
  `unpaid → paid` + garde principale/fonds EST le flux demandé.

## Backend

### `resolve_disbursement_session` (expense_shared.py)
Nouvelle signature :
```python
def resolve_disbursement_session(company_id, user, cash_session=None, *,
                                 require_principale=False, amount=None):
```
Après la résolution de session + la garde d'agence existantes, ajouter :
```python
from apps.treasury.models import CashRegister
if require_principale and session.cash_register.kind != CashRegister.Kind.PRINCIPALE:
    raise ApplicationError(_("Les dépenses se décaissent depuis une caisse principale. "
                             "Ouvrez ou choisissez une caisse principale."))
if require_principale and amount is not None:
    avail = principale_available_cash(session)
    if Decimal(str(amount)) > avail:
        raise ApplicationError(_("Solde insuffisant dans la caisse principale (%(b)s). "
                                 "Transférez d'abord des espèces d'un guichet vers la caisse "
                                 "principale, puis validez la dépense.") % {"b": avail})
```

### Helper `principale_available_cash(session)` (expense_shared.py ou selectors)
Trésorerie réelle de la session « maintenant » :
```
opening_balance
  + Σ(transactions INCOME espèces de la session)
  - Σ(transactions EXPENSE espèces de la session)
  + Σ(transferts ENTRANTS vers la caisse depuis l'ouverture)   # to_cash_register == reg, created_at >= opened_at
  - Σ(transferts SORTANTS de la caisse depuis l'ouverture)      # from_cash_register == reg, created_at >= opened_at
```
Les transferts sont filtrés par caisse + `created_at >= session.opened_at`, `is_deleted=False`.
C'est ce qui rend le flux « transférer d'un guichet → puis décaisser » fonctionnel : après le
transfert entrant, `avail` augmente et la dépense passe.

### Appelants
- `disburse_general_expense` : `resolve_disbursement_session(expense.company_id, user,
  cash_session, require_principale=True, amount=expense.amount)`.
- `disburse_trip_expense` : idem avec `trip_expense.amount`.
- `record_other_income`, `refund` : **inchangés** (`require_principale=False` par défaut).

## Frontend

- **Dépenses générales & dépenses voyage** : le sélecteur « caisse de décaissement »
  (sessions ouvertes) ne propose plus que les sessions dont la caisse est une **principale**.
  Le message d'erreur « solde insuffisant → transférez d'un guichet » remonte tel quel (toast).
- Rien d'autre : le bouton « Bon de dépense » (PDF) existe déjà.
- i18n éventuel pour un libellé d'aide.

## Hors périmètre (→ D3)

Formulaire recette voyage, bordereau de session, gating des ventes billet/colis/bagage,
« pas de vente après l'heure limite ».

## Tests (pytest)

- Décaissement d'une dépense générale depuis un **guichet** → `ApplicationError` (principale
  requise).
- Décaissement depuis une **principale** avec fonds suffisants → statut `paid`, mouvement
  EXPENSE créé.
- Fonds insuffisants dans la principale → `ApplicationError` ; après un **transfert
  guichet → principale**, le même décaissement passe.
- `disburse_trip_expense` : même garde principale + fonds.
- Recette (`record_other_income`) depuis un guichet → **toujours autorisée** (non impactée).

## Fichiers touchés

**Backend :** `treasury/services/expense_shared.py` (résolveur + helper),
`treasury/services/general_expense_services.py`,
`voyages_trips/services/expense_services.py`, tests
(`treasury/tests/test_expense_principale.py`).

**Frontend :** `pages/treasury/expenses/general/general-expenses.component.ts` (+ voyage) —
filtrer les sessions de décaissement aux caisses principales ; i18n.
