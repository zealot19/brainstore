"""Cloisonnement par agence des colis : un colis va de A (origine) vers B (destination).
Seules A et B le voient ; seule B peut réceptionner / remettre. L'admin institution voit tout."""
import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment import selectors
from apps.voyages_consignment.services import parcel_services

pytestmark = pytest.mark.django_db


def _company(email="scope@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="ScopeCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _agencies(company):
    from apps.system_config.models import Agency
    a = Agency.objects.create(company=company, name="Douala", code="DLA")
    b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    c = Agency.objects.create(company=company, name="Bafoussam", code="BAF")
    return a, b, c


def _points(company, a, b):
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    town = Town.objects.create(company=company, name="T")
    sp_a = ServicePoint.objects.create(company=company, town=town, code="PA", name="Point A", agency=a)
    sp_b = ServicePoint.objects.create(company=company, town=town, code="PB", name="Point B", agency=b)
    nature = ConsignmentNature.objects.create(company=company, code="GEN", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="STD", label="Standard", nature=nature)
    return sp_a, sp_b, ct


def _user(admin, company, email, agency):
    from apps.users.services.user_services import create_user
    u, _ = create_user(created_by=admin, company=company, email=email, first_name="S", last_name="T",
                       is_institution_admin=False, default_agency_id=agency.id, agency_ids=[agency.id])
    return u


def _parcel(company, sp_a, sp_b, ct, status=Parcel.Status.AVAILABLE_FOR_PICKUP, **kw):
    defaults = dict(company=company, agency=sp_a.agency, reference="COL/1", status=status,
                    origin_point=sp_a, destination_point=sp_b, consignment_type=ct,
                    sender_name="S", sender_phone="1", recipient_name="R", recipient_phone="2")
    defaults.update(kw)
    return Parcel.objects.create(**defaults)


def _setup(email="scope@x.com"):
    company, admin = _company(email)
    a, b, c = _agencies(company)
    sp_a, sp_b, ct = _points(company, a, b)
    return company, admin, a, b, c, sp_a, sp_b, ct


# ── Visibilité (A et B seulement) ────────────────────────────────────────────

def test_origin_and_destination_agencies_see_parcel():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup()
    p = _parcel(company, sp_a, sp_b, ct)
    user_a = _user(admin, company, "ua@x.com", a)
    user_b = _user(admin, company, "ub@x.com", b)
    ids_a = list(selectors.list_parcels(company, user=user_a).values_list("id", flat=True))
    ids_b = list(selectors.list_parcels(company, user=user_b).values_list("id", flat=True))
    assert p.id in ids_a
    assert p.id in ids_b


def test_third_agency_does_not_see_parcel():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope2@x.com")
    p = _parcel(company, sp_a, sp_b, ct)
    user_c = _user(admin, company, "uc@x.com", c)
    ids_c = list(selectors.list_parcels(company, user=user_c).values_list("id", flat=True))
    assert p.id not in ids_c
    assert selectors.parcel_detail(company, p.id, user_c) is None
    assert selectors.parcel_detail(company, p.id, user_a := _user(admin, company, "ua2@x.com", a)) is not None


def test_institution_admin_sees_all():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope3@x.com")
    p = _parcel(company, sp_a, sp_b, ct)
    ids = list(selectors.list_parcels(company, user=admin).values_list("id", flat=True))
    assert p.id in ids


# ── Réception / retrait : agence de destination (B) uniquement ───────────────

def test_origin_agency_cannot_receive():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope4@x.com")
    p = _parcel(company, sp_a, sp_b, ct, status=Parcel.Status.ARRIVED)
    user_a = _user(admin, company, "ua4@x.com", a)
    with pytest.raises(ApplicationError):
        parcel_services.receive_parcel(p, received_pieces=1, user=user_a)


def test_destination_agency_can_receive():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope5@x.com")
    p = _parcel(company, sp_a, sp_b, ct, status=Parcel.Status.ARRIVED)
    user_b = _user(admin, company, "ub5@x.com", b)
    parcel_services.receive_parcel(p, received_pieces=1, user=user_b)
    p.refresh_from_db()
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP


def test_origin_agency_cannot_pickup():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope6@x.com")
    p = _parcel(company, sp_a, sp_b, ct)  # AVAILABLE_FOR_PICKUP
    user_a = _user(admin, company, "ua6@x.com", a)
    with pytest.raises(ApplicationError):
        parcel_services.pickup_parcel(p, user=user_a)


def test_destination_agency_can_pickup():
    company, admin, a, b, c, sp_a, sp_b, ct = _setup("scope7@x.com")
    p = _parcel(company, sp_a, sp_b, ct)  # AVAILABLE_FOR_PICKUP, recipient preset
    user_b = _user(admin, company, "ub7@x.com", b)
    parcel_services.pickup_parcel(p, user=user_b)
    p.refresh_from_db()
    assert p.status == Parcel.Status.PICKED_UP
