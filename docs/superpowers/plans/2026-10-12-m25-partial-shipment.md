# M25 — Expédition partielle des colis — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (Native). Steps use checkbox (`- [ ]`) syntax.

**Goal:** Un colis peut être expédié en plusieurs fois, sur différents voyages ; chaque expédition porte une quantité, un voyage, une validation (auteur/date) ; suivi total/expédié/restant, blocage au-delà du restant et hors route, historique complet.

**Architecture:** Nouveau modèle `ParcelShipment` (cycle brouillon→validée→chargée→en transit→arrivée). Le `Parcel` dérive `shipped/remaining`, garde `trip` = voyage primaire (1ʳᵉ expédition validée), et avance son `status` depuis l'état agrégé des expéditions. Réception/retrait/paiement restent au niveau colis.

**Tech Stack:** Django/DRF, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-12-m25-partial-shipment-design.md`

## Global Constraints

- Couverture trajet : une expédition n'est permise que si `route_points(trip.route)` contient `parcel.origin_point` ET `parcel.destination_point`, origine avant destination.
- Sur-expédition : `quantity ≤ parcel.remaining_pieces`.
- Validation = étape séparée (`validated_by`/`validated_at`) ; seules les expéditions `validated+` comptent dans `shipped`.
- Voyage primaire : `parcel.trip` = voyage de la 1ʳᵉ expédition validée (préserve M15/récap).
- Paiement, réception, retrait, livraison : inchangés, au niveau colis ; réception exige `parcel.status == arrived`.
- Permissions : `ticketing.parcel.manage` (actions), `ticketing.parcel.view` (liste).

## Review Focus

- **Expédition hors route** : voyage dont la route ne dessert pas départ→destination du colis → refus. Test Task 2.
- **Sur-expédition** : somme des expéditions validées > quantité totale → refus. Test Task 2.
- **Voyage primaire** : seule la 1ʳᵉ expédition validée pose `is_primary` + `parcel.trip` ; annulation de la primaire ré-élit la suivante. Test Task 2.
- **Statut agrégé** : `parcel.status` → `arrived` seulement quand toutes les pièces sont arrivées ; réception refusée avant. Test Task 2.
- **Non-régression M15** : revenu colis du voyage primaire préservé. Test Task 2 (réutilise la logique `voyages_parcel__trip`).

---

## Task 1 : Backend — modèle `ParcelShipment` + dérivés + serializers

**Files:**
- Create: `backend/apps/voyages_consignment/models/shipment.py`
- Modify: `backend/apps/voyages_consignment/models/__init__.py`
- Modify: `backend/apps/voyages_consignment/models/parcel.py` (propriétés dérivées)
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py`
- Migration: `voyages_consignment` (CreateModel ParcelShipment)

**Interfaces:**
- Produces: `ParcelShipment`, `Parcel.shipped_pieces`, `Parcel.remaining_pieces`, `ParcelShipmentSerializer`, `ParcelRead` étendu (`shipped_pieces`, `remaining_pieces`, `shipments`).

