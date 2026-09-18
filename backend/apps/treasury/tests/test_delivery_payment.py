import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, create_bank_account, open_session
from apps.treasury.services.consignment_sales import record_parcel_delivery


def _company(name="Deliv Co", email="deliv@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_record_parcel_delivery_creates_delivery_income():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_delivery(company, parcel=None, amount=Decimal("1500"),
                                 payment_method="cash", user=admin)
    assert txn is not None
    assert txn.category == Transaction.Category.PARCEL_DELIVERY
    assert txn.transaction_type == Transaction.Type.INCOME
    assert txn.amount == Decimal("1500")
    # No voyages_parcel link (idempotency intentionally off for delivery).
    assert txn.voyages_parcel_id is None


@pytest.mark.django_db
def test_delivery_cash_without_session_raises():
    company, admin = _company(name="DelivNoSess", email="dns@x.com")
    with pytest.raises(ApplicationError):
        record_parcel_delivery(company, parcel=None, amount=Decimal("1500"),
                               payment_method="cash", user=admin)
