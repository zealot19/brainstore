# Gestion Voyages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `voyages_trips` Django app + « Voyages » Angular section — trip lifecycle management with the fleet-eligibility cross-check, consuming Config Voyages + fleet.

**Architecture:** New self-contained `apps.voyages_trips` app: `Trip` with snapshots, `TripStop`/`TripCrew`/`TripSeat` supporting models, a guarded status machine and vehicle-eligibility engine in `services`/`selectors`. Class-based `APIView` + `IsInstitutionAdmin`, company-scoped operational data. Angular standalone components for list / create / trip detail (assignment, crew, seat map, lifecycle). Nothing existing modified except additive edits to `INSTALLED_APPS`, `api/v1/router.py`, and the 4 shared Angular files.

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, Tabler icons.

## Global Constraints

- Commit as **shimi** — no `Co-Authored-By: Claude` trailer.
- **Do not modify or abandon** `treasury`, `tiers`, legacy `voyage`/`transport_config`/`ticketing`/`parcel`. Greenfield.
- No treasury/tiers imports. `TripSeat.booking_id` is a nullable UUID placeholder (no FK).
- Trips are **company-scoped operational data** (`company` FK non-null); scope via `request.user.company` (superuser: `company_id` query param). NOT the global-default config pattern.
- French-first UI, `info-banner`, Tabler `ti` icons (never `ti ti-pencil`), spaced `btn btn-sm` action buttons.
- Python: `../env/bin/python` from `backend/`. Verify: `manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke; `npx ng build`.
- Branch `feature/voyages-gestion` (stacked on `feature/voyages-config`, already created).
- Deferred (NOT in this plan): Transfer/transbordement, TripCost/TripRevenue P&L, Booking seat HELD/SOLD transitions.

## File Structure

**Backend `backend/apps/voyages_trips/`:**
- `apps.py`, `__init__.py`, `migrations/__init__.py`
- `models/__init__.py`, `models/trip.py`, `models/support.py` (TripStop, TripCrew, TripSeat)
- `selectors/__init__.py`, `selectors/trip_selectors.py`, `selectors/eligibility.py`
- `services/__init__.py`, `services/trip_services.py`, `services/assignment.py`
- `serializers.py`, `views.py`, `urls.py`, `admin.py`
- `exceptions.py` (`VehicleNotEligible`)

**Backend edits (additive):** `config/settings/base.py`, `api/v1/router.py`.

**Frontend `angular/src/_api/`:**
- `models/voyages.models.ts`
- `services/voyages/trip.service.ts`
- `pages/voyages/…` (parent, list, trip-detail)
- Edits: `config/api.config.ts`, `app/core/helpers/routes.ts`, `app/core/service/sidebar/sidebar.service.ts`, `app/features/pages/pages.routes.ts`

---

## Task 1: App scaffold + Trip model + supporting models

**Files:**
- Create: `apps/voyages_trips/__init__.py`, `apps.py`, `models/__init__.py`, `models/trip.py`, `models/support.py`, `admin.py`, `migrations/__init__.py`
- Modify: `config/settings/base.py` (INSTALLED_APPS after `apps.voyages_config`)
- Create: migration `0001_initial`

**Interfaces:**
- Produces: models `Trip`, `TripStop`, `TripCrew`, `TripSeat` (app label `voyages_trips`).

- [ ] **Step 1: package + apps.py**

`apps/voyages_trips/__init__.py` empty; `migrations/__init__.py` empty.
`apps/voyages_trips/apps.py`:
```python
from django.apps import AppConfig


class VoyagesTripsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.voyages_trips"
    label = "voyages_trips"
    verbose_name = "Gestion Voyages"
```

- [ ] **Step 2: register app**

In `config/settings/base.py`, after `"apps.voyages_config",` add `"apps.voyages_trips",`.

- [ ] **Step 3: Trip model**

`apps/voyages_trips/models/trip.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Trip(BaseModel):
    class Status(models.TextChoices):
        DRAFT     = "draft",     _("Brouillon")
        PENDING   = "pending",   _("En attente")
        DEPARTED  = "departed",  _("Parti")
        COMPLETED = "completed", _("Terminé")
        SUSPENDED = "suspended", _("Suspendu")
        CANCELLED = "cancelled", _("Annulé")

    company             = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                             on_delete=models.CASCADE, related_name="trips")
    number              = models.CharField(_("numéro"), max_length=40, blank=True)
    code                = models.CharField(_("code"), max_length=40, blank=True)
    route               = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                                             on_delete=models.PROTECT, related_name="trips")
    service_pattern     = models.ForeignKey("voyages_config.ServicePattern", verbose_name=_("planification"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="trips")
    fare_class          = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                             on_delete=models.PROTECT, related_name="trips")
    vehicle             = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="voyages_trips")
    seating_plan        = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan de bus"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="trips")
    scheduled_departure = models.DateTimeField(_("départ prévu"))
    scheduled_arrival   = models.DateTimeField(_("arrivée prévue"))
    actual_departure    = models.DateTimeField(_("départ réel"), null=True, blank=True)
    actual_arrival      = models.DateTimeField(_("arrivée réelle"), null=True, blank=True)
    origin              = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("origine"),
                                             on_delete=models.PROTECT, related_name="trips_from")
    destination         = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("destination"),
                                             on_delete=models.PROTECT, related_name="trips_to")
    status              = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.DRAFT)
    is_delayed          = models.BooleanField(_("en retard"), default=False)
    delayed_until       = models.DateTimeField(_("reporté à"), null=True, blank=True)
    delay_reason        = models.TextField(_("motif du retard"), blank=True)
    notes               = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("voyage")
        ordering = ["-scheduled_departure"]

    def __str__(self):
        return self.number or f"{self.route.code} {self.scheduled_departure:%Y-%m-%d}"
