# Transbordement (remplacement de bus d'un voyage) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Permettre de transborder un voyage (remplacer son bus) : ré-attribution automatique des sièges, bascule du surplus de passagers (avec bagages) vers un autre voyage du même trajet, opération tracée et gratuite.

**Architecture:** Un service `transbord_trip(trip, to_vehicle, …)` (app `voyages_trips`) valide le voyage et le bus, puis délègue la ré-attribution des sièges à un cœur testable `apply_transbord(trip, new_plan, …)` qui ne dépend PAS de la flotte (prend un plan de sièges). Un modèle `Transbordement` trace chaque opération. API sur le détail voyage + UI (modale + historique).

**Tech Stack:** Django 5.1 + DRF, pytest (`config.settings.local`, `@pytest.mark.django_db`), Angular 21 standalone.

## Global Constraints

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — toujours `git -C <repo>`).
- Branche : `feature/transbordement` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- Python : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master/env/bin/python`, exécuté depuis `.../ERP-master/backend`.
- Français partout. Pas d'import treasury/tiers. **Aucune dépendance nouvelle.** **Gratuit** (aucun re-tarif).
- Erreurs métier via `apps.core.exceptions.ApplicationError` → `error_response`. Service **atomique** (`@transaction.atomic`).
- Statuts : voyage transbordable si `pending`/`departed` ; voyage de bascule si `draft`/`pending`, même route, avec places.
- Vérif finale : `manage.py check`, migration, pytest, `npx ng build`.

**Rappels modèle (vérifiés) :**
- `Ticket.trip_seat` = FK **PROTECT non nullable** → il faut repointer les billets avant de supprimer d'anciens sièges.
- `TripSeat` : `unique_together (trip, seat_number)` ; statuts `available|held|sold|blocked` ; `trip` = CASCADE.
- `TripSeat.status` sold ⇒ référencé par un billet.
- `materialise_seats(trip)` existant supprime puis recrée les sièges d'un plan (à NE PAS appeler tel quel quand des billets existent).
- `active_seating_plan(vehicle, date)`, `blocking_reasons(vehicle, window_start, window_end, exclude_trip)`, `eligible_vehicles(company, window_start, window_end, exclude_trip)` existants (`apps/voyages_trips/selectors/eligibility.py`).

---

### Task 1: Modèle `Transbordement` + migration

**Files:**
- Create: `backend/apps/voyages_trips/models/transbordement.py`
- Modify: `backend/apps/voyages_trips/models/__init__.py`
- Create: `backend/apps/voyages_trips/migrations/XXXX_transbordement.py` (via makemigrations)
- Test: `backend/apps/voyages_trips/tests.py` (le fichier existe — append)

**Interfaces:**
- Produces: `Transbordement(BaseModel)` avec champs `trip`, `from_vehicle`, `to_vehicle`, `overflow_trip`, `passengers_moved`, `passengers_overflow`, `baggage_moved`, `note`.

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/voyages_trips/tests.py` :

```python
import pytest
from apps.voyages_trips.models import Transbordement


def test_transbordement_model_fields_default_zero():
    t = Transbordement()
    assert t.passengers_moved == 0
    assert t.passengers_overflow == 0
    assert t.baggage_moved == 0
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py::test_transbordement_model_fields_default_zero -v`
Expected: FAIL (`cannot import name 'Transbordement'`).

- [ ] **Step 3: Créer le modèle**

