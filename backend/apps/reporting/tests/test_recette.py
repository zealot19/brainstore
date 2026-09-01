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
    assert result.groups[0].subtotal["total"] == Decimal("5000")
    assert result.totals["total"] == Decimal("5000")


@pytest.mark.django_db
def test_recette_all_categories_modes_and_net():
    from apps.system_config.services import create_company
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="R2 Co", admin_email="r2@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="r2@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)

    def inc(cat, amount, mode):
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME, category=cat,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal(amount), payment_mode=mode, created_by=admin)

    inc(Transaction.Category.TICKET_SALES, "5000", Transaction.PaymentMode.CASH)
    inc(Transaction.Category.PARCEL_SHIPPING, "3000", Transaction.PaymentMode.MOBILE_MONEY)
    inc(Transaction.Category.BAGGAGE, "1000", Transaction.PaymentMode.CASH)
    inc(Transaction.Category.OTHER_INCOME, "500", Transaction.PaymentMode.CASH)
    create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                       category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("2000"),
                       payment_mode=Transaction.PaymentMode.CASH, description="Remb", created_by=admin)

    result = REPORTS["recette"]["build"](company, {"date_from": None, "date_to": None})
    assert result.totals["total"] == Decimal("9500")
    natures = {r.get("nature") for g in result.groups for r in g.rows}
    assert {"Voyage", "Colis", "Bagage", "Autre"} <= natures
    modes = next(g for g in result.groups if g.label == "RÉPARTITION PAR MODE DE PAIEMENT")
    assert sum(r["total"] for r in modes.rows) == Decimal("9500")
    synth = next(g for g in result.groups if g.label == "SYNTHÈSE")
    net = next(r for r in synth.rows if r["nature"] == "Net")
    assert net["total"] == Decimal("7500")
