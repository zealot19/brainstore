from django.urls import path
from apps.voyage import views

urlpatterns = [
    # ── Stats & search ──────────────────────────────────────────────────────────
    path("trips/stats/",                 views.TripStatsView.as_view(),  name="trip-stats"),
    path("trips/search/",                views.TripSearchView.as_view(), name="trip-search"),

    # ── Trips CRUD ──────────────────────────────────────────────────────────────
    path("trips/",                       views.TripListView.as_view(),   name="trip-list"),
    path("trips/<uuid:trip_id>/",        views.TripDetailView.as_view(), name="trip-detail"),

    # ── Status transitions ──────────────────────────────────────────────────────
    path("trips/<uuid:trip_id>/board/",  views.TripBoardView.as_view(),  name="trip-board"),
    path("trips/<uuid:trip_id>/depart/", views.TripDepartView.as_view(), name="trip-depart"),
    path("trips/<uuid:trip_id>/arrive/", views.TripArriveView.as_view(), name="trip-arrive"),
    path("trips/<uuid:trip_id>/cancel/", views.TripCancelView.as_view(), name="trip-cancel"),

    # ── Crew ────────────────────────────────────────────────────────────────────
    path("trips/<uuid:trip_id>/crew/",              views.TripCrewListView.as_view(),   name="trip-crew-list"),
    path("trips/<uuid:trip_id>/crew/<uuid:crew_id>/", views.TripCrewDetailView.as_view(), name="trip-crew-detail"),
]
