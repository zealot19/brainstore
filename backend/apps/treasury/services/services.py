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
def create_cash_register(*, company, name, kind=None, terminal=None, responsible=None,
                          opening_balance=0, notes="", account_id=None, journal_id=None,
                          agency_id=None, manager_ids=None, category="",
                          allow_negative_balance=False, created_by):
    reg = CashRegister.objects.create(
        company=company, name=name, kind=kind, terminal=terminal,
        responsible=responsible,
        current_balance=opening_balance,
        account_id=account_id, journal_id=journal_id, agency_id=agency_id,
        category=category or "", allow_negative_balance=allow_negative_balance,
        notes=notes, created_by=created_by,
    )
    if manager_ids:
        reg.managers.set(_company_users(company, manager_ids))
    return reg


def _company_users(company, ids):
    from django.contrib.auth import get_user_model
    return list(get_user_model().objects.filter(company=company, id__in=ids))


@transaction.atomic
def update_cash_register(register, *, updated_by, **fields):
    allowed = {"name", "kind", "category", "allow_negative_balance", "terminal_id", "responsible_id",
               "is_active", "notes", "account_id", "journal_id", "agency_id"}
    manager_ids = fields.pop("manager_ids", None)
    for k, v in fields.items():
        if k in allowed:
            setattr(register, k, v)
    register.updated_by = updated_by
    register.save()
    if manager_ids is not None:
        register.managers.set(_company_users(register.company, manager_ids))
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

def is_cash_manager(user, cash_register):
    """Un utilisateur peut gérer une caisse s'il en est gestionnaire (ou admin)."""
    if _is_admin(user):
        return True
    return cash_register.managers.filter(id=getattr(user, "id", None)).exists()


@transaction.atomic
def open_session(*, company, cash_register, opening_balance=None, name="", notes="", created_by):
    from apps.treasury.selectors import get_active_session
    from apps.treasury.scoping import register_agency_scope
    # Restriction d'agence : on n'ouvre une session que sur une caisse de son agence.
    # La gestion des caisses appartient au détenteur du droit RBAC (chef d'agence),
    # borné à son agence. Le « gestionnaire » de la caisse est le guichetier (ventes) :
    # il n'est pas requis d'en être un pour ouvrir.
    scoped, agency_id = register_agency_scope(created_by)
    # agency_id peut être None (utilisateur sans agence) : il est alors bloqué sur toute
    # caisse rattachée à une agence (None != agency_id).
    if scoped and cash_register.agency_id and cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez ouvrir une session que sur une caisse de votre agence."))
    # Verrou de ligne sur la caisse avant le contrôle « déjà ouverte » : deux ouvertures
    # concurrentes se sérialisent, la seconde voit la session de la première (Postgres).
    CashRegister.objects.select_for_update().get(id=cash_register.id)
    existing = get_active_session(cash_register.id, company.id)
    if existing:
        raise ApplicationError(
            _("Une session est déjà ouverte pour {register}.").format(register=cash_register.name))
    # Fonds initial : montant saisi (souvent 0 ; approvisionné ensuite par transfert).
    # Pas de billetage à l'ouverture — le billetage est une opération de fin de session.
    balance = opening_balance if opening_balance is not None else 0
    return CashSession.objects.create(
        company=company, cash_register=cash_register,
        opened_by=created_by, opening_balance=balance, name=name,
        status=CashSession.Status.OPEN,
        notes=notes, created_by=created_by,
    )


