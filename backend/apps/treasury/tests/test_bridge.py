import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.models import MovementAccountMapping
from apps.treasury.services.services import (
    create_cash_register, create_bank_account, open_session, close_session,
    create_transaction, create_transfer,
)
from apps.accounting.models import JournalEntry


def _ctx():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bridge Co", admin_email="br@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="br@x.com")
    return company, admin


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


@pytest.mark.django_db
def test_income_cash_posts_debit_571_credit_706():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="income", category="ticket_sales",
                             account_type="cash", amount=Decimal("15000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    assert txn.journal_entry is not None and txn.journal_entry.state == "posted"
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("15000")
    assert ln["706"][1] == Decimal("15000")


@pytest.mark.django_db
def test_expense_cash_posts_debit_601_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("50000"), created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="expense", category="fuel",
                             account_type="cash", amount=Decimal("45000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    ln = _lines(txn.journal_entry)
    assert ln["601"][0] == Decimal("45000")
    assert ln["571"][1] == Decimal("45000")


@pytest.mark.django_db
def test_transfer_cash_to_bank_posts_debit_521_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("100000"), created_by=admin)
    bank = create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="123", created_by=admin)
    tr = create_transfer(company=company, amount=Decimal("50000"),
                         from_cash_register=reg, to_bank_account=bank, created_by=admin)
    assert tr.journal_entry is not None
    ln = _lines(tr.journal_entry)
    assert ln["521"][0] == Decimal("50000")
    assert ln["571"][1] == Decimal("50000")


@pytest.mark.django_db
def test_session_shortage_posts_debit_658_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("0"), created_by=admin)
    create_transaction(company=company, transaction_type="income", category="ticket_sales",
                       account_type="cash", amount=Decimal("15000"), payment_mode="cash",
                       cash_session=sess, created_by=admin)
    close_session(sess, closing_balance=Decimal("14000"), updated_by=admin)  # manquant de 1000
    diff = JournalEntry.objects.filter(company=company, source_model="treasury.CashSession").first()
    assert diff is not None
    ln = _lines(diff)
    assert ln["658"][0] == Decimal("1000")
    assert ln["571"][1] == Decimal("1000")


@pytest.mark.django_db
def test_bridge_non_blocking_when_mapping_missing():
    company, admin = _ctx()
    MovementAccountMapping.objects.filter(company=company, category="fuel").delete()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("50000"), created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="expense", category="fuel",
                             account_type="cash", amount=Decimal("1000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    assert txn.id is not None
    assert txn.journal_entry is None
