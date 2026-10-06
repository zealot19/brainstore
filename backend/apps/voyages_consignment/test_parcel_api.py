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
def test_deliver_home_endpoint(api_ctx):
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.authentication.models import User
    c = api_ctx["client"]
    admin = User.objects.get(email="api@x.com")
    reg = create_cash_register(company=admin.company, name="C1", created_by=admin)
    open_session(company=admin.company, cash_register=reg, created_by=admin)
    pid = _register(api_ctx).json()["data"]["id"]
    c.post(f"/api/v1/voyages/consignment/parcels/{pid}/dispatch/", {}, format="json")
    c.post(f"/api/v1/voyages/consignment/parcels/{pid}/arrive/", {}, format="json")
    c.post(f"/api/v1/voyages/consignment/parcels/{pid}/arrived/",
           {"received_pieces": 1, "missing_pieces": 0, "damaged_pieces": 0}, format="json")
    r = c.post(f"/api/v1/voyages/consignment/parcels/{pid}/deliver-home/",
               {"delivery_amount": "2000", "delivery_address": "Akwa", "payment_method": "cash",
                "delivered_to": "Jean", "delivered_to_id": "CNI-1"},
               format="json")
    assert r.status_code == 200, r.content
    assert r.json()["data"]["status"] == "picked_up"
    assert str(r.json()["data"]["delivery_amount"]) in ("2000.00", "2000")


@pytest.mark.django_db
def test_register_accepts_null_recipient_fields(api_ctx):
    """Le form Angular envoie null pour les champs destinataire facultatifs (reset) :
    la création doit réussir (None -> "") sans « Ce champ ne peut être nul »."""
    c = api_ctx["client"]
    r = c.post("/api/v1/voyages/consignment/parcels/", {
        "origin_point_id": str(api_ctx["origin"].id),
        "destination_point_id": str(api_ctx["dest"].id),
        "consignment_type_id": str(api_ctx["ctype"].id),
        "sender_name": "Exp", "sender_phone": "600",
        "recipient_name": None, "recipient_phone": None, "recipient_id_number": None,
        "amount_due": "0",
    }, format="json")
    assert r.status_code in (200, 201), r.content
    data = r.json()["data"]
    assert data["recipient_name"] == "" and data["recipient_phone"] == ""
    assert data["recipient_id_number"] == ""


@pytest.mark.django_db
def test_expedition_lists_endpoint(api_ctx):
    c = api_ctx["client"]
    _register(api_ctx)
    r = c.get("/api/v1/voyages/consignment/parcels/expedition/")
    assert r.status_code == 200, r.content
    body = r.json()["data"]
    assert "ready" in body and "assigned" in body and "totals" in body
    assert len(body["ready"]) == 1
