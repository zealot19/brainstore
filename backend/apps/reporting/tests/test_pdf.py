import pytest
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult

# WeasyPrint loads system libs (Pango/Cairo) at import — raises OSError when absent
# (e.g. local macOS without brew libs). Skip the whole module in that case; CI/Docker cover it.
try:
    import weasyprint  # noqa: F401
except (ImportError, OSError):
    pytest.skip("weasyprint unavailable (système Pango/Cairo)", allow_module_level=True)


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
