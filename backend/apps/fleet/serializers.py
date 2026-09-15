from rest_framework import serializers
from apps.core.models import Attachment
from apps.fleet.models import (
    VehicleBrand, VehicleModel, ExternalDriver, Vehicle,
    OdometerLog, FuelLog, Service,
    Contract, RecurringCost, VehicleDocument, Assignment, Accident, Parking, Supplier,
)


# ══════════════════════════════════════════════════════════════════════════════
# SUPPLIERS
# ══════════════════════════════════════════════════════════════════════════════

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ["id", "name", "code", "tax_id", "address", "city", "country",
                  "phone", "email", "website", "contact_person", "notes",
                  "is_active", "created_at", "updated_at"]


class SupplierWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    code = serializers.CharField(max_length=20, required=False, allow_blank=True, default="")
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


# ══════════════════════════════════════════════════════════════════════════════
# PARKINGS
# ══════════════════════════════════════════════════════════════════════════════

class ParkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parking
        fields = ["id", "name", "location", "notes", "created_at", "updated_at"]


class ParkingWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    location = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")


def _vehicle_tags(obj):
    return [{"id": str(t.id), "name": t.name, "color": t.color} for t in obj.tags.all()]


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
    fuel_type_name = serializers.CharField(source="fuel_type.name", read_only=True, default=None)
    transmission_name = serializers.CharField(source="transmission.name", read_only=True, default=None)
    traction_type_name = serializers.CharField(source="traction_type.name", read_only=True, default=None)

    class Meta:
        model = VehicleModel
        fields = [
            "id", "brand", "brand_name", "name",
            "fuel_type", "fuel_type_name",
            "transmission", "transmission_name",
            "traction_type", "traction_type_name",
            "seats", "doors", "horsepower", "payload_kg",
            "created_at", "updated_at",
        ]


class VehicleModelWriteSerializer(serializers.Serializer):
    brand_id = serializers.UUIDField()
    name = serializers.CharField(max_length=100)
    fuel_type_id = serializers.UUIDField(required=False, allow_null=True)
    transmission_id = serializers.UUIDField(required=False, allow_null=True)
    traction_type_id = serializers.UUIDField(required=False, allow_null=True)
    seats = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    doors = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    horsepower = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    payload_kg = serializers.IntegerField(min_value=0, required=False, allow_null=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# EXTERNAL DRIVERS
# ══════════════════════════════════════════════════════════════════════════════

class ExternalDriverSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    employee_name = serializers.CharField(source="employee.full_name", read_only=True, default=None)
    employee_number = serializers.CharField(source="employee.employee_number", read_only=True, default=None)
    license_category_display = serializers.CharField(source="get_license_category_display", read_only=True)

    class Meta:
        model = ExternalDriver
        fields = [
            "id", "full_name", "employee", "employee_name", "employee_number",
            "license_number", "license_category", "license_category_display", "license_expiry",
            "notes", "created_at", "updated_at",
        ]

    def get_full_name(self, obj):
        return obj.full_name


class ExternalDriverWriteSerializer(serializers.Serializer):
    employee_id = serializers.UUIDField()
    license_number = serializers.CharField(max_length=100)
    license_category = serializers.ChoiceField(choices=ExternalDriver.LicenseCategory.choices, default="B")
    license_expiry = serializers.DateField(required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLES
# ══════════════════════════════════════════════════════════════════════════════

class VehicleListSerializer(serializers.ModelSerializer):
    model_name = serializers.SerializerMethodField()
    brand_name = serializers.CharField(source="model.brand.name", read_only=True)
    seats = serializers.IntegerField(source="model.seats", read_only=True, default=None)
    current_driver = serializers.SerializerMethodField()
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)
    category_name = serializers.CharField(source="category.name", read_only=True, default=None)
    parking_name = serializers.CharField(source="parking.name", read_only=True, default=None)
    tags = serializers.SerializerMethodField()
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Vehicle
        fields = [
            "id", "license_plate", "vin", "color", "year",
            "model_name", "brand_name", "seats",
            "category_name", "parking_name", "tags",
            "status", "status_display",
            "current_odometer", "is_active",
            "current_driver", "agency_name",
        ]

    def get_model_name(self, obj):
        return str(obj.model)

    def get_current_driver(self, obj):
        return obj.current_driver_name

    def get_tags(self, obj):
        return _vehicle_tags(obj)


class VehicleDetailSerializer(serializers.ModelSerializer):
    model_detail = VehicleModelSerializer(source="model", read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)
    internal_driver_name = serializers.SerializerMethodField()
    external_driver_detail = ExternalDriverSerializer(source="external_driver", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True, default=None)
    parking_name = serializers.CharField(source="parking.name", read_only=True, default=None)
    tags = serializers.SerializerMethodField()
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Vehicle
        fields = [
            "id", "license_plate", "vin", "color", "year",
            "model_detail", "agency_name",
            "category", "category_name", "parking", "parking_name", "tags",
            "registration_date", "fiscal_horsepower", "catalog_value",
            "purchase_value", "residual_value",
            "acquisition_date", "acquisition_cost",
            "status", "status_display",
            "current_odometer", "tank_capacity_liters", "is_active",
            "internal_driver_name", "external_driver_detail",
            "notes", "created_at", "updated_at",
        ]

    def get_tags(self, obj):
        return _vehicle_tags(obj)

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
    category_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    parking_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    tag_ids = serializers.ListField(child=serializers.UUIDField(), required=False)
    registration_date = serializers.DateField(required=False, allow_null=True, default=None)
    fiscal_horsepower = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True, default=None)
    catalog_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True, default=None)
    purchase_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True, default=None)
    residual_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True, default=None)


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
    category_id = serializers.UUIDField(required=False, allow_null=True)
    parking_id = serializers.UUIDField(required=False, allow_null=True)
    tag_ids = serializers.ListField(child=serializers.UUIDField(), required=False)
    registration_date = serializers.DateField(required=False, allow_null=True)
    fiscal_horsepower = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True)
    catalog_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)
    purchase_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)
    residual_value = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True)


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
# SERVICES / INTERVENTIONS
# ══════════════════════════════════════════════════════════════════════════════

class ServiceSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    intervention_type_name = serializers.CharField(source="intervention_type.name", read_only=True)
    supplier_name = serializers.CharField(source="supplier.name", read_only=True, allow_null=True)
    driver_name = serializers.CharField(source="driver.full_name", read_only=True, allow_null=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Service
        fields = [
            "id", "vehicle", "vehicle_plate",
            "intervention_type", "intervention_type_name",
            "supplier", "supplier_name", "driver", "driver_name",
            "status", "status_display", "description",
            "planned_date", "start_date", "done_date",
            "odometer_at_start", "odometer_at_done",
            "cost", "currency", "notes",
            "next_due_km", "next_due_date",
            "created_at", "updated_at",
        ]


class ServiceAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = ["id", "name", "file", "mime_type", "size", "description", "created_at"]


class ServiceCreateSerializer(serializers.Serializer):
    vehicle_id = serializers.UUIDField()
    intervention_type_id = serializers.UUIDField()
    planned_date = serializers.DateField()
    description = serializers.CharField(max_length=500, required=False, allow_blank=True, default="")
    supplier_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    currency = serializers.CharField(max_length=3, required=False, default="XAF")
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class ServiceUpdateSerializer(serializers.Serializer):
    planned_date = serializers.DateField(required=False)
    intervention_type_id = serializers.UUIDField(required=False)
    description = serializers.CharField(max_length=500, required=False, allow_blank=True)
    supplier_id = serializers.UUIDField(required=False, allow_null=True)
    driver_id = serializers.UUIDField(required=False, allow_null=True)
    currency = serializers.CharField(max_length=3, required=False)
    notes = serializers.CharField(required=False, allow_blank=True)


class ServiceCompleteSerializer(serializers.Serializer):
    done_date = serializers.DateField(required=False, allow_null=True, default=None)
    cost = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True, default=None)
    odometer_km = serializers.DecimalField(max_digits=10, decimal_places=1, required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# INSURANCE
# ══════════════════════════════════════════════════════════════════════════════

class RecurringCostSerializer(serializers.ModelSerializer):
    period_name = serializers.CharField(source="period.name", read_only=True)

    class Meta:
        model = RecurringCost
        fields = ["id", "contract", "description", "amount", "currency",
                  "period", "period_name", "created_at", "updated_at"]


class RecurringCostWriteSerializer(serializers.Serializer):
    description = serializers.CharField(max_length=255)
    amount = serializers.DecimalField(max_digits=18, decimal_places=2)
    currency = serializers.CharField(max_length=3, required=False, default="XAF")
    period_id = serializers.UUIDField()


class ContractSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True)
    intervention_type_name = serializers.CharField(source="intervention_type.name", read_only=True)
    supplier_name = serializers.CharField(source="supplier.name", read_only=True, allow_null=True)
    responsible_name = serializers.CharField(source="responsible.full_name", read_only=True, allow_null=True)
    driver_name = serializers.CharField(source="driver.full_name", read_only=True, allow_null=True)
    billing_period_name = serializers.CharField(source="billing_period.name", read_only=True, allow_null=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    included_services_detail = serializers.SerializerMethodField()
    recurring_costs = RecurringCostSerializer(many=True, read_only=True)
    is_expired = serializers.BooleanField(read_only=True)
    days_until_expiry = serializers.IntegerField(read_only=True)

    class Meta:
        model = Contract
        fields = [
            "id", "vehicle", "vehicle_plate", "name", "reference",
            "intervention_type", "intervention_type_name",
            "included_services", "included_services_detail",
            "supplier", "supplier_name", "responsible", "responsible_name",
            "driver", "driver_name", "policy_number",
            "start_date", "end_date", "creation_date",
            "activation_cost", "billing_period", "billing_period_name",
            "deductible", "currency", "status", "status_display",
            "terms", "notes", "is_expired", "days_until_expiry",
            "recurring_costs", "created_at", "updated_at",
        ]

    def get_included_services_detail(self, obj):
        return [{"id": str(s.id), "name": s.name} for s in obj.included_services.all()]


class ContractWriteSerializer(serializers.Serializer):
    vehicle_id = serializers.UUIDField()
    intervention_type_id = serializers.UUIDField()
    name = serializers.CharField(max_length=255)
    reference = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    included_service_ids = serializers.ListField(child=serializers.UUIDField(), required=False, default=list)
    supplier_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    responsible_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    driver_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    policy_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    creation_date = serializers.DateField(required=False, allow_null=True, default=None)
    activation_cost = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, default=0)
    billing_period_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    deductible = serializers.DecimalField(max_digits=18, decimal_places=2, required=False, allow_null=True, default=None)
    currency = serializers.CharField(max_length=3, required=False, default="XAF")
    status = serializers.ChoiceField(choices=Contract.Status.choices, required=False, default=Contract.Status.ACTIVE)
    terms = serializers.CharField(required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")

    def validate(self, data):
        if data.get("end_date") and data.get("start_date") and data["end_date"] <= data["start_date"]:
            raise serializers.ValidationError({"end_date": "La date d'échéance doit être postérieure à la date de début."})
        return data


class ContractUpdateSerializer(ContractWriteSerializer):
    vehicle_id = serializers.UUIDField(required=False)
    intervention_type_id = serializers.UUIDField(required=False)
    name = serializers.CharField(max_length=255, required=False)
    start_date = serializers.DateField(required=False)
    end_date = serializers.DateField(required=False)
    included_service_ids = serializers.ListField(child=serializers.UUIDField(), required=False)


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
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True, default=None)
    trip_label = serializers.CharField(read_only=True)
    severity_display = serializers.CharField(source="get_severity_display", read_only=True)

    class Meta:
        model = Accident
        fields = [
            "id", "vehicle", "vehicle_plate", "trip", "trip_label",
            "date", "location", "severity", "severity_display",
            "at_fault", "estimated_damage_cost", "created_at",
        ]


class AccidentDetailSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True, default=None)
    trip_label = serializers.CharField(read_only=True)
    severity_display = serializers.CharField(source="get_severity_display", read_only=True)

    class Meta:
        model = Accident
        fields = [
            "id", "vehicle", "vehicle_plate", "trip", "trip_label",
            "date", "location", "description",
            "severity", "severity_display",
            "at_fault", "third_party_involved", "third_party_info",
            "police_report_number", "insurance_claim_number",
            "estimated_damage_cost", "actual_repair_cost",
            "notes", "created_at", "updated_at",
        ]


class AccidentCreateSerializer(serializers.Serializer):
    trip_id = serializers.UUIDField()
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
    actual_repair_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True, default=None)
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class AccidentUpdateSerializer(serializers.Serializer):
    trip_id = serializers.UUIDField(required=False)
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
    actual_repair_cost = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True)


# ══════════════════════════════════════════════════════════════════════════════
# ODOMETER LOG
# ══════════════════════════════════════════════════════════════════════════════

class OdometerLogSerializer(serializers.ModelSerializer):
    source_display = serializers.CharField(source="get_source_display", read_only=True)

    class Meta:
        model = OdometerLog
        fields = ["id", "value_km", "date", "source", "source_display", "note", "created_at"]
