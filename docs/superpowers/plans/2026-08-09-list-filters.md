# Filtres des tableaux (Voyages / Réservations / Colis / Bagages) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter des filtres serveur (statut, type, voyage, canal, trajet, véhicule, type de colis, origine/destination, plage de dates avec base Création/Départ/Arrivée) sur les quatre tableaux du module Voyages.

**Architecture:** On étend le pattern existant (APIView → sélecteur → query params). Un helper partagé `apps/core/filters.py` gère la plage de dates et la résolution du champ de date. Côté Angular, chaque service `list()` accepte un objet de paramètres, et chaque composant liste reçoit une barre de filtres (selects natifs + 2 champs date + bouton Effacer) qui relance la liste serveur.

**Tech Stack:** Django 5.1 + DRF, pytest (`config.settings.local`), Angular 21 standalone (`FormsModule`, `@if/@for`, `[(ngModel)]`).

## Global Constraints

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — toujours `git -C <repo>`).
- Branche : `feature/list-filters` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- Python : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master/env/bin/python`, exécuté depuis `.../ERP-master/backend`.
- Français partout. Pas d'import treasury/tiers. **Aucune nouvelle dépendance.** Filtrage **serveur** uniquement.
- Rendu robuste : param absent/invalide → ignoré (aucune 500). `date_field` inconnu → repli sur le défaut de la table.
- Défaut `date_field` : `departure` pour Voyages, `created` pour Réservations/Colis/Bagages.
- Vérif finale : `manage.py check`, pytest, `npx ng build`.

**Convention de test backend :** helpers purs testés sans DB. Sélecteurs testés en construisant le
queryset avec `company=None` et en vérifiant le SQL via `str(qs.query)` (compilation, sans exécution).
Si la compilation exige une base sur une machine donnée, ajouter `import pytest` +
`@pytest.mark.django_db` au test concerné (pytest-django est disponible).
Commande : `cd .../ERP-master/backend && ../env/bin/python -m pytest apps/<app>/tests.py -v`

---

### Task 1: Helper de filtrage par date (`apps/core/filters.py`)

**Files:**
- Create: `backend/apps/core/filters.py`
- Test: `backend/apps/core/tests.py` (créer si absent)

**Interfaces:**
- Produces:
  - `resolve_date_field(mapping: dict, key: str | None, default: str) -> str`
  - `date_range_kwargs(field: str, date_from: str | None, date_to: str | None) -> dict`
  - `apply_date_range(qs, field: str, date_from, date_to)` → queryset filtré.

- [ ] **Step 1: Écrire les tests (échouent)**

Créer `backend/apps/core/tests.py` :

```python
from datetime import date
from apps.core.filters import resolve_date_field, date_range_kwargs


def test_resolve_date_field_uses_default_when_missing_or_unknown():
    m = {"created": "created_at", "departure": "scheduled_departure"}
    assert resolve_date_field(m, None, "created") == "created_at"
    assert resolve_date_field(m, "departure", "created") == "scheduled_departure"
    assert resolve_date_field(m, "bogus", "created") == "created_at"


def test_date_range_kwargs_parses_and_ignores_invalid():
    assert date_range_kwargs("created_at", "2026-01-01", "2026-12-31") == {
        "created_at__date__gte": date(2026, 1, 1),
        "created_at__date__lte": date(2026, 12, 31),
    }
    assert date_range_kwargs("created_at", None, "pas-une-date") == {}
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/core/tests.py -v`
Expected: FAIL (`No module named apps.core.filters`).

- [ ] **Step 3: Écrire le helper**

Créer `backend/apps/core/filters.py` :

```python
"""Helpers de filtrage réutilisables pour les vues liste (plage de dates)."""
from datetime import datetime


def resolve_date_field(mapping, key, default):
    """Retourne le nom de champ correspondant à `key` (ou au défaut si inconnu)."""
    return mapping.get(key or default, mapping[default])


def _parse(value):
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except (TypeError, ValueError):
        return None


def date_range_kwargs(field, date_from, date_to):
    """Construit les kwargs de filtre inclusif sur la date (ignore les dates invalides)."""
    out = {}
    start, end = _parse(date_from), _parse(date_to)
    if start:
        out[f"{field}__date__gte"] = start
    if end:
        out[f"{field}__date__lte"] = end
    return out


