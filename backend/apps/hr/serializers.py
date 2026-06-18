from rest_framework import serializers
from apps.hr.models import (
    Grade, ContractType, LeaveType,
    Department, JobPosition,
    Employee, Contract,
    LeaveBalance, LeaveRequest,
)


# ══════════════════════════════════════════════════════════════════════════════
# GRADES
# ══════════════════════════════════════════════════════════════════════════════

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Grade
        fields = ["id", "code", "name", "level", "description",
                  "salary_min", "salary_max", "is_active", "created_at"]


class GradeWriteSerializer(serializers.Serializer):
    code        = serializers.CharField(max_length=50)
    name        = serializers.CharField(max_length=200)
    level       = serializers.IntegerField(min_value=1, required=False, default=1)
    description = serializers.CharField(required=False, default="", allow_blank=True)
    salary_min  = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True)
    salary_max  = serializers.DecimalField(max_digits=14, decimal_places=2, required=False, allow_null=True)


# ══════════════════════════════════════════════════════════════════════════════
# TYPES DE CONTRAT
# ══════════════════════════════════════════════════════════════════════════════

class ContractTypeSerializer(serializers.ModelSerializer):
    duration_type_label = serializers.CharField(source="get_duration_type_display", read_only=True)

    class Meta:
        model  = ContractType
        fields = ["id", "code", "name", "duration_type", "duration_type_label",
                  "notice_period_days", "trial_period_days", "is_renewable",
                  "is_system", "is_active", "created_at"]


class ContractTypeWriteSerializer(serializers.Serializer):
    code               = serializers.CharField(max_length=50)
    name               = serializers.CharField(max_length=200)
    duration_type      = serializers.ChoiceField(choices=ContractType.DurationType.choices,
                                                 required=False, default="open_ended")
    notice_period_days = serializers.IntegerField(min_value=0, required=False, default=30)
    trial_period_days  = serializers.IntegerField(min_value=0, required=False, default=90)
    is_renewable       = serializers.BooleanField(required=False, default=False)


# ══════════════════════════════════════════════════════════════════════════════
# TYPES DE CONGÉ
# ══════════════════════════════════════════════════════════════════════════════

class LeaveTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = LeaveType
        fields = ["id", "code", "name", "description", "max_days_per_year",
                  "is_paid", "requires_approval", "carry_over", "max_carry_over_days",
                  "min_notice_days", "color", "is_system", "is_active", "created_at"]


class LeaveTypeWriteSerializer(serializers.Serializer):
    code               = serializers.CharField(max_length=50)
    name               = serializers.CharField(max_length=200)
    description        = serializers.CharField(required=False, default="", allow_blank=True)
    max_days_per_year  = serializers.DecimalField(max_digits=6, decimal_places=1,
                                                   required=False, allow_null=True)
    is_paid            = serializers.BooleanField(required=False, default=True)
    requires_approval  = serializers.BooleanField(required=False, default=True)
    carry_over         = serializers.BooleanField(required=False, default=False)
    max_carry_over_days = serializers.DecimalField(max_digits=6, decimal_places=1,
                                                    required=False, allow_null=True)
    min_notice_days    = serializers.IntegerField(min_value=0, required=False, default=0)
    color              = serializers.CharField(max_length=7, required=False, default="#3B82F6")


# ══════════════════════════════════════════════════════════════════════════════
# DÉPARTEMENTS
# ══════════════════════════════════════════════════════════════════════════════

class DepartmentSerializer(serializers.ModelSerializer):
    parent_name     = serializers.CharField(source="parent.name",       read_only=True, default=None)
    head_name       = serializers.SerializerMethodField()
    employee_count  = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model  = Department
        fields = ["id", "code", "name", "description", "parent_id", "parent_name",
                  "head_id", "head_name", "order", "employee_count", "is_active", "created_at"]

    def get_head_name(self, obj):
        if obj.head:
            return obj.head.full_name
        return None


class DepartmentTreeSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model  = Department
        fields = ["id", "code", "name", "order", "is_active", "children"]

    def get_children(self, obj):
        subs = obj.sub_departments.filter(is_deleted=False).order_by("order", "name")
        return DepartmentTreeSerializer(subs, many=True).data


class DepartmentWriteSerializer(serializers.Serializer):
    code        = serializers.CharField(max_length=50)
    name        = serializers.CharField(max_length=200)
    description = serializers.CharField(required=False, default="", allow_blank=True)
    parent_id   = serializers.UUIDField(required=False, allow_null=True, default=None)
    head_id     = serializers.UUIDField(required=False, allow_null=True, default=None)
    order       = serializers.IntegerField(required=False, default=0)


# ══════════════════════════════════════════════════════════════════════════════
# POSTES
# ══════════════════════════════════════════════════════════════════════════════

class JobPositionSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source="department.name", read_only=True, default=None)
    grade_name      = serializers.CharField(source="grade.name",      read_only=True, default=None)

    class Meta:
        model  = JobPosition
        fields = ["id", "title", "code", "description",
                  "department_id", "department_name",
                  "grade_id", "grade_name",
                  "is_management", "is_active", "created_at"]


