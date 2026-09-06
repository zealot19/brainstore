from rest_framework import serializers
from apps.online_booking.models import OnlineBookingRequest


class PublicTownSerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()


# ── Trip search & detail (public) ─────────────────────────────────────────────

class PublicTripSerializer(serializers.Serializer):
    id                        = serializers.UUIDField()
    reference                 = serializers.CharField()
    status                    = serializers.CharField()
    departure_datetime        = serializers.DateTimeField()
    estimated_arrival_datetime = serializers.DateTimeField(allow_null=True)
    from_city                 = serializers.CharField()
    to_city                   = serializers.CharField()
    from_terminal             = serializers.SerializerMethodField()
    to_terminal               = serializers.SerializerMethodField()
    vehicle_category          = serializers.SerializerMethodField()
    fare_class                = serializers.SerializerMethodField()
    total_seats               = serializers.IntegerField()
    booked_seats              = serializers.IntegerField(default=0)
    available_seats           = serializers.SerializerMethodField()
    free_seating              = serializers.BooleanField()

    def get_from_terminal(self, obj):
        t = obj.route.from_terminal
        return {"id": str(t.id), "name": t.name, "city": t.city.name}

    def get_to_terminal(self, obj):
        t = obj.route.to_terminal
        return {"id": str(t.id), "name": t.name, "city": t.city.name}

    def get_vehicle_category(self, obj):
        c = obj.vehicle_category
        return {
            "id": str(c.id), "name": c.name,
            "total_seats": c.total_seats,
            "amenities": c.amenities_list,
        }

    def get_fare_class(self, obj):
        if obj.fare_class_id:
            return {"id": str(obj.fare_class.id), "name": obj.fare_class.name}
        return None

    def get_available_seats(self, obj):
        booked = getattr(obj, "booked_seats", 0) or 0
        return max(0, obj.total_seats - booked)


class TripSearchQuerySerializer(serializers.Serializer):
    from_city_id = serializers.UUIDField()
    to_city_id   = serializers.UUIDField()
    travel_date  = serializers.DateField()


# ── Seat map ───────────────────────────────────────────────────────────────────

class SeatMapSerializer(serializers.Serializer):
    total_seats     = serializers.IntegerField()
    free_seating    = serializers.BooleanField()
    seat_rows       = serializers.IntegerField()
    seat_cols       = serializers.IntegerField()
    aisle_after_col = serializers.IntegerField(allow_null=True)
    has_back_row    = serializers.BooleanField()
    booked_seats    = serializers.ListField(child=serializers.CharField())
    available_count = serializers.IntegerField()


# ── Booking request ────────────────────────────────────────────────────────────

class InitiateBookingSerializer(serializers.Serializer):
    passenger_name  = serializers.CharField(max_length=150)
    passenger_phone = serializers.CharField(max_length=30)
    passenger_email = serializers.EmailField(required=False, allow_blank=True, default="")
    passenger_type  = serializers.ChoiceField(
        choices=["adult", "child", "student", "senior"], default="adult"
    )
    seat_number     = serializers.CharField(max_length=10, required=False, allow_blank=True, default="")
    fare_id         = serializers.UUIDField(required=False, allow_null=True)
    amount          = serializers.DecimalField(max_digits=10, decimal_places=2)
    payment_method  = serializers.ChoiceField(choices=OnlineBookingRequest.PaymentMethod.choices)
    payment_phone   = serializers.CharField(max_length=30)


class BookingRequestStatusSerializer(serializers.ModelSerializer):
    status_display        = serializers.CharField(source="get_status_display", read_only=True)
    payment_method_display = serializers.CharField(source="get_payment_method_display", read_only=True)
    expires_at            = serializers.DateTimeField(read_only=True)
    is_expired            = serializers.BooleanField(read_only=True)
    ticket                = serializers.SerializerMethodField()
    trip_summary          = serializers.SerializerMethodField()

    class Meta:
        model = OnlineBookingRequest
        fields = [
            "id",
            "status", "status_display",
            "passenger_name", "passenger_phone",
            "passenger_type", "seat_number",
            "amount", "payment_method", "payment_method_display",
            "payment_reference",
            "expires_at", "is_expired",
            "trip_summary", "ticket",
            "created_at",
        ]

    def get_ticket(self, obj):
        if obj.booking_id and hasattr(obj.booking, "ticket"):
            t = obj.booking.ticket
            return {
                "ticket_number": t.ticket_number,
                "qr_code":       str(t.qr_code),
            }
        return None

    def get_trip_summary(self, obj):
        trip = obj.trip
        return {
            "reference":          trip.reference,
            "from_city":          trip.from_city,
            "to_city":            trip.to_city,
            "departure_datetime": trip.departure_datetime.isoformat(),
        }


# ── Webhook payload (from Campay) ──────────────────────────────────────────────

class CampayWebhookSerializer(serializers.Serializer):
    reference          = serializers.CharField()
    status             = serializers.CharField()
    amount             = serializers.CharField(required=False, allow_blank=True, default="")
    operator_reference = serializers.CharField(required=False, allow_blank=True, default="")
    external_reference = serializers.CharField(required=False, allow_blank=True, default="")