- [ ] **Step 1 : Modèle** — créer `models/shipment.py` :

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class ParcelShipment(BaseModel):
    """Expédition partielle d'un colis (M25) : N pièces sur un voyage donné."""

    class Status(models.TextChoices):
        DRAFT      = "draft",      _("Brouillon")
        VALIDATED  = "validated",  _("Validée")
        LOADED     = "loaded",     _("Chargée")
        IN_TRANSIT = "in_transit", _("En transit")
        ARRIVED    = "arrived",    _("Arrivée")
        CANCELLED  = "cancelled",  _("Annulée")

    parcel = models.ForeignKey("voyages_consignment.Parcel", verbose_name=_("colis"),
                               on_delete=models.CASCADE, related_name="shipments")
    quantity = models.PositiveSmallIntegerField(_("pièces expédiées"), default=1)
    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.PROTECT, related_name="parcel_shipments")
    status = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.DRAFT)
    is_primary = models.BooleanField(_("expédition primaire"), default=False)
    validated_by = models.ForeignKey("authentication.User", verbose_name=_("validée par"),
                                     on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    validated_at  = models.DateTimeField(_("validée le"), null=True, blank=True)
    loaded_at     = models.DateTimeField(_("chargée le"), null=True, blank=True)
    dispatched_at = models.DateTimeField(_("expédiée le"), null=True, blank=True)
    arrived_at    = models.DateTimeField(_("arrivée le"), null=True, blank=True)
    note = models.CharField(_("note"), max_length=255, blank=True)

    # Statuts qui comptent comme « pièces engagées / expédiées ».
    COUNTED = ("validated", "loaded", "in_transit", "arrived")

    class Meta(BaseModel.Meta):
        verbose_name = _("expédition")
        verbose_name_plural = _("expéditions")
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.parcel_id} · {self.quantity} ({self.get_status_display()})"
```

- [ ] **Step 2 : Export** — dans `models/__init__.py`, ajouter l'import + `__all__` :

```python
from .shipment import ParcelShipment
```
(et ajouter `"ParcelShipment"` à `__all__`).

- [ ] **Step 3 : Dérivés Parcel** — dans `models/parcel.py`, ajouter sur la classe `Parcel` (avant `class Meta`) :

```python
    @property
    def shipped_pieces(self):
        from apps.voyages_consignment.models import ParcelShipment
        return (self.shipments.filter(is_deleted=False, status__in=ParcelShipment.COUNTED)
                .aggregate(s=models.Sum("quantity"))["s"] or 0)

    @property
    def remaining_pieces(self):
        return self.quantity - self.shipped_pieces
```

- [ ] **Step 4 : Migration** — `cd backend && ../env/bin/python manage.py makemigrations voyages_consignment`. Expected : `Create model ParcelShipment`.

- [ ] **Step 5 : Serializers** — dans `config_api/serializers.py`, ajouter `ParcelShipmentSerializer` et étendre `ParcelRead` :

```python
class ParcelShipmentSerializer(serializers.ModelSerializer):
    status_display    = serializers.CharField(source="get_status_display", read_only=True)
    trip_number       = serializers.CharField(source="trip.number", read_only=True, default=None)
    trip_route_code   = serializers.CharField(source="trip.route.code", read_only=True, default=None)
    trip_departure    = serializers.DateTimeField(source="trip.scheduled_departure", read_only=True, default=None)
    validated_by_name = serializers.SerializerMethodField()

    def get_validated_by_name(self, obj):
        u = obj.validated_by
        return (u.get_full_name() or u.username) if u else None

    class Meta:
        from apps.voyages_consignment.models import ParcelShipment
        model = ParcelShipment
        fields = ["id", "parcel", "quantity", "trip", "trip_number", "trip_route_code", "trip_departure",
                  "status", "status_display", "is_primary", "validated_by_name", "validated_at",
                  "loaded_at", "dispatched_at", "arrived_at", "note", "created_at"]
```

Dans `ParcelRead` : ajouter les champs dérivés + les expéditions.
```python
    shipped_pieces   = serializers.IntegerField(read_only=True)
    remaining_pieces = serializers.IntegerField(read_only=True)
    shipments        = ParcelShipmentSerializer(many=True, read_only=True)
```
et ajouter `"shipped_pieces", "remaining_pieces", "shipments"` à `Meta.fields`.
(Définir `ParcelShipmentSerializer` AVANT `ParcelRead` dans le fichier.)

- [ ] **Step 6 : Vérif import + migration check** — `../env/bin/python manage.py check` → 0 issue ; `../env/bin/python manage.py makemigrations --check --dry-run` → `No changes detected` (après Step 4 committée).

- [ ] **Step 7 : Commit** — `git commit -m "feat(consignment): ParcelShipment model + parcel shipped/remaining derived (M25)"`

---

## Task 2 : Backend — services d'expédition + refonte transit + tests

**Files:**
- Create: `backend/apps/voyages_consignment/services/shipment_services.py`
- Modify: `backend/apps/voyages_consignment/services/__init__.py`
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py` (délégation transit + capacité + réception gate)
- Create: `backend/apps/voyages_consignment/test_m25_shipment.py`

