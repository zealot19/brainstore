import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone


@pytest.fixture
def booking_world(db):
    """A full modern-stack scenario for public online-booking tests.

    Douala (origin) → Yaoundé (destination), one submitted (bookable) trip with a
    2-seat plan materialised and a one-way fare of 5000 XAF.
    """
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import (
        Town, ServicePoint, FareClass, Route, SeatingPlan,
    )
    from apps.voyages_trips.models import Trip, TripSeat
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare

    company, _ = create_company(name="PWA Co", admin_email="pwa@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="pwa@x.com")

    town_from = Town.objects.create(company=company, name="Douala")
    town_to = Town.objects.create(company=company, name="Yaoundé")
    o = ServicePoint.objects.create(company=company, town=town_from, code="DLA",
                                    name="Gare Douala")
    d = ServicePoint.objects.create(company=company, town=town_to, code="YDE",
                                    name="Gare Yaoundé")
    route = Route.objects.create(company=company, code="DLA-YDE", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="STD", name="Standard")

    plan = SeatingPlan.objects.create(company=company, code="P1", name="Bus 30",
                                      total_seats=2, blocked_seats=0)

    dep = timezone.now() + timedelta(days=1)
    trip = Trip.objects.create(company=company, route=route, fare_class=fc,
                               origin=o, destination=d, seating_plan=plan,
                               scheduled_departure=dep,
                               scheduled_arrival=dep + timedelta(hours=4),
                               status="pending")
    materialise_seats(trip)
    Fare.objects.create(company=company, route=route, origin_point=o, destination_point=d,
                        fare_class=fc, trip_type="one_way", amount=Decimal("5000"))

    seat = TripSeat.objects.filter(trip=trip).order_by("column").first()
    return {"company": company, "admin": admin, "town_from": town_from, "town_to": town_to,
            "o": o, "d": d, "route": route, "fc": fc, "trip": trip, "seat": seat}
