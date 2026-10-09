# M10 — Sélecteur des arrêts intermédiaires — Design

**Date:** 2026-10-09
**Cahier ref:** M10 (dictée 9) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Un composant **réutilisable** pour choisir les points de dépôt (escales) entre le départ et la
destination d'un trajet :
- **Sélection multiple en une fois** (ajouter plusieurs lieux d'un coup).
- **Retrait** d'un arrêt sélectionné.
- Un même lieu peut être **sélectionné plusieurs fois**.
- **Propositions pertinentes uniquement**, une fois le départ et la destination choisis.

### Décision de cadrage (validée)

- « Propositions pertinentes » = tous les Lieux actifs de la société **sauf l'origine et la
  destination** choisies ; le sélecteur est **activé seulement une fois origine + destination
  définies**. (Pas de filtrage géographique « entre les deux » : le modèle ne porte aucune donnée
  de trajet/ordre géographique.)
- Les doublons sont autorisés (le modèle `RouteStop` n'impose l'unicité que sur `(route,
  sequence)`, pas sur `service_point`).
- Portée d'utilisation : l'écran **Trajets** (config) pour l'instant ; le composant est conçu
  réutilisable (paramétré par options + liste).

## État actuel

- `RouteStop(route, service_point, sequence, distance_from_origin_km, offset_from_departure)` ;
  `unique_together = [("route", "sequence")]`.
- API : `RouteStopListView` `GET`/`POST` (POST ajoute **un** arrêt, séquence auto = dernier+1),
  `RouteStopDetailView` PATCH/DELETE. Service front `listStops/addStop/updateStop/deleteStop`.
- Front `routes.component` : un seul `<select [(ngModel)]="newStopSp">` + champ distance +
  bouton « Ajouter » ; tableau des escales avec suppression ligne par ligne.

## Portée

### 1. Backend — endpoint « set en lot » (`apps/voyages_config/config_api/`)

- Ajouter un handler `PUT` sur `RouteStopListView` (route `routes/<id>/stops/` déjà mappée) :
  corps `{ "stops": [ {"service_point_id": "<uuid>", "distance_from_origin_km": <num|null>}, … ] }`.
  Comportement (atomique) :
  - Résoudre chaque `service_point_id` scoped société ; **404** si l'un est introuvable/d'une
    autre société (aucune modification si invalide — valider tout avant d'écrire).
  - **Hard-delete** les `RouteStop` existants du trajet, puis recréer la liste ordonnée
    (`sequence = index + 1`). (Le soft-delete entrerait en collision avec la contrainte
    unique `(route, sequence)` ; `RouteStop` est un gabarit sans FK protégée — les voyages
    existants gardent leurs `TripStop` déjà matérialisés.)
  - Les doublons de `service_point` sont acceptés (positions/séquences distinctes).
  - Retourner la liste résultante (`RouteStopRead many`).
- Serializer `RouteStopsBulkWrite` : `stops = RouteStopItemWrite(many=True)` où l'item a
  `service_point_id` (UUID) + `distance_from_origin_km` (optionnel, nullable).
- Conserver le POST/DELETE unitaires existants (compat ascendante).

### 2. Frontend — composant réutilisable `app-stops-picker`

- Nouveau composant standalone (p. ex. `angular/src/_api/pages/voyages-config/shared/stops-picker/`),
  Inputs : `options: { id; name; code }[]` (Lieux sélectionnables) et `stops` (liste ordonnée
  d'items `{ service_point_id; service_point_name; distance_from_origin_km? }`) ; Output :
  `(stopsChange)` émettant la liste ordonnée.
- Fonctions : **ajout multiple** (sélection de plusieurs lieux puis « Ajouter » → append à la
  liste), **retrait** d'une ligne, **doublons** permis (ne pas retirer un lieu déjà choisi des
  options), ordre = ordre d'ajout (au minimum ; réordonnancement non requis). Distance éditable
  par ligne (optionnel).
- `disabled` tant que le parent n'a pas fourni d'options (origine+destination non choisies).

### 3. Frontend — intégration écran Trajets (`routes.component.{ts,html}`)

- Remplacer le bloc « un select + bouton Ajouter + tableau » par `<app-stops-picker>`.
- `options` = Lieux actifs de la société **moins** `origin_id` et `destination_id` du formulaire ;
  recalculées quand l'origine/la destination changent ; picker désactivé tant que les deux ne
  sont pas choisis.
- À l'enregistrement du trajet (création ou édition), persister la liste via le **PUT en lot**
  (`route.service` : `setStops(routeId, stops)`), au lieu des appels add/delete unitaires.
- i18n (fr/en/es/pt) : libellés du composant (ajouter, retirer, placeholder, « choisir origine
  et destination d'abord »).

### 4. Tests

- Backend `test_route_stops_bulk.py` : le PUT remplace les arrêts dans l'ordre (sequence = 1..N) ;
  autorise un même service_point deux fois ; renvoie 404 si un service_point est d'une autre
  société et ne modifie rien ; liste vide => aucun arrêt.
- Frontend : `ng build` ; spec karma ciblée sur la logique add-many/remove/duplicate du composant
  si peu coûteuse.

## Critères d'acceptation

1. Sur l'écran Trajets, après avoir choisi origine + destination, l'utilisateur ajoute plusieurs
   arrêts d'un coup, en retire, et peut répéter un même lieu ; l'ordre est conservé.
2. Les lieux proposés excluent l'origine et la destination ; le sélecteur est désactivé tant que
   les deux ne sont pas choisis.
3. À l'enregistrement, les escales du trajet correspondent exactement à la liste (ordre + doublons).
4. Le composant est standalone et paramétré (réutilisable).
5. `makemigrations --check` propre (aucun changement de schéma) ; suites backend ciblées vertes ;
   `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **PUT avec un service_point d'une autre société** → 404 et **aucune** suppression des arrêts
   existants (valider avant de supprimer). → test.
2. **Collision de séquence** : la recréation doit hard-delete d'abord (sinon
   `IntegrityError (route, sequence)` avec d'anciennes lignes). → test (remplacement répété).
3. **Doublon du même lieu** : accepté, deux lignes à des positions différentes. → test.
4. **Liste vide** → tous les arrêts retirés, 0 restant, pas d'erreur. → test.
5. **Front** : changer l'origine/destination après avoir ajouté des arrêts ne doit pas planter ;
   les options se recalculent (un arrêt déjà choisi qui devient l'origine/destination reste dans
   la liste jusqu'à retrait manuel — comportement défini, pas de crash).
6. **Voyages existants** : hard-delete des `RouteStop` ne doit pas affecter les `TripStop` déjà
   générés sur des voyages (vérifié : `TripStop` référence `service_point`, pas `RouteStop`).
