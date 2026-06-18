from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from .models import AppModule, Menu, Permission, Role, Profile, UserRole, UserProfile


# ═══════════════════════════════════════════════════════════════════════════════
# APP MODULE
# ═══════════════════════════════════════════════════════════════════════════════

class AppModuleSerializer(serializers.ModelSerializer):
    parent_name = serializers.CharField(source="parent.name", read_only=True)

    class Meta:
        model  = AppModule
        fields = ["id", "code", "name", "description", "icon", "order",
                  "parent", "parent_name", "is_core", "is_active"]
        read_only_fields = ["id"]


class AppModuleWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = AppModule
        fields = ["code", "name", "description", "icon", "order", "parent", "is_core"]


class AppModuleTreeSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model  = AppModule
        fields = ["id", "code", "name", "icon", "order", "is_core", "is_active", "children"]

    def get_children(self, obj):
        return AppModuleTreeSerializer(obj.children.filter(is_deleted=False), many=True).data


# ═══════════════════════════════════════════════════════════════════════════════
# MENU
# ═══════════════════════════════════════════════════════════════════════════════

class MenuSerializer(serializers.ModelSerializer):
    module_name = serializers.CharField(source="module.name", read_only=True)
    parent_name = serializers.CharField(source="parent.name", read_only=True)

    class Meta:
        model  = Menu
        fields = ["id", "module", "module_name", "parent", "parent_name",
                  "name", "menu_type", "route", "icon", "order", "is_visible", "is_active"]
        read_only_fields = ["id"]


class MenuWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Menu
        fields = ["module", "parent", "name", "menu_type", "route", "icon", "order", "is_visible"]


class MenuTreeSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model  = Menu
        fields = ["id", "name", "menu_type", "route", "icon", "order", "is_visible", "children"]

    def get_children(self, obj):
        return MenuTreeSerializer(obj.children.filter(is_deleted=False), many=True).data


# ═══════════════════════════════════════════════════════════════════════════════
# PERMISSION
# ═══════════════════════════════════════════════════════════════════════════════

class PermissionSerializer(serializers.ModelSerializer):
    module_name = serializers.CharField(source="module.name", read_only=True)
    module_code = serializers.CharField(source="module.code", read_only=True)

    class Meta:
        model  = Permission
        fields = ["id", "module", "module_code", "module_name",
                  "code", "name", "description", "category", "is_active"]
        read_only_fields = ["id"]


class PermissionWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Permission
        fields = ["module", "code", "name", "description", "category"]


class PermissionBulkSerializer(serializers.Serializer):
    class _Item(serializers.Serializer):
        code        = serializers.CharField()
        name        = serializers.CharField()
        description = serializers.CharField(required=False, default="")
        category    = serializers.ChoiceField(
            choices=Permission.Category.choices, default=Permission.Category.VIEW
        )
    module_id = serializers.UUIDField()
    items     = serializers.ListField(child=_Item())


# ═══════════════════════════════════════════════════════════════════════════════
# ROLE
# ═══════════════════════════════════════════════════════════════════════════════

class RoleCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Role
        fields = ["id", "name", "is_system"]


class RoleSerializer(serializers.ModelSerializer):
    from apps.system_config.models import Company
    company_name = serializers.CharField(source="company.name", read_only=True)
    permissions  = PermissionSerializer(many=True, read_only=True)

    class Meta:
        model  = Role
        fields = ["id", "company", "company_name", "name", "description",
                  "is_system", "is_active", "permissions"]
        read_only_fields = ["id"]


class RoleWriteSerializer(serializers.ModelSerializer):
    from apps.system_config.models import Company
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), required=False, allow_null=True, default=None
    )

    class Meta:
        model  = Role
        fields = ["company", "name", "description"]


class RoleSetPermissionsSerializer(serializers.Serializer):
    permission_ids = serializers.ListField(child=serializers.UUIDField())


# ═══════════════════════════════════════════════════════════════════════════════
# PROFILE
# ═══════════════════════════════════════════════════════════════════════════════

class ProfileSerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source="company.name", read_only=True)
    roles        = RoleCompactSerializer(many=True, read_only=True)

    class Meta:
        model  = Profile
        fields = ["id", "company", "company_name", "name", "description",
                  "is_default", "is_system", "is_active", "roles"]
        read_only_fields = ["id"]


class ProfileWriteSerializer(serializers.ModelSerializer):
    from apps.system_config.models import Company
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), required=False, allow_null=True, default=None
    )

    class Meta:
        model  = Profile
        fields = ["company", "name", "description", "is_default"]


class ProfileSetRolesSerializer(serializers.Serializer):
    role_ids = serializers.ListField(child=serializers.UUIDField())


# ═══════════════════════════════════════════════════════════════════════════════
# USER ROLE / PROFILE
# ═══════════════════════════════════════════════════════════════════════════════

class UserRoleSerializer(serializers.ModelSerializer):
    role_name    = serializers.CharField(source="role.name", read_only=True)
    company_name = serializers.CharField(source="company.name", read_only=True)
    agency_name  = serializers.CharField(source="agency.name", read_only=True)
    is_expired   = serializers.BooleanField(read_only=True)

    class Meta:
        model  = UserRole
        fields = ["id", "role", "role_name", "company", "company_name",
                  "agency", "agency_name", "assigned_at", "expires_at", "is_expired"]


class UserRoleAssignSerializer(serializers.Serializer):
    role_id    = serializers.UUIDField()
    company_id = serializers.UUIDField()
    agency_id  = serializers.UUIDField(required=False, allow_null=True, default=None)
    expires_at = serializers.DateTimeField(required=False, allow_null=True, default=None)


class UserRoleRevokeSerializer(serializers.Serializer):
    role_id    = serializers.UUIDField()
    company_id = serializers.UUIDField()
    agency_id  = serializers.UUIDField(required=False, allow_null=True, default=None)


class UserProfileSerializer(serializers.ModelSerializer):
    profile_name = serializers.CharField(source="profile.name", read_only=True)
    company_name = serializers.CharField(source="company.name", read_only=True)

    class Meta:
        model  = UserProfile
        fields = ["id", "profile", "profile_name", "company", "company_name", "assigned_at"]


class UserProfileAssignSerializer(serializers.Serializer):
    profile_id = serializers.UUIDField()
    company_id = serializers.UUIDField()
