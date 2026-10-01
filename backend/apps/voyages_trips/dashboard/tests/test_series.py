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
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D",
                                    is_station=True, station_kind="AGENCY", agency=ag)
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
