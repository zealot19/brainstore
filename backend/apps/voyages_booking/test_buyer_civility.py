import pytest
from apps.voyages_booking.services.booking_services import _resolve_passenger
from apps.system_config.models import Company


@pytest.mark.django_db
def test_resolve_passenger_passes_civility():
    c = Company.objects.create(name="BuyCo", slug="buyco")
    spec = {"name": "Awa", "phone": "620999000", "id_type": "cni", "id_number": "Z9", "civility": "mrs"}
    p = _resolve_passenger(c, spec, None)
    assert p.civility == "mrs"
