import pytest


@pytest.mark.django_db
@pytest.mark.parametrize("doc", ["voyages", "comptabilisation", "colis", "bagages"])
def test_render_manifest_pdf_each_doc(doc):
    from django.test import RequestFactory
    from apps.voyages_booking.tests_integration_treasury import _setup
    from apps.voyages_booking.config_api.views import build_roadmap_data, resolve_manifest_template
    from apps.voyages_booking.manifest_render import render_manifest_pdf

    company, admin, trip = _setup()
    req = RequestFactory().get("/"); req.user = admin
    data = build_roadmap_data(trip, req)
    tpl = resolve_manifest_template(company, req)
    try:
        pdf = render_manifest_pdf(data, doc, tpl)
    except (ImportError, OSError):
        pytest.skip("WeasyPrint indisponible sur cet environnement.")
    assert isinstance(pdf, (bytes, bytearray)) and len(pdf) > 0


@pytest.mark.django_db
def test_pdf_endpoint_accepts_comptabilisation():
    from rest_framework.test import APIClient
    from apps.voyages_booking.tests_integration_treasury import _setup
    company, admin, trip = _setup()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/roadmap/pdf/?doc=comptabilisation")
    # 200 (WeasyPrint présent) ou 503 (absent) — jamais 400/404.
    assert r.status_code in (200, 503), r.content


@pytest.mark.django_db
def test_resolve_manifest_template_defaults():
    from django.test import RequestFactory
    from apps.voyages_booking.tests_integration_treasury import _setup
    from apps.voyages_booking.config_api.views import resolve_manifest_template
    company, admin, trip = _setup()
    req = RequestFactory().get("/"); req.user = admin
    tpl = resolve_manifest_template(company, req)
    assert tpl["brand_name"]  # repli sur le nom de la société
    assert tpl["sign_labels_voyage"] and tpl["sign_labels_colis"]
