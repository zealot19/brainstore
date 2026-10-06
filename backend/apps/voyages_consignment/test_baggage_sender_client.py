import pytest
from apps.system_config.services import create_company
from apps.voyages_booking.models import Passenger


def make_trip_for_baggage():
    """Build the minimal graph needed to register a baggage on a trip:
    company, two ServicePoints (origin / destination), a ConsignmentType,
    and a Trip.  Returns dict with company/trip/ctype/user."""
    from apps.authentication.models import User
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType, Route, SeatingPlan, PlanSeat, FareClass
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from django.utils import timezone
    from datetime import timedelta

    company, _ = create_company(name="BagSenderCo", admin_email="bagsender@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="bagsender@x.com")

    town = Town.objects.create(company=company, name="Douala")
    origin = ServicePoint.objects.create(
        company=company, town=town, code="ORG", name="Gare Origine")
    destination = ServicePoint.objects.create(
        company=company, town=town, code="DST", name="Gare Destination")

    route = Route.objects.create(company=company, code="ORG-DST", origin=origin, destination=destination)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", rows=1, columns=2, total_seats=2)
    for i in range(2):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"S{i+1}",
                                row=1, column=i + 1, seat_type="standard", is_sellable=True)

    now = timezone.now()
    trip = Trip.objects.create(
        company=company, route=route, fare_class=fc, origin=origin, destination=destination,
        seating_plan=plan,
        scheduled_departure=now + timedelta(days=1),
        scheduled_arrival=now + timedelta(days=1, hours=3),
        status="pending")
    materialise_seats(trip)

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Standard", nature=nature)

    return {"company": company, "trip": trip, "ctype": ctype, "user": user}


@pytest.mark.django_db
def test_add_baggage_links_sender_client():
    ctx = make_trip_for_baggage()      # {company, trip, ctype, user}
    from apps.voyages_consignment.services.baggage_services import add_baggage
    b = add_baggage(ctx["company"], trip=ctx["trip"], consignment_type=ctx["ctype"],
                    sender_name="Awa Diallo", sender_phone="620111222", civility="mrs",
                    id_type="cni", id_number="CNI-9", declared_value=1, user=ctx["user"])
    assert b.sender_client is not None
    assert b.sender_client.civility == "mrs"
    assert b.sender_client.name == "Awa Diallo"
