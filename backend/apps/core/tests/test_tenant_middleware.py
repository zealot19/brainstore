import pytest
from django.test import RequestFactory
from apps.authentication.models import User
from apps.authentication.tokens import CustomRefreshToken
from apps.core.middleware import TenantMiddleware, get_current_tenant


def _company_admin(name="Tenant Co", email="tenant@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _mw():
    return TenantMiddleware(lambda r: None)


def _bearer(request_factory, token):
    return request_factory.get("/", HTTP_AUTHORIZATION=f"Bearer {token}")


@pytest.mark.django_db
def test_resolves_company_from_valid_token():
    company, admin = _company_admin()
    access = str(CustomRefreshToken.for_user(admin).access_token)
    req = _bearer(RequestFactory(), access)

    tenant = _mw()._resolve_tenant(req)

    assert tenant is not None
    assert tenant["company_id"] == str(company.id)
    assert tenant["user_id"] == str(admin.id)


@pytest.mark.django_db
def test_no_auth_header_returns_none():
    req = RequestFactory().get("/")
    assert _mw()._resolve_tenant(req) is None


@pytest.mark.django_db
def test_garbage_token_returns_none():
    req = _bearer(RequestFactory(), "not.a.valid.token")
    assert _mw()._resolve_tenant(req) is None


@pytest.mark.django_db
def test_superadmin_without_company_has_no_tenant():
    su = User.objects.create_superuser(username="su", email="su@x.com", password="x",
                                       first_name="S", last_name="U")
    access = str(CustomRefreshToken.for_user(su).access_token)
    req = _bearer(RequestFactory(), access)
    assert _mw()._resolve_tenant(req) is None


@pytest.mark.django_db
def test_middleware_sets_contextvar_during_request():
    """Bout-en-bout : le contextvar est peuplé pendant get_response, remis à zéro après."""
    company, admin = _company_admin(name="CtxCo", email="ctx@x.com")
    access = str(CustomRefreshToken.for_user(admin).access_token)
    captured = {}

    def get_response(request):
        captured["tenant"] = get_current_tenant()
        return "ok"

    mw = TenantMiddleware(get_response)
    mw(_bearer(RequestFactory(), access))

    assert captured["tenant"]["company_id"] == str(company.id)
    assert get_current_tenant() is None  # remis à zéro après la requête
