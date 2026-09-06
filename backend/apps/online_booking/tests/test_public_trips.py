import pytest
from decimal import Decimal
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def test_search_returns_trip_with_price(booking_world):
    w = booking_world
    url = reverse("public-trip-search", args=[w["company"].id])
    resp = APIClient().get(url, {
        "from_town_id": str(w["town_from"].id),
        "to_town_id": str(w["town_to"].id),
        "travel_date": w["trip"].scheduled_departure.date().isoformat(),
    })
    assert resp.status_code == 200
    assert len(resp.data) == 1
    row = resp.data[0]
    assert row["from_town"] == "Douala" and row["to_town"] == "Yaoundé"
    assert Decimal(str(row["price"])) == Decimal("5000")
    assert row["available_seats"] == 2


def test_detail_includes_price_and_fare_class(booking_world):
    w = booking_world
    url = reverse("public-trip-detail", args=[w["company"].id, w["trip"].id])
    resp = APIClient().get(url)
    assert resp.status_code == 200
    assert Decimal(str(resp.data["price"])) == Decimal("5000")
    assert resp.data["fare_class"]["name"] == "Standard"
