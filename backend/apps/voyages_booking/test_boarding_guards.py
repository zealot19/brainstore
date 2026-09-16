import pytest
from apps.core.exceptions import ApplicationError


def _paid_booking():
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    return company, admin, trip, _book(company, admin, trip)


@pytest.mark.django_db
def test_no_show_blocks_boarding():
    from apps.voyages_booking.services.booking_services import mark_no_show, board_ticket
    from apps.voyages_booking.models import Ticket, Booking
    company, admin, trip, booking = _paid_booking()
    assert booking.status == Booking.Status.CONFIRMED
    mark_no_show(booking, user=admin)
    booking.refresh_from_db()
    assert booking.status == Booking.Status.NO_SHOW
    t = booking.tickets.filter(is_deleted=False).first()
    assert t.status == Ticket.Status.NO_SHOW
    with pytest.raises(ApplicationError):
        board_ticket(t, user=admin)


@pytest.mark.django_db
def test_cannot_cancel_boarded_booking():
    from apps.voyages_booking.services.booking_services import board_ticket, cancel_booking
    from apps.voyages_booking.models import Booking
    company, admin, trip, booking = _paid_booking()
    for t in booking.tickets.filter(is_deleted=False):
        board_ticket(t, user=admin)
    booking.refresh_from_db()
    assert booking.status == Booking.Status.BOARDED
    with pytest.raises(ApplicationError):
        cancel_booking(booking, user=admin)
