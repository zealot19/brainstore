from django.urls import path
from . import views
from apps.fleet.config_api import views as cfg

urlpatterns = [
    # ── Config Flotte ───────────────────────────────────────────────────────────
    path("config/vehicle-categories/",           cfg.VehicleCategoryListView.as_view()),
    path("config/vehicle-categories/<uuid:pk>/",  cfg.VehicleCategoryDetailView.as_view()),
    path("config/fuel-types/",                    cfg.FuelTypeListView.as_view()),
    path("config/fuel-types/<uuid:pk>/",          cfg.FuelTypeDetailView.as_view()),
    path("config/transmissions/",                 cfg.TransmissionListView.as_view()),
    path("config/transmissions/<uuid:pk>/",       cfg.TransmissionDetailView.as_view()),
    path("config/traction-types/",                cfg.TractionTypeListView.as_view()),
    path("config/traction-types/<uuid:pk>/",      cfg.TractionTypeDetailView.as_view()),
    path("config/unit-categories/",               cfg.UnitCategoryListView.as_view()),
    path("config/unit-categories/<uuid:pk>/",     cfg.UnitCategoryDetailView.as_view()),
    path("config/units/",                         cfg.UnitListView.as_view()),
    path("config/units/<uuid:pk>/",               cfg.UnitDetailView.as_view()),
    path("config/periods/",                       cfg.PeriodListView.as_view()),
    path("config/periods/<uuid:pk>/",             cfg.PeriodDetailView.as_view()),
    path("config/document-types/",                cfg.DocumentTypeListView.as_view()),
    path("config/document-types/<uuid:pk>/",      cfg.DocumentTypeDetailView.as_view()),
    path("config/tags/",                          cfg.TagListView.as_view()),
    path("config/tags/<uuid:pk>/",                cfg.TagDetailView.as_view()),
    path("config/intervention-types/",           cfg.InterventionTypeListView.as_view()),
    path("config/intervention-types/<uuid:pk>/", cfg.InterventionTypeDetailView.as_view()),
    path("config/activity-sectors/",             cfg.ActivitySectorListView.as_view()),
    path("config/activity-sectors/<uuid:pk>/",   cfg.ActivitySectorDetailView.as_view()),

    # ── Config Flotte : suppression groupée ──────────────────────────────────────
    path("config/vehicle-categories/bulk-delete/", cfg.VehicleCategoryBulkDeleteView.as_view()),
    path("config/fuel-types/bulk-delete/",          cfg.FuelTypeBulkDeleteView.as_view()),
    path("config/transmissions/bulk-delete/",       cfg.TransmissionBulkDeleteView.as_view()),
    path("config/traction-types/bulk-delete/",      cfg.TractionTypeBulkDeleteView.as_view()),
    path("config/unit-categories/bulk-delete/",     cfg.UnitCategoryBulkDeleteView.as_view()),
    path("config/units/bulk-delete/",               cfg.UnitBulkDeleteView.as_view()),
    path("config/periods/bulk-delete/",             cfg.PeriodBulkDeleteView.as_view()),
    path("config/document-types/bulk-delete/",      cfg.DocumentTypeBulkDeleteView.as_view()),
    path("config/tags/bulk-delete/",                cfg.TagBulkDeleteView.as_view()),
    path("config/intervention-types/bulk-delete/",  cfg.InterventionTypeBulkDeleteView.as_view()),
    path("config/activity-sectors/bulk-delete/",    cfg.ActivitySectorBulkDeleteView.as_view()),

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
    path("parking/",                        views.ParkingListView.as_view()),
    path("parking/<uuid:parking_id>/",      views.ParkingDetailView.as_view()),
    path("suppliers/",                      views.SupplierListView.as_view()),
    path("suppliers/<uuid:supplier_id>/",   views.SupplierDetailView.as_view()),

    path("vehicles/",                       views.VehicleListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/",     views.VehicleDetailView.as_view()),
    path("vehicles/<uuid:vehicle_id>/odometer/",   views.VehicleOdometerView.as_view()),
    path("vehicles/<uuid:vehicle_id>/stats/",      views.VehicleStatsView.as_view()),
    path("vehicles/<uuid:vehicle_id>/fuel-logs/",  views.VehicleFuelLogListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/services/",   views.VehicleServiceListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/contracts/",  views.VehicleContractListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/documents/",  views.VehicleDocumentListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/assignments/", views.VehicleAssignmentListView.as_view()),
    path("vehicles/<uuid:vehicle_id>/accidents/",  views.VehicleAccidentListView.as_view()),

    # ── Carburant ─────────────────────────────────────────────────────────────
    path("fuel-logs/<uuid:log_id>/", views.FuelLogDetailView.as_view()),

    # ── Services / interventions ──────────────────────────────────────────────
    path("services/",                          views.ServiceListView.as_view()),
    path("services/<uuid:service_id>/",        views.ServiceDetailView.as_view()),
    path("services/<uuid:service_id>/start/",  views.ServiceStartView.as_view()),
    path("services/<uuid:service_id>/complete/", views.ServiceCompleteView.as_view()),
    path("services/<uuid:service_id>/cancel/", views.ServiceCancelView.as_view()),
    path("services/<uuid:service_id>/attachments/", views.ServiceAttachmentListView.as_view()),
    path("services/<uuid:service_id>/attachments/<uuid:att_id>/", views.ServiceAttachmentDetailView.as_view()),

    # ── Contrats ──────────────────────────────────────────────────────────────
    path("contracts/",                            views.ContractListView.as_view()),
    path("contracts/<uuid:contract_id>/",         views.ContractDetailView.as_view()),
    path("contracts/<uuid:contract_id>/recurring-costs/", views.RecurringCostListView.as_view()),
    path("contracts/<uuid:contract_id>/recurring-costs/<uuid:rc_id>/", views.RecurringCostDetailView.as_view()),

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
