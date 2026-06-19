from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.sync_scig_sage.permissions import IsScigSageEnabled
from apps.admin_rbac.permissions import HasPermission

from apps.sync_scig_sage.models import SyncLog
from apps.sync_scig_sage.selectors import selectors
from apps.sync_scig_sage.services import services
from apps.sync_scig_sage.models import SageConnection
from apps.sync_scig_sage.serializers import (
    ArticleReadSerializer, ArticleListSerializer, VariantSearchSerializer,
    DepotSerializer, StockLevelSerializer,
    InventorySessionReadSerializer, InventorySessionWriteSerializer,
    InventoryZoneReadSerializer, InventoryZoneWriteSerializer,
    OpenZoneSerializer, ScanArticleSerializer, ManualCountSerializer,
    RecheckZoneSerializer, InventoryLineSerializer,
    StockTransferReadSerializer, StockTransferListSerializer,
    TransferWriteSerializer, TransferScanSerializer, TransferReceiveSerializer,
    LabelCampaignReadSerializer, LabelCampaignWriteSerializer,
    PrintJobWriteSerializer, LabelPrintJobSerializer,
    SyncLogSerializer, SyncTriggerSerializer, QueuePushSerializer,
    SageConnectionReadSerializer, SageConnectionWriteSerializer,
)


def _company(request):
    return request.user.company


# ══════════════════════════════════════════════════════════════════════════════
# SYNC — Sage 100
# ══════════════════════════════════════════════════════════════════════════════

