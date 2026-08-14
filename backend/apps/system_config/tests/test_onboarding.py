import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.system_config.services import create_company
from apps.system_config.views import AgencyListView
from apps.authentication.models import User


@pytest.mark.django_db
def test_institution_admin_creates_agency_without_company_field():
    """Un admin d'institution cree une agence sans avoir a envoyer 'company'."""
    company, setup = create_company(
        name="Onboard Test SA", admin_email="ob.admin@example.com",
        admin_first_name="OB", admin_last_name="Admin")
    admin = User.objects.get(email="ob.admin@example.com")
    req = APIRequestFactory().post(
        "/agencies/", {"name": "Douala", "code": "DLA", "agency_type": "branch"}, format="json")
    force_authenticate(req, user=admin)
    resp = AgencyListView.as_view()(req)
    resp.render()
    assert resp.status_code == 201, resp.content


@pytest.mark.django_db
def test_institution_admin_role_is_scoped_to_company():
    """Un rôle créé par un admin d'institution appartient à SA société (pas global)."""
    from apps.admin_rbac.views import RoleListView
    company, _ = create_company(
        name="Scope Test SA", admin_email="sc.admin@example.com",
        admin_first_name="SC", admin_last_name="Admin")
    admin = User.objects.get(email="sc.admin@example.com")
    req = APIRequestFactory().post("/roles/", {"name": "Guichetier", "description": "x"}, format="json")
    force_authenticate(req, user=admin)
    resp = RoleListView.as_view()(req); resp.render()
    assert resp.status_code == 201, resp.content
    import json
    assert json.loads(resp.content)["data"]["company"] == str(company.id)
