# Gestion Flotte D — Operations (Services & Contrats) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the narrow `MaintenanceOrder` and `Insurance` models into the analysis's configurable `Service` and `Contract` (with `RecurringCost` lines and generic attachments), retire the static `MaintenanceType`, all in place with data migrations.

**Architecture:** Django DRF backend (class-based `APIView`, selectors/services packages, `BaseModel` UUID+soft-delete, `IsInstitutionAdmin`, standard response helpers) + Angular 21 standalone frontend (Bootstrap modals, Tabler icons, config-fed dropdowns). Preventive intervals live on the configurable `InterventionType`. Attachments reuse `core.Attachment` (GenericFK).

**Tech Stack:** Django, DRF, SQLite (dev), Angular 21, TypeScript, Bootstrap 5, Tabler icons.

## Global Constraints

- **Commits authored as shimi — NO `Co-Authored-By: Claude` trailer.** (`git commit -m "..."` only.)
- **French-first UI.** All labels, help text, info banners in French.
- Each backend task must leave the app importable: `python manage.py check` passes and `makemigrations --check --dry-run` reports "No changes detected" at task end.
- Python interpreter: `../env/bin/python` (run from `backend/`). No `python`/`python3` on PATH.
- Multi-tenant config scope: nullable `company` FK; selectors filter `Q(company_id=cid) | Q(company__isnull=True)`.
- Currency default `"XAF"` (Cameroon).
- No test framework exists. "Tests" = `manage.py check` + `makemigrations --check` + shell smoke (backend); `npx ng build` (frontend).
- Icons: use `ti ti-edit` (never `ti ti-pencil` — blank glyph in this build). Feather icons `data-feather="..."` also used in fleet screens.
- Branch: `feature/fleet-gestion-d-operations` (already created, spec committed).

---

## File Structure

**Backend (`backend/apps/fleet/`):**
- `models/config/reference.py` — MODIFY `InterventionType` (add intervals).
- `models/service.py` — RENAME from `maintenance_order.py`; class `Service`.
- `models/contract.py` — RENAME from `insurance.py`; class `Contract`.
- `models/recurring_cost.py` — CREATE; class `RecurringCost`.
- `models/maintenance_type.py` — DELETE (Task 4).
- `models/__init__.py` — MODIFY exports.
- `selectors/operations_selectors.py` — RENAME from `maintenance_selectors.py`; Service + Contract + RecurringCost selectors.
- `services/operations_services.py` — RENAME from `maintenance_services.py`; Service + Contract + RecurringCost + attachment services.
- `selectors/__init__.py`, `services/__init__.py` — MODIFY exports.
- `selectors/vehicle_selectors.py` — MODIFY alerts/stats refs.
- `services/vehicle_services.py` — MODIFY: remove insurance fns (moved to operations).
- `serializers.py` — MODIFY: Service/Contract/RecurringCost serializers; drop Maintenance*/Insurance*.
- `views.py`, `urls.py`, `admin.py` — MODIFY endpoints + admin registrations.
- `migrations/0006_*` … `0009_*` — CREATE.

**Frontend (`angular/src/_api/`):**
- `services/fleet/service.service.ts` — RENAME from `maintenance-order.service.ts`.
- `services/fleet/contract.service.ts` — RENAME from `insurance.service.ts`.
- `services/fleet/maintenance-type.service.ts` — DELETE.
- `pages/fleet/services/` — RENAME from `maintenance-orders/`.
- `pages/fleet/contracts/` — RENAME from `insurance/`.
- `pages/fleet/maintenance-types/` — DELETE.
- `models/fleet.models.ts`, `api.config.ts` — MODIFY.
- `pages/fleet/intervention-types` (Config Flotte screen) — MODIFY (interval inputs).
- Angular routes (`app/core/helpers/routes.ts` or feature routes), sidebar (`sidebar.service.ts`) — MODIFY.

---

## Task 1: InterventionType gains preventive intervals

**Files:**
- Modify: `apps/fleet/models/config/reference.py` (InterventionType, ~line 131)
- Modify: `apps/fleet/config_api/serializers.py` (InterventionTypeRead/Write, ~line 79)
- Create: `apps/fleet/migrations/0006_interventiontype_intervals.py`

**Interfaces:**
- Produces: `InterventionType.interval_km` (Decimal|None), `InterventionType.interval_days` (int|None), exposed in config read/write serializers as `interval_km`, `interval_days`.

- [ ] **Step 1: Add fields to InterventionType**

In `reference.py`, inside `class InterventionType(_CompanyScoped)`, after the `category` field:

```python
    interval_km = models.DecimalField(_("intervalle (km)"), max_digits=10, decimal_places=1,
                                      null=True, blank=True)
    interval_days = models.PositiveIntegerField(_("intervalle (jours)"), null=True, blank=True)
```

- [ ] **Step 2: Make migration**

Run: `../env/bin/python manage.py makemigrations fleet -n interventiontype_intervals`
Expected: creates `0006_interventiontype_intervals.py` adding two fields.

- [ ] **Step 3: Expose in config serializers**

In `config_api/serializers.py`, `InterventionTypeReadSerializer.Meta.fields` — add `"interval_km"`, `"interval_days"`. In `InterventionTypeWriteSerializer`, add:

```python
    interval_km = serializers.DecimalField(max_digits=10, decimal_places=1,
                                           required=False, allow_null=True)
    interval_days = serializers.IntegerField(required=False, allow_null=True, min_value=0)
```

Confirm the config write flow persists these (the generic `_ConfigDetailView`/create pass `serializer.validated_data` to the service — verify `interval_km`/`interval_days` are in the allowed set; if the InterventionType create/update uses an explicit field allow-list, add both keys).

- [ ] **Step 4: Verify**

Run: `../env/bin/python manage.py migrate fleet && ../env/bin/python manage.py check`
Expected: migration applies, check passes.
Run shell smoke:
```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import InterventionType as IT
it = IT.objects.create(name='Vidange test', category='SERVICE', interval_km=10000, interval_days=180)
print(it.interval_km, it.interval_days); it.delete()"
```
Expected: `10000.0 180`

- [ ] **Step 5: Commit**

```bash
git add apps/fleet/models/config/reference.py apps/fleet/config_api/serializers.py apps/fleet/migrations/0006_interventiontype_intervals.py
git commit -m "feat(fleet): add preventive intervals to InterventionType config"
```

---

## Task 2: MaintenanceOrder → Service (backend, full stack)

