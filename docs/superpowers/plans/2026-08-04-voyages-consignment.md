# Colis & Bagages (Voyages Consignment) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gérer les colis (envoi autonome payé au dépôt, affecté à un voyage puis retiré) et les bagages (rattachés à un billet, franchise + supplément), avec un manifeste voyage.

**Architecture:** Nouvelle app Django `apps/voyages_consignment` suivant le noyau Voyages (APIView, packages selectors/services, `BaseModel`). Écrans Angular 21 standalone (DreamsPOS, icônes `ti`, français) sous `pages/voyages-consignment/`.

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, icônes Tabler `ti`.

## Global Constraints

- Nouvelle app `apps/voyages_consignment` montée sur `/api/v1/voyages/consignment/` — router : `path("voyages/consignment/", include("apps.voyages_consignment.urls"))`.
- Branche `feature/voyages-consignment` depuis `origin/master`. Forward-only.
- Commits **shimi** uniquement — PAS de trailer `Co-Authored-By: Claude`.
- AUCUN import `treasury`/`tiers`. `payment_method` = CharField ; dropdown vide « (module trésorerie à venir) ».
- Legacy `parcel`, `ticketing` dormants/intacts.
- Français partout (copie UI, `verbose_name`, messages). Devise XAF.
- Pas de framework de test : `manage.py check`, `makemigrations --check`, migrate base neuve, smoke shell, `npx ng build`. Python : `../env/bin/python` depuis `backend/`.
- Env base neuve : `DATABASE_URL="sqlite:////private/tmp/claude-501/-Users-zealot-Desktop-brainstore-new-erp/328f24eb-fbb8-44b6-adf2-7750c9e95eda/scratchpad/consignment_test.sqlite3"`
- Séquences (exact) : `Sequence.objects.get_or_create(code=CODE, defaults={"name": NAME, "prefix": PREFIX, "padding": 5, "reset_yearly": True})` puis `next_number(CODE)` → `PREFIX/AAAA/00001`.

---

### Task 1: Scaffold app + champ franchise dans VoyagesSettings

