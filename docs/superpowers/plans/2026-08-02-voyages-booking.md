# Voyages Booking (Réservations) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** End-to-end passenger booking for Voyages: standalone passengers, header+ticket bookings (one-way/round-trip), Hold→Confirm seat lifecycle on `TripSeat`, auto-pricing via `resolve_fare`, payment snapshot to an empty treasury boundary, and a full loyalty earn/redeem loop.

**Architecture:** New Django app `apps/voyages_booking` following the established Voyages kernel (class-based `APIView`, selectors/services packages, `BaseModel`). Angular 21 standalone screens (DreamsPOS, `ti` icons, French) under `pages/voyages-booking/`.

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, Tabler `ti` icons.

## Global Constraints

- New app `apps/voyages_booking` mounted at `/api/v1/voyages-booking/` — router uses `path("voyages/booking/", include("apps.voyages_booking.urls"))`.
- Branch `feature/voyages-booking` from `origin/master`. Forward-only on shared master.
- Commit as **shimi** only — NO `Co-Authored-By: Claude` trailer.
- NO imports of `treasury` or `tiers`. `payment_method` is a plain CharField; its dropdown renders empty, labelled "(module trésorerie à venir)".
- Legacy `ticketing`, `voyage`, `transport_config`, `parcel` stay dormant/untouched.
- French UI copy, `verbose_name`, and error messages. Currency XAF.
- No test framework: verify via `manage.py check`, `makemigrations --check`, fresh-DB migrate, shell smoke, `npx ng build`. Backend Python: `../env/bin/python` from `backend/`.
- Fresh-DB env var used across tasks:
  `DATABASE_URL="sqlite:////private/tmp/claude-501/-Users-zealot-Desktop-brainstore-new-erp/328f24eb-fbb8-44b6-adf2-7750c9e95eda/scratchpad/booking_test.sqlite3"`
- Sequence pattern (copy exactly): `Sequence.objects.get_or_create(code=CODE, defaults={"name": NAME, "prefix": PREFIX, "padding": 5, "reset_yearly": True})` then `next_number(CODE)` → yields `PREFIX/YYYY/00001`.

---

### Task 1: App scaffold + Passenger model + Passenger API

**Files:**
- Create: `backend/apps/voyages_booking/__init__.py` (empty)
- Create: `backend/apps/voyages_booking/apps.py`
- Create: `backend/apps/voyages_booking/models/__init__.py`
- Create: `backend/apps/voyages_booking/models/passenger.py`
- Create: `backend/apps/voyages_booking/selectors/__init__.py`
- Create: `backend/apps/voyages_booking/services/__init__.py`
- Create: `backend/apps/voyages_booking/services/passenger_services.py`
- Create: `backend/apps/voyages_booking/config_api/__init__.py`
- Create: `backend/apps/voyages_booking/config_api/common.py`
- Create: `backend/apps/voyages_booking/config_api/serializers.py`
- Create: `backend/apps/voyages_booking/config_api/views.py`
- Create: `backend/apps/voyages_booking/urls.py`
- Modify: `backend/config/settings/base.py` (add `"apps.voyages_booking"` after `"apps.voyages_pricing"`)
- Modify: `backend/api/v1/router.py` (add booking include)

**Interfaces:**
- Produces: `Passenger` model; `get_or_create_passenger(company, *, id_type, id_number, phone, first_name, last_name, gender="", birth_date=None, email="", notes="", user=None) -> Passenger`; helpers `scope_company_id(request)`, `resolve_company_or_global(request)` in `config_api/common.py`.

- [ ] **Step 1: apps.py**
```python
from django.apps import AppConfig


class VoyagesBookingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.voyages_booking"
    verbose_name = "Voyages — Réservations"
```

