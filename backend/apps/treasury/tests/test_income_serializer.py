import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.consignment_sales import record_parcel_payment
from apps.treasury.serializers import IncomeRowSerializer, OtherIncomeWriteSerializer


def _company(name="Ser Co", email="ser@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_income_row_serializer_shape():
    company, admin = _company()
    reg = create_cash_register(company=company, name="Caisse Centrale", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("8000"),
                                payment_method="cash", user=admin)
    data = IncomeRowSerializer(txn).data
    assert data["category"] == "parcel_shipping"
    assert data["category_display"]
    assert Decimal(str(data["amount"])) == Decimal("8000.00")
    assert data["cash_register_name"] == "Caisse Centrale"
    assert data["account_label"] == "Caisse Centrale"
    assert "source_ref" in data and "source_party" in data


def test_other_income_write_serializer_validates_amount():
    ser = OtherIncomeWriteSerializer(data={"amount": "0", "payment_mode": "cash", "description": "x"})
    assert not ser.is_valid()
    ser2 = OtherIncomeWriteSerializer(data={"amount": "500", "payment_mode": "cash", "description": ""})
    assert ser2.is_valid(), ser2.errors
