from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import AppModule, Menu, Permission, Role, RolePermission, Profile, ProfileRole, UserRole, UserProfile


@admin.register(AppModule)
class AppModuleAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "parent", "order", "is_core", "is_active"]
    list_filter   = ["is_core", "is_active"]
    search_fields = ["code", "name"]
    ordering      = ["order"]


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display  = ["name", "module", "parent", "menu_type", "route", "order", "is_visible"]
    list_filter   = ["module", "menu_type", "is_visible"]
    search_fields = ["name", "route"]


class RolePermissionInline(admin.TabularInline):
    model  = RolePermission
    extra  = 0
    fields = ["permission", "granted_by", "granted_at"]
    readonly_fields = ["granted_at"]


@admin.register(Permission)
class PermissionAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "module", "category", "is_active"]
    list_filter   = ["module", "category"]
    search_fields = ["code", "name"]
    ordering      = ["module", "category", "code"]


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display  = ["name", "company", "is_system", "is_active"]
    list_filter   = ["is_system", "company"]
    search_fields = ["name"]
    inlines       = [RolePermissionInline]


class ProfileRoleInline(admin.TabularInline):
    model = ProfileRole
    extra = 0


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display  = ["name", "company", "is_default", "is_system", "is_active"]
    list_filter   = ["is_default", "is_system", "company"]
    search_fields = ["name"]
    inlines       = [ProfileRoleInline]


@admin.register(UserRole)
class UserRoleAdmin(admin.ModelAdmin):
    list_display  = ["user", "role", "company", "agency", "assigned_at", "expires_at"]
    list_filter   = ["company", "role"]
    search_fields = ["user__email", "role__name"]
    readonly_fields = ["assigned_at"]


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display  = ["user", "profile", "company", "assigned_at"]
    list_filter   = ["company"]
    readonly_fields = ["assigned_at"]
