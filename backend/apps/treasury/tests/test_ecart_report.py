import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Ec Co", admin_email="ec@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ec@x.com")
    ag = Agency.objects.create(company=company, name="Dla", code="DLA")
    g, _ = create_user(created_by=admin, company=company, email="g@x.com", first_name="G", last_name="U",
                       is_institution_admin=False, default_agency_id=ag.id)
    reg = create_cash_register(company=company, name="C1", agency_id=ag.id,
                               manager_ids=[str(g.id)], created_by=admin)
    return company, admin, g, reg


def _open(company, admin, g, reg, opening):
    from apps.treasury.services import schedule_session, open_scheduled_session
    s = schedule_session(company=company, cash_register=reg, assigned_to=g, created_by=admin)
    return open_scheduled_session(s, opening_balance=opening, updated_by=g)


@pytest.mark.django_db
def test_ecart_justified_after_close():
    """La clôture n'exige plus de motif ; l'écart se justifie APRÈS validation."""
    from apps.treasury.services import close_session, justify_session_ecart
    company, admin, g, reg = _setup()
    s = _open(company, admin, g, reg, Decimal("10000"))
    # Counted 9500 vs expected 10000 -> écart -500 : la clôture réussit sans motif.
    s = close_session(s, closing_balance=Decimal("9500"), updated_by=g)
    assert s.difference == Decimal("-500")
    assert s.ecart_status == "shortage"
    assert s.justification_reason == ""        # pas encore justifié
    # Justification APRÈS clôture.
    s = justify_session_ecart(s, reason="comptage", note="mal compté", updated_by=admin)
    assert s.justification_reason == "comptage"
    assert s.justification_note == "mal compté"


@pytest.mark.django_db
def test_justify_requires_reason_and_ecart():
    from apps.treasury.services import close_session, justify_session_ecart
    company, admin, g, reg = _setup()
    # Session équilibrée : rien à justifier.
    s = _open(company, admin, g, reg, Decimal("10000"))
    s = close_session(s, closing_balance=Decimal("10000"), updated_by=g)
    with pytest.raises(ApplicationError):
        justify_session_ecart(s, reason="comptage", updated_by=admin)
    # Session avec écart mais motif vide -> erreur.
    s2 = _open(company, admin, g, reg, Decimal("10000"))
    s2 = close_session(s2, closing_balance=Decimal("9500"), updated_by=g)
    with pytest.raises(ApplicationError):
        justify_session_ecart(s2, reason="", updated_by=admin)


@pytest.mark.django_db
def test_balanced_needs_no_justification():
    from apps.treasury.services import close_session
    company, admin, g, reg = _setup()
    s = _open(company, admin, g, reg, Decimal("10000"))
    s = close_session(s, closing_balance=Decimal("10000"), updated_by=g)
    assert s.ecart_status == "balanced" and s.justification_reason == ""


@pytest.mark.django_db
def test_session_report_endpoint():
    from decimal import Decimal
    from rest_framework.test import APIClient
    from apps.treasury.services import close_session, create_transaction
    from apps.treasury.models import Transaction
    company, admin, g, reg = _setup()
    s = _open(company, admin, g, reg, Decimal("10000"))
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
                       amount=Decimal("2000"), payment_mode=Transaction.PaymentMode.CASH,
                       cash_session=s, created_by=g)
    close_session(s, closing_balance=Decimal("12000"), updated_by=g)  # expected 12000 -> balanced
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get(f"/api/v1/treasury/sessions/{s.id}/report/")
    assert r.status_code == 200, r.content
    d = r.json()["data"]
    assert Decimal(str(d["summary"]["income_total"])) == Decimal("2000")
    assert Decimal(str(d["summary"]["expected_closing"])) == Decimal("12000")
    assert d["summary"]["ecart_status"] == "balanced"
    assert any(p["mode"] == "cash" for p in d["payments"])
