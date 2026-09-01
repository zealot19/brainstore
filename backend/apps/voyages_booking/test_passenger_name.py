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
