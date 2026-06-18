from rest_framework import serializers
from apps.parcel.models import Parcel, ParcelEvent


# ── Nested ─────────────────────────────────────────────────────────────────────

class TerminalSummarySerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()
    city = serializers.SerializerMethodField()

    def get_city(self, obj):
        return obj.city.name if obj.city_id else None


class TripSummarySerializer(serializers.Serializer):
    id                 = serializers.UUIDField()
    reference          = serializers.CharField()
    departure_datetime = serializers.DateTimeField()
    status             = serializers.CharField()


# ── Parcel ─────────────────────────────────────────────────────────────────────

class ParcelReadSerializer(serializers.ModelSerializer):
    from_terminal        = TerminalSummarySerializer(read_only=True)
    to_terminal          = TerminalSummarySerializer(read_only=True)
    trip                 = TripSummarySerializer(read_only=True)
    status_display       = serializers.CharField(source="get_status_display",  read_only=True)
    payment_status_display = serializers.CharField(source="get_payment_status_display", read_only=True)
    payment_mode_display = serializers.SerializerMethodField()

    class Meta:
        model = Parcel
        fields = [
            "id", "reference",
            "from_terminal", "to_terminal", "trip",
            "sender_name", "sender_phone",
            "recipient_name", "recipient_phone", "recipient_address",
            "description", "weight_kg", "quantity", "declared_value",
            "shipping_amount",
            "payment_status", "payment_status_display",
            "payment_mode", "payment_mode_display",
            "paid_at",
            "status", "status_display",
            "notes", "created_at", "updated_at",
        ]

    def get_payment_mode_display(self, obj):
        if not obj.payment_mode:
            return None
        try:
            return Parcel.PaymentMode(obj.payment_mode).label
        except ValueError:
            return obj.payment_mode


class ParcelWriteSerializer(serializers.Serializer):
    from_terminal_id   = serializers.UUIDField()
    to_terminal_id     = serializers.UUIDField()
    trip_id            = serializers.UUIDField(required=False, allow_null=True)
    sender_name        = serializers.CharField(max_length=150)
    sender_phone       = serializers.CharField(max_length=30)
    recipient_name     = serializers.CharField(max_length=150)
    recipient_phone    = serializers.CharField(max_length=30)
    recipient_address  = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    description        = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg          = serializers.DecimalField(max_digits=6, decimal_places=3, required=False, allow_null=True)
    quantity           = serializers.IntegerField(min_value=1, default=1)
    declared_value     = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True)
    shipping_amount    = serializers.DecimalField(max_digits=10, decimal_places=2, default=0)
    payment_status     = serializers.ChoiceField(choices=Parcel.PaymentStatus.choices,
                                                  default=Parcel.PaymentStatus.UNPAID)
    payment_mode       = serializers.ChoiceField(choices=Parcel.PaymentMode.choices,
                                                  required=False, allow_blank=True, default="")
    notes              = serializers.CharField(required=False, allow_blank=True, default="")


class ParcelUpdateSerializer(serializers.Serializer):
    sender_name       = serializers.CharField(max_length=150, required=False)
    sender_phone      = serializers.CharField(max_length=30,  required=False)
    recipient_name    = serializers.CharField(max_length=150, required=False)
    recipient_phone   = serializers.CharField(max_length=30,  required=False)
    recipient_address = serializers.CharField(max_length=255, required=False, allow_blank=True)
    description       = serializers.CharField(max_length=255, required=False, allow_blank=True)
    weight_kg         = serializers.DecimalField(max_digits=6, decimal_places=3, required=False, allow_null=True)
    quantity          = serializers.IntegerField(min_value=1,  required=False)
    declared_value    = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True)
    shipping_amount   = serializers.DecimalField(max_digits=10, decimal_places=2, required=False)
    payment_status    = serializers.ChoiceField(choices=Parcel.PaymentStatus.choices, required=False)
    payment_mode      = serializers.ChoiceField(choices=Parcel.PaymentMode.choices,
                                                 required=False, allow_blank=True)
    trip_id           = serializers.UUIDField(required=False, allow_null=True)
    notes             = serializers.CharField(required=False, allow_blank=True)


# ── Transition payloads ────────────────────────────────────────────────────────

class ParcelTransitionSerializer(serializers.Serializer):
    location = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    note     = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")


class ParcelAssignTripSerializer(serializers.Serializer):
    trip_id = serializers.UUIDField()


class ParcelPaymentSerializer(serializers.Serializer):
    payment_mode = serializers.ChoiceField(choices=Parcel.PaymentMode.choices)


# ── Events ─────────────────────────────────────────────────────────────────────

class ParcelEventSerializer(serializers.ModelSerializer):
    recorded_by = serializers.SerializerMethodField()
    status_display = serializers.SerializerMethodField()

    class Meta:
        model = ParcelEvent
        fields = ["id", "status", "status_display", "location", "note",
                  "recorded_by", "created_at"]

    def get_recorded_by(self, obj):
        if obj.created_by_id:
            return obj.created_by.get_full_name() or obj.created_by.username
        return None

    def get_status_display(self, obj):
        try:
            return Parcel.Status(obj.status).label
        except ValueError:
            return obj.status


# ── Stats ──────────────────────────────────────────────────────────────────────

class ParcelStatsSerializer(serializers.Serializer):
    total      = serializers.IntegerField()
    registered = serializers.IntegerField()
    shipped    = serializers.IntegerField()
    received   = serializers.IntegerField()
    delivered  = serializers.IntegerField()
    returned   = serializers.IntegerField()
    lost       = serializers.IntegerField()
    unpaid     = serializers.IntegerField()
    revenue    = serializers.DecimalField(max_digits=12, decimal_places=2)
