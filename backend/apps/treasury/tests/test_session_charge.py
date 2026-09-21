import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Chg Co", admin_email="adm@chg.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="adm@chg.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    mgr, _ = create_user(created_by=admin, company=company, email="mgr@x.com",
                         first_name="Ma", last_name="Nager", is_institution_admin=False,
                         default_agency_id=ag.id)
    other, _ = create_user(created_by=admin, company=company, email="other@x.com",
                           first_name="Ot", last_name="Her", is_institution_admin=False,
                           default_agency_id=ag.id)
    reg = create_cash_register(company=company, name="Caisse A", agency_id=ag.id,
                               manager_ids=[str(mgr.id)], created_by=admin)
    return company, admin, mgr, other, reg


@pytest.mark.django_db
def test_agency_user_opens_the_register():
    # L'ouverture n'exige plus d'être gestionnaire de la caisse : la gestion des
    # sessions est gouvernée par le droit RBAC treasury.session.manage (imposé à
    # l'endpoint) et bornée à l'agence au niveau service. Un utilisateur de l'agence
    # ouvre donc au niveau service — même s'il n'est pas gestionnaire de la caisse
    # (le gestionnaire/guichetier, lui, sert aux ventes : cf. test_only_a_manager_can_transact).
    from apps.treasury.services.services import open_session
    company, admin, mgr, other, reg = _setup()
    s = open_session(company=company, cash_register=reg, name="Matin", created_by=other)
    assert s.status == "open" and s.name == "Matin"


@pytest.mark.django_db
def test_admin_bypasses_manager_rule():
    from apps.treasury.services.services import open_session
    company, admin, mgr, other, reg = _setup()
    s = open_session(company=company, cash_register=reg, created_by=admin)
    assert s.status == "open"


@pytest.mark.django_db
def test_only_a_manager_can_transact():
    from apps.treasury.services.services import open_session, create_transaction
    from apps.treasury.models import Transaction
    company, admin, mgr, other, reg = _setup()
    session = open_session(company=company, cash_register=reg, created_by=mgr)
    # A non-manager cannot post on this session
    with pytest.raises(ApplicationError):
        create_transaction(
            company=company, transaction_type=Transaction.Type.INCOME,
            category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
            amount=Decimal("1000"), payment_mode=Transaction.PaymentMode.CASH,
            cash_session=session, created_by=other)
    # A manager can (even if not the opener)
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal("1000"), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=mgr)
    assert txn.amount == Decimal("1000")


@pytest.mark.django_db
def test_admin_can_transact_on_any_session():
    from apps.treasury.services.services import open_session, create_transaction
    from apps.treasury.models import Transaction
    company, admin, mgr, other, reg = _setup()
    session = open_session(company=company, cash_register=reg, created_by=mgr)
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal("500"), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=admin)
    assert txn.amount == Decimal("500")
