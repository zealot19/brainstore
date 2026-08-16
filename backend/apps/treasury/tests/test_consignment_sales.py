import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, create_bank_account, open_session
from apps.treasury.services.consignment_sales import record_parcel_payment, record_baggage_payment


def _company(name="Cons Co", email="cons@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


# ── Colis (parcel_shipping → 707) ────────────────────────────────────────────

@pytest.mark.django_db
def test_parcel_cash_posts_571_707():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    assert txn is not None and txn.category == "parcel_shipping"
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("8000")
    assert ln["707"][1] == Decimal("8000")


@pytest.mark.django_db
def test_parcel_bank_single_account_posts_521_707():
    company, admin = _company(name="ParcelBank", email="pb@x.com")
    create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="1", created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("5000"), payment_method="virement", user=admin)
    assert txn is not None and txn.account_type == "bank"
    ln = _lines(txn.journal_entry)
    assert ln["521"][0] == Decimal("5000")
    assert ln["707"][1] == Decimal("5000")


# ── Bagages (baggage → 706) ──────────────────────────────────────────────────

@pytest.mark.django_db
def test_baggage_cash_posts_571_706():
    company, admin = _company(name="BagCash", email="bc@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_baggage_payment(company, baggage=None, amount=Decimal("2000"), payment_method="cash", user=admin)
    assert txn is not None and txn.category == "baggage"
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("2000")
    assert ln["706"][1] == Decimal("2000")


@pytest.mark.django_db
def test_baggage_cash_without_session_raises():
    company, admin = _company(name="BagNoSess", email="bns@x.com")
    with pytest.raises(ApplicationError):
        record_baggage_payment(company, baggage=None, amount=Decimal("1000"), payment_method="cash", user=admin)


@pytest.mark.django_db
def test_baggage_bank_no_account_is_non_blocking():
    company, admin = _company(name="BagNoBank", email="bnb@x.com")
    txn = record_baggage_payment(company, baggage=None, amount=Decimal("1000"), payment_method="virement", user=admin)
    assert txn is None


@pytest.mark.django_db
def test_free_baggage_zero_amount_no_movement():
    company, admin = _company(name="BagFree", email="bf@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_baggage_payment(company, baggage=None, amount=Decimal("0"), payment_method="cash", user=admin)
    assert txn is None


@pytest.mark.django_db
def test_baggage_payment_links_and_is_idempotent():
    """Le mouvement est rattaché au bagage et un second appel ne recrée rien."""
    from apps.voyages_consignment.models import Baggage
    company, admin = _company(name="BagLink", email="bl@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    baggage = Baggage.objects.create(company=company, amount_due=Decimal("3000"), created_by=admin)

    txn = record_baggage_payment(company, baggage=baggage, amount=Decimal("3000"), payment_method="cash", user=admin)
    assert txn is not None and txn.voyages_baggage_id == baggage.id

    again = record_baggage_payment(company, baggage=baggage, amount=Decimal("3000"), payment_method="cash", user=admin)
    assert again is None
    assert Transaction.objects.filter(voyages_baggage=baggage, is_deleted=False).count() == 1
