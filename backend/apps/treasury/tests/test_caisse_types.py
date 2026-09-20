import pytest
from decimal import Decimal
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import CashRegister, Transfer
from apps.treasury.services.services import create_cash_register, open_session, close_session


def _company(name="CaisseCo", email="caisse@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


# ── API : kind requis à la création ──────────────────────────────────────────

@pytest.mark.django_db
def test_create_register_requires_kind():
    company, admin = _company()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/treasury/registers/", {"name": "Sans type"}, format="json")
    assert r.status_code == 400
    r = c.post("/api/v1/treasury/registers/", {"name": "Guichet 1", "kind": "guichet"}, format="json")
    assert r.status_code in (200, 201), r.content
    assert r.json()["kind"] == "guichet"


# ── Clôture d'un guichet → transfert vers destination, guichet à 0F ───────────

@pytest.mark.django_db
def test_closing_guichet_transfers_to_destination_and_zeroes():
    company, admin = _company(name="GuichetClose", email="gc@x.com")
    guichet = create_cash_register(company=company, name="G1", kind=CashRegister.Kind.GUICHET,
                                   manager_ids=[admin.id], created_by=admin)
    dest = create_cash_register(company=company, name="Principale", kind=CashRegister.Kind.PRINCIPALE,
                                created_by=admin)
    session = open_session(company=company, cash_register=guichet, opening_balance=Decimal("5000"), created_by=admin)

    close_session(session, closing_balance=Decimal("5000"),
                  destination_cash_register_id=str(dest.id), updated_by=admin)

    guichet.refresh_from_db(); dest.refresh_from_db()
    assert guichet.current_balance == Decimal("0")
    assert dest.current_balance == Decimal("5000")
    assert Transfer.objects.filter(company=company, from_cash_register=guichet,
                                   to_cash_register=dest, amount=Decimal("5000"), is_deleted=False).exists()


@pytest.mark.django_db
def test_closing_guichet_requires_destination():
    company, admin = _company(name="GuichetNoDest", email="gnd@x.com")
    guichet = create_cash_register(company=company, name="G1", kind=CashRegister.Kind.GUICHET,
                                   manager_ids=[admin.id], created_by=admin)
    session = open_session(company=company, cash_register=guichet, opening_balance=Decimal("3000"), created_by=admin)
    with pytest.raises(ApplicationError):
        close_session(session, closing_balance=Decimal("3000"), updated_by=admin)


@pytest.mark.django_db
def test_closing_principale_needs_no_destination():
    company, admin = _company(name="PrincClose", email="pc@x.com")
    princ = create_cash_register(company=company, name="P1", kind=CashRegister.Kind.PRINCIPALE,
                                 manager_ids=[admin.id], created_by=admin)
    session = open_session(company=company, cash_register=princ, opening_balance=Decimal("2000"), created_by=admin)
    close_session(session, closing_balance=Decimal("2000"), updated_by=admin)
    princ.refresh_from_db()
    assert princ.current_balance == Decimal("2000")
    assert not Transfer.objects.filter(from_cash_register=princ, is_deleted=False).exists()


@pytest.mark.django_db
def test_guichetier_cannot_close():
    company, admin = _company(name="GuichetierClose", email="gcl@x.com")
    guichet = create_cash_register(company=company, name="G1", kind=CashRegister.Kind.GUICHET,
                                   manager_ids=[admin.id], created_by=admin)
    guichetier = User.objects.create(email="op@x.com", username="op", company=company, is_active=True)
    session = open_session(company=company, cash_register=guichet, opening_balance=Decimal("1000"), created_by=admin)
    session.assigned_to = guichetier
    session.save(update_fields=["assigned_to"])
    with pytest.raises(ApplicationError):
        close_session(session, closing_balance=Decimal("1000"), updated_by=guichetier)