**Files:**
- Rename: `apps/fleet/models/maintenance_order.py` → `apps/fleet/models/service.py`
- Rename: `apps/fleet/selectors/maintenance_selectors.py` → `apps/fleet/selectors/operations_selectors.py`
- Rename: `apps/fleet/services/maintenance_services.py` → `apps/fleet/services/operations_services.py`
- Modify: `models/__init__.py`, `selectors/__init__.py`, `services/__init__.py`, `serializers.py`, `views.py`, `urls.py`, `admin.py`, `selectors/vehicle_selectors.py` (alerts/stats)
- Create: `apps/fleet/migrations/0007_maintenanceorder_to_service.py` (hand-written data migration)

**Interfaces:**
- Consumes: `InterventionType` (with intervals) from Task 1; `Supplier`, `ExternalDriver`, `core.Attachment`.
- Produces: model `Service` (`vehicle.services`); selectors `list_services(company_id, vehicle_id=None, status=None, date_from=None, date_to=None)`, `get_service(service_id, company_id)`, `list_vehicle_services(vehicle_id, company_id, status=None)`, `list_service_attachments(service)`; services `create_service`, `start_service`, `complete_service`, `cancel_service`, `update_service`, `delete_service`, `add_service_attachment(service, *, file, name, description, created_by)`, `delete_service_attachment(attachment, *, deleted_by)`; endpoints `services/`, `services/<uuid:id>/`, `services/<uuid:id>/start|complete|cancel/`, `services/<uuid:id>/attachments/`, `services/<uuid:id>/attachments/<uuid:att_id>/`.

> **CRITICAL:** rename model AND every importer in the SAME commit — otherwise `manage.py check` breaks (C1 lesson). `MaintenanceType` still exists (retired in Task 4); keep its selector/service functions inside the renamed operations files unchanged.

- [ ] **Step 1: Rename & rewrite the model file**

