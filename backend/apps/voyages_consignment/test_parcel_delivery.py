import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S


@pytest.mark.django_db
def test_parcel_has_delivery_fields():
    fields = {f.name for f in Parcel._meta.get_fields()}
    assert {"delivery_amount", "delivery_address", "delivery_payment_method",
            "delivered_home_at", "delivered_home_by"} <= fields


class _Ctx:
    pass


@pytest.fixture
def colis_ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    from apps.treasury.services.services import create_cash_register, open_session
    c = _Ctx()
    c.company, _ = create_company(name="DelivFlow", admin_email="delivflow@x.com",
                                  admin_first_name="A", admin_last_name="B")
    c.user = User.objects.get(email="delivflow@x.com")
    town = Town.objects.create(company=c.company, name="Douala")
    c.origin = ServicePoint.objects.create(company=c.company, town=town, code="O", name="Agence O",
                                           is_station=True, station_kind="AGENCY")
    c.dest = ServicePoint.objects.create(company=c.company, town=town, code="D", name="Agence D",
                                         is_station=True, station_kind="AGENCY")
    nature = ConsignmentNature.objects.create(company=c.company, code="STD", name="Standard")
    c.ctype = ConsignmentType.objects.create(company=c.company, code="CT", label="Type", nature=nature)
    reg = create_cash_register(company=c.company, name="C1", created_by=c.user)
    open_session(company=c.company, cash_register=reg, created_by=c.user)

    def register():
        return S.register_parcel(
            company=c.company, origin_point=c.origin, destination_point=c.dest,
            consignment_type=c.ctype, sender_name="Exp", sender_phone="600",
            recipient_name="Dest", recipient_phone="601", amount_due=0, user=c.user)

    c.register = register
    return c


def _to_available(ctx):
    p = ctx.register()
    S.dispatch_parcel(p, user=ctx.user)
    S.mark_arrived(p, user=ctx.user)
    S.receive_parcel(p, received_pieces=p.quantity, user=ctx.user)
    assert p.status == Parcel.Status.AVAILABLE_FOR_PICKUP
    return p


def test_deliver_home_marks_picked_up_and_stores_fields(colis_ctx):
    p = _to_available(colis_ctx)
    p = S.deliver_parcel_home(p, delivery_amount=Decimal("2000"),
                              delivery_address="Bonapriso, Douala",
                              payment_method="cash", user=colis_ctx.user)
    assert p.status == Parcel.Status.PICKED_UP
    assert p.delivery_amount == Decimal("2000")
    assert p.delivery_address == "Bonapriso, Douala"
    assert p.delivered_home_at is not None
    assert p.delivered_home_by_id == colis_ctx.user.id
    assert Transaction.objects.filter(
        company=colis_ctx.company, category=Transaction.Category.PARCEL_DELIVERY,
        amount=Decimal("2000"), is_deleted=False).exists()


def test_deliver_home_stores_receiver_name_and_id(colis_ctx):
    p = _to_available(colis_ctx)
    p = S.deliver_parcel_home(p, delivery_amount=Decimal("2000"),
                              delivered_to="Jean Mandataire", delivered_to_id="CNI-ZX9",
                              payment_method="cash", user=colis_ctx.user)
    assert p.picked_up_by == "Jean Mandataire"
    assert p.picked_up_id_number == "CNI-ZX9"


def test_deliver_home_defaults_receiver_to_recipient(colis_ctx):
    # When no explicit receiver is entered, fall back to the registered recipient name.
    p = _to_available(colis_ctx)
    p = S.deliver_parcel_home(p, delivery_amount=Decimal("2000"), user=colis_ctx.user)
    assert p.picked_up_by == "Dest"


def test_deliver_home_rejected_when_not_available(colis_ctx):
    p = colis_ctx.register()  # status ready_for_travel, not available
    with pytest.raises(ApplicationError):
        S.deliver_parcel_home(p, delivery_amount=Decimal("2000"), user=colis_ctx.user)


def test_list_parcels_delivered_home_and_payment_filters(colis_ctx):
    from apps.voyages_consignment.selectors import list_parcels
    p1 = _to_available(colis_ctx)
    p2 = _to_available(colis_ctx)
    S.deliver_parcel_home(p1, delivery_amount=Decimal("2000"), delivery_address="Akwa",
                          payment_method="cash", user=colis_ctx.user)

    delivered = [p.id for p in list_parcels(colis_ctx.company, delivered_home=True)]
    assert delivered == [p1.id]

    awaiting = [p.id for p in list_parcels(colis_ctx.company, status="available_for_pickup")]
    assert p2.id in awaiting and p1.id not in awaiting

    by_cash = [p.id for p in list_parcels(colis_ctx.company, delivered_home=True, delivery_payment_method="cash")]
    assert by_cash == [p1.id]
    assert list(list_parcels(colis_ctx.company, delivered_home=True, delivery_payment_method="mobile_money")) == []


def test_list_parcels_delivered_date_field(colis_ctx):
    from apps.voyages_consignment.selectors import list_parcels
    p1 = _to_available(colis_ctx)
    S.deliver_parcel_home(p1, delivery_amount=Decimal("2000"), payment_method="cash", user=colis_ctx.user)
    today = p1.delivered_home_at.date().isoformat()
    got = [p.id for p in list_parcels(colis_ctx.company, delivered_home=True,
                                      date_field="delivered", date_from=today, date_to=today)]
    assert got == [p1.id]
