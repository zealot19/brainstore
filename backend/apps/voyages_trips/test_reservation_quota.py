import pytest
from datetime import timedelta
from django.utils import timezone
from apps.core.exceptions import ApplicationError


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="QuotaCo", admin_email="q@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="q@x.com")


def _refs(company):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10, blocked_seats=0)
    return route, fc, plan


def _mk(company, admin, **kw):
    from apps.voyages_trips.services.trip_services import create_trip
    route, fc, p = _refs(company)
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=p, user=admin, **kw)


@pytest.mark.django_db
def test_quota_defaults_to_sellable():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2)   # plan 10 - 2 = 8 vendables
    assert trip.max_reservations == 8


@pytest.mark.django_db
def test_quota_equals_sellable_ok():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2, max_reservations=8)
    assert trip.max_reservations == 8


@pytest.mark.django_db
def test_quota_honored_within_sellable():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2, max_reservations=5)
    assert trip.max_reservations == 5


@pytest.mark.django_db
def test_quota_rejected_above_sellable():
    company, admin = _ctx()
    with pytest.raises(ApplicationError):
        _mk(company, admin, blocked_seats_count=2, max_reservations=9)   # > 8


@pytest.mark.django_db
def test_quota_no_plan_kept_as_is():
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    company, admin = _ctx()
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=None, max_reservations=3, user=admin)
    assert trip.max_reservations == 3


def test_settings_has_no_archive_delay():
    from apps.voyages_config.models import VoyagesSettings
    assert "archive_delay_days" not in {f.name for f in VoyagesSettings._meta.get_fields()}
