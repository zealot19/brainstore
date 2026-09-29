from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import Plan, Company, Subscription, Agency, Parameter, FeatureFlag


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ["name", "tier", "max_users", "max_agencies", "price_monthly", "is_active"]
    list_filter  = ["tier", "is_active"]


class SubscriptionInline(admin.TabularInline):
    model = Subscription
    extra = 0
    fields = ["plan", "status", "billing_cycle", "started_at", "expires_at"]


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display  = ["name", "slug", "status", "plan", "country", "created_at"]
    list_filter   = ["status", "country", "plan"]
    search_fields = ["name", "slug", "tax_id", "rccm"]
    inlines       = [SubscriptionInline]
    readonly_fields = ["slug", "created_at", "updated_at"]


@admin.register(Agency)
class AgencyAdmin(admin.ModelAdmin):
    list_display  = ["name", "code", "company", "agency_type", "is_active"]
    list_filter   = ["company", "agency_type", "is_active"]
    search_fields = ["name", "code"]


@admin.register(Parameter)
class ParameterAdmin(admin.ModelAdmin):
    list_display  = ["key", "value", "data_type", "scope", "company", "is_active"]
    list_filter   = ["data_type", "scope", "company"]
    search_fields = ["key"]


@admin.register(FeatureFlag)
class FeatureFlagAdmin(admin.ModelAdmin):
    list_display  = ["key", "is_enabled", "company"]
    list_filter   = ["is_enabled", "company"]
    search_fields = ["key"]
