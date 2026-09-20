# Trésorerie D3 — Recette voyage manuelle + bordereau de session (+ gating vérifié)

**Date:** 2026-09-20
**Status:** Design — pending user review
**Sub-plan:** D3 (dernier) of the Trésorerie rework. Suit D1 (types de caisse) et D2 (dépenses principale).
**Modules:** `treasury` + Angular treasury frontend (+ `fleet.Vehicle` en FK).

## Contexte (déjà en place)

- **Gating des ventes :** `get_open_session_for_user` exclut déjà les sessions au-delà de
  `scheduled_end` → un guichetier ne peut pas vendre après l'heure limite. Les ventes billet
  (`record_booking_payment`), colis et bagages (`_record_consignment_payment`) exigent déjà une
  **session ouverte** au comptant (`ApplicationError` sinon). **Rien à construire** ici — on
  vérifie seulement par des tests.
- **Détails/rapport de session :** la page Sessions a déjà un bouton rapport
  (`session.service.report()` → `build_session_report`) rendu dans un bloc imprimable
  `#session-report-print`. `build_session_report` renvoie résumé financier + ventilation
  paiements + billetage, **mais pas** la liste des billets/colis/bagages de la session.

## Objectif (item 4 du demandeur)

1. Pouvoir **ajouter une recette voyage** manuelle : choisir la **caisse** (session) où l'argent
   entre, un **intitulé**, un **véhicule**, la **date/heure**, le **montant**, des **notes**.
2. Bouton **« Détails »** sur la table des sessions → vue détails (déjà là) ; **« Imprimer le
   bordereau »** montrant les billets/colis/bagages faits par cette session — *bordereau de
   session*.

## Décisions (validées)

- Recette voyage : **véhicule = FK propre** (nullable) sur `Transaction` (+ migration).
- Recette voyage : catégorie **`TICKET_SALES`** → apparaît dans l'onglet/total « Recette voyage ».

## Backend

### 1) Modèle — véhicule sur le mouvement
`Transaction.vehicle` : FK nullable → `fleet.Vehicle`, `on_delete=SET_NULL`, `related_name="+"`.
Migration additive.

### 2) Service — recette voyage manuelle
`record_voyage_income(company, *, amount, payment_mode, description, vehicle=None,
transaction_date=None, notes="", user, cash_session=None)` (nouveau, dans `other_income.py`
ou un module dédié) :
- Résout la session via `resolve_disbursement_session(company.id, user, cash_session)` —
  **`require_principale=False`** (une recette peut entrer dans n'importe quelle caisse, ex. un
  guichet).
- `create_transaction(..., transaction_type=INCOME, category=TICKET_SALES, account_type=CASH,
  amount, payment_mode, description, cash_session=session, created_by=user)` puis, si `vehicle`,
  `txn.vehicle = vehicle; txn.save`. `transaction_date` = date fournie (sinon défaut).

### 3) Endpoint — POST recette voyage
`IncomeVoyageListView` (aujourd'hui GET seul) gagne un **POST** (permission
`treasury.income.manage`) qui lit un `VoyageIncomeWriteSerializer`
(`cash_session_id`, `title`, `vehicle_id` optionnel, `date` optionnel, `amount`,
`payment_mode`, `notes`) et appelle `record_voyage_income`. Mirroir de `IncomeOtherListView.post`.

### 4) Bordereau — items de session
Étendre `build_session_report(session)` avec trois listes issues des **mouvements INCOME de la
session** selon la catégorie :
- `tickets` : txns `TICKET_SALES` → `{ref, label, amount}` (ref = `voyage_booking.reference`
  si lié, sinon l'intitulé de la recette manuelle ; label = passager / description).
- `parcels` : txns `PARCEL_SHIPPING` → `{ref (voyages_parcel.reference), label, amount}`.
- `baggage` : txns `BAGGAGE` → `{ref (voyages_baggage.tag_number), label, amount}`.
Requête sur `session.transactions` (select_related booking/parcel/baggage), pas de dépendance PDF.

## Frontend

- **Recette voyage — formulaire de création** : dans `recettes-list.component` (kind `voyage`),
  activer un formulaire de création (comme l'existant pour `other`) avec : session de caisse
  (ouverte), intitulé, véhicule (dropdown `VehicleService`), date/heure, montant, mode de
  paiement, notes → `IncomeService` POST vers `recettes/voyage/`. Charger véhicules + sessions
  ouvertes pour ce kind.
- **Bordereau** : dans le bloc imprimable de la session (`#session-report-print`), ajouter les
  trois tableaux billets/colis/bagages depuis `reportData.tickets/parcels/baggage`. Le bouton
  d'impression existe déjà ; on l'intitule « Imprimer le bordereau ».
- i18n (intitulés du formulaire recette voyage + entêtes du bordereau) dans les 4 langues.

## Hors périmètre

- Pas de PDF serveur (le bordereau est imprimé côté navigateur, cohérent avec l'existant).
- Pas de refonte du gating (déjà en place) — uniquement des tests de non-régression.

## Tests (pytest)

- `record_voyage_income` : crée un mouvement INCOME `ticket_sales` dans la session, avec le
  véhicule lié ; apparaît dans la liste « Recette voyage ».
- POST `recettes/voyage/` : crée la recette (statut 201) et la rattache à la session choisie.
- `build_session_report` : les listes `tickets/parcels/baggage` reflètent les mouvements de la
  session (un billet vendu + un colis → 1 ligne chacune, bons montants).
- **Gating (non-régression)** : vente billet/colis/bagage au comptant sans session ouverte →
  `ApplicationError` ; session au-delà de `scheduled_end` → non retournée par
  `get_open_session_for_user`.

## Fichiers touchés

**Backend :** `treasury/models/transaction.py` (+migration), `treasury/services/other_income.py`
(`record_voyage_income`) + export `__init__`, `treasury/views.py` (POST voyage + serializer),
`treasury/serializers.py` (`VoyageIncomeWriteSerializer`),
`treasury/services/session_report.py` (items), tests.

**Frontend :** `pages/treasury/recettes/list/recettes-list.component.{ts,html}` (formulaire
recette voyage), `services/treasury/income.service.ts` (createVoyage), sessions report print
block, `i18n/{fr,en,es,pt}.json`.