Créer `backend/apps/voyages_trips/models/transbordement.py` :

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Transbordement(BaseModel):
    """Trace d'un transbordement : remplacement du bus d'un voyage (+ bascule éventuelle)."""
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_transbordements")
    trip           = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                        on_delete=models.CASCADE, related_name="transbordements")
    from_vehicle   = models.ForeignKey("fleet.Vehicle", verbose_name=_("ancien bus"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_vehicle     = models.ForeignKey("fleet.Vehicle", verbose_name=_("nouveau bus"),
                                        on_delete=models.PROTECT, related_name="+")
    overflow_trip  = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage de bascule"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="transbordements_overflow")
    passengers_moved    = models.PositiveIntegerField(_("passagers ré-attribués"), default=0)
    passengers_overflow = models.PositiveIntegerField(_("passagers basculés"), default=0)
    baggage_moved       = models.PositiveIntegerField(_("bagages basculés"), default=0)
    note                = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("transbordement")
        ordering = ["-created_at"]

    def __str__(self):
        return f"Transbordement {self.trip_id}"
```

- [ ] **Step 4: Exporter le modèle**

Dans `backend/apps/voyages_trips/models/__init__.py`, ajouter :
```python
from .transbordement import Transbordement  # noqa: F401
```
(placer près des autres imports ; si `__all__` existe, y ajouter `"Transbordement"`.)

- [ ] **Step 5: Migration + migrate**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations voyages_trips
../env/bin/python manage.py migrate
```
Expected: crée la migration `Transbordement`, applique OK.

- [ ] **Step 6: Lancer le test (doit passer)**

Run: `../env/bin/python -m pytest apps/voyages_trips/tests.py::test_transbordement_model_fields_default_zero -v`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/models/ backend/apps/voyages_trips/migrations/ backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): modele Transbordement + migration"
```

---

### Task 2: Helper pur `overflow_split`

**Files:**
- Create: `backend/apps/voyages_trips/services/transbordement.py`
- Test: `backend/apps/voyages_trips/tests.py` (append)

**Interfaces:**
- Produces: `overflow_split(sold_ids: list, capacity: int) -> tuple[list, list]` — `(gardés, surplus)`.

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/voyages_trips/tests.py` :

```python
from apps.voyages_trips.services.transbordement import overflow_split


def test_overflow_split():
    assert overflow_split([1, 2, 3], 2) == ([1, 2], [3])
    assert overflow_split([1, 2], 5) == ([1, 2], [])
    assert overflow_split([], 0) == ([], [])
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py::test_overflow_split -v`
Expected: FAIL (`No module named ...transbordement`).

- [ ] **Step 3: Créer le module + helper**

Créer `backend/apps/voyages_trips/services/transbordement.py` :

```python
"""Transbordement : remplacement du bus d'un voyage + bascule du surplus."""
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def overflow_split(sold_ids, capacity):
    """Sépare les billets gardés (dans la capacité) du surplus."""
    return sold_ids[:capacity], sold_ids[capacity:]
```

- [ ] **Step 4: Lancer le test (doit passer)**

Run: `../env/bin/python -m pytest apps/voyages_trips/tests.py::test_overflow_split -v`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/services/transbordement.py backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): helper overflow_split (transbordement)"
```

---

### Task 3: Cœur `apply_transbord` (ré-attribution sièges + bascule)

**Files:**
- Modify: `backend/apps/voyages_trips/services/transbordement.py`
- Test: `backend/apps/voyages_trips/tests.py` (append — fixtures + 3 tests)

**Interfaces:**
- Consumes: `overflow_split` (Task 2), `materialise_seats` (`apps.voyages_trips.services.assignment`).
- Produces: `apply_transbord(trip, new_plan, *, overflow_trip=None, user) -> dict` avec clés `passengers_moved`, `passengers_overflow`, `baggage_moved`. Lève `ApplicationError` si capacité insuffisante sans `overflow_trip`, ou voyage de bascule trop petit.

- [ ] **Step 1: Écrire les fixtures + tests (échouent)**

Append dans `backend/apps/voyages_trips/tests.py` :

```python
from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.services.transbordement import apply_transbord
from apps.voyages_trips.services.assignment import materialise_seats


def _plan(company, code, n_sellable):
    from apps.voyages_config.models import SeatingPlan, PlanSeat
    plan = SeatingPlan.objects.create(company=company, code=code, name=code,
                                      rows=1, columns=n_sellable, total_seats=n_sellable)
    for i in range(n_sellable):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"{code}{i+1}",
                                row=1, column=i + 1, seat_type="standard", is_sellable=True)
    return plan


def _trip(company, route, fare_class, origin, dest, plan, status="pending"):
    from apps.voyages_trips.models import Trip
    now = timezone.now() + timedelta(days=1)
    t = Trip.objects.create(company=company, route=route, fare_class=fare_class,
                            origin=origin, destination=dest, seating_plan=plan,
                            scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                            status=status)
    materialise_seats(t)
    return t


