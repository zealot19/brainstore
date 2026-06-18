from django.urls import path
from . import views

app_name = "hr"

urlpatterns = [
    # ── Configuration : Grades ────────────────────────────────────────────────
    path("config/grades/",              views.GradeListView.as_view(),            name="grade-list"),
    path("config/grades/<uuid:pk>/",    views.GradeDetailView.as_view(),          name="grade-detail"),

    # ── Configuration : Types de contrat ──────────────────────────────────────
    path("config/contract-types/",           views.ContractTypeListView.as_view(),   name="contract-type-list"),
    path("config/contract-types/<uuid:pk>/", views.ContractTypeDetailView.as_view(), name="contract-type-detail"),

    # ── Configuration : Types de congé ────────────────────────────────────────
    path("config/leave-types/",           views.LeaveTypeListView.as_view(),   name="leave-type-list"),
    path("config/leave-types/<uuid:pk>/", views.LeaveTypeDetailView.as_view(), name="leave-type-detail"),

    # ── Configuration : Départements ──────────────────────────────────────────
    path("config/departments/",              views.DepartmentListView.as_view(),   name="department-list"),
    path("config/departments/tree/",         views.DepartmentTreeView.as_view(),   name="department-tree"),
    path("config/departments/<uuid:pk>/",    views.DepartmentDetailView.as_view(), name="department-detail"),

    # ── Configuration : Postes ────────────────────────────────────────────────
    path("config/job-positions/",           views.JobPositionListView.as_view(),   name="job-position-list"),
    path("config/job-positions/<uuid:pk>/", views.JobPositionDetailView.as_view(), name="job-position-detail"),

    # ── Gestion : Employés ────────────────────────────────────────────────────
    path("employees/",                           views.EmployeeListView.as_view(),           name="employee-list"),
    path("employees/<uuid:emp_id>/",             views.EmployeeDetailView.as_view(),         name="employee-detail"),
    path("employees/<uuid:emp_id>/terminate/",   views.EmployeeTerminateView.as_view(),      name="employee-terminate"),

    # ── Gestion : Contrats par employé ────────────────────────────────────────
    path("employees/<uuid:emp_id>/contracts/",
         views.EmployeeContractListView.as_view(),  name="employee-contract-list"),
    path("employees/<uuid:emp_id>/contracts/<uuid:contract_id>/",
         views.EmployeeContractDetailView.as_view(), name="employee-contract-detail"),

    # ── Gestion : Congés par employé ──────────────────────────────────────────
    path("employees/<uuid:emp_id>/leave-balances/",
         views.EmployeeLeaveBalanceView.as_view(),    name="employee-leave-balances"),
    path("employees/<uuid:emp_id>/leave-requests/",
         views.EmployeeLeaveRequestListView.as_view(), name="employee-leave-requests"),

    # ── Gestion : Demandes de congé (vue admin) ───────────────────────────────
    path("leave-requests/",                        views.LeaveRequestListView.as_view(),    name="leave-request-list"),
    path("leave-requests/<uuid:req_id>/",          views.LeaveRequestDetailView.as_view(),  name="leave-request-detail"),
    path("leave-requests/<uuid:req_id>/approve/",  views.LeaveRequestApproveView.as_view(), name="leave-request-approve"),
    path("leave-requests/<uuid:req_id>/reject/",   views.LeaveRequestRejectView.as_view(),  name="leave-request-reject"),
    path("leave-requests/<uuid:req_id>/cancel/",   views.LeaveRequestCancelView.as_view(),  name="leave-request-cancel"),
]
