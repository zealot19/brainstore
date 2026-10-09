# M14 — Location (catégorie tarifaire) — Design

**Date:** 2026-10-10
**Cahier ref:** M14 (dictée 26) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Nouvelle catégorie tarifaire **Location** : un voyage de ce type correspond à un bus loué en
entier. Aucune vente de tickets n'y est possible ; les autres paramètres du voyage sont
conservés ; dépenses et recettes propres à ce bus restent enregistrables.

### Décision de cadrage (validée)

- **Drapeau `is_rental` sur `FareClass`** (pas un modèle dédié) : n'importe quelle catégorie peut
  être marquée « Location » ; une catégorie « Location » (`is_rental=True`) est amorcée par défaut.
- **Blocage centralisé** via `_assert_bookable(trip)` → couvre vente ET réservation.
- **Masquage** des voyages en location de la liste du formulaire de vente (`bookable_trips`).
- **Recettes/dépenses propres au bus** : mécanismes existants (TripExpense + recette CHARTER/autre
  contre le voyage) — pas de nouveau mécanisme.

## État actuel

- `FareClass(code, name, rank, color)` — `voyages_config`.
- `_assert_bookable(trip)` (`voyages_booking/services/booking_services.py:30`) : point de contrôle
  commun à `create_booking` ET `create_reservation` (via `B._assert_bookable`).
- `bookable_trips(...)` (`voyages_booking/selectors/__init__.py`) alimente le select voyage du
  formulaire de vente.
- `Transaction.Category.CHARTER` existe déjà pour la recette de location.

## Portée

### 1. Modèle — `apps/voyages_config/models/commercial.py`

- Ajouter `is_rental = models.BooleanField(_("location (bus entier)"), default=False)` sur `FareClass`.
- Migration `voyages_config` : `AddField` (pas de backfill nécessaire — défaut False).

### 2. Blocage des ventes — `apps/voyages_booking/`

- `_assert_bookable(trip)` : ajouter, après les contrôles existants,
  ```python
  if trip.fare_class.is_rental:
      raise ApplicationError(_("Aucune vente de billet sur un voyage en location (bus loué en entier)."))
  ```
  → bloque vente (`create_booking`) et réservation (`create_reservation`).
- `bookable_trips(...)` : exclure `fare_class__is_rental=True` (les voyages en location
  n'apparaissent pas dans le select du formulaire de vente).

### 3. Config CRUD — `apps/voyages_config/config_api/serializers.py`

- `FareClassRead.Meta.fields` : ajouter `"is_rental"`.
- `FareClassWrite` : ajouter `is_rental = serializers.BooleanField(required=False, default=False)`.

### 4. Seed — `apps/voyages_config/services/defaults_seed.py`

- `_seed_fare_classes` : ajouter une catégorie « Location » (`code="LOC"`, `name="Location"`,
  `is_rental=True`) à la liste amorcée (idempotent par code).

### 5. Frontend — `apps/.../voyages-config/fare-classes/`

- Formulaire : interrupteur **« Location (bus entier) »** (`is_rental`).
- Liste : badge « Location » si `is_rental`.
- Modèle TS `FareClass` : `is_rental: boolean`.
- Le formulaire de vente surface déjà le blocage via `errorMsg` ; de plus les voyages en location
  sont exclus du select (via `bookable_trips`). i18n (fr/en/es/pt).

### 6. Tests (backend)

- `test_rental_trip_blocks_sale` : `_assert_bookable` lève pour un voyage dont la catégorie est
  `is_rental`.
- `test_rental_trip_blocks_reservation` : `create_reservation` (ou `_assert_bookable`) lève pareil.
- `test_non_rental_unaffected` : voyage normal réservable.
- `test_bookable_trips_excludes_rental` : un voyage en location n'apparaît pas dans `bookable_trips`.
- `test_fareclass_write_read_is_rental` : round-trip du champ dans les serializers.
- `test_seed_creates_location_fare_class` : le seed crée une catégorie `is_rental=True`.

## Critères d'acceptation

1. Une catégorie tarifaire peut être marquée « Location » ; une catégorie « Location » existe par
   défaut (seed).
2. Sur un voyage en location, toute tentative de vente OU de réservation est refusée (message dédié).
3. Les voyages en location n'apparaissent pas dans le select du formulaire de vente.
4. Les dépenses et recettes du voyage en location restent enregistrables (mécanismes existants).
5. `makemigrations --check` propre après la migration ; suites backend ciblées vertes ; `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Réservation en location** : vérifier que `create_reservation` est aussi bloqué (il passe par
   `_assert_bookable`) — pas seulement la vente. → test dédié.
2. **Voyage déjà vendu puis catégorie passée en location** : cas limite rare ; le blocage ne
   s'applique qu'aux nouvelles ventes (pas de rétro-annulation). Comportement défini : on ne touche
   pas aux billets existants. → noté, pas de test requis.
3. **`bookable_trips` exclusion** : s'assurer que l'exclusion `fare_class__is_rental=True` ne casse
   pas le filtrage existant (date/créneau/catégorie) ni l'`online_booking` (qui réutilise peut-être
   `bookable_trips` — vérifier et, si c'est le cas, l'exclusion y est cohérente). → test + vérif.
4. **FareClass « Location » dans les autres écrans** : la catégorie reste choisissable à la création
   d'un voyage (c'est voulu — on crée des voyages en location) ; seul le formulaire de vente la
   masque. → pas de régression sur la création de voyage.
5. **Seed idempotent** : relancer le seed ne duplique pas la catégorie Location (skip par code). → test.