**Interfaces:**
- Consumes: `ParcelShipment`, `route_points`, `Parcel`.
- Produces: `create_shipment`, `validate_shipment`, `load_shipment`, `dispatch_shipment`, `arrive_shipment`, `cancel_shipment`, `recompute_parcel_state`.

- [ ] **Step 1 : Test rouge** — créer `test_m25_shipment.py` :

```python
import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup(email="m25@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, RouteStop, FareClass,
                                            SeatingPlan, ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="M25Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    c = ServicePoint.objects.create(company=company, town=town, code="C", name="Gare C")
    x = ServicePoint.objects.create(company=company, town=town, code="X", name="Gare X")
    # Route A → (escale B) → C : dessert A→B, A→C, B→C
    route = Route.objects.create(company=company, code="A-C", origin=a, destination=c)
    RouteStop.objects.create(company=company, route=route, service_point=b, sequence=1)
    # Route X → C : ne dessert PAS A→B
    route2 = Route.objects.create(company=company, code="X-C", origin=x, destination=c)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(rte, offset):
        dep = now + timedelta(days=offset)
        t = Trip.objects.create(company=company, route=rte, fare_class=eco, origin=rte.origin,
                                destination=rte.destination, seating_plan=plan,
                                scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                                status="pending")
        materialise_seats(t)
        return t
    trip1 = _trip(route, 0)
    trip2 = _trip(route, 2)
    trip_bad = _trip(route2, 0)

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    # Colis A → B, 10 pièces
    parcel = Parcel.objects.create(company=company, status=Parcel.Status.READY_FOR_TRAVEL,
                                   origin_point=a, destination_point=b, consignment_type=ctype,
                                   trip=None, sender_name="E", sender_phone="6",
                                   recipient_name="R", recipient_phone="7", quantity=10)
    return dict(company=company, admin=admin, parcel=parcel, trip1=trip1, trip2=trip2, trip_bad=trip_bad)


@pytest.mark.django_db
def test_create_shipment_rejects_trip_not_covering_route():
    from apps.voyages_consignment.services import create_shipment
    from apps.core.exceptions import ApplicationError
    g = _setup()
    with pytest.raises(ApplicationError):
        create_shipment(g["parcel"], trip=g["trip_bad"], quantity=5, user=g["admin"])


@pytest.mark.django_db
def test_create_shipment_blocks_over_remaining():
    from apps.voyages_consignment.services import create_shipment, validate_shipment
    from apps.core.exceptions import ApplicationError
    g = _setup("m25b@x.com")
    s1 = create_shipment(g["parcel"], trip=g["trip1"], quantity=7, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    g["parcel"].refresh_from_db()
    assert g["parcel"].shipped_pieces == 7 and g["parcel"].remaining_pieces == 3
    with pytest.raises(ApplicationError):
        create_shipment(g["parcel"], trip=g["trip2"], quantity=5, user=g["admin"])  # > 3 restant


@pytest.mark.django_db
def test_primary_trip_and_full_lifecycle():
    from apps.voyages_consignment.services import (create_shipment, validate_shipment, load_shipment,
                                                   dispatch_shipment, arrive_shipment)
    from apps.voyages_consignment.models import Parcel
    g = _setup("m25c@x.com")
    p = g["parcel"]
    s1 = create_shipment(p, trip=g["trip1"], quantity=6, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    p.refresh_from_db()
    assert p.trip_id == g["trip1"].id          # voyage primaire posé
    s2 = create_shipment(p, trip=g["trip2"], quantity=4, user=g["admin"])
    validate_shipment(s2, user=g["admin"])
    p.refresh_from_db()
    assert p.trip_id == g["trip1"].id          # inchangé (primaire = 1ʳᵉ validée)
    for s in (s1, s2):
        load_shipment(s, user=g["admin"]); dispatch_shipment(s, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.IN_TRANSIT
    arrive_shipment(s1, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.IN_TRANSIT   # pas encore tout arrivé
    arrive_shipment(s2, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.ARRIVED      # tout arrivé


@pytest.mark.django_db
def test_receive_blocked_until_all_arrived():
    from apps.voyages_consignment.services import create_shipment, validate_shipment, receive_parcel
    from apps.core.exceptions import ApplicationError
    g = _setup("m25d@x.com")
    s1 = create_shipment(g["parcel"], trip=g["trip1"], quantity=10, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    with pytest.raises(ApplicationError):
        receive_parcel(g["parcel"], received_pieces=10, user=g["admin"])
```

