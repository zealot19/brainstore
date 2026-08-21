import pytest


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Scope Co", admin_email="adm@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="adm@x.com")  # admin d'institution
    ag_a = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag_b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    reg_a = create_cash_register(company=company, name="Caisse A", agency_id=ag_a.id, created_by=admin)
    reg_b = create_cash_register(company=company, name="Caisse B", agency_id=ag_b.id, created_by=admin)
    guichet, _ = create_user(created_by=admin, company=company, email="g@x.com",
                             first_name="G", last_name="U", is_institution_admin=False,
                             default_agency_id=ag_a.id)
    return company, admin, guichet, ag_a, ag_b, reg_a, reg_b


@pytest.mark.django_db
def test_guichetier_sees_only_own_agency_registers():
    from apps.treasury.selectors import list_cash_registers
    from apps.treasury.scoping import register_agency_scope
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    ids = set(list_cash_registers(company.id, agency_scope=register_agency_scope(guichet))
              .values_list("id", flat=True))
    assert ids == {reg_a.id}


@pytest.mark.django_db
def test_admin_sees_all_registers():
    from apps.treasury.selectors import list_cash_registers
    from apps.treasury.scoping import register_agency_scope
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    ids = set(list_cash_registers(company.id, agency_scope=register_agency_scope(admin))
              .values_list("id", flat=True))
    assert {reg_a.id, reg_b.id} <= ids


@pytest.mark.django_db
def test_open_session_blocked_on_other_agency():
    from apps.treasury.services.services import open_session
    from apps.core.exceptions import ApplicationError
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    with pytest.raises(ApplicationError):
        open_session(company=company, cash_register=reg_b, created_by=guichet)


@pytest.mark.django_db
def test_open_session_allowed_on_own_agency():
    from apps.treasury.services.services import open_session
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    s = open_session(company=company, cash_register=reg_a, created_by=guichet)
    assert s.status == "open"


@pytest.mark.django_db
def test_open_session_blocked_when_user_has_no_agency():
    from apps.treasury.services.services import open_session
    from apps.core.exceptions import ApplicationError
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    orphan, _ = create_user(created_by=admin, company=company, email="o@x.com",
                            first_name="O", last_name="U", is_institution_admin=False)
    with pytest.raises(ApplicationError):
        open_session(company=company, cash_register=reg_a, created_by=orphan)


@pytest.mark.django_db
def test_sessions_list_scoped_to_agency():
    from apps.treasury.selectors import list_sessions
    from apps.treasury.services.services import open_session
    from apps.treasury.scoping import register_agency_scope
    company, admin, guichet, ag_a, ag_b, reg_a, reg_b = _setup()
    open_session(company=company, cash_register=reg_a, created_by=admin)  # agence A
    open_session(company=company, cash_register=reg_b, created_by=admin)  # agence B
    ids = set(list_sessions(company.id, agency_scope=register_agency_scope(guichet))
              .values_list("cash_register_id", flat=True))
    assert ids == {reg_a.id}