def _graph():
    """Construit un graphe minimal et renvoie un dict d'objets utiles."""
    from apps.system_config.models import Company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_consignment.models import Baggage
    from apps.voyages_trips.models import TripSeat

    c = Company.objects.create(name="TestCo", slug="testco")
    town = Town.objects.create(company=c, name="Ville")
    a = ServicePoint.objects.create(company=c, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=c, town=town, code="B", name="B")
    route = Route.objects.create(company=c, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=c, code="ECO", name="Éco")

    plan_big = _plan(c, "BIG", 4)
    plan_small = _plan(c, "SML", 2)
    plan_dest = _plan(c, "DST", 4)

    src = _trip(c, route, fc, a, b, plan_big)
    dest = _trip(c, route, fc, a, b, plan_dest)

    # Vendre 3 sièges sur src (S1,S2,S3), billet + passager chacun ; bagage sur le 3e.
    booking = Booking.objects.create(company=c, outbound_trip=src,
                                     buyer=Passenger.objects.create(company=c, first_name="Ach", last_name="Eteur", phone="600"),
                                     trip_type="one_way")
    seats = list(src.seats.order_by("column"))
    tickets = []
    for i in range(3):
        seat = seats[i]
        seat.status = TripSeat.Status.SOLD
        seat.save(update_fields=["status"])
        p = Passenger.objects.create(company=c, first_name=f"P{i}", last_name="X", phone=f"61{i}")
        tk = Ticket.objects.create(company=c, booking=booking, passenger=p, trip=src, trip_seat=seat,
                                   fare_class=fc, direction="outbound", origin_point=a, destination_point=b,
                                   status="sold")
        tickets.append(tk)
    bag = Baggage.objects.create(company=c, trip=src, ticket=tickets[2], sender_name="P2")
    return dict(company=c, src=src, dest=dest, plan_big=plan_big, plan_small=plan_small,
                tickets=tickets, baggage=bag)


@pytest.mark.django_db
def test_apply_transbord_same_plan_keeps_seats():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_big"], user=None)
    assert res == {"passengers_moved": 3, "passengers_overflow": 0, "baggage_moved": 0}
    # billets toujours sur src avec un siège vendu
    for tk in g["tickets"]:
        tk.refresh_from_db()
        assert tk.trip_id == g["src"].id and tk.trip_seat.status == "sold"


@pytest.mark.django_db
def test_apply_transbord_smaller_without_overflow_raises():
    from apps.core.exceptions import ApplicationError
    g = _graph()
    with pytest.raises(ApplicationError):
        apply_transbord(g["src"], g["plan_small"], user=None)


