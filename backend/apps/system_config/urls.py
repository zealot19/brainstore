from django.urls import path
from . import views

urlpatterns = [
    # ── Packages ──────────────────────────────────────────────────────────────
    path("packages/",            views.PackageListView.as_view(),        name="package-list"),
    path("packages/<uuid:pk>/",  views.PackageDetailView.as_view(),      name="package-detail"),
    path("packages/admin/",      views.PackageAdminView.as_view(),       name="package-admin-create"),
    path("packages/admin/<uuid:pk>/", views.PackageAdminDetailView.as_view(), name="package-admin-detail"),

    # ── Companies / Institutions ───────────────────────────────────────────────
    path("companies/",                              views.CompanyListView.as_view(),          name="company-list"),
    path("companies/<uuid:pk>/",                    views.CompanyDetailView.as_view(),        name="company-detail"),
    path("companies/<uuid:pk>/suspend/",            views.CompanySuspendView.as_view(),       name="company-suspend"),
    path("companies/<uuid:pk>/activate/",           views.CompanyActivateView.as_view(),      name="company-activate"),
    path("companies/<uuid:pk>/cancel/",             views.CompanyCancelView.as_view(),        name="company-cancel"),
    path("companies/<uuid:pk>/stats/",              views.CompanyStatsView.as_view(),         name="company-stats"),
    path("companies/<uuid:pk>/change-package/",     views.CompanyChangePackageView.as_view(), name="company-change-package"),
    path("companies/<uuid:pk>/subscriptions/",      views.CompanySubscriptionListView.as_view(), name="company-subscriptions"),

    # ── Agencies ──────────────────────────────────────────────────────────────
    path("agencies/",            views.AgencyListView.as_view(),         name="agency-list"),
    path("agencies/tree/",       views.AgencyTreeView.as_view(),         name="agency-tree"),
    path("agencies/<uuid:pk>/",  views.AgencyDetailView.as_view(),       name="agency-detail"),

    # ── Parameters ────────────────────────────────────────────────────────────
    path("parameters/",          views.ParameterListView.as_view(),      name="parameter-list"),
    path("parameters/bulk/",     views.ParameterBulkView.as_view(),      name="parameter-bulk"),
    path("parameters/<uuid:pk>/", views.ParameterDetailView.as_view(),   name="parameter-detail"),

    # ── Feature Flags ─────────────────────────────────────────────────────────
    path("feature-flags/",             views.FeatureFlagListView.as_view(),   name="featureflag-list"),
    path("feature-flags/<uuid:pk>/",   views.FeatureFlagDetailView.as_view(), name="featureflag-detail"),
    path("feature-flags/<uuid:pk>/toggle/", views.FeatureFlagToggleView.as_view(), name="featureflag-toggle"),
    path("feature-flags/<uuid:pk>/set/",    views.FeatureFlagSetView.as_view(),    name="featureflag-set"),
]
