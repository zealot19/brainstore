# Feuille de route / départ (Voyages Roadmap) — Design Spec

**Date:** 2026-08-05
**Sous-projet :** Module Voyages → Feuille de route (bordereaux de départ)
**Branche :** `feature/voyages-roadmap` (depuis `origin/master`)

## Objectif

Fournir, par voyage, un écran opérationnel de départ qui agrège passagers,
bagages, colis, équipage et véhicule, permet l'**embarquement** des passagers,
et imprime **deux documents distincts** — le **Bordereau Voyages** (passagers +
leurs bagages) et le **Bordereau Colis** (colis) — chacun avec l'en-tête de
l'entreprise (logo + informations).

## Contraintes globales

- Nouvelle branche `feature/voyages-roadmap` depuis `origin/master`. Forward-only sur `master`.
- Commits **shimi** uniquement — **pas** de trailer `Co-Authored-By: Claude`.
- **Aucun** import de `treasury` ni `tiers`.
- Colis et bagages en **lecture seule** sur la feuille de route (leurs actions restent dans Manifeste / Réception / Bagages).
- Aucune modification du cycle de vie du voyage : l'embarquement est indépendant du départ.
- Français partout (copie UI, messages). Devise XAF.
- Réutilise le noyau : `APIView`, `IsInstitutionAdmin`, packages selectors/services, `success_response`/`error_response`, `ApplicationError`.
- Pas de framework de test : `manage.py check`, `makemigrations --check`, smoke shell, smoke HTTP, `npx ng build`. Python via `../env/bin/python` depuis `backend/`.
- **Aucun nouveau modèle** : uniquement une vue d'agrégation, un endpoint `board-all`, un sélecteur `trip_passengers`. Le reste est frontend (écran + CSS print).

---

## Architecture & périmètre

Écran dédié **« Feuille de route »** par voyage (sous Voyages), accessible depuis
la liste des voyages et le détail voyage via un bouton « Feuille de route ». Il
agrège toutes les données opérationnelles à l'écran et propose **deux
impressions distinctes**, chacune avec l'en-tête entreprise (logo, raison
sociale, slogan, téléphone, adresse) :

