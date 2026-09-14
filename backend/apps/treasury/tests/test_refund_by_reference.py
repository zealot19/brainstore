import pytest
from decimal import Decimal

from apps.core.exceptions import ApplicationError


def _company(name="RbrCo", email="rbr@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


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
        sender_name="Alice", sender_phone="1", recipient_name="Bob", recipient_phone="2",
        **kw)


@pytest.mark.django_db
def test_lookup_unknown_reference_returns_none():
    from apps.treasury.services import lookup_refundable
    company, _admin = _company()
    assert lookup_refundable(company, "NOPE") is None


@pytest.mark.django_db
def test_lookup_parcel_previews_amount_and_rate():
    from apps.treasury.services import lookup_refundable
    from apps.treasury.services.refund_config import set_refund_rate
    company, admin = _company(name="RbrLk", email="rbrl@x.com")
    set_refund_rate(company, 50, user=admin)
    _make_parcel(company, amount_due=3000, amount_received=3000)
    d = lookup_refundable(company, "col/1")  # case-insensitive
    assert d is not None
    assert d["kind"] == "colis"
    assert d["label"] == "Alice"
    assert d["amount_paid"] == Decimal("3000")
    assert d["refund_amount"] == Decimal("1500")
    assert d["refundable"] is True


@pytest.mark.django_db
def test_refund_by_reference_cancels_and_posts_accounting():
    from apps.treasury.services import lookup_refundable, refund_by_reference
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    company, admin = _company(name="RbrDo", email="rbrd@x.com")
    set_refund_rate(company, 100, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    p = _make_parcel(company, amount_due=3000, amount_received=3000)
    d = lookup_refundable(company, "COL/1")
    refund_by_reference(company, kind=d["kind"], obj_id=d["id"], user=admin)
    p.refresh_from_db()
    assert p.status == "cancelled"
    assert Transaction.objects.filter(company=company, category="refund", amount=3000).exists()


@pytest.mark.django_db
def test_refund_by_reference_rejects_bad_kind():
    from apps.treasury.services import refund_by_reference
    company, admin = _company(name="RbrBad", email="rbrb@x.com")
    with pytest.raises(ApplicationError):
        refund_by_reference(company, kind="wagon", obj_id="x", user=admin)


@pytest.mark.django_db
def test_refund_api_lookup_and_perform():
    from rest_framework.test import APIClient
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    company, admin = _company(name="RbrApi", email="rbra@x.com")
    set_refund_rate(company, 100, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _make_parcel(company, amount_due=2000, amount_received=2000)

    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/treasury/refunds/lookup/?reference=COL/1")
    assert r.status_code == 200, r.content
    d = r.json()["data"]
    assert d["kind"] == "colis" and Decimal(str(d["refund_amount"])) == Decimal("2000")

    r = c.post("/api/v1/treasury/refunds/", {"kind": d["kind"], "id": d["id"]}, format="json")
    assert r.status_code == 200, r.content
    assert Transaction.objects.filter(company=company, category="refund", amount=2000).exists()

    # 404 for unknown reference
    r = c.get("/api/v1/treasury/refunds/lookup/?reference=ZZZ")
    assert r.status_code == 404
