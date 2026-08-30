import pytest
from decimal import Decimal
from apps.authentication.models import User

try:
    import weasyprint  # noqa: F401
except (ImportError, OSError):
    pytest.skip("weasyprint indisponible (Pango/Cairo)", allow_module_level=True)


def _company(name="Rec Co", email="rec@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_render_income_receipt_returns_pdf_bytes():
    from apps.treasury.income_receipt import render_income_receipt
    company, _ = _company()
    pdf = render_income_receipt(
        company=company, ref="ABC123", date="2026-08-30",
        source_label="Colis REF-1", party="Jean", amount=Decimal("8000"),
        payment_label="Espèces", caisse_label="Caisse Centrale",
        agency_name="Douala", created_by="Admin", kind_label="Recette colis")
    assert isinstance(pdf, (bytes, bytearray)) and pdf[:4] == b"%PDF"