@transaction.atomic
def close_session(session, *, closing_balance=None, notes="", closing_count=None,
                  justification_reason="", justification_note="",
                  destination_cash_register_id=None, updated_by):
    from apps.treasury.services.billetage import compute_count_total, record_count
    if session.status not in (CashSession.Status.OPEN, CashSession.Status.SUSPENDED):
        raise ApplicationError(_("Seule une session ouverte ou suspendue peut être clôturée."))
    # La clôture appartient au chef d'agence (droit RBAC treasury.session.manage, imposé au
    # niveau de la vue), borné à son agence. Le guichetier (gestionnaire de la caisse) ne
    # clôture pas : il ne fait qu'opérer/vendre.
    from apps.treasury.scoping import register_agency_scope
    scoped, agency_id = register_agency_scope(updated_by)
    if scoped and session.cash_register.agency_id and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez clôturer qu'une caisse de votre agence."))

    # Montant compté : billetage prioritaire, sinon montant saisi.
    # M28 : l'écart/solde/transfert portent sur les ESPÈCES uniquement (cash_total).
    # Les autres valeurs (bons, monnaie électronique) sont enregistrées via record_count
    # (plus bas) mais n'entrent pas dans la réconciliation espèces.
    if closing_count:
        closing_balance = compute_count_total(session.company, closing_count)["cash_total"]
    elif closing_balance is None:
        raise ApplicationError(_("Indiquez le montant compté (billetage ou saisie directe)."))

    # Attendu = fond + recettes − dépenses + transferts entrants − transferts sortants.
    # On réutilise le même calcul que la trésorerie « live » (principale_available_cash)
    # pour que les approvisionnements / prélèvements et le balayage de clôture d'un guichet
    # ne génèrent pas d'écart fantôme. Se réduit à ouverture+recettes−dépenses sans transfert.
    from apps.treasury.services.expense_shared import principale_available_cash
    expected = principale_available_cash(session)
    difference = closing_balance - expected

    # Un écart doit être justifié (motif obligatoire).
    if difference != 0 and not justification_reason:
        raise ApplicationError(_("Un écart de caisse a été constaté : un motif est obligatoire."))

    session.closing_balance  = closing_balance
    session.expected_closing = expected
    session.difference       = difference
    session.justification_reason = justification_reason if difference != 0 else ""
    session.justification_note   = justification_note if difference != 0 else ""
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

    # Clôture d'un guichet : l'espèce comptée est transférée vers une caisse de
    # destination choisie par le chef d'agence ; le guichet finit à 0F.
    if reg.kind == CashRegister.Kind.GUICHET and closing_balance > 0:
        dest = (CashRegister.objects
                .filter(company=session.company, id=destination_cash_register_id, is_deleted=False)
                .exclude(id=session.cash_register_id).first())
        if not dest:
            raise ApplicationError(_("Choisissez une caisse de destination valide pour la clôture du guichet."))
        create_transfer(company=session.company, amount=closing_balance,
                        from_cash_register=reg, to_cash_register=dest,
                        description=f"Clôture guichet — session {session.id}", created_by=updated_by)

    if closing_count:
        record_count(session, kind="closing", items=closing_count, user=updated_by)

    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    TreasuryAccountingBridge.post_session_difference(session)
    return session


# ── Cycle de vie des sessions (planification, ouverture, suspension…) ────────────

def _is_admin(user):
    return getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False)


@transaction.atomic
def schedule_session(*, company, cash_register, assigned_to=None, scheduled_start=None,
                     scheduled_end=None, name="", created_by):
    """Planifie une session (DRAFT) sur une caisse.

    Le guichetier n'est plus choisi : c'est le gestionnaire de la caisse (son
    `responsible`, sinon son unique `manager`). Le champ reste `assigned_to` pour la
    traçabilité (« ma session active »)."""
    from apps.treasury.scoping import register_agency_scope
    scoped, agency_id = register_agency_scope(created_by)
    if scoped and cash_register.agency_id and cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez planifier que sur une caisse de votre agence."))
    if scheduled_start and scheduled_end and scheduled_end <= scheduled_start:
        raise ApplicationError(_("La fin prévue doit être postérieure au début prévu."))
    if assigned_to is None:
        assigned_to = cash_register.responsible or cash_register.managers.first()
    return CashSession.objects.create(
        company=company, cash_register=cash_register, name=name,
        assigned_to=assigned_to, scheduled_start=scheduled_start, scheduled_end=scheduled_end,
        status=CashSession.Status.DRAFT, created_by=created_by,
    )


@transaction.atomic
def open_scheduled_session(session, *, opening_balance=None, updated_by):
    """Ouvre une session planifiée (DRAFT → OPEN). Réservé aux gestionnaires de la caisse
    (ou admin). Pas de billetage à l'ouverture."""
    from apps.treasury.selectors import get_active_session
    if session.status != CashSession.Status.DRAFT:
        raise ApplicationError(_("Seule une session planifiée peut être ouverte."))
    from apps.treasury.scoping import register_agency_scope
    scoped, agency_id = register_agency_scope(updated_by)
    if scoped and session.cash_register.agency_id and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez gérer qu'une caisse de votre agence."))
    # Verrou de ligne sur la caisse : sérialise les ouvertures concurrentes (cf. open_session).
    CashRegister.objects.select_for_update().get(id=session.cash_register_id)
    if get_active_session(session.cash_register_id, session.company_id):
        raise ApplicationError(_("Une session est déjà active sur cette caisse."))
    session.opening_balance = opening_balance if opening_balance is not None else 0
    session.opened_by = updated_by
    session.opened_at = timezone.now()
    session.status = CashSession.Status.OPEN
    session.updated_by = updated_by
    session.save(update_fields=["opening_balance", "opened_by", "opened_at", "status",
                                "updated_by", "updated_at"])
    return session


