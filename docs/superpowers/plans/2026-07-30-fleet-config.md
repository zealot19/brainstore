# Config Flotte Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the 12 configurable fleet reference tables (company-scoped, with global defaults), a « Config Flotte » UI with in-app help, and relabel the existing Fleet menu to « Gestion Flotte ».

**Architecture:** New `config/` model submodule in the `fleet` app; generic scoped-CRUD base views subclassed per table (DRY); mirrors `transport_config` conventions. Frontend mirrors the transport-config screens with a canonical component reused across the name-only tables, plus a shared info-banner.

**Tech Stack:** Django + DRF (backend), Angular 21 standalone components (frontend), SQLite (dev).

## Global Constraints

- **No test framework.** Verify via `../env/bin/python manage.py check`/`migrate` + shell smoke-checks (backend) and `cd angular && npx ng build` + manual check (frontend). No pytest/jasmine.
- **Scope:** every reference row has nullable `company`. `company=NULL` = global (all institutions see it); `company=X` = that institution's own. Selectors return `Q(company_id=cid) | Q(company__isnull=True)`.
- **Uniqueness per scope** validated in the service layer (not DB), because a DB unique on a nullable FK doesn't constrain NULL rows.
- **Only `InterventionType.category` stays an enum** (CONTRACT/SERVICE/BOTH). All other lists are rows.
- **French UI**; every Config Flotte screen shows a French info banner.
- **Additive/non-breaking** — do not touch existing fleet enums/models here.
- Backend from `ERP-master/backend/` via `../env/bin/python manage.py`. Frontend from `angular/`. Commit per task. Branch `feature/fleet-config`.
- `fleet` app is mounted at `/api/v1/fleet/`; permission `IsInstitutionAdmin`; pagination `StandardResultsSetPagination`; helpers `success_response/created_response/error_response/no_content_response`, `ApplicationError`.

---

### Task 1: Config models + migration

**Files:**
- Create: `backend/apps/fleet/models/config/__init__.py`
- Create: `backend/apps/fleet/models/config/reference.py`
- Modify: `backend/apps/fleet/models/__init__.py` (export the config models)
- Create: `backend/apps/fleet/migrations/00XX_fleet_config.py` (generated)

**Interfaces:**
- Produces: models `VehicleCategoryCfg`,`VehicleType`,`FuelType`,`Transmission`,`TractionType`,`UnitCategory`,`Unit`,`Period`,`DocumentType`,`Tag`,`InterventionType`,`ActivitySector` — all with nullable `company`.

> Naming note: the fleet grouping table is named **`VehicleCategoryCfg`** (class) with `db_table`/verbose left default, to avoid confusion with `transport_config.VehicleCategory`. Its API/URL is `vehicle-categories`.

- [ ] **Step 1: Create `config/reference.py`** with all 12 models:

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


