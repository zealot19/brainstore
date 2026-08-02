# Voyages Pricing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `voyages_pricing` app (segment `Fare` model + `resolve_fare`) and a « Tarifs » screen — per-route, per-segment, per-fare-class tariffs consumed later by Booking.

**Architecture:** New `apps.voyages_pricing` app: a `Fare` model keyed by (route, origin_point, destination_point, fare_class), company-scoped with global default; validation that points lie on the route in order; a `resolve_fare` selector; scoped-CRUD API; one Angular « Tarifs » screen. Nothing existing modified except additive `INSTALLED_APPS`, `api/v1/router.py`, and 4 shared Angular files.

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, Tabler icons.

## Global Constraints

- Commit as **shimi** — no `Co-Authored-By: Claude` trailer.
- **Do not modify or abandon** `treasury`, `tiers`, legacy `voyage`/`transport_config`/`ticketing`/`parcel`. Greenfield. No treasury/tiers imports.
- Company-scoped with global-default pattern (nullable `company`), like Config Voyages.
- French-first UI, `info-banner`, Tabler `ti` icons, spaced `btn btn-sm` action buttons.
- Python: `../env/bin/python` from `backend/`. Verify: `manage.py check`, `makemigrations --check`, fresh-DB `migrate`, shell smoke; `npx ng build`.
- Branch `feature/voyages-pricing` (stacked on `feature/voyages-gestion`, already created).
- Deferred (NOT here): generic PricingRule engine, commissions/route-costs, Booking consumption.

## File Structure

**Backend `backend/apps/voyages_pricing/`:** `apps.py`, `__init__.py`, `migrations/__init__.py`, `models/__init__.py` + `models/fare.py` (+ local `_CompanyScoped` base), `selectors/__init__.py` + `selectors/fare_selectors.py`, `services/__init__.py` + `services/fare_services.py`, `config_api/__init__.py` + `common.py` + `serializers.py` + `views.py`, `urls.py`, `admin.py`.
**Backend edits:** `config/settings/base.py`, `api/v1/router.py`.
**Frontend:** `models/voyages-pricing.models.ts`, `services/voyages-pricing/fare.service.ts`, `pages/voyages-pricing/fares/`, edits to `config/api.config.ts`, `routes.ts`, `sidebar.service.ts`, `pages.routes.ts`.

---

## Task 1: App scaffold + Fare model

**Files:**
- Create: `apps/voyages_pricing/__init__.py`, `apps.py`, `models/__init__.py`, `models/fare.py`, `admin.py`, `migrations/__init__.py`
- Modify: `config/settings/base.py` (INSTALLED_APPS after `apps.voyages_trips`)
- Create: migration `0001_initial`

**Interfaces:**
- Produces: model `Fare` (app label `voyages_pricing`).

- [ ] **Step 1: package + apps.py**

`__init__.py` empty; `migrations/__init__.py` empty.
`apps.py`:
```python
from django.apps import AppConfig


class VoyagesPricingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.voyages_pricing"
    label = "voyages_pricing"
    verbose_name = "Tarification Voyages"
```

- [ ] **Step 2: register app**

`config/settings/base.py`: after `"apps.voyages_trips",` add `"apps.voyages_pricing",`.

- [ ] **Step 3: Fare model**

`apps/voyages_pricing/models/fare.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class _CompanyScoped(BaseModel):
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, null=True, blank=True)

    class Meta(BaseModel.Meta):
        abstract = True


class Fare(_CompanyScoped):
    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.CASCADE, related_name="fares")
    origin_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("de"),
                                     on_delete=models.PROTECT, related_name="fares_from")
    destination_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("à"),
                                          on_delete=models.PROTECT, related_name="fares_to")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.PROTECT, related_name="fares")
    amount = models.DecimalField(_("montant"), max_digits=12, decimal_places=2)
    currency = models.CharField(_("devise"), max_length=3, default="XAF")
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("tarif")
        ordering = ["route", "origin_point", "destination_point"]
        unique_together = [("company", "route", "origin_point", "destination_point", "fare_class")]

    def __str__(self):
        return f"{self.route_id}: {self.origin_point_id}→{self.destination_point_id} = {self.amount}"
```

