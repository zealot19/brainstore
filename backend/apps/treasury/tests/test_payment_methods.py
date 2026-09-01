import pytest


def _company(name="PMCo", email="pm@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_payment_method_model():
    from apps.treasury.models import PaymentMethod
    company = _company()
    pm = PaymentMethod.objects.create(company=company, code="orange_money", name="Orange Money",
                                      requires_payment=True, mode="mobile_money", is_system=True)
    assert str(pm) == "Orange Money"
    assert pm.requires_payment and pm.mode == "mobile_money"
