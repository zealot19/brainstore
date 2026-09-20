import pytest
from decimal import Decimal
from datetime import date
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import CashRegister, Transaction
from apps.treasury.services.services import create_cash_register, open_session, create_transaction
from apps.treasury.services import record_voyage_income
from apps.treasury.services.session_report import build_session_report


def _setup(email="rv@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="RvCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    reg = create_cash_register(company=company, name="G", kind=CashRegister.Kind.GUICHET,
                               manager_ids=[admin.id], created_by=admin)
    session = open_session(company=company, cash_register=reg, opening_balance=Decimal("0"), created_by=admin)
    return company, admin, reg, session


@pytest.mark.django_db
def test_record_voyage_income_creates_ticket_sales_income():
    company, admin, reg, session = _setup()
    txn = record_voyage_income(company, amount=Decimal("5000"), payment_mode="cash",
                               description="Course spéciale", transaction_date=date.today(),
                               user=admin, cash_session=session)
    assert txn.transaction_type == Transaction.Type.INCOME
    assert txn.category == Transaction.Category.TICKET_SALES
    assert txn.cash_session_id == session.id
    assert txn.transaction_date == date.today()


@pytest.mark.django_db
def test_record_voyage_income_requires_open_session():
    from apps.system_config.services import create_company
    company, _ = create_company(name="RvNoSess", admin_email="rvns@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rvns@x.com")
    with pytest.raises(ApplicationError):
        record_voyage_income(company, amount=Decimal("1000"), payment_mode="cash",
                             description="X", user=admin, cash_session=None)


@pytest.mark.django_db
def test_session_report_lists_tickets_parcels_baggage():
    company, admin, reg, session = _setup(email="rv3@x.com")
    record_voyage_income(company, amount=Decimal("5000"), payment_mode="cash",
                         description="Recette voyage manuelle", user=admin, cash_session=session)
    for cat in (Transaction.Category.PARCEL_SHIPPING, Transaction.Category.BAGGAGE):
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME, category=cat,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal("2000"), payment_mode="cash", description=f"{cat}", created_by=admin)

    rep = build_session_report(session)
    assert len(rep["tickets"]) == 1 and rep["tickets"][0]["amount"] == Decimal("5000")
    assert len(rep["parcels"]) == 1
    assert len(rep["baggage"]) == 1
