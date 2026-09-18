import pytest
from decimal import Decimal
from datetime import date
from apps.authentication.models import User


def _company(name="FleetExp Co", email="fleetexp@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_record_intervention_expense_creates_unpaid_general_expense():
    from apps.fleet.services.operations_services import record_intervention_expense
    from apps.treasury.models import GeneralExpense
    from apps.voyages_config.models import ExpenseType
    company, admin = _company()

    exp = record_intervention_expense(
        company=company, agency=None, label="Entretien Vidange — AB-123",
        amount=Decimal("15000"), expense_date=date.today(), user=admin)

    assert exp.status == GeneralExpense.Status.UNPAID
    assert exp.amount == Decimal("15000")
    assert exp.label == "Entretien Vidange — AB-123"
    assert exp.expense_type.code == "ENTRETIEN"
    assert exp.expense_type.name == "Entretien véhicule"
    assert ExpenseType.objects.filter(company=company, code="ENTRETIEN").count() == 1


@pytest.mark.django_db
def test_intervention_expense_reuses_expense_type():
    from apps.fleet.services.operations_services import record_intervention_expense
    from apps.voyages_config.models import ExpenseType
    company, admin = _company(name="FleetExp2", email="fleetexp2@x.com")

    record_intervention_expense(company=company, agency=None, label="A",
                                amount=Decimal("100"), expense_date=date.today(), user=admin)
    record_intervention_expense(company=company, agency=None, label="B",
                                amount=Decimal("200"), expense_date=date.today(), user=admin)

    assert ExpenseType.objects.filter(company=company, code="ENTRETIEN").count() == 1
