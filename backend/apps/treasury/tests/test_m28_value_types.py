import pytest
from apps.authentication.models import User


def _company(email="m28vt@x.com"):
    from apps.system_config.services import create_company
    c, _ = create_company(name="M28VT", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c, User.objects.get(email=email)


@pytest.mark.django_db
def test_value_type_seed_idempotent():
    # Société « nue » (sans admin) → pas de bootstrap : on teste le seeder seul.
    from apps.system_config.services import create_company
    from apps.treasury.models import CashValueType
    from apps.treasury.services.seed import seed_cash_value_types
    company, setup = create_company(name="M28VTbare")
    assert setup is None
    n1 = seed_cash_value_types(company)
    n2 = seed_cash_value_types(company)  # idempotent
    codes = set(CashValueType.objects.filter(company=company).values_list("code", flat=True))
    assert {"BON", "ELEC", "AUTRE"} <= codes
    assert n1 >= 3 and n2 == 0


@pytest.mark.django_db
def test_bootstrap_seeds_value_types():
    # create_company avec admin déclenche le bootstrap qui seede les types de valeur.
    from apps.treasury.models import CashValueType
    company, admin = _company("m28vt-boot@x.com")
    codes = set(CashValueType.objects.filter(company=company).values_list("code", flat=True))
    assert {"BON", "ELEC", "AUTRE"} <= codes


@pytest.mark.django_db
def test_value_type_crud_api():
    from rest_framework.test import APIClient
    company, admin = _company("m28vt2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    def _d(resp):
        b = resp.json()
        return b.get("data", b) if isinstance(b, dict) else b
    r = c.post("/api/v1/treasury/value-types/",
               {"code": "CHQ", "label": "Chèque", "display_order": 5}, format="json")
    assert r.status_code in (200, 201), r.content
    vid = _d(r)["id"]
    r = c.get("/api/v1/treasury/value-types/")
    assert any(v["code"] == "CHQ" for v in _d(r))
    r = c.patch(f"/api/v1/treasury/value-types/{vid}/", {"label": "Chèque bancaire"}, format="json")
    assert r.status_code == 200 and _d(r)["label"] == "Chèque bancaire"
    r = c.delete(f"/api/v1/treasury/value-types/{vid}/")
    assert r.status_code in (200, 204)
