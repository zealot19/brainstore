import pytest
from decimal import Decimal


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="MgrCo", admin_email="m@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m@x.com")
    ag = Agency.objects.create(company=company, name="Dla", code="DLA")
    u1, _ = create_user(created_by=admin, company=company, email="u1@x.com", first_name="U", last_name="One",
                        is_institution_admin=False, default_agency_id=ag.id)
    u2, _ = create_user(created_by=admin, company=company, email="u2@x.com", first_name="U", last_name="Two",
                        is_institution_admin=False, default_agency_id=ag.id)
    return company, admin, u1, u2, ag


@pytest.mark.django_db
def test_register_has_several_managers_each_can_open():
    from apps.treasury.services.services import create_cash_register, open_session, close_session, is_cash_manager
    company, admin, u1, u2, ag = _setup()
    reg = create_cash_register(company=company, name="Principale", agency_id=ag.id,
                               manager_ids=[str(u1.id), str(u2.id)], created_by=admin)
    assert is_cash_manager(u1, reg) and is_cash_manager(u2, reg)
    s = open_session(company=company, cash_register=reg, created_by=u1)
    close_session(s, closing_balance=Decimal("0"), updated_by=u2)  # a different manager can close
    s2 = open_session(company=company, cash_register=reg, created_by=u2)  # the other manager opens next
    assert s2.status == "open"


@pytest.mark.django_db
def test_transfer_is_linked_to_source_session():
    from apps.treasury.services.services import create_cash_register, open_session, create_transfer
    company, admin, u1, u2, ag = _setup()
    src = create_cash_register(company=company, name="Caissier", agency_id=ag.id,
                               opening_balance=Decimal("50000"), manager_ids=[str(u1.id)], created_by=admin)
    dst = create_cash_register(company=company, name="Guichet", agency_id=ag.id,
                               manager_ids=[str(u2.id)], created_by=admin)
    session = open_session(company=company, cash_register=src, created_by=u1)
    tr = create_transfer(company=company, amount=Decimal("10000"),
                         from_cash_register=src, to_cash_register=dst, created_by=u1)
    assert tr.cash_session_id == session.id
    dst.refresh_from_db()
    assert dst.current_balance == Decimal("10000")  # approvisionnement du guichet
