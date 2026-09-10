import pytest


@pytest.mark.django_db
def test_treasury_series_endpoint_shape():
    """La série renvoie `days` entrées continues avec les clés attendues (sans transaction)."""
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.authentication.models import User
    from apps.system_config.services import create_company

    company, _ = create_company(name="TrSeries", admin_email="trs@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="trs@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")

    r = c.get("/api/v1/treasury/series/?days=10")
    assert r.status_code == 200
    series = r.json()
    assert isinstance(series, list) and len(series) == 10
    for row in series:
        assert set(row.keys()) == {"date", "income", "expense"}
        assert row["income"] == 0 and row["expense"] == 0
