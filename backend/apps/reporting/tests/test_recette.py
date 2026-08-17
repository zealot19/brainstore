import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.models import Transaction


@pytest.mark.django_db
def test_recette_grouped_by_caisse():
    from apps.system_config.services import create_company
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="R Co", admin_email="r@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="r@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.TICKET_SALES, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("5000"),
                       payment_mode=Transaction.PaymentMode.CASH, created_by=admin)
    result = REPORTS["recette"]["build"](company, {"date_from": None, "date_to": None})
    assert len(result.groups) == 1
    assert result.groups[0].subtotal["total"] == Decimal("5000")
    assert result.totals["total"] == Decimal("5000")
