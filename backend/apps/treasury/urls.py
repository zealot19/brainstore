from django.urls import path
from apps.treasury import views

urlpatterns = [
    # ── Stats ──────────────────────────────────────────────────────────────────
    path("stats/", views.TreasuryStatsView.as_view(), name="treasury-stats"),
    path("series/", views.TreasurySeriesView.as_view(), name="treasury-series"),

    # ── Cash registers ─────────────────────────────────────────────────────────
    path("registers/",                    views.CashRegisterListView.as_view(),   name="register-list"),
    path("registers/<uuid:register_id>/", views.CashRegisterDetailView.as_view(), name="register-detail"),

    # ── Bank accounts ──────────────────────────────────────────────────────────
    path("banks/",                    views.BankAccountListView.as_view(),   name="bank-list"),
    path("banks/<uuid:account_id>/",  views.BankAccountDetailView.as_view(), name="bank-detail"),

    # ── Cash sessions ──────────────────────────────────────────────────────────
    path("sessions/",                          views.CashSessionListView.as_view(), name="session-list"),
    path("sessions/my-active/",                views.MyActiveSessionView.as_view(), name="session-my-active"),
    path("sessions/open/",                     views.OpenSessionView.as_view(),     name="session-open"),
    path("sessions/schedule/",                 views.ScheduleSessionView.as_view(), name="session-schedule"),
    path("sessions/guichetiers/",              views.GuichetierListView.as_view(),  name="session-guichetiers"),
    path("sessions/<uuid:session_id>/",        views.CashSessionDetailView.as_view(), name="session-detail"),
    path("sessions/<uuid:session_id>/open/",   views.OpenScheduledSessionView.as_view(), name="session-open-scheduled"),
    path("sessions/<uuid:session_id>/close/",  views.CloseSessionView.as_view(),    name="session-close"),
    path("sessions/<uuid:session_id>/suspend/",views.SuspendSessionView.as_view(),  name="session-suspend"),
    path("sessions/<uuid:session_id>/resume/", views.ResumeSessionView.as_view(),   name="session-resume"),
    path("sessions/<uuid:session_id>/stop/",   views.SessionStopView.as_view(),     name="session-stop"),
    path("sessions/<uuid:session_id>/extend/", views.ExtendSessionView.as_view(),   name="session-extend"),
    path("sessions/<uuid:session_id>/counts/", views.SessionCountsView.as_view(),   name="session-counts"),
    path("sessions/<uuid:session_id>/billetage/", views.SessionBilletageView.as_view(), name="session-billetage"),
    path("sessions/<uuid:session_id>/report/", views.SessionReportView.as_view(),   name="session-report"),

    # ── Coupures monétaires (billetage) ──────────────────────────────────────────
    path("denominations/",           views.DenominationListView.as_view(),   name="denomination-list"),
    path("denominations/<uuid:pk>/", views.DenominationDetailView.as_view(), name="denomination-detail"),
    path("value-types/",             views.CashValueTypeListView.as_view(),   name="value-type-list"),
    path("value-types/<uuid:pk>/",   views.CashValueTypeDetailView.as_view(), name="value-type-detail"),
    path("operation-types/",           views.OperationTypeListView.as_view(),   name="operation-type-list"),
    path("operation-types/<uuid:pk>/", views.OperationTypeDetailView.as_view(), name="operation-type-detail"),
    path("sessions/<uuid:session_id>/explanations/", views.SessionExplanationListView.as_view(), name="explanation-list"),
    path("explanations/<uuid:pk>/respond/", views.ExplanationRespondView.as_view(), name="explanation-respond"),
    path("explanations/<uuid:pk>/decide/", views.ExplanationDecideView.as_view(), name="explanation-decide"),

    # ── Transactions ───────────────────────────────────────────────────────────
    path("transactions/",               views.TransactionListView.as_view(),   name="transaction-list"),
    path("transactions/<uuid:txn_id>/", views.TransactionDetailView.as_view(), name="transaction-detail"),

    # ── Validation des opérations (M26) ──────────────────────────────────────────
    path("operations/",                        views.OperationListView.as_view(),       name="operation-list"),
    path("operations/<uuid:pk>/validate/",     views.OperationValidateView.as_view(),   name="operation-validate"),
    path("operations/<uuid:pk>/invalidate/",   views.OperationInvalidateView.as_view(), name="operation-invalidate"),
    path("operations/<uuid:pk>/modify/",       views.OperationModifyView.as_view(),     name="operation-modify"),

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
    path("recettes/delivery/",          views.IncomeDeliveryListView.as_view(), name="income-delivery"),
    path("recettes/other/",             views.IncomeOtherListView.as_view(),   name="income-other"),
    path("recettes/dashboard/",         views.IncomeDashboardView.as_view(),   name="income-dashboard"),
    path("recettes/<uuid:pk>/receipt/", views.IncomeReceiptView.as_view(),     name="income-receipt"),

    # ── Moyens de paiement (config) ──────────────────────────────────────────────
    path("payment-methods/",           views.PaymentMethodListView.as_view(),   name="paymentmethod-list"),
    path("payment-methods/<uuid:pk>/", views.PaymentMethodDetailView.as_view(), name="paymentmethod-detail"),

    # ── Config remboursement ─────────────────────────────────────────────────────
    path("refund-rate/", views.RefundRateView.as_view(), name="refund-rate"),

    # ── Remboursement par référence (guichet caisse) ─────────────────────────────
    path("refunds/lookup/", views.RefundLookupView.as_view(),      name="refund-lookup"),
    path("refunds/",        views.RefundByReferenceView.as_view(), name="refund-perform"),
]