```

- [ ] **Step 4: supporting models**

`apps/voyages_trips/models/support.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TripStop(BaseModel):
    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="stops")
    service_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de service"),
                                      on_delete=models.PROTECT, related_name="trip_stops")
    sequence = models.PositiveIntegerField(_("ordre"))
    scheduled_arrival = models.DateTimeField(_("arrivée prévue"), null=True, blank=True)
    actual_arrival = models.DateTimeField(_("arrivée réelle"), null=True, blank=True)
    boarded_count = models.PositiveIntegerField(_("montées"), default=0)
    alighted_count = models.PositiveIntegerField(_("descentes"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name = _("escale de voyage")
        ordering = ["trip", "sequence"]
        unique_together = [("trip", "sequence")]

    def __str__(self):
        return f"{self.trip_id} #{self.sequence}"


class TripCrew(BaseModel):
    class Role(models.TextChoices):
        DRIVER     = "DRIVER",     _("Chauffeur")
        CONVOYEUR  = "CONVOYEUR",  _("Convoyeur")
        CONTROLEUR = "CONTROLEUR", _("Contrôleur")

    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="crew")
    driver = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                               on_delete=models.PROTECT, related_name="trip_crew")
    role = models.CharField(_("rôle"), max_length=12, choices=Role.choices, default=Role.DRIVER)
    boarded_at = models.DateTimeField(_("embarqué à"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("équipage")
        ordering = ["trip", "role"]

    def __str__(self):
        return f"{self.trip_id} — {self.get_role_display()}"


class TripSeat(BaseModel):
    class Status(models.TextChoices):
        AVAILABLE = "available", _("Disponible")
        HELD      = "held",      _("Réservé (temporaire)")
        SOLD      = "sold",      _("Vendu")
        BLOCKED   = "blocked",   _("Bloqué")

    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="seats")
    seat_number = models.CharField(_("numéro"), max_length=10)
    row = models.PositiveSmallIntegerField(_("rangée"))
    column = models.PositiveSmallIntegerField(_("colonne"))
    seat_type = models.CharField(_("type"), max_length=10)
    status = models.CharField(_("statut"), max_length=10, choices=Status.choices, default=Status.AVAILABLE)
    held_until = models.DateTimeField(_("réservé jusqu'à"), null=True, blank=True)
    booking_id = models.UUIDField(_("réservation"), null=True, blank=True)  # placeholder; Booking wires later

    class Meta(BaseModel.Meta):
        verbose_name = _("siège de voyage")
        ordering = ["trip", "row", "column"]
        unique_together = [("trip", "seat_number")]

    def __str__(self):
        return f"{self.trip_id} · {self.seat_number}"
```

- [ ] **Step 5: models/__init__.py + admin**

`models/__init__.py`:
```python
from .trip import Trip
from .support import TripStop, TripCrew, TripSeat

__all__ = ["Trip", "TripStop", "TripCrew", "TripSeat"]
```
`admin.py`:
```python
from django.contrib import admin
from .models import Trip, TripStop, TripCrew, TripSeat

admin.site.register([Trip, TripStop, TripCrew, TripSeat])
```

- [ ] **Step 6: migrate + verify + commit**
```bash
../env/bin/python manage.py makemigrations voyages_trips && ../env/bin/python manage.py migrate voyages_trips && ../env/bin/python manage.py check
git add -A && git commit -m "feat(voyages-trips): app scaffold + Trip, TripStop, TripCrew, TripSeat models"
```
Expected: migration `0001_initial` applies, check clean (only staticfiles warning).

---

## Task 2: Eligibility selector + assignment service

**Files:**
- Create: `apps/voyages_trips/exceptions.py`, `selectors/__init__.py`, `selectors/eligibility.py`, `services/__init__.py`, `services/assignment.py`

**Interfaces:**
- Consumes: `Trip`, `TripSeat`, `TripCrew`; `fleet.Vehicle`, `fleet.VehicleDocument`, `fleet.Service`; `voyages_config.VehicleSeatingAssignment`, `PlanSeat`.
- Produces: `eligible_vehicles(company, *, window_start, window_end, exclude_trip=None) -> QuerySet`; `active_seating_plan(vehicle, on_date) -> SeatingPlan|None`; `assign_vehicle(trip, vehicle, *, user) -> list[str]` (warnings) raising `VehicleNotEligible`; `materialise_seats(trip)`.

- [ ] **Step 1: exceptions**

`apps/voyages_trips/exceptions.py`:
```python
from apps.core.exceptions import ApplicationError


class VehicleNotEligible(ApplicationError):
    pass
```

- [ ] **Step 2: eligibility helpers**

`apps/voyages_trips/selectors/eligibility.py`:
```python
from datetime import date
from django.db.models import Q
from apps.fleet.models import Vehicle, VehicleDocument, Service
from apps.voyages_config.models import VehicleSeatingAssignment
from apps.voyages_trips.models import Trip


def active_seating_plan(vehicle, on_date):
    qs = VehicleSeatingAssignment.objects.filter(
        vehicle=vehicle, is_deleted=False, is_active=True, valid_from__lte=on_date
    ).filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date)).order_by("-valid_from")
    a = qs.first()
    return a.seating_plan if a else None


