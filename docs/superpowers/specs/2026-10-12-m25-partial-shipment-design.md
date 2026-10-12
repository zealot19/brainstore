# M25 — Expédition partielle des colis — Design

**Date:** 2026-10-12 · **Auteur:** shimi (assisté) · **Réf. cahier:** M25 (dictée 36)

## Contexte

Aujourd'hui un colis (`voyages_consignment.Parcel`) voyage **en bloc sur un seul
voyage** : une FK `trip` unique, un `status` unique, et `quantity` pièces qui
suivent le même cycle `assign → load → dispatch → arrive → receive → pickup`.
Le paiement (`amount_due`) est encaissé une fois à l'enregistrement.

M25 : un colis doit pouvoir être **expédié en plusieurs fois**, sur différents
bus/voyages. Chaque expédition porte une quantité, un voyage, et une validation
(auteur, date). On suit les quantités totale / expédiée / restante, on bloque
au-delà du restant, et on conserve l'historique complet des validations.

## Décisions (arbitrées)

1. **Cycle de vie** : **par expédition** côté envoi/transit. Chaque expédition
   a son propre cycle `brouillon → validée → chargée → en transit → arrivée`.
2. **Réception & retrait** : **au niveau du colis entier**. Les pièces
   reçues/manquantes/avariées et le retrait se font une seule fois, lorsque
   **toutes** les pièces sont arrivées.
3. **Validation** : **étape séparée**. Une expédition est d'abord créée
   (brouillon), puis **validée** (enregistre auteur + date) ; seules les
   expéditions validées comptent dans « expédié ».
4. **Paiement** : **inchangé** — encaissé en totalité à l'enregistrement du
   colis. Pas de facturation par expédition.
5. **Statut du colis** : **dérivé des quantités / expéditions**, sans nouveau
   statut `PARTIALLY_SHIPPED`. L'UI affiche « expédié X / Y ».
6. **Revenu par voyage (M15, rapports)** : **voyage primaire**. La FK `trip` du
   colis est conservée et pointe vers le voyage de la **première expédition
   validée**. M15 (`voyages_parcel__trip`) et le récapitulatif restent inchangés.

## Modèle

### Nouveau : `ParcelShipment` (expédition)

| Champ | Type | Rôle |
|-------|------|------|
| `parcel` | FK Parcel (`related_name="shipments"`) | colis parent |
| `quantity` | PositiveSmallInteger | pièces de cette expédition (≥ 1) |
| `trip` | FK voyages_trips.Trip | voyage/bus |
| `status` | choices | `draft / validated / loaded / in_transit / arrived / cancelled` |
| `validated_by` | FK User (null) | auteur de la validation |
| `validated_at` | DateTime (null) | date de validation |
| `is_primary` | Bool (default False) | 1ʳᵉ expédition validée → pilote `parcel.trip` |
| `loaded_at`, `dispatched_at`, `arrived_at` | DateTime (null) | jalons |
| `note` | Char(255) | motif/observation |

