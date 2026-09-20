from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import GeneralExpense


def create_general_expense(*, company, expense_type, label, amount, expense_date=None, agency=None, created_by):
    if amount is None or amount <= 0:
        raise ApplicationError(_("Le montant doit être positif."))
    kwargs = dict(company=company, expense_type=expense_type, label=label, amount=amount,
                  agency=agency, created_by=created_by)
    if expense_date:
        kwargs["expense_date"] = expense_date
    return GeneralExpense.objects.create(**kwargs)


def update_general_expense(expense, *, updated_by, **fields):
    if expense.status == GeneralExpense.Status.PAID:
        raise ApplicationError(_("Une dépense décaissée ne peut plus être modifiée."))
    for k in ("expense_type", "label", "amount", "expense_date", "agency"):
        if k in fields and fields[k] is not None:
            setattr(expense, k, fields[k])
    expense.updated_by = updated_by
    expense.save()
    return expense


def delete_general_expense(expense, *, deleted_by):
    if expense.status == GeneralExpense.Status.PAID:
        raise ApplicationError(_("Une dépense décaissée ne peut plus être supprimée."))
    expense.soft_delete(user=deleted_by)


@transaction.atomic
def disburse_general_expense(expense, *, user, cash_session=None):
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    from apps.treasury.services.general_expense_sales import record_general_expense
    if expense.status == GeneralExpense.Status.PAID:
        return expense
    session = resolve_disbursement_session(expense.company_id, user, cash_session,
                                           require_principale=True, amount=expense.amount)
    record_general_expense(expense.company, expense=expense, cash_session=session, user=user)
    expense.status = GeneralExpense.Status.PAID
    expense.cash_session = session
    expense.updated_by = user
    expense.save(update_fields=["status", "cash_session", "updated_by", "updated_at"])
    return expense