- [ ] **Step 4: models/__init__ + admin**

`models/__init__.py`: `from .fare import Fare` + `__all__ = ["Fare"]`.
`admin.py`:
```python
from django.contrib import admin
from .models import Fare

admin.site.register([Fare])
```

- [ ] **Step 5: migrate + verify + commit**
```bash
../env/bin/python manage.py makemigrations voyages_pricing && ../env/bin/python manage.py migrate voyages_pricing && ../env/bin/python manage.py check
git add -A && git commit -m "feat(voyages-pricing): app scaffold + Fare model"
```
Expected: migration `0001_initial` applies, check clean (only staticfiles warning).

---

## Task 2: Route-points helper, validation, resolution, services

**Files:**
- Create: `apps/voyages_pricing/selectors/__init__.py`, `selectors/fare_selectors.py`, `services/__init__.py`, `services/fare_services.py`

**Interfaces:**
- Produces: `route_points(route) -> list[ServicePoint]`, `point_index(route, sp) -> int|None`,
  `resolve_fare(company, route, origin_point, destination_point, fare_class, on_date=None) -> Fare|None`,
  `list_fares(company, route_id=None) -> QuerySet`; services `create_fare(...)`, `update_fare(...)`, `delete_fare(...)`.

- [ ] **Step 1: selectors (points + resolution)**

`selectors/fare_selectors.py`:
```python
from datetime import date as _date
from django.db.models import Q
from apps.voyages_config.models import RouteStop
from apps.voyages_pricing.models import Fare


def route_points(route):
    """Ordered [origin, *escales-by-sequence, destination], de-duplicated by id."""
    seq = [route.origin]
    for rs in RouteStop.objects.filter(route=route, is_deleted=False).select_related("service_point").order_by("sequence"):
        seq.append(rs.service_point)
    seq.append(route.destination)
    seen, out = set(), []
    for sp in seq:
        if sp.id not in seen:
            seen.add(sp.id)
            out.append(sp)
    return out


def point_index(route, sp):
    for i, p in enumerate(route_points(route)):
        if p.id == sp.id:
            return i
    return None


def list_fares(company, route_id=None):
    qs = (Fare.objects.filter(is_deleted=False)
          .filter(Q(company_id=company.id) | Q(company__isnull=True))
          .select_related("route", "origin_point", "destination_point", "fare_class")
          .order_by("route__code", "amount"))
    if route_id:
        qs = qs.filter(route_id=route_id)
    return qs


def resolve_fare(company, route, origin_point, destination_point, fare_class, on_date=None):
    on_date = on_date or _date.today()
    qs = (Fare.objects.filter(
            is_deleted=False, is_active=True, route=route,
            origin_point=origin_point, destination_point=destination_point, fare_class=fare_class)
          .filter(Q(company=company) | Q(company__isnull=True))
          .filter(Q(valid_from__isnull=True) | Q(valid_from__lte=on_date))
          .filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date)))
    # company-specific first, then most recent valid_from
    rows = sorted(qs, key=lambda f: (f.company_id is None, -(f.valid_from.toordinal() if f.valid_from else 0)))
    return rows[0] if rows else None
```

- [ ] **Step 2: services (create/update/delete with validation)**

