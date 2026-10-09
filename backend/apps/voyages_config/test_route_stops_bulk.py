import pytest
from rest_framework.test import APIClient
from apps.authentication.tokens import CustomRefreshToken


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import Town, ServicePoint, Route
    company, _ = create_company(name="StopsCo", admin_email="st@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="st@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origine")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Destination")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Arrêt A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Arrêt B")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    return company, admin, route, a, b


def _client(admin):
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {CustomRefreshToken.for_user(admin).access_token}")
    return c


def _put(c, route, items):
    return c.put(f"/api/v1/voyages/config/routes/{route.id}/stops/", {"stops": items}, format="json")


@pytest.mark.django_db
def test_bulk_replace_sets_order():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    r = _put(_client(admin), route, [{"service_point_id": str(a.id)}, {"service_point_id": str(b.id)}])
    assert r.status_code in (200, 201), r.content
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [a.id, b.id]
    assert [s.sequence for s in stops] == [1, 2]


@pytest.mark.django_db
def test_bulk_replace_twice():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}, {"service_point_id": str(b.id)}])
    r = _put(c, route, [{"service_point_id": str(b.id)}])
    assert r.status_code in (200, 201), r.content
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [b.id]


@pytest.mark.django_db
def test_bulk_allows_duplicate():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    r = _put(_client(admin), route, [{"service_point_id": str(a.id)}, {"service_point_id": str(a.id)}])
    assert r.status_code in (200, 201), r.content
    assert RouteStop.objects.filter(route=route, is_deleted=False, service_point=a).count() == 2


@pytest.mark.django_db
def test_bulk_empty_clears():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}])
    r = _put(c, route, [])
    assert r.status_code in (200, 201), r.content
    assert RouteStop.objects.filter(route=route, is_deleted=False).count() == 0


@pytest.mark.django_db
def test_bulk_foreign_sp_404_no_change():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}])
    other, _ = create_company(name="Other", admin_email="o3@x.com", admin_first_name="A", admin_last_name="B")
    ft = ServicePoint.objects.create(company=other, town=Town.objects.create(company=other, name="X"),
                                     code="F", name="Foreign")
    r = _put(c, route, [{"service_point_id": str(a.id)}, {"service_point_id": str(ft.id)}])
    assert r.status_code == 404
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [a.id]
