from django.contrib import admin
from .models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle,
    OdometerLog, FuelLog, Service,
    Contract, RecurringCost, VehicleDocument, Assignment, Accident,
)


@admin.register(VehicleBrand)
class VehicleBrandAdmin(admin.ModelAdmin):
    list_display = ["name", "country_of_origin"]
    search_fields = ["name"]


@admin.register(VehicleModel)
class VehicleModelAdmin(admin.ModelAdmin):
    list_display = ["brand", "name", "fuel_type", "seats"]
    list_filter = ["fuel_type", "brand"]
    search_fields = ["name", "brand__name"]


@admin.register(ExternalDriver)
class ExternalDriverAdmin(admin.ModelAdmin):
    list_display = ["full_name", "company", "license_number", "license_category", "license_expiry"]
    list_filter = ["company", "license_category"]
    search_fields = ["first_name", "last_name", "license_number"]


@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ["license_plate", "model", "company", "status", "current_odometer", "is_active"]
    list_filter = ["company", "status", "is_active", "category"]
    search_fields = ["license_plate", "vin"]
    raw_id_fields = ["model", "agency", "internal_driver", "external_driver"]


@admin.register(OdometerLog)
class OdometerLogAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "value_km", "date", "source"]
    list_filter = ["source"]
    raw_id_fields = ["vehicle"]


@admin.register(FuelLog)
class FuelLogAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "date", "liters", "total_cost", "station"]
    list_filter = ["full_tank"]
    raw_id_fields = ["vehicle"]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "intervention_type", "status", "planned_date", "cost"]
    list_filter = ["status"]
    raw_id_fields = ["vehicle", "intervention_type", "supplier", "driver"]


@admin.register(Contract)
class ContractAdmin(admin.ModelAdmin):
    list_display = ["name", "vehicle", "intervention_type", "status", "end_date"]
    list_filter = ["status"]
    raw_id_fields = ["vehicle", "intervention_type", "supplier", "responsible", "driver"]


@admin.register(RecurringCost)
class RecurringCostAdmin(admin.ModelAdmin):
    list_display = ["contract", "description", "amount", "currency", "period"]
    raw_id_fields = ["contract", "period"]


@admin.register(VehicleDocument)
class VehicleDocumentAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "doc_type", "name", "expiry_date"]
    list_filter = ["doc_type"]
    raw_id_fields = ["vehicle"]


@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "destination", "status", "planned_departure", "driver_name"]
    list_filter = ["status", "company"]
    raw_id_fields = ["vehicle", "internal_driver", "external_driver"]


@admin.register(Accident)
class AccidentAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "date", "severity", "at_fault", "status"]
    list_filter = ["severity", "status", "at_fault"]
    raw_id_fields = ["vehicle", "trip"]
