from rest_framework import serializers
from apps.partners.models import Partner


class PartnerReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["id", "code", "name", "postal_number", "phone", "email",
                  "address", "tax_number", "is_active", "created_at", "updated_at"]


class PartnerWriteSerializer(serializers.Serializer):
    code          = serializers.CharField(max_length=40)
    name          = serializers.CharField(max_length=200)
    postal_number = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
    phone         = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
    email         = serializers.EmailField(required=False, allow_blank=True, default="")
    address       = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    tax_number    = serializers.CharField(max_length=60, required=False, allow_blank=True, default="")
    is_active     = serializers.BooleanField(required=False, default=True)
