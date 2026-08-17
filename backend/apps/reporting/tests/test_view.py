import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User


@pytest.mark.django_db
def test_generate_endpoint_csv_uses_fmt_param():
    """Régression : 'format' est réservé par DRF → on doit utiliser 'fmt'."""
    from apps.system_config.services import create_company
    from apps.reporting.views import ReportGenerateView
    company, _ = create_company(name="V Co", admin_email="v@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="v@x.com")  # admin institution → bypasse HasModulePermission
    req = APIRequestFactory().get("/x", {"fmt": "csv"})
    force_authenticate(req, user=admin)
    resp = ReportGenerateView.as_view()(req, code="journaux-vente")
    assert resp.status_code == 200
    assert "text/csv" in resp["Content-Type"]
    assert resp["Content-Disposition"].endswith('.csv"')
