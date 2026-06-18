from rest_framework import serializers
from .models import City, Terminal, Route, RouteStop, VehicleCategory, FareClass, Fare


# ══════════════════════════════════════════════════════════════════════════════
# CITIES
# ══════════════════════════════════════════════════════════════════════════════

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ["id", "name", "code", "region", "country", "is_active", "created_at", "updated_at"]


class CityWriteSerializer(serializers.Serializer):
    name      = serializers.CharField(max_length=150)
    code      = serializers.CharField(max_length=10)
    region    = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    country   = serializers.CharField(max_length=100, required=False, default="Cameroon")
    is_active = serializers.BooleanField(required=False, default=True)


# ══════════════════════════════════════════════════════════════════════════════
# TERMINALS
# ══════════════════════════════════════════════════════════════════════════════

class TerminalSerializer(serializers.ModelSerializer):
    city_name = serializers.CharField(source="city.name", read_only=True)
    city_code = serializers.CharField(source="city.code", read_only=True)

    class Meta:
        model = Terminal
        fields = [
            "id", "name", "city", "city_name", "city_code",
            "address", "phone", "gps_lat", "gps_lng",
            "is_active", "notes", "created_at", "updated_at",
        ]


class TerminalWriteSerializer(serializers.Serializer):
    city_id   = serializers.UUIDField()
    name      = serializers.CharField(max_length=200)
    address   = serializers.CharField(max_length=300, required=False, allow_blank=True, default="")
    phone     = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    gps_lat   = serializers.DecimalField(max_digits=9, decimal_places=6, required=False, allow_null=True, default=None)
    gps_lng   = serializers.DecimalField(max_digits=9, decimal_places=6, required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)
    notes     = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# ROUTES
# ══════════════════════════════════════════════════════════════════════════════

class RouteStopSerializer(serializers.ModelSerializer):
    terminal_name = serializers.CharField(source="terminal.name", read_only=True)
    city_name     = serializers.CharField(source="terminal.city.name", read_only=True)

    class Meta:
        model = RouteStop
        fields = [
            "id", "terminal", "terminal_name", "city_name",
            "stop_order", "arrival_offset_minutes", "distance_from_start_km",
        ]


class RouteSerializer(serializers.ModelSerializer):
    from_terminal_name = serializers.CharField(source="from_terminal.name", read_only=True)
    from_city          = serializers.CharField(source="from_terminal.city.name", read_only=True)
    to_terminal_name   = serializers.CharField(source="to_terminal.name", read_only=True)
    to_city            = serializers.CharField(source="to_terminal.city.name", read_only=True)

    class Meta:
        model = Route
        fields = [
            "id", "name",
            "from_terminal", "from_terminal_name", "from_city",
            "to_terminal", "to_terminal_name", "to_city",
            "distance_km", "duration_minutes", "is_active", "notes",
            "created_at", "updated_at",
        ]


class RouteDetailSerializer(RouteSerializer):
    stops = RouteStopSerializer(many=True, read_only=True)

    class Meta(RouteSerializer.Meta):
        fields = RouteSerializer.Meta.fields + ["stops"]


class RouteWriteSerializer(serializers.Serializer):
    from_terminal_id = serializers.UUIDField()
    to_terminal_id   = serializers.UUIDField()
    name             = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    distance_km      = serializers.DecimalField(max_digits=8, decimal_places=1, required=False, allow_null=True, default=None)
    duration_minutes = serializers.IntegerField(min_value=1, required=False, allow_null=True, default=None)
    is_active        = serializers.BooleanField(required=False, default=True)
    notes            = serializers.CharField(required=False, allow_blank=True, default="")

    def validate(self, data):
        if data.get("from_terminal_id") == data.get("to_terminal_id"):
            raise serializers.ValidationError("Departure and arrival terminals must be different.")
        return data


class RouteUpdateSerializer(serializers.Serializer):
    name             = serializers.CharField(max_length=200, required=False, allow_blank=True)
    distance_km      = serializers.DecimalField(max_digits=8, decimal_places=1, required=False, allow_null=True)
    duration_minutes = serializers.IntegerField(min_value=1, required=False, allow_null=True)
    is_active        = serializers.BooleanField(required=False)
    notes            = serializers.CharField(required=False, allow_blank=True)


