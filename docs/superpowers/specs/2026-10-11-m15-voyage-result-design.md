# M15 (recettes) — Résultat par voyage — Design

**Date:** 2026-10-11 · **Auteur:** shimi (assisté) · **Réf. cahier:** M15 (dictées 11, 27), 2ᵉ moitié

## Contexte

M15 est livré pour moitié : le *start-gate* (un voyage ne peut démarrer tant que
ses dépenses ne sont pas décaissées) est en production. Reste la 2ᵉ moitié :
afficher, pour un voyage donné, ses **recettes** en plus de ses dépenses, avec
le **total** et le **résultat** (recettes − dépenses).

Le prétendu blocage « double modèle Trip » n'existe pas pour ce calcul : tous les
flux vivants portent une FK directe vers `voyages_trips.Trip` —
`voyages_booking.Booking.outbound_trip`, `voyages_consignment.Parcel.trip`,
`voyages_consignment.Baggage.trip` — et les `Transaction` de recette pointent vers
ces objets via `voyage_booking`, `voyages_parcel`, `voyages_baggage`. Le sélecteur
existant `apps/treasury/selectors/incomes.py` emprunte déjà ces chemins.

## Décisions (arbitrées)

1. **Emplacement** : une carte « Résultat du voyage » sur la page *trip-detail*
   existante (`/voyages/trip-detail`), là où les dépenses sont déjà affichées.
   (Pas de rapport transverse dans le module Reporting — différé.)
2. **Aller-retour** : la recette billets est attribuée **au voyage aller
   uniquement** (le paiement est encaissé à la réservation, rattaché à
   `outbound_trip`). Le voyage retour n'affiche aucune recette billets.
3. **Dépenses** : seules les dépenses **décaissées** comptent
   (`TripExpense.status == PAID`). Comme le start-gate impose le décaissement
   avant le départ, cela équivaut en pratique à l'ensemble des dépenses au moment
   du voyage.

## Portée

### Recettes (Transactions VALIDATED, non supprimées, de la société du voyage)

| Ligne             | `Transaction.category` | Chemin vers le voyage T              |
|-------------------|------------------------|--------------------------------------|
| Vente de tickets  | `ticket_sales`         | `voyage_booking__outbound_trip = T`  |
| Vente de colis    | `parcel_shipping`      | `voyages_parcel__trip = T`           |
| Transit des colis | `parcel_delivery`      | `voyages_parcel__trip = T`           |
| Transit des bagages | `baggage`            | `voyages_baggage__trip = T`          |

`total_recettes` = somme des quatre lignes.

### Dépenses

`total_depenses` = somme de `TripExpense.amount` où `trip = T`,
`status = PAID`, `is_deleted = False`.

### Résultat

`resultat = total_recettes − total_depenses` (peut être négatif).

## Architecture

### Backend

- **Sélecteur** `apps/voyages_trips/selectors/result_selectors.py` :
  `trip_result(trip) -> dict` renvoyant
  `{ recettes: {tickets, colis_vente, colis_transit, bagages, total},
     depenses_total, resultat }` (tous `Decimal`, défaut `0`).
  - Filtre commun recettes : `Transaction.objects.filter(company=trip.company,
    is_deleted=False, status=Transaction.Status.VALIDATED, transaction_type=INCOME)`.
  - Quatre agrégats `Sum("amount")` par catégorie + chemin de jointure.
  - Dépenses : `TripExpense.objects.filter(trip=trip, is_deleted=False,
    status=PAID).aggregate(Sum("amount"))`.
- **Vue** `TripResultView` (`GET`) dans `apps/voyages_trips/views.py`,
  `permission_map = {"GET": "voyage.trip.view"}`, scoping société via le trip.
  404 si le voyage n'appartient pas à la société.
- **Serializer** `TripResultSerializer` (champs plats, `DecimalField`) dans
  `apps/voyages_trips/serializers.py` — ou renvoi direct du dict via
  `success_response`.
- **URL** : `path("<uuid:trip_id>/result/", v.TripResultView.as_view())` dans
  `apps/voyages_trips/urls.py`.

### Frontend

- **Service** : `tripResult(id)` dans le service voyages-trips + endpoint
  `tripResult` dans `api.config.ts`.
- **Modèle** : interface `TripResult` dans les modèles voyages-trips.
- **trip-detail** : charger le résultat dans `reload()` ; nouvelle carte
  « Résultat du voyage » affichant les 4 lignes de recettes + total recettes +
  total dépenses + résultat (coloré vert si ≥ 0, rouge sinon).
- **i18n** : clés `trips.detail.result.*` (titre, 4 lignes, totaux, résultat)
  dans fr/en/es/pt.

## Isolation / tests

- Sélecteur testable en isolation : créer société, voyage, booking payé
  (recette tickets), colis + bagage avec transactions, dépense PAID ; vérifier
  chaque ligne + total + résultat.
- Cas aller-retour : la recette billets apparaît sur l'aller, pas sur le retour.
- Cas dépense non décaissée (PLANNED) : exclue du total.
- Transactions PENDING / supprimées : exclues.

## Hors périmètre

- Rapport transverse multi-voyages (module Reporting) — différé.
- Expédition partielle des colis (M25) — indépendant.
- Modification de l'attribution des recettes aller-retour (split) — non retenu.