**Files:**
- Create: `backend/apps/voyages_consignment/__init__.py` (vide)
- Create: `backend/apps/voyages_consignment/apps.py`
- Create: `backend/apps/voyages_consignment/models/__init__.py` (vide pour l'instant)
- Create: `backend/apps/voyages_consignment/selectors/__init__.py` (vide)
- Create: `backend/apps/voyages_consignment/services/__init__.py` (vide)
- Create: `backend/apps/voyages_consignment/config_api/__init__.py` (vide)
- Create: `backend/apps/voyages_consignment/config_api/common.py`
- Create: `backend/apps/voyages_consignment/urls.py` (urlpatterns vide pour l'instant)
- Modify: `backend/config/settings/base.py` (ajouter `"apps.voyages_consignment"` après `"apps.voyages_booking"`)
- Modify: `backend/api/v1/router.py` (ajouter l'include consignment)
- Modify: `backend/apps/voyages_config/models/settings.py` (ajouter `baggage_free_allowance_kg`)

**Interfaces:**
- Produces: app enregistrée + `VoyagesSettings.baggage_free_allowance_kg` (PositiveSmallIntegerField, défaut 23) ; helpers `scope_company_id(request)`, `resolve_company_or_global(request)`.

- [ ] **Step 1: apps.py**
```python
from django.apps import AppConfig


class VoyagesConsignmentConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.voyages_consignment"
    verbose_name = "Voyages — Colis & Bagages"
```

- [ ] **Step 2: config_api/common.py**
```python
from apps.core.responses import error_response


def scope_company_id(request):
    return getattr(request.user, "company_id", None)


def resolve_company_or_global(request):
    """Consignment est toujours rattaché à une institution."""
    cid = getattr(request.user, "company_id", None)
    if not cid:
        return None, error_response("Aucune institution associée à l'utilisateur.", status_code=400)
    return request.user.company, None
```

- [ ] **Step 3: urls.py (vide au départ)**
```python
from django.urls import path

urlpatterns = []
```

- [ ] **Step 4: Ajouter le champ franchise à VoyagesSettings**
Dans `backend/apps/voyages_config/models/settings.py`, après la ligne `sms_notification_default = ...` :
```python
    baggage_free_allowance_kg = models.PositiveSmallIntegerField(_("franchise bagage (kg)"), default=23)
```

- [ ] **Step 5: Enregistrer l'app** dans `config/settings/base.py` — ajouter la ligne juste après `"apps.voyages_booking",` :
```python
    # ── Colis & Bagages Voyages ──
    "apps.voyages_consignment",
```

- [ ] **Step 6: Enregistrer le router** dans `api/v1/router.py` — après la ligne `path("voyages/booking/", ...)` :
```python

    # ── Colis & Bagages Voyages ────────────────────────────────────────────
    path("voyages/consignment/", include("apps.voyages_consignment.urls")),
```

- [ ] **Step 7: Migrations**
Run: `../env/bin/python manage.py makemigrations voyages_config voyages_consignment`
Expected: migration `voyages_config` ajoutant `baggage_free_allowance_kg` (voyages_consignment n'a pas encore de modèle → aucune migration pour cette app, c'est normal).

- [ ] **Step 8: Check + migrate base neuve**
Run: `../env/bin/python manage.py check` puis migrate base neuve (env ci-dessus).
Expected: check ne signale que l'avertissement staticfiles ; migrate applique la migration voyages_config.

- [ ] **Step 9: Commit**
```bash
git add backend/apps/voyages_consignment backend/config/settings/base.py backend/api/v1/router.py backend/apps/voyages_config/models/settings.py backend/apps/voyages_config/migrations
git commit -m "feat(voyages-consignment): scaffold app + franchise bagage dans VoyagesSettings"
```

---

### Task 2: Modèles Parcel, ParcelEvent, Baggage

**Files:**
- Create: `backend/apps/voyages_consignment/models/parcel.py`
- Create: `backend/apps/voyages_consignment/models/baggage.py`
- Modify: `backend/apps/voyages_consignment/models/__init__.py`

**Interfaces:**
- Produces: `Parcel`, `ParcelEvent`, `Baggage` avec les champs/choices ci-dessous. `Parcel.events` reverse ; `Ticket.baggage` reverse.

- [ ] **Step 1: models/parcel.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parcel(BaseModel):
    class Status(models.TextChoices):
        REGISTERED = "registered", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        ARRIVED    = "arrived",    _("Arrivé")
        PICKED_UP  = "picked_up",  _("Retiré")
        CANCELLED  = "cancelled",  _("Annulé")

    company           = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                           on_delete=models.CASCADE, related_name="voyages_parcels")
    reference         = models.CharField(_("référence"), max_length=40, blank=True)
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.REGISTERED)
    origin_point      = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de départ"),
                                           on_delete=models.PROTECT, related_name="parcels_from")
    destination_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point d'arrivée"),
                                           on_delete=models.PROTECT, related_name="parcels_to")
    trip              = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                           on_delete=models.SET_NULL, null=True, blank=True, related_name="parcels")
    sender_name       = models.CharField(_("expéditeur"), max_length=150)
    sender_phone      = models.CharField(_("tél. expéditeur"), max_length=30)
    recipient_name    = models.CharField(_("destinataire"), max_length=150)
    recipient_phone   = models.CharField(_("tél. destinataire"), max_length=30)
    recipient_address = models.CharField(_("adresse destinataire"), max_length=255, blank=True)
    consignment_type  = models.ForeignKey("voyages_config.ConsignmentType", verbose_name=_("type de colis"),
                                           on_delete=models.PROTECT, related_name="parcels")
    description       = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg         = models.DecimalField(_("poids (kg)"), max_digits=8, decimal_places=3, null=True, blank=True)
    quantity          = models.PositiveSmallIntegerField(_("quantité"), default=1)
    declared_value    = models.DecimalField(_("valeur déclarée"), max_digits=12, decimal_places=2, null=True, blank=True)
    amount_due        = models.DecimalField(_("montant dû"), max_digits=12, decimal_places=2, default=0)
    amount_received   = models.DecimalField(_("montant encaissé"), max_digits=12, decimal_places=2, default=0)
    change_due        = models.DecimalField(_("monnaie rendue"), max_digits=12, decimal_places=2, default=0)
    payment_method    = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    paid_at           = models.DateTimeField(_("payé le"), null=True, blank=True)
    loaded_at         = models.DateTimeField(_("chargé le"), null=True, blank=True)
    arrived_at        = models.DateTimeField(_("arrivé le"), null=True, blank=True)
    picked_up_at      = models.DateTimeField(_("retiré le"), null=True, blank=True)
    picked_up_by      = models.CharField(_("retiré par"), max_length=150, blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("colis")
        verbose_name_plural = _("colis")
        ordering = ["-created_at"]

    def __str__(self):
        return self.reference or str(self.id)


class ParcelEvent(BaseModel):
    class Kind(models.TextChoices):
        REGISTERED = "registered", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        ARRIVED    = "arrived",    _("Arrivé")
        PICKED_UP  = "picked_up",  _("Retiré")
        CANCELLED  = "cancelled",  _("Annulé")

    parcel = models.ForeignKey("voyages_consignment.Parcel", verbose_name=_("colis"),
                               on_delete=models.CASCADE, related_name="events")
    kind   = models.CharField(_("type"), max_length=12, choices=Kind.choices)
    trip   = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                               on_delete=models.SET_NULL, null=True, blank=True, related_name="parcel_events")
    note   = models.CharField(_("note"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("événement colis")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.parcel_id} · {self.get_kind_display()}"
```

- [ ] **Step 2: models/baggage.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Baggage(BaseModel):
    class Status(models.TextChoices):
        CHECKED_IN = "checked_in", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        DELIVERED  = "delivered",  _("Livré")
        CANCELLED  = "cancelled",  _("Annulé")

    company           = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                           on_delete=models.CASCADE, related_name="voyages_baggage")
    tag_number        = models.CharField(_("étiquette"), max_length=40, blank=True)
    ticket            = models.ForeignKey("voyages_booking.Ticket", verbose_name=_("billet"),
                                           on_delete=models.PROTECT, related_name="baggage")
    consignment_type  = models.ForeignKey("voyages_config.ConsignmentType", verbose_name=_("type"),
                                           on_delete=models.PROTECT, null=True, blank=True, related_name="baggage")
    description       = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg         = models.DecimalField(_("poids (kg)"), max_digits=6, decimal_places=2, null=True, blank=True)
    free_allowance_kg = models.DecimalField(_("franchise (kg)"), max_digits=6, decimal_places=2, default=0)
    excess_kg         = models.DecimalField(_("excédent (kg)"), max_digits=6, decimal_places=2, default=0)
    amount_due        = models.DecimalField(_("supplément dû"), max_digits=12, decimal_places=2, default=0)
    amount_received   = models.DecimalField(_("montant encaissé"), max_digits=12, decimal_places=2, default=0)
    change_due        = models.DecimalField(_("monnaie rendue"), max_digits=12, decimal_places=2, default=0)
    payment_method    = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    paid_at           = models.DateTimeField(_("payé le"), null=True, blank=True)
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.CHECKED_IN)
    loaded_at         = models.DateTimeField(_("chargé le"), null=True, blank=True)
    delivered_at      = models.DateTimeField(_("livré le"), null=True, blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("bagage")
        verbose_name_plural = _("bagages")
        ordering = ["-created_at"]

    def __str__(self):
        return self.tag_number or str(self.id)
```

- [ ] **Step 3: models/__init__.py**
```python
from .parcel import Parcel, ParcelEvent
from .baggage import Baggage

__all__ = ["Parcel", "ParcelEvent", "Baggage"]
```

- [ ] **Step 4: Migrations**
Run: `../env/bin/python manage.py makemigrations voyages_consignment`
Expected: `0001_initial` créant Parcel, ParcelEvent, Baggage.

- [ ] **Step 5: Check + migrate base neuve**
Run: `../env/bin/python manage.py check` puis migrate base neuve.
Expected: aucun clash de related_name ; migrate OK.

- [ ] **Step 6: Commit**
```bash
git add backend/apps/voyages_consignment/models backend/apps/voyages_consignment/migrations
git commit -m "feat(voyages-consignment): modèles Parcel, ParcelEvent, Baggage"
```

---

### Task 3: Selectors

**Files:**
- Create: `backend/apps/voyages_consignment/selectors/__init__.py` (remplace le vide)

**Interfaces:**
- Consumes: `Parcel`, `Baggage`, `voyages_trips.Trip`.
- Produces: `list_parcels(company, status=None, trip_id=None, q=None)`, `parcel_detail(company, pk)`, `pending_for_trip(company, route_id=None)`, `list_baggage(company, ticket_id=None, trip_id=None, status=None)`, `trip_manifest(trip)`.

- [ ] **Step 1: selectors/__init__.py**
```python
from django.db.models import Q
from apps.voyages_consignment.models import Parcel, Baggage


def list_parcels(company, status=None, trip_id=None, q=None):
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .select_related("origin_point", "destination_point", "trip", "consignment_type")
          .order_by("-created_at"))
    if status:
        qs = qs.filter(status=status)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(sender_name__icontains=q) |
                       Q(sender_phone__icontains=q) | Q(recipient_name__icontains=q) |
                       Q(recipient_phone__icontains=q))
    return qs


def parcel_detail(company, pk):
    return (Parcel.objects.filter(is_deleted=False, company=company, id=pk)
            .select_related("origin_point", "destination_point", "trip", "consignment_type")
            .prefetch_related("events__trip")
            .first())


def pending_for_trip(company, route_id=None):
    """Colis enregistrés sans voyage — candidats au chargement."""
    qs = (Parcel.objects.filter(is_deleted=False, company=company,
                                status=Parcel.Status.REGISTERED, trip__isnull=True)
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("created_at"))
    return qs


def list_baggage(company, ticket_id=None, trip_id=None, status=None):
    qs = (Baggage.objects.filter(is_deleted=False, company=company)
          .select_related("ticket__passenger", "ticket__trip", "consignment_type")
          .order_by("-created_at"))
    if ticket_id:
        qs = qs.filter(ticket_id=ticket_id)
    if trip_id:
        qs = qs.filter(ticket__trip_id=trip_id)
    if status:
        qs = qs.filter(status=status)
    return qs


def trip_manifest(trip):
    parcels = (Parcel.objects.filter(is_deleted=False, trip=trip)
               .exclude(status=Parcel.Status.CANCELLED)
               .select_related("origin_point", "destination_point", "consignment_type")
               .order_by("reference"))
    baggage = (Baggage.objects.filter(is_deleted=False, ticket__trip=trip)
               .exclude(status=Baggage.Status.CANCELLED)
               .select_related("ticket__passenger", "consignment_type")
               .order_by("tag_number"))
    return {"parcels": parcels, "baggage": baggage}


__all__ = ["list_parcels", "parcel_detail", "pending_for_trip", "list_baggage", "trip_manifest"]
```

- [ ] **Step 2: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 3: Commit**
```bash
git add backend/apps/voyages_consignment/selectors
git commit -m "feat(voyages-consignment): selectors colis/bagages + manifeste"
```

---

### Task 4: Services colis

**Files:**
- Create: `backend/apps/voyages_consignment/services/parcel_services.py`
- Modify: `backend/apps/voyages_consignment/services/__init__.py`

**Interfaces:**
- Consumes: `Parcel`, `ParcelEvent`, `voyages_config.ServicePoint`/`ConsignmentType`, `voyages_trips.Trip`, `voyages_pricing.selectors.fare_selectors.route_points`, `core.sequence_service.next_number`, `core.models.Sequence`.
- Produces:
  - `register_parcel(company, *, origin_point, destination_point, consignment_type, sender_name, sender_phone, recipient_name, recipient_phone, recipient_address="", description="", weight_kg=None, quantity=1, declared_value=None, amount_due, amount_received=None, payment_method="", user) -> Parcel`
  - `assign_to_trip(parcel, trip, *, user) -> Parcel`
  - `mark_arrived(parcel, *, user) -> Parcel`
  - `pickup_parcel(parcel, *, picked_up_by, user) -> Parcel`
  - `cancel_parcel(parcel, *, user) -> Parcel`

- [ ] **Step 1: parcel_services.py**
```python
from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_consignment.models import Parcel, ParcelEvent
from apps.voyages_pricing.selectors.fare_selectors import route_points

_PRE_DEPARTURE = ["draft", "pending"]


def _parcel_reference():
    Sequence.objects.get_or_create(
        code="COL", defaults={"name": "Colis", "prefix": "COL", "padding": 5, "reset_yearly": True})
    return next_number("COL")


def _event(parcel, kind, *, trip=None, user=None, note=""):
    ParcelEvent.objects.create(parcel=parcel, kind=kind, trip=trip, note=note, created_by=user)


@transaction.atomic
def register_parcel(company, *, origin_point, destination_point, consignment_type,
                    sender_name, sender_phone, recipient_name, recipient_phone,
                    recipient_address="", description="", weight_kg=None, quantity=1,
                    declared_value=None, amount_due, amount_received=None, payment_method="", user):
    if origin_point.id == destination_point.id:
        raise ApplicationError(_("Le point de départ et le point d'arrivée doivent différer."))
    if consignment_type.nature.is_prohibited:
        raise ApplicationError(_("Cette nature de colis est interdite au transport."))
    if consignment_type.max_weight_kg and weight_kg and weight_kg > consignment_type.max_weight_kg:
        raise ApplicationError(_("Poids supérieur au maximum autorisé pour ce type de colis."))
    due = Decimal(str(amount_due))
    received = Decimal(str(amount_received)) if amount_received is not None else due
    if received < due:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(d)s.") % {"r": received, "d": due})
    parcel = Parcel.objects.create(
        company=company, reference=_parcel_reference(), status=Parcel.Status.REGISTERED,
        origin_point=origin_point, destination_point=destination_point, consignment_type=consignment_type,
        sender_name=sender_name, sender_phone=sender_phone, recipient_name=recipient_name,
        recipient_phone=recipient_phone, recipient_address=recipient_address, description=description,
        weight_kg=weight_kg, quantity=quantity, declared_value=declared_value,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now(), created_by=user)
    _event(parcel, ParcelEvent.Kind.REGISTERED, user=user)
    return parcel


def _points_on_trip(trip):
    return {p.id for p in route_points(trip.route)}


@transaction.atomic
def assign_to_trip(parcel, trip, *, user):
    if parcel.status != Parcel.Status.REGISTERED:
        raise ApplicationError(_("Seul un colis enregistré peut être chargé."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    pts = _points_on_trip(trip)
    if parcel.origin_point_id not in pts or parcel.destination_point_id not in pts:
        raise ApplicationError(_("Le trajet du colis n'est pas desservi par ce voyage."))
    parcel.trip = trip
    parcel.status = Parcel.Status.LOADED
    parcel.loaded_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["trip", "status", "loaded_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.LOADED, trip=trip, user=user)
    return parcel


@transaction.atomic
def mark_arrived(parcel, *, user):
    if parcel.status != Parcel.Status.LOADED:
        raise ApplicationError(_("Seul un colis chargé peut être marqué arrivé."))
    parcel.status = Parcel.Status.ARRIVED
    parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["status", "arrived_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.ARRIVED, trip=parcel.trip, user=user)
    return parcel


@transaction.atomic
def pickup_parcel(parcel, *, picked_up_by, user):
    if parcel.status != Parcel.Status.ARRIVED:
        raise ApplicationError(_("Seul un colis arrivé peut être retiré."))
    if not picked_up_by:
        raise ApplicationError(_("Indiquez le nom de la personne qui retire le colis."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = picked_up_by
    parcel.picked_up_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["status", "picked_up_by", "picked_up_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.PICKED_UP, user=user, note=picked_up_by)
    return parcel


@transaction.atomic
def cancel_parcel(parcel, *, user):
    if parcel.status == Parcel.Status.PICKED_UP:
        raise ApplicationError(_("Un colis retiré ne peut pas être annulé."))
    if parcel.status == Parcel.Status.CANCELLED:
        return parcel
    parcel.status = Parcel.Status.CANCELLED
    parcel.updated_by = user
    parcel.save(update_fields=["status", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.CANCELLED, user=user)
    return parcel
```

- [ ] **Step 2: services/__init__.py**
```python
from .parcel_services import (
    register_parcel, assign_to_trip, mark_arrived, pickup_parcel, cancel_parcel,
)

__all__ = ["register_parcel", "assign_to_trip", "mark_arrived", "pickup_parcel", "cancel_parcel"]
```

- [ ] **Step 3: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 4: Commit**
```bash
git add backend/apps/voyages_consignment/services
git commit -m "feat(voyages-consignment): services colis (enregistrement, chargement, arrivée, retrait)"
```

---

### Task 5: Services bagages

**Files:**
- Create: `backend/apps/voyages_consignment/services/baggage_services.py`
- Modify: `backend/apps/voyages_consignment/services/__init__.py`

**Interfaces:**
- Consumes: `Baggage`, `voyages_booking.Ticket`, `voyages_config.VoyagesSettings`/`ConsignmentType`, séquence.
- Produces:
  - `add_baggage(company, *, ticket, consignment_type=None, description="", weight_kg=None, amount_due=0, amount_received=None, payment_method="", user) -> Baggage`
  - `load_baggage(baggage, *, user) -> Baggage`
  - `deliver_baggage(baggage, *, user) -> Baggage`
  - `cancel_baggage(baggage, *, user) -> Baggage`

- [ ] **Step 1: baggage_services.py**
```python
from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_consignment.models import Baggage
from apps.voyages_config.models import VoyagesSettings


def _tag_number():
    Sequence.objects.get_or_create(
        code="BAG", defaults={"name": "Bagages", "prefix": "BAG", "padding": 5, "reset_yearly": True})
    return next_number("BAG")


def _free_allowance(company):
    s = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
         or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
    return Decimal(str(s.baggage_free_allowance_kg)) if s else Decimal("23")


@transaction.atomic
def add_baggage(company, *, ticket, consignment_type=None, description="", weight_kg=None,
                amount_due=0, amount_received=None, payment_method="", user):
    if ticket.status == "cancelled":
        raise ApplicationError(_("Impossible d'ajouter un bagage à un billet annulé."))
    if consignment_type and consignment_type.max_weight_kg and weight_kg and weight_kg > consignment_type.max_weight_kg:
        raise ApplicationError(_("Poids supérieur au maximum autorisé pour ce type."))
    allowance = _free_allowance(company)
    excess = Decimal("0")
    if weight_kg is not None:
        w = Decimal(str(weight_kg))
        excess = w - allowance if w > allowance else Decimal("0")
    due = Decimal(str(amount_due or 0))
    received = Decimal(str(amount_received)) if amount_received is not None else due
    if received < due:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(d)s.") % {"r": received, "d": due})
    return Baggage.objects.create(
        company=company, tag_number=_tag_number(), ticket=ticket, consignment_type=consignment_type,
        description=description, weight_kg=weight_kg, free_allowance_kg=allowance, excess_kg=excess,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now() if due > 0 else None,
        status=Baggage.Status.CHECKED_IN, created_by=user)


@transaction.atomic
def load_baggage(baggage, *, user):
    if baggage.status != Baggage.Status.CHECKED_IN:
        raise ApplicationError(_("Seul un bagage enregistré peut être chargé."))
    baggage.status = Baggage.Status.LOADED
    baggage.loaded_at = timezone.now()
    baggage.updated_by = user
    baggage.save(update_fields=["status", "loaded_at", "updated_by", "updated_at"])
    return baggage


@transaction.atomic
def deliver_baggage(baggage, *, user):
    if baggage.status != Baggage.Status.LOADED:
        raise ApplicationError(_("Seul un bagage chargé peut être livré."))
    baggage.status = Baggage.Status.DELIVERED
    baggage.delivered_at = timezone.now()
    baggage.updated_by = user
    baggage.save(update_fields=["status", "delivered_at", "updated_by", "updated_at"])
    return baggage


@transaction.atomic
def cancel_baggage(baggage, *, user):
    if baggage.status == Baggage.Status.DELIVERED:
        raise ApplicationError(_("Un bagage livré ne peut pas être annulé."))
    if baggage.status == Baggage.Status.CANCELLED:
        return baggage
    baggage.status = Baggage.Status.CANCELLED
    baggage.updated_by = user
    baggage.save(update_fields=["status", "updated_by", "updated_at"])
    return baggage
```

- [ ] **Step 2: Mettre à jour services/__init__.py**
```python
from .parcel_services import (
    register_parcel, assign_to_trip, mark_arrived, pickup_parcel, cancel_parcel,
)
from .baggage_services import (
    add_baggage, load_baggage, deliver_baggage, cancel_baggage,
)

__all__ = ["register_parcel", "assign_to_trip", "mark_arrived", "pickup_parcel", "cancel_parcel",
           "add_baggage", "load_baggage", "deliver_baggage", "cancel_baggage"]
```

- [ ] **Step 3: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 4: Commit**
```bash
git add backend/apps/voyages_consignment/services
git commit -m "feat(voyages-consignment): services bagages (franchise/excédent, chargement, livraison)"
```

---

### Task 6: API (serializers, views, urls)

**Files:**
- Create: `backend/apps/voyages_consignment/config_api/serializers.py`
- Create: `backend/apps/voyages_consignment/config_api/views.py`
- Modify: `backend/apps/voyages_consignment/urls.py`

**Interfaces:**
- Consumes: services + selectors des tâches 3–5 ; `voyages_config.ServicePoint`/`ConsignmentType`, `voyages_trips.Trip`, `voyages_booking.Ticket`.
- Produces: endpoints listés dans la spec.

- [ ] **Step 1: config_api/serializers.py**
```python
from rest_framework import serializers
from apps.voyages_consignment.models import Parcel, ParcelEvent, Baggage


class ParcelEventRead(serializers.ModelSerializer):
    kind_display = serializers.CharField(source="get_kind_display", read_only=True)

    class Meta:
        model = ParcelEvent
        fields = ["id", "kind", "kind_display", "trip", "note", "created_at"]


class ParcelRead(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    origin_point_name = serializers.CharField(source="origin_point.name", read_only=True, default=None)
    destination_point_name = serializers.CharField(source="destination_point.name", read_only=True, default=None)
    consignment_type_label = serializers.CharField(source="consignment_type.label", read_only=True, default=None)
    events = ParcelEventRead(many=True, read_only=True)

    class Meta:
        model = Parcel
        fields = ["id", "reference", "status", "status_display",
                  "origin_point", "origin_point_name", "destination_point", "destination_point_name",
                  "trip", "sender_name", "sender_phone", "recipient_name", "recipient_phone",
                  "recipient_address", "consignment_type", "consignment_type_label", "description",
                  "weight_kg", "quantity", "declared_value", "amount_due", "amount_received",
                  "change_due", "payment_method", "paid_at", "loaded_at", "arrived_at",
                  "picked_up_at", "picked_up_by", "notes", "created_at", "updated_at", "events"]


class ParcelWrite(serializers.Serializer):
    origin_point_id = serializers.UUIDField()
    destination_point_id = serializers.UUIDField()
    consignment_type_id = serializers.UUIDField()
    sender_name = serializers.CharField(max_length=150)
    sender_phone = serializers.CharField(max_length=30)
    recipient_name = serializers.CharField(max_length=150)
    recipient_phone = serializers.CharField(max_length=30)
    recipient_address = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    description = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg = serializers.DecimalField(max_digits=8, decimal_places=3, required=False, allow_null=True, default=None)
    quantity = serializers.IntegerField(required=False, default=1)
    declared_value = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    amount_due = serializers.DecimalField(max_digits=12, decimal_places=2)
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    payment_method = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")


class ParcelPickupSerializer(serializers.Serializer):
    picked_up_by = serializers.CharField(max_length=150)


class AssignTripSerializer(serializers.Serializer):
    trip_id = serializers.UUIDField()


class BaggageRead(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    passenger_name = serializers.CharField(source="ticket.passenger.full_name", read_only=True, default=None)
    ticket_number = serializers.CharField(source="ticket.number", read_only=True, default=None)
    trip = serializers.UUIDField(source="ticket.trip_id", read_only=True)

    class Meta:
        model = Baggage
        fields = ["id", "tag_number", "ticket", "ticket_number", "passenger_name", "trip",
                  "consignment_type", "description", "weight_kg", "free_allowance_kg", "excess_kg",
                  "amount_due", "amount_received", "change_due", "payment_method", "paid_at",
                  "status", "status_display", "loaded_at", "delivered_at", "notes",
                  "created_at", "updated_at"]


class BaggageWrite(serializers.Serializer):
    ticket_id = serializers.UUIDField()
    consignment_type_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    description = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True, default=None)
    amount_due = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    payment_method = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
```

- [ ] **Step 2: config_api/views.py**
```python
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_config.models import ServicePoint, ConsignmentType
from apps.voyages_trips.models import Trip
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_consignment import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


def _cfg(model, company_id, pk):
    from django.db.models import Q
    return model.objects.filter(is_deleted=False, id=pk).filter(
        Q(company_id=company_id) | Q(company__isnull=True)).first()


class ParcelListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.list_parcels(request.user.company, status=request.query_params.get("status"),
                                    trip_id=request.query_params.get("trip"), q=request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.ParcelRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.ParcelWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        cid = company.id
        origin = _cfg(ServicePoint, cid, d["origin_point_id"])
        dest = _cfg(ServicePoint, cid, d["destination_point_id"])
        ctype = _cfg(ConsignmentType, cid, d["consignment_type_id"])
        if not origin or not dest or not ctype:
            return error_response("Référence introuvable (point ou type).", status_code=404)
        try:
            parcel = services.register_parcel(
                company, origin_point=origin, destination_point=dest, consignment_type=ctype,
                sender_name=d["sender_name"], sender_phone=d["sender_phone"],
                recipient_name=d["recipient_name"], recipient_phone=d["recipient_phone"],
                recipient_address=d["recipient_address"], description=d["description"],
                weight_kg=d["weight_kg"], quantity=d["quantity"], declared_value=d["declared_value"],
                amount_due=d["amount_due"], amount_received=d["amount_received"],
                payment_method=d["payment_method"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelRead(parcel).data)


class ParcelDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        return success_response(S.ParcelRead(p).data) if p else error_response("Introuvable.", status_code=404)

    def delete(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        try:
            services.cancel_parcel(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelPendingView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.pending_for_trip(request.user.company, route_id=request.query_params.get("route"))
        return success_response(S.ParcelRead(qs, many=True).data)


class ParcelAssignTripView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        payload = S.AssignTripSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company,
                                   id=payload.validated_data["trip_id"]).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            p = services.assign_to_trip(p, trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelArrivedView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        try:
            p = services.mark_arrived(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelPickupView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        payload = S.ParcelPickupSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            p = services.pickup_parcel(p, picked_up_by=payload.validated_data["picked_up_by"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelCancelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        try:
            p = services.cancel_parcel(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class BaggageListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.list_baggage(request.user.company, ticket_id=request.query_params.get("ticket"),
                                    trip_id=request.query_params.get("trip"),
                                    status=request.query_params.get("status"))
        return success_response(S.BaggageRead(qs, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.BaggageWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        ticket = Ticket.objects.filter(is_deleted=False, booking__company=company,
                                       id=d["ticket_id"]).first()
        if not ticket:
            return error_response("Billet introuvable.", status_code=404)
        ctype = None
        if d["consignment_type_id"]:
            ctype = _cfg(ConsignmentType, company.id, d["consignment_type_id"])
            if not ctype:
                return error_response("Type introuvable.", status_code=404)
        try:
            bag = services.add_baggage(
                company, ticket=ticket, consignment_type=ctype, description=d["description"],
                weight_kg=d["weight_kg"], amount_due=d["amount_due"], amount_received=d["amount_received"],
                payment_method=d["payment_method"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BaggageRead(bag).data)


class BaggageDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()

    def get(self, request, pk):
        b = self._get(request, pk)
        return success_response(S.BaggageRead(b).data) if b else error_response("Introuvable.", status_code=404)

    def delete(self, request, pk):
        b = self._get(request, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        try:
            services.cancel_baggage(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


class BaggageLoadView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not b:
            return error_response("Introuvable.", status_code=404)
        try:
            b = services.load_baggage(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


class BaggageDeliverView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not b:
            return error_response("Introuvable.", status_code=404)
        try:
            b = services.deliver_baggage(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


class TripManifestView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        m = selectors.trip_manifest(trip)
        return success_response({
            "parcels": S.ParcelRead(m["parcels"], many=True).data,
            "baggage": S.BaggageRead(m["baggage"], many=True).data,
        })
```

- [ ] **Step 3: urls.py**
```python
from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("parcels/", v.ParcelListView.as_view()),
    path("parcels/pending/", v.ParcelPendingView.as_view()),
    path("parcels/<uuid:pk>/", v.ParcelDetailView.as_view()),
    path("parcels/<uuid:pk>/assign-trip/", v.ParcelAssignTripView.as_view()),
    path("parcels/<uuid:pk>/arrived/", v.ParcelArrivedView.as_view()),
    path("parcels/<uuid:pk>/pickup/", v.ParcelPickupView.as_view()),
    path("parcels/<uuid:pk>/cancel/", v.ParcelCancelView.as_view()),
    path("baggage/", v.BaggageListView.as_view()),
    path("baggage/<uuid:pk>/", v.BaggageDetailView.as_view()),
    path("baggage/<uuid:pk>/load/", v.BaggageLoadView.as_view()),
    path("baggage/<uuid:pk>/deliver/", v.BaggageDeliverView.as_view()),
    path("trips/<uuid:trip_id>/manifest/", v.TripManifestView.as_view()),
]
```

- [ ] **Step 4: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_consignment/config_api backend/apps/voyages_consignment/urls.py
git commit -m "feat(voyages-consignment): API colis/bagages/manifeste"
```

---

### Task 7: Smoke backend de bout en bout

**Files:**
- Create (scratchpad, non commité) : `smoke_consignment.py`

- [ ] **Step 1: Écrire le smoke** dans le scratchpad. Il doit :
  1. Créer Company, Town, deux ServicePoints (dont l'origine=gare), Route, FareClass, ConsignmentNature (une normale, une `is_prohibited=True`), ConsignmentType (max_weight_kg=30), VoyagesSettings (`baggage_free_allowance_kg=20`).
  2. Créer un Trip `pending` desservant origine→destination (avec sièges matérialisés via `assignment.materialise_seats` ou insertion directe de TripSeat) ; créer un Passenger + Ticket (via `voyages_booking.services.create_booking` ou création directe d'un Ticket).
  3. `register_parcel` payé 3000 reçu 5000 → assert statut `registered`, `change_due==2000`, un `ParcelEvent(registered)`.
  4. Refus : `register_parcel` avec `amount_received<amount_due` → `ApplicationError` ; avec nature `is_prohibited` → `ApplicationError`.
  5. `assign_to_trip` → assert `loaded`, `trip` défini, event `loaded` ; puis un colis dont la destination n'est pas sur le voyage → `ApplicationError`.
  6. `mark_arrived` → `arrived` ; `pickup_parcel(picked_up_by="Jean")` → `picked_up` ; `pickup_parcel` sans nom → `ApplicationError`.
  7. `add_baggage` poids 25 (franchise 20) supplément 1000 reçu 1000 → assert `excess_kg==5`, `amount_due==1000`, `change_due==0`, `checked_in`.
  8. `load_baggage` → `loaded` ; `deliver_baggage` → `delivered`.
  9. `trip_manifest(trip)` → assert le colis chargé/arrivé et le bagage y figurent.

- [ ] **Step 2: Exécuter le smoke sur base neuve**
Run: `DATABASE_URL="…consignment_test.sqlite3" ../env/bin/python manage.py migrate` puis
`DATABASE_URL="…consignment_test.sqlite3" ../env/bin/python manage.py shell < <scratchpad>/smoke_consignment.py`
Expected: chaque scénario affiche « OK … » ; ligne finale « ALL SMOKE OK ». Corriger tout échec avant de commiter (recréer le fichier sqlite entre les essais).

- [ ] **Step 3: makemigrations --check**
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 4: Commit**
```bash
git commit --allow-empty -m "test(voyages-consignment): smoke backend de bout en bout vérifié"
```

---

### Task 8: Plomberie frontend (modèles + services + api.config)

**Files:**
- Create: `angular/src/_api/models/voyages-consignment.models.ts`
- Create: `angular/src/_api/services/voyages-consignment/parcel.service.ts`
- Create: `angular/src/_api/services/voyages-consignment/baggage.service.ts`
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_CONSIGNMENT`)

