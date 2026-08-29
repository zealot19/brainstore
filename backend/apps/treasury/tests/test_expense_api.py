import pytest


def _client_company():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.voyages_config.models import ExpenseType
    company, _ = create_company(name="EAPI", admin_email="ea@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ea@x.com")
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    return c, company, admin, et


@pytest.mark.django_db
def test_general_expense_crud_and_list():
    c, company, admin, et = _client_company()
    r = c.post("/api/v1/treasury/expenses/general/",
               {"expense_type_id": str(et.id), "label": "Savon", "amount": "2500"}, format="json")
    assert r.status_code in (200, 201)
    pk = r.json()["data"]["id"]
    r = c.get("/api/v1/treasury/expenses/general/")
    assert r.status_code == 200
    r = c.patch(f"/api/v1/treasury/expenses/general/{pk}/", {"amount": "3000"}, format="json")
    assert r.status_code == 200 and str(r.json()["data"]["amount"]) in ("3000.00", "3000")
    r = c.delete(f"/api/v1/treasury/expenses/general/{pk}/")
    assert r.status_code in (200, 204)


@pytest.mark.django_db
def test_dashboard_and_voyage_list_ok():
    c, company, admin, et = _client_company()
    assert c.get("/api/v1/treasury/expenses/dashboard/").status_code == 200
    assert c.get("/api/v1/treasury/expenses/voyage/").status_code == 200
