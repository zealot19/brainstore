from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()


class EmailOrUsernameBackend(ModelBackend):
    """
    Authentification par email OU nom d'utilisateur.
    Utilisé par authenticate(request, username=<email_or_username>, password=...).
    """

    def authenticate(self, request, username=None, password=None, **kwargs):
        if not username or not password:
            return None

        # Cherche par email d'abord, puis par username
        try:
            user = User.objects.get(email__iexact=username)
        except User.DoesNotExist:
            try:
                user = User.objects.get(username__iexact=username)
            except User.DoesNotExist:
                return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None
