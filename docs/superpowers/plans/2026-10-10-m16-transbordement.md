# M16 — Transbordement (3 modes + motif) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter un motif obligatoire, un mode « par véhicule » (bulk), et une console « générale » au transbordement existant, avec traçabilité complète.

**Architecture:** Delta sur `apps/voyages_trips` : `Transbordement.reason` (obligatoire via service) ; `transbord_vehicle` (bulk atomique de `transbord_trip` sur les voyages à venir d'un véhicule) ; la console « générale » réutilise `transbord_selection` (source→destination déjà géré). Frontend : motif sur modales existantes, action par-véhicule, console générale.

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-10-m16-transbordement-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend : i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- Réutiliser la logique transbord existante (`transbord_trip`, `transbord_selection`, `apply_transbord`) — ne pas réécrire la ré-attribution des sièges.

## Review Focus

- **Motif contournable** : un transbordement créé sans `reason` (par voyage OU par véhicule) → doit lever une erreur. Test Task 1/2.
- **Bulk non atomique** : si un voyage du véhicule échoue, les autres ne doivent PAS rester transbordés (rollback). Test Task 2.
- **Bulk prend des voyages passés/d'un autre véhicule** : `transbord_vehicle` ne doit traiter que les voyages à venir du véhicule choisi. Test Task 2.
- **Non-régression transbord par voyage** : les flux existants (bus/selection) restent verts. Test Task 1.
- **Historique perd le motif** : le `reason` doit apparaître dans l'historique. Test Task 1.

---

## Task 1 : Backend — motif obligatoire

**Files:**
- Modify: `backend/apps/voyages_trips/models/transbordement.py` (`reason`)
- Modify: `backend/apps/voyages_trips/services/transbordement.py` (`transbord_trip`, `transbord_selection` : param `reason` requis)
- Modify: `backend/apps/voyages_trips/views.py` (`TripTransbordView`, `TripTransbordSelectionView` : exiger `reason` ; `TripTransbordHistoryView` : +`reason`)
- Create: `backend/apps/voyages_trips/tests/test_m16_motif.py`
- Migration auto

**Interfaces:**
- Produces: `Transbordement.reason` ; `transbord_trip(..., reason)`, `transbord_selection(..., reason)` lèvent si `reason` vide.

- [ ] **Step 1 : Test rouge** — `test_m16_motif.py` : construire un voyage transbordable (réutiliser les helpers de `test_transbord*` existants s'il y en a, sinon créer company+route+trip+vehicle), appeler `transbord_trip(trip, to_vehicle, user=admin, reason="")` → `ApplicationError` ; avec `reason="panne"` → le `Transbordement` créé a `reason == "panne"`.
- [ ] **Step 2 : rouge** (`transbord_trip` n'a pas de param `reason`).
- [ ] **Step 3 : Modèle** — ajouter `reason = models.CharField(_("motif"), max_length=255, blank=True)` à `Transbordement` (blank=True en base ; obligation imposée au service pour ne pas bloquer les lignes existantes).
- [ ] **Step 4 : Migration** `makemigrations voyages_trips` (AddField reason).
- [ ] **Step 5 : Services** — `transbord_trip` et `transbord_selection` : ajouter `reason=""` au kwargs ; en tête, `if not (reason or "").strip(): raise ApplicationError(_("Le motif du transbordement est obligatoire."))` ; passer `reason=reason` au `Transbordement.objects.create(...)`.
- [ ] **Step 6 : Vues** — `TripTransbordView.post` et `TripTransbordSelectionView.post` : lire `reason = request.data.get("reason", "")` et le passer au service (le service lève si vide). `TripTransbordHistoryView` : ajouter `"reason": tb.reason` au dict de ligne.
- [ ] **Step 7 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/voyages_trips/tests/test_m16_motif.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/voyages_trips -q --reuse-db` → baseline master (cf. mémoire ; noter les rouges préexistants, ne pas en ajouter)
Run: `makemigrations --check --dry-run` → No changes detected
- [ ] **Step 8 : Commit** `git commit -m "feat(voyages): required reason on transbordement + history (M16)"`

---

## Task 2 : Backend — mode « par véhicule » (bulk atomique)

**Files:**
- Modify: `backend/apps/voyages_trips/services/transbordement.py` (`transbord_vehicle`)
- Modify: `backend/apps/voyages_trips/selectors/transbord_selectors.py` (`vehicle_transbord_options`)
- Modify: `backend/apps/voyages_trips/views.py` (2 vues : eligible + action)
- Modify: `backend/apps/voyages_trips/urls.py` (2 routes)
- Create: `backend/apps/voyages_trips/tests/test_m16_vehicle.py`

**Interfaces:**
- Consumes: `transbord_trip(..., reason)` (Task 1).
- Produces: `transbord_vehicle(company, *, from_vehicle, to_vehicle, reason, user) -> {trips, transbordements, counts}` ; endpoints `GET /voyages/trips/transbord/vehicle/<uuid:vehicle_id>/eligible/`, `POST /voyages/trips/transbord/vehicle/<uuid:vehicle_id>/`.

- [ ] **Step 1 : Test rouge** — `test_m16_vehicle.py` :
  - un véhicule V1 avec 2 voyages à venir (status pending) ; `transbord_vehicle(company, from_vehicle=V1, to_vehicle=V2, reason="panne", user=admin)` → 2 `Transbordement` créés, les 2 voyages pointent sur V2.
  - sans voyage éligible (V1 sans voyage à venir) → `ApplicationError`.
  - atomicité : si V2 est indisponible/sans plan pour l'un des voyages → aucun voyage transbordé (vérifier que V1 garde ses voyages).
- [ ] **Step 2 : rouge.**
- [ ] **Step 3 : Service** `transbord_vehicle` :

```python
@transaction.atomic
def transbord_vehicle(company, *, from_vehicle, to_vehicle, reason, user):
    from apps.voyages_trips.models import Trip
    if not (reason or "").strip():
        raise ApplicationError(_("Le motif du transbordement est obligatoire."))
    from django.utils import timezone
    trips = list(Trip.objects.filter(company=company, vehicle=from_vehicle, is_deleted=False,
                                     status__in=["pending", "departed"],
                                     scheduled_departure__gte=timezone.now())
                 .order_by("scheduled_departure"))
    if not trips:
        raise ApplicationError(_("Aucun voyage à venir pour ce véhicule."))
    results = []
    totals = {"passengers_moved": 0, "parcels_moved": 0, "baggage_moved": 0}
    for t in trips:
        r = transbord_trip(t, to_vehicle, user=user, reason=reason)   # lève → rollback global
        results.append(r)
        for k in totals:
            totals[k] += r.get(k, 0)
    return {"trips": [str(t.id) for t in trips], "transbordements": results, **totals}
```

- [ ] **Step 4 : Selector** `vehicle_transbord_options(company, vehicle)` → `{trips: [...voyages à venir...], target_vehicles: [...véhicules candidats...]}` (réutiliser `blocking_reasons`/`active_seating_plan` pour marquer les cibles disponibles ; s'inspirer de `transbord_options`).
- [ ] **Step 5 : Vues** — `VehicleTransbordEligibleView` (GET, `voyage.trip.view`) → `vehicle_transbord_options` ; `VehicleTransbordView` (POST, `voyage.trip.update`) → résout `from_vehicle` (du path) + `to_vehicle_id` + `reason` du payload → `transbord_vehicle`. Erreurs via `error_response`.
- [ ] **Step 6 : URLs** (dans voyages_trips/urls.py, à côté des transbord existants) :
```python
    path("transbord/vehicle/<uuid:vehicle_id>/eligible/", v.VehicleTransbordEligibleView.as_view()),
    path("transbord/vehicle/<uuid:vehicle_id>/", v.VehicleTransbordView.as_view()),
```
- [ ] **Step 7 : vert + non-régression + check.**
- [ ] **Step 8 : Commit** `git commit -m "feat(voyages): transbord par véhicule (bulk atomique) (M16)"`

---

## Task 3 : Frontend — motif sur modales existantes + historique

**Files:**
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.{ts,html}` (champ motif obligatoire sur les modales transbord bus + sélection ; colonne motif dans l'historique)
- Modify: `angular/src/_api/services/voyages/trip.service.ts` (passer `reason` dans `transbord`/`transbordSelection`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Service** — `trip.service.ts` : les méthodes `transbord(id, body)` / `transbordSelection(id, body)` incluent déjà `body` libre ; s'assurer que le composant ajoute `reason`.
- [ ] **Step 2 : Composant** — `trip-detail.component.ts` : ajouter `tbReason = ''` / `selReason = ''` ; inclure dans les payloads `doTransbord()` / `transbordSelection()` ; bloquer la soumission si vide.
- [ ] **Step 3 : Template** — champ **Motif** (input requis) dans les modales transbord ; colonne/ligne **Motif** dans le tableau historique (`tbHistory` → `h.reason`).
- [ ] **Step 4 : i18n** — `voyages.transbord.f_reason`, `voyages.transbord.col_reason` (+ libellés, 4 locales).
- [ ] **Step 5 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 6 : Commit** `git commit -m "feat(voyages): motif obligatoire sur transbordement (frontend) (M16)"`

---

## Task 4 : Frontend — mode « par véhicule »

**Files:**
- Modify: `api.config.ts` (endpoints `transbordVehicleEligible`, `transbordVehicle`)
- Modify: `trip.service.ts` (ou un service véhicule) : `transbordVehicleEligible(vehicleId)`, `transbordVehicle(vehicleId, {to_vehicle_id, reason})`
- Create/Modify: une action « Transborder le véhicule » — modale (véhicule cible + motif) affichant les voyages impactés, accessible depuis la fiche véhicule Fleet **ou** la console (Task 5). L'exécuteur choisit l'emplacement et le documente.
- Modify: i18n ×4

- [ ] **Step 1 : Endpoints** `api.config.ts` : `transbordVehicleEligible: (id) => \`${VT}/transbord/vehicle/${id}/eligible/\``, `transbordVehicle: (id) => \`${VT}/transbord/vehicle/${id}/\``.
- [ ] **Step 2 : Service** méthodes GET eligible / POST action (`map(r => r.data ?? r)`).
- [ ] **Step 3 : UI** — bouton « Transborder le véhicule » → modale : liste des voyages impactés (depuis eligible), sélecteur véhicule cible, champ motif obligatoire → POST ; toast + rafraîchir.
- [ ] **Step 4 : i18n** (4 locales).
- [ ] **Step 5 : Build.**
- [ ] **Step 6 : Commit** `git commit -m "feat(voyages): transbord par véhicule (frontend) (M16)"`

---

## Task 5 : Frontend — console « générale »

**Files:**
- Create: page `angular/src/_api/pages/voyages/transbordement/transbordement.component.{ts,html}` (console)
- Modify: `routes.ts`, `pages.routes.ts`, `sidebar.service.ts` (menu Voyages > Transbordement)
- Modify: i18n ×4

**Interfaces:**
- Consumes: liste voyages (source) ; `transbord/selection/options` (sélection) ; `transbord/selection` (POST avec `reason`) ; `transbord/vehicle` (Task 2) ; `transbord/history`.

- [ ] **Step 1 : Page console** — 3 onglets/sections : (a) **par voyage** (choisir voyage → lien vers sa fiche ou modale bus/sélection), (b) **par véhicule** (réutilise Task 4), (c) **général** : choisir voyage source (recherche) → charger sélection (`selection/options`) → choisir voyage destination (ou bus) → motif → POST `transbord/selection`. Onglet **historique** (company-wide ou par voyage).
- [ ] **Step 2 : Route** — `routes.ts` `vtTransbordement: '/voyages/transbordement'` + `pages.routes.ts` loadComponent.
- [ ] **Step 3 : Menu** — entrée « Transbordement » sous Voyages (`sidebar.service.ts`), permission `voyage.trip.update`.
- [ ] **Step 4 : i18n** (4 locales).
- [ ] **Step 5 : Build.**
- [ ] **Step 6 : Commit** `git commit -m "feat(voyages): console de transbordement générale (M16)"`

---

## Notes d'implémentation

- La console « générale » ne doit PAS dupliquer la logique : elle appelle les
  endpoints existants (`transbord/selection`) + le nouveau (`transbord/vehicle`).
- `transbord_vehicle` doit être `@transaction.atomic` pour la garantie de rollback.
- Avant d'éditer les modales transbord de `trip-detail`, relire la section transbord
  du composant (méthodes `openTransbord`/`doTransbord`/`transbordSelection`).
- Ne traiter dans le bulk que `status in (pending, departed)` ET `scheduled_departure >= now`.
- Vérifier la base rouge voyages_trips sur master avant d'imputer une régression.
