import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User


def _company(name="PartCo", email="part@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.fixture
def client_admin(db):
    company, admin = _company()
    c = APIClient()
    c.force_authenticate(user=admin)
    return c, company, admin


@pytest.mark.django_db
def test_create_and_list_partner(client_admin):
    c, company, admin = client_admin
    r = c.post("/api/v1/partners/", {"code": "P001", "name": "Groupe X",
                                     "phone": "699000000", "tax_number": "M01"}, format="json")
    assert r.status_code in (200, 201), r.content
    assert r.json()["data"]["code"] == "P001"
    assert r.json()["data"]["tax_number"] == "M01"

    r2 = c.get("/api/v1/partners/")
    assert r2.status_code == 200
    assert len(r2.json()["data"]) == 1


@pytest.mark.django_db
def test_duplicate_code_rejected(client_admin):
    c, company, admin = client_admin
    c.post("/api/v1/partners/", {"code": "P001", "name": "A"}, format="json")
    r = c.post("/api/v1/partners/", {"code": "P001", "name": "B"}, format="json")
    assert r.status_code == 400


@pytest.mark.django_db
def test_same_code_across_companies_allowed():
    from apps.partners.models import Partner
    c1, a1 = _company()
    c2, a2 = _company(name="PartCo2", email="part2@x.com")
    Partner.objects.create(company=c1, code="P001", name="X", created_by=a1)
    Partner.objects.create(company=c2, code="P001", name="Y", created_by=a2)
    assert Partner.objects.filter(code="P001", is_deleted=False).count() == 2


@pytest.mark.django_db
def test_update_and_soft_delete(client_admin):
    c, company, admin = client_admin
    pid = c.post("/api/v1/partners/", {"code": "P001", "name": "A"}, format="json").json()["data"]["id"]
    r = c.patch(f"/api/v1/partners/{pid}/", {"name": "A renamed", "address": "Douala"}, format="json")
    assert r.status_code == 200 and r.json()["data"]["name"] == "A renamed"
    assert c.delete(f"/api/v1/partners/{pid}/").status_code == 204
    assert c.get("/api/v1/partners/").json()["data"] == []
