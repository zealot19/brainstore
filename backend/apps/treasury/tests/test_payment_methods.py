import pytest


def _company(name="PMCo", email="pm@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_payment_method_model():
    from apps.treasury.models import PaymentMethod
    company = _company()
    pm = PaymentMethod.objects.create(company=company, code="wave", name="Wave",
                                      requires_payment=True, mode="mobile_money", is_system=False)
    assert str(pm) == "Wave"
    assert pm.requires_payment and pm.mode == "mobile_money"


@pytest.mark.django_db
def test_seed_payment_methods_idempotent():
    from apps.treasury.models import PaymentMethod
    from apps.treasury.services.seed import seed_payment_methods
    company = _company(name="Seed", email="seed@x.com")
    codes = set(PaymentMethod.objects.filter(company=company).values_list("code", flat=True))
    assert {"cash", "orange_money", "mobile_money", "loyalty", "unpaid"} <= codes
    loyalty = PaymentMethod.objects.get(company=company, code="loyalty")
    assert loyalty.requires_payment is False
    n_before = PaymentMethod.objects.filter(company=company).count()
    seed_payment_methods(company)  # re-run
    assert PaymentMethod.objects.filter(company=company).count() == n_before
