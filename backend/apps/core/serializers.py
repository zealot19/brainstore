from rest_framework import serializers
from apps.core.models import AuditLog


class AuditLogSerializer(serializers.ModelSerializer):
    user_display = serializers.SerializerMethodField()
    company_name = serializers.SerializerMethodField()
    module_label = serializers.SerializerMethodField()
    action_label = serializers.SerializerMethodField()

    class Meta:
        model = AuditLog
        fields = [
            "id", "timestamp",
            "user", "user_display",
            "company", "company_name",
            "module", "module_label",
            "action", "action_label",
            "target_type", "target_id",
            "description",
            "device_id", "ip_address",
        ]

    def get_user_display(self, obj):
        if obj.user:
            return obj.user.get_full_name() or obj.user.email
        return None

    def get_company_name(self, obj):
        return obj.company.name if obj.company else None

    def get_module_label(self, obj):
        return obj.get_module_display()

    def get_action_label(self, obj):
        return obj.get_action_display()
