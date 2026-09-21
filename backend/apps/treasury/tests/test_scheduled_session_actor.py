import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


@pytest.mark.django_db
def test_manager_opens_and_closes_scheduled_session():
    """Le cycle planifier → ouvrir → clôturer est piloté par un gestionnaire (droit
    RBAC treasury.session.manage imposé à l'endpoint ; borné à l'agence au niveau
    service). Le guichetier assigné ne sert qu'à la traçabilité ; un gestionnaire
    d'une autre agence ne peut pas clôturer."""
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.authentication.models import User
    from apps.users.services.user_services import create_user
    from apps.treasury.services import (create_cash_register, schedule_session,
                                        open_scheduled_session, close_session)
    company, _ = create_company(name="SchedCo", admin_email="sc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="sc@x.com")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag2 = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    guichetier, _ = create_user(created_by=admin, company=company, email="gui@x.com",
                                first_name="G", last_name="U", is_institution_admin=False,
                                default_agency_id=ag.id)
    other, _ = create_user(created_by=admin, company=company, email="oth@x.com",
                           first_name="O", last_name="T", is_institution_admin=False,
                           default_agency_id=ag2.id)

    reg = create_cash_register(company=company, name="C1", agency_id=ag.id, created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=guichetier, created_by=admin)
    assert s.status == "draft"

    open_scheduled_session(s, updated_by=admin)  # ouverture par un gestionnaire/admin
    s.refresh_from_db(); assert s.status == "open"

    with pytest.raises(ApplicationError):        # gestionnaire d'une autre agence : bloqué
        close_session(s, closing_balance=Decimal("0"), updated_by=other)

    close_session(s, closing_balance=Decimal("0"), updated_by=admin)  # le gestionnaire clôture
    s.refresh_from_db(); assert s.status == "closed"