`git mv apps/fleet/models/maintenance_order.py apps/fleet/models/service.py`, then replace contents:

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Service(BaseModel):
    """Intervention (maintenance ou réparation) ponctuelle sur un véhicule."""

    class Status(models.TextChoices):
        PLANNED     = "planned",     _("Planifié")
        IN_PROGRESS = "in_progress", _("En cours")
        DONE        = "done",        _("Terminé")
        CANCELLED   = "cancelled",   _("Annulé")

    description       = models.CharField(_("description"), max_length=500, blank=True)
    vehicle           = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                          on_delete=models.CASCADE, related_name="services")
    intervention_type = models.ForeignKey("fleet.InterventionType", verbose_name=_("type d'intervention"),
                                          on_delete=models.PROTECT, related_name="services")
    supplier          = models.ForeignKey("fleet.Supplier", verbose_name=_("fournisseur / garage"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="services")
    driver            = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="services")
    status            = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                         default=Status.PLANNED)
    planned_date      = models.DateField(_("date planifiée"))
    start_date        = models.DateField(_("date de début"), null=True, blank=True)
    done_date         = models.DateField(_("date de fin"), null=True, blank=True)
    odometer_at_start = models.DecimalField(_("km au début"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    odometer_at_done  = models.DecimalField(_("km à la fin"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    cost              = models.DecimalField(_("coût"), max_digits=18, decimal_places=2,
                                            null=True, blank=True)
    currency          = models.CharField(_("devise"), max_length=3, default="XAF")
    notes             = models.TextField(_("notes"), blank=True)
    next_due_km       = models.DecimalField(_("prochain entretien (km)"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    next_due_date     = models.DateField(_("prochain entretien (date)"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("service / intervention")
        verbose_name_plural = _("services / interventions")
        ordering = ["-planned_date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.intervention_type.name} ({self.get_status_display()})"
```

- [ ] **Step 2: Update models/__init__.py**

Replace the `MaintenanceOrder` import/`__all__` entry with `from .service import Service` and `"Service"`. Leave `MaintenanceType` import intact.

- [ ] **Step 3: Rename & update selectors**

`git mv apps/fleet/selectors/maintenance_selectors.py apps/fleet/selectors/operations_selectors.py`. In it: keep `list_maintenance_types`/`get_maintenance_type` unchanged. Replace the order functions:

```python
def list_services(company_id, vehicle_id=None, status=None, date_from=None, date_to=None):
    qs = (Service.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "intervention_type", "supplier", "driver")
          .order_by("-planned_date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(planned_date__gte=date_from)
    if date_to:
        qs = qs.filter(planned_date__lte=date_to)
    return qs


def get_service(service_id, company_id):
    try:
        return Service.objects.select_related(
            "vehicle", "intervention_type", "supplier", "driver"
        ).get(id=service_id, vehicle__company_id=company_id, is_deleted=False)
    except Service.DoesNotExist:
        return None


def list_vehicle_services(vehicle_id, company_id, status=None):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    qs = vehicle.services.filter(is_deleted=False).select_related("intervention_type", "supplier")
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("-planned_date")


def list_service_attachments(service):
    from django.contrib.contenttypes.models import ContentType
    from apps.core.models import Attachment
    ct = ContentType.objects.get_for_model(Service)
    return Attachment.objects.filter(content_type=ct, object_id=service.id,
                                     is_deleted=False).order_by("created_at")
```

Update the top import: `from apps.fleet.models import MaintenanceType, Service`.

- [ ] **Step 4: Rename & update services**

`git mv apps/fleet/services/maintenance_services.py apps/fleet/services/operations_services.py`. Keep the three `*_maintenance_type` functions. Replace the order functions with service equivalents; repoint `next_due` computation to `intervention_type.interval_*`; add attachment helpers:

```python
from django.contrib.contenttypes.models import ContentType
from apps.core.models import Attachment
# ... existing imports; change model import to:
from apps.fleet.models import MaintenanceType, Service, OdometerLog, Vehicle


@transaction.atomic
def create_service(*, vehicle, intervention_type, planned_date, description="",
                   supplier=None, driver=None, currency="XAF", notes="", created_by):
    if vehicle.status == Vehicle.Status.OUT_OF_SERVICE:
        raise ApplicationError(_("Impossible de planifier une intervention sur un véhicule hors service."))
    return Service.objects.create(
        vehicle=vehicle, intervention_type=intervention_type, planned_date=planned_date,
        description=description, supplier=supplier, driver=driver, currency=currency,
        status=Service.Status.PLANNED, notes=notes, created_by=created_by,
    )


@transaction.atomic
def start_service(service, *, start_date=None, updated_by):
    if service.status != Service.Status.PLANNED:
        raise ApplicationError(_("Seule une intervention planifiée peut être démarrée."))
    today = start_date or timezone.now().date()
    service.status = Service.Status.IN_PROGRESS
    service.start_date = today
    service.odometer_at_start = service.vehicle.current_odometer
    service.updated_by = updated_by
    service.save(update_fields=["status", "start_date", "odometer_at_start", "updated_by", "updated_at"])
    vehicle = service.vehicle
    vehicle.status = Vehicle.Status.IN_MAINTENANCE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "updated_by", "updated_at"])
    return service


@transaction.atomic
def complete_service(service, *, done_date=None, cost=None, odometer_km=None,
                     notes=None, updated_by):
    if service.status != Service.Status.IN_PROGRESS:
        raise ApplicationError(_("Seule une intervention en cours peut être clôturée."))
    today = done_date or timezone.now().date()
    service.status = Service.Status.DONE
    service.done_date = today
    if cost is not None:
        service.cost = cost
    if notes is not None:
        service.notes = notes
    vehicle = service.vehicle
    if odometer_km is not None and odometer_km > vehicle.current_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle, value_km=odometer_km, date=today,
            source=OdometerLog.Source.MAINTENANCE,
            note=f"Fin intervention : {service.intervention_type.name}", created_by=updated_by,
        )
        vehicle.current_odometer = odometer_km
        service.odometer_at_done = odometer_km
    else:
        service.odometer_at_done = vehicle.current_odometer
    itype = service.intervention_type
    if itype.interval_km:
        service.next_due_km = service.odometer_at_done + itype.interval_km
    if itype.interval_days:
        service.next_due_date = today + timedelta(days=itype.interval_days)
    service.updated_by = updated_by
    service.save()
    vehicle.status = Vehicle.Status.AVAILABLE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])
    return service


@transaction.atomic
def cancel_service(service, *, updated_by):
    if service.status == Service.Status.DONE:
        raise ApplicationError(_("Une intervention terminée ne peut pas être annulée."))
    was_in_progress = service.status == Service.Status.IN_PROGRESS
    service.status = Service.Status.CANCELLED
    service.updated_by = updated_by
    service.save(update_fields=["status", "updated_by", "updated_at"])
    if was_in_progress:
        vehicle = service.vehicle
        vehicle.status = Vehicle.Status.AVAILABLE
        vehicle.updated_by = updated_by
        vehicle.save(update_fields=["status", "updated_by", "updated_at"])
    return service


@transaction.atomic
def update_service(service, *, updated_by, **fields):
    if service.status == Service.Status.DONE:
        raise ApplicationError(_("Une intervention terminée ne peut pas être modifiée."))
    allowed = {"description", "planned_date", "intervention_type", "supplier",
               "driver", "currency", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(service, key, val)
    service.updated_by = updated_by
    service.save()
    return service


def delete_service(service, *, deleted_by):
    if service.status == Service.Status.IN_PROGRESS:
        raise ApplicationError(_("Annulez l'intervention avant de la supprimer."))
    service.soft_delete(user=deleted_by)


@transaction.atomic
def add_service_attachment(service, *, file, name="", description="", created_by):
    ct = ContentType.objects.get_for_model(Service)
    return Attachment.objects.create(
        content_type=ct, object_id=service.id,
        name=name or getattr(file, "name", "fichier"),
        file=file, size=getattr(file, "size", 0) or 0,
        mime_type=getattr(file, "content_type", "") or "",
        description=description, created_by=created_by,
    )


def delete_service_attachment(attachment, *, deleted_by):
    attachment.soft_delete(user=deleted_by)
```

Also update `delete_maintenance_type` guard (still present) — its `.orders` related_name no longer exists on Service; change to check `Service.objects.filter(intervention_type=...)`? No — `delete_maintenance_type` operates on `MaintenanceType`, which still has NO relation to Service. Its guard `mtype.orders.filter(...)` referenced the old FK that is being dropped in Step 6's migration. After the migration, `MaintenanceType.orders` no longer exists. Change the guard body to simply `mtype.soft_delete(user=deleted_by)` (drop the in-use check — Task 4 removes this function entirely anyway).

- [ ] **Step 5: Update package __init__ exports**

`selectors/__init__.py`: change the `from .maintenance_selectors import (...)` block to `from .operations_selectors import (list_maintenance_types, get_maintenance_type, list_services, get_service, list_vehicle_services, list_service_attachments)` and update `__all__` (replace the three maintenance-order names with the four service names + attachments).
`services/__init__.py`: change `from .maintenance_services import (...)` → `from .operations_services import (create_maintenance_type, update_maintenance_type, delete_maintenance_type, create_service, start_service, complete_service, cancel_service, update_service, delete_service, add_service_attachment, delete_service_attachment)` and update `__all__`.

- [ ] **Step 6: Write the data migration**

Create `apps/fleet/migrations/0007_maintenanceorder_to_service.py`. Sequence: rename table stays (Django renames model via `RenameModel`), add nullable `intervention_type`, add `supplier`/`driver`/`description`/`currency`, RunPython to map `maintenance_type`→`intervention_type` (create/find InterventionType by name+company, `category='SERVICE'`, copy intervals) and fold `provider` into `notes`, then make `intervention_type` non-null and drop `maintenance_type`/`provider`.

```python
from django.db import migrations, models
import django.db.models.deletion


def map_types(apps, schema_editor):
    Service = apps.get_model("fleet", "Service")
    InterventionType = apps.get_model("fleet", "InterventionType")
    for svc in Service.objects.all():
        mt = svc.maintenance_type
        it, _ = InterventionType.objects.get_or_create(
            name=mt.name, company_id=mt.company_id,
            defaults={"category": "SERVICE", "interval_km": mt.interval_km,
                      "interval_days": mt.interval_days, "is_active": True},
        )
        svc.intervention_type = it
        if svc.provider:
            svc.notes = (svc.notes + "\n" if svc.notes else "") + f"Prestataire : {svc.provider}"
        svc.save(update_fields=["intervention_type", "notes"])


def unmap(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("fleet", "0006_interventiontype_intervals")]
    operations = [
        migrations.RenameModel("MaintenanceOrder", "Service"),
        migrations.AddField("service", "description",
                            models.CharField(default="", blank=True, max_length=500)),
        migrations.AddField("service", "currency",
                            models.CharField(default="XAF", max_length=3)),
        migrations.AddField("service", "intervention_type",
                            models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT,
                                              related_name="services", to="fleet.interventiontype")),
        migrations.AddField("service", "supplier",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="services", to="fleet.supplier")),
        migrations.AddField("service", "driver",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="services", to="fleet.externaldriver")),
        migrations.RunPython(map_types, unmap),
        migrations.AlterField("service", "intervention_type",
                              models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                                                related_name="services", to="fleet.interventiontype")),
        migrations.RemoveField("service", "maintenance_type"),
        migrations.RemoveField("service", "provider"),
    ]
```

> If `makemigrations` also wants to alter `cost` (12,2 → 18,2), let it — run `makemigrations fleet -n service_cost_precision` after this and fold into 0007 or accept as a follow-up op. Verify with `--check`.

- [ ] **Step 7: Update serializers**

In `serializers.py`, replace `MaintenanceOrderSerializer`/`MaintenanceOrderWriteSerializer` with `ServiceSerializer`/`ServiceWriteSerializer`. Read serializer fields: `id, vehicle, vehicle_plate (source="vehicle.license_plate"), intervention_type, intervention_type_name (source="intervention_type.name"), supplier, supplier_name (source="supplier.name", allow_null), driver, driver_name (source="driver.full_name", allow_null), status, status_display (source="get_status_display"), description, planned_date, start_date, done_date, odometer_at_start, odometer_at_done, cost, currency, notes, next_due_km, next_due_date, created_at, updated_at`. Add a `ServiceAttachmentSerializer` (fields `id, name, file, mime_type, size, description, created_at`). Write serializer: `vehicle_id, intervention_type_id, supplier_id (allow_null), driver_id (allow_null), planned_date, description, currency, notes` + action serializers for complete (`done_date, cost, odometer_km, notes`). Mirror the existing `AssignmentSerializer`/`FuelLogSerializer` shape.

- [ ] **Step 8: Update views**

In `views.py`, rename `MaintenanceOrder*View` classes → `Service*View`. Repoint imports to `list_services/get_service/create_service/...`. Add `ServiceStartView`, `ServiceCompleteView`, `ServiceCancelView` (mirror existing maintenance start/complete/cancel views), `ServiceAttachmentListView` (GET list via `list_service_attachments`, POST upload via `request.FILES["file"]` → `add_service_attachment`), `ServiceAttachmentDetailView` (DELETE via `delete_service_attachment`). Validate `intervention_type_id`, `supplier_id`, `driver_id` belong to the company scope.

- [ ] **Step 9: Update urls**

In `urls.py`, replace the `maintenance-orders/...` paths with:
```python
    path("services/", ServiceListView.as_view()),
    path("services/<uuid:service_id>/", ServiceDetailView.as_view()),
    path("services/<uuid:service_id>/start/", ServiceStartView.as_view()),
    path("services/<uuid:service_id>/complete/", ServiceCompleteView.as_view()),
    path("services/<uuid:service_id>/cancel/", ServiceCancelView.as_view()),
    path("services/<uuid:service_id>/attachments/", ServiceAttachmentListView.as_view()),
    path("services/<uuid:service_id>/attachments/<uuid:att_id>/", ServiceAttachmentDetailView.as_view()),
```
Keep `maintenance-types/...` paths (retired in Task 4).

- [ ] **Step 10: Update alerts/stats + admin**

In `selectors/vehicle_selectors.py`: change import `MaintenanceOrder` → `Service`; in `get_fleet_alerts`, `overdue_maintenance` → `Service.objects...select_related("vehicle", "intervention_type")`; in `get_vehicle_stats`/`get_fleet_stats`, repoint any `maintenance_orders` related-name to `services` and `MaintenanceOrder` refs to `Service`. In `get_fleet_alerts` the `vehicles_overdue_km` filter uses `maintenance_orders__next_due_km` → `services__next_due_km`.
In `admin.py`: unregister/rename `MaintenanceOrder` admin → `Service`.

- [ ] **Step 11: Verify**

Run:
```bash
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py migrate
../env/bin/python manage.py check
```
Expected: migration applies, no drift, check passes.
Shell smoke:
```bash
../env/bin/python manage.py shell -c "
from apps.fleet.models import Service
print(Service.objects.count(), [f.name for f in Service._meta.get_fields() if f.name in ('intervention_type','supplier','driver','currency','description')])"
```
Expected: prints count + the five field names.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "refactor(fleet): MaintenanceOrder -> Service with configurable InterventionType, supplier, driver, attachments"
```

---

## Task 3: Insurance → Contract + RecurringCost (backend, full stack)

**Files:**
- Rename: `apps/fleet/models/insurance.py` → `apps/fleet/models/contract.py`
- Create: `apps/fleet/models/recurring_cost.py`
- Modify: `models/__init__.py`, `serializers.py`, `views.py`, `urls.py`, `admin.py`
- Move insurance fns out of `services/vehicle_services.py` → `services/operations_services.py`; add contract + recurring-cost services
- Add contract + recurring-cost selectors to `selectors/operations_selectors.py`
- Modify `selectors/vehicle_selectors.py` alerts/stats (Insurance → Contract)
- Modify `selectors/__init__.py`, `services/__init__.py`
- Create: `apps/fleet/migrations/0008_insurance_to_contract.py`

**Interfaces:**
- Consumes: `InterventionType`, `Period`, `Supplier`, `ExternalDriver`, `User` (`settings.AUTH_USER_MODEL`).
- Produces: model `Contract` (`vehicle.contracts`), model `RecurringCost` (`contract.recurring_costs`); selectors `list_contracts(company_id, vehicle_id=None, status=None)`, `get_contract(contract_id, company_id)`, `list_vehicle_contracts(vehicle_id, company_id)`, `list_recurring_costs(contract)`; services `create_contract`, `update_contract`, `delete_contract`, `add_recurring_cost(contract, *, description, amount, currency, period, created_by)`, `update_recurring_cost`, `delete_recurring_cost`; endpoints `contracts/`, `contracts/<uuid:id>/`, `contracts/<uuid:id>/recurring-costs/`, `contracts/<uuid:id>/recurring-costs/<uuid:rc_id>/`.

- [ ] **Step 1: Rename & rewrite the model file**

`git mv apps/fleet/models/insurance.py apps/fleet/models/contract.py`, replace contents:

```python
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Contract(BaseModel):
    """Contrat récurrent lié à un véhicule (assurance, leasing, plan de maintenance…)."""

    class Status(models.TextChoices):
        DRAFT     = "draft",     _("Brouillon")
        ACTIVE    = "active",    _("Actif")
        EXPIRED   = "expired",   _("Expiré")
        CANCELLED = "cancelled", _("Annulé")

    name              = models.CharField(_("nom du contrat"), max_length=255)
    reference         = models.CharField(_("référence externe"), max_length=100, blank=True)
    vehicle           = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                          on_delete=models.CASCADE, related_name="contracts")
    intervention_type = models.ForeignKey("fleet.InterventionType", verbose_name=_("type"),
                                          on_delete=models.PROTECT, related_name="contracts")
    included_services = models.ManyToManyField("fleet.InterventionType", blank=True,
                                               verbose_name=_("services inclus"),
                                               related_name="included_in_contracts")
    supplier          = models.ForeignKey("fleet.Supplier", verbose_name=_("fournisseur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    responsible       = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("responsable"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="managed_contracts")
    driver            = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    policy_number     = models.CharField(_("numéro de police / référence"), max_length=100, blank=True)
    start_date        = models.DateField(_("date de début"))
    end_date          = models.DateField(_("date d'échéance"))
    creation_date     = models.DateField(_("date de signature"), null=True, blank=True)
    activation_cost   = models.DecimalField(_("coût d'activation"), max_digits=18, decimal_places=2, default=0)
    billing_period    = models.ForeignKey("fleet.Period", verbose_name=_("périodicité de facturation"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    deductible        = models.DecimalField(_("franchise"), max_digits=18, decimal_places=2,
                                            null=True, blank=True)
    currency          = models.CharField(_("devise"), max_length=3, default="XAF")
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices,
                                         default=Status.ACTIVE)
    terms             = models.TextField(_("conditions générales"), blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("contrat")
        verbose_name_plural = _("contrats")
        ordering = ["-start_date"]

    def __str__(self):
        return f"{self.name} — {self.vehicle.license_plate}"

    @property
    def is_expired(self):
        return self.end_date < timezone.now().date()

    @property
    def days_until_expiry(self):
        return (self.end_date - timezone.now().date()).days
```

- [ ] **Step 2: Create RecurringCost model**

Create `apps/fleet/models/recurring_cost.py`:

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class RecurringCost(BaseModel):
    """Ligne de coût récurrent d'un contrat."""
    contract    = models.ForeignKey("fleet.Contract", verbose_name=_("contrat"),
                                    on_delete=models.CASCADE, related_name="recurring_costs")
    description = models.CharField(_("description"), max_length=255)
    amount      = models.DecimalField(_("montant"), max_digits=18, decimal_places=2)
    currency    = models.CharField(_("devise"), max_length=3, default="XAF")
    period      = models.ForeignKey("fleet.Period", verbose_name=_("périodicité"),
                                    on_delete=models.PROTECT, related_name="recurring_costs")

    class Meta(BaseModel.Meta):
        verbose_name = _("coût récurrent")
        verbose_name_plural = _("coûts récurrents")
        ordering = ["contract", "description"]

    def __str__(self):
        return f"{self.description} — {self.amount} {self.currency}"
```

- [ ] **Step 3: Update models/__init__.py**

Replace `Insurance` import/`__all__` → `from .contract import Contract` + `from .recurring_cost import RecurringCost`; entries `"Contract"`, `"RecurringCost"`.

- [ ] **Step 4: Move & add selectors**

In `operations_selectors.py`, add (import `Contract, RecurringCost, Period`):

```python
def list_contracts(company_id, vehicle_id=None, status=None):
    qs = (Contract.objects
          .filter(vehicle__company_id=company_id, is_deleted=False)
          .select_related("vehicle", "intervention_type", "supplier", "billing_period", "responsible", "driver")
          .prefetch_related("included_services", "recurring_costs__period")
          .order_by("-start_date"))
    if vehicle_id:
        qs = qs.filter(vehicle_id=vehicle_id)
    if status:
        qs = qs.filter(status=status)
    return qs


def get_contract(contract_id, company_id):
    try:
        return (Contract.objects
                .select_related("vehicle", "intervention_type", "supplier",
                                "billing_period", "responsible", "driver")
                .prefetch_related("included_services", "recurring_costs__period")
                .get(id=contract_id, vehicle__company_id=company_id, is_deleted=False))
    except Contract.DoesNotExist:
        return None


def list_vehicle_contracts(vehicle_id, company_id):
    vehicle = get_vehicle(vehicle_id, company_id)
    if vehicle is None:
        return None
    return vehicle.contracts.filter(is_deleted=False).select_related("intervention_type", "supplier").order_by("-start_date")


def list_recurring_costs(contract):
    return contract.recurring_costs.filter(is_deleted=False).select_related("period").order_by("description")
```

- [ ] **Step 5: Move & add services**

Remove `create_insurance`/`update_insurance`/`delete_insurance` from `services/vehicle_services.py` (and its `Insurance` import). In `operations_services.py` add (import `Contract, RecurringCost`):

```python
@transaction.atomic
def create_contract(*, vehicle, intervention_type, name, start_date, end_date,
                    reference="", supplier=None, responsible=None, driver=None,
                    policy_number="", creation_date=None, activation_cost=0,
                    billing_period=None, deductible=None, currency="XAF",
                    status=Contract.Status.ACTIVE, terms="", notes="",
                    included_service_ids=None, created_by):
    contract = Contract.objects.create(
        vehicle=vehicle, intervention_type=intervention_type, name=name,
        start_date=start_date, end_date=end_date, reference=reference, supplier=supplier,
        responsible=responsible, driver=driver, policy_number=policy_number,
        creation_date=creation_date, activation_cost=activation_cost or 0,
        billing_period=billing_period, deductible=deductible, currency=currency,
        status=status, terms=terms, notes=notes, created_by=created_by,
    )
    if included_service_ids:
        contract.included_services.set(included_service_ids)
    return contract


@transaction.atomic
def update_contract(contract, *, updated_by, included_service_ids=None, **fields):
    allowed = {"name", "reference", "intervention_type", "supplier", "responsible",
               "driver", "policy_number", "start_date", "end_date", "creation_date",
               "activation_cost", "billing_period", "deductible", "currency", "status",
               "terms", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(contract, key, val)
    contract.updated_by = updated_by
    contract.save()
    if included_service_ids is not None:
        contract.included_services.set(included_service_ids)
    return contract


def delete_contract(contract, *, deleted_by):
    contract.soft_delete(user=deleted_by)


@transaction.atomic
def add_recurring_cost(contract, *, description, amount, period, currency="XAF", created_by):
    return RecurringCost.objects.create(
        contract=contract, description=description, amount=amount,
        currency=currency, period=period, created_by=created_by,
    )


@transaction.atomic
def update_recurring_cost(cost, *, updated_by, **fields):
    allowed = {"description", "amount", "currency", "period"}
    for key, val in fields.items():
        if key in allowed:
            setattr(cost, key, val)
    cost.updated_by = updated_by
    cost.save()
    return cost


def delete_recurring_cost(cost, *, deleted_by):
    cost.soft_delete(user=deleted_by)
```

- [ ] **Step 6: Update package __init__ exports**

`selectors/__init__.py`: add `list_contracts, get_contract, list_vehicle_contracts, list_recurring_costs` to the operations import + `__all__`.
`services/__init__.py`: remove `create_insurance/update_insurance/delete_insurance` from the vehicle_services import + `__all__`; add `create_contract, update_contract, delete_contract, add_recurring_cost, update_recurring_cost, delete_recurring_cost` to the operations import + `__all__`.

- [ ] **Step 7: Data migration**

Create `apps/fleet/migrations/0008_insurance_to_contract.py`. Rename `Insurance`→`Contract`; add all new fields nullable; RunPython to: create global `InterventionType` per `insurance_type` value (`category='CONTRACT'`), set `intervention_type`; set `name` = company_name + " " + policy_number; fold `company_name`/`insurer_contact` into `terms`; set `status` from end_date vs today; create one `RecurringCost` ("Prime", amount=premium_amount, annual Period — get_or_create a global Period named "Annuel"); then finalize field states and drop `company_name, insurance_type, insurer_contact, premium_amount`.

```python
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


def map_contracts(apps, schema_editor):
    Contract = apps.get_model("fleet", "Contract")
    InterventionType = apps.get_model("fleet", "InterventionType")
    Period = apps.get_model("fleet", "Period")
    RecurringCost = apps.get_model("fleet", "RecurringCost")
    label = {"comprehensive": "Assurance tous risques", "third_party": "Responsabilité civile",
             "all_risks": "Assurance multi-risques", "other": "Autre contrat"}
    annual, _ = Period.objects.get_or_create(name="Annuel", company_id=None,
                                             defaults={"is_active": True})
    today = __import__("datetime").date.today()
    for c in Contract.objects.all():
        it, _ = InterventionType.objects.get_or_create(
            name=label.get(c.insurance_type, "Autre contrat"), company_id=None,
            defaults={"category": "CONTRACT", "is_active": True})
        c.intervention_type = it
        c.name = f"{c.company_name} {c.policy_number}".strip() or it.name
        extra = []
        if c.company_name:
            extra.append(f"Compagnie : {c.company_name}")
        if c.insurer_contact:
            extra.append(f"Contact : {c.insurer_contact}")
        c.terms = ("\n".join(extra) + ("\n" + c.terms if c.terms else "")) if extra else c.terms
        c.status = "active" if c.end_date >= today else "expired"
        c.save(update_fields=["intervention_type", "name", "terms", "status"])
        if c.premium_amount:
            RecurringCost.objects.create(contract=c, description="Prime",
                                         amount=c.premium_amount, currency=c.currency or "XAF",
                                         period=annual)


def unmap(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("fleet", "0007_maintenanceorder_to_service"),
                    migrations.swappable_dependency(settings.AUTH_USER_MODEL)]
    operations = [
        migrations.RenameModel("Insurance", "Contract"),
        migrations.CreateModel(
            name="RecurringCost",
            fields=[
                # copy the standard BaseModel fields from an existing fleet CreateModel
                # (id UUIDField pk, created_at, updated_at, is_deleted, is_active,
                #  created_by, updated_by, company if present) — mirror models/recurring_cost.py
            ],
            options={"abstract": False},
        ),
        migrations.AddField("contract", "name", models.CharField(default="", max_length=255)),
        migrations.AddField("contract", "reference", models.CharField(blank=True, default="", max_length=100)),
        migrations.AddField("contract", "intervention_type",
                            models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT,
                                              related_name="contracts", to="fleet.interventiontype")),
        migrations.AddField("contract", "included_services",
                            models.ManyToManyField(blank=True, related_name="included_in_contracts",
                                                   to="fleet.interventiontype")),
        migrations.AddField("contract", "supplier",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="contracts", to="fleet.supplier")),
        migrations.AddField("contract", "responsible",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="managed_contracts", to=settings.AUTH_USER_MODEL)),
        migrations.AddField("contract", "driver",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="contracts", to="fleet.externaldriver")),
        migrations.AddField("contract", "creation_date", models.DateField(null=True, blank=True)),
        migrations.AddField("contract", "activation_cost",
                            models.DecimalField(default=0, max_digits=18, decimal_places=2)),
        migrations.AddField("contract", "billing_period",
                            models.ForeignKey(null=True, blank=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name="contracts", to="fleet.period")),
        migrations.AddField("contract", "terms", models.TextField(blank=True, default="")),
        migrations.AlterField("contract", "policy_number",
                              models.CharField(blank=True, max_length=100)),
        migrations.AlterField("contract", "deductible",
                              models.DecimalField(null=True, blank=True, max_digits=18, decimal_places=2)),
        migrations.AddField("contract", "status",
                            models.CharField(default="active", max_length=12)),
        migrations.RunPython(map_contracts, unmap),
        migrations.AlterField("contract", "intervention_type",
                              models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                                                related_name="contracts", to="fleet.interventiontype")),
        migrations.RemoveField("contract", "company_name"),
        migrations.RemoveField("contract", "insurance_type"),
        migrations.RemoveField("contract", "insurer_contact"),
        migrations.RemoveField("contract", "premium_amount"),
    ]
