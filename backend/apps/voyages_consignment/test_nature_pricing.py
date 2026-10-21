import pytest
from decimal import Decimal
from apps.system_config.models import Company
from apps.voyages_config.models import ConsignmentNature, ConsignmentType, ServicePoint
from apps.system_config.models import Agency
from apps.treasury.models import PaymentMethod
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment import services

pytestmark = pytest.mark.django_db


def _setup(fixed=None, lo=None, hi=None):
    c = Company.objects.create(name="ACME", slug="acme")
    a1 = Agency.objects.create(company=c, name="A1", code="A1")
    a2 = Agency.objects.create(company=c, name="A2", code="A2")
    o = ServicePoint.objects.create(company=c, name="O", agency=a1)
    d = ServicePoint.objects.create(company=c, name="D", agency=a2)
    # Mode sans encaissement : évite d'ouvrir une session de caisse dans le test.
    PaymentMethod.objects.create(company=c, code="free", name="Gratuit", requires_payment=False)
    nat = ConsignmentNature.objects.create(company=c, code="N", name="Normal",
                                           fixed_price=fixed, min_price=lo, max_price=hi)
    typ = ConsignmentType.objects.create(company=c, code="T", label="T", nature=nat)
    return c, o, d, typ


def _reg(c, o, d, typ, amount):
    return services.register_parcel(
        c, origin_point=o, destination_point=d, consignment_type=typ,
        content="x", sender_name="S", sender_phone="1", recipient_name="R",
        recipient_phone="2", recipient_id_number="ID", amount_due=amount,
        payment_method="free", user=None)


def test_fixed_price_overrides_amount():
    c, o, d, typ = _setup(fixed=Decimal("1500"))
    p = _reg(c, o, d, typ, amount=50)   # tente 50, mais prix fixe = 1500
    assert p.amount_due == Decimal("1500")


def test_min_max_range_enforced():
    c, o, d, typ = _setup(lo=Decimal("1000"), hi=Decimal("2000"))
    assert _reg(c, o, d, typ, amount=1500).amount_due == Decimal("1500")
    with pytest.raises(ApplicationError):
        _reg(c, o, d, typ, amount=500)    # sous le minimum
    with pytest.raises(ApplicationError):
        _reg(c, o, d, typ, amount=2500)   # au-dessus du maximum


def test_no_pricing_is_free():
    c, o, d, typ = _setup()
    assert _reg(c, o, d, typ, amount=777).amount_due == Decimal("777")