@pytest.mark.django_db
def test_apply_transbord_smaller_with_overflow_moves_surplus_and_baggage():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_small"], overflow_trip=g["dest"], user=None)
    assert res == {"passengers_moved": 2, "passengers_overflow": 1, "baggage_moved": 1}
    # 2 billets restent sur src (nouveau plan, 2 sièges), 1 basculé sur dest
    on_src = [t for t in g["tickets"] if (t.refresh_from_db() or True) and t.trip_id == g["src"].id]
    assert len(on_src) == 2
    overflow = g["tickets"][2]; overflow.refresh_from_db()
    assert overflow.trip_id == g["dest"].id
    g["baggage"].refresh_from_db()
    assert g["baggage"].trip_id == g["dest"].id
    # aucun siège orphelin : chaque billet pointe un siège de son voyage
    for t in g["tickets"]:
        t.refresh_from_db()
        assert t.trip_seat.trip_id == t.trip_id
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py -k apply_transbord -v`
Expected: FAIL (`cannot import name 'apply_transbord'`).

- [ ] **Step 3: Implémenter `apply_transbord`**

Ajouter dans `backend/apps/voyages_trips/services/transbordement.py` :

```python
@transaction.atomic
def apply_transbord(trip, new_plan, *, overflow_trip=None, user=None):
    """Applique un nouveau plan de sièges au voyage : ré-attribue les billets vendus,
    bascule le surplus vers `overflow_trip`. Ne touche pas au véhicule (voir transbord_trip)."""
    from apps.voyages_config.models import PlanSeat
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_consignment.models import Baggage

    sold = list(trip.tickets.filter(is_deleted=False, status__in=["sold", "boarded"])
                .select_related("trip_seat")
                .order_by("trip_seat__row", "trip_seat__column", "trip_seat__seat_number"))
    plan_seats = list(PlanSeat.objects.filter(plan=new_plan, is_deleted=False).order_by("row", "column"))
    capacity = sum(1 for ps in plan_seats if ps.is_sellable)

    kept_ids, overflow_ids = overflow_split([t.id for t in sold], capacity)
    if overflow_ids and overflow_trip is None:
        raise ApplicationError(
            _("Capacité insuffisante : %(n)s place(s) manquante(s). Choisissez un voyage de bascule.")
            % {"n": len(overflow_ids)})

    same_plan = (trip.seating_plan_id == new_plan.id)
    trip.seating_plan = new_plan
    kept_set, overflow_set = set(kept_ids), set(overflow_ids)

    if not same_plan:
        # Libère l'espace de nommage des sièges puis reconstruit le nouveau plan.
        TripSeat.objects.filter(trip=trip).exclude(status=TripSeat.Status.SOLD).delete()
        for s in trip.seats.filter(status=TripSeat.Status.SOLD):
            s.seat_number = f"OLD-{s.id}"
            s.save(update_fields=["seat_number"])
        TripSeat.objects.bulk_create([
            TripSeat(trip=trip, seat_number=ps.seat_number, row=ps.row, column=ps.column,
                     seat_type=ps.seat_type,
                     status=TripSeat.Status.AVAILABLE if ps.is_sellable else TripSeat.Status.BLOCKED,
                     created_by=user)
            for ps in plan_seats])
        free_new = list(trip.seats.filter(status=TripSeat.Status.AVAILABLE).order_by("row", "column"))
        kept_tickets = [t for t in sold if t.id in kept_set]
        for tk, seat in zip(kept_tickets, free_new):
            tk.trip_seat = seat
            tk.updated_by = user
            tk.save(update_fields=["trip_seat", "updated_by", "updated_at"])
            seat.status = TripSeat.Status.SOLD
            seat.save(update_fields=["status"])

    # Bascule du surplus vers overflow_trip (avant purge des sièges temporaires).
    moved_overflow = 0
    baggage_moved = 0
    if overflow_ids:
        overflow_tickets = [t for t in sold if t.id in overflow_set]
        dest_free = list(overflow_trip.seats.filter(status=TripSeat.Status.AVAILABLE).order_by("row", "column"))
        if len(dest_free) < len(overflow_tickets):
            raise ApplicationError(_("Le voyage de bascule n'a pas assez de places."))
        for tk, seat in zip(overflow_tickets, dest_free):
            tk.trip = overflow_trip
            tk.trip_seat = seat
            tk.updated_by = user
            tk.save(update_fields=["trip", "trip_seat", "updated_by", "updated_at"])
            seat.status = TripSeat.Status.SOLD
            seat.save(update_fields=["status"])
            moved_overflow += 1
            for bag in Baggage.objects.filter(is_deleted=False, ticket=tk):
                bag.trip = overflow_trip
                bag.updated_by = user
                bag.save(update_fields=["trip", "updated_by", "updated_at"])
                baggage_moved += 1

    if not same_plan:
        TripSeat.objects.filter(trip=trip, seat_number__startswith="OLD-").delete()

    trip.updated_by = user
    trip.save(update_fields=["seating_plan", "updated_by", "updated_at"])
    return {"passengers_moved": len(kept_ids), "passengers_overflow": moved_overflow,
            "baggage_moved": baggage_moved}
```

- [ ] **Step 4: Lancer les tests (doivent passer)**

Run: `../env/bin/python -m pytest apps/voyages_trips/tests.py -k "apply_transbord or overflow_split or transbordement_model" -v`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/services/transbordement.py backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): coeur apply_transbord (re-attribution sieges + bascule)"
```

---

### Task 4: Wrapper `transbord_trip` + sélecteurs

**Files:**
- Modify: `backend/apps/voyages_trips/services/transbordement.py`
- Create: `backend/apps/voyages_trips/selectors/transbord_selectors.py`
- Modify: `backend/apps/voyages_trips/selectors/__init__.py`
- Test: `backend/apps/voyages_trips/tests.py` (append)

