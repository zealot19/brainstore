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


@pytest.mark.django_db
def test_booking_payment_requires_payment_records_income():
    # orange_money -> mode mobile_money (non-cash) -> bank branch needs exactly 1 active bank.
    from apps.treasury.services.booking_sales import record_booking_payment
    from apps.treasury.services import create_bank_account
    from decimal import Decimal
    company = _company(name="Req", email="req@x.com")
    from apps.authentication.models import User
    admin = User.objects.get(email="req@x.com")
    create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="1", created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"),
                                 payment_method="orange_money", user=admin)
    assert txn is not None and txn.payment_mode == "mobile_money"


@pytest.mark.django_db
def test_no_payment_method_records_no_income():
    from apps.treasury.services.booking_sales import record_booking_payment
    from apps.treasury.models import Transaction
    from decimal import Decimal
    company = _company(name="Free", email="free@x.com")
    from apps.authentication.models import User
    admin = User.objects.get(email="free@x.com")
    before = Transaction.objects.count()
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"),
                                 payment_method="loyalty", user=admin)
    assert txn is None
    assert Transaction.objects.count() == before  # no session needed, no income


@pytest.mark.django_db
def test_payment_method_crud_api():
    from rest_framework.test import APIClient
    from apps.authentication.models import User
    from apps.treasury.models import PaymentMethod
    company = _company(name="Api", email="api2@x.com")
    admin = User.objects.get(email="api2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/treasury/payment-methods/")
    assert r.status_code == 200
    body = r.json(); data = body["data"] if "data" in body else body
    assert any(m["code"] == "orange_money" for m in data)
    r = c.post("/api/v1/treasury/payment-methods/",
               {"code": "wave", "name": "Wave", "requires_payment": True, "mode": "mobile_money"}, format="json")
    assert r.status_code in (200, 201), r.content
    sysm = PaymentMethod.objects.get(company=company, code="cash")
    r = c.delete(f"/api/v1/treasury/payment-methods/{sysm.id}/")
    assert r.status_code == 400
