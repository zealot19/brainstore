import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.voyages_config.models import ExpenseType
    company, _ = create_company(name="M26MP", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("10000"), created_by=admin)
    etype = ExpenseType.objects.create(company=company, code="DIV", name="Divers")
    return company, admin, reg, sess, etype


@pytest.mark.django_db
def test_general_expense_disburse_is_pending_until_validated():
    from apps.treasury.models import Transaction, GeneralExpense
    from apps.treasury.services.general_expense_services import disburse_general_expense
    from apps.treasury.services.operation_validation import validate_operation
    company, admin, reg, sess, etype = _ctx("m26mp1@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    exp = GeneralExpense.objects.create(company=company, expense_type=etype, label="T",
                                        amount=Decimal("3000"), status=GeneralExpense.Status.UNPAID, created_by=admin)
    disburse_general_expense(exp, user=admin, cash_session=sess)
    txn = Transaction.objects.get(general_expense=exp, is_deleted=False)
    reg.refresh_from_db()
    assert txn.status == Transaction.Status.PENDING       # en attente
    assert reg.current_balance == before                   # solde non impacté
    validate_operation(txn, user=admin); reg.refresh_from_db()
    assert reg.current_balance == before - Decimal("3000")  # impacté à la validation


@pytest.mark.django_db
def test_other_income_is_pending():
    from apps.treasury.models import Transaction
    from apps.treasury.services import record_other_income
    company, admin, reg, sess, etype = _ctx("m26mp2@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    txn = record_other_income(company, amount=Decimal("2000"), payment_mode="cash",
                              description="Vente diverse", user=admin, cash_session=sess)
    reg.refresh_from_db()
    assert txn.status == Transaction.Status.PENDING
    assert reg.current_balance == before                   # pas d'impact tant que non validé
