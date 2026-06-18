from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from .models import UserSession

User = get_user_model()


# ── Input serializers ─────────────────────────────────────────────────────────

class LoginInputSerializer(serializers.Serializer):
    email    = serializers.EmailField(label=_("Email"))
    password = serializers.CharField(label=_("Mot de passe"), write_only=True)


class RefreshInputSerializer(serializers.Serializer):
    refresh = serializers.CharField(label=_("Token de rafraîchissement"))


class LogoutInputSerializer(serializers.Serializer):
    refresh = serializers.CharField(label=_("Token de rafraîchissement"))


class TOTPSetupVerifySerializer(serializers.Serializer):
    code = serializers.CharField(label=_("Code TOTP"), max_length=6, min_length=6)


class TOTPLoginVerifySerializer(serializers.Serializer):
    code    = serializers.CharField(label=_("Code TOTP"), max_length=6, min_length=6)
    user_id = serializers.UUIDField(label=_("ID utilisateur"))


class TOTPDisableSerializer(serializers.Serializer):
    password = serializers.CharField(label=_("Mot de passe"), write_only=True)


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(label=_("Ancien mot de passe"), write_only=True)
    new_password = serializers.CharField(label=_("Nouveau mot de passe"), write_only=True, min_length=8)
    confirm_password = serializers.CharField(label=_("Confirmation"), write_only=True)

    def validate(self, attrs):
        if attrs["new_password"] != attrs["confirm_password"]:
            raise serializers.ValidationError({"confirm_password": _("Les mots de passe ne correspondent pas.")})
        return attrs


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(label=_("Email"))


class PasswordResetConfirmSerializer(serializers.Serializer):
    token        = serializers.CharField(label=_("Token de réinitialisation"))
    new_password = serializers.CharField(label=_("Nouveau mot de passe"), write_only=True, min_length=8)
    confirm_password = serializers.CharField(label=_("Confirmation"), write_only=True)

    def validate(self, attrs):
        if attrs["new_password"] != attrs["confirm_password"]:
            raise serializers.ValidationError({"confirm_password": _("Les mots de passe ne correspondent pas.")})
        return attrs


# ── Output serializers ────────────────────────────────────────────────────────

class UserCompactSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = [
            "id", "email", "username", "full_name", "phone", "avatar",
            "job_title", "language_code", "timezone",
            "is_institution_admin", "is_agency_admin",
            "is_2fa_enabled", "must_change_password",
            "company", "default_agency",
        ]

    def get_full_name(self, obj):
        return obj.get_full_name()


class UserProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = [
            "id", "email", "username", "first_name", "last_name", "full_name",
            "phone", "avatar", "job_title", "language_code", "timezone",
            "is_institution_admin", "is_agency_admin",
            "is_2fa_enabled", "must_change_password",
            "company", "default_agency",
            "last_login", "date_joined",
        ]
        read_only_fields = [
            "id", "email", "is_institution_admin", "is_agency_admin",
            "is_2fa_enabled", "must_change_password",
            "last_login", "date_joined", "company", "default_agency",
        ]

    def get_full_name(self, obj):
        return obj.get_full_name()


class TokenOutputSerializer(serializers.Serializer):
    access        = serializers.CharField()
    refresh       = serializers.CharField()
    user          = UserCompactSerializer()
    requires_2fa  = serializers.BooleanField(default=False)


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model  = UserSession
        fields = ["id", "ip_address", "device", "user_agent", "last_activity", "created_at", "expires_at", "is_active"]
