from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User, UserAgency, UserSession, LoginAttempt, PasswordResetToken


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display  = ("email", "username", "company", "default_agency", "is_active", "is_institution_admin", "is_2fa_enabled")
    list_filter   = ("is_active", "is_staff", "is_superuser", "is_institution_admin", "is_2fa_enabled")
    search_fields = ("email", "username", "first_name", "last_name")
    ordering      = ("-date_joined",)

    fieldsets = BaseUserAdmin.fieldsets + (
        (_("Tenant"), {"fields": ("company", "default_agency")}),
        (_("Profil"), {"fields": ("phone", "avatar", "job_title", "language_code", "timezone")}),
        (_("Rôles ERP"), {"fields": ("is_institution_admin", "is_agency_admin")}),
        (_("Sécurité"), {"fields": ("is_2fa_enabled", "totp_secret", "must_change_password", "password_changed_at", "failed_login_attempts", "locked_until", "last_login_ip")}),
    )
    readonly_fields = ("password_changed_at", "last_login_ip")
    # agencies est géré via l'inline UserAgency (M2M avec through model)


@admin.register(UserSession)
class UserSessionAdmin(admin.ModelAdmin):
    list_display  = ("user", "ip_address", "is_active", "created_at", "expires_at")
    list_filter   = ("is_active",)
    search_fields = ("user__email", "ip_address")
    readonly_fields = ("jti", "created_at")


@admin.register(LoginAttempt)
class LoginAttemptAdmin(admin.ModelAdmin):
    list_display  = ("email", "ip_address", "success", "failure_reason", "attempted_at")
    list_filter   = ("success",)
    search_fields = ("email", "ip_address")
    readonly_fields = tuple(f.name for f in LoginAttempt._meta.fields)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False


@admin.register(PasswordResetToken)
class PasswordResetTokenAdmin(admin.ModelAdmin):
    list_display  = ("user", "expires_at", "used_at", "is_valid")
    readonly_fields = ("token", "expires_at", "used_at")

    def is_valid(self, obj):
        return obj.is_valid
    is_valid.boolean = True
