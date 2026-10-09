import pytest
from datetime import timedelta
from django.utils import timezone

# WeasyPrint charge Pango/Cairo à l'import — OSError si absent (macOS local). CI/Docker couvrent.
try:
    import weasyprint  # noqa: F401
except (ImportError, OSError):
    pytest.skip("weasyprint indisponible (Pango/Cairo)", allow_module_level=True)


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.authentication.models import User
    company, _ = create_company(name="RM PDF Co", admin_email="rmpdf@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rmpdf@x.com")
    town = Town.objects.create(company=company, name="Douala")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    return company, admin, trip


@pytest.mark.django_db
def test_render_roadmap_pdf_both_docs():
    from apps.voyages_booking.roadmap_pdf import render_roadmap_pdf
    data = {
        "company": {"name": "RM", "slogan": "", "logo_url": None, "phone": "", "address": ""},
        "trip": {"number": "VOY/1", "route_code": "R1", "origin_name": "A", "destination_name": "B",
                 "scheduled_departure": timezone.now(), "status": "pending", "status_display": "En attente",
                 "vehicle_plate": "", "crew": [], "seats_total": 0, "seats_sold": 0, "boarded_count": 0},
        "passengers": [], "baggage": [], "parcels": [],
    }
    assert render_roadmap_pdf(data, "voyages")[:4] == b"%PDF"
    assert render_roadmap_pdf(data, "colis")[:4] == b"%PDF"


@pytest.mark.django_db
def test_roadmap_pdf_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    company, admin, trip = _setup()
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    resp = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/roadmap/pdf/?doc=voyages")
    assert resp.status_code == 200
    assert resp["Content-Type"] == "application/pdf"
    assert resp.content[:4] == b"%PDF"
