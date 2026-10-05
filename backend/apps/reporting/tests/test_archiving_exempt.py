import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User
from apps.system_config.services import create_company
from apps.system_config.services.archiving import set_archive_window_days
from apps.treasury.services.services import create_cash_register, open_session, create_transaction
from apps.treasury.models import Transaction
from apps.reporting.registry import REPORTS


@pytest.mark.django_db
def test_recette_report_counts_out_of_window_transactions():
    company, _ = create_company(name="RepCo", admin_email="repco@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="repco@x.com")
    set_archive_window_days(company.id, 1)  # aggressive 1-day window
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    t = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                           category=Transaction.Category.TICKET_SALES,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal("5000"), payment_mode=Transaction.PaymentMode.CASH,
                           created_by=admin)
    Transaction.objects.filter(id=t.id).update(transaction_date=timezone.now() - timedelta(days=365))
    result = REPORTS["recette"]["build"](company, {"date_from": None, "date_to": None})
    assert result.totals["total"] == Decimal("5000")  # counted despite being far outside the 1-day window