- [ ] **Step 2: models/passenger.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Passenger(BaseModel):
    class Gender(models.TextChoices):
        MALE   = "M", _("Masculin")
        FEMALE = "F", _("Féminin")
        OTHER  = "O", _("Autre")

    class IdType(models.TextChoices):
        CNI            = "cni",            _("CNI")
        PASSPORT       = "passport",       _("Passeport")
        DRIVER_LICENSE = "driver_license", _("Permis de conduire")
        OTHER          = "other",          _("Autre")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                   on_delete=models.CASCADE, related_name="voyages_passengers")
    first_name = models.CharField(_("prénom"), max_length=150)
    last_name  = models.CharField(_("nom"), max_length=150)
    gender     = models.CharField(_("genre"), max_length=1, choices=Gender.choices, blank=True)
    birth_date = models.DateField(_("date de naissance"), null=True, blank=True)
    phone      = models.CharField(_("téléphone"), max_length=30, db_index=True)
    email      = models.EmailField(_("email"), blank=True)
    id_type    = models.CharField(_("type de pièce"), max_length=20, choices=IdType.choices, default=IdType.CNI)
    id_number  = models.CharField(_("numéro de pièce"), max_length=100, blank=True)
    notes      = models.CharField(_("notes"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("passager")
        ordering = ["last_name", "first_name"]

    def __str__(self):
        return f"{self.full_name} ({self.phone})"

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()
```

- [ ] **Step 3: models/__init__.py**
```python
from .passenger import Passenger

__all__ = ["Passenger"]
```

- [ ] **Step 4: config_api/common.py** (copy the scope helpers used by voyages_pricing)
```python
from apps.core.responses import error_response


def scope_company_id(request):
    return getattr(request.user, "company_id", None)


def resolve_company_or_global(request):
    """Booking is always company-scoped; require the user to have a company."""
    cid = getattr(request.user, "company_id", None)
    if not cid:
        return None, error_response("Aucune institution associée à l'utilisateur.", status_code=400)
    return request.user.company, None
```

- [ ] **Step 5: services/passenger_services.py**
```python
from django.db import transaction
from apps.voyages_booking.models import Passenger


@transaction.atomic
def get_or_create_passenger(company, *, id_type, id_number, phone,
                            first_name, last_name, gender="", birth_date=None,
                            email="", notes="", user=None):
    match = None
    if id_number:
        match = Passenger.objects.filter(is_deleted=False, company=company,
                                         id_type=id_type, id_number=id_number).first()
    if not match and phone:
        match = Passenger.objects.filter(is_deleted=False, company=company, phone=phone).first()
    if match:
        return match
    return Passenger.objects.create(
        company=company, first_name=first_name, last_name=last_name, gender=gender,
        birth_date=birth_date, phone=phone, email=email, id_type=id_type,
        id_number=id_number, notes=notes, created_by=user)
```

- [ ] **Step 6: services/__init__.py**
```python
from .passenger_services import get_or_create_passenger

__all__ = ["get_or_create_passenger"]
```

- [ ] **Step 7: config_api/serializers.py**
```python
from rest_framework import serializers
from apps.voyages_booking.models import Passenger


class PassengerRead(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    gender_display = serializers.CharField(source="get_gender_display", read_only=True)
    id_type_display = serializers.CharField(source="get_id_type_display", read_only=True)

    class Meta:
        model = Passenger
        fields = ["id", "first_name", "last_name", "full_name", "gender", "gender_display",
                  "birth_date", "phone", "email", "id_type", "id_type_display", "id_number",
                  "notes", "company", "is_active", "created_at", "updated_at"]


class PassengerWrite(serializers.Serializer):
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    gender = serializers.ChoiceField(choices=Passenger.Gender.choices, required=False, allow_blank=True, default="")
    birth_date = serializers.DateField(required=False, allow_null=True, default=None)
    phone = serializers.CharField(max_length=30)
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    id_type = serializers.ChoiceField(choices=Passenger.IdType.choices, required=False, default=Passenger.IdType.CNI)
    id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    notes = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
```

- [ ] **Step 8: selectors/__init__.py** (placeholder now, extended in Task 4)
```python
from apps.voyages_booking.models import Passenger
from django.db.models import Q


def find_passengers(company, q=None):
    qs = Passenger.objects.filter(is_deleted=False, company=company).order_by("last_name", "first_name")
    if q:
        qs = qs.filter(Q(phone__icontains=q) | Q(id_number__icontains=q) |
                       Q(first_name__icontains=q) | Q(last_name__icontains=q))
    return qs


__all__ = ["find_passengers"]
```

- [ ] **Step 9: config_api/views.py**
```python
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_booking.models import Passenger
from apps.voyages_booking import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


class PassengerListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.find_passengers(request.user.company, request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.PassengerRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.PassengerWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        p = services.get_or_create_passenger(company, user=request.user, **payload.validated_data)
        return created_response(S.PassengerRead(p).data)


class PassengerDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return Passenger.objects.filter(is_deleted=False, company_id=scope_company_id(request), id=pk).first()

    def get(self, request, pk):
        p = self._get(request, pk)
        return success_response(S.PassengerRead(p).data) if p else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        payload = S.PassengerWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(p, k, v)
        p.updated_by = request.user
        p.save()
        return success_response(S.PassengerRead(p).data)

    def delete(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        p.is_deleted = True
        p.updated_by = request.user
        p.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()
```

- [ ] **Step 10: urls.py**
```python
from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("passengers/", v.PassengerListView.as_view()),
    path("passengers/<uuid:pk>/", v.PassengerDetailView.as_view()),
]
```

- [ ] **Step 11: Register app in `config/settings/base.py`** — add `"apps.voyages_booking",` on the line immediately after `"apps.voyages_pricing",`.

- [ ] **Step 12: Register router in `api/v1/router.py`** — add after the pricing line:
```python
    path("voyages/booking/", include("apps.voyages_booking.urls")),
```

- [ ] **Step 13: Make migrations**
Run: `../env/bin/python manage.py makemigrations voyages_booking`
Expected: creates `0001_initial` with `Passenger`.

- [ ] **Step 14: Check + fresh-DB migrate**
Run: `../env/bin/python manage.py check` then fresh-DB `migrate` (using the `DATABASE_URL` above).
Expected: check reports only the pre-existing staticfiles warning; migrate applies `voyages_booking.0001_initial` OK.

- [ ] **Step 15: Commit**
```bash
git add backend/apps/voyages_booking backend/config/settings/base.py backend/api/v1/router.py
git commit -m "feat(voyages-booking): app scaffold + Passenger model & API"
```

---

### Task 2: Booking, Ticket & Loyalty models

**Files:**
- Create: `backend/apps/voyages_booking/models/booking.py`
- Create: `backend/apps/voyages_booking/models/loyalty.py`
- Modify: `backend/apps/voyages_booking/models/__init__.py`

**Interfaces:**
- Produces: `Booking`, `Ticket`, `LoyaltyAccount`, `LoyaltyMovement` models with the fields/choices below. `Booking.tickets` reverse accessor; `LoyaltyAccount.movements`.

- [ ] **Step 1: models/booking.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Booking(BaseModel):
    class Status(models.TextChoices):
        HELD      = "held",      _("Réservé")
        CONFIRMED = "confirmed", _("Confirmé")
        BOARDED   = "boarded",   _("Embarqué")
        CANCELLED = "cancelled", _("Annulé")
        EXPIRED   = "expired",   _("Expiré")
        NO_SHOW   = "no_show",   _("Non présenté")

    class TripType(models.TextChoices):
        ONE_WAY    = "one_way",    _("Aller simple")
        ROUND_TRIP = "round_trip", _("Aller-retour")

    class Channel(models.TextChoices):
        COUNTER = "counter", _("Guichet")
        ONLINE  = "online",  _("En ligne")

    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_bookings")
    reference      = models.CharField(_("référence"), max_length=40, blank=True)
    status         = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.HELD)
    trip_type      = models.CharField(_("type de voyage"), max_length=12, choices=TripType.choices, default=TripType.ONE_WAY)
    outbound_trip  = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage aller"),
                                        on_delete=models.PROTECT, related_name="bookings_outbound")
    return_trip    = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage retour"),
                                        on_delete=models.PROTECT, null=True, blank=True, related_name="bookings_return")
    buyer          = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("acheteur"),
                                        on_delete=models.PROTECT, related_name="bookings_bought")
    amount_due     = models.DecimalField(_("montant dû"), max_digits=12, decimal_places=2, default=0)
    amount_paid    = models.DecimalField(_("montant payé"), max_digits=12, decimal_places=2, default=0)
    payment_method = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    held_until     = models.DateTimeField(_("réservé jusqu'à"), null=True, blank=True)
    channel        = models.CharField(_("canal"), max_length=10, choices=Channel.choices, default=Channel.COUNTER)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("réservation")
        ordering = ["-created_at"]

    def __str__(self):
        return self.reference or str(self.id)


class Ticket(BaseModel):
    class Direction(models.TextChoices):
        OUTBOUND = "outbound", _("Aller")
        RETURN   = "return",   _("Retour")

    class Status(models.TextChoices):
        HELD      = "held",      _("Réservé")
        SOLD      = "sold",      _("Vendu")
        BOARDED   = "boarded",   _("Embarqué")
        CANCELLED = "cancelled", _("Annulé")

    booking    = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation"),
                                    on_delete=models.CASCADE, related_name="tickets")
    number     = models.CharField(_("numéro"), max_length=40, blank=True)
    passenger  = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("passager"),
                                    on_delete=models.PROTECT, related_name="tickets")
    trip       = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                    on_delete=models.PROTECT, related_name="tickets")
    trip_seat  = models.ForeignKey("voyages_trips.TripSeat", verbose_name=_("siège"),
                                    on_delete=models.PROTECT, related_name="tickets")
    direction  = models.CharField(_("sens"), max_length=10, choices=Direction.choices, default=Direction.OUTBOUND)
    return_of  = models.ForeignKey("self", verbose_name=_("retour de"),
                                    on_delete=models.SET_NULL, null=True, blank=True, related_name="return_tickets")
    fare       = models.ForeignKey("voyages_pricing.Fare", verbose_name=_("tarif"),
                                    on_delete=models.SET_NULL, null=True, blank=True, related_name="tickets")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                    on_delete=models.PROTECT, related_name="tickets")
    amount     = models.DecimalField(_("montant"), max_digits=12, decimal_places=2, default=0)
    is_reward  = models.BooleanField(_("billet récompense"), default=False)
    status     = models.CharField(_("statut"), max_length=10, choices=Status.choices, default=Status.HELD)
    boarded_at = models.DateTimeField(_("embarqué à"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("billet")
        ordering = ["booking", "direction"]

    def __str__(self):
        return self.number or str(self.id)
```

- [ ] **Step 2: models/loyalty.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class LoyaltyAccount(BaseModel):
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_loyalty_accounts")
    passenger      = models.OneToOneField("voyages_booking.Passenger", verbose_name=_("passager"),
                                           on_delete=models.CASCADE, related_name="loyalty_account")
    points_balance = models.IntegerField(_("solde de points"), default=0)
    lifetime_points = models.IntegerField(_("points cumulés"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name = _("compte fidélité")
        unique_together = [("company", "passenger")]

    def __str__(self):
        return f"{self.passenger_id}: {self.points_balance} pts"


class LoyaltyMovement(BaseModel):
    class Kind(models.TextChoices):
        EARN     = "earn",     _("Gain")
        REVERSAL = "reversal", _("Annulation")
        REDEEM   = "redeem",   _("Utilisation")

    account = models.ForeignKey("voyages_booking.LoyaltyAccount", verbose_name=_("compte"),
                                on_delete=models.CASCADE, related_name="movements")
    kind    = models.CharField(_("type"), max_length=10, choices=Kind.choices)
    points  = models.IntegerField(_("points"))
    booking = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation"),
                                on_delete=models.SET_NULL, null=True, blank=True, related_name="loyalty_movements")
    rule    = models.ForeignKey("voyages_config.LoyaltyRule", verbose_name=_("règle"),
                                on_delete=models.SET_NULL, null=True, blank=True, related_name="movements")
    note    = models.CharField(_("note"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("mouvement fidélité")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.get_kind_display()} {self.points:+d}"
```

- [ ] **Step 3: Update models/__init__.py**
```python
from .passenger import Passenger
from .booking import Booking, Ticket
from .loyalty import LoyaltyAccount, LoyaltyMovement

__all__ = ["Passenger", "Booking", "Ticket", "LoyaltyAccount", "LoyaltyMovement"]
```

- [ ] **Step 4: Make migrations**
Run: `../env/bin/python manage.py makemigrations voyages_booking`
Expected: `0002_*` adding Booking, Ticket, LoyaltyAccount, LoyaltyMovement.

- [ ] **Step 5: Check + fresh-DB migrate**
Run: `../env/bin/python manage.py check` then fresh-DB migrate.
Expected: no reverse-accessor clashes (related_names are booking-specific); migrate OK.

- [ ] **Step 6: Commit**
```bash
git add backend/apps/voyages_booking/models
git commit -m "feat(voyages-booking): Booking, Ticket & Loyalty models"
```

---

### Task 3: Loyalty services

**Files:**
- Create: `backend/apps/voyages_booking/services/loyalty_services.py`
- Modify: `backend/apps/voyages_booking/services/__init__.py`

**Interfaces:**
- Consumes: `LoyaltyAccount`, `LoyaltyMovement`, `Booking`, `Ticket`; `voyages_config.LoyaltyRule`.
- Produces: `accrue(booking, user=None)`, `reverse(booking, user=None)`, `redeem_reward(booking, passenger, ticket, user=None) -> None` (raises `ApplicationError` if under threshold), `applicable_rule(company)`, `account_for(passenger, user=None) -> LoyaltyAccount`.

- [ ] **Step 1: loyalty_services.py**
```python
from datetime import date as _date
from django.db import transaction
from django.db.models import Q
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import LoyaltyAccount, LoyaltyMovement, Booking
from apps.voyages_config.models import LoyaltyRule


def applicable_rule(company, on_date=None):
    on_date = on_date or _date.today()
    qs = (LoyaltyRule.objects.filter(is_deleted=False, is_active=True)
          .filter(Q(company=company) | Q(company__isnull=True))
          .filter(Q(valid_from__isnull=True) | Q(valid_from__lte=on_date))
          .filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date)))
    rows = sorted(qs, key=lambda r: (r.company_id is None,))
    return rows[0] if rows else None


def account_for(passenger, user=None):
    acc = LoyaltyAccount.objects.filter(is_deleted=False, passenger=passenger).first()
    if not acc:
        acc = LoyaltyAccount.objects.create(company=passenger.company, passenger=passenger, created_by=user)
    return acc


def _points_for(rule, trip_type):
    if not rule:
        return 0
    return rule.points_per_round_trip if trip_type == Booking.TripType.ROUND_TRIP else rule.points_per_one_way


@transaction.atomic
def accrue(booking, user=None):
    if booking.loyalty_movements.filter(kind=LoyaltyMovement.Kind.EARN, is_deleted=False).exists():
        return  # idempotent — already earned
    rule = applicable_rule(booking.company)
    pts = _points_for(rule, booking.trip_type)
    if pts <= 0:
        return
    # one accrual per traveler (outbound tickets only, skip reward tickets)
    travelers = booking.tickets.filter(is_deleted=False, is_reward=False,
                                       direction="outbound")
    for t in travelers:
        acc = account_for(t.passenger, user=user)
        acc.points_balance += pts
        acc.lifetime_points += pts
        acc.updated_by = user
        acc.save(update_fields=["points_balance", "lifetime_points", "updated_by", "updated_at"])
        LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.EARN, points=pts,
                                       booking=booking, rule=rule, created_by=user,
                                       note=f"{booking.reference}")


@transaction.atomic
def reverse(booking, user=None):
    earns = booking.loyalty_movements.filter(kind=LoyaltyMovement.Kind.EARN, is_deleted=False)
    for mv in earns:
        acc = mv.account
        acc.points_balance -= mv.points
        acc.lifetime_points -= mv.points
        acc.updated_by = user
        acc.save(update_fields=["points_balance", "lifetime_points", "updated_by", "updated_at"])
        LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.REVERSAL,
                                       points=-mv.points, booking=booking, rule=mv.rule,
                                       created_by=user, note=f"Annulation {booking.reference}")


@transaction.atomic
def redeem_reward(booking, passenger, ticket, user=None):
    rule = applicable_rule(booking.company)
    if not rule:
        raise ApplicationError(_("Aucune règle de fidélité active."))
    acc = account_for(passenger, user=user)
    if acc.points_balance < rule.reward_threshold:
        raise ApplicationError(_("Solde de points insuffisant pour une récompense."))
    acc.points_balance -= rule.reward_threshold
    acc.updated_by = user
    acc.save(update_fields=["points_balance", "updated_by", "updated_at"])
    LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.REDEEM,
                                   points=-rule.reward_threshold, booking=booking, rule=rule,
                                   created_by=user, note=rule.reward_label)
    ticket.is_reward = True
    ticket.amount = 0
    ticket.updated_by = user
    ticket.save(update_fields=["is_reward", "amount", "updated_by", "updated_at"])
```

- [ ] **Step 2: Update services/__init__.py**
```python
from .passenger_services import get_or_create_passenger
from . import loyalty_services

__all__ = ["get_or_create_passenger", "loyalty_services"]
```

- [ ] **Step 3: Check**
Run: `../env/bin/python manage.py check`
Expected: only the staticfiles warning.

- [ ] **Step 4: Commit**
```bash
git add backend/apps/voyages_booking/services
git commit -m "feat(voyages-booking): loyalty accrual/reversal/redemption services"
```

---

### Task 4: Booking selectors

**Files:**
- Modify: `backend/apps/voyages_booking/selectors/__init__.py`

**Interfaces:**
- Consumes: `Booking`, `Ticket`, `Passenger`, `LoyaltyAccount`; `voyages_trips.Trip`, `voyages_trips.TripSeat`.
- Produces: `bookable_trips(company)`, `seat_map(trip)`, `list_bookings(company, status=None, trip_id=None, q=None)`, `booking_detail(company, pk)`, `loyalty_view(passenger)` alongside existing `find_passengers`.

- [ ] **Step 1: Replace selectors/__init__.py**
```python
from django.utils import timezone
from django.db.models import Q
from apps.voyages_booking.models import Passenger, Booking, LoyaltyAccount
from apps.voyages_trips.models import Trip, TripSeat

_PRE_DEPARTURE = ["draft", "pending"]


def find_passengers(company, q=None):
    qs = Passenger.objects.filter(is_deleted=False, company=company).order_by("last_name", "first_name")
    if q:
        qs = qs.filter(Q(phone__icontains=q) | Q(id_number__icontains=q) |
                       Q(first_name__icontains=q) | Q(last_name__icontains=q))
    return qs


def bookable_trips(company):
    return (Trip.objects.filter(is_deleted=False, company=company,
                                status__in=_PRE_DEPARTURE,
                                scheduled_departure__gte=timezone.now())
            .filter(seats__isnull=False).distinct()
            .select_related("route", "origin", "destination", "fare_class")
            .order_by("scheduled_departure"))


def seat_map(trip):
    return (TripSeat.objects.filter(is_deleted=False, trip=trip)
            .order_by("row", "column"))


def list_bookings(company, status=None, trip_id=None, q=None):
    qs = (Booking.objects.filter(is_deleted=False, company=company)
          .select_related("outbound_trip", "return_trip", "buyer")
          .order_by("-created_at"))
    if status:
        qs = qs.filter(status=status)
    if trip_id:
        qs = qs.filter(Q(outbound_trip_id=trip_id) | Q(return_trip_id=trip_id))
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(buyer__phone__icontains=q) |
                       Q(buyer__last_name__icontains=q))
    return qs


