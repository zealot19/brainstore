import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_pricing.config_api.views import FareListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Fare RBAC Co", admin_email="fareadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="fareadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="farestaff@x.com",
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
def test_fare_permission_gating():
    company, admin, staff = _make_staff(["transport.fare.view"])
    assert _status(FareListView, "get", staff) != 403
    assert _status(FareListView, "post", staff) == 403
    assert _status(FareListView, "get", admin) != 403


@pytest.mark.django_db
def test_fare_manage_permission():
    company, admin, staff = _make_staff(["transport.fare.view", "transport.fare.manage"])
    assert _status(FareListView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_fare_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(FareListView, "get", staff) == 403
