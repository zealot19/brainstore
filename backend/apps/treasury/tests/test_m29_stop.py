import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister, CashSession
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="M29 Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    caissier = User.objects.create(company=company, email="c-" + email, username="c-" + email,
                                   is_institution_admin=False, is_superuser=False)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    session = CashSession.objects.create(company=company, cash_register=reg, assigned_to=caissier,
                                         status=CashSession.Status.OPEN, opening_balance=Decimal("1000"),
                                         opened_by=admin, created_by=admin)
    return company, admin, caissier, reg, session


def _closing_count(session, user):
    from apps.treasury.models import CashCount
    CashCount.objects.create(cash_session=session, kind=CashCount.Kind.CLOSING, total_amount=0,
                             counted_by=user, created_by=user)


@pytest.mark.django_db
def test_stop_requires_billetage():
    from apps.treasury.services.services import stop_session
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, reg, session = _ctx("m29a@x.com")
    with pytest.raises(ApplicationError):
        stop_session(session, user=caissier)   # pas de billetage CLOSING


@pytest.mark.django_db
def test_stop_only_assigned_caissier():
    from apps.treasury.services.services import stop_session
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, reg, session = _ctx("m29b@x.com")
    _closing_count(session, caissier)
    other = User.objects.create(company=company, email="o@x.com", username="o@x.com",
                                is_institution_admin=False, is_superuser=False)
    with pytest.raises(ApplicationError):
        stop_session(session, user=other)
    stop_session(session, user=caissier)
    session.refresh_from_db()
    from apps.treasury.models import CashSession
    assert session.status == CashSession.Status.STOPPED
    assert session.stopped_by_id == caissier.id


@pytest.mark.django_db
def test_stopped_blocks_operations():
    from apps.treasury.models import Transaction, CashSession
    from apps.treasury.services.services import stop_session, create_transaction
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, reg, session = _ctx("m29c@x.com")
    _closing_count(session, caissier)
    stop_session(session, user=caissier)
    with pytest.raises(ApplicationError):
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                           category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
                           cash_session=session, amount=Decimal("100"), payment_mode="cash", created_by=admin)


@pytest.mark.django_db
def test_no_resume_from_stopped():
    from apps.treasury.services.services import stop_session, resume_session
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, reg, session = _ctx("m29d@x.com")
    _closing_count(session, caissier)
    stop_session(session, user=caissier)
    with pytest.raises(ApplicationError):
        resume_session(session, updated_by=admin)


@pytest.mark.django_db
def test_close_from_stopped():
    from apps.treasury.models import CashSession
    from apps.treasury.services.services import stop_session, close_session
    company, admin, caissier, reg, session = _ctx("m29e@x.com")
    _closing_count(session, caissier)
    stop_session(session, user=caissier)
    close_session(session, closing_balance=Decimal("1000"), updated_by=admin)
    session.refresh_from_db()
    assert session.status == CashSession.Status.CLOSED


@pytest.mark.django_db
def test_stop_requires_open():
    from apps.treasury.models import CashSession
    from apps.treasury.services.services import stop_session
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, reg, session = _ctx("m29f@x.com")
    _closing_count(session, caissier)
    stop_session(session, user=caissier)   # OPEN → STOPPED
    with pytest.raises(ApplicationError):
        stop_session(session, user=caissier)   # déjà STOPPED
