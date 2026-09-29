"""Tests pour GET /api/v1/system/my-packages/ (app launcher post-login)."""
import pytest
from rest_framework.test import APIClient
from apps.authentication.models import User

pytestmark = pytest.mark.django_db


def _company_admin(email="mp@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="MP Co", admin_email=email,
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def test_admin_sees_all_granted_packages():
    company, admin = _company_admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    assert r.status_code == 200
    codes = {p["code"] for p in r.json()["data"]}
    assert {"administration", "transport", "accounting"} <= codes


def test_ungranted_package_absent():
    company, admin = _company_admin("mp2@x.com")
    company.pkg_accounting = False; company.save(update_fields=["pkg_accounting"])
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/system/my-packages/")
    codes = {p["code"] for p in r.json()["data"]}
    assert "accounting" not in codes
    assert "transport" in codes


# ── Branche non-admin (filtre par permissions RBAC) ─────────────────────────────

def _assign_permission(user, company, perm_code):
    """Attribue à `user` un rôle (scopé société) contenant la permission `perm_code`."""
    from apps.admin_rbac.models import Role, RolePermission, UserRole, Permission
    perm = Permission.objects.get(code=perm_code)  # seedé par _bootstrap_company
    role = Role.objects.create(company=company, name=f"role-{perm_code}")
    RolePermission.objects.create(role=role, permission=perm)
    UserRole.objects.create(user=user, role=role, company=company)


def test_non_admin_with_transport_permission_sees_transport():
    company, admin = _company_admin("mp3@x.com")
    from apps.users.services.user_services import create_user
    agent, _ = create_user(created_by=admin, company=company,
                           email="agent3@x.com", first_name="Ag", last_name="Ent",
                           is_institution_admin=False)
    _assign_permission(agent, company, "fleet.vehicle.view")

    c = APIClient(); c.force_authenticate(user=agent)
    r = c.get("/api/v1/system/my-packages/")
    assert r.status_code == 200
    codes = {p["code"] for p in r.json()["data"]}
    assert "transport" in codes          # a une permission fleet.* → package transport visible
    assert "administration" in codes     # toujours accessible


def test_non_admin_without_transport_permission_hides_transport():
    company, admin = _company_admin("mp4@x.com")
    from apps.users.services.user_services import create_user
    agent, _ = create_user(created_by=admin, company=company,
                           email="agent4@x.com", first_name="No", last_name="Perm",
                           is_institution_admin=False)
    # Aucune permission de la famille transport attribuée.

    c = APIClient(); c.force_authenticate(user=agent)
    r = c.get("/api/v1/system/my-packages/")
    assert r.status_code == 200
    codes = {p["code"] for p in r.json()["data"]}
    assert "transport" not in codes      # aucune permission transport → package caché
    assert "administration" in codes     # administration reste toujours accessible


# ── Test unitaire direct sur _user_can_enter (filtre de préfixes, sans DB) ───────

def test_user_can_enter_prefix_filter():
    from apps.core.packages import PACKAGES
    from apps.system_config.selectors.packages import _user_can_enter

    transport = next(p for p in PACKAGES if p["code"] == "transport")
    accounting = next(p for p in PACKAGES if p["code"] == "accounting")
    administration = next(p for p in PACKAGES if p["code"] == "administration")

    # Non-admin avec une permission de la famille transport.
    assert _user_can_enter(transport, is_admin=False, codes={"ticketing.reservation.view"}) is True
    assert _user_can_enter(accounting, is_admin=False, codes={"ticketing.reservation.view"}) is False

    # Non-admin sans permission pertinente : transport/accounting cachés, administration visible.
    assert _user_can_enter(transport, is_admin=False, codes={"users.user.view"}) is False
    assert _user_can_enter(administration, is_admin=False, codes=set()) is True

    # Admin bypass : tout accessible sans codes.
    assert _user_can_enter(transport, is_admin=True, codes=set()) is True
    assert _user_can_enter(accounting, is_admin=True, codes=set()) is True

    # Wildcard (superuser via get_user_permissions).
    assert _user_can_enter(transport, is_admin=False, codes={"*"}) is True
