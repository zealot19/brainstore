from django.db import transaction
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.hr.models import Grade, ContractType, LeaveType, Department, JobPosition


# ── Grades ───────────────────────────────────────────────────────────────────

@transaction.atomic
def create_grade(*, company, created_by, code, name, level=1,
                 description="", salary_min=None, salary_max=None):
    if Grade.objects.filter(company=company, code=code, is_deleted=False).exists():
        raise ApplicationError(_("Un grade avec ce code existe déjà."))
    return Grade.objects.create(
        company=company, code=code, name=name, level=level,
        description=description, salary_min=salary_min, salary_max=salary_max,
        created_by=created_by,
    )


def update_grade(grade, *, updated_by, **fields):
    allowed = {"code", "name", "level", "description", "salary_min", "salary_max", "is_active"}
    if "code" in fields and fields["code"] != grade.code:
        if Grade.objects.filter(company=grade.company, code=fields["code"],
                                is_deleted=False).exclude(id=grade.id).exists():
            raise ApplicationError(_("Ce code de grade est déjà utilisé."))
    for key, val in fields.items():
        if key in allowed:
            setattr(grade, key, val)
    grade.updated_by = updated_by
    grade.save()
    return grade


def delete_grade(grade, *, deleted_by):
    if grade.employees.filter(is_deleted=False).exists():
        raise ApplicationError(_("Impossible de supprimer ce grade : des employés y sont rattachés."))
    grade.soft_delete(user=deleted_by)


# ── Types de contrat ──────────────────────────────────────────────────────────

@transaction.atomic
def create_contract_type(*, company=None, created_by, code, name,
                         duration_type="open_ended", notice_period_days=30,
                         trial_period_days=90, is_renewable=False):
    return ContractType.objects.create(
        company=company, code=code, name=name, duration_type=duration_type,
        notice_period_days=notice_period_days, trial_period_days=trial_period_days,
        is_renewable=is_renewable, created_by=created_by,
    )


def update_contract_type(ct, *, updated_by, **fields):
    if ct.is_system:
        raise ApplicationError(_("Les types système ne peuvent pas être modifiés."))
    allowed = {"code", "name", "duration_type", "notice_period_days",
               "trial_period_days", "is_renewable", "is_active"}
    for key, val in fields.items():
        if key in allowed:
            setattr(ct, key, val)
    ct.updated_by = updated_by
    ct.save()
    return ct


# ── Types de congé ────────────────────────────────────────────────────────────

@transaction.atomic
def create_leave_type(*, company=None, created_by, code, name, description="",
                      max_days_per_year=None, is_paid=True, requires_approval=True,
                      carry_over=False, max_carry_over_days=None,
                      min_notice_days=0, color="#3B82F6"):
    return LeaveType.objects.create(
        company=company, code=code, name=name, description=description,
        max_days_per_year=max_days_per_year, is_paid=is_paid,
        requires_approval=requires_approval, carry_over=carry_over,
        max_carry_over_days=max_carry_over_days, min_notice_days=min_notice_days,
        color=color, created_by=created_by,
    )


def update_leave_type(lt, *, updated_by, **fields):
    if lt.is_system:
        raise ApplicationError(_("Les types système ne peuvent pas être modifiés."))
    allowed = {"code", "name", "description", "max_days_per_year", "is_paid",
               "requires_approval", "carry_over", "max_carry_over_days",
               "min_notice_days", "color", "is_active"}
    for key, val in fields.items():
        if key in allowed:
            setattr(lt, key, val)
    lt.updated_by = updated_by
    lt.save()
    return lt


# ── Départements ──────────────────────────────────────────────────────────────

@transaction.atomic
def create_department(*, company, created_by, code, name, description="",
                      parent_id=None, head_id=None, order=0):
    if Department.objects.filter(company=company, code=code, is_deleted=False).exists():
        raise ApplicationError(_("Un département avec ce code existe déjà."))
    return Department.objects.create(
        company=company, code=code, name=name, description=description,
        parent_id=parent_id, head_id=head_id, order=order,
        created_by=created_by,
    )


@transaction.atomic
def update_department(dept, *, updated_by, **fields):
    allowed = {"code", "name", "description", "parent_id", "head_id", "order", "is_active"}
    if "code" in fields and fields["code"] != dept.code:
        if Department.objects.filter(company=dept.company, code=fields["code"],
                                     is_deleted=False).exclude(id=dept.id).exists():
            raise ApplicationError(_("Ce code de département est déjà utilisé."))
    # Empêcher la circularité parent
    if "parent_id" in fields and fields["parent_id"]:
        if str(fields["parent_id"]) == str(dept.id):
            raise ApplicationError(_("Un département ne peut pas être son propre parent."))
    for key, val in fields.items():
        if key in allowed:
            setattr(dept, key, val)
    dept.updated_by = updated_by
    dept.save()
    return dept


def delete_department(dept, *, deleted_by):
    if dept.sub_departments.filter(is_deleted=False).exists():
        raise ApplicationError(_("Supprimez d'abord les sous-départements."))
    if dept.employees.filter(is_deleted=False).exists():
        raise ApplicationError(_("Des employés sont rattachés à ce département."))
    dept.soft_delete(user=deleted_by)


# ── Postes ────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_job_position(*, company, created_by, title, code="", description="",
                         department_id=None, grade_id=None, is_management=False):
    if JobPosition.objects.filter(company=company, title=title, is_deleted=False).exists():
        raise ApplicationError(_("Un poste avec cet intitulé existe déjà."))
    return JobPosition.objects.create(
        company=company, title=title, code=code, description=description,
        department_id=department_id, grade_id=grade_id,
        is_management=is_management, created_by=created_by,
    )


def update_job_position(jp, *, updated_by, **fields):
    allowed = {"title", "code", "description", "department_id", "grade_id",
               "is_management", "is_active"}
    if "title" in fields and fields["title"] != jp.title:
        if JobPosition.objects.filter(company=jp.company, title=fields["title"],
                                      is_deleted=False).exclude(id=jp.id).exists():
            raise ApplicationError(_("Un poste avec cet intitulé existe déjà."))
    for key, val in fields.items():
        if key in allowed:
            setattr(jp, key, val)
    jp.updated_by = updated_by
    jp.save()
    return jp


def delete_job_position(jp, *, deleted_by):
    if jp.employees.filter(is_deleted=False).exists():
        raise ApplicationError(_("Des employés occupent ce poste."))
    jp.soft_delete(user=deleted_by)
