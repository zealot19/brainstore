import pytest
from decimal import Decimal
from rest_framework.test import APIClient


def _setup():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.users.services.user_services import create_user
    from apps.treasury.services import (create_cash_register, schedule_session,
                                        open_scheduled_session, create_transaction)
    from apps.treasury.models import Transaction
    company, setup = create_company(name="BalCo", admin_email="bal@x.com",
                                    admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="bal@x.com")
    agency_id = setup["hq_agency_id"]
    gui, _ = create_user(created_by=admin, company=company, email="g@x.com",
                         first_name="G", last_name="U", is_institution_admin=False,
                         default_agency_id=agency_id, agency_ids=[agency_id])
    reg = create_cash_register(company=company, name="C1", agency_id=agency_id, created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=gui, created_by=admin)
    open_scheduled_session(s, opening_balance=Decimal("10000"), updated_by=admin)
    # Une recette au comptant dans la session.
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.OTHER_INCOME,
                       account_type=Transaction.AccountType.CASH,
                       amount=Decimal("2500"), payment_mode=Transaction.PaymentMode.CASH,
                       cash_session=s, created_by=admin)
    return company, admin, gui, s


@pytest.mark.django_db
def test_my_active_returns_live_balance():
    """my-active expose le solde théorique (fond + recettes − dépenses + transferts)."""
    company, admin, gui, s = _setup()
    c = APIClient(); c.force_authenticate(user=gui)
    r = c.get("/api/v1/treasury/sessions/my-active/")
    assert r.status_code == 200, r.content
    data = r.json()["data"]
    assert data["id"] == str(s.id)
    assert Decimal(data["current_balance"]) == Decimal("12500")  # 10000 + 2500
