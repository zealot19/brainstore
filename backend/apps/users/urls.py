from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    # ── Liste & création ──────────────────────────────────────────────────────
    path("",                                views.UserListView.as_view(),              name="user-list"),
    path("stats/",                          views.UserStatsView.as_view(),             name="user-stats"),

    # ── Détail & modification ─────────────────────────────────────────────────
    path("<uuid:user_id>/",                 views.UserDetailView.as_view(),            name="user-detail"),

    # ── Cycle de vie du compte ────────────────────────────────────────────────
    path("<uuid:user_id>/activate/",        views.UserActivateView.as_view(),          name="user-activate"),
    path("<uuid:user_id>/deactivate/",      views.UserDeactivateView.as_view(),        name="user-deactivate"),
    path("<uuid:user_id>/unlock/",          views.UserUnlockView.as_view(),            name="user-unlock"),
    path("<uuid:user_id>/reset-password/",  views.UserAdminResetPasswordView.as_view(), name="user-reset-password"),

    # ── Agences ───────────────────────────────────────────────────────────────
    path("<uuid:user_id>/agencies/",        views.UserAgencyView.as_view(),            name="user-agencies"),
]
