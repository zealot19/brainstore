"""
Services — sync_scig_sage

Sections:
  1. Sage sync services  (sync_depots, sync_articles, sync_stock)
  2. Inventory services  (create_session, zones, scan, submit, validate, sage push)
  3. Transfer services   (create, add line, validate, ship, receive)
  4. Label services      (create campaign, print job)
  5. Offline queue       (push_to_queue, flush_queue)
"""
import logging
import uuid
from datetime import datetime

from django.db import transaction
from django.utils import timezone

from apps.core.exceptions import ApplicationError
from apps.core.models import AuditLog
from apps.core.services.audit_service import log_action
from apps.sync_scig_sage.models import (
    Article, ArticleVariant,
    Depot, StockLevel,
    InventorySession, InventoryZone, InventoryLine, ZoneStatus,
    StockTransfer, StockTransferLine,
    LabelCampaign, LabelPrintJob,
    SyncLog, SyncQueue,
    SageConnection,
)
from apps.sync_scig_sage.sage.client import SageClient, SageConnectionError, SageQueryError
from apps.sync_scig_sage.sage.mapper import (
    map_depots, map_articles, map_variants, map_stock, build_prices_index,
)

logger = logging.getLogger(__name__)


def _get_sage_client(company) -> SageClient:
    """Return a SageClient bound to the company's SageConnection, or raise ApplicationError."""
    conn = SageConnection.objects.filter(company=company, is_active=True, is_deleted=False).first()
    if not conn:
        raise ApplicationError(
            "Aucune connexion Sage 100 configurée pour cette société. "
            "Configurez-la dans Administration → Connexions Sage 100."
        )
    return SageClient(conn)


# ══════════════════════════════════════════════════════════════════════════════
# 1. SAGE SYNC SERVICES
# ══════════════════════════════════════════════════════════════════════════════

def _start_sync_log(company, sync_type, triggered_by) -> SyncLog:
    return SyncLog.objects.create(
        company=company,
        sync_type=sync_type,
        status=SyncLog.Status.PARTIAL,
        started_at=timezone.now(),
        triggered_by=triggered_by,
    )


def _finish_sync_log(log: SyncLog, status, **counts):
    for field, val in counts.items():
        setattr(log, field, val)
    log.status = status
    log.finished_at = timezone.now()
    log.save(update_fields=[
        "status", "finished_at", "records_read",
        "records_created", "records_updated",
        "records_failed", "error_message",
    ])


@transaction.atomic
def sync_depots(company, triggered_by=None) -> SyncLog:
    log = _start_sync_log(company, SyncLog.SyncType.DEPOTS, triggered_by)
    created = updated = failed = 0
    try:
        client = _get_sage_client(company)
        sage_rows = client.fetch_depots()
        mapped = map_depots(sage_rows)
        for data in mapped:
            try:
                _, is_new = Depot.objects.update_or_create(
                    company=company,
                    sage_depot_no=data["sage_depot_no"],
                    defaults={k: v for k, v in data.items() if k != "sage_depot_no"},
                )
                if is_new:
                    created += 1
                else:
                    updated += 1
            except Exception as exc:
                logger.error("Depot sync error: %s", exc)
                failed += 1
        _finish_sync_log(
            log, SyncLog.Status.SUCCESS,
            records_read=len(sage_rows),
            records_created=created,
            records_updated=updated,
            records_failed=failed,
        )
    except (SageConnectionError, SageQueryError) as exc:
        _finish_sync_log(
            log, SyncLog.Status.FAILED,
            records_read=0, records_created=created,
            records_updated=updated, records_failed=failed,
            error_message=str(exc),
        )
        raise ApplicationError(str(exc)) from exc
    return log


