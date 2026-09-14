import pytest
from datetime import timedelta
from django.utils import timezone


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, FareClass, Route, SeatingPlan, PlanSeat,
                                            CrewMemberType)
    from apps.voyages_trips.models import CrewMember
    from apps.authentication.models import User
    company, _ = create_company(name="ClCo", admin_email="cl@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cl@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="BUS09", name="Bus 9", rows=1, columns=9, total_seats=9)
    for i in range(9):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"S{i+1}", row=1, column=i + 1,
                                seat_type="standard", is_sellable=True)
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    member = CrewMember.objects.create(company=company, name="Chauffeur A", member_type=mt, created_by=admin)
    return company, admin, route, fc, plan, member


def _mk(company, admin, route, fc, plan, **kw):
    from apps.voyages_trips.services.trip_services import create_trip
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=plan, user=admin, **kw)


@pytest.mark.django_db
def test_blocked_seats_and_crew_at_creation():
    from apps.voyages_trips.models import TripSeat, TripCrew
    company, admin, route, fc, plan, member = _setup()
    trip = _mk(company, admin, route, fc, plan, blocked_seats_count=2, crew_member_ids=[str(member.id)])
    assert trip.blocked_seats_count == 2
    assert trip.seats.filter(status=TripSeat.Status.BLOCKED).count() == 2
    assert trip.seats.filter(status=TripSeat.Status.AVAILABLE).count() == 7
    assert TripCrew.objects.filter(trip=trip, member=member).count() == 1


@pytest.mark.django_db
def test_max_reservations_derived_from_plan_and_sellable_minus_blocked():
    company, admin, route, fc, plan, member = _setup()  # plan = 9 seats
    trip = _mk(company, admin, route, fc, plan, blocked_seats_count=2, max_reservations=1)
    # Autorisées = capacité de la charte (9), pas la valeur saisie par l'agent (1).
    assert trip.max_reservations == 9
    # Places en vente = autorisées - bloquées = 7 (sièges AVAILABLE).
    assert trip.seats.filter(status="available").count() == trip.max_reservations - trip.blocked_seats_count == 7
