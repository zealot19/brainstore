from rest_framework import serializers
from apps.fleet.models import (
    VehicleCategoryCfg, FuelType, Transmission, TractionType,
    UnitCategory, Unit, Period, DocumentType, Tag, InterventionType, ActivitySector,
)


class _ScopeMixin(serializers.ModelSerializer):
    scope = serializers.SerializerMethodField()

    def get_scope(self, obj):
        return "global" if obj.company_id is None else "company"


def _name_read(model_cls):
    class R(_ScopeMixin):
        class Meta:
            model = model_cls
            fields = ["id", "name", "company", "scope", "is_active", "created_at", "updated_at"]
    return R


VehicleCategoryReadSerializer = _name_read(VehicleCategoryCfg)
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
                  "interval_km", "interval_days",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class InterventionTypeWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    category = serializers.ChoiceField(choices=InterventionType.Category.choices,
                                       required=False, default=InterventionType.Category.BOTH)
    interval_km = serializers.DecimalField(max_digits=10, decimal_places=1,
                                           required=False, allow_null=True)
    interval_days = serializers.IntegerField(required=False, allow_null=True, min_value=0)
    is_active = serializers.BooleanField(required=False, default=True)


class ActivitySectorReadSerializer(_ScopeMixin):
    class Meta:
        model = ActivitySector
        fields = ["id", "code", "name", "company", "scope", "is_active", "created_at", "updated_at"]


class ActivitySectorWriteSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=255)
    is_active = serializers.BooleanField(required=False, default=True)
