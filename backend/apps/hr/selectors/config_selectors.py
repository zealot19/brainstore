from django.db.models import Q, Count
from apps.hr.models import Grade, ContractType, LeaveType, Department, JobPosition


# ── Grades ───────────────────────────────────────────────────────────────────

def list_grades(company_id, *, search=None):
    qs = Grade.objects.filter(company_id=company_id, is_deleted=False).order_by("level", "code")
    if search:
        qs = qs.filter(Q(code__icontains=search) | Q(name__icontains=search))
    return qs


def get_grade(grade_id, company_id):
    try:
        return Grade.objects.get(id=grade_id, company_id=company_id, is_deleted=False)
    except Grade.DoesNotExist:
        return None


# ── Types de contrat ──────────────────────────────────────────────────────────

def list_contract_types(company_id=None, *, include_system=True, search=None):
    """Retourne les types de contrat de l'institution + les types système si include_system."""
    qs = ContractType.objects.filter(is_deleted=False)
    if company_id:
        if include_system:
            qs = qs.filter(Q(company_id=company_id) | Q(company__isnull=True))
        else:
            qs = qs.filter(company_id=company_id)
    else:
        qs = qs.filter(company__isnull=True)  # seulement les types système
    if search:
        qs = qs.filter(Q(code__icontains=search) | Q(name__icontains=search))
    return qs.order_by("name")


def get_contract_type(ct_id, company_id=None):
    try:
        qs = ContractType.objects.filter(is_deleted=False)
        if company_id:
            return qs.filter(Q(company_id=company_id) | Q(company__isnull=True)).get(id=ct_id)
        return qs.get(id=ct_id)
    except ContractType.DoesNotExist:
        return None


# ── Types de congé ────────────────────────────────────────────────────────────

def list_leave_types(company_id=None, *, include_system=True, search=None):
    qs = LeaveType.objects.filter(is_deleted=False)
    if company_id:
        if include_system:
            qs = qs.filter(Q(company_id=company_id) | Q(company__isnull=True))
        else:
            qs = qs.filter(company_id=company_id)
    else:
        qs = qs.filter(company__isnull=True)
    if search:
        qs = qs.filter(Q(code__icontains=search) | Q(name__icontains=search))
    return qs.order_by("name")


def get_leave_type(lt_id, company_id=None):
    try:
        qs = LeaveType.objects.filter(is_deleted=False)
        if company_id:
            return qs.filter(Q(company_id=company_id) | Q(company__isnull=True)).get(id=lt_id)
        return qs.get(id=lt_id)
    except LeaveType.DoesNotExist:
        return None


# ── Départements ──────────────────────────────────────────────────────────────

def list_departments(company_id, *, parent_id=None, search=None):
    qs = (Department.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("parent", "head")
          .annotate(employee_count=Count("employees", filter=Q(employees__is_deleted=False)))
          .order_by("order", "name"))
    if parent_id is not None:
        qs = qs.filter(parent_id=parent_id)
    if search:
        qs = qs.filter(Q(code__icontains=search) | Q(name__icontains=search))
    return qs


def list_root_departments(company_id):
    """Retourne les départements racines (sans parent) avec leurs enfants préchargés."""
    return (Department.objects
            .filter(company_id=company_id, parent__isnull=True, is_deleted=False)
            .select_related("head")
            .prefetch_related("sub_departments__sub_departments")
            .order_by("order", "name"))


def get_department(dept_id, company_id):
    try:
        return (Department.objects
                .select_related("parent", "head")
                .get(id=dept_id, company_id=company_id, is_deleted=False))
    except Department.DoesNotExist:
        return None


# ── Postes ────────────────────────────────────────────────────────────────────

def list_job_positions(company_id, *, department_id=None, search=None):
    qs = (JobPosition.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("department", "grade")
          .order_by("title"))
    if department_id:
        qs = qs.filter(department_id=department_id)
    if search:
        qs = qs.filter(Q(title__icontains=search) | Q(code__icontains=search))
    return qs


def get_job_position(jp_id, company_id):
    try:
        return (JobPosition.objects
                .select_related("department", "grade")
                .get(id=jp_id, company_id=company_id, is_deleted=False))
    except JobPosition.DoesNotExist:
        return None
