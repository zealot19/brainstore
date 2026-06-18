from django.contrib import admin
from .models import City, Terminal, Route, RouteStop, VehicleCategory, FareClass, Fare


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ["name", "code", "region", "country", "is_active"]
    list_filter  = ["country", "is_active"]
    search_fields = ["name", "code", "region"]


@admin.register(Terminal)
class TerminalAdmin(admin.ModelAdmin):
    list_display  = ["name", "city", "company", "is_active"]
    list_filter   = ["company", "is_active"]
    search_fields = ["name", "city__name"]
    raw_id_fields = ["city"]


@admin.register(Route)
class RouteAdmin(admin.ModelAdmin):
    list_display  = ["name", "from_terminal", "to_terminal", "distance_km", "duration_minutes", "is_active"]
    list_filter   = ["company", "is_active"]
    search_fields = ["name", "from_terminal__city__name", "to_terminal__city__name"]
    raw_id_fields = ["from_terminal", "to_terminal"]


@admin.register(RouteStop)
class RouteStopAdmin(admin.ModelAdmin):
    list_display  = ["route", "stop_order", "terminal", "arrival_offset_minutes"]
    list_filter   = ["route"]
    raw_id_fields = ["route", "terminal"]


@admin.register(VehicleCategory)
class VehicleCategoryAdmin(admin.ModelAdmin):
    list_display  = ["name", "total_seats", "company", "has_wifi", "has_ac", "free_seating"]
    list_filter   = ["company"]
    search_fields = ["name"]


@admin.register(FareClass)
class FareClassAdmin(admin.ModelAdmin):
    list_display = ["name", "company", "is_active"]
    list_filter  = ["company", "is_active"]


@admin.register(Fare)
class FareAdmin(admin.ModelAdmin):
    list_display  = ["route", "vehicle_category", "fare_class", "passenger_type", "amount", "currency", "is_active"]
    list_filter   = ["company", "passenger_type", "is_active", "currency"]
    raw_id_fields = ["route", "vehicle_category", "fare_class"]
