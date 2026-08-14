import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.fleet.views import VehicleListView, VehicleBrandListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Fleet RBAC Co", admin_email="fradmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="fradmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="frstaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, **kw):
    req = getattr(APIRequestFactory(), method)("/x", {}, format="json")
    force_authenticate(req, user=user)
    r = view.as_view()(req, **kw)
    return r.status_code


@pytest.mark.django_db
def test_vehicle_view_permission_gating():
    company, admin, staff = _make_staff(["fleet.vehicle.view"])
    assert _status(VehicleListView, "get", staff) != 403
    assert _status(VehicleListView, "post", staff) == 403
    assert _status(VehicleListView, "get", admin) != 403
    assert _status(VehicleListView, "post", admin) != 403


@pytest.mark.django_db
def test_manage_resource_gating():
    company, admin, staff = _make_staff(["fleet.brand.view"])
    assert _status(VehicleBrandListView, "get", staff) != 403
    assert _status(VehicleBrandListView, "post", staff) == 403


@pytest.mark.django_db
def test_staff_without_fleet_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(VehicleListView, "get", staff) == 403


from apps.fleet.config_api.views import UnitListView


@pytest.mark.django_db
def test_fleet_config_gating():
    company, admin, staff = _make_staff(["fleet.config.view"])
    assert _status(UnitListView, "get", staff) != 403    # a fleet.config.view
    assert _status(UnitListView, "post", staff) == 403   # pas fleet.config.manage
