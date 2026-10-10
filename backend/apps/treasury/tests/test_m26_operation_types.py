import pytest
from apps.authentication.models import User


@pytest.mark.django_db
def test_operation_type_seed_idempotent():
    from apps.system_config.services import create_company
    from apps.treasury.models import OperationType
    from apps.treasury.services.seed import seed_operation_types
    company, setup = create_company(name="M26OTbare")
    assert setup is None
    n1 = seed_operation_types(company)
    n2 = seed_operation_types(company)
    rows = OperationType.objects.filter(company=company)
    assert n1 >= 2 and n2 == 0
    assert {"depense", "recette"} <= set(rows.values_list("sens", flat=True))


@pytest.mark.django_db
def test_operation_type_crud_api():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    company, _ = create_company(name="M26OT", admin_email="ot@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ot@x.com")
    c = APIClient(); c.force_authenticate(user=admin)

    def _d(resp):
        b = resp.json()
        return b.get("data", b) if isinstance(b, dict) else b

    r = c.post("/api/v1/treasury/operation-types/",
               {"code": "COMM", "label": "Commission", "sens": "recette"}, format="json")
    assert r.status_code in (200, 201), r.content
    oid = _d(r)["id"]
    r = c.get("/api/v1/treasury/operation-types/")
    assert any(o["code"] == "COMM" for o in _d(r))
    r = c.patch(f"/api/v1/treasury/operation-types/{oid}/", {"label": "Commission agence"}, format="json")
    assert r.status_code == 200 and _d(r)["label"] == "Commission agence"
    r = c.delete(f"/api/v1/treasury/operation-types/{oid}/")
    assert r.status_code in (200, 204)
