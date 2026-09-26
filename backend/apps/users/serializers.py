from rest_framework import serializers
from django.contrib.auth import get_user_model

from apps.authentication.models import UserAgency

User = get_user_model()


# ── Serializers de lecture ──────────────────────────────────────────────────────

class UserAgencyReadSerializer(serializers.ModelSerializer):
    agency_id   = serializers.UUIDField(source="agency.id",   read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True)
    agency_code = serializers.CharField(source="agency.code", read_only=True)

    class Meta:
        model  = UserAgency
        fields = ["agency_id", "agency_name", "agency_code", "is_default", "joined_at"]


class UserListSerializer(serializers.ModelSerializer):
    full_name           = serializers.SerializerMethodField()
    company_name        = serializers.CharField(source="company.name",         read_only=True, default=None)
    default_agency_name = serializers.CharField(source="default_agency.name",  read_only=True, default=None)
    is_locked           = serializers.BooleanField(read_only=True)
    current_profile     = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = [
            "id", "email", "username", "full_name",
            "first_name", "last_name",
            "company_id", "company_name",
            "default_agency_id", "default_agency_name",
            "phone", "job_title", "avatar",
            "is_active", "is_institution_admin", "is_agency_admin",
            "is_locked", "must_change_password", "is_2fa_enabled",
            "last_login", "date_joined",
            "current_profile",
        ]

    def get_full_name(self, obj):
        return obj.get_full_name() or obj.email

    def get_current_profile(self, obj):
        up = next(iter(obj.user_profiles.all()), None)
        if up:
            return {"id": str(up.profile.id), "name": up.profile.name}
        return None


class UserDetailSerializer(UserListSerializer):
    agencies = UserAgencyReadSerializer(source="user_agencies", many=True, read_only=True)

    class Meta(UserListSerializer.Meta):
        fields = UserListSerializer.Meta.fields + [
            "language_code", "timezone",
            "failed_login_attempts", "locked_until",
            "password_changed_at", "last_login_ip",
            "agencies",
        ]


# ── Serializers d'écriture ─────────────────────────────────────────────────────

class UserCreateSerializer(serializers.Serializer):
    email                = serializers.EmailField(required=False, allow_blank=True, default="")
    username             = serializers.CharField(max_length=150)
    first_name           = serializers.CharField(max_length=150)
    last_name            = serializers.CharField(max_length=150)
    phone                = serializers.CharField(max_length=30,  required=False, default="", allow_blank=True)
    job_title            = serializers.CharField(max_length=150, required=False, default="", allow_blank=True)
    is_institution_admin = serializers.BooleanField(required=False, default=False)
    is_agency_admin      = serializers.BooleanField(required=False, default=False)
    # company_id uniquement pour SuperAdmin ; ignoré pour InstitutionAdmin (sa propre company est utilisée)
    company_id           = serializers.UUIDField(required=False, allow_null=True, default=None)
    default_agency_id    = serializers.UUIDField(required=False, allow_null=True, default=None)
    agency_ids           = serializers.ListField(child=serializers.UUIDField(), required=False, default=list)
    language_code        = serializers.CharField(max_length=10, required=False, default="fr")
    timezone             = serializers.CharField(max_length=50, required=False, default="Africa/Abidjan")
    # Mot de passe temporaire optionnel — auto-généré si absent
    temp_password        = serializers.CharField(max_length=128, required=False, allow_null=True,
                                                 default=None, write_only=True)


class UserUpdateSerializer(serializers.Serializer):
    username             = serializers.CharField(max_length=150, required=False)
    first_name           = serializers.CharField(max_length=150, required=False)
    last_name            = serializers.CharField(max_length=150, required=False)
    phone                = serializers.CharField(max_length=30,  required=False, allow_blank=True)
    job_title            = serializers.CharField(max_length=150, required=False, allow_blank=True)
    is_institution_admin = serializers.BooleanField(required=False)
    is_agency_admin      = serializers.BooleanField(required=False)
    language_code        = serializers.CharField(max_length=10,  required=False)
    timezone             = serializers.CharField(max_length=50,  required=False)
    default_agency_id    = serializers.UUIDField(required=False, allow_null=True)


class AdminResetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(min_length=8, write_only=True)
    must_change  = serializers.BooleanField(required=False, default=True)


class UserAgencyAssignSerializer(serializers.Serializer):
    agency_ids        = serializers.ListField(child=serializers.UUIDField(), min_length=0)
    default_agency_id = serializers.UUIDField(required=False, allow_null=True, default=None)