def _overlaps(qs, window_start, window_end):
    # a record with its own [start, end] overlaps [window_start, window_end]
    return qs


def blocking_reasons(vehicle, *, window_start, window_end, exclude_trip=None):
    """Return a list of human reasons the vehicle CANNOT be used. Empty = eligible."""
    reasons = []
    if not vehicle.is_active or vehicle.status != Vehicle.Status.AVAILABLE:
        reasons.append("Véhicule non disponible.")
    if active_seating_plan(vehicle, window_start.date()) is None:
        reasons.append("Aucun plan de bus actif pour ce véhicule à cette date.")
    # open service overlapping the window (Service is date-based)
    svc = Service.objects.filter(
        vehicle=vehicle, is_deleted=False,
        status__in=[Service.Status.PLANNED, Service.Status.IN_PROGRESS],
        planned_date__gte=window_start.date(), planned_date__lte=window_end.date(),
    )
    if svc.exists():
        reasons.append("Une intervention est planifiée sur ce véhicule pendant le voyage.")
    # another trip overlapping
    other = Trip.objects.filter(
        vehicle=vehicle, is_deleted=False,
        status__in=[Trip.Status.DRAFT, Trip.Status.PENDING, Trip.Status.DEPARTED],
        scheduled_departure__lt=window_end, scheduled_arrival__gt=window_start,
    )
    if exclude_trip:
        other = other.exclude(id=exclude_trip.id)
    if other.exists():
        reasons.append("Ce véhicule est déjà affecté à un voyage sur ce créneau.")
    return reasons


def document_warnings(vehicle, *, before_date, alert_days):
    from datetime import timedelta
    horizon = before_date + timedelta(days=alert_days)
    docs = VehicleDocument.objects.filter(
        vehicle=vehicle, is_deleted=False, expiry_date__isnull=False, expiry_date__lte=horizon,
    ).order_by("expiry_date")
    return [f"Document « {d.get_doc_type_display()} » expire le {d.expiry_date:%d/%m/%Y}." for d in docs]


def eligible_vehicles(company, *, window_start, window_end, exclude_trip=None):
    qs = Vehicle.objects.filter(company=company, is_deleted=False, is_active=True,
                                status=Vehicle.Status.AVAILABLE).select_related("model__brand")
    ok = [v.id for v in qs if not blocking_reasons(v, window_start=window_start,
          window_end=window_end, exclude_trip=exclude_trip)]
    return Vehicle.objects.filter(id__in=ok).select_related("model__brand")
```
> `_overlaps` is unused scaffolding — omit it; overlap is inlined above. (Do not add dead code.)

- [ ] **Step 3: assignment service + seat materialisation**

`apps/voyages_trips/services/assignment.py`:
```python
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.voyages_config.models import PlanSeat
from apps.voyages_trips.models import TripSeat
from apps.voyages_trips.exceptions import VehicleNotEligible
from apps.voyages_trips.selectors.eligibility import (
    blocking_reasons, document_warnings, active_seating_plan,
)


def materialise_seats(trip):
    """Rebuild TripSeat rows from the trip's snapshot seating plan."""
    trip.seats.all().delete()
    if not trip.seating_plan_id:
        return
    rows = []
    for ps in PlanSeat.objects.filter(plan=trip.seating_plan, is_deleted=False):
        rows.append(TripSeat(
            trip=trip, seat_number=ps.seat_number, row=ps.row, column=ps.column,
            seat_type=ps.seat_type,
            status=TripSeat.Status.AVAILABLE if ps.is_sellable else TripSeat.Status.BLOCKED,
            created_by=trip.updated_by or trip.created_by,
        ))
    TripSeat.objects.bulk_create(rows)


@transaction.atomic
def assign_vehicle(trip, vehicle, *, user, alert_days=30):
    reasons = blocking_reasons(vehicle, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip)
    if reasons:
        raise VehicleNotEligible(" ".join(reasons))
    plan = active_seating_plan(vehicle, trip.scheduled_departure.date())
    trip.vehicle = vehicle
    trip.seating_plan = plan
    trip.updated_by = user
    trip.save(update_fields=["vehicle", "seating_plan", "updated_by", "updated_at"])
    materialise_seats(trip)
    return document_warnings(vehicle, before_date=trip.scheduled_arrival.date(), alert_days=alert_days)
