from rest_framework import serializers

from apps.sync_scig_sage.models import (
    Article, ArticleVariant,
    Depot, StockLevel,
    InventorySession, InventoryZone, InventoryLine, ZoneStatus,
    StockTransfer, StockTransferLine,
    LabelCampaign, LabelPrintJob,
    SyncLog, SyncQueue,
    SageConnection,
)


# ── SageConnection ────────────────────────────────────────────────────────────

class SageConnectionReadSerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source="company.name", read_only=True)

    class Meta:
        model = SageConnection
        fields = [
            "id", "company", "company_name",
            "server", "port", "database", "username",
            "is_active",
            "last_tested_at", "last_test_success", "last_test_error",
            "created_at", "updated_at",
        ]


class SageConnectionWriteSerializer(serializers.Serializer):
    server = serializers.CharField(max_length=255)
    port = serializers.IntegerField(min_value=1, max_value=65535, default=1433)
    database = serializers.CharField(max_length=100)
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(
        max_length=255, required=False, allow_blank=True, default="",
        write_only=True,
        style={"input_type": "password"},
    )
    is_active = serializers.BooleanField(default=True)


# ── Articles ──────────────────────────────────────────────────────────────────

class ArticleVariantSerializer(serializers.ModelSerializer):
    display_label = serializers.ReadOnlyField()

    class Meta:
        model = ArticleVariant
        fields = [
            "id", "sage_ref_variant", "size", "color", "color_code",
            "barcode", "price_normal", "price_sale", "is_active", "display_label",
        ]


class ArticleReadSerializer(serializers.ModelSerializer):
    variants = ArticleVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            "id", "sage_reference", "designation", "barcode",
            "family", "sub_family", "has_size_variant", "has_color_variant",
            "is_active", "last_synced_at", "variants",
        ]


class ArticleListSerializer(serializers.ModelSerializer):
    """Lightweight — no variants, for list views."""
    class Meta:
        model = Article
        fields = [
            "id", "sage_reference", "designation", "barcode",
            "family", "sub_family", "is_active",
        ]


class VariantSearchSerializer(serializers.ModelSerializer):
    article_reference = serializers.CharField(source="article.sage_reference", read_only=True)
    article_designation = serializers.CharField(source="article.designation", read_only=True)
    display_label = serializers.ReadOnlyField()

    class Meta:
        model = ArticleVariant
        fields = [
            "id", "sage_ref_variant", "barcode",
            "size", "color", "color_code",
            "price_normal", "price_sale",
            "article_reference", "article_designation", "display_label",
        ]


# ── Depots & Stock ────────────────────────────────────────────────────────────

class DepotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Depot
        fields = ["id", "sage_depot_no", "name", "is_active", "last_synced_at"]


class StockLevelSerializer(serializers.ModelSerializer):
    variant = ArticleVariantSerializer(read_only=True)
    depot_name = serializers.CharField(source="depot.name", read_only=True)

    class Meta:
        model = StockLevel
        fields = [
            "id", "variant", "depot_name",
            "stock_real", "stock_available", "stock_transit", "synced_at",
        ]


# ── Inventory ─────────────────────────────────────────────────────────────────

class InventorySessionWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    depot_id = serializers.UUIDField()
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class InventorySessionReadSerializer(serializers.ModelSerializer):
    depot_name = serializers.CharField(source="depot.name", read_only=True)
    zone_count = serializers.IntegerField(read_only=True, default=0)
    validated_count = serializers.IntegerField(read_only=True, default=0)
    all_zones_validated = serializers.ReadOnlyField()

    class Meta:
        model = InventorySession
        fields = [
            "id", "name", "depot_name", "status",
            "opened_at", "closed_at", "submitted_to_sage_at",
            "zone_count", "validated_count", "all_zones_validated", "notes",
        ]


class InventoryZoneWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)


class OpenZoneSerializer(serializers.Serializer):
    device_id = serializers.CharField(max_length=150)


class InventoryZoneReadSerializer(serializers.ModelSerializer):
    lines_count = serializers.IntegerField(read_only=True, default=0)
    total_counted = serializers.DecimalField(
        max_digits=12, decimal_places=3, read_only=True, default=0
    )
    locked_by_username = serializers.CharField(
        source="locked_by.get_full_name", read_only=True, default=""
    )

    class Meta:
        model = InventoryZone
        fields = [
            "id", "name", "status",
            "locked_by_device", "locked_by_username",
            "submitted_at", "validated_at", "recheck_note",
            "lines_count", "total_counted",
        ]


class ScanArticleSerializer(serializers.Serializer):
    barcode = serializers.CharField(max_length=50)
    qty = serializers.DecimalField(max_digits=8, decimal_places=3, default=1)


class ManualCountSerializer(serializers.Serializer):
    variant_id = serializers.UUIDField()
    qty = serializers.DecimalField(max_digits=8, decimal_places=3)


class RecheckZoneSerializer(serializers.Serializer):
    note = serializers.CharField(required=False, allow_blank=True, default="")


