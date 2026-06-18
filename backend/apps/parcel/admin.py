from django.contrib import admin
from apps.parcel.models import Parcel, ParcelEvent


class ParcelEventInline(admin.TabularInline):
    model = ParcelEvent
    extra = 0
    readonly_fields = ("status", "location", "note", "created_by", "created_at")
    can_delete = False


@admin.register(Parcel)
class ParcelAdmin(admin.ModelAdmin):
    list_display  = (
        "reference", "sender_name", "recipient_name",
        "from_terminal", "to_terminal",
        "status", "payment_status", "shipping_amount", "company",
    )
    list_filter   = ("status", "payment_status", "company")
    search_fields = ("reference", "sender_name", "recipient_name",
                     "sender_phone", "recipient_phone")
    readonly_fields = ("reference", "paid_at", "created_at", "updated_at")
    inlines = [ParcelEventInline]


@admin.register(ParcelEvent)
class ParcelEventAdmin(admin.ModelAdmin):
    list_display  = ("parcel", "status", "location", "created_by", "created_at")
    list_filter   = ("status",)
    search_fields = ("parcel__reference",)
    readonly_fields = ("created_at",)