- [ ] **Step 2 : rouge** — `../env/bin/python -m pytest apps/voyages_consignment/test_m25_shipment.py -q --create-db`. Expected : FAIL (ImportError `create_shipment`).

- [ ] **Step 3 : Services** — créer `services/shipment_services.py` :

```python
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel, ParcelShipment, ParcelEvent

_PRE_DEPARTURE = ("draft", "pending")


def _route_covers(route, from_point, to_point):
    from apps.voyages_pricing.selectors.fare_selectors import route_points
    ids = [p.id for p in route_points(route)]
    if from_point.id not in ids or to_point.id not in ids:
        return False
    return ids.index(from_point.id) < ids.index(to_point.id)


def _capacity_ok(trip, company, adding_weight):
    """Capacité colis du voyage, comptée en EXPÉDITIONS présentes (M25)."""
    from apps.voyages_config.models import VoyagesSettings
    s = VoyagesSettings.objects.filter(company=company).first()
    if not s:
        return
    current = ParcelShipment.objects.filter(trip=trip, is_deleted=False).exclude(
        status=ParcelShipment.Status.CANCELLED)
    if s.parcel_trip_max_count and current.count() >= s.parcel_trip_max_count:
        raise ApplicationError(_("Nombre maximum de colis atteint pour ce voyage."))
    if s.parcel_trip_max_weight_kg and adding_weight:
        total = sum((sh.parcel.weight_kg or 0) for sh in current.select_related("parcel")) + adding_weight
        if total > s.parcel_trip_max_weight_kg:
            raise ApplicationError(_("Capacité poids colis dépassée pour ce voyage."))


def recompute_parcel_state(parcel):
    """Avance parcel.status depuis l'état agrégé des expéditions (M25)."""
    live = list(parcel.shipments.filter(is_deleted=False).exclude(status=ParcelShipment.Status.CANCELLED))
    counted = [s for s in live if s.status in ParcelShipment.COUNTED]
    shipped = sum(s.quantity for s in counted)
    if parcel.status in (Parcel.Status.AVAILABLE_FOR_PICKUP, Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        return parcel  # phases post-réception figées
    if counted and shipped >= parcel.quantity and all(s.status == ParcelShipment.Status.ARRIVED for s in counted):
        parcel.status = Parcel.Status.ARRIVED
    elif any(s.status in (ParcelShipment.Status.IN_TRANSIT, ParcelShipment.Status.ARRIVED) for s in counted):
        parcel.status = Parcel.Status.IN_TRANSIT
    elif any(s.status == ParcelShipment.Status.LOADED for s in counted):
        parcel.status = Parcel.Status.LOADED
    else:
        parcel.status = Parcel.Status.READY_FOR_TRAVEL
    parcel.save(update_fields=["status", "updated_at"])
    return parcel


@transaction.atomic
def create_shipment(parcel, *, trip, quantity, note="", user=None):
    if parcel.status in (Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        raise ApplicationError(_("Ce colis ne peut plus être expédié."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    if not _route_covers(trip.route, parcel.origin_point, parcel.destination_point):
        raise ApplicationError(_("Ce voyage ne dessert pas le trajet du colis (départ → destination)."))
    quantity = int(quantity or 0)
    if quantity < 1:
        raise ApplicationError(_("La quantité expédiée doit être au moins 1."))
    if quantity > parcel.remaining_pieces:
        raise ApplicationError(_("Quantité (%(q)s) supérieure au restant (%(r)s).")
                               % {"q": quantity, "r": parcel.remaining_pieces})
    _capacity_ok(trip, parcel.company, parcel.weight_kg)
    return ParcelShipment.objects.create(parcel=parcel, trip=trip, quantity=quantity,
                                         status=ParcelShipment.Status.DRAFT, note=note, created_by=user)


@transaction.atomic
def validate_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.DRAFT:
        raise ApplicationError(_("Seule une expédition en brouillon peut être validée."))
    parcel = shipment.parcel
    if shipment.quantity > parcel.remaining_pieces:
        raise ApplicationError(_("Le restant a changé : quantité supérieure au restant."))
    shipment.status = ParcelShipment.Status.VALIDATED
    shipment.validated_by = user
    shipment.validated_at = timezone.now()
    # Voyage primaire : 1ʳᵉ expédition validée.
    if not parcel.shipments.filter(is_deleted=False, is_primary=True).exists():
        shipment.is_primary = True
        parcel.trip = shipment.trip
        parcel.save(update_fields=["trip", "updated_at"])
    shipment.updated_by = user
    shipment.save()
    recompute_parcel_state(parcel)
    return shipment


def _advance(shipment, *, to_status, stamp, user, parcel_recompute=True):
    shipment.status = to_status
    setattr(shipment, stamp, timezone.now())
    shipment.updated_by = user
    shipment.save(update_fields=[stamp, "status", "updated_by", "updated_at"])
    if parcel_recompute:
        recompute_parcel_state(shipment.parcel)
    return shipment


@transaction.atomic
def load_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.VALIDATED:
        raise ApplicationError(_("Seule une expédition validée peut être chargée."))
    return _advance(shipment, to_status=ParcelShipment.Status.LOADED, stamp="loaded_at", user=user)


@transaction.atomic
def dispatch_shipment(shipment, *, user=None):
    if shipment.status not in (ParcelShipment.Status.VALIDATED, ParcelShipment.Status.LOADED):
        raise ApplicationError(_("Seule une expédition validée ou chargée peut être expédiée."))
    return _advance(shipment, to_status=ParcelShipment.Status.IN_TRANSIT, stamp="dispatched_at", user=user)


@transaction.atomic
def arrive_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.IN_TRANSIT:
        raise ApplicationError(_("Seule une expédition en transit peut être marquée arrivée."))
    return _advance(shipment, to_status=ParcelShipment.Status.ARRIVED, stamp="arrived_at", user=user)


@transaction.atomic
def cancel_shipment(shipment, *, user=None):
    if shipment.status == ParcelShipment.Status.ARRIVED:
        raise ApplicationError(_("Une expédition arrivée ne peut pas être annulée."))
    was_primary = shipment.is_primary
    shipment.status = ParcelShipment.Status.CANCELLED
    shipment.is_primary = False
    shipment.updated_by = user
    shipment.save(update_fields=["status", "is_primary", "updated_by", "updated_at"])
    parcel = shipment.parcel
    if was_primary:
        nxt = (parcel.shipments.filter(is_deleted=False, status__in=ParcelShipment.COUNTED)
               .order_by("validated_at", "created_at").first())
        parcel.trip = nxt.trip if nxt else None
        if nxt:
            nxt.is_primary = True
            nxt.save(update_fields=["is_primary", "updated_at"])
        parcel.save(update_fields=["trip", "updated_at"])
    recompute_parcel_state(parcel)
    return shipment
```

