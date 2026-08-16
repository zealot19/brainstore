import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session, create_transaction
from apps.treasury.serializers import TransactionReadSerializer


@pytest.mark.django_db
def test_transaction_serializer_exposes_journal_entry():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Txn Ser Co", admin_email="ts@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ts@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="income", category="ticket_sales",
                             account_type="cash", amount=Decimal("100"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    data = TransactionReadSerializer(txn).data
    assert "journal_entry" in data
    assert data["journal_entry"] is not None
