import pytest
from decimal import Decimal


@pytest.mark.django_db
def test_accounting_totals():
    from django.test import RequestFactory
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    from apps.voyages_booking.config_api.views import build_roadmap_data
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_config.models import ExpenseType
    from apps.treasury.services import create_cash_register, open_session

    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _book(company, admin, trip)  # 1 billet à 15 000 (Fare du _setup)

    et = ExpenseType.objects.create(company=company, code="CARB", name="Carburant")
    TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("5000"), created_by=admin)

    req = RequestFactory().get("/"); req.user = admin
    data = build_roadmap_data(trip, req)
    acc = data["accounting"]
    assert acc["expenses_total"] == Decimal("5000")
    assert acc["recettes"] >= Decimal("15000")
    assert acc["net"] == acc["recettes"] - acc["expenses_total"]
    assert acc["expenses"][0]["type_label"] == "Carburant"
