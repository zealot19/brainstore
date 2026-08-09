# Transbordement (remplacement de bus d'un voyage) — Design Spec

**Date :** 2026-08-09
**Sous-projet :** Voyages → transbordement
**Branche :** `feature/transbordement` (depuis `origin/master`)

## Objectif

Permettre de **transborder un voyage** : remplacer son bus par un autre (bus en attente ou
éligible au trajet), typiquement en cas de panne / indisponibilité. Le voyage **garde son
identité** — billets, colis et bagages restent rattachés au même voyage, sans nouveau paiement.
Seul le véhicule (et le plan de sièges) change ; les sièges des passagers sont **ré-attribués
automatiquement**. Si le nouveau bus a moins de places, le **surplus** de passagers (avec leurs
bagages) est **basculé vers un autre voyage du même trajet**. Chaque opération est **tracée**.

## Contraintes globales

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — toujours `git -C <repo>`).
- Branche `feature/transbordement` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python`, exécuté depuis `.../ERP-master/backend`.
- Pas d'import treasury/tiers. **Aucune nouvelle dépendance.**
- **Gratuit** : aucun re-calcul de tarif, aucun paiement.
- Rendu/API robustes : erreurs métier via `ApplicationError` → message clair, aucune 500.
- Vérif : `manage.py check`, migration, tests pytest, `npx ng build`.

## Modèle de données

**Nouveau modèle `Transbordement`** (app `voyages_trips`, `BaseModel`) — une ligne par opération :
- `company` (FK Company)
- `trip` (FK Trip, `related_name="transbordements"`) — voyage transbordé (source)
- `from_vehicle` (FK fleet.Vehicle, null) — ancien bus
- `to_vehicle` (FK fleet.Vehicle) — nouveau bus
- `overflow_trip` (FK Trip, null, `related_name="transbordements_overflow"`) — voyage de bascule éventuel
- `passengers_moved` (int) — passagers ré-attribués sur le même voyage (nouveau bus)
- `passengers_overflow` (int) — passagers basculés vers `overflow_trip`
- `baggage_moved` (int) — bagages suivant les passagers basculés
- `note` (text, blank)
- (audit `created_by` / `created_at` fournis par `BaseModel`)

Migration unique (création du modèle).

## Service — `apps/voyages_trips/services/transbordement.py`

`transbord_trip(trip, to_vehicle, *, overflow_trip=None, user, note="")` — atomique. Étapes :

1. **Validations** :
   - `trip.status` ∈ {`pending`, `departed`} (sinon `ApplicationError` « Ce voyage ne peut pas être transbordé. »).
   - `to_vehicle` éligible via `blocking_reasons(to_vehicle, window_start=trip.scheduled_departure, window_end=trip.scheduled_arrival, exclude_trip=trip)` ; sinon `ApplicationError` avec les raisons.
   - `to_vehicle` doit avoir un plan actif (`active_seating_plan`).
2. **Capacité** : `sold = tickets vendus du voyage` (status `sold`/`boarded`), `cap = nb de sièges vendables du nouveau plan`.
   - Si `len(sold) > cap` et `overflow_trip is None` → `ApplicationError` indiquant le déficit (« N places manquantes : choisissez un voyage de bascule. »).
   - Si `overflow_trip` fourni : doit être **même route** (`route_id`), statut non parti (`draft`/`pending`), ≠ `trip`, et avoir assez de places libres pour le surplus ; sinon `ApplicationError`.
3. **Changement de bus** : `trip.vehicle = to_vehicle` ; `trip.seating_plan = active_seating_plan(to_vehicle, …)`.
4. **Ré-attribution des sièges** (sur le voyage source) :
   - Si le nouveau plan == ancien plan → sièges inchangés.
   - Sinon : reconstruire les `TripSeat` du nouveau plan **sans casser les FKs** (`Ticket.trip_seat` est PROTECT, non nullable). Séquence : (a) renommer les anciens sièges vendus vers des numéros temporaires ; (b) supprimer les anciens sièges libres/bloqués ; (c) créer les sièges du nouveau plan (AVAILABLE/BLOCKED) ; (d) pour chaque billet vendu conservé (ordre stable par ancien `seat_number`), repointer `ticket.trip_seat` vers le prochain siège libre du nouveau plan et le passer `SOLD` ; (e) supprimer les anciens sièges temporaires (désormais non référencés).
5. **Surplus** (si `len(sold) > cap`) : les `len(sold) - cap` derniers billets (ordre stable) sont déplacés vers `overflow_trip` : `ticket.trip = overflow_trip`, ré-attribution d'un siège libre sur `overflow_trip` (auto), `ticket.origin_point`/`destination_point` inchangés. **Leurs bagages suivent** : `Baggage.filter(ticket=…)` → `baggage.trip = overflow_trip`. (Bagages sans billet et **colis restent** sur le voyage source.)
6. **Trace** : créer le `Transbordement` (compteurs, from/to vehicle, overflow_trip, note, user).
7. Retour : dict récap `{transbordement_id, passengers_moved, passengers_overflow, baggage_moved, warnings}` (warnings = documents véhicule via `document_warnings`).

Réutilise `materialise_seats`/`active_seating_plan`/`blocking_reasons` existants ; la logique de
ré-attribution vit dans ce nouveau service (ne modifie pas `assign_vehicle`).

## Sélecteurs

- `transbord_options(company, trip)` → `{ vehicles: [...], overflow_trips: [...] }` :
  - `vehicles` = `eligible_vehicles(company, window_start=trip.scheduled_departure, window_end=trip.scheduled_arrival, exclude_trip=trip)` +, pour chacun, le nombre de places vendables de son plan actif.
  - `overflow_trips` = voyages **même route**, statut `draft`/`pending`, ≠ `trip`, non supprimés, avec places libres (pour la bascule).
- `trip_transbordements(trip)` → historique (`trip.transbordements`, tri `-created_at`).

## API (app `voyages_trips`)

- `GET voyages/trips/<uuid:trip_id>/transbord/eligible/` → `{ vehicles, overflow_trips, sold_count }`.
- `POST voyages/trips/<uuid:trip_id>/transbord/` → corps `{ vehicle_id, overflow_trip_id?, note? }` ; renvoie le récap. 404 si voyage/véhicule introuvable ; `error_response` pour `ApplicationError`.
- `GET voyages/trips/<uuid:trip_id>/transbord/history/` → historique.

Permissions : `IsInstitutionAdmin` (comme les autres vues voyages).

## Frontend (Angular)

- **Détail voyage** (`pages/voyages/trip-detail`) :
  - Bouton **« Transborder »** (visible si statut `pending`/`departed`).
  - **Modale** : liste des bus éligibles (immatriculation + nb places), sélection ; affichage
    **capacité vs passagers vendus** ; si capacité insuffisante, sélecteur de **voyage de bascule**
    (liste `overflow_trips`) devient requis ; champ note ; bouton Confirmer.
  - **Section historique** des transbordements du voyage (ancien→nouveau bus, compteurs, date, agent).
- Service `trip.service.ts` : `transbordEligible(id)`, `transbord(id, body)`, `transbordHistory(id)`.
- Après succès : recharger le détail (bus, sièges, passagers) + message.

## Gestion des erreurs

- Voyage non transbordable (statut) / véhicule non éligible / capacité insuffisante sans bascule /
  voyage de bascule invalide → `ApplicationError` → `error_response` (message FR), transaction annulée.
- Opération **atomique** : aucune modification partielle en cas d'échec.

## Vérification

- `manage.py check` + migration (création `Transbordement`).
- Tests pytest (`@pytest.mark.django_db`) du service `transbord_trip` :
  - même plan → véhicule changé, sièges/billets inchangés, trace créée ;
  - plan plus petit sans `overflow_trip` → `ApplicationError` (déficit) ;
  - plan plus petit avec `overflow_trip` → surplus + bagages déplacés, colis restés, compteurs corrects ;
  - billets ré-attribués à des sièges valides du nouveau plan (aucun `trip_seat` orphelin).
- `npx ng build`.

## Hors périmètre

- Pas d'ajustement tarifaire (gratuit).
- Colis non transbordés vers un autre voyage (restent sur le voyage source).
- Pas de séparation d'un bagage de son passager.
- Pas de transbordement « voyage entier vers un autre voyage existant » : le remplacement se fait
  toujours par le bus ; seul le **surplus** va vers un voyage de bascule.
