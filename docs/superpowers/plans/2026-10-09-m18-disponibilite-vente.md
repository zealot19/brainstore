# M18 — Disponibilité & créneaux sur le formulaire de vente — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Afficher la disponibilité d'un voyage (vendues / réservées / bloquées / vendables restantes / réservations encore possibles) dès sa sélection sur le formulaire de vente, désactiver l'action si complet/quota atteint, et message si aucun voyage.

**Architecture:** Nouvel endpoint lecture `GET booking/trips/<id>/availability/` (sélecteur d'agrégation sur `TripSeat` + quota M12), calqué sur `TripSeatMapView`. Front `new-booking` : appel à la sélection, panneau lecture seule, gardes `canSubmit`.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db`) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m18-disponibilite-vente-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Aucun changement de schéma (lecture seule) → `makemigrations --check` doit rester propre.
- `reservations_possible` = `max(0, max_reservations − réservées)` ; `null` si pas de quota (ne pas traiter `null` comme `0`).

## Review Focus

- **Voyage sans sièges** → compteurs 0, pas de crash ; action désactivée (available 0). → Task 1 `test_availability_no_seats`.
- **Quota None** → `reservations_possible` null ; réservation non bloquée par le quota. → Task 1 `test_reservations_possible_null_without_quota` + Task 2 garde.
- **Voyage autre société / introuvable** → 404. → Task 1 `test_availability_foreign_404`.
- **Mode vente vs réservation** : vente bloquée seulement si `available===0` ; réservation bloquée si `available===0` ou `reservations_possible===0`. → Task 2.

---

## Task 1 : Backend — sélecteur + endpoint de disponibilité

**Files:**
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (`trip_availability` + `__all__`)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (`TripAvailabilitySerializer`)
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`TripAvailabilityView`)
- Modify: `backend/apps/voyages_booking/urls.py` (route)
- Create: `backend/apps/voyages_booking/test_trip_availability.py`

**Interfaces:**
- Produces: `trip_availability(trip) -> {total, sold, reserved, blocked, available, max_reservations, reservations_possible}` ; `GET booking/trips/<id>/availability/`.

- [ ] **Step 1 : Tests qui échouent** — `backend/apps/voyages_booking/test_trip_availability.py`

