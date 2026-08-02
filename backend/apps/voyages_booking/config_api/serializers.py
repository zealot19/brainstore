from rest_framework import serializers
from apps.voyages_booking.models import Passenger


class PassengerRead(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    gender_display = serializers.CharField(source="get_gender_display", read_only=True)
    id_type_display = serializers.CharField(source="get_id_type_display", read_only=True)

    class Meta:
        model = Passenger
        fields = ["id", "first_name", "last_name", "full_name", "gender", "gender_display",
                  "birth_date", "phone", "email", "id_type", "id_type_display", "id_number",
                  "notes", "company", "is_active", "created_at", "updated_at"]


class PassengerWrite(serializers.Serializer):
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    gender = serializers.ChoiceField(choices=Passenger.Gender.choices, required=False, allow_blank=True, default="")
    birth_date = serializers.DateField(required=False, allow_null=True, default=None)
    phone = serializers.CharField(max_length=30)
    email = serializers.EmailField(required=False, allow_blank=True, default="")
    id_type = serializers.ChoiceField(choices=Passenger.IdType.choices, required=False, default=Passenger.IdType.CNI)
    id_number = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    notes = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
