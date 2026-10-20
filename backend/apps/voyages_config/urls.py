from django.urls import path
from .config_api import views as v

urlpatterns = [
    # ── Villes ────────────────────────────────────────────────────────────────
    path("towns/", v.TownListView.as_view()),
    path("towns/bulk-delete/", v.TownBulkDeleteView.as_view()),
    path("towns/<uuid:pk>/", v.TownDetailView.as_view()),

    # ── Points de service ───────────────────────────────────────────────────────
    path("service-points/", v.ServicePointListView.as_view()),
    path("service-points/bulk-delete/", v.ServicePointBulkDeleteView.as_view()),
    path("service-points/<uuid:pk>/", v.ServicePointDetailView.as_view()),

    # ── Catégories tarifaires ───────────────────────────────────────────────────
    path("fare-classes/", v.FareClassListView.as_view()),
    path("fare-classes/bulk-delete/", v.FareClassBulkDeleteView.as_view()),
    path("fare-classes/<uuid:pk>/", v.FareClassDetailView.as_view()),

    path("crew-member-types/",           v.CrewMemberTypeListView.as_view()),
    path("crew-member-types/<uuid:pk>/", v.CrewMemberTypeDetailView.as_view()),
    path("voyage-types/",                v.VoyageTypeListView.as_view()),
    path("voyage-types/<uuid:pk>/",      v.VoyageTypeDetailView.as_view()),
    path("expense-types/",               v.ExpenseTypeListView.as_view()),
    path("expense-types/<uuid:pk>/",     v.ExpenseTypeDetailView.as_view()),
    path("expense-schedules/",           v.ExpenseScheduleListView.as_view()),
    path("expense-schedules/<uuid:pk>/", v.ExpenseScheduleDetailView.as_view()),

    # ── Plages horaires ─────────────────────────────────────────────────────────
    path("time-slots/", v.TimeSlotListView.as_view()),
    path("time-slots/bulk-delete/", v.TimeSlotBulkDeleteView.as_view()),
    path("time-slots/<uuid:pk>/", v.TimeSlotDetailView.as_view()),

    # ── Natures de colis ────────────────────────────────────────────────────────
    path("consignment-natures/", v.ConsignmentNatureListView.as_view()),
    path("consignment-natures/bulk-delete/", v.ConsignmentNatureBulkDeleteView.as_view()),
    path("consignment-natures/<uuid:pk>/", v.ConsignmentNatureDetailView.as_view()),

    # ── Types de colis ──────────────────────────────────────────────────────────
    path("consignment-types/", v.ConsignmentTypeListView.as_view()),
    path("consignment-types/bulk-delete/", v.ConsignmentTypeBulkDeleteView.as_view()),
    path("consignment-types/<uuid:pk>/", v.ConsignmentTypeDetailView.as_view()),

    # ── Fidélité ────────────────────────────────────────────────────────────────
    path("loyalty-rules/", v.LoyaltyRuleListView.as_view()),
    path("loyalty-rules/bulk-delete/", v.LoyaltyRuleBulkDeleteView.as_view()),
    path("loyalty-rules/<uuid:pk>/", v.LoyaltyRuleDetailView.as_view()),

    # ── Trajets + escales ───────────────────────────────────────────────────────
    path("routes/", v.RouteListView.as_view()),
    path("routes/<uuid:pk>/", v.RouteDetailView.as_view()),
    path("routes/<uuid:route_id>/stops/", v.RouteStopListView.as_view()),
    path("routes/<uuid:route_id>/stops/<uuid:stop_id>/", v.RouteStopDetailView.as_view()),

    # ── Plans de bus ────────────────────────────────────────────────────────────
    path("seating-plans/", v.SeatingPlanListView.as_view()),
    path("seating-plans/bulk-delete/", v.SeatingPlanBulkDeleteView.as_view()),
    path("seating-plans/<uuid:pk>/", v.SeatingPlanDetailView.as_view()),

    # ── Planifications ──────────────────────────────────────────────────────────
    path("service-patterns/", v.ServicePatternListView.as_view()),
    path("service-patterns/bulk-delete/", v.ServicePatternBulkDeleteView.as_view()),
    path("service-patterns/<uuid:pk>/", v.ServicePatternDetailView.as_view()),

    # ── Paramètres Voyages ──────────────────────────────────────────────────────
    path("settings/", v.VoyagesSettingsView.as_view()),

    # ── Config manifestes (en-tête / pied des bordereaux) ───────────────────────
    path("manifest-template/", v.ManifestTemplateView.as_view()),
    # ── Formats (tailles) des documents ─────────────────────────────────────────
    path("document-formats/", v.DocumentFormatsView.as_view()),
    # ── Impression : mappage document → imprimante + impression serveur ──────────
    path("printer-mapping/", v.PrinterMappingView.as_view()),
    path("print/", v.DocumentPrintView.as_view()),
    path("print-html/", v.DocumentHtmlView.as_view()),
    # ── Config billets (modèle de billet HTML) ──────────────────────────────────
    path("ticket-template/", v.TicketTemplateView.as_view()),
    path("ticket-template/reset/", v.TicketTemplateResetView.as_view()),
    path("ticket-template/preview/", v.TicketTemplatePreviewView.as_view()),
]