def booking_detail(company, pk):
    return (Booking.objects.filter(is_deleted=False, company=company, id=pk)
            .select_related("outbound_trip", "return_trip", "buyer")
            .prefetch_related("tickets__passenger", "tickets__trip_seat", "tickets__fare_class")
            .first())


def loyalty_view(passenger):
    acc = LoyaltyAccount.objects.filter(is_deleted=False, passenger=passenger).first()
    movements = acc.movements.filter(is_deleted=False).select_related("rule")[:100] if acc else []
    return acc, movements


__all__ = ["find_passengers", "bookable_trips", "seat_map",
           "list_bookings", "booking_detail", "loyalty_view"]
```

- [ ] **Step 2: Check**
Run: `../env/bin/python manage.py check`
Expected: only the staticfiles warning.

- [ ] **Step 3: Commit**
```bash
git add backend/apps/voyages_booking/selectors
git commit -m "feat(voyages-booking): booking selectors"
```

---

### Task 5: Booking services + expire-holds command

**Files:**
- Create: `backend/apps/voyages_booking/services/booking_services.py`
- Modify: `backend/apps/voyages_booking/services/__init__.py`
- Create: `backend/apps/voyages_booking/management/__init__.py` (empty)
- Create: `backend/apps/voyages_booking/management/commands/__init__.py` (empty)
- Create: `backend/apps/voyages_booking/management/commands/expire_booking_holds.py`

**Interfaces:**
- Consumes: `Booking`, `Ticket`, `TripSeat`, `Passenger`, `get_or_create_passenger`, `loyalty_services`; `voyages_pricing.selectors.fare_selectors.resolve_fare`, `apps.core.services.sequence_service.next_number`, `apps.core.models.Sequence`.
- Produces:
  - `create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items, user) -> Booking`
    where `items` is a list of dicts:
    `{"passenger": <spec>, "outbound_seat_id": UUID, "return_seat_id": UUID|None}` and each `<spec>` is a dict of passenger fields OR `{"id": UUID}`.
  - `confirm_booking(booking, *, payment_method, amount_paid, user) -> Booking`
  - `cancel_booking(booking, *, user) -> Booking`
  - `board_ticket(ticket, *, user) -> Ticket`
  - `mark_no_show(booking, *, user) -> Booking`
  - `expire_holds(company=None) -> int`

- [ ] **Step 1: booking_services.py**
```python
from datetime import timedelta
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_booking.models import Booking, Ticket, Passenger
from apps.voyages_booking.services.passenger_services import get_or_create_passenger
from apps.voyages_booking.services import loyalty_services
from apps.voyages_trips.models import TripSeat, Trip
from apps.voyages_config.models import VoyagesSettings
from apps.voyages_pricing.selectors.fare_selectors import resolve_fare

