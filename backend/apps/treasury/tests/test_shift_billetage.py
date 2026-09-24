import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.core.exceptions import ApplicationError


def _setup(end_delta_hours=-1):
    """Session OUVERTE assignée à un guichetier ; fin prévue passée (par défaut)."""
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.users.services.user_services import create_user
    from apps.treasury.services import create_cash_register, schedule_session, open_scheduled_session
    from apps.treasury.models import CurrencyDenomination
    company, setup = create_company(name="BilletCo", admin_email="b@x.com",
                                    admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="b@x.com")
    ag = setup["hq_agency_id"]
    gui, _ = create_user(created_by=admin, company=company, email="g@x.com", first_name="G",
                         last_name="U", is_institution_admin=False, default_agency_id=ag, agency_ids=[ag])
    other, _ = create_user(created_by=admin, company=company, email="o@x.com", first_name="O",
                           last_name="T", is_institution_admin=False, default_agency_id=ag, agency_ids=[ag])
    # Le guichetier a le droit RBAC treasury.session.operate (comme en production).
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    pids = list(Permission.objects.filter(code="treasury.session.operate").values_list("id", flat=True))
    role = create_role(name="R-Billetage Test", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=gui, role=role, company=company)
    reg = create_cash_register(company=company, name="C1", agency_id=ag, created_by=admin)
    now = timezone.now()
    s = schedule_session(company=company, cash_register=reg, assigned_to=gui,
                         scheduled_start=now - timedelta(hours=9),
                         scheduled_end=now + timedelta(hours=end_delta_hours), created_by=admin)
    open_scheduled_session(s, opening_balance=0, updated_by=admin)
    s.refresh_from_db()
    den = CurrencyDenomination.objects.filter(company=company, is_active=True).order_by("-value").first()
    return company, admin, gui, other, s, den


@pytest.mark.django_db
def test_assigned_guichetier_records_billetage():
    from apps.treasury.services.billetage import record_shift_billetage
    from apps.treasury.models import CashCount
    company, admin, gui, other, s, den = _setup()
    count, total = record_shift_billetage(s, items=[{"denomination_id": str(den.id), "quantity": 2}], user=gui)
    assert count.kind == CashCount.Kind.CLOSING
    assert count.counted_by_id == gui.id
    assert total == den.value * 2


@pytest.mark.django_db
def test_non_assigned_user_cannot_record():
    from apps.treasury.services.billetage import record_shift_billetage
    company, admin, gui, other, s, den = _setup()
    with pytest.raises(ApplicationError):
        record_shift_billetage(s, items=[{"denomination_id": str(den.id), "quantity": 1}], user=other)


@pytest.mark.django_db
def test_billetage_blocked_before_scheduled_end():
    from apps.treasury.services.billetage import record_shift_billetage
    company, admin, gui, other, s, den = _setup(end_delta_hours=+2)  # fin dans le futur
    with pytest.raises(ApplicationError):
        record_shift_billetage(s, items=[{"denomination_id": str(den.id), "quantity": 1}], user=gui)


@pytest.mark.django_db
def test_billetage_api_get_and_post():
    from rest_framework.test import APIClient
    company, admin, gui, other, s, den = _setup()
    c = APIClient(); c.force_authenticate(user=gui)
    r = c.get(f"/api/v1/treasury/sessions/{s.id}/billetage/")
    assert r.status_code == 200, r.content
    body = r.json().get("data", r.json())
    assert len(body["denominations"]) >= 1
    r = c.post(f"/api/v1/treasury/sessions/{s.id}/billetage/",
               {"items": [{"denomination_id": str(den.id), "quantity": 3}]}, format="json")
    assert r.status_code in (200, 201), r.content
