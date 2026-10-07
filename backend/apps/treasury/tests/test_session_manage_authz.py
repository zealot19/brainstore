"""#3 — suspend/resume/extend doivent suivre la même garde d'agence que open/close.

Avant : réservés au seul utilisateur ayant ouvert la session (`_assert_session_actor`),
si bien qu'un autre chef d'agence de la même agence ne pouvait pas gérer la session
d'un collègue. Après : tout détenteur du droit (vue) borné à son agence peut le faire.
"""
import pytest
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="Mg Co", admin_email="mg@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="mg@x.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag2 = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    opener, _ = create_user(created_by=admin, company=company, email="opener@x.com",
                            first_name="O", last_name="P", is_institution_admin=False,
                            default_agency_id=ag.id)
    peer, _ = create_user(created_by=admin, company=company, email="peer@x.com",
                          first_name="P", last_name="R", is_institution_admin=False,
                          default_agency_id=ag.id)          # même agence, pas l'ouvreur
    outsider, _ = create_user(created_by=admin, company=company, email="out@x.com",
                              first_name="X", last_name="T", is_institution_admin=False,
                              default_agency_id=ag2.id)      # autre agence
    reg = create_cash_register(company=company, name="C1", agency_id=ag.id,
                               manager_ids=[str(opener.id)], created_by=admin)
    return company, admin, opener, peer, outsider, reg


def _open(company, reg, opener):
    from apps.treasury.services import schedule_session, open_scheduled_session
    s = schedule_session(company=company, cash_register=reg, assigned_to=opener, created_by=opener)
    return open_scheduled_session(s, opening_balance=0, updated_by=opener)


@pytest.mark.django_db
def test_peer_in_same_agency_can_suspend_and_resume():
    from apps.treasury.services import suspend_session, resume_session
    company, admin, opener, peer, outsider, reg = _setup()
    s = _open(company, reg, opener)
    s = suspend_session(s, updated_by=peer)     # avant : ApplicationError (pas l'ouvreur)
    assert s.status == "suspended"
    s = resume_session(s, updated_by=peer)
    assert s.status == "open"


@pytest.mark.django_db
def test_outsider_other_agency_cannot_suspend():
    from apps.treasury.services import suspend_session
    company, admin, opener, peer, outsider, reg = _setup()
    s = _open(company, reg, opener)
    with pytest.raises(ApplicationError):
        suspend_session(s, updated_by=outsider)
