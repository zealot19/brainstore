import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister, CurrencyDenomination, CashValueType
    from apps.treasury.services.services import create_cash_register
    from apps.core.models import Currency
    company, _ = create_company(name="M28B", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    cur = Currency.objects.filter(code="XAF").first()
    d1000, _ = CurrencyDenomination.objects.get_or_create(
        company=company, currency=cur, value=Decimal("1000"), defaults={"created_by": admin})
    bon = CashValueType.objects.create(company=company, code="BONX", label="Bon", created_by=admin)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    return company, admin, reg, d1000, bon


@pytest.mark.django_db
def test_compute_splits_cash_and_other():
    from apps.treasury.services.billetage import compute_count_total
    company, admin, reg, d1000, bon = _ctx("m28b1@x.com")
    res = compute_count_total(company, [
        {"denomination_id": str(d1000.id), "quantity": 5},   # 5000 espèces
        {"value_type_id": str(bon.id), "amount": "2000"},     # 2000 valeur
    ])
    assert res["cash_total"] == Decimal("5000")
    assert res["other_total"] == Decimal("2000")
    assert res["grand_total"] == Decimal("7000")


@pytest.mark.django_db
def test_ecart_is_cash_only():
    from apps.treasury.services.services import open_session, close_session
    company, admin, reg, d1000, bon = _ctx("m28b2@x.com")
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("5000"), created_by=admin)
    # Espèces comptées = 5000 (= attendu) MAIS + un bon de 2000.
    close_session(sess, closing_count=[
        {"denomination_id": str(d1000.id), "quantity": 5},
        {"value_type_id": str(bon.id), "amount": "2000"},
    ], updated_by=admin)
    sess.refresh_from_db(); reg.refresh_from_db()
    assert sess.difference == Decimal("0")        # le bon n'inflate PAS l'écart
    assert reg.current_balance == Decimal("5000")  # solde = espèces, pas 7000


@pytest.mark.django_db
def test_cash_only_unchanged_regression():
    from apps.treasury.services.billetage import compute_count_total
    company, admin, reg, d1000, bon = _ctx("m28b3@x.com")
    res = compute_count_total(company, [{"denomination_id": str(d1000.id), "quantity": 3}])
    assert res["cash_total"] == Decimal("3000") and res["other_total"] == Decimal("0")
    assert res["grand_total"] == Decimal("3000")


@pytest.mark.django_db
def test_value_line_requires_positive_amount():
    from apps.treasury.services.billetage import compute_count_total
    from apps.core.exceptions import ApplicationError
    company, admin, reg, d1000, bon = _ctx("m28b4@x.com")
    with pytest.raises(ApplicationError):
        compute_count_total(company, [{"value_type_id": str(bon.id), "amount": "0"}])


@pytest.mark.django_db
def test_line_with_both_denomination_and_value_rejected():
    from apps.treasury.services.billetage import compute_count_total
    from apps.core.exceptions import ApplicationError
    company, admin, reg, d1000, bon = _ctx("m28b5@x.com")
    with pytest.raises(ApplicationError):
        compute_count_total(company, [
            {"denomination_id": str(d1000.id), "quantity": 2, "value_type_id": str(bon.id), "amount": "100"}
        ])
