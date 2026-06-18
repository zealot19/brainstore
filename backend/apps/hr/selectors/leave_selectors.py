from django.db.models import Q
from apps.hr.models import LeaveRequest, LeaveBalance


def list_leave_requests(company_id, *, employee_id=None, status=None,
                         leave_type_id=None, year=None, search=None):
    qs = (LeaveRequest.objects
          .filter(employee__company_id=company_id, is_deleted=False)
          .select_related("employee", "leave_type", "reviewed_by")
          .order_by("-start_date"))

    if employee_id:
        qs = qs.filter(employee_id=employee_id)
    if status:
        qs = qs.filter(status=status)
    if leave_type_id:
        qs = qs.filter(leave_type_id=leave_type_id)
    if year:
        qs = qs.filter(start_date__year=year)
    if search:
        qs = qs.filter(
            Q(employee__first_name__icontains=search)
            | Q(employee__last_name__icontains=search)
            | Q(employee__employee_number__icontains=search)
        )
    return qs


def get_leave_request(request_id, company_id):
    try:
        return (LeaveRequest.objects
                .select_related("employee", "leave_type", "reviewed_by")
                .get(id=request_id, employee__company_id=company_id, is_deleted=False))
    except LeaveRequest.DoesNotExist:
        return None


def get_leave_balance(employee_id, leave_type_id, year):
    return LeaveBalance.objects.filter(
        employee_id=employee_id, leave_type_id=leave_type_id, year=year
    ).first()


def list_employee_leave_balances(employee_id, year=None):
    qs = LeaveBalance.objects.filter(employee_id=employee_id).select_related("leave_type")
    if year:
        qs = qs.filter(year=year)
    return qs.order_by("leave_type__name")
