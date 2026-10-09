import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S


class _Ctx:
    pass


@pytest.fixture
def colis_ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import (Town, ServicePoint, ConsignmentNature,
                                            ConsignmentType)
    c = _Ctx()
    c.company, _ = create_company(name="ColisCo", admin_email="colis@x.com",
                                  admin_first_name="A", admin_last_name="B")
    c.user = User.objects.get(email="colis@x.com")
    town = Town.objects.create(company=c.company, name="Douala")
    from apps.system_config.models import Agency
    hq = Agency.objects.filter(company=c.company).first()
    c.origin = ServicePoint.objects.create(company=c.company, town=town, code="O", name="Agence O")
    # M09 : destination « agence » = lieu rattaché à une agence ; « terminal » = lieu sans agence (livraison refusée).
    c.dest_agency = ServicePoint.objects.create(company=c.company, town=town, code="D", name="Agence D", agency=hq)
    c.dest_terminal = ServicePoint.objects.create(company=c.company, town=town, code="T", name="Gare T")
    nature = ConsignmentNature.objects.create(company=c.company, code="STD", name="Standard")
    c.ctype = ConsignmentType.objects.create(company=c.company, code="CT", label="Type", nature=nature)

    def register_kwargs(destination_terminal=False):
        return dict(
            company=c.company, origin_point=c.origin,
            destination_point=c.dest_terminal if destination_terminal else c.dest_agency,
            consignment_type=c.ctype, sender_name="Exp", sender_phone="600",
            recipient_name="Dest", recipient_phone="601", amount_due=0, user=c.user)

    c.register_kwargs = register_kwargs
    return c


def test_register_lands_ready_for_travel(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    assert p.status == Parcel.Status.READY_FOR_TRAVEL
    assert p.events.filter(to_status="registered").exists()
    assert p.events.filter(to_status="ready_for_travel").exists()


def test_no_voyage_happy_path(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    S.dispatch_parcel(p, user=colis_ctx.user)
    assert p.status == Parcel.Status.IN_TRANSIT and p.dispatched_at
    S.mark_arrived(p, user=colis_ctx.user)
    assert p.status == Parcel.Status.ARRIVED
    S.receive_parcel(p, received_pieces=p.quantity, user=colis_ctx.user)
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP and p.available_at
    S.pickup_parcel(p, picked_up_by="Jean", user=colis_ctx.user)
    assert p.status == Parcel.Status.PICKED_UP


def test_destination_must_be_agency(colis_ctx):
    with pytest.raises(ApplicationError):
        S.register_parcel(**colis_ctx.register_kwargs(destination_terminal=True))


def test_pickup_requires_available(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    with pytest.raises(ApplicationError):
        S.pickup_parcel(p, picked_up_by="Jean", user=colis_ctx.user)


def test_cancel_blocked_after_dispatch(colis_ctx):
    p = S.register_parcel(**colis_ctx.register_kwargs())
    S.dispatch_parcel(p, user=colis_ctx.user)
    with pytest.raises(ApplicationError):
        S.cancel_parcel(p, user=colis_ctx.user)
