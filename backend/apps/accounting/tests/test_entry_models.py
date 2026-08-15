import pytest
from datetime import date
from decimal import Decimal
from apps.system_config.models import Company
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod, JournalEntry, JournalEntryLine, Partner


@pytest.mark.django_db
def test_entry_with_lines():
    c = Company.objects.create(name="Moteur Co")
    fy = FiscalYear.objects.create(company=c, code="FY2026", name="Ex", date_start=date(2026, 1, 1), date_end=date(2026, 12, 31))
    p = AccountingPeriod.objects.create(company=c, fiscal_year=fy, code="2026-01", name="Jan", date_start=date(2026, 1, 1), date_end=date(2026, 1, 31))
    j = Journal.objects.create(company=c, code="OD", name="OD", journal_type="general")
    a1 = Account.objects.create(company=c, code="571", name="Caisse", account_type="asset_cash")
    a2 = Account.objects.create(company=c, code="706", name="Ventes", account_type="income")
    e = JournalEntry.objects.create(company=c, journal=j, period=p, date=date(2026, 1, 10), label="Test")
    JournalEntryLine.objects.create(entry=e, sequence=1, account=a1, debit=Decimal("100"))
    JournalEntryLine.objects.create(entry=e, sequence=2, account=a2, credit=Decimal("100"))
    assert e.lines.count() == 2
    assert e.state == "draft"


@pytest.mark.django_db
def test_partner_str():
    c = Company.objects.create(name="P Co")
    part = Partner.objects.create(company=c, partner_type="customer", name="Client X")
    assert str(part) == "Client X"
