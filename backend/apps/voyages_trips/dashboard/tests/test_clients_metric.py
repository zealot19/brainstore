"""Tests for the cross-source "clients" metric: tickets + parcels_sent + baggage_sent."""
import datetime as dt
import pytest
from apps.system_config.services import create_company
from apps.authentication.models import User
from apps.voyages_booking.models import Passenger
from apps.voyages_trips.dashboard.selectors import monthly_series

pytestmark = pytest.mark.django_db


# ---------------------------------------------------------------------------
# Shared infra builder (company + admin + trip + fare_class + agency)
# ---------------------------------------------------------------------------

def _make_company(email):
    """Return (company, admin, trip, fare_class) with a single agency.

    Note: create_company already seeds an Agency with code="HQ"; we reuse it
    instead of creating a duplicate.
    """
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip

    company, _ = create_company(name="ClientMetCo", admin_email=email,
                                 admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    # Reuse the HQ agency seeded by create_company; do NOT create another.
    ag = Agency.objects.get(company=company, code="HQ")
    town = Town.objects.create(company=company, name="Town")
    origin = ServicePoint.objects.create(
        company=company, town=town, code="OR", name="Origin", agency=ag)
    dest = ServicePoint.objects.create(
        company=company, town=town, code="DS", name="Dest", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=origin, destination=dest)
    fare_class = FareClass.objects.create(company=company, code="STD", name="Standard")
    trip = Trip.objects.create(
        company=company, code="TR1", route=route, origin=origin, destination=dest,
        fare_class=fare_class,
        scheduled_departure=dt.datetime.now(),
        scheduled_arrival=dt.datetime.now() + dt.timedelta(hours=4),
        status=Trip.Status.DRAFT,
    )
    return company, admin, trip, fare_class


# ---------------------------------------------------------------------------
# Inline linkers — create the link without going through treasury services
# ---------------------------------------------------------------------------

def _link_ticket(company, passenger, trip, fare_class):
    """Create a SOLD ticket for passenger on trip (inline, no treasury)."""
    from apps.voyages_booking.models import Booking, Ticket
    from apps.voyages_trips.models import TripSeat

    booking = Booking.objects.create(
        company=company, outbound_trip=trip,
        agency=trip.origin.agency, buyer=passenger)
    seat = TripSeat.objects.create(
        trip=trip, seat_number="S1", row=1, column=1, seat_type="seat")
    return Ticket.objects.create(
        booking=booking, passenger=passenger, trip=trip,
        trip_seat=seat, fare_class=fare_class,
        amount=500, status=Ticket.Status.SOLD)


def _link_parcel_sender(company, passenger, origin_point, dest_point, ctype):
    """Create a non-cancelled Parcel with sender_client=passenger (inline)."""
    from apps.voyages_consignment.models import Parcel

    return Parcel.objects.create(
        company=company,
        agency=origin_point.agency,
        origin_point=origin_point,
        destination_point=dest_point,
        consignment_type=ctype,
        sender_client=passenger,
        sender_name=passenger.name,
        sender_phone=passenger.phone,
        recipient_name="Rcpt",
        recipient_phone="690000000",
        amount_due=0,
        status=Parcel.Status.REGISTERED,
    )


def _link_baggage_sender(company, passenger, trip, ctype):
    """Create a non-cancelled Baggage with sender_client=passenger (inline)."""
    from apps.voyages_consignment.models import Baggage

    return Baggage.objects.create(
        company=company,
        trip=trip,
        sender_client=passenger,
        sender_name=passenger.name,
        sender_phone=passenger.phone,
        consignment_type=ctype,
        declared_value=1,
        status=Baggage.Status.CHECKED_IN,
    )


def _make_ctype(company, town):
    """Minimal ConsignmentNature + ConsignmentType."""
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    return ConsignmentType.objects.create(company=company, code="CT", label="Standard", nature=nature)


# ---------------------------------------------------------------------------
# Test 1: a parcel-only client IS counted
# ---------------------------------------------------------------------------

def test_clients_includes_parcel_only_buyer():
    """A Passenger who sent ONLY a colis (no ticket) must appear in the clients metric."""
    from apps.voyages_config.models import Town

    company, admin, trip, fare_class = _make_company("cm1@x.com")
    town = trip.origin.town
    ctype = _make_ctype(company, town)

    p = Passenger.objects.create(company=company, name="ColisOnly", phone="620000001")
    _link_parcel_sender(company, p, trip.origin, trip.destination, ctype)

    year = p.created_at.year
    series = monthly_series(company, admin, year, "clients")

    assert len(series) == 12
    assert series[p.created_at.month - 1] >= 1
    assert sum(series) >= 1


# ---------------------------------------------------------------------------
# Test 2: same person linked to BOTH a ticket and a parcel counts ONCE
# ---------------------------------------------------------------------------

def test_clients_same_person_counts_once():
    """A Passenger with both a ticket and a colis must be counted as 1, not 2."""
    from apps.voyages_config.models import Town

    company, admin, trip, fare_class = _make_company("cm2@x.com")
    town = trip.origin.town
    ctype = _make_ctype(company, town)

    p = Passenger.objects.create(company=company, name="DoubleLinked", phone="620000002")
    _link_ticket(company, p, trip, fare_class)
    _link_parcel_sender(company, p, trip.origin, trip.destination, ctype)

    year = p.created_at.year
    series = monthly_series(company, admin, year, "clients")

    assert len(series) == 12
    # Must count ONCE despite two sources
    assert series[p.created_at.month - 1] == 1
    assert sum(series) == 1


# ---------------------------------------------------------------------------
# Test 3: a parcel in another agency is NOT counted for an agency-scoped user
# ---------------------------------------------------------------------------

def test_clients_parcel_in_other_agency_excluded_for_scoped_user():
    """An agency-scoped user must NOT see parcels from a different agency."""
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route

    company, admin, trip_a, fare_class = _make_company("cm3@x.com")
    ag_a = trip_a.origin.agency
    town = trip_a.origin.town
    ctype = _make_ctype(company, town)

    # Create agency B with its own origin/destination
    ag_b = Agency.objects.create(company=company, name="AgB", code="AGB")
    o_b = ServicePoint.objects.create(
        company=company, town=town, code="OB", name="Origin B", agency=ag_b)
    d_b = ServicePoint.objects.create(
        company=company, town=town, code="DB", name="Dest B", agency=ag_b)

    # Non-admin user scoped ONLY to agency A
    agent_a = User.objects.create_user(
        username="agent_cm3", email="agent_cm3@x.com", password="pw",
        company=company,
        default_agency=ag_a,
        is_institution_admin=False,
    )
    agent_a.agencies.set([ag_a])

    # Passenger with a parcel registered under agency B
    p = Passenger.objects.create(company=company, name="WrongAgency", phone="620000003")
    _link_parcel_sender(company, p, o_b, d_b, ctype)

    year = p.created_at.year
    series = monthly_series(company, agent_a, year, "clients")

    # agent_a is scoped to ag_a only; parcel is in ag_b → not counted
    assert sum(series) == 0


# ---------------------------------------------------------------------------
# Test 4: a baggage-only client IS counted
# ---------------------------------------------------------------------------

def test_clients_includes_baggage_only_sender():
    """A Passenger who sent ONLY a baggage (no ticket) must appear in the clients metric."""
    from apps.voyages_config.models import Town

    company, admin, trip, fare_class = _make_company("cm4@x.com")
    town = trip.origin.town
    ctype = _make_ctype(company, town)

    p = Passenger.objects.create(company=company, name="BaggageOnly", phone="620000004")
    _link_baggage_sender(company, p, trip, ctype)

    year = p.created_at.year
    series = monthly_series(company, admin, year, "clients")

    assert len(series) == 12
    assert series[p.created_at.month - 1] >= 1
    assert sum(series) >= 1


# ---------------------------------------------------------------------------
# Test 5: agency-scoped user sees a parcel-only client in THEIR agency
# ---------------------------------------------------------------------------

def test_clients_parcel_only_visible_to_scoped_user_in_same_agency():
    """A parcel-only Passenger whose parcel is in the agent's agency MUST be counted
    (this is the key regression: old ticket-only code misses this)."""
    from apps.voyages_config.models import Town

    company, admin, trip, fare_class = _make_company("cm5@x.com")
    ag = trip.origin.agency
    town = trip.origin.town
    ctype = _make_ctype(company, town)

    # Non-admin user scoped ONLY to agency A
    agent = User.objects.create_user(
        username="agent_cm5", email="agent_cm5@x.com", password="pw",
        company=company,
        default_agency=ag,
        is_institution_admin=False,
    )
    agent.agencies.set([ag])

    p = Passenger.objects.create(company=company, name="ScopedColisOnly", phone="620000005")
    # Parcel is under ag (trip.origin.agency)
    _link_parcel_sender(company, p, trip.origin, trip.destination, ctype)

    year = p.created_at.year
    series = monthly_series(company, agent, year, "clients")

    assert len(series) == 12
    # Must be counted for this agent's agency
    assert series[p.created_at.month - 1] >= 1
    assert sum(series) >= 1
