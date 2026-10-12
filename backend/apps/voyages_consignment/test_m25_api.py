import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.voyages_consignment.test_m25_shipment import _setup
from apps.voyages_consignment.config_api import views as v


def _post(view, user, data, **kw):
    req = APIRequestFactory().post("/x", data, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw)


def _get(view, user, **kw):
    req = APIRequestFactory().get("/x")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw)


def _id(data):
    return (data.get("data") or data)["id"]


@pytest.mark.django_db
def test_shipment_api_create_validate_list():
    g = _setup("m25api@x.com")
    pid = str(g["parcel"].id)
    r = _post(v.ParcelShipmentListView, g["admin"], {"trip_id": str(g["trip1"].id), "quantity": 6}, pk=pid)
    assert r.status_code in (200, 201), r.data
    sid = _id(r.data)
    r = _post(v.ShipmentValidateView, g["admin"], {}, pk=sid)
    assert r.status_code == 200, r.data
    r = _get(v.ParcelShipmentListView, g["admin"], pk=pid)
    rows = r.data.get("data") if isinstance(r.data, dict) and "data" in r.data else r.data
    assert len(rows) == 1


@pytest.mark.django_db
def test_shipment_api_rejects_off_route():
    g = _setup("m25api2@x.com")
    r = _post(v.ParcelShipmentListView, g["admin"],
              {"trip_id": str(g["trip_bad"].id), "quantity": 5}, pk=str(g["parcel"].id))
    assert r.status_code == 400