**Interfaces:**
- Consumes: `apply_transbord` (Task 3), `blocking_reasons`, `active_seating_plan`, `document_warnings`, `eligible_vehicles` (`selectors/eligibility.py`).
- Produces:
  - `transbord_trip(trip, to_vehicle, *, overflow_trip=None, user, note="") -> dict` (récap + `warnings`, `transbordement_id`).
  - `transbord_options(company, trip) -> dict` → `{ vehicles: [{id, license_plate, model_name, seats}], overflow_trips: [{id, number, code, free_seats}], sold_count }`.
  - `trip_transbordements(trip) -> queryset`.

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/voyages_trips/tests.py` :

```python
@pytest.mark.django_db
def test_transbord_trip_rejects_non_transbordable_status():
    from apps.core.exceptions import ApplicationError
    from apps.voyages_trips.services.transbordement import transbord_trip
    g = _graph()
    g["src"].status = "draft"
    g["src"].save(update_fields=["status"])
    with pytest.raises(ApplicationError):
        transbord_trip(g["src"], None, user=None)
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_trips/tests.py::test_transbord_trip_rejects_non_transbordable_status -v`
Expected: FAIL (`cannot import name 'transbord_trip'`).

- [ ] **Step 3: Implémenter `transbord_trip`**

Ajouter dans `backend/apps/voyages_trips/services/transbordement.py` :

```python
@transaction.atomic
def transbord_trip(trip, to_vehicle, *, overflow_trip=None, user=None, note=""):
    from apps.voyages_trips.models import Transbordement
    from apps.voyages_trips.selectors.eligibility import (
        blocking_reasons, active_seating_plan, document_warnings)

    if trip.status not in ("pending", "departed"):
        raise ApplicationError(_("Ce voyage ne peut pas être transbordé (statut invalide)."))

    reasons = blocking_reasons(to_vehicle, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip)
    if reasons:
        raise ApplicationError(" ".join(str(r) for r in reasons))

    new_plan = active_seating_plan(to_vehicle, trip.scheduled_departure.date())
    if new_plan is None:
        raise ApplicationError(_("Aucun plan de bus actif pour ce véhicule."))

    if overflow_trip is not None:
        if overflow_trip.id == trip.id or overflow_trip.route_id != trip.route_id \
                or overflow_trip.status not in ("draft", "pending"):
            raise ApplicationError(_("Voyage de bascule invalide (même trajet, non parti)."))

    from_vehicle = trip.vehicle
    counts = apply_transbord(trip, new_plan, overflow_trip=overflow_trip, user=user)

    trip.vehicle = to_vehicle
    trip.updated_by = user
    trip.save(update_fields=["vehicle", "updated_by", "updated_at"])

    tb = Transbordement.objects.create(
        company=trip.company, trip=trip, from_vehicle=from_vehicle, to_vehicle=to_vehicle,
        overflow_trip=overflow_trip, note=note or "", created_by=user, **counts)
    warnings = document_warnings(to_vehicle, before_date=trip.scheduled_arrival.date(), alert_days=30)
    return {"transbordement_id": str(tb.id), "warnings": warnings, **counts}
```

- [ ] **Step 4: Créer les sélecteurs**

Créer `backend/apps/voyages_trips/selectors/transbord_selectors.py` :

```python
from apps.voyages_config.models import PlanSeat
from apps.voyages_trips.models import Trip, TripSeat
from apps.voyages_trips.selectors.eligibility import eligible_vehicles, active_seating_plan


def _plan_capacity(plan):
    if plan is None:
        return 0
    return PlanSeat.objects.filter(plan=plan, is_deleted=False, is_sellable=True).count()


def transbord_options(company, trip):
    vehicles = []
    for v in eligible_vehicles(company, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip):
        plan = active_seating_plan(v, trip.scheduled_departure.date())
        vehicles.append({
            "id": str(v.id), "license_plate": v.license_plate,
            "model_name": getattr(getattr(v, "model", None), "name", "") or "",
            "seats": _plan_capacity(plan),
        })
    overflow = []
    for t in (Trip.objects.filter(company=company, is_deleted=False, route_id=trip.route_id,
                                  status__in=["draft", "pending"])
              .exclude(id=trip.id).select_related("route")):
        free = t.seats.filter(status=TripSeat.Status.AVAILABLE).count()
        if free > 0:
            overflow.append({"id": str(t.id), "number": t.number, "code": t.code, "free_seats": free})
    sold_count = trip.tickets.filter(is_deleted=False, status__in=["sold", "boarded"]).count()
    return {"vehicles": vehicles, "overflow_trips": overflow, "sold_count": sold_count}


def trip_transbordements(trip):
    return trip.transbordements.filter(is_deleted=False).select_related(
        "from_vehicle", "to_vehicle", "overflow_trip").order_by("-created_at")
```

- [ ] **Step 5: Exporter les sélecteurs**

Dans `backend/apps/voyages_trips/selectors/__init__.py`, ajouter :
```python
from .transbord_selectors import transbord_options, trip_transbordements  # noqa: F401
```

- [ ] **Step 6: Lancer le test + check**

Run: `../env/bin/python -m pytest apps/voyages_trips/tests.py -k transbord -v && ../env/bin/python manage.py check`
Expected: PASS + check OK (warning staticfiles toléré).

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/services/transbordement.py backend/apps/voyages_trips/selectors/ backend/apps/voyages_trips/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): service transbord_trip + selecteurs options/historique"
```

