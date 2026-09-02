import pytest
from datetime import timedelta
from django.utils import timezone


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.authentication.models import User
    company, _ = create_company(name="RM Co", admin_email="rm@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rm@x.com")
    town = Town.objects.create(company=company, name="Douala")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest", is_station=True)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    return company, admin, trip


@pytest.mark.django_db
def test_roadmap_endpoint_returns_data():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    company, admin, trip = _setup()
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    resp = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/roadmap/")
    assert resp.status_code == 200
    data = resp.json()["data"]
    assert data["trip"]["number"] == trip.number
    assert data["passengers"] == [] and data["baggage"] == [] and data["parcels"] == []


@pytest.mark.django_db
def test_roadmap_with_crew_does_not_crash():
    """Régression : build_roadmap_data plantait quand le voyage avait un équipage
    (TripCrew a 'member', pas 'role'/'driver')."""
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.voyages_config.models import CrewMemberType
    from apps.voyages_trips.models import CrewMember, TripCrew
    company, admin, trip = _setup()
    mt = CrewMemberType.objects.create(company=company, code="DRV", name="Chauffeur", is_driver=True)
    member = CrewMember.objects.create(company=company, first_name="Jean", last_name="Bus",
                                       member_type=mt, is_active=True)
    TripCrew.objects.create(trip=trip, member=member, created_by=admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    resp = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/roadmap/")
    assert resp.status_code == 200, resp.content
    crew = resp.json()["data"]["trip"]["crew"]
    assert len(crew) == 1
    assert crew[0]["driver_name"] == "Jean Bus"
    assert crew[0]["role_display"] == "Chauffeur"
