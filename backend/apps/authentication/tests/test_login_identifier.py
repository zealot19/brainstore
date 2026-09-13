import pytest


def _make_user():
    from apps.authentication.models import User
    u = User.objects.create(email="jean@example.com", username="jean", is_active=True)
    u.set_password("Secret123!")
    u.save()
    return u


@pytest.mark.django_db
def test_login_with_username():
    from rest_framework.test import APIClient
    _make_user()
    c = APIClient()
    r = c.post("/api/v1/auth/login/", {"identifier": "jean", "password": "Secret123!"}, format="json")
    assert r.status_code == 200, r.content
    assert r.json()["data"]["access"]


@pytest.mark.django_db
def test_login_with_email():
    from rest_framework.test import APIClient
    _make_user()
    c = APIClient()
    r = c.post("/api/v1/auth/login/", {"identifier": "jean@example.com", "password": "Secret123!"}, format="json")
    assert r.status_code == 200, r.content
    assert r.json()["data"]["access"]


@pytest.mark.django_db
def test_login_legacy_email_key_still_works():
    from rest_framework.test import APIClient
    _make_user()
    c = APIClient()
    r = c.post("/api/v1/auth/login/", {"email": "jean@example.com", "password": "Secret123!"}, format="json")
    assert r.status_code == 200, r.content


@pytest.mark.django_db
def test_login_wrong_password_rejected():
    from rest_framework.test import APIClient
    _make_user()
    c = APIClient()
    r = c.post("/api/v1/auth/login/", {"identifier": "jean", "password": "nope"}, format="json")
    assert r.status_code >= 400