def apply_date_range(qs, field, date_from, date_to):
    kwargs = date_range_kwargs(field, date_from, date_to)
    return qs.filter(**kwargs) if kwargs else qs
```

- [ ] **Step 4: Lancer les tests (doivent passer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/core/tests.py -v`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/core/filters.py backend/apps/core/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(core): helper de filtrage par plage de dates"
```

---

### Task 2: Filtres backend — Voyages (trips)

**Files:**
- Modify: `backend/apps/voyages_trips/selectors/trip_selectors.py`
- Modify: `backend/apps/voyages_trips/views.py` (`TripListCreateView.get`)
- Test: `backend/apps/voyages_trips/tests.py` (créer)

**Interfaces:**
- Consumes: `resolve_date_field`, `apply_date_range` (Task 1).
- Produces: `list_trips(company, status=None, route=None, vehicle=None, date_field=None, date_from=None, date_to=None)`.

- [ ] **Step 1: Écrire le test (échoue)**

Créer `backend/apps/voyages_trips/tests.py` :

```python
from apps.voyages_trips.selectors import list_trips

_U = "00000000-0000-0000-0000-000000000001"


def test_list_trips_filters_route_vehicle_and_departure_range():
    qs = list_trips(None, route=_U, vehicle=_U, date_field="departure",
                    date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "route_id" in sql
    assert "vehicle_id" in sql
    assert "scheduled_departure" in sql


def test_list_trips_created_basis():
    qs = list_trips(None, date_field="created", date_from="2026-01-01")
    assert "created_at" in str(qs.query)
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py -v`
Expected: FAIL (`list_trips() got an unexpected keyword argument 'route'`).
(Si erreur de compilation SQL sans DB : ajouter `import pytest` et `@pytest.mark.django_db` sur les 2 tests.)

- [ ] **Step 3: Étendre `list_trips`**

Dans `backend/apps/voyages_trips/selectors/trip_selectors.py`, remplacer la fonction `list_trips` par :

```python
from apps.core.filters import resolve_date_field, apply_date_range

_TRIP_DATE_FIELDS = {"created": "created_at", "departure": "scheduled_departure",
                     "arrival": "scheduled_arrival"}


def list_trips(company, status=None, route=None, vehicle=None,
               date_field=None, date_from=None, date_to=None):
    qs = (Trip.objects.filter(company=company, is_deleted=False)
          .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
          .order_by("-scheduled_departure"))
    if status:
        qs = qs.filter(status=status)
    if route:
        qs = qs.filter(route_id=route)
    if vehicle:
        qs = qs.filter(vehicle_id=vehicle)
    field = resolve_date_field(_TRIP_DATE_FIELDS, date_field, "departure")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs
```

(Garder l'import `Trip` existant en tête de fichier ; ajouter la ligne `from apps.core.filters import …` en tête.)

- [ ] **Step 4: Passer les params dans la vue**

Dans `backend/apps/voyages_trips/views.py`, `TripListCreateView.get`, remplacer la ligne
`qs = selectors.list_trips(company, status=request.query_params.get("status"))` par :

```python
        qs = selectors.list_trips(
            company,
            status=request.query_params.get("status"),
            route=request.query_params.get("route"),
            vehicle=request.query_params.get("vehicle"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
```

- [ ] **Step 5: Lancer le test + check**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py -v && ../env/bin/python manage.py check`
Expected: PASS + check OK (warning staticfiles toléré).

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/selectors/trip_selectors.py backend/apps/voyages_trips/views.py backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): filtres liste trajet/vehicule/plage de dates"
```

---

### Task 3: Filtres backend — Réservations (bookings)

**Files:**
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (`list_bookings`)
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`BookingListView.get`)
- Test: `backend/apps/voyages_booking/tests.py` (créer)

**Interfaces:**
- Consumes: Task 1 helpers.
- Produces: `list_bookings(company, status=None, trip_id=None, q=None, trip_type=None, channel=None, date_field=None, date_from=None, date_to=None)`.

- [ ] **Step 1: Écrire le test (échoue)**

Créer `backend/apps/voyages_booking/tests.py` :

```python
from apps.voyages_booking.selectors import list_bookings


def test_list_bookings_filters_type_channel_and_departure():
    qs = list_bookings(None, trip_type="round_trip", channel="online",
                       date_field="departure", date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "trip_type" in sql
    assert "channel" in sql
    assert "scheduled_departure" in sql


def test_list_bookings_created_basis_default():
    qs = list_bookings(None, date_from="2026-01-01")
    assert "created_at" in str(qs.query)
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_booking/tests.py -v`
Expected: FAIL (`unexpected keyword argument 'trip_type'`). (Fallback `@pytest.mark.django_db` si besoin.)

- [ ] **Step 3: Étendre `list_bookings`**

Dans `backend/apps/voyages_booking/selectors/__init__.py`, remplacer la fonction `list_bookings` par :

```python
def list_bookings(company, status=None, trip_id=None, q=None,
                  trip_type=None, channel=None, date_field=None, date_from=None, date_to=None):
    qs = (Booking.objects.filter(is_deleted=False, company=company)
          .select_related("outbound_trip", "return_trip", "buyer")
          .order_by("-created_at"))
    if status:
        qs = qs.filter(status=status)
    if trip_id:
        qs = qs.filter(Q(outbound_trip_id=trip_id) | Q(return_trip_id=trip_id))
    if trip_type:
        qs = qs.filter(trip_type=trip_type)
    if channel:
        qs = qs.filter(channel=channel)
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(buyer__phone__icontains=q) |
                       Q(buyer__last_name__icontains=q))
    field = resolve_date_field(
        {"created": "created_at", "departure": "outbound_trip__scheduled_departure",
         "arrival": "outbound_trip__scheduled_arrival"}, date_field, "created")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs
```

Ajouter en tête du fichier (près des autres imports) :
`from apps.core.filters import resolve_date_field, apply_date_range`
(`Q` est déjà importé — vérifier ; sinon `from django.db.models import Q`.)

- [ ] **Step 4: Passer les params dans la vue**

Dans `backend/apps/voyages_booking/config_api/views.py`, `BookingListView.get`, remplacer l'appel
`selectors.list_bookings(...)` par :

```python
        qs = selectors.list_bookings(
            request.user.company,
            status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"),
            q=request.query_params.get("q"),
            trip_type=request.query_params.get("trip_type"),
            channel=request.query_params.get("channel"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
```

- [ ] **Step 5: Lancer le test + check**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_booking/tests.py -v && ../env/bin/python manage.py check`
Expected: PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_booking/selectors/__init__.py backend/apps/voyages_booking/config_api/views.py backend/apps/voyages_booking/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reservations): filtres liste type/canal/voyage/plage de dates"
```

---

### Task 4: Filtres backend — Colis + Bagages

**Files:**
- Modify: `backend/apps/voyages_consignment/selectors/__init__.py` (`list_parcels`, `list_baggage`)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (`ParcelListView.get`, `BaggageListView.get`)
- Test: `backend/apps/voyages_consignment/tests.py` (append — le fichier existe)

**Interfaces:**
- Consumes: Task 1 helpers.
- Produces:
  - `list_parcels(company, status=None, trip_id=None, q=None, consignment_type=None, origin_point=None, destination_point=None, date_field=None, date_from=None, date_to=None)`
  - `list_baggage(company, ticket_id=None, trip_id=None, status=None, q=None, consignment_type=None, date_field=None, date_from=None, date_to=None)`

- [ ] **Step 1: Écrire les tests (échouent)**

Append dans `backend/apps/voyages_consignment/tests.py` :

```python
from apps.voyages_consignment.selectors import list_parcels, list_baggage

_UU = "00000000-0000-0000-0000-000000000002"


def test_list_parcels_filters_type_points_and_departure():
    qs = list_parcels(None, consignment_type=_UU, origin_point=_UU, destination_point=_UU,
                      date_field="departure", date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "consignment_type_id" in sql
    assert "origin_point_id" in sql
    assert "destination_point_id" in sql
    assert "scheduled_departure" in sql


def test_list_baggage_filters_type_and_created_default():
    qs = list_baggage(None, consignment_type=_UU, date_from="2026-01-01")
    sql = str(qs.query)
    assert "consignment_type_id" in sql
    assert "created_at" in sql
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_consignment/tests.py -k "parcels or baggage_filters" -v`
Expected: FAIL (`unexpected keyword argument 'consignment_type'`). (Fallback `@pytest.mark.django_db` si besoin.)

- [ ] **Step 3: Étendre `list_parcels`**

Dans `backend/apps/voyages_consignment/selectors/__init__.py`, remplacer `list_parcels` par :

```python
def list_parcels(company, status=None, trip_id=None, q=None, consignment_type=None,
                 origin_point=None, destination_point=None,
                 date_field=None, date_from=None, date_to=None):
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .select_related("origin_point", "destination_point", "trip", "consignment_type")
          .order_by("-created_at"))
    if status:
        qs = qs.filter(status=status)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if consignment_type:
        qs = qs.filter(consignment_type_id=consignment_type)
    if origin_point:
        qs = qs.filter(origin_point_id=origin_point)
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(sender_name__icontains=q) |
                       Q(sender_phone__icontains=q) | Q(recipient_name__icontains=q) |
                       Q(recipient_phone__icontains=q))
    field = resolve_date_field(
        {"created": "created_at", "departure": "trip__scheduled_departure",
         "arrival": "trip__scheduled_arrival"}, date_field, "created")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs
```

- [ ] **Step 4: Étendre `list_baggage`**

Toujours dans le même fichier, remplacer `list_baggage` par :

```python
def list_baggage(company, ticket_id=None, trip_id=None, status=None, q=None,
                 consignment_type=None, date_field=None, date_from=None, date_to=None):
    qs = (Baggage.objects.filter(is_deleted=False, company=company)
          .select_related("ticket__passenger", "trip", "consignment_type")
          .order_by("-created_at"))
    if ticket_id:
        qs = qs.filter(ticket_id=ticket_id)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if status:
        qs = qs.filter(status=status)
    if consignment_type:
        qs = qs.filter(consignment_type_id=consignment_type)
    if q:
        qs = qs.filter(Q(tag_number__icontains=q) | Q(sender_name__icontains=q) |
                       Q(sender_phone__icontains=q) | Q(ticket__number__icontains=q) |
                       Q(ticket__passenger__first_name__icontains=q) |
                       Q(ticket__passenger__last_name__icontains=q))
    field = resolve_date_field(
        {"created": "created_at", "departure": "trip__scheduled_departure",
         "arrival": "trip__scheduled_arrival"}, date_field, "created")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs
```

Ajouter en tête du fichier : `from apps.core.filters import resolve_date_field, apply_date_range`
(`Q` déjà importé dans ce fichier — vérifier). **Attention** : conserver la fin existante du `q`
de `list_baggage` (le OR sur `ticket__passenger__last_name` était coupé dans le fichier d'origine —
reprendre la version complète ci-dessus).

- [ ] **Step 5: Passer les params dans les vues**

Dans `backend/apps/voyages_consignment/config_api/views.py` :

`ParcelListView.get` → remplacer l'appel par :

```python
        qs = selectors.list_parcels(
            request.user.company,
            status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"),
            q=request.query_params.get("q"),
            consignment_type=request.query_params.get("consignment_type"),
            origin_point=request.query_params.get("origin_point"),
            destination_point=request.query_params.get("destination_point"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
```

`BaggageListView.get` → remplacer l'appel par :

```python
        qs = selectors.list_baggage(
            request.user.company,
            ticket_id=request.query_params.get("ticket"),
            trip_id=request.query_params.get("trip"),
            status=request.query_params.get("status"),
            q=request.query_params.get("q"),
            consignment_type=request.query_params.get("consignment_type"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
```

- [ ] **Step 6: Lancer les tests + check**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_consignment/tests.py -v && ../env/bin/python manage.py check`
Expected: tous PASS (les 4 tests doc_render existants + 2 nouveaux) + check OK.

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_consignment/selectors/__init__.py backend/apps/voyages_consignment/config_api/views.py backend/apps/voyages_consignment/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis/bagages): filtres liste type/voyage/origine-destination/plage de dates"
```

---

### Task 5: Services Angular — paramètres de liste

**Files:**
- Modify: `angular/src/_api/services/voyages/trip.service.ts`
- Modify: `angular/src/_api/services/voyages-booking/booking.service.ts`
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts`
- Modify: `angular/src/_api/services/voyages-consignment/baggage.service.ts`
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.ts` (adapter l'appel `list`)

**Interfaces:**
- Produces (signatures consommées par les composants aux Tasks 6-9) :
  - `TripService.list(params: { status?; route?; vehicle?; date_field?; date_from?; date_to? } = {})`
  - `BookingService.list(params: { status?; trip?; q?; trip_type?; channel?; date_field?; date_from?; date_to? } = {})`
  - `ParcelService.list(params: { status?; trip?; q?; consignment_type?; origin_point?; destination_point?; date_field?; date_from?; date_to? } = {})`
  - `BaggageService.list(params: { ticket?; trip?; status?; q?; consignment_type?; date_field?; date_from?; date_to? } = {})`

- [ ] **Step 1: `TripService.list`**

Dans `trip.service.ts`, remplacer la méthode `list` par :

```typescript
  list(params: { status?: string; route?: string; vehicle?: string;
                 date_field?: string; date_from?: string; date_to?: string } = {}): Observable<Trip[]> {
    let p = new HttpParams().set('page_size', '200');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<Trip[]>(VOYAGES.trips, { params: p });
  }
```

- [ ] **Step 2: Adapter l'appelant dans voyages-list**

Dans `voyages-list.component.ts`, méthode `load()`, remplacer
`this.svc.list(this.filterStatus || undefined)` par
`this.svc.list({ status: this.filterStatus || undefined })`.
(Les autres filtres voyages seront branchés à la Task 6.)

- [ ] **Step 3: `BookingService.list`**

Dans `booking.service.ts`, remplacer la méthode `list` par :

```typescript
  list(params: { status?: string; trip?: string; q?: string; trip_type?: string; channel?: string;
                 date_field?: string; date_from?: string; date_to?: string } = {}): Observable<Booking[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<Booking[]>(VOYAGES_BOOKING.bookings, { params: p });
  }
```

- [ ] **Step 4: `ParcelService.list`**

Dans `parcel.service.ts`, remplacer la méthode `list` par :

```typescript
  list(params: { status?: string; trip?: string; q?: string; consignment_type?: string;
                 origin_point?: string; destination_point?: string;
                 date_field?: string; date_from?: string; date_to?: string } = {}): Observable<Parcel[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcels, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
```

- [ ] **Step 5: `BaggageService.list`**

Dans `baggage.service.ts`, remplacer la méthode `list` par :

```typescript
  list(params: { ticket?: string; trip?: string; status?: string; q?: string; consignment_type?: string;
                 date_field?: string; date_from?: string; date_to?: string } = {}): Observable<Baggage[]> {
    let p = new HttpParams();
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<any>(VOYAGES_CONSIGNMENT.baggage, { params: p }).pipe(map(r => r.data ?? r));
  }
```

- [ ] **Step 6: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK (les appels existants `list({status, q})` restent compatibles).

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/services/voyages/trip.service.ts angular/src/_api/services/voyages-booking/booking.service.ts angular/src/_api/services/voyages-consignment/parcel.service.ts angular/src/_api/services/voyages-consignment/baggage.service.ts angular/src/_api/pages/voyages/list/voyages-list.component.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): parametres de filtre sur les services de liste"
```

---

### Task 6: Barre de filtres — Voyages

**Files:**
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.ts`
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.html`

**Interfaces:**
- Consumes: `TripService.list(params)` (Task 5), `RouteService` (déjà injecté), `VehicleService` (fleet).

- [ ] **Step 1: État + chargement véhicules + reload (composant)**

Dans `voyages-list.component.ts` :
- Ajouter l'import : `import { VehicleService } from '../../../services/fleet/vehicle.service';`
- Ajouter au constructeur le paramètre `private vehicleSvc: VehicleService` (avant `private fb`).
- Ajouter les champs d'état (près de `filterStatus = ''`) :

```typescript
  filterRoute = ''; filterVehicle = ''; dateField = 'departure'; dateFrom = ''; dateTo = '';
  vehicles: { id: string; license_plate: string }[] = [];
```

- Dans `ngOnInit`, après `this.spSvc.list()...`, ajouter : `this.vehicleSvc.list().subscribe(d => this.vehicles = d);`
- Remplacer `load()` par :

```typescript
  load(): void {
    this.loading = true;
    this.svc.list({
      status: this.filterStatus || undefined, route: this.filterRoute || undefined,
      vehicle: this.filterVehicle || undefined, date_field: this.dateField,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.filtered = d; this.loading = false; },
                   error: () => this.loading = false });
  }
  clearFilters(): void {
    this.filterStatus = this.filterRoute = this.filterVehicle = this.dateFrom = this.dateTo = '';
    this.dateField = 'departure';
    this.load();
  }
```

- [ ] **Step 2: Barre de filtres (template)**

Dans `voyages-list.component.html`, repérer le contrôle de filtre statut existant (`[(ngModel)]="filterStatus"`).
Remplacer ce contrôle (et son conteneur de colonne) par le bloc suivant, placé dans une rangée de filtres :

```html
<div class="row g-2 mb-3">
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="filterStatus" (change)="load()">
      <option value="">Tous statuts</option>
      @for (s of statuses; track s.value) { <option [value]="s.value">{{ s.label }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="filterRoute" (change)="load()">
      <option value="">Tous trajets</option>
      @for (r of routes; track r.id) { <option [value]="r.id">{{ r.code }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="filterVehicle" (change)="load()">
      <option value="">Tous véhicules</option>
      @for (v of vehicles; track v.id) { <option [value]="v.id">{{ v.license_plate }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="dateField" (change)="load()">
      <option value="created">Date création</option>
      <option value="departure">Date départ</option>
      <option value="arrival">Date arrivée</option>
    </select>
  </div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateFrom" (change)="load()"></div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateTo" (change)="load()"></div>
  <div class="col-md-2"><button class="btn btn-outline-secondary w-100" (click)="clearFilters()"><i class="ti ti-eraser me-1"></i>Effacer</button></div>
</div>
```

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages/list/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): barre de filtres (statut/trajet/vehicule/dates)"
```

---

### Task 7: Barre de filtres — Réservations

**Files:**
- Modify: `angular/src/_api/pages/voyages-booking/bookings/bookings.component.ts`
- Modify: `angular/src/_api/pages/voyages-booking/bookings/bookings.component.html`

**Interfaces:**
- Consumes: `BookingService.list(params)`, `TripService.list()` (pour le déroulant voyages).

- [ ] **Step 1: État + voyages + reload (composant)**

Dans `bookings.component.ts` :
- Import : `import { TripService } from '../../../services/voyages/trip.service';`
- Constructeur : ajouter `private tripSvc: TripService` (avant `private router`).
- Champs d'état (après `statusFilter = ''; q = '';`) :

```typescript
  typeFilter = ''; channelFilter = ''; tripFilter = ''; dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];
```

- `ngOnInit` : remplacer `ngOnInit(): void { this.reload(); }` par
  `ngOnInit(): void { this.tripSvc.list().subscribe(d => this.trips = d as any); this.reload(); }`
- Remplacer `reload()` par :

```typescript
  reload(): void {
    this.loading = true;
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, trip_type: this.typeFilter || undefined,
      channel: this.channelFilter || undefined, date_field: this.dateField,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  clearFilters(): void {
    this.statusFilter = this.q = this.typeFilter = this.channelFilter = this.tripFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }
```

- [ ] **Step 2: Barre de filtres (template)**

Dans `bookings.component.html`, remplacer le contrôle statut existant (`[(ngModel)]="statusFilter"`)
et sa colonne par cette rangée :

```html
<div class="row g-2 mb-3">
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="statusFilter" (change)="reload()">
      <option value="">Tous statuts</option>
      <option value="confirmed">Payé</option>
      <option value="boarded">Embarqué</option>
      <option value="cancelled">Annulé</option>
      <option value="no_show">Non présenté</option>
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="typeFilter" (change)="reload()">
      <option value="">Tous types</option>
      <option value="one_way">Aller simple</option>
      <option value="round_trip">Aller-retour</option>
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="channelFilter" (change)="reload()">
      <option value="">Tous canaux</option>
      <option value="counter">Guichet</option>
      <option value="online">En ligne</option>
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="tripFilter" (change)="reload()">
      <option value="">Tous voyages</option>
      @for (t of trips; track t.id) { <option [value]="t.id">{{ t.number || t.code }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="dateField" (change)="reload()">
      <option value="created">Date création</option>
      <option value="departure">Date départ</option>
      <option value="arrival">Date arrivée</option>
    </select>
  </div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateFrom" (change)="reload()"></div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateTo" (change)="reload()"></div>
</div>
<div class="mb-3"><button class="btn btn-outline-secondary btn-sm" (click)="clearFilters()"><i class="ti ti-eraser me-1"></i>Effacer les filtres</button></div>
```

(Conserver le champ de recherche texte `q` existant s'il est ailleurs dans le template.)

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-booking/bookings/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reservations): barre de filtres (statut/type/canal/voyage/dates)"
```

---

### Task 8: Barre de filtres — Colis

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html`

**Interfaces:**
- Consumes: `ParcelService.list(params)`, `TripService.list()`. `points` (ServicePoint[]) et `types` (ConsignmentType[]) sont déjà chargés dans le composant.

- [ ] **Step 1: État + voyages + reload (composant)**

Dans `parcels.component.ts` :
- Import : `import { TripService } from '../../../services/voyages/trip.service';`
- Constructeur : ajouter `private tripSvc: TripService` (avant `private fb`).
- Champs d'état (après `statusFilter = ''; q = '';`) :

```typescript
  tripFilter = ''; typeFilter = ''; originFilter = ''; destFilter = '';
  dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];
```

- Dans `ngOnInit`, après `this.ctSvc.list()...`, ajouter : `this.tripSvc.list().subscribe(d => this.trips = d as any);`
- Remplacer `reload()` par :

```typescript
  reload(): void {
    this.loading = true; this.selected.clear();
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, consignment_type: this.typeFilter || undefined,
      origin_point: this.originFilter || undefined, destination_point: this.destFilter || undefined,
      date_field: this.dateField, date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  clearFilters(): void {
    this.statusFilter = this.q = this.tripFilter = this.typeFilter = this.originFilter = this.destFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }
```

- [ ] **Step 2: Barre de filtres (template)**

Dans `parcels.component.html`, remplacer le contrôle statut existant (`[(ngModel)]="statusFilter"`)
et sa colonne par cette rangée :

```html
<div class="row g-2 mb-3">
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="statusFilter" (change)="reload()">
      <option value="">Tous statuts</option>
      <option value="registered">Enregistré</option>
      <option value="loaded">Chargé</option>
      <option value="arrived">Réceptionné</option>
      <option value="picked_up">Livré</option>
      <option value="cancelled">Annulé</option>
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="tripFilter" (change)="reload()">
      <option value="">Tous voyages</option>
      @for (t of trips; track t.id) { <option [value]="t.id">{{ t.number || t.code }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="typeFilter" (change)="reload()">
      <option value="">Tous types</option>
      @for (c of types; track c.id) { <option [value]="c.id">{{ c.label }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="originFilter" (change)="reload()">
      <option value="">Toute origine</option>
      @for (pt of points; track pt.id) { <option [value]="pt.id">{{ pt.name }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="destFilter" (change)="reload()">
      <option value="">Toute destination</option>
      @for (pt of points; track pt.id) { <option [value]="pt.id">{{ pt.name }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="dateField" (change)="reload()">
      <option value="created">Date création</option>
      <option value="departure">Date départ</option>
      <option value="arrival">Date arrivée</option>
    </select>
  </div>
  <div class="col-md-2"><input type="date" class="form-control" [(ngModel)]="dateFrom" (change)="reload()"></div>
  <div class="col-md-2"><input type="date" class="form-control" [(ngModel)]="dateTo" (change)="reload()"></div>
  <div class="col-md-2"><button class="btn btn-outline-secondary w-100" (click)="clearFilters()"><i class="ti ti-eraser me-1"></i>Effacer</button></div>
</div>
```

(`c.label` = libellé du type de colis ; `pt.name` = nom du point ; adapter si les propriétés réelles diffèrent — vérifier `ConsignmentType` et `ServicePoint` dans `models/voyages-config.models.ts`.)

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-consignment/parcels/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis): barre de filtres (statut/voyage/type/origine/destination/dates)"
```

---

### Task 9: Barre de filtres — Bagages

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html`

**Interfaces:**
- Consumes: `BaggageService.list(params)`, `TripService.list()`. `types` (ConsignmentType[]) déjà chargé.

- [ ] **Step 1: État + voyages + reload (composant)**

Dans `baggage.component.ts` :
- Import : `import { TripService } from '../../../services/voyages/trip.service';`
- Constructeur : ajouter `private tripSvc: TripService`.
- Champs d'état (après `q = ''; statusFilter = '';`) :

```typescript
  tripFilter = ''; typeFilter = ''; dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];
```

- Dans `ngOnInit`, après `this.ctSvc.list()...`, ajouter : `this.tripSvc.list().subscribe(d => this.trips = d as any);`
- Remplacer `reload()` par :

```typescript
  reload(): void {
    this.loading = true;
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, consignment_type: this.typeFilter || undefined,
      date_field: this.dateField, date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  clearFilters(): void {
    this.statusFilter = this.q = this.tripFilter = this.typeFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }
```

- [ ] **Step 2: Barre de filtres (template)**

Dans `baggage.component.html`, remplacer le contrôle statut existant (`[(ngModel)]="statusFilter"`)
et sa colonne par cette rangée :

```html
<div class="row g-2 mb-3">
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="statusFilter" (change)="reload()">
      <option value="">Tous statuts</option>
      <option value="checked_in">Enregistré</option>
      <option value="loaded">Chargé</option>
      <option value="delivered">Retiré</option>
      <option value="cancelled">Annulé</option>
    </select>
  </div>
  <div class="col-md-3">
    <select class="form-select" [(ngModel)]="tripFilter" (change)="reload()">
      <option value="">Tous voyages</option>
      @for (t of trips; track t.id) { <option [value]="t.id">{{ t.number || t.code }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="typeFilter" (change)="reload()">
      <option value="">Tous types</option>
      @for (c of types; track c.id) { <option [value]="c.id">{{ c.label }}</option> }
    </select>
  </div>
  <div class="col-md-2">
    <select class="form-select" [(ngModel)]="dateField" (change)="reload()">
      <option value="created">Date création</option>
      <option value="departure">Date départ</option>
      <option value="arrival">Date arrivée</option>
    </select>
  </div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateFrom" (change)="reload()"></div>
  <div class="col-md-1"><input type="date" class="form-control" [(ngModel)]="dateTo" (change)="reload()"></div>
  <div class="col-md-1"><button class="btn btn-outline-secondary w-100" (click)="clearFilters()" title="Effacer"><i class="ti ti-eraser"></i></button></div>
</div>
```

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages-consignment/baggage/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(bagages): barre de filtres (statut/voyage/type/dates)"
```

---

### Task 10: Vérification finale + fusion

**Files:** aucun (vérification).

- [ ] **Step 1: Backend — check + tous les tests**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py check
../env/bin/python -m pytest apps/core/tests.py apps/voyages_trips/tests.py apps/voyages_booking/tests.py apps/voyages_consignment/tests.py apps/voyages_config/tests.py -v
```
Expected: check OK (warning staticfiles toléré) ; tous les tests PASS.

- [ ] **Step 2: Frontend build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push) :
```
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master checkout master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master merge --ff-only feature/list-filters
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master push origin master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master branch -d feature/list-filters
```

---

## Self-Review

**Spec coverage :**
- Helper date + résolution du champ → Task 1. ✅
- Voyages : statut/trajet/véhicule/date (Création/Départ/Arrivée) → Task 2 (backend) + Task 6 (UI). ✅
- Réservations : statut/type/canal/voyage/date → Task 3 + Task 7. ✅
- Colis : statut/voyage/type/origine/destination/date → Task 4 + Task 8. ✅
- Bagages : statut/voyage/type/date → Task 4 + Task 9. ✅
- Sélecteur de date commun (Création/Départ/Arrivée) avec défauts (departure pour voyages, created sinon) → mappings des Tasks 2-4, selects des Tasks 6-9. ✅
- Filtrage serveur, aucune dépendance nouvelle, robustesse param invalide → Task 1 + sélecteurs. ✅
- Vérifs (check, pytest, ng build) → Task 10. ✅

**Placeholder scan :** aucun TBD/TODO ; code complet fourni. Les notes « vérifier les propriétés réelles
(`c.label`, `pt.name`) » et « fallback `@pytest.mark.django_db` » sont des vérifications d'exécution
légitimes, pas des placeholders.

**Type consistency :** signatures `list_trips/list_bookings/list_parcels/list_baggage` identiques entre
sélecteur (déf.), vue (appel) et tests. Objets de params Angular identiques entre services (Task 5, déf.)
et composants (Tasks 6-9, appel). Champs d'état (`dateField`, `dateFrom`, `dateTo`, `tripFilter`, etc.)
cohérents entre TS et templates. Mapping `date_field` (`created`/`departure`/`arrival`) identique backend
(mappings) et frontend (options des selects).
