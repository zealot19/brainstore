import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _company():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="Bill Co", admin_email="bill@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="bill@x.com")


def _den(company, value):
    from apps.treasury.models import CurrencyDenomination
    return CurrencyDenomination.objects.get(company=company, value=value)


@pytest.mark.django_db
def test_company_creation_seeds_xaf_denominations():
    from apps.treasury.models import CurrencyDenomination
    company, _ = _company()
    qs = CurrencyDenomination.objects.filter(company=company)
    assert qs.count() == 11
    assert qs.filter(value=10000, kind="banknote").exists()
    assert qs.filter(value=500, kind="coin").exists()


@pytest.mark.django_db
def test_close_with_billetage_computes_ecart():
    from apps.treasury.services import create_cash_register, open_session, close_session
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, opening_balance=Decimal("10000"), created_by=admin)
    # No movements → théorique = 10 000. Count 9 500 physically → écart -500.
    items = [
        {"denomination_id": str(_den(company, 5000).id), "quantity": 1},   # 5 000
        {"denomination_id": str(_den(company, 2000).id), "quantity": 2},   # 4 000
        {"denomination_id": str(_den(company, 500).id),  "quantity": 1},   #   500
    ]
    session = close_session(session, closing_count=items, updated_by=admin)
    assert session.closing_balance == Decimal("9500")
    assert session.expected_closing == Decimal("10000")
    assert session.difference == Decimal("-500")
    assert session.counts.filter(kind="closing").exists()


@pytest.mark.django_db
def test_billetage_rejects_foreign_denomination():
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.services.billetage import compute_count_total
    company, admin = _company()
    other, _ = _company_other()
    den_other = _den(other, 10000)
    with pytest.raises(ApplicationError):
        compute_count_total(company, [{"denomination_id": str(den_other.id), "quantity": 1}])


def _company_other():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="Bill Co2", admin_email="bill2@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="bill2@x.com")


@pytest.mark.django_db
def test_api_open_plain_then_close_with_billetage():
    from rest_framework.test import APIClient
    from apps.treasury.services import create_cash_register
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    c = APIClient(); c.force_authenticate(user=admin)
    # Ouverture sans billetage (montant simple) — le billetage est réservé à la clôture.
    r = c.post("/api/v1/treasury/sessions/open/",
               {"cash_register_id": str(reg.id), "name": "Matin", "opening_balance": "0"}, format="json")
    assert r.status_code in (200, 201), r.content
    sid = (r.json().get("data") or r.json())["id"]
    # Clôture avec billetage.
    r = c.post(f"/api/v1/treasury/sessions/{sid}/close/",
               {"closing_count": [{"denomination_id": str(_den(company, 10000).id), "quantity": 2}]},
               format="json")
    assert r.status_code in (200, 201), r.content
    r = c.get(f"/api/v1/treasury/sessions/{sid}/counts/")
    data = r.json().get("data", r.json())
    assert len(data) == 1 and data[0]["kind"] == "closing" and Decimal(str(data[0]["total_amount"])) == Decimal("20000")
