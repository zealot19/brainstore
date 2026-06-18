from rest_framework import serializers
from apps.ticketing.models import Customer, Booking, Ticket, Luggage


# ── Customer ───────────────────────────────────────────────────────────────────

class CustomerReadSerializer(serializers.ModelSerializer):
    full_name    = serializers.CharField(read_only=True)
    id_type_display = serializers.CharField(source="get_id_type_display", read_only=True)

    class Meta:
        model = Customer
        fields = [
            "id", "full_name", "first_name", "last_name",
            "phone", "email",
            "id_type", "id_type_display", "id_number",
            "date_of_birth", "notes",
            "created_at", "updated_at",
        ]


class CustomerWriteSerializer(serializers.Serializer):
    first_name    = serializers.CharField(max_length=100)
    last_name     = serializers.CharField(max_length=100)
    phone         = serializers.CharField(max_length=30)
    email         = serializers.EmailField(required=False, allow_blank=True, default="")
    id_type       = serializers.ChoiceField(choices=Customer.IdType.choices,
                                             default=Customer.IdType.CNI)
    id_number     = serializers.CharField(max_length=50, required=False, allow_blank=True, default="")
    date_of_birth = serializers.DateField(required=False, allow_null=True)
    notes         = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")


# ── Ticket ─────────────────────────────────────────────────────────────────────

class TicketSerializer(serializers.ModelSerializer):
    qr_code = serializers.UUIDField(read_only=True)

    class Meta:
        model = Ticket
        fields = ["id", "ticket_number", "qr_code", "issued_at", "is_used", "used_at"]


# ── Luggage ────────────────────────────────────────────────────────────────────

class LuggageReadSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Luggage
        fields = ["id", "tag_number", "description", "weight_kg",
                  "status", "status_display", "created_at"]


class LuggageWriteSerializer(serializers.Serializer):
    description = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg   = serializers.DecimalField(max_digits=5, decimal_places=2,
                                            required=False, allow_null=True)


class LuggageStatusSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=Luggage.Status.choices)


# ── Booking ────────────────────────────────────────────────────────────────────

class TripSummarySerializer(serializers.Serializer):
    id                 = serializers.UUIDField()
    reference          = serializers.CharField()
    from_city          = serializers.CharField()
    to_city            = serializers.CharField()
    departure_datetime = serializers.DateTimeField()
    status             = serializers.CharField()


class BookingReadSerializer(serializers.ModelSerializer):
    customer       = CustomerReadSerializer(read_only=True)
    trip           = TripSummarySerializer(read_only=True)
    ticket         = TicketSerializer(read_only=True)
    luggage_items  = LuggageReadSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    passenger_type_display = serializers.CharField(source="get_passenger_type_display",
                                                    read_only=True)

    class Meta:
        model = Booking
        fields = [
            "id", "reference", "status", "status_display",
            "trip", "customer",
            "passenger_type", "passenger_type_display",
            "seat_number", "amount_paid",
            "ticket", "luggage_items",
            "notes", "created_at", "updated_at",
        ]


class BookingWriteSerializer(serializers.Serializer):
    trip_id        = serializers.UUIDField()
    customer_id    = serializers.UUIDField()
    passenger_type = serializers.ChoiceField(choices=Booking.PassengerType.choices,
                                              default=Booking.PassengerType.ADULT)
    seat_number    = serializers.CharField(max_length=10, required=False, allow_blank=True, default="")
    fare_id        = serializers.UUIDField(required=False, allow_null=True)
    amount_paid    = serializers.DecimalField(max_digits=10, decimal_places=2, default=0)
    notes          = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")


# ── Stats ──────────────────────────────────────────────────────────────────────

class BookingStatsSerializer(serializers.Serializer):
    total     = serializers.IntegerField()
    pending   = serializers.IntegerField()
    confirmed = serializers.IntegerField()
    boarded   = serializers.IntegerField()
    cancelled = serializers.IntegerField()
    no_show   = serializers.IntegerField()
    revenue   = serializers.DecimalField(max_digits=12, decimal_places=2)


# ── QR scan ────────────────────────────────────────────────────────────────────

class QRScanSerializer(serializers.Serializer):
    qr_code = serializers.UUIDField()
