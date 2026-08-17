import pytest
from decimal import Decimal
from django.utils import timezone
from apps.authentication.models import User
from apps.treasury.models import Transaction


@pytest.mark.django_db
def test_ca_agency_month_matrix():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="CA Co", admin_email="ca@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ca@x.com")
    agency = Agency.objects.create(company=company, name="BAMENDA", code="BAM")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    reg.agency = agency
    reg.save(update_fields=["agency"])
    session = open_session(company=company, cash_register=reg, created_by=admin)
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.TICKET_SALES, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("3000"),
                       payment_mode=Transaction.PaymentMode.CASH, created_by=admin)
    now = timezone.now()
    result = REPORTS["ca"]["build"](company, {"year": now.year})
    row = next(r for r in result.groups[0].rows if r["agence"] == "BAMENDA")
    assert row[f"m{now.month}"] == Decimal("3000")
    assert result.totals["tot"] == Decimal("3000")
