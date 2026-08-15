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
    path("partners/",           views.PartnerListView.as_view()),
    path("partners/<uuid:pk>/", views.PartnerDetailView.as_view()),
    path("entries/",              views.EntryListView.as_view()),
    path("entries/<uuid:pk>/",    views.EntryDetailView.as_view()),
    path("entries/<uuid:pk>/post/",   views.EntryPostView.as_view()),
    path("entries/<uuid:pk>/cancel/", views.EntryCancelView.as_view()),
]
