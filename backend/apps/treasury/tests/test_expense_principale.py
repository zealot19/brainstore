import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import CashRegister, Transaction
from apps.treasury.services.services import create_cash_register, open_session, create_transfer
from apps.treasury.services.general_expense_services import disburse_general_expense
from apps.treasury.services import record_other_income


def _setup(email="exp@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    company, _ = create_company(name="ExpCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    princ = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                                 manager_ids=[admin.id], created_by=admin)
    guichet = create_cash_register(company=company, name="G", kind=CashRegister.Kind.GUICHET,
                                   opening_balance=Decimal("5000"), manager_ids=[admin.id], created_by=admin)
    etype = ExpenseType.objects.create(company=company, code="DIV", name="Divers")
    return company, admin, princ, guichet, etype


def _expense(company, etype, admin, amount):
    from apps.treasury.models import GeneralExpense
    return GeneralExpense.objects.create(company=company, expense_type=etype, label="Test",
                                         amount=Decimal(amount), status=GeneralExpense.Status.UNPAID,
                                         created_by=admin)


@pytest.mark.django_db
def test_expense_from_guichet_rejected():
    company, admin, princ, guichet, etype = _setup()
    gsess = open_session(company=company, cash_register=guichet, opening_balance=Decimal("5000"), created_by=admin)
    exp = _expense(company, etype, admin, "3000")
    with pytest.raises(ApplicationError):
        disburse_general_expense(exp, user=admin, cash_session=gsess)


@pytest.mark.django_db
def test_expense_from_principale_with_funds_ok():
    company, admin, princ, guichet, etype = _setup(email="exp2@x.com")
    psess = open_session(company=company, cash_register=princ, opening_balance=Decimal("6000"), created_by=admin)
    exp = _expense(company, etype, admin, "5000")
    disburse_general_expense(exp, user=admin, cash_session=psess)
    exp.refresh_from_db()
    assert exp.status == "paid"
    assert Transaction.objects.filter(general_expense=exp, transaction_type=Transaction.Type.EXPENSE,
                                      is_deleted=False).exists()


@pytest.mark.django_db
def test_insufficient_principale_then_transfer_unblocks():
    company, admin, princ, guichet, etype = _setup(email="exp3@x.com")
    psess = open_session(company=company, cash_register=princ, opening_balance=Decimal("1000"), created_by=admin)
    exp = _expense(company, etype, admin, "5000")
    with pytest.raises(ApplicationError):
        disburse_general_expense(exp, user=admin, cash_session=psess)

    # Le chef transfère d'un guichet vers la principale, puis re-décaisse.
    create_transfer(company=company, amount=Decimal("5000"),
                    from_cash_register=guichet, to_cash_register=princ, created_by=admin)
    disburse_general_expense(exp, user=admin, cash_session=psess)
    exp.refresh_from_db()
    assert exp.status == "paid"


@pytest.mark.django_db
def test_income_from_guichet_still_allowed():
    company, admin, princ, guichet, etype = _setup(email="exp4@x.com")
    gsess = open_session(company=company, cash_register=guichet, opening_balance=Decimal("0"), created_by=admin)
    txn = record_other_income(company, amount=Decimal("2000"), payment_mode="cash",
                              description="Vente diverse", user=admin, cash_session=gsess)
    assert txn is not None
    assert txn.transaction_type == Transaction.Type.INCOME