class VehicleCategoryCfg(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie de véhicule (config)"); ordering = ["name"]
    def __str__(self): return self.name


class VehicleType(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de véhicule"); ordering = ["name"]
    def __str__(self): return self.name


class FuelType(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de carburant"); ordering = ["name"]
    def __str__(self): return self.name


class Transmission(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("transmission"); ordering = ["name"]
    def __str__(self): return self.name


class TractionType(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de traction"); ordering = ["name"]
    def __str__(self): return self.name


class UnitCategory(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie d'unité"); ordering = ["name"]
    def __str__(self): return self.name


class Unit(_CompanyScoped):
    unit_category = models.ForeignKey(UnitCategory, verbose_name=_("catégorie"),
                                      on_delete=models.CASCADE, related_name="units")
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("unité"); ordering = ["unit_category", "code"]
    def __str__(self): return f"{self.code} — {self.name}"


class Period(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("période"); ordering = ["name"]
    def __str__(self): return self.name


class DocumentType(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=255)
    requires_expiration = models.BooleanField(_("expiration requise"), default=True)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de document"); ordering = ["code"]
    def __str__(self): return f"{self.code} — {self.label}"


class Tag(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    color = models.CharField(_("couleur"), max_length=7, blank=True)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("étiquette"); ordering = ["name"]
    def __str__(self): return self.name


class InterventionType(_CompanyScoped):
    class Category(models.TextChoices):
        CONTRACT = "CONTRACT", _("Contrat")
        SERVICE  = "SERVICE",  _("Service")
        BOTH     = "BOTH",     _("Contrat et Service")
    name = models.CharField(_("nom"), max_length=255)
    category = models.CharField(_("catégorie"), max_length=10,
                                choices=Category.choices, default=Category.BOTH)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type d'intervention"); ordering = ["name"]
    def __str__(self): return f"{self.name} ({self.get_category_display()})"


class ActivitySector(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=255)
    class Meta(_CompanyScoped.Meta):
        verbose_name = _("secteur d'activité"); ordering = ["code"]
    def __str__(self): return f"{self.code} — {self.name}"
```

- [ ] **Step 2: `config/__init__.py`** — re-export:

```python
from .reference import (
    VehicleCategoryCfg, VehicleType, FuelType, Transmission, TractionType,
    UnitCategory, Unit, Period, DocumentType, Tag, InterventionType, ActivitySector,
)
```

- [ ] **Step 3:** In `apps/fleet/models/__init__.py`, add: `from .config import *  # noqa` (append after existing imports).

- [ ] **Step 4: Generate + apply migration**

Run:
```bash
../env/bin/python manage.py makemigrations fleet 2>&1 | tail -6
../env/bin/python manage.py migrate fleet 2>&1 | tail -2
```
Expected: a migration adding the 12 tables; applies OK. (Rename the file to `..._fleet_config.py` for clarity if desired.)

- [ ] **Step 5: Smoke check**

Run:
```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import FuelType, Unit, UnitCategory
print('models import OK:', FuelType.__name__, Unit.__name__)
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `models import OK: FuelType Unit`.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/fleet/models/ backend/apps/fleet/migrations/
git commit -m "feat(fleet): add 12 configurable reference models (Config Flotte)"
```

---

### Task 2: Scope helpers + serializers + generic CRUD views + urls

**Files:**
- Create: `backend/apps/fleet/config_api/__init__.py`
- Create: `backend/apps/fleet/config_api/common.py`
- Create: `backend/apps/fleet/config_api/serializers.py`
- Create: `backend/apps/fleet/config_api/views.py`
- Modify: `backend/apps/fleet/urls.py`

**Interfaces:**
- Produces: `/api/v1/fleet/config/<resource>/` list+create and `/<id>/` detail for all 12 tables. Read serializers expose `company` (+ `scope` = "global"/"company") and fields; write serializers accept flat fields.

- [ ] **Step 1: `common.py`** — scope + uniqueness helpers:

```python
from django.db.models import Q
from apps.system_config.models import Company
from apps.core.exceptions import ApplicationError
from apps.core.responses import error_response


def scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def resolve_company_or_global(request):
    """Company admin -> own company; superuser -> body/query company_id or None (global)."""
    if request.user.is_superuser:
        cid = request.data.get("company_id") or request.query_params.get("company_id")
        if not cid:
            return None, None  # global row
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response("Company not found.", status_code=404)
    if not request.user.company_id:
        return None, error_response("Votre compte n'est lié à aucune institution.")
    return request.user.company, None


def scoped_qs(model, company_id):
    qs = model.objects.filter(is_deleted=False)
    if company_id:
        return qs.filter(Q(company_id=company_id) | Q(company__isnull=True))
    return qs  # superuser without company_id sees all


def ensure_unique(model, company, field, value, exclude_id=None):
    qs = model.objects.filter(is_deleted=False, company=company, **{field: value})
    if exclude_id:
        qs = qs.exclude(id=exclude_id)
    if qs.exists():
        raise ApplicationError(f"Une entrée « {value} » existe déjà dans ce périmètre.")
```

- [ ] **Step 2: `serializers.py`** — one read + one write per model. Canonical (name-only) pair, then the specials. Read serializers add a `scope` method field:

```python
from rest_framework import serializers
from apps.fleet.models import (
    VehicleCategoryCfg, VehicleType, FuelType, Transmission, TractionType,
    UnitCategory, Unit, Period, DocumentType, Tag, InterventionType, ActivitySector,
)


class _ScopeMixin(serializers.ModelSerializer):
    scope = serializers.SerializerMethodField()
    def get_scope(self, obj): return "global" if obj.company_id is None else "company"


def _name_read(model_cls):
    class R(_ScopeMixin):
        class Meta:
            model = model_cls
            fields = ["id", "name", "company", "scope", "is_active", "created_at", "updated_at"]
    return R

VehicleCategoryReadSerializer = _name_read(VehicleCategoryCfg)
VehicleTypeReadSerializer     = _name_read(VehicleType)
FuelTypeReadSerializer        = _name_read(FuelType)
TransmissionReadSerializer    = _name_read(Transmission)
TractionTypeReadSerializer    = _name_read(TractionType)
UnitCategoryReadSerializer    = _name_read(UnitCategory)
PeriodReadSerializer          = _name_read(Period)


class NameWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    is_active = serializers.BooleanField(required=False, default=True)


class UnitReadSerializer(_ScopeMixin):
    unit_category_name = serializers.CharField(source="unit_category.name", read_only=True)
    class Meta:
        model = Unit
        fields = ["id", "unit_category", "unit_category_name", "code", "name",
                  "company", "scope", "is_active", "created_at", "updated_at"]

class UnitWriteSerializer(serializers.Serializer):
    unit_category_id = serializers.UUIDField()
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=100)
    is_active = serializers.BooleanField(required=False, default=True)


class DocumentTypeReadSerializer(_ScopeMixin):
    class Meta:
        model = DocumentType
        fields = ["id", "code", "label", "requires_expiration",
                  "company", "scope", "is_active", "created_at", "updated_at"]

class DocumentTypeWriteSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    label = serializers.CharField(max_length=255)
    requires_expiration = serializers.BooleanField(required=False, default=True)
    is_active = serializers.BooleanField(required=False, default=True)


class TagReadSerializer(_ScopeMixin):
    class Meta:
        model = Tag
        fields = ["id", "name", "color", "company", "scope", "is_active", "created_at", "updated_at"]

class TagWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    color = serializers.CharField(max_length=7, required=False, allow_blank=True, default="")
    is_active = serializers.BooleanField(required=False, default=True)


class InterventionTypeReadSerializer(_ScopeMixin):
    category_display = serializers.CharField(source="get_category_display", read_only=True)
    class Meta:
        model = InterventionType
        fields = ["id", "name", "category", "category_display",
                  "company", "scope", "is_active", "created_at", "updated_at"]

class InterventionTypeWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    category = serializers.ChoiceField(choices=InterventionType.Category.choices,
                                       required=False, default=InterventionType.Category.BOTH)
    is_active = serializers.BooleanField(required=False, default=True)


class ActivitySectorReadSerializer(_ScopeMixin):
    class Meta:
        model = ActivitySector
        fields = ["id", "code", "name", "company", "scope", "is_active", "created_at", "updated_at"]

class ActivitySectorWriteSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=255)
    is_active = serializers.BooleanField(required=False, default=True)
```

- [ ] **Step 3: `views.py`** — generic base pair + per-model subclasses:

```python
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.fleet.models import (
    VehicleCategoryCfg, VehicleType, FuelType, Transmission, TractionType,
    UnitCategory, Unit, Period, DocumentType, Tag, InterventionType, ActivitySector,
)
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global, scoped_qs, ensure_unique


class _ConfigListView(APIView):
    permission_classes = [IsInstitutionAdmin]
    model = None; read = None; write = None
    unique_field = "name"; search_fields = ["name"]

    def get(self, request):
        qs = scoped_qs(self.model, scope_company_id(request))
        term = request.query_params.get("search")
        if term:
            from django.db.models import Q
            q = Q()
            for f in self.search_fields:
                q |= Q(**{f"{f}__icontains": term})
            qs = qs.filter(q)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(self.read(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = self.write(data=request.data)
        payload.is_valid(raise_exception=True)
        data = dict(payload.validated_data)
        try:
            ensure_unique(self.model, company, self.unique_field, data[self.unique_field])
            obj = self._create(company, data, request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(self.read(obj).data)

    def _create(self, company, data, user):
        return self.model.objects.create(company=company, created_by=user, **data)


class _ConfigDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]
    model = None; read = None; write = None; unique_field = "name"

    def _get(self, request, pk):
        return scoped_qs(self.model, scope_company_id(request)).filter(id=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        return success_response(self.read(obj).data) if obj else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        payload = self.write(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        data = dict(payload.validated_data)
        try:
            if self.unique_field in data:
                ensure_unique(self.model, obj.company, self.unique_field, data[self.unique_field], exclude_id=obj.id)
            for k, v in data.items():
                setattr(obj, k, v)
            obj.updated_by = request.user
            obj.save()
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(self.read(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        obj.is_deleted = True
        obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


def _pair(model_cls, read_cls, write_cls, unique="name", search=("name",)):
    lst = type(f"{model_cls.__name__}ListView", (_ConfigListView,),
              {"model": model_cls, "read": read_cls, "write": write_cls,
               "unique_field": unique, "search_fields": list(search)})
    det = type(f"{model_cls.__name__}DetailView", (_ConfigDetailView,),
              {"model": model_cls, "read": read_cls, "write": write_cls, "unique_field": unique})
    return lst, det

VehicleCategoryListView, VehicleCategoryDetailView = _pair(VehicleCategoryCfg, S.VehicleCategoryReadSerializer, S.NameWriteSerializer)
VehicleTypeListView, VehicleTypeDetailView         = _pair(VehicleType, S.VehicleTypeReadSerializer, S.NameWriteSerializer)
FuelTypeListView, FuelTypeDetailView               = _pair(FuelType, S.FuelTypeReadSerializer, S.NameWriteSerializer)
TransmissionListView, TransmissionDetailView       = _pair(Transmission, S.TransmissionReadSerializer, S.NameWriteSerializer)
TractionTypeListView, TractionTypeDetailView       = _pair(TractionType, S.TractionTypeReadSerializer, S.NameWriteSerializer)
UnitCategoryListView, UnitCategoryDetailView       = _pair(UnitCategory, S.UnitCategoryReadSerializer, S.NameWriteSerializer)
PeriodListView, PeriodDetailView                   = _pair(Period, S.PeriodReadSerializer, S.NameWriteSerializer)
TagListView, TagDetailView                         = _pair(Tag, S.TagReadSerializer, S.TagWriteSerializer)
InterventionTypeListView, InterventionTypeDetailView = _pair(InterventionType, S.InterventionTypeReadSerializer, S.InterventionTypeWriteSerializer)
DocumentTypeListView, DocumentTypeDetailView       = _pair(DocumentType, S.DocumentTypeReadSerializer, S.DocumentTypeWriteSerializer, unique="code", search=("code", "label"))
ActivitySectorListView, ActivitySectorDetailView   = _pair(ActivitySector, S.ActivitySectorReadSerializer, S.ActivitySectorWriteSerializer, unique="code", search=("code", "name"))


class UnitListView(_ConfigListView):
    model = Unit; read = S.UnitReadSerializer; write = S.UnitWriteSerializer
    unique_field = "code"; search_fields = ["code", "name"]
    def _create(self, company, data, user):
        cat_id = data.pop("unit_category_id")
        return Unit.objects.create(company=company, created_by=user, unit_category_id=cat_id, **data)

class UnitDetailView(_ConfigDetailView):
    model = Unit; read = S.UnitReadSerializer; write = S.UnitWriteSerializer; unique_field = "code"
    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        payload = S.UnitWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        data = dict(payload.validated_data)
        try:
            if "code" in data:
                ensure_unique(Unit, obj.company, "code", data["code"], exclude_id=obj.id)
            if "unit_category_id" in data:
                obj.unit_category_id = data.pop("unit_category_id")
            for k, v in data.items():
                setattr(obj, k, v)
            obj.updated_by = request.user; obj.save()
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.UnitReadSerializer(obj).data)
```

- [ ] **Step 4: `urls.py`** — add a `config/` block. Insert into `apps/fleet/urls.py` `urlpatterns`:

```python
    # ── Config Flotte ───────────────────────────────────────────────────────────
    path("config/vehicle-categories/",              cfg.VehicleCategoryListView.as_view()),
    path("config/vehicle-categories/<uuid:pk>/",    cfg.VehicleCategoryDetailView.as_view()),
    path("config/vehicle-types/",                   cfg.VehicleTypeListView.as_view()),
    path("config/vehicle-types/<uuid:pk>/",         cfg.VehicleTypeDetailView.as_view()),
    path("config/fuel-types/",                      cfg.FuelTypeListView.as_view()),
    path("config/fuel-types/<uuid:pk>/",            cfg.FuelTypeDetailView.as_view()),
    path("config/transmissions/",                   cfg.TransmissionListView.as_view()),
    path("config/transmissions/<uuid:pk>/",         cfg.TransmissionDetailView.as_view()),
    path("config/traction-types/",                  cfg.TractionTypeListView.as_view()),
    path("config/traction-types/<uuid:pk>/",        cfg.TractionTypeDetailView.as_view()),
    path("config/unit-categories/",                 cfg.UnitCategoryListView.as_view()),
    path("config/unit-categories/<uuid:pk>/",       cfg.UnitCategoryDetailView.as_view()),
    path("config/units/",                           cfg.UnitListView.as_view()),
    path("config/units/<uuid:pk>/",                 cfg.UnitDetailView.as_view()),
    path("config/periods/",                         cfg.PeriodListView.as_view()),
    path("config/periods/<uuid:pk>/",               cfg.PeriodDetailView.as_view()),
    path("config/document-types/",                  cfg.DocumentTypeListView.as_view()),
    path("config/document-types/<uuid:pk>/",        cfg.DocumentTypeDetailView.as_view()),
    path("config/tags/",                            cfg.TagListView.as_view()),
    path("config/tags/<uuid:pk>/",                  cfg.TagDetailView.as_view()),
    path("config/intervention-types/",             cfg.InterventionTypeListView.as_view()),
    path("config/intervention-types/<uuid:pk>/",   cfg.InterventionTypeDetailView.as_view()),
    path("config/activity-sectors/",               cfg.ActivitySectorListView.as_view()),
    path("config/activity-sectors/<uuid:pk>/",     cfg.ActivitySectorDetailView.as_view()),
```
Add the import at the top of `urls.py`: `from apps.fleet.config_api import views as cfg`.

- [ ] **Step 5: Verify**

Run: `../env/bin/python manage.py check 2>&1 | grep -viE "WARNING|cryptography|plaintext|pip install|staticfiles|System check identified some" | grep -iE "error|Traceback|no issues|1 issue" | head`
Expected: only the pre-existing staticfiles `1 issue`; no errors/tracebacks.

- [ ] **Step 6: Smoke create/list a global + a company row**

Run:
```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import FuelType
from apps.system_config.models import Company
co = Company.objects.get(slug='voyageur-express')
FuelType.objects.create(name='Diesel')                 # global
FuelType.objects.create(name='Diesel', company=co)     # company-specific (allowed: different scope)
from django.db.models import Q
seen = FuelType.objects.filter(Q(company=co) | Q(company__isnull=True))
print('company sees:', [(f.name, 'global' if f.company_id is None else 'company') for f in seen])
FuelType.objects.all().delete()
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: company sees both the global and its own Diesel.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/fleet/config_api/ backend/apps/fleet/urls.py
git commit -m "feat(fleet): Config Flotte scoped CRUD API (12 reference tables)"
```

---

### Task 3: Seed global defaults

**Files:**
- Modify: `backend/apps/system_config/management/commands/seed_demo.py`

**Interfaces:**
- Consumes: the config models (Task 1).

- [ ] **Step 1:** Add a `_fleet_config()` method and call it from `handle()` (after `_company`). It seeds **global** rows (`company=None`) idempotently:

```python
    def _fleet_config(self):
        from apps.fleet.models import (VehicleType, FuelType, Transmission, TractionType,
            VehicleCategoryCfg, Period, Tag, DocumentType, UnitCategory, Unit, InterventionType)
        def ensure(model, **kw):
            model.objects.get_or_create(company=None, defaults={}, **kw)
        for n in ["Voiture", "Bus", "Minibus", "Camion", "Moto"]: ensure(VehicleType, name=n)
        for n in ["Essence", "Diesel", "Électrique", "Hybride", "GPL"]: ensure(FuelType, name=n)
        for n in ["Manuelle", "Automatique", "Semi-automatique"]: ensure(Transmission, name=n)
        for n in ["Traction avant", "Propulsion", "4x4", "AWD"]: ensure(TractionType, name=n)
        for n in ["Utilitaire", "Berline", "SUV", "Bus", "Minibus"]: ensure(VehicleCategoryCfg, name=n)
        for n in ["Mensuel", "Trimestriel", "Semestriel", "Annuel"]: ensure(Period, name=n)
        for n in ["Pool", "Direction", "Chantier", "Location"]: ensure(Tag, name=n)
        for code, label in [("ASSUR", "Assurance"), ("CGRISE", "Carte grise"), ("VTECH", "Visite technique"), ("VIGN", "Vignette")]:
            DocumentType.objects.get_or_create(company=None, code=code, defaults={"label": label})
        puis, _ = UnitCategory.objects.get_or_create(company=None, name="Puissance")
        dist, _ = UnitCategory.objects.get_or_create(company=None, name="Distance")
        for cat, code, name in [(puis, "ch", "Cheval"), (puis, "kW", "Kilowatt"), (dist, "km", "Kilomètre")]:
            Unit.objects.get_or_create(company=None, code=code, defaults={"unit_category": cat, "name": name})
        for n in ["Vidange", "Révision", "Réparation", "Assurance", "Leasing"]:
            InterventionType.objects.get_or_create(company=None, name=n)
        self.stdout.write("  Fleet config defaults ensured (global)")
```

- [ ] **Step 2: Run + verify**

Run:
```bash
../env/bin/python manage.py seed_demo 2>&1 | grep -iE "Fleet config|Error" | head
../env/bin/python manage.py shell -c "
from apps.fleet.models import FuelType, DocumentType
print('global fuels:', FuelType.objects.filter(company__isnull=True).count(), '| doc types:', DocumentType.objects.filter(company__isnull=True).count())
" 2>&1 | grep -viE "WARNING|plaintext|pip install|staticfiles|System check|^\?:"
```
Expected: `global fuels: 5 | doc types: 4`.

- [ ] **Step 3: Commit**

```bash
git add backend/apps/system_config/management/commands/seed_demo.py
git commit -m "chore(seed): global fleet config defaults"
```

---

### Task 4: Frontend endpoints + models + services

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (append `FLEET_CONFIG`)
- Create: `angular/src/_api/models/fleet-config.models.ts`
- Create: `angular/src/_api/services/fleet-config/*.service.ts` (12 services)

**Interfaces:**
- Produces: `FLEET_CONFIG` endpoints; interfaces for the 12 tables; a service per table with `list/get/create/update/delete`.

- [ ] **Step 1: `FLEET_CONFIG` in `api.config.ts`** (before `PUBLIC_URLS`):

```typescript
const FC = `${API_BASE}/fleet/config`;
export const FLEET_CONFIG = {
  vehicleCategories: `${FC}/vehicle-categories/`,  vehicleCategory: (id: string) => `${FC}/vehicle-categories/${id}/`,
  vehicleTypes:      `${FC}/vehicle-types/`,        vehicleType:     (id: string) => `${FC}/vehicle-types/${id}/`,
  fuelTypes:         `${FC}/fuel-types/`,           fuelType:        (id: string) => `${FC}/fuel-types/${id}/`,
  transmissions:     `${FC}/transmissions/`,        transmission:    (id: string) => `${FC}/transmissions/${id}/`,
  tractionTypes:     `${FC}/traction-types/`,       tractionType:    (id: string) => `${FC}/traction-types/${id}/`,
  unitCategories:    `${FC}/unit-categories/`,      unitCategory:    (id: string) => `${FC}/unit-categories/${id}/`,
  units:             `${FC}/units/`,                unit:            (id: string) => `${FC}/units/${id}/`,
  periods:           `${FC}/periods/`,              period:          (id: string) => `${FC}/periods/${id}/`,
  documentTypes:     `${FC}/document-types/`,       documentType:    (id: string) => `${FC}/document-types/${id}/`,
  tags:              `${FC}/tags/`,                 tag:             (id: string) => `${FC}/tags/${id}/`,
  interventionTypes: `${FC}/intervention-types/`,   interventionType:(id: string) => `${FC}/intervention-types/${id}/`,
  activitySectors:   `${FC}/activity-sectors/`,     activitySector:  (id: string) => `${FC}/activity-sectors/${id}/`,
};
```

- [ ] **Step 2: `fleet-config.models.ts`**:

```typescript
export type ConfigScope = 'global' | 'company';
export type InterventionCategory = 'CONTRACT' | 'SERVICE' | 'BOTH';

interface Base { id: string; company: string | null; scope: ConfigScope; is_active: boolean; created_at: string; updated_at: string; }
export interface NamedConfig extends Base { name: string; }
export interface VehicleCategoryCfg extends NamedConfig {}
export interface VehicleType extends NamedConfig {}
export interface FuelType extends NamedConfig {}
export interface Transmission extends NamedConfig {}
export interface TractionType extends NamedConfig {}
export interface UnitCategory extends NamedConfig {}
export interface Period extends NamedConfig {}
export interface Unit extends Base { unit_category: string; unit_category_name: string; code: string; name: string; }
export interface DocumentType extends Base { code: string; label: string; requires_expiration: boolean; }
export interface Tag extends Base { name: string; color: string; }
export interface InterventionType extends Base { name: string; category: InterventionCategory; category_display: string; }
export interface ActivitySector extends Base { code: string; name: string; }
```

- [ ] **Step 3: services** — a generic base plus 12 thin services. Create `services/fleet-config/base.config.service.ts`:

```typescript
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseConfigService<T> {
  constructor(protected http: HttpClient, protected listUrl: string, protected itemUrl: (id: string) => string) {}
  list(search?: string): Observable<T[]> {
    let params = new HttpParams().set('page_size', '500');
    if (search) params = params.set('search', search);
    return this.http.get<T[]>(this.listUrl, { params });
  }
  get(id: string): Observable<T> { return this.http.get<T>(this.itemUrl(id)); }
  create(data: Record<string, unknown>): Observable<T> { return this.http.post<T>(this.listUrl, data); }
  update(id: string, data: Record<string, unknown>): Observable<T> { return this.http.patch<T>(this.itemUrl(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(this.itemUrl(id)); }
}
```
Then one service per table, e.g. `fuel-type.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { FuelType } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class FuelTypeService extends BaseConfigService<FuelType> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.fuelTypes, FLEET_CONFIG.fuelType); }
}
```
Repeat for the other 11, substituting **{ClassName, Model, listUrl, itemUrl}**:

| Service class | Model | list / item |
|---|---|---|
| `VehicleCategoryCfgService` | `VehicleCategoryCfg` | `vehicleCategories` / `vehicleCategory` |
| `VehicleTypeService` | `VehicleType` | `vehicleTypes` / `vehicleType` |
| `TransmissionService` | `Transmission` | `transmissions` / `transmission` |
| `TractionTypeService` | `TractionType` | `tractionTypes` / `tractionType` |
| `UnitCategoryService` | `UnitCategory` | `unitCategories` / `unitCategory` |
| `UnitService` | `Unit` | `units` / `unit` |
| `PeriodService` | `Period` | `periods` / `period` |
| `DocumentTypeService` | `DocumentType` | `documentTypes` / `documentType` |
| `TagService` | `Tag` | `tags` / `tag` |
| `InterventionTypeService` | `InterventionType` | `interventionTypes` / `interventionType` |
| `ActivitySectorService` | `ActivitySector` | `activitySectors` / `activitySector` |

- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/fleet-config.models.ts angular/src/_api/services/fleet-config/
git commit -m "feat(fleet-config-fe): endpoints, models, services"
```

---

### Task 5: Shared info-banner component

**Files:**
- Create: `angular/src/_api/pages/shared/info-banner/info-banner.component.ts`

**Interfaces:**
- Produces: `InfoBannerComponent` (selector `app-info-banner`, `@Input() text: string`).

- [ ] **Step 1:** Create the component (inline template):

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-banner',
  imports: [CommonModule],
  template: `
    <div class="alert alert-info d-flex align-items-start gap-2" role="alert">
      <i class="ti ti-info-circle mt-1"></i>
      <div>{{ text }}</div>
    </div>`,
})
export class InfoBannerComponent { @Input() text = ''; }
```

- [ ] **Step 2: Build** — success.
- [ ] **Step 3: Commit**

```bash
git add angular/src/_api/pages/shared/info-banner/
git commit -m "feat(shared): reusable info-banner component"
```

---

### Task 6: The 12 Config Flotte screens

**Files:**
- Create: `angular/src/_api/pages/fleet-config/<entity>/<entity>.component.{ts,html}` (×12)

**Interfaces:**
- Consumes: the services (Task 4), `InfoBannerComponent` (Task 5).
- Produces: 12 standalone components (selectors `app-fc-<entity>`).

- [ ] **Step 1: Canonical name-only screen** — create `fuel-types/fuel-types.component.ts` (the template for the 7 name-only tables):

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuelTypeService } from '../../../services/fleet-config/fuel-type.service';
import { FuelType } from '../../../models/fleet-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-fc-fuel-types',
  templateUrl: './fuel-types.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class FcFuelTypesComponent implements OnInit {
  rows: FuelType[] = []; filtered: FuelType[] = []; loading = true; search = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: FuelTypeService, private fb: FormBuilder) {}
  ngOnInit(): void { this.form = this.fb.group({ name: ['', Validators.required], is_active: [true] }); this.load(); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', is_active: true }); }
  openEdit(r: FuelType): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ name: r.name, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: FuelType): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('fc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

And `fuel-types.component.html`:

```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Types de carburant</h4><h6>Référentiel configurable</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fc-modal" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau</a></div>
</div>
<app-info-banner text="Sources d'énergie utilisées par vos modèles de véhicule : Essence, Diesel, Électrique, Hybride, GPL. Les entrées « Global » sont fournies par défaut ; ajoutez les vôtres pour votre institution."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Nom</th><th>Périmètre</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.name }}</td>
              <td>@if (r.scope === 'global') { <span class="badge bg-secondary">Global</span> } @else { <span class="badge bg-info">Spécifique</span> }</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Actif</span> } @else { <span class="badge bg-secondary">Inactif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                @if (r.scope !== 'global') {
                  <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#fc-modal" (click)="openEdit(r)" title="Modifier"><i class="ti ti-pencil"></i></a>
                  <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger"></i></a>
                } @else { <span class="text-muted small">—</span> }
              </div></td>
            </tr>
          } @empty { <tr><td colspan="4" class="text-center py-4 text-muted">Aucune entrée.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="fc-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier' : 'Nouveau' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
    <div class="form-check form-switch"><input formControlName="is_active" type="checkbox" class="form-check-input" id="fc-active" /><label class="form-check-label" for="fc-active">Actif</label></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 2: Replicate the name-only screen** for the other 6 name-only tables, substituting per this table (class/selector/service/import/title/help text). Endpoint modal id can stay `fc-modal` (only one modal is on screen at a time per route).

| Folder / component | Service | Titre | Aide (banner) |
|---|---|---|---|
| `vehicle-categories` `FcVehicleCategoriesComponent` | `VehicleCategoryCfgService` (model `VehicleCategoryCfg`) | Catégories de véhicule | Regroupement de vos véhicules : Utilitaire, Berline, SUV, Bus, Minibus. |
| `vehicle-types` `FcVehicleTypesComponent` | `VehicleTypeService` | Types de véhicule | Type physique : Voiture, Bus, Camion, Moto… |
| `transmissions` `FcTransmissionsComponent` | `TransmissionService` | Transmissions | Type de boîte : Manuelle, Automatique, Semi-automatique. |
| `traction-types` `FcTractionTypesComponent` | `TractionTypeService` | Types de traction | Système de transmission : Traction avant, Propulsion, 4x4, AWD. |
| `unit-categories` `FcUnitCategoriesComponent` | `UnitCategoryService` | Catégories d'unité | Regroupe les unités de mesure : Puissance, Distance, Émission, Volume. |
| `periods` `FcPeriodsComponent` | `PeriodService` | Périodes | Fréquences de facturation/récurrence : Mensuel, Trimestriel, Annuel. |

- [ ] **Step 3: `units` screen** (`FcUnitsComponent`) — same shell but the form has `unit_category_id` (required, dropdown from `UnitCategoryService.list()`), `code` (required), `name` (required); table columns Code, Nom, Catégorie (`unit_category_name`), Périmètre, Statut. `openEdit` patches all three; create/update posts `{ unit_category_id, code, name, is_active }`. Info banner: *« Unités de mesure rattachées à une catégorie : ch, kW (Puissance) ; km, mi (Distance)… »*.

- [ ] **Step 4: `document-types` screen** (`FcDocumentTypesComponent`) — form `code`* , `label`* , `requires_expiration` (switch), `is_active`. Table: Code, Libellé, Expiration requise (Oui/Non), Périmètre, Statut. Info banner: *« Types de documents administratifs : Assurance, Carte grise, Visite technique, Vignette. »*.

- [ ] **Step 5: `tags` screen** (`FcTagsComponent`) — form `name`* , `color` (input type=color), `is_active`. Table shows a color swatch (`[style.background]="r.color"`) + name. Info banner: *« Étiquettes pour regrouper et filtrer les véhicules : Pool, Direction, Chantier. »*.

- [ ] **Step 6: `intervention-types` screen** (`FcInterventionTypesComponent`) — form `name`* , `category` (select: Contrat/Service/Contrat et Service = CONTRACT/SERVICE/BOTH), `is_active`. Table: Nom, Catégorie (`category_display`), Périmètre, Statut. Info banner: *« Types d'intervention pour les maintenances et contrats. »*.

- [ ] **Step 7: `activity-sectors` screen** (`FcActivitySectorsComponent`) — form `code`* , `name`* , `is_active`. Table: Code, Nom, Périmètre, Statut. Info banner: *« Secteurs d'activité de votre flotte : Transport urbain, Logistique… »*.

- [ ] **Step 8: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 9: Commit**

```bash
git add angular/src/_api/pages/fleet-config/
git commit -m "feat(fleet-config-fe): 12 Config Flotte screens with in-app help"
```

---

### Task 7: Wire routes + « Config Flotte » menu + relabel « Gestion Flotte »

**Files:**
- Create: `angular/src/_api/pages/fleet-config/fleet-config.component.ts` (router-outlet wrapper)
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/helpers/routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: Task 6 components.
- Produces: reachable `/fleet-config/*` routes + « Config Flotte » sidebar group; existing "Flotte" group relabelled « Gestion Flotte ».

- [ ] **Step 1:** Create `fleet-config.component.ts` (selector `app-fleet-config`, class `FleetConfigComponent`, template `<router-outlet></router-outlet>`, imports `[RouterModule]`).
- [ ] **Step 2:** Add the route block in `pages.routes.ts` (after the `fleet` module block):

```typescript
      // ── MODULE : Config Flotte ────────────────────────────────────────────────
      {
        path: 'fleet-config',
        loadComponent: () => import('../../../_api/pages/fleet-config/fleet-config.component').then(m => m.FleetConfigComponent),
        children: [
          { path: 'vehicle-categories', loadComponent: () => import('../../../_api/pages/fleet-config/vehicle-categories/vehicle-categories.component').then(m => m.FcVehicleCategoriesComponent) },
          { path: 'vehicle-types',      loadComponent: () => import('../../../_api/pages/fleet-config/vehicle-types/vehicle-types.component').then(m => m.FcVehicleTypesComponent) },
          { path: 'fuel-types',         loadComponent: () => import('../../../_api/pages/fleet-config/fuel-types/fuel-types.component').then(m => m.FcFuelTypesComponent) },
          { path: 'transmissions',      loadComponent: () => import('../../../_api/pages/fleet-config/transmissions/transmissions.component').then(m => m.FcTransmissionsComponent) },
          { path: 'traction-types',     loadComponent: () => import('../../../_api/pages/fleet-config/traction-types/traction-types.component').then(m => m.FcTractionTypesComponent) },
          { path: 'unit-categories',    loadComponent: () => import('../../../_api/pages/fleet-config/unit-categories/unit-categories.component').then(m => m.FcUnitCategoriesComponent) },
          { path: 'units',              loadComponent: () => import('../../../_api/pages/fleet-config/units/units.component').then(m => m.FcUnitsComponent) },
          { path: 'periods',            loadComponent: () => import('../../../_api/pages/fleet-config/periods/periods.component').then(m => m.FcPeriodsComponent) },
          { path: 'document-types',     loadComponent: () => import('../../../_api/pages/fleet-config/document-types/document-types.component').then(m => m.FcDocumentTypesComponent) },
          { path: 'tags',               loadComponent: () => import('../../../_api/pages/fleet-config/tags/tags.component').then(m => m.FcTagsComponent) },
          { path: 'intervention-types', loadComponent: () => import('../../../_api/pages/fleet-config/intervention-types/intervention-types.component').then(m => m.FcInterventionTypesComponent) },
          { path: 'activity-sectors',   loadComponent: () => import('../../../_api/pages/fleet-config/activity-sectors/activity-sectors.component').then(m => m.FcActivitySectorsComponent) },
        ],
      },
```

- [ ] **Step 3:** In `routes.ts`, add path constants after the fleet block:

```typescript
  // ── Config Flotte ───────────────────────────────────────────────────────────
  fcVehicleCategories: '/fleet-config/vehicle-categories',
  fcVehicleTypes:      '/fleet-config/vehicle-types',
  fcFuelTypes:         '/fleet-config/fuel-types',
  fcTransmissions:     '/fleet-config/transmissions',
  fcTractionTypes:     '/fleet-config/traction-types',
  fcUnitCategories:    '/fleet-config/unit-categories',
  fcUnits:             '/fleet-config/units',
  fcPeriods:           '/fleet-config/periods',
  fcDocumentTypes:     '/fleet-config/document-types',
  fcTags:              '/fleet-config/tags',
  fcInterventionTypes: '/fleet-config/intervention-types',
  fcActivitySectors:   '/fleet-config/activity-sectors',
```

- [ ] **Step 4:** In `sidebar.service.ts`, **relabel** the existing fleet group `menuValue: 'Flotte'` → `menuValue: 'Gestion Flotte'`, and add a new group **before or after** it:

```typescript
        {
          menuValue: 'Config Flotte',
          hasSubRoute: true, showSubRoute: false, icon2: 'settings-cog', base: 'fleet-config',
          subMenus: [
            { menuValue: 'Catégories véhicule', route: routes.fcVehicleCategories, base: 'vehicle-categories' },
            { menuValue: 'Types de véhicule',   route: routes.fcVehicleTypes,      base: 'vehicle-types'      },
            { menuValue: 'Carburants',          route: routes.fcFuelTypes,         base: 'fuel-types'         },
            { menuValue: 'Transmissions',       route: routes.fcTransmissions,     base: 'transmissions'      },
            { menuValue: 'Tractions',           route: routes.fcTractionTypes,     base: 'traction-types'     },
            { menuValue: "Catégories d'unité",  route: routes.fcUnitCategories,    base: 'unit-categories'    },
            { menuValue: 'Unités',              route: routes.fcUnits,             base: 'units'              },
            { menuValue: 'Périodes',            route: routes.fcPeriods,           base: 'periods'            },
            { menuValue: 'Types de document',   route: routes.fcDocumentTypes,     base: 'document-types'     },
            { menuValue: 'Étiquettes',          route: routes.fcTags,              base: 'tags'               },
            { menuValue: "Types d'intervention",route: routes.fcInterventionTypes, base: 'intervention-types' },
            { menuValue: "Secteurs d'activité", route: routes.fcActivitySectors,   base: 'activity-sectors'   },
          ],
        },
```

- [ ] **Step 5: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 6: Manual smoke check** (backend running + seeded, logged in as `admin@demo.cm`): open « Config Flotte » → Carburants — the 5 global defaults show with a **Global** badge (no edit/delete); create a new one → it shows **Spécifique** and is editable. Check the info banner renders. Confirm the old menu now reads « Gestion Flotte ».
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/pages/fleet-config/fleet-config.component.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(fleet-config-fe): wire routes, Config Flotte menu, relabel Gestion Flotte"
```

---

## Self-Review Notes

- **Spec coverage:** §3 twelve tables → T1; §4 backend (scope helpers/selectors/services/serializers/views/urls) → T2; seed globals → T3; §5 frontend endpoints/models/services → T4; §5.1 info banner → T5; the 12 screens → T6; routes + « Config Flotte » menu + « Gestion Flotte » relabel → T7. Deferred items (enum→FK, People/Vehicles/Ops) are out of scope per spec §6.
- **Placeholder scan:** the repetitive screens (T6 Step 2) and services (T4 Step 3) use complete canonical code + explicit substitution tables (every class/selector/URL/label given) — not placeholders.
- **Type consistency:** model class `VehicleCategoryCfg` used consistently (backend model, serializer, service, FE model, service). Scope field `scope: 'global'|'company'` consistent FE/BE. Base view attrs `model/read/write/unique_field/search_fields` consistent. `resolve_company_or_global` returns `(company|None, err|None)`.
- **Scope semantics:** globals (`company=NULL`) are read-only in the UI (edit/delete hidden), created centrally via seed or a superuser; company rows are editable by the institution admin. Backend `ensure_unique` scopes by `company` so a global and a company row may share a name.
- **Verification adaptation:** no test framework; `manage.py check`/`migrate` + shell/seed smoke-checks (backend), `npx ng build` + manual check (frontend).
