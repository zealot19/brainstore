from rest_framework import serializers
from apps.voyages_trips.models import Trip, TripStop, TripCrew, TripSeat, CrewMember, TripExpense


class TripExpenseSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)

    class Meta:
        model = TripExpense
        fields = ["id", "expense_type", "expense_type_name", "amount", "description",
                  "date", "status", "cash_session"]


class TripExpenseWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripExpense
        fields = ["expense_type", "amount", "description", "date"]


class TripStopSerializer(serializers.ModelSerializer):
    service_point_name = serializers.CharField(source="service_point.name", read_only=True, default=None)

    class Meta:
        model = TripStop
        fields = ["id", "service_point", "service_point_name", "sequence",
                  "scheduled_arrival", "actual_arrival", "boarded_count", "alighted_count"]


class TripCrewSerializer(serializers.ModelSerializer):
    member_name      = serializers.CharField(source="member.full_name", read_only=True, default=None)
    member_type_name = serializers.CharField(source="member.member_type.name", read_only=True, default=None)
    is_driver        = serializers.BooleanField(source="member.member_type.is_driver", read_only=True, default=False)

    class Meta:
        model = TripCrew
        fields = ["id", "member", "member_name", "member_type_name", "is_driver", "boarded_at"]


class TripCrewWriteSerializer(serializers.Serializer):
    member_id = serializers.UUIDField()


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
    seating_plan_code = serializers.CharField(source="seating_plan.code", read_only=True, default=None)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    seats_available = serializers.SerializerMethodField()
    seats_total = serializers.SerializerMethodField()

    class Meta:
        model = Trip
        fields = ["id", "number", "code", "route", "route_code", "vehicle", "vehicle_plate",
                  "fare_class_name", "seating_plan_code", "scheduled_departure", "scheduled_arrival",
                  "status", "status_display", "seat_assignment_mode",
                  "is_delayed", "seats_available", "seats_total"]

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
            "service_pattern", "seating_plan", "seating_plan_code", "auto_expenses",
            "max_reservations", "blocked_seats_count",
            "origin", "origin_name", "destination", "destination_name",
            "actual_departure", "actual_arrival", "delayed_until", "delay_reason",
            "notes", "stops", "crew", "created_at", "updated_at",
        ]


class TripCreateSerializer(serializers.Serializer):
    # Mode « planification » : service_pattern_id + service_date (le reste est dérivé).
    # Mode « manuel » : route_id + fare_class_id + horaires explicites.
    route_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    fare_class_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    service_pattern_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    service_date = serializers.DateField(required=False, allow_null=True, default=None)
    scheduled_departure = serializers.DateTimeField(required=False, allow_null=True, default=None)
    scheduled_arrival = serializers.DateTimeField(required=False, allow_null=True, default=None)
    origin_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    destination_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    code = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
    notes = serializers.CharField(required=False, allow_blank=True, default="")
    seat_assignment_mode = serializers.ChoiceField(
        choices=Trip.SeatAssignment.choices, required=False, default=Trip.SeatAssignment.MANUAL)
    auto_expenses = serializers.BooleanField(required=False, default=True)
    seating_plan_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    vehicle_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    max_reservations = serializers.IntegerField(required=False, allow_null=True, default=None, min_value=0)
    blocked_seats_count = serializers.IntegerField(required=False, default=0, min_value=0)
    crew_member_ids = serializers.ListField(child=serializers.UUIDField(), required=False, default=list)

    def validate(self, attrs):
        pattern_mode = bool(attrs.get("service_pattern_id") and attrs.get("service_date"))
        if not pattern_mode:
            missing = [f for f in ("route_id", "fare_class_id", "scheduled_departure", "scheduled_arrival")
                       if not attrs.get(f)]
            if missing:
                raise serializers.ValidationError(
                    "Sans planification, le trajet, la catégorie et les horaires sont requis.")
        return attrs


class TripUpdateSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=40, required=False, allow_blank=True)
    notes = serializers.CharField(required=False, allow_blank=True)
    scheduled_departure = serializers.DateTimeField(required=False)
    scheduled_arrival = serializers.DateTimeField(required=False)
    seat_assignment_mode = serializers.ChoiceField(choices=Trip.SeatAssignment.choices, required=False)
    auto_expenses = serializers.BooleanField(required=False)


class MarkDelayedSerializer(serializers.Serializer):
    delayed_until = serializers.DateTimeField(required=False, allow_null=True, default=None)
    delay_reason = serializers.CharField(required=False, allow_blank=True, default="")


class SeatIdsSerializer(serializers.Serializer):
    seat_ids = serializers.ListField(child=serializers.UUIDField())


class CrewMemberSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    member_type_name = serializers.CharField(source="member_type.name", read_only=True)
    is_driver = serializers.BooleanField(source="member_type.is_driver", read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True)

    class Meta:
        model = CrewMember
        fields = ["id", "name", "first_name", "last_name", "full_name", "member_type", "member_type_name",
                  "is_driver", "agency", "agency_name", "phone", "license_number", "is_active"]


class CrewMemberWriteSerializer(serializers.Serializer):
    name           = serializers.CharField(max_length=200)
    member_type_id = serializers.UUIDField()
    agency_id      = serializers.UUIDField(required=False, allow_null=True, default=None)
    phone          = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    is_active      = serializers.BooleanField(required=False, default=True)


class CrewDocumentSerializer(serializers.Serializer):
    id          = serializers.UUIDField(read_only=True)
    name        = serializers.CharField(read_only=True)
    file        = serializers.FileField(read_only=True)
    mime_type   = serializers.CharField(read_only=True)
    size        = serializers.IntegerField(read_only=True)
    description = serializers.CharField(read_only=True)
    created_at  = serializers.DateTimeField(read_only=True)
