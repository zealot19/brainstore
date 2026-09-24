import pytest
from decimal import Decimal

from apps.treasury.services.refund_config import (
    resolve_refund_amount, set_refund_config, get_refund_config,
    METHOD_PERCENTAGE, METHOD_FIXED,
)


def _company(name="RefundCo"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name)
    return company


@pytest.mark.django_db
def test_percentage_is_default_and_computes():
    c = _company()
    set_refund_config(c, {"ticket": {"method": "percentage", "rate": "50"}})
    assert resolve_refund_amount(c, "ticket", Decimal("1000")) == Decimal("500")


@pytest.mark.django_db
def test_fixed_method_returns_fixed_amount():
    c = _company("RefundFixed")
    set_refund_config(c, {"colis": {"method": "fixed", "amount": "300"}})
    assert resolve_refund_amount(c, "colis", Decimal("1000")) == Decimal("300")


@pytest.mark.django_db
def test_fixed_is_capped_at_amount_paid():
    c = _company("RefundCap")
    set_refund_config(c, {"bagage": {"method": "fixed", "amount": "1500"}})
    assert resolve_refund_amount(c, "bagage", Decimal("1000")) == Decimal("1000")


@pytest.mark.django_db
def test_config_round_trip_preserves_untouched_kinds():
    c = _company("RefundRT")
    set_refund_config(c, {
        "ticket": {"method": "percentage", "rate": "40"},
        "colis": {"method": "fixed", "amount": "250"},
    })
    cfg = get_refund_config(c)
    assert cfg["ticket"]["method"] == METHOD_PERCENTAGE and cfg["ticket"]["rate"] == Decimal("40")
    assert cfg["colis"]["method"] == METHOD_FIXED and cfg["colis"]["amount"] == Decimal("250")
    assert cfg["bagage"]["method"] == METHOD_PERCENTAGE  # défaut, inchangé


@pytest.mark.django_db
def test_refund_on_cancel_uses_fixed_amount():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.treasury.services import create_cash_register, open_session, refund_on_cancel
    from apps.treasury.models import Transaction
    company, setup = create_company(name="RefundCancel", admin_email="rc@x.com",
                                    admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rc@x.com")
    set_refund_config(company, {"colis": {"method": "fixed", "amount": "300"}})
    reg = create_cash_register(company=company, name="C1",
                               agency_id=setup["hq_agency_id"], created_by=admin)
    session = open_session(company=company, cash_register=reg,
                           opening_balance=Decimal("5000"), created_by=admin)
    txn = refund_on_cancel(company, amount_paid=Decimal("1000"), user=admin,
                           description="Annulation colis", cash_session=session, kind="colis")
    assert txn is not None
    assert txn.transaction_type == Transaction.Type.EXPENSE
    assert txn.category == Transaction.Category.REFUND
    assert txn.amount == Decimal("300")
