from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import (
    Grade, ContractType, LeaveType, Department, JobPosition,
    Employee, Contract, LeaveBalance, LeaveRequest,
)


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "level", "salary_min", "salary_max", "company", "is_active"]
    list_filter   = ["company", "is_active"]
    search_fields = ["code", "name"]
    ordering      = ["level", "code"]


@admin.register(ContractType)
class ContractTypeAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "duration_type", "is_system", "is_active"]
    list_filter   = ["duration_type", "is_system"]
    search_fields = ["code", "name"]


@admin.register(LeaveType)
class LeaveTypeAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "max_days_per_year", "is_paid", "requires_approval", "is_system"]
    list_filter   = ["is_paid", "requires_approval", "is_system"]
    search_fields = ["code", "name"]


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display  = ["code", "name", "parent", "head", "company", "is_active"]
    list_filter   = ["company", "is_active"]
    search_fields = ["code", "name"]
    ordering      = ["order", "name"]


@admin.register(JobPosition)
class JobPositionAdmin(admin.ModelAdmin):
    list_display  = ["title", "code", "department", "grade", "is_management", "is_active"]
    list_filter   = ["department", "is_management"]
    search_fields = ["title", "code"]


class ContractInline(admin.TabularInline):
    model      = Contract
    extra      = 0
    fields     = ["contract_type", "start_date", "end_date", "base_salary", "is_current"]
    readonly_fields = ["is_current"]


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display  = ["employee_number", "full_name", "department", "job_position",
                     "status", "hire_date", "company"]
    list_filter   = ["status", "department", "company", "is_active"]
    search_fields = ["employee_number", "first_name", "last_name", "phone"]
    ordering      = ["last_name", "first_name"]
    readonly_fields = ["employee_number"]
    inlines       = [ContractInline]


@admin.register(Contract)
class ContractAdmin(admin.ModelAdmin):
    list_display  = ["employee", "contract_type", "start_date", "end_date",
                     "base_salary", "is_current"]
    list_filter   = ["contract_type", "is_current"]
    search_fields = ["employee__first_name", "employee__last_name", "reference"]
    ordering      = ["-start_date"]


@admin.register(LeaveBalance)
class LeaveBalanceAdmin(admin.ModelAdmin):
    list_display  = ["employee", "leave_type", "year", "total_days", "used_days", "remaining_days"]
    list_filter   = ["leave_type", "year"]
    search_fields = ["employee__first_name", "employee__last_name"]


@admin.register(LeaveRequest)
class LeaveRequestAdmin(admin.ModelAdmin):
    list_display  = ["employee", "leave_type", "start_date", "end_date", "days_count", "status"]
    list_filter   = ["status", "leave_type"]
    search_fields = ["employee__first_name", "employee__last_name"]
    ordering      = ["-start_date"]
    readonly_fields = ["days_count", "reviewed_at"]
