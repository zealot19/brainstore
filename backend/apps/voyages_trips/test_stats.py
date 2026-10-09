import pytest
from datetime import timedelta
from django.utils import timezone


def _company_admin():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="TripStats", admin_email="tstat@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="tstat@x.com")


def _trip(company, admin, **kw):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    dep = kw.pop("dep", timezone.now())
    return Trip.objects.create(company=company, route=route, fare_class=fc, origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                               created_by=admin, **kw)


@pytest.mark.django_db
def test_trip_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    company, admin = _company_admin()
    _trip(company, admin, status="pending")                       # départ aujourd'hui + à venir
    _trip(company, admin, status="departed")                      # en cours
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/trips/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["today_departures"] == 2
    assert data["in_progress"] == 1
