import pytest
from apps.voyages_config.models import ExpenseType
from apps.voyages_config.services.expense_seed import seed_expense_types


@pytest.mark.django_db
def test_seed_expense_types_idempotent_and_defaults():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Dep Co", admin_email="dep@x.com",
                                admin_first_name="A", admin_last_name="B")
    before = ExpenseType.objects.filter(company=company).count()
    assert seed_expense_types(company) == 0
    assert ExpenseType.objects.filter(company=company).count() == before
    codes = set(ExpenseType.objects.filter(company=company).values_list("code", flat=True))
    assert {"CARBURANT", "PEAGE", "RATION_CH", "RATION_CV", "AUTRES"} <= codes
    assert ExpenseType.objects.get(company=company, code="CARBURANT").account_code == "604"


@pytest.mark.django_db
def test_invalid_account_code_rejected():
    from apps.voyages_config.config_api.serializers import ExpenseTypeWrite
    s = ExpenseTypeWrite(data={"code": "X", "name": "X", "account_code": "999999"})
    assert not s.is_valid()
    assert "account_code" in s.errors
