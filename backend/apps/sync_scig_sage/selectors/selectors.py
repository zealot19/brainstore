from django.db.models import Q, Sum, Count, F, OuterRef, Subquery, DecimalField
from django.db.models.functions import Coalesce

from apps.sync_scig_sage.models import (
    Article, ArticleVariant,
    Depot, StockLevel,
    InventorySession, InventoryZone, InventoryLine, ZoneStatus,
    StockTransfer, StockTransferLine,
    LabelCampaign, LabelPrintJob,
    SyncLog, SyncQueue,
)


# ── Articles ──────────────────────────────────────────────────────────────────

def get_articles(company, search: str = "", family: str = "", active_only: bool = True):
    qs = Article.objects.filter(company=company, is_deleted=False)
    if active_only:
        qs = qs.filter(is_active=True)
    if family:
        qs = qs.filter(family__iexact=family)
    if search:
        qs = qs.filter(
            Q(sage_reference__icontains=search)
            | Q(designation__icontains=search)
            | Q(barcode__icontains=search)
        )
    return qs.prefetch_related("variants")


def get_article_by_id(company, article_id):
    return Article.objects.filter(
        id=article_id, company=company, is_deleted=False
    ).prefetch_related("variants__stock_levels__depot").first()


def search_variants(company, query: str):
    """
    Search variants by barcode, article reference, color code, or size.
    Used by mobile for label printing and stock lookup.
    """
    return (
        ArticleVariant.objects.filter(
            article__company=company,
            is_deleted=False,
            is_active=True,
        )
        .filter(
            Q(barcode__icontains=query)
            | Q(sage_ref_variant__icontains=query)
            | Q(article__sage_reference__icontains=query)
            | Q(color_code__icontains=query)
            | Q(size__icontains=query)
            | Q(color__icontains=query)
        )
        .select_related("article")
        .prefetch_related("stock_levels__depot")
    )


# ── Depots & Stock ────────────────────────────────────────────────────────────

def get_depots(company, active_only: bool = True):
    qs = Depot.objects.filter(company=company, is_deleted=False)
    if active_only:
        qs = qs.filter(is_active=True)
    return qs.order_by("name")


def get_depot_stock(depot_id, search: str = ""):
    qs = StockLevel.objects.filter(
        depot_id=depot_id,
        variant__is_deleted=False,
    ).select_related("variant__article", "depot")
    if search:
        qs = qs.filter(
            Q(variant__article__sage_reference__icontains=search)
            | Q(variant__article__designation__icontains=search)
            | Q(variant__barcode__icontains=search)
            | Q(variant__size__icontains=search)
            | Q(variant__color__icontains=search)
        )
    return qs.order_by("variant__article__designation", "variant__size", "variant__color")


def get_critical_stock(company, threshold: float = 0.0):
    """Variants with stock_available <= threshold across all depots."""
    return (
        StockLevel.objects.filter(
            depot__company=company,
            stock_available__lte=threshold,
            variant__is_deleted=False,
        )
        .select_related("variant__article", "depot")
        .order_by("stock_available")
    )


# ── Inventory Sessions ────────────────────────────────────────────────────────

def get_inventory_sessions(company, status: str = "", depot_id=None):
    qs = InventorySession.objects.filter(company=company, is_deleted=False)
    if status:
        qs = qs.filter(status=status)
    if depot_id:
        qs = qs.filter(depot_id=depot_id)
    return qs.select_related("depot", "created_by").annotate(
        zone_count=Count("zones", filter=Q(zones__is_deleted=False)),
        validated_count=Count(
            "zones",
            filter=Q(zones__is_deleted=False, zones__status=ZoneStatus.VALIDATED),
        ),
    ).order_by("-opened_at")


def get_inventory_session_detail(session_id):
    return (
        InventorySession.objects.filter(id=session_id, is_deleted=False)
        .select_related("depot", "created_by", "submitted_by")
        .prefetch_related("zones")
        .first()
    )


