from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import Address, Currency, ExchangeRate, UnitOfMeasureCategory, UnitOfMeasure, Sequence


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ["line1", "city", "country", "is_active"]
    search_fields = ["line1", "city", "country"]
    list_filter = ["country", "is_active"]


@admin.register(Currency)
class CurrencyAdmin(admin.ModelAdmin):
    list_display = ["code", "name", "symbol", "decimal_places", "is_active"]
    search_fields = ["code", "name"]


@admin.register(ExchangeRate)
class ExchangeRateAdmin(admin.ModelAdmin):
    list_display = ["from_currency", "to_currency", "rate", "valid_on"]
    list_filter = ["from_currency", "to_currency"]
    date_hierarchy = "valid_on"


@admin.register(UnitOfMeasureCategory)
class UoMCategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "is_active"]


@admin.register(UnitOfMeasure)
class UoMAdmin(admin.ModelAdmin):
    list_display = ["name", "symbol", "category", "factor", "is_reference", "is_active"]
    list_filter = ["category"]


@admin.register(Sequence)
class SequenceAdmin(admin.ModelAdmin):
    list_display = ["code", "name", "prefix", "next_number", "reset_yearly", "is_active"]
    search_fields = ["code", "name"]
