# Gestion Flotte C1 — Vehicle Models → Config Flotte Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `fleet.VehicleModel`'s `vehicle_type`/`fuel_type` enums to Config-Flotte FKs, add `transmission`/`traction_type` FKs, and feed the Modèles screen from the configurable lists — without data loss.

**Architecture:** Model FK conversion + a hand-written data migration (rename→add→map→drop) that maps existing enum values to global config rows. Serializer/service/view resolve FK ids within scope (globals + company). The Modèles screen loads Config Flotte services for its dropdowns.

**Tech Stack:** Django + DRF (backend), Angular 21 standalone components (frontend), SQLite (dev).

## Global Constraints

- **No test framework.** Verify via `../env/bin/python manage.py check` / `migrate` / `makemigrations --check` + shell smoke (backend) and `cd angular && npx ng build` + manual check (frontend).
- FKs `on_delete=PROTECT`, `null=True, blank=True`. Config lookups resolve to **globals (`company=NULL`) + the user's company**.
- **Non-breaking:** existing models keep their type/fuel after migration.
- French UI. Backend from `ERP-master/backend/` via `../env/bin/python manage.py`. Frontend from `angular/`.
- **Commit as shimi — no Co-Authored-By trailer.** Branch `feature/fleet-gestion-c1`.
- `fleet` migrations are at `0002_...` (config tables) — new migration chains from the latest.

---

### Task 1: Model FKs + data migration

**Files:**
- Modify: `backend/apps/fleet/models/vehicle_model.py`
- Create: `backend/apps/fleet/migrations/00XX_vehiclemodel_config_fks.py` (hand-written)

**Interfaces:**
- Produces: `VehicleModel.vehicle_type`, `.fuel_type`, `.transmission`, `.traction_type` FKs (nullable).

- [ ] **Step 1: Edit the model.** Remove the `VehicleType` and `FuelType` inner `TextChoices` classes and replace the two CharFields; add two FKs. The field block becomes:

```python
    brand        = models.ForeignKey("fleet.VehicleBrand", verbose_name=_("marque"),
                                      on_delete=models.PROTECT, related_name="models")
    name         = models.CharField(_("modèle"), max_length=100)
    vehicle_type = models.ForeignKey("fleet.VehicleType", verbose_name=_("type"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    fuel_type    = models.ForeignKey("fleet.FuelType", verbose_name=_("carburant"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    transmission = models.ForeignKey("fleet.Transmission", verbose_name=_("transmission"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    traction_type= models.ForeignKey("fleet.TractionType", verbose_name=_("traction"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    seats        = models.PositiveSmallIntegerField(_("places assises"), null=True, blank=True)
    doors        = models.PositiveSmallIntegerField(_("portes"), null=True, blank=True)
    horsepower   = models.PositiveSmallIntegerField(_("puissance (ch)"), null=True, blank=True)
    payload_kg   = models.PositiveIntegerField(_("charge utile (kg)"), null=True, blank=True)
```
Keep the rest of the class (Meta, `__str__`). If `__str__` references `get_vehicle_type_display()`, change it to `self.vehicle_type.name if self.vehicle_type_id else ''`. (Check and fix.)

- [ ] **Step 2: Find the latest fleet migration name**

Run: `ls backend/apps/fleet/migrations | grep -E "^000" | sort | tail -1`
Note it (e.g. `0002_...`) — the new migration `dependencies` on it.

- [ ] **Step 3: Hand-write the migration** `00XX_vehiclemodel_config_fks.py` (replace `<DEP>` with the name from Step 2):