`services/fare_services.py`:
```python
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_pricing.models import Fare
from apps.voyages_pricing.selectors.fare_selectors import point_index


def _validate_segment(route, origin_point, destination_point):
    oi = point_index(route, origin_point)
    di = point_index(route, destination_point)
    if oi is None or di is None:
        raise ApplicationError(_("Les points doivent appartenir au trajet."))
    if oi >= di:
        raise ApplicationError(_("Le point de départ doit précéder le point d'arrivée."))


def _ensure_unique(company, route, origin_point, destination_point, fare_class, exclude_id=None):
    qs = Fare.objects.filter(is_deleted=False, company=company, route=route,
                             origin_point=origin_point, destination_point=destination_point,
                             fare_class=fare_class)
    if exclude_id:
        qs = qs.exclude(id=exclude_id)
    if qs.exists():
        raise ApplicationError(_("Un tarif existe déjà pour ce segment et cette catégorie."))


@transaction.atomic
def create_fare(*, company, route, origin_point, destination_point, fare_class, amount,
                currency="XAF", valid_from=None, valid_to=None, user):
    _validate_segment(route, origin_point, destination_point)
    _ensure_unique(company, route, origin_point, destination_point, fare_class)
    return Fare.objects.create(
        company=company, route=route, origin_point=origin_point, destination_point=destination_point,
        fare_class=fare_class, amount=amount, currency=currency,
        valid_from=valid_from, valid_to=valid_to, created_by=user)


@transaction.atomic
def update_fare(fare, *, user, **fields):
    allowed = {"amount", "currency", "valid_from", "valid_to",
               "origin_point", "destination_point", "fare_class", "is_active"}
    for k, v in fields.items():
        if k in allowed:
            setattr(fare, k, v)
    _validate_segment(fare.route, fare.origin_point, fare.destination_point)
    _ensure_unique(fare.company, fare.route, fare.origin_point, fare.destination_point,
                   fare.fare_class, exclude_id=fare.id)
    fare.updated_by = user
    fare.save()
    return fare


def delete_fare(fare, *, user):
    fare.is_deleted = True
    fare.updated_by = user
    fare.save(update_fields=["is_deleted", "updated_by", "updated_at"])
```

- [ ] **Step 3: package exports**

`selectors/__init__.py`: `from .fare_selectors import route_points, point_index, list_fares, resolve_fare`.
`services/__init__.py`: `from .fare_services import create_fare, update_fare, delete_fare`.

- [ ] **Step 4: verify + commit**
```bash
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "from apps.voyages_pricing.selectors import resolve_fare, route_points; from apps.voyages_pricing.services import create_fare; print('OK')"
git add -A && git commit -m "feat(voyages-pricing): route-points, validation, resolve_fare, services"
```
Expected: check clean, OK.

---

## Task 3: API (serializers, views, urls) + smoke

**Files:**
- Create: `apps/voyages_pricing/config_api/__init__.py`, `common.py`, `serializers.py`, `views.py`, `apps/voyages_pricing/urls.py`
- Modify: `api/v1/router.py`

**Interfaces:**
- Produces: `/api/v1/voyages/pricing/fares/` (list `?route_id=` / create), `fares/bulk-delete/`, `fares/<id>/`, `routes/<route_id>/points/`.

- [ ] **Step 1: common scope helpers**

`config_api/common.py` — copy `scope_company_id`, `resolve_company_or_global`, `scoped_qs`, `cfg_lookup` from `apps/voyages_config/config_api/common.py` (identical helpers). `config_api/__init__.py` empty.

- [ ] **Step 2: serializers**

`config_api/serializers.py`:
```python
from rest_framework import serializers
from apps.voyages_pricing.models import Fare


class FareRead(serializers.ModelSerializer):
    scope = serializers.SerializerMethodField()
    route_code = serializers.CharField(source="route.code", read_only=True, default=None)
    origin_point_name = serializers.CharField(source="origin_point.name", read_only=True, default=None)
    destination_point_name = serializers.CharField(source="destination_point.name", read_only=True, default=None)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True, default=None)

    class Meta:
        model = Fare
        fields = ["id", "route", "route_code", "origin_point", "origin_point_name",
                  "destination_point", "destination_point_name", "fare_class", "fare_class_name",
                  "amount", "currency", "valid_from", "valid_to",
                  "company", "scope", "is_active", "created_at", "updated_at"]

    def get_scope(self, obj):
        return "global" if obj.company_id is None else "company"


class FareWrite(serializers.Serializer):
    route_id = serializers.UUIDField()
    origin_point_id = serializers.UUIDField()
    destination_point_id = serializers.UUIDField()
    fare_class_id = serializers.UUIDField()
    amount = serializers.DecimalField(max_digits=12, decimal_places=2)
    currency = serializers.CharField(max_length=3, required=False, default="XAF")
    valid_from = serializers.DateField(required=False, allow_null=True, default=None)
    valid_to = serializers.DateField(required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)
```

- [ ] **Step 3: views**

