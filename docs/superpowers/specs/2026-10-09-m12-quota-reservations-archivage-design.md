# M12 — Quota de réservations & suppression du délai d'archivage — Design

**Date:** 2026-10-09
**Cahier ref:** M12 (dictées 19, 22) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

1. **Places réservables** : ajouter un *quota de réservation* (réserver maintenant, payer
   plus tard) réglable par l'agent à la création du voyage. Les places vendables viennent du
   plan de bus ; le quota ne peut pas les dépasser.
2. **Archivage** : supprimer le paramètre *délai d'archivage* de la configuration Voyages
   (déjà géré centralement dans l'Administration).

### Décisions de cadrage (validées)

- Quota laissé vide → **défaut = places vendables** (total du plan − places bloquées).
- Quota saisi **> vendables** → **refus** avec message « Le quota de réservation ne peut pas
  dépasser N places vendables. » (pas de clamp silencieux).

## État actuel

- `Trip.max_reservations` (« réservations autorisées ») sert **déjà** de quota de réservation :
  `reservation_services.py:37-40` refuse `held + n > max_reservations`.
- Mais `create_trip` **écrase** la valeur saisie par le total des sièges matérialisés
  (`trip.max_reservations = trip.seats.count()`), donc l'agent ne peut rien régler.
- Front `voyages-list` : le champ `max_reservations` est **readonly** et auto-rempli au total
  du plan ; le getter `sellableSeats = max_reservations − blocked` (sémantique à corriger).
- `VoyagesSettings.archive_delay_days` existe mais n'est **câblé à aucune logique d'archivage**
  (uniquement modèle + serializer + écran settings).

## Portée

### 1. Quota — `apps/voyages_trips/services/trip_services.py`

Dans `create_trip`, remplacer le bloc d'écrasement (après `materialise_seats` + `_block_seats`) :
```python
    if trip.seating_plan_id:
        materialise_seats(trip)
        _block_seats(trip, blocked_seats_count or 0, user)
        sellable = trip.seats.filter(is_deleted=False, status=TripSeat.Status.AVAILABLE).count()
        if max_reservations is None:
            trip.max_reservations = sellable
        elif max_reservations > sellable:
            raise ApplicationError(
                _("Le quota de réservation ne peut pas dépasser %(n)s places vendables.") % {"n": sellable})
        else:
            trip.max_reservations = max_reservations
        trip.save(update_fields=["max_reservations", "updated_by", "updated_at"])
```
- Sans plan (`seating_plan_id` absent) : aucune base de places vendables → `max_reservations`
  reste la valeur fournie (comportement actuel, inchangé).
- `create_trip_from_pattern` délègue à `create_trip` → hérite automatiquement.
- Le refus lève `ApplicationError` (la vue renvoie 400 via `error_response`).

### 2. Archivage — suppression de `archive_delay_days`

- `apps/voyages_config/models/settings.py` : retirer le champ `archive_delay_days`.
- Migration `voyages_config` : `RemoveField`.
- `apps/voyages_config/config_api/serializers.py` : retirer `archive_delay_days` de
  `VoyagesSettingsRead.Meta.fields` (~353) et du write serializer (~365).
- Frontend : retirer le champ du `fb.group` et du formulaire `settings.component.{ts,html}` +
  de l'interface TS `voyages-config.models.ts`.

### 3. Frontend — `apps/.../voyages/list/voyages-list.component.{ts,html}`

- Le champ `max_reservations` devient **éditable** (« Places réservables »), plus readonly.
- Sur changement de plan **ou** de places bloquées : (ré)initialiser `max_reservations` au
  défaut = places vendables (`plan.total_seats − blocked_seats_count`), l'agent pouvant ensuite
  le réduire.
- Corriger `sellableSeats` : = `plan.total_seats − blocked_seats_count` (plus `max_reservations − blocked`).
- Afficher « Places vendables » (lecture seule, dérivé) + indice « ≤ N places vendables ».
- Le message d'erreur 400 s'affiche déjà via `errorMsg`.

### 4. Tests

- `test_quota_defaults_to_sellable` : voyage créé sans `max_reservations` → `= sellable`.
- `test_quota_rejected_above_sellable` : `max_reservations > sellable` → `ApplicationError` /
  400 via API.
- `test_quota_honored_within_sellable` : `max_reservations ≤ sellable` conservé tel quel.
- Mettre à jour/retourner l'ancien test
  `test_max_reservations_derived_from_plan_and_sellable_minus_blocked` (qui affirmait que la
  valeur agent est ignorée) — désormais la valeur agent est honorée (si ≤ vendables).
- `test_settings_has_no_archive_delay` : le champ est absent du modèle/serializer.

## Critères d'acceptation

1. Création d'un voyage sans quota → `max_reservations` = places vendables du plan.
2. Quota > vendables → refus 400 avec message dédié ; quota ≤ vendables → conservé.
3. La config Voyages n'expose plus « délai d'archivage » (écran + API).
4. La réservation (`reservation_services`) reste plafonnée par `max_reservations` (inchangé).
5. `makemigrations --check` propre ; suites backend ciblées vertes (voyages_trips,
   voyages_config, voyages_booking) hors rouges de base connus. `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Quota = vendables exactement** (cas limite) → accepté, pas de erreur off-by-one. → test.
2. **Voyage sans plan + quota fourni** → pas de validation (aucune base), pas de 500 ; quota
   conservé tel quel. → test `test_quota_no_plan_kept_as_is`.
3. **Voyage via planification** (`create_trip_from_pattern`) → quota défauté/validé comme en
   création manuelle. → test.
4. **Front** : après changement de plan puis de places bloquées, le défaut du quota suit les
   vendables sans écraser une saisie explicite inférieure ? (définir : changement de plan/bloqué
   = ré-initialisation au défaut vendables ; l'agent re-règle si besoin — comportement simple et
   prévisible).
5. **Retrait `archive_delay_days`** : la lecture des settings existants et le seed ne doivent pas
   référencer le champ supprimé (pas de 500 / KeyError).
