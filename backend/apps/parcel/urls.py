from django.urls import path
from apps.parcel import views

urlpatterns = [
    # ── Stats ────────────────────────────────────────────────────────────────────
    path("stats/", views.ParcelStatsView.as_view(), name="parcel-stats"),

    # ── By trip ──────────────────────────────────────────────────────────────────
    path("trips/<uuid:trip_id>/parcels/", views.TripParcelListView.as_view(), name="trip-parcel-list"),

    # ── CRUD ─────────────────────────────────────────────────────────────────────
    path("",                      views.ParcelListView.as_view(),   name="parcel-list"),
    path("<uuid:parcel_id>/",     views.ParcelDetailView.as_view(), name="parcel-detail"),

    # ── Trip assignment ───────────────────────────────────────────────────────────
    path("<uuid:parcel_id>/assign-trip/", views.ParcelAssignTripView.as_view(), name="parcel-assign-trip"),

    # ── Status transitions ────────────────────────────────────────────────────────
    path("<uuid:parcel_id>/ship/",    views.ParcelShipView.as_view(),    name="parcel-ship"),
    path("<uuid:parcel_id>/receive/", views.ParcelReceiveView.as_view(), name="parcel-receive"),
    path("<uuid:parcel_id>/deliver/", views.ParcelDeliverView.as_view(), name="parcel-deliver"),
    path("<uuid:parcel_id>/return/",  views.ParcelReturnView.as_view(),  name="parcel-return"),
    path("<uuid:parcel_id>/lost/",    views.ParcelLostView.as_view(),    name="parcel-lost"),

    # ── Payment ───────────────────────────────────────────────────────────────────
    path("<uuid:parcel_id>/payment/", views.ParcelPaymentView.as_view(), name="parcel-payment"),

    # ── Tracking history ──────────────────────────────────────────────────────────
    path("<uuid:parcel_id>/events/",  views.ParcelEventListView.as_view(), name="parcel-events"),
]