class SyncTriggerView(APIView):
    """POST /sync/trigger/ — Déclencher une synchronisation depuis Sage 100."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.sync.trigger")]

    def post(self, request):
        ser = SyncTriggerSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        sync_type = ser.validated_data["sync_type"]
        try:
            if sync_type == SyncLog.SyncType.DEPOTS:
                log = services.sync_depots(_company(request), request.user)
            elif sync_type == SyncLog.SyncType.ARTICLES:
                log = services.sync_articles(_company(request), request.user)
            elif sync_type == SyncLog.SyncType.STOCK:
                log = services.sync_stock(_company(request), request.user)
            else:
                result = services.sync_full(_company(request), request.user)
                return Response({
                    "depots":   SyncLogSerializer(result["depots"]).data,
                    "articles": SyncLogSerializer(result["articles"]).data,
                    "stock":    SyncLogSerializer(result["stock"]).data,
                })
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_502_BAD_GATEWAY)
        return Response(SyncLogSerializer(log).data, status=status.HTTP_201_CREATED)


class SyncLogListView(APIView):
    """GET /sync/logs/ — Historique des synchronisations."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.sync.view")]

    def get(self, request):
        sync_type = request.query_params.get("sync_type", "")
        sync_status = request.query_params.get("status", "")
        qs = selectors.get_sync_logs(_company(request), sync_type, sync_status)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(SyncLogSerializer(page, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# ARTICLES
# ══════════════════════════════════════════════════════════════════════════════

class ArticleListView(APIView):
    """GET /articles/ — Liste et recherche articles."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request):
        qs = selectors.get_articles(
            company=_company(request),
            search=request.query_params.get("search", ""),
            family=request.query_params.get("family", ""),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(ArticleListSerializer(page, many=True).data)


class ArticleDetailView(APIView):
    """GET /articles/<id>/ — Détail article + variantes + stocks."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request, article_id):
        article = selectors.get_article_by_id(_company(request), article_id)
        if not article:
            return Response({"detail": "Article introuvable."}, status=status.HTTP_404_NOT_FOUND)
        return Response(ArticleReadSerializer(article).data)


class VariantSearchView(APIView):
    """GET /variants/search/?q=... — Recherche variante (mobile: scan / saisie)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request):
        query = request.query_params.get("q", "").strip()
        if not query:
            return Response({"detail": "Paramètre 'q' requis."}, status=status.HTTP_400_BAD_REQUEST)
        qs = selectors.search_variants(_company(request), query)
        return Response(VariantSearchSerializer(qs, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# DEPOTS & STOCK
# ══════════════════════════════════════════════════════════════════════════════

class DepotListView(APIView):
    """GET /depots/ — Liste des dépôts."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request):
        qs = selectors.get_depots(_company(request))
        return Response(DepotSerializer(qs, many=True).data)


class DepotStockView(APIView):
    """GET /depots/<id>/stock/ — Stock d'un dépôt (réel/dispo/transit)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request, depot_id):
        qs = selectors.get_depot_stock(
            depot_id=depot_id,
            search=request.query_params.get("search", ""),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(StockLevelSerializer(page, many=True).data)


class CriticalStockView(APIView):
    """GET /stock/critical/ — Articles en rupture ou stock critique."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.stock.view")]

    def get(self, request):
        threshold = float(request.query_params.get("threshold", 0))
        qs = selectors.get_critical_stock(_company(request), threshold)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(StockLevelSerializer(page, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# INVENTORY — Sessions
# ══════════════════════════════════════════════════════════════════════════════

class InventorySessionListView(APIView):
    """
    GET  /inventory/          → scig.session.view
    POST /inventory/          → scig.session.create
    """
    permission_classes = [IsScigSageEnabled]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsScigSageEnabled(), HasPermission("scig.session.create")()]
        return [IsScigSageEnabled(), HasPermission("scig.session.view")()]

    def get(self, request):
        qs = selectors.get_inventory_sessions(
            company=_company(request),
            status=request.query_params.get("status", ""),
            depot_id=request.query_params.get("depot_id"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(
            InventorySessionReadSerializer(page, many=True).data
        )

    def post(self, request):
        ser = InventorySessionWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            session = services.create_inventory_session(
                company=_company(request),
                created_by=request.user,
                **ser.validated_data,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(
            InventorySessionReadSerializer(session).data, status=status.HTTP_201_CREATED
        )


class InventorySessionDetailView(APIView):
    permission_classes = [IsScigSageEnabled, HasPermission("scig.session.view")]

    def get(self, request, session_id):
        session = selectors.get_inventory_session_detail(session_id)
        if not session:
            return Response({"detail": "Session introuvable."}, status=status.HTTP_404_NOT_FOUND)
        return Response(InventorySessionReadSerializer(session).data)


class SubmitInventoryToSageView(APIView):
    """POST /inventory/<id>/submit-sage/ — Soumettre vers Sage 100 et clôturer."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.sage.submit")]

    def post(self, request, session_id):
        try:
            session = services.submit_inventory_to_sage(session_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventorySessionReadSerializer(session).data)


class InventoryReportView(APIView):
    """GET /inventory/<id>/report/ — Rapport complet (comparaison Sage vs physique)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.report.view")]

    def get(self, request, session_id):
        lines = selectors.get_inventory_report(session_id)
        return Response(InventoryLineSerializer(lines, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# INVENTORY — Zones
# ══════════════════════════════════════════════════════════════════════════════

class InventoryZoneListView(APIView):
    """
    GET  /inventory/<sid>/zones/  → scig.zone.view
    POST /inventory/<sid>/zones/  → scig.zone.create
    """
    permission_classes = [IsScigSageEnabled]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsScigSageEnabled(), HasPermission("scig.zone.create")()]
        return [IsScigSageEnabled(), HasPermission("scig.zone.view")()]

    def get(self, request, session_id):
        qs = selectors.get_inventory_zones(session_id)
        return Response(InventoryZoneReadSerializer(qs, many=True).data)

    def post(self, request, session_id):
        ser = InventoryZoneWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            zone = services.create_inventory_zone(
                session_id=session_id,
                name=ser.validated_data["name"],
                created_by=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data, status=status.HTTP_201_CREATED)


class OpenInventoryZoneView(APIView):
    """POST /inventory/<sid>/zones/<zid>/open/ — Ouvrir zone → ROUGE + lock appareil."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.open")]

    def post(self, request, session_id, zone_id):
        ser = OpenZoneSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            zone = services.open_inventory_zone(
                zone_id=zone_id,
                device_id=ser.validated_data["device_id"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data)


class ScanArticleView(APIView):
    """POST /inventory/<sid>/zones/<zid>/scan/ — Scanner un article (mobile Zebra)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.scan")]

    def post(self, request, session_id, zone_id):
        ser = ScanArticleSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            line = services.scan_article_in_zone(
                zone_id=zone_id,
                barcode=ser.validated_data["barcode"],
                user=request.user,
                qty=ser.validated_data["qty"],
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryLineSerializer(line).data)


class ManualCountView(APIView):
    """POST /inventory/<sid>/zones/<zid>/manual/ — Saisie manuelle quantité."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.manual")]

    def post(self, request, session_id, zone_id):
        ser = ManualCountSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            line = services.manual_count_in_zone(
                zone_id=zone_id,
                variant_id=ser.validated_data["variant_id"],
                qty=ser.validated_data["qty"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryLineSerializer(line).data)


class SubmitZoneView(APIView):
    """POST /inventory/<sid>/zones/<zid>/submit/ — Transmettre zone → BLEU (mobile)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.submit")]

    def post(self, request, session_id, zone_id):
        try:
            zone = services.submit_inventory_zone(zone_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data)


class ValidateZoneView(APIView):
    """POST /inventory/<sid>/zones/<zid>/validate/ — Valider zone → VERT (dashboard)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.validate")]

    def post(self, request, session_id, zone_id):
        try:
            zone = services.validate_inventory_zone(zone_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data)


class RecheckZoneView(APIView):
    """POST /inventory/<sid>/zones/<zid>/recheck/ — Renvoyer en vérification → ORANGE."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.recheck")]

    def post(self, request, session_id, zone_id):
        ser = RecheckZoneSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            zone = services.recheck_inventory_zone(
                zone_id=zone_id,
                note=ser.validated_data["note"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data)


class UnlockZoneView(APIView):
    """POST /inventory/<sid>/zones/<zid>/unlock/ — Déverrouiller une zone bloquée (manager)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.unlock")]

    def post(self, request, session_id, zone_id):
        try:
            zone = services.unlock_inventory_zone(zone_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(InventoryZoneReadSerializer(zone).data)


class ZoneLinesView(APIView):
    """GET /inventory/<sid>/zones/<zid>/lines/ — Lignes comptées (comparaison Sage/physique)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.view")]

    def get(self, request, session_id, zone_id):
        qs = selectors.get_zone_lines_with_comparison(zone_id)
        return Response(InventoryLineSerializer(qs, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# TRANSFERS
# ══════════════════════════════════════════════════════════════════════════════

class TransferListView(APIView):
    """
    GET  /transfers/  → scig.transfer.view
    POST /transfers/  → scig.transfer.create
    """
    permission_classes = [IsScigSageEnabled]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsScigSageEnabled(), HasPermission("scig.transfer.create")()]
        return [IsScigSageEnabled(), HasPermission("scig.transfer.view")()]

    def get(self, request):
        qs = selectors.get_transfers(
            company=_company(request),
            status=request.query_params.get("status", ""),
            source_depot_id=request.query_params.get("source_depot_id"),
            dest_depot_id=request.query_params.get("dest_depot_id"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(
            StockTransferListSerializer(page, many=True).data
        )

    def post(self, request):
        ser = TransferWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            transfer = services.create_transfer(
                company=_company(request),
                source_depot_id=ser.validated_data["source_depot_id"],
                destination_depot_id=ser.validated_data["destination_depot_id"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(
            StockTransferReadSerializer(transfer).data, status=status.HTTP_201_CREATED
        )


class TransferDetailView(APIView):
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.view")]

    def get(self, request, transfer_id):
        transfer = selectors.get_transfer_detail(transfer_id)
        if not transfer:
            return Response({"detail": "Transfert introuvable."}, status=status.HTTP_404_NOT_FOUND)
        return Response(StockTransferReadSerializer(transfer).data)


class TransferScanView(APIView):
    """POST /transfers/<id>/lines/scan/ — Ajouter article par scan (DRAFT)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.scan")]

    def post(self, request, transfer_id):
        ser = TransferScanSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            line = services.add_transfer_line_by_scan(
                transfer_id=transfer_id,
                barcode=ser.validated_data["barcode"],
                qty=ser.validated_data["qty"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        from apps.sync_scig_sage.serializers import StockTransferLineSerializer
        return Response(StockTransferLineSerializer(line).data)


class TransferValidateView(APIView):
    """POST /transfers/<id>/validate/ — DRAFT → VALIDATED."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.validate")]

    def post(self, request, transfer_id):
        try:
            transfer = services.validate_transfer(transfer_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(StockTransferReadSerializer(transfer).data)


class TransferShipView(APIView):
    """POST /transfers/<id>/ship/ — VALIDATED → SHIPPED."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.ship")]

    def post(self, request, transfer_id):
        try:
            transfer = services.ship_transfer(transfer_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(StockTransferReadSerializer(transfer).data)


class TransferReceiveView(APIView):
    """POST /transfers/<id>/receive/scan/ — Scanner article à la réception."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.receive")]

    def post(self, request, transfer_id):
        ser = TransferReceiveSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            line = services.receive_transfer_line(
                transfer_id=transfer_id,
                barcode=ser.validated_data["barcode"],
                qty_received=ser.validated_data["qty_received"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        from apps.sync_scig_sage.serializers import StockTransferLineSerializer
        return Response(StockTransferLineSerializer(line).data)


class TransferCloseReceptionView(APIView):
    """POST /transfers/<id>/receive/close/ — Finaliser réception → RECEIVED."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.transfer.receive")]

    def post(self, request, transfer_id):
        try:
            transfer = services.close_transfer_reception(transfer_id, request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(StockTransferReadSerializer(transfer).data)


# ══════════════════════════════════════════════════════════════════════════════
# LABELS
# ══════════════════════════════════════════════════════════════════════════════

class LabelCampaignListView(APIView):
    """
    GET  /labels/campaigns/  → scig.labels.view
    POST /labels/campaigns/  → scig.labels.print
    """
    permission_classes = [IsScigSageEnabled]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsScigSageEnabled(), HasPermission("scig.labels.print")()]
        return [IsScigSageEnabled(), HasPermission("scig.labels.view")()]

    def get(self, request):
        qs = selectors.get_label_campaigns(
            _company(request),
            active_only=request.query_params.get("active") == "true",
        )
        return Response(LabelCampaignReadSerializer(qs, many=True).data)

    def post(self, request):
        ser = LabelCampaignWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            campaign = services.create_label_campaign(
                company=_company(request),
                name=ser.validated_data["name"],
                description=ser.validated_data.get("description", ""),
                discount_percent=ser.validated_data.get("discount_percent"),
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(LabelCampaignReadSerializer(campaign).data, status=status.HTTP_201_CREATED)


class PrintJobView(APIView):
    """
    GET  /labels/print/  → scig.labels.view
    POST /labels/print/  → scig.labels.print
    """
    permission_classes = [IsScigSageEnabled]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsScigSageEnabled(), HasPermission("scig.labels.print")()]
        return [IsScigSageEnabled(), HasPermission("scig.labels.view")()]

    def get(self, request):
        qs = selectors.get_print_jobs(
            _company(request),
            campaign_id=request.query_params.get("campaign_id"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(LabelPrintJobSerializer(page, many=True).data)

    def post(self, request):
        ser = PrintJobWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            job = services.create_print_job(
                company=_company(request),
                variant_ids=ser.validated_data["variant_ids"],
                qty_per_variant=ser.validated_data["qty_per_variant"],
                print_type=ser.validated_data["print_type"],
                campaign_id=ser.validated_data["campaign_id"],
                device_id=ser.validated_data["device_id"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(LabelPrintJobSerializer(job).data, status=status.HTTP_201_CREATED)


# ══════════════════════════════════════════════════════════════════════════════
# OFFLINE QUEUE
# ══════════════════════════════════════════════════════════════════════════════

class QueuePushView(APIView):
    """POST /sync/queue/push/ — Pousser opérations offline depuis l'appareil mobile."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.scan")]

    def post(self, request):
        ser = QueuePushSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            items = services.push_to_queue(
                company=_company(request),
                operations=ser.validated_data["operations"],
                device_id=ser.validated_data["device_id"],
                user=request.user,
            )
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"queued": len(items)}, status=status.HTTP_201_CREATED)


class QueueFlushView(APIView):
    """POST /sync/queue/flush/ — Traiter la file d'attente offline."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.sync.trigger")]

    def post(self, request):
        try:
            result = services.flush_queue(_company(request), request.user)
        except ApplicationError as exc:
            return Response({"detail": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(result)


class DashboardStatsView(APIView):
    """GET /dashboard/ — KPIs manager (sessions ouvertes, transferts, stocks critiques)."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.dashboard.view")]

    def get(self, request):
        return Response(selectors.get_dashboard_stats(_company(request)))


# ══════════════════════════════════════════════════════════════════════════════
# SAGE CONNECTION — CRUD + test
# ══════════════════════════════════════════════════════════════════════════════

class SageConnectionView(APIView):
    """
    GET  /connection/  → scig.connection.manage
    POST /connection/  → scig.connection.manage
    """
    permission_classes = [IsScigSageEnabled, HasPermission("scig.connection.manage")]

    def get(self, request):
        conn = SageConnection.objects.filter(
            company=_company(request), is_deleted=False
        ).first()
        if not conn:
            return Response(
                {"detail": "Aucune connexion Sage 100 configurée."},
                status=status.HTTP_404_NOT_FOUND,
            )
        return Response(SageConnectionReadSerializer(conn).data)

    def post(self, request):
        ser = SageConnectionWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        conn = services.upsert_sage_connection(
            company=_company(request),
            server=d["server"],
            port=d["port"],
            database=d["database"],
            username=d["username"],
            password=d.get("password") or None,
            is_active=d["is_active"],
            user=request.user,
        )
        return Response(SageConnectionReadSerializer(conn).data, status=status.HTTP_200_OK)


class SageConnectionTestView(APIView):
    """POST /connection/test/ — Tester la connexion Sage 100."""
    permission_classes = [IsScigSageEnabled, HasPermission("scig.connection.manage")]

    def post(self, request):
        conn = SageConnection.objects.filter(
            company=_company(request), is_deleted=False
        ).first()
        if not conn:
            return Response(
                {"detail": "Aucune connexion Sage 100 configurée."},
                status=status.HTTP_404_NOT_FOUND,
            )
        result = services.test_sage_connection(conn)
        http_status = status.HTTP_200_OK if result["success"] else status.HTTP_502_BAD_GATEWAY
        return Response(result, status=http_status)
