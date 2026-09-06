import pytest
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def test_seat_map_returns_trip_seats(booking_world):
    w = booking_world
    url = reverse("public-seat-map", args=[w["company"].id, w["trip"].id])
    resp = APIClient().get(url)
    assert resp.status_code == 200
    assert len(resp.data) == 2
    s = resp.data[0]
    assert set(s) >= {"id", "seat_number", "row", "column", "status"}
    assert s["status"] == "available"
