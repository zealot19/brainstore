import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import trip_cards

pytestmark = pytest.mark.django_db


def _setup(email="dash@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    company, _ = create_company(name="DashCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    town = Town.objects.create(company=company, name="Dla")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Orig", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fare_class = FareClass.objects.create(company=company, code="STD", name="Standard")
    today = dt.date.today()
    trip = Trip.objects.create(
        company=company, code="TR1", route=route, origin=o, destination=d,
        fare_class=fare_class,
        scheduled_departure=dt.datetime.combine(today, dt.time(8, 0)),
        scheduled_arrival=dt.datetime.combine(today, dt.time(12, 0)),
        status=Trip.Status.DRAFT,
    )
    return company, admin, ag, o, d, route, trip, today, fare_class


def _passenger(company):
    from apps.voyages_booking.models import Passenger
    return Passenger.objects.create(company=company, name="X", phone="6")


def _booking(company, trip, buyer):
    from apps.voyages_booking.models import Booking
    return Booking.objects.create(company=company, outbound_trip=trip, agency=trip.origin.agency,
                                  buyer=buyer)


_seat_counter = {}


def _trip_seat(trip):
    from apps.voyages_trips.models import TripSeat
    n = _seat_counter.get(trip.id, 1)
    _seat_counter[trip.id] = n + 1
    return TripSeat.objects.create(trip=trip, seat_number=str(n), row=n, column=1, seat_type="seat")


def test_trip_card_counts_and_revenue_exclude_cancelled():
    from apps.voyages_booking.models import Ticket
    company, admin, ag, o, d, route, trip, today, fare_class = _setup()
    p = _passenger(company)
    b = _booking(company, trip, p)
    seat1 = _trip_seat(trip)
    seat2 = _trip_seat(trip)
    Ticket.objects.create(booking=b, passenger=p, trip=trip,
                          trip_seat=seat1, fare_class=fare_class,
                          amount=1000, status=Ticket.Status.SOLD)
    Ticket.objects.create(booking=b, passenger=p, trip=trip,
                          trip_seat=seat2, fare_class=fare_class,
                          amount=1000, status=Ticket.Status.CANCELLED)  # excluded
    cards = trip_cards(company, admin, today, today)
    assert len(cards) == 1
    c = cards[0]
    assert c["tickets_count"] == 1
    assert c["tickets_revenue"] == 1000.0
    assert c["total_revenue"] == 1000.0
    assert c["header"] == "TR1"           # no vehicle -> code


def test_trip_outside_period_excluded():
    import datetime as dt
    company, admin, ag, o, d, route, trip, today, fare_class = _setup("dash2@x.com")
    cards = trip_cards(company, admin, today - dt.timedelta(days=5), today - dt.timedelta(days=4))
    assert cards == []
