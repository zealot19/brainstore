import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.authentication.views import MePermissionsView


@pytest.mark.django_db
def test_me_permissions_wildcard_for_institution_admin():
    from apps.system_config.services import create_company
    create_company(name="Perm Co", admin_email="perm.admin@x.com",
                   admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="perm.admin@x.com")
    req = APIRequestFactory().get("/auth/me/permissions/")
    force_authenticate(req, user=admin)
    resp = MePermissionsView.as_view()(req)
    resp.render()
    assert json.loads(resp.content)["data"]["permissions"] == ["*"]