**Interfaces:**
- Consumes: endpoints de la tâche 6.
- Produces: interfaces TS `Parcel`, `ParcelEvent`, `Baggage`, `Manifest` ; `ParcelService`, `BaggageService`.

- [ ] **Step 1: api.config.ts** — après le bloc `VOYAGES_BOOKING` :
```typescript
const VCG = `${API_BASE}/voyages/consignment`;

export const VOYAGES_CONSIGNMENT = {
  parcels: `${VCG}/parcels/`,
  parcel: (id: string) => `${VCG}/parcels/${id}/`,
  parcelsPending: `${VCG}/parcels/pending/`,
  parcelAssignTrip: (id: string) => `${VCG}/parcels/${id}/assign-trip/`,
  parcelArrived: (id: string) => `${VCG}/parcels/${id}/arrived/`,
  parcelPickup: (id: string) => `${VCG}/parcels/${id}/pickup/`,
  parcelCancel: (id: string) => `${VCG}/parcels/${id}/cancel/`,
  baggage: `${VCG}/baggage/`,
  baggageItem: (id: string) => `${VCG}/baggage/${id}/`,
  baggageLoad: (id: string) => `${VCG}/baggage/${id}/load/`,
  baggageDeliver: (id: string) => `${VCG}/baggage/${id}/deliver/`,
  manifest: (tripId: string) => `${VCG}/trips/${tripId}/manifest/`,
};
```