@transaction.atomic
def sync_articles(company, triggered_by=None) -> SyncLog:
    log = _start_sync_log(company, SyncLog.SyncType.ARTICLES, triggered_by)
    created = updated = failed = 0
    try:
        client = _get_sage_client(company)
        article_rows = client.fetch_articles()
        variant_rows = client.fetch_variants()
        price_rows = client.fetch_prices()
        sale_rows = client.fetch_sale_prices()
        prices_index = build_prices_index(price_rows, sale_rows)

        # Upsert articles
        for data in map_articles(article_rows):
            try:
                _, is_new = Article.objects.update_or_create(
                    company=company,
                    sage_reference=data["sage_reference"],
                    defaults={k: v for k, v in data.items() if k != "sage_reference"},
                )
                if is_new:
                    created += 1
                else:
                    updated += 1
            except Exception as exc:
                logger.error("Article sync error ref=%s: %s", data.get("sage_reference"), exc)
                failed += 1

        # Build article lookup
        articles_by_ref = {
            a.sage_reference: a
            for a in Article.objects.filter(company=company, is_deleted=False)
        }

        # Upsert variants
        for data in map_variants(variant_rows, prices_index):
            article = articles_by_ref.get(data["article_sage_ref"])
            if not article:
                failed += 1
                continue
            try:
                _, is_new = ArticleVariant.objects.update_or_create(
                    article=article,
                    size=data["size"],
                    color=data["color"],
                    defaults={
                        "sage_ref_variant": data["sage_ref_variant"],
                        "barcode": data["barcode"],
                        "price_normal": data["price_normal"],
                        "price_sale": data["price_sale"],
                        "is_active": True,
                    },
                )
                if is_new:
                    created += 1
                else:
                    updated += 1
            except Exception as exc:
                logger.error("Variant sync error %s: %s", data.get("sage_ref_variant"), exc)
                failed += 1

        _finish_sync_log(
            log, SyncLog.Status.SUCCESS,
            records_read=len(article_rows) + len(variant_rows),
            records_created=created,
            records_updated=updated,
            records_failed=failed,
        )
    except (SageConnectionError, SageQueryError) as exc:
        _finish_sync_log(
            log, SyncLog.Status.FAILED,
            records_read=0, records_created=0,
            records_updated=0, records_failed=failed,
            error_message=str(exc),
        )
        raise ApplicationError(str(exc)) from exc
    return log


@transaction.atomic
def sync_stock(company, triggered_by=None) -> SyncLog:
    log = _start_sync_log(company, SyncLog.SyncType.STOCK, triggered_by)
    created = updated = failed = 0
    try:
        client = _get_sage_client(company)
        stock_rows = client.fetch_stock()
        mapped = map_stock(stock_rows)

        depots_by_no = {
            d.sage_depot_no: d
            for d in Depot.objects.filter(company=company, is_deleted=False)
        }
        variants_by_ref = {
            v.sage_ref_variant: v
            for v in ArticleVariant.objects.filter(
                article__company=company, is_deleted=False
            )
        }

        for data in mapped:
            depot = depots_by_no.get(data["depot_no"])
            variant = variants_by_ref.get(data["sage_ref_variant"])
            if not depot or not variant:
                failed += 1
                continue
            try:
                _, is_new = StockLevel.objects.update_or_create(
                    depot=depot,
                    variant=variant,
                    defaults={
                        "stock_real": data["stock_real"],
                        "stock_available": data["stock_available"],
                        "stock_transit": data["stock_transit"],
                    },
                )
                if is_new:
                    created += 1
                else:
                    updated += 1
            except Exception as exc:
                logger.error("Stock sync error: %s", exc)
                failed += 1

        _finish_sync_log(
            log, SyncLog.Status.SUCCESS,
            records_read=len(stock_rows),
            records_created=created,
            records_updated=updated,
            records_failed=failed,
        )
    except (SageConnectionError, SageQueryError) as exc:
        _finish_sync_log(
            log, SyncLog.Status.FAILED,
            records_read=0, records_created=0,
            records_updated=0, records_failed=failed,
            error_message=str(exc),
        )
        raise ApplicationError(str(exc)) from exc
    return log


def sync_full(company, triggered_by=None) -> dict:
    """Trigger full sync: depots → articles → stock."""
    return {
        "depots":   sync_depots(company, triggered_by),
        "articles": sync_articles(company, triggered_by),
        "stock":    sync_stock(company, triggered_by),
    }


# ══════════════════════════════════════════════════════════════════════════════
# 2. INVENTORY SERVICES
# ══════════════════════════════════════════════════════════════════════════════

@transaction.atomic
def create_inventory_session(company, name: str, depot_id, created_by, notes: str = "") -> InventorySession:
    depot = Depot.objects.filter(id=depot_id, company=company, is_deleted=False).first()
    if not depot:
        raise ApplicationError("Dépôt introuvable.")
    if InventorySession.objects.filter(
        company=company, depot=depot, status=InventorySession.Status.OPEN, is_deleted=False
    ).exists():
        raise ApplicationError("Un inventaire est déjà ouvert sur ce dépôt.")
    return InventorySession.objects.create(
        company=company,
        name=name.strip(),
        depot=depot,
        notes=notes,
        created_by=created_by,
        updated_by=created_by,
    )