---

### Task 5: API (endpoints transbordement)

**Files:**
- Modify: `backend/apps/voyages_trips/views.py`
- Modify: `backend/apps/voyages_trips/urls.py`

**Interfaces:**
- Consumes: `transbord_trip`, `transbord_options`, `trip_transbordements` (Task 4), `selectors.get_trip`.
- Produces (routes) :
  - `GET voyages/trips/<uuid:trip_id>/transbord/eligible/`
  - `POST voyages/trips/<uuid:trip_id>/transbord/`
  - `GET voyages/trips/<uuid:trip_id>/transbord/history/`

- [ ] **Step 1: Ajouter les vues**

À la fin de `backend/apps/voyages_trips/views.py`, ajouter :

```python
from apps.voyages_trips.services.transbordement import transbord_trip


class TripTransbordEligibleView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.transbord_options(company, trip))


class TripTransbordView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        from apps.fleet.models import Vehicle
        vehicle = Vehicle.objects.filter(id=request.data.get("vehicle_id"),
                                         company=company, is_deleted=False).first()
        if not vehicle:
            return error_response("Véhicule introuvable.", status_code=404)
        overflow_trip = None
        oid = request.data.get("overflow_trip_id")
        if oid:
            overflow_trip = selectors.get_trip(company, oid)
            if not overflow_trip:
                return error_response("Voyage de bascule introuvable.", status_code=404)
        try:
            res = transbord_trip(trip, vehicle, overflow_trip=overflow_trip,
                                 user=request.user, note=request.data.get("note", ""))
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(res)


class TripTransbordHistoryView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        rows = [{
            "id": str(tb.id),
            "from_vehicle": tb.from_vehicle.license_plate if tb.from_vehicle_id else "",
            "to_vehicle": tb.to_vehicle.license_plate if tb.to_vehicle_id else "",
            "overflow_trip": (tb.overflow_trip.number or tb.overflow_trip.code) if tb.overflow_trip_id else "",
            "passengers_moved": tb.passengers_moved,
            "passengers_overflow": tb.passengers_overflow,
            "baggage_moved": tb.baggage_moved,
            "note": tb.note,
            "created_at": tb.created_at,
        } for tb in selectors.trip_transbordements(trip)]
        return success_response(rows)
```

(Vérifier que `error_response`, `success_response`, `ApplicationError`, `IsInstitutionAdmin`, `selectors`, `APIView`, `_scope` sont déjà importés dans ce fichier — ils le sont pour les vues existantes.)

- [ ] **Step 2: Ajouter les routes**

Dans `backend/apps/voyages_trips/urls.py`, ajouter avant la dernière `]` :

```python
    path("<uuid:trip_id>/transbord/eligible/", v.TripTransbordEligibleView.as_view()),
    path("<uuid:trip_id>/transbord/", v.TripTransbordView.as_view()),
    path("<uuid:trip_id>/transbord/history/", v.TripTransbordHistoryView.as_view()),
```

- [ ] **Step 3: Vérifier**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check`
Expected: `no issues` (warning staticfiles toléré), aucune ImportError.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips/views.py backend/apps/voyages_trips/urls.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): endpoints transbordement (eligible/transbord/history)"
```

---

### Task 6: Frontend — service + config API

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES`)
- Modify: `angular/src/_api/services/voyages/trip.service.ts`

**Interfaces:**
- Consumes: endpoints Task 5.
- Produces :
  - `VOYAGES.transbordEligible(id)`, `VOYAGES.transbord(id)`, `VOYAGES.transbordHistory(id)`.
  - `TripService.transbordEligible(id)`, `TripService.transbord(id, body)`, `TripService.transbordHistory(id)`.

- [ ] **Step 1: Ajouter les URLs**

Dans `angular/src/_api/config/api.config.ts`, dans l'objet `VOYAGES`, après la ligne `markDelayed/clearDelay` :

```typescript
  transbordEligible: (id: string) => `${VT}/${id}/transbord/eligible/`,
  transbord: (id: string) => `${VT}/${id}/transbord/`,
  transbordHistory: (id: string) => `${VT}/${id}/transbord/history/`,