class JobPositionWriteSerializer(serializers.Serializer):
    title         = serializers.CharField(max_length=200)
    code          = serializers.CharField(max_length=50, required=False, default="", allow_blank=True)
    description   = serializers.CharField(required=False, default="", allow_blank=True)
    department_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    grade_id      = serializers.UUIDField(required=False, allow_null=True, default=None)
    is_management = serializers.BooleanField(required=False, default=False)


# ══════════════════════════════════════════════════════════════════════════════
# EMPLOYÉS
# ══════════════════════════════════════════════════════════════════════════════

class EmployeeListSerializer(serializers.ModelSerializer):
    full_name        = serializers.CharField(read_only=True)
    department_name  = serializers.CharField(source="department.name",    read_only=True, default=None)
    job_title        = serializers.CharField(source="job_position.title", read_only=True, default=None)
    grade_name       = serializers.CharField(source="grade.name",         read_only=True, default=None)
    status_label     = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model  = Employee
        fields = [
            "id", "employee_number", "full_name", "first_name", "last_name",
            "gender", "phone", "personal_email",
            "department_id", "department_name",
            "job_position_id", "job_title",
            "grade_id", "grade_name",
            "status", "status_label", "hire_date", "is_active", "created_at",
        ]


class EmployeeDetailSerializer(EmployeeListSerializer):
    manager_name = serializers.SerializerMethodField()

    class Meta(EmployeeListSerializer.Meta):
        fields = EmployeeListSerializer.Meta.fields + [
            "birth_date", "birth_place", "nationality", "marital_status",
            "dependents_count", "emergency_contact_name", "emergency_contact_phone",
            "id_card_number", "id_card_expiry", "social_security_no",
            "manager_id", "manager_name",
            "agency_id", "user_id",
            "confirmation_date", "termination_date",
            "bank_name", "bank_account_number", "bank_rib",
        ]

    def get_manager_name(self, obj):
        if obj.manager:
            return obj.manager.full_name
        return None


class EmployeeCreateSerializer(serializers.Serializer):
    first_name              = serializers.CharField(max_length=150)
    last_name               = serializers.CharField(max_length=150)
    hire_date               = serializers.DateField()
    gender                  = serializers.ChoiceField(choices=Employee.Gender.choices, required=False, default="", allow_blank=True)
    birth_date              = serializers.DateField(required=False, allow_null=True)
    birth_place             = serializers.CharField(max_length=200, required=False, default="", allow_blank=True)
    nationality             = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    marital_status          = serializers.ChoiceField(choices=[("", "-")] + Employee.MaritalStatus.choices,
                                                       required=False, default="", allow_blank=True)
    dependents_count        = serializers.IntegerField(min_value=0, required=False, default=0)
    phone                   = serializers.CharField(max_length=30,  required=False, default="", allow_blank=True)
    personal_email          = serializers.EmailField(required=False, default="", allow_blank=True)
    emergency_contact_name  = serializers.CharField(max_length=200, required=False, default="", allow_blank=True)
    emergency_contact_phone = serializers.CharField(max_length=30,  required=False, default="", allow_blank=True)
    id_card_number          = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    id_card_expiry          = serializers.DateField(required=False, allow_null=True)
    social_security_no      = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    agency_id               = serializers.UUIDField(required=False, allow_null=True, default=None)
    user_id                 = serializers.UUIDField(required=False, allow_null=True, default=None)
    department_id           = serializers.UUIDField(required=False, allow_null=True, default=None)
    job_position_id         = serializers.UUIDField(required=False, allow_null=True, default=None)
    grade_id                = serializers.UUIDField(required=False, allow_null=True, default=None)
    manager_id              = serializers.UUIDField(required=False, allow_null=True, default=None)
    confirmation_date       = serializers.DateField(required=False, allow_null=True)
    bank_name               = serializers.CharField(max_length=200, required=False, default="", allow_blank=True)
    bank_account_number     = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    bank_rib                = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    employee_number         = serializers.CharField(max_length=50,  required=False, allow_null=True, default=None)


