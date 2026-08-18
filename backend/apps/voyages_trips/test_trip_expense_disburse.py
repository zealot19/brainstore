import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, ExpenseType
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_trips.services.trip_services import create_trip
    company, _ = create_company(name="Disb Co", admin_email="disb@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="disb@x.com")
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest", is_station=True)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    exp = TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("15000"), created_by=admin)
    return company, admin, exp


@pytest.mark.django_db
def test_disburse_requires_open_session():
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    company, admin, exp = _setup()
    with pytest.raises(ApplicationError):
        disburse_trip_expense(exp, user=admin)


@pytest.mark.django_db
def test_disburse_posts_and_is_idempotent():
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    company, admin, exp = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    exp = disburse_trip_expense(exp, user=admin)
    assert exp.status == "paid"
    txn = Transaction.objects.get(voyage_expense=exp, is_deleted=False)
    ln = _lines(txn.journal_entry)
    assert ln["604"][0] == Decimal("15000") and ln["571"][1] == Decimal("15000")
    disburse_trip_expense(exp, user=admin)
    assert Transaction.objects.filter(voyage_expense=exp, is_deleted=False).count() == 1


@pytest.mark.django_db
def test_disburse_uses_chosen_cash_session():
    """La caisse est choisie explicitement : le mouvement doit provenir de CETTE session."""
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    company, admin, exp = _setup()
    reg1 = create_cash_register(company=company, name="C1", created_by=admin)
    reg2 = create_cash_register(company=company, name="C2", created_by=admin)
    open_session(company=company, cash_register=reg1, created_by=admin)
    s2 = open_session(company=company, cash_register=reg2, created_by=admin)
    exp = disburse_trip_expense(exp, user=admin, cash_session=s2)
    txn = Transaction.objects.get(voyage_expense=exp, is_deleted=False)
    assert txn.cash_session_id == s2.id
    assert exp.cash_session_id == s2.id


@pytest.mark.django_db
def test_disburse_endpoint_requires_manage_permission():
    from apps.voyages_trips.views import TripExpenseDisburseView
    company, admin, exp = _setup()
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    staff, _ = create_user(created_by=admin, company=company, email="staff@x.com",
                           first_name="S", last_name="T", is_institution_admin=False)
    pids = list(Permission.objects.filter(code="voyage.expense.view").values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    req = APIRequestFactory().post("/x")
    force_authenticate(req, user=staff)
    resp = TripExpenseDisburseView.as_view()(req, trip_id=exp.trip_id, pk=exp.id)
    assert resp.status_code == 403