```

> **Preferred:** instead of hand-writing the `RecurringCost` `CreateModel` fields, run `makemigrations fleet` FIRST (with the models in place) to let Django generate the `CreateModel` + AddFields, then splice the `RunPython(map_contracts)` between the AddFields and the RemoveFields, and move `RenameModel` to the top. This guarantees the BaseModel field list matches. Verify final result with `makemigrations --check`.

- [ ] **Step 8: Serializers**

Replace `InsuranceSerializer`/`InsuranceWriteSerializer` with `ContractSerializer`/`ContractWriteSerializer` + `RecurringCostSerializer`/`RecurringCostWriteSerializer`. Contract read fields: `id, vehicle, vehicle_plate, name, reference, intervention_type, intervention_type_name, included_services (PrimaryKeyRelatedField many, read), included_services_detail (nested id+name), supplier, supplier_name, responsible, responsible_name (source="responsible.full_name", allow_null), driver, driver_name, policy_number, start_date, end_date, creation_date, activation_cost, billing_period, billing_period_name (source="billing_period.name", allow_null), deductible, currency, status, status_display, terms, notes, is_expired, days_until_expiry, recurring_costs (nested RecurringCostSerializer many), created_at, updated_at`. Write: `vehicle_id, intervention_type_id, name, reference, included_service_ids (ListField, required=False), supplier_id, responsible_id, driver_id, policy_number, start_date, end_date, creation_date, activation_cost, billing_period_id, deductible, currency, status, terms, notes`. RecurringCost read: `id, contract, description, amount, currency, period, period_name (source="period.name"), created_at`. Write: `description, amount, currency, period_id`.

- [ ] **Step 9: Views + urls**

`views.py`: replace `Insurance*View` → `Contract*View` (list/detail mirror `SupplierListView`/`SupplierDetailView`), add `RecurringCostListView` (GET `list_recurring_costs`, POST `add_recurring_cost`), `RecurringCostDetailView` (PATCH `update_recurring_cost`, DELETE `delete_recurring_cost`). Validate all FK ids (`intervention_type_id`, `supplier_id`, `billing_period_id`, `period_id`, `responsible_id` [company user], `driver_id`, `included_service_ids`) against company scope.
`urls.py`: replace `insurance/...` with:
```python
    path("contracts/", ContractListView.as_view()),
    path("contracts/<uuid:contract_id>/", ContractDetailView.as_view()),
    path("contracts/<uuid:contract_id>/recurring-costs/", RecurringCostListView.as_view()),
    path("contracts/<uuid:contract_id>/recurring-costs/<uuid:rc_id>/", RecurringCostDetailView.as_view()),