**1. Bordereau Voyages** — en-tête entreprise + en-tête voyage + **Passagers**
(nom, siège, point de descente, sens, statut d'embarquement) + **Bagages**
(rattachés à leur passager si billet, sinon au nom de l'expéditeur ; étiquette,
description, poids/pièces).

**2. Bordereau Colis** — en-tête entreprise + en-tête voyage + **Colis chargés**
(référence, expéditeur + tél., destinataire + tél., description, pièces).

**À l'écran** : les mêmes données + le **pointage d'embarquement** des passagers
(Embarquer / Tout embarquer). Colis et bagages en lecture seule.

**Réutilise** : `voyages_booking.services.board_ticket`, `voyages_consignment.selectors.trip_manifest`,
l'équipage/véhicule/sièges du voyage, `trip.company` pour l'en-tête. **Ajout backend** :
vue d'agrégation `roadmap` + embarquement groupé `board-all` + sélecteur `trip_passengers`.

---

## Endpoint d'agrégation & données

**`GET /api/v1/voyages/booking/trips/<trip_id>/roadmap/`** (posé dans
`voyages_booking`, qui dépend déjà de `voyages_trips` et importe les sélecteurs
`voyages_consignment`). Renvoie tout en une requête :

```json
{
  "company":  { "name", "slogan", "logo_url", "phone", "email", "address" },
  "trip":     { "number", "route_code", "origin_name", "destination_name",
                "scheduled_departure", "status", "status_display",
                "vehicle_plate", "crew": [ { "role_display", "driver_name" } ],
                "seats_total", "seats_sold", "boarded_count" },
  "passengers": [ { "ticket_id", "number", "passenger_name", "seat_number",
                    "destination_point_name", "direction_display",
                    "status", "boarded", "boarded_at" } ],
  "baggage":    [ { "tag_number", "owner_name", "ticket_id", "passenger_name",
                    "description", "weight_kg", "quantity" } ],
  "parcels":    [ { "reference", "sender_name", "sender_phone",
                    "recipient_name", "recipient_phone", "description", "quantity" } ]
}
```

**Sélecteurs :**
- `trip_passengers(trip)` (nouveau, `voyages_booking.selectors`) — billets du
  voyage (`trip=trip`, non supprimés, statut `sold`/`boarded`), triés par siège ;
  `select_related` passager + siège + point de descente.
- Colis + bagages : `voyages_consignment.selectors.trip_manifest(trip)`
  (colis `trip=voyage` non annulés ; bagages `trip=voyage` non annulés ;
  `owner_name` déjà exposé côté bagage).

**En-tête entreprise** : lu depuis `trip.company` — raison sociale, slogan, logo
(URL absolue construite via `request.build_absolute_uri`), téléphone, email,
adresse formatée (chaîne, tolérante à l'absence).

**Remplissage** : `seats_total` = sièges du voyage ; `seats_sold` = sièges
`sold`+`boarded` ; `boarded_count` = billets embarqués.

**Embarquement** :
- Unitaire : `POST /api/v1/voyages/booking/tickets/<id>/board/` (existant).
- Groupé : `POST /api/v1/voyages/booking/trips/<trip_id>/board-all/` — embarque
  tous les billets vendus non encore embarqués ; renvoie `{ "done": <int> }`.
- Pas de « désembarquer » (YAGNI).

---

## Flux d'embarquement & garde-fous

Embarquement **indépendant du cycle de vie du voyage** (pointer ≠ faire partir) :

- **Par passager** → `board_ticket` (existant) : billet `sold → boarded`,
  `boarded_at` horodaté ; quand tous les billets d'une réservation sont
  embarqués, la réservation passe `boarded`.
- **Tout embarquer** → `board_all_tickets(trip, user)` (nouveau service) :
  atomique, idempotent (ignore les billets déjà embarqués), ne touche pas aux
  billets annulés ; renvoie le nombre embarqué.
- **Rafraîchissement** : après chaque action, la feuille de route se recharge.

**Garde-fous** (→ `ApplicationError` FR → `error_response`) :
- Embarquement autorisé seulement si le voyage est **`pending` ou `departed`** —
  refusé sur `draft`, `cancelled`, `completed` (message : « L'embarquement n'est
  possible qu'à l'approche du départ. »). Contrôle dans la vue d'embarquement
  groupé et dans la vue d'embarquement unitaire (côté roadmap).
- `board_ticket` exige un billet **vendu** ; billet déjà embarqué ou annulé
  refusé/ignoré.

**Voyages consultables** : la roadmap s'ouvre pour tout voyage ; l'embarquement
n'est actif que sur `pending`/`departed`, sinon **consultation/impression seule**
(historique d'un voyage terminé).

---

## Frontend — écran & impression

Écran `pages/voyages/roadmap/` (Angular 21 standalone, français, icônes `ti`),
route `/voyages/roadmap/:tripId`. Bouton « Feuille de route » ajouté sur la liste
des voyages et le détail voyage.

**Disposition à l'écran :**
- **Barre d'actions** (non imprimée) : « Imprimer Bordereau Voyages »,
  « Imprimer Bordereau Colis », « Tout embarquer », retour.
- **En-tête voyage** : numéro + statut, trajet, départ prévu, véhicule, équipage,
  remplissage (sièges vendus/total) + embarqués (compteur).
- **Bloc « Bordereau Voyages »** (`.print-voyages`) : en-tête entreprise +
  tableau Passagers (n°, nom, siège, descente, sens, statut, bouton **Embarquer**)
  + tableau Bagages (étiquette, propriétaire, description, poids, nb).
- **Bloc « Bordereau Colis »** (`.print-colis`) : en-tête entreprise + tableau
  Colis (référence, expéditeur, destinataire, description, pièces).

**Impression (CSS `@media print`) :**
- Chaque bouton « Imprimer » pose une classe sur le `body`
  (`printing-voyages` / `printing-colis`), appelle `window.print()`, puis retire
  la classe sur `afterprint`.
- Le CSS print n'affiche **que** le bloc ciblé et masque la barre latérale, la
  barre d'actions, les boutons et l'autre bordereau.
- En-tête d'impression : logo à gauche, raison sociale + slogan +
  téléphone/adresse à droite ; puis titre du bordereau + en-tête voyage ;
  tableaux noir/blanc lisibles ; colonne **signature/pointage** manuscrite en
  bout de ligne passager.

**Service/Modèle** : `RoadmapService.get(tripId)` + `boardAll(tripId)` ; réutilise
`BookingService.board(ticketId)` pour l'unitaire ; interface `Roadmap`
(company, trip, passengers, baggage, parcels).

---

## Gestion des erreurs

- Voyage introuvable / hors institution → 404.
- Embarquement sur voyage non `pending`/`departed` → message dédié.
- Roadmap d'un voyage sans sièges → listes vides (pas d'erreur) ; écran affiche
  « Voyage non encore préparé ».
- Logo entreprise absent → en-tête sans image.

---

## Vérification

- `manage.py check` + `makemigrations --check` (aucune migration attendue).
- Smoke shell : voyage + réservations + colis + bagages → `roadmap` → vérifier
  passagers/colis/bagages/en-tête entreprise ; `board-all` → tous billets
  `boarded`, compteur à jour ; garde-fou embarquement sur voyage `draft`.
- Smoke HTTP (token) sur `roadmap` et `board-all`.
- `npx ng build` ; contrôle visuel de l'aperçu d'impression des deux bordereaux.
