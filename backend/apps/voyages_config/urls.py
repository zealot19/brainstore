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

    # ── Plans de bus + sièges ───────────────────────────────────────────────────
    path("seating-plans/", v.SeatingPlanListView.as_view()),
    path("seating-plans/bulk-delete/", v.SeatingPlanBulkDeleteView.as_view()),
    path("seating-plans/<uuid:pk>/", v.SeatingPlanDetailView.as_view()),
    path("seating-plans/<uuid:plan_id>/seats/", v.SeatingPlanSeatsView.as_view()),

    # ── Affectations de plan ────────────────────────────────────────────────────
    path("vehicle-seating-assignments/", v.VehicleSeatingAssignmentListView.as_view()),
    path("vehicle-seating-assignments/bulk-delete/", v.VehicleSeatingAssignmentBulkDeleteView.as_view()),
    path("vehicle-seating-assignments/<uuid:pk>/", v.VehicleSeatingAssignmentDetailView.as_view()),
]