```
`selectors/__init__.py`:
```python
from .eligibility import eligible_vehicles, active_seating_plan, blocking_reasons, document_warnings
```
`services/__init__.py`:
```python
from .assignment import assign_vehicle, materialise_seats
```

- [ ] **Step 4: verify + commit**
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.voyages_trips.selectors import eligible_vehicles
print('import OK', eligible_vehicles)"
git add -A && git commit -m "feat(voyages-trips): vehicle eligibility + assignment/seat materialisation"
```
Expected: check clean, import OK.

---

## Task 3: Trip lifecycle services + trip creation

**Files:**
- Create: `apps/voyages_trips/services/trip_services.py`, `apps/voyages_trips/selectors/trip_selectors.py`
- Modify: `services/__init__.py`, `selectors/__init__.py`

**Interfaces:**
- Produces: `create_trip(*, company, route, fare_class, scheduled_departure, scheduled_arrival, service_pattern=None, origin=None, destination=None, code="", notes="", user) -> Trip`; lifecycle `submit_trip`, `depart_trip`, `complete_trip`, `cancel_trip`, `suspend_trip`, `resume_trip`, `mark_delayed`, `clear_delay`; selectors `list_trips(company, status=None)`, `get_trip(company, trip_id)`.

- [ ] **Step 1: trip selectors**

`selectors/trip_selectors.py`:
```python
from apps.voyages_trips.models import Trip


def list_trips(company, status=None):
    qs = (Trip.objects.filter(company=company, is_deleted=False)
          .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
          .order_by("-scheduled_departure"))
    if status:
        qs = qs.filter(status=status)
    return qs


def get_trip(company, trip_id):
    return (Trip.objects.filter(company=company, id=trip_id, is_deleted=False)
            .select_related("route", "fare_class", "vehicle", "seating_plan", "origin", "destination")
            .first())
```
Add to `selectors/__init__.py`: `from .trip_selectors import list_trips, get_trip`.

- [ ] **Step 2: trip services (create + lifecycle)**

`services/trip_services.py`:
```python
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.services.sequence_service import next_number
from apps.core.models import Sequence
from apps.fleet.models import Vehicle, OdometerLog
from apps.voyages_config.models import RouteStop
from apps.voyages_trips.models import Trip, TripStop


def _trip_number(company):
    seq, _created = Sequence.objects.get_or_create(
        code="VOY", defaults={"name": "Voyages", "prefix": "VOY/", "padding": 5})
    return next_number("VOY")


@transaction.atomic
def create_trip(*, company, route, fare_class, scheduled_departure, scheduled_arrival,
                service_pattern=None, origin=None, destination=None, code="", notes="", user):
    if scheduled_arrival <= scheduled_departure:
        raise ApplicationError(_("L'arrivée prévue doit être postérieure au départ."))
    trip = Trip.objects.create(
        company=company, number=_trip_number(company), code=code,
        route=route, service_pattern=service_pattern, fare_class=fare_class,
        origin=origin or route.origin, destination=destination or route.destination,
        scheduled_departure=scheduled_departure, scheduled_arrival=scheduled_arrival,
        status=Trip.Status.DRAFT, notes=notes, created_by=user,
    )
    # copy escales from RouteStop
    for rs in RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"):
        sched = None
        if rs.offset_from_departure:
            sched = scheduled_departure + rs.offset_from_departure
        TripStop.objects.create(trip=trip, service_point=rs.service_point, sequence=rs.sequence,
                                scheduled_arrival=sched, created_by=user)
    return trip


@transaction.atomic
def submit_trip(trip, *, user):
    if trip.status != Trip.Status.DRAFT:
        raise ApplicationError(_("Seul un brouillon peut être soumis."))
    if not trip.vehicle_id or not trip.seating_plan_id:
        raise ApplicationError(_("Affectez un véhicule (avec plan de bus) avant de soumettre."))
    if not trip.crew.filter(is_deleted=False, role="DRIVER").exists():
        raise ApplicationError(_("Ajoutez au moins un chauffeur à l'équipage."))
    trip.status = Trip.Status.PENDING
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def depart_trip(trip, *, user, lead_hours=24):
    if trip.status != Trip.Status.PENDING:
        raise ApplicationError(_("Seul un voyage en attente peut démarrer."))
    now = timezone.now()
    delta = (trip.scheduled_departure - now).total_seconds() / 3600
    if delta > lead_hours:
        raise ApplicationError(_("Trop tôt pour démarrer ce voyage."))
    trip.status = Trip.Status.DEPARTED
    trip.actual_departure = now
    trip.updated_by = user
    trip.save(update_fields=["status", "actual_departure", "updated_by", "updated_at"])
    if trip.vehicle_id:
        v = trip.vehicle
        v.status = Vehicle.Status.ON_MISSION
        v.updated_by = user
        v.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def complete_trip(trip, *, user):
    if trip.status != Trip.Status.DEPARTED:
        raise ApplicationError(_("Seul un voyage parti peut être clôturé."))
    now = timezone.now()
    trip.status = Trip.Status.COMPLETED
    trip.actual_arrival = now
    trip.updated_by = user
    trip.save(update_fields=["status", "actual_arrival", "updated_by", "updated_at"])
    if trip.vehicle_id:
        v = trip.vehicle
        if trip.route.distance_km:
            new_km = (v.current_odometer or 0) + trip.route.distance_km
            OdometerLog.objects.create(vehicle=v, value_km=new_km, date=now.date(),
                                       source=OdometerLog.Source.MANUAL,
                                       note=f"Voyage {trip.number}", created_by=user)
            v.current_odometer = new_km
        v.status = Vehicle.Status.AVAILABLE
        v.updated_by = user
        v.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def cancel_trip(trip, *, user):
    if trip.status in (Trip.Status.COMPLETED, Trip.Status.CANCELLED):
        raise ApplicationError(_("Ce voyage ne peut pas être annulé."))
    was_held = trip.status in (Trip.Status.PENDING, Trip.Status.SUSPENDED, Trip.Status.DEPARTED)
    trip.seats.all().delete()
    trip.status = Trip.Status.CANCELLED
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    if was_held and trip.vehicle_id:
        v = trip.vehicle
        v.status = Vehicle.Status.AVAILABLE
        v.updated_by = user
        v.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def suspend_trip(trip, *, user):
    if trip.status != Trip.Status.PENDING:
        raise ApplicationError(_("Seul un voyage en attente peut être suspendu."))
    trip.status = Trip.Status.SUSPENDED
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def resume_trip(trip, *, user):
    if trip.status != Trip.Status.SUSPENDED:
        raise ApplicationError(_("Seul un voyage suspendu peut être repris."))
    trip.status = Trip.Status.PENDING
    trip.updated_by = user
    trip.save(update_fields=["status", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def mark_delayed(trip, *, delayed_until=None, delay_reason="", user):
    trip.is_delayed = True
    trip.delayed_until = delayed_until
    trip.delay_reason = delay_reason
    trip.updated_by = user
    trip.save(update_fields=["is_delayed", "delayed_until", "delay_reason", "updated_by", "updated_at"])
    return trip


@transaction.atomic
def clear_delay(trip, *, user):
    trip.is_delayed = False
    trip.delayed_until = None
    trip.delay_reason = ""
    trip.updated_by = user
    trip.save(update_fields=["is_delayed", "delayed_until", "delay_reason", "updated_by", "updated_at"])
    return trip
```
Add to `services/__init__.py`: `from .trip_services import (create_trip, submit_trip, depart_trip, complete_trip, cancel_trip, suspend_trip, resume_trip, mark_delayed, clear_delay)`.