- [ ] **Step 4 : Export** — dans `services/__init__.py`, ajouter :

```python
from .shipment_services import (create_shipment, validate_shipment, load_shipment,
                                dispatch_shipment, arrive_shipment, cancel_shipment,
                                recompute_parcel_state)
```
(et compléter `__all__` si présent).

- [ ] **Step 5 : Réception — exiger `arrived`** — dans `parcel_services.py`, resserrer le garde de `receive_parcel` :

Remplacer
```python
    if parcel.status not in (Parcel.Status.ARRIVED, Parcel.Status.IN_TRANSIT):
        raise ApplicationError(_("Seul un colis arrivé peut être réceptionné."))
```
par
```python
    if parcel.status != Parcel.Status.ARRIVED:
        raise ApplicationError(_("Seul un colis dont toutes les pièces sont arrivées peut être réceptionné."))
```

- [ ] **Step 6 : vert** — `../env/bin/python -m pytest apps/voyages_consignment/test_m25_shipment.py -q --create-db`. Expected : 4 passed.

- [ ] **Step 7 : non-régression + check** — `../env/bin/python -m pytest apps/voyages_consignment apps/voyages_trips/tests/test_m15_result.py -q --reuse-db -p no:cacheprovider` (comparer à la base rouge connue ; M15 doit rester vert) ; `../env/bin/python manage.py makemigrations --check --dry-run` → `No changes detected`.

