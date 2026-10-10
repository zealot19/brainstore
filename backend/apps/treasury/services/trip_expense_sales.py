from apps.accounting.models import Account
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_trip_expense(company, *, trip_expense, cash_session, user):
    """Mouvement de trésorerie EXPENSE pour une dépense de voyage (décaissement caisse)."""
    if Transaction.objects.filter(voyage_expense=trip_expense, is_deleted=False).exists():
        return None  # idempotent
    account = Account.objects.filter(company=company, code=trip_expense.expense_type.account_code,
                                     is_deleted=False).first()
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.VOYAGE_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=cash_session, amount=trip_expense.amount,
        payment_mode=Transaction.PaymentMode.CASH, counterpart_account=account,
        description=f"{trip_expense.expense_type.name} — {trip_expense.trip.number}".strip(),
        status=Transaction.Status.PENDING, created_by=user)  # M26 : frais de route en attente
    txn.voyage_expense = trip_expense
    txn.save(update_fields=["voyage_expense"])
    return txn
