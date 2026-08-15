import json
import pytest
from datetime import date
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="Entry API Co", admin_email="ea@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ea@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="eas@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _od_payload():
    return {"journal": "OD", "date": str(date.today()), "label": "OD test",
            "lines": [{"account": "571", "debit": "100"}, {"account": "706", "credit": "100"}]}


@pytest.mark.django_db
def test_create_post_and_immutability():
    from apps.accounting.views import EntryListView, EntryPostView, EntryDetailView
    company, admin, staff = _staff(["accounting.entry.view", "accounting.entry.create"])
    req = APIRequestFactory().post("/x", _od_payload(), format="json")
    force_authenticate(req, user=admin)
    r = EntryListView.as_view()(req); r.render()
    entry_id = json.loads(r.content)["data"]["id"]
    assert r.status_code in (200, 201)

    preq = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq, user=staff)
    assert EntryPostView.as_view()(preq, pk=entry_id).status_code == 403

    preq2 = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq2, user=admin)
    pr = EntryPostView.as_view()(preq2, pk=entry_id); pr.render()
    assert pr.status_code in (200, 201)
    assert json.loads(pr.content)["data"]["state"] == "posted"

    patchreq = APIRequestFactory().patch("/x", {"label": "x"}, format="json"); force_authenticate(patchreq, user=admin)
    assert EntryDetailView.as_view()(patchreq, pk=entry_id).status_code == 400


@pytest.mark.django_db
def test_unbalanced_create_then_post_fails():
    from apps.accounting.views import EntryListView, EntryPostView
    company, admin, staff = _staff(["accounting.entry.view", "accounting.entry.create", "accounting.entry.post"])
    payload = {"journal": "OD", "date": str(date.today()), "label": "x",
               "lines": [{"account": "571", "debit": "100"}, {"account": "706", "credit": "90"}]}
    req = APIRequestFactory().post("/x", payload, format="json"); force_authenticate(req, user=admin)
    r = EntryListView.as_view()(req); r.render()
    eid = json.loads(r.content)["data"]["id"]
    preq = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq, user=admin)
    assert EntryPostView.as_view()(preq, pk=eid).status_code == 400
