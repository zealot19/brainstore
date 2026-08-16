import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.accounting.models import Account, Journal
from apps.treasury.views import CashRegisterListView


@pytest.mark.django_db
def test_create_register_with_accounting_link():
    from apps.system_config.services import create_company
    company, _ = create_company(name="T3a Co", admin_email="t3a@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="t3a@x.com")
    acc = Account.objects.get(company=company, code="571")
    jr = Journal.objects.get(company=company, code="CAISSE")
    req = APIRequestFactory().post("/x", {"name": "Caisse 1", "account_id": str(acc.id), "journal_id": str(jr.id)}, format="json")
    force_authenticate(req, user=admin)
    r = CashRegisterListView.as_view()(req)
    r.render()
    assert r.status_code == 201
    data = json.loads(r.content)
    assert data["account_code"] == "571"
    assert data["journal_code"] == "CAISSE"