_PRE_DEPARTURE = ["draft", "pending"]


def _booking_reference():
    Sequence.objects.get_or_create(
        code="BOOK", defaults={"name": "Réservations", "prefix": "BOOK", "padding": 5, "reset_yearly": True})
    return next_number("BOOK")


def _ticket_number():
    Sequence.objects.get_or_create(
        code="TKT", defaults={"name": "Billets", "prefix": "TKT", "padding": 5, "reset_yearly": True})
    return next_number("TKT")


def _hold_window_hours(company):
    s = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
         or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
    return s.ticket_expiry_days * 24 if s else 24


def _assert_bookable(trip):
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert à la réservation."))
    if not TripSeat.objects.filter(is_deleted=False, trip=trip).exists():
        raise ApplicationError(_("Les sièges de ce voyage ne sont pas encore générés."))


def _resolve_passenger(company, spec, user):
    if spec.get("id"):
        p = Passenger.objects.filter(is_deleted=False, company=company, id=spec["id"]).first()
        if not p:
            raise ApplicationError(_("Passager introuvable."))
        return p
    return get_or_create_passenger(
        company, user=user,
        id_type=spec.get("id_type", "cni"), id_number=spec.get("id_number", ""),
        phone=spec.get("phone", ""), first_name=spec.get("first_name", ""),
        last_name=spec.get("last_name", ""), gender=spec.get("gender", ""),
        birth_date=spec.get("birth_date"), email=spec.get("email", ""))


def _lock_seat(trip, seat_id):
    seat = (TripSeat.objects.select_for_update()
            .filter(is_deleted=False, trip=trip, id=seat_id).first())
    if not seat:
        raise ApplicationError(_("Siège introuvable pour ce voyage."))
    if seat.status != TripSeat.Status.AVAILABLE:
        raise ApplicationError(_("Siège déjà pris."))
    return seat


def _price(company, trip, seat_trip_type):
    fare = resolve_fare(company, trip.route, trip.origin, trip.destination,
                        trip.fare_class, trip_type=seat_trip_type)
    if not fare:
        raise ApplicationError(
            _("Aucun tarif défini pour %(o)s → %(d)s (%(c)s, %(t)s).") % {
                "o": trip.origin.name, "d": trip.destination.name,
                "c": trip.fare_class.name, "t": seat_trip_type})
    return fare


