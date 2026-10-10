import pytest
from decimal import Decimal
from apps.voyages_booking.tests_integration_treasury import _setup


def _unpaid_method(company):
    from apps.treasury.models import PaymentMethod
    return PaymentMethod.objects.create(company=company, code="non_paye", name="Non payé",
                                        requires_payment=False)


def _item(trip):
    seat = trip.seats.order_by("column").first()
    return {"passenger": {"name": "Cli Ent", "phone": "690"},
            "destination_point_id": None, "outbound_seat_id": str(seat.id)}


@pytest.mark.django_db
def test_unpaid_method_creates_reservation_not_sale():
    from apps.voyages_booking.services import create_booking
    from apps.voyages_trips.models import TripSeat
    company, admin, trip = _setup()
    _unpaid_method(company)
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "Cli Ent", "phone": "690"}, items=[_item(trip)],
                       payment_method="non_paye", user=admin)
    assert b.status == "reserved"                 # réservation, pas vente
    assert b.amount_paid == Decimal("0")
    t = b.tickets.get()
    assert t.status == "reserved" and t.trip_seat.status == TripSeat.Status.HELD


@pytest.mark.django_db
def test_unpaid_reservation_is_payable_and_converts():
    from apps.voyages_booking.services import create_booking, pay_reservation
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    _unpaid_method(company)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "Cli Ent", "phone": "690"}, items=[_item(trip)],
                       payment_method="non_paye", user=admin)
    b = pay_reservation(b, payment_method="cash", user=admin)
    assert b.status == "confirmed" and b.amount_paid == Decimal("15000")
    assert b.tickets.get().trip_seat.status == "sold"


@pytest.mark.django_db
def test_paid_method_still_creates_sale():
    from apps.voyages_booking.services import create_booking
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_trips.models import TripSeat
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    b = create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                       buyer_spec={"name": "Cli Ent", "phone": "690"}, items=[_item(trip)],
                       payment_method="cash", amount_received=Decimal("15000"), user=admin)
    assert b.status == "confirmed"                # vente (non-régression)
    assert b.amount_paid == Decimal("15000")
    assert b.tickets.get().trip_seat.status == TripSeat.Status.SOLD
