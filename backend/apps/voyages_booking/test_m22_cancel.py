import pytest
from decimal import Decimal
from apps.voyages_booking.tests_integration_treasury import _setup, _book


def _open_caisse(company, admin):
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)


@pytest.mark.django_db
def test_cancel_requires_reason():
    from apps.voyages_booking.services.booking_services import cancel_booking
    from apps.core.exceptions import ApplicationError
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip)
    with pytest.raises(ApplicationError):
        cancel_booking(b, user=admin, reason="")


@pytest.mark.django_db
def test_cancel_stores_reason_and_frees_seats():
    from apps.voyages_booking.services.booking_services import cancel_booking
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_booking.models import Booking
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip)
    seat_id = b.tickets.first().trip_seat_id
    cancel_booking(b, user=admin, reason="erreur de saisie")
    b.refresh_from_db()
    assert b.status == Booking.Status.CANCELLED
    assert b.cancellation_reason == "erreur de saisie"
    assert b.cancelled_by_id == admin.id and b.cancelled_at is not None
    assert TripSeat.objects.get(id=seat_id).status == TripSeat.Status.AVAILABLE


@pytest.mark.django_db
def test_cancel_captures_refund_amount():
    from apps.voyages_booking.services.booking_services import cancel_booking
    from apps.treasury.services.refund_config import set_refund_rate
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    set_refund_rate(company, Decimal("50"), user=admin)   # 50 % de 15000 = 7500
    b = _book(company, admin, trip)
    cancel_booking(b, user=admin, reason="remboursement partiel")
    b.refresh_from_db()
    assert b.refund_amount == Decimal("7500")
