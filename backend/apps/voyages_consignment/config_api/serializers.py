from rest_framework import serializers
from apps.voyages_consignment.models import Parcel, ParcelEvent, Baggage


class ParcelEventRead(serializers.ModelSerializer):
    kind_display = serializers.CharField(source="get_kind_display", read_only=True)

    class Meta:
        model = ParcelEvent
        fields = ["id", "kind", "kind_display", "trip", "note", "created_at"]


class ParcelRead(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    origin_point_name = serializers.CharField(source="origin_point.name", read_only=True, default=None)
    destination_point_name = serializers.CharField(source="destination_point.name", read_only=True, default=None)
    consignment_type_label = serializers.CharField(source="consignment_type.label", read_only=True, default=None)
    events = ParcelEventRead(many=True, read_only=True)

    class Meta:
        model = Parcel
        fields = ["id", "reference", "status", "status_display",
                  "origin_point", "origin_point_name", "destination_point", "destination_point_name",
                  "trip", "sender_name", "sender_phone", "recipient_name", "recipient_phone",
                  "recipient_address", "recipient_id_number", "consignment_type", "consignment_type_label",
                  "description", "weight_kg", "quantity", "received_pieces", "missing_pieces",
                  "damaged_pieces", "declared_value", "amount_due", "amount_received",
                  "change_due", "payment_method", "paid_at", "loaded_at", "arrived_at",
                  "picked_up_at", "picked_up_by", "picked_up_id_number", "notes",
                  "created_at", "updated_at", "events"]


class ParcelWrite(serializers.Serializer):
    origin_point_id = serializers.UUIDField()
    destination_point_id = serializers.UUIDField()
    consignment_type_id = serializers.UUIDField()
    sender_name = serializers.CharField(max_length=150)
    sender_phone = serializers.CharField(max_length=30)
    recipient_name = serializers.CharField(max_length=150)
    recipient_phone = serializers.CharField(max_length=30)
    recipient_address = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    recipient_id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    description = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg = serializers.DecimalField(max_digits=8, decimal_places=3, required=False, allow_null=True, default=None)
    quantity = serializers.IntegerField(required=False, default=1)
    declared_value = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    amount_due = serializers.DecimalField(max_digits=12, decimal_places=2)
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    payment_method = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")


class ParcelPickupSerializer(serializers.Serializer):
    picked_up_by = serializers.CharField(max_length=150)
    picked_up_id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")


class ParcelReceiveSerializer(serializers.Serializer):
    received_pieces = serializers.IntegerField(required=False, allow_null=True, default=None)
    missing_pieces = serializers.IntegerField(required=False, default=0)
    damaged_pieces = serializers.IntegerField(required=False, default=0)


class ParcelEditSerializer(serializers.Serializer):
    sender_name = serializers.CharField(max_length=150, required=False)
    sender_phone = serializers.CharField(max_length=30, required=False)
    recipient_name = serializers.CharField(max_length=150, required=False)
    recipient_phone = serializers.CharField(max_length=30, required=False)
    recipient_address = serializers.CharField(max_length=255, required=False, allow_blank=True)
    recipient_id_number = serializers.CharField(max_length=100, required=False, allow_blank=True)
    description = serializers.CharField(max_length=255, required=False, allow_blank=True)
    weight_kg = serializers.DecimalField(max_digits=8, decimal_places=3, required=False, allow_null=True)
    quantity = serializers.IntegerField(required=False)
    declared_value = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True)


class AssignTripSerializer(serializers.Serializer):
    trip_id = serializers.UUIDField()


class BaggageRead(serializers.ModelSerializer):
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    owner_name = serializers.CharField(read_only=True)
    passenger_name = serializers.CharField(source="ticket.passenger.full_name", read_only=True, default=None)
    ticket_number = serializers.CharField(source="ticket.number", read_only=True, default=None)
    consignment_type_label = serializers.CharField(source="consignment_type.label", read_only=True, default=None)

    class Meta:
        model = Baggage
        fields = ["id", "tag_number", "trip", "ticket", "ticket_number", "passenger_name", "owner_name",
                  "sender_name", "sender_phone", "civility", "id_type", "id_number", "birth_date", "email",
                  "consignment_type", "consignment_type_label", "description", "weight_kg", "quantity",
                  "declared_value", "free_allowance_kg", "excess_kg",
                  "amount_due", "amount_received", "change_due", "payment_method", "paid_at",
                  "status", "status_display", "loaded_at", "delivered_at", "delivered_comment", "notes",
                  "created_at", "updated_at"]


class _BlankAsNullMixin:
    """Traite une chaîne vide comme None pour certains champs optionnels
    (un <input type=date> vide ou un select non renseigné envoie "" et non null)."""
    blank_null_fields = ()

    def to_internal_value(self, data):
        if hasattr(data, "get"):
            cleaned = {k: (None if (k in self.blank_null_fields and v == "") else v)
                       for k, v in data.items()}
            data = cleaned
        return super().to_internal_value(data)


class BaggageWrite(_BlankAsNullMixin, serializers.Serializer):
    blank_null_fields = ("birth_date", "ticket_id", "consignment_type_id")
    trip_id = serializers.UUIDField()
    ticket_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    sender_name = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    sender_phone = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    civility = serializers.ChoiceField(choices=Baggage.Civility.choices, required=False, allow_blank=True, default="")
    id_type = serializers.ChoiceField(choices=Baggage.IdType.choices, required=False, allow_blank=True, default="")
    id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    birth_date = serializers.DateField(required=False, allow_null=True, default=None)
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    consignment_type_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    description = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    weight_kg = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True, default=None)
    quantity = serializers.IntegerField(required=False, default=1)
    declared_value = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=1)
    amount_due = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    amount_received = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    payment_method = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")


class BaggageDeliverSerializer(serializers.Serializer):
    comment = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    delivered_at = serializers.DateTimeField(required=False, allow_null=True, default=None)


class BaggageEditSerializer(_BlankAsNullMixin, serializers.Serializer):
    blank_null_fields = ("birth_date",)
    sender_name = serializers.CharField(max_length=150, required=False, allow_blank=True)
    sender_phone = serializers.CharField(max_length=30, required=False, allow_blank=True)
    civility = serializers.ChoiceField(choices=Baggage.Civility.choices, required=False, allow_blank=True)
    id_type = serializers.ChoiceField(choices=Baggage.IdType.choices, required=False, allow_blank=True)
    id_number = serializers.CharField(max_length=100, required=False, allow_blank=True)
    birth_date = serializers.DateField(required=False, allow_null=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    description = serializers.CharField(max_length=255, required=False, allow_blank=True)
    weight_kg = serializers.DecimalField(max_digits=6, decimal_places=2, required=False, allow_null=True)
    quantity = serializers.IntegerField(required=False)
    declared_value = serializers.DecimalField(max_digits=12, decimal_places=2, required=False)
    notes = serializers.CharField(required=False, allow_blank=True)
