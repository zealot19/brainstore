from django.contrib import admin
from apps.sync_scig_sage.models import (
    Article, ArticleVariant,
    Depot, StockLevel,
    InventorySession, InventoryZone, InventoryLine,
    StockTransfer, StockTransferLine,
    LabelCampaign, LabelPrintJob,
    SyncLog, SyncQueue,
    SageConnection,
)


class ArticleVariantInline(admin.TabularInline):
    model = ArticleVariant
    extra = 0
    fields = ("sage_ref_variant", "size", "color", "barcode", "price_normal", "price_sale", "is_active")
    readonly_fields = ("sage_ref_variant",)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("sage_reference", "designation", "family", "sub_family", "is_active", "company", "last_synced_at")
    list_filter = ("company", "is_active", "family", "has_size_variant", "has_color_variant")
    search_fields = ("sage_reference", "designation", "barcode")
    readonly_fields = ("last_synced_at",)
    inlines = [ArticleVariantInline]


@admin.register(Depot)
class DepotAdmin(admin.ModelAdmin):
    list_display = ("name", "sage_depot_no", "is_active", "company", "last_synced_at")
    list_filter = ("company", "is_active")
    search_fields = ("name",)


@admin.register(StockLevel)
class StockLevelAdmin(admin.ModelAdmin):
    list_display = ("variant", "depot", "stock_real", "stock_available", "stock_transit", "synced_at")
    list_filter = ("depot__company", "depot")
    search_fields = ("variant__sage_ref_variant", "variant__article__sage_reference")
    readonly_fields = ("synced_at",)


class InventoryZoneInline(admin.TabularInline):
    model = InventoryZone
    extra = 0
    fields = ("name", "status", "locked_by_device", "submitted_at", "validated_at")
    readonly_fields = ("submitted_at", "validated_at")


@admin.register(InventorySession)
class InventorySessionAdmin(admin.ModelAdmin):
    list_display = ("name", "depot", "status", "opened_at", "closed_at", "company")
    list_filter = ("company", "status", "depot")
    search_fields = ("name",)
    readonly_fields = ("submitted_to_sage_at", "closed_at")
    inlines = [InventoryZoneInline]


@admin.register(InventoryZone)
class InventoryZoneAdmin(admin.ModelAdmin):
    list_display = ("name", "session", "status", "locked_by_device", "submitted_at", "validated_at")
    list_filter = ("status", "session__company")
    search_fields = ("name", "session__name")


@admin.register(InventoryLine)
class InventoryLineAdmin(admin.ModelAdmin):
    list_display = ("zone", "variant", "qty_theoretical", "qty_counted", "is_manual", "last_scanned_at")
    list_filter = ("is_manual", "zone__session__company")
    search_fields = ("variant__sage_ref_variant", "zone__name")
    readonly_fields = ("last_scanned_at",)


class StockTransferLineInline(admin.TabularInline):
    model = StockTransferLine
    extra = 0
    fields = ("variant", "qty_planned", "qty_shipped", "qty_received")


@admin.register(StockTransfer)
class StockTransferAdmin(admin.ModelAdmin):
    list_display = ("reference", "source_depot", "destination_depot", "status", "created_at", "company")
    list_filter = ("company", "status", "source_depot", "destination_depot")
    search_fields = ("reference",)
    readonly_fields = ("reference", "validated_at", "shipped_at", "received_at")
    inlines = [StockTransferLineInline]


@admin.register(LabelCampaign)
class LabelCampaignAdmin(admin.ModelAdmin):
    list_display = ("name", "discount_percent", "is_active", "starts_at", "ends_at", "company")
    list_filter = ("company", "is_active")
    search_fields = ("name",)


@admin.register(LabelPrintJob)
class LabelPrintJobAdmin(admin.ModelAdmin):
    list_display = ("id", "print_type", "campaign", "total_labels", "device_id", "printed_at")
    list_filter = ("print_type", "company")
    readonly_fields = ("printed_at", "print_data")


@admin.register(SyncLog)
class SyncLogAdmin(admin.ModelAdmin):
    list_display = ("sync_type", "status", "company", "started_at", "finished_at",
                    "records_read", "records_created", "records_updated", "records_failed")
    list_filter = ("company", "sync_type", "status")
    readonly_fields = (
        "started_at", "finished_at", "records_read", "records_created",
        "records_updated", "records_failed", "error_message",
    )


@admin.register(SyncQueue)
class SyncQueueAdmin(admin.ModelAdmin):
    list_display = ("operation_type", "status", "device_id", "device_timestamp", "processed_at", "company")
    list_filter = ("company", "operation_type", "status")
    search_fields = ("device_operation_id", "device_id")
    readonly_fields = ("device_operation_id", "device_timestamp", "payload", "processed_at")


@admin.register(SageConnection)
class SageConnectionAdmin(admin.ModelAdmin):
    list_display = ("company", "server", "port", "database", "username", "is_active", "last_test_success", "last_tested_at")
    list_filter = ("is_active", "last_test_success")
    search_fields = ("company__name", "server", "database")
    readonly_fields = ("last_tested_at", "last_test_success", "last_test_error")
    exclude = ("_password_encrypted",)

    def save_model(self, request, obj, form, change):
        password = request.POST.get("password_plain", "")
        if password:
            obj.password = password
        super().save_model(request, obj, form, change)
