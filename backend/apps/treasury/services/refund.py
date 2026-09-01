from decimal import Decimal


def refund_on_cancel(company, *, amount_paid, user, description, cash_session=None):
    """Rembourse amount_paid × taux depuis la caisse ouverte de l'agent.
    Retourne le mouvement (EXPENSE, catégorie refund) ou None si nul."""
    from apps.treasury.services.refund_config import get_refund_rate
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    from apps.treasury.services.services import create_transaction
    from apps.treasury.models import Transaction
    rate = get_refund_rate(company)
    amount = (Decimal(str(amount_paid or 0)) * rate / Decimal("100")).quantize(Decimal("1."))
    if amount <= 0:
        return None
    session = resolve_disbursement_session(company.id, user, cash_session)
    return create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
        amount=amount, payment_mode=Transaction.PaymentMode.CASH,
        description=description, cash_session=session, created_by=user)
