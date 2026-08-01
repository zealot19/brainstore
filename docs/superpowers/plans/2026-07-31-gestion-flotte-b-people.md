# Gestion Flotte B — People Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a company-scoped Supplier entity (+ CRUD screen) and give ExternalDriver an optional employee link (`employee_id` + `user`).

**Architecture:** Supplier mirrors the just-built `Parking` (company-scoped CRUD). Driver enrichment is additive fields + serializer/service/view/screen updates. Frontend adds a Supplier service/screen and enriches the Conducteurs form.

**Tech Stack:** Django + DRF (backend), Angular 21 standalone (frontend), SQLite (dev).

## Global Constraints

- **No test framework.** Verify: `../env/bin/python manage.py check`/`migrate`/`makemigrations --check` + shell smoke (backend); `cd angular && npx ng build` + manual (frontend).
- **Additive / non-breaking.** Supplier is company-scoped (no global). Driver fields nullable.
- Supplier `code` **unique per company** (validated in service). Driver `user_id`, when provided, must belong to the company (validated in view).
- French UI. **Commit as shimi — no Co-Authored-By trailer.** Branch `feature/fleet-people-b`.
- Backend from `ERP-master/backend/` via `../env/bin/python manage.py`. Frontend from `angular/`.
- `fleet` migrations at `0004_...`; new chains from the latest.

---

### Task 1: Supplier model + Driver fields + migration

**Files:**
- Create: `backend/apps/fleet/models/supplier.py`
- Modify: `backend/apps/fleet/models/__init__.py`
- Modify: `backend/apps/fleet/models/external_driver.py`
- Create: `backend/apps/fleet/migrations/00XX_...` (auto-generated)

**Interfaces:**
- Produces: `Supplier`; `ExternalDriver.employee_id`, `ExternalDriver.user`.

- [ ] **Step 1: `supplier.py`**

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Supplier(BaseModel):
    """Fournisseur / société associée (pièces, carburant, contrats, véhicules)."""
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="suppliers")
    name           = models.CharField(_("nom"), max_length=255)
    code           = models.CharField(_("code"), max_length=20)
    tax_id         = models.CharField(_("NIU / identifiant fiscal"), max_length=50, blank=True)
    address        = models.TextField(_("adresse"), blank=True)
    city           = models.CharField(_("ville"), max_length=100, blank=True)
    country        = models.CharField(_("pays"), max_length=2, default="CM")
    phone          = models.CharField(_("téléphone"), max_length=30, blank=True)
    email          = models.EmailField(_("email"), blank=True)
    website        = models.URLField(_("site web"), blank=True)
    contact_person = models.CharField(_("personne de contact"), max_length=255, blank=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("fournisseur")
        ordering = ["name"]

    def __str__(self):
        return f"{self.code} — {self.name}"
```

- [ ] **Step 2: `models/__init__.py`** — add `from .supplier import Supplier` and `"Supplier"` to `__all__`.

- [ ] **Step 3: `external_driver.py`** — add two fields after `email` (and add the settings import at the top: `from django.conf import settings`):

```python
    employee_id = models.CharField(_("numéro d'employé"), max_length=30, blank=True)
    user        = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("employé lié"),
                                    on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name="driver_profiles")
```

- [ ] **Step 4: Generate + apply**

```bash
../env/bin/python manage.py makemigrations fleet 2>&1 | tail -6
../env/bin/python manage.py migrate fleet 2>&1 | tail -3
../env/bin/python manage.py makemigrations fleet --check --dry-run 2>&1 | tail -2   # "No changes detected"
```
Expected: migration creates `Supplier` + adds the 2 driver fields; applies; no further changes.

- [ ] **Step 5: Smoke**

```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import Supplier, ExternalDriver
print('Supplier OK', Supplier.__name__)
d = ExternalDriver.objects.first()
print('driver has employee_id:', hasattr(d, 'employee_id'), '| user attr:', hasattr(d, 'user'))
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: `Supplier OK Supplier` and `True | user attr: True`.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/fleet/models/ backend/apps/fleet/migrations/
git commit -m "feat(fleet): Supplier model + ExternalDriver employee_id/user link"
```

---

### Task 2: Supplier CRUD + Driver API enrichment

**Files:**
- Modify: `backend/apps/fleet/serializers.py`
- Modify: `backend/apps/fleet/selectors/vehicle_selectors.py`, `selectors/__init__.py`
- Modify: `backend/apps/fleet/services/vehicle_services.py`, `services/__init__.py`
- Modify: `backend/apps/fleet/views.py`
- Modify: `backend/apps/fleet/urls.py`

**Interfaces:**
- Produces: `/fleet/suppliers/` CRUD; Driver read/write with `employee_id`, `user`.

- [ ] **Step 1: Supplier serializers** (add near the Parking serializers, and add `Supplier` to the models import at the top of `serializers.py`):

```python
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ["id", "name", "code", "tax_id", "address", "city", "country",
                  "phone", "email", "website", "contact_person", "notes",
                  "is_active", "created_at", "updated_at"]

class SupplierWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    code = serializers.CharField(max_length=20)
    tax_id = serializers.CharField(max_length=50, required=False, allow_blank=True, default="")
    address = serializers.CharField(required=False, allow_blank=True, default="")
    city = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    country = serializers.CharField(max_length=2, required=False, default="CM")
    phone = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    website = serializers.URLField(required=False, allow_blank=True, default="")
    contact_person = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")
    is_active = serializers.BooleanField(required=False, default=True)
```

- [ ] **Step 2: Supplier selectors** (append to `vehicle_selectors.py`; add `Supplier` to its models import):

```python
def list_suppliers(company_id, search=None):
    qs = Supplier.objects.filter(company_id=company_id, is_deleted=False).order_by("name")
    if search:
        from django.db.models import Q
        qs = qs.filter(Q(name__icontains=search) | Q(code__icontains=search))
    return qs

def get_supplier(supplier_id, company_id):
    return Supplier.objects.filter(id=supplier_id, company_id=company_id, is_deleted=False).first()
```
Export `list_suppliers, get_supplier` from `selectors/__init__.py`.

- [ ] **Step 3: Supplier services** (in `vehicle_services.py`; add `Supplier` to its models import):

```python
@transaction.atomic
def create_supplier(*, company, name, code, created_by, **fields):
    if Supplier.objects.filter(company=company, code=code, is_deleted=False).exists():
        raise ApplicationError(_("Un fournisseur avec ce code existe déjà."))
    return Supplier.objects.create(company=company, name=name, code=code, created_by=created_by, **fields)

@transaction.atomic
def update_supplier(supplier, *, updated_by, **fields):
    allowed = {"name", "code", "tax_id", "address", "city", "country", "phone",
               "email", "website", "contact_person", "notes", "is_active"}
    if "code" in fields and Supplier.objects.filter(
            company=supplier.company, code=fields["code"], is_deleted=False).exclude(id=supplier.id).exists():
        raise ApplicationError(_("Un fournisseur avec ce code existe déjà."))
    for key, val in fields.items():
        if key in allowed:
            setattr(supplier, key, val)
    supplier.updated_by = updated_by
    supplier.save()
    return supplier

@transaction.atomic
def delete_supplier(supplier, *, deleted_by):
    supplier.soft_delete(user=deleted_by)
