import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.models import AccountingPeriod
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Post Co", admin_email="post@x.com", admin_first_name="A", admin_last_name="B")
    return company


def _entry(c):
    return AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("100"))]))


@pytest.mark.django_db
def test_post_assigns_sequential_numbers():
    c = _company()
    e1 = AccountingService.post_entry(_entry(c).id)
    e2 = AccountingService.post_entry(_entry(c).id)
    assert e1.state == "posted" and e1.name
    n1 = int(e1.name.split("/")[-1])
    n2 = int(e2.name.split("/")[-1])
    assert n2 == n1 + 1


@pytest.mark.django_db
def test_post_unbalanced_rejected():
    c = _company()
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("90"))]))
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)


@pytest.mark.django_db
def test_post_closed_period_rejected():
    c = _company()
    e = _entry(c)
    AccountingPeriod.objects.filter(id=e.period_id).update(state="closed")
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)


@pytest.mark.django_db
def test_post_non_draft_rejected():
    c = _company()
    e = AccountingService.post_entry(_entry(c).id)
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)