> `_trip_number` uses `Sequence.get_or_create` then `next_number("VOY")`; `next_number` (concurrency-safe, `select_for_update`) returns e.g. `VOY/2026/00001` depending on the Sequence config. Verify `OdometerLog.Source.MANUAL` exists (it does).

- [ ] **Step 3: verify + commit**
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.voyages_trips.services import create_trip, submit_trip, depart_trip, complete_trip
from apps.voyages_trips.selectors import list_trips
print('services OK')"
git add -A && git commit -m "feat(voyages-trips): trip creation + lifecycle services"
```
Expected: check clean, services OK.

---

## Task 4: Serializers + API views + urls

**Files:**
- Create: `apps/voyages_trips/serializers.py`, `views.py`, `urls.py`
- Modify: `api/v1/router.py`

**Interfaces:**
- Produces: endpoints under `/api/v1/voyages/trips/` (list/create/detail, eligible-vehicles, assign-vehicle, crew, seats block/unblock, stops, lifecycle actions).

- [ ] **Step 1: serializers**

`serializers.py` — `TripListSerializer` (id, number, code, route, route_code `source="route.code"`, vehicle, vehicle_plate `source="vehicle.license_plate"`, fare_class_name `source="fare_class.name"`, scheduled_departure, scheduled_arrival, status, status_display `source="get_status_display"`, is_delayed, seat counters via SerializerMethodField `seats_available`/`seats_total`), `TripDetailSerializer` (adds origin/destination names, service_pattern, actual_*, delay fields, notes, nested `stops`, `crew`, seat summary), `TripCreateSerializer` (route_id, fare_class_id, service_pattern_id opt, scheduled_departure, scheduled_arrival, origin_id opt, destination_id opt, code, notes), `TripUpdateSerializer` (code, notes, scheduled_* — only in DRAFT), `TripStopSerializer`, `TripCrewSerializer` (id, driver, driver_name `source="driver.full_name"`, role, role_display, boarded_at) + `TripCrewWriteSerializer` (driver_id, role), `TripSeatSerializer` (id, seat_number, row, column, seat_type, status, status_display), `EligibleVehicleSerializer` (id, license_plate, model_name). Follow the fleet serializer shape.

- [ ] **Step 2: views**

`views.py` — helper `_scope(request)` returning company (like Config Voyages' `resolve_company_or_global` but non-null: superuser uses `company_id` param, else `request.user.company`). Views (all `IsInstitutionAdmin`):
```python
# sketch of the non-obvious ones — full CRUD mirrors fleet APIView style
class TripAssignVehicleView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def post(self, request, trip_id):
        company = _scope(request)
        trip = selectors.get_trip(company, trip_id)
        if not trip: return error_response("Voyage introuvable.", status_code=404)
        from apps.fleet.models import Vehicle
        vehicle = Vehicle.objects.filter(id=request.data.get("vehicle_id"),
                                         company=company, is_deleted=False).first()
        if not vehicle: return error_response("Véhicule introuvable.", status_code=404)
        try:
            warnings = services.assign_vehicle(trip, vehicle, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"trip": serializers.TripDetailSerializer(trip).data, "warnings": warnings})

