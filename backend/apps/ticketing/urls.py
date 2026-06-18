from django.urls import path
from apps.ticketing import views

urlpatterns = [
    # ── Stats & QR scan ─────────────────────────────────────────────────────────
    path("bookings/stats/",       views.BookingStatsView.as_view(),  name="booking-stats"),
    path("bookings/scan/",        views.QRScanView.as_view(),        name="qr-scan"),

    # ── Customers ────────────────────────────────────────────────────────────────
    path("customers/",                    views.CustomerListView.as_view(),   name="customer-list"),
    path("customers/<uuid:customer_id>/", views.CustomerDetailView.as_view(), name="customer-detail"),

    # ── Bookings ─────────────────────────────────────────────────────────────────
    path("bookings/",                       views.BookingListView.as_view(),   name="booking-list"),
    path("bookings/<uuid:booking_id>/",     views.BookingDetailView.as_view(), name="booking-detail"),
    path("bookings/<uuid:booking_id>/confirm/",  views.BookingConfirmView.as_view(),  name="booking-confirm"),
    path("bookings/<uuid:booking_id>/board/",    views.BookingBoardView.as_view(),    name="booking-board"),
    path("bookings/<uuid:booking_id>/cancel/",   views.BookingCancelView.as_view(),   name="booking-cancel"),
    path("bookings/<uuid:booking_id>/no-show/",  views.BookingNoShowView.as_view(),   name="booking-no-show"),

    # ── Bookings by trip (boarding view) ─────────────────────────────────────────
    path("trips/<uuid:trip_id>/bookings/", views.TripBookingListView.as_view(), name="trip-booking-list"),

    # ── Luggage ──────────────────────────────────────────────────────────────────
    path("bookings/<uuid:booking_id>/luggage/",
         views.LuggageListView.as_view(), name="luggage-list"),
    path("bookings/<uuid:booking_id>/luggage/<uuid:luggage_id>/",
         views.LuggageDetailView.as_view(), name="luggage-detail"),
    path("bookings/<uuid:booking_id>/luggage/<uuid:luggage_id>/status/",
         views.LuggageStatusView.as_view(), name="luggage-status"),
]
