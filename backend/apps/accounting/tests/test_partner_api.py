import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="A2 RBAC Co", admin_email="a2@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="a2@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="a2s@x.com", first_name="S", last_name="T",
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
def test_partner_gating_and_create():
    from apps.accounting.views import PartnerListView
    company, admin, staff = _staff(["accounting.partner.view"])
    assert _status(PartnerListView, "get", staff) != 403
    assert _status(PartnerListView, "post", staff, {"name": "X", "partner_type": "customer"}) == 403
    assert _status(PartnerListView, "post", admin, {"name": "Client Y", "partner_type": "customer"}) in (200, 201)
