import pytest
from decimal import Decimal
from apps.authentication.models import User


@pytest.mark.django_db
def test_journaux_totals():
    from apps.system_config.services import create_company
    from apps.treasury.services.services import create_cash_register, open_session, close_session
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="J Co", admin_email="j@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="j@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = open_session(company=company, cash_register=reg, created_by=admin)
    close_session(s, closing_balance=Decimal("1000"), updated_by=admin)
    result = REPORTS["journaux-vente"]["build"](company, {"date_from": None, "date_to": None, "register": None})
    assert result.totals["exc"] == Decimal("1000")
    assert result.groups[0].rows[0]["caisse"] == "C1"
