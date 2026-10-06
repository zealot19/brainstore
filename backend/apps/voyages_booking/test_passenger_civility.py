# backend/apps/voyages_booking/test_passenger_civility.py
import pytest
from apps.system_config.models import Company
from apps.voyages_booking.models import Passenger
from apps.voyages_booking.services.passenger_services import get_or_create_passenger


@pytest.mark.django_db
def test_get_or_create_sets_civility():
    c = Company.objects.create(name="CivCo", slug="civco")
    p = get_or_create_passenger(c, id_type="cni", id_number="A1", phone="620000001",
                                name="Awa Diallo", civility="mrs")
    assert p.civility == "mrs"


@pytest.mark.django_db
def test_get_or_create_dedups_and_keeps_existing():
    c = Company.objects.create(name="CivCo2", slug="civco2")
    first = get_or_create_passenger(c, id_type="cni", id_number="B2", phone="620000002", name="Ben", civility="mr")
    again = get_or_create_passenger(c, id_type="cni", id_number="B2", phone="620000002", name="Ben", civility="mr")
    assert again.id == first.id
    assert Passenger.objects.filter(company=c).count() == 1
