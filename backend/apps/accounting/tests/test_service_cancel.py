import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _posted(c):
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("100"))]))
    return AccountingService.post_entry(e.id)


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Cancel Co", admin_email="cancel@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_cancel_creates_reversal():
    c = _company()
    orig = _posted(c)
    rev = AccountingService.cancel_entry(orig.id, reason="erreur")
    orig.refresh_from_db()
    assert orig.state == "cancelled"
    assert rev.state == "posted" and rev.reversed_entry_id == orig.id
    ol = {l.account.code: (l.debit, l.credit) for l in orig.lines.all()}
    rl = {l.account.code: (l.debit, l.credit) for l in rev.lines.all()}
    assert rl["571"] == (ol["571"][1], ol["571"][0])
    assert rl["706"] == (ol["706"][1], ol["706"][0])


@pytest.mark.django_db
def test_cancel_non_posted_rejected():
    c = _company()
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("1")), LineRequest(account_code="706", credit=Decimal("1"))]))
    with pytest.raises(ApplicationError):
        AccountingService.cancel_entry(e.id)
