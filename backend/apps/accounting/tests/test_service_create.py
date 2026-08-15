import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Svc Co", admin_email="svc@x.com", admin_first_name="A", admin_last_name="B")
    return company


def _req(company, lines, **kw):
    return EntryRequest(company_id=company.id, journal_code="OD", date=date.today(), label="Test", lines=lines, **kw)


@pytest.mark.django_db
def test_create_balanced_draft():
    c = _company()
    e = AccountingService.create_entry(_req(c, [
        LineRequest(account_code="571", debit=Decimal("100")),
        LineRequest(account_code="706", credit=Decimal("100")),
    ]))
    assert e.state == "draft" and e.lines.count() == 2
    assert e.total_debit == Decimal("100") and e.total_credit == Decimal("100")


@pytest.mark.django_db
def test_create_line_both_sides_rejected():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(_req(c, [LineRequest(account_code="571", debit=Decimal("10"), credit=Decimal("5"))]))


@pytest.mark.django_db
def test_create_reconcilable_requires_partner():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(_req(c, [
            LineRequest(account_code="411", debit=Decimal("100")),   # 411 reconcile -> partenaire requis
            LineRequest(account_code="706", credit=Decimal("100")),
        ]))


@pytest.mark.django_db
def test_create_unknown_journal_rejected():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="ZZZ", date=date.today(), label="x",
                                                    lines=[LineRequest(account_code="571", debit=Decimal("1")), LineRequest(account_code="706", credit=Decimal("1"))]))
