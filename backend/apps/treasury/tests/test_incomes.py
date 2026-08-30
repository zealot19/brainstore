import pytest
from decimal import Decimal
from django.utils import timezone
from apps.authentication.models import User
from apps.system_config.models import Agency
from apps.users.services.user_services import create_user
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.booking_sales import record_booking_payment  # noqa: F401
from apps.treasury.services.consignment_sales import record_parcel_payment, record_baggage_payment
from apps.treasury.selectors.incomes import list_income, income_dashboard
from apps.treasury.scoping import register_agency_scope


def _company(name="Inc Co", email="inc@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_list_income_filters_by_category():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    record_baggage_payment(company, baggage=None, amount=Decimal("2000"), payment_method="cash", user=admin)
    parcels = list_income(company.id, category=Transaction.Category.PARCEL_SHIPPING)
    assert parcels.count() == 1
    assert parcels.first().category == "parcel_shipping"
    assert list_income(company.id).count() == 2


@pytest.mark.django_db
def test_list_income_date_range():
    company, admin = _company(name="IncDate", email="incd@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("5000"), payment_method="cash", user=admin)
    Transaction.objects.filter(id=txn.id).update(transaction_date="2020-01-01")
    assert list_income(company.id, date_from="2021-01-01").count() == 0
    assert list_income(company.id, date_to="2021-01-01").count() == 1


@pytest.mark.django_db
def test_list_income_agency_scope_excludes_other_agency():
    from apps.treasury.services.services import create_transaction
    company, admin = _company(name="IncScope", email="incs@x.com")
    ag_a = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag_b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    reg_a = create_cash_register(company=company, name="CA", agency_id=ag_a.id, created_by=admin)
    reg_b = create_cash_register(company=company, name="CB", agency_id=ag_b.id, created_by=admin)
    guichet, _ = create_user(created_by=admin, company=company, email="g@x.com",
                             first_name="G", last_name="U", is_institution_admin=False,
                             default_agency_id=ag_a.id)
    # Admin (unscoped) opens a session on each register and records one cash income each.
    sess_a = open_session(company=company, cash_register=reg_a, created_by=admin)
    txn_a = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                               category=Transaction.Category.OTHER_INCOME,
                               account_type=Transaction.AccountType.CASH, amount=Decimal("1000"),
                               payment_mode="cash", cash_session=sess_a, created_by=admin)
    sess_b = open_session(company=company, cash_register=reg_b, created_by=admin)
    txn_b = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                               category=Transaction.Category.OTHER_INCOME,
                               account_type=Transaction.AccountType.CASH, amount=Decimal("2000"),
                               payment_mode="cash", cash_session=sess_b, created_by=admin)
    # Guichetier of agency A sees only agency A income; admin sees both.
    scoped_ids = set(list_income(company.id, agency_scope=register_agency_scope(guichet))
                     .values_list("id", flat=True))
    assert scoped_ids == {txn_a.id}
    admin_ids = set(list_income(company.id, agency_scope=register_agency_scope(admin))
                    .values_list("id", flat=True))
    assert {txn_a.id, txn_b.id} <= admin_ids


@pytest.mark.django_db
def test_income_dashboard_totals_by_source():
    company, admin = _company(name="IncDash", email="incdash@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    record_baggage_payment(company, baggage=None, amount=Decimal("2000"), payment_method="cash", user=admin)
    d = income_dashboard(company.id)
    assert d["parcel_total"] == Decimal("8000")
    assert d["baggage_total"] == Decimal("2000")
    assert d["total"] == Decimal("10000")
    assert d["count"] == 2
