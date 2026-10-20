import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S
from apps.voyages_consignment.config_api.serializers import ParcelWrite


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import (Town, ServicePoint, ConsignmentNature, ConsignmentType)
    company, _ = create_company(name="ColisCo", admin_email="co@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="co@x.com")
    town = Town.objects.create(company=company, name="Douala")
    from apps.system_config.models import Agency
    hq = Agency.objects.filter(company=company).first()
    origin = ServicePoint.objects.create(company=company, town=town, code="O", name="Ag O")
    dest = ServicePoint.objects.create(company=company, town=town, code="D", name="Ag D", agency=hq)
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    other_nat = ConsignmentNature.objects.create(company=company, code="FRG", name="Fragile")
    typ = ConsignmentType.objects.create(company=company, code="CT", label="Carton", nature=nat)
    return company, user, origin, dest, nat, other_nat, typ


def test_model_has_content_and_nature():
    fields = {f.name for f in Parcel._meta.get_fields()}
    assert "content" in fields and "nature" in fields


def test_parcel_write_requires_description_and_content():
    # #7 : la nature a été retirée du formulaire -> nature_id devient facultatif.
    s = ParcelWrite()
    assert s.fields["description"].required
    assert s.fields["content"].required
    assert not s.fields["nature_id"].required


@pytest.mark.django_db
def test_register_parcel_persists_content_and_nature(ctx):
    company, user, origin, dest, nat, other_nat, typ = ctx
    p = S.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="Vêtements",
                          sender_name="Exp", sender_phone="600",
                          recipient_name="Dest", recipient_phone="601",
                          description="Carton 1", amount_due=0, user=user)
    assert p.content == "Vêtements" and p.nature_id == nat.id


@pytest.mark.django_db
def test_type_outside_nature_rejected(ctx):
    company, user, origin, dest, nat, other_nat, typ = ctx
    with pytest.raises(ApplicationError):
        S.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=other_nat, content="x",
                          sender_name="Exp", sender_phone="600",
                          recipient_name="Dest", recipient_phone="601",
                          description="d", amount_due=0, user=user)


def test_edit_serializer_rejects_blank_description_or_content():
    from apps.voyages_consignment.config_api.serializers import ParcelEditSerializer
    assert not ParcelEditSerializer(data={"description": "", "content": "x"}, partial=True).is_valid()
    assert not ParcelEditSerializer(data={"description": "ok", "content": ""}, partial=True).is_valid()
