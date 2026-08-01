# Config Voyages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `voyages_config` Django app + « Config Voyages » Angular section — configurable, company-scoped reference data for the passenger transport suite (network, seating, commercial/consignment taxonomy, scheduling, loyalty, settings), mirroring « Config Flotte ».

**Architecture:** New self-contained `apps.voyages_config` app following the fleet config pattern: `_CompanyScoped(BaseModel)` models (nullable `company` FK, global default), class-based `APIView` with the `_pair`/`_bulk` scoped-CRUD factories, selectors/services where custom logic is needed. Angular standalone components mirroring Config Flotte, plus two custom editors (Route+escales, visual SeatingPlan). Nothing existing is modified except additive edits to `api/v1/router.py`, `INSTALLED_APPS`, and the 4 shared Angular files (routes/sidebar/api.config/pages.routes).

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, Tabler icons.

## Global Constraints

- Commit as **shimi** — no `Co-Authored-By: Claude` trailer.
- **Do not modify or abandon** `treasury`, `tiers`, legacy `voyage`/`transport_config`/`ticketing`/`parcel`. Greenfield alongside.
- Where a selector would target treasury/tiers/parties, render an **empty dropdown** (no data). Config Voyages needs none directly.
- Multitenancy: nullable `company` FK; `NULL`=global default; selectors `Q(company_id=cid) | Q(company__isnull=True)`; per-scope uniqueness in the service/`ensure_unique` layer.
- Fare **amounts** deferred to Pricing; build network to support escale segment pricing, store no amounts.
- French-first UI, in-app `info-banner`, Tabler `ti` icons (never `ti ti-pencil`).
- Python: `../env/bin/python` from `backend/`. Verify via `manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke; `npx ng build` frontend.
- Branch `feature/voyages-config` off `origin/master` (already created).

## File Structure

**Backend `backend/apps/voyages_config/`:**
- `apps.py` — AppConfig (`label="voyages_config"`).
- `models/__init__.py`, `models/base.py` (`_CompanyScoped`), `models/network.py`, `models/seating.py`, `models/commercial.py`, `models/scheduling.py`, `models/loyalty.py`, `models/settings.py`.
- `config_api/__init__.py`, `common.py`, `serializers.py`, `views.py` (factories + custom views), plus `selectors.py`/`services.py` for Route/SeatingPlan/Settings custom logic.
- `urls.py`, `admin.py`, `migrations/`.

**Backend edits (additive):** `config/settings/base.py` (INSTALLED_APPS), `api/v1/router.py`.

**Frontend `angular/src/_api/`:**
- `models/voyages-config.models.ts`
- `services/voyages-config/*.service.ts` (reuse `BaseConfigService`)
- `pages/voyages-config/…` (parent + screens)
- Edits: `config/api.config.ts` (VOYAGES_CONFIG block), `app/core/helpers/routes.ts`, `app/core/service/sidebar/sidebar.service.ts`, `app/features/pages/pages.routes.ts`.

---

## Task 1: App scaffold + Network models

**Files:**
- Create: `apps/voyages_config/__init__.py`, `apps/voyages_config/apps.py`, `apps/voyages_config/models/__init__.py`, `apps/voyages_config/models/base.py`, `apps/voyages_config/models/network.py`, `apps/voyages_config/admin.py`
- Modify: `config/settings/base.py` (add `"apps.voyages_config",` to INSTALLED_APPS after `apps.voyage`)
- Create: `apps/voyages_config/migrations/__init__.py`, migration `0001_initial`

**Interfaces:**
- Produces: models `Town`, `ServicePoint`, `Route`, `RouteStop` (app label `voyages_config`); `_CompanyScoped` base.

- [ ] **Step 1: apps.py + package**

`apps/voyages_config/apps.py`:
```python
from django.apps import AppConfig


class VoyagesConfigConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.voyages_config"
    label = "voyages_config"
    verbose_name = "Configuration Voyages"
```
`apps/voyages_config/__init__.py` empty. `apps/voyages_config/migrations/__init__.py` empty.

- [ ] **Step 2: register app**

In `config/settings/base.py` INSTALLED_APPS, after the `"apps.voyage",` line add:
```python
    "apps.voyages_config",
```

- [ ] **Step 3: `_CompanyScoped` base**

`apps/voyages_config/models/base.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class _CompanyScoped(BaseModel):
    """Reference row scoped to a company; company NULL = global default."""
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, null=True, blank=True)

    class Meta(BaseModel.Meta):
        abstract = True
```

- [ ] **Step 4: network models**

`apps/voyages_config/models/network.py`:
```python
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class Town(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=150)
    code = models.CharField(_("code"), max_length=20, blank=True)
    region = models.CharField(_("région"), max_length=100, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("ville")
        ordering = ["name"]

    def __str__(self):
        return self.name


class ServicePoint(_CompanyScoped):
    class StationKind(models.TextChoices):
        TERMINAL = "TERMINAL", _("Gare / Terminal")
        AGENCY   = "AGENCY",   _("Agence")

    town = models.ForeignKey("voyages_config.Town", verbose_name=_("ville"),
                             on_delete=models.PROTECT, related_name="service_points")
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=150)
    is_station = models.BooleanField(_("est une gare/agence"), default=False)
    station_kind = models.CharField(_("type de gare"), max_length=10,
                                    choices=StationKind.choices, blank=True)
    latitude = models.DecimalField(_("latitude"), max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(_("longitude"), max_digits=9, decimal_places=6, null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("point de service")
        ordering = ["town__name", "name"]

    def __str__(self):
        return f"{self.name} ({self.code})"


class Route(_CompanyScoped):
    code = models.CharField(_("code"), max_length=30)
    label = models.CharField(_("libellé"), max_length=200, blank=True)
    origin = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("origine"),
                               on_delete=models.PROTECT, related_name="routes_from")
    destination = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("destination"),
                                    on_delete=models.PROTECT, related_name="routes_to")
    distance_km = models.DecimalField(_("distance (km)"), max_digits=8, decimal_places=1, null=True, blank=True)
    estimated_duration = models.DurationField(_("durée estimée"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("trajet")
        ordering = ["code"]

    def clean(self):
        if self.origin_id and not self.origin.is_station:
            raise ValidationError({"origin": _("L'origine doit être une gare/agence.")})
        if self.destination_id and not self.destination.is_station:
            raise ValidationError({"destination": _("La destination doit être une gare/agence.")})
        if self.origin_id and self.origin_id == self.destination_id:
            raise ValidationError(_("Origine et destination doivent différer."))

    def __str__(self):
        return self.code


class RouteStop(_CompanyScoped):
    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.CASCADE, related_name="stops")
    service_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de service"),
                                      on_delete=models.PROTECT, related_name="route_stops")
    sequence = models.PositiveIntegerField(_("ordre"))
    distance_from_origin_km = models.DecimalField(_("distance depuis origine (km)"),
                                                  max_digits=8, decimal_places=1, null=True, blank=True)
    offset_from_departure = models.DurationField(_("décalage depuis départ"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("escale")
        ordering = ["route", "sequence"]
        unique_together = [("route", "sequence")]

    def __str__(self):
        return f"{self.route.code} #{self.sequence} → {self.service_point.name}"
```

- [ ] **Step 5: models/__init__.py**

```python
from .network import Town, ServicePoint, Route, RouteStop

__all__ = ["Town", "ServicePoint", "Route", "RouteStop"]
```

- [ ] **Step 6: admin**

`apps/voyages_config/admin.py`:
```python
from django.contrib import admin
from .models import Town, ServicePoint, Route, RouteStop

admin.site.register([Town, ServicePoint, Route, RouteStop])
```

- [ ] **Step 7: migrate + verify**

Run:
```bash
../env/bin/python manage.py makemigrations voyages_config
../env/bin/python manage.py migrate voyages_config
../env/bin/python manage.py check
```
Expected: migration `0001_initial` created, applies, check clean (only pre-existing staticfiles warning).

- [ ] **Step 8: commit**
```bash
git add -A && git commit -m "feat(voyages-config): app scaffold + network models (Town, ServicePoint, Route, RouteStop)"
```

---

## Task 2: Seating models

**Files:**
- Create: `apps/voyages_config/models/seating.py`
- Modify: `apps/voyages_config/models/__init__.py`, `apps/voyages_config/admin.py`
- Create: migration `0002`

**Interfaces:**
- Produces: `SeatingPlan`, `PlanSeat`, `VehicleSeatingAssignment`.

- [ ] **Step 1: seating models**

`apps/voyages_config/models/seating.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class SeatingPlan(_CompanyScoped):
    code = models.CharField(_("code"), max_length=30)
    name = models.CharField(_("nom"), max_length=150)
    rows = models.PositiveSmallIntegerField(_("rangées"), default=0)
    columns = models.PositiveSmallIntegerField(_("colonnes"), default=0)
    total_seats = models.PositiveSmallIntegerField(_("places vendables"), default=0)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("plan de bus")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"


class PlanSeat(_CompanyScoped):
    class SeatType(models.TextChoices):
        STANDARD = "STANDARD", _("Standard")
        VIP      = "VIP",      _("VIP")
        DRIVER   = "DRIVER",   _("Chauffeur")
        CREW     = "CREW",     _("Personnel")

    plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan"),
                             on_delete=models.CASCADE, related_name="seats")
    seat_number = models.CharField(_("numéro"), max_length=10)
    row = models.PositiveSmallIntegerField(_("rangée"))
    column = models.PositiveSmallIntegerField(_("colonne"))
    seat_type = models.CharField(_("type"), max_length=10, choices=SeatType.choices,
                                 default=SeatType.STANDARD)
    is_sellable = models.BooleanField(_("vendable"), default=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("siège du plan")
        ordering = ["plan", "row", "column"]
        unique_together = [("plan", "seat_number"), ("plan", "row", "column")]

    def __str__(self):
        return f"{self.plan.code} · {self.seat_number}"


class VehicleSeatingAssignment(_CompanyScoped):
    vehicle = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                on_delete=models.PROTECT, related_name="seating_assignments")
    seating_plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan de bus"),
                                     on_delete=models.PROTECT, related_name="vehicle_assignments")
    valid_from = models.DateField(_("valide à partir du"))
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("affectation de plan")
        ordering = ["-valid_from"]

    def __str__(self):
        return f"{self.vehicle} → {self.seating_plan.code}"
```

- [ ] **Step 2: exports + admin**

Append to `models/__init__.py`: `from .seating import SeatingPlan, PlanSeat, VehicleSeatingAssignment` and add the three names to `__all__`. Add them to `admin.site.register([...])`.

- [ ] **Step 3: migrate + verify + commit**
```bash
../env/bin/python manage.py makemigrations voyages_config && ../env/bin/python manage.py migrate voyages_config && ../env/bin/python manage.py check
git add -A && git commit -m "feat(voyages-config): seating models (SeatingPlan, PlanSeat, VehicleSeatingAssignment)"
```
Expected: migration `0002` applies, check clean.

---

## Task 3: Commercial, consignment, scheduling, loyalty, settings models

**Files:**
- Create: `apps/voyages_config/models/commercial.py`, `scheduling.py`, `loyalty.py`, `settings.py`
- Modify: `models/__init__.py`, `admin.py`
- Create: migration `0003`

**Interfaces:**
- Produces: `FareClass`, `TimeSlot`, `ConsignmentNature`, `ConsignmentType`, `ServicePattern`, `LoyaltyRule`, `VoyagesSettings`.

- [ ] **Step 1: commercial.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class FareClass(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    rank = models.PositiveSmallIntegerField(_("rang"), default=0)
    color = models.CharField(_("couleur"), max_length=7, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie tarifaire")
        ordering = ["rank", "code"]

    def __str__(self):
        return self.name


class TimeSlot(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=100)
    start_time = models.TimeField(_("début"))
    end_time = models.TimeField(_("fin"))
    ordering = models.PositiveSmallIntegerField(_("ordre"), default=0)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("plage horaire")
        ordering = ["ordering", "start_time"]

    def __str__(self):
        return self.label


class ConsignmentNature(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    is_fragile = models.BooleanField(_("fragile"), default=False)
    requires_declaration = models.BooleanField(_("déclaration requise"), default=False)
    is_prohibited = models.BooleanField(_("interdit"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("nature de colis")
        ordering = ["name"]

    def __str__(self):
        return self.name


class ConsignmentType(_CompanyScoped):
    class AppliesTo(models.TextChoices):
        BAGGAGE = "BAGGAGE", _("Bagage")
        PARCEL  = "PARCEL",  _("Colis")
        BOTH    = "BOTH",    _("Les deux")

    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=150)
    nature = models.ForeignKey("voyages_config.ConsignmentNature", verbose_name=_("nature"),
                               on_delete=models.PROTECT, related_name="types")
    max_weight_kg = models.DecimalField(_("poids max (kg)"), max_digits=8, decimal_places=2, null=True, blank=True)
    max_volume_m3 = models.DecimalField(_("volume max (m³)"), max_digits=8, decimal_places=3, null=True, blank=True)
    applies_to = models.CharField(_("s'applique à"), max_length=8,
                                  choices=AppliesTo.choices, default=AppliesTo.BOTH)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de colis")
        ordering = ["code"]

    def __str__(self):
        return self.label
```

- [ ] **Step 2: scheduling.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class ServicePattern(_CompanyScoped):
    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.PROTECT, related_name="service_patterns")
    time_slot = models.ForeignKey("voyages_config.TimeSlot", verbose_name=_("plage horaire"),
                                  on_delete=models.PROTECT, related_name="service_patterns")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.PROTECT, related_name="service_patterns")
    default_seating_plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan par défaut"),
                                             on_delete=models.SET_NULL, null=True, blank=True,
                                             related_name="service_patterns")
    monday = models.BooleanField(_("lundi"), default=False)
    tuesday = models.BooleanField(_("mardi"), default=False)
    wednesday = models.BooleanField(_("mercredi"), default=False)
    thursday = models.BooleanField(_("jeudi"), default=False)
    friday = models.BooleanField(_("vendredi"), default=False)
    saturday = models.BooleanField(_("samedi"), default=False)
    sunday = models.BooleanField(_("dimanche"), default=False)
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("planification")
        ordering = ["route", "time_slot"]

    def __str__(self):
        return f"{self.route.code} · {self.time_slot.label}"
```

- [ ] **Step 3: loyalty.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class LoyaltyRule(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100, default="Programme fidélité")
    points_per_one_way = models.PositiveSmallIntegerField(_("points aller simple"), default=1)
    points_per_round_trip = models.PositiveSmallIntegerField(_("points aller-retour"), default=2)
    reward_threshold = models.PositiveSmallIntegerField(_("seuil de récompense"), default=10)
    reward_label = models.CharField(_("récompense"), max_length=150, default="1 billet gratuit")
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("règle de fidélité")
        ordering = ["name"]

    def __str__(self):
        return self.name
```

- [ ] **Step 4: settings.py**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class VoyagesSettings(_CompanyScoped):
    departure_lead_hours = models.PositiveSmallIntegerField(_("délai de démarrage (h)"), default=24)
    arrival_grace_hours = models.PositiveSmallIntegerField(_("délai d'arrêt (h)"), default=48)
    ticket_expiry_days = models.PositiveSmallIntegerField(_("expiration billet (jours)"), default=7)
    shift_duration_hours = models.PositiveSmallIntegerField(_("durée de quart (h)"), default=8)
    document_alert_days = models.PositiveSmallIntegerField(_("alerte documents (jours)"), default=30)
    archive_delay_days = models.PositiveSmallIntegerField(_("délai d'archivage (jours)"), default=365)
    auto_print_default = models.BooleanField(_("impression auto par défaut"), default=False)
    sms_notification_default = models.BooleanField(_("SMS par défaut"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("paramètres voyages")

    def __str__(self):
        return f"Paramètres voyages ({self.company_id or 'global'})"
```

- [ ] **Step 5: exports + admin + migrate + commit**

Append all seven models to `models/__init__.py` (`from .commercial import ...`, `from .scheduling import ServicePattern`, `from .loyalty import LoyaltyRule`, `from .settings import VoyagesSettings`) and `__all__`; register in admin.
```bash
../env/bin/python manage.py makemigrations voyages_config && ../env/bin/python manage.py migrate voyages_config && ../env/bin/python manage.py check
git add -A && git commit -m "feat(voyages-config): commercial, consignment, scheduling, loyalty, settings models"
```
Expected: migration `0003` applies, check clean.

---

## Task 4: Config API — simple reference tables (scoped CRUD + bulk-delete)

**Files:**
- Create: `apps/voyages_config/config_api/__init__.py`, `common.py`, `serializers.py`, `views.py`
- Create: `apps/voyages_config/urls.py`
- Modify: `api/v1/router.py` (add `path("voyages/config/", include("apps.voyages_config.urls"))`)

**Interfaces:**
- Consumes: models from Tasks 1–3.
- Produces: endpoints `/api/v1/voyages/config/<resource>/` (+ `<id>/`, `+ bulk-delete/`) for: `towns`, `service-points`, `fare-classes`, `time-slots`, `consignment-natures`, `consignment-types`, `loyalty-rules`. Factories `_pair`/`_bulk` reused pattern.

- [ ] **Step 1: copy the scoped-config kernel**

Create `apps/voyages_config/config_api/common.py` — **identical** to `apps/fleet/config_api/common.py` (functions `scope_company_id`, `resolve_company_or_global`, `scoped_qs`, `ensure_unique`). `config_api/__init__.py` empty.

- [ ] **Step 2: serializers (read/write) for the simple tables**

`config_api/serializers.py` — a `_ScopeMixin` exposing `scope` (`"global"` if `company_id is None` else `"company"`), read serializers listing each model's fields + `company`, `scope`, `is_active`, `created_at`, `updated_at`; write serializers (plain `serializers.Serializer`) with the writable fields. Cover: `TownRead/Write` (name, code, region), `ServicePointRead/Write` (town_id, code, name, is_station, station_kind, latitude, longitude), `FareClassRead/Write` (code, name, rank, color), `TimeSlotRead/Write` (code, label, start_time, end_time, ordering), `ConsignmentNatureRead/Write` (code, name, is_fragile, requires_declaration, is_prohibited), `ConsignmentTypeRead/Write` (code, label, nature_id, max_weight_kg, max_volume_m3, applies_to), `LoyaltyRuleRead/Write` (name, points_per_one_way, points_per_round_trip, reward_threshold, reward_label, valid_from, valid_to). Mirror `apps/fleet/config_api/serializers.py` shape exactly (including `is_active` default true on writes).

> For FK write fields (`town_id`, `nature_id`) the generic `_ConfigListView._create` passes `**data` to `objects.create`, so name them `town_id`/`nature_id` (Django accepts `<fk>_id` kwargs). Validate the FK belongs to scope in a `_create`/`_apply` override (subclass the factory view for ServicePoint & ConsignmentType — see Step 4).

- [ ] **Step 3: factory views for name/simple tables**

`config_api/views.py` — copy the `_ConfigListView`/`_ConfigDetailView`/`_ConfigBulkDeleteView` + `_pair`/`_bulk` factories from fleet **verbatim**, importing the voyages_config models. Generate for the tables whose `unique_field` is straightforward:
```python
TownListView, TownDetailView = _pair(Town, S.TownRead, S.TownWrite, unique="name", search=("name", "code"))
FareClassListView, FareClassDetailView = _pair(FareClass, S.FareClassRead, S.FareClassWrite, unique="code", search=("code", "name"))
TimeSlotListView, TimeSlotDetailView = _pair(TimeSlot, S.TimeSlotRead, S.TimeSlotWrite, unique="code", search=("code", "label"))
ConsignmentNatureListView, ConsignmentNatureDetailView = _pair(ConsignmentNature, S.ConsignmentNatureRead, S.ConsignmentNatureWrite, unique="code", search=("code", "name"))
LoyaltyRuleListView, LoyaltyRuleDetailView = _pair(LoyaltyRule, S.LoyaltyRuleRead, S.LoyaltyRuleWrite, unique="name", search=("name",))
TownBulkDeleteView = _bulk(Town); FareClassBulkDeleteView = _bulk(FareClass)
TimeSlotBulkDeleteView = _bulk(TimeSlot); ConsignmentNatureBulkDeleteView = _bulk(ConsignmentNature)
LoyaltyRuleBulkDeleteView = _bulk(LoyaltyRule)
```

- [ ] **Step 4: FK-validating views for ServicePoint & ConsignmentType**

Subclass the list/detail factory to resolve+validate the FK against scope. Example ServicePoint:
```python
def _cfg(model_cls, cid, company_id):
    if not cid:
        return None
    from django.db.models import Q
    return model_cls.objects.filter(Q(company_id=company_id) | Q(company__isnull=True),
                                    id=cid, is_deleted=False).first()


class ServicePointListView(_ConfigListView):
    model = ServicePoint; read = S.ServicePointRead; write = S.ServicePointWrite
    unique_field = "code"; search_fields = ["code", "name"]
    def _create(self, company, data, user):
        town = _cfg(Town, data.pop("town_id", None), company.id if company else None)
        return ServicePoint.objects.create(company=company, created_by=user, town=town, **data)


class ServicePointDetailView(_ConfigDetailView):
    model = ServicePoint; read = S.ServicePointRead; write = S.ServicePointWrite; unique_field = "code"
    def _apply(self, obj, data):
        if "town_id" in data:
            obj.town = _cfg(Town, data.pop("town_id"), obj.company_id)
        for k, v in data.items():
            setattr(obj, k, v)
ServicePointBulkDeleteView = _bulk(ServicePoint)
```
Mirror the same for `ConsignmentType` (resolve `nature_id` → `ConsignmentType.objects.filter(... applies_to unaffected)`), `unique="code"`, `search=("code","label")`.

- [ ] **Step 5: urls + router**

`apps/voyages_config/urls.py` — `urlpatterns` with, for each resource: `path("<resource>/", ListView.as_view())`, `path("<resource>/<uuid:pk>/", DetailView.as_view())`, `path("<resource>/bulk-delete/", BulkDeleteView.as_view())`. Resources & slugs: `towns`, `service-points`, `fare-classes`, `time-slots`, `consignment-natures`, `consignment-types`, `loyalty-rules`.
In `api/v1/router.py`, after the `fleet/` include add:
```python
    path("voyages/config/", include("apps.voyages_config.urls")),
```

- [ ] **Step 6: verify + commit**
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.voyages_config import urls as u; print('patterns', len(u.urlpatterns))
from apps.voyages_config.models import Town
from apps.system_config.models import Company
from apps.authentication.models import User
u_=User.objects.first(); c=Company.objects.first()
t=Town.objects.create(company=c, name='Douala', created_by=u_); print('town', t); t.delete()"
git add -A && git commit -m "feat(voyages-config): scoped CRUD API for simple reference tables"
```
Expected: check clean, patterns printed, town created.

---

## Task 5: Route + escales API

**Files:**
- Create: `apps/voyages_config/config_api/route_views.py` (or append to `views.py`)
- Modify: `apps/voyages_config/config_api/serializers.py`, `urls.py`

**Interfaces:**
- Produces: `routes/`, `routes/<id>/`, `routes/<id>/stops/`, `routes/<id>/stops/<stop_id>/`. RouteRead includes nested `stops` (ordered) with `service_point_name`, `is_station`; RouteWrite validates endpoints are stations.

- [ ] **Step 1: serializers**

Add `RouteStopRead` (id, service_point, service_point_name `source="service_point.name"`, is_station `source="service_point.is_station"`, sequence, distance_from_origin_km, offset_from_departure), `RouteRead` (id, code, label, origin, origin_name `source="origin.name"`, destination, destination_name, distance_km, estimated_duration, scope, is_active, stops=RouteStopRead(many), created_at, updated_at), `RouteWrite` (code, label, origin_id, destination_id, distance_km, estimated_duration), `RouteStopWrite` (service_point_id, sequence, distance_from_origin_km, offset_from_departure).

- [ ] **Step 2: RouteListView/DetailView with station validation**

```python
class RouteListView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request):
        qs = scoped_qs(Route, scope_company_id(request)).select_related("origin","destination").prefetch_related("stops__service_point")
        term = request.query_params.get("search")
        if term: qs = qs.filter(Q(code__icontains=term)|Q(label__icontains=term))
        p = StandardResultsSetPagination(); page = p.paginate_queryset(qs, request)
        return p.get_paginated_response(S.RouteRead(page, many=True).data)
    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err: return err
        payload = S.RouteWrite(data=request.data); payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data); cid = company.id if company else None
        origin = _cfg(ServicePoint, d.pop("origin_id"), cid); dest = _cfg(ServicePoint, d.pop("destination_id"), cid)
        if not origin or not dest: return error_response("Point de service introuvable.", status_code=404)
        if not origin.is_station or not dest.is_station: return error_response("Origine et destination doivent être des gares.")
        if origin.id == dest.id: return error_response("Origine et destination doivent différer.")
        r = Route.objects.create(company=company, created_by=request.user, origin=origin, destination=dest, **d)
        return created_response(S.RouteRead(r).data)
```
`RouteDetailView` — get/patch (same validation when origin_id/destination_id present)/delete (soft). Reuse `_cfg`, `scoped_qs`.

- [ ] **Step 3: nested stops views**

`RouteStopListView` (GET list ordered by sequence for the route; POST create — resolve `service_point_id` via `_cfg`, set `route`), `RouteStopDetailView` (PATCH/DELETE a stop). Guard the route belongs to scope. On POST default `sequence` to `max(existing)+1` if omitted.

- [ ] **Step 4: urls**

Add:
```python
    path("routes/", views.RouteListView.as_view()),
    path("routes/<uuid:pk>/", views.RouteDetailView.as_view()),
    path("routes/<uuid:route_id>/stops/", views.RouteStopListView.as_view()),
    path("routes/<uuid:route_id>/stops/<uuid:stop_id>/", views.RouteStopDetailView.as_view()),
```

- [ ] **Step 5: verify + commit**
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.voyages_config.models import Town, ServicePoint, Route, RouteStop
from apps.system_config.models import Company; from apps.authentication.models import User
u=User.objects.first(); c=Company.objects.first()
t=Town.objects.create(company=c,name='V',created_by=u)
a=ServicePoint.objects.create(company=c,town=t,code='A',name='A',is_station=True,created_by=u)
b=ServicePoint.objects.create(company=c,town=t,code='B',name='B',is_station=True,created_by=u)
m=ServicePoint.objects.create(company=c,town=t,code='M',name='Mid',is_station=False,created_by=u)
r=Route.objects.create(company=c,code='A-B',origin=a,destination=b,created_by=u)
RouteStop.objects.create(company=c,route=r,service_point=m,sequence=1,created_by=u)
print('stops', r.stops.count())
[x.delete() for x in [r,a,b,m,t]]"
git add -A && git commit -m "feat(voyages-config): Route + escales API with station-endpoint validation"
```
Expected: check clean, `stops 1`.

---

## Task 6: SeatingPlan (bulk seats) + VehicleSeatingAssignment API

**Files:**
- Modify: `apps/voyages_config/config_api/serializers.py`, `views.py`, `urls.py`

**Interfaces:**
- Produces: `seating-plans/`, `seating-plans/<id>/`, `seating-plans/<id>/seats/` (GET list; PUT bulk-replace), `vehicle-seating-assignments/` (+ `<id>/`, bulk-delete).

- [ ] **Step 1: serializers**

`PlanSeatRead` (id, seat_number, row, column, seat_type, is_sellable), `SeatingPlanRead` (id, code, name, rows, columns, total_seats, scope, is_active, seats=PlanSeatRead(many), timestamps), `SeatingPlanWrite` (code, name, rows, columns), `PlanSeatWrite` (seat_number, row, column, seat_type, is_sellable), `SeatBulkWrite` (`seats = PlanSeatWrite(many=True)`). `VehicleSeatingAssignmentRead` (id, vehicle, vehicle_plate `source="vehicle.license_plate"`, seating_plan, seating_plan_code `source="seating_plan.code"`, valid_from, valid_to, is_active), `VehicleSeatingAssignmentWrite` (vehicle_id, seating_plan_id, valid_from, valid_to).

- [ ] **Step 2: SeatingPlan views + bulk seats**

`SeatingPlanListView`/`DetailView` via a factory subclass (`unique="code"`, `search=("code","name")`, prefetch `seats`). Add:
```python
class SeatingPlanSeatsView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request, plan_id):
        plan = scoped_qs(SeatingPlan, scope_company_id(request)).filter(id=plan_id).first()
        if not plan: return error_response("Introuvable.", status_code=404)
        return success_response(S.PlanSeatRead(plan.seats.filter(is_deleted=False).order_by("row","column"), many=True).data)
    def put(self, request, plan_id):
        plan = scoped_qs(SeatingPlan, scope_company_id(request)).filter(id=plan_id).first()
        if not plan: return error_response("Introuvable.", status_code=404)
        payload = S.SeatBulkWrite(data=request.data); payload.is_valid(raise_exception=True)
        seats = payload.validated_data["seats"]
        from django.db import transaction
        with transaction.atomic():
            plan.seats.all().delete()  # hard replace of the layout
            objs = [PlanSeat(company=plan.company, plan=plan, created_by=request.user, **s) for s in seats]
            PlanSeat.objects.bulk_create(objs)
            plan.total_seats = sum(1 for s in seats if s.get("is_sellable", True))
            plan.updated_by = request.user; plan.save(update_fields=["total_seats","updated_by","updated_at"])
        return success_response(S.SeatingPlanRead(plan).data)
```

- [ ] **Step 3: VehicleSeatingAssignment views**

List/create (resolve `vehicle_id` via `fleet.Vehicle` scoped to company, `seating_plan_id` via `_cfg`), detail patch/delete, bulk-delete. Vehicle lookup: `from apps.fleet.models import Vehicle; Vehicle.objects.filter(id=..., company_id=cid, is_deleted=False).first()`.

- [ ] **Step 4: urls + verify + commit**

Add the seating-plans, seats, and vehicle-seating-assignments paths. Then:
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.voyages_config.models import SeatingPlan, PlanSeat
from apps.system_config.models import Company; from apps.authentication.models import User
u=User.objects.first(); c=Company.objects.first()
p=SeatingPlan.objects.create(company=c,code='BUS70',name='70',rows=18,columns=5,created_by=u)
PlanSeat.objects.bulk_create([PlanSeat(company=c,plan=p,seat_number='1',row=1,column=1,created_by=u)])
print('seats', p.seats.count()); p.delete()"
git add -A && git commit -m "feat(voyages-config): SeatingPlan bulk-seats + VehicleSeatingAssignment API"
```
Expected: check clean, `seats 1`.

---

## Task 7: VoyagesSettings + ServicePattern API

**Files:**
- Modify: `apps/voyages_config/config_api/serializers.py`, `views.py`, `urls.py`

**Interfaces:**
- Produces: `settings/` (GET get-or-create per company; PATCH), `service-patterns/` (+ `<id>/`, bulk-delete).

- [ ] **Step 1: serializers**

`VoyagesSettingsRead` (all 8 fields + scope), `VoyagesSettingsWrite` (all 8 fields, all `required=False`). `ServicePatternRead` (id, route, route_code `source="route.code"`, time_slot, time_slot_label, fare_class, fare_class_name, default_seating_plan, weekday booleans, valid_from, valid_to, scope, is_active), `ServicePatternWrite` (route_id, time_slot_id, fare_class_id, default_seating_plan_id, 7 weekday booleans, valid_from, valid_to).

- [ ] **Step 2: settings view (get-or-create)**
```python
class VoyagesSettingsView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err: return err
        obj, _ = VoyagesSettings.objects.get_or_create(company=company, defaults={"created_by": request.user})
        return success_response(S.VoyagesSettingsRead(obj).data)
    def patch(self, request):
        company, err = resolve_company_or_global(request)
        if err: return err
        obj, _ = VoyagesSettings.objects.get_or_create(company=company, defaults={"created_by": request.user})
        payload = S.VoyagesSettingsWrite(data=request.data, partial=True); payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items(): setattr(obj, k, v)
        obj.updated_by = request.user; obj.save()
        return success_response(S.VoyagesSettingsRead(obj).data)
```

- [ ] **Step 3: ServicePattern views**

List/create (resolve route_id/time_slot_id/fare_class_id/default_seating_plan_id via `_cfg`), detail, bulk-delete. `unique` not enforced (multiple patterns per route allowed) — use a plain list/create without `ensure_unique`.

- [ ] **Step 4: urls + verify + commit**

Add `settings/`, `service-patterns/…`. Then `manage.py check` + fresh-DB migrate:
```bash
rm -f /tmp/vc.sqlite3
DATABASE_URL="sqlite:////tmp/vc.sqlite3" ../env/bin/python manage.py migrate 2>&1 | grep -i "voyages_config\|error" | head
../env/bin/python manage.py makemigrations --check --dry-run
git add -A && git commit -m "feat(voyages-config): VoyagesSettings + ServicePattern API"
```
Expected: all voyages_config migrations apply on fresh DB; no drift.

---

## Task 8: Frontend scaffold — models, services, api.config, routing, sidebar, parent

**Files:**
- Create: `angular/src/_api/models/voyages-config.models.ts`
- Create: `angular/src/_api/services/voyages-config/*.service.ts`
- Create: `angular/src/_api/pages/voyages-config/voyages-config.component.ts` (parent router-outlet)
- Modify: `angular/src/_api/config/api.config.ts`, `app/core/helpers/routes.ts`, `app/core/service/sidebar/sidebar.service.ts`, `app/features/pages/pages.routes.ts`

**Interfaces:**
- Produces: `VOYAGES_CONFIG` api block, typed models, one service per resource (extending `BaseConfigService` where CRUD is generic), sidebar « Config Voyages », routes under `/voyages-config/*`.

- [ ] **Step 1: api.config block**

Add to `api.config.ts` (mirror `FLEET_CONFIG`), `const VC = `${API_BASE}/voyages/config`;`:
```typescript
export const VOYAGES_CONFIG = {
  towns: `${VC}/towns/`, town: (id:string)=>`${VC}/towns/${id}/`,
  servicePoints: `${VC}/service-points/`, servicePoint:(id:string)=>`${VC}/service-points/${id}/`,
  routes: `${VC}/routes/`, route:(id:string)=>`${VC}/routes/${id}/`,
  routeStops:(id:string)=>`${VC}/routes/${id}/stops/`, routeStop:(id:string,sid:string)=>`${VC}/routes/${id}/stops/${sid}/`,
  seatingPlans: `${VC}/seating-plans/`, seatingPlan:(id:string)=>`${VC}/seating-plans/${id}/`,
  seatingPlanSeats:(id:string)=>`${VC}/seating-plans/${id}/seats/`,
  vehicleSeatingAssignments: `${VC}/vehicle-seating-assignments/`, vehicleSeatingAssignment:(id:string)=>`${VC}/vehicle-seating-assignments/${id}/`,
  fareClasses: `${VC}/fare-classes/`, fareClass:(id:string)=>`${VC}/fare-classes/${id}/`,
  timeSlots: `${VC}/time-slots/`, timeSlot:(id:string)=>`${VC}/time-slots/${id}/`,
  consignmentNatures: `${VC}/consignment-natures/`, consignmentNature:(id:string)=>`${VC}/consignment-natures/${id}/`,
  consignmentTypes: `${VC}/consignment-types/`, consignmentType:(id:string)=>`${VC}/consignment-types/${id}/`,
  servicePatterns: `${VC}/service-patterns/`, servicePattern:(id:string)=>`${VC}/service-patterns/${id}/`,
  loyaltyRules: `${VC}/loyalty-rules/`, loyaltyRule:(id:string)=>`${VC}/loyalty-rules/${id}/`,
  settings: `${VC}/settings/`,
};
```

- [ ] **Step 2: models**

`voyages-config.models.ts` with interfaces (all extending a `Base { id; company: string|null; scope: 'global'|'company'; is_active: boolean; created_at; updated_at }`): `Town`, `ServicePoint`, `Route`, `RouteStop`, `SeatingPlan`, `PlanSeat`, `VehicleSeatingAssignment`, `FareClass`, `TimeSlot`, `ConsignmentNature`, `ConsignmentType`, `ServicePattern`, `LoyaltyRule`, `VoyagesSettings` — fields matching the read serializers.

- [ ] **Step 3: services**

For the generic-CRUD resources (towns, service-points, fare-classes, time-slots, consignment-natures, consignment-types, loyalty-rules, vehicle-seating-assignments, service-patterns): one thin service each extending `BaseConfigService<T>` (copy `angular/src/_api/services/fleet-config/base.config.service.ts` import). For `routes` (with stops), `seating-plans` (with seats), and `settings`: dedicated services with the extra methods (`listStops/addStop/updateStop/deleteStop`, `getSeats/replaceSeats`, `getSettings/updateSettings`).

- [ ] **Step 4: parent component + routes + sidebar**

`voyages-config.component.ts` — standalone with `<router-outlet>` (copy `pages/fleet-config/fleet-config.component.ts`). Add route constants to `routes.ts` (`vcTowns`, `vcServicePoints`, `vcRoutes`, `vcSeatingPlans`, `vcFareClasses`, `vcTimeSlots`, `vcConsignmentNatures`, `vcConsignmentTypes`, `vcServicePatterns`, `vcLoyalty`, `vcVehicleAssignments`, `vcSettings` → `/voyages-config/<slug>`). Add a `{ path: 'voyages-config', ... children: [...] }` block to `pages.routes.ts` (screens created in Tasks 9–12; add each child as its screen lands or stub now and fill). Add a « Config Voyages » group to `sidebar.service.ts` `menu: [` with subMenus for each screen.

- [ ] **Step 5: verify + commit**
```bash
cd ../angular && npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-config-fe): models, services, api.config, routing, sidebar, parent"
```
Expected: build succeeds (stub screens or lazy imports resolved as they are added in 9–12; if adding routes before screens, add the child routes in Task 9/11/12 to keep build green — see each task).

> To keep the build green, add each child route in `pages.routes.ts` in the same task that creates its screen (Tasks 9–12), not here. Here, add only the parent `voyages-config` route with an empty `children: []` plus a default redirect.

---

## Task 9: Simple table screens

**Files:**
- Create under `angular/src/_api/pages/voyages-config/`: `towns/`, `service-points/`, `fare-classes/`, `time-slots/`, `consignment-natures/`, `consignment-types/`, `loyalty-rules/`, `vehicle-assignments/` (component .ts + .html each)
- Modify: `pages.routes.ts` (add these children), sidebar already has entries

**Interfaces:**
- Consumes: services + models from Task 8.

- [ ] **Step 1: build each screen from the Config Flotte template**

For each resource, copy the structure of a Config Flotte screen (e.g. `pages/fleet-config/vehicle-categories/`): standalone component with `list/filtered/search/selected(Set)/form/editId`, `load/applyFilter/bulkDelete/openCreate/openEdit/submit/delete`, `info-banner`, table with select-all + per-row edit/delete (Tabler `ti ti-edit`/`ti ti-trash` **with text labels** and spaced `btn btn-sm` buttons — per the fleet refinements), global rows read-only. Field forms:
  - **Villes**: name*, code, region.
  - **Points de service**: town (dropdown from TownService), code*, name*, is_station (switch), station_kind (select, shown when is_station), latitude, longitude.
  - **Catégories tarifaires**: code*, name*, rank, color (color input).
  - **Plages horaires**: code*, label*, start_time, end_time, ordering.
  - **Natures de colis**: code*, name*, is_fragile, requires_declaration, is_prohibited (switches).
  - **Types de colis**: code*, label*, nature (dropdown), max_weight_kg, max_volume_m3, applies_to (select BAGGAGE/PARCEL/BOTH).
  - **Fidélité**: name*, points_per_one_way, points_per_round_trip, reward_threshold, reward_label, valid_from, valid_to.
  - **Affectations de plan**: vehicle (dropdown from fleet VehicleService — this is fleet, data shows), seating_plan (dropdown), valid_from*, valid_to.

- [ ] **Step 2: routes + build + commit**

Add each screen as a child in the `voyages-config` route block. Then:
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-config-fe): simple reference table screens"
```
Expected: build succeeds.

---

## Task 10: Trajets screen (Route editor with escales)

**Files:**
- Create: `angular/src/_api/pages/voyages-config/routes/routes.component.{ts,html}`
- Modify: `pages.routes.ts`

- [ ] **Step 1: component**

List of routes (code, origin→destination, #escales, actions). Editor modal: code*, label, origin (dropdown of `ServicePoint` filtered `is_station=true`), destination (same), distance_km, estimated_duration. Below, an **escales editor**: table of current stops (sequence, service_point name, distance) with delete; a "**+ Ajouter escale**" row — select any `ServicePoint`, optional distance/offset — calling `addStop`. On create, first save the route (get id), then stops are managed against that id (same pattern as Contracts→recurring-costs in fleet). Reorder by sequence (simple number input or up/down). Info-banner explaining escales feed segment pricing later.

- [ ] **Step 2: route + build + commit**
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-config-fe): Trajets screen with escales editor"
```
Expected: build succeeds.

---

## Task 11: Plans de bus screen (visual seat-map editor)

**Files:**
- Create: `angular/src/_api/pages/voyages-config/seating-plans/seating-plans.component.{ts,html,scss}`
- Modify: `pages.routes.ts`

- [ ] **Step 1: component + visual editor**

List of plans (code, name, rows×cols, sellable total). Editor: header fields code*, name*, rows*, columns*. A **grid canvas** rendered `rows × columns` of cells; component state `seats: Map<"r,c", {seat_number,seat_type,is_sellable}>`. Interactions: click empty cell → add seat (auto-number = current sellable count+1, editable); click seat → open a small popover to set `seat_type` (colour-coded: STANDARD grey, VIP gold, DRIVER dark, CREW blue), toggle `is_sellable`, or remove; empty cells are aisles. Live "Places vendables: N/total" counter. **Save** builds the `seats[]` array and calls `replaceSeats(planId, {seats})` (PUT). On open-edit, `getSeats` populates the grid. `.scss` gives the seat cells a bus-seat look (rounded squares, colour by type, hover lift) — make it visually appealing per the user's emphasis.

- [ ] **Step 2: route + build + commit**
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-config-fe): visual seat-map editor for bus plans"
```
Expected: build succeeds.

---

## Task 12: Planifications + Paramètres screens

**Files:**
- Create: `angular/src/_api/pages/voyages-config/service-patterns/service-patterns.component.{ts,html}`, `settings/settings.component.{ts,html}`
- Modify: `pages.routes.ts`

- [ ] **Step 1: Planifications screen**

Table + modal: route (dropdown), time_slot (dropdown), fare_class (dropdown), default_seating_plan (dropdown), 7 weekday checkboxes, valid_from, valid_to. Standard CRUD via ServicePatternService.

- [ ] **Step 2: Paramètres screen**

Single settings form (no list): loads `getSettings()`, binds the 8 fields (number inputs + 2 switches), saves via `updateSettings()` (PATCH). Info-banner.

- [ ] **Step 3: route + build + commit**
```bash
npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-config-fe): Planifications + Paramètres Voyages screens"
```
Expected: build succeeds.

---

## Self-Review

- **Spec coverage:** Network → Task 1,9,10; Seating → Task 2,6,11; Commercial/consignment → Task 3,4,9; Scheduling(ServicePattern) → Task 3,7,12; Loyalty → Task 3,4,9; Settings → Task 3,7,12; API → Tasks 4–7; Frontend + 2 special editors → Tasks 8–12; multitenant scoped-CRUD + bulk-delete → Task 4 (kernel copied); empty treasury/tiers dropdowns → none needed (noted). All covered.
- **Placeholders:** none — model code is complete; API/frontend repetitive parts reference the exact Config Flotte files to copy with explicit field lists.
- **Type consistency:** model field names match serializer fields and api.config slugs (`service-points`, `consignment-types`, etc.); `_cfg` helper and `scoped_qs`/`ensure_unique` reused consistently; `replaceSeats`/`getSeats`, `addStop`/`listStops` names consistent between service (Task 8) and screens (Tasks 10–11).
- **Isolation:** nothing existing modified except additive INSTALLED_APPS, router, and the 4 shared Angular files; no treasury/tiers/legacy edits.
