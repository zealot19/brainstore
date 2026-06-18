from django.contrib import admin
from apps.ticketing.models import Customer, Booking, Ticket, Luggage


class LuggageInline(admin.TabularInline):
    model = Luggage
    extra = 0
    readonly_fields = ("tag_number", "created_at")


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display  = ("full_name", "phone", "email", "id_type", "company")
    list_filter   = ("id_type", "company")
    search_fields = ("first_name", "last_name", "phone", "id_number")


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display  = ("reference", "customer", "trip", "status", "amount_paid", "company")
    list_filter   = ("status", "passenger_type", "company")
    search_fields = ("reference", "customer__last_name", "trip__reference")
    readonly_fields = ("reference", "created_at", "updated_at")
    inlines = [LuggageInline]


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display  = ("ticket_number", "booking", "is_used", "issued_at")
    list_filter   = ("is_used",)
    search_fields = ("ticket_number", "booking__reference")
    readonly_fields = ("ticket_number", "qr_code", "issued_at")


@admin.register(Luggage)
class LuggageAdmin(admin.ModelAdmin):
    list_display  = ("tag_number", "booking", "status", "weight_kg")
    list_filter   = ("status",)
    search_fields = ("tag_number", "booking__reference")
    readonly_fields = ("tag_number",)
