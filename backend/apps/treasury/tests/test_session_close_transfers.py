"""#1 — La clôture doit tenir compte des transferts (approvisionnements / prélèvements).

Avant correctif, `expected = ouverture + recettes − dépenses` ignorait les transferts,
alors que `current_balance` les intègre : tout approvisionnement en cours de session
(ou le balayage de clôture d'un guichet) apparaissait comme un écart fantôme.
"""
import pytest
from decimal import Decimal


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Trf Co", admin_email="trf@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="trf@x.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    reg = create_cash_register(company=company, name="Principale", agency_id=ag.id,
                               kind="principale", created_by=admin)
    other = create_cash_register(company=company, name="Autre", agency_id=ag.id,
                                 kind="principale", created_by=admin)
    return company, admin, reg, other


def _open(company, reg, admin, opening=0):
    from apps.treasury.services import open_session
    return open_session(company=company, cash_register=reg, opening_balance=opening,
                        created_by=admin)


def _income(company, session, admin, amount):
    from apps.treasury.services import create_transaction
    from apps.treasury.models import Transaction
    return create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal(amount), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=admin)


@pytest.mark.django_db
def test_close_counts_incoming_transfer_no_phantom_surplus():
    from apps.treasury.services import create_transfer, close_session
    from apps.treasury.models import CashRegister
    company, admin, reg, other = _setup()
    s = _open(company, reg, admin, opening=0)
    # Approvisionner reg via un transfert entrant de 50 000 (source dotée pour le test).
    src = CashRegister.objects.get(id=other.id)
    src.current_balance = Decimal("100000"); src.save(update_fields=["current_balance"])
    create_transfer(company=company, amount=Decimal("50000"),
                    from_cash_register=other, to_cash_register=reg, created_by=admin)
    _income(company, s, admin, "30000")        # ventes espèces
    # Caisse comptée = 0 + 50 000 (transfert) + 30 000 (ventes) = 80 000.
    s = close_session(s, closing_balance=Decimal("80000"), updated_by=admin)
    assert s.expected_closing == Decimal("80000")
    assert s.difference == Decimal("0")        # avant correctif : +50 000 d'écart fantôme


@pytest.mark.django_db
def test_close_counts_outgoing_transfer_no_phantom_shortage():
    from apps.treasury.services import create_transfer, close_session
    company, admin, reg, other = _setup()
    s = _open(company, reg, admin, opening=0)
    _income(company, s, admin, "50000")
    create_transfer(company=company, amount=Decimal("20000"),
                    from_cash_register=reg, to_cash_register=other, created_by=admin)
    # Caisse comptée = 0 + 50 000 − 20 000 (prélèvement) = 30 000.
    s = close_session(s, closing_balance=Decimal("30000"), updated_by=admin)
    assert s.expected_closing == Decimal("30000")
    assert s.difference == Decimal("0")        # avant correctif : −20 000 d'écart fantôme
