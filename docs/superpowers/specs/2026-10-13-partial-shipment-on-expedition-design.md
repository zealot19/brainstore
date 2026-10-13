# Suivi de quantités partielles depuis l'écran Expédition — Design

**Date:** 2026-10-13 · **Auteur:** shimi (assisté)

## Contexte

On avait retiré le panneau « Expéditions partielles » (doublon avec l'écran
Expédition). On réintroduit le **partiel proprement** : expédier **N pièces**
d'un colis sur un voyage, directement depuis l'écran **Expédition**, le reste
partant sur un autre voyage. L'infra `ParcelShipment` (dispatch) existe déjà ;
on la complète pour la **réception par expédition** et on refait l'écran
Expédition autour.

## Décisions (arbitrées)

1. **Réception par expédition** : chaque expédition se réceptionne à l'arrivée
   de SON voyage (reçues / manquantes / avariées par lot).
2. **« Expédier N » en un clic** : choisir le voyage, saisir la quantité
   (défaut = restant), « Expédier » → crée l'expédition et la met en transit
   d'un coup (pas d'étapes brouillon/charger).
3. **Champ quantité par ligne** dans le pool (pré-rempli au restant, ajustable).

## Modèle

L'**expédition** devient l'unité de **transport + réception**. Le **colis**
agrège (total, expédié, reçu, retiré) et reste l'unité commerciale/facturation.

### `ParcelShipment` — ajouts
- Statut : + `RECEIVED` (`received`, _Réceptionnée_). Cycle effectif :
  `validated → in_transit → arrived → received` (+ `cancelled`).
  (`draft`/`loaded` conservés pour compat mais non utilisés par le flux 1-clic.)
- Champs réception : `received_pieces`, `missing_pieces`, `damaged_pieces`
  (PositiveSmallInteger, défaut 0) + `received_at`.

### `Parcel` — dérivés & cumul
- `quantity` (inchangé), `shipped_pieces` / `remaining_pieces` (déjà dérivés).
- `received_pieces` (dérivé) = Σ `received_pieces` des expéditions non annulées.
- `picked_up_pieces` (nouveau champ **stocké**, cumulatif).
- Disponibles au retrait = `received_pieces − picked_up_pieces`.
- `status` dérivé (`recompute_parcel_state`) :
  - `ready_for_travel` tant que rien n'est parti ;
  - `in_transit` dès qu'une expédition est en transit et que tout n'est pas arrivé/reçu ;
  - `arrived` quand toutes les pièces expédiées sont arrivées mais pas encore réceptionnées ;
  - `available_for_pickup` dès qu'il y a des **pièces disponibles** (`received − picked > 0`) ;
  - `picked_up` quand tout est soldé (`picked_up_pieces + missing_pieces == quantity`).

## Backend

### Sélecteur du pool (gauche)
`ready_parcels` → colis **encore expédiables** : `remaining_pieces > 0` et statut
∉ (`picked_up`, `cancelled`). Implémenté par annotation
(`shipped = Sum(quantity des expéditions COUNTED)`, `remaining = quantity − shipped`,
filtre `remaining > 0`), filtre destination conservé. Le pool expose
`quantity`, `shipped_pieces`, `remaining_pieces` par colis.

### Service « Expédier N » (1 clic)
`ship_pieces(parcel, *, trip, quantity, user)` :
- `quantity` défaut = `parcel.remaining_pieces` ; contrôle `1 ≤ quantity ≤ remaining` ;
- réutilise `create_shipment` (couverture de route + restant + capacité) →
  `validate_shipment` (pose le voyage primaire) → `dispatch_shipment` (→ in_transit) ;
- `recompute_parcel_state`. Renvoie l'expédition.
Exposé : `POST parcels/<id>/ship/` `{trip_id, quantity}`.

### Réception par expédition
`receive_shipment(shipment, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user)` :
- seule l'**agence de destination** ; expédition doit être `arrived` ;
- défaut `received = shipment.quantity` ; contrôles reçues ≤ qty,
  reçues + manquantes ≤ qty, avariées ≤ reçues ;
- statut expédition → `received` (+ `received_at`) ; `recompute_parcel_state`.
Exposé : `POST shipments/<id>/receive/` `{received_pieces, missing_pieces, damaged_pieces}`.

### Retrait « au fur et à mesure » (niveau colis, incrémental)
`pickup_parcel` (existant) adapté : retire les **pièces disponibles**
(`received − picked`), incrémente `picked_up_pieces`, journalise un événement
`PICKED_UP` avec le nombre retiré ; statut dérivé. Autorisé dès qu'il y a des
pièces disponibles. (La livraison à domicile reste au niveau colis, sur les
pièces disponibles ; frais inchangés.)

### `arrive_parcels_for_trip` / dispatch par voyage
Mis à jour pour opérer sur les **expéditions** du voyage (arrivée en lot à la
clôture/arrivée du voyage), pas sur `parcel.trip`.

## Frontend

### Écran Expédition (refonte dispatch)
- **Pool (gauche)** : colis à expédier avec badge « restant X / Y », **champ
  quantité** par ligne (défaut = restant), bouton **« Expédier »** par ligne +
  « Expédier la sélection » (chaque colis part de son restant ou de la qté saisie)
  sur le voyage choisi. Un colis au restant > 0 **reste dans le pool**.
- **Affectés/En transit (droite)** : liste des **expéditions** du voyage
  (colis, pièces, statut), impression manifeste.
- Tables compactes (nowrap, petite police) — déjà fait.

### Écran Réception
Liste les **expéditions arrivées** (par voyage/destination) ; par ligne :
reçues / manquantes / avariées → « Réceptionner ». Affiche colis + pièces.

### Page Colis
Colonne pièces : « reçu `received_pieces` / `quantity` » + badges manquant/avarié ;
l'historique montre les expéditions (quantité, voyage, statut, réception).

### i18n fr/en/es/pt pour les nouveaux libellés.

## Paiement
Inchangé : le transport est payé en totalité à l'enregistrement
(`parcel_shipping`). Aucune facturation par expédition.

## Isolation / tests (backend)
- Expédier 6/10 puis 4/10 sur deux voyages : `shipped`/`remaining` corrects ;
  le colis reste expédiable tant que restant > 0.
- Sur-expédition (N > restant) refusée ; voyage hors route refusé.
- Réception par expédition : arrivée A → réceptionner 6 ; B → 4 ; manquantes/avariées
  bornées ; statut colis `available_for_pickup` dès 1ʳᵉ réception.
- Retrait incrémental : retirer les 6 dispo, puis les 4 ; `picked_up_pieces`
  cumulatif ; `picked_up` seulement quand tout est soldé.
- Cas simple (tout en une expédition) : flux inchangé de bout en bout.

## Hors périmètre
- Retrait/paiement par expédition individuelle (on reste incrémental au niveau colis).
- Livraison à domicile par lot partiel (reste au niveau colis, pièces disponibles).
- Suppression des endpoints `ParcelShipment` legacy (réutilisés ici).