```python
import pytest
from datetime import timedelta
from django.utils import timezone


def _trip_with_seats(company, admin, *, total=10, blocked=2):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.services.trip_services import create_trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=total, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=plan, blocked_seats_count=blocked, user=admin)


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="AvailCo", admin_email="av@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="av@x.com")


@pytest.mark.django_db
def test_trip_availability_counts(ctx):
    from apps.voyages_booking.selectors import trip_availability
    from apps.voyages_trips.models import TripSeat
    company, admin = ctx
    trip = _trip_with_seats(company, admin, total=10, blocked=2)   # 2 BLOCKED, 8 AVAILABLE
    seats = list(TripSeat.objects.filter(trip=trip, status=TripSeat.Status.AVAILABLE).order_by("seat_number"))
    seats[0].status = TripSeat.Status.SOLD; seats[0].save(update_fields=["status"])
    seats[1].status = TripSeat.Status.HELD; seats[1].save(update_fields=["status"])
    a = trip_availability(trip)
    assert a["total"] == 10 and a["blocked"] == 2 and a["sold"] == 1 and a["reserved"] == 1
    assert a["available"] == 6
    # quota défaut (M12) = vendables à la création = 8 ; réservations possibles = 8 − 1 held = 7
    assert a["max_reservations"] == 8 and a["reservations_possible"] == 7


@pytest.mark.django_db
def test_reservations_possible_null_without_quota(ctx):
    from apps.voyages_booking.selectors import trip_availability
    company, admin = ctx
    trip = _trip_with_seats(company, admin)
    trip.max_reservations = None; trip.save(update_fields=["max_reservations"])
    a = trip_availability(trip)
    assert a["reservations_possible"] is None


@pytest.mark.django_db
def test_availability_no_seats(ctx):
    from apps.voyages_booking.selectors import trip_availability
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    company, admin = ctx
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=None, user=admin)
    a = trip_availability(trip)
    assert a["total"] == 0 and a["available"] == 0


@pytest.mark.django_db
def test_availability_endpoint_200_and_foreign_404(ctx):
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    company, admin = ctx
    trip = _trip_with_seats(company, admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/availability/")
    assert r.status_code == 200
    body = r.json()["data"]
    assert {"total", "sold", "reserved", "blocked", "available", "reservations_possible"} <= set(body)
    # voyage d'une autre société → 404
    other, _ = create_company(name="OtherAv", admin_email="oa@x.com", admin_first_name="A", admin_last_name="B")
    from apps.authentication.models import User
    otok = str(CustomRefreshToken.for_user(User.objects.get(email="oa@x.com")).access_token)
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {otok}")
    assert c.get(f"/api/v1/voyages/booking/trips/{trip.id}/availability/").status_code == 404
```

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_booking/test_trip_availability.py -q --reuse-db`
Expected: FAIL (`trip_availability` / endpoint absents).

- [ ] **Step 3 : Sélecteur** — `selectors/__init__.py`

```python
def trip_availability(trip):
    from django.db.models import Count, Q
    from apps.voyages_trips.models import TripSeat
    agg = TripSeat.objects.filter(trip=trip, is_deleted=False).aggregate(
        total=Count("id"),
        sold=Count("id", filter=Q(status=TripSeat.Status.SOLD)),
        reserved=Count("id", filter=Q(status=TripSeat.Status.HELD)),
        blocked=Count("id", filter=Q(status=TripSeat.Status.BLOCKED)),
        available=Count("id", filter=Q(status=TripSeat.Status.AVAILABLE)),
    )
    mr = trip.max_reservations
    agg["max_reservations"] = mr
    agg["reservations_possible"] = None if mr is None else max(0, mr - agg["reserved"])
    return agg
```
Ajouter `"trip_availability"` à `__all__`.

- [ ] **Step 4 : Serializer** — `config_api/serializers.py`

```python
class TripAvailabilitySerializer(serializers.Serializer):
    total = serializers.IntegerField()
    sold = serializers.IntegerField()
    reserved = serializers.IntegerField()
    blocked = serializers.IntegerField()
    available = serializers.IntegerField()
    max_reservations = serializers.IntegerField(allow_null=True)
    reservations_possible = serializers.IntegerField(allow_null=True)
```

- [ ] **Step 5 : Vue** — `config_api/views.py` (calquée sur `TripSeatMapView`)

```python
class TripAvailabilityView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        from apps.voyages_booking.services.reservation_services import release_expired_reservations
        release_expired_reservations(company=request.user.company, trip=trip)
        return success_response(S.TripAvailabilitySerializer(selectors.trip_availability(trip)).data)
```

- [ ] **Step 6 : URL** — `urls.py`

Après la ligne `seat-map` : `path("trips/<uuid:trip_id>/availability/", v.TripAvailabilityView.as_view()),`.

- [ ] **Step 7 : Lancer → vert**

Run: `../env/bin/python -m pytest apps/voyages_booking/test_trip_availability.py -q --reuse-db`
Expected: PASS (4 tests).

- [ ] **Step 8 : Non-régression + makemigrations check**

Run: `../env/bin/python -m pytest apps/voyages_booking -q --reuse-db`
Expected: PASS hors rouges de base connus (reservations, seat_assignment, passenger_name, list-filters — vérifiés rouges sur master).
Puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».

- [ ] **Step 9 : Commit**

```bash
git add backend/apps/voyages_booking
git commit -m "feat(billetterie): trip availability breakdown endpoint (sold/reserved/blocked/available + reservations possible) (M18)"
```

---

## Task 2 : Frontend — panneau de disponibilité + gardes + message vide

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (`availability`)
- Modify: `angular/src/_api/services/voyages-booking/booking.service.ts` (`availability`)
- Modify: `angular/src/_api/models/voyages-booking.models.ts` (`TripAvailability`)
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.{ts,html}`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `GET booking/trips/<id>/availability/` → `TripAvailability` (Task 1).

