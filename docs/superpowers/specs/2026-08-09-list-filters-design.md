# Filtres des tableaux Voyages / Réservations / Colis / Bagages — Design Spec

**Date :** 2026-08-09
**Sous-projet :** Voyages → filtres de liste (4 tableaux)
**Branche :** `feature/list-filters` (depuis `origin/master`)

## Objectif

Ajouter des filtres serveur sur les quatre tableaux principaux du module Voyages :
**Voyages** (trips), **Réservations** (bookings), **Colis** (parcels), **Bagages** (baggage).
Chaque tableau garde sa recherche texte et son filtre statut existants, et reçoit une
**plage de dates** avec sélecteur de base (Création / Départ / Arrivée) plus des filtres
métier utiles à chaque table.

## Contraintes globales

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — toujours `git -C <repo>`).
- Branche `feature/list-filters` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python`, exécuté depuis `.../ERP-master/backend`.
- Pas d'import treasury/tiers. **Aucune nouvelle dépendance** : on étend le pattern existant
  (APIView + sélecteurs + query params), pas de django-filter.
- **Filtrage côté serveur** (compatible avec la pagination existante). Pas de filtrage client.
- Rendu robuste : un paramètre absent ou invalide est ignoré (aucune 500).
- Vérif : `manage.py check`, tests pytest des sélecteurs, `npx ng build`.

## Sélecteur de date (commun aux 4 tables)

Trois query params :
- `date_field` ∈ {`created`, `departure`, `arrival`} (défaut : `departure` pour Voyages, `created` pour les autres).
- `date_from`, `date_to` : dates `YYYY-MM-DD`, filtrage **inclusif** (`__date__gte` / `__date__lte`).

Correspondance `date_field` → champ, par table :

| Table | created | departure | arrival |
|---|---|---|---|
| Voyages | `created_at` | `scheduled_departure` | `scheduled_arrival` |
| Réservations | `created_at` | `outbound_trip__scheduled_departure` | `outbound_trip__scheduled_arrival` |
| Colis | `created_at` | `trip__scheduled_departure` | `trip__scheduled_arrival` |
| Bagages | `created_at` | `trip__scheduled_departure` | `trip__scheduled_arrival` |

Quand `date_field` vaut `departure`/`arrival` et que l'objet n'a pas de voyage (colis non affecté),
la ligne est naturellement exclue (jointure nulle) — comportement voulu.

Helper backend commun `apply_date_range(qs, field, date_from, date_to)` : parse les dates
(ignore si invalides) et applique `{field}__date__gte` / `{field}__date__lte`.

## Filtres par table (query params)

**Voyages** — `list_trips(company, ...)` :
`status`, `route` (id), `vehicle` (id), `date_field`, `date_from`, `date_to`.
(Pas de filtre « type » : un voyage est un départ unique — décision utilisateur.)

**Réservations** — `list_bookings(company, ...)` :
existants `status`, `trip`, `q` + nouveaux `trip_type` (`one_way`/`round_trip`),
`channel` (`counter`/`online`), `date_field`, `date_from`, `date_to`.

**Colis** — `list_parcels(company, ...)` :
existants `status`, `trip`, `q` + nouveaux `consignment_type` (id), `origin_point` (id),
`destination_point` (id), `date_field`, `date_from`, `date_to`.

**Bagages** — `list_baggage(company, ...)` :
existants `ticket`, `trip`, `status`, `q` + nouveaux `consignment_type` (id),
`date_field`, `date_from`, `date_to`.

Valeurs des énumérations (pour rappel, libellés déjà fournis par les serializers `*_display`) :
- Trip.Status : draft, pending, departed, completed, suspended, cancelled.
- Booking.Status : confirmed, boarded, cancelled, no_show. TripType : one_way, round_trip. Channel : counter, online.
- Parcel.Status : registered, loaded, arrived, picked_up, cancelled.
- Baggage.Status : checked_in, loaded, delivered, cancelled.

## Backend — fichiers

- `apps/core/selectors.py` (ou util existant) : ajouter `apply_date_range(qs, field, date_from, date_to)`.
  Si un module util partagé n'existe pas, créer `apps/voyages_config/filters.py` avec ce helper
  et l'importer dans les sélecteurs. (À trancher au plan selon l'existant.)
- `apps/voyages_trips/selectors/trip_selectors.py` : `list_trips` reçoit les nouveaux params.
- `apps/voyages_trips/views.py` : `TripListView.get` lit les query params et les passe.
- `apps/voyages_booking/selectors/__init__.py` : `list_bookings` étendu.
- `apps/voyages_booking/config_api/views.py` : `BookingListView.get` passe les params.
- `apps/voyages_consignment/selectors/__init__.py` : `list_parcels`, `list_baggage` étendus.
- `apps/voyages_consignment/config_api/views.py` : `ParcelListView.get`, `BaggageListView.get` passent les params.

## Frontend — fichiers

Barre de filtres ajoutée à chaque composant liste, relançant la liste serveur (`reload()`),
avec bouton **Effacer**. Les listes déroulantes réutilisent les services existants et
`SearchableSelectComponent`.

- Services (ajout de params optionnels aux méthodes `list(...)`) :
  - `services/voyages/trip.service.ts` : `list(params)` avec `status`, `route`, `vehicle`, `date_field`, `date_from`, `date_to`.
  - `services/voyages-booking/booking.service.ts` : `list(params)` + `trip_type`, `channel`, `trip`, `date_*`.
  - `services/voyages-consignment/parcel.service.ts` : `list(params)` + `consignment_type`, `origin_point`, `destination_point`, `date_*`.
  - `services/voyages-consignment/baggage.service.ts` : `list(params)` + `consignment_type`, `date_*`.
- Composants (barre de filtres + état + `reload()`) :
  - `pages/voyages/list/voyages-list.component.*` : statut, trajet, véhicule, date (base+début+fin).
  - `pages/voyages-booking/bookings/bookings.component.*` : statut, type, voyage, canal, date.
  - `pages/voyages-consignment/parcels/parcels.component.*` : statut, voyage, type de colis, origine, destination, date.
  - `pages/voyages-consignment/baggage/baggage.component.*` : statut, voyage, type de colis, date.
- Données des déroulantes :
  - Statuts / types / canaux : listes statiques (valeur + libellé) dans le composant.
  - Voyages : `trip.service.list()`. Trajets : service route existant. Véhicules : service flotte existant
    (à confirmer au plan). Types de colis : service consignment-type existant (déjà chargé).

## Gestion des erreurs

- Param inconnu / date non parsable → ignoré (filtre non appliqué).
- `date_field` hors {created, departure, arrival} → repli sur le défaut de la table.
- Aucun filtre → comportement actuel inchangé.

## Vérification

- `manage.py check`.
- Tests pytest (pur, sans DB si possible ; sinon `@pytest.mark.django_db` minimal) du helper
  `apply_date_range` et du mapping `date_field` par sélecteur.
- Smoke : appels liste avec combinaisons de params (status+date, trip_type, channel, origin/destination).
- `npx ng build`.

## Hors périmètre

- Pas de sauvegarde des filtres (préférences persistantes).
- Pas d'export filtré (CSV/PDF).
- Pas de nouveau champ « type » sur le voyage.
