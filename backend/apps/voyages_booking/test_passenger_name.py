import pytest
from apps.voyages_booking.models import Passenger


def _company(name="PaxCo", email="pax@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User  # noqa: F401
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_passenger_has_single_name_and_full_name_alias():
    company = _company()
    p = Passenger.objects.create(company=company, name="Alice Ngo", phone="699000001")
    assert p.name == "Alice Ngo"
    assert p.full_name == "Alice Ngo"
    field_names = [f.name for f in Passenger._meta.fields]
    assert "first_name" not in field_names and "last_name" not in field_names


@pytest.mark.django_db
def test_get_or_create_passenger_with_name():
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    company = _company(name="GC", email="gc@x.com")
    p = get_or_create_passenger(company, id_type="cni", id_number="", phone="690111",
                                name="Bruno Foka")
    assert p.name == "Bruno Foka"
    again = get_or_create_passenger(company, id_type="cni", id_number="", phone="690111",
                                    name="Autre Nom")
    assert again.id == p.id


@pytest.mark.django_db
def test_find_passengers_by_name():
    from apps.voyages_booking.selectors import find_passengers
    company = _company(name="FP", email="fp@x.com")
    Passenger.objects.create(company=company, name="Alice Ngo", phone="699000001")
    Passenger.objects.create(company=company, name="Bob Sar", phone="699000002")
    assert find_passengers(company, "ali").count() == 1
    assert find_passengers(company, "699000002").count() == 1
