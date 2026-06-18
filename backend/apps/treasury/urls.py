from django.urls import path
from apps.treasury import views

urlpatterns = [
    # ── Stats ──────────────────────────────────────────────────────────────────
    path("stats/", views.TreasuryStatsView.as_view(), name="treasury-stats"),

    # ── Cash registers ─────────────────────────────────────────────────────────
    path("registers/",                    views.CashRegisterListView.as_view(),   name="register-list"),
    path("registers/<uuid:register_id>/", views.CashRegisterDetailView.as_view(), name="register-detail"),

    # ── Bank accounts ──────────────────────────────────────────────────────────
    path("banks/",                    views.BankAccountListView.as_view(),   name="bank-list"),
    path("banks/<uuid:account_id>/",  views.BankAccountDetailView.as_view(), name="bank-detail"),

    # ── Cash sessions ──────────────────────────────────────────────────────────
    path("sessions/",                          views.CashSessionListView.as_view(), name="session-list"),
    path("sessions/open/",                     views.OpenSessionView.as_view(),     name="session-open"),
    path("sessions/<uuid:session_id>/",        views.CashSessionDetailView.as_view(), name="session-detail"),
    path("sessions/<uuid:session_id>/close/",  views.CloseSessionView.as_view(),    name="session-close"),

    # ── Transactions ───────────────────────────────────────────────────────────
    path("transactions/",               views.TransactionListView.as_view(),   name="transaction-list"),
    path("transactions/<uuid:txn_id>/", views.TransactionDetailView.as_view(), name="transaction-detail"),

    # ── Transfers ──────────────────────────────────────────────────────────────
    path("transfers/",                        views.TransferListView.as_view(),   name="transfer-list"),
    path("transfers/<uuid:transfer_id>/",     views.TransferDetailView.as_view(), name="transfer-detail"),
]
