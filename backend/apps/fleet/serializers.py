from rest_framework import serializers
from apps.fleet.models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle,
    OdometerLog, FuelLog, MaintenanceType, MaintenanceOrder,
    Insurance, VehicleDocument, Assignment, Accident,
)


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE BRANDS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleBrand
        fields = ["id", "name", "country_of_origin", "created_at", "updated_at"]


class VehicleBrandWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    country_of_origin = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE MODELS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleModelSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source="brand.name", read_only=True)

    class Meta:
        model = VehicleModel
        fields = [
            "id", "brand", "brand_name", "name", "vehicle_type",
            "fuel_type", "seats", "doors", "horsepower", "payload_kg",
            "created_at", "updated_at",
        ]


class VehicleModelWriteSerializer(serializers.Serializer):
    brand_id = serializers.UUIDField()
    name = serializers.CharField(max_length=100)
    vehicle_type = serializers.ChoiceField(choices=VehicleModel.VehicleType.choices)
    fuel_type = serializers.ChoiceField(choices=VehicleModel.FuelType.choices)
    seats = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    doors = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    horsepower = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    payload_kg = serializers.IntegerField(min_value=0, required=False, allow_null=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# EXTERNAL DRIVERS
# ══════════════════════════════════════════════════════════════════════════════

class ExternalDriverSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = ExternalDriver
        fields = [
            "id", "full_name", "first_name", "last_name", "phone", "email",
            "license_number", "license_category", "license_expiry",
            "notes", "created_at", "updated_at",
        ]

    def get_full_name(self, obj):
        return obj.full_name


class ExternalDriverWriteSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    license_number = serializers.CharField(max_length=100)
    license_category = serializers.ChoiceField(choices=ExternalDriver.LicenseCategory.choices, default="B")
    license_expiry = serializers.DateField(required=False, allow_null=True, default=None)
    phone = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLES
# ══════════════════════════════════════════════════════════════════════════════

class VehicleListSerializer(serializers.ModelSerializer):
    model_name = serializers.SerializerMethodField()
    brand_name = serializers.CharField(source="model.brand.name", read_only=True)
    vehicle_type = serializers.CharField(source="model.vehicle_type", read_only=True)
    current_driver = serializers.SerializerMethodField()
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Vehicle
        fields = [
            "id", "license_plate", "vin", "color", "year",
            "model_name", "brand_name", "vehicle_type",
            "status", "status_display",
            "current_odometer", "is_active",
            "current_driver", "agency_name",
        ]

    def get_model_name(self, obj):
        return str(obj.model)

    def get_current_driver(self, obj):
        return obj.current_driver_name


class VehicleDetailSerializer(serializers.ModelSerializer):
    model_detail = VehicleModelSerializer(source="model", read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)
    internal_driver_name = serializers.SerializerMethodField()
    external_driver_detail = ExternalDriverSerializer(source="external_driver", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Vehicle
        fields = [
            "id", "license_plate", "vin", "color", "year",
            "model_detail", "agency_name",
            "acquisition_date", "acquisition_cost",
            "status", "status_display",
            "current_odometer", "tank_capacity_liters", "is_active",
            "internal_driver_name", "external_driver_detail",
            "notes", "created_at", "updated_at",
        ]

    def get_internal_driver_name(self, obj):
        if obj.internal_driver_id:
            u = obj.internal_driver
            return {"id": str(u.id), "name": f"{u.first_name} {u.last_name}".strip() or u.username}
        return None


class VehicleCreateSerializer(serializers.Serializer):
    model_id = serializers.UUIDField()
    license_plate = serializers.CharField(max_length=30)
    vin = serializers.CharField(max_length=50, required=False, allow_blank=True, default="")
    color = serializers.CharField(max_length=50, required=False, allow_blank=True, default="")
    year = serializers.IntegerField(min_value=1900, max_value=2100, required=False, allow_null=True, default=None)
    acquisition_date = serializers.DateField(required=False, allow_null=True, default=None)
    acquisition_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True, default=None)
    agency_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    tank_capacity_liters = serializers.DecimalField(max_digits=6, decimal_places=1, required=False, allow_null=True, default=None)
    initial_odometer = serializers.DecimalField(max_digits=10, decimal_places=1, required=False, default=0)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class VehicleUpdateSerializer(serializers.Serializer):
    model_id = serializers.UUIDField(required=False)
    license_plate = serializers.CharField(max_length=30, required=False)
    vin = serializers.CharField(max_length=50, required=False, allow_blank=True)
    color = serializers.CharField(max_length=50, required=False, allow_blank=True)
    year = serializers.IntegerField(min_value=1900, max_value=2100, required=False, allow_null=True)
    acquisition_date = serializers.DateField(required=False, allow_null=True)
    acquisition_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True)
    agency_id = serializers.UUIDField(required=False, allow_null=True)
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True)
    tank_capacity_liters = serializers.DecimalField(max_digits=6, decimal_places=1, required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True)
    is_active = serializers.BooleanField(required=False)


