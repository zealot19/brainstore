import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.services.services import create_cash_register, create_bank_account, open_session
from apps.treasury.services.booking_sales import record_booking_payment, _normalize_payment


def _company(name="Sale Co", email="sale@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


def test_normalize_payment():
    assert _normalize_payment("") == ("cash", True)
    assert _normalize_payment("Espèces") == ("cash", True)
    assert _normalize_payment("cash") == ("cash", True)
    assert _normalize_payment("virement")[1] is False
    assert _normalize_payment("mobile_money")[0] == "mobile_money"
    assert _normalize_payment("chèque")[0] == "check"


@pytest.mark.django_db
def test_cash_sale_requires_open_session_and_posts_571_706():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("15000"), payment_method="cash", user=admin)
    assert txn is not None and txn.journal_entry is not None
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("15000")
    assert ln["706"][1] == Decimal("15000")


@pytest.mark.django_db
def test_cash_sale_without_session_raises():
    company, admin = _company(name="NoSess", email="ns@x.com")
    with pytest.raises(ApplicationError):
        record_booking_payment(company, booking=None, amount=Decimal("1000"), payment_method="cash", user=admin)


@pytest.mark.django_db
def test_bank_sale_single_account_posts_521_706():
    company, admin = _company(name="BankCo", email="bk@x.com")
    create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="1", created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"), payment_method="virement", user=admin)
    assert txn is not None and txn.account_type == "bank"
    ln = _lines(txn.journal_entry)
    assert ln["521"][0] == Decimal("5000")
    assert ln["706"][1] == Decimal("5000")


@pytest.mark.django_db
def test_bank_sale_no_account_is_non_blocking():
    company, admin = _company(name="NoBank", email="nb@x.com")
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"), payment_method="virement", user=admin)
    assert txn is None