@transaction.atomic
def create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items, user):
    if not items:
        raise ApplicationError(_("Aucun passager sélectionné."))
    _assert_bookable(outbound_trip)
    is_round = trip_type == Booking.TripType.ROUND_TRIP
    if is_round:
        if not return_trip:
            raise ApplicationError(_("Le voyage retour est requis pour un aller-retour."))
        _assert_bookable(return_trip)

    buyer = _resolve_passenger(company, buyer_spec, user)
    booking = Booking.objects.create(
        company=company, reference=_booking_reference(), status=Booking.Status.HELD,
        trip_type=trip_type, outbound_trip=outbound_trip, return_trip=return_trip if is_round else None,
        buyer=buyer, held_until=timezone.now() + timedelta(hours=_hold_window_hours(company)),
        created_by=user)

    # The round-trip fare on the outbound route covers the whole journey; the
    # return leg is a seat allocation priced at 0 (no separate return fare required).
    out_fare = _price(company, outbound_trip, trip_type)
    total = 0
    for item in items:
        passenger = _resolve_passenger(company, item["passenger"], user)
        out_seat = _lock_seat(outbound_trip, item["outbound_seat_id"])
        out_ticket = Ticket.objects.create(
            booking=booking, number=_ticket_number(), passenger=passenger, trip=outbound_trip,
            trip_seat=out_seat, direction=Ticket.Direction.OUTBOUND, fare=out_fare,
            fare_class=outbound_trip.fare_class, amount=out_fare.amount, status=Ticket.Status.HELD,
            created_by=user)
        out_seat.status = TripSeat.Status.HELD
        out_seat.held_until = booking.held_until
        out_seat.booking_id = booking.id
        out_seat.updated_by = user
        out_seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])
        total += out_fare.amount
        if is_round:
            if not item.get("return_seat_id"):
                raise ApplicationError(_("Un siège retour est requis pour chaque passager."))
            ret_seat = _lock_seat(return_trip, item["return_seat_id"])
            Ticket.objects.create(
                booking=booking, number=_ticket_number(), passenger=passenger, trip=return_trip,
                trip_seat=ret_seat, direction=Ticket.Direction.RETURN, return_of=out_ticket,
                fare=None, fare_class=return_trip.fare_class, amount=0, status=Ticket.Status.HELD,
                created_by=user)
            ret_seat.status = TripSeat.Status.HELD
            ret_seat.held_until = booking.held_until
            ret_seat.booking_id = booking.id
            ret_seat.updated_by = user
            ret_seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])

    booking.amount_due = total
    booking.updated_by = user
    booking.save(update_fields=["amount_due", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def confirm_booking(booking, *, payment_method, amount_paid, user):
    if booking.status != Booking.Status.HELD:
        raise ApplicationError(_("Seule une réservation en attente peut être confirmée."))
    if booking.held_until and booking.held_until < timezone.now():
        raise ApplicationError(_("La réservation a expiré."))
    for t in booking.tickets.filter(is_deleted=False):
        seat = t.trip_seat
        seat.status = TripSeat.Status.SOLD
        seat.updated_by = user
        seat.save(update_fields=["status", "updated_by", "updated_at"])
        t.status = Ticket.Status.SOLD
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
    booking.status = Booking.Status.CONFIRMED
    booking.payment_method = payment_method or ""
    booking.amount_paid = amount_paid or booking.amount_due
    booking.held_until = None
    booking.updated_by = user
    booking.save(update_fields=["status", "payment_method", "amount_paid", "held_until", "updated_by", "updated_at"])
    loyalty_services.accrue(booking, user=user)
    return booking


@transaction.atomic
def cancel_booking(booking, *, user):
    if booking.status in (Booking.Status.CANCELLED, Booking.Status.EXPIRED):
        return booking
    was_confirmed = booking.status in (Booking.Status.CONFIRMED, Booking.Status.BOARDED)
    for t in booking.tickets.filter(is_deleted=False):
        seat = t.trip_seat
        seat.status = TripSeat.Status.AVAILABLE
        seat.held_until = None
        seat.booking_id = None
        seat.updated_by = user
        seat.save(update_fields=["status", "held_until", "booking_id", "updated_by", "updated_at"])
        t.status = Ticket.Status.CANCELLED
        t.updated_by = user
        t.save(update_fields=["status", "updated_by", "updated_at"])
    booking.status = Booking.Status.CANCELLED
    booking.updated_by = user
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    if was_confirmed:
        loyalty_services.reverse(booking, user=user)
    return booking


@transaction.atomic
def board_ticket(ticket, *, user):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être embarqué."))
    ticket.status = Ticket.Status.BOARDED
    ticket.boarded_at = timezone.now()
    ticket.updated_by = user
    ticket.save(update_fields=["status", "boarded_at", "updated_by", "updated_at"])
    seat = ticket.trip_seat
    seat.updated_by = user
    seat.save(update_fields=["updated_by", "updated_at"])
    if not ticket.booking.tickets.filter(is_deleted=False).exclude(status=Ticket.Status.BOARDED).exists():
        ticket.booking.status = Booking.Status.BOARDED
        ticket.booking.updated_by = user
        ticket.booking.save(update_fields=["status", "updated_by", "updated_at"])
    return ticket


@transaction.atomic
def mark_no_show(booking, *, user):
    if booking.status not in (Booking.Status.CONFIRMED,):
        raise ApplicationError(_("Seule une réservation confirmée peut être marquée non présentée."))
    booking.status = Booking.Status.NO_SHOW
    booking.updated_by = user
    booking.save(update_fields=["status", "updated_by", "updated_at"])
    return booking


@transaction.atomic
def expire_holds(company=None):
    now = timezone.now()
    qs = Booking.objects.filter(is_deleted=False, status=Booking.Status.HELD, held_until__lt=now)
    if company:
        qs = qs.filter(company=company)
    count = 0
    for booking in qs.select_for_update():
        for t in booking.tickets.filter(is_deleted=False):
            seat = t.trip_seat
            seat.status = TripSeat.Status.AVAILABLE
            seat.held_until = None
            seat.booking_id = None
            seat.save(update_fields=["status", "held_until", "booking_id", "updated_at"])
            t.status = Ticket.Status.CANCELLED
            t.save(update_fields=["status", "updated_at"])
        booking.status = Booking.Status.EXPIRED
        booking.save(update_fields=["status", "updated_at"])
        count += 1
    return count
```

- [ ] **Step 2: Update services/__init__.py**
```python
from .passenger_services import get_or_create_passenger
from . import loyalty_services
from .booking_services import (
    create_booking, confirm_booking, cancel_booking,
    board_ticket, mark_no_show, expire_holds,
)

__all__ = ["get_or_create_passenger", "loyalty_services",
           "create_booking", "confirm_booking", "cancel_booking",
           "board_ticket", "mark_no_show", "expire_holds"]
```

- [ ] **Step 3: management/commands/expire_booking_holds.py**
```python
from django.core.management.base import BaseCommand
from apps.voyages_booking.services import expire_holds


class Command(BaseCommand):
    help = "Libère les sièges des réservations en attente expirées."

    def handle(self, *args, **options):
        n = expire_holds()
        self.stdout.write(self.style.SUCCESS(f"{n} réservation(s) expirée(s)."))
```

- [ ] **Step 4: Check**
Run: `../env/bin/python manage.py check`
Expected: only the staticfiles warning.

- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_booking/services backend/apps/voyages_booking/management
git commit -m "feat(voyages-booking): booking lifecycle services + expire-holds command"
```

---

### Task 6: Booking/Ticket/Loyalty serializers, views & URLs

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/serializers.py`
- Modify: `backend/apps/voyages_booking/config_api/views.py`
- Modify: `backend/apps/voyages_booking/urls.py`

**Interfaces:**
- Consumes: all services + selectors from Tasks 3–5.
- Produces: REST endpoints listed in the spec's API section.

- [ ] **Step 1: Append serializers to config_api/serializers.py**
```python
from apps.voyages_booking.models import Booking, Ticket, LoyaltyAccount, LoyaltyMovement


class SeatCellSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    seat_number = serializers.CharField()
    row = serializers.IntegerField()
    column = serializers.IntegerField()
    seat_type = serializers.CharField()
    status = serializers.CharField()


class TripOptionSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    number = serializers.CharField()
    route_code = serializers.CharField(source="route.code", default=None)
    origin_name = serializers.CharField(source="origin.name", default=None)
    destination_name = serializers.CharField(source="destination.name", default=None)
    fare_class = serializers.UUIDField(source="fare_class_id")
    fare_class_name = serializers.CharField(source="fare_class.name", default=None)
    scheduled_departure = serializers.DateTimeField()


class TicketRead(serializers.ModelSerializer):
    passenger_name = serializers.CharField(source="passenger.full_name", read_only=True)
    seat_number = serializers.CharField(source="trip_seat.seat_number", read_only=True, default=None)
    direction_display = serializers.CharField(source="get_direction_display", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Ticket
        fields = ["id", "number", "passenger", "passenger_name", "trip", "trip_seat", "seat_number",
                  "direction", "direction_display", "return_of", "fare", "fare_class", "amount",
                  "is_reward", "status", "status_display", "boarded_at"]


class BookingRead(serializers.ModelSerializer):
    buyer_name = serializers.CharField(source="buyer.full_name", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    trip_type_display = serializers.CharField(source="get_trip_type_display", read_only=True)
    tickets = TicketRead(many=True, read_only=True)

    class Meta:
        model = Booking
        fields = ["id", "reference", "status", "status_display", "trip_type", "trip_type_display",
                  "outbound_trip", "return_trip", "buyer", "buyer_name", "amount_due", "amount_paid",
                  "payment_method", "held_until", "channel", "notes", "created_at", "updated_at", "tickets"]


class BookingItemSerializer(serializers.Serializer):
    passenger = serializers.DictField()
    outbound_seat_id = serializers.UUIDField()
    return_seat_id = serializers.UUIDField(required=False, allow_null=True, default=None)


class BookingCreateSerializer(serializers.Serializer):
    trip_type = serializers.ChoiceField(choices=Booking.TripType.choices, default=Booking.TripType.ONE_WAY)
    outbound_trip_id = serializers.UUIDField()
    return_trip_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    buyer = serializers.DictField()
    items = BookingItemSerializer(many=True)


class ConfirmSerializer(serializers.Serializer):
    payment_method = serializers.CharField(required=False, allow_blank=True, default="")
    amount_paid = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)


class RedeemSerializer(serializers.Serializer):
    passenger_id = serializers.UUIDField()
    ticket_id = serializers.UUIDField()


class LoyaltyMovementRead(serializers.ModelSerializer):
    kind_display = serializers.CharField(source="get_kind_display", read_only=True)

    class Meta:
        model = LoyaltyMovement
        fields = ["id", "kind", "kind_display", "points", "booking", "note", "created_at"]


class LoyaltyAccountRead(serializers.ModelSerializer):
    class Meta:
        model = LoyaltyAccount
        fields = ["id", "passenger", "points_balance", "lifetime_points"]
```

- [ ] **Step 2: Append views to config_api/views.py**
```python
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import Booking, Ticket
from apps.voyages_trips.models import Trip


def _trip(company, trip_id):
    return Trip.objects.filter(is_deleted=False, company=company, id=trip_id).first()


class BookableTripsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        trips = selectors.bookable_trips(request.user.company)
        return success_response(S.TripOptionSerializer(trips, many=True).data)


class TripSeatMapView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.SeatCellSerializer(selectors.seat_map(trip), many=True).data)


class BookingListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.list_bookings(
            request.user.company, status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"), q=request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.BookingRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.BookingCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        outbound = _trip(company, d["outbound_trip_id"])
        if not outbound:
            return error_response("Voyage aller introuvable.", status_code=404)
        return_trip = _trip(company, d["return_trip_id"]) if d.get("return_trip_id") else None
        try:
            booking = services.create_booking(
                company, trip_type=d["trip_type"], outbound_trip=outbound, return_trip=return_trip,
                buyer_spec=d["buyer"], items=d["items"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BookingRead(booking).data)


class BookingDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        return success_response(S.BookingRead(b).data) if b else error_response("Introuvable.", status_code=404)

    def delete(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingConfirmView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        payload = S.ConfirmSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            b = services.confirm_booking(b, payment_method=payload.validated_data["payment_method"],
                                         amount_paid=payload.validated_data["amount_paid"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BookingRead(b).data)


class BookingCancelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingNoShowView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        try:
            b = services.mark_no_show(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BookingRead(b).data)


class BookingRedeemView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        payload = S.RedeemSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        passenger = Passenger.objects.filter(is_deleted=False, company=request.user.company,
                                             id=payload.validated_data["passenger_id"]).first()
        ticket = Ticket.objects.filter(is_deleted=False, booking=b,
                                       id=payload.validated_data["ticket_id"]).first()
        if not passenger or not ticket:
            return error_response("Passager ou billet introuvable.", status_code=404)
        try:
            services.loyalty_services.redeem_reward(b, passenger, ticket, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        b.amount_due = sum(t.amount for t in b.tickets.filter(is_deleted=False))
        b.updated_by = request.user
        b.save(update_fields=["amount_due", "updated_by", "updated_at"])
        return success_response(S.BookingRead(b).data)


class TicketBoardView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        t = Ticket.objects.filter(is_deleted=False, booking__company=request.user.company, id=pk).first()
        if not t:
            return error_response("Billet introuvable.", status_code=404)
        try:
            t = services.board_ticket(t, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.TicketRead(t).data)


class PassengerLoyaltyView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        p = Passenger.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not p:
            return error_response("Passager introuvable.", status_code=404)
        acc, movements = selectors.loyalty_view(p)
        return success_response({
            "account": S.LoyaltyAccountRead(acc).data if acc else None,
            "movements": S.LoyaltyMovementRead(movements, many=True).data,
        })
```

- [ ] **Step 3: Replace urls.py**
```python
from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("passengers/", v.PassengerListView.as_view()),
    path("passengers/<uuid:pk>/", v.PassengerDetailView.as_view()),
    path("passengers/<uuid:pk>/loyalty/", v.PassengerLoyaltyView.as_view()),
    path("trips/bookable/", v.BookableTripsView.as_view()),
    path("trips/<uuid:trip_id>/seat-map/", v.TripSeatMapView.as_view()),
    path("bookings/", v.BookingListView.as_view()),
    path("bookings/<uuid:pk>/", v.BookingDetailView.as_view()),
    path("bookings/<uuid:pk>/confirm/", v.BookingConfirmView.as_view()),
    path("bookings/<uuid:pk>/cancel/", v.BookingCancelView.as_view()),
    path("bookings/<uuid:pk>/no-show/", v.BookingNoShowView.as_view()),
    path("bookings/<uuid:pk>/redeem/", v.BookingRedeemView.as_view()),
    path("tickets/<uuid:pk>/board/", v.TicketBoardView.as_view()),
]
```

- [ ] **Step 4: Check**
Run: `../env/bin/python manage.py check`
Expected: only the staticfiles warning.

- [ ] **Step 5: Commit**
```bash
git add backend/apps/voyages_booking/config_api backend/apps/voyages_booking/urls.py
git commit -m "feat(voyages-booking): booking/ticket/loyalty API"
```

---

### Task 7: Backend end-to-end smoke

**Files:**
- Create (scratchpad, not committed): `smoke_booking.py`

**Interfaces:**
- Consumes: all services + models.

- [ ] **Step 1: Write the smoke script** to the scratchpad dir. It must:
  1. Create Company, Town, two ServicePoints (stations), a Route, a FareClass, one-way + round-trip Fares, a LoyaltyRule (`reward_threshold=1`, `points_per_one_way=1`, `points_per_round_trip=2`).
  2. Create two Trips (outbound + return) in status `pending` with materialised TripSeats (create a SeatingPlan/assignment or insert `TripSeat` rows directly).
  3. `create_booking` one-way for 1 passenger → assert seat `HELD`, `amount_due == one_way fare`, `TripSeat.booking_id == booking.id`.
  4. `confirm_booking` → assert seat `SOLD`, booking `CONFIRMED`, loyalty account balance == `points_per_one_way`.
  5. `cancel_booking` → assert seat `AVAILABLE`, loyalty reversed to 0.
  6. `create_booking` round-trip for 1 passenger (outbound+return seats) → assert 2 tickets, outbound amount == round_trip fare, return amount == 0, `amount_due == round_trip fare`.
  7. `confirm_booking` → assert loyalty balance == `points_per_round_trip`.
  8. `redeem_reward` on a fresh held booking's ticket → assert `is_reward True`, `amount == 0`, points deducted by `reward_threshold`.
  9. Create a held booking with `held_until` in the past → `expire_holds()` → assert booking `EXPIRED`, seats `AVAILABLE`.

- [ ] **Step 2: Run the smoke against a fresh DB**
Run: `DATABASE_URL="…booking_test.sqlite3" ../env/bin/python manage.py shell < <scratchpad>/smoke_booking.py`
Expected: all asserts pass; script prints an "OK" line per scenario. Fix any failures before committing (delete/recreate the fresh sqlite file between runs).

- [ ] **Step 3: makemigrations --check**
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 4: Commit** (no code change if smoke passed clean; if the smoke surfaced a bug fix, commit that)
```bash
git commit --allow-empty -m "test(voyages-booking): backend end-to-end smoke verified"
```

---

### Task 8: Frontend plumbing (models, services, routes, sidebar, api config)

**Files:**
- Create: `angular/src/_api/models/voyages-booking.models.ts`
- Create: `angular/src/_api/services/voyages-booking/passenger.service.ts`
- Create: `angular/src/_api/services/voyages-booking/booking.service.ts`
- Modify: `angular/src/_api/config/api.config.ts` (add booking endpoints) — match the exact shape used for `voyages-pricing`
- Modify: the pages routes file used by voyages-pricing (same file where `pages/voyages-pricing/...` routes are registered) — add booking routes
- Modify: the sidebar service/config where voyages entries live — add a "Réservations" group

**Interfaces:**
- Consumes: backend endpoints from Task 6.
- Produces: TS `Passenger`, `Booking`, `Ticket`, `LoyaltyAccount`, `LoyaltyMovement`, `TripOption`, `SeatCell` interfaces; `PassengerService`, `BookingService`.

- [ ] **Step 1: Inspect the pricing precedent** to copy exact conventions:
Run: `cat angular/src/_api/services/voyages-pricing/fare.service.ts` and the `voyages-pricing` block of `angular/src/_api/config/api.config.ts`, plus the route entry for `pages/voyages-pricing` in the pages routes file, and the sidebar entry.
Expected: note the base-URL constant, `HttpClient` wrapper pattern, and route/sidebar registration idioms. Mirror them exactly for booking.

- [ ] **Step 2: models/voyages-booking.models.ts**
```typescript
export interface Passenger {
  id: string; first_name: string; last_name: string; full_name: string;
  gender: '' | 'M' | 'F' | 'O'; gender_display: string; birth_date: string | null;
  phone: string; email: string; id_type: string; id_type_display: string; id_number: string;
  notes: string; company: string | null; is_active: boolean; created_at: string; updated_at: string;
}

export interface SeatCell {
  id: string; seat_number: string; row: number; column: number; seat_type: string; status: string;
}

export interface TripOption {
  id: string; number: string; route_code: string | null; origin_name: string | null;
  destination_name: string | null; fare_class: string; fare_class_name: string | null;
  scheduled_departure: string;
}

export interface Ticket {
  id: string; number: string; passenger: string; passenger_name: string;
  trip: string; trip_seat: string; seat_number: string | null;
  direction: 'outbound' | 'return'; direction_display: string; return_of: string | null;
  fare: string | null; fare_class: string; amount: string; is_reward: boolean;
  status: string; status_display: string; boarded_at: string | null;
}

export interface Booking {
  id: string; reference: string; status: string; status_display: string;
  trip_type: 'one_way' | 'round_trip'; trip_type_display: string;
  outbound_trip: string; return_trip: string | null; buyer: string; buyer_name: string;
  amount_due: string; amount_paid: string; payment_method: string; held_until: string | null;
  channel: string; notes: string; created_at: string; updated_at: string; tickets: Ticket[];
}

export interface LoyaltyAccount { id: string; passenger: string; points_balance: number; lifetime_points: number; }
export interface LoyaltyMovement { id: string; kind: string; kind_display: string; points: number; booking: string | null; note: string; created_at: string; }

export interface PassengerSpec {
  id?: string; first_name?: string; last_name?: string; gender?: string; birth_date?: string | null;
  phone?: string; email?: string; id_type?: string; id_number?: string;
}
export interface BookingItem { passenger: PassengerSpec; outbound_seat_id: string; return_seat_id?: string | null; }
export interface BookingCreate {
  trip_type: 'one_way' | 'round_trip'; outbound_trip_id: string; return_trip_id?: string | null;
  buyer: PassengerSpec; items: BookingItem[];
}
```

- [ ] **Step 3: services/voyages-booking/passenger.service.ts** (mirror the pricing service's HttpClient wrapper + base URL constant discovered in Step 1)
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Passenger, LoyaltyAccount, LoyaltyMovement } from '../../models/voyages-booking.models';

const BASE = `${environment.apiUrl}/voyages/booking`;

@Injectable({ providedIn: 'root' })
export class PassengerService {
  constructor(private http: HttpClient) {}
  list(q?: string): Observable<Passenger[]> {
    const url = q ? `${BASE}/passengers/?q=${encodeURIComponent(q)}` : `${BASE}/passengers/`;
    return this.http.get<any>(url).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(body: Partial<Passenger>): Observable<Passenger> {
    return this.http.post<any>(`${BASE}/passengers/`, body).pipe(map(r => r.data ?? r));
  }
  update(id: string, body: Partial<Passenger>): Observable<Passenger> {
    return this.http.patch<any>(`${BASE}/passengers/${id}/`, body).pipe(map(r => r.data ?? r));
  }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${BASE}/passengers/${id}/`); }
  loyalty(id: string): Observable<{ account: LoyaltyAccount | null; movements: LoyaltyMovement[] }> {
    return this.http.get<any>(`${BASE}/passengers/${id}/loyalty/`).pipe(map(r => r.data ?? r));
  }
}
```
> Note: If the pricing service uses a shared api.config constant instead of `environment.apiUrl`, use that constant instead — match the precedent exactly (Step 1).

- [ ] **Step 4: services/voyages-booking/booking.service.ts**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Booking, TripOption, SeatCell, Ticket, BookingCreate } from '../../models/voyages-booking.models';

const BASE = `${environment.apiUrl}/voyages/booking`;

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}
  bookableTrips(): Observable<TripOption[]> {
    return this.http.get<any>(`${BASE}/trips/bookable/`).pipe(map(r => r.data ?? r));
  }
  seatMap(tripId: string): Observable<SeatCell[]> {
    return this.http.get<any>(`${BASE}/trips/${tripId}/seat-map/`).pipe(map(r => r.data ?? r));
  }
  list(params: { status?: string; trip?: string; q?: string } = {}): Observable<Booking[]> {
    const qs = Object.entries(params).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v!)}`).join('&');
    return this.http.get<any>(`${BASE}/bookings/${qs ? '?' + qs : ''}`).pipe(map(r => r.results ?? r.data ?? r));
  }
  get(id: string): Observable<Booking> { return this.http.get<any>(`${BASE}/bookings/${id}/`).pipe(map(r => r.data ?? r)); }
  create(body: BookingCreate): Observable<Booking> { return this.http.post<any>(`${BASE}/bookings/`, body).pipe(map(r => r.data ?? r)); }
  confirm(id: string, body: { payment_method?: string; amount_paid?: number | null }): Observable<Booking> {
    return this.http.post<any>(`${BASE}/bookings/${id}/confirm/`, body).pipe(map(r => r.data ?? r));
  }
  cancel(id: string): Observable<Booking> { return this.http.post<any>(`${BASE}/bookings/${id}/cancel/`, {}).pipe(map(r => r.data ?? r)); }
  noShow(id: string): Observable<Booking> { return this.http.post<any>(`${BASE}/bookings/${id}/no-show/`, {}).pipe(map(r => r.data ?? r)); }
  redeem(id: string, body: { passenger_id: string; ticket_id: string }): Observable<Booking> {
    return this.http.post<any>(`${BASE}/bookings/${id}/redeem/`, body).pipe(map(r => r.data ?? r));
  }
  board(ticketId: string): Observable<Ticket> { return this.http.post<any>(`${BASE}/tickets/${ticketId}/board/`, {}).pipe(map(r => r.data ?? r)); }
}
```

- [ ] **Step 5: Register routes** in the pages routes file (the one containing `pages/voyages-pricing`). Add lazy standalone routes mirroring the pricing entry:
```typescript
  { path: 'voyages-booking/passengers', loadComponent: () => import('../../_api/pages/voyages-booking/passengers/passengers.component').then(m => m.VbPassengersComponent) },
  { path: 'voyages-booking/bookings', loadComponent: () => import('../../_api/pages/voyages-booking/bookings/bookings.component').then(m => m.VbBookingsComponent) },
  { path: 'voyages-booking/bookings/new', loadComponent: () => import('../../_api/pages/voyages-booking/new-booking/new-booking.component').then(m => m.VbNewBookingComponent) },
  { path: 'voyages-booking/bookings/:id', loadComponent: () => import('../../_api/pages/voyages-booking/booking-detail/booking-detail.component').then(m => m.VbBookingDetailComponent) },
