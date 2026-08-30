import pytest
from decimal import Decimal

try:
    import weasyprint  # noqa: F401
except (ImportError, OSError):
    pytest.skip("weasyprint indisponible (Pango/Cairo)", allow_module_level=True)


@pytest.mark.django_db
def test_general_expense_voucher_pdf():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.voyages_config.models import ExpenseType
    from apps.treasury.services.general_expense_services import create_general_expense
    company, _ = create_company(name="VCo", admin_email="v@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="v@x.com")
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    e = create_general_expense(company=company, expense_type=et, label="Savon", amount=Decimal("2500"), created_by=admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get(f"/api/v1/treasury/expenses/general/{e.id}/voucher/")
    assert r.status_code == 200
    assert r["Content-Type"] == "application/pdf"
    assert r.content[:4] == b"%PDF"
