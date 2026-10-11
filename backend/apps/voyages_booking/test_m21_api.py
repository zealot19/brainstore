import pytest
from decimal import Decimal
from rest_framework.test import APIRequestFactory, force_authenticate

from apps.voyages_booking.test_m21_adjust import _setup_m21, _book
from apps.voyages_booking.config_api.views import (
    TicketReportView, TicketRegularizeView, AdjustmentListView,
)


def _post(view, user, data, **kw):
    req = APIRequestFactory().post("/x", data, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw)


def _get(view, user, query=""):
    req = APIRequestFactory().get("/x" + query)
    force_authenticate(req, user=user)
    return view.as_view()(req)


@pytest.mark.django_db
def test_m21_api_report_regularize_and_history():
    g = _setup_m21("m21api@x.com")
    admin = g["admin"]
    b = _book(g)
    t = b.tickets.get()

    # Report vers un voyage de la même route
    r = _post(TicketReportView, admin, {"new_trip_id": str(g["trip_same"].id), "reason": "report client"}, pk=str(t.id))
    assert r.status_code == 200, r.data
    t.refresh_from_db()
    assert t.trip_id == g["trip_same"].id

    # Régularisation ECO -> VIP (surclassement) : collecte la différence
    r = _post(TicketRegularizeView, admin,
              {"new_fare_class_id": str(g["vip"].id), "payment_method": "cash", "reason": "surclassement"},
              pk=str(t.id))
    assert r.status_code == 200, r.data
    t.refresh_from_db()
    assert t.fare_class_id == g["vip"].id and t.amount == Decimal("25000")

    # Historique : 2 ajustements
    r = _get(AdjustmentListView, admin)
    assert r.status_code == 200
    rows = r.data["data"] if isinstance(r.data, dict) and "data" in r.data else r.data
    assert len(rows) == 2

    # Filtre kind=report -> 1
    r = _get(AdjustmentListView, admin, "?kind=report")
    rows = r.data["data"] if isinstance(r.data, dict) and "data" in r.data else r.data
    assert len(rows) == 1
    assert rows[0]["kind"] == "report"


@pytest.mark.django_db
def test_m21_api_report_other_route_refused():
    g = _setup_m21("m21api2@x.com")
    b = _book(g)
    t = b.tickets.get()
    r = _post(TicketReportView, g["admin"], {"new_trip_id": str(g["trip_other"].id), "reason": "x"}, pk=str(t.id))
    assert r.status_code == 400
