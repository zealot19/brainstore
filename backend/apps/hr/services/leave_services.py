from datetime import timedelta
from decimal import Decimal

from django.db import transaction
from django.db.models import Q
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.hr.models import LeaveRequest, LeaveBalance, LeaveType


def _count_working_days(start_date, end_date) -> Decimal:
    """Compte les jours ouvrables (lun–ven) entre les deux dates, inclusives."""
    delta = (end_date - start_date).days + 1
    count = sum(1 for i in range(delta) if (start_date + timedelta(days=i)).weekday() < 5)
    return Decimal(str(count))


def _get_or_create_balance(employee, leave_type, year) -> LeaveBalance:
    balance, _ = LeaveBalance.objects.get_or_create(
        employee=employee, leave_type=leave_type, year=year,
        defaults={
            "total_days": leave_type.max_days_per_year or Decimal("0"),
            "used_days": Decimal("0"),
            "carried_over": Decimal("0"),
        },
    )
    return balance


@transaction.atomic
def create_leave_request(*, employee, leave_type, start_date, end_date, reason="", created_by):
    if end_date < start_date:
        raise ApplicationError(_("La date de fin ne peut pas être antérieure à la date de début."))

    days_count = _count_working_days(start_date, end_date)
    if days_count <= 0:
        raise ApplicationError(_("La période sélectionnée ne contient aucun jour ouvrable."))

    # Vérification du délai de prévenance
    if leave_type.min_notice_days > 0:
        notice_required = start_date - timedelta(days=leave_type.min_notice_days)
        if timezone.now().date() > notice_required:
            raise ApplicationError(
                _("Ce type de congé requiert %(days)s jours de préavis.")
                % {"days": leave_type.min_notice_days}
            )

    # Vérification du solde si le type a une limite
    year = start_date.year
    if leave_type.max_days_per_year:
        balance = _get_or_create_balance(employee, leave_type, year)
        if balance.remaining_days < days_count:
            raise ApplicationError(
                _("Solde insuffisant : %(avail)s jours disponibles, %(req)s demandés.")
                % {"avail": balance.remaining_days, "req": days_count}
            )

    # Vérification des chevauchements
    overlap = LeaveRequest.objects.filter(
        employee=employee,
        status__in=[LeaveRequest.Status.PENDING, LeaveRequest.Status.APPROVED],
        start_date__lte=end_date,
        end_date__gte=start_date,
        is_deleted=False,
    )
    if overlap.exists():
        raise ApplicationError(_("Une demande de congé chevauche la période sélectionnée."))

    status = (LeaveRequest.Status.APPROVED if not leave_type.requires_approval
              else LeaveRequest.Status.PENDING)

    request = LeaveRequest(
        employee=employee,
        leave_type=leave_type,
        start_date=start_date,
        end_date=end_date,
        days_count=days_count,
        reason=reason,
        status=status,
        created_by=created_by,
    )
    if status == LeaveRequest.Status.APPROVED:
        request.reviewed_by = created_by
        request.reviewed_at = timezone.now()
    request.save()

    # Débiter le solde immédiatement si approuvé sans validation
    if status == LeaveRequest.Status.APPROVED and leave_type.max_days_per_year:
        balance = _get_or_create_balance(employee, leave_type, year)
        balance.used_days += days_count
        balance.save(update_fields=["used_days"])

    return request


@transaction.atomic
def approve_leave_request(request, *, approved_by):
    if request.status != LeaveRequest.Status.PENDING:
        raise ApplicationError(_("Seules les demandes en attente peuvent être approuvées."))

    request.status = LeaveRequest.Status.APPROVED
    request.reviewed_by = approved_by
    request.reviewed_at = timezone.now()
    request.save(update_fields=["status", "reviewed_by", "reviewed_at", "updated_at"])

    # Débiter le solde
    if request.leave_type.max_days_per_year:
        balance = _get_or_create_balance(request.employee, request.leave_type, request.start_date.year)
        balance.used_days += request.days_count
        balance.save(update_fields=["used_days"])

    return request


@transaction.atomic
def reject_leave_request(request, *, rejected_by, reason: str = ""):
    if request.status != LeaveRequest.Status.PENDING:
        raise ApplicationError(_("Seules les demandes en attente peuvent être refusées."))

    request.status = LeaveRequest.Status.REJECTED
    request.reviewed_by = rejected_by
    request.reviewed_at = timezone.now()
    request.rejection_reason = reason
    request.save(update_fields=["status", "reviewed_by", "reviewed_at", "rejection_reason", "updated_at"])
    return request


@transaction.atomic
def cancel_leave_request(request, *, cancelled_by):
    if request.status == LeaveRequest.Status.CANCELLED:
        raise ApplicationError(_("Cette demande est déjà annulée."))
    if request.status == LeaveRequest.Status.REJECTED:
        raise ApplicationError(_("Une demande refusée ne peut pas être annulée."))

    was_approved = request.status == LeaveRequest.Status.APPROVED
    request.status = LeaveRequest.Status.CANCELLED
    request.updated_by = cancelled_by
    request.save(update_fields=["status", "updated_by", "updated_at"])

    # Recréditer le solde si la demande était approuvée
    if was_approved and request.leave_type.max_days_per_year:
        balance = LeaveBalance.objects.filter(
            employee=request.employee, leave_type=request.leave_type,
            year=request.start_date.year
        ).first()
        if balance:
            balance.used_days = max(Decimal("0"), balance.used_days - request.days_count)
            balance.save(update_fields=["used_days"])

    return request


@transaction.atomic
def initialize_leave_balances(employee, year: int):
    """Crée les soldes de congé pour un employé pour une année donnée."""
    leave_types = LeaveType.objects.filter(
        is_deleted=False,
        is_active=True,
    ).filter(Q(company=employee.company) | Q(company__isnull=True))
    created = []
    for lt in leave_types:
        balance, was_created = LeaveBalance.objects.get_or_create(
            employee=employee, leave_type=lt, year=year,
            defaults={
                "total_days": lt.max_days_per_year or Decimal("0"),
                "used_days": Decimal("0"),
                "carried_over": Decimal("0"),
            },
        )
        if was_created:
            created.append(balance)
    return created
