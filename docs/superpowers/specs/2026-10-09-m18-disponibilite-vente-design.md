# M18 — Disponibilité & créneaux sur le formulaire de vente — Design

**Date:** 2026-10-09
**Cahier ref:** M18 (dictées 21, 28) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Dès la sélection d'un voyage sur le formulaire de vente, afficher **avant toute saisie client**
la disponibilité du voyage : places vendables restantes, réservations encore possibles, places
vendues, réservées, bloquées. Si le voyage est complet ou le quota de réservation atteint,
l'action correspondante est désactivée. La liste ne propose que les voyages programmés à la date
sélectionnée pour les critères choisis ; message si aucun voyage.

## État actuel

- `new-booking.component.ts` : sélection du voyage via `bookableTrips({ fare_class, time_slot, date })`
  (déjà filtré par date/créneau/catégorie côté `bookable_trips`). À la sélection, le composant
  charge déjà `destinations(tripId)` et `seatMap(tripId)` (mode manuel).
- Comptage des réservations : `reservation_services.py:37-41` compte les `TripSeat` HELD et refuse
  `held + n > trip.max_reservations` (quota M12).
- Pas de panneau de disponibilité agrégée ; pas de désactivation « complet/quota atteint ».

## Portée

### 1. Backend — `apps/voyages_booking/`

- **Sélecteur** `trip_availability(trip)` (dans `selectors/__init__.py`) retournant un dict :
  ```python
  {
    "total": <TripSeat non supprimés>,
    "sold": <SOLD>, "reserved": <HELD>, "blocked": <BLOCKED>, "available": <AVAILABLE>,
    "max_reservations": trip.max_reservations,            # quota (peut être None)
    "reservations_possible": None if trip.max_reservations is None
                             else max(0, trip.max_reservations - <HELD>),
  }
  ```
  Comptage via un seul passage (agrégation `values("status")` ou `aggregate(Count(Case...))`).
- **Serializer** `TripAvailabilitySerializer` (champs ci-dessus).
- **Vue** `TripAvailabilityView` : `GET` scopé société (404 si voyage introuvable / autre société),
  permission `ticketing.booking.view`.
- **URL** : `booking/trips/<uuid:trip_id>/availability/` (à côté de `trips/<id>/seat-map/`).

### 2. Frontend — `apps/.../voyages-booking/new-booking/`

- Service `booking.service.ts` : `availability(tripId)` → `Observable<TripAvailability>`.
- Modèle TS `TripAvailability { total, sold, reserved, blocked, available, max_reservations, reservations_possible }`.
- `new-booking.component.ts` : à la sélection du voyage aller (dans le même flux que
  `destinations`/`seatMap`), appeler `availability(outboundTripId)` → stocker `outAvail`.
  (Idem retour si pertinent — au minimum l'aller.)
- Template : panneau lecture seule **avant la saisie client** affichant vendues / réservées /
  bloquées / **vendables restantes** / **réservations encore possibles**.
- **Désactivation de l'action** :
  - Mode vente : désactivé si `available === 0` (voyage complet).
  - Mode réservation : désactivé si `available === 0` **ou** `reservations_possible === 0`
    (quota atteint). Message court expliquant la raison.
  - Intégrer au `canSubmit`/`disabled` existant (ne pas casser les autres gardes).
- **Message « aucun voyage »** : quand la liste des voyages filtrés est vide après choix des
  critères (date/créneau/catégorie), afficher un message explicite ; vérifier/ajouter l'état vide.

### 3. Tests

- Backend : `test_trip_availability_counts` (sold/reserved/blocked/available corrects depuis les
  statuts TripSeat) ; `test_reservations_possible_from_quota` (= quota − held ; `null` si quota None) ;
  `test_availability_endpoint_200_and_foreign_404`.
- Frontend : `ng build` ; spec karma ciblée sur la logique de désactivation si peu coûteuse.

## Critères d'acceptation

1. À la sélection d'un voyage, le panneau affiche les 5 compteurs avant toute saisie client.
2. Voyage complet (`available === 0`) → action de vente désactivée ; quota atteint
   (`reservations_possible === 0`) → action de réservation désactivée ; message affiché.
3. La liste des voyages ne montre que ceux programmés à la date/créneau/catégorie choisis ;
   message si aucun.
4. `reservations_possible` = `max_reservations − réservées`, jamais négatif ; `null` si pas de quota.
5. `makemigrations --check` propre (aucun changement de schéma attendu) ; suites backend ciblées
   vertes (voyages_booking) hors rouges de base connus ; `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Voyage sans sièges matérialisés** (pas de plan/véhicule) → `trip_availability` renvoie des
   compteurs à 0, pas de division/None crash ; l'action est désactivée (available 0). → test.
2. **Quota None** (pas de plafond) → `reservations_possible` = `null`, l'action de réservation
   n'est pas désactivée par le quota (seulement par `available === 0`). → test + front : ne pas
   traiter `null` comme `0`.
3. **Voyage d'une autre société / introuvable** sur l'endpoint availability → 404, pas de fuite. → test.
4. **Front** : l'appel availability ne doit pas retarder/bloquer l'affichage du formulaire ni
   écraser les gardes `canSubmit` existantes (destination choisie, siège choisi en mode manuel…).
5. **Mode réservation vs vente** : la bonne action est désactivée selon le mode
   (`isReservation`) ; en vente, le quota de réservation n'empêche pas une vente directe
   (seul `available === 0` bloque la vente).