`config_api/views.py` — `FareListView` (GET scoped list with `?route_id=`; POST resolve route/points/fare_class via `cfg_lookup` against `voyages_config` models then `services.create_fare`), `FareDetailView` (GET/PATCH/DELETE; PATCH resolves any changed *_id then `services.update_fare`), `FareBulkDeleteView` (soft-delete company-owned ids), `RoutePointsView` (GET → `selectors.route_points(route)` serialised as `[{id,name,code,is_station,station_kind}]`). All `IsInstitutionAdmin`. Resolve FK ids with `cfg_lookup(Model, id, company_id)` (global-or-company). Mirror `apps/voyages_config/config_api/views.py` structure; wrap `ApplicationError` in `error_response`.

- [ ] **Step 4: urls + router**

`apps/voyages_pricing/urls.py`:
```python
from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("fares/", v.FareListView.as_view()),
    path("fares/bulk-delete/", v.FareBulkDeleteView.as_view()),
    path("fares/<uuid:pk>/", v.FareDetailView.as_view()),
    path("routes/<uuid:route_id>/points/", v.RoutePointsView.as_view()),
]
```
`api/v1/router.py`: after `voyages/trips/` add `path("voyages/pricing/", include("apps.voyages_pricing.urls")),`.

- [ ] **Step 5: verify + fresh-DB migrate + smoke + commit**
```bash
../env/bin/python manage.py check
rm -f /tmp/vp.sqlite3
DATABASE_URL="sqlite:////tmp/vp.sqlite3" ../env/bin/python manage.py migrate 2>&1 | grep -i "voyages_pricing\|error" | head
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py shell -c "
from apps.system_config.models import Company; from apps.authentication.models import User
from apps.voyages_config.models import Town, ServicePoint, Route, RouteStop, FareClass
from apps.voyages_pricing.services import create_fare
from apps.voyages_pricing.selectors import resolve_fare, route_points
from apps.core.exceptions import ApplicationError
c=Company.objects.first(); u=User.objects.first()
t=Town.objects.create(company=c,name='TP',created_by=u)
o=ServicePoint.objects.create(company=c,town=t,code='O',name='Douala',is_station=True,created_by=u)
e=ServicePoint.objects.create(company=c,town=t,code='E',name='Edea',is_station=False,created_by=u)
d=ServicePoint.objects.create(company=c,town=t,code='D',name='Yaounde',is_station=True,created_by=u)
r=Route.objects.create(company=c,code='DLA-YDE',origin=o,destination=d,created_by=u)
RouteStop.objects.create(company=c,route=r,service_point=e,sequence=1,created_by=u)
fc=FareClass.objects.create(company=c,code='CL',name='Classic',created_by=u)
full=create_fare(company=c,route=r,origin_point=o,destination_point=d,fare_class=fc,amount=4000,user=u)
seg=create_fare(company=c,route=r,origin_point=o,destination_point=e,fare_class=fc,amount=2500,user=u)
print('points', [p.code for p in route_points(r)])
print('full', resolve_fare(c,r,o,d,fc).amount, '| seg O->E', resolve_fare(c,r,o,e,fc).amount)
try:
    create_fare(company=c,route=r,origin_point=d,destination_point=o,fare_class=fc,amount=1,user=u)
    print('ERROR: out-of-order accepted')
except ApplicationError as ex:
    print('rejected out-of-order OK')
for x in [full,seg,r,fc,o,e,d,t]:
    try: x.delete()
    except Exception: pass
print('SMOKE OK')"
git add -A && git commit -m "feat(voyages-pricing): Fare API (CRUD, bulk-delete, route points) + router"
```
Expected: fresh-DB migrate applies voyages_pricing; no drift; points ['O','E','D']; full 4000, seg 2500; out-of-order rejected; SMOKE OK.

---

## Task 4: Frontend — « Tarifs » screen

**Files:**
- Create: `angular/src/_api/models/voyages-pricing.models.ts`, `services/voyages-pricing/fare.service.ts`, `pages/voyages-pricing/fares/fares.component.{ts,html}`
- Modify: `config/api.config.ts`, `app/core/helpers/routes.ts`, `app/core/service/sidebar/sidebar.service.ts`, `app/features/pages/pages.routes.ts`

