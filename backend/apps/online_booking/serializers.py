from rest_framework import serializers
from apps.online_booking.models import OnlineBookingRequest


class PublicTownSerializer(serializers.Serializer):
    id   = serializers.UUIDField()
    name = serializers.CharField()


# ── Trip search & detail (public) ─────────────────────────────────────────────

class PublicTripSerializer(serializers.Serializer):
    """Modern voyages_trips.Trip serialised for the public booking channel."""
    id                  = serializers.UUIDField()
    reference           = serializers.SerializerMethodField()
    status              = serializers.CharField()
    scheduled_departure = serializers.DateTimeField()
    scheduled_arrival   = serializers.DateTimeField()
    from_town           = serializers.SerializerMethodField()
    to_town             = serializers.SerializerMethodField()
    origin              = serializers.SerializerMethodField()
    destination         = serializers.SerializerMethodField()
    vehicle_category    = serializers.SerializerMethodField()
    fare_class          = serializers.SerializerMethodField()
    total_seats         = serializers.SerializerMethodField()
    available_seats     = serializers.SerializerMethodField()
    free_seating        = serializers.SerializerMethodField()
    price               = serializers.SerializerMethodField()
    currency            = serializers.SerializerMethodField()

    def get_reference(self, o):    return o.number or o.code or str(o.id)
    def get_from_town(self, o):    return o.origin.town.name
    def get_to_town(self, o):      return o.destination.town.name
    def get_origin(self, o):       return {"id": str(o.origin.id), "name": o.origin.name}
    def get_destination(self, o):  return {"id": str(o.destination.id), "name": o.destination.name}

    def get_vehicle_category(self, o):
        return {"name": o.seating_plan.name if o.seating_plan_id else "", "amenities": []}

    def get_fare_class(self, o):
        return {"id": str(o.fare_class.id), "name": o.fare_class.name} if o.fare_class_id else None

    def _counts(self, o):
        from apps.online_booking import selectors
        if not hasattr(o, "_seat_counts"):
            o._seat_counts = selectors.trip_seat_counts(o)
        return o._seat_counts

    def get_total_seats(self, o):     return self._counts(o)[0]
    def get_available_seats(self, o): return self._counts(o)[1]
    def get_free_seating(self, o):    return False

    def _fare(self, o):
        from apps.online_booking import selectors
        if not hasattr(o, "_fare_cache"):
            o._fare_cache = selectors.trip_price(o)
        return o._fare_cache

    def get_price(self, o):
        f = self._fare(o)
        return str(f.amount) if f else None

    def get_currency(self, o):
        f = self._fare(o)
        return f.currency if f else "XAF"


class TripSearchQuerySerializer(serializers.Serializer):
    from_town_id = serializers.UUIDField()
    to_town_id   = serializers.UUIDField()
    travel_date  = serializers.DateField()


# ── Seat map ───────────────────────────────────────────────────────────────────

class SeatSerializer(serializers.Serializer):
    id          = serializers.UUIDField()
    seat_number = serializers.CharField()
    row         = serializers.IntegerField()
    column      = serializers.IntegerField()
    seat_type   = serializers.CharField()
    status      = serializers.CharField()


# ── Booking request ────────────────────────────────────────────────────────────

class InitiateBookingSerializer(serializers.Serializer):
    passenger_name       = serializers.CharField(max_length=150)
    passenger_phone      = serializers.CharField(max_length=30)
    passenger_email      = serializers.EmailField(required=False, allow_blank=True, default="")
    seat_id              = serializers.UUIDField()
    destination_point_id = serializers.UUIDField(required=False, allow_null=True)
    payment_method       = serializers.ChoiceField(choices=OnlineBookingRequest.PaymentMethod.choices)
    payment_phone        = serializers.CharField(max_length=30)


class BookingRequestStatusSerializer(serializers.ModelSerializer):
    status_display         = serializers.CharField(source="get_status_display", read_only=True)
    payment_method_display = serializers.CharField(source="get_payment_method_display", read_only=True)
    expires_at             = serializers.DateTimeField(read_only=True)
    is_expired             = serializers.BooleanField(read_only=True)
    seat_number            = serializers.SerializerMethodField()
    ticket                 = serializers.SerializerMethodField()
    trip_summary           = serializers.SerializerMethodField()

    class Meta:
        model = OnlineBookingRequest
        fields = [
            "id",
            "status", "status_display",
            "passenger_name", "passenger_phone",
            "seat_number",
            "amount", "payment_method", "payment_method_display",
            "payment_reference",
            "expires_at", "is_expired",
            "trip_summary", "ticket",
            "created_at",
        ]

    def get_seat_number(self, obj):
        return obj.trip_seat.seat_number if obj.trip_seat_id else ""

    def get_ticket(self, obj):
        if obj.booking_id:
            t = obj.booking.tickets.first()
            if t:
                return {"ticket_number": t.number, "qr_code": t.number}
        # Relay (hub-and-spoke): booking authored at the agency, not yet synced up.
        if obj.ticket_number:
            return {"ticket_number": obj.ticket_number, "qr_code": obj.ticket_number}
        return None

    def get_trip_summary(self, obj):
        trip = obj.trip
        return {
            "reference":  trip.number or trip.code or str(trip.id),
            "from_town":  trip.origin.town.name,
            "to_town":    trip.destination.town.name,
            "departure":  trip.scheduled_departure.isoformat(),
        }


# ── Webhook payload (from Campay) ──────────────────────────────────────────────

class CampayWebhookSerializer(serializers.Serializer):
    reference          = serializers.CharField()
    status             = serializers.CharField()
    amount             = serializers.CharField(required=False, allow_blank=True, default="")
    operator_reference = serializers.CharField(required=False, allow_blank=True, default="")
    external_reference = serializers.CharField(required=False, allow_blank=True, default="")