```

- [ ] **Step 2: Ajouter les méthodes service**

Dans `trip.service.ts`, avant la dernière `}` de la classe :

```typescript
  transbordEligible(id: string): Observable<{ vehicles: { id: string; license_plate: string; model_name: string; seats: number }[];
                                              overflow_trips: { id: string; number: string; code: string; free_seats: number }[];
                                              sold_count: number }> {
    return this.http.get<any>(VOYAGES.transbordEligible(id));
  }
  transbord(id: string, body: { vehicle_id: string; overflow_trip_id?: string; note?: string }): Observable<any> {
    return this.http.post<any>(VOYAGES.transbord(id), body);
  }
  transbordHistory(id: string): Observable<any[]> { return this.http.get<any[]>(VOYAGES.transbordHistory(id)); }
```

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/services/voyages/trip.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): service transbordement (voyages)"
```

---

### Task 7: Frontend — UI transbordement (détail voyage)

**Files:**
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.ts`
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.html`

**Interfaces:**
- Consumes: `TripService.transbordEligible/transbord/transbordHistory` (Task 6).

- [ ] **Step 1: État + méthodes (composant)**

Dans `trip-detail.component.ts`, ajouter des champs d'état dans la classe (près des autres, ex. après `eligible`) :

```typescript
  tbVehicles: { id: string; license_plate: string; model_name: string; seats: number }[] = [];
  tbOverflow: { id: string; number: string; code: string; free_seats: number }[] = [];
  tbSoldCount = 0; tbVehicle = ''; tbOverflowTrip = ''; tbNote = '';
  tbError = ''; tbBusy = false; tbHistory: any[] = [];
```

Et des méthodes (avant la dernière `}` de la classe) :

```typescript
  get tbSelectedSeats(): number { return this.tbVehicles.find(v => v.id === this.tbVehicle)?.seats ?? 0; }
  get tbNeedsOverflow(): boolean { return this.tbVehicle !== '' && this.tbSelectedSeats < this.tbSoldCount; }

  openTransbord(): void {
    this.tbError = ''; this.tbVehicle = ''; this.tbOverflowTrip = ''; this.tbNote = '';
    this.svc.transbordEligible(this.id).subscribe({
      next: r => { this.tbVehicles = r.vehicles; this.tbOverflow = r.overflow_trips; this.tbSoldCount = r.sold_count; },
      error: () => {},
    });
  }
  loadTbHistory(): void { this.svc.transbordHistory(this.id).subscribe(h => this.tbHistory = h); }

  doTransbord(): void {
    if (!this.tbVehicle) { this.tbError = 'Choisissez un bus.'; return; }
    if (this.tbNeedsOverflow && !this.tbOverflowTrip) { this.tbError = 'Capacité insuffisante : choisissez un voyage de bascule.'; return; }
    this.tbBusy = true; this.tbError = '';
    this.svc.transbord(this.id, {
      vehicle_id: this.tbVehicle,
      overflow_trip_id: this.tbOverflowTrip || undefined,
      note: this.tbNote || undefined,
    }).subscribe({
      next: () => { this.tbBusy = false; this.reload(); this.loadTbHistory(); },
      error: e => { this.tbBusy = false; this.tbError = e?.error?.detail ?? 'Transbordement impossible.'; },
    });
  }
```

Dans `reload()` (ou `ngOnInit`), après le chargement du voyage, ajouter l'appel `this.loadTbHistory();`
(placer `this.loadTbHistory();` juste après `this.trip = t;` dans le `next` de `reload`).

- [ ] **Step 2: Bloc UI (template)**

Dans `trip-detail.component.html`, ajouter une carte (par exemple après le bloc véhicule existant `@if (trip.vehicle) { … }`) :