class InventoryLineSerializer(serializers.ModelSerializer):
    variant = ArticleVariantSerializer(read_only=True)
    article_reference = serializers.CharField(
        source="variant.article.sage_reference", read_only=True
    )
    article_designation = serializers.CharField(
        source="variant.article.designation", read_only=True
    )
    variance = serializers.ReadOnlyField()

    class Meta:
        model = InventoryLine
        fields = [
            "id", "article_reference", "article_designation", "variant",
            "qty_theoretical", "qty_counted", "variance",
            "is_manual", "last_scanned_at",
        ]


# ── Transfers ─────────────────────────────────────────────────────────────────

class TransferWriteSerializer(serializers.Serializer):
    source_depot_id = serializers.UUIDField()
    destination_depot_id = serializers.UUIDField()
    notes = serializers.CharField(required=False, allow_blank=True, default="")


class TransferScanSerializer(serializers.Serializer):
    barcode = serializers.CharField(max_length=50)
    qty = serializers.DecimalField(max_digits=8, decimal_places=3, default=1)


class TransferReceiveSerializer(serializers.Serializer):
    barcode = serializers.CharField(max_length=50)
    qty_received = serializers.DecimalField(max_digits=8, decimal_places=3, default=1)


class StockTransferLineSerializer(serializers.ModelSerializer):
    variant = ArticleVariantSerializer(read_only=True)
    article_designation = serializers.CharField(
        source="variant.article.designation", read_only=True
    )
    variance = serializers.ReadOnlyField()

    class Meta:
        model = StockTransferLine
        fields = [
            "id", "article_designation", "variant",
            "qty_planned", "qty_shipped", "qty_received", "variance",
        ]


class StockTransferReadSerializer(serializers.ModelSerializer):
    source_depot = DepotSerializer(read_only=True)
    destination_depot = DepotSerializer(read_only=True)
    lines = StockTransferLineSerializer(many=True, read_only=True)
    line_count = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model = StockTransfer
        fields = [
            "id", "reference", "status",
            "source_depot", "destination_depot",
            "notes", "line_count", "lines",
            "validated_at", "shipped_at", "received_at",
            "created_at",
        ]


class StockTransferListSerializer(serializers.ModelSerializer):
    source_depot_name = serializers.CharField(source="source_depot.name", read_only=True)
    destination_depot_name = serializers.CharField(
        source="destination_depot.name", read_only=True
    )
    line_count = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model = StockTransfer
        fields = [
            "id", "reference", "status",
            "source_depot_name", "destination_depot_name",
            "line_count", "created_at",
        ]


# ── Labels ────────────────────────────────────────────────────────────────────

class LabelCampaignReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabelCampaign
        fields = [
            "id", "name", "description",
            "discount_percent", "starts_at", "ends_at", "is_active",
        ]


class LabelCampaignWriteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    description = serializers.CharField(required=False, allow_blank=True, default="")
    discount_percent = serializers.DecimalField(
        max_digits=5, decimal_places=2, required=False, allow_null=True
    )
    starts_at = serializers.DateTimeField(required=False, allow_null=True)
    ends_at = serializers.DateTimeField(required=False, allow_null=True)


class PrintJobWriteSerializer(serializers.Serializer):
    variant_ids = serializers.ListField(child=serializers.UUIDField(), min_length=1)
    qty_per_variant = serializers.DictField(
        child=serializers.IntegerField(min_value=1),
        required=False,
        default=dict,
    )
    print_type = serializers.ChoiceField(
        choices=LabelPrintJob.PrintType.choices,
        default=LabelPrintJob.PrintType.NORMAL,
    )
    campaign_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    device_id = serializers.CharField(required=False, allow_blank=True, default="")


class LabelPrintJobSerializer(serializers.ModelSerializer):
    campaign_name = serializers.CharField(
        source="campaign.name", read_only=True, default=""
    )

    class Meta:
        model = LabelPrintJob
        fields = [
            "id", "campaign_name", "print_type",
            "print_data", "device_id", "printed_at", "total_labels",
        ]


# ── Sync ──────────────────────────────────────────────────────────────────────

class SyncLogSerializer(serializers.ModelSerializer):
    triggered_by_name = serializers.CharField(
        source="triggered_by.get_full_name", read_only=True, default="System"
    )

    class Meta:
        model = SyncLog
        fields = [
            "id", "sync_type", "status",
            "started_at", "finished_at",
            "records_read", "records_created",
            "records_updated", "records_failed",
            "error_message", "triggered_by_name",
        ]


class SyncTriggerSerializer(serializers.Serializer):
    sync_type = serializers.ChoiceField(
        choices=SyncLog.SyncType.choices,
        default=SyncLog.SyncType.FULL,
    )


class QueuePushSerializer(serializers.Serializer):
    device_id = serializers.CharField(max_length=150)
    operations = serializers.ListField(
        child=serializers.DictField(), min_length=1
    )

    def validate_operations(self, ops):
        required_keys = {"device_operation_id", "operation_type", "device_timestamp", "payload"}
        for i, op in enumerate(ops):
            missing = required_keys - set(op.keys())
            if missing:
                raise serializers.ValidationError(
                    f"Opération #{i}: champs manquants: {', '.join(missing)}"
                )
        return ops
