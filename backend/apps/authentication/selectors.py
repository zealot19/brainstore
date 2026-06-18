from django.contrib.auth import get_user_model
from .models import UserSession, LoginAttempt

User = get_user_model()


def get_user_by_id(user_id):
    return User.objects.select_related("company", "default_agency").get(id=user_id)


def list_active_sessions(user):
    return UserSession.objects.filter(user=user, is_active=True).order_by("-created_at")


def list_login_attempts(user, limit=20):
    return LoginAttempt.objects.filter(user=user).order_by("-attempted_at")[:limit]