@transaction.atomic
def create_inventory_zone(session_id, name: str, created_by) -> InventoryZone:
    session = InventorySession.objects.filter(
        id=session_id, is_deleted=False, status=InventorySession.Status.OPEN
    ).first()
    if not session:
        raise ApplicationError("Session d'inventaire introuvable ou déjà clôturée.")
    if InventoryZone.objects.filter(
        session=session, name=name.strip(), is_deleted=False
    ).exists():
        raise ApplicationError(f"Une zone nommée '{name}' existe déjà dans cet inventaire.")
    return InventoryZone.objects.create(
        session=session,
        name=name.strip(),
        created_by=created_by,
        updated_by=created_by,
    )


@transaction.atomic
def open_inventory_zone(zone_id, device_id: str, user) -> InventoryZone:
    zone = InventoryZone.objects.select_for_update().filter(
        id=zone_id, is_deleted=False
    ).first()
    if not zone:
        raise ApplicationError("Zone introuvable.")
    if zone.status == ZoneStatus.IN_PROGRESS:
        raise ApplicationError(
            f"Zone déjà ouverte par l'appareil '{zone.locked_by_device}'."
        )
    if zone.status == ZoneStatus.VALIDATED:
        raise ApplicationError("Cette zone a déjà été validée.")
    if zone.session.status != InventorySession.Status.OPEN:
        raise ApplicationError("La session d'inventaire est clôturée.")

    # Snapshot theoretical stock from Sage cache at open time
    _snapshot_theoretical_stock(zone)

    zone.status = ZoneStatus.IN_PROGRESS
    zone.locked_by_device = device_id
    zone.locked_by = user
    zone.updated_by = user
    zone.save(update_fields=["status", "locked_by_device", "locked_by", "updated_by", "updated_at"])
    return zone


def _snapshot_theoretical_stock(zone: InventoryZone):
    """Copy current Sage stock levels into InventoryLine.qty_theoretical."""
    depot = zone.session.depot
    stock_levels = StockLevel.objects.filter(
        depot=depot, variant__is_deleted=False
    ).select_related("variant")
    existing_lines = {
        line.variant_id: line
        for line in InventoryLine.objects.filter(zone=zone, is_deleted=False)
    }
    for sl in stock_levels:
        if sl.variant_id not in existing_lines:
            InventoryLine.objects.create(
                zone=zone,
                variant=sl.variant,
                qty_theoretical=sl.stock_real,
                qty_counted=0,
            )
        else:
            existing_lines[sl.variant_id].qty_theoretical = sl.stock_real
            existing_lines[sl.variant_id].save(update_fields=["qty_theoretical"])


@transaction.atomic
def unlock_inventory_zone(zone_id, user) -> InventoryZone:
    """Force-unlock a stuck IN_PROGRESS zone (manager action). Preserves counted lines."""
    zone = InventoryZone.objects.select_for_update().filter(
        id=zone_id, is_deleted=False
    ).first()
    if not zone:
        raise ApplicationError("Zone introuvable.")
    if zone.status != ZoneStatus.IN_PROGRESS:
        raise ApplicationError("Seules les zones en cours (verrou actif) peuvent être déverrouillées.")

    previous_device = zone.locked_by_device
    zone.status = ZoneStatus.NOT_STARTED
    zone.locked_by_device = ""
    zone.locked_by = None
    zone.updated_by = user
    zone.save(update_fields=["status", "locked_by_device", "locked_by", "updated_by", "updated_at"])

    log_action(
        user=user,
        action=AuditLog.Action.UPDATE,
        resource_type="InventoryZone",
        resource_id=str(zone.id),
        description=f"Déverrouillage forcé de la zone '{zone.name}' (appareil : {previous_device})",
    )
    return zone


