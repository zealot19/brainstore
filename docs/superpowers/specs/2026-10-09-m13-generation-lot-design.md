# M13 — Génération de voyages en lot — Design

**Date:** 2026-10-09
**Cahier ref:** M13 (dictée 23) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Un écran de génération de plusieurs voyages en une opération : à partir d'une **charte**
(planification) et d'une **période** (date de début, date de fin), créer un voyage pour chaque
date de la période où la charte circule.

### Décision de cadrage (validée)

- **Basé sur la charte** : la planification (`ServicePattern`) porte déjà trajet + catégorie
  tarifaire + plage horaire + jours de la semaine + validité. La génération = charte + période.
  (Répond à l'Annexe B : jours et heure de départ viennent de la charte, pas de saisie séparée.)
- **Skip des doublons** (idempotent) : une date déjà pourvue d'un voyage pour cette charte est
  **ignorée** ; relancer la même période ne crée pas de doublon. Les jours où la charte ne
  circule pas (jour de semaine non coché / hors validité) sont ignorés aussi.

## État actuel

- `create_trip_from_pattern(company, pattern, service_date, …, user)` crée **un** voyage pour une
  date (valide le jour de circulation + la période de validité de la charte). Lève
  `ApplicationError` si la charte ne circule pas ce jour-là.
- `Trip.service_pattern` (FK) + `scheduled_departure` permettent de détecter un voyage existant
  pour (charte, date).
- Aucune génération en lot aujourd'hui.

## Portée

### 1. Backend — `apps/voyages_trips/`

- **Service** `generate_trips_from_pattern(*, company, pattern, start_date, end_date, user)` :
  - Garde-fou : `end_date >= start_date` et période **≤ 366 jours** (sinon `ApplicationError`).
  - Itérer chaque date de `[start_date, end_date]` :
    - jour non circulé (flag jour de semaine off) **ou** hors `valid_from/valid_to` → `skipped_offday++` ;
    - voyage non supprimé déjà existant pour `(service_pattern=pattern, scheduled_departure__date=date)`
      → `skipped_existing++` ;
    - sinon `create_trip_from_pattern(company, pattern, service_date=date, user=user)` → `created++`.
  - Ne PAS laisser `create_trip_from_pattern` lever pour un jour non circulé (on filtre en amont
    via les flags jour de semaine, comme le fait la fonction) — le service vérifie le flag avant
    d'appeler.
  - Retour : `{ "created": int, "skipped_existing": int, "skipped_offday": int }`.
- **Serializer** `GenerateTripsSerializer` : `service_pattern_id` (UUID), `start_date` (Date),
  `end_date` (Date) ; `validate` : `end_date >= start_date`.
- **Vue** `GenerateTripsView` (`POST`), perm `voyage.trip.create` ; résoudre la charte scoped
  société (404 si introuvable/autre société) ; renvoyer le dict de comptage.
- **URL** : `path("generate/", v.GenerateTripsView.as_view())` dans `voyages_trips/urls.py`
  (→ `/api/v1/voyage/trips/generate/`), avant `path("", TripListCreateView)`.

### 2. Frontend — Voyages

- Service `trip.service.ts` : `generateBatch({ service_pattern_id, start_date, end_date })`.
- Écran Voyages (`voyages-list`) : bouton **« Générer en lot »** ouvrant un modal :
  select charte (planifications chargées), date début, date fin → appel → toast
  « N voyages créés, M ignorés » (créés + skipped_existing + skipped_offday) ; recharger la liste.
- i18n (fr/en/es/pt).

### 3. Tests (backend)

- `test_generate_creates_one_per_circulating_date` : charte circulant certains jours sur une
  période → `created` = nombre de jours circulés (neufs).
- `test_generate_skips_offpattern_days` : jours non cochés ignorés (`skipped_offday`).
- `test_generate_idempotent_skips_existing` : relancer la même période → `created=0`,
  `skipped_existing` = total circulant.
- `test_generate_respects_validity` : dates hors `valid_from/valid_to` ignorées.
- `test_generate_rejects_overlong_range` : période > 366 jours → 400.
- `test_generate_foreign_pattern_404` : charte d'une autre société → 404.

## Critères d'acceptation

1. Depuis l'écran Voyages, choisir une charte + une période génère un voyage par date circulée
   neuve ; message « N créés, M ignorés ».
2. Relancer la même période ne crée aucun doublon (skip existant).
3. Jours non circulés / hors validité ignorés.
4. Période aberrante (fin < début) ou trop longue (> 366 j) refusée (400).
5. `makemigrations --check` propre (aucun schéma) ; suites backend ciblées vertes ; `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Nuit / fuseau** : `create_trip_from_pattern` gère déjà l'arrivée le lendemain pour un
   créneau de nuit ; la génération réutilise la fonction telle quelle (pas de recalcul). → test nominal.
2. **Détection d'existant par date locale** : comparer sur la **date locale** du départ
   (`scheduled_departure__date` en tenant compte du fuseau) pour ne pas rater/dupliquer à cheval
   sur minuit. → test idempotent.
3. **Période d'un seul jour** (start == end) circulé → 1 créé. → couvert.
4. **Cap de période** : > 366 j refusé AVANT toute création (pas de création partielle). → test.
5. **Charte sans plan par défaut** : `create_trip_from_pattern` crée le voyage sans sièges
   (plan optionnel) — pas de crash ; la génération n'échoue pas en bloc. → vérifier via un test
   nominal (charte sans `default_seating_plan`).
6. **Atomicité** : un échec de création sur une date ne doit pas laisser un lot à moitié créé de
   façon incohérente — décision : chaque voyage est créé indépendamment ; en cas d'erreur
   inattendue sur une date, remonter l'erreur (400) ; les voyages déjà créés avant l'erreur
   restent (comportement « best-effort » documenté). Les cas normaux (offday/existant) ne sont
   pas des erreurs.
