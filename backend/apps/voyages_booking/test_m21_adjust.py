import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup_m21(email="m21@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    from apps.treasury.services import create_cash_register, open_session
    company, _ = create_company(name="M21Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    c = ServicePoint.objects.create(company=company, town=town, code="C", name="Gare C")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    route2 = Route.objects.create(company=company, code="A-C", origin=a, destination=c)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    vip = FareClass.objects.create(company=company, code="VIP", name="VIP", rank=2)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(rte, fc, offset_days=0):
        dep = now + timedelta(days=offset_days)
        t = Trip.objects.create(company=company, route=rte, fare_class=fc, origin=rte.origin, destination=rte.destination,
                                seating_plan=plan, scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                                status="pending")
        materialise_seats(t)
        return t
    trip1 = _trip(route, eco, 0)
    trip_same = _trip(route, eco, 2)
    trip_other = _trip(route2, eco, 0)
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=eco, trip_type="one_way", amount=Decimal("15000"))
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=vip, trip_type="one_way", amount=Decimal("25000"))
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    return dict(company=company, admin=admin, trip1=trip1, trip_same=trip_same, trip_other=trip_other,
                eco=eco, vip=vip, a=a, b=b)


def _book(g):
    from apps.voyages_booking.services.booking_services import create_booking
    seat = g["trip1"].seats.order_by("column").first()
    return create_booking(
        g["company"], trip_type="one_way", outbound_trip=g["trip1"], return_trip=None,
        buyer_spec={"name": "Cli", "phone": "6"},
        items=[{"passenger": {"name": "Cli", "phone": "6"}, "destination_point_id": None,
                "outbound_seat_id": str(seat.id)}],
        payment_method="cash", user=g["admin"])


@pytest.mark.django_db
def test_report_same_route_price_unchanged():
    from apps.voyages_booking.services.adjustment_services import report_ticket
    from apps.voyages_booking.models import TicketAdjustment
    from apps.voyages_trips.models import TripSeat
    g = _setup_m21()
    b = _book(g); t = b.tickets.get()
    old_seat_id = t.trip_seat_id; amt = t.amount
    report_ticket(t, new_trip=g["trip_same"], user=g["admin"], reason="client demande report")
    t.refresh_from_db()
    assert t.trip_id == g["trip_same"].id and t.amount == amt
    assert TripSeat.objects.get(id=old_seat_id).status == TripSeat.Status.AVAILABLE
    adj = TicketAdjustment.objects.get(ticket=t, kind="report")
    assert adj.price_difference == Decimal("0")


@pytest.mark.django_db
def test_report_other_route_refused():
    from apps.voyages_booking.services.adjustment_services import report_ticket
    from apps.core.exceptions import ApplicationError
    g = _setup_m21("m21b@x.com")
    b = _book(g); t = b.tickets.get()
    with pytest.raises(ApplicationError):
        report_ticket(t, new_trip=g["trip_other"], user=g["admin"], reason="x")


@pytest.mark.django_db
def test_report_non_sold_refused():
    from apps.voyages_booking.services.adjustment_services import report_ticket
    from apps.voyages_booking.models import Ticket
    from apps.core.exceptions import ApplicationError
    g = _setup_m21("m21c@x.com")
    b = _book(g); t = b.tickets.get()
    t.status = Ticket.Status.CANCELLED; t.save(update_fields=["status"])
    with pytest.raises(ApplicationError):
        report_ticket(t, new_trip=g["trip_same"], user=g["admin"], reason="x")


@pytest.mark.django_db
def test_regularize_upgrade_collects_difference():
    from apps.voyages_booking.services.adjustment_services import regularize_ticket
    from apps.voyages_booking.models import TicketAdjustment
    from apps.treasury.models import Transaction
    g = _setup_m21("m21d@x.com")
    b = _book(g); t = b.tickets.get()
    regularize_ticket(t, new_fare_class=g["vip"], payment_method="cash", reason="surclassement", user=g["admin"])
    t.refresh_from_db()
    assert t.fare_class_id == g["vip"].id and t.amount == Decimal("25000")
    adj = TicketAdjustment.objects.get(ticket=t, kind="regularisation")
    assert adj.price_difference == Decimal("10000")
    assert Transaction.objects.filter(company=g["company"], transaction_type="income", amount=Decimal("10000")).exists()


@pytest.mark.django_db
def test_regularize_downgrade_refused():
    from apps.voyages_booking.services.adjustment_services import regularize_ticket, report_ticket
    from apps.core.exceptions import ApplicationError
    g = _setup_m21("m21e@x.com")
    b = _book(g); t = b.tickets.get()
    # surclasser d'abord ECO→VIP, puis tenter VIP→ECO (déclassement)
    regularize_ticket(t, new_fare_class=g["vip"], payment_method="cash", reason="up", user=g["admin"])
    t.refresh_from_db()
    with pytest.raises(ApplicationError):
        regularize_ticket(t, new_fare_class=g["eco"], payment_method="cash", reason="down", user=g["admin"])
