import pytest


@pytest.mark.django_db
def test_general_expense_and_transaction_extension():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.voyages_config.models import ExpenseType
    from apps.treasury.models import GeneralExpense, Transaction
    company, _ = create_company(name="GX", admin_email="gx@x.com", admin_first_name="A", admin_last_name="B")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    e = GeneralExpense.objects.create(company=company, agency=ag, expense_type=et,
                                      label="Papier toilette", amount=5000)
    assert e.status == "unpaid"
    assert Transaction.Category.GENERAL_EXPENSE == "general_expense"
    assert any(f.name == "general_expense" for f in Transaction._meta.get_fields())
