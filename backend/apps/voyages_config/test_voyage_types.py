import pytest
from datetime import timedelta
from django.utils import timezone
from apps.voyages_config.models import VoyageType


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="VtCo", admin_email="vt@x.com",
                                    admin_first_name="A", admin_last_name="B")
    return company, setup, User.objects.get(email="vt@x.com")


def _default_type(company):
    return VoyageType.objects.filter(company=company, is_default=True, is_deleted=False).first()


def _trip(company, admin, **kw):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       user=admin, **kw)


def test_model_has_voyage_type_fields():
    names = {f.name for f in VoyageType._meta.get_fields()}
    assert {"code", "name", "is_default"} <= names


@pytest.mark.django_db
def test_single_default_per_company(ctx):
    company, setup, user = ctx
    a = VoyageType.objects.create(company=company, code="DEP2", name="Départ 2", is_default=True)
    b = VoyageType.objects.create(company=company, code="COMP2", name="Complément 2", is_default=True)
    a.refresh_from_db()
    assert b.is_default and not a.is_default


@pytest.mark.django_db
def test_seed_creates_default_depart(ctx):
    company, setup, user = ctx
    assert VoyageType.objects.filter(company=company).count() >= 3
    d = _default_type(company)
    assert d is not None and d.code == "DEPART"


@pytest.mark.django_db
def test_create_trip_defaults_to_company_default_type(ctx):
    company, setup, user = ctx
    trip = _trip(company, user)
    assert trip.voyage_type_id == _default_type(company).id


@pytest.mark.django_db
def test_create_trip_explicit_type(ctx):
    company, setup, user = ctx
    comp = VoyageType.objects.get(company=company, code="COMPLEMENT")
    trip = _trip(company, user, voyage_type=comp)
    assert trip.voyage_type_id == comp.id


@pytest.mark.django_db
def test_create_trip_no_default_leaves_null(ctx):
    company, setup, user = ctx
    VoyageType.objects.filter(company=company).update(is_default=False)
    trip = _trip(company, user)
    assert trip.voyage_type_id is None


@pytest.mark.django_db
def test_trip_create_rejects_foreign_voyage_type(ctx):
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    company, setup, user = ctx
    other, _ = create_company(name="OtherCo", admin_email="o2@x.com", admin_first_name="A", admin_last_name="B")
    foreign = VoyageType.objects.filter(company=other, code="DEPART").first()
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    tok = str(CustomRefreshToken.for_user(user).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.post("/api/v1/voyages/trips/", {
        "route_id": str(route.id), "fare_class_id": str(fc.id),
        "scheduled_departure": now.isoformat(), "scheduled_arrival": (now + timedelta(hours=3)).isoformat(),
        "voyage_type_id": str(foreign.id),
    }, format="json")
    assert r.status_code == 404
