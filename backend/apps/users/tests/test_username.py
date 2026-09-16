import pytest
from apps.core.exceptions import ApplicationError


def _company_admin():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="UName Co", admin_email="adm@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="adm@x.com")


@pytest.mark.django_db
def test_create_user_uses_provided_username():
    from apps.users.services.user_services import create_user
    company, admin = _company_admin()
    user, _pw = create_user(created_by=admin, company=company, email="jdoe@x.com",
                            username="jdoe", first_name="J", last_name="Doe")
    assert user.username == "jdoe"


@pytest.mark.django_db
def test_create_user_rejects_duplicate_username():
    from apps.users.services.user_services import create_user
    company, admin = _company_admin()
    create_user(created_by=admin, company=company, email="a@x.com",
                username="dup", first_name="A", last_name="A")
    with pytest.raises(ApplicationError):
        create_user(created_by=admin, company=company, email="b@x.com",
                    username="DUP", first_name="B", last_name="B")


@pytest.mark.django_db
def test_create_user_without_username_autogenerates():
    """Le démarrage d'institution ne saisit pas de username → dérivé de l'email."""
    from apps.users.services.user_services import create_user
    company, admin = _company_admin()
    user, _pw = create_user(created_by=admin, company=company, email="auto@x.com",
                            first_name="Au", last_name="To")
    assert user.username  # non vide, dérivé de l'email


@pytest.mark.django_db
def test_update_user_changes_username_and_rejects_duplicate():
    from apps.users.services.user_services import create_user, update_user
    company, admin = _company_admin()
    u1, _ = create_user(created_by=admin, company=company, email="u1@x.com",
                        username="u1", first_name="U", last_name="1")
    u2, _ = create_user(created_by=admin, company=company, email="u2@x.com",
                        username="u2", first_name="U", last_name="2")
    update_user(u2, updated_by=admin, username="u2b")
    u2.refresh_from_db(); assert u2.username == "u2b"
    with pytest.raises(ApplicationError):
        update_user(u2, updated_by=admin, username="u1")


@pytest.mark.django_db
def test_api_create_requires_username():
    from rest_framework.test import APIClient
    company, admin = _company_admin()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/users/", {"email": "nx@x.com", "first_name": "N", "last_name": "X"}, format="json")
    assert r.status_code == 400, r.content
    assert "username" in r.json().get("errors", r.json()).__str__().lower() or "username" in str(r.content).lower()
