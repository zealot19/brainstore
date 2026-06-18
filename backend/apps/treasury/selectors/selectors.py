from django.db.models import Q, Sum, Count
from django.utils import timezone

from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer


# ── Cash registers ─────────────────────────────────────────────────────────────

def list_cash_registers(company_id, *, active_only=False):
    qs = (CashRegister.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("terminal__city", "responsible")
          .order_by("name"))
    if active_only:
        qs = qs.filter(is_active=True)
    return qs


def get_cash_register(register_id, company_id):
    try:
        return (CashRegister.objects
                .select_related("terminal", "responsible")
                .get(id=register_id, company_id=company_id, is_deleted=False))
    except CashRegister.DoesNotExist:
        return None


# ── Bank accounts ──────────────────────────────────────────────────────────────

def list_bank_accounts(company_id, *, active_only=False):
    qs = (BankAccount.objects
          .filter(company_id=company_id, is_deleted=False)
          .order_by("bank_name"))
    if active_only:
        qs = qs.filter(is_active=True)
    return qs


def get_bank_account(account_id, company_id):
    try:
        return BankAccount.objects.get(id=account_id, company_id=company_id, is_deleted=False)
    except BankAccount.DoesNotExist:
        return None


# ── Cash sessions ──────────────────────────────────────────────────────────────

def get_active_session(register_id, company_id):
    try:
        return (CashSession.objects
                .select_related("cash_register", "opened_by")
                .get(cash_register_id=register_id, company_id=company_id,
                     status=CashSession.Status.OPEN, is_deleted=False))
    except CashSession.DoesNotExist:
        return None


def list_sessions(company_id, *, register_id=None, status=None,
                  date_from=None, date_to=None):
    qs = (CashSession.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("cash_register", "opened_by", "closed_by")
          .order_by("-opened_at"))
    if register_id:
        qs = qs.filter(cash_register_id=register_id)
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(opened_at__date__gte=date_from)
    if date_to:
        qs = qs.filter(opened_at__date__lte=date_to)
    return qs


def get_session(session_id, company_id):
    try:
        return (CashSession.objects
                .select_related("cash_register", "opened_by", "closed_by")
                .get(id=session_id, company_id=company_id, is_deleted=False))
    except CashSession.DoesNotExist:
        return None


# ── Transactions ───────────────────────────────────────────────────────────────

def list_transactions(company_id, *, transaction_type=None, category=None,
                      account_type=None, session_id=None, bank_account_id=None,
                      date_from=None, date_to=None, trip_id=None):
    qs = (Transaction.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("cash_session__cash_register", "bank_account",
                          "trip", "booking", "parcel")
          .order_by("-transaction_date", "-created_at"))
    if transaction_type:
        qs = qs.filter(transaction_type=transaction_type)
    if category:
        qs = qs.filter(category=category)
    if account_type:
        qs = qs.filter(account_type=account_type)
    if session_id:
        qs = qs.filter(cash_session_id=session_id)
    if bank_account_id:
        qs = qs.filter(bank_account_id=bank_account_id)
    if date_from:
        qs = qs.filter(transaction_date__gte=date_from)
    if date_to:
        qs = qs.filter(transaction_date__lte=date_to)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    return qs


def get_transaction(txn_id, company_id):
    try:
        return (Transaction.objects
                .select_related("cash_session__cash_register", "bank_account",
                                "trip", "booking", "parcel")
                .get(id=txn_id, company_id=company_id, is_deleted=False))
    except Transaction.DoesNotExist:
        return None


# ── Transfers ──────────────────────────────────────────────────────────────────

def list_transfers(company_id, *, date_from=None, date_to=None):
    qs = (Transfer.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("from_cash_register", "from_bank_account",
                          "to_cash_register", "to_bank_account",
                          "completed_by")
          .order_by("-transfer_date", "-created_at"))
    if date_from:
        qs = qs.filter(transfer_date__gte=date_from)
    if date_to:
        qs = qs.filter(transfer_date__lte=date_to)
    return qs


def get_transfer(transfer_id, company_id):
    try:
        return (Transfer.objects
                .select_related("from_cash_register", "from_bank_account",
                                "to_cash_register", "to_bank_account")
                .get(id=transfer_id, company_id=company_id, is_deleted=False))
    except Transfer.DoesNotExist:
        return None


# ── Stats ──────────────────────────────────────────────────────────────────────

def get_treasury_stats(company_id):
    today = timezone.now().date()
    txns = Transaction.objects.filter(company_id=company_id, is_deleted=False)
    today_txns = txns.filter(transaction_date=today)

    total_cash = (CashRegister.objects
                  .filter(company_id=company_id, is_deleted=False, is_active=True)
                  .aggregate(total=Sum("current_balance"))["total"] or 0)
    total_bank = (BankAccount.objects
                  .filter(company_id=company_id, is_deleted=False, is_active=True)
                  .aggregate(total=Sum("current_balance"))["total"] or 0)

    today_income  = (today_txns.filter(transaction_type=Transaction.Type.INCOME)
                     .aggregate(total=Sum("amount"))["total"] or 0)
    today_expense = (today_txns.filter(transaction_type=Transaction.Type.EXPENSE)
                     .aggregate(total=Sum("amount"))["total"] or 0)

    open_sessions = CashSession.objects.filter(
        company_id=company_id, is_deleted=False, status=CashSession.Status.OPEN
    ).count()

    return {
        "total_cash_balance": total_cash,
        "total_bank_balance": total_bank,
        "total_balance":      total_cash + total_bank,
        "today_income":       today_income,
        "today_expense":      today_expense,
        "today_net":          today_income - today_expense,
        "open_sessions":      open_sessions,
    }