- [ ] **Step 2: models/voyages-consignment.models.ts**
```typescript
export interface ParcelEvent {
  id: string; kind: string; kind_display: string; trip: string | null; note: string; created_at: string;
}

export interface Parcel {
  id: string; reference: string; status: string; status_display: string;
  origin_point: string; origin_point_name: string | null;
  destination_point: string; destination_point_name: string | null;
  trip: string | null;
  sender_name: string; sender_phone: string;
  recipient_name: string; recipient_phone: string; recipient_address: string;
  consignment_type: string; consignment_type_label: string | null; description: string;
  weight_kg: string | null; quantity: number; declared_value: string | null;
  amount_due: string; amount_received: string; change_due: string; payment_method: string;
  paid_at: string | null; loaded_at: string | null; arrived_at: string | null;
  picked_up_at: string | null; picked_up_by: string; notes: string;
  created_at: string; updated_at: string; events: ParcelEvent[];
}

export interface Baggage {
  id: string; tag_number: string; ticket: string; ticket_number: string | null;
  passenger_name: string | null; trip: string | null;
  consignment_type: string | null; description: string;
  weight_kg: string | null; free_allowance_kg: string; excess_kg: string;
  amount_due: string; amount_received: string; change_due: string; payment_method: string;
  paid_at: string | null; status: string; status_display: string;
  loaded_at: string | null; delivered_at: string | null; notes: string;
  created_at: string; updated_at: string;
}

export interface Manifest { parcels: Parcel[]; baggage: Baggage[]; }

export interface ParcelCreate {
  origin_point_id: string; destination_point_id: string; consignment_type_id: string;
  sender_name: string; sender_phone: string; recipient_name: string; recipient_phone: string;
  recipient_address?: string; description?: string; weight_kg?: number | null; quantity?: number;
  declared_value?: number | null; amount_due: number; amount_received?: number | null; payment_method?: string;
}

export interface BaggageCreate {
  ticket_id: string; consignment_type_id?: string | null; description?: string;
  weight_kg?: number | null; amount_due?: number; amount_received?: number | null; payment_method?: string;
}
```

