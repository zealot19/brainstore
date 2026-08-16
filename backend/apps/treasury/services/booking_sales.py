from decimal import Decimal
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction, BankAccount
from apps.treasury.selectors.selectors import get_open_session_for_user
from apps.treasury.services.services import create_transaction

_NON_CASH = {
    "mobile_money": "mobile_money", "mobile": "mobile_money", "momo": "mobile_money", "om": "mobile_money",
    "transfer": "transfer", "virement": "transfer", "bank": "transfer",
    "check": "check", "cheque": "check", "chèque": "check",
}


def _normalize_payment(payment_method):
    key = (payment_method or "").strip().lower()
    if key in _NON_CASH:
        return _NON_CASH[key], False
    return "cash", True


def record_booking_payment(company, *, booking, amount, payment_method, user):
    """Crée le mouvement de trésorerie d'une vente de billets au guichet (non-bloquant hors espèces)."""
    amount = Decimal(str(amount or 0))
    if amount <= 0:
        return None
    if booking is not None and Transaction.objects.filter(booking=booking, is_deleted=False).exists():
        return None  # idempotent

    mode, is_cash = _normalize_payment(payment_method)
    ref = getattr(booking, "reference", "") or ""
    trip = getattr(booking, "outbound_trip", None)
    common = dict(company=company, transaction_type=Transaction.Type.INCOME,
                  category=Transaction.Category.TICKET_SALES, amount=amount, payment_mode=mode,
                  description=f"Vente {ref}".strip(), booking=booking, trip=trip, created_by=user)

    if is_cash:
        session = get_open_session_for_user(company.id, user)
        if not session:
            raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour encaisser une vente au comptant."))
        return create_transaction(account_type=Transaction.AccountType.CASH, cash_session=session, **common)

    banks = list(BankAccount.objects.filter(company=company, is_deleted=False, is_active=True))
    if len(banks) != 1:
        return None
    return create_transaction(account_type=Transaction.AccountType.BANK, bank_account=banks[0], **common)