- [ ] **Step 1 : api.config + service + modèle**

- `api.config.ts` (bloc VOYAGES_BOOKING, près de `seatMap`) :
  `availability: (tripId: string) => \`${VB}/trips/${tripId}/availability/\`,`.
- `booking.service.ts` :
  `availability(tripId: string): Observable<TripAvailability> { return this.http.get<TripAvailability>(VOYAGES_BOOKING.availability(tripId)); }`.
- `voyages-booking.models.ts` :
  `export interface TripAvailability { total: number; sold: number; reserved: number; blocked: number; available: number; max_reservations: number | null; reservations_possible: number | null; }`.

- [ ] **Step 2 : Composant — chargement + gardes** — `new-booking.component.ts`

- Champ `outAvail: TripAvailability | null = null;` (importer le type).
- `resetOutTrip()` : ajouter `this.outAvail = null;`.
- `onOutboundChange()` : dans le `if (this.outboundTripId)`, ajouter
  `this.svc.availability(this.outboundTripId).subscribe(a => this.outAvail = a);`.
- Getters :
  ```ts
  get tripFull(): boolean { return !!this.outAvail && this.outAvail.available === 0; }
  get reservationQuotaReached(): boolean { return !!this.outAvail && this.outAvail.reservations_possible === 0; }
  ```
- `canSubmit` : après `if (this.fare == null) return false;` ajouter
  `if (this.tripFull) return false;` et `if (this.isReservation && this.reservationQuotaReached) return false;`.

- [ ] **Step 3 : Composant — message « aucun voyage »**

Exposer un booléen de critères choisis (p. ex. `get outCriteriaChosen(): boolean { return !!(this.fareClassId && (this.outSlotId || this.outDate)); }` — adapter aux champs réels du formulaire) pour n'afficher le message que lorsque l'utilisateur a renseigné des critères et que `outTrips.length === 0`.

- [ ] **Step 4 : Template** — `new-booking.component.html`

- Après le select du voyage aller, `@if (outAvail) { <div class="…panneau…"> … vendues {{outAvail.sold}}, réservées {{outAvail.reserved}}, bloquées {{outAvail.blocked}}, vendables restantes {{outAvail.available}}, réservations possibles {{ outAvail.reservations_possible ?? '∞' }} … </div> }` (libellés via Transloco).
- Bandeau d'alerte si `tripFull` (« Voyage complet ») ou, en mode réservation, `reservationQuotaReached` (« Quota de réservation atteint »).
- `@if (outCriteriaChosen && outTrips.length === 0) { <small>…aucun voyage programmé…</small> }` sous le select voyage.
- Le bouton de soumission utilise déjà `[disabled]="!canSubmit"` — vérifier.

- [ ] **Step 5 : i18n (fr/en/es/pt)**

Ajouter le bloc `book.avail` : `sold`, `reserved`, `blocked`, `available`, `reservations_possible`,
`full` (« Voyage complet »), `quota_reached` (« Quota de réservation atteint »), `none` (« Aucun
voyage programmé pour ces critères. »). `python json.load/dump` + revérifier le parse.

- [ ] **Step 6 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(billetterie): availability panel + full/quota guards + empty-trip message on sale form (M18)"
```

---

## Notes d'implémentation

- `release_expired_reservations` est appelé avant le comptage (comme pour le seat-map) pour que
  `reserved`/`reservations_possible` reflètent les réservations réellement actives.
- `tripFull` désactive **les deux** actions (vente et réservation nécessitent un siège libre) ;
  `reservationQuotaReached` ne désactive **que** la réservation. Quota `null` ⇒ non bloquant.
- Vérifier les noms réels des champs critères du formulaire (`fareClassId`, `outSlotId`, `outDate`)
  avant d'écrire `outCriteriaChosen`.
