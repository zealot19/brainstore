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

    # ── Dépenses (générales + voyage) ────────────────────────────────────────────
    path("expenses/general/",                    views.GeneralExpenseListView.as_view(),     name="gexp-list"),
    path("expenses/general/<uuid:pk>/",          views.GeneralExpenseDetailView.as_view(),   name="gexp-detail"),
    path("expenses/general/<uuid:pk>/disburse/", views.GeneralExpenseDisburseView.as_view(), name="gexp-disburse"),
    path("expenses/general/<uuid:pk>/voucher/",  views.GeneralExpenseVoucherView.as_view(),  name="gexp-voucher"),
    path("expenses/voyage/",                     views.VoyageExpenseListView.as_view(),      name="vexp-list"),
    path("expenses/voyage/<uuid:pk>/voucher/",   views.VoyageExpenseVoucherView.as_view(),   name="vexp-voucher"),
    path("expenses/dashboard/",                  views.ExpenseDashboardView.as_view(),       name="exp-dashboard"),

    # ── Recettes (voyage + colis + bagage + autre) ───────────────────────────────
    path("recettes/voyage/",            views.IncomeVoyageListView.as_view(),  name="income-voyage"),
    path("recettes/parcel/",            views.IncomeParcelListView.as_view(),  name="income-parcel"),
    path("recettes/baggage/",           views.IncomeBaggageListView.as_view(), name="income-baggage"),
    path("recettes/other/",             views.IncomeOtherListView.as_view(),   name="income-other"),
    path("recettes/dashboard/",         views.IncomeDashboardView.as_view(),   name="income-dashboard"),
    path("recettes/<uuid:pk>/receipt/", views.IncomeReceiptView.as_view(),     name="income-receipt"),

    # ── Moyens de paiement (config) ──────────────────────────────────────────────
    path("payment-methods/",           views.PaymentMethodListView.as_view(),   name="paymentmethod-list"),
    path("payment-methods/<uuid:pk>/", views.PaymentMethodDetailView.as_view(), name="paymentmethod-detail"),
]