def get_inventory_zones(session_id):
    return (
        InventoryZone.objects.filter(session_id=session_id, is_deleted=False)
        .select_related("locked_by", "validated_by")
        .annotate(
            lines_count=Count("lines", filter=Q(lines__is_deleted=False)),
            total_counted=Coalesce(
                Sum("lines__qty_counted", filter=Q(lines__is_deleted=False)),
                0,
                output_field=DecimalField(),
            ),
        )
        .order_by("name")
    )


def get_zone_lines_with_comparison(zone_id):
    """Returns inventory lines with qty_theoretical, qty_counted, and variance."""
    return (
        InventoryLine.objects.filter(zone_id=zone_id, is_deleted=False)
        .select_related("variant__article")
        .order_by("variant__article__designation", "variant__size", "variant__color")
    )


def get_inventory_report(session_id):
    """Full report data: all zones + lines for a session."""
    return (
        InventoryLine.objects.filter(
            zone__session_id=session_id,
            zone__is_deleted=False,
            is_deleted=False,
        )
        .select_related(
            "zone", "variant__article", "variant"
        )
        .order_by("zone__name", "variant__article__designation", "variant__size")
    )


# ── Transfers ─────────────────────────────────────────────────────────────────

def get_transfers(company, status: str = "", source_depot_id=None, dest_depot_id=None):
    qs = StockTransfer.objects.filter(company=company, is_deleted=False)
    if status:
        qs = qs.filter(status=status)
    if source_depot_id:
        qs = qs.filter(source_depot_id=source_depot_id)
    if dest_depot_id:
        qs = qs.filter(destination_depot_id=dest_depot_id)
    return qs.select_related(
        "source_depot", "destination_depot", "created_by"
    ).annotate(
        line_count=Count("lines", filter=Q(lines__is_deleted=False))
    ).order_by("-created_at")


def get_transfer_detail(transfer_id):
    return (
        StockTransfer.objects.filter(id=transfer_id, is_deleted=False)
        .select_related(
            "source_depot", "destination_depot",
            "validated_by", "shipped_by", "received_by",
        )
        .prefetch_related("lines__variant__article")
        .first()
    )


# ── Labels ────────────────────────────────────────────────────────────────────

def get_label_campaigns(company, active_only: bool = False):
    qs = LabelCampaign.objects.filter(company=company, is_deleted=False)
    if active_only:
        qs = qs.filter(is_active=True)
    return qs.order_by("-created_at")


def get_print_jobs(company, campaign_id=None):
    qs = LabelPrintJob.objects.filter(company=company, is_deleted=False)
    if campaign_id:
        qs = qs.filter(campaign_id=campaign_id)
    return qs.select_related("campaign", "created_by").order_by("-created_at")


# ── Sync ──────────────────────────────────────────────────────────────────────

def get_sync_logs(company, sync_type: str = "", status: str = ""):
    qs = SyncLog.objects.filter(company=company)
    if sync_type:
        qs = qs.filter(sync_type=sync_type)
    if status:
        qs = qs.filter(status=status)
    return qs.select_related("triggered_by").order_by("-started_at")


def get_queue_items(company, status: str = "PENDING"):
    qs = SyncQueue.objects.filter(company=company, is_deleted=False)
    if status:
        qs = qs.filter(status=status)
    return qs.order_by("device_timestamp")


# ── Dashboard stats ───────────────────────────────────────────────────────────

def get_dashboard_stats(company) -> dict:
    open_sessions = InventorySession.objects.filter(
        company=company,
        status=InventorySession.Status.OPEN,
        is_deleted=False,
    ).count()

    pending_transfers = StockTransfer.objects.filter(
        company=company,
        status__in=[StockTransfer.Status.VALIDATED, StockTransfer.Status.SHIPPED],
        is_deleted=False,
    ).count()

    critical_stock_count = (
        StockLevel.objects.filter(
            depot__company=company,
            stock_available__lte=0,
            variant__is_deleted=False,
        ).count()
    )

    last_sync = (
        SyncLog.objects.filter(
            company=company, status=SyncLog.Status.SUCCESS
        )
        .order_by("-finished_at")
        .values("finished_at", "sync_type")
        .first()
    )

    return {
        "open_inventory_sessions": open_sessions,
        "pending_transfers": pending_transfers,
        "critical_stock_count": critical_stock_count,
        "last_successful_sync": last_sync,
    }
