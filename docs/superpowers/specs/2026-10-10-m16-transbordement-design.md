# M16 — Transbordement (3 modes + motif + traçabilité) — Design

**Date :** 2026-10-10 · **Module :** `apps/voyages_trips` (+ frontend voyages) · **Référence cahier :** M16 (dictée 24)

## Intention

Améliorer le transbordement existant : **trois modes** (par voyage, par véhicule,
général), un **motif** obligatoire, et une **traçabilité complète** (origine,
destination, passagers/colis concernés, auteur, date, motif).

## Décisions actées (brainstorm)

- **Par voyage** *(existant, conservé)* : on ouvre un voyage et on le transborde —
  remplacement de bus (`transbord_trip`) ou déplacement d'une sélection
  (`transbord_selection`).
- **Par véhicule** *(nouveau)* : on choisit un **véhicule** ; le système transborde
  **tous ses voyages actifs/à venir** vers un autre véhicule en une opération
  (bulk = `transbord_trip` par voyage, dans une transaction).
- **Général** *(nouveau)* : une **console** autonome (menu dédié) où l'on choisit
  librement un **voyage source** et un **voyage destination** puis déplace une
  sélection — réutilise `transbord_selection` (qui gère déjà source→destination).
- **Motif** : champ `reason` **obligatoire** (texte libre) sur chaque transbordement.

## État existant (réutilisé)

- `Transbordement` (BaseModel) : `kind` (bus|selection), `trip`, `from_vehicle`,
  `to_vehicle`, `overflow_trip`, `destination_trip`, compteurs
  `passengers_moved/overflow/parcels_moved/baggage_moved`, `note`, `created_by`,
  `created_at`. → auteur/date/origine/destination/compteurs déjà tracés.
- `transbord_trip(trip, to_vehicle, overflow_trip, user, note)` — remplacement bus.
- `transbord_selection(trip, ticket_ids, parcel_ids, baggage_ids, dest_trip|dest_vehicle, user, note)` —
  déplace une sélection vers un voyage existant **ou** un nouveau bus.
- Endpoints per-trip : `transbord/eligible`, `transbord/`, `transbord/history`,
  `transbord/selection/options`, `transbord/selection`.

## Architecture (delta)

### 1. Motif obligatoire

Ajouter `reason = CharField(max_length=255)` au modèle `Transbordement` (migration ;
défaut `""` pour l'existant, mais **exigé** à la création via service/vue).
`transbord_trip` et `transbord_selection` : ajouter un paramètre `reason` et lever
`ApplicationError` si vide ; le stocker sur le `Transbordement`. `note` reste
optionnel (complément libre). Les vues existantes (`TripTransbordView`,
`TripTransbordSelectionView`) exigent `reason` dans le payload.

### 2. Mode « par véhicule » (bulk)

Nouveau service `transbord_vehicle(company, *, from_vehicle, to_vehicle, reason, user)` :

- Sélectionne les voyages **actifs/à venir** de `from_vehicle` :
  `Trip.objects.filter(company, vehicle=from_vehicle, is_deleted=False,
  status__in=["pending","departed"], scheduled_departure__gte=now)` (ordonnés).
- Pour chacun, appelle `transbord_trip(trip, to_vehicle, user=user, reason=reason)`
  dans **une transaction** ; agrège les compteurs et la liste des transbordements créés.
- Si aucun voyage éligible → `ApplicationError`. Si un voyage échoue (bus indisponible,
  pas de plan) → la transaction entière est annulée et l'erreur remontée (atomicité).

Endpoints (niveau véhicule, sous voyages_trips ou un routeur dédié) :
- `GET  /voyages/trips/transbord/vehicle/<uuid:vehicle_id>/eligible/` → voyages du
  véhicule + véhicules cibles candidats (réutilise `blocking_reasons`/`active_seating_plan`).
- `POST /voyages/trips/transbord/vehicle/<uuid:vehicle_id>/` `{to_vehicle_id, reason}`.

### 3. Mode « général » (console)

Essentiellement **frontend** : une page autonome (menu Voyages > Transbordement) qui
1) liste/choisit un **voyage source** (recherche company-wide — réutilise la liste
   des voyages existante), 2) charge sa sélection (`transbord/selection/options`),
3) choisit un **voyage destination** (même trajet, non parti) ou un bus, 4) POST
   `transbord/selection` avec `reason`. Aucune logique backend nouvelle (réutilise
`transbord_selection`). Si besoin d'un sélecteur de voyages company-wide dédié, un
`GET /voyages/trips/transbord/sources/` optionnel (voyages transbordables) — sinon
réutiliser la liste voyages filtrée côté client.

### 4. Traçabilité / historique

- `reason` ajouté à l'historique (sérialiseur du `Transbordement`) + affichage
  origine (voyage/véhicule source), destination (voyage/véhicule), compteurs,
  auteur, date, motif.
- **Passagers/colis concernés** : les compteurs existent déjà ; pour « concernés »
  détaillés, l'historique par voyage (`transbord/history`) + le fait que les
  tickets/colis pointent désormais vers le voyage destination suffisent (pas de
  nouvelle table de lignes — hors périmètre sauf demande explicite).

### 5. Performance

Interprétée comme le **bulk** (« par véhicule » traite N voyages en une opération au
lieu de N manipulations manuelles). Pas de cible de micro-optimisation spécifiée ;
les requêtes du bulk restent bornées au véhicule (filtre indexé sur `vehicle`+`status`).

## Frontend

- **Par voyage** : ajouter le champ **motif** (obligatoire) aux modales transbord
  existantes de `trip-detail`.
- **Par véhicule** : une action (depuis la fiche véhicule Fleet **ou** la console)
  « Transborder le véhicule » → modale (véhicule cible + motif), affiche les voyages
  impactés avant confirmation.
- **Général** : page console (menu Voyages > Transbordement) : sélection voyage source
  → sélection passagers/colis → voyage destination (ou bus) → motif → exécuter ;
  onglet historique.
- i18n fr/en/es/pt.

## Tests (backend)

1. **motif obligatoire** : `transbord_trip` / `transbord_selection` sans `reason` → erreur ;
   avec `reason` → stocké sur le `Transbordement`.
2. **par véhicule** : un véhicule avec 2 voyages à venir → `transbord_vehicle` crée
   2 transbordements, réaffecte les 2 voyages au nouveau véhicule, compteurs agrégés.
3. **par véhicule atomique** : si un voyage est inéligible (bus cible indisponible) →
   aucun voyage transbordé (rollback).
4. **par véhicule sans voyage éligible** → erreur.
5. **historique** : le `reason` et origine/destination/compteurs sont exposés.
6. **non-régression** : les flux transbord par voyage existants restent verts.

## Hors périmètre

- Pas de table de lignes « items concernés » (les compteurs + le repointage des
  tickets/colis suffisent).
- Pas de refonte de l'algorithme de ré-attribution des sièges (réutilisé tel quel).
- Pas de liste de motifs configurable (texte libre, cf. décision).

## Points tranchés (rulings)

- `reason` obligatoire au niveau service (pas juste `blank=False` en base, pour un
  message d'erreur clair et pour ne pas bloquer les lignes existantes).
- « Général » = console frontend réutilisant `transbord_selection` ; pas de nouveau
  service backend sauf sélecteur de sources optionnel.
- « Par véhicule » = bulk atomique de `transbord_trip` sur les voyages à venir du véhicule.
