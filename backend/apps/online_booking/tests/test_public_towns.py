import uuid
import pytest
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


def test_towns_lists_served_towns(booking_world):
    company = booking_world["company"]
    resp = APIClient().get(reverse("online-public-towns", args=[company.id]))
    assert resp.status_code == 200
    names = [t["name"] for t in resp.data]
    assert names == ["Douala", "Yaoundé"]
    assert all("id" in t and "name" in t for t in resp.data)


def test_towns_unknown_company_404():
    resp = APIClient().get(reverse("online-public-towns", args=[uuid.uuid4()]))
    assert resp.status_code == 404