```
> Use the exact relative import depth/style the pricing route uses (verify in Step 1); the above paths assume the same layout as `voyages-pricing/fares`.

- [ ] **Step 6: Sidebar** — add a "Réservations" submenu under the Voyages section (same structure as the pricing "Tarifs" entry), with links: Passagers (`/voyages-booking/passengers`), Réservations (`/voyages-booking/bookings`), Nouvelle réservation (`/voyages-booking/bookings/new`). Use the same `ti` icon idiom already in the sidebar.

- [ ] **Step 7: Commit** (plumbing compiles once components exist; commit together with Task 9's first screen if the build needs the components. To keep this task independently buildable, create empty placeholder components now OR fold Steps 5–6 route/sidebar registration into Task 11 after components exist.)
> Decision: **defer route + sidebar registration (Steps 5–6) to Task 11** so every commit builds. In this task, commit only the models + services:
```bash
git add angular/src/_api/models/voyages-booking.models.ts angular/src/_api/services/voyages-booking
git commit -m "feat(voyages-booking-fe): models + API services"
```

---

### Task 9: Passagers screen

**Files:**
- Create: `angular/src/_api/pages/voyages-booking/passengers/passengers.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/passengers/passengers.component.html`

**Interfaces:**
- Consumes: `PassengerService`, `Passenger`, `LoyaltyAccount`, `LoyaltyMovement`; `InfoBannerComponent`.

- [ ] **Step 1: passengers.component.ts** — standalone component (mirror `VcFaresComponent` structure): list with search box (debounced or on-enter), create/edit modal (`#passenger-modal`) with reactive form fields `first_name, last_name, gender, birth_date, phone, email, id_type, id_number, notes`, and a loyalty drawer that calls `svc.loyalty(id)`. Use Tabler `ti` icons and spaced `btn btn-sm` action buttons (NEVER `data-feather`).
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerService } from '../../../services/voyages-booking/passenger.service';
import { Passenger, LoyaltyAccount, LoyaltyMovement } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-passengers',
  templateUrl: './passengers.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VbPassengersComponent implements OnInit {
  rows: Passenger[] = []; loading = false; q = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  loyalty: { account: LoyaltyAccount | null; movements: LoyaltyMovement[] } | null = null;
  loyaltyName = '';

  constructor(private svc: PassengerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: [null, Validators.required], last_name: [null, Validators.required],
      gender: [''], birth_date: [null], phone: [null, Validators.required], email: [''],
      id_type: ['cni'], id_number: [''], notes: [''],
    });
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.list(this.q).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ gender: '', id_type: 'cni', birth_date: null }); }
  openEdit(r: Passenger): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ first_name: r.first_name, last_name: r.last_name, gender: r.gender,
      birth_date: r.birth_date, phone: r.phone, email: r.email, id_type: r.id_type, id_number: r.id_number, notes: r.notes });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.reload(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: Passenger): void {
    if (!confirm('Supprimer ce passager ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  showLoyalty(r: Passenger): void {
    this.loyaltyName = r.full_name;
    this.svc.loyalty(r.id).subscribe(d => this.loyalty = d);
  }
  private close(): void { document.getElementById('passenger-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: passengers.component.html** — page header with "Ajouter un passager" (opens `#passenger-modal`), an `app-info-banner` explaining passengers are reused across bookings and drive Fidélité, a search input bound to `q` (with a "Rechercher" button calling `reload()`), a table (`Nom`, `Téléphone`, `Pièce` = `{{id_type_display}} {{id_number}}`, `Fidélité` button, Actions = Modifier/Supprimer as spaced `btn btn-sm` with `ti` icons), the create/edit modal, and a loyalty offcanvas/modal listing `loyalty.account.points_balance` + movements. Follow `fares.component.html` markup idioms.

- [ ] **Step 3: (build verified in Task 11 after routes exist).** For now ensure the component is self-consistent (no TS errors) by including it in the Task 11 build.

- [ ] **Step 4: Commit**
```bash
git add angular/src/_api/pages/voyages-booking/passengers
git commit -m "feat(voyages-booking-fe): Passagers screen"
```

---

### Task 10: Réservations list + détail screens

**Files:**
- Create: `angular/src/_api/pages/voyages-booking/bookings/bookings.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/bookings/bookings.component.html`
- Create: `angular/src/_api/pages/voyages-booking/booking-detail/booking-detail.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/booking-detail/booking-detail.component.html`

**Interfaces:**
- Consumes: `BookingService`, `Booking`, `Ticket`; `Router`/`ActivatedRoute`; `InfoBannerComponent`.

- [ ] **Step 1: bookings.component.ts** — list with status filter dropdown + search, columns (`Référence`, `Acheteur`, `Type`, `Aller`, `Retour`, `Montant`, `Statut` badge, Actions), a "Nouvelle réservation" button routing to `/voyages-booking/bookings/new`, and row actions: Détail (route to `:id`), Confirmer (only when `status==='held'`), Annuler, No-show. Confirmer opens a small inline modal capturing `payment_method` (empty `<select>` labelled "(module trésorerie à venir)") and `amount_paid` prefilled with `amount_due`.
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Booking } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-bookings',
  templateUrl: './bookings.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VbBookingsComponent implements OnInit {
  rows: Booking[] = []; loading = false; statusFilter = ''; q = '';
  confirmTarget: Booking | null = null; payMethod = ''; payAmount = 0;

  constructor(private svc: BookingService, private router: Router) {}
  ngOnInit(): void { this.reload(); }
  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.statusFilter, q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { held: 'bg-warning', confirmed: 'bg-success', boarded: 'bg-primary',
             cancelled: 'bg-danger', expired: 'bg-secondary', no_show: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  newBooking(): void { this.router.navigate(['/voyages-booking/bookings/new']); }
  open(b: Booking): void { this.router.navigate(['/voyages-booking/bookings', b.id]); }
  askConfirm(b: Booking): void { this.confirmTarget = b; this.payMethod = ''; this.payAmount = +b.amount_due; }
  doConfirm(): void {
    if (!this.confirmTarget) return;
    this.svc.confirm(this.confirmTarget.id, { payment_method: this.payMethod, amount_paid: this.payAmount })
      .subscribe({ next: () => { this.confirmTarget = null; this.reload(); },
        error: e => alert(e?.error?.detail ?? 'Confirmation impossible.') });
  }
  cancel(b: Booking): void {
    if (!confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  noShow(b: Booking): void {
    this.svc.noShow(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}
```

- [ ] **Step 2: bookings.component.html** — header + "Nouvelle réservation" button, `app-info-banner`, filter row (status `<select>` + search), table with status badges via `statusClass`, action buttons (`ti` icons, spaced `btn btn-sm`), and the confirm modal (shown when `confirmTarget`). Empty payment `<select>` with a single disabled default option "(module trésorerie à venir)".

- [ ] **Step 3: booking-detail.component.ts** — load booking by route param; show header (reference, status, buyer, amounts, trip type, trips), a tickets table (`Numéro`, `Passager`, `Sens`, `Siège`, `Montant`, `Récompense` flag, `Statut`, Embarquer button when `status==='sold'`), and lifecycle actions (Confirmer/Annuler/No-show consistent with list). Board calls `svc.board(ticketId)`.
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Booking } from '../../../models/voyages-booking.models';

@Component({
  selector: 'app-vb-booking-detail',
  templateUrl: './booking-detail.component.html',
  imports: [CommonModule],
})
export class VbBookingDetailComponent implements OnInit {
  booking: Booking | null = null; loading = false;
  constructor(private svc: BookingService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.load(id);
  }
  load(id: string): void {
    this.loading = true;
    this.svc.get(id).subscribe({ next: b => { this.booking = b; this.loading = false; }, error: () => this.loading = false });
  }
  board(ticketId: string): void {
    this.svc.board(ticketId).subscribe({ next: () => this.booking && this.load(this.booking.id),
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(): void {
    if (!this.booking || !confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(this.booking.id).subscribe({ next: () => this.load(this.booking!.id), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  back(): void { this.router.navigate(['/voyages-booking/bookings']); }
}
```

- [ ] **Step 4: booking-detail.component.html** — detail card + tickets table as described; use `ti` icons and status badges.

- [ ] **Step 5: Commit**
```bash
git add angular/src/_api/pages/voyages-booking/bookings angular/src/_api/pages/voyages-booking/booking-detail
git commit -m "feat(voyages-booking-fe): Réservations list + détail"
```

---

### Task 11: Nouvelle réservation stepper + routes/sidebar + build

**Files:**
- Create: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.ts`
- Create: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.html`
- Modify: pages routes file (add the 4 booking routes from Task 8 Step 5)
- Modify: sidebar (add the Réservations submenu from Task 8 Step 6)

**Interfaces:**
- Consumes: `BookingService`, `PassengerService`, `TripOption`, `SeatCell`, `BookingCreate`.

- [ ] **Step 1: new-booking.component.ts** — a 4-step wizard with local state:
  - `step` (1–4), `tripType` ('one_way'|'round_trip')
  - Step 1: `bookableTrips()`; select `outboundTripId`, and `returnTripId` when round-trip.
  - Step 2: `seatMap(outboundTripId)` (+ return map); track `selectedOutbound: SeatCell[]` and `selectedReturn: SeatCell[]`; only `status==='available'` selectable; round-trip requires equal counts.
  - Step 3: one passenger row per selected outbound seat — inline fields (`first_name,last_name,phone,id_type,id_number`) with an optional existing-passenger search (`PassengerService.list(q)`), plus buyer (default first passenger); pair each row to a return seat (by order) when round-trip.
  - Step 4: build `BookingCreate` and call `svc.create`; on success route to the booking detail. Show computed seat count/summary (pricing is authoritative server-side; display "Tarif calculé à la confirmation" note).
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { PassengerService } from '../../../services/voyages-booking/passenger.service';
import { TripOption, SeatCell, BookingCreate, BookingItem, PassengerSpec } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-new-booking',
  templateUrl: './new-booking.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VbNewBookingComponent implements OnInit {
  step = 1; tripType: 'one_way' | 'round_trip' = 'one_way';
  trips: TripOption[] = []; outboundTripId = ''; returnTripId = '';
  outboundSeats: SeatCell[] = []; returnSeats: SeatCell[] = [];
  selOutbound: SeatCell[] = []; selReturn: SeatCell[] = [];
  passengers: PassengerSpec[] = []; buyerIndex = 0; saving = false; errorMsg = '';

  constructor(private svc: BookingService, private pax: PassengerService, private router: Router) {}
  ngOnInit(): void { this.svc.bookableTrips().subscribe(t => this.trips = t); }

  get isRound(): boolean { return this.tripType === 'round_trip'; }

  loadSeats(): void {
    if (this.outboundTripId) this.svc.seatMap(this.outboundTripId).subscribe(s => this.outboundSeats = s);
    if (this.isRound && this.returnTripId) this.svc.seatMap(this.returnTripId).subscribe(s => this.returnSeats = s);
  }
  toggleSeat(list: 'out' | 'ret', seat: SeatCell): void {
    if (seat.status !== 'available') return;
    const arr = list === 'out' ? this.selOutbound : this.selReturn;
    const i = arr.findIndex(s => s.id === seat.id);
    if (i >= 0) arr.splice(i, 1); else arr.push(seat);
  }
  isSel(list: 'out' | 'ret', seat: SeatCell): boolean {
    return (list === 'out' ? this.selOutbound : this.selReturn).some(s => s.id === seat.id);
  }
  buildPassengers(): void {
    this.passengers = this.selOutbound.map(() => ({ first_name: '', last_name: '', phone: '', id_type: 'cni', id_number: '' }));
    this.buyerIndex = 0;
  }
  next(): void {
    this.errorMsg = '';
    if (this.step === 1) { if (!this.outboundTripId || (this.isRound && !this.returnTripId)) { this.errorMsg = 'Sélectionnez le(s) voyage(s).'; return; } this.loadSeats(); }
    if (this.step === 2) {
      if (!this.selOutbound.length) { this.errorMsg = 'Sélectionnez au moins un siège aller.'; return; }
      if (this.isRound && this.selReturn.length !== this.selOutbound.length) { this.errorMsg = 'Le nombre de sièges retour doit égaler celui de l\'aller.'; return; }
      this.buildPassengers();
    }
    this.step++;
  }
  prev(): void { this.errorMsg = ''; this.step--; }

  submit(): void {
    if (this.saving) return;
    this.saving = true; this.errorMsg = '';
    const items: BookingItem[] = this.selOutbound.map((seat, i) => ({
      passenger: this.passengers[i],
      outbound_seat_id: seat.id,
      return_seat_id: this.isRound ? this.selReturn[i]?.id ?? null : null,
    }));
    const body: BookingCreate = {
      trip_type: this.tripType, outbound_trip_id: this.outboundTripId,
      return_trip_id: this.isRound ? this.returnTripId : null,
      buyer: this.passengers[this.buyerIndex], items,
    };
    this.svc.create(body).subscribe({
      next: b => this.router.navigate(['/voyages-booking/bookings', b.id]),
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
}
```

- [ ] **Step 2: new-booking.component.html** — 4-step UI. Seat map: render a grid from `outboundSeats`/`returnSeats` (group by `row`, order by `column`), each seat a button with class by status (available/held/sold/blocked) and a selected highlight via `isSel(...)`; reuse the seat-map CSS from Gestion Voyages' trip detail if a shared class exists. Step 3: passenger rows table with inputs + a buyer radio. Step 4: summary (counts, trips, "Tarif calculé à la confirmation") + Confirmer button calling `submit()`. Prev/Next buttons; show `errorMsg`.

- [ ] **Step 3: Register the 4 routes** (Task 8 Step 5 snippet) in the pages routes file, matching the pricing route's import style/depth.

- [ ] **Step 4: Add the sidebar "Réservations" submenu** (Task 8 Step 6) under the Voyages section.

- [ ] **Step 5: Build**
Run: `cd angular && npx ng build`
Expected: `Application bundle generation complete.` with only the pre-existing warnings (`file-saver` CommonJS, selector-errors). No errors referencing voyages-booking components.

- [ ] **Step 6: Commit**
```bash
git add angular/src/_api/pages/voyages-booking/new-booking <pages-routes-file> <sidebar-file>
git commit -m "feat(voyages-booking-fe): Nouvelle réservation stepper + routes & sidebar"
```

---

## Completion

After Task 11, run **superpowers:finishing-a-development-branch**: verify (`manage.py check`, `makemigrations --check`, fresh-DB migrate, backend smoke, `ng build`), then present the 4 options for `feature/voyages-booking`.