- [ ] **Step 3: services/voyages-consignment/parcel.service.ts**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Parcel, ParcelCreate, Manifest } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class ParcelService {
  constructor(private http: HttpClient) {}

  list(params: { status?: string; trip?: string; q?: string } = {}): Observable<Parcel[]> {
    let p = new HttpParams().set('page_size', '500');
    if (params.status) p = p.set('status', params.status);
    if (params.trip) p = p.set('trip', params.trip);
    if (params.q) p = p.set('q', params.q);
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcels, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  pending(): Observable<Parcel[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelsPending).pipe(map(r => r.data ?? r)); }
  get(id: string): Observable<Parcel> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcel(id)).pipe(map(r => r.data ?? r)); }
  create(body: ParcelCreate): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcels, body).pipe(map(r => r.data ?? r)); }
  assignTrip(id: string, trip_id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelAssignTrip(id), { trip_id }).pipe(map(r => r.data ?? r)); }
  arrived(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelArrived(id), {}).pipe(map(r => r.data ?? r)); }
  pickup(id: string, picked_up_by: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelPickup(id), { picked_up_by }).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelCancel(id), {}).pipe(map(r => r.data ?? r)); }
  manifest(tripId: string): Observable<Manifest> { return this.http.get<any>(VOYAGES_CONSIGNMENT.manifest(tripId)).pipe(map(r => r.data ?? r)); }
}
```

- [ ] **Step 4: services/voyages-consignment/baggage.service.ts**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Baggage, BaggageCreate } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class BaggageService {
  constructor(private http: HttpClient) {}

  list(params: { ticket?: string; trip?: string; status?: string } = {}): Observable<Baggage[]> {
    let p = new HttpParams();
    if (params.ticket) p = p.set('ticket', params.ticket);
    if (params.trip) p = p.set('trip', params.trip);
    if (params.status) p = p.set('status', params.status);
    return this.http.get<any>(VOYAGES_CONSIGNMENT.baggage, { params: p }).pipe(map(r => r.data ?? r));
  }
  create(body: BaggageCreate): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggage, body).pipe(map(r => r.data ?? r)); }
  load(id: string): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggageLoad(id), {}).pipe(map(r => r.data ?? r)); }
  deliver(id: string): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggageDeliver(id), {}).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Baggage> { return this.http.delete<any>(VOYAGES_CONSIGNMENT.baggageItem(id)).pipe(map(r => r.data ?? r)); }
}
```

