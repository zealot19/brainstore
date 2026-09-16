import pytest


def _setup():
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    from apps.authentication.models import User
    company, setup = create_company(name="Guichet Co", admin_email="gadm@x.com",
                                    admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="gadm@x.com")
    agency_id = setup["hq_agency_id"]

    def staff(email, codes):
        u, _ = create_user(created_by=admin, company=company, email=email, first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=agency_id, agency_ids=[agency_id])
        pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
        role = create_role(name="R-" + email, company_id=company.id, permission_ids=pids, created_by=admin)
        UserRole.objects.create(user=u, role=role, company=company)
        return u
    return company, admin, agency_id, staff


@pytest.mark.django_db
def test_pool_includes_guichetier_excludes_manager_and_busy():
    """Le pool assignable = guichetiers (operate) de l'agence, sans session
    ouverte, qui ne gèrent pas les sessions."""
    from apps.treasury.selectors import list_guichetiers
    from apps.treasury.services import create_cash_register, schedule_session, open_scheduled_session
    company, admin, agency_id, staff = _setup()
    gui = staff("gui@x.com",  ["treasury.session.operate"])
    mgr = staff("mgr@x.com",  ["treasury.session.operate", "treasury.session.manage"])
    busy = staff("busy@x.com", ["treasury.session.operate"])

    reg = create_cash_register(company=company, name="C1", agency_id=agency_id, created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=busy, created_by=admin)
    open_scheduled_session(s, updated_by=admin)  # busy a désormais une session ouverte

    ids = {u.id for u in list_guichetiers(company.id, agency_id=agency_id)}
    assert gui.id in ids
    assert mgr.id not in ids    # gère les sessions → exclu
    assert busy.id not in ids   # session déjà ouverte → exclu


@pytest.mark.django_db
def test_counter_role_gets_operate_permission():
    """Un rôle possédant une permission de guichet reçoit session.operate
    (migration de seed), donc un tel utilisateur est assignable."""
    from apps.treasury.selectors import list_guichetiers
    from apps.treasury.services import create_cash_register
    company, admin, agency_id, staff = _setup()
    seller = staff("seller@x.com", ["ticketing.booking.create"])  # pas de operate explicite
    create_cash_register(company=company, name="C1", agency_id=agency_id, created_by=admin)
    ids = {u.id for u in list_guichetiers(company.id, agency_id=agency_id)}
    assert seller.id in ids


@pytest.mark.django_db
def test_guichetier_reads_and_closes_own_session_via_api():
    from decimal import Decimal
    from rest_framework.test import APIClient
    from apps.treasury.services import create_cash_register, schedule_session, open_scheduled_session
    company, admin, agency_id, staff = _setup()
    gui = staff("gui@x.com", ["treasury.session.operate"])
    reg = create_cash_register(company=company, name="C1", agency_id=agency_id, created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=gui, created_by=admin)
    open_scheduled_session(s, updated_by=admin)

    c = APIClient(); c.force_authenticate(user=gui)
    r = c.get("/api/v1/treasury/sessions/my-active/")
    assert r.status_code == 200, r.content
    assert r.json()["data"]["id"] == str(s.id)

    r = c.post(f"/api/v1/treasury/sessions/{s.id}/close/",
               {"closing_balance": "0", "justification_reason": "comptage"}, format="json")
    assert r.status_code in (200, 201), r.content


@pytest.mark.django_db
def test_guichetier_cannot_close_others_session_via_api():
    from rest_framework.test import APIClient
    from apps.treasury.services import create_cash_register, open_session
    company, admin, agency_id, staff = _setup()
    gui = staff("gui@x.com", ["treasury.session.operate"])
    reg = create_cash_register(company=company, name="C2", agency_id=agency_id, created_by=admin)
    s = open_session(company=company, cash_register=reg, created_by=admin)  # ouverte par admin

    c = APIClient(); c.force_authenticate(user=gui)
    r = c.post(f"/api/v1/treasury/sessions/{s.id}/close/", {"closing_balance": "0"}, format="json")
    assert r.status_code == 400, r.content  # ni gestionnaire ni assigné
