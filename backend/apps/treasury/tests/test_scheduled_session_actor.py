import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


@pytest.mark.django_db
def test_assigned_guichetier_can_close_scheduled_session():
    """Un manager ouvre la session planifiée ; le guichetier assigné fait le
    billetage de fin et la clôture. Un tiers ne peut pas clôturer."""
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.treasury.services import (create_cash_register, schedule_session,
                                        open_scheduled_session, close_session)
    company, _ = create_company(name="SchedCo", admin_email="sc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="sc@x.com")
    guichetier = User.objects.create(email="gui@x.com", username="gui", company=company, is_active=True)
    other = User.objects.create(email="oth@x.com", username="oth", company=company, is_active=True)

    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = schedule_session(company=company, cash_register=reg, assigned_to=guichetier, created_by=admin)
    assert s.status == "draft"

    open_scheduled_session(s, updated_by=admin)  # ouverture par un manager/admin
    s.refresh_from_db(); assert s.status == "open"

    with pytest.raises(ApplicationError):        # un tiers ne peut pas clôturer
        close_session(s, closing_balance=Decimal("0"), updated_by=other)

    close_session(s, closing_balance=Decimal("0"), updated_by=guichetier)  # l'assigné clôture
    s.refresh_from_db(); assert s.status == "closed"
