import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.authentication.models import User
    from apps.users.services.user_services import create_user
    from apps.treasury.services.services import create_cash_register, open_session
    company, _ = create_company(name="CloseCo", admin_email="adm@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="adm@x.com")  # institution admin
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    opener, _ = create_user(created_by=admin, company=company, email="opener@x.com",
                            first_name="O", last_name="P", is_institution_admin=False,
                            default_agency_id=ag.id)
    other, _ = create_user(created_by=admin, company=company, email="other@x.com",
                           first_name="X", last_name="Y", is_institution_admin=False,
                           default_agency_id=ag.id)
    reg = create_cash_register(company=company, name="C1", agency_id=ag.id, created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=0, created_by=opener)
    return company, admin, opener, other, sess


@pytest.mark.django_db
def test_non_opener_non_admin_cannot_close():
    from apps.treasury.services.services import close_session
    company, admin, opener, other, sess = _setup()
    with pytest.raises(ApplicationError):
        close_session(sess, closing_balance=Decimal("0"), updated_by=other)


@pytest.mark.django_db
def test_opener_can_close():
    from apps.treasury.services.services import close_session
    from apps.treasury.models import CashSession
    company, admin, opener, other, sess = _setup()
    s = close_session(sess, closing_balance=Decimal("0"), updated_by=opener)
    assert s.status == CashSession.Status.CLOSED


@pytest.mark.django_db
def test_admin_can_close_any():
    from apps.treasury.services.services import close_session
    from apps.treasury.models import CashSession
    company, admin, opener, other, sess = _setup()
    s = close_session(sess, closing_balance=Decimal("0"), updated_by=admin)
    assert s.status == CashSession.Status.CLOSED
