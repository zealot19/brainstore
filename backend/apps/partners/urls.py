from django.urls import path
from apps.partners import views as v

urlpatterns = [
    path("", v.PartnerListView.as_view(), name="partner-list"),
    path("<uuid:pk>/", v.PartnerDetailView.as_view(), name="partner-detail"),
]
