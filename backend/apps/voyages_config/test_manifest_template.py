import pytest


@pytest.mark.django_db
def test_manifest_template_get_defaults_and_set():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="MtCo", admin_email="mt@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="mt@x.com")
    c = APIClient(); c.force_authenticate(user=admin)

    r = c.get("/api/v1/voyages/config/manifest-template/")
    assert r.status_code == 200, r.content
    d = r.json().get("data", r.json())
    # Défauts de signatures présents
    assert d["sign_labels_voyage"] and d["sign_labels_colis"]

    r = c.put("/api/v1/voyages/config/manifest-template/",
              {"brand_name": "BLUE BIRD", "sign_labels_voyage": ["Chauffeur", "Chef"]},
              format="json")
    assert r.status_code == 200, r.content
    d = r.json().get("data", r.json())
    assert d["brand_name"] == "BLUE BIRD"
    assert d["sign_labels_voyage"] == ["Chauffeur", "Chef"]
