import pytest
from django.core.exceptions import ValidationError as DjangoValidationError
from apps.core.exceptions import ApplicationError
from apps.voyages_config.models import ServicePoint, Route, Town


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="Lieux Co", admin_email="lx@x.com",
                                    admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="lx@x.com")
    town = Town.objects.create(company=company, name="Douala")
    return company, setup, user, town


def test_servicepoint_has_no_station_fields():
    names = {f.name for f in ServicePoint._meta.get_fields()}
    assert "is_station" not in names and "station_kind" not in names


@pytest.mark.django_db
def test_route_accepts_plain_lieux(ctx):
    company, setup, user, town = ctx
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    r = Route(company=company, code="R1", origin=o, destination=d)
    r.full_clean(exclude=["created_by", "updated_by", "company"])  # ne lève plus "doit être une gare"
    r.save()
    assert r.id


@pytest.mark.django_db
def test_route_rejects_same_origin_destination(ctx):
    company, setup, user, town = ctx
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    r = Route(company=company, code="R2", origin=o, destination=o)
    with pytest.raises(DjangoValidationError):
        r.full_clean(exclude=["created_by", "updated_by", "company"])


def _parcel_ctx(company, user, town, *, dest_has_agency):
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    agency_id = None
    if dest_has_agency:
        from apps.system_config.models import Agency
        agency_id = Agency.objects.filter(company=company).first().id
    origin = ServicePoint.objects.create(company=company, town=town, code="O", name="Ag O")
    dest = ServicePoint.objects.create(company=company, town=town, code="D", name="Lieu D",
                                       agency_id=agency_id)
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    typ = ConsignmentType.objects.create(company=company, code="CT", label="Carton", nature=nat)
    return origin, dest, nat, typ


@pytest.mark.django_db
def test_parcel_requires_destination_agency(ctx):
    from apps.voyages_consignment.services import parcel_services as P
    company, setup, user, town = ctx
    origin, dest, nat, typ = _parcel_ctx(company, user, town, dest_has_agency=False)
    with pytest.raises(ApplicationError):
        P.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="x",
                          sender_name="E", sender_phone="6", recipient_name="R",
                          recipient_phone="7", description="d", amount_due=0, user=user)


@pytest.mark.django_db
def test_parcel_accepts_destination_with_agency(ctx):
    from apps.voyages_consignment.services import parcel_services as P
    company, setup, user, town = ctx
    origin, dest, nat, typ = _parcel_ctx(company, user, town, dest_has_agency=True)
    p = P.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="x",
                          sender_name="E", sender_phone="6", recipient_name="R",
                          recipient_phone="7", description="d", amount_due=0, user=user)
    assert p.id


def _make_route_api(company, user, town):
    """Crée un trajet via l'API avec deux Lieux quelconques (sans agence)."""
    import json
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.voyages_config.config_api.views import RouteListView
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    req = APIRequestFactory().post("/x", {"code": "R1", "origin_id": str(o.id),
                                          "destination_id": str(d.id)}, format="json")
    force_authenticate(req, user=user)
    r = RouteListView.as_view()(req)
    r.render()
    return o, d, r


@pytest.mark.django_db
def test_route_read_ok_without_station_fields(ctx):
    """M09 : création d'un trajet entre Lieux quelconques, puis lecture sans is_station."""
    import json
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.voyages_config.config_api.views import RouteDetailView
    company, setup, user, town = ctx
    o, d, r = _make_route_api(company, user, town)
    assert r.status_code in (200, 201), r.content
    route_id = json.loads(r.content)["data"]["id"]
    req = APIRequestFactory().get("/x")
    force_authenticate(req, user=user)
    gr = RouteDetailView.as_view()(req, pk=route_id)
    gr.render()
    assert gr.status_code == 200
    body = json.dumps(json.loads(gr.content))
    assert "is_station" not in body and "station_kind" not in body


@pytest.mark.django_db
def test_route_patch_accepts_plain_lieu(ctx):
    """M09 : PATCH de l'origine vers un Lieu sans agence = accepté."""
    import json
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.voyages_config.config_api.views import RouteDetailView
    company, setup, user, town = ctx
    o, d, r = _make_route_api(company, user, town)
    route_id = json.loads(r.content)["data"]["id"]
    new_origin = ServicePoint.objects.create(company=company, town=town, code="N", name="Nouveau")
    req = APIRequestFactory().patch("/x", {"origin_id": str(new_origin.id)}, format="json")
    force_authenticate(req, user=user)
    pr = RouteDetailView.as_view()(req, pk=route_id)
    pr.render()
    assert pr.status_code in (200, 201), pr.content