@transaction.atomic
def scan_article_in_zone(zone_id, barcode: str, user, qty=1, device_id: str = "") -> InventoryLine:
    """
    Scan a barcode in an open zone.
    Looks up variant by barcode, then increments qty_counted.
    """
    zone = InventoryZone.objects.filter(
        id=zone_id, is_deleted=False, status=ZoneStatus.IN_PROGRESS
    ).first()
    if not zone:
        raise ApplicationError("Zone non disponible pour le scan (non ouverte ou introuvable).")

    variant = (
        ArticleVariant.objects.filter(barcode=barcode, is_deleted=False).first()
        or ArticleVariant.objects.filter(
            article__barcode=barcode, is_deleted=False
        ).first()
    )
    if not variant:
        raise ApplicationError(f"Article introuvable pour le code-barres '{barcode}'.")

    line, _ = InventoryLine.objects.get_or_create(
        zone=zone,
        variant=variant,
        defaults={"qty_theoretical": 0, "qty_counted": 0, "created_by": user},
    )
    line.qty_counted += qty
    line.last_scanned_at = timezone.now()
    line.is_manual = False
    line.scanned_by = user
    line.device_id = device_id or ""
    line.updated_by = user
    line.save(update_fields=[
        "qty_counted", "last_scanned_at", "is_manual",
        "scanned_by", "device_id", "updated_by", "updated_at",
    ])
    log_action(
        user=user, action=AuditLog.Action.SCAN, module=AuditLog.Module.SCIG,
        target_type="InventoryLine", target_id=line.id,
        description=f"Scan {barcode} (qté +{qty}) — zone {zone.name}",
        device_id=device_id, company=zone.session.company,
    )
    return line


@transaction.atomic
def manual_count_in_zone(zone_id, variant_id, qty, user, device_id: str = "") -> InventoryLine:
    """Set (not increment) a manual count for a variant in an open zone."""
    zone = InventoryZone.objects.filter(
        id=zone_id, is_deleted=False, status=ZoneStatus.IN_PROGRESS
    ).first()
    if not zone:
        raise ApplicationError("Zone non disponible.")
    variant = ArticleVariant.objects.filter(id=variant_id, is_deleted=False).first()
    if not variant:
        raise ApplicationError("Variante introuvable.")
    line, _ = InventoryLine.objects.get_or_create(
        zone=zone,
        variant=variant,
        defaults={"qty_theoretical": 0, "qty_counted": 0, "created_by": user},
    )
    line.qty_counted = qty
    line.is_manual = True
    line.last_scanned_at = timezone.now()
    line.scanned_by = user
    line.device_id = device_id or ""
    line.updated_by = user
    line.save(update_fields=[
        "qty_counted", "is_manual", "last_scanned_at",
        "scanned_by", "device_id", "updated_by", "updated_at",
    ])
    log_action(
        user=user, action=AuditLog.Action.SCAN, module=AuditLog.Module.SCIG,
        target_type="InventoryLine", target_id=line.id,
        description=f"Saisie manuelle variante {variant_id} (qté={qty}) — zone {zone.name}",
        device_id=device_id, company=zone.session.company,
    )
    return line


@transaction.atomic
def submit_inventory_zone(zone_id, user) -> InventoryZone:
    """Mobile: mark zone as submitted → SUBMITTED (awaiting manager review)."""
    zone = InventoryZone.objects.select_for_update().filter(
        id=zone_id, is_deleted=False, status=ZoneStatus.IN_PROGRESS
    ).first()
    if not zone:
        raise ApplicationError("Zone non ouverte ou introuvable.")
    zone.status = ZoneStatus.SUBMITTED
    zone.submitted_at = timezone.now()
    zone.locked_by_device = ""
    zone.updated_by = user
    zone.save(update_fields=[
        "status", "submitted_at", "locked_by_device", "updated_by", "updated_at"
    ])
    return zone


@transaction.atomic
def validate_inventory_zone(zone_id, user) -> InventoryZone:
    """Dashboard Manager: validate zone → VALIDATED."""
    zone = InventoryZone.objects.select_for_update().filter(
        id=zone_id, is_deleted=False, status=ZoneStatus.SUBMITTED
    ).first()
    if not zone:
        raise ApplicationError(
            "Zone introuvable ou non soumise (statut attendu: En attente de vérification)."
        )
    zone.status = ZoneStatus.VALIDATED
    zone.validated_at = timezone.now()
    zone.validated_by = user
    zone.updated_by = user
    zone.save(update_fields=[
        "status", "validated_at", "validated_by", "updated_by", "updated_at"
    ])
    log_action(
        user=user, action=AuditLog.Action.VALIDATE, module=AuditLog.Module.SCIG,
        target_type="InventoryZone", target_id=zone.id,
        description=f"Zone '{zone.name}' validée → VERT",
        company=zone.session.company,
    )
    return zone


