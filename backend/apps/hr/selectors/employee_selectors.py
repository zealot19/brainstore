from django.db.models import Q
from apps.hr.models import Employee, Contract


def list_employees(company_id, *, agency_id=None, department_id=None, job_position_id=None,
                   status=None, search=None):
    qs = (Employee.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("agency", "department", "job_position", "grade", "manager", "user")
          .order_by("last_name", "first_name"))

    if agency_id:
        qs = qs.filter(agency_id=agency_id)
    if department_id:
        qs = qs.filter(department_id=department_id)
    if job_position_id:
        qs = qs.filter(job_position_id=job_position_id)
    if status:
        qs = qs.filter(status=status)
    if search:
        qs = qs.filter(
            Q(first_name__icontains=search)
            | Q(last_name__icontains=search)
            | Q(employee_number__icontains=search)
            | Q(phone__icontains=search)
            | Q(personal_email__icontains=search)
        )
    return qs


def get_employee(employee_id, company_id):
    try:
        qs = (Employee.objects
              .select_related("agency", "department", "job_position", "grade", "manager", "user")
              .filter(id=employee_id, is_deleted=False))
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.get()
    except Employee.DoesNotExist:
        return None


def list_employee_contracts(employee_id, company_id):
    try:
        qs = Employee.objects.filter(id=employee_id, is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        emp = qs.get()
    except Employee.DoesNotExist:
        return None
    return (emp.contracts
            .filter(is_deleted=False)
            .select_related("contract_type", "currency")
            .order_by("-start_date"))


def get_contract(contract_id, employee_id, company_id):
    try:
        qs = Employee.objects.filter(id=employee_id, is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        emp = qs.get()
        return (emp.contracts
                .select_related("contract_type", "currency")
                .get(id=contract_id, is_deleted=False))
    except (Employee.DoesNotExist, Contract.DoesNotExist):
        return None
