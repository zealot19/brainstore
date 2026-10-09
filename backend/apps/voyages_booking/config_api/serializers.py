from rest_framework import serializers
from apps.voyages_booking.models import Passenger, Booking, Ticket, LoyaltyAccount, LoyaltyMovement


class PassengerRead(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    gender_display = serializers.CharField(source="get_gender_display", read_only=True)
    id_type_display = serializers.CharField(source="get_id_type_display", read_only=True)

    class Meta:
        model = Passenger
        fields = ["id", "name", "full_name", "civility", "gender", "gender_display",
                  "birth_date", "phone", "email", "id_type", "id_type_display", "id_number",
                  "notes", "company", "is_active", "created_at", "updated_at"]


class PassengerWrite(serializers.Serializer):
    name = serializers.CharField(max_length=300)
    civility = serializers.ChoiceField(choices=Passenger.Civility.choices, required=False, allow_blank=True, default="")
    gender = serializers.ChoiceField(choices=Passenger.Gender.choices, required=False, allow_blank=True, default="")
    birth_date = serializers.DateField(required=False, allow_null=True, default=None)
    phone = serializers.CharField(max_length=30)
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    id_type = serializers.ChoiceField(choices=Passenger.IdType.choices, required=False, default=Passenger.IdType.CNI)
    id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    notes = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")


class SeatCellSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    seat_number = serializers.CharField()
    row = serializers.IntegerField()
    column = serializers.IntegerField()
    seat_type = serializers.CharField()
    status = serializers.CharField()


class TripOptionSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    number = serializers.CharField()
    route_code = serializers.CharField(source="route.code", default=None)
    origin_name = serializers.CharField(source="origin.name", default=None)
    destination_name = serializers.CharField(source="destination.name", default=None)
    fare_class = serializers.UUIDField(source="fare_class_id")
    fare_class_name = serializers.CharField(source="fare_class.name", default=None)
    scheduled_departure = serializers.DateTimeField()
    seat_assignment_mode = serializers.CharField()


class TripDestinationSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    name = serializers.CharField()
    code = serializers.CharField()
    one_way_amount = serializers.DecimalField(max_digits=12, decimal_places=2, allow_null=True)
    round_trip_amount = serializers.DecimalField(max_digits=12, decimal_places=2, allow_null=True)


class RouteDestinationSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    name = serializers.CharField()
    code = serializers.CharField()


class TicketRead(serializers.ModelSerializer):
    passenger_name = serializers.CharField(source="passenger.full_name", read_only=True)
    passenger_phone = serializers.CharField(source="passenger.phone", read_only=True, default="")
    passenger_id_number = serializers.CharField(source="passenger.id_number", read_only=True, default="")
    seat_number = serializers.CharField(source="trip_seat.seat_number", read_only=True, default=None)
    origin_point_name = serializers.CharField(source="origin_point.name", read_only=True, default=None)
    destination_point_name = serializers.CharField(source="destination_point.name", read_only=True, default=None)
    direction_display = serializers.CharField(source="get_direction_display", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Ticket
        fields = ["id", "number", "passenger", "passenger_name", "passenger_phone", "passenger_id_number",
                  "trip", "trip_seat", "seat_number",
                  "origin_point", "origin_point_name", "destination_point", "destination_point_name",
                  "direction", "direction_display", "return_of", "fare", "fare_class", "amount",
                  "is_reward", "status", "status_display", "boarded_at"]


class BookingRead(serializers.ModelSerializer):
    buyer_name = serializers.CharField(source="buyer.full_name", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    trip_type_display = serializers.CharField(source="get_trip_type_display", read_only=True)
    tickets = TicketRead(many=True, read_only=True)

    class Meta:
        model = Booking
        fields = ["id", "reference", "status", "status_display", "trip_type", "trip_type_display",
                  "outbound_trip", "return_trip", "return_open", "buyer", "buyer_name",
                  "amount_due", "amount_paid", "amount_received", "change_due", "payment_method",
                  "channel", "notes", "hold_until", "created_at", "updated_at", "tickets"]


class BookingItemSerializer(serializers.Serializer):
    passenger = serializers.DictField()
    destination_point_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    # Optionnel : en attribution automatique, le siège est choisi côté serveur.
    outbound_seat_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    return_seat_id = serializers.UUIDField(required=False, allow_null=True, default=None)


class BookingCreateSerializer(serializers.Serializer):
    trip_type = serializers.ChoiceField(choices=Booking.TripType.choices, default=Booking.TripType.ONE_WAY)
    outbound_trip_id = serializers.UUIDField()
    return_trip_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    buyer = serializers.DictField()
    items = BookingItemSerializer(many=True)
    payment_method = serializers.CharField(required=False, allow_blank=True, default="")
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    return_open = serializers.BooleanField(required=False, default=False)


class ReservationCreateSerializer(serializers.Serializer):
    trip_type = serializers.ChoiceField(choices=Booking.TripType.choices, default=Booking.TripType.ONE_WAY)
    outbound_trip_id = serializers.UUIDField()
    return_trip_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    buyer = serializers.DictField()
    items = BookingItemSerializer(many=True)
    hold_until = serializers.DateTimeField()
    return_open = serializers.BooleanField(required=False, default=False)


class PayReservationSerializer(serializers.Serializer):
    payment_method = serializers.CharField(required=False, allow_blank=True, default="")
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)


class AssignReturnItemSerializer(serializers.Serializer):
    outbound_ticket_id = serializers.UUIDField()
    # Optionnel : en attribution automatique, le siège retour est choisi côté serveur.
    return_seat_id = serializers.UUIDField(required=False, allow_null=True, default=None)


class AssignReturnSerializer(serializers.Serializer):
    return_trip_id = serializers.UUIDField()
    items = AssignReturnItemSerializer(many=True)


class TripAvailabilitySerializer(serializers.Serializer):
    total = serializers.IntegerField()
    sold = serializers.IntegerField()
    reserved = serializers.IntegerField()
    blocked = serializers.IntegerField()
    available = serializers.IntegerField()
    max_reservations = serializers.IntegerField(allow_null=True)
    reservations_possible = serializers.IntegerField(allow_null=True)


class LoyaltyMovementRead(serializers.ModelSerializer):
    kind_display = serializers.CharField(source="get_kind_display", read_only=True)

    class Meta:
        model = LoyaltyMovement
        fields = ["id", "kind", "kind_display", "points", "booking", "note", "created_at"]


class LoyaltyAccountRead(serializers.ModelSerializer):
    class Meta:
        model = LoyaltyAccount
        fields = ["id", "passenger", "points_balance", "lifetime_points"]
