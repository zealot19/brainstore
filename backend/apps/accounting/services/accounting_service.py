from dataclasses import dataclass, field
from datetime import date as date_type
from decimal import Decimal
from uuid import UUID

from django.db import transaction
from django.db.models import Sum
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.accounting.models import (Account, Journal, AccountingPeriod,
                                    JournalEntry, JournalEntryLine, JournalSequence)


@dataclass
class LineRequest:
    account_code: str
    label: str = ""
    debit: Decimal = Decimal("0")
    credit: Decimal = Decimal("0")
    partner_id: UUID | None = None


@dataclass
class EntryRequest:
    company_id: UUID
    journal_code: str
    date: date_type
    label: str
    lines: list = field(default_factory=list)
    reference: str = ""
    entry_type: str = "manual"
    partner_id: UUID | None = None
    source_model: str = ""
    source_id: UUID | None = None


def _sequence_name(journal, year, num):
    num_s = f"{num:05d}"
    prefix = journal.sequence_prefix or ""
    if "{YYYY}" in prefix:
        return f"{prefix.replace('{YYYY}', str(year))}{num_s}"
    if prefix:
        return f"{prefix}{year}/{num_s}"
    return f"{journal.code}/{year}/{num_s}"


class AccountingService:

    @staticmethod
    @transaction.atomic
    def create_entry(req: EntryRequest, *, created_by=None) -> JournalEntry:
        journal = Journal.objects.filter(company_id=req.company_id, code=req.journal_code, is_deleted=False).first()
        if not journal:
            raise ApplicationError(_("Journal introuvable : %s") % req.journal_code)
        period = AccountingPeriod.objects.filter(company_id=req.company_id, is_deleted=False,
                                                 date_start__lte=req.date, date_end__gte=req.date).first()
        if not period:
            raise ApplicationError(_("Aucune période comptable pour cette date."))
        if period.state != "open":
            raise ApplicationError(_("La période comptable n'est pas ouverte."))
        if not req.lines:
            raise ApplicationError(_("Une pièce doit comporter au moins une ligne."))

        prepared = []
        total_d = total_c = Decimal("0")
        for i, ln in enumerate(req.lines, start=1):
            debit = Decimal(ln.debit or 0)
            credit = Decimal(ln.credit or 0)
            if debit < 0 or credit < 0:
                raise ApplicationError(_("Les montants ne peuvent pas être négatifs."))
            if (debit > 0) == (credit > 0):
                raise ApplicationError(_("Chaque ligne doit avoir soit un débit, soit un crédit."))
            acc = Account.objects.filter(company_id=req.company_id, code=ln.account_code, is_deleted=False).first()
            if not acc:
                raise ApplicationError(_("Compte introuvable : %s") % ln.account_code)
            if acc.deprecated:
                raise ApplicationError(_("Compte déprécié : %s") % ln.account_code)
            partner_id = ln.partner_id or req.partner_id
            if acc.reconcile and not partner_id:
                raise ApplicationError(_("Un partenaire est obligatoire sur le compte de tiers %s.") % acc.code)
            prepared.append((i, acc, ln.label, debit, credit, partner_id))
            total_d += debit
            total_c += credit

        entry = JournalEntry.objects.create(
            company_id=req.company_id, journal=journal, period=period, date=req.date,
            entry_type=req.entry_type, partner_id=req.partner_id, label=req.label,
            reference=req.reference, source_model=req.source_model, source_id=req.source_id,
            total_debit=total_d, total_credit=total_c, created_by=created_by)
        for seq, acc, label, debit, credit, partner_id in prepared:
            JournalEntryLine.objects.create(entry=entry, sequence=seq, account=acc, label=label,
                                            debit=debit, credit=credit, partner_id=partner_id, created_by=created_by)
        return entry
