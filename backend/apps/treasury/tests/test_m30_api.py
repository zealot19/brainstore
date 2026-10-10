import pytest
from decimal import Decimal
from rest_framework.test import APIClient
from apps.authentication.models import User


def _d(resp):
    b = resp.json()
    return b.get("data", b) if isinstance(b, dict) else b


def _ctx(email, diff="500"):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    from apps.treasury.models import CashRegister, CashSession
    from apps.treasury.services.services import create_cash_register
    company, setup = create_company(name="M30API", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    agency_id = setup["hq_agency_id"]
    caissier, _ = create_user(created_by=admin, company=company, email="c-" + email, first_name="C", last_name="A",
                              is_institution_admin=False, default_agency_id=agency_id, agency_ids=[agency_id])
    pids = list(Permission.objects.filter(code__in=["treasury.session.operate"]).values_list("id", flat=True))
    role = create_role(name="Caissier-" + email, company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=caissier, role=role, company=company)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    session = CashSession.objects.create(company=company, cash_register=reg, assigned_to=caissier,
                                         status=CashSession.Status.CLOSED, difference=Decimal(diff),
                                         opened_by=admin, closed_by=admin, created_by=admin)
    return company, admin, caissier, session


@pytest.mark.django_db
def test_explanation_full_flow_api():
    company, admin, caissier, session = _ctx("m30api1@x.com")
    chef = APIClient(); chef.force_authenticate(user=admin)
    cais = APIClient(); cais.force_authenticate(user=caissier)

    r = chef.post(f"/api/v1/treasury/sessions/{session.id}/explanations/",
                  {"request_note": "Expliquez l'écart"}, format="json")
    assert r.status_code in (200, 201), r.content
    eid = _d(r)["id"]

    r = cais.post(f"/api/v1/treasury/explanations/{eid}/respond/",
                  {"response_note": "Monnaie rendue en trop"}, format="json")
    assert r.status_code == 200, r.content
    assert _d(r)["status"] == "responded"

    r = chef.post(f"/api/v1/treasury/explanations/{eid}/decide/",
                  {"decision": "justified", "decision_note": "Accepté"}, format="json")
    assert r.status_code == 200, r.content
    assert _d(r)["status"] == "decided" and _d(r)["decision"] == "justified"

    r = chef.get(f"/api/v1/treasury/sessions/{session.id}/explanations/")
    assert r.status_code == 200
    assert len(_d(r)) == 1


@pytest.mark.django_db
def test_explanation_cross_company_404():
    company, admin, caissier, session = _ctx("m30api2@x.com")
    _c2, admin2, _ca2, _s2 = _ctx("m30api3@x.com")
    other = APIClient(); other.force_authenticate(user=admin2)
    r = other.post(f"/api/v1/treasury/sessions/{session.id}/explanations/",
                   {"request_note": "x"}, format="json")
    assert r.status_code == 404
