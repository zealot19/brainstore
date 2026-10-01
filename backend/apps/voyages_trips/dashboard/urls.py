from django.urls import path
from apps.voyages_trips.dashboard import views as v

urlpatterns = [
    path("trips/", v.TripCardsView.as_view()),
    path("series/", v.SeriesView.as_view()),
]
