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
def test_my_active_endpoint_only_for_assigned_user():
    """Le minuteur (my-active) n'apparaît que chez le guichetier assigné —
    ni l'admin ni le gestionnaire qui a ouvert la session."""
    from rest_framework.test import APIClient
    from apps.authentication.models import User
    from apps.treasury.services import (create_cash_register, schedule_session,
                                        open_scheduled_session, close_session)
    company, admin = _company()
    gui = User.objects.create(email="g@x.com", username="g", company=company, is_active=True)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=gui, created_by=admin)
    open_scheduled_session(s, updated_by=admin)  # ouverte PAR l'admin, ASSIGNÉE à gui

    # L'admin (ouvreur) ne voit pas le minuteur.
    ca = APIClient(); ca.force_authenticate(user=admin)
    assert ca.get("/api/v1/treasury/sessions/my-active/").json()["data"] is None

    # Le guichetier assigné le voit.
    cg = APIClient(); cg.force_authenticate(user=gui)
    assert cg.get("/api/v1/treasury/sessions/my-active/").json()["data"]["id"] == str(s.id)

    # Clôturée → plus rien.
    close_session(s, closing_balance=Decimal("0"), updated_by=admin)
    assert cg.get("/api/v1/treasury/sessions/my-active/").json()["data"] is None
