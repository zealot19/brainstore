# M05 — Plans de bus — Design

**Date:** 2026-10-09
**Cahier ref:** M05 (dictées 14, 18) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Les plans de bus sont créés dans la Configuration par **champs numériques** puis choisis
**directement à la création du bus**. On supprime :
- l'**éditeur visuel** de plan (grille rangées/colonnes, sièges dessinés un par un) ;
- la fonctionnalité séparée d'**affectation d'un plan à un bus**.

### Décision de cadrage (validée — « Keep numbered seats, auto-generate »)

Les billets conservent un **numéro de siège**. Les sièges sont **générés automatiquement
1..N** à partir des compteurs du plan (les `blocked_seats` derniers sièges sont bloqués) ;
la vente par siège, les manifestes, le transbordement, les sièges bloquables et la
synchronisation continuent de fonctionner sur `TripSeat`. Seuls disparaissent : l'édition
visuelle du plan (modèle `PlanSeat`) et l'étape d'affectation (`VehicleSeatingAssignment`).

Conséquences assumées :
- **Le type par siège (VIP/Standard/…) n'est plus saisissable** : les sièges sont générés
  en `STANDARD`. Le tarif VIP reste porté par la **catégorie tarifaire** du voyage (`fare_class`).
- Un bus porte **un** plan (FK sur le véhicule), au lieu d'affectations datées.

## Portée

### 1. Modèle `SeatingPlan` — `apps/voyages_config/models/seating.py`

- Conserver `code`, `name`.
- **Supprimer** `rows`, `columns`.
- `total_seats` : conserver le champ, libellé « nombre total de places ».
- **Ajouter** `blocked_seats` (PositiveSmallIntegerField, « places bloquées », default 0).
- Places vendables = `total_seats − blocked_seats` (calculé, lecture seule ; = « places
  disponibles »). Cohérence (`clean()` + validation serializer) : `blocked_seats ≤ total_seats`.
- **Supprimer le modèle `PlanSeat`** en entier (l'éditeur visuel) et la classe `SeatType`
  (le type par siège disparaît).
- **Supprimer le modèle `VehicleSeatingAssignment`** (affectation séparée).

### 2. Génération des sièges — `apps/voyages_trips/services/assignment.py`

`materialise_seats(trip)` : au lieu de copier les `PlanSeat`, générer `TripSeat` 1..N
depuis le plan du voyage :
```
total = trip.seating_plan.total_seats
blocked = trip.seating_plan.blocked_seats
for i in 1..total:
    status = BLOCKED si i > (total - blocked) sinon AVAILABLE
    TripSeat(trip=trip, seat_number=str(i), row=i, column=1,
             seat_type="STANDARD", status=status, created_by=…)
```
`row=i, column=1` : séquence plate (les champs restent renseignés pour ne pas casser le
rendu manifeste/roadmap). Le blocage/déblocage par voyage (`set_seats_status`) et les
sièges bloquables continuent d'opérer sur `TripSeat`.

### 3. Lien véhicule ↔ plan — `apps/fleet` + `apps/voyages_trips`

- **Ajouter** `Vehicle.seating_plan` (FK `fleet.Vehicle` → `voyages_config.SeatingPlan`,
  `null=True, blank=True, on_delete=PROTECT`), choisi au formulaire du bus.
- `apps/voyages_trips/selectors/eligibility.py::active_seating_plan(vehicle, on_date=None)`
  → retourne `vehicle.seating_plan` (supprimer la logique datée / `VehicleSeatingAssignment`).
- `assign_vehicle` et `transbordement.py` : s'appuient sur `vehicle.seating_plan` via
  `active_seating_plan` (signature conservée, date ignorée) — pas d'autre changement de flux.

### 4. API / sérialiseurs — `apps/voyages_config/config_api/`

- `SeatingPlan` serializers (Read/Write) : champs `code`, `name`, `total_seats`,
  `blocked_seats`, `sellable_seats` (read-only calculé) ; retirer `rows`, `columns`.
- **Supprimer** `SeatingPlanSeatsView` + la route `seating-plans/<id>/seats/`.
- **Supprimer** les 3 routes `vehicle-seating-assignments/*` + les vues
  `VehicleSeatingAssignmentListView/DetailView/BulkDeleteView` + leurs serializers.
- `apps/fleet` : exposer/accepter `seating_plan_id` (read: `seating_plan_code`) dans les
  serializers véhicule + la vue/service de création.

### 5. Seeds & sync

- `apps/voyages_config/services/defaults_seed.py` : `_SEATING_PLANS` + génération `PlanSeat`
  (≈ lignes 98-112) → créer des `SeatingPlan` avec `total_seats`/`blocked_seats` (pas de PlanSeat).
- `apps/sync/registrations.py` : retirer l'enregistrement `voyages_config.PlanSeat`
  (modèle supprimé) ; conserver `SeatingPlan`.
- `seed_voyageur_express.py`, `seed_voyages_demo.py` : supprimer la création de `PlanSeat` ;
  donner un `total_seats`/`blocked_seats` au plan et affecter le plan au véhicule
  (`vehicle.seating_plan`).

### 6. Frontend

- `angular/src/_api/pages/voyages-config/seating-plans/` : formulaire numérique
  (`total_seats`, `blocked_seats`, vendables en lecture seule) ; **supprimer l'éditeur
  visuel** (grille de sièges) et l'appel à l'endpoint `/seats/`.
- **Supprimer** l'écran + le menu **« Affectations de plan »** (entrée sidebar
  `Affectations de plan`, la route, le composant s'il existe, le service appelant
  `vehicle-seating-assignments`).