```
Export `create_supplier, update_supplier, delete_supplier` from `services/__init__.py` (imports + `__all__`).

- [ ] **Step 4: Supplier views + urls.** In `views.py` (import `SupplierSerializer, SupplierWriteSerializer`) add — mirroring `ParkingListView`/`ParkingDetailView`:

```python
class SupplierListView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        rows = selectors.list_suppliers(company_id, search=request.query_params.get("search"))
        return success_response(SupplierSerializer(rows, many=True).data)
    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = SupplierWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            sup = services.create_supplier(company=company, created_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(SupplierSerializer(sup).data)

class SupplierDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]
    def _get(self, request, supplier_id):
        return selectors.get_supplier(supplier_id, _scope_company_id(request))
    def get(self, request, supplier_id):
        s = self._get(request, supplier_id)
        return success_response(SupplierSerializer(s).data) if s else error_response(_("Fournisseur introuvable."), status_code=404)
    def patch(self, request, supplier_id):
        s = self._get(request, supplier_id)
        if not s:
            return error_response(_("Fournisseur introuvable."), status_code=404)
        payload = SupplierWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            s = services.update_supplier(s, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(SupplierSerializer(s).data)
    def delete(self, request, supplier_id):
        s = self._get(request, supplier_id)
        if not s:
            return error_response(_("Fournisseur introuvable."), status_code=404)
        services.delete_supplier(s, deleted_by=request.user)
        return no_content_response()
```
urls (near the parking block):
```python
    path("suppliers/",                    views.SupplierListView.as_view()),
    path("suppliers/<uuid:supplier_id>/", views.SupplierDetailView.as_view()),
```

- [ ] **Step 5: Driver serializers.** `ExternalDriverSerializer`: add `employee_id` to fields, plus `user` and:
```python
    user_name = serializers.SerializerMethodField()
    def get_user_name(self, obj):
        if obj.user_id:
            u = obj.user
            return f"{u.first_name} {u.last_name}".strip() or u.username
        return None
```
(add `"employee_id", "user", "user_name"` to `Meta.fields`). `ExternalDriverWriteSerializer`: add
```python
    employee_id = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    user_id = serializers.UUIDField(required=False, allow_null=True, default=None)
```

- [ ] **Step 6: Driver service.** `create_external_driver`: add params `employee_id="", user_id=None` and pass `employee_id=employee_id, user_id=user_id` into `ExternalDriver.objects.create(...)`. `update_external_driver`: add `"employee_id", "user_id"` to `allowed`.

- [ ] **Step 7: Driver view validates user.** In `ExternalDriverListView.post` and `ExternalDriverDetailView.patch`, if `user_id` present, verify it belongs to the company:
```python
        if d.get("user_id"):
            from apps.authentication.models import User
            if not User.objects.filter(id=d["user_id"], company=company).exists():
                return error_response(_("Employé introuvable dans votre institution."), status_code=404)
```
(In `patch`, resolve `company` from `_scope_company_id`/the driver's company as available; use the driver's `company` for the check.)

- [ ] **Step 8: Verify**

```bash
../env/bin/python manage.py check 2>&1 | grep -iE "error|Traceback" | head
../env/bin/python manage.py shell -c "
import apps.fleet.services as s
from apps.system_config.models import Company
from apps.fleet.serializers import SupplierSerializer, ExternalDriverSerializer
from apps.fleet.models import ExternalDriver
co = Company.objects.get(slug='voyageur-express')
sup = s.create_supplier(company=co, name='Garage Central', code='GC01', phone='+237690', created_by=None)
print('supplier:', SupplierSerializer(sup).data['code'])
d = ExternalDriver.objects.filter(company=co).first()
if d:
    d.employee_id='EMP-42'; d.save(update_fields=['employee_id'])
    print('driver employee_id:', ExternalDriverSerializer(d).data['employee_id'])
sup.delete()
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: `supplier: GC01` and `driver employee_id: EMP-42`.

- [ ] **Step 9: Commit**

```bash
git add backend/apps/fleet/
git commit -m "feat(fleet): Supplier CRUD + Driver employee link API"
```

---

### Task 3: Frontend Fournisseurs (service + screen + menu)

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (`FLEET.suppliers`)
- Modify: `angular/src/_api/models/fleet.models.ts` (`Supplier`)
- Create: `angular/src/_api/services/fleet/supplier.service.ts`
- Create: `angular/src/_api/pages/fleet/suppliers/suppliers.component.{ts,html}`
- Modify: `pages.routes.ts`, `routes.ts`, `sidebar.service.ts`

**Interfaces:**
- Produces: `SupplierService`; « Fournisseurs » screen at `/fleet/suppliers`.

- [ ] **Step 1:** In `api.config.ts` `FLEET` add:
```typescript
  suppliers:    `${API_BASE}/fleet/suppliers/`,
  supplierItem: (id: string) => `${API_BASE}/fleet/suppliers/${id}/`,
```
- [ ] **Step 2:** In `fleet.models.ts` add:
```typescript
export interface Supplier {
  id: string; name: string; code: string; tax_id: string; address: string;
  city: string; country: string; phone: string; email: string; website: string;
  contact_person: string; notes: string; is_active: boolean;
  created_at: string; updated_at: string;
}
```
- [ ] **Step 3:** `supplier.service.ts` — mirror `parking.service.ts` (`list/get/create/update/delete`) using `FLEET.suppliers` / `FLEET.supplierItem`, type `Supplier`.
- [ ] **Step 4:** `suppliers.component.{ts,html}` — CRUD screen mirroring `pages/fleet/parking/parking.component.*` (selector `app-fleet-suppliers`, class `FleetSuppliersComponent`, modal id `supplier-modal`). Form: name*, code*, tax_id, address, city, country, phone, email, website, contact_person, notes, is_active toggle. Table columns: Nom, Code, Contact (`contact_person`), Téléphone, Statut, Actions. Search filters name/code. Uses `ti ti-edit`/`ti ti-trash`.
- [ ] **Step 5:** Wire: child route `{ path: 'suppliers', … FleetSuppliersComponent }` inside the `fleet` block in `pages.routes.ts`; `fleetSuppliers: '/fleet/suppliers'` in `routes.ts`; `{ menuValue: 'Fournisseurs', route: routes.fleetSuppliers, base: 'suppliers' }` in the **Gestion Flotte** subMenus.
- [ ] **Step 6: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/models/fleet.models.ts angular/src/_api/services/fleet/supplier.service.ts angular/src/_api/pages/fleet/suppliers/ angular/src/app/features/pages/pages.routes.ts angular/src/app/core/helpers/routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git commit -m "feat(fleet-fe): Fournisseurs CRUD screen under Gestion Flotte"
```

---

### Task 4: Conducteurs screen enrichment

**Files:**
- Modify: `angular/src/_api/models/fleet.models.ts` (`ExternalDriver`)
- Modify: `angular/src/_api/pages/fleet/external-drivers/external-drivers.component.ts`
- Modify: `angular/src/_api/pages/fleet/external-drivers/external-drivers.component.html`

**Interfaces:**
- Consumes: `UserService` (`services/users/user.service`), the enriched Driver API (Task 2).

- [ ] **Step 1:** `fleet.models.ts` `ExternalDriver` — add `employee_id: string; user: string | null; user_name: string | null;`.
- [ ] **Step 2:** `external-drivers.component.ts` — import & inject `UserService`; add `users: AppUser[] = [];` (import `AppUser` from `../../../models/user.models`); load `this.userService.list({ is_active: true }).subscribe(d => this.users = d)` in `ngOnInit`. Add to the form group `employee_id: ['']`, `user_id: [null]`. In `openCreate` reset include them; in `openEdit` patch `employee_id: d.employee_id, user_id: d.user`. In the submit payload include `employee_id: v.employee_id || '', user_id: v.user_id || null`.
- [ ] **Step 3:** `external-drivers.component.html` — in the modal add a **N° d'employé** input (`formControlName="employee_id"`) and an **Employé lié** `<select formControlName="user_id">` (`<option [ngValue]="null">— Aucun —</option>` then `@for (u of users; track u.id) { <option [ngValue]="u.id">{{ u.full_name }}</option> }`). Optionally add an « Employé » column to the table showing `d.employee_id || '—'`.
- [ ] **Step 4: Build** — `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`. Expected: success.
- [ ] **Step 5: Manual check** (backend running, seeded, `admin@demo.cm`): Gestion Flotte → Fournisseurs — add/edit/delete a supplier (duplicate code is rejected). Gestion Flotte → Conducteurs — edit a driver, set N° d'employé and link an Employé; save and confirm persistence.
- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/models/fleet.models.ts angular/src/_api/pages/fleet/external-drivers/
git commit -m "feat(fleet-fe): Conducteurs screen - employee_id + linked user"
```

---

## Self-Review Notes

- **Spec coverage:** §3.1 Supplier model → T1; §3.2 Driver fields → T1; §3.3 Supplier CRUD → T2; §3.4 Driver serializer/service/view → T2; §4.1 Fournisseurs frontend → T3; §4.2 Conducteurs enrichment → T4.
- **Placeholder scan:** none — model, migration, CRUD, serializer/service/view, and frontend screen are concrete code (Supplier CRUD explicitly mirrors the Parking classes just built).
- **Type consistency:** `Supplier` fields identical across model/serializer/FE; Driver `employee_id`/`user`/`user_name` consistent (read `user`+`user_name`, write `user_id`). Selector/service names (`list_suppliers`/`get_supplier`, `create/update/delete_supplier`) exported consistently.
- **Data safety:** additive migration; `makemigrations --check` clean (T1 Step 4). `code` unique-per-company + `user_id` company check enforced server-side.
- **Known verify-time check:** confirm `AppUser.full_name` exists on the FE user model for the driver dropdown (T4 Step 3); the `patch` company source for the user check (T2 Step 7).
