from apps.core.responses import error_response
from django.utils.translation import gettext_lazy as _


def scope_company_id(request):
    return getattr(request.user, "company_id", None)


def resolve_company_or_global(request):
    """Booking is always company-scoped; require the user to have a company."""
    cid = getattr(request.user, "company_id", None)
    if not cid:
        return None, error_response(_("Aucune institution associée à l'utilisateur."), status_code=400)
    return request.user.company, None
