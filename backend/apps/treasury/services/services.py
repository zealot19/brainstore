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
def open_session(*, company, cash_register, opening_balance=None, name="", notes="",
                 opening_count=None, created_by):
    from apps.treasury.selectors import get_active_session
    from apps.treasury.scoping import register_agency_scope
    from apps.treasury.services.billetage import compute_count_total, record_count
    # Restriction d'agence : un guichetier n'ouvre une session que sur une caisse de son agence.
    scoped, agency_id = register_agency_scope(created_by)
    if scoped:
        if not agency_id:
            raise ApplicationError(_("Aucune agence ne vous est attribuée : impossible d'ouvrir une caisse."))
        if cash_register.agency_id != agency_id:
            raise ApplicationError(_("Vous ne pouvez ouvrir une session que sur une caisse de votre agence."))
        # Chargé de caisse : si un responsable est désigné, lui seul peut ouvrir cette caisse.
        if cash_register.responsible_id and cash_register.responsible_id != created_by.id:
            raise ApplicationError(_("Seul le chargé de cette caisse peut y ouvrir une session."))
    existing = get_active_session(cash_register.id, company.id)
    if existing:
        raise ApplicationError(
            _("A session is already open for {register}.").format(
                register=cash_register.name
            )
        )
    # Fonds initial : billetage prioritaire, sinon montant saisi, sinon solde de la caisse.
    if opening_count:
        balance, _resolved = compute_count_total(company, opening_count)
    elif opening_balance is not None:
        balance = opening_balance
    else:
        balance = cash_register.current_balance
    session = CashSession.objects.create(
        company=company, cash_register=cash_register,
        opened_by=created_by, opening_balance=balance, name=name,
        status=CashSession.Status.OPEN,
        notes=notes, created_by=created_by,
    )
    if opening_count:
        record_count(session, kind="opening", items=opening_count, user=created_by)
    return session


@transaction.atomic
def close_session(session, *, closing_balance=None, notes="", closing_count=None, updated_by):
    from apps.treasury.services.billetage import compute_count_total, record_count
    if session.status not in (CashSession.Status.OPEN, CashSession.Status.SUSPENDED):
        raise ApplicationError(_("Seule une session ouverte ou suspendue peut être clôturée."))
    # Seul l'utilisateur qui a ouvert la caisse peut la clôturer (ou un administrateur).
    is_admin = getattr(updated_by, "is_superuser", False) or getattr(updated_by, "is_institution_admin", False)
    if not is_admin and session.opened_by_id != getattr(updated_by, "id", None):
        raise ApplicationError(_("Seul l'utilisateur qui a ouvert la caisse (ou un administrateur) peut la clôturer."))

    # Montant compté : billetage prioritaire, sinon montant saisi.
    if closing_count:
        closing_balance, _resolved = compute_count_total(session.company, closing_count)
    elif closing_balance is None:
        raise ApplicationError(_("Indiquez le montant compté (billetage ou saisie directe)."))

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

    if closing_count:
        record_count(session, kind="closing", items=closing_count, user=updated_by)

    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    TreasuryAccountingBridge.post_session_difference(session)
    return session


# ── Cycle de vie des sessions (planification, ouverture, suspension…) ────────────

def _is_admin(user):
    return getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False)


@transaction.atomic
def schedule_session(*, company, cash_register, assigned_to, scheduled_start=None,
                     scheduled_end=None, name="", created_by):
    """Planifie une session (DRAFT) pour un guichetier sur une caisse."""
    from apps.treasury.scoping import register_agency_scope
    scoped, agency_id = register_agency_scope(created_by)
    if scoped and cash_register.agency_id and cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez planifier que sur une caisse de votre agence."))
    if scheduled_start and scheduled_end and scheduled_end <= scheduled_start:
        raise ApplicationError(_("La fin prévue doit être postérieure au début prévu."))
    return CashSession.objects.create(
        company=company, cash_register=cash_register, name=name,
        assigned_to=assigned_to, scheduled_start=scheduled_start, scheduled_end=scheduled_end,
        status=CashSession.Status.DRAFT, created_by=created_by,
    )


@transaction.atomic
def open_scheduled_session(session, *, opening_balance=None, opening_count=None, updated_by):
    """Ouvre une session planifiée (DRAFT → OPEN) : seul le guichetier assigné (ou admin)."""
    from apps.treasury.selectors import get_active_session
    from apps.treasury.services.billetage import compute_count_total, record_count
    if session.status != CashSession.Status.DRAFT:
        raise ApplicationError(_("Seule une session planifiée peut être ouverte."))
    if not _is_admin(updated_by) and session.assigned_to_id != getattr(updated_by, "id", None):
        raise ApplicationError(_("Seul le guichetier assigné (ou un administrateur) peut ouvrir cette session."))
    if get_active_session(session.cash_register_id, session.company_id):
        raise ApplicationError(_("Une session est déjà active sur cette caisse."))
    if opening_count:
        balance, _r = compute_count_total(session.company, opening_count)
    else:
        balance = opening_balance if opening_balance is not None else session.cash_register.current_balance
    session.opening_balance = balance
    session.opened_by = updated_by
    session.opened_at = timezone.now()
    session.status = CashSession.Status.OPEN
    session.updated_by = updated_by
    session.save(update_fields=["opening_balance", "opened_by", "opened_at", "status",
                                "updated_by", "updated_at"])
    if opening_count:
        record_count(session, kind="opening", items=opening_count, user=updated_by)
    return session


