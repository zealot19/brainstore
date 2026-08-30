import pytest
from decimal import Decimal
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.consignment_sales import record_parcel_payment


def _company(name="Api Co", email="api@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _auth(user):
    c = APIClient()
    c.force_authenticate(user=user)
    return c


@pytest.mark.django_db
def test_parcel_income_list_returns_rows():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    r = _auth(admin).get("/api/v1/treasury/recettes/parcel/")
    assert r.status_code == 200
    body = r.json()
    data = body["data"] if "data" in body else body
    assert len(data) == 1
    assert data[0]["category"] == "parcel_shipping"


@pytest.mark.django_db
def test_other_income_create_via_post():
    company, admin = _company(name="ApiPost", email="apip@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    r = _auth(admin).post("/api/v1/treasury/recettes/other/",
                          {"amount": "4000", "payment_mode": "cash", "description": "Vente"}, format="json")
    assert r.status_code in (200, 201), r.content
    lst = _auth(admin).get("/api/v1/treasury/recettes/other/").json()
    data = lst["data"] if "data" in lst else lst
    assert len(data) == 1 and data[0]["category"] == "other_income"


@pytest.mark.django_db
def test_income_dashboard_endpoint():
    company, admin = _company(name="ApiDash", email="apid@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    r = _auth(admin).get("/api/v1/treasury/recettes/dashboard/")
    assert r.status_code == 200
    body = r.json()
    d = body["data"] if "data" in body else body
    assert Decimal(str(d["parcel_total"])) == Decimal("8000")