@transaction.atomic
def recheck_inventory_zone(zone_id, note: str, user) -> InventoryZone:
    """Dashboard Manager: send zone back for recheck → RECHECK (reopens on mobile)."""
    zone = InventoryZone.objects.select_for_update().filter(
        id=zone_id, is_deleted=False, status=ZoneStatus.SUBMITTED
    ).first()
    if not zone:
        raise ApplicationError("Zone introuvable ou non soumise.")
    zone.status = ZoneStatus.RECHECK
    zone.recheck_note = note or ""
    zone.submitted_at = None
    zone.rechecked_by = user
    zone.rechecked_at = timezone.now()
    zone.updated_by = user
    zone.save(update_fields=[
        "status", "recheck_note", "submitted_at",
        "rechecked_by", "rechecked_at", "updated_by", "updated_at",
    ])
    log_action(
        user=user, action=AuditLog.Action.RECHECK, module=AuditLog.Module.SCIG,
        target_type="InventoryZone", target_id=zone.id,
        description=f"Zone '{zone.name}' renvoyée en vérification → ORANGE. Note: {note or '—'}",
        company=zone.session.company,
    )
    return zone


@transaction.atomic
def submit_inventory_to_sage(session_id, user) -> InventorySession:
    """
    Dashboard: push all validated zone counts to Sage 100, then close session.
    Only allowed when ALL zones are VALIDATED.
    """
    session = InventorySession.objects.filter(
        id=session_id, is_deleted=False, status=InventorySession.Status.OPEN
    ).first()
    if not session:
        raise ApplicationError("Session introuvable ou déjà clôturée.")

    non_validated = session.zones.filter(is_deleted=False).exclude(
        status=ZoneStatus.VALIDATED
    )
    if non_validated.exists():
        names = ", ".join(non_validated.values_list("name", flat=True))
        raise ApplicationError(
            f"Les zones suivantes ne sont pas encore validées : {names}"
        )

    # Build adjustment payload
    lines = InventoryLine.objects.filter(
        zone__session=session, zone__is_deleted=False, is_deleted=False
    ).select_related("variant", "zone__session__depot")

    adjustments = [
        {
            "sage_ref_variant": line.variant.sage_ref_variant,
            "depot_no": session.depot.sage_depot_no,
            "qty": float(line.qty_counted),
        }
        for line in lines
    ]

    try:
        client = _get_sage_client(session.company)
        updated = client.push_inventory_adjustments(adjustments)
        logger.info(
            "Inventory session %s pushed to Sage — %d rows updated", session.name, updated
        )
    except (SageConnectionError, SageQueryError) as exc:
        raise ApplicationError(f"Échec de la soumission vers Sage 100 : {exc}") from exc

    session.status = InventorySession.Status.CLOSED
    session.closed_at = timezone.now()
    session.submitted_to_sage_at = timezone.now()
    session.submitted_by = user
    session.updated_by = user
    session.save(update_fields=[
        "status", "closed_at", "submitted_to_sage_at",
        "submitted_by", "updated_by", "updated_at",
    ])
    log_action(
        user=user, action=AuditLog.Action.SUBMIT, module=AuditLog.Module.SCIG,
        target_type="InventorySession", target_id=session.id,
        description=f"Inventaire '{session.name}' soumis vers Sage 100 et clôturé",
        company=session.company,
    )
    return session


# ══════════════════════════════════════════════════════════════════════════════
# 3. TRANSFER SERVICES
# ══════════════════════════════════════════════════════════════════════════════

def _generate_transfer_reference(company) -> str:
    from django.utils import timezone as tz
    date_str = tz.now().strftime("%Y%m%d")
    prefix = f"TRF-{date_str}-"
    last = (
        StockTransfer.objects.filter(
            company=company, reference__startswith=prefix, is_deleted=False
        )
        .order_by("reference")
        .values_list("reference", flat=True)
        .last()
    )
    seq = int(last.split("-")[-1]) + 1 if last else 1
    return f"{prefix}{seq:04d}"


