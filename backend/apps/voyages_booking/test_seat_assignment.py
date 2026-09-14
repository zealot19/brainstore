import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.services.booking_services import create_booking
from apps.voyages_booking.tests_integration_treasury import _setup


def _open_caisse(company, admin):
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)


def _book(company, admin, trip, seat_id):
    return create_booking(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec={"name": "Cli Ent", "phone": "690"},
        items=[{"passenger": {"name": "Cli Ent", "phone": "690"},
                "destination_point_id": None, "outbound_seat_id": seat_id}],
        payment_method="cash", user=admin)


@pytest.mark.django_db
def test_manual_mode_requires_a_seat():
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    assert trip.seat_assignment_mode == "manual"
    with pytest.raises(ApplicationError):
        _book(company, admin, trip, seat_id=None)


@pytest.mark.django_db
def test_auto_mode_assigns_first_available_seat():
    company, admin, trip = _setup()
    trip.seat_assignment_mode = "auto"; trip.save(update_fields=["seat_assignment_mode"])
    _open_caisse(company, admin)
    # No seat supplied — system must pick one (the lowest by row/column/number).
    booking = _book(company, admin, trip, seat_id=None)
    ticket = booking.tickets.get()
    assert ticket.trip_seat is not None
    assert ticket.trip_seat.seat_number == "S1"
    assert ticket.trip_seat.status == "sold"


@pytest.mark.django_db
def test_auto_mode_ignores_supplied_seat_and_reports_full():
    company, admin, trip = _setup()  # plan has 2 seats
    trip.seat_assignment_mode = "auto"; trip.save(update_fields=["seat_assignment_mode"])
    _open_caisse(company, admin)
    _book(company, admin, trip, seat_id=None)  # takes S1
    _book(company, admin, trip, seat_id=None)  # takes S2
    with pytest.raises(ApplicationError):      # sold out
        _book(company, admin, trip, seat_id=None)
