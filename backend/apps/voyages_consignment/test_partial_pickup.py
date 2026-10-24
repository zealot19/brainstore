"""Retrait partiel de colis + option « retrait partiel autorisé »."""
import pytest
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError


def _setup(email):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, FareClass,
                                            SeatingPlan, ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="PPCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(offset):
        dep = now + timedelta(days=offset)
        t = Trip.objects.create(company=company, route=route, fare_class=eco, origin=a,
                                destination=b, seating_plan=plan, scheduled_departure=dep,
                                scheduled_arrival=dep + timedelta(hours=3), status="pending")
        materialise_seats(t)
        return t
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Std")
    ct = ConsignmentType.objects.create(company=company, code="CT", label="T", nature=nat)
    parcel = Parcel.objects.create(company=company, status=Parcel.Status.READY_FOR_TRAVEL,
                                   origin_point=a, destination_point=b, consignment_type=ct,
                                   sender_name="E", sender_phone="6", recipient_name="R",
                                   recipient_phone="7", recipient_id_number="CNI1", quantity=10)
    return dict(company=company, admin=admin, parcel=parcel, trip1=_trip(0), trip2=_trip(2))


def _receive_first_six(g):
    """Expédie 6+4, achemine, et réceptionne les 6 premières pièces (une seule expédition)."""
    from apps.voyages_consignment.services import (create_shipment, validate_shipment, load_shipment,
                                                   dispatch_shipment, arrive_shipment, receive_shipment)
    p, admin = g["parcel"], g["admin"]
    s1 = create_shipment(p, trip=g["trip1"], quantity=6, user=admin)
    validate_shipment(s1, user=admin)
    s2 = create_shipment(p, trip=g["trip2"], quantity=4, user=admin)
    validate_shipment(s2, user=admin)
    for s in (s1, s2):
        load_shipment(s, user=admin); dispatch_shipment(s, user=admin)
    arrive_shipment(s1, user=admin)
    receive_shipment(s1, received_pieces=6, user=admin)
    p.refresh_from_db()
    return p


@pytest.mark.django_db
def test_partial_pickup_allowed_by_default():
    from apps.voyages_consignment.services import pickup_parcel
    from apps.voyages_consignment.models import Parcel
    g = _setup("pp1@x.com")
    p = _receive_first_six(g)
    # 6 pièces reçues sur 10 -> disponible au retrait (option ON par défaut).
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP
    # Retrait partiel de 4 pièces : il reste 2 disponibles -> toujours disponible.
    pickup_parcel(p, picked_up_kind="destinataire", quantity=4, user=g["admin"])
    p.refresh_from_db()
    assert p.picked_up_pieces == 4
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP
    # Trop demander échoue (2 dispo).
    with pytest.raises(ApplicationError):
        pickup_parcel(p, picked_up_kind="destinataire", quantity=5, user=g["admin"])


@pytest.mark.django_db
def test_full_arrival_required_blocks_partial():
    from apps.voyages_consignment.services import pickup_parcel
    from apps.voyages_consignment.models import Parcel
    from apps.voyages_config.models import VoyagesSettings
    g = _setup("pp2@x.com")
    VoyagesSettings.objects.update_or_create(company=g["company"],
                                             defaults={"allow_partial_pickup": False})
    p = _receive_first_six(g)
    # 6/10 reçues mais tout n'est pas arrivé -> PAS disponible (reste en transit).
    assert p.status == Parcel.Status.IN_TRANSIT
    with pytest.raises(ApplicationError):
        pickup_parcel(p, picked_up_kind="destinataire", quantity=1, user=g["admin"])
