from django.urls import path
from . import views

urlpatterns = [
    # ── Cities ────────────────────────────────────────────────────────────────
    path("cities/",                views.CityListView.as_view()),
    path("cities/<uuid:city_id>/", views.CityDetailView.as_view()),

    # ── Terminals ─────────────────────────────────────────────────────────────
    path("terminals/",                    views.TerminalListView.as_view()),
    path("terminals/<uuid:terminal_id>/", views.TerminalDetailView.as_view()),

    # ── Routes ────────────────────────────────────────────────────────────────
    path("routes/",                         views.RouteListView.as_view()),
    path("routes/<uuid:route_id>/",         views.RouteDetailView.as_view()),
    path("routes/<uuid:route_id>/stops/",   views.RouteStopListView.as_view()),
    path("routes/<uuid:route_id>/stops/<uuid:stop_id>/", views.RouteStopDetailView.as_view()),
    path("routes/<uuid:route_id>/fares/",   views.RouteFaresView.as_view()),

    # ── Vehicle categories ────────────────────────────────────────────────────
    path("vehicle-categories/",                        views.VehicleCategoryListView.as_view()),
    path("vehicle-categories/<uuid:category_id>/",     views.VehicleCategoryDetailView.as_view()),

    # ── Fare classes ──────────────────────────────────────────────────────────
    path("fare-classes/",                  views.FareClassListView.as_view()),
    path("fare-classes/<uuid:class_id>/",  views.FareClassDetailView.as_view()),

    # ── Fares ─────────────────────────────────────────────────────────────────
    path("fares/",                 views.FareListView.as_view()),
    path("fares/<uuid:fare_id>/",  views.FareDetailView.as_view()),
]