```

- [ ] **Step 10: Alerts/stats + admin**

`selectors/vehicle_selectors.py`: import `Contract` not `Insurance`; in `get_fleet_alerts`, `expiring_insurance` → `expiring_contracts = Contract.objects.filter(..., status="active", end_date__lte=horizon)`; keep the dict key or rename to `expiring_contracts` (update `get_fleet_stats`/serializer/frontend accordingly — rename key to `expiring_contracts`). In `get_vehicle_stats`, the `insurances`/`premium_amount` aggregate → `recurring_costs`? Simplify: aggregate `contracts` count + sum of `recurring_costs.amount` for active contracts; rename the returned key `insurance`→`contracts`. `admin.py`: `Insurance` admin → `Contract`; register `RecurringCost`.

- [ ] **Step 11: Verify**

```bash
../env/bin/python manage.py makemigrations --check --dry-run   # expect: after committing 0008, "No changes detected"
../env/bin/python manage.py migrate
../env/bin/python manage.py check
../env/bin/python manage.py shell -c "
from apps.fleet.models import Contract, RecurringCost
print('contracts', Contract.objects.count(), 'costs', RecurringCost.objects.count())"
```
Expected: migrate applies, check passes, counts print (RecurringCost count == number of old insurances with premium).

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "refactor(fleet): Insurance -> Contract with RecurringCost lines, configurable type & period"
```

