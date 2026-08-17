import pytest
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult

pytest.importorskip("weasyprint")


@pytest.mark.django_db
def test_pdf_bytes():
    from apps.system_config.services import create_company
    from apps.reporting.render.pdf import render_pdf
    company, _ = create_company(name="PDF Co", admin_email="pdf@x.com",
                                admin_first_name="A", admin_last_name="B")
    r = ReportResult(code="t", title="TEST", columns=[ReportColumn("a", "A")],
                     groups=[ReportGroup(rows=[{"a": "x"}])], period_label="Période : test")
    out = render_pdf(r, company)
    assert out[:4] == b"%PDF"
