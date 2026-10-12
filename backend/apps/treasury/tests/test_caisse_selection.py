import pytest
from decimal import Decimal
from apps.authentication.models import User


def _setup():
    from apps.system_config.services import create_company
    from apps.treasury.services import create_cash_register
    company, setup = create_company(name="CZCo", admin_email="cz@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cz@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    reg2 = create_cash_register(company=company, name="C2", created_by=admin)
    return dict(company=company, admin=admin, reg=reg, reg2=reg2, hq=setup["hq_agency_id"])


@pytest.mark.django_db
def test_selectable_registers_admin_sees_all_and_can_select():
    from apps.treasury.selectors import selectable_cash_registers
    g = _setup()
    out = selectable_cash_registers(g["admin"], g["company"])
    assert out["can_select"] is True
    assert {str(g["reg"].id), str(g["reg2"].id)} <= {str(r["id"]) for r in out["registers"]}


@pytest.mark.django_db
def test_income_into_chosen_register_requires_open_session():
    # On teste la résolution de caisse (booking=None : pas besoin d'un voyage complet).
    from apps.treasury.services import open_session, record_booking_payment
    from apps.core.exceptions import ApplicationError
    g = _setup()
    # Caisse sans session ouverte -> erreur.
    with pytest.raises(ApplicationError):
        record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                               payment_method="cash", user=g["admin"], cash_register_id=str(g["reg"].id))
    # Session ouverte -> posté dans CETTE caisse.
    open_session(company=g["company"], cash_register=g["reg2"], created_by=g["admin"])
    txn = record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"], cash_register_id=str(g["reg2"].id))
    assert txn is not None and txn.cash_session.cash_register_id == g["reg2"].id


@pytest.mark.django_db
def test_no_register_id_keeps_auto_resolution():
    from apps.treasury.services import open_session, record_booking_payment
    g = _setup()
    open_session(company=g["company"], cash_register=g["reg"], created_by=g["admin"])
    txn = record_booking_payment(g["company"], booking=None, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"])
    assert txn is not None  # auto-résolu sur la session ouverte de l'admin
