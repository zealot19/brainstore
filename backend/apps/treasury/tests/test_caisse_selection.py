import pytest
from decimal import Decimal
from apps.authentication.models import User


def _setup():
    from apps.system_config.services import create_company
    from apps.treasury.services import create_cash_register
    company, setup = create_company(name="CZCo", admin_email="cz@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cz@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    reg2 = create_cash_register(company=company, name="C2", created_by=admin)
    return dict(company=company, admin=admin, reg=reg, reg2=reg2, hq=setup["hq_agency_id"])


@pytest.mark.django_db
def test_selectable_registers_admin_sees_all_and_can_select():
    from apps.treasury.selectors import selectable_cash_registers
    g = _setup()
    out = selectable_cash_registers(g["admin"], g["company"])
    assert out["can_select"] is True
    assert {str(g["reg"].id), str(g["reg2"].id)} <= {str(r["id"]) for r in out["registers"]}


@pytest.mark.django_db
def test_income_into_chosen_register_requires_open_session():
    # On teste la résolution de caisse (booking=None : pas besoin d'un voyage complet).
    from apps.treasury.services import open_session, record_booking_payment
    from apps.core.exceptions import ApplicationError
    g = _setup()
    # Caisse sans session ouverte -> erreur.
    with pytest.raises(ApplicationError):
        record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                               payment_method="cash", user=g["admin"], cash_register_id=str(g["reg"].id))
    # Session ouverte -> posté dans CETTE caisse.
    open_session(company=g["company"], cash_register=g["reg2"], created_by=g["admin"])
    txn = record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"], cash_register_id=str(g["reg2"].id))
    assert txn is not None and txn.cash_session.cash_register_id == g["reg2"].id


def _make_chef(email="chef@x.com"):
    """Chef d'agence : non-admin, borné à l'agence HQ, détenteur de treasury.session.manage."""
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    from apps.treasury.services import create_cash_register
    company, setup = create_company(name="ChefCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    hq = setup["hq_agency_id"]
    chef, _ = create_user(created_by=admin, company=company, email="thechef@x.com",
                          first_name="C", last_name="H", is_institution_admin=False,
                          default_agency_id=hq, agency_ids=[hq])
    pids = list(Permission.objects.filter(code__in=["treasury.session.manage"]).values_list("id", flat=True))
    role = create_role(name="Chef", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=chef, role=role, company=company)
    # Caisse de l'agence HQ, gérée par PERSONNE (chef non gestionnaire), ouverte par l'admin.
    reg = create_cash_register(company=company, name="HQ1", agency_id=hq, created_by=admin)
    return dict(company=company, admin=admin, chef=chef, hq=hq, reg=reg)


@pytest.mark.django_db
def test_chef_can_post_into_unmanaged_agency_caisse():
    from apps.treasury.services import open_session, record_booking_payment
    g = _make_chef()
    open_session(company=g["company"], cash_register=g["reg"], created_by=g["admin"])
    # Le chef n'est pas gestionnaire de la caisse mais la caisse est dans son agence -> autorisé.
    txn = record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                                 payment_method="cash", user=g["chef"], cash_register_id=str(g["reg"].id))
    assert txn is not None and txn.cash_session.cash_register_id == g["reg"].id


@pytest.mark.django_db
def test_chef_refused_other_agency_caisse():
    from apps.treasury.services import open_session, record_booking_payment, create_cash_register
    from apps.core.exceptions import ApplicationError
    from apps.system_config.models import Agency
    g = _make_chef("chef2@x.com")
    other_agency = Agency.objects.create(company=g["company"], name="Autre", code="AUT")
    reg_other = create_cash_register(company=g["company"], name="AUT1", agency_id=other_agency.id, created_by=g["admin"])
    open_session(company=g["company"], cash_register=reg_other, created_by=g["admin"])
    with pytest.raises(ApplicationError):
        record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                               payment_method="cash", user=g["chef"], cash_register_id=str(reg_other.id))


@pytest.mark.django_db
def test_guichetier_cannot_select():
    from apps.treasury.selectors import selectable_cash_registers
    from apps.users.services.user_services import create_user
    from apps.system_config.services import create_company
    company, setup = create_company(name="GuiCo", admin_email="gui@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="gui@x.com")
    guichetier, _ = create_user(created_by=admin, company=company, email="g@x.com",
                                first_name="G", last_name="U", is_institution_admin=False,
                                default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    out = selectable_cash_registers(guichetier, company)
    assert out["can_select"] is False


@pytest.mark.django_db
def test_no_register_id_keeps_auto_resolution():
    from apps.treasury.services import open_session, record_booking_payment
    g = _setup()
    open_session(company=g["company"], cash_register=g["reg"], created_by=g["admin"])
    txn = record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"])
    assert txn is not None  # auto-résolu sur la session ouverte de l'admin
