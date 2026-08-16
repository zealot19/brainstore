import pytest
from decimal import Decimal
from django.utils import timezone
from datetime import timedelta
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route, SeatingPlan, PlanSeat
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    company, _ = create_company(name="IntCo", admin_email="int@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="int@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", rows=1, columns=2, total_seats=2)
    for i in range(2):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"S{i+1}", row=1, column=i + 1,
                                seat_type="standard", is_sellable=True)
    now = timezone.now() + timedelta(days=1)
    trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=a, destination=b,
                               seating_plan=plan, scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                               status="pending")
    materialise_seats(trip)
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=fc, trip_type="one_way", amount=Decimal("15000"))
    return company, admin, trip


def _book(company, admin, trip):
    from apps.voyages_booking.services.booking_services import create_booking
    seat = trip.seats.order_by("column").first()
    return create_booking(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec={"first_name": "Cli", "last_name": "Ent", "phone": "690"},
        items=[{"passenger": {"first_name": "Cli", "last_name": "Ent", "phone": "690"},
                "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
        payment_method="cash", user=admin)


@pytest.mark.django_db
def test_counter_cash_sale_creates_treasury_movement():
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    booking = _book(company, admin, trip)
    txns = Transaction.objects.filter(voyage_booking=booking, is_deleted=False)
    assert txns.count() == 1
    assert txns.first().journal_entry is not None


@pytest.mark.django_db
def test_counter_cash_sale_blocked_without_session():
    company, admin, trip = _setup()
    with pytest.raises(ApplicationError):
        _book(company, admin, trip)
    from apps.voyages_booking.models import Booking
    assert not Booking.objects.filter(company=company).exists()  # rollback atomique
