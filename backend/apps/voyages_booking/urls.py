from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("passengers/", v.PassengerListView.as_view()),
    path("passengers/<uuid:pk>/", v.PassengerDetailView.as_view()),
    path("passengers/<uuid:pk>/loyalty/", v.PassengerLoyaltyView.as_view()),
    path("trips/bookable/", v.BookableTripsView.as_view()),
    path("trips/<uuid:trip_id>/seat-map/", v.TripSeatMapView.as_view()),
    path("trips/<uuid:trip_id>/destinations/", v.TripDestinationsView.as_view()),
    path("bookings/", v.BookingListView.as_view()),
    path("bookings/<uuid:pk>/", v.BookingDetailView.as_view()),
    path("bookings/<uuid:pk>/cancel/", v.BookingCancelView.as_view()),
    path("bookings/<uuid:pk>/no-show/", v.BookingNoShowView.as_view()),
    path("tickets/<uuid:pk>/board/", v.TicketBoardView.as_view()),
]
