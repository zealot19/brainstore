import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, open_session, create_transaction


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


@pytest.mark.django_db
def test_counterpart_account_override_used():
    from apps.system_config.services import create_company
    from apps.accounting.models import Account
    company, _ = create_company(name="CoOv", admin_email="ov@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ov@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    acc604 = Account.objects.get(company=company, code="604")
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                             category=Transaction.Category.VOYAGE_EXPENSE,
                             account_type=Transaction.AccountType.CASH,
                             cash_session=session, amount=Decimal("15000"),
                             payment_mode=Transaction.PaymentMode.CASH, counterpart_account=acc604,
                             description="Carburant", created_by=admin)
    ln = _lines(txn.journal_entry)
    assert ln["604"][0] == Decimal("15000")   # debit charge
    assert ln["571"][1] == Decimal("15000")   # credit caisse
