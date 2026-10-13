import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup(email="pe@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, RouteStop, FareClass,
                                            SeatingPlan, ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="PECo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    c = ServicePoint.objects.create(company=company, town=town, code="C", name="Gare C")
    x = ServicePoint.objects.create(company=company, town=town, code="X", name="Gare X")
    route = Route.objects.create(company=company, code="A-C", origin=a, destination=c)
    RouteStop.objects.create(company=company, route=route, service_point=b, sequence=1)
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
    trip1 = _trip(route, 0); trip2 = _trip(route, 2); trip_bad = _trip(route2, 0)
    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    parcel = Parcel.objects.create(company=company, status=Parcel.Status.READY_FOR_TRAVEL,
                                   origin_point=a, destination_point=b, consignment_type=ctype,
                                   trip=None, sender_name="E", sender_phone="6",
                                   recipient_name="R", recipient_phone="7", quantity=10)
    return dict(company=company, admin=admin, parcel=parcel, trip1=trip1, trip2=trip2, trip_bad=trip_bad)


@pytest.mark.django_db
def test_ship_two_partials_tracks_remaining():
    from apps.voyages_consignment.services import ship_pieces
    g = _setup()
    p = g["parcel"]
    ship_pieces(p, trip=g["trip1"], quantity=6, user=g["admin"])
    ship_pieces(p, trip=g["trip2"], quantity=4, user=g["admin"])
    p.refresh_from_db()
    assert p.shipped_pieces == 10 and p.remaining_pieces == 0
    assert p.shipments.filter(status="in_transit").count() == 2


@pytest.mark.django_db
def test_partial_transit_status():
    from apps.voyages_consignment.services import ship_pieces
    from apps.voyages_consignment.models import Parcel
    g = _setup("pe5@x.com")
    p = g["parcel"]
    ship_pieces(p, trip=g["trip1"], quantity=6, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.PARTIAL_TRANSIT   # 6/10 → à moitié envoyé
    ship_pieces(p, trip=g["trip2"], quantity=4, user=g["admin"])
    p.refresh_from_db()
    assert p.status == Parcel.Status.IN_TRANSIT        # 10/10 → tout parti


@pytest.mark.django_db
def test_ship_rejects_off_route_and_over_remaining():
    from apps.voyages_consignment.services import ship_pieces
    from apps.core.exceptions import ApplicationError
    g = _setup("pe2@x.com")
    with pytest.raises(ApplicationError):
        ship_pieces(g["parcel"], trip=g["trip_bad"], quantity=1, user=g["admin"])
    ship_pieces(g["parcel"], trip=g["trip1"], quantity=7, user=g["admin"])
    with pytest.raises(ApplicationError):
        ship_pieces(g["parcel"], trip=g["trip2"], quantity=5, user=g["admin"])  # restant = 3


@pytest.mark.django_db
def test_receive_per_shipment_and_incremental_pickup():
    from apps.voyages_consignment.services import ship_pieces, arrive_shipment, receive_shipment, pickup_parcel
    from apps.voyages_consignment.models import Parcel
    g = _setup("pe3@x.com")
    p = g["parcel"]
    s1 = ship_pieces(p, trip=g["trip1"], quantity=6, user=g["admin"])
    s2 = ship_pieces(p, trip=g["trip2"], quantity=4, user=g["admin"])
    # Arrivée + réception du 1er lot (6).
    arrive_shipment(s1, user=g["admin"]); receive_shipment(s1, received_pieces=6, user=g["admin"])
    p.refresh_from_db()
    assert p.received_pieces == 6 and p.status == Parcel.Status.AVAILABLE_FOR_PICKUP
    # Retrait du dispo (6) → pas encore soldé.
    pickup_parcel(p, user=g["admin"]); p.refresh_from_db()
    assert p.picked_up_pieces == 6 and p.status != Parcel.Status.PICKED_UP
    # 2e lot (4) arrive, réceptionné, retiré → soldé.
    arrive_shipment(s2, user=g["admin"]); receive_shipment(s2, received_pieces=4, user=g["admin"])
    pickup_parcel(p, user=g["admin"]); p.refresh_from_db()
    assert p.picked_up_pieces == 10 and p.status == Parcel.Status.PICKED_UP


@pytest.mark.django_db
def test_single_shipment_full_flow_unchanged():
    from apps.voyages_consignment.services import ship_pieces, arrive_shipment, receive_shipment, pickup_parcel
    from apps.voyages_consignment.models import Parcel
    g = _setup("pe4@x.com")
    p = g["parcel"]
    s = ship_pieces(p, trip=g["trip1"], user=g["admin"])  # quantité par défaut = restant (10)
    assert s.quantity == 10
    arrive_shipment(s, user=g["admin"]); receive_shipment(s, received_pieces=10, user=g["admin"])
    pickup_parcel(p, user=g["admin"]); p.refresh_from_db()
    assert p.status == Parcel.Status.PICKED_UP and p.picked_up_pieces == 10