class OdometerUpdateSerializer(serializers.Serializer):
    value_km = serializers.DecimalField(max_digits=10, decimal_places=1)
    date = serializers.DateField(required=False, allow_null=True, default=None)
    note = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# FUEL LOGS
# ══════════════════════════════════════════════════════════════════════════════

class FuelLogSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)

    class Meta:
        model = FuelLog
        fields = [
            "id", "vehicle", "vehicle_plate", "date", "odometer_km",
            "liters", "cost_per_liter", "total_cost",
            "fuel_type", "station", "full_tank", "notes",
            "created_at", "updated_at",
        ]


class FuelLogWriteSerializer(serializers.Serializer):
    date = serializers.DateField()
    odometer_km = serializers.DecimalField(max_digits=10, decimal_places=1)
    liters = serializers.DecimalField(max_digits=8, decimal_places=2)
    cost_per_liter = serializers.DecimalField(max_digits=8, decimal_places=3)
    total_cost = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    fuel_type = serializers.CharField(max_length=20, required=False, allow_blank=True, default="")
    station = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    full_tank = serializers.BooleanField(required=False, default=True)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# MAINTENANCE TYPES
# ══════════════════════════════════════════════════════════════════════════════

class MaintenanceTypeSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source="get_category_display", read_only=True)

    class Meta:
        model = MaintenanceType
        fields = [
            "id", "name", "category", "category_display",
            "interval_km", "interval_days", "description",
            "created_at", "updated_at",
        ]


class MaintenanceTypeWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    category = serializers.ChoiceField(choices=MaintenanceType.Category.choices)
    interval_km = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    interval_days = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    description = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# MAINTENANCE ORDERS
# ══════════════════════════════════════════════════════════════════════════════

class MaintenanceOrderSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    maintenance_type_name = serializers.CharField(source="maintenance_type.name", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = MaintenanceOrder
        fields = [
            "id", "vehicle", "vehicle_plate",
            "maintenance_type", "maintenance_type_name",
            "status", "status_display",
            "planned_date", "start_date", "done_date",
            "odometer_at_start", "odometer_at_done",
            "cost", "provider", "notes",
            "next_due_km", "next_due_date",
            "created_at", "updated_at",
        ]


class MaintenanceOrderCreateSerializer(serializers.Serializer):
    vehicle_id = serializers.UUIDField()
    maintenance_type_id = serializers.UUIDField()
    planned_date = serializers.DateField()
    provider = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class MaintenanceOrderUpdateSerializer(serializers.Serializer):
    planned_date = serializers.DateField(required=False)
    provider = serializers.CharField(max_length=200, required=False, allow_blank=True)
    notes = serializers.CharField(required=False, allow_blank=True)


class MaintenanceCompleteSerializer(serializers.Serializer):
    done_date = serializers.DateField(required=False, allow_null=True, default=None)
    cost = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    odometer_km = serializers.DecimalField(max_digits=10, decimal_places=1, required=False, allow_null=True, default=None)
    provider = serializers.CharField(max_length=200, required=False, allow_blank=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# INSURANCE
# ══════════════════════════════════════════════════════════════════════════════

class InsuranceSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    insurance_type_display = serializers.CharField(source="get_insurance_type_display", read_only=True)
    is_active = serializers.BooleanField(read_only=True)
    days_until_expiry = serializers.IntegerField(read_only=True)

    class Meta:
        model = Insurance
        fields = [
            "id", "vehicle", "vehicle_plate",
            "company_name", "policy_number", "insurance_type", "insurance_type_display",
            "start_date", "end_date", "premium_amount", "deductible",
            "insurer_contact", "notes", "is_active", "days_until_expiry",
            "created_at", "updated_at",
        ]


class InsuranceWriteSerializer(serializers.Serializer):
    company_name = serializers.CharField(max_length=200)
    policy_number = serializers.CharField(max_length=100)
    insurance_type = serializers.ChoiceField(choices=Insurance.InsuranceType.choices)
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    premium_amount = serializers.DecimalField(max_digits=12, decimal_places=2)
    deductible = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    insurer_contact = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")

    def validate(self, data):
        if data.get("end_date") and data.get("start_date") and data["end_date"] <= data["start_date"]:
            raise serializers.ValidationError({"end_date": "La date d'échéance doit être postérieure à la date de début."})
        return data


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE DOCUMENTS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleDocumentSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    doc_type_display = serializers.CharField(source="get_doc_type_display", read_only=True)
    days_until_expiry = serializers.IntegerField(read_only=True)

    class Meta:
        model = VehicleDocument
        fields = [
            "id", "vehicle", "vehicle_plate",
            "doc_type", "doc_type_display", "name", "number",
            "issue_date", "expiry_date", "days_until_expiry",
            "notes", "created_at", "updated_at",
        ]


class VehicleDocumentWriteSerializer(serializers.Serializer):
    doc_type = serializers.ChoiceField(choices=VehicleDocument.DocType.choices)
    name = serializers.CharField(max_length=200)
    number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    issue_date = serializers.DateField(required=False, allow_null=True, default=None)
    expiry_date = serializers.DateField(required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# ASSIGNMENTS
# ══════════════════════════════════════════════════════════════════════════════

class AssignmentListSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    driver_name = serializers.SerializerMethodField()
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    distance_km = serializers.DecimalField(max_digits=10, decimal_places=1, read_only=True)

    class Meta:
        model = Assignment
        fields = [
            "id", "vehicle", "vehicle_plate",
            "driver_name", "status", "status_display",
            "purpose", "destination",
            "planned_departure", "planned_return",
            "actual_departure", "actual_return",
            "distance_km", "created_at",
        ]

    def get_driver_name(self, obj):
        return obj.driver_name


class AssignmentDetailSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    internal_driver_info = serializers.SerializerMethodField()
    external_driver_info = ExternalDriverSerializer(source="external_driver", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    distance_km = serializers.DecimalField(max_digits=10, decimal_places=1, read_only=True)

    class Meta:
        model = Assignment
        fields = [
            "id", "vehicle", "vehicle_plate",
            "internal_driver_info", "external_driver_info",
            "status", "status_display",
            "purpose", "departure_location", "destination",
            "planned_departure", "planned_return",
            "actual_departure", "actual_return",
            "start_odometer", "end_odometer", "distance_km",
            "notes", "created_at", "updated_at",
        ]

    def get_internal_driver_info(self, obj):
        if obj.internal_driver_id:
            u = obj.internal_driver
            return {"id": str(u.id), "name": f"{u.first_name} {u.last_name}".strip() or u.username}
        return None


class AssignmentCreateSerializer(serializers.Serializer):
    vehicle_id = serializers.UUIDField()
    purpose = serializers.CharField(max_length=300)
    destination = serializers.CharField(max_length=300)
    planned_departure = serializers.DateTimeField()
    planned_return = serializers.DateTimeField(required=False, allow_null=True, default=None)
    departure_location = serializers.CharField(max_length=300, required=False, allow_blank=True, default="")
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default="")

    def validate(self, data):
        if not data.get("internal_driver_id") and not data.get("external_driver_id"):
            raise serializers.ValidationError("Un conducteur (interne ou externe) est requis.")
        return data


class AssignmentUpdateSerializer(serializers.Serializer):
    purpose = serializers.CharField(max_length=300, required=False)
    destination = serializers.CharField(max_length=300, required=False)
    departure_location = serializers.CharField(max_length=300, required=False, allow_blank=True)
    planned_departure = serializers.DateTimeField(required=False)
    planned_return = serializers.DateTimeField(required=False, allow_null=True)
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True)


class AssignmentStartSerializer(serializers.Serializer):
    actual_departure = serializers.DateTimeField(required=False, allow_null=True, default=None)
    start_odometer = serializers.DecimalField(max_digits=10, decimal_places=1, required=False, allow_null=True, default=None)


class AssignmentCompleteSerializer(serializers.Serializer):
    actual_return = serializers.DateTimeField(required=False, allow_null=True, default=None)
    end_odometer = serializers.DecimalField(max_digits=10, decimal_places=1, required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# ACCIDENTS
# ══════════════════════════════════════════════════════════════════════════════

class AccidentListSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    driver_name = serializers.SerializerMethodField()
    severity_display = serializers.CharField(source="get_severity_display", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Accident
        fields = [
            "id", "vehicle", "vehicle_plate", "driver_name",
            "date", "location", "severity", "severity_display",
            "at_fault", "status", "status_display",
            "estimated_damage_cost", "created_at",
        ]

    def get_driver_name(self, obj):
        return obj.driver_name


class AccidentDetailSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    internal_driver_info = serializers.SerializerMethodField()
    external_driver_info = ExternalDriverSerializer(source="external_driver", read_only=True)
    severity_display = serializers.CharField(source="get_severity_display", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Accident
        fields = [
            "id", "vehicle", "vehicle_plate",
            "internal_driver_info", "external_driver_info",
            "assignment",
            "date", "location", "description",
            "severity", "severity_display",
            "at_fault", "third_party_involved", "third_party_info",
            "police_report_number", "insurance_claim_number",
            "estimated_damage_cost", "actual_repair_cost",
            "status", "status_display",
            "notes", "created_at", "updated_at",
        ]

    def get_internal_driver_info(self, obj):
        if obj.internal_driver_id:
            u = obj.internal_driver
            return {"id": str(u.id), "name": f"{u.first_name} {u.last_name}".strip() or u.username}
        return None


class AccidentCreateSerializer(serializers.Serializer):
    vehicle_id = serializers.UUIDField()
    date = serializers.DateField()
    location = serializers.CharField(max_length=300)
    description = serializers.CharField()
    severity = serializers.ChoiceField(choices=Accident.Severity.choices, default=Accident.Severity.MINOR)
    at_fault = serializers.BooleanField(default=False)
    third_party_involved = serializers.BooleanField(default=False)
    third_party_info = serializers.CharField(required=False, allow_blank=True, default="")
    police_report_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    insurance_claim_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    estimated_damage_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True, default=None)
    assignment_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class AccidentUpdateSerializer(serializers.Serializer):
    date = serializers.DateField(required=False)
    location = serializers.CharField(max_length=300, required=False)
    description = serializers.CharField(required=False)
    severity = serializers.ChoiceField(choices=Accident.Severity.choices, required=False)
    at_fault = serializers.BooleanField(required=False)
    third_party_involved = serializers.BooleanField(required=False)
    third_party_info = serializers.CharField(required=False, allow_blank=True)
    police_report_number = serializers.CharField(max_length=100, required=False, allow_blank=True)
    insurance_claim_number = serializers.CharField(max_length=100, required=False, allow_blank=True)
    estimated_damage_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True)
    internal_driver_id = serializers.UUIDField(required=False, allow_null=True)
    external_driver_id = serializers.UUIDField(required=False, allow_null=True)
    assignment_id = serializers.UUIDField(required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True)


class AccidentCloseSerializer(serializers.Serializer):
    actual_repair_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default=None)


class AccidentStatusSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=Accident.Status.choices)


# ══════════════════════════════════════════════════════════════════════════════
# ODOMETER LOG
# ══════════════════════════════════════════════════════════════════════════════

class OdometerLogSerializer(serializers.ModelSerializer):
    source_display = serializers.CharField(source="get_source_display", read_only=True)

    class Meta:
        model = OdometerLog
        fields = ["id", "value_km", "date", "source", "source_display", "note", "created_at"]