- [ ] **Step 5: Commit**
```bash
git add angular/src/_api/models/voyages-consignment.models.ts angular/src/_api/services/voyages-consignment angular/src/_api/config/api.config.ts
git commit -m "feat(voyages-consignment-fe): modèles + services API"
```

---

### Task 9: Écran Colis (liste + enregistrement + détail/suivi)

**Files:**
- Create: `angular/src/_api/pages/voyages-consignment/voyages-consignment.component.ts` (wrapper `<router-outlet>`)
- Create: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts`
- Create: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html`

**Interfaces:**
- Consumes: `ParcelService`, `Parcel`, `ParcelCreate` ; `ServicePointService` + `ConsignmentTypeService` (voyages-config) pour les listes déroulantes ; `InfoBannerComponent`.

- [ ] **Step 1: voyages-consignment.component.ts** (wrapper, calqué sur `voyages-booking.component.ts`)
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-voyages-consignment',
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule],
})
export class VoyagesConsignmentComponent {}
```

- [ ] **Step 2: parcels.component.ts** — liste + filtres + modale d'enregistrement + modales pickup/détail. Charger points de service et types de colis pour les selects. Icônes `ti`, boutons `btn btn-sm` espacés, dropdown paiement vide.
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { ServicePoint, ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-parcels',
  templateUrl: './parcels.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcgParcelsComponent implements OnInit {
  rows: Parcel[] = []; loading = false; statusFilter = ''; q = '';
  points: ServicePoint[] = []; types: ConsignmentType[] = [];
  form!: FormGroup; saving = false; errorMsg = '';
  detail: Parcel | null = null;
  pickupTarget: Parcel | null = null; pickupName = '';

  constructor(private svc: ParcelService, private spSvc: ServicePointService,
              private ctSvc: ConsignmentTypeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null, Validators.required], destination_point_id: [null, Validators.required],
      consignment_type_id: [null, Validators.required],
      sender_name: [null, Validators.required], sender_phone: [null, Validators.required],
      recipient_name: [null, Validators.required], recipient_phone: [null, Validators.required],
      recipient_address: [''], description: [''], weight_kg: [null], quantity: [1],
      declared_value: [null], amount_due: [null, [Validators.required, Validators.min(0)]],
      amount_received: [null], payment_method: [''],
    });
    this.spSvc.list().subscribe(d => this.points = d);
    this.ctSvc.list().subscribe(d => this.types = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.statusFilter, q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { registered: 'bg-warning', loaded: 'bg-info', arrived: 'bg-primary',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  get change(): number {
    const r = +this.form.value.amount_received || 0; const d = +this.form.value.amount_due || 0;
    return r - d > 0 ? r - d : 0;
  }
  openCreate(): void { this.errorMsg = ''; this.form.reset({ quantity: 1, payment_method: '' }); }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    this.svc.create(this.form.value).subscribe({
      next: () => { this.saving = false; this.reload(); this.close('parcel-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  showDetail(p: Parcel): void { this.svc.get(p.id).subscribe(d => this.detail = d); }
  arrived(p: Parcel): void { this.svc.arrived(p.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  askPickup(p: Parcel): void { this.pickupTarget = p; this.pickupName = ''; }
  doPickup(): void {
    if (!this.pickupTarget || !this.pickupName) return;
    this.svc.pickup(this.pickupTarget.id, this.pickupName).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(p: Parcel): void {
    if (!confirm('Annuler ce colis ?')) return;
    this.svc.cancel(p.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 3: parcels.component.html** — en-tête + bouton « Enregistrer un colis », `app-info-banner`, filtres (statut + recherche), tableau (Référence, De→À, Destinataire, Statut badge, Montant, Actions : Détail / Arrivé (si `loaded`) / Retrait (si `arrived`) / Annuler). Modale d'enregistrement `#parcel-modal` (trajet, expéditeur, destinataire, contenu, encaissement avec monnaie live + dropdown paiement vide `(module trésorerie à venir)`). Modale `#pickup-modal` (nom du retirant). Modale/offcanvas de détail affichant `detail.events` (suivi). Suivre les idiomes de `pages/voyages-booking/bookings/bookings.component.html`.