```python
import django.db.models.deletion
from django.db import migrations, models

VT_MAP = {"car": "Voiture", "van": "Fourgon/Van", "truck": "Camion",
          "bus": "Bus", "motorcycle": "Moto", "other": "Autre"}
FT_MAP = {"gasoline": "Essence", "diesel": "Diesel", "electric": "Électrique",
          "hybrid": "Hybride", "lpg": "GPL", "other": "Autre"}


def map_enums(apps, schema_editor):
    VehicleModel = apps.get_model("fleet", "VehicleModel")
    VehicleType = apps.get_model("fleet", "VehicleType")
    FuelType = apps.get_model("fleet", "FuelType")
    vt_cache, ft_cache = {}, {}
    def vt(name):
        if name not in vt_cache:
            vt_cache[name] = VehicleType.objects.get_or_create(company=None, name=name)[0]
        return vt_cache[name]
    def ft(name):
        if name not in ft_cache:
            ft_cache[name] = FuelType.objects.get_or_create(company=None, name=name)[0]
        return ft_cache[name]
    for m in VehicleModel.objects.all():
        old_vt = getattr(m, "vehicle_type_old", None)
        old_ft = getattr(m, "fuel_type_old", None)
        if old_vt:
            m.vehicle_type = vt(VT_MAP.get(old_vt, "Autre"))
        if old_ft:
            m.fuel_type = ft(FT_MAP.get(old_ft, "Autre"))
        m.save(update_fields=["vehicle_type", "fuel_type"])


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("fleet", "<DEP>")]
    operations = [
        migrations.RenameField("vehiclemodel", "vehicle_type", "vehicle_type_old"),
        migrations.RenameField("vehiclemodel", "fuel_type", "fuel_type_old"),
        migrations.AddField("vehiclemodel", "vehicle_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                related_name="vehicle_models", to="fleet.vehicletype", verbose_name="type")),
        migrations.AddField("vehiclemodel", "fuel_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                related_name="vehicle_models", to="fleet.fueltype", verbose_name="carburant")),
        migrations.AddField("vehiclemodel", "transmission",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                related_name="vehicle_models", to="fleet.transmission", verbose_name="transmission")),
        migrations.AddField("vehiclemodel", "traction_type",
            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.PROTECT,
                related_name="vehicle_models", to="fleet.tractiontype", verbose_name="traction")),
        migrations.RunPython(map_enums, noop),
        migrations.RemoveField("vehiclemodel", "vehicle_type_old"),
        migrations.RemoveField("vehiclemodel", "fuel_type_old"),
    ]
```

- [ ] **Step 4: Apply + verify no data loss**

Run:
```bash
../env/bin/python manage.py migrate fleet 2>&1 | tail -3
../env/bin/python manage.py makemigrations fleet --check --dry-run 2>&1 | tail -3   # expect: "No changes detected"
../env/bin/python manage.py shell -c "
from apps.fleet.models import VehicleModel
for m in VehicleModel.objects.all()[:10]:
    print(m.name, '->', m.vehicle_type and m.vehicle_type.name, '/', m.fuel_type and m.fuel_type.name)
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: each model shows a mapped type/fuel name (e.g. `Coaster -> Bus / Diesel`); `makemigrations --check` reports no changes.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/fleet/models/vehicle_model.py backend/apps/fleet/migrations/00XX_vehiclemodel_config_fks.py
git commit -m "feat(fleet): VehicleModel type/fuel -> Config Flotte FKs (+transmission/traction)"
```

---

### Task 2: Serializers + service + view

**Files:**
- Modify: `backend/apps/fleet/serializers.py`
- Modify: `backend/apps/fleet/services/vehicle_services.py`
- Modify: `backend/apps/fleet/views.py`

**Interfaces:**
- Consumes: the FK fields (Task 1).
- Produces: `VehicleModelSerializer` exposes `vehicle_type`+`vehicle_type_name`, `fuel_type`+`fuel_type_name`, `transmission`+`transmission_name`, `traction_type`+`traction_type_name`; `VehicleModelWriteSerializer` takes `vehicle_type_id`,`fuel_type_id`,`transmission_id`,`traction_type_id`; `create_vehicle_model(..., vehicle_type, fuel_type, transmission=None, traction_type=None)`.

