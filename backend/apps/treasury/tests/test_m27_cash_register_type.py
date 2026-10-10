import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import CashRegister
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.general_expense_services import disburse_general_expense


def _setup(email):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import ExpenseType
    company, _ = create_company(name="M27Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    etype = ExpenseType.objects.create(company=company, code="DIV", name="Divers")
    return company, admin, etype


def _expense(company, etype, admin, amount):
    from apps.treasury.models import GeneralExpense
    return GeneralExpense.objects.create(company=company, expense_type=etype, label="T",
                                         amount=Decimal(amount), status=GeneralExpense.Status.UNPAID,
                                         created_by=admin)


@pytest.mark.django_db
def test_category_and_flag_fields_exist():
    names = {f.name for f in CashRegister._meta.get_fields()}
    assert "category" in names and "allow_negative_balance" in names


@pytest.mark.django_db
def test_allow_negative_defaults_false_and_category_blank():
    company, admin, _ = _setup("m27a@x.com")
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE, created_by=admin)
    assert reg.allow_negative_balance is False
    assert reg.category == ""


@pytest.mark.django_db
def test_category_persists():
    company, admin, _ = _setup("m27b@x.com")
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               category=CashRegister.Category.AGENCE, created_by=admin)
    reg.refresh_from_db()
    assert reg.category == "agence"


@pytest.mark.django_db
def test_positive_only_blocks_overdraw():
    """Comportement actuel préservé : allow_negative_balance=False → décaissement bloqué si solde insuffisant."""
    company, admin, etype = _setup("m27c@x.com")
    princ = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                                 manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=princ, opening_balance=Decimal("1000"), created_by=admin)
    exp = _expense(company, etype, admin, "5000")
    with pytest.raises(ApplicationError):
        disburse_general_expense(exp, user=admin, cash_session=sess)


@pytest.mark.django_db
def test_allow_negative_permits_overdraw():
    """allow_negative_balance=True → la caisse principale peut passer en négatif via une dépense."""
    company, admin, etype = _setup("m27d@x.com")
    princ = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                                 allow_negative_balance=True, manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=princ, opening_balance=Decimal("1000"), created_by=admin)
    exp = _expense(company, etype, admin, "5000")
    disburse_general_expense(exp, user=admin, cash_session=sess)
    exp.refresh_from_db()
    assert exp.status == "paid"


@pytest.mark.django_db
def test_write_read_category_and_flag_via_api():
    from rest_framework.test import APIClient
    company, admin, _ = _setup("m27e@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/treasury/registers/",
               {"name": "Caisse recette", "kind": "principale",
                "category": "recette", "allow_negative_balance": True}, format="json")
    assert r.status_code in (200, 201), r.content
    body = r.json()
    assert body["category"] == "recette"
    assert body["allow_negative_balance"] is True
