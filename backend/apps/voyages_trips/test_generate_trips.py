import pytest
from datetime import date, timedelta, time


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="GenCo", admin_email="g@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="g@x.com")


def _pattern(company, *, all_days=True, mondays_only=False, valid_from=None, valid_to=None, with_plan=True, sfx=""):
    from apps.voyages_config.models import (Town, ServicePoint, Route, FareClass, TimeSlot,
                                            ServicePattern, SeatingPlan)
    town = Town.objects.create(company=company, name="D" + sfx)
    o = ServicePoint.objects.create(company=company, town=town, code="O" + sfx, name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D" + sfx, name="D2")
    route = Route.objects.create(company=company, code="R" + sfx, origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C" + sfx, name="C")
    ts = TimeSlot.objects.create(company=company, code="T" + (sfx or "1"), label="08h",
                                 start_time=time(8, 0), end_time=time(11, 0))
    flags = {w: all_days for w in ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]}
    if mondays_only:
        flags = {w: False for w in flags}; flags["monday"] = True
    plan = SeatingPlan.objects.create(company=company, code="P" + (sfx or "1"), name="P", total_seats=10) if with_plan else None
    return ServicePattern.objects.create(company=company, route=route, time_slot=ts, fare_class=fc,
                                         default_seating_plan=plan, valid_from=valid_from, valid_to=valid_to, **flags)


@pytest.mark.django_db
def test_generate_creates_one_per_circulating_date():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    start = date(2027, 1, 4); end = date(2027, 1, 8)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 5 and res["skipped_existing"] == 0 and res["skipped_offday"] == 0


@pytest.mark.django_db
def test_generate_skips_offpattern_days():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, mondays_only=True)
    start = date(2027, 1, 4); end = date(2027, 1, 17)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    expected = sum(1 for i in range((end - start).days + 1) if (start + timedelta(days=i)).weekday() == 0)
    assert res["created"] == expected == 2
    assert res["skipped_offday"] == (end - start).days + 1 - expected


@pytest.mark.django_db
def test_generate_idempotent_skips_existing():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    start = date(2027, 2, 1); end = date(2027, 2, 3)
    generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 0 and res["skipped_existing"] == 3


@pytest.mark.django_db
def test_generate_respects_validity():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True, valid_from=date(2027, 3, 3))
    start = date(2027, 3, 1); end = date(2027, 3, 4)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 2 and res["skipped_offday"] == 2


@pytest.mark.django_db
def test_generate_without_default_plan_ok():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True, with_plan=False)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 4, 1),
                                      end_date=date(2027, 4, 2), user=admin)
    assert res["created"] == 2


@pytest.mark.django_db
def test_generate_rejects_overlong_and_inverted_range():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    from apps.core.exceptions import ApplicationError
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    with pytest.raises(ApplicationError):
        generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 1, 1),
                                    end_date=date(2028, 6, 1), user=admin)
    with pytest.raises(ApplicationError):
        generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 1, 10),
                                    end_date=date(2027, 1, 1), user=admin)


@pytest.mark.django_db
def test_generate_endpoint_and_foreign_404():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {CustomRefreshToken.for_user(admin).access_token}")
    r = c.post("/api/v1/voyages/trips/generate/",
               {"service_pattern_id": str(p.id), "start_date": "2027-05-01", "end_date": "2027-05-03"}, format="json")
    assert r.status_code in (200, 201), r.content
    assert r.json()["data"]["created"] == 3
    other, _ = create_company(name="OtherGen", admin_email="og@x.com", admin_first_name="A", admin_last_name="B")
    fp = _pattern(other, all_days=True, sfx="X")
    r2 = c.post("/api/v1/voyages/trips/generate/",
                {"service_pattern_id": str(fp.id), "start_date": "2027-05-01", "end_date": "2027-05-02"}, format="json")
    assert r2.status_code == 404