```html
@if (trip && (trip.status === 'pending' || trip.status === 'departed')) {
  <div class="card mt-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <strong>Transbordement</strong>
      <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#transbord-modal" (click)="openTransbord()">
        <i class="ti ti-transfer me-1"></i>Transborder
      </button>
    </div>
    @if (tbHistory.length) {
      <ul class="list-group list-group-flush">
        @for (h of tbHistory; track h.id) {
          <li class="list-group-item small">
            {{ h.from_vehicle || '—' }} → <strong>{{ h.to_vehicle }}</strong>
            · {{ h.passengers_moved }} passager(s)
            @if (h.passengers_overflow) { · {{ h.passengers_overflow }} basculé(s) vers {{ h.overflow_trip }} ({{ h.baggage_moved }} bagage(s)) }
            <span class="text-muted">— {{ h.created_at | date:'short' }}</span>
          </li>
        }
      </ul>
    }
  </div>

  <div class="modal fade" id="transbord-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header"><h5 class="modal-title">Transborder le voyage</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
        <div class="modal-body">
          @if (tbError) { <div class="alert alert-danger py-2">{{ tbError }}</div> }
          <p class="mb-2">Passagers vendus : <strong>{{ tbSoldCount }}</strong></p>
          <div class="mb-3">
            <label class="form-label">Nouveau bus</label>
            <select class="form-select" [(ngModel)]="tbVehicle">
              <option value="">— Choisir —</option>
              @for (v of tbVehicles; track v.id) { <option [value]="v.id">{{ v.license_plate }} — {{ v.model_name }} ({{ v.seats }} places)</option> }
            </select>
            @if (tbVehicles.length === 0) { <p class="text-muted small mt-1">Aucun bus éligible.</p> }
          </div>
          @if (tbNeedsOverflow) {
            <div class="mb-3">
              <div class="alert alert-warning py-2">Ce bus a {{ tbSelectedSeats }} places pour {{ tbSoldCount }} passagers. Choisissez un voyage de bascule.</div>
              <label class="form-label">Voyage de bascule (même trajet)</label>
              <select class="form-select" [(ngModel)]="tbOverflowTrip">
                <option value="">— Choisir —</option>
                @for (o of tbOverflow; track o.id) { <option [value]="o.id">{{ o.number || o.code }} ({{ o.free_seats }} places)</option> }
              </select>
            </div>
          }
          <div class="mb-2"><label class="form-label">Note</label>
            <textarea class="form-control" rows="2" [(ngModel)]="tbNote"></textarea></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-primary" [disabled]="tbBusy" data-bs-dismiss="modal" (click)="doTransbord()">Confirmer</button>
        </div>
      </div>
    </div>
  </div>
}
```

(Vérifier que `FormsModule` est importé par le composant — nécessaire pour `[(ngModel)]`. S'il ne l'est pas, l'ajouter aux `imports` du `@Component`.)

- [ ] **Step 3: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages/trip-detail/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): UI transbordement (modale + historique) sur le detail voyage"
```

---

### Task 8: Vérification finale + fusion

**Files:** aucun (vérification).

- [ ] **Step 1: Backend — check + tous les tests voyages_trips**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py check
../env/bin/python -m pytest apps/voyages_trips/tests.py -v
```
Expected: check OK ; tous les tests PASS (modèle, overflow_split, 3× apply_transbord, transbord_trip statut).

- [ ] **Step 2: Frontend build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push) :
```
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master checkout master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master merge --ff-only feature/transbordement
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master push origin master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master branch -d feature/transbordement
```

---

## Self-Review

**Spec coverage :**
- Concept remplacement bus, voyage garde son identité → `transbord_trip` (Task 4) + `apply_transbord` (Task 3). ✅
- Déclenchement statut pending/departed → garde dans `transbord_trip` (Task 4) + condition UI (Task 7). ✅
- Bus éligibles (en attente/éligibles) → `transbord_options` via `eligible_vehicles` (Task 4) + modale (Task 7). ✅
- Ré-attribution sièges (même plan / plan différent, contournement PROTECT + unicité) → `apply_transbord` (Task 3). ✅
- Capacité + surplus basculé (passagers + bagages), colis restent → `apply_transbord` (Task 3). ✅
- Traçabilité sans re-facturer → modèle `Transbordement` (Task 1) créé par `transbord_trip` (Task 4), historique (Task 5/7). ✅
- API eligible/transbord/history → Task 5. ✅
- Vérifs (check, migration, pytest, ng build) → Task 8. ✅

**Placeholder scan :** aucun TBD/TODO ; code complet. Notes « vérifier import FormsModule / imports existants » = vérifications d'exécution légitimes.

**Type consistency :** `apply_transbord(trip, new_plan, *, overflow_trip=None, user=None)` et `transbord_trip(trip, to_vehicle, *, overflow_trip=None, user=None, note="")` cohérents entre définition (Tasks 3-4), appel vue (Task 5) et tests. Dict de retour `{passengers_moved, passengers_overflow, baggage_moved}` identique service ↔ modèle (`**counts`) ↔ tests. Endpoints `transbordEligible/transbord/transbordHistory` cohérents api.config ↔ service ↔ vues ↔ urls. Champs UI (`tbVehicle`, `tbOverflowTrip`, `tbNeedsOverflow`, …) cohérents TS ↔ template.
