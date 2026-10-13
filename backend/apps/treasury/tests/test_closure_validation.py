"""Validation de clôture : (dé)valider et rouvrir une session clôturée (admin).

La clôture engage l'écriture (balayage guichet + comptabilité) et marque la session
VALIDÉE. Un admin peut la DÉVALIDER (extourne), la REVALIDER, ou — une fois dévalidée —
la ROUVRIR pour tout réajuster.
"""
import pytest
from decimal import Decimal


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="ClotVal Co", admin_email="cv@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cv@x.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    guichet = create_cash_register(company=company, name="Guichet 1", agency_id=ag.id,
                                   kind="guichet", created_by=admin)
    coffre = create_cash_register(company=company, name="Coffre", agency_id=ag.id,
                                  kind="principale", created_by=admin)
    return company, admin, guichet, coffre


def _open(company, reg, admin, opening=0):
    from apps.treasury.services import open_session
    return open_session(company=company, cash_register=reg, opening_balance=opening, created_by=admin)


def _income(company, session, admin, amount):
    from apps.treasury.services import create_transaction
    from apps.treasury.models import Transaction
    return create_transaction(
        company=company, transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
        amount=Decimal(amount), payment_mode=Transaction.PaymentMode.CASH,
        cash_session=session, created_by=admin)


def _close_guichet(company, admin, guichet, coffre, amount="40000"):
    from apps.treasury.services import close_session
    s = _open(company, guichet, admin, opening=0)
    _income(company, s, admin, amount)
    return close_session(s, closing_balance=Decimal(amount),
                         destination_cash_register_id=coffre.id, updated_by=admin)


@pytest.mark.django_db
def test_close_validates_and_sweeps_guichet():
    from apps.treasury.models import CashRegister, Transfer
    company, admin, guichet, coffre = _setup()
    s = _close_guichet(company, admin, guichet, coffre)
    assert s.status == "closed" and s.closure_validated is True
    assert CashRegister.objects.get(id=guichet.id).current_balance == Decimal("0")
    assert CashRegister.objects.get(id=coffre.id).current_balance == Decimal("40000")
    assert Transfer.objects.filter(from_cash_register=guichet, is_deleted=False).count() == 1


@pytest.mark.django_db
def test_unvalidate_then_validate_roundtrip():
    from apps.treasury.services import unvalidate_closure, validate_closure
    from apps.treasury.models import CashRegister, Transfer
    company, admin, guichet, coffre = _setup()
    s = _close_guichet(company, admin, guichet, coffre)

    s = unvalidate_closure(s, updated_by=admin)      # dévalider : extourne le balayage
    assert s.status == "closed" and s.closure_validated is False
    assert Transfer.objects.filter(from_cash_register=guichet, is_deleted=False).count() == 0
    assert CashRegister.objects.get(id=coffre.id).current_balance == Decimal("0")
    assert CashRegister.objects.get(id=guichet.id).current_balance == Decimal("40000")

    s = validate_closure(s, updated_by=admin)        # revalider : nouveau balayage
    assert s.closure_validated is True
    assert Transfer.objects.filter(from_cash_register=guichet, is_deleted=False).count() == 1
    assert CashRegister.objects.get(id=guichet.id).current_balance == Decimal("0")
    assert CashRegister.objects.get(id=coffre.id).current_balance == Decimal("40000")


@pytest.mark.django_db
def test_reopen_requires_unvalidate_first_then_opens():
    from apps.core.exceptions import ApplicationError
    from apps.treasury.services import unvalidate_closure, reopen_session
    company, admin, guichet, coffre = _setup()
    s = _close_guichet(company, admin, guichet, coffre)
    with pytest.raises(ApplicationError):            # validée : rouvrir refusé
        reopen_session(s, updated_by=admin)
    s = unvalidate_closure(s, updated_by=admin)
    s = reopen_session(s, updated_by=admin)
    assert s.status == "open"
    assert s.closing_balance is None and s.difference is None
    assert s.counts.filter(kind="closing", is_deleted=False).count() == 0


@pytest.mark.django_db
def test_open_session_defaults_opening_to_caisse_carryover():
    """#1 — Ouvrir sans fond précisé reprend le montant trouvé en caisse (report), jamais 0
    par défaut (sinon écart fantôme à la clôture). Un fond explicite reste respecté."""
    from apps.treasury.models import CashRegister
    from apps.treasury.services import open_session
    company, admin, guichet, coffre = _setup()
    reg = CashRegister.objects.get(id=coffre.id)
    reg.current_balance = Decimal("30000"); reg.save(update_fields=["current_balance"])
    s = open_session(company=company, cash_register=reg, created_by=admin)   # pas de fond fourni
    assert s.opening_balance == Decimal("30000")
    s.status = "closed"; s.save(update_fields=["status"])                    # libère la caisse
    s2 = open_session(company=company, cash_register=reg, opening_balance=Decimal("0"), created_by=admin)
    assert s2.opening_balance == Decimal("0")                                # fond explicite respecté


@pytest.mark.django_db
def test_unvalidate_blocked_when_newer_session_active():
    """#2 — (Dé)valider une ancienne clôture écrase le solde de sa caisse : interdit tant
    qu'une session plus récente est active dessus."""
    from apps.core.exceptions import ApplicationError
    from apps.treasury.services import unvalidate_closure, open_session
    company, admin, guichet, coffre = _setup()
    s = _close_guichet(company, admin, guichet, coffre)      # clôturée + validée, guichet à 0
    open_session(company=company, cash_register=guichet, opening_balance=Decimal("0"), created_by=admin)
    with pytest.raises(ApplicationError):
        unvalidate_closure(s, updated_by=admin)


@pytest.mark.django_db
def test_closure_actions_admin_only_via_api():
    from rest_framework.test import APIClient
    from apps.users.services.user_services import create_user
    company, admin, guichet, coffre = _setup()
    s = _close_guichet(company, admin, guichet, coffre)
    gui, _ = create_user(created_by=admin, company=company, email="g@x.com",
                         first_name="G", last_name="U", is_institution_admin=False)
    c = APIClient(); c.force_authenticate(user=gui)
    assert c.post(f"/api/v1/treasury/sessions/{s.id}/unvalidate/").status_code == 403
    c2 = APIClient(); c2.force_authenticate(user=admin)
    assert c2.post(f"/api/v1/treasury/sessions/{s.id}/unvalidate/").status_code == 200
