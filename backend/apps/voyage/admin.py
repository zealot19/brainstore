from django.contrib import admin
from apps.voyage.models import Trip, TripCrew


class TripCrewInline(admin.TabularInline):
    model = TripCrew
    extra = 0
    readonly_fields = ("created_at",)


@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
    list_display = (
        "reference", "route", "departure_datetime",
        "vehicle", "vehicle_category", "status", "company",
    )
    list_filter  = ("status", "company")
    search_fields = ("reference", "route__name", "vehicle__license_plate")
    readonly_fields = ("reference", "created_at", "updated_at")
    inlines = [TripCrewInline]


@admin.register(TripCrew)
class TripCrewAdmin(admin.ModelAdmin):
    list_display = ("trip", "user", "role")
    list_filter  = ("role",)
    search_fields = ("trip__reference", "user__last_name", "user__email")
