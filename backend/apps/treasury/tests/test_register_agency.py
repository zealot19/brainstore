import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.system_config.models import Agency
from apps.treasury.views import CashRegisterListView


@pytest.mark.django_db
def test_create_register_with_agency():
    from apps.system_config.services import create_company
    company, setup = create_company(name="RegAg Co", admin_email="ra@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ra@x.com")
    agency = Agency.objects.filter(company=company).first()
    req = APIRequestFactory().post("/x", {"name": "Caisse 1", "agency_id": str(agency.id)}, format="json")
    force_authenticate(req, user=admin)
    r = CashRegisterListView.as_view()(req); r.render()
    assert r.status_code == 201
    data = json.loads(r.content)
    assert data["agency"] == str(agency.id)
    assert data["agency_name"] == agency.name
