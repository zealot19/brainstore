from django.db import transaction
from django.db.models import Sum
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.treasury.models import (
    CashRegister, BankAccount, CashSession, Transaction, Transfer,
)


# ── Reference generators ───────────────────────────────────────────────────────

def _next_ref(model, company, prefix_key):
    date_str = timezone.now().strftime("%Y%m%d")
    prefix = f"{prefix_key}-{date_str}-"
    count = model.objects.filter(company=company, reference__startswith=prefix).count()
    return f"{prefix}{count + 1:04d}"


# ── Cash registers ─────────────────────────────────────────────────────────────

@transaction.atomic
def create_cash_register(*, company, name, terminal=None, responsible=None,
                          opening_balance=0, notes="", account_id=None, journal_id=None,
                          agency_id=None, created_by):
    return CashRegister.objects.create(
        company=company, name=name, terminal=terminal,
        responsible=responsible,
        current_balance=opening_balance,
        account_id=account_id, journal_id=journal_id, agency_id=agency_id,
        notes=notes, created_by=created_by,
    )


@transaction.atomic
def update_cash_register(register, *, updated_by, **fields):
    allowed = {"name", "terminal_id", "responsible_id", "is_active", "notes", "account_id", "journal_id", "agency_id"}
    for k, v in fields.items():
        if k in allowed:
            setattr(register, k, v)
    register.updated_by = updated_by
    register.save()
    return register


def delete_cash_register(register, *, deleted_by):
    if CashSession.objects.filter(cash_register=register,
                                   status=CashSession.Status.OPEN,
                                   is_deleted=False).exists():
        raise ApplicationError(_("Close the open session before deleting this register."))
    register.soft_delete(user=deleted_by)


# ── Bank accounts ──────────────────────────────────────────────────────────────

@transaction.atomic
def create_bank_account(*, company, bank_name, account_name, account_number,
                         opening_balance=0, notes="", account_id=None, journal_id=None, created_by):
    return BankAccount.objects.create(
        company=company, bank_name=bank_name,
        account_name=account_name, account_number=account_number,
        current_balance=opening_balance,
        account_id=account_id, journal_id=journal_id,
        notes=notes, created_by=created_by,
    )


@transaction.atomic
def update_bank_account(account, *, updated_by, **fields):
    allowed = {"bank_name", "account_name", "account_number", "is_active", "notes", "account_id", "journal_id"}
    for k, v in fields.items():
        if k in allowed:
            setattr(account, k, v)
    account.updated_by = updated_by
    account.save()
    return account


def delete_bank_account(account, *, deleted_by):
    if account.current_balance != 0:
        raise ApplicationError(
            _("Cannot delete a bank account with a non-zero balance.")
        )
    account.soft_delete(user=deleted_by)


# ── Cash sessions ──────────────────────────────────────────────────────────────

@transaction.atomic
def open_session(*, company, cash_register, opening_balance=None, notes="", created_by):
    from apps.treasury.selectors import get_active_session
    existing = get_active_session(cash_register.id, company.id)
    if existing:
        raise ApplicationError(
            _("A session is already open for {register}.").format(
                register=cash_register.name
            )
        )
    # Default opening balance = current register balance
    balance = opening_balance if opening_balance is not None else cash_register.current_balance
    return CashSession.objects.create(
        company=company, cash_register=cash_register,
        opened_by=created_by, opening_balance=balance,
        status=CashSession.Status.OPEN,
        notes=notes, created_by=created_by,
    )


@transaction.atomic
def close_session(session, *, closing_balance, notes="", updated_by):
    if session.status != CashSession.Status.OPEN:
        raise ApplicationError(_("This session is already closed."))

    # Compute expected: opening + all income - all expense in this session
    income = (session.transactions
              .filter(transaction_type=Transaction.Type.INCOME, is_deleted=False)
              .aggregate(t=Sum("amount"))["t"] or 0)
    expense = (session.transactions
               .filter(transaction_type=Transaction.Type.EXPENSE, is_deleted=False)
               .aggregate(t=Sum("amount"))["t"] or 0)
    expected = session.opening_balance + income - expense

    session.closing_balance  = closing_balance
    session.expected_closing = expected
    session.difference       = closing_balance - expected
    session.closed_at        = timezone.now()
    session.closed_by        = updated_by
    session.status           = CashSession.Status.CLOSED
    if notes:
        session.notes = notes
    session.updated_by = updated_by
    session.save()

    # Update register balance to actual closing
    reg = CashRegister.objects.select_for_update().get(id=session.cash_register_id)
    reg.current_balance = closing_balance
    reg.save(update_fields=["current_balance"])

    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    TreasuryAccountingBridge.post_session_difference(session)
    return session


# ── Transactions ───────────────────────────────────────────────────────────────

