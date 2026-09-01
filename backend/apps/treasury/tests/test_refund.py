import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _company(name="RfCo", email="rf@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_refund_rate_get_set():
    from apps.treasury.services.refund_config import get_refund_rate, set_refund_rate
    company, admin = _company()
    assert get_refund_rate(company) == Decimal("0")
    set_refund_rate(company, 50, user=admin)
    assert get_refund_rate(company) == Decimal("50")


@pytest.mark.django_db
def test_refund_rate_rejects_out_of_range():
    from apps.treasury.services.refund_config import set_refund_rate
    company, admin = _company(name="RfBad", email="rfb@x.com")
    with pytest.raises(ApplicationError):
        set_refund_rate(company, 150, user=admin)


@pytest.mark.django_db
def test_refund_on_cancel_zero_rate_is_noop():
    from apps.treasury.services.refund import refund_on_cancel
    from apps.treasury.models import Transaction
    company, admin = _company(name="RfZero", email="rfz@x.com")
    before = Transaction.objects.count()
    txn = refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="x")
    assert txn is None and Transaction.objects.count() == before


@pytest.mark.django_db
def test_refund_on_cancel_records_outflow():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services.refund import refund_on_cancel
    from apps.treasury.services import create_cash_register, open_session
    company, admin = _company(name="RfPay", email="rfp@x.com")
    set_refund_rate(company, 50, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="Remb")
    assert txn is not None
    assert txn.transaction_type == "expense" and txn.category == "refund"
    assert txn.amount == Decimal("5000")


@pytest.mark.django_db
def test_refund_on_cancel_needs_session_when_positive():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services.refund import refund_on_cancel
    company, admin = _company(name="RfNoSess", email="rfn@x.com")
    set_refund_rate(company, 50, user=admin)
    with pytest.raises(ApplicationError):
        refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="Remb")


def _make_parcel(company, **kw):
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    from apps.voyages_consignment.models import Parcel
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    nature = ConsignmentNature.objects.create(company=company, code="GEN", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="STD", label="Standard", nature=nature)
    return Parcel.objects.create(
        company=company, reference="COL/1", status="registered",
        origin_point=a, destination_point=b, consignment_type=ct,
        sender_name="A", sender_phone="1", recipient_name="B", recipient_phone="2",
        **kw)


@pytest.mark.django_db
def test_cancel_parcel_refunds():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    from apps.voyages_consignment.services.parcel_services import cancel_parcel
    company, admin = _company(name="Pc", email="pc@x.com")
    set_refund_rate(company, 100, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    p = _make_parcel(company, amount_due=3000, amount_received=3000)
    cancel_parcel(p, user=admin)
    assert p.status == "cancelled"
    assert Transaction.objects.filter(company=company, category="refund", amount=3000).exists()


@pytest.mark.django_db
def test_refund_rate_api():
    from rest_framework.test import APIClient
    company, admin = _company(name="RfApi", email="rfa@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/treasury/refund-rate/")
    assert r.status_code == 200
    body = r.json(); d = body["data"] if "data" in body else body
    assert Decimal(str(d["rate"])) == Decimal("0")
    r = c.put("/api/v1/treasury/refund-rate/", {"rate": 25}, format="json")
    assert r.status_code == 200, r.content
    r = c.get("/api/v1/treasury/refund-rate/")
    d = r.json().get("data", r.json())
    assert Decimal(str(d["rate"])) == Decimal("25")
