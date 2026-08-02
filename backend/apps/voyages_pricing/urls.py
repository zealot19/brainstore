from django.urls import path
from .config_api import views as v

urlpatterns = [
    path("fares/", v.FareListView.as_view()),
    path("fares/bulk-delete/", v.FareBulkDeleteView.as_view()),
    path("fares/<uuid:pk>/", v.FareDetailView.as_view()),
    path("routes/<uuid:route_id>/points/", v.RoutePointsView.as_view()),
]
