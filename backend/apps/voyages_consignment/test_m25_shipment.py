import pytest
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup(email="m25@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, RouteStop, FareClass,
                                            SeatingPlan, ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="M25Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    c = ServicePoint.objects.create(company=company, town=town, code="C", name="Gare C")
    x = ServicePoint.objects.create(company=company, town=town, code="X", name="Gare X")
    # Route A → (escale B) → C : dessert A→B, A→C, B→C
    route = Route.objects.create(company=company, code="A-C", origin=a, destination=c)
    RouteStop.objects.create(company=company, route=route, service_point=b, sequence=1)
    # Route X → C : ne dessert PAS A→B
    route2 = Route.objects.create(company=company, code="X-C", origin=x, destination=c)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(rte, offset):
        dep = now + timedelta(days=offset)
        t = Trip.objects.create(company=company, route=rte, fare_class=eco, origin=rte.origin,
                                destination=rte.destination, seating_plan=plan,
                                scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                                status="pending")
        materialise_seats(t)
        return t
    trip1 = _trip(route, 0)
    trip2 = _trip(route, 2)
    trip_bad = _trip(route2, 0)

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    # Colis A → B, 10 pièces
    parcel = Parcel.objects.create(company=company, status=Parcel.Status.READY_FOR_TRAVEL,
                                   origin_point=a, destination_point=b, consignment_type=ctype,
                                   trip=None, sender_name="E", sender_phone="6",
                                   recipient_name="R", recipient_phone="7", quantity=10)
    return dict(company=company, admin=admin, parcel=parcel, trip1=trip1, trip2=trip2, trip_bad=trip_bad)


@pytest.mark.django_db
def test_create_shipment_rejects_trip_not_covering_route():
    from apps.voyages_consignment.services import create_shipment
    from apps.core.exceptions import ApplicationError
    g = _setup()
    with pytest.raises(ApplicationError):
        create_shipment(g["parcel"], trip=g["trip_bad"], quantity=5, user=g["admin"])


@pytest.mark.django_db
def test_create_shipment_blocks_over_remaining():
    from apps.voyages_consignment.services import create_shipment, validate_shipment
    from apps.core.exceptions import ApplicationError
    g = _setup("m25b@x.com")
    s1 = create_shipment(g["parcel"], trip=g["trip1"], quantity=7, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    g["parcel"].refresh_from_db()
    assert g["parcel"].shipped_pieces == 7 and g["parcel"].remaining_pieces == 3
    with pytest.raises(ApplicationError):
        create_shipment(g["parcel"], trip=g["trip2"], quantity=5, user=g["admin"])  # > 3 restant


@pytest.mark.django_db
def test_primary_trip_and_full_lifecycle():
    from apps.voyages_consignment.services import (create_shipment, validate_shipment, load_shipment,
                                                   dispatch_shipment, arrive_shipment)
    from apps.voyages_consignment.models import Parcel
    g = _setup("m25c@x.com")
    p = g["parcel"]
    s1 = create_shipment(p, trip=g["trip1"], quantity=6, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    p.refresh_from_db()
    assert p.trip_id == g["trip1"].id          # voyage primaire posé
    s2 = create_shipment(p, trip=g["trip2"], quantity=4, user=g["admin"])
    validate_shipment(s2, user=g["admin"])
    p.refresh_from_db()
    assert p.trip_id == g["trip1"].id          # inchangé (primaire = 1ʳᵉ validée)
    for s in (s1, s2):
        load_shipment(s, user=g["admin"]); dispatch_shipment(s, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.IN_TRANSIT
    arrive_shipment(s1, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.IN_TRANSIT   # pas encore tout arrivé
    arrive_shipment(s2, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.ARRIVED      # tout arrivé


@pytest.mark.django_db
def test_receive_blocked_until_all_arrived():
    from apps.voyages_consignment.services import create_shipment, validate_shipment
    from apps.voyages_consignment.services.parcel_services import receive_parcel
    from apps.core.exceptions import ApplicationError
    g = _setup("m25d@x.com")
    s1 = create_shipment(g["parcel"], trip=g["trip1"], quantity=10, user=g["admin"])
    validate_shipment(s1, user=g["admin"])
    with pytest.raises(ApplicationError):
        receive_parcel(g["parcel"], received_pieces=10, user=g["admin"])