@transaction.atomic
def create_transfer(company, source_depot_id, destination_depot_id, user) -> StockTransfer:
    source = Depot.objects.filter(id=source_depot_id, company=company, is_deleted=False).first()
    dest = Depot.objects.filter(id=destination_depot_id, company=company, is_deleted=False).first()
    if not source or not dest:
        raise ApplicationError("Dépôt source ou destination introuvable.")
    if source == dest:
        raise ApplicationError("Les dépôts source et destination doivent être différents.")
    return StockTransfer.objects.create(
        company=company,
        reference=_generate_transfer_reference(company),
        source_depot=source,
        destination_depot=dest,
        created_by=user,
        updated_by=user,
    )


@transaction.atomic
def add_transfer_line_by_scan(transfer_id, barcode: str, qty, user) -> StockTransferLine:
    transfer = StockTransfer.objects.filter(
        id=transfer_id, is_deleted=False, status=StockTransfer.Status.DRAFT
    ).first()
    if not transfer:
        raise ApplicationError("Transfert introuvable ou non modifiable (statut DRAFT requis).")

    variant = (
        ArticleVariant.objects.filter(barcode=barcode, is_deleted=False).first()
        or ArticleVariant.objects.filter(
            article__barcode=barcode, is_deleted=False
        ).first()
    )
    if not variant:
        raise ApplicationError(f"Article introuvable pour le code-barres '{barcode}'.")

    # Check stock availability at source depot
    stock = StockLevel.objects.filter(
        depot=transfer.source_depot, variant=variant
    ).first()
    current_stock = float(stock.stock_available) if stock else 0
    line = StockTransferLine.objects.filter(
        transfer=transfer, variant=variant, is_deleted=False
    ).first()
    already_planned = float(line.qty_planned) if line else 0
    if current_stock - already_planned < float(qty):
        raise ApplicationError(
            f"Stock insuffisant pour {variant} : disponible={current_stock}, "
            f"déjà planifié={already_planned}, demandé={qty}"
        )

    if line:
        line.qty_planned += qty
        line.updated_by = user
        line.save(update_fields=["qty_planned", "updated_by", "updated_at"])
    else:
        line = StockTransferLine.objects.create(
            transfer=transfer,
            variant=variant,
            qty_planned=qty,
            created_by=user,
            updated_by=user,
        )
    return line


@transaction.atomic
def validate_transfer(transfer_id, user) -> StockTransfer:
    transfer = StockTransfer.objects.filter(
        id=transfer_id, is_deleted=False, status=StockTransfer.Status.DRAFT
    ).first()
    if not transfer:
        raise ApplicationError("Transfert introuvable ou déjà validé.")
    if not transfer.lines.filter(is_deleted=False).exists():
        raise ApplicationError("Impossible de valider un transfert sans articles.")
    transfer.status = StockTransfer.Status.VALIDATED
    transfer.validated_at = timezone.now()
    transfer.validated_by = user
    transfer.updated_by = user
    transfer.save(update_fields=["status", "validated_at", "validated_by", "updated_by", "updated_at"])
    log_action(
        user=user, action=AuditLog.Action.VALIDATE, module=AuditLog.Module.SCIG,
        target_type="StockTransfer", target_id=transfer.id,
        description=f"Transfert {transfer.reference} validé",
        company=transfer.company,
    )
    return transfer


@transaction.atomic
def ship_transfer(transfer_id, user) -> StockTransfer:
    transfer = StockTransfer.objects.filter(
        id=transfer_id, is_deleted=False, status=StockTransfer.Status.VALIDATED
    ).first()
    if not transfer:
        raise ApplicationError("Transfert introuvable ou non validé.")
    # Copy qty_planned → qty_shipped for all lines
    transfer.lines.filter(is_deleted=False).update(qty_shipped=models.F("qty_planned"))
    transfer.status = StockTransfer.Status.SHIPPED
    transfer.shipped_at = timezone.now()
    transfer.shipped_by = user
    transfer.updated_by = user
    transfer.save(update_fields=["status", "shipped_at", "shipped_by", "updated_by", "updated_at"])
    log_action(
        user=user, action=AuditLog.Action.SHIP, module=AuditLog.Module.SCIG,
        target_type="StockTransfer", target_id=transfer.id,
        description=f"Transfert {transfer.reference} expédié vers {transfer.destination_depot.name}",
        company=transfer.company,
    )
    return transfer


