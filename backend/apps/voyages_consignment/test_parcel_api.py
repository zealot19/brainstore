import pytest
from rest_framework.test import APIClient


@pytest.fixture
def api_ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import (Town, ServicePoint, ConsignmentNature,
                                            ConsignmentType)
    company, _ = create_company(name="ApiCo", admin_email="api@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="api@x.com")
    town = Town.objects.create(company=company, name="Douala")
    origin = ServicePoint.objects.create(company=company, town=town, code="O", name="Agence O",
                                         is_station=True, station_kind="AGENCY")
    dest = ServicePoint.objects.create(company=company, town=town, code="D", name="Agence D",
                                       is_station=True, station_kind="AGENCY")
    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    c = APIClient(); c.force_authenticate(user=admin)
    return {"client": c, "origin": origin, "dest": dest, "ctype": ctype}


def _register(ctx):
    return ctx["client"].post("/api/v1/voyages/consignment/parcels/", {
        "origin_point_id": str(ctx["origin"].id),
        "destination_point_id": str(ctx["dest"].id),
        "consignment_type_id": str(ctx["ctype"].id),
        "sender_name": "Exp", "sender_phone": "600",
        "recipient_name": "Dest", "recipient_phone": "601",
        "amount_due": "0",
    }, format="json")


@pytest.mark.django_db
def test_no_voyage_flow_via_api(api_ctx):
    c = api_ctx["client"]
    r = _register(api_ctx)
    assert r.status_code in (200, 201), r.content
    pid = r.json()["data"]["id"]
    assert r.json()["data"]["status"] == "ready_for_travel"

    r = c.post(f"/api/v1/voyages/consignment/parcels/{pid}/dispatch/", {}, format="json")
    assert r.status_code == 200 and r.json()["data"]["status"] == "in_transit", r.content

    r = c.post(f"/api/v1/voyages/consignment/parcels/{pid}/arrive/", {}, format="json")
    assert r.status_code == 200 and r.json()["data"]["status"] == "arrived", r.content

    r = c.post(f"/api/v1/voyages/consignment/parcels/{pid}/arrived/",
               {"received_pieces": 1, "missing_pieces": 0, "damaged_pieces": 0}, format="json")
    assert r.status_code == 200 and r.json()["data"]["status"] == "available_for_pickup", r.content

    r = c.post(f"/api/v1/voyages/consignment/parcels/{pid}/pickup/",
               {"picked_up_by": "Jean"}, format="json")
    assert r.status_code == 200 and r.json()["data"]["status"] == "picked_up", r.content


@pytest.mark.django_db
def test_expedition_lists_endpoint(api_ctx):
    c = api_ctx["client"]
    _register(api_ctx)
    r = c.get("/api/v1/voyages/consignment/parcels/expedition/")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert "ready" in body and "assigned" in body and "totals" in body
    assert len(body["ready"]) == 1