`BaseModel` fournit `created_by` (créateur de l'expédition), horodatage, soft-delete.

### Parcel — ajustements

- `quantity` inchangé (total des pièces).
- Propriétés dérivées (non stockées) :
  - `shipped_pieces` = Σ `quantity` des expéditions **non annulées et validées+**.
  - `remaining_pieces` = `quantity − shipped_pieces`.
- `trip` : **repris comme « voyage primaire »** = voyage de la 1ʳᵉ expédition
  validée. Mis à jour automatiquement ; jamais saisi à la main. Conserve la
  compatibilité M15 / récap / manifeste.
- `status` : reste stocké, **avancé par les actions d'expédition** :
  - aucune expédition en transit → `ready_for_travel` (ou `loaded` si ≥ 1 chargée) ;
  - ≥ 1 expédition `in_transit` et pas toutes arrivées → `in_transit` ;
  - **toutes** les pièces arrivées (`shipped_pieces == quantity` et toutes les
    expéditions `arrived`) → `arrived`.
- Réception (`received/missing/damaged_pieces`), retrait et livraison à domicile :
  **inchangés**, autorisés uniquement quand `status == arrived`.

## Règles

- **Blocage sur-expédition** : créer une expédition de `q` pièces exige
  `q ≤ remaining_pieces` ; sinon `ApplicationError`.
- **Capacité voyage** : la vérification existante (`VoyagesSettings`
  `parcel_trip_max_count/weight`) compte désormais les **expéditions** présentes
  sur le voyage (et non les colis entiers).
- **Cas simple (1 envoi)** : expédier tout le colis sur un voyage crée **une**
  expédition pleine. Les actions legacy (`assign_to_trip`, `load_parcel`,
  `dispatch_parcel`, `mark_arrived`) deviennent des raccourcis qui créent/opèrent
  une expédition unique de `remaining_pieces`, préservant le flux actuel et les
  endpoints existants.
- **Annulation** : annuler le colis annule ses expéditions non arrivées.
  Annuler une expédition validée re-crédite le restant.

## Architecture

### Backend (`apps/voyages_consignment`)

- **Modèle** `models/shipment.py` : `ParcelShipment` + export.
- **Migration** : `CreateModel ParcelShipment` (+ éventuel `is_primary` sur
  l'existant — non, sur ParcelShipment). Aucune suppression de champ Parcel.
- **Services** `services/shipment_services.py` :
  - `create_shipment(parcel, *, trip, quantity, note="", user)` → `draft`
    (contrôle restant + capacité).
  - `validate_shipment(shipment, *, user)` → `validated` (auteur/date ;
    `is_primary` + `parcel.trip` si première).
  - `load_shipment`, `dispatch_shipment`, `arrive_shipment` → jalons + recalcul
    `parcel.status`.
  - `cancel_shipment(shipment, *, user)`.
  - helper `recompute_parcel_state(parcel)` centralise la dérivation du statut.
- **Refonte** `parcel_services.py` : les fonctions whole-parcel de transit
  délèguent aux expéditions (raccourci 1-expédition) ; `receive/pickup/deliver`
  exigent `status == arrived` ; `_capacity_ok` compte les expéditions ;
  `dispatch_parcels_for_trip` / `arrive_parcels_for_trip` opèrent sur les
  expéditions du voyage.
- **Endpoints** (`urls.py` + `views.py`) :
  - `parcels/<id>/shipments/` `GET` (liste/historique) + `POST` (créer).
  - `shipments/<id>/validate/`, `/load/`, `/dispatch/`, `/arrive/` `POST` ;
    `shipments/<id>/` `DELETE` (annuler).
  - Permissions : réutiliser `ticketing.parcel.manage` (envoi/actions) et
    `ticketing.parcel.view` (liste/historique).
- **Serializers** : `ParcelShipmentSerializer` (quantity, trip + libellé, status,
  validated_by_name, validated_at, jalons, note) ; `ParcelRead` ajoute
  `shipped_pieces`, `remaining_pieces`, `shipments` (ou chargés à la demande).

### Frontend (`voyages-consignment`)

- **Modèle** `fleet`/`consignment.models` : `ParcelShipment` + champs dérivés
  sur `Parcel`.
- **Service** `parcel.service.ts` : `shipments(id)`, `createShipment(id, body)`,
  `validateShipment/loadShipment/dispatchShipment/arriveShipment(sid)`,
  `cancelShipment(sid)`.
- **Page parcels** : panneau/modale **« Expéditions »** sur un colis —
  badges « expédié X / Y restant », tableau des expéditions
  (quantité, voyage, statut, validé par/le), bouton **« Nouvelle expédition »**
  (voyage + quantité ≤ restant), actions valider/charger/expédier/arriver.
  Réception / retrait / livraison : inchangés, activés quand tout est arrivé.
- **Manifeste** : liste par voyage des **expéditions** présentes (quantité +
  colis), au lieu des colis entiers.
- **i18n** fr/en/es/pt : clés `consignment.shipment.*`.

## Isolation / tests

- `create_shipment` : refuse `q > remaining` ; capacité voyage respectée.
- `validate_shipment` : 1ʳᵉ validée pose `is_primary` + `parcel.trip` ; suivantes non.
- Cycle complet 2 expéditions sur 2 voyages : `shipped/remaining` corrects ;
  `parcel.status` passe à `arrived` seulement quand **tout** est arrivé ;
  réception/retrait alors autorisés.
- M15 inchangé : revenu colis du voyage primaire préservé (test de non-régression
  `test_m15_result`).
- Cas simple 1-expédition : flux legacy inchangé (endpoints existants).

## Hors périmètre

- Facturation / paiement par expédition (paiement reste global à l'enregistrement).
- Réception/retrait partiels par expédition (restent au niveau colis entier).
- Nouveau statut `PARTIALLY_SHIPPED` (statut dérivé + affichage « X/Y »).
- Refonte du module `apps/parcel` legacy (mort, hors sujet).
