# Colis & Bagages (Voyages Consignment) — Design Spec

**Date:** 2026-08-04
**Sous-projet :** Module Voyages → Colis & Bagages
**Branche :** `feature/voyages-consignment` (depuis `origin/master`)

## Objectif

Gérer, de bout en bout, deux entités distinctes du transport de fret voyageur :
le **colis** (envoi autonome expéditeur → destinataire, payé au dépôt, affecté à
un voyage puis retiré à l'arrivée) et le **bagage** (rattaché à un billet
passager, franchise + supplément d'excédent). Réutilise la config déjà bâtie
(`ConsignmentType`/`ConsignmentNature`, `ServicePoint`, `Trip`, `Ticket`).

## Contraintes globales

- Nouvelle app **`apps/voyages_consignment`** montée sur **`/api/v1/voyages/consignment/`**.
- Branche **`feature/voyages-consignment`** depuis **`origin/master`**. Forward-only sur `master`.
- Commits **shimi** uniquement — **pas** de trailer `Co-Authored-By: Claude`.
- **Aucun** import de `treasury` ni `tiers`. Dropdown mode de paiement rendu **vide**, libellé « (module trésorerie à venir) ».
- Apps legacy `parcel`, `ticketing` (dont `Luggage`) laissées **dormantes** et intactes.
- Français partout (copie UI, `verbose_name`, messages). Devise XAF.
- Réutilise le noyau : `APIView`, `IsInstitutionAdmin`, packages selectors/services, `BaseModel` (UUID, soft-delete, audit), `StandardResultsSetPagination`, `success_response`/`created_response`/`error_response`/`no_content_response`, `ApplicationError`, `core.services.sequence_service.next_number`.
- Pas de framework de test : vérif via `manage.py check`, `makemigrations --check`, migrate base neuve, smoke shell, `npx ng build`. Python via `../env/bin/python` depuis `backend/`.

---

## Architecture & périmètre

Deux entités distinctes, un manifeste voyage transversal.

- **Colis (`Parcel`)** — expéditeur/destinataire en saisie libre, point de
  départ → point d'arrivée, type de colis, contenu, **montant saisi** +
  encaissement (monnaie rendue), **payé au dépôt**. Cycle
  `registered → loaded → arrived → picked_up` (+ `cancelled`). Rattaché à un
  `Trip` **au chargement seulement** (manifeste), retiré par le destinataire.
- **Bagage (`Baggage`)** — rattaché à un `voyages_booking.Ticket` existant
  (passager + voyage connus), poids, étiquette, **franchise + supplément
  d'excédent** ajustable + encaissement. Cycle
  `checked_in → loaded → delivered` (+ `cancelled`).

**Livre :** (1) Colis — enregistrement/encaissement, liste/suivi, retrait ;
(2) Manifeste voyage — affecter les colis en attente à un voyage, marquer
arrivé, lister les bagages du voyage ; (3) Bagages — écran rattaché à un billet.

**Frontières :** paiement → frontière trésorerie vide (montant/encaissé/monnaie
portés par l'objet, dropdown mode vide) ; expéditeur/destinataire ≠ fichier
passagers (saisie libre).

---

## Modèle de données

Tous étendent `BaseModel` ; scoping par FK `company`.

### `Parcel` (colis)
- `company`, `reference` (auto `COL/AAAA/NNNNN`, séquence `COL`, `reset_yearly`)
- `status` : `registered` / `loaded` / `arrived` / `picked_up` / `cancelled`
- `origin_point` → `voyages_config.ServicePoint` (PROTECT, related_name `parcels_from`)
- `destination_point` → ServicePoint (PROTECT, related_name `parcels_to`)
- `trip` → `voyages_trips.Trip` (SET_NULL, null/blank, related_name `parcels`)
- `sender_name`, `sender_phone`
- `recipient_name`, `recipient_phone`, `recipient_address` (blank)
- `consignment_type` → `voyages_config.ConsignmentType` (PROTECT, related_name `parcels`)
- `description` (blank), `weight_kg` (Decimal 8,3 null), `quantity` (défaut 1), `declared_value` (Decimal 12,2 null)
- `amount_due`, `amount_received`, `change_due` (Decimal 12,2 défaut 0), `payment_method` (blank), `paid_at` (null)
- `loaded_at`, `arrived_at`, `picked_up_at` (null), `picked_up_by` (blank)
- `notes`

### `ParcelEvent` (traçabilité)
- `parcel` → Parcel (CASCADE, related_name `events`)
- `kind` : `registered` / `loaded` / `arrived` / `picked_up` / `cancelled`
- `trip` → Trip (SET_NULL, null/blank), `note` (blank). Horodatage via BaseModel.

### `Baggage` (bagage)
- `company`, `tag_number` (auto `BAG/AAAA/NNNNN`, séquence `BAG`, `reset_yearly`)
- `ticket` → `voyages_booking.Ticket` (PROTECT, related_name `baggage`)
- `consignment_type` → ConsignmentType (PROTECT, null/blank, related_name `baggage`)
- `description` (blank), `weight_kg` (Decimal 6,2 null)
- `free_allowance_kg` (Decimal 6,2, copié des paramètres à l'enregistrement)
- `excess_kg` (Decimal 6,2 défaut 0, indicatif = max(0, poids − franchise))
- `amount_due`, `amount_received`, `change_due` (Decimal 12,2 défaut 0), `payment_method` (blank), `paid_at` (null)
- `status` : `checked_in` / `loaded` / `delivered` / `cancelled`
- `loaded_at`, `delivered_at` (null), `notes`

### Config touchée (module `voyages_config`, mien)
- Ajout `baggage_free_allowance_kg` (PositiveSmallIntegerField, défaut 23) à `VoyagesSettings` — franchise indicative pré-remplie à l'écran bagage.

**Relations clés :** un colis est indépendant (pas de passager), `trip` renseigné
au chargement ; un bagage tient toujours à un `Ticket` (voyage connu). Manifeste
d'un voyage = colis `trip=voyage` + bagages `ticket.trip=voyage`.

---

## Sélecteurs & services

### `selectors/parcel_selectors.py`
- `list_parcels(company, status=None, trip_id=None, q=None)`
- `parcel_detail(company, pk)` (avec events)
- `pending_for_trip(company, route_id=None)` — colis `registered` sans voyage
- `trip_manifest(trip)` → `{parcels, baggage}`

### `services/parcel_services.py` (tous `@transaction.atomic`)
- `register_parcel(company, *, origin_point, destination_point, consignment_type, sender_name, sender_phone, recipient_name, recipient_phone, recipient_address, description, weight_kg, quantity, declared_value, amount_due, amount_received, payment_method, user)` :
  1. Points ≠ ; nature `is_prohibited` → refus ; poids ≤ `consignment_type.max_weight_kg` si défini
  2. `amount_received ≥ amount_due` sinon `ApplicationError`
  3. Crée `registered`, `change_due = reçu − dû`, `paid_at=now`, `ParcelEvent(registered)`
- `assign_to_trip(parcel, trip, *, user)` — `registered` + voyage pré-départ → `loaded`, `trip`, `loaded_at`, event ; refuse trajet incompatible (origine ET destination dans les points du voyage, origine avant destination)
- `mark_arrived(parcel, *, user)` — `loaded → arrived`, `arrived_at`, event
- `pickup_parcel(parcel, *, picked_up_by, user)` — `arrived → picked_up`, exige `picked_up_by`, `picked_up_at`, event
- `cancel_parcel(parcel, *, user)` — si ≠ `picked_up` → `cancelled`, event

### `services/baggage_services.py` (tous `@transaction.atomic`)
- `add_baggage(company, *, ticket, consignment_type, description, weight_kg, amount_due, amount_received, payment_method, user)` :
  1. Billet non annulé ; `free_allowance_kg` copié des paramètres ; `excess_kg = max(0, poids − franchise)`
  2. Poids ≤ `consignment_type.max_weight_kg` si défini ; `amount_received ≥ amount_due`
  3. Crée `checked_in`, étiquette `BAG/…`, `change_due`, `paid_at` si `amount_due > 0`
- `load_baggage(baggage, *, user)` — `checked_in → loaded`, `loaded_at`
- `deliver_baggage(baggage, *, user)` — `loaded → delivered`, `delivered_at`
- `cancel_baggage(baggage, *, user)` — → `cancelled`

**Intégrité :** transitions gardées par statut (message FR) + tracées ;
affectation validée contre les points du trajet ; encaissement (dû/reçu/monnaie)
dans la transaction ; aucun montant automatique (l'agent saisit `amount_due`, le
supplément bagage est pré-calculé mais modifiable).

---

## API (`/api/v1/voyages/consignment/`)

`APIView`, `IsInstitutionAdmin` :
- `parcels/` (GET `?status=&trip=&q=`, POST) ; `parcels/<id>/` (GET+events, PATCH, DELETE=annuler)
- `parcels/pending/` (GET `?route=`)
- `parcels/<id>/assign-trip/`, `/arrived/`, `/pickup/`, `/cancel/` (POST)
- `baggage/` (GET `?ticket=&trip=&status=`, POST) ; `baggage/<id>/` (GET, DELETE=annuler)
- `baggage/<id>/load/`, `/deliver/`, `/cancel/` (POST)
- `trips/<trip_id>/manifest/` (GET)
- Réutilise les selectors réservation pour rechercher une réservation / lister ses billets (rattacher un bagage).

---

## Frontend (Angular 21 standalone, DreamsPOS, icônes `ti`, français)

Nouveau groupe sidebar **« Colis & Bagages »** :

1. **Colis** (`pages/voyages-consignment/parcels/`) — liste + filtres (statut,
   recherche), badges, actions (Détail, Arrivé, Retrait, Annuler). Bouton
   « Enregistrer un colis » → formulaire unique : trajet (point départ →
   arrivée), expéditeur, destinataire, contenu (type, description, poids,
   quantité, valeur déclarée), **encaissement** (montant, encaissé, monnaie,
   mode vide). Détail = infos + **historique d'événements**.
2. **Manifeste voyage** (`pages/voyages-consignment/manifest/`) — choix d'un
   voyage → « colis à charger » (en attente compatibles, bouton Charger) +
   « à bord » (colis chargés/arrivés + bagages du voyage), actions Arrivé /
   Livrer.
3. **Bagages** (`pages/voyages-consignment/baggage/`) — recherche d'une
   réservation/billet → bagages du billet + « Ajouter un bagage » (type, poids ;
   franchise pré-remplie, excédent calculé, supplément ajustable ;
   encaissement). Actions Charger/Livrer/Annuler.

**Retrait colis** : action sur statut `arrived` → modale (nom du retirant) → `picked_up`.

`models/voyages-consignment.models.ts` (Parcel, ParcelEvent, Baggage, Manifest)
+ `ParcelService`, `BaggageService`. `info-banner` par écran, dropdown mode de
paiement vide.

---

## Gestion des erreurs

Toutes les gardes → `ApplicationError` FR → `error_response` :
- Points départ/arrivée identiques ; nature `is_prohibited` ; poids > `max_weight_kg`
- `amount_received < amount_due` (colis et bagage)
- Affectation : voyage non pré-départ ou trajet incompatible
- Transitions hors séquence (retrait non arrivé, charger un colis retiré, bagage sur billet annulé)
- Retrait sans nom du retirant

---

## Vérification

- `manage.py check` + `makemigrations --check`
- `migrate` sur base neuve (`DATABASE_URL=sqlite:///…`)
- Smoke shell : enregistrer un colis (payé, monnaie) → affecter voyage → arrivé →
  retrait ; refuser reçu insuffisant / nature interdite / trajet incompatible ;
  ajouter un bagage (franchise/excédent) → charger → livrer ; vérifier le
  manifeste (colis + bagages du voyage)
- `npx ng build`
- Étendre `seed_voyageur_express` : quelques colis (dont un chargé/arrivé) +
  des bagages sur des billets existants