class TripEligibleVehiclesView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request, trip_id):
        company = _scope(request)
        trip = selectors.get_trip(company, trip_id)
        if not trip: return error_response("Voyage introuvable.", status_code=404)
        vs = selectors.eligible_vehicles(company, window_start=trip.scheduled_departure,
                                         window_end=trip.scheduled_arrival, exclude_trip=trip)
        return success_response(serializers.EligibleVehicleSerializer(vs, many=True).data)
```
Lifecycle views each resolve trip then call the matching service inside try/except ApplicationError. Crew add/remove resolve `driver_id` against `fleet.ExternalDriver` scoped to company. Seat block/unblock: `TripSeatBlockView`/`UnblockView` take `{seat_ids: []}`, update status AVAILABLE⇄BLOCKED for that trip's seats. `TripListCreateView.post` resolves route_id/fare_class_id/service_pattern_id/origin_id/destination_id via scoped `voyages_config` lookups then `services.create_trip`.

- [ ] **Step 3: urls + router**

`urls.py`:
```python
from django.urls import path
from . import views as v

urlpatterns = [
    path("", v.TripListCreateView.as_view()),
    path("<uuid:trip_id>/", v.TripDetailView.as_view()),
    path("<uuid:trip_id>/eligible-vehicles/", v.TripEligibleVehiclesView.as_view()),
    path("<uuid:trip_id>/assign-vehicle/", v.TripAssignVehicleView.as_view()),
    path("<uuid:trip_id>/crew/", v.TripCrewView.as_view()),
    path("<uuid:trip_id>/crew/<uuid:crew_id>/", v.TripCrewDetailView.as_view()),
    path("<uuid:trip_id>/seats/", v.TripSeatsView.as_view()),
    path("<uuid:trip_id>/seats/block/", v.TripSeatBlockView.as_view()),
    path("<uuid:trip_id>/seats/unblock/", v.TripSeatUnblockView.as_view()),
    path("<uuid:trip_id>/stops/", v.TripStopsView.as_view()),
    path("<uuid:trip_id>/submit/", v.TripSubmitView.as_view()),
    path("<uuid:trip_id>/depart/", v.TripDepartView.as_view()),
    path("<uuid:trip_id>/complete/", v.TripCompleteView.as_view()),
    path("<uuid:trip_id>/cancel/", v.TripCancelView.as_view()),
    path("<uuid:trip_id>/suspend/", v.TripSuspendView.as_view()),
    path("<uuid:trip_id>/resume/", v.TripResumeView.as_view()),
    path("<uuid:trip_id>/mark-delayed/", v.TripMarkDelayedView.as_view()),
    path("<uuid:trip_id>/clear-delay/", v.TripClearDelayView.as_view()),
]
```
In `api/v1/router.py`, after `voyages/config/` add `path("voyages/trips/", include("apps.voyages_trips.urls")),`.

- [ ] **Step 4: verify + commit**
```bash
../env/bin/python manage.py check
rm -f /tmp/vt.sqlite3
DATABASE_URL="sqlite:////tmp/vt.sqlite3" ../env/bin/python manage.py migrate 2>&1 | grep -i "voyages_trips\|error" | head
../env/bin/python manage.py shell -c "
from apps.voyages_trips import urls as u; print('patterns', len(u.urlpatterns))"
git add -A && git commit -m "feat(voyages-trips): serializers, API views, urls"
```
Expected: check clean, fresh-DB migrate applies voyages_trips, patterns printed.

- [ ] **Step 5: full backend smoke**
```bash
../env/bin/python manage.py shell -c "
from apps.system_config.models import Company; from apps.authentication.models import User
from apps.voyages_config.models import Town, ServicePoint, Route, RouteStop, SeatingPlan, PlanSeat, FareClass, VehicleSeatingAssignment
from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
from apps.voyages_trips.services import create_trip, submit_trip, depart_trip, complete_trip, assign_vehicle
from apps.voyages_trips.selectors import eligible_vehicles
import datetime, django.utils.timezone as tz
c=Company.objects.first(); u=User.objects.first()
t=Town.objects.create(company=c,name='T',created_by=u)
a=ServicePoint.objects.create(company=c,town=t,code='A',name='A',is_station=True,created_by=u)
b=ServicePoint.objects.create(company=c,town=t,code='B',name='B',is_station=True,created_by=u)
r=Route.objects.create(company=c,code='A-B',origin=a,destination=b,distance_km=250,created_by=u)
fc=FareClass.objects.create(company=c,code='CL',name='Classic',created_by=u)
sp=SeatingPlan.objects.create(company=c,code='BUS',name='Bus',rows=2,columns=2,created_by=u)
PlanSeat.objects.create(company=c,plan=sp,seat_number='1',row=1,column=1,is_sellable=True,created_by=u)
PlanSeat.objects.create(company=c,plan=sp,seat_number='2',row=1,column=2,is_sellable=False,seat_type='DRIVER',created_by=u)
br=VehicleBrand.objects.create(name='BR',created_by=u); vm=VehicleModel.objects.create(brand=br,name='M',created_by=u)
veh=Vehicle.objects.create(company=c,model=vm,license_plate='LT-1',status='available',created_by=u)
VehicleSeatingAssignment.objects.create(company=c,vehicle=veh,seating_plan=sp,valid_from=datetime.date(2020,1,1),created_by=u)
dep=tz.now(); arr=dep+datetime.timedelta(hours=4)
trip=create_trip(company=c,route=r,fare_class=fc,scheduled_departure=dep,scheduled_arrival=arr,user=u)
print('trip', trip.number, 'stops', trip.stops.count())
print('eligible', [v.license_plate for v in eligible_vehicles(c, window_start=dep, window_end=arr)])
w=assign_vehicle(trip, veh, user=u)
print('assigned plan', trip.seating_plan.code, 'seats', trip.seats.count(), 'available', trip.seats.filter(status='available').count(), 'warnings', w)
from apps.voyages_trips.models import TripCrew
from apps.fleet.models import ExternalDriver
# crew needs a driver; skip if no HR employee — submit will validate
print('status', trip.status)
[x.delete() for x in [veh,vm,br,sp,r,fc,a,b,t]]; trip.delete()"
```
Expected: trip created with escales, eligible lists LT-1, assign returns plan BUS with 2 seats (1 available, 1 blocked driver seat), no warnings.

---

## Task 5: Frontend scaffold — models, service, api.config, routing, sidebar, parent

**Files:**
- Create: `angular/src/_api/models/voyages.models.ts`, `angular/src/_api/services/voyages/trip.service.ts`, `angular/src/_api/pages/voyages/voyages.component.ts`
- Modify: `config/api.config.ts`, `app/core/helpers/routes.ts`, `app/core/service/sidebar/sidebar.service.ts`, `app/features/pages/pages.routes.ts`

**Interfaces:**
- Produces: `VOYAGES` api block; `Trip`, `TripStop`, `TripCrew`, `TripSeat`, `EligibleVehicle` interfaces; `TripService` with CRUD + eligibleVehicles/assignVehicle/crew/seats/lifecycle methods; sidebar « Voyages » group; routes `/voyages/*`.

- [ ] **Step 1: api.config VOYAGES block**

In `api.config.ts` add `const VT = `${API_BASE}/voyages/trips`;` and:
```typescript
export const VOYAGES = {
  trips: `${VT}/`, trip: (id: string) => `${VT}/${id}/`,
  eligibleVehicles: (id: string) => `${VT}/${id}/eligible-vehicles/`,
  assignVehicle: (id: string) => `${VT}/${id}/assign-vehicle/`,
  crew: (id: string) => `${VT}/${id}/crew/`, crewItem: (id: string, cid: string) => `${VT}/${id}/crew/${cid}/`,
  seats: (id: string) => `${VT}/${id}/seats/`,
  seatsBlock: (id: string) => `${VT}/${id}/seats/block/`, seatsUnblock: (id: string) => `${VT}/${id}/seats/unblock/`,
  stops: (id: string) => `${VT}/${id}/stops/`,
  submit: (id: string) => `${VT}/${id}/submit/`, depart: (id: string) => `${VT}/${id}/depart/`,
  complete: (id: string) => `${VT}/${id}/complete/`, cancel: (id: string) => `${VT}/${id}/cancel/`,
  suspend: (id: string) => `${VT}/${id}/suspend/`, resume: (id: string) => `${VT}/${id}/resume/`,
  markDelayed: (id: string) => `${VT}/${id}/mark-delayed/`, clearDelay: (id: string) => `${VT}/${id}/clear-delay/`,
};
```

- [ ] **Step 2: models**

`voyages.models.ts`: `TripStatus` union; `TripSeat` (id, seat_number, row, column, seat_type, status, status_display); `TripCrew` (id, driver, driver_name, role, role_display, boarded_at); `TripStop` (id, service_point, service_point_name, sequence, scheduled_arrival, actual_arrival, boarded_count, alighted_count); `EligibleVehicle` (id, license_plate, model_name); `Trip` (all detail fields incl. route_code, vehicle_plate, fare_class_name, origin_name, destination_name, seats_available, seats_total, stops[], crew[]).

- [ ] **Step 3: TripService**

`services/voyages/trip.service.ts` — HttpClient methods: `list(status?)`, `get(id)`, `create(data)`, `update(id,data)`, `delete(id)`, `eligibleVehicles(id)`, `assignVehicle(id, vehicleId)`, `listCrew(id)`, `addCrew(id, data)`, `removeCrew(id, cid)`, `listSeats(id)`, `blockSeats(id, ids)`, `unblockSeats(id, ids)`, `submit/depart/complete/cancel/suspend/resume(id)`, `markDelayed(id, data)`, `clearDelay(id)`. Each maps to the `VOYAGES` endpoint.

- [ ] **Step 4: parent + routes + sidebar**

`pages/voyages/voyages.component.ts` — standalone `<router-outlet>` (copy `pages/voyages-config/voyages-config.component.ts`, selector `app-voyages`). Add route constants to `routes.ts` (`voyagesList: '/voyages/list'`, `voyagesTrip: '/voyages/trip'`). Add `{ path: 'voyages', loadComponent: VoyagesComponent, children: [ {path:'list', VoyagesListComponent}, {path:'trip/:id', VoyagesTripDetailComponent} ] }` to `pages.routes.ts` (children added in Tasks 6–7; add parent with `children: []` here). Add a « Voyages » sidebar group with subMenu « Voyages » → `voyagesList`.

- [ ] **Step 5: verify + commit**
```bash
cd ../angular && npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-fe): models, trip service, api.config, routing, sidebar, parent"
```
Expected: build succeeds (parent route with empty children).

---

## Task 6: Voyages list + Nouveau Voyage

**Files:**
- Create: `angular/src/_api/pages/voyages/list/voyages-list.component.{ts,html}`
- Modify: `pages.routes.ts` (add `list` child)

- [ ] **Step 1: component**

List screen: table (numéro, trajet, véhicule, départ prévu, statut badge, retard marker, places available/total), status filter, "Nouveau voyage" button opening a modal. Create modal: route (dropdown from `voyages-config` RouteService), optional service pattern (ServicePatternService — on select, prefill fare_class + scheduled times if the pattern carries them), fare class (FareClassService), scheduled_departure / scheduled_arrival (datetime-local), code, notes. On submit → `TripService.create`, then navigate to `voyages/trip/:id`. Reuse the Config Voyages services (`RouteService`, `FareClassService`, `ServicePatternService`) imported from `services/voyages-config/`.

- [ ] **Step 2: route + build + commit**
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-fe): Voyages list + Nouveau Voyage"
```
Expected: build succeeds.

---

## Task 7: Trip detail (assignment, crew, seat map, lifecycle)

**Files:**
- Create: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.{ts,html,scss}`
- Modify: `pages.routes.ts` (add `trip/:id` child)

- [ ] **Step 1: component**

Trip detail page (route param `id`, loads `TripService.get`):
- **Header**: number, route origin→destination, scheduled departure/arrival, status badge, `is_delayed` marker.
- **Vehicle assignment** card: if no vehicle, a dropdown fed by `eligibleVehicles(id)` + "Affecter"; on assign call `assignVehicle`, show any returned **warnings** (alert-warning list), display resolved seating plan. If assigned, show plate + plan.
- **Crew** card: list crew (name, role), add (driver dropdown from fleet `ExternalDriverService` + role select), remove.
- **Seat map** card: grid reusing the seat cell styling (copy the `.scss` seat classes from `pages/voyages-config/seating-plans/seating-plans.component.scss`), colour by status (available/blocked/held/sold) + type; click a seat to toggle block/unblock (calls `blockSeats`/`unblockSeats` with `[seatId]`); live counter available/total.
- **Lifecycle** toolbar: buttons shown per status — DRAFT: Soumettre; PENDING: Départ, Suspendre, Mettre en retard, Annuler; SUSPENDED: Reprendre, Annuler; DEPARTED: Clôturer; each calls the matching `TripService` method then reloads. "Mettre en retard" opens a small prompt for `delayed_until` + `delay_reason`; "Retirer le retard" when `is_delayed`.

- [ ] **Step 2: route + build + commit**
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-fe): trip detail with assignment, crew, seat map, lifecycle"
```
Expected: build succeeds.

---

## Self-Review

- **Spec coverage:** Trip + snapshots → Task 1,3; status machine → Task 3; eligibility/assignment → Task 2; TripStop/TripCrew/TripSeat → Task 1; seat materialisation → Task 2; API → Task 4; frontend list/create/detail (assignment/crew/seat-map/lifecycle) → Tasks 5–7. Deferred items (Transfer, P&L, booking transitions) correctly absent.
- **Placeholder scan:** model/service/eligibility code is complete; API views/serializers and frontend screens reference exact patterns (fleet/Config Voyages) with explicit field lists; the one unused `_overlaps` scaffold is flagged for omission.
- **Type consistency:** `assign_vehicle(trip, vehicle, *, user)`, `eligible_vehicles(company, *, window_start, window_end, exclude_trip)`, `materialise_seats(trip)`, `create_trip(...)` and lifecycle fn names match between services, views, and the api.config method names (`assignVehicle`, `eligibleVehicles`, `submit`…). `TripSeat.status` values (available/held/sold/blocked) consistent across model, materialisation, and seat block/unblock.
- **Isolation:** nothing existing modified except additive INSTALLED_APPS, router, and 4 shared Angular files; no treasury/tiers imports; `booking_id` is a placeholder UUID.