class EmployeeUpdateSerializer(serializers.Serializer):
    first_name              = serializers.CharField(max_length=150, required=False)
    last_name               = serializers.CharField(max_length=150, required=False)
    gender                  = serializers.ChoiceField(choices=Employee.Gender.choices, required=False, allow_blank=True)
    birth_date              = serializers.DateField(required=False, allow_null=True)
    birth_place             = serializers.CharField(max_length=200, required=False, allow_blank=True)
    nationality             = serializers.CharField(max_length=100, required=False, allow_blank=True)
    marital_status          = serializers.CharField(max_length=20,  required=False, allow_blank=True)
    dependents_count        = serializers.IntegerField(min_value=0, required=False)
    phone                   = serializers.CharField(max_length=30,  required=False, allow_blank=True)
    personal_email          = serializers.EmailField(required=False, allow_blank=True)
    emergency_contact_name  = serializers.CharField(max_length=200, required=False, allow_blank=True)
    emergency_contact_phone = serializers.CharField(max_length=30,  required=False, allow_blank=True)
    id_card_number          = serializers.CharField(max_length=100, required=False, allow_blank=True)
    id_card_expiry          = serializers.DateField(required=False, allow_null=True)
    social_security_no      = serializers.CharField(max_length=100, required=False, allow_blank=True)
    agency_id               = serializers.UUIDField(required=False, allow_null=True)
    user_id                 = serializers.UUIDField(required=False, allow_null=True)
    department_id           = serializers.UUIDField(required=False, allow_null=True)
    job_position_id         = serializers.UUIDField(required=False, allow_null=True)
    grade_id                = serializers.UUIDField(required=False, allow_null=True)
    manager_id              = serializers.UUIDField(required=False, allow_null=True)
    confirmation_date       = serializers.DateField(required=False, allow_null=True)
    bank_name               = serializers.CharField(max_length=200, required=False, allow_blank=True)
    bank_account_number     = serializers.CharField(max_length=100, required=False, allow_blank=True)
    bank_rib                = serializers.CharField(max_length=100, required=False, allow_blank=True)


class EmployeeTerminateSerializer(serializers.Serializer):
    termination_date = serializers.DateField()
    reason           = serializers.CharField(required=False, default="", allow_blank=True)


# ══════════════════════════════════════════════════════════════════════════════
# CONTRATS
# ══════════════════════════════════════════════════════════════════════════════

class ContractSerializer(serializers.ModelSerializer):
    contract_type_name = serializers.CharField(source="contract_type.name", read_only=True)
    currency_code      = serializers.CharField(source="currency.code",       read_only=True, default=None)
    gross_salary       = serializers.FloatField(read_only=True)

    class Meta:
        model  = Contract
        fields = [
            "id", "reference", "contract_type_id", "contract_type_name",
            "start_date", "end_date", "base_salary",
            "currency_id", "currency_code", "payment_frequency",
            "transport_allowance", "housing_allowance", "meal_allowance",
            "other_allowances", "gross_salary",
            "is_current", "notes", "created_at",
        ]


class ContractWriteSerializer(serializers.Serializer):
    contract_type_id    = serializers.UUIDField()
    start_date          = serializers.DateField()
    base_salary         = serializers.DecimalField(max_digits=14, decimal_places=2)
    end_date            = serializers.DateField(required=False, allow_null=True)
    reference           = serializers.CharField(max_length=100, required=False, default="", allow_blank=True)
    currency_id         = serializers.UUIDField(required=False, allow_null=True, default=None)
    payment_frequency   = serializers.ChoiceField(choices=Contract.PaymentFrequency.choices,
                                                   required=False, default="monthly")
    transport_allowance = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    housing_allowance   = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    meal_allowance      = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    other_allowances    = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, default=0)
    notes               = serializers.CharField(required=False, default="", allow_blank=True)


# ══════════════════════════════════════════════════════════════════════════════
# CONGÉS
# ══════════════════════════════════════════════════════════════════════════════

class LeaveBalanceSerializer(serializers.ModelSerializer):
    leave_type_name  = serializers.CharField(source="leave_type.name",  read_only=True)
    leave_type_color = serializers.CharField(source="leave_type.color", read_only=True)
    remaining_days   = serializers.DecimalField(max_digits=6, decimal_places=1, read_only=True)

    class Meta:
        model  = LeaveBalance
        fields = ["id", "leave_type_id", "leave_type_name", "leave_type_color",
                  "year", "total_days", "used_days", "carried_over", "remaining_days"]


class LeaveRequestListSerializer(serializers.ModelSerializer):
    employee_name    = serializers.SerializerMethodField()
    leave_type_name  = serializers.CharField(source="leave_type.name",  read_only=True)
    leave_type_color = serializers.CharField(source="leave_type.color", read_only=True)
    status_label     = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model  = LeaveRequest
        fields = [
            "id", "employee_id", "employee_name",
            "leave_type_id", "leave_type_name", "leave_type_color",
            "start_date", "end_date", "days_count",
            "status", "status_label", "reason", "created_at",
        ]

    def get_employee_name(self, obj):
        return obj.employee.full_name


class LeaveRequestDetailSerializer(LeaveRequestListSerializer):
    reviewed_by_name = serializers.SerializerMethodField()

    class Meta(LeaveRequestListSerializer.Meta):
        fields = LeaveRequestListSerializer.Meta.fields + [
            "reviewed_by_id", "reviewed_by_name", "reviewed_at", "rejection_reason",
        ]

    def get_reviewed_by_name(self, obj):
        if obj.reviewed_by:
            return obj.reviewed_by.get_full_name() or obj.reviewed_by.email
        return None


class LeaveRequestCreateSerializer(serializers.Serializer):
    employee_id   = serializers.UUIDField()
    leave_type_id = serializers.UUIDField()
    start_date    = serializers.DateField()
    end_date      = serializers.DateField()
    reason        = serializers.CharField(required=False, default="", allow_blank=True)


class LeaveRequestRejectSerializer(serializers.Serializer):
    reason = serializers.CharField(required=False, default="", allow_blank=True)
