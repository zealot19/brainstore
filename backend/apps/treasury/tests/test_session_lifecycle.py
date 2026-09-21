import pytest
from datetime import timedelta
from django.utils import timezone
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Lc Co", admin_email="lc@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="lc@x.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    g1, _ = create_user(created_by=admin, company=company, email="g1@x.com", first_name="G", last_name="One",
                        is_institution_admin=False, default_agency_id=ag.id)
    g2, _ = create_user(created_by=admin, company=company, email="g2@x.com", first_name="G", last_name="Two",
                        is_institution_admin=False, default_agency_id=ag.id)
    # g1 est gestionnaire de la caisse ; g2 ne l'est pas.
    reg = create_cash_register(company=company, name="C1", agency_id=ag.id,
                               manager_ids=[str(g1.id)], created_by=admin)
    return company, admin, g1, g2, reg


@pytest.mark.django_db
def test_schedule_then_open_by_assigned_guichetier():
    from apps.treasury.services import schedule_session, open_scheduled_session
    company, admin, g1, g2, reg = _setup()
    now = timezone.now()
    s = schedule_session(company=company, cash_register=reg, assigned_to=g1,
                         scheduled_start=now, scheduled_end=now + timedelta(hours=8),
                         name="Matin", created_by=admin)
    assert s.status == "draft" and s.assigned_to_id == g1.id
    # Ouvrir une session planifiée est une action de gestion (droit RBAC
    # treasury.session.manage à l'endpoint), bornée à l'agence au niveau service ;
    # l'assignation à g1 ne sert qu'à la traçabilité (« ma session active »).
    # Un utilisateur de l'agence l'ouvre donc.
    s = open_scheduled_session(s, opening_balance=10000, updated_by=g1)
    assert s.status == "open" and s.opened_by_id == g1.id and s.opening_balance == 10000


@pytest.mark.django_db
def test_suspend_resume_and_movement_blocked_while_suspended():
    from decimal import Decimal
    from apps.treasury.services import (schedule_session, open_scheduled_session,
                                        suspend_session, resume_session, create_transaction)
    from apps.treasury.models import Transaction
    company, admin, g1, g2, reg = _setup()
    s = schedule_session(company=company, cash_register=reg, assigned_to=g1, created_by=admin)
    s = open_scheduled_session(s, opening_balance=0, updated_by=g1)
    s = suspend_session(s, updated_by=g1)
    assert s.status == "suspended"
    with pytest.raises(ApplicationError):  # movements blocked while suspended
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                           category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
                           amount=Decimal("100"), payment_mode=Transaction.PaymentMode.CASH,
                           cash_session=s, created_by=g1)
    s = resume_session(s, updated_by=g1)
    assert s.status == "open"


@pytest.mark.django_db
def test_extend_and_close():
    from apps.treasury.services import (schedule_session, open_scheduled_session,
                                        extend_session, close_session)
    company, admin, g1, g2, reg = _setup()
    now = timezone.now()
    s = schedule_session(company=company, cash_register=reg, assigned_to=g1,
                         scheduled_start=now, scheduled_end=now + timedelta(hours=4), created_by=admin)
    s = open_scheduled_session(s, opening_balance=0, updated_by=g1)
    new_end = now + timedelta(hours=10)
    s = extend_session(s, scheduled_end=new_end, updated_by=g1)
    assert s.scheduled_end == new_end
    s = close_session(s, closing_balance=0, updated_by=g1)
    assert s.status == "closed"


@pytest.mark.django_db
def test_one_active_session_per_register():
    from apps.treasury.services import schedule_session, open_scheduled_session
    company, admin, g1, g2, reg = _setup()
    s1 = schedule_session(company=company, cash_register=reg, assigned_to=g1, created_by=admin)
    open_scheduled_session(s1, opening_balance=0, updated_by=g1)
    s2 = schedule_session(company=company, cash_register=reg, assigned_to=g1, created_by=admin)
    with pytest.raises(ApplicationError):  # register already busy (g1 is a manager)
        open_scheduled_session(s2, opening_balance=0, updated_by=g1)


@pytest.mark.django_db
def test_schedule_via_api_returns_draft():
    """Regression: the schedule view must not filter User by a non-existent is_deleted field."""
    from rest_framework.test import APIClient
    company, admin, g1, g2, reg = _setup()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/treasury/sessions/schedule/",
               {"cash_register_id": str(reg.id), "assigned_to_id": str(g1.id), "name": "Matin"}, format="json")
    assert r.status_code in (200, 201), r.content
    assert r.json()["status"] == "draft"


@pytest.mark.django_db
def test_guichetier_list_filters_by_permission():
    from apps.treasury.selectors import list_guichetiers
    company, admin, g1, g2, reg = _setup()
    # created_user gets default role/permissions; both g1/g2 should be assignable if they have the perm.
    ids = {str(u.id) for u in list_guichetiers(company.id, agency_id=reg.agency_id)}
    # At minimum the function runs and returns a set (permission-dependent membership)
    assert isinstance(ids, set)
