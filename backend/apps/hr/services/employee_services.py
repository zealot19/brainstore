from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.hr.models import Employee, Contract


def _next_employee_number(company) -> str:
    """Génère le prochain matricule pour l'institution (format : EMP-AAAA-NNNN)."""
    year = timezone.now().year
    prefix = f"EMP-{year}-"
    count = (Employee.objects
             .select_for_update()
             .filter(company=company, employee_number__startswith=prefix)
             .count())
    return f"{prefix}{count + 1:04d}"


@transaction.atomic
def create_employee(
    *,
    company,
    created_by,
    first_name: str,
    last_name: str,
    hire_date,
    gender: str = "",
    birth_date=None,
    birth_place: str = "",
    nationality: str = "",
    marital_status: str = "",
    dependents_count: int = 0,
    phone: str = "",
    personal_email: str = "",
    emergency_contact_name: str = "",
    emergency_contact_phone: str = "",
    id_card_number: str = "",
    id_card_expiry=None,
    social_security_no: str = "",
    agency_id=None,
    user_id=None,
    department_id=None,
    job_position_id=None,
    grade_id=None,
    manager_id=None,
    confirmation_date=None,
    bank_name: str = "",
    bank_account_number: str = "",
    bank_rib: str = "",
    employee_number: str = None,
):
    if employee_number is None:
        employee_number = _next_employee_number(company)

    employee = Employee(
        company=company,
        employee_number=employee_number,
        first_name=first_name,
        last_name=last_name,
        hire_date=hire_date,
        gender=gender,
        birth_date=birth_date,
        birth_place=birth_place,
        nationality=nationality,
        marital_status=marital_status,
        dependents_count=dependents_count,
        phone=phone,
        personal_email=personal_email,
        emergency_contact_name=emergency_contact_name,
        emergency_contact_phone=emergency_contact_phone,
        id_card_number=id_card_number,
        id_card_expiry=id_card_expiry,
        social_security_no=social_security_no,
        agency_id=agency_id,
        user_id=user_id,
        department_id=department_id,
        job_position_id=job_position_id,
        grade_id=grade_id,
        manager_id=manager_id,
        confirmation_date=confirmation_date,
        bank_name=bank_name,
        bank_account_number=bank_account_number,
        bank_rib=bank_rib,
        status=Employee.Status.ACTIVE,
        created_by=created_by,
    )
    employee.save()
    return employee


@transaction.atomic
def update_employee(employee, *, updated_by, **fields):
    allowed = {
        "first_name", "last_name", "gender", "birth_date", "birth_place",
        "nationality", "marital_status", "dependents_count", "phone",
        "personal_email", "emergency_contact_name", "emergency_contact_phone",
        "id_card_number", "id_card_expiry", "social_security_no",
        "agency_id", "user_id", "department_id", "job_position_id",
        "grade_id", "manager_id", "confirmation_date",
        "bank_name", "bank_account_number", "bank_rib",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(employee, key, val)
    employee.updated_by = updated_by
    employee.save()
    return employee


@transaction.atomic
def terminate_employee(employee, *, termination_date, reason: str = "", updated_by):
    if employee.status == Employee.Status.TERMINATED:
        raise ApplicationError(_("Cet employé est déjà résilié."))
    employee.status = Employee.Status.TERMINATED
    employee.termination_date = termination_date
    employee.updated_by = updated_by
    employee.save(update_fields=["status", "termination_date", "updated_by", "updated_at"])
    # Clôturer les contrats en cours
    employee.contracts.filter(is_current=True, is_deleted=False).update(
        is_current=False, end_date=termination_date, updated_at=timezone.now()
    )
    return employee


# ── Contrats ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_contract(
    *,
    employee,
    created_by,
    contract_type,
    start_date,
    base_salary,
    end_date=None,
    reference: str = "",
    currency_id=None,
    payment_frequency: str = "monthly",
    transport_allowance=0,
    housing_allowance=0,
    meal_allowance=0,
    other_allowances=0,
    notes: str = "",
):
    # Désactiver l'ancien contrat courant
    employee.contracts.filter(is_current=True, is_deleted=False).update(
        is_current=False, updated_at=timezone.now())

    contract = Contract(
        employee=employee,
        contract_type=contract_type,
        reference=reference,
        start_date=start_date,
        end_date=end_date,
        base_salary=base_salary,
        currency_id=currency_id,
        payment_frequency=payment_frequency,
        transport_allowance=transport_allowance,
        housing_allowance=housing_allowance,
        meal_allowance=meal_allowance,
        other_allowances=other_allowances,
        is_current=True,
        notes=notes,
        created_by=created_by,
    )
    contract.save()
    return contract


@transaction.atomic
def update_contract(contract, *, updated_by, **fields):
    allowed = {
        "reference", "start_date", "end_date", "base_salary",
        "currency_id", "payment_frequency", "transport_allowance",
        "housing_allowance", "meal_allowance", "other_allowances",
        "is_current", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(contract, key, val)
    contract.updated_by = updated_by
    contract.save()
    return contract
