from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("passengers/", v.PassengerListView.as_view()),
    path("passengers/<uuid:pk>/", v.PassengerDetailView.as_view()),
]
