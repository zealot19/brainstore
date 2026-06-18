from django.contrib import admin
from .models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle,
    OdometerLog, FuelLog, MaintenanceType, MaintenanceOrder,
    Insurance, VehicleDocument, Assignment, Accident,
)


@admin.register(VehicleBrand)
class VehicleBrandAdmin(admin.ModelAdmin):
    list_display = ["name", "country_of_origin"]
    search_fields = ["name"]


@admin.register(VehicleModel)
class VehicleModelAdmin(admin.ModelAdmin):
    list_display = ["brand", "name", "vehicle_type", "fuel_type", "seats"]
    list_filter = ["vehicle_type", "fuel_type", "brand"]
    search_fields = ["name", "brand__name"]


@admin.register(ExternalDriver)
class ExternalDriverAdmin(admin.ModelAdmin):
    list_display = ["full_name", "company", "license_number", "license_category", "license_expiry"]
    list_filter = ["company", "license_category"]
    search_fields = ["first_name", "last_name", "license_number"]


@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ["license_plate", "model", "company", "status", "current_odometer", "is_active"]
    list_filter = ["company", "status", "is_active", "model__vehicle_type"]
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


@admin.register(MaintenanceType)
class MaintenanceTypeAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "interval_km", "interval_days", "company"]
    list_filter = ["category", "company"]


@admin.register(MaintenanceOrder)
class MaintenanceOrderAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "maintenance_type", "status", "planned_date", "cost"]
    list_filter = ["status"]
    raw_id_fields = ["vehicle", "maintenance_type"]


@admin.register(Insurance)
class InsuranceAdmin(admin.ModelAdmin):
    list_display = ["vehicle", "company_name", "policy_number", "insurance_type", "end_date"]
    list_filter = ["insurance_type"]
    raw_id_fields = ["vehicle"]


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
    raw_id_fields = ["vehicle", "internal_driver", "external_driver", "assignment"]
