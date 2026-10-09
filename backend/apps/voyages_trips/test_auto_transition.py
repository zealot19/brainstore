import datetime as dt
import pytest
from django.utils import timezone
from apps.voyages_trips.models import Trip
from apps.voyages_trips.services.auto_transition import run_auto_transitions

pytestmark = pytest.mark.django_db


def _setup(email, *, auto=True, lead=24, grace=48):
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, VoyagesSettings
    company, _ = create_company(name="AT", admin_email=email, admin_first_name="A", admin_last_name="B")
    ag = Agency.objects.create(company=company, name="D", code="DLA")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="STD", name="Standard")
    VoyagesSettings.objects.create(company=company, auto_manage_trips=auto,
                                   departure_lead_hours=lead, arrival_grace_hours=grace)
    return company, route, fc, o, d


def _trip(company, route, fc, o, d, *, status, departure, arrival):
    return Trip.objects.create(company=company, code="TR", route=route, fare_class=fc,
                               origin=o, destination=d, status=status,
                               scheduled_departure=departure, scheduled_arrival=arrival)


def test_pending_within_lead_departs():
    company, route, fc, o, d = _setup("at1@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=2), arrival=now + dt.timedelta(hours=6))
    res = run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED
    assert res["departed"] == 1


def test_pending_beyond_lead_stays():
    company, route, fc, o, d = _setup("at2@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=48), arrival=now + dt.timedelta(hours=52))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.PENDING


def test_lead_boundary_inclusive():
    company, route, fc, o, d = _setup("at3@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=24), arrival=now + dt.timedelta(hours=28))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED


def test_departed_past_grace_completes():
    company, route, fc, o, d = _setup("at4@x.com", grace=48)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DEPARTED,
              departure=now - dt.timedelta(hours=60), arrival=now - dt.timedelta(hours=50))
    res = run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.COMPLETED
    assert res["completed"] == 1


def test_departed_within_grace_stays():
    company, route, fc, o, d = _setup("at5@x.com", grace=48)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DEPARTED,
              departure=now - dt.timedelta(hours=10), arrival=now - dt.timedelta(hours=2))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED


def test_disabled_company_no_transition():
    company, route, fc, o, d = _setup("at6@x.com", auto=False)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.PENDING


def test_draft_not_started():
    company, route, fc, o, d = _setup("at7@x.com")
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DRAFT,
              departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DRAFT


def test_idempotent_second_run_noop():
    company, route, fc, o, d = _setup("at8@x.com")
    now = timezone.now()
    _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
          departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    res2 = run_auto_transitions(now=now)
    assert res2["departed"] == 0


def test_one_failing_trip_does_not_abort_batch(monkeypatch):
    """Si depart_trip lève pour un voyage, les autres sont quand même traités."""
    import apps.voyages_trips.services.auto_transition as mod
    company, route, fc, o, d = _setup("at9@x.com")
    now = timezone.now()
    bad = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
                departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    good = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
                 departure=now + dt.timedelta(hours=2), arrival=now + dt.timedelta(hours=6))
    real_depart = mod.depart_trip
    def flaky(trip, **kw):
        if trip.id == bad.id:
            raise RuntimeError("boom")
        return real_depart(trip, **kw)
    monkeypatch.setattr(mod, "depart_trip", flaky)
    res = run_auto_transitions(now=now)
    good.refresh_from_db(); bad.refresh_from_db()
    assert good.status == Trip.Status.DEPARTED
    assert bad.status == Trip.Status.PENDING
    assert res["departed"] == 1 and res["skipped"] == 1
