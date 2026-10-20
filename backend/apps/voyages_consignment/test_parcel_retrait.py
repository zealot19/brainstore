import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel


def _company(email="rt@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="RetraitCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _refs(company):
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    nature = ConsignmentNature.objects.create(company=company, code="GEN", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="STD", label="Standard", nature=nature)
    return a, b, ct


def _parcel(company, **kw):
    a, b, ct = _refs(company)
    defaults = dict(company=company, reference="COL/1", status=Parcel.Status.AVAILABLE_FOR_PICKUP,
                    origin_point=a, destination_point=b, consignment_type=ct,
                    sender_name="S", sender_phone="1")
    defaults.update(kw)
    return Parcel.objects.create(**defaults)


@pytest.mark.django_db
def test_pickup_with_recipient_preset_confirms():
    from apps.voyages_consignment.services.parcel_services import pickup_parcel
    company, admin = _company()
    p = _parcel(company, recipient_name="Bob", recipient_phone="690")
    pickup_parcel(p, user=admin)
    p.refresh_from_db()
    assert p.status == Parcel.Status.PICKED_UP
    assert p.picked_up_by == "Bob"
    assert p.picked_up_kind == Parcel.PickupKind.DESTINATAIRE


@pytest.mark.django_db
def test_pickup_without_recipient_as_destinataire_backfills():
    from apps.voyages_consignment.services.parcel_services import pickup_parcel
    company, admin = _company("rt2@x.com")
    p = _parcel(company, recipient_name="", recipient_phone="")
    pickup_parcel(p, picked_up_by="Alice", picked_up_phone="691", picked_up_id_number="CNI123",
                  picked_up_kind="destinataire", user=admin)
    p.refresh_from_db()
    assert p.status == Parcel.Status.PICKED_UP
    assert p.recipient_name == "Alice" and p.recipient_phone == "691" and p.recipient_id_number == "CNI123"
    assert p.picked_up_kind == Parcel.PickupKind.DESTINATAIRE


@pytest.mark.django_db
def test_pickup_without_recipient_as_mandataire_keeps_recipient_empty():
    from apps.voyages_consignment.services.parcel_services import pickup_parcel
    company, admin = _company("rt3@x.com")
    p = _parcel(company, recipient_name="", recipient_phone="")
    pickup_parcel(p, picked_up_by="Proxy", picked_up_phone="692", picked_up_id_number="CNI999",
                  picked_up_kind="mandataire", user=admin)
    p.refresh_from_db()
    assert p.picked_up_kind == Parcel.PickupKind.MANDATAIRE
    assert p.picked_up_by == "Proxy" and p.picked_up_phone == "692"
    assert p.recipient_name == ""  # non renseigné pour un mandataire


@pytest.mark.django_db
def test_pickup_without_recipient_requires_name_phone_id():
    from apps.voyages_consignment.services.parcel_services import pickup_parcel
    company, admin = _company("rt4@x.com")
    p = _parcel(company, recipient_name="", recipient_phone="")
    with pytest.raises(ApplicationError):
        pickup_parcel(p, picked_up_by="X", picked_up_phone="", picked_up_id_number="",
                      picked_up_kind="mandataire", user=admin)


@pytest.mark.django_db
def test_create_parcel_without_recipient_via_api():
    from rest_framework.test import APIClient
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    company, admin = _company("rt5@x.com")
    ag = Agency.objects.filter(company=company).first()
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Agence B", agency=ag)
    nature = ConsignmentNature.objects.create(company=company, code="GEN", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="STD", label="Standard", nature=nature)
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/voyages/consignment/parcels/", {
        "origin_point_id": str(a.id), "destination_point_id": str(b.id),
        "consignment_type_id": str(ct.id), "sender_name": "S", "sender_phone": "1",
        "description": "Carton", "content": "Divers",  # obligatoires (M24), indépendants du destinataire
        "amount_due": "0",  # 0 → pas d'encaissement, pas de session requise
    }, format="json")
    assert r.status_code in (200, 201), r.content