@transaction.atomic
def create_transaction(
    *, company, transaction_type, category, account_type, amount,
    payment_mode, description="", transaction_date=None,
    cash_session=None, bank_account=None,
    trip=None, booking=None, parcel=None,
    counterpart_account=None,
    created_by,
):
    if amount <= 0:
        raise ApplicationError(_("Amount must be positive."))

    # Validate account source
    if account_type == Transaction.AccountType.CASH:
        if not cash_session:
            raise ApplicationError(_("A cash session is required for cash transactions."))
        if cash_session.status != CashSession.Status.OPEN:
            raise ApplicationError(_("The cash session is closed."))
    elif account_type == Transaction.AccountType.BANK:
        if not bank_account:
            raise ApplicationError(_("A bank account is required for bank transactions."))

    reference = _next_ref(Transaction, company, "TXN")
    txn = Transaction.objects.create(
        company=company, reference=reference,
        transaction_type=transaction_type, category=category,
        account_type=account_type,
        cash_session=cash_session, bank_account=bank_account,
        amount=amount, payment_mode=payment_mode,
        description=description,
        transaction_date=transaction_date or timezone.now().date(),
        trip=trip, booking=booking, parcel=parcel,
        counterpart_account=counterpart_account,
        created_by=created_by,
    )

    # Update balances
    _apply_transaction_balance(txn, sign=+1)

    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    entry = TreasuryAccountingBridge.post_movement(txn)
    if entry:
        txn.journal_entry = entry
        txn.save(update_fields=["journal_entry"])
    return txn


def _apply_transaction_balance(txn, sign: int):
    """sign = +1 to apply, -1 to reverse."""
    delta = txn.amount * sign
    if txn.account_type == Transaction.AccountType.CASH and txn.cash_session_id:
        reg = CashRegister.objects.select_for_update().get(
            id=txn.cash_session.cash_register_id
        )
        if txn.transaction_type == Transaction.Type.INCOME:
            reg.current_balance += delta
        else:
            reg.current_balance -= delta
        reg.save(update_fields=["current_balance"])

    elif txn.account_type == Transaction.AccountType.BANK and txn.bank_account_id:
        acc = BankAccount.objects.select_for_update().get(id=txn.bank_account_id)
        if txn.transaction_type == Transaction.Type.INCOME:
            acc.current_balance += delta
        else:
            acc.current_balance -= delta
        acc.save(update_fields=["current_balance"])


@transaction.atomic
def delete_transaction(txn, *, deleted_by):
    if txn.cash_session and txn.cash_session.status == CashSession.Status.CLOSED:
        raise ApplicationError(
            _("Cannot delete a transaction from a closed session.")
        )
    # Extourne comptable si le mouvement était posté
    if txn.journal_entry_id:
        from apps.accounting.services import AccountingService
        try:
            if txn.journal_entry.state == "posted":
                AccountingService.cancel_entry(txn.journal_entry_id, reason="Annulation mouvement")
        except Exception:
            pass
    # Reverse balance impact
    _apply_transaction_balance(txn, sign=-1)
    txn.soft_delete(user=deleted_by)


# ── Transfers ──────────────────────────────────────────────────────────────────

@transaction.atomic
def create_transfer(
    *, company, amount, description="", transfer_date=None,
    from_cash_register=None, from_bank_account=None,
    to_cash_register=None, to_bank_account=None,
    created_by,
):
    if amount <= 0:
        raise ApplicationError(_("Transfer amount must be positive."))

    # Validate source
    sources = [x for x in [from_cash_register, from_bank_account] if x]
    dests   = [x for x in [to_cash_register, to_bank_account] if x]
    if len(sources) != 1:
        raise ApplicationError(_("Exactly one source account must be specified."))
    if len(dests) != 1:
        raise ApplicationError(_("Exactly one destination account must be specified."))
    if sources[0] is dests[0]:
        raise ApplicationError(_("Source and destination must be different."))

    # Deduct from source
    if from_cash_register:
        reg = CashRegister.objects.select_for_update().get(id=from_cash_register.id)
        if reg.current_balance < amount:
            raise ApplicationError(
                _("Insufficient balance in {reg} ({bal}).").format(
                    reg=reg.name, bal=reg.current_balance
                )
            )
        reg.current_balance -= amount
        reg.save(update_fields=["current_balance"])
    elif from_bank_account:
        acc = BankAccount.objects.select_for_update().get(id=from_bank_account.id)
        if acc.current_balance < amount:
            raise ApplicationError(
                _("Insufficient balance in {acc} ({bal}).").format(
                    acc=acc.account_name, bal=acc.current_balance
                )
            )
        acc.current_balance -= amount
        acc.save(update_fields=["current_balance"])

    # Credit to destination
    if to_cash_register:
        reg = CashRegister.objects.select_for_update().get(id=to_cash_register.id)
        reg.current_balance += amount
        reg.save(update_fields=["current_balance"])
    elif to_bank_account:
        acc = BankAccount.objects.select_for_update().get(id=to_bank_account.id)
        acc.current_balance += amount
        acc.save(update_fields=["current_balance"])

    reference = _next_ref(Transfer, company, "TRF")
    transfer = Transfer.objects.create(
        company=company, reference=reference,
        from_cash_register=from_cash_register, from_bank_account=from_bank_account,
        to_cash_register=to_cash_register, to_bank_account=to_bank_account,
        amount=amount, description=description,
        transfer_date=transfer_date or timezone.now().date(),
        completed_by=created_by,
        created_by=created_by,
    )
    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    entry = TreasuryAccountingBridge.post_transfer(transfer)
    if entry:
        transfer.journal_entry = entry
        transfer.save(update_fields=["journal_entry"])
    return transfer
