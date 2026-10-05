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


@pytest.mark.django_db
def test_passenger_write_serializer_requires_name():
    from apps.voyages_booking.config_api.serializers import PassengerWrite, PassengerRead
    company = _company(name="SC", email="sc@x.com")
    assert not PassengerWrite(data={"phone": "690"}).is_valid()
    ser = PassengerWrite(data={"name": "Carine Meli", "phone": "690"})
    assert ser.is_valid(), ser.errors
    p = Passenger.objects.create(company=company, name="Carine Meli", phone="690")
    data = PassengerRead(p).data
    assert data["name"] == "Carine Meli" and data["full_name"] == "Carine Meli"


@pytest.mark.django_db
def test_booking_with_name_creates_client_and_id_reuses():
    from apps.voyages_booking.services.booking_services import create_booking
    from apps.voyages_booking.tests_integration_treasury import _setup
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    seat = trip.seats.order_by("column").first()
    create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                   buyer_spec={"name": "Alice Ngo", "phone": "699"},
                   items=[{"passenger": {"name": "Alice Ngo", "phone": "699"},
                           "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
                   payment_method="cash", user=admin)
    pax = Passenger.objects.get(company=company, name="Alice Ngo")
    seat2 = trip.seats.order_by("column").last()
    create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                   buyer_spec={"id": str(pax.id)},
                   items=[{"passenger": {"id": str(pax.id)},
                           "destination_point_id": None, "outbound_seat_id": str(seat2.id)}],
                   payment_method="cash", user=admin)
    assert Passenger.objects.filter(company=company, name="Alice Ngo").count() == 1


@pytest.mark.django_db
def test_get_or_create_passenger_dedupes_on_cni_despite_different_name():
    """Même CNI = même client, même si le nom saisi diffère (homonymes distingués par la pièce)."""
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    company = _company(name="CniCo", email="cni@x.com")
    p1 = get_or_create_passenger(company, id_type="cni", id_number="CNI-123", phone="690001",
                                 name="Jean Dupont")
    p2 = get_or_create_passenger(company, id_type="cni", id_number="CNI-123", phone="690999",
                                 name="Jean Dupond")  # nom différent, même CNI
    assert p2.id == p1.id
    assert Passenger.objects.filter(company=company, id_number="CNI-123").count() == 1


@pytest.mark.django_db
def test_get_or_create_passenger_blank_cni_not_merged_by_cni():
    """Deux clients sans CNI (pièce vide) ne sont PAS fusionnés sur la pièce vide."""
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    company = _company(name="BlankCni", email="blank@x.com")
    a = get_or_create_passenger(company, id_type="cni", id_number="", phone="691001", name="Paul")
    b = get_or_create_passenger(company, id_type="cni", id_number="", phone="691002", name="Pierre")
    assert a.id != b.id
