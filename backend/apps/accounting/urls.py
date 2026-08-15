from django.urls import path
from . import views

urlpatterns = [
    path("accounts/",            views.AccountListView.as_view()),
    path("accounts/<uuid:pk>/",  views.AccountDetailView.as_view()),
    path("journals/",            views.JournalListView.as_view()),
    path("journals/<uuid:pk>/",  views.JournalDetailView.as_view()),
    path("fiscal-years/",        views.FiscalYearListView.as_view()),
    path("periods/",             views.PeriodListView.as_view()),
    path("periods/<uuid:pk>/close/", views.PeriodCloseView.as_view()),
]