def _assert_session_actor(session, user):
    if not _is_admin(user) and session.opened_by_id != getattr(user, "id", None):
        raise ApplicationError(_("Seul l'agent de cette session (ou un administrateur) peut effectuer cette action."))


@transaction.atomic
def suspend_session(session, *, updated_by):
    if session.status != CashSession.Status.OPEN:
        raise ApplicationError(_("Seule une session ouverte peut être suspendue."))
    _assert_session_actor(session, updated_by)
    session.status = CashSession.Status.SUSPENDED
    session.updated_by = updated_by
    session.save(update_fields=["status", "updated_by", "updated_at"])
    return session


@transaction.atomic
def resume_session(session, *, updated_by):
    if session.status != CashSession.Status.SUSPENDED:
        raise ApplicationError(_("Seule une session suspendue peut être reprise."))
    _assert_session_actor(session, updated_by)
    session.status = CashSession.Status.OPEN
    session.updated_by = updated_by
    session.save(update_fields=["status", "updated_by", "updated_at"])
    return session


@transaction.atomic
def extend_session(session, *, scheduled_end, updated_by):
    if session.status not in (CashSession.Status.DRAFT, CashSession.Status.OPEN, CashSession.Status.SUSPENDED):
        raise ApplicationError(_("Cette session ne peut plus être prolongée."))
    _assert_session_actor(session, updated_by) if session.status != CashSession.Status.DRAFT else None
    if session.scheduled_start and scheduled_end <= session.scheduled_start:
        raise ApplicationError(_("La fin prévue doit être postérieure au début prévu."))
    session.scheduled_end = scheduled_end
    session.updated_by = updated_by
    session.save(update_fields=["scheduled_end", "updated_by", "updated_at"])
    return session


@transaction.atomic
def reopen_session(session, *, updated_by):
    """Réouvre une session clôturée (administrateurs uniquement)."""
    if not _is_admin(updated_by):
        raise ApplicationError(_("Seul un administrateur peut réouvrir une session clôturée."))
    if session.status != CashSession.Status.CLOSED:
        raise ApplicationError(_("Seule une session clôturée peut être réouverte."))
    session.status = CashSession.Status.OPEN
    session.closed_at = None
    session.closed_by = None
    session.closing_balance = None
    session.expected_closing = None
    session.difference = None
    session.updated_by = updated_by
    session.save(update_fields=["status", "closed_at", "closed_by", "closing_balance",
                                "expected_closing", "difference", "updated_by", "updated_at"])
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
        raise ApplicationError(_("Le montant doit être supérieur à zéro."))

    # Validate account source
    if account_type == Transaction.AccountType.CASH:
        if not cash_session:
            raise ApplicationError(_("A cash session is required for cash transactions."))
        if cash_session.status != CashSession.Status.OPEN:
            raise ApplicationError(_("The cash session is closed."))
        # Séparation des tâches : seul celui qui a ouvert la session peut y opérer (admins exemptés).
        from apps.treasury.scoping import register_agency_scope
        scoped, _agency = register_agency_scope(created_by)
        if scoped and cash_session.opened_by_id != created_by.id:
            raise ApplicationError(_("Seul l'agent ayant ouvert cette caisse peut y enregistrer des mouvements."))
    elif account_type == Transaction.AccountType.BANK:
        if not bank_account:
            raise ApplicationError(_("Un compte bancaire est requis pour un règlement par banque."))

    reference = _next_ref(Transaction, company, "TXN")
    agency = cash_session.cash_register.agency if cash_session else None
    txn = Transaction.objects.create(
        company=company, agency=agency, reference=reference,
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
        raise ApplicationError(_("Le montant du transfert doit être supérieur à zéro."))

    # Validate source
    sources = [x for x in [from_cash_register, from_bank_account] if x]
    dests   = [x for x in [to_cash_register, to_bank_account] if x]
    if len(sources) != 1:
        raise ApplicationError(_("Indiquez exactement un compte source."))
    if len(dests) != 1:
        raise ApplicationError(_("Indiquez exactement un compte de destination."))
    if sources[0] is dests[0]:
        raise ApplicationError(_("La source et la destination doivent être différentes."))

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
