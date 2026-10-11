import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup_ar():
    """Route A→B avec tarifs aller + A/R, un voyage aller et un voyage retour, sièges matérialisés."""
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route, SeatingPlan
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    company, _ = create_company(name="M20Co", admin_email="m20@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m20@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=4, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)
    out_trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=a, destination=b,
                                   seating_plan=plan, scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                                   status="pending")
    ret_trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=a, destination=b,
                                   seating_plan=plan, scheduled_departure=now + timedelta(days=2),
                                   scheduled_arrival=now + timedelta(days=2, hours=3), status="pending")
    materialise_seats(out_trip); materialise_seats(ret_trip)
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=fc, trip_type="one_way", amount=Decimal("15000"))
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=fc, trip_type="round_trip", amount=Decimal("25000"))
    # Caisse ouverte (l'encaissement A/R au comptant en a besoin).
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    return company, admin, out_trip, ret_trip


@pytest.mark.django_db
def test_open_return_then_assign_return_reuses_info_no_new_payment():
    from apps.voyages_booking.services.booking_services import create_booking, assign_return
    from apps.voyages_booking.models import Ticket
    company, admin, out_trip, ret_trip = _setup_ar()
    seat = out_trip.seats.order_by("column").first()
    # A/R à retour ouvert : tarif A/R facturé, billet aller seul émis.
    booking = create_booking(
        company, trip_type="round_trip", outbound_trip=out_trip, return_trip=None,
        buyer_spec={"name": "Cli Ent", "phone": "690"},
        items=[{"passenger": {"name": "Cli Ent", "phone": "690"}, "destination_point_id": None,
                "outbound_seat_id": str(seat.id)}],
        payment_method="", return_open=True, user=admin)
    assert booking.return_open is True
    out_ticket = booking.tickets.get(direction=Ticket.Direction.OUTBOUND)
    amount_before = booking.amount_paid

    # Au retour : on affecte un voyage retour, sans ressaisie ni nouveau paiement.
    ret_seat = ret_trip.seats.order_by("column").first()
    assign_return(booking, ret_trip, items=[{"outbound_ticket_id": str(out_ticket.id),
                                             "return_seat_id": str(ret_seat.id)}], user=admin)
    booking.refresh_from_db()
    ret_ticket = booking.tickets.get(direction=Ticket.Direction.RETURN)
    assert ret_ticket.passenger_id == out_ticket.passenger_id      # info aller récupérée
    assert ret_ticket.amount == Decimal("0")                        # pas de nouveau paiement
    assert ret_ticket.status == Ticket.Status.SOLD
    assert booking.return_trip_id == ret_trip.id
    assert booking.amount_paid == amount_before                     # montant inchangé


@pytest.mark.django_db
def test_assign_return_rejects_non_open_return():
    from apps.voyages_booking.services.booking_services import assign_return
    from apps.core.exceptions import ApplicationError
    company, admin, out_trip, ret_trip = _setup_ar()
    seat = out_trip.seats.order_by("column").first()
    from apps.voyages_booking.services.booking_services import create_booking
    booking = create_booking(
        company, trip_type="one_way", outbound_trip=out_trip, return_trip=None,
        buyer_spec={"name": "X", "phone": "6"},
        items=[{"passenger": {"name": "X", "phone": "6"}, "destination_point_id": None,
                "outbound_seat_id": str(seat.id)}],
        payment_method="", user=admin)
    with pytest.raises(ApplicationError):
        assign_return(booking, ret_trip, items=[], user=admin)
