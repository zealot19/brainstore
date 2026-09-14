import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Chg Co", admin_email="adm@chg.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="adm@chg.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    charge, _ = create_user(created_by=admin, company=company, email="charge@x.com",
                            first_name="Ch", last_name="Arge", is_institution_admin=False,
                            default_agency_id=ag.id)
    other, _ = create_user(created_by=admin, company=company, email="other@x.com",
                           first_name="Ot", last_name="Her", is_institution_admin=False,
                           default_agency_id=ag.id)
    reg = create_cash_register(company=company, name="Caisse A", agency_id=ag.id,
                               responsible=charge, created_by=admin)
    return company, admin, charge, other, reg


@pytest.mark.django_db
def test_only_responsible_opens_a_register_with_a_charge():
    from apps.treasury.services.services import open_session
    company, admin, charge, other, reg = _setup()
    with pytest.raises(ApplicationError):
        open_session(company=company, cash_register=reg, created_by=other)
    s = open_session(company=company, cash_register=reg, name="Matin", created_by=charge)
    assert s.status == "open" and s.name == "Matin"


@pytest.mark.django_db
def test_admin_bypasses_charge_rule():
    from apps.treasury.services.services import open_session
    company, admin, charge, other, reg = _setup()
    s = open_session(company=company, cash_register=reg, created_by=admin)
    assert s.status == "open"


@pytest.mark.django_db
def test_only_opener_can_transact():
    from apps.treasury.services.services import open_session, create_transaction
    from apps.treasury.models import Transaction
    company, admin, charge, other, reg = _setup()
    session = open_session(company=company, cash_register=reg, created_by=charge)
    # Another cashier cannot post on this session
    with pytest.raises(ApplicationError):
        create_transaction(
            company=company, transaction_type=Transaction.Type.INCOME,
            category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
            amount=Decimal("1000"), payment_mode=Transaction.PaymentMode.CASH,
            cash_session=session, created_by=other)
    # The opener can
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal("1000"), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=charge)
    assert txn.amount == Decimal("1000")


@pytest.mark.django_db
def test_admin_can_transact_on_any_session():
    from apps.treasury.services.services import open_session, create_transaction
    from apps.treasury.models import Transaction
    company, admin, charge, other, reg = _setup()
    session = open_session(company=company, cash_register=reg, created_by=charge)
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal("500"), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=admin)
    assert txn.amount == Decimal("500")