---

## Task 4: Retire MaintenanceType

**Files:**
- Delete: `apps/fleet/models/maintenance_type.py`
- Modify: `models/__init__.py`, `operations_selectors.py`, `operations_services.py`, `selectors/__init__.py`, `services/__init__.py`, `serializers.py`, `views.py`, `urls.py`, `admin.py`
- Create: `apps/fleet/migrations/0009_delete_maintenancetype.py`

**Interfaces:**
- Removes: `MaintenanceType` model + `list_maintenance_types`, `get_maintenance_type`, `create_maintenance_type`, `update_maintenance_type`, `delete_maintenance_type`, `MaintenanceType*Serializer`, `MaintenanceType*View`, `maintenance-types/` endpoints.

- [ ] **Step 1: Remove code refs**

Delete the MaintenanceType functions from `operations_selectors.py` and `operations_services.py`; remove their names from `selectors/__init__.py` and `services/__init__.py` (import + `__all__`). Remove `MaintenanceType` serializers from `serializers.py`, views from `views.py`, `maintenance-types/...` paths from `urls.py`, admin from `admin.py`. Remove `MaintenanceType` from `models/__init__.py`. Delete `models/maintenance_type.py`.

- [ ] **Step 2: Migration**

Run: `../env/bin/python manage.py makemigrations fleet -n delete_maintenancetype`
Expected: `0009_delete_maintenancetype.py` with `DeleteModel("MaintenanceType")`. (The old FK from Service was already dropped in 0007, so no dependency remains.)

