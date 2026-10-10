import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Agency
from apps.users.services.user_services import create_user
from apps.treasury.models import Transaction, CashRegister
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.other_income import record_other_income


def _company(name="OI Co", email="oi@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_record_other_income_pending_then_validated_updates_balance():
    # M26 : une recette manuelle est enregistrée EN ATTENTE (aucun impact), puis validée.
    from apps.treasury.services.operation_validation import validate_operation
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_other_income(company, amount=Decimal("4000"), payment_mode="cash",
                              description="Vente carton", user=admin)
    assert txn.transaction_type == "income"
    assert txn.category == "other_income"
    assert txn.status == Transaction.Status.PENDING
    assert txn.journal_entry is None                                           # pas encore postée
    assert CashRegister.objects.get(id=reg.id).current_balance == Decimal("0")  # pas d'impact
    validate_operation(txn, user=admin)
    txn.refresh_from_db()
    assert txn.journal_entry is not None
    assert CashRegister.objects.get(id=reg.id).current_balance == Decimal("4000")


@pytest.mark.django_db
def test_record_other_income_without_open_session_raises():
    company, admin = _company(name="OINoSess", email="oins@x.com")
    with pytest.raises(ApplicationError):
        record_other_income(company, amount=Decimal("1000"), payment_mode="cash",
                            description="X", user=admin)


@pytest.mark.django_db
def test_record_other_income_wrong_agency_caisse_raises():
    company, admin = _company(name="OIScope", email="ois@x.com")
    ag_a = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag_b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    reg_b = create_cash_register(company=company, name="CB", agency_id=ag_b.id, created_by=admin)
    guichet, _ = create_user(created_by=admin, company=company, email="g2@x.com",
                             first_name="G", last_name="U", is_institution_admin=False,
                             default_agency_id=ag_a.id)
    sess_b = open_session(company=company, cash_register=reg_b, created_by=admin)
    with pytest.raises(ApplicationError):
        record_other_income(company, amount=Decimal("1000"), payment_mode="cash",
                            description="X", user=guichet, cash_session=sess_b)
