# Gestion Flotte C2 — Vehicle Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add configurable category & tags (Config Flotte), a Parking entity, and fiscal fields to `fleet.Vehicle`, surfaced on the Véhicules screen; add a Parkings CRUD screen.

**Architecture:** Additive model changes (new nullable FKs/M2M + a new `Parking` model). Parking is a company-scoped CRUD mirroring existing fleet entities. Vehicle serializers/service/view resolve `category` via the C1 `_cfg` scope helper, `parking` within the company, and set `tags` via M2M. Frontend reuses Config Flotte services + a new Parking service.

**Tech Stack:** Django + DRF (backend), Angular 21 standalone (frontend), SQLite (dev).

## Global Constraints

- **No test framework.** Verify: `../env/bin/python manage.py check`/`migrate`/`makemigrations --check` + shell smoke (backend); `cd angular && npx ng build` + manual (frontend).
- **Additive / non-breaking** — new fields nullable/M2M; migration adds columns + `Parking` table + M2M table only (no data mapping).
- Config-backed FKs (`category`, `tags`) resolve to **globals + company** via `_cfg` (already in `apps/fleet/views.py`). `Parking` is company-only.
- French UI. **Commit as shimi — no Co-Authored-By trailer.** Branch `feature/fleet-gestion-c2`.
- Backend from `ERP-master/backend/` via `../env/bin/python manage.py`. Frontend from `angular/`.
- `fleet` migrations at `0003_vehiclemodel_config_fks`; new chains from the latest.

---

### Task 1: Parking model + Vehicle fields + migration

**Files:**
- Create: `backend/apps/fleet/models/parking.py`
- Modify: `backend/apps/fleet/models/__init__.py`
- Modify: `backend/apps/fleet/models/vehicle.py`
- Create: `backend/apps/fleet/migrations/00XX_...` (auto-generated)

**Interfaces:**
- Produces: `Parking`; `Vehicle.category/tags/parking/registration_date/fiscal_horsepower/catalog_value/purchase_value/residual_value`.

- [ ] **Step 1: `parking.py`**

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parking(BaseModel):
    """Emplacement de stationnement / dépôt d'une institution."""
    company  = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                 on_delete=models.CASCADE, related_name="parkings")
    name     = models.CharField(_("nom"), max_length=255)
    location = models.CharField(_("emplacement"), max_length=255, blank=True,
                                help_text=_("Adresse ou coordonnées GPS"))
    notes    = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("parking")
        ordering = ["name"]

    def __str__(self):
        return self.name
```

- [ ] **Step 2: `models/__init__.py`** — add `from .parking import Parking` and add `"Parking"` to `__all__`.

- [ ] **Step 3: `vehicle.py`** — add fields after `agency` (or in a logical group). Insert:

```python
    category = models.ForeignKey("fleet.VehicleCategoryCfg", verbose_name=_("catégorie"),
                                 on_delete=models.PROTECT, null=True, blank=True, related_name="vehicles")
    tags     = models.ManyToManyField("fleet.Tag", verbose_name=_("étiquettes"),
                                      blank=True, related_name="vehicles")
    parking  = models.ForeignKey("fleet.Parking", verbose_name=_("parking"),
                                 on_delete=models.SET_NULL, null=True, blank=True, related_name="vehicles")
    registration_date = models.DateField(_("date d'immatriculation"), null=True, blank=True)
    fiscal_horsepower = models.DecimalField(_("puissance fiscale"), max_digits=6, decimal_places=2, null=True, blank=True)
    catalog_value     = models.DecimalField(_("valeur catalogue"), max_digits=18, decimal_places=2, null=True, blank=True)
    purchase_value    = models.DecimalField(_("valeur d'achat"), max_digits=18, decimal_places=2, null=True, blank=True)
    residual_value    = models.DecimalField(_("valeur résiduelle"), max_digits=18, decimal_places=2, null=True, blank=True)
