from django.urls import path
from . import views as v

urlpatterns = [
    path("catalog/", v.ReportCatalogView.as_view()),
    path("filter-options/", v.FilterOptionsView.as_view()),
    path("<str:code>/", v.ReportGenerateView.as_view()),
]
