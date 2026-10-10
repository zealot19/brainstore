import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister
    from apps.treasury.services.services import create_cash_register, open_session
    company, _ = create_company(name="M26", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("10000"), created_by=admin)
    return company, admin, reg, sess


@pytest.mark.django_db
def test_pending_does_not_touch_balance_or_accounting():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.expense_shared import principale_available_cash
    company, admin, reg, sess = _ctx("m26g1@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    avail_before = principale_available_cash(sess)
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                             category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
                             cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
                             status=Transaction.Status.PENDING, created_by=admin)
    reg.refresh_from_db()
    assert txn.status == Transaction.Status.PENDING
    assert reg.current_balance == before                 # solde inchangé
    assert txn.journal_entry_id is None                  # pas d'écriture
    assert principale_available_cash(sess) == avail_before


@pytest.mark.django_db
def test_deleting_pending_does_not_touch_balance():
    # delete_transaction ne doit extourner le solde QUE pour une opération validée ;
    # supprimer une opération en attente (jamais appliquée) ne change pas le solde.
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction, delete_transaction
    company, admin, reg, sess = _ctx("m26g3@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                             category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
                             cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
                             status=Transaction.Status.PENDING, created_by=admin)
    delete_transaction(txn, deleted_by=admin)
    reg.refresh_from_db()
    assert reg.current_balance == before   # pas d'extourne fantôme


@pytest.mark.django_db
def test_validated_default_applies_immediately():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    company, admin, reg, sess = _ctx("m26g2@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
                       cash_session=sess, amount=Decimal("2000"), payment_mode="cash", created_by=admin)
    reg.refresh_from_db()
    assert reg.current_balance == before + Decimal("2000")   # défaut VALIDATED = immédiat
