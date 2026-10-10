"""Validation des opérations manuelles (M26).

Une opération manuelle (dépense générale, recette autre, frais de route) est créée
EN ATTENTE et n'impacte ni le solde ni la comptabilité tant qu'elle n'est pas validée.
"""
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction


def _is_admin(user):
    return bool(getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False))


def _is_frais_de_route(txn):
    return txn.category == Transaction.Category.VOYAGE_EXPENSE or txn.voyage_expense_id is not None


@transaction.atomic
def validate_operation(txn, *, user):
    if txn.status != Transaction.Status.PENDING:
        raise ApplicationError(_("Seule une opération en attente peut être validée."))
    if _is_frais_de_route(txn) and not _is_admin(user):
        raise ApplicationError(_("La validation des frais de route est réservée à l'administrateur."))
    # Contrôle du solde au moment de la validation (dépense espèces).
    if (txn.transaction_type == Transaction.Type.EXPENSE
            and txn.account_type == Transaction.AccountType.CASH and txn.cash_session_id):
        from apps.treasury.services.expense_shared import principale_available_cash
        if txn.amount > principale_available_cash(txn.cash_session):
            raise ApplicationError(_("Solde insuffisant pour valider ce décaissement."))
    from apps.treasury.services.services import _apply_transaction_balance
    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    _apply_transaction_balance(txn, sign=+1)
    entry = TreasuryAccountingBridge.post_movement(txn)
    txn.status = Transaction.Status.VALIDATED
    txn.validated_by = user
    txn.validated_at = timezone.now()
    txn.journal_entry = entry or None
    txn.save(update_fields=["status", "validated_by", "validated_at", "journal_entry"])
    return txn


@transaction.atomic
def invalidate_operation(txn, *, user):
    if txn.status == Transaction.Status.INVALIDATED:
        return txn
    if txn.status == Transaction.Status.VALIDATED:
        from apps.treasury.services.services import _apply_transaction_balance
        if txn.journal_entry_id:
            from apps.accounting.services import AccountingService
            try:
                if txn.journal_entry.state == "posted":
                    AccountingService.cancel_entry(txn.journal_entry_id, reason="Invalidation opération")
            except Exception:
                pass
        _apply_transaction_balance(txn, sign=-1)
    txn.status = Transaction.Status.INVALIDATED
    txn.updated_by = user
    txn.save(update_fields=["status", "updated_by", "updated_at"])
    return txn


@transaction.atomic
def modify_operation(txn, *, amount, user):
    if txn.status != Transaction.Status.PENDING:
        raise ApplicationError(_("Seule une opération en attente peut être modifiée."))
    if amount is None or amount <= 0:
        raise ApplicationError(_("Le montant doit être supérieur à zéro."))
    txn.amount = amount
    txn.updated_by = user
    txn.save(update_fields=["amount", "updated_by", "updated_at"])
    return txn
