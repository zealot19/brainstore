from apps.accounting.models import Account
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_general_expense(company, *, expense, cash_session, user):
    """Mouvement EXPENSE pour une dépense générale (décaissement caisse). Idempotent."""
    if Transaction.objects.filter(general_expense=expense, is_deleted=False).exists():
        return None
    account = None
    if expense.expense_type.account_code:
        account = Account.objects.filter(company=company, code=expense.expense_type.account_code,
                                         is_deleted=False).first()
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=cash_session, amount=expense.amount,
        payment_mode=Transaction.PaymentMode.CASH, counterpart_account=account,
        description=f"{expense.expense_type.name} — {expense.label}".strip(),
        status=Transaction.Status.PENDING, created_by=user)  # M26 : dépense en attente
    txn.general_expense = expense
    txn.save(update_fields=["general_expense"])
    return txn
