import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.system_config.views import AgencyListView


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="AG Co", admin_email="ag@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ag@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="ags@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, data=None):
    req = getattr(APIRequestFactory(), method)("/x", data or {}, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req).status_code


@pytest.mark.django_db
def test_agency_gating():
    company, admin, staff = _staff(["system.agency.view"])
    assert _status(AgencyListView, "get", staff) != 403
    assert _status(AgencyListView, "post", staff, {"name": "Ag 1", "code": "A1", "agency_type": "branch"}) == 403
    assert _status(AgencyListView, "get", admin) != 403
    assert _status(AgencyListView, "post", admin, {"name": "Ag 2", "code": "A2", "agency_type": "branch"}) in (200, 201)


@pytest.mark.django_db
def test_institution_admin_lists_own_agencies_without_company_param():
    """Un admin d'institution qui crée une agence doit la retrouver dans la liste
    sans passer ?company= (le tenant middleware est un stub → fallback user.company)."""
    company, admin, staff = _staff(["system.agency.view"])

    # POST : création (résout la société via request.user.company)
    req = APIRequestFactory().post("/x", {"name": "Ag X", "code": "AGX", "agency_type": "branch"}, format="json")
    force_authenticate(req, user=admin)
    resp = AgencyListView.as_view()(req)
    assert resp.status_code in (200, 201)

    # GET : liste SANS ?company= et SANS middleware tenant
    reqg = APIRequestFactory().get("/x")
    force_authenticate(reqg, user=admin)
    respg = AgencyListView.as_view()(reqg)
    assert respg.status_code == 200
    codes = [a["code"] for a in respg.data["data"]]
    assert "AGX" in codes
