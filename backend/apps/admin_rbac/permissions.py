from rest_framework.permissions import BasePermission
from apps.admin_rbac.selectors.user_role_selectors import has_permission


def HasPermission(code: str):
    """
    Factory returning a DRF permission class that checks a dynamic RBAC code.

    Usage:
        permission_classes = [IsScigSageEnabled, HasPermission("scig.zone.validate")]

    The code is resolved at request time via the user's roles/profiles stored in DB.
    Superusers always pass ("*" wildcard).
    """
    class _HasPermission(BasePermission):
        required_code = code
        message = f"Permission requise : {code}"

        def has_permission(self, request, view):
            if not request.user or not request.user.is_authenticated:
                return False
            company = getattr(request.user, "company", None)
            company_id = getattr(company, "id", None)
            return has_permission(request.user, code, company_id)

    _HasPermission.__name__ = f"HasPermission_{code.replace('.', '_')}"
    _HasPermission.__qualname__ = _HasPermission.__name__
    return _HasPermission
