# Intégration Voyage → Trésorerie (vente au guichet) — Design Spec

**Date :** 2026-08-16
**Sous-projet :** Intégration — les ventes de billets au guichet génèrent un mouvement de trésorerie et l'écriture comptable.
**Branche :** `feature/voyage-treasury-integration` (depuis `master`)
**Dépend de :** Trésorerie T1 (pont comptable), T3a/T3b (caisses/sessions), Accounting A1/A2.

## Contexte & objectif

Le module Voyage émet des billets (`voyages_booking.create_booking`) mais **ne touche ni la trésorerie ni la
comptabilité**. On intègre : à la vente au **guichet**, créer un **mouvement de trésorerie** (recette,
`ticket_sales`, lié à la réservation) → le pont T1 génère automatiquement l'écriture **Débit 571 / Crédit 706**.

## Décisions validées (brainstorm)

- **Vente comptant en espèces** : **exiger une session de caisse ouverte** pour le vendeur ; sans session → la vente est refusée (« Ouvrez d'abord votre session de caisse »).
- **v1 = espèces** (→ session de caisse). Les paiements non‑espèces sont **non‑bloquants** : rattachés à l'unique compte bancaire actif de la société s'il existe, sinon aucun mouvement (billet vendu, à régulariser).
- **Comptabilisation directe 571/706** (encaissement immédiat) — **pas** de schéma 411/571 (éviterait la dépendance au partenaire, reporté en T2a).
- Périmètre : **guichet** (`create_booking`). Vente **en ligne** (`online_booking`) et **colis/bagages** suivront le même patron plus tard.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Dépendance unidirectionnelle `voyages_booking → treasury` (imports locaux pour éviter les cycles).
- Vérif : pytest + `manage.py check` + `makemigrations --check`.

**Acquis réutilisés (vérifiés) :**
- `voyages_booking.services.booking_services.create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items, payment_method="", amount_received=None, return_open=False, user)` — `@transaction.atomic` ; calcule `total`, finalise `booking.amount_paid`/`payment_method` puis `return booking` (ligne ~159). `Booking` a `reference`, `outbound_trip`, `channel` (counter/online), `amount_paid`, `payment_method`.
- `treasury.services.create_transaction(*, company, transaction_type, category, account_type, amount, payment_mode, description="", transaction_date=None, cash_session=None, bank_account=None, trip=None, booking=None, parcel=None, created_by)` → applique les soldes **et** déclenche le pont comptable (`journal_entry` posté). Valide qu'une session cash ouverte / un compte bancaire est fourni.
- `CashSession` (`opened_by`, `status=open`). `Transaction` a les FK `booking`, `trip`. `Transaction.PaymentMode` = `cash, mobile_money, transfer, check` ; `AccountType` = `cash, bank`. `Transaction.Category.TICKET_SALES = "ticket_sales"` (mappée → compte 706 par le mapping T1).
- `treasury.selectors` : `get_active_session(register_id, company_id)` (par caisse — insuffisant ici).

## Composant 1 — Service d'intégration (treasury)

`apps/treasury/selectors/selectors.py` : ajouter
`get_open_session_for_user(company_id, user) -> CashSession | None` (première `CashSession` `status=open`,
`opened_by=user`, non supprimée, de la société).

`apps/treasury/services/booking_sales.py` :
- `_normalize_payment(payment_method) -> (mode: str, is_cash: bool)` : normalise la chaîne ;
  `mobile_money`/`mobile`/`momo`/`om` → (`mobile_money`, False) ; `transfer`/`virement`/`bank` → (`transfer`, False) ;
  `check`/`cheque`/`chèque` → (`check`, False) ; tout le reste (dont vide, `cash`, `espèces`) → (`cash`, True).
- `record_booking_payment(company, *, booking, amount, payment_method, user) -> Transaction | None` :
  - **Idempotent** : si un `Transaction` non supprimé est déjà lié à `booking` → retourne `None`.
  - `amount <= 0` → `None`.
  - `mode, is_cash = _normalize_payment(payment_method)`.
  - **Espèces** : `session = get_open_session_for_user(company.id, user)` ; si absent → `ApplicationError("Ouvrez d'abord votre session de caisse pour encaisser une vente au comptant.")` ; sinon `create_transaction(..., account_type="cash", cash_session=session, ...)`.
  - **Non‑espèces** : `banks = BankAccount actifs de la société` ; si exactement 1 → `create_transaction(..., account_type="bank", bank_account=banks[0], ...)` ; sinon → `None` (non‑bloquant).
  - Champs communs : `transaction_type="income"`, `category="ticket_sales"`, `amount`, `payment_mode=mode`,
    `description=f"Vente {booking.reference}"`, `booking=booking`, `trip=booking.outbound_trip`, `created_by=user`.

Exporter `record_booking_payment` depuis `treasury.services`.

## Composant 2 — Accroche dans la vente au guichet

Dans `create_booking`, avant `return booking` (après `loyalty_services.accrue(...)`), pour un canal **guichet** :
```python
from apps.treasury.services import record_booking_payment
record_booking_payment(company, booking=booking, amount=total, payment_method=payment_method, user=user)
```
`create_booking` étant `@transaction.atomic`, une `ApplicationError` (espèces sans session) **annule toute la vente**
(billets, sièges, réservation) — comportement voulu. La vente en ligne (`channel="online"`) n'appelle pas ce flux.

## Gestion des erreurs / cas limites

- Espèces sans session ouverte → vente refusée (rollback atomique), message explicite.
- Non‑espèces sans compte bancaire résoluble (0 ou >1) → billet vendu, **aucun** mouvement (régularisation manuelle ultérieure).
- Idempotence : une seconde tentative pour la même réservation ne crée pas de doublon.
- Le pont T1 reste non‑bloquant côté comptabilité (une config comptable incomplète n'empêche pas la vente une fois la session présente).
- Annulation/remboursement d'une réservation : **hors périmètre** (extourne au remboursement → tranche ultérieure).

## Vérification

Tests `@pytest.mark.django_db` :
- `get_open_session_for_user` renvoie la session ouverte du vendeur, `None` sinon.
- `record_booking_payment` (espèces) avec session ouverte → un `Transaction` recette `ticket_sales` posté (`journal_entry` non nul, **Débit 571 / Crédit 706**) ; idempotent (2ᵉ appel → `None`).
- `record_booking_payment` (espèces) sans session → `ApplicationError`.
- `record_booking_payment` (non‑espèces) avec exactement un compte bancaire actif → `Transaction` bancaire (`account_type="bank"`), **Débit 521 / Crédit 706** ; avec 0/2 comptes → `None`.
- `create_booking` (guichet, espèces) avec session ouverte → la réservation a un mouvement de trésorerie lié ; sans session → `create_booking` lève et **aucune** réservation n'est créée.
- `manage.py check` + `makemigrations --check` OK (aucune migration attendue — pas de changement de modèle).

## Hors périmètre

- Vente **en ligne** (`online_booking`) et **colis/bagages** (`parcel`, `voyages_consignment`).
- Schéma comptable client (411) en deux temps + partenaire (T2a).
- Annulation / remboursement (extourne).
- Écran ou endpoint dédié (l'intégration est un effet serveur de la vente).
