from apps.voyages_trips.selectors import list_trips

_U = "00000000-0000-0000-0000-000000000001"


def test_list_trips_filters_route_vehicle_and_departure_range():
    qs = list_trips(None, route=_U, vehicle=_U, date_field="departure",
                    date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "route_id" in sql
    assert "vehicle_id" in sql
    assert "scheduled_departure" in sql


def test_list_trips_created_basis():
    qs = list_trips(None, date_field="created", date_from="2026-01-01")
    assert "created_at" in str(qs.query)


import pytest
from apps.voyages_trips.models import Transbordement


def test_transbordement_model_fields_default_zero():
    t = Transbordement()
    assert t.passengers_moved == 0
    assert t.passengers_overflow == 0
    assert t.baggage_moved == 0
