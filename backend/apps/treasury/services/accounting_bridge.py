import logging
from decimal import Decimal

from django.utils import timezone

from apps.accounting.models import Account, Journal
from apps.accounting.services import AccountingService, EntryRequest, LineRequest
from apps.treasury.models import Transaction, MovementAccountMapping

logger = logging.getLogger(__name__)


def _journal(company_id, code):
    return Journal.objects.filter(company_id=company_id, code=code, is_deleted=False).first()


def _account(company_id, code):
    return Account.objects.filter(company_id=company_id, code=code, is_deleted=False).first()


def _post(company_id, journal_code, date, label, reference, entry_type, source_model, source_id, lines):
    req = EntryRequest(company_id=company_id, journal_code=journal_code, date=date, label=label,
                       reference=reference, entry_type=entry_type,
                       source_model=source_model, source_id=source_id, lines=lines)
    entry = AccountingService.create_entry(req)
    return AccountingService.post_entry(entry.id)


class TreasuryAccountingBridge:

    @staticmethod
    def post_movement(txn):
        try:
            company_id = txn.company_id
            if txn.account_type == Transaction.AccountType.CASH:
                reg = txn.cash_session.cash_register
                journal = reg.journal or _journal(company_id, "CAISSE")
                liquidity = reg.account or _account(company_id, "571")
            else:
                bank = txn.bank_account
                journal = bank.journal or _journal(company_id, "BANQUE")
                liquidity = bank.account or _account(company_id, "521")
            mapping = MovementAccountMapping.objects.filter(company_id=company_id, category=txn.category).first()
            counterpart = txn.counterpart_account or (mapping.account if mapping else None)
            if not (journal and liquidity and counterpart):
                return None
            amount = txn.amount
            if txn.transaction_type == Transaction.Type.INCOME:
                lines = [LineRequest(account_code=liquidity.code, debit=amount),
                         LineRequest(account_code=counterpart.code, credit=amount)]
            else:
                lines = [LineRequest(account_code=counterpart.code, debit=amount),
                         LineRequest(account_code=liquidity.code, credit=amount)]
            return _post(company_id, journal.code, txn.transaction_date,
                         txn.description or txn.get_category_display(), txn.reference,
                         "auto_payment", "treasury.Transaction", txn.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_movement failed for txn %s", getattr(txn, "id", None))
            return None

    @staticmethod
    def post_transfer(transfer):
        try:
            company_id = transfer.company_id
            if transfer.from_cash_register_id:
                src_acc = transfer.from_cash_register.account or _account(company_id, "571")
            else:
                src_acc = transfer.from_bank_account.account or _account(company_id, "521")
            if transfer.to_cash_register_id:
                dst_acc = transfer.to_cash_register.account or _account(company_id, "571")
            else:
                dst_acc = transfer.to_bank_account.account or _account(company_id, "521")
            journal = _journal(company_id, "OD")
            if not (journal and src_acc and dst_acc):
                return None
            lines = [LineRequest(account_code=dst_acc.code, debit=transfer.amount),
                     LineRequest(account_code=src_acc.code, credit=transfer.amount)]
            return _post(company_id, "OD", transfer.transfer_date,
                         transfer.description or "Transfert interne", transfer.reference,
                         "auto_transfer", "treasury.Transfer", transfer.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_transfer failed for %s", getattr(transfer, "id", None))
            return None

    @staticmethod
    def post_session_difference(session):
        try:
            diff = session.difference or Decimal("0")
            if diff == 0:
                return None
            company_id = session.company_id
            reg = session.cash_register
            cash_acc = reg.account or _account(company_id, "571")
            journal = _journal(company_id, "OD")
            if not (journal and cash_acc):
                return None
            date = session.closed_at.date() if session.closed_at else timezone.now().date()
            label = f"Écart de caisse — {reg.name}"
            if diff < 0:  # manquant
                loss = _account(company_id, "658")
                if not loss:
                    return None
                lines = [LineRequest(account_code=loss.code, debit=abs(diff)),
                         LineRequest(account_code=cash_acc.code, credit=abs(diff))]
            else:  # excédent
                gain = _account(company_id, "758")
                if not gain:
                    return None
                lines = [LineRequest(account_code=cash_acc.code, debit=diff),
                         LineRequest(account_code=gain.code, credit=diff)]
            return _post(company_id, "OD", date, label, "", "manual",
                         "treasury.CashSession", session.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_session_difference failed for %s", getattr(session, "id", None))
            return None
