from django.urls import path
from . import views

urlpatterns = [
    # ── Marques ───────────────────────────────────────────────────────────────
    path("brands/",             views.VehicleBrandListView.as_view()),
    path("brands/<uuid:brand_id>/", views.VehicleBrandDetailView.as_view()),

    # ── Modèles ───────────────────────────────────────────────────────────────
    path("models/",             views.VehicleModelListView.as_view()),
    path("models/<uuid:model_id>/", views.VehicleModelDetailView.as_view()),

    # ── Conducteurs externes ──────────────────────────────────────────────────
    path("external-drivers/",               views.ExternalDriverListView.as_view()),
    path("external-drivers/<uuid:driver_id>/", views.ExternalDriverDetailView.as_view()),

    # ── Véhicules ─────────────────────────────────────────────────────────────
    path("vehicles/",                       views.VehicleListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/",     views.VehicleDetailView.as_view()),
    path("vehicles/<uuid:vehicle_id>/odometer/",   views.VehicleOdometerView.as_view()),
    path("vehicles/<uuid:vehicle_id>/stats/",      views.VehicleStatsView.as_view()),
    path("vehicles/<uuid:vehicle_id>/fuel-logs/",  views.VehicleFuelLogListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/maintenance/", views.VehicleMaintenanceListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/insurance/",  views.VehicleInsuranceListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/documents/",  views.VehicleDocumentListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/assignments/", views.VehicleAssignmentListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/accidents/",  views.VehicleAccidentListView.as_view()),

    # ── Carburant ─────────────────────────────────────────────────────────────
    path("fuel-logs/<uuid:log_id>/", views.FuelLogDetailView.as_view()),

    # ── Types de maintenance ──────────────────────────────────────────────────
    path("maintenance-types/",               views.MaintenanceTypeListView.as_view()),
    path("maintenance-types/<uuid:type_id>/", views.MaintenanceTypeDetailView.as_view()),

    # ── Ordres de maintenance ─────────────────────────────────────────────────
    path("maintenance-orders/",                         views.MaintenanceOrderListView.as_view()),
    path("maintenance-orders/<uuid:order_id>/",         views.MaintenanceOrderDetailView.as_view()),
    path("maintenance-orders/<uuid:order_id>/start/",   views.MaintenanceOrderStartView.as_view()),
    path("maintenance-orders/<uuid:order_id>/complete/", views.MaintenanceOrderCompleteView.as_view()),
    path("maintenance-orders/<uuid:order_id>/cancel/",  views.MaintenanceOrderCancelView.as_view()),

    # ── Assurances ────────────────────────────────────────────────────────────
    path("insurance/<uuid:insurance_id>/", views.InsuranceDetailView.as_view()),

    # ── Documents véhicule ────────────────────────────────────────────────────
    path("documents/<uuid:doc_id>/", views.VehicleDocumentDetailView.as_view()),

    # ── Missions ──────────────────────────────────────────────────────────────
    path("assignments/",                            views.AssignmentListView.as_view()),
    path("assignments/<uuid:assignment_id>/",       views.AssignmentDetailView.as_view()),
    path("assignments/<uuid:assignment_id>/start/",    views.AssignmentStartView.as_view()),
    path("assignments/<uuid:assignment_id>/complete/", views.AssignmentCompleteView.as_view()),
    path("assignments/<uuid:assignment_id>/cancel/",   views.AssignmentCancelView.as_view()),

    # ── Accidents ─────────────────────────────────────────────────────────────
    path("accidents/",                          views.AccidentListView.as_view()),
    path("accidents/<uuid:accident_id>/",       views.AccidentDetailView.as_view()),
    path("accidents/<uuid:accident_id>/close/", views.AccidentCloseView.as_view()),
    path("accidents/<uuid:accident_id>/status/", views.AccidentStatusView.as_view()),

    # ── Tableau de bord flotte ────────────────────────────────────────────────
    path("alerts/", views.FleetAlertsView.as_view()),
    path("stats/",  views.FleetStatsView.as_view()),
]