- [ ] **Step 1: `VehicleModelSerializer`** — add name fields and include the FK ids. Replace the class body:

```python
class VehicleModelSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source="brand.name", read_only=True)
    vehicle_type_name = serializers.CharField(source="vehicle_type.name", read_only=True, default=None)
    fuel_type_name = serializers.CharField(source="fuel_type.name", read_only=True, default=None)
    transmission_name = serializers.CharField(source="transmission.name", read_only=True, default=None)
    traction_type_name = serializers.CharField(source="traction_type.name", read_only=True, default=None)

    class Meta:
        model = VehicleModel
        fields = [
            "id", "brand", "brand_name", "name",
            "vehicle_type", "vehicle_type_name",
            "fuel_type", "fuel_type_name",
            "transmission", "transmission_name",
            "traction_type", "traction_type_name",
            "seats", "doors", "horsepower", "payload_kg",
            "created_at", "updated_at",
        ]
```

- [ ] **Step 2: `VehicleModelWriteSerializer`** — replace the two ChoiceFields:

```python
class VehicleModelWriteSerializer(serializers.Serializer):
    brand_id = serializers.UUIDField()
    name = serializers.CharField(max_length=100)
    vehicle_type_id = serializers.UUIDField(required=False, allow_null=True)
    fuel_type_id = serializers.UUIDField(required=False, allow_null=True)
    transmission_id = serializers.UUIDField(required=False, allow_null=True)
    traction_type_id = serializers.UUIDField(required=False, allow_null=True)
    seats = serializers.IntegerField(required=False, allow_null=True, default=None)
    doors = serializers.IntegerField(required=False, allow_null=True, default=None)
    horsepower = serializers.IntegerField(required=False, allow_null=True, default=None)
    payload_kg = serializers.IntegerField(required=False, allow_null=True, default=None)
```
(Keep any imports; `VehicleModel` is already imported.)

- [ ] **Step 3: `VehicleListSerializer.vehicle_type`** — read the FK name safely. Change the line to:

```python
    vehicle_type = serializers.CharField(source="model.vehicle_type.name", read_only=True, default=None)
```

- [ ] **Step 4: `create_vehicle_model` / `update_vehicle_model`** (`vehicle_services.py`):

```python
def create_vehicle_model(
    *, brand, name: str, vehicle_type=None, fuel_type=None,
    transmission=None, traction_type=None,
    seats=None, doors=None, horsepower=None, payload_kg=None, created_by,
):
    if (VehicleModel.objects
            .filter(brand=brand, name__iexact=name, is_deleted=False).exists()):
        raise ApplicationError(_("Ce modèle existe déjà pour cette marque."))
    return VehicleModel.objects.create(
        brand=brand, name=name,
        vehicle_type=vehicle_type, fuel_type=fuel_type,
        transmission=transmission, traction_type=traction_type,
        seats=seats, doors=doors, horsepower=horsepower, payload_kg=payload_kg,
        created_by=created_by,
    )
```
And in `update_vehicle_model`, set `allowed`:
```python
    allowed = {"name", "vehicle_type_id", "fuel_type_id", "transmission_id",
               "traction_type_id", "seats", "doors", "horsepower", "payload_kg"}
```

- [ ] **Step 5: View FK resolution** (`views.py`). Add a helper near the top of the module (after imports):

```python
def _cfg(model_cls, cid, company_id):
    """Return a config row by id if global or owned by the company, else None."""
    if not cid:
        return None
    from django.db.models import Q
    return model_cls.objects.filter(
        Q(company_id=company_id) | Q(company__isnull=True), id=cid, is_deleted=False
    ).first()
```
In `VehicleModelListView.post`, after resolving `brand`, resolve the config FKs and pass them:

