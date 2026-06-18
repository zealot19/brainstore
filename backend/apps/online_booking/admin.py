from django.contrib import admin
from apps.online_booking.models import OnlineBookingRequest


@admin.register(OnlineBookingRequest)
class OnlineBookingRequestAdmin(admin.ModelAdmin):
    list_display  = (
        "passenger_name", "passenger_phone", "trip",
        "amount", "payment_method", "status",
        "payment_reference", "expires_at", "company",
    )
    list_filter   = ("status", "payment_method", "company")
    search_fields = ("passenger_name", "passenger_phone", "payment_reference")
    readonly_fields = ("payment_reference", "payment_operator_ref",
                       "expires_at", "booking", "created_at", "updated_at")