class RouteStopWriteSerializer(serializers.Serializer):
    terminal_id               = serializers.UUIDField()
    stop_order                = serializers.IntegerField(min_value=1)
    arrival_offset_minutes    = serializers.IntegerField(min_value=0, required=False, default=0)
    distance_from_start_km    = serializers.DecimalField(max_digits=8, decimal_places=1, required=False, allow_null=True, default=None)


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE CATEGORIES
# ══════════════════════════════════════════════════════════════════════════════

class VehicleCategorySerializer(serializers.ModelSerializer):
    amenities_list = serializers.ListField(source="amenities_list", read_only=True)

    class Meta:
        model = VehicleCategory
        fields = [
            "id", "name", "total_seats",
            "seat_rows", "seat_cols", "aisle_after_col",
            "has_back_row", "free_seating",
            "has_wifi", "has_ac", "has_tv", "has_usb", "has_snack",
            "amenities_list", "description",
            "created_at", "updated_at",
        ]


class VehicleCategoryWriteSerializer(serializers.Serializer):
    name             = serializers.CharField(max_length=150)
    total_seats      = serializers.IntegerField(min_value=1)
    seat_rows        = serializers.IntegerField(min_value=1, required=False, default=8)
    seat_cols        = serializers.IntegerField(min_value=1, required=False, default=4)
    aisle_after_col  = serializers.IntegerField(min_value=1, required=False, default=2)
    has_back_row     = serializers.BooleanField(required=False, default=True)
    free_seating     = serializers.BooleanField(required=False, default=False)
    has_wifi         = serializers.BooleanField(required=False, default=False)
    has_ac           = serializers.BooleanField(required=False, default=False)
    has_tv           = serializers.BooleanField(required=False, default=False)
    has_usb          = serializers.BooleanField(required=False, default=False)
    has_snack        = serializers.BooleanField(required=False, default=False)
    description      = serializers.CharField(required=False, allow_blank=True, default="")


# ══════════════════════════════════════════════════════════════════════════════
# FARE CLASSES
# ══════════════════════════════════════════════════════════════════════════════

class FareClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = FareClass
        fields = ["id", "name", "description", "is_active", "created_at", "updated_at"]


class FareClassWriteSerializer(serializers.Serializer):
    name        = serializers.CharField(max_length=100)
    description = serializers.CharField(required=False, allow_blank=True, default="")
    is_active   = serializers.BooleanField(required=False, default=True)


# ══════════════════════════════════════════════════════════════════════════════
# FARES
# ══════════════════════════════════════════════════════════════════════════════

class FareSerializer(serializers.ModelSerializer):
    route_name            = serializers.CharField(source="route.name", read_only=True)
    vehicle_category_name = serializers.CharField(source="vehicle_category.name", read_only=True)
    fare_class_name       = serializers.CharField(source="fare_class.name", read_only=True)
    passenger_type_display = serializers.CharField(source="get_passenger_type_display", read_only=True)

    class Meta:
        model = Fare
        fields = [
            "id", "route", "route_name",
            "vehicle_category", "vehicle_category_name",
            "fare_class", "fare_class_name",
            "passenger_type", "passenger_type_display",
            "amount", "currency", "is_active",
            "created_at", "updated_at",
        ]


class FareWriteSerializer(serializers.Serializer):
    route_id            = serializers.UUIDField()
    vehicle_category_id = serializers.UUIDField()
    fare_class_id       = serializers.UUIDField()
    passenger_type      = serializers.ChoiceField(choices=Fare.PassengerType.choices)
    amount              = serializers.DecimalField(max_digits=12, decimal_places=2)
    currency            = serializers.CharField(max_length=5, required=False, default="XAF")
    is_active           = serializers.BooleanField(required=False, default=True)


class FareUpdateSerializer(serializers.Serializer):
    amount    = serializers.DecimalField(max_digits=12, decimal_places=2, required=False)
    currency  = serializers.CharField(max_length=5, required=False)
    is_active = serializers.BooleanField(required=False)