```python
        from apps.fleet.models import VehicleType, FuelType, Transmission, TractionType
        company_id = _scope_company_id(request)
        vt = _cfg(VehicleType, d.get("vehicle_type_id"), company_id)
        ft = _cfg(FuelType, d.get("fuel_type_id"), company_id)
        tr = _cfg(Transmission, d.get("transmission_id"), company_id)
        tc = _cfg(TractionType, d.get("traction_type_id"), company_id)
        try:
            model = services.create_vehicle_model(
                brand=brand, name=d["name"],
                vehicle_type=vt, fuel_type=ft, transmission=tr, traction_type=tc,
                seats=d.get("seats"), doors=d.get("doors"),
                horsepower=d.get("horsepower"), payload_kg=d.get("payload_kg"),
                created_by=request.user,
            )
```
(`_scope_company_id` already exists in fleet views for the config endpoints? It's in `config_api.common`. In `views.py` use the fleet module's own scope resolver — check: fleet views use `_resolve_company`/`_scope_company_id`? If not present, derive `company_id = str(request.user.company_id) if not request.user.is_superuser else request.query_params.get("company_id")`.)

In `VehicleModelDetailView.patch`, the validated dict `d` already carries `*_id` keys → they flow through `update_vehicle_model` via `setattr(model, "vehicle_type_id", val)`. No extra resolution needed, but guard invalid ids: before calling update, for each provided `*_id`, if non-null and `_cfg(...)` returns None → `error_response(...404)`.

- [ ] **Step 6: Verify**

Run: `../env/bin/python manage.py check 2>&1 | grep -iE "error|Traceback" | head` (expect none)
Then a shell smoke:
```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import VehicleModel
from apps.fleet.serializers import VehicleModelSerializer
m = VehicleModel.objects.first()
d = VehicleModelSerializer(m).data
print('read ok:', d['vehicle_type_name'], '/', d['fuel_type_name'])
" 2>&1 | grep -viE 'WARNING|plaintext|pip install|staticfiles|System check|^\?:'
```
Expected: prints the mapped names.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/fleet/serializers.py backend/apps/fleet/services/vehicle_services.py backend/apps/fleet/views.py
git commit -m "feat(fleet): segment-aware VehicleModel API on Config Flotte FKs"
```

---

### Task 3: Modèles screen → Config Flotte dropdowns

**Files:**
- Modify: `angular/src/_api/models/fleet.models.ts`
- Modify: `angular/src/_api/pages/fleet/models/models.component.ts`
- Modify: `angular/src/_api/pages/fleet/models/models.component.html`

**Interfaces:**
- Consumes: Config Flotte services (`VehicleTypeService`, `FuelTypeService`, `TransmissionService`, `TractionTypeService`) and the C1 API (Task 2).

- [ ] **Step 1: `fleet.models.ts`** — update `FleetVehicleModel`. Replace the `vehicle_type`/`fuel_type` union-typed fields with FK id + name and add the two new FKs:

```typescript
  vehicle_type:        string | null;
  vehicle_type_name:   string | null;
  fuel_type:           string | null;
  fuel_type_name:      string | null;
  transmission:        string | null;
  transmission_name:   string | null;
  traction_type:       string | null;
  traction_type_name:  string | null;
```
(Leave the `VehicleType`/`FuelType` string-union types in the file; `VehicleListItem.vehicle_type` stays a display string.)

- [ ] **Step 2: `models.component.ts`** — swap hardcoded arrays for config lists. Change imports/among fields:

```typescript
import { VehicleTypeService } from '../../../services/fleet-config/vehicle-type.service';
import { FuelTypeService } from '../../../services/fleet-config/fuel-type.service';
import { TransmissionService } from '../../../services/fleet-config/transmission.service';
import { TractionTypeService } from '../../../services/fleet-config/traction-type.service';
import { VehicleType, FuelType, Transmission, TractionType } from '../../../models/fleet-config.models';
```
Replace the `vehicleTypes`/`fuelTypes` hardcoded arrays with:
```typescript
  vehicleTypes: VehicleType[] = [];
  fuelTypes: FuelType[] = [];
  transmissions: Transmission[] = [];
  tractions: TractionType[] = [];
