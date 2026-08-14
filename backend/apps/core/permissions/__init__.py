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
    """Accès réservé aux administrateurs d'une institution."""
    message = _("Réservé aux administrateurs de l'institution.")

    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        return (
            request.user.is_superuser
            or getattr(request.user, "is_institution_admin", False)
        )


class IsAuthenticated(BasePermission):
    """Utilisateur authentifié (remplace le défaut DRF pour message traduit)."""
    message = _("Authentification requise.")

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated)


class HasModulePermission(BasePermission):
    """Autorise si super-admin, admin d'institution (bypass), ou si l'utilisateur possède
    le code de permission requis par la vue (view.permission_map[method] ou view.required_permission)."""
    message = _("Permission insuffisante pour cette action.")

    def has_permission(self, request, view):
        u = request.user
        if not (u and u.is_authenticated):
            return False
        if u.is_staff and u.is_superuser:
            return True
        if getattr(u, "is_institution_admin", False):
            return True
        code = (getattr(view, "permission_map", {}) or {}).get(request.method) \
            or getattr(view, "required_permission", None)
        if not code:
            return True
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        company_id = getattr(getattr(u, "company", None), "id", None)
        perms = get_user_permissions(u, company_id)
        return "*" in perms or code in perms
