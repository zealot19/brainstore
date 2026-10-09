import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _route_fc(company):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    return route, fc


@pytest.mark.django_db
def test_depense_report_totals_paid_only():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="D Co", admin_email="d@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="d@x.com")
    route, fc = _route_fc(company)
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    exp = TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("15000"), created_by=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    disburse_trip_expense(exp, user=admin)
    result = REPORTS["depense"]["build"](company, {"date_from": None, "date_to": None, "agency": None,
                                                   "register": None, "vehicle": None})
    assert result.totals["montant"] == Decimal("15000")
    assert result.groups[0].rows[0]["cat"] == "Carburant"


@pytest.mark.django_db
def test_depense_includes_general_and_refund():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    from apps.treasury.models import GeneralExpense, Transaction
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="Dep Co", admin_email="depc@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="depc@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    et = ExpenseType.objects.filter(company=company).first() or ExpenseType.objects.create(
        company=company, code="DIV", name="Divers", account_code="605")
    GeneralExpense.objects.create(company=company, expense_type=et, label="Savon",
                                  amount=Decimal("2000"), status="paid", cash_session=session, created_by=admin)
    create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                       category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("1500"),
                       payment_mode=Transaction.PaymentMode.CASH, description="Remb", created_by=admin)
    result = REPORTS["depense"]["build"](company, {"date_from": None, "date_to": None,
                                                   "agency": None, "register": None, "vehicle": None})
    natures = {r["nature"] for r in result.groups[0].rows}
    assert {"Générale", "Remboursement"} <= natures
    assert result.totals["montant"] == Decimal("3500")
    filtered = REPORTS["depense"]["build"](company, {"date_from": None, "date_to": None, "agency": None,
                                                     "register": None, "vehicle": "00000000-0000-0000-0000-000000000000"})
    assert all(r["nature"] == "Voyage" for r in filtered.groups[0].rows)