- `angular/src/_api/pages/fleet/vehicles/vehicles.component.*` : ajouter un select
  **« Plan de bus »** (liste des SeatingPlan) au formulaire du véhicule ; type
  `Vehicle.seating_plan`/`seating_plan_code` dans le modèle.
- i18n (fr/en/es/pt) : libellés du plan (total, bloquées, vendables), label « Plan de bus »
  sur le véhicule ; retirer l'entrée menu `affectations_de_plan` et les libellés de
  l'éditeur visuel devenus inutilisés.

### 7. Migrations & données

- `voyages_config` : `RemoveField` rows/columns ; `AddField` blocked_seats ; `DeleteModel`
  PlanSeat ; `DeleteModel` VehicleSeatingAssignment. **Backfill avant suppression** (migration
  data, dans la même migration ou une précédente) :
  - `SeatingPlan.total_seats = count(PlanSeat du plan)` si des PlanSeat existent (sinon
    conserver la valeur courante) ; `blocked_seats = count(PlanSeat non vendables)`.
  - `Vehicle.seating_plan = ` plan de la `VehicleSeatingAssignment` la plus récente du véhicule.
- `fleet` : `AddField` `Vehicle.seating_plan`.
- Les `TripSeat` existants ne sont pas touchés (voyages déjà « sièges générés » conservent
  leurs sièges).

## Critères d'acceptation

1. Création d'un plan via la Config avec seulement total + bloquées ; vendables affichées
   = total − bloquées ; `blocked_seats > total_seats` refusé.
2. Plus d'éditeur visuel ni d'endpoint `/seats/` ; plus de menu/écran « Affectations de plan ».
3. Le formulaire de création d'un bus propose un select « Plan de bus » ; le plan choisi est
   enregistré sur le véhicule.
4. À l'affectation d'un véhicule à un voyage sans plan préalable, les `TripSeat` sont générés
   1..N d'après `vehicle.seating_plan` (les `blocked_seats` derniers bloqués).
5. La vente par siège, les manifestes, le transbordement fonctionnent toujours sur ces sièges.
6. `makemigrations --check` propre ; suites backend ciblées vertes (voyages_config,
   voyages_trips, fleet, sync) hors rouges de base connus.
7. `ng build` réussit ; plus de référence à l'éditeur visuel/affectations.

## Hors scope

- Option B (vente sans numéro de siège) — explicitement écartée.
- Type de siège par siège (VIP/Standard par position) — supprimé ; VIP via catégorie tarifaire.
- M12 (quota de réservation ≤ vendables), M14 (Location), M18 (affichage disponibilité) —
  modifications distinctes qui *consomment* `total_seats`/`blocked_seats` mais ne sont pas ici.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Plan avec `blocked_seats == total_seats`** (0 vendable) → accepté mais génère 0 siège
   vendable ; `blocked_seats > total_seats` → refusé proprement.
2. **Voyage déjà pourvu de `TripSeat`** puis changement de véhicule/plan → ne pas réécraser
   les sièges existants (des billets peuvent être vendus) — règle actuelle de `assign_vehicle`
   à préserver.
3. **Véhicule sans `seating_plan`** affecté à un voyage sans plan → pas de génération, pas de
   500 ; comportement défini (aucun siège, comme aujourd'hui quand `active_seating_plan` est None).
4. **Backfill** : un plan sans aucun `PlanSeat` (créé après un seed numérique) conserve son
   `total_seats` ; un véhicule sans affectation garde `seating_plan = NULL`.
5. **Rendu manifeste/roadmap** qui lisait `row`/`column`/`seat_type` d'un `PlanSeat` ou d'un
   `TripSeat` « VIP » → ne doit pas casser (seats STANDARD, grille plate).
6. **Sync** : retrait de `PlanSeat` du registre CDC ne doit pas laisser de référence morte
   dans la couche sync (registrations / watermark).