- [ ] **Step 8 : Commit** — `git commit -m "feat(consignment): shipment lifecycle services + route-coverage + capacity by shipment (M25)"`

---

## Task 3 : Backend — endpoints expéditions

**Files:**
- Modify: `backend/apps/voyages_consignment/config_api/views.py`
- Modify: `backend/apps/voyages_consignment/urls.py`
- Create: `backend/apps/voyages_consignment/test_m25_api.py`

**Interfaces:**
- Consumes: services Task 2, `ParcelShipmentSerializer`.
- Produces: `GET/POST parcels/<pk>/shipments/`, `POST shipments/<pk>/{validate,load,dispatch,arrive}/`, `DELETE shipments/<pk>/`.

- [ ] **Step 1 : Test rouge** — créer `test_m25_api.py` (APIRequestFactory + force_authenticate ; réutilise `_setup` de `test_m25_shipment`) : POST créer une expédition (6 pièces, trip1) → 201/200 ; POST validate → 200 ; POST sur voyage hors route → 400 ; GET `parcels/<id>/shipments/` → 1 entrée.

```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.voyages_consignment.test_m25_shipment import _setup
from apps.voyages_consignment.config_api import views as v


def _post(view, user, data, **kw):
    req = APIRequestFactory().post("/x", data, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw)


def _get(view, user, **kw):
    req = APIRequestFactory().get("/x")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw)


@pytest.mark.django_db
def test_shipment_api_create_validate_list():
    g = _setup("m25api@x.com")
    pid = str(g["parcel"].id)
    r = _post(v.ParcelShipmentListView, g["admin"], {"trip_id": str(g["trip1"].id), "quantity": 6}, pk=pid)
    assert r.status_code in (200, 201), r.data
    sid = (r.data.get("data") or r.data)["id"]
    r = _post(v.ShipmentValidateView, g["admin"], {}, pk=sid)
    assert r.status_code == 200, r.data
    r = _get(v.ParcelShipmentListView, g["admin"], pk=pid)
    rows = r.data.get("data") if isinstance(r.data, dict) and "data" in r.data else r.data
    assert len(rows) == 1


@pytest.mark.django_db
def test_shipment_api_rejects_off_route():
    g = _setup("m25api2@x.com")
    r = _post(v.ParcelShipmentListView, g["admin"],
              {"trip_id": str(g["trip_bad"].id), "quantity": 5}, pk=str(g["parcel"].id))
    assert r.status_code == 400
```

- [ ] **Step 2 : rouge.**

