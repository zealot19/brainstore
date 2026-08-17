import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User
from apps.treasury.models import Transaction


def _route_fc(company):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest", is_station=True)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    return route, fc


@pytest.mark.django_db
def test_recapitulatif_margin():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    from apps.voyages_booking.models import Passenger, Booking
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="Rec Co", admin_email="rec@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rec@x.com")
    route, fc = _route_fc(company)
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    p = Passenger.objects.create(company=company, first_name="A", last_name="B", phone="600000000")
    booking = Booking.objects.create(company=company, outbound_trip=trip, buyer=p)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                             category=Transaction.Category.TICKET_SALES, account_type=Transaction.AccountType.CASH,
                             cash_session=session, amount=Decimal("10000"),
                             payment_mode=Transaction.PaymentMode.CASH, created_by=admin)
    txn.voyage_booking = booking
    txn.save(update_fields=["voyage_booking"])
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("3000"),
                               status=TripExpense.Status.PAID, created_by=admin)
    result = REPORTS["recapitulatif"]["build"](company, {"date_from": None, "date_to": None, "vehicle": None})
    row = result.groups[0].rows[0]
    assert row["voyage"] == Decimal("10000")
    assert row["depense"] == Decimal("3000")
    assert row["marge"] == Decimal("7000")
    assert result.totals["marge"] == Decimal("7000")
