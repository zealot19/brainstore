import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import monthly_series

pytestmark = pytest.mark.django_db


def _base(email):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    company, _ = create_company(name="SerCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    ag = Agency.objects.create(company=company, name="D", code="DLA")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fare_class = FareClass.objects.create(company=company, code="STD", name="Standard")
    trip = Trip.objects.create(
        company=company, code="TR1", route=route, origin=o, destination=d,
        fare_class=fare_class,
        scheduled_departure=dt.datetime.now(),
        scheduled_arrival=dt.datetime.now() + dt.timedelta(hours=4),
        status=Trip.Status.DRAFT,
    )
    return company, admin, trip, fare_class


def test_tickets_series_counts_by_created_month():
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_trips.models import TripSeat
    company, admin, trip, fare_class = _base("ser@x.com")
    p = Passenger.objects.create(company=company, name="X", phone="6")
    b = Booking.objects.create(company=company, outbound_trip=trip,
                               agency=trip.origin.agency, buyer=p)
    seat = TripSeat.objects.create(trip=trip, seat_number="1", row=1, column=1, seat_type="seat")
    t = Ticket.objects.create(booking=b, passenger=p, trip=trip,
                              trip_seat=seat, fare_class=fare_class,
                              amount=500, status=Ticket.Status.SOLD)
    year = t.created_at.year
    series = monthly_series(company, admin, year, "tickets")
    assert len(series) == 12
    assert series[t.created_at.month - 1] == 1
    assert sum(series) == 1


def test_unknown_metric_zero():
    company, admin, trip, fare_class = _base("ser2@x.com")
    assert monthly_series(company, admin, 2026, "bogus") == [0] * 12


def test_clients_agency_scoped_distinct():
    """Un passager avec 2 billets dans l'agence A doit être compté 1 fois, pas 2."""
    from apps.authentication.models import User
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_trips.models import TripSeat

    company, admin, trip, fare_class = _base("ser3@x.com")
    ag = trip.origin.agency

    # utilisateur non-admin rattaché à l'agence A
    agent = User.objects.create_user(
        username="agent_a", email="agent_a@x.com", password="pw",
        company=company,
        default_agency=ag,
        is_institution_admin=False,
    )
    agent.agencies.set([ag])

    # un seul passager
    p = Passenger.objects.create(company=company, name="Dupont", phone="600000001")

    b = Booking.objects.create(
        company=company,
        outbound_trip=trip,
        agency=ag,
        buyer=p,
    )

    seat1 = TripSeat.objects.create(trip=trip, seat_number="10", row=1, column=1, seat_type="seat")
    seat2 = TripSeat.objects.create(trip=trip, seat_number="11", row=1, column=2, seat_type="seat")

    # deux billets pour le MÊME passager sur le MÊME voyage de l'agence A
    Ticket.objects.create(booking=b, passenger=p, trip=trip,
                          trip_seat=seat1, fare_class=fare_class,
                          amount=500, status=Ticket.Status.SOLD)
    Ticket.objects.create(booking=b, passenger=p, trip=trip,
                          trip_seat=seat2, fare_class=fare_class,
                          amount=500, status=Ticket.Status.SOLD)

    year = p.created_at.year
    series = monthly_series(company, agent, year, "clients")

    assert len(series) == 12
    # le passager doit être compté UNE FOIS malgré les 2 billets
    assert series[p.created_at.month - 1] == 1
    assert sum(series) == 1


def test_clients_agency_scoped_excludes_other_agency():
    """Un passager avec un billet sur l'agence B ne doit pas apparaître dans la vue agence A."""
    import datetime as dt
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip, TripSeat
    from apps.voyages_booking.models import Passenger, Booking, Ticket

    company, admin, trip_a, fare_class = _base("ser4@x.com")
    ag_a = trip_a.origin.agency

    # agence B avec son propre voyage
    town = ag_a.company and trip_a.origin.town
    o_b = ServicePoint.objects.create(
        company=company, town=trip_a.origin.town, code="OB", name="OB", agency=Agency.objects.create(company=company, name="AgB", code="AGB"),
    )
    ag_b = o_b.agency
    d_b = ServicePoint.objects.create(
        company=company, town=trip_a.origin.town, code="DB", name="DB", agency=ag_b,
    )
    route_b = Route.objects.create(company=company, code="R2", origin=o_b, destination=d_b)
    trip_b = Trip.objects.create(
        company=company, code="TR2", route=route_b, origin=o_b, destination=d_b,
        fare_class=fare_class,
        scheduled_departure=dt.datetime.now(),
        scheduled_arrival=dt.datetime.now() + dt.timedelta(hours=4),
        status=Trip.Status.DRAFT,
    )

    # utilisateur non-admin rattaché à l'agence A uniquement
    agent_a = User.objects.create_user(
        username="agent_aa", email="agent_aa@x.com", password="pw",
        company=company,
        default_agency=ag_a,
        is_institution_admin=False,
    )
    agent_a.agencies.set([ag_a])

    # passager avec billet uniquement sur l'agence B
    p_b = Passenger.objects.create(company=company, name="Zara", phone="600000002")
    b_b = Booking.objects.create(company=company, outbound_trip=trip_b, agency=ag_b, buyer=p_b)
    seat_b = TripSeat.objects.create(trip=trip_b, seat_number="1", row=1, column=1, seat_type="seat")
    Ticket.objects.create(booking=b_b, passenger=p_b, trip=trip_b,
                          trip_seat=seat_b, fare_class=fare_class,
                          amount=500, status=Ticket.Status.SOLD)

    year = p_b.created_at.year
    series = monthly_series(company, agent_a, year, "clients")

    # l'agent A ne doit pas voir ce passager
    assert sum(series) == 0