```
Inject the 4 services in the constructor. In `ngOnInit`, load them:
```typescript
    this.vtSvc.list().subscribe(d => this.vehicleTypes = d);
    this.ftSvc.list().subscribe(d => this.fuelTypes = d);
    this.trSvc.list().subscribe(d => this.transmissions = d);
    this.tcSvc.list().subscribe(d => this.tractions = d);
```
Update the form group:
```typescript
      vehicle_type_id:  [null, Validators.required],
      fuel_type_id:     [null, Validators.required],
      transmission_id:  [null],
      traction_type_id: [null],
```
(remove the old `vehicle_type`/`fuel_type` controls). Update `openCreate` reset and `openEdit` patch to use the `_id` controls (`vehicle_type_id: m.vehicle_type`, etc.). The list filter `filterVehicleType` now holds a VehicleType id. Remove `vehicleTypeLabel`/`fuelTypeLabel` (use `m.vehicle_type_name`/`m.fuel_type_name` in the template). Replace the `totalCar`/`totalBus` getters with a single `get total(): number { return this.models.length; }` (enum-based counts no longer apply).

- [ ] **Step 3: `models.component.html`** — replace the type/fuel `<select>` option loops with the config lists, add transmission/traction selects, and show names in the table/stats:
  - Type select: `@for (t of vehicleTypes; track t.id) { <option [ngValue]="t.id">{{ t.name }}</option> }` bound to `vehicle_type_id`.
  - Fuel select: over `fuelTypes` → `fuel_type_id`.
  - Add Transmission select over `transmissions` → `transmission_id` (with a `— Aucune —` `[ngValue]="null"` option); Traction over `tractions` → `traction_type_id`.
  - Table cells: `{{ m.vehicle_type_name }}`, `{{ m.fuel_type_name }}` (drop `vehicleTypeLabel(...)`).
  - The filter dropdown (top of list) over `vehicleTypes` bound to `filterVehicleType` (value = id).
  - Replace any `totalCar`/`totalBus` stat cards with a single "Total modèles" using `total`.

- [ ] **Step 4: Build**

Run: `cd angular && npx ng build 2>&1 | grep -iE "error|Application bundle" | head`
Expected: `Application bundle generation complete`.

- [ ] **Step 5: Manual check** (backend running, seeded, logged in as `admin@demo.cm`): open **Gestion Flotte → Modèles**. Existing models show their mapped Type/Carburant names. Create a model: Type/Carburant dropdowns are fed by Config Flotte (globals + your own), Transmission/Traction optional; save works and the row shows the names. Add a company-specific FuelType in Config Flotte → it appears in this dropdown.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/models/fleet.models.ts angular/src/_api/pages/fleet/models/
git commit -m "feat(fleet-fe): Modèles screen uses Config Flotte dropdowns"
```

---

## Self-Review Notes

- **Spec coverage:** §3.1 model FKs → T1; §3.2 migration → T1; §3.3 serializers (incl. VehicleListSerializer fix) → T2; §3.4 service → T2; §3.5 view FK resolution → T2; §4 frontend → T3. Out-of-scope items (C2 Vehicle enrichment, power/units, status) excluded.
- **Placeholder scan:** none — migration, serializer, service, view, and component changes all shown as concrete code.
- **Type consistency:** FK field names `vehicle_type/fuel_type/transmission/traction_type` used identically in model, migration, serializer, service (`*_id` on write/update), view (`_cfg`), and FE (`*`/`*_name`). Config service class names match `services/fleet-config/*`.
- **Data safety:** the migration maps existing enum values (rename→add→RunPython→drop); `makemigrations --check` must report no changes afterward (Task 1 Step 4).
- **Known verify-time check:** confirm the fleet views' company-scope resolver name (`_scope_company_id` vs deriving inline) in Task 2 Step 5.