def _assert_session_agency(session, user):
    """Même garde que l'ouverture/clôture : action bornée à l'agence de la caisse.

    Le droit RBAC (treasury.session.manage) est imposé à l'endpoint ; ici on borne à
    l'agence. Tout détenteur du droit de l'agence peut donc gérer la session (pas
    seulement celui qui l'a ouverte). Les admins ne sont pas scopés."""
    from apps.treasury.scoping import register_agency_scope
    scoped, agency_id = register_agency_scope(user)
    if scoped and session.cash_register.agency_id and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez gérer qu'une caisse de votre agence."))


@transaction.atomic
def suspend_session(session, *, updated_by):
    if session.status != CashSession.Status.OPEN:
        raise ApplicationError(_("Seule une session ouverte peut être suspendue."))
    _assert_session_agency(session, updated_by)
    session.status = CashSession.Status.SUSPENDED
    session.updated_by = updated_by
    session.save(update_fields=["status", "updated_by", "updated_at"])
    return session


@transaction.atomic
def resume_session(session, *, updated_by):
    if session.status != CashSession.Status.SUSPENDED:
        raise ApplicationError(_("Seule une session suspendue peut être reprise."))
    _assert_session_agency(session, updated_by)
    session.status = CashSession.Status.OPEN
    session.updated_by = updated_by
    session.save(update_fields=["status", "updated_by", "updated_at"])
    return session


@transaction.atomic
def extend_session(session, *, scheduled_end, updated_by):
    if session.status not in (CashSession.Status.DRAFT, CashSession.Status.OPEN, CashSession.Status.SUSPENDED):
        raise ApplicationError(_("Cette session ne peut plus être prolongée."))
    if session.status != CashSession.Status.DRAFT:
        _assert_session_agency(session, updated_by)
    if session.scheduled_start and scheduled_end <= session.scheduled_start:
        raise ApplicationError(_("La fin prévue doit être postérieure au début prévu."))
    session.scheduled_end = scheduled_end
    session.updated_by = updated_by
    session.save(update_fields=["scheduled_end", "updated_by", "updated_at"])
    return session


# ── Transactions ───────────────────────────────────────────────────────────────

@transaction.atomic
def create_transaction(
    *, company, transaction_type, category, account_type, amount,
    payment_mode, description="", transaction_date=None,
    cash_session=None, bank_account=None,
    trip=None, booking=None, parcel=None,
    counterpart_account=None,
    status=Transaction.Status.VALIDATED,
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
        # Tout gestionnaire de la caisse (ou un admin) peut opérer sur sa session ouverte.
        from apps.treasury.scoping import register_agency_scope
        scoped, _agency = register_agency_scope(created_by)
        if scoped and not is_cash_manager(created_by, cash_session.cash_register):
            raise ApplicationError(_("Vous n'êtes pas gestionnaire de cette caisse."))
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
        status=status,
        created_by=created_by,
    )

    # M26 : une opération en attente n'impacte NI le solde NI la comptabilité tant
    # qu'elle n'est pas validée. Les ventes/auto (défaut VALIDATED) s'appliquent de suite.
    if status == Transaction.Status.VALIDATED:
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
    # M26 : n'extourner le solde que si le mouvement avait été appliqué (validé).
    # Une opération en attente (ou déjà invalidée) n'a jamais impacté le solde.
    if txn.status == Transaction.Status.VALIDATED:
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

    # Rattache le transfert à la session ouverte de la caisse source (traçabilité).
    from_session = None
    if from_cash_register:
        from apps.treasury.selectors import get_active_session
        from_session = get_active_session(from_cash_register.id, company.id)
    reference = _next_ref(Transfer, company, "TRF")
    transfer = Transfer.objects.create(
        company=company, reference=reference, cash_session=from_session,
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
