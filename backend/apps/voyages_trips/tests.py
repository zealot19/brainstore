from apps.voyages_trips.selectors import list_trips

_U = "00000000-0000-0000-0000-000000000001"


def test_list_trips_filters_route_vehicle_and_departure_range():
    qs = list_trips(None, route=_U, vehicle=_U, date_field="departure",
                    date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "route_id" in sql
    assert "vehicle_id" in sql
    assert "scheduled_departure" in sql


def test_list_trips_created_basis():
    qs = list_trips(None, date_field="created", date_from="2026-01-01")
    assert "created_at" in str(qs.query)


import pytest
from apps.voyages_trips.models import Transbordement


def test_transbordement_model_fields_default_zero():
    t = Transbordement()
    assert t.passengers_moved == 0
    assert t.passengers_overflow == 0
    assert t.baggage_moved == 0


from apps.voyages_trips.services.transbordement import overflow_split


def test_overflow_split():
    assert overflow_split([1, 2, 3], 2) == ([1, 2], [3])
    assert overflow_split([1, 2], 5) == ([1, 2], [])
    assert overflow_split([], 0) == ([], [])


from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.services.transbordement import apply_transbord
from apps.voyages_trips.services.assignment import materialise_seats


def _plan(company, code, n_sellable):
    from apps.voyages_config.models import SeatingPlan, PlanSeat
    plan = SeatingPlan.objects.create(company=company, code=code, name=code,
                                      rows=1, columns=n_sellable, total_seats=n_sellable)
    for i in range(n_sellable):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"{code}{i+1}",
                                row=1, column=i + 1, seat_type="standard", is_sellable=True)
    return plan


def _trip(company, route, fare_class, origin, dest, plan, status="pending"):
    from apps.voyages_trips.models import Trip
    now = timezone.now() + timedelta(days=1)
    t = Trip.objects.create(company=company, route=route, fare_class=fare_class,
                            origin=origin, destination=dest, seating_plan=plan,
                            scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                            status=status)
    materialise_seats(t)
    return t


def _graph():
    """Construit un graphe minimal et renvoie un dict d'objets utiles."""
    from apps.system_config.models import Company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_consignment.models import Baggage
    from apps.voyages_trips.models import TripSeat

    c = Company.objects.create(name="TestCo", slug="testco")
    town = Town.objects.create(company=c, name="Ville")
    a = ServicePoint.objects.create(company=c, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=c, town=town, code="B", name="B")
    route = Route.objects.create(company=c, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=c, code="ECO", name="Éco")

    plan_big = _plan(c, "BIG", 4)
    plan_small = _plan(c, "SML", 2)
    plan_dest = _plan(c, "DST", 4)

    src = _trip(c, route, fc, a, b, plan_big)
    dest = _trip(c, route, fc, a, b, plan_dest)

    booking = Booking.objects.create(company=c, outbound_trip=src,
                                     buyer=Passenger.objects.create(company=c, first_name="Ach", last_name="Eteur", phone="600"),
                                     trip_type="one_way")
    seats = list(src.seats.order_by("column"))
    tickets = []
    for i in range(3):
        seat = seats[i]
        seat.status = TripSeat.Status.SOLD
        seat.save(update_fields=["status"])
        p = Passenger.objects.create(company=c, first_name=f"P{i}", last_name="X", phone=f"61{i}")
        tk = Ticket.objects.create(booking=booking, passenger=p, trip=src, trip_seat=seat,
                                   fare_class=fc, direction="outbound", origin_point=a, destination_point=b,
                                   status="sold")
        tickets.append(tk)
    bag = Baggage.objects.create(company=c, trip=src, ticket=tickets[2], sender_name="P2")
    return dict(company=c, src=src, dest=dest, plan_big=plan_big, plan_small=plan_small,
                tickets=tickets, baggage=bag)


@pytest.mark.django_db
def test_apply_transbord_same_plan_keeps_seats():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_big"], user=None)
    assert res == {"passengers_moved": 3, "passengers_overflow": 0, "baggage_moved": 0}
    for tk in g["tickets"]:
        tk.refresh_from_db()
        assert tk.trip_id == g["src"].id and tk.trip_seat.status == "sold"


@pytest.mark.django_db
def test_apply_transbord_smaller_without_overflow_raises():
    from apps.core.exceptions import ApplicationError
    g = _graph()
    with pytest.raises(ApplicationError):
        apply_transbord(g["src"], g["plan_small"], user=None)


@pytest.mark.django_db
def test_apply_transbord_smaller_with_overflow_moves_surplus_and_baggage():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_small"], overflow_trip=g["dest"], user=None)
    assert res == {"passengers_moved": 2, "passengers_overflow": 1, "baggage_moved": 1}
    on_src = [t for t in g["tickets"] if (t.refresh_from_db() or True) and t.trip_id == g["src"].id]
    assert len(on_src) == 2
    overflow = g["tickets"][2]; overflow.refresh_from_db()
    assert overflow.trip_id == g["dest"].id
    g["baggage"].refresh_from_db()
    assert g["baggage"].trip_id == g["dest"].id
    for t in g["tickets"]:
        t.refresh_from_db()
        assert t.trip_seat.trip_id == t.trip_id
