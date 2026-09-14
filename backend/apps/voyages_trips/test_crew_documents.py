import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.voyages_config.models import CrewMemberType


def _ctx():
    from apps.system_config.services import create_company
    company, _ = create_company(name="CrewDoc Co", admin_email="cd@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="cd@x.com")


@pytest.mark.django_db
def test_create_crew_member_with_agency():
    from apps.system_config.models import Agency
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    agency = Agency.objects.filter(company=company).first()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/voyages/trips/crew-members/",
               {"name": "Awa Diop", "member_type_id": str(mt.id), "agency_id": str(agency.id), "phone": "690"},
               format="json")
    assert r.status_code in (200, 201), r.content
    d = r.json()["data"]
    assert d["name"] == "Awa Diop"
    assert d["agency"] == str(agency.id)
    assert d["agency_name"] == agency.name


@pytest.mark.django_db
def test_crew_document_upload_and_delete():
    from django.core.files.uploadedfile import SimpleUploadedFile
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    c = APIClient(); c.force_authenticate(user=admin)
    m = c.post("/api/v1/voyages/trips/crew-members/",
               {"name": "Kofi", "member_type_id": str(mt.id)}, format="json").json()["data"]

    f = SimpleUploadedFile("permis.pdf", b"%PDF-1.4 fake", content_type="application/pdf")
    r = c.post(f"/api/v1/voyages/trips/crew-members/{m['id']}/documents/", {"file": f, "name": "Permis"}, format="multipart")
    assert r.status_code in (200, 201), r.content
    att = r.json()["data"]
    assert att["name"] == "Permis"

    r = c.get(f"/api/v1/voyages/trips/crew-members/{m['id']}/documents/")
    assert r.status_code == 200
    assert len(r.json()["data"]) == 1

    r = c.delete(f"/api/v1/voyages/trips/crew-members/{m['id']}/documents/{att['id']}/")
    assert r.status_code in (200, 204)
    r = c.get(f"/api/v1/voyages/trips/crew-members/{m['id']}/documents/")
    assert len(r.json()["data"]) == 0
