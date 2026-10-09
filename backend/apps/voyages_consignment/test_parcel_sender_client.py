import pytest
from decimal import Decimal
from apps.system_config.services import create_company
from apps.voyages_booking.models import Passenger
from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType


def make_parcel_prereqs():
    """Build the minimal graph needed to register a parcel: company, origin ServicePoint,
    destination ServicePoint (station_kind="AGENCY"), and a ConsignmentType whose
    nature.is_prohibited is False.  Returns dict with company/origin/destination/ctype/user."""
    company, _ = create_company(name="ParcelSenderCo", admin_email="parcelsender@x.com",
                                admin_first_name="A", admin_last_name="B")
    from apps.authentication.models import User
    user = User.objects.get(email="parcelsender@x.com")
    town = Town.objects.create(company=company, name="Yaoundé")
    from apps.system_config.models import Agency
    hq = Agency.objects.filter(company=company).first()
    origin = ServicePoint.objects.create(
        company=company, town=town, code="ORG", name="Agence Origine")
    destination = ServicePoint.objects.create(
        company=company, town=town, code="DST", name="Agence Destination", agency=hq)
    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Standard", nature=nature)
    return {"company": company, "origin": origin, "destination": destination,
            "ctype": ctype, "user": user}


@pytest.mark.django_db
def test_register_parcel_links_sender_client():
    ctx = make_parcel_prereqs()
    from apps.voyages_consignment.services.parcel_services import register_parcel
    # amount_due=0 bypasses the treasury caisse session requirement (no cash movement needed)
    p = register_parcel(ctx["company"], origin_point=ctx["origin"], destination_point=ctx["destination"],
                        consignment_type=ctx["ctype"], sender_name="Awa Diallo", sender_phone="620111222",
                        sender_civility="mrs", sender_id_type="cni", sender_id_number="CNI-1",
                        recipient_name="Moussa", recipient_phone="620333444",
                        amount_due=Decimal("0"), user=ctx["user"])
    assert p.sender_client is not None
    assert p.sender_client.civility == "mrs"
    assert p.sender_client.name == "Awa Diallo"


@pytest.mark.django_db
def test_register_parcel_dedups_sender():
    ctx = make_parcel_prereqs()
    from apps.voyages_consignment.services.parcel_services import register_parcel
    kw = dict(origin_point=ctx["origin"], destination_point=ctx["destination"], consignment_type=ctx["ctype"],
              sender_name="Awa", sender_phone="620111222", sender_id_type="cni", sender_id_number="CNI-1",
              recipient_name="M", recipient_phone="1", amount_due=Decimal("0"), user=ctx["user"])
    p1 = register_parcel(ctx["company"], **kw)
    p2 = register_parcel(ctx["company"], **kw)
    assert p1.sender_client_id == p2.sender_client_id
    assert Passenger.objects.filter(company=ctx["company"]).count() == 1