- [ ] **Step 3: Verify**

```bash
../env/bin/python manage.py migrate && ../env/bin/python manage.py check && ../env/bin/python manage.py makemigrations --check --dry-run
```
Expected: applies, check passes, no drift. Grep sanity: `grep -rn "MaintenanceType\|MaintenanceOrder\|create_insurance\|Insurance" apps/fleet --include=*.py | grep -v migrations | grep -v __pycache__` → no results.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor(fleet): retire MaintenanceType (superseded by configurable InterventionType)"
```

---

## Task 5: Frontend — Config « Types d'intervention » interval inputs

**Files:**
- Modify: `angular/src/_api/models/fleet-config.models.ts` (InterventionType interface)
- Modify: the Config Flotte intervention-types screen component (`.ts` form + `.html` inputs) under `pages/fleet-config/`

**Interfaces:**
- Produces: interval_km/interval_days sent on create/update of InterventionType.

- [ ] **Step 1: Model**

Add to the `InterventionType` config interface: `interval_km: number | null;` `interval_days: number | null;`

- [ ] **Step 2: Form + template**

In the intervention-types config component `.ts`, add form controls `interval_km: [null]`, `interval_days: [null]`; include them in the create/update payload; patch them in `openEdit`. In the `.html` modal, add two inputs (French labels « Intervalle (km) », « Intervalle (jours) », type=number) with a one-line info note: « Utilisés pour planifier automatiquement le prochain entretien préventif. »

- [ ] **Step 3: Verify + commit**

Run: `cd angular && npx ng build 2>&1 | tail -5` → expect success.
```bash
git add -A && git commit -m "feat(fleet-config): interval fields on Types d'intervention"
```

---

## Task 6: Frontend — Services screen (from maintenance-orders)

**Files:**
- Rename dir: `angular/src/_api/pages/fleet/maintenance-orders/` → `pages/fleet/services/` (rename component files + class `...MaintenanceOrders...` → `...Services...`, selector `app-fleet-services`)
- Rename: `services/fleet/maintenance-order.service.ts` → `services/fleet/service.service.ts` (class `FleetServiceService`, endpoint `FLEET.services`)
- Modify: `models/fleet.models.ts`, `api.config.ts`, routes, sidebar

**Interfaces:**
- Consumes: backend `services/` endpoints from Task 2; config InterventionType (SERVICE/BOTH), Supplier, ExternalDriver lists.

- [ ] **Step 1: api.config + model**

In `api.config.ts` FLEET: rename `maintenanceOrders`→`services` (`.../fleet/services/`), `maintenanceOrderItem`→`serviceItem`; add `serviceAttachments(id)`. In `fleet.models.ts` replace `MaintenanceOrder` interface with `Service` (fields matching `ServiceSerializer`: id, vehicle, vehicle_plate, intervention_type, intervention_type_name, supplier, supplier_name, driver, driver_name, status, status_display, description, planned_date, start_date, done_date, odometer_at_start, odometer_at_done, cost, currency, notes, next_due_km, next_due_date) + `ServiceAttachment` interface (id, name, file, mime_type, size, description, created_at).

- [ ] **Step 2: Service client**

`git mv` the service file; rename class + methods; add `listAttachments(id)`, `uploadAttachment(id, formData)`, `deleteAttachment(id, attId)`.

- [ ] **Step 3: Component**

`git mv` dir + files; rename class/selector/templateUrl. Form: vehicle, intervention_type (dropdown filtered to SERVICE/BOTH via config InterventionType service), supplier (dropdown), driver (dropdown), planned_date, description, currency (default XAF), notes. Table columns: véhicule, type, fournisseur, statut, date planifiée, coût, actions (edit `ti ti-edit`, delete, + start/complete/cancel buttons per status as the old screen did). Add an attachments section in the detail/edit modal: list existing (name + download link + delete) and a file input that POSTs to `uploadAttachment`. Info banner: « Enregistrez ici toutes les interventions (entretiens, réparations) et leurs pièces jointes (factures, photos). »

- [ ] **Step 4: Routes + sidebar**

Update Angular route path `fleet/maintenance-orders`→`fleet/services` and the lazy component import; update `routes.ts` constant and the sidebar label to « Services / Interventions ».

- [ ] **Step 5: Verify + commit**

`cd angular && npx ng build 2>&1 | tail -5` → success.
```bash
git add -A && git commit -m "feat(fleet): Services screen with attachments (was maintenance-orders)"
```

---

## Task 7: Frontend — Contracts screen (from insurance)

**Files:**
- Rename dir: `pages/fleet/insurance/` → `pages/fleet/contracts/` (class `...Insurance...`→`...Contracts...`, selector `app-fleet-contracts`)
- Rename: `services/fleet/insurance.service.ts` → `services/fleet/contract.service.ts`
- Modify: `models/fleet.models.ts`, `api.config.ts`, routes, sidebar

**Interfaces:**
- Consumes: backend `contracts/` + `recurring-costs/` endpoints from Task 3; config InterventionType (CONTRACT/BOTH), Period, Supplier, users.

- [ ] **Step 1: api.config + models**

`api.config.ts` FLEET: `insurance`→`contracts`, `insuranceItem`→`contractItem`; add `contractRecurringCosts(id)`, `contractRecurringCostItem(id, rcId)`. `fleet.models.ts`: replace `Insurance` with `Contract` (fields per `ContractSerializer`) + `RecurringCost` interface (id, contract, description, amount, currency, period, period_name).

- [ ] **Step 2: Service client**

`git mv`; rename class/methods; add `listRecurringCosts(id)`, `addRecurringCost(id, payload)`, `updateRecurringCost(id, rcId, payload)`, `deleteRecurringCost(id, rcId)`.

- [ ] **Step 3: Component**

`git mv` dir + files; rename. Form: vehicle, name, reference, intervention_type (dropdown CONTRACT/BOTH), included_services (multi-select of InterventionType), supplier, responsible (user dropdown via UserService), driver, policy_number, start_date, end_date, creation_date, billing_period (Period dropdown), activation_cost, deductible, currency, status (dropdown DRAFT/ACTIVE/EXPIRED/CANCELLED), terms, notes. Recurring-cost sub-editor inside the modal: table of lines (description, amount, currency, period) with add/edit/delete calling the recurring-costs endpoints (after the contract exists). Info banner: « Un contrat regroupe assurances, leasing ou plans de maintenance, avec leurs coûts récurrents. »

- [ ] **Step 4: Routes + sidebar**

Route `fleet/insurance`→`fleet/contracts`; label « Contrats ».

- [ ] **Step 5: Verify + commit**

`cd angular && npx ng build 2>&1 | tail -5` → success.
```bash
git add -A && git commit -m "feat(fleet): Contracts screen with recurring costs (was insurance)"
```

---

## Task 8: Frontend — remove maintenance-types screen + cleanup

**Files:**
- Delete: `pages/fleet/maintenance-types/`, `services/fleet/maintenance-type.service.ts`
- Modify: `api.config.ts` (drop maintenanceTypes entries), `models/fleet.models.ts` (drop `MaintenanceType` interface), routes, sidebar

**Interfaces:** none produced.

- [ ] **Step 1: Delete + de-reference**

`git rm -r` the screen dir + service file. Remove the `MaintenanceType` interface, the `maintenanceTypes`/`maintenanceTypeItem` api.config entries, the route, and the sidebar entry « Types de maintenance ».

- [ ] **Step 2: Grep sanity**

Run: `cd angular && grep -rn "maintenance-type\|MaintenanceType\|maintenanceType\|maintenance-orders\|/insurance" src/_api src/app | grep -v node_modules`
Expected: no results.

- [ ] **Step 3: Verify + commit**

`cd angular && npx ng build 2>&1 | tail -5` → success.
```bash
git add -A && git commit -m "chore(fleet): remove maintenance-types screen (covered by config)"
```

---

## Self-Review Notes

- **Spec coverage:** Component 1 → Task 1 & 5; Component 2 (Service) → Task 2 & 6; Component 3 (Contract) → Task 3 & 7; Component 4 (RecurringCost) → Task 3 & 7; Component 5 (API) → Tasks 2–4; Component 6 (Frontend) → Tasks 5–8; MaintenanceType retirement → Task 4 & 8. All covered.
- **Import safety:** each backend task renames the model together with all importers in one commit; MaintenanceType kept alive through Task 3, retired in Task 4.
- **Type consistency:** `intervention_type`/`supplier`/`driver`/`currency`/`next_due_*` names are consistent across model, selectors, services, serializers, and frontend interfaces. `expiring_insurance` alert key is renamed to `expiring_contracts` in both backend (Task 3 Step 10) and any frontend alert consumer (verify in Task 6/7 build; if the dashboard reads it, update there).
- **Migrations:** hand-written renames use add-nullable → RunPython → finalize → drop; `makemigrations --check` gates each. RecurringCost `CreateModel` is best generated by Django then spliced (noted in Task 3 Step 7).
