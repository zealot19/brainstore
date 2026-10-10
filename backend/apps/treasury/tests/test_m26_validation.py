import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister
    from apps.treasury.services.services import create_cash_register, open_session
    company, _ = create_company(name="M26V", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("10000"), created_by=admin)
    return company, admin, reg, sess


def _non_admin(company, email):
    return User.objects.create(company=company, email=email, username=email,
                               is_institution_admin=False, is_superuser=False)


def _pending_expense(company, sess, admin, amount="3000", category=None):
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    return create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=category or Transaction.Category.GENERAL_EXPENSE,
        account_type=Transaction.AccountType.CASH, cash_session=sess,
        amount=Decimal(amount), payment_mode="cash",
        status=Transaction.Status.PENDING, created_by=admin)


@pytest.mark.django_db
def test_validate_applies_balance():
    from apps.treasury.models import Transaction
    from apps.treasury.services.operation_validation import validate_operation
    company, admin, reg, sess = _ctx("m26v1@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    txn = _pending_expense(company, sess, admin)
    validate_operation(txn, user=admin)
    txn.refresh_from_db(); reg.refresh_from_db()
    assert txn.status == Transaction.Status.VALIDATED
    assert reg.current_balance == before - Decimal("3000")


@pytest.mark.django_db
def test_invalidate_reverses_validated():
    from apps.treasury.models import Transaction
    from apps.treasury.services.operation_validation import validate_operation, invalidate_operation
    company, admin, reg, sess = _ctx("m26v2@x.com")
    txn = _pending_expense(company, sess, admin)
    validate_operation(txn, user=admin); reg.refresh_from_db(); after_val = reg.current_balance
    invalidate_operation(txn, user=admin); reg.refresh_from_db(); txn.refresh_from_db()
    assert txn.status == Transaction.Status.INVALIDATED
    assert reg.current_balance == after_val + Decimal("3000")


@pytest.mark.django_db
def test_modify_pending_then_locked_after_validate():
    from apps.treasury.services.operation_validation import modify_operation, validate_operation
    from apps.core.exceptions import ApplicationError
    company, admin, reg, sess = _ctx("m26v3@x.com")
    txn = _pending_expense(company, sess, admin)
    modify_operation(txn, amount=Decimal("4500"), user=admin)
    txn.refresh_from_db(); assert txn.amount == Decimal("4500")
    validate_operation(txn, user=admin)
    with pytest.raises(ApplicationError):
        modify_operation(txn, amount=Decimal("1"), user=admin)


@pytest.mark.django_db
def test_frais_de_route_validation_admin_only():
    from apps.treasury.models import Transaction
    from apps.treasury.services.operation_validation import validate_operation
    from apps.core.exceptions import ApplicationError
    company, admin, reg, sess = _ctx("m26v4@x.com")
    guichetier = _non_admin(company, "g26@x.com")
    txn = _pending_expense(company, sess, admin, amount="1000", category=Transaction.Category.VOYAGE_EXPENSE)
    with pytest.raises(ApplicationError):
        validate_operation(txn, user=guichetier)
    validate_operation(txn, user=admin)
    txn.refresh_from_db(); assert txn.status == Transaction.Status.VALIDATED


@pytest.mark.django_db
def test_validate_blocks_overdraw():
    from apps.treasury.services.operation_validation import validate_operation
    from apps.core.exceptions import ApplicationError
    company, admin, reg, sess = _ctx("m26v5@x.com")
    txn = _pending_expense(company, sess, admin, amount="20000")  # > opening 10000
    with pytest.raises(ApplicationError):
        validate_operation(txn, user=admin)
