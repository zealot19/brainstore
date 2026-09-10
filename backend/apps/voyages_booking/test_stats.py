import pytest
from datetime import timedelta
from django.utils import timezone


@pytest.mark.django_db
def test_booking_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.authentication.models import User
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    from apps.voyages_booking.models import Passenger, Booking
    company, _ = create_company(name="BkStats", admin_email="bk@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="bk@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2", is_station=True)
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    dep = timezone.now()
    trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                               created_by=admin)
    pax = Passenger.objects.create(company=company, name="J D", phone="690")
    Booking.objects.create(company=company, reference="B1", outbound_trip=trip, buyer=pax,
                           amount_paid=15000, created_by=admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/booking/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["bookings_today"] == 1
    assert float(data["revenue_today"]) == 15000.0

    # Série : 7 jours continus, la dernière entrée (aujourd'hui) porte la réservation.
    rs = c.get("/api/v1/voyages/booking/series/?days=7")
    assert rs.status_code == 200
    series = rs.json()["data"]
    assert len(series) == 7
    assert series[-1]["bookings"] == 1
    assert float(series[-1]["revenue"]) == 15000.0
    assert series[0]["bookings"] == 0
