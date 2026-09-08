import pytest
from apps.system_config.models import Agency
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.treasury.services import create_cash_register, open_session
from apps.treasury.models import Transaction

pytestmark = pytest.mark.django_db


def test_transaction_stamped_with_register_agency():
    company, admin, trip = _setup()
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    reg = create_cash_register(company=company, name="C1", created_by=admin, agency_id=ag.id)
    open_session(company=company, cash_register=reg, created_by=admin)
    # a booking cash sale records an income Transaction
    from apps.voyages_booking.tests_integration_treasury import _book
    _book(company, admin, trip)
    txn = Transaction.objects.filter(company=company, agency=ag).first()
    assert txn is not None and txn.agency_id == ag.id


def test_parcel_stamped_with_origin_agency():
    company, admin, trip = _setup()
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    o = trip.origin
    o.agency = ag
    o.save(update_fields=["agency"])
    reg = create_cash_register(company=company, name="C1", created_by=admin, agency_id=ag.id)
    open_session(company=company, cash_register=reg, created_by=admin)
    from decimal import Decimal
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    from apps.voyages_consignment.services.parcel_services import register_parcel
    nature = ConsignmentNature.objects.create(company=company, code="N", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="CT", label="Colis", nature=nature)
    parcel = register_parcel(
        company, origin_point=o, destination_point=trip.destination, consignment_type=ct,
        sender_name="S", sender_phone="1", recipient_name="R", recipient_phone="2",
        amount_due=Decimal("2000"), payment_method="cash", user=admin)
    assert parcel.agency_id == ag.id
