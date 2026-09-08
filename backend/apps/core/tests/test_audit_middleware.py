import pytest
from django.http import HttpResponse
from django.test import RequestFactory
from rest_framework_simplejwt.tokens import RefreshToken

from apps.core.middleware import AuditMiddleware
from apps.core.models import AuditLog
from apps.authentication.models import User
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


def _admin(email):
    create_company(name="MW", admin_email=email, admin_first_name="A", admin_last_name="B")
    return User.objects.get(email=email)


def _run(method, path, user=None, status=200):
    rf = RequestFactory()
    extra = {}
    if user:
        token = str(RefreshToken.for_user(user).access_token)
        extra["HTTP_AUTHORIZATION"] = f"Bearer {token}"
    req = getattr(rf, method.lower())(path, **extra)
    AuditMiddleware(lambda r: HttpResponse(status=status))(req)


def test_mutation_is_logged():
    u = _admin("mw1@x.com")
    _run("POST", "/api/v1/treasury/registers/", user=u, status=201)
    assert AuditLog.objects.filter(user=u, action="CREATE", module="TREASURY").exists()


def test_delete_maps_to_delete_action():
    u = _admin("mw2@x.com")
    _run("DELETE", "/api/v1/voyages/booking/x/", user=u, status=204)
    assert AuditLog.objects.filter(user=u, action="DELETE", module="TICKETING").exists()


def test_get_not_logged():
    u = _admin("mw3@x.com")
    _run("GET", "/api/v1/treasury/registers/", user=u, status=200)
    assert not AuditLog.objects.filter(user=u).exists()


def test_unauthenticated_not_logged():
    before = AuditLog.objects.count()
    _run("POST", "/api/v1/treasury/registers/", user=None, status=201)
    assert AuditLog.objects.count() == before


def test_error_response_not_logged():
    u = _admin("mw4@x.com")
    _run("POST", "/api/v1/treasury/registers/", user=u, status=400)
    assert not AuditLog.objects.filter(user=u).exists()


def test_auth_and_sync_paths_excluded():
    u = _admin("mw5@x.com")
    _run("POST", "/api/v1/auth/login/", user=u, status=200)
    _run("POST", "/api/v1/sync/push/", user=u, status=200)
    assert not AuditLog.objects.filter(user=u, action="CREATE").exists()