- [ ] **Step 3 : Vues** — dans `config_api/views.py`, ajouter (helper trip via `_trip` existant du module trips n'est pas dispo ici ; résoudre le voyage en local) :

```python
class ParcelShipmentListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'POST': 'ticketing.parcel.manage'}

    def get(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Colis introuvable.", status_code=404)
        qs = p.shipments.filter(is_deleted=False)
        return success_response(S.ParcelShipmentSerializer(qs, many=True).data)

    def post(self, request, pk):
        from apps.voyages_trips.models import Trip
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Colis introuvable.", status_code=404)
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company,
                                   id=request.data.get("trip_id")).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            s = services.create_shipment(p, trip=trip, quantity=request.data.get("quantity"),
                                         note=request.data.get("note", ""), user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelShipmentSerializer(s).data)


class _ShipmentActionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage', 'DELETE': 'ticketing.parcel.manage'}
    service_fn = None

    def _get(self, request, pk):
        from apps.voyages_consignment.models import ParcelShipment
        return ParcelShipment.objects.filter(is_deleted=False, parcel__company=request.user.company,
                                             id=pk).select_related("parcel", "trip").first()

    def post(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            s = type(self).service_fn(s, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelShipmentSerializer(s).data)


class ShipmentValidateView(_ShipmentActionView): service_fn = staticmethod(services.validate_shipment)
class ShipmentLoadView(_ShipmentActionView):     service_fn = staticmethod(services.load_shipment)
class ShipmentDispatchView(_ShipmentActionView): service_fn = staticmethod(services.dispatch_shipment)
class ShipmentArriveView(_ShipmentActionView):   service_fn = staticmethod(services.arrive_shipment)


class ShipmentCancelView(_ShipmentActionView):
    def delete(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            services.cancel_shipment(s, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()
```

(Vérifier que `created_response`, `no_content_response` sont importés en tête de `views.py` ; sinon les ajouter à l'import `apps.core.responses`.)

- [ ] **Step 4 : URLs** — dans `urls.py`, après les routes parcels :

```python
    path("parcels/<uuid:pk>/shipments/", v.ParcelShipmentListView.as_view()),
    path("shipments/<uuid:pk>/validate/", v.ShipmentValidateView.as_view()),
    path("shipments/<uuid:pk>/load/",     v.ShipmentLoadView.as_view()),
    path("shipments/<uuid:pk>/dispatch/", v.ShipmentDispatchView.as_view()),
    path("shipments/<uuid:pk>/arrive/",   v.ShipmentArriveView.as_view()),
    path("shipments/<uuid:pk>/",          v.ShipmentCancelView.as_view()),
```

- [ ] **Step 5 : vert + non-régression + check** — `pytest apps/voyages_consignment/test_m25_api.py -q --create-db` → 2 passed ; `pytest apps/voyages_consignment -q --reuse-db` (base rouge) ; `makemigrations --check` clean.

- [ ] **Step 6 : Commit** — `git commit -m "feat(consignment): shipment endpoints (create/validate/load/dispatch/arrive/cancel) (M25)"`

---

## Task 4 : Frontend — panneau Expéditions + manifeste + i18n

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoints shipments)
- Modify: `angular/src/_api/models/voyages-consignment.models.ts` — `ParcelShipment` + champs dérivés sur `Parcel`
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.{ts,html}` (panneau Expéditions)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: endpoints Task 3.

- [ ] **Step 1 : Endpoints** — dans `api.config.ts`, bloc `VOYAGES_CONSIGNMENT`, ajouter :

```ts
  parcelShipments:  (id: string) => `${VCG}/parcels/${id}/shipments/`,
  shipmentValidate: (id: string) => `${VCG}/shipments/${id}/validate/`,
  shipmentLoad:     (id: string) => `${VCG}/shipments/${id}/load/`,
  shipmentDispatch: (id: string) => `${VCG}/shipments/${id}/dispatch/`,
  shipmentArrive:   (id: string) => `${VCG}/shipments/${id}/arrive/`,
  shipmentCancel:   (id: string) => `${VCG}/shipments/${id}/`,
```
(`VCG` = base consignment déjà définie.)

- [ ] **Step 2 : Modèle** — ajouter l'interface `ParcelShipment` et les champs dérivés sur `Parcel` :

```ts
export interface ParcelShipment {
  id: string; parcel: string; quantity: number;
  trip: string | null; trip_number: string | null; trip_route_code: string | null; trip_departure: string | null;
  status: string; status_display: string; is_primary: boolean;
  validated_by_name: string | null; validated_at: string | null;
  loaded_at: string | null; dispatched_at: string | null; arrived_at: string | null;
  note: string; created_at: string;
}
```
et sur `Parcel` : `shipped_pieces?: number; remaining_pieces?: number; shipments?: ParcelShipment[];`

- [ ] **Step 3 : Service** — dans `parcel.service.ts` :

```ts
  shipments(id: string): Observable<ParcelShipment[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelShipments(id)).pipe(map(r => r.data ?? r)); }
  createShipment(id: string, body: { trip_id: string; quantity: number; note?: string }): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelShipments(id), body).pipe(map(r => r.data ?? r)); }
  validateShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentValidate(sid), {}).pipe(map(r => r.data ?? r)); }
  loadShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentLoad(sid), {}).pipe(map(r => r.data ?? r)); }
  dispatchShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentDispatch(sid), {}).pipe(map(r => r.data ?? r)); }
  arriveShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentArrive(sid), {}).pipe(map(r => r.data ?? r)); }
  cancelShipment(sid: string): Observable<unknown> { return this.http.delete(VOYAGES_CONSIGNMENT.shipmentCancel(sid)); }
