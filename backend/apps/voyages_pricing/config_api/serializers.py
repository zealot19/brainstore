from rest_framework import serializers
from apps.voyages_pricing.models import Fare


class FareRead(serializers.ModelSerializer):
    scope = serializers.SerializerMethodField()
    route_code = serializers.CharField(source="route.code", read_only=True, default=None)
    origin_point_name = serializers.CharField(source="origin_point.name", read_only=True, default=None)
    destination_point_name = serializers.CharField(source="destination_point.name", read_only=True, default=None)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True, default=None)
    trip_type_display = serializers.CharField(source="get_trip_type_display", read_only=True)

    class Meta:
        model = Fare
        fields = ["id", "route", "route_code", "origin_point", "origin_point_name",
                  "destination_point", "destination_point_name", "fare_class", "fare_class_name",
                  "trip_type", "trip_type_display", "amount", "currency", "valid_from", "valid_to",
                  "company", "scope", "is_active", "created_at", "updated_at"]

    def get_scope(self, obj):
        return "global" if obj.company_id is None else "company"


class FareWrite(serializers.Serializer):
    route_id = serializers.UUIDField()
    origin_point_id = serializers.UUIDField()
    destination_point_id = serializers.UUIDField()
    fare_class_id = serializers.UUIDField()
    trip_type = serializers.ChoiceField(choices=Fare.TripType.choices, required=False, default=Fare.TripType.ONE_WAY)
    amount = serializers.DecimalField(max_digits=12, decimal_places=2)
    currency = serializers.CharField(max_length=3, required=False, default="XAF")
    valid_from = serializers.DateField(required=False, allow_null=True, default=None)
    valid_to = serializers.DateField(required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)


class RoutePointSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    name = serializers.CharField()
    code = serializers.CharField()
