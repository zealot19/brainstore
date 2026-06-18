from django.urls import path
from . import views

app_name = "authentication"

urlpatterns = [
    # ── Session ──────────────────────────────────────────────────────────────
    path("login/",               views.LoginView.as_view(),               name="login"),
    path("login/2fa/",           views.Login2FAVerifyView.as_view(),      name="login-2fa"),
    path("refresh/",             views.RefreshView.as_view(),              name="refresh"),
    path("logout/",              views.LogoutView.as_view(),               name="logout"),
    path("logout-all/",          views.LogoutAllView.as_view(),            name="logout-all"),

    # ── Profil ────────────────────────────────────────────────────────────────
    path("me/",                  views.MeView.as_view(),                   name="me"),

    # ── Sessions ──────────────────────────────────────────────────────────────
    path("sessions/",            views.SessionListView.as_view(),          name="sessions"),
    path("sessions/<str:jti>/",  views.SessionRevokeView.as_view(),        name="session-revoke"),

    # ── Mot de passe ──────────────────────────────────────────────────────────
    path("change-password/",     views.ChangePasswordView.as_view(),       name="change-password"),
    path("password-reset/",      views.PasswordResetRequestView.as_view(), name="password-reset-request"),
    path("password-reset/confirm/", views.PasswordResetConfirmView.as_view(), name="password-reset-confirm"),

    # ── 2FA TOTP ──────────────────────────────────────────────────────────────
    path("2fa/setup/",           views.TOTP2FASetupView.as_view(),         name="2fa-setup"),
    path("2fa/verify/",          views.TOTP2FAVerifyEnableView.as_view(),  name="2fa-verify-enable"),
    path("2fa/disable/",         views.TOTP2FADisableView.as_view(),       name="2fa-disable"),
]