@transaction.atomic
def receive_transfer_line(transfer_id, barcode: str, qty_received, user) -> StockTransferLine:
    """Scan an article on reception — accumulates qty_received."""
    transfer = StockTransfer.objects.filter(
        id=transfer_id, is_deleted=False, status=StockTransfer.Status.SHIPPED
    ).first()
    if not transfer:
        raise ApplicationError("Transfert introuvable ou non expédié.")

    variant = (
        ArticleVariant.objects.filter(barcode=barcode, is_deleted=False).first()
        or ArticleVariant.objects.filter(article__barcode=barcode, is_deleted=False).first()
    )
    if not variant:
        raise ApplicationError(f"Article introuvable pour le code-barres '{barcode}'.")

    line = StockTransferLine.objects.filter(
        transfer=transfer, variant=variant, is_deleted=False
    ).first()
    if not line:
        raise ApplicationError("Cet article ne fait pas partie de ce transfert.")

    line.qty_received += qty_received
    line.received_by = user
    line.received_at = timezone.now()
    line.updated_by = user
    line.save(update_fields=["qty_received", "received_by", "received_at", "updated_by", "updated_at"])
    log_action(
        user=user, action=AuditLog.Action.RECEIVE, module=AuditLog.Module.SCIG,
        target_type="StockTransferLine", target_id=line.id,
        description=f"Réception scan {barcode} (qté={qty_received}) — transfert {transfer.reference}",
        company=transfer.company,
    )
    return line


@transaction.atomic
def close_transfer_reception(transfer_id, user) -> StockTransfer:
    """Finalize reception → RECEIVED."""
    transfer = StockTransfer.objects.filter(
        id=transfer_id, is_deleted=False, status=StockTransfer.Status.SHIPPED
    ).first()
    if not transfer:
        raise ApplicationError("Transfert introuvable ou non expédié.")
    transfer.status = StockTransfer.Status.RECEIVED
    transfer.received_at = timezone.now()
    transfer.received_by = user
    transfer.updated_by = user
    transfer.save(update_fields=["status", "received_at", "received_by", "updated_by", "updated_at"])
    log_action(
        user=user, action=AuditLog.Action.RECEIVE, module=AuditLog.Module.SCIG,
        target_type="StockTransfer", target_id=transfer.id,
        description=f"Réception clôturée — transfert {transfer.reference}",
        company=transfer.company,
    )
    return transfer


# ══════════════════════════════════════════════════════════════════════════════
# 4. LABEL SERVICES
# ══════════════════════════════════════════════════════════════════════════════

@transaction.atomic
def create_label_campaign(company, name: str, description: str, discount_percent, user) -> LabelCampaign:
    return LabelCampaign.objects.create(
        company=company,
        name=name.strip(),
        description=description or "",
        discount_percent=discount_percent,
        created_by=user,
        updated_by=user,
    )


@transaction.atomic
def create_print_job(company, variant_ids: list, qty_per_variant: dict, print_type: str, campaign_id, device_id: str, user) -> LabelPrintJob:
    """
    variant_ids: list of variant UUIDs to print labels for
    qty_per_variant: { str(variant_id): qty }
    """
    variants = ArticleVariant.objects.filter(
        id__in=variant_ids, article__company=company, is_deleted=False
    )
    if not variants.exists():
        raise ApplicationError("Aucune variante valide trouvée.")

    campaign = None
    if campaign_id:
        campaign = LabelCampaign.objects.filter(
            id=campaign_id, company=company, is_deleted=False
        ).first()

    print_data = [
        {"variant_id": str(v.id), "qty": qty_per_variant.get(str(v.id), 1)}
        for v in variants
    ]
    total = sum(item["qty"] for item in print_data)

    return LabelPrintJob.objects.create(
        company=company,
        campaign=campaign,
        print_type=print_type,
        print_data=print_data,
        device_id=device_id or "",
        printed_at=timezone.now(),
        total_labels=total,
        created_by=user,
        updated_by=user,
    )


# ══════════════════════════════════════════════════════════════════════════════
# 5. OFFLINE QUEUE SERVICES
# ══════════════════════════════════════════════════════════════════════════════

@transaction.atomic
def push_to_queue(company, operations: list[dict], device_id: str, user) -> list[SyncQueue]:
    """
    Accept a batch of offline operations from a Zebra device.
    Each operation must have:
      - device_operation_id (unique, generated on device)
      - operation_type
      - device_timestamp (ISO string)
      - payload (dict)
    Already-known device_operation_id values are silently skipped (idempotent).
    """
    created = []
    known_ids = set(
        SyncQueue.objects.filter(
            device_operation_id__in=[op["device_operation_id"] for op in operations]
        ).values_list("device_operation_id", flat=True)
    )
    for op in operations:
        if op["device_operation_id"] in known_ids:
            continue
        item = SyncQueue.objects.create(
            company=company,
            operation_type=op["operation_type"],
            device_operation_id=op["device_operation_id"],
            device_id=device_id,
            device_timestamp=op["device_timestamp"],
            payload=op["payload"],
            created_by=user,
            updated_by=user,
        )
        created.append(item)
    return created


