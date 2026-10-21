from django.utils.translation import gettext_lazy as _
from apps.core.responses import error_response


def scope_company_id(request):
    return getattr(request.user, "company_id", None)


def resolve_company_or_global(request):
    """Consignment est toujours rattaché à une institution."""
    cid = getattr(request.user, "company_id", None)
    if not cid:
        return None, error_response(_("Aucune institution associée à l'utilisateur."), status_code=400)
    return request.user.company, None
