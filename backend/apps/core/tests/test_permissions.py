import pytest
from types import SimpleNamespace
from apps.core.permissions import HasModulePermission
from apps.authentication.models import User


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="RBAC Co", admin_email="rbadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="rbadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="rbstaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


class _StubView:
    permission_map = {"GET": "fleet.vehicle.view", "POST": "fleet.vehicle.create"}


@pytest.mark.django_db
def test_has_module_permission_scopes_by_code():
    perm = HasModulePermission()
    company, admin, staff = _make_staff(["fleet.vehicle.view"])

    def req(user, method):
        return SimpleNamespace(user=user, method=method)

    assert perm.has_permission(req(staff, "GET"), _StubView()) is True
    assert perm.has_permission(req(staff, "POST"), _StubView()) is False
    assert perm.has_permission(req(admin, "POST"), _StubView()) is True
