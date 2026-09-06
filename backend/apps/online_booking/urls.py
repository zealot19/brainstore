from django.urls import path
from apps.online_booking import views

urlpatterns = [
    # ── Campay webhook (no company prefix — Campay calls a fixed URL) ──────────
    path("webhooks/campay/", views.CampayWebhookView.as_view(), name="campay-webhook"),

    # ── Booking status (by request UUID) ─────────────────────────────────────
    path("requests/<uuid:request_id>/", views.BookingRequestStatusView.as_view(),
         name="booking-request-status"),

    # ── Per-company public endpoints ──────────────────────────────────────────
    path("<uuid:company_id>/towns/",
         views.PublicTownListView.as_view(), name="online-public-towns"),

    path("<uuid:company_id>/trips/",
         views.PublicTripSearchView.as_view(), name="public-trip-search"),

    path("<uuid:company_id>/trips/<uuid:trip_id>/",
         views.PublicTripDetailView.as_view(), name="public-trip-detail"),

    path("<uuid:company_id>/trips/<uuid:trip_id>/seats/",
         views.PublicSeatMapView.as_view(), name="public-seat-map"),

    path("<uuid:company_id>/trips/<uuid:trip_id>/book/",
         views.InitiateBookingView.as_view(), name="initiate-booking"),
]
