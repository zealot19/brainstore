from django.urls import path
from apps.sync_scig_sage import views

urlpatterns = [

    # ── Dashboard ────────────────────────────────────────────────────────────
    path("dashboard/", views.DashboardStatsView.as_view(), name="scig-dashboard"),

    # ── Sync Sage 100 ────────────────────────────────────────────────────────
    path("sync/trigger/",      views.SyncTriggerView.as_view(),  name="scig-sync-trigger"),
    path("sync/logs/",         views.SyncLogListView.as_view(),  name="scig-sync-logs"),
    path("sync/queue/push/",   views.QueuePushView.as_view(),    name="scig-queue-push"),
    path("sync/queue/flush/",  views.QueueFlushView.as_view(),   name="scig-queue-flush"),

    # ── Articles & Variantes ─────────────────────────────────────────────────
    path("articles/",              views.ArticleListView.as_view(),   name="scig-article-list"),
    path("articles/<uuid:article_id>/", views.ArticleDetailView.as_view(), name="scig-article-detail"),
    path("variants/search/",       views.VariantSearchView.as_view(), name="scig-variant-search"),

    # ── Dépôts & Stock ───────────────────────────────────────────────────────
    path("depots/",                     views.DepotListView.as_view(),    name="scig-depot-list"),
    path("depots/<uuid:depot_id>/stock/", views.DepotStockView.as_view(),  name="scig-depot-stock"),
    path("stock/critical/",             views.CriticalStockView.as_view(), name="scig-stock-critical"),

    # ── Inventaire — Sessions ────────────────────────────────────────────────
    path("inventory/",                     views.InventorySessionListView.as_view(),  name="scig-inventory-list"),
    path("inventory/<uuid:session_id>/",   views.InventorySessionDetailView.as_view(), name="scig-inventory-detail"),
    path("inventory/<uuid:session_id>/submit-sage/", views.SubmitInventoryToSageView.as_view(), name="scig-inventory-submit-sage"),
    path("inventory/<uuid:session_id>/report/",      views.InventoryReportView.as_view(),       name="scig-inventory-report"),

    # ── Inventaire — Zones ───────────────────────────────────────────────────
    path("inventory/<uuid:session_id>/zones/",
         views.InventoryZoneListView.as_view(),    name="scig-zone-list"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/open/",
         views.OpenInventoryZoneView.as_view(),    name="scig-zone-open"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/scan/",
         views.ScanArticleView.as_view(),          name="scig-zone-scan"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/manual/",
         views.ManualCountView.as_view(),          name="scig-zone-manual"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/submit/",
         views.SubmitZoneView.as_view(),           name="scig-zone-submit"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/validate/",
         views.ValidateZoneView.as_view(),         name="scig-zone-validate"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/recheck/",
         views.RecheckZoneView.as_view(),          name="scig-zone-recheck"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/unlock/",
         views.UnlockZoneView.as_view(),           name="scig-zone-unlock"),

    path("inventory/<uuid:session_id>/zones/<uuid:zone_id>/lines/",
         views.ZoneLinesView.as_view(),            name="scig-zone-lines"),

    # ── Transferts ───────────────────────────────────────────────────────────
    path("transfers/",                       views.TransferListView.as_view(),          name="scig-transfer-list"),
    path("transfers/<uuid:transfer_id>/",    views.TransferDetailView.as_view(),        name="scig-transfer-detail"),
    path("transfers/<uuid:transfer_id>/lines/scan/",    views.TransferScanView.as_view(),         name="scig-transfer-scan"),
    path("transfers/<uuid:transfer_id>/validate/",      views.TransferValidateView.as_view(),     name="scig-transfer-validate"),
    path("transfers/<uuid:transfer_id>/ship/",          views.TransferShipView.as_view(),         name="scig-transfer-ship"),
    path("transfers/<uuid:transfer_id>/receive/scan/",  views.TransferReceiveView.as_view(),      name="scig-transfer-receive-scan"),
    path("transfers/<uuid:transfer_id>/receive/close/", views.TransferCloseReceptionView.as_view(), name="scig-transfer-receive-close"),

    # ── Étiquetage ───────────────────────────────────────────────────────────
    path("labels/campaigns/", views.LabelCampaignListView.as_view(), name="scig-label-campaigns"),
    path("labels/print/",     views.PrintJobView.as_view(),          name="scig-label-print"),

    # ── Connexion Sage 100 ───────────────────────────────────────────────────
    path("connection/",       views.SageConnectionView.as_view(),     name="scig-connection"),
    path("connection/test/",  views.SageConnectionTestView.as_view(), name="scig-connection-test"),
]
