import pytest
from decimal import Decimal


def _company():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="MyActive Co", admin_email="ma@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="ma@x.com")


@pytest.mark.django_db
def test_open_session_for_user_matches_assignee():
    """La session d'un utilisateur = celle qu'il a ouverte OU celle qui lui est
    assignée. C'est le verrou qui autorise ses encaissements (billets/colis)."""
    from apps.authentication.models import User
    from apps.treasury.services import (create_cash_register, schedule_session,
                                        open_scheduled_session)
    from apps.treasury.selectors import get_open_session_for_user
    company, admin = _company()
    guichetier = User.objects.create(email="g@x.com", username="g", company=company, is_active=True)
    other = User.objects.create(email="o@x.com", username="o", company=company, is_active=True)

    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=guichetier, created_by=admin)
    open_scheduled_session(s, updated_by=admin)  # ouverte par un gestionnaire

    assert get_open_session_for_user(company.id, guichetier).id == s.id  # assigné
    assert get_open_session_for_user(company.id, admin).id == s.id       # ouvreur
    assert get_open_session_for_user(company.id, other) is None          # tiers → aucune


@pytest.mark.django_db
def test_expired_scheduled_end_blocks_access_even_if_open():
    """Plage horaire dépassée : la session OUVERTE ne donne plus accès à la
    caisse (plus de vente possible), même sans clôture du gestionnaire."""
    from django.utils import timezone
    from datetime import timedelta
    from apps.authentication.models import User
    from apps.treasury.services import create_cash_register, schedule_session, open_scheduled_session
    from apps.treasury.selectors import get_open_session_for_user
    company, admin = _company()
    gui = User.objects.create(email="g@x.com", username="g", company=company, is_active=True)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=gui,
                         scheduled_end=timezone.now() - timedelta(minutes=1), created_by=admin)
    open_scheduled_session(s, updated_by=admin)
    s.refresh_from_db(); assert s.status == "open"      # toujours ouverte en base
    assert get_open_session_for_user(company.id, gui) is None  # mais accès refusé


@pytest.mark.django_db
def test_my_active_endpoint_returns_own_open_session():
    from rest_framework.test import APIClient
    from apps.treasury.services import create_cash_register, open_session, close_session
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    c = APIClient(); c.force_authenticate(user=admin)

    # Aucune session ouverte → data null.
    r = c.get("/api/v1/treasury/sessions/my-active/")
    assert r.status_code == 200, r.content
    assert r.json()["data"] is None

    # Session ouverte → renvoyée.
    s = open_session(company=company, cash_register=reg, opening_balance=Decimal("0"), created_by=admin)
    r = c.get("/api/v1/treasury/sessions/my-active/")
    assert r.json()["data"]["id"] == str(s.id)

    # Clôturée → data null de nouveau.
    close_session(s, closing_balance=Decimal("0"), updated_by=admin)
    r = c.get("/api/v1/treasury/sessions/my-active/")
    assert r.json()["data"] is None