```
(importer `ParcelShipment` dans le service.)

- [ ] **Step 4 : Panneau Expéditions (TS)** — dans `parcels.component.ts` : état `shipTarget: Parcel | null`, `shipments: ParcelShipment[]`, `shipTripId=''`, `shipQty=1`, `shipNote=''`, `trips: {id,number,route_code}[]` (voyages ouverts — réutiliser le service voyages/trips `list` filtré `status=pending`). Méthodes : `openShipments(p)` (charge `svc.shipments(p.id)` + voyages), `createShipment()` (`svc.createShipment` puis recharge), `validateShip/loadShip/dispatchShip/arriveShip(s)`, `cancelShip(s)`, `closeShipments()`. Toast sur erreur backend (`e.error.detail`), incluant hors-route et sur-expédition.

- [ ] **Step 5 : Panneau Expéditions (HTML)** — ajouter un bouton « Expéditions » par colis (statuts non retirés/annulés) ouvrant une modale : badge « expédié {{shipTarget.shipped_pieces}} / {{shipTarget.quantity}} · restant {{shipTarget.remaining_pieces}} » ; formulaire « Nouvelle expédition » (select voyage + quantité, `max` = restant) ; tableau des expéditions (quantité, voyage, statut, validé par/le) avec actions valider/charger/expédier/arriver/annuler selon statut.

- [ ] **Step 6 : i18n** — clés `consignment.shipment.*` (titre, expédié/restant, nouvelle, quantité, voyage, valider, charger, expédier, arriver, annuler, col. validé par/le) dans fr/en/es/pt.

- [ ] **Step 7 : Build** — `cd angular && npx ng build --configuration development` → `Application bundle generation complete`, sans erreur.

- [ ] **Step 8 : Commit** — `git commit -m "feat(consignment): parcel shipments panel + manifest (M25 frontend)"`

---

## Notes

- Le cas simple « tout expédier sur un voyage » = 1 expédition pleine ; les endpoints/actions parcel legacy (`assign-trip`, `load`, `dispatch`, `arrive`) restent en place et pourront, dans un second temps, déléguer à une expédition unique (hors périmètre de ce plan — ne pas casser l'existant : ils opèrent toujours sur `parcel.trip`).
- `ParcelExpeditionView` (écran pool) reste fonctionnel ; l'intégration fine pool↔expéditions pourra suivre.
- Base rouge `voyages_consignment` / `voyages_trips` : comparer avant d'imputer une régression. M15 (`test_m15_result`) doit rester vert (voyage primaire).
- `VoyagesSettings.parcel_trip_max_count/weight` : noms de champs à vérifier à l'exécution (ruling si différent).
