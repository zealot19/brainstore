import pytest
from datetime import date, time, timedelta
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.tests_integration_treasury import _setup


def _pattern(company, route, fare_class, plan, *, start=time(8, 0), end=time(12, 0),
             days=None, valid_from=None, valid_to=None):
    from apps.voyages_config.models import TimeSlot, ServicePattern
    ts = TimeSlot.objects.create(company=company, code="M", label="Matin",
                                 start_time=start, end_time=end)
    kwargs = dict(company=company, route=route, time_slot=ts, fare_class=fare_class,
                  default_seating_plan=plan, valid_from=valid_from, valid_to=valid_to)
    for d in (days or ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]):
        kwargs[d] = True
    return ServicePattern.objects.create(**kwargs)


def _next_weekday(weekday):
    d = date.today() + timedelta(days=1)
    while d.weekday() != weekday:
        d += timedelta(days=1)
    return d


@pytest.mark.django_db
def test_create_trip_from_pattern_derives_route_fare_times():
    from apps.voyages_trips.services.trip_services import create_trip_from_pattern
    company, admin, base = _setup()
    pat = _pattern(company, base.route, base.fare_class, base.seating_plan)
    d = _next_weekday(2)  # a Wednesday (enabled)
    trip = create_trip_from_pattern(company=company, pattern=pat, service_date=d, user=admin)
    assert trip.route_id == base.route_id
    assert trip.fare_class_id == base.fare_class_id
    assert trip.service_pattern_id == pat.id
    assert trip.seating_plan_id == base.seating_plan_id
    assert trip.scheduled_departure.hour == 8 and trip.scheduled_departure.minute == 0
    assert trip.scheduled_arrival.hour == 12
    assert trip.scheduled_departure.date() == d and trip.scheduled_arrival.date() == d


@pytest.mark.django_db
def test_overnight_pattern_rolls_arrival_to_next_day():
    from apps.voyages_trips.services.trip_services import create_trip_from_pattern
    company, admin, base = _setup()
    pat = _pattern(company, base.route, base.fare_class, base.seating_plan,
                   start=time(22, 0), end=time(4, 0))
    d = _next_weekday(0)
    trip = create_trip_from_pattern(company=company, pattern=pat, service_date=d, user=admin)
    assert trip.scheduled_departure.date() == d
    assert trip.scheduled_arrival.date() == d + timedelta(days=1)


@pytest.mark.django_db
def test_pattern_rejects_disabled_weekday():
    from apps.voyages_trips.services.trip_services import create_trip_from_pattern
    company, admin, base = _setup()
    wed = _next_weekday(2)
    pat = _pattern(company, base.route, base.fare_class, base.seating_plan,
                   days=["monday"])  # only Monday
    with pytest.raises(ApplicationError):
        create_trip_from_pattern(company=company, pattern=pat, service_date=wed, user=admin)


@pytest.mark.django_db
def test_pattern_rejects_date_outside_validity():
    from apps.voyages_trips.services.trip_services import create_trip_from_pattern
    company, admin, base = _setup()
    d = _next_weekday(2)
    pat = _pattern(company, base.route, base.fare_class, base.seating_plan,
                   valid_from=d + timedelta(days=30))  # future validity
    with pytest.raises(ApplicationError):
        create_trip_from_pattern(company=company, pattern=pat, service_date=d, user=admin)


@pytest.mark.django_db
def test_create_trip_endpoint_pattern_mode():
    from rest_framework.test import APIClient
    company, admin, base = _setup()
    pat = _pattern(company, base.route, base.fare_class, base.seating_plan)
    d = _next_weekday(2)
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/voyages/trips/",
               {"service_pattern_id": str(pat.id), "service_date": d.isoformat()}, format="json")
    assert r.status_code in (200, 201), r.content
    body = r.json()
    data = body.get("data", body)
    assert data["route"] == str(base.route_id)


@pytest.mark.django_db
def test_create_trip_endpoint_manual_still_requires_fields():
    from rest_framework.test import APIClient
    company, admin, base = _setup()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/voyages/trips/", {"code": "X"}, format="json")
    assert r.status_code == 400, r.content