```

- [ ] **Step 4: Generate + apply**

Run:
```bash
../env/bin/python manage.py makemigrations fleet 2>&1 | tail -8
../env/bin/python manage.py migrate fleet 2>&1 | tail -3
../env/bin/python manage.py makemigrations fleet --check --dry-run 2>&1 | tail -2   # "No changes detected"
```
Expected: a migration creating `Parking` + adding the vehicle fields; applies; no further changes.

- [ ] **Step 5: Smoke**

```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import Vehicle, Parking, VehicleCategoryCfg, Tag
print('Parking OK', Parking.__name__)
v = Vehicle.objects.first()
print('vehicle has category attr:', hasattr(v, 'category'), '| tags mgr:', v.tags.count())
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: `Parking OK Parking` and `vehicle has category attr: True | tags mgr: 0`.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/fleet/models/ backend/apps/fleet/migrations/
git commit -m "feat(fleet): Parking model + Vehicle category/tags/parking/fiscal fields"
```

---

### Task 2: Parking CRUD + Vehicle API enrichment

**Files:**
- Modify: `backend/apps/fleet/serializers.py`
- Modify: `backend/apps/fleet/selectors/*.py` (or `selectors.py`)
- Modify: `backend/apps/fleet/services/vehicle_services.py`
- Modify: `backend/apps/fleet/views.py`
- Modify: `backend/apps/fleet/urls.py`

**Interfaces:**
- Produces: `/fleet/parking/` CRUD; Vehicle read/write with `category`/`tags`/`parking`/fiscal/registration.

- [ ] **Step 1: Parking serializers** (add to `serializers.py`):

```python
from apps.fleet.models import Parking  # add to existing model imports

class ParkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parking
        fields = ["id", "name", "location", "notes", "created_at", "updated_at"]

class ParkingWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    location = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")
```

- [ ] **Step 2: Parking selectors** (append to the fleet selectors module that holds `get_vehicle_brand` etc.):

```python
def list_parkings(company_id, search=None):
    qs = Parking.objects.filter(company_id=company_id, is_deleted=False).order_by("name")
    if search:
        qs = qs.filter(name__icontains=search)
    return qs

def get_parking(parking_id, company_id):
    return Parking.objects.filter(id=parking_id, company_id=company_id, is_deleted=False).first()
```
(Import `Parking` in that module.)

- [ ] **Step 3: Parking services** (in `vehicle_services.py` or a new `parking_services.py` imported by the services package):

```python
@transaction.atomic
def create_parking(*, company, name, location="", notes="", created_by):
    return Parking.objects.create(company=company, name=name, location=location, notes=notes, created_by=created_by)

@transaction.atomic
def update_parking(parking, *, updated_by, **fields):
    for key in ("name", "location", "notes"):
        if key in fields:
            setattr(parking, key, fields[key])
    parking.updated_by = updated_by
    parking.save()
    return parking

@transaction.atomic
def delete_parking(parking, *, deleted_by):
    parking.soft_delete(user=deleted_by)
```
Ensure these are exported so `services.create_parking` works (match how `create_vehicle` is exposed).

- [ ] **Step 4: Parking views + urls.** Add to `views.py`:

```python
class ParkingListView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        rows = selectors.list_parkings(company_id, search=request.query_params.get("search"))
        return success_response(ParkingSerializer(rows, many=True).data)
    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = ParkingWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        p = services.create_parking(company=company, created_by=request.user, **payload.validated_data)
        return created_response(ParkingSerializer(p).data)

class ParkingDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def _get(self, request, parking_id):
        return selectors.get_parking(parking_id, _scope_company_id(request))
    def get(self, request, parking_id):
        p = self._get(request, parking_id)
        return success_response(ParkingSerializer(p).data) if p else error_response(_("Parking introuvable."), status_code=404)
    def patch(self, request, parking_id):
        p = self._get(request, parking_id)
        if not p:
            return error_response(_("Parking introuvable."), status_code=404)
        payload = ParkingWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        p = services.update_parking(p, updated_by=request.user, **payload.validated_data)
        return success_response(ParkingSerializer(p).data)
    def delete(self, request, parking_id):
        p = self._get(request, parking_id)
        if not p:
            return error_response(_("Parking introuvable."), status_code=404)
        services.delete_parking(p, deleted_by=request.user)
        return no_content_response()
```
Import `ParkingSerializer, ParkingWriteSerializer` in `views.py`. Add urls (after the vehicles block):
```python
    path("parking/",                    views.ParkingListView.as_view()),
    path("parking/<uuid:parking_id>/",  views.ParkingDetailView.as_view()),
```

- [ ] **Step 5: Vehicle read serializers.** In `VehicleListSerializer` add:
```python
    category_name = serializers.CharField(source="category.name", read_only=True, default=None)
    parking_name = serializers.CharField(source="parking.name", read_only=True, default=None)
    tags = serializers.SerializerMethodField()
```
with the method and field list additions (`"category_name","parking_name","tags"`):
```python
    def get_tags(self, obj):
        return [{"id": str(t.id), "name": t.name, "color": t.color} for t in obj.tags.all()]
```
In `VehicleDetailSerializer` add `category`, `category_name`, `parking`, `parking_name`, `tags` (same method), and `registration_date`, `fiscal_horsepower`, `catalog_value`, `purchase_value`, `residual_value` to fields (add the `tags` SerializerMethodField + `get_tags` there too, or factor a mixin — inline is fine).

- [ ] **Step 6: Vehicle write serializers.** Add to both `VehicleCreateSerializer` and `VehicleUpdateSerializer`:
```python
    category_id = serializers.UUIDField(required=False, allow_null=True)
    parking_id = serializers.UUIDField(required=False, allow_null=True)
    tag_ids = serializers.ListField(child=serializers.UUIDField(), required=False)
    registration_date = serializers.DateField(required=False, allow_null=True)
    fiscal_horsepower = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True)
    catalog_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)
    purchase_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)
    residual_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)
```
(Use `default=None` on the Create serializer ones to match its style.)

- [ ] **Step 7: `create_vehicle` / `update_vehicle` service.** Extend `create_vehicle` signature with `category=None, parking_id=None, tag_ids=None, registration_date=None, fiscal_horsepower=None, catalog_value=None, purchase_value=None, residual_value=None`; pass the scalar/FK ones into `Vehicle.objects.create(...)` (`category=category, parking_id=parking_id, registration_date=..., fiscal_horsepower=...`, etc.); after create: `if tag_ids: vehicle.tags.set(tag_ids)`. In `update_vehicle`, add to `allowed`: `"category_id","parking_id","registration_date","fiscal_horsepower","catalog_value","purchase_value","residual_value"`, and before the loop: `tag_ids = fields.pop("tag_ids", None)` then after saving `if tag_ids is not None: vehicle.tags.set(tag_ids)`.

- [ ] **Step 8: Views resolve FKs.** In `VehicleListView.post`, resolve and pass: `category = _cfg(VehicleCategoryCfg, d.get("category_id"), company_id)`; pass `category=category, parking_id=d.get("parking_id"), tag_ids=d.get("tag_ids"), registration_date=d.get("registration_date"), fiscal_horsepower=d.get("fiscal_horsepower"), catalog_value=d.get("catalog_value"), purchase_value=d.get("purchase_value"), residual_value=d.get("residual_value")` to `create_vehicle`. Import `VehicleCategoryCfg`. In `VehicleDetailView.patch`, the `*_id`/fiscal/date keys flow via `update_vehicle`; validate `category_id` in scope with `_cfg` (404 if bad) and `parking_id` via `selectors.get_parking` (404 if bad).

- [ ] **Step 9: Verify**

```bash
../env/bin/python manage.py check 2>&1 | grep -iE "error|Traceback" | head
../env/bin/python manage.py shell -c "
import apps.fleet.services as s
from apps.fleet.models import Vehicle, VehicleCategoryCfg, Tag
from apps.fleet.serializers import VehicleListSerializer
v = Vehicle.objects.first()
cat = VehicleCategoryCfg.objects.filter(company__isnull=True).first()
v.category = cat; v.save(update_fields=['category'])
t = Tag.objects.filter(company__isnull=True).first()
if t: v.tags.set([t.id])
print(VehicleListSerializer(v).data.get('category_name'), '| tags:', VehicleListSerializer(v).data.get('tags'))
v.tags.clear(); v.category=None; v.save(update_fields=['category'])
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: prints the category name + a tag entry.

- [ ] **Step 10: Commit**

```bash
git add backend/apps/fleet/
git commit -m "feat(fleet): Parking CRUD + Vehicle category/tags/parking/fiscal API"
```

---

### Task 3: Frontend Parking (service + screen + menu)

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (`FLEET.parking`)
- Modify: `angular/src/_api/models/fleet.models.ts` (`Parking`)
- Create: `angular/src/_api/services/fleet/parking.service.ts`
- Create: `angular/src/_api/pages/fleet/parking/parking.component.{ts,html}`
- Modify: `pages.routes.ts`, `routes.ts`, `sidebar.service.ts`

**Interfaces:**
- Produces: `ParkingService`; « Parkings » screen at `/fleet/parking`.

- [ ] **Step 1:** In `api.config.ts` `FLEET` group add:
```typescript
  parking:  `${API_BASE}/fleet/parking/`,
  parkingItem: (id: string) => `${API_BASE}/fleet/parking/${id}/`,
```
- [ ] **Step 2:** In `fleet.models.ts` add:
```typescript
export interface Parking { id: string; name: string; location: string; notes: string; created_at: string; updated_at: string; }
```
- [ ] **Step 3:** `parking.service.ts` — mirror `vehicle-brand.service.ts` (`list/get/create/update/delete`) using `FLEET.parking` / `FLEET.parkingItem`, type `Parking`.
- [ ] **Step 4:** `parking.component.{ts,html}` — CRUD screen mirroring `pages/fleet/brands/brands.component.*` (selector `app-fleet-parking`, class `FleetParkingComponent`). Fields: name*, location, notes. Table: Nom, Emplacement, Actions. Modal id `parking-modal`. Uses `ti ti-edit`/`ti ti-trash`.
- [ ] **Step 5:** Wire: add child route `{ path: 'parking', loadComponent: … FleetParkingComponent }` inside the `fleet` module block in `pages.routes.ts`; add `fleetParking: '/fleet/parking'` in `routes.ts`; add `{ menuValue: 'Parkings', route: routes.fleetParking, base: 'parking' }` to the **Gestion Flotte** `subMenus` in `sidebar.service.ts`.
- [ ] **Step 6: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/fleet.models.ts angular/src/_api/services/fleet/parking.service.ts angular/src/_api/pages/fleet/parking/ angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(fleet-fe): Parkings CRUD screen under Gestion Flotte"
```

---

### Task 4: Véhicules screen enrichment

**Files:**
- Modify: `angular/src/_api/models/fleet.models.ts`
- Modify: `angular/src/_api/pages/fleet/vehicles/vehicles.component.ts`
- Modify: `angular/src/_api/pages/fleet/vehicles/vehicles.component.html`

**Interfaces:**
- Consumes: `VehicleCategoryCfgService`, `TagService` (Config Flotte), `ParkingService` (Task 3), enriched Vehicle API (Task 2).

- [ ] **Step 1:** `fleet.models.ts` — extend `VehicleListItem` with `category_name: string | null; parking_name: string | null; tags: {id:string; name:string; color:string}[];` and `VehicleDetail` (if a separate interface exists) with `category`, `category_name`, `parking`, `parking_name`, `tags`, `registration_date`, `fiscal_horsepower`, `catalog_value`, `purchase_value`, `residual_value` (all nullable).
- [ ] **Step 2:** `vehicles.component.ts` — import & inject `VehicleCategoryCfgService`, `TagService`, `ParkingService`; add `categories: VehicleCategoryCfg[] = []; tags: Tag[] = []; parkings: Parking[] = [];` and load them in `ngOnInit`. Add to **both** `createForm` and `editForm`: `category_id: [null]`, `parking_id: [null]`, `tag_ids: [[]]`, `registration_date: [null]`, `fiscal_horsepower: [null]`, `catalog_value: [null]`, `purchase_value: [null]`, `residual_value: [null]`. In the create/update payload builders, include these (numbers coerced like the existing fiscal ones; `tag_ids` passed through as an array). In the edit-open handler, patch them from the loaded vehicle (`category_id: v.category`, `parking_id: v.parking`, `tag_ids: (v.tags||[]).map(t=>t.id)`, etc.).
- [ ] **Step 3:** `vehicles.component.html` — in the create and edit modals add: **Catégorie** `<select formControlName="category_id">` over `categories` (`[ngValue]="c.id"`, `— Aucune —` = `[ngValue]="null"`); **Parking** `<select formControlName="parking_id">` over `parkings`; **Tags** a multi-select (`<select multiple formControlName="tag_ids">` over `tags`, or checkboxes) ; **Date d'immatriculation** date input; a fiscal group (puissance fiscale, valeur catalogue, valeur d'achat, valeur résiduelle) as number inputs. In the vehicle **list table**, add a Catégorie column (`{{ v.category_name || '—' }}`) and render `tags` as colored chips (`@for (t of v.tags) { <span class="badge me-1" [style.background]="t.color || '#6c757d'">{{ t.name }}</span> }`). Bump any empty-state colspan accordingly.
- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 5: Manual check** (backend running, seeded, `admin@demo.cm`): Gestion Flotte → Parkings — add one. Gestion Flotte → Véhicules — create/edit a vehicle: pick a Catégorie (from Config Flotte), Tags (chips appear in the list), a Parking, and fiscal values; save and confirm they persist and show.
- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/models/fleet.models.ts angular/src/_api/pages/fleet/vehicles/
git commit -m "feat(fleet-fe): Vehicles screen — category, tags, parking, fiscal fields"
```

---

## Self-Review Notes

- **Spec coverage:** §3.1 Parking model → T1; §3.2 Vehicle fields → T1; §3.3 Parking CRUD → T2; §3.4 Vehicle serializers/service/view → T2; §4.1 Parking frontend → T3; §4.2 Véhicules screen → T4.
- **Placeholder scan:** none — models, migration command, Parking CRUD, serializer/service/view diffs, and frontend field additions are concrete. (T4's template additions are enumerated per-field, not "add fields".)
- **Type consistency:** field names `category/tags/parking/registration_date/fiscal_horsepower/catalog_value/purchase_value/residual_value` used identically across model, serializers (`*_id`/`tag_ids` on write), service, view, and FE. `tags` read shape `{id,name,color}[]` consistent list↔detail↔FE. `_cfg` reused from C1.
- **Data safety:** additive migration; `makemigrations --check` must report no changes (T1 Step 4).
- **Known verify-time checks:** confirm the fleet **selectors** module layout (single `selectors.py` vs package) and the **services** package re-export mechanism when adding Parking selectors/services (T2 Steps 2–3); confirm whether `VehicleDetail` is a distinct FE interface or the list item is reused (T4 Step 1).
