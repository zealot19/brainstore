from rest_framework import serializers
from apps.voyage.models import Trip, TripCrew


# ── Nested summaries ───────────────────────────────────────────────────────────

class RouteSummarySerializer(serializers.Serializer):
    id              = serializers.UUIDField()
    name            = serializers.CharField()
    from_city       = serializers.SerializerMethodField()
    to_city         = serializers.SerializerMethodField()
    distance_km     = serializers.FloatField()
    duration_minutes = serializers.IntegerField(allow_null=True)

    def get_from_city(self, obj):
        return obj.from_terminal.city.name if obj.from_terminal_id else None

    def get_to_city(self, obj):
        return obj.to_terminal.city.name if obj.to_terminal_id else None


class VehicleSummarySerializer(serializers.Serializer):
    id            = serializers.UUIDField()
    license_plate = serializers.CharField()
    status        = serializers.CharField()


class VehicleCategorySummarySerializer(serializers.Serializer):
    id          = serializers.UUIDField()
    name        = serializers.CharField()
    total_seats = serializers.IntegerField()
    free_seating = serializers.BooleanField()


class FareClassSummarySerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()


class UserSummarySerializer(serializers.Serializer):
    id         = serializers.UUIDField()
    full_name  = serializers.SerializerMethodField()
    email      = serializers.EmailField()

    def get_full_name(self, obj):
        return obj.get_full_name() or obj.username


# ── Trip ───────────────────────────────────────────────────────────────────────

class TripReadSerializer(serializers.ModelSerializer):
    route            = RouteSummarySerializer(read_only=True)
    vehicle          = VehicleSummarySerializer(read_only=True)
    vehicle_category = VehicleCategorySummarySerializer(read_only=True)
    fare_class       = FareClassSummarySerializer(read_only=True)
    from_city        = serializers.CharField(read_only=True)
    to_city          = serializers.CharField(read_only=True)
    booked_seats     = serializers.IntegerField(read_only=True, default=0)
    available_seats  = serializers.SerializerMethodField()
    status_display   = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Trip
        fields = [
            "id", "reference", "status", "status_display",
            "route", "from_city", "to_city",
            "departure_datetime", "estimated_arrival_datetime",
            "actual_departure_datetime", "actual_arrival_datetime",
            "vehicle", "vehicle_category", "fare_class",
            "total_seats", "free_seating",
            "booked_seats", "available_seats",
            "notes", "created_at", "updated_at",
        ]

    def get_available_seats(self, obj):
        booked = getattr(obj, "booked_seats", 0) or 0
        return max(0, obj.total_seats - booked)


class TripWriteSerializer(serializers.Serializer):
    route_id             = serializers.UUIDField()
    vehicle_category_id  = serializers.UUIDField()
    departure_datetime   = serializers.DateTimeField()
    vehicle_id           = serializers.UUIDField(required=False, allow_null=True)
    fare_class_id        = serializers.UUIDField(required=False, allow_null=True)
    estimated_arrival_datetime = serializers.DateTimeField(required=False, allow_null=True)
    free_seating         = serializers.BooleanField(required=False, default=False)
    notes                = serializers.CharField(required=False, allow_blank=True, default="")


class TripUpdateSerializer(serializers.Serializer):
    departure_datetime         = serializers.DateTimeField(required=False)
    estimated_arrival_datetime = serializers.DateTimeField(required=False, allow_null=True)
    vehicle_id                 = serializers.UUIDField(required=False, allow_null=True)
    fare_class_id              = serializers.UUIDField(required=False, allow_null=True)
    free_seating               = serializers.BooleanField(required=False)
    notes                      = serializers.CharField(required=False, allow_blank=True)


class TripDepartSerializer(serializers.Serializer):
    actual_departure_datetime = serializers.DateTimeField(required=False, allow_null=True)


class TripArriveSerializer(serializers.Serializer):
    actual_arrival_datetime = serializers.DateTimeField(required=False, allow_null=True)


class TripStatsSerializer(serializers.Serializer):
    total       = serializers.IntegerField()
    upcoming    = serializers.IntegerField()
    boarding    = serializers.IntegerField()
    in_transit  = serializers.IntegerField()
    arrived_today = serializers.IntegerField()
    cancelled   = serializers.IntegerField()


# ── Crew ───────────────────────────────────────────────────────────────────────

class TripCrewReadSerializer(serializers.ModelSerializer):
    user         = UserSummarySerializer(read_only=True)
    role_display = serializers.CharField(source="get_role_display", read_only=True)

    class Meta:
        model = TripCrew
        fields = ["id", "user", "role", "role_display", "notes", "created_at"]


class TripCrewWriteSerializer(serializers.Serializer):
    user_id = serializers.UUIDField()
    role    = serializers.ChoiceField(choices=TripCrew.Role.choices,
                                      default=TripCrew.Role.CONDUCTOR)
    notes   = serializers.CharField(required=False, allow_blank=True, default="")


# ── Search (public / online booking) ──────────────────────────────────────────

class TripSearchSerializer(serializers.Serializer):
    from_city_id = serializers.UUIDField()
    to_city_id   = serializers.UUIDField()
    travel_date  = serializers.DateField()