- [ ] **Step 4: Commit**
```bash
git add angular/src/_api/pages/voyages-consignment/voyages-consignment.component.ts angular/src/_api/pages/voyages-consignment/parcels
git commit -m "feat(voyages-consignment-fe): écran Colis (liste, enregistrement, suivi)"
```

---

### Task 10: Écran Manifeste voyage + écran Bagages

**Files:**
- Create: `angular/src/_api/pages/voyages-consignment/manifest/manifest.component.ts`
- Create: `angular/src/_api/pages/voyages-consignment/manifest/manifest.component.html`
- Create: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts`
- Create: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html`

**Interfaces:**
- Consumes: `ParcelService`, `BaggageService`, `BookingService` (bookableTrips + list bookings), `Manifest`, `Parcel`, `Baggage` ; `InfoBannerComponent`.

- [ ] **Step 1: manifest.component.ts** — choisir un voyage (via `BookingService.bookableTrips()`), afficher colis en attente (via `ParcelService.pending()`, bouton Charger = `assignTrip(id, tripId)`), et le manifeste du voyage (`manifest(tripId)` : colis + bagages) avec actions Arrivé (colis) / Livrer (bagage).
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Parcel, Baggage, Manifest } from '../../../models/voyages-consignment.models';
import { TripOption } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgManifestComponent implements OnInit {
  trips: TripOption[] = []; tripId = '';
  pending: Parcel[] = []; manifest: Manifest | null = null;

  constructor(private parcels: ParcelService, private bags: BaggageService, private booking: BookingService) {}
  ngOnInit(): void { this.booking.bookableTrips().subscribe(t => this.trips = t); }

  onTripChange(): void {
    this.manifest = null; this.pending = [];
    if (!this.tripId) return;
    this.parcels.pending().subscribe(d => this.pending = d);
    this.parcels.manifest(this.tripId).subscribe(d => this.manifest = d);
  }
  load(p: Parcel): void {
    this.parcels.assignTrip(p.id, this.tripId).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  arrived(p: Parcel): void { this.parcels.arrived(p.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  deliver(b: Baggage): void { this.bags.deliver(b.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  loadBag(b: Baggage): void { this.bags.load(b.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
}
```

- [ ] **Step 2: manifest.component.html** — select voyage ; deux cartes : « Colis à charger » (liste `pending`, bouton Charger) et « À bord » (tableau `manifest.parcels` avec Arrivé + tableau `manifest.baggage` avec Charger/Livrer). Badges de statut, icônes `ti`.

- [ ] **Step 3: baggage.component.ts** — rechercher une réservation (via `BookingService.list({q})`), choisir un billet, lister ses bagages (`BaggageService.list({ticket})`), ajouter un bagage (poids → excédent live avec franchise, supplément saisi, encaissement) ; actions Charger/Livrer/Annuler.
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { Baggage } from '../../../models/voyages-consignment.models';
import { Booking, Ticket } from '../../../models/voyages-booking.models';
import { ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-baggage',
  templateUrl: './baggage.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgBaggageComponent implements OnInit {
  q = ''; bookings: Booking[] = []; selectedBooking: Booking | null = null;
  ticketId = ''; rows: Baggage[] = []; types: ConsignmentType[] = [];
  // formulaire d'ajout
  weight: number | null = null; typeId = ''; description = '';
  amountDue = 0; amountReceived: number | null = null; saving = false; errorMsg = '';

  constructor(private svc: BaggageService, private booking: BookingService,
              private ctSvc: ConsignmentTypeService) {}
  ngOnInit(): void { this.ctSvc.list().subscribe(d => this.types = d); }

  search(): void { this.booking.list({ q: this.q }).subscribe(d => this.bookings = d); }
  pickBooking(b: Booking): void { this.selectedBooking = b; this.ticketId = b.tickets[0]?.id ?? ''; this.reload(); }
  reload(): void { if (this.ticketId) this.svc.list({ ticket: this.ticketId }).subscribe(d => this.rows = d); }

  get tickets(): Ticket[] { return this.selectedBooking?.tickets ?? []; }
  add(): void {
    if (!this.ticketId || this.saving) return;
    this.saving = true; this.errorMsg = '';
    this.svc.create({ ticket_id: this.ticketId, consignment_type_id: this.typeId || null,
      description: this.description, weight_kg: this.weight, amount_due: this.amountDue,
      amount_received: this.amountReceived }).subscribe({
      next: () => { this.saving = false; this.weight = null; this.description = ''; this.amountDue = 0; this.amountReceived = null; this.reload(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  loadBag(b: Baggage): void { this.svc.load(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  deliver(b: Baggage): void { this.svc.deliver(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  cancel(b: Baggage): void { if (!confirm('Annuler ce bagage ?')) return; this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
}
```

- [ ] **Step 4: baggage.component.html** — recherche réservation → liste résultats (bouton Choisir) ; une fois la réservation choisie : select du billet (passager), formulaire d'ajout de bagage (type, poids, description, supplément dû, encaissé) + info franchise, tableau des bagages du billet (étiquette, poids, excédent, supplément, statut, actions Charger/Livrer/Annuler). Icônes `ti`, dropdown paiement vide.

- [ ] **Step 5: Commit**
```bash
git add angular/src/_api/pages/voyages-consignment/manifest angular/src/_api/pages/voyages-consignment/baggage
git commit -m "feat(voyages-consignment-fe): écrans Manifeste voyage + Bagages"
```

---

### Task 11: Routes + sidebar + build + seed

**Files:**
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/helpers/routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`
- Modify: `backend/apps/voyages_booking/management/commands/seed_voyageur_express.py`

**Interfaces:**
- Consumes: tous les composants des tâches 9–10.

- [ ] **Step 1: Routes** — dans `pages.routes.ts`, après le groupe `voyages-booking` :
```typescript
            // ── MODULE : Colis & Bagages ──────────────────────────────────────────────
            {
              path: 'voyages-consignment',
              loadComponent: () => import('../../../_api/pages/voyages-consignment/voyages-consignment.component').then(m => m.VoyagesConsignmentComponent),
              children: [
                { path: 'parcels',  loadComponent: () => import('../../../_api/pages/voyages-consignment/parcels/parcels.component').then(m => m.VcgParcelsComponent) },
                { path: 'manifest', loadComponent: () => import('../../../_api/pages/voyages-consignment/manifest/manifest.component').then(m => m.VcgManifestComponent) },
                { path: 'baggage',  loadComponent: () => import('../../../_api/pages/voyages-consignment/baggage/baggage.component').then(m => m.VcgBaggageComponent) },
              ],
            },
```

- [ ] **Step 2: Constantes de route** — dans `core/helpers/routes.ts`, après le bloc Réservations :
```typescript
  // ── Colis & Bagages ──────────────────────────────────────────────────────────
  vcgParcels:  '/voyages-consignment/parcels',
  vcgManifest: '/voyages-consignment/manifest',
  vcgBaggage:  '/voyages-consignment/baggage',
```

- [ ] **Step 3: Sidebar** — dans `sidebar.service.ts`, après le groupe « Réservations » :
```typescript
        // ── MODULE : Colis & Bagages ──────────────────────────────────────────
        {
          menuValue: 'Colis & Bagages',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'package',
          base: 'voyages-consignment',
          subMenus: [
            { menuValue: 'Colis',            route: routes.vcgParcels,  base: 'parcels'  },
            { menuValue: 'Manifeste voyage', route: routes.vcgManifest, base: 'manifest' },
            { menuValue: 'Bagages',          route: routes.vcgBaggage,  base: 'baggage'  },
          ],
        },
```

- [ ] **Step 4: Étendre le seed** `seed_voyageur_express.py` — après la création des réservations, ajouter des colis et bagages. Ajouter en tête les imports :
```python
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment import services as consignment_services
from apps.voyages_config.models import ConsignmentNature, ConsignmentType
```
Puis, juste avant la ligne finale `w(self.style.SUCCESS(...))`, insérer :
```python
        # ── Colis & Bagages ────────────────────────────────────────────────────
        if not Parcel.objects.filter(company=company, is_deleted=False).exists():
            nature, _ = ConsignmentNature.objects.get_or_create(
                company=company, code="STD", defaults={"name": "Marchandise générale"})
            ctype, _ = ConsignmentType.objects.get_or_create(
                company=company, code="CARTON", defaults={"label": "Carton", "nature": nature,
                                                           "max_weight_kg": 30})
            p1 = consignment_services.register_parcel(
                company, origin_point=origin, destination_point=destination, consignment_type=ctype,
                sender_name="Awono Paul", sender_phone="699200001",
                recipient_name="Bella Marie", recipient_phone="699200002",
                description="Carton de vêtements", weight_kg=12, quantity=1,
                amount_due=2500, amount_received=3000, payment_method="Espèces", user=None)
            consignment_services.assign_to_trip(p1, t_out, user=None)
            consignment_services.mark_arrived(p1, user=None)
            consignment_services.register_parcel(
                company, origin_point=origin, destination_point=destination, consignment_type=ctype,
                sender_name="Ngo Lea", sender_phone="699200003",
                recipient_name="Fouda Eric", recipient_phone="699200004",
                description="Colis divers", weight_kg=5, quantity=2,
                amount_due=1500, amount_received=1500, payment_method="Espèces", user=None)
            # Un bagage sur un billet existant du voyage aller
            from apps.voyages_booking.models import Ticket
            tk = Ticket.objects.filter(booking__company=company, trip=t_out, is_deleted=False).first()
            if tk:
                consignment_services.add_baggage(
                    company, ticket=tk, consignment_type=ctype, description="Valise",
                    weight_kg=28, amount_due=2000, amount_received=2000, payment_method="Espèces", user=None)
            w("Colis/Bagages : 2 colis (dont 1 arrivé) + 1 bagage")
```

- [ ] **Step 5: Build**
Run: `cd angular && npx ng build`
Expected: `Application bundle generation complete.` sans erreur référençant voyages-consignment (uniquement les avertissements préexistants file-saver / selector-errors).

- [ ] **Step 6: Commit**
```bash
git add angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts backend/apps/voyages_booking/management/commands/seed_voyageur_express.py
git commit -m "feat(voyages-consignment): routes + sidebar + extension du seed (colis & bagages)"
```

---

## Achèvement

Après la tâche 11, lancer **superpowers:finishing-a-development-branch** : vérifier (`manage.py check`, `makemigrations --check`, migrate base neuve, smoke backend, `ng build`), puis présenter les 4 options pour `feature/voyages-consignment`.