**Interfaces:**
- Consumes: `Fare` API; Config Voyages `RouteService`, `FareClassService`.

- [ ] **Step 1: api.config block**

In `api.config.ts` add `const VP = `${API_BASE}/voyages/pricing`;` and:
```typescript
export const VOYAGES_PRICING = {
  fares: `${VP}/fares/`, fare: (id: string) => `${VP}/fares/${id}/`,
  faresBulkDelete: `${VP}/fares/bulk-delete/`,
  routePoints: (id: string) => `${VP}/routes/${id}/points/`,
};
```

- [ ] **Step 2: models**

`voyages-pricing.models.ts`: `RoutePoint { id; name; code; is_station: boolean; station_kind: string }` and `Fare { id; route; route_code; origin_point; origin_point_name; destination_point; destination_point_name; fare_class; fare_class_name; amount; currency; valid_from; valid_to; company: string|null; scope: 'global'|'company'; is_active: boolean; created_at; updated_at }`.

- [ ] **Step 3: service**

`services/voyages-pricing/fare.service.ts` — HttpClient: `list(routeId?)` (GET `fares` with `route_id` param), `get(id)`, `create(data)`, `update(id,data)`, `delete(id)`, `bulkDelete(ids)` (POST `faresBulkDelete`), `routePoints(routeId)` (GET). Return typed observables.

- [ ] **Step 4: Tarifs screen**

`pages/voyages-pricing/fares/fares.component.{ts,html}` (standalone, `InfoBannerComponent`):
- State: `routes` (from `RouteService`), `fareClasses` (from `FareClassService`), `selectedRoute`, `points` (from `routePoints`), `rows` (fares for route), `form`, `editId`, `selected` Set (bulk).
- On route select → `fareService.list(routeId)` + `fareService.routePoints(routeId)`.
- Table: De → À, catégorie, montant+devise, validité, périmètre, actions (edit/delete, globals read-only) + bulk-delete.
- "+ Ajouter un tarif" modal: `origin_point_id`/`destination_point_id` (dropdowns of `points`), `fare_class_id`, `amount`, `currency` (default XAF), `valid_from`/`valid_to`. Submit → create/update; reload for the route.
- Info-banner: « Fixez le tarif du trajet complet (origine → destination) puis ajoutez des tarifs par segment (escales). Ces tarifs alimenteront les réservations. »
- Follow the Config Voyages screen pattern (Tabler icons, spaced `btn btn-sm`).

- [ ] **Step 5: routes + sidebar + build + commit**

Add `vcFares: '/voyages-pricing/fares'` to `routes.ts`. Add a child `{ path: 'fares', loadComponent: ... VcFaresComponent }` under the existing `voyages-config` route block in `pages.routes.ts` (reuse that parent; the screen is config-adjacent). Add a « Tarifs » subMenu to the « Config Voyages » sidebar group (`route: routes.vcFares, base: 'fares'`). Then:
```bash
cd ../angular && npx ng build 2>&1 | grep -iE "error|generation complete" | head
git add -A && git commit -m "feat(voyages-pricing-fe): Tarifs screen (route + segment fares)"
```
Expected: build succeeds.

---

## Self-Review

- **Spec coverage:** Fare model → Task 1; route_points/validation/resolve_fare/services → Task 2; API (fares CRUD, bulk-delete, route points) → Task 3; frontend « Tarifs » → Task 4. Deferred items (rule engine, commissions, Booking use) correctly absent.
- **Placeholder scan:** model, selectors, services code complete; API views + frontend reference the exact Config Voyages patterns with explicit field lists; smoke test is concrete.
- **Type consistency:** `resolve_fare(company, route, origin_point, destination_point, fare_class, on_date)`, `route_points(route)`, `point_index(route, sp)`, `create_fare(...)`/`update_fare`/`delete_fare` names match across selectors/services/views; api.config method names (`fares`, `routePoints`, `faresBulkDelete`) match the service; serializer `*_id` write fields match `cfg_lookup` resolution.
- **Isolation:** nothing existing modified except additive INSTALLED_APPS, router, and 4 shared Angular files; no treasury/tiers imports.
