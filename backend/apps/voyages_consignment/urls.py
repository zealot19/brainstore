from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("parcels/", v.ParcelListView.as_view()),
    path("parcels/pending/", v.ParcelPendingView.as_view()),
    path("parcels/bulk/", v.ParcelBulkView.as_view()),
    path("parcels/<uuid:pk>/", v.ParcelDetailView.as_view()),
    path("parcels/<uuid:pk>/assign-trip/", v.ParcelAssignTripView.as_view()),
    path("parcels/<uuid:pk>/arrived/", v.ParcelArrivedView.as_view()),
    path("parcels/<uuid:pk>/pickup/", v.ParcelPickupView.as_view()),
    path("parcels/<uuid:pk>/cancel/", v.ParcelCancelView.as_view()),
    path("baggage/", v.BaggageListView.as_view()),
    path("baggage/bulk/", v.BaggageBulkView.as_view()),
    path("baggage/<uuid:pk>/", v.BaggageDetailView.as_view()),
    path("baggage/<uuid:pk>/load/", v.BaggageLoadView.as_view()),
    path("baggage/<uuid:pk>/deliver/", v.BaggageDeliverView.as_view()),
    path("trips/<uuid:trip_id>/manifest/", v.TripManifestView.as_view()),
]
