from rest_framework import serializers
from apps.voyages_trips.models import Trip, TripStop, TripCrew, TripSeat


class TripStopSerializer(serializers.ModelSerializer):
    service_point_name = serializers.CharField(source="service_point.name", read_only=True, default=None)

    class Meta:
        model = TripStop
        fields = ["id", "service_point", "service_point_name", "sequence",
                  "scheduled_arrival", "actual_arrival", "boarded_count", "alighted_count"]


class TripCrewSerializer(serializers.ModelSerializer):
    driver_name = serializers.CharField(source="driver.full_name", read_only=True, default=None)
    role_display = serializers.CharField(source="get_role_display", read_only=True)

    class Meta:
        model = TripCrew
        fields = ["id", "driver", "driver_name", "role", "role_display", "boarded_at"]


class TripCrewWriteSerializer(serializers.Serializer):
    driver_id = serializers.UUIDField()
    role = serializers.ChoiceField(choices=TripCrew.Role.choices, default=TripCrew.Role.DRIVER)


class TripSeatSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = TripSeat
        fields = ["id", "seat_number", "row", "column", "seat_type", "status", "status_display", "held_until"]


class EligibleVehicleSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    license_plate = serializers.CharField()
    model_name = serializers.SerializerMethodField()

    def get_model_name(self, obj):
        return str(obj.model) if obj.model_id else ""


class TripListSerializer(serializers.ModelSerializer):
    route_code = serializers.CharField(source="route.code", read_only=True, default=None)
    vehicle_plate = serializers.CharField(source="vehicle.license_plate", read_only=True, default=None)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True, default=None)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    seats_available = serializers.SerializerMethodField()
    seats_total = serializers.SerializerMethodField()

    class Meta:
        model = Trip
        fields = ["id", "number", "code", "route", "route_code", "vehicle", "vehicle_plate",
                  "fare_class_name", "scheduled_departure", "scheduled_arrival",
                  "status", "status_display", "is_delayed", "seats_available", "seats_total"]

    def get_seats_available(self, obj):
        return obj.seats.filter(is_deleted=False, status=TripSeat.Status.AVAILABLE).count()

    def get_seats_total(self, obj):
        return obj.seats.filter(is_deleted=False).exclude(status=TripSeat.Status.BLOCKED).count()


class TripDetailSerializer(TripListSerializer):
    origin_name = serializers.CharField(source="origin.name", read_only=True, default=None)
    destination_name = serializers.CharField(source="destination.name", read_only=True, default=None)
    seating_plan_code = serializers.CharField(source="seating_plan.code", read_only=True, default=None)
    stops = TripStopSerializer(many=True, read_only=True)
    crew = TripCrewSerializer(many=True, read_only=True)

    class Meta(TripListSerializer.Meta):
        fields = TripListSerializer.Meta.fields + [
            "service_pattern", "seating_plan", "seating_plan_code",
            "origin", "origin_name", "destination", "destination_name",
            "actual_departure", "actual_arrival", "delayed_until", "delay_reason",
            "notes", "stops", "crew", "created_at", "updated_at",
        ]


class TripCreateSerializer(serializers.Serializer):
    route_id = serializers.UUIDField()
    fare_class_id = serializers.UUIDField()
    service_pattern_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    scheduled_departure = serializers.DateTimeField()
    scheduled_arrival = serializers.DateTimeField()
    origin_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    destination_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    code = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class TripUpdateSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=40, required=False, allow_blank=True)
    notes = serializers.CharField(required=False, allow_blank=True)
    scheduled_departure = serializers.DateTimeField(required=False)
    scheduled_arrival = serializers.DateTimeField(required=False)


class MarkDelayedSerializer(serializers.Serializer):
    delayed_until = serializers.DateTimeField(required=False, allow_null=True, default=None)
    delay_reason = serializers.CharField(required=False, allow_blank=True, default="")


class SeatIdsSerializer(serializers.Serializer):
    seat_ids = serializers.ListField(child=serializers.UUIDField())
