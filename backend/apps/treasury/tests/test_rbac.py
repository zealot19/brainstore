import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.treasury.views import TransactionListView


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="Trez RBAC Co", admin_email="tr@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="tr@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="trs@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, data=None, **kw):
    req = getattr(APIRequestFactory(), method)("/x", data or {}, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw).status_code


@pytest.mark.django_db
def test_transaction_gating():
    company, admin, staff = _staff(["treasury.transaction.view"])
    assert _status(TransactionListView, "get", staff) != 403
    assert _status(TransactionListView, "post", staff, {}) == 403
    assert _status(TransactionListView, "get", admin) != 403
