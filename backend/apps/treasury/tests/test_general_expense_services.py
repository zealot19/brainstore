import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.accounting.models import Account
    company, _ = create_company(name="GXsvc", admin_email="gxs@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="gxs@x.com")
    Account.objects.get_or_create(company=company, code="605", defaults={"name": "Fournitures", "created_by": admin})
    Account.objects.get_or_create(company=company, code="571", defaults={"name": "Caisse", "created_by": admin})
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    return company, admin, et, sess


@pytest.mark.django_db
def test_create_and_disburse_posts_and_idempotent():
    from apps.treasury.services.general_expense_services import create_general_expense, disburse_general_expense
    from apps.treasury.models import Transaction, GeneralExpense
    company, admin, et, sess = _setup()
    e = create_general_expense(company=company, expense_type=et, label="Détergent", amount=Decimal("3000"), created_by=admin)
    e = disburse_general_expense(e, user=admin, cash_session=sess)
    assert e.status == GeneralExpense.Status.PAID
    txn = Transaction.objects.get(general_expense=e, is_deleted=False)
    assert txn.category == Transaction.Category.GENERAL_EXPENSE and txn.amount == Decimal("3000")
    disburse_general_expense(e, user=admin, cash_session=sess)  # idempotent
    assert Transaction.objects.filter(general_expense=e, is_deleted=False).count() == 1


@pytest.mark.django_db
def test_edit_delete_blocked_after_paid():
    from apps.treasury.services.general_expense_services import (
        create_general_expense, disburse_general_expense, update_general_expense, delete_general_expense)
    company, admin, et, sess = _setup()
    e = create_general_expense(company=company, expense_type=et, label="X", amount=Decimal("1000"), created_by=admin)
    e = disburse_general_expense(e, user=admin, cash_session=sess)
    with pytest.raises(ApplicationError):
        update_general_expense(e, updated_by=admin, label="Y")
    with pytest.raises(ApplicationError):
        delete_general_expense(e, deleted_by=admin)


@pytest.mark.django_db
def test_resolve_session_requires_open_session_for_scoped_user():
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    from apps.users.services.user_services import create_user
    company, admin, et, sess = _setup()
    # utilisateur sans agence ni session ouverte -> pas de caisse résolue
    orphan, _ = create_user(created_by=admin, company=company, email="orph@x.com",
                            first_name="O", last_name="U", is_institution_admin=False)
    with pytest.raises(ApplicationError):
        resolve_disbursement_session(company.id, orphan, None)
