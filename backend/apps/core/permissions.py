from rest_framework.permissions import BasePermission
from django.utils.translation import gettext_lazy as _


class IsSuperAdmin(BasePermission):
    """Accès réservé aux super administrateurs de la plateforme."""
    message = _("Réservé aux super administrateurs.")

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
            and request.user.is_superuser
        )


class IsInstitutionAdmin(BasePermission):
    """Accès réservé aux administrateurs d'une institution (et aux super-admins)."""
    message = _("Réservé aux administrateurs de l'institution.")

    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        # Les super-admins ont tous les droits
        if request.user.is_staff and request.user.is_superuser:
            return True
        return getattr(request.user, "is_institution_admin", False)


class IsAuthenticated(BasePermission):
    """Utilisateur authentifié (remplace le défaut DRF pour message traduit)."""
    message = _("Authentification requise.")

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated)
