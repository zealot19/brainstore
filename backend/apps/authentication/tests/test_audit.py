import pytest
from apps.core.models import AuditLog
from apps.authentication import services
from apps.authentication.models import User
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


def test_login_records_audit():
    c, _ = create_company(name="A", admin_email="a@x.com", admin_first_name="A", admin_last_name="B")
    u = User.objects.get(email="a@x.com")
    services.generate_tokens(u, ip="1.2.3.4")
    assert AuditLog.objects.filter(user=u, module="AUTH", action="LOGIN").exists()


def test_create_user_records_audit():
    from apps.users.services.user_services import create_user
    c, setup = create_company(name="B", admin_email="b@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="b@x.com")
    staff, _ = create_user(
        created_by=admin, company=c, email="s@x.com", first_name="S", last_name="T",
        is_institution_admin=False, default_agency_id=setup["hq_agency_id"],
        agency_ids=[setup["hq_agency_id"]])
    assert AuditLog.objects.filter(action="CREATE", module="USERS", target_id=str(staff.id)).exists()


def test_deactivate_user_records_audit():
    from apps.users.services.user_services import create_user, deactivate_user
    c, setup = create_company(name="D", admin_email="d@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="d@x.com")
    staff, _ = create_user(
        created_by=admin, company=c, email="s2@x.com", first_name="S", last_name="T",
        is_institution_admin=False, default_agency_id=setup["hq_agency_id"],
        agency_ids=[setup["hq_agency_id"]])
    deactivate_user(staff, admin)
    assert AuditLog.objects.filter(action="DELETE", module="USERS", target_id=str(staff.id)).exists()