@transaction.atomic
def flush_queue(company, user) -> dict:
    """
    Process all PENDING queue items for a company in chronological order.
    Returns counts of processed / skipped / failed operations.
    """
    pending = SyncQueue.objects.filter(
        company=company,
        status=SyncQueue.QueueStatus.PENDING,
        is_deleted=False,
    ).order_by("device_timestamp")

    processed = skipped = failed = 0

    for item in pending:
        try:
            _process_queue_item(item, user)
            item.status = SyncQueue.QueueStatus.PROCESSED
            item.processed_at = timezone.now()
            processed += 1
        except ApplicationError as exc:
            item.status = SyncQueue.QueueStatus.SKIPPED
            item.error_detail = str(exc)
            skipped += 1
        except Exception as exc:
            item.status = SyncQueue.QueueStatus.FAILED
            item.error_detail = str(exc)
            failed += 1
            logger.error("Queue flush error for item %s: %s", item.device_operation_id, exc)
        item.updated_by = user
        item.save(update_fields=["status", "processed_at", "error_detail", "updated_by", "updated_at"])

    return {"processed": processed, "skipped": skipped, "failed": failed}


def _process_queue_item(item: SyncQueue, user):
    payload = item.payload
    if item.operation_type == SyncQueue.OperationType.INVENTORY_SCAN:
        scan_article_in_zone(
            zone_id=payload["zone_id"],
            barcode=payload["barcode"],
            user=user,
            qty=payload.get("qty", 1),
        )
    elif item.operation_type == SyncQueue.OperationType.INVENTORY_SUBMIT:
        submit_inventory_zone(zone_id=payload["zone_id"], user=user)
    elif item.operation_type == SyncQueue.OperationType.TRANSFER_SCAN:
        add_transfer_line_by_scan(
            transfer_id=payload["transfer_id"],
            barcode=payload["barcode"],
            qty=payload.get("qty", 1),
            user=user,
        )
    elif item.operation_type == SyncQueue.OperationType.TRANSFER_RECEIVE:
        receive_transfer_line(
            transfer_id=payload["transfer_id"],
            barcode=payload["barcode"],
            qty_received=payload.get("qty", 1),
            user=user,
        )
    else:
        raise ApplicationError(f"Type d'opération inconnu : {item.operation_type}")


# ══════════════════════════════════════════════════════════════════════════════
# 6. SAGE CONNECTION SERVICES
# ══════════════════════════════════════════════════════════════════════════════

@transaction.atomic
def upsert_sage_connection(company, server: str, port: int, database: str,
                           username: str, password: str | None, is_active: bool,
                           user) -> SageConnection:
    """Create or update the SageConnection for a company."""
    conn, _ = SageConnection.objects.get_or_create(
        company=company,
        defaults={"created_by": user},
    )
    conn.server = server
    conn.port = port
    conn.database = database
    conn.username = username
    if password:
        conn.password = password
    conn.is_active = is_active
    conn.updated_by = user
    conn.save()
    return conn


def test_sage_connection(conn: SageConnection) -> dict:
    """
    Attempt a live connection to Sage 100 and update last_tested_at / last_test_success.
    Returns {"success": bool, "error": str}.
    """
    from django.utils import timezone as tz
    try:
        client = SageClient(conn)
        client.test_connection()
        conn.last_tested_at = tz.now()
        conn.last_test_success = True
        conn.last_test_error = ""
        conn.save(update_fields=["last_tested_at", "last_test_success", "last_test_error"])
        return {"success": True, "error": ""}
    except (SageConnectionError, SageQueryError) as exc:
        conn.last_tested_at = tz.now()
        conn.last_test_success = False
        conn.last_test_error = str(exc)
        conn.save(update_fields=["last_tested_at", "last_test_success", "last_test_error"])
        return {"success": False, "error": str(exc)}


# Import needed for ship_transfer (models.F)
from django.db import models
