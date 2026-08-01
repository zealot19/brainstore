from django.db.models import Q
from apps.system_config.models import Company
from apps.core.exceptions import ApplicationError
from apps.core.responses import error_response


def scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def resolve_company_or_global(request):
    """Company admin -> own company; superuser -> body/query company_id or None (global)."""
    if request.user.is_superuser:
        cid = request.data.get("company_id") or request.query_params.get("company_id")
        if not cid:
            return None, None  # global row
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response("Company not found.", status_code=404)
    if not request.user.company_id:
        return None, error_response("Votre compte n'est lié à aucune institution.")
    return request.user.company, None


def scoped_qs(model, company_id):
    qs = model.objects.filter(is_deleted=False)
    if company_id:
        return qs.filter(Q(company_id=company_id) | Q(company__isnull=True))
    return qs  # superuser without company_id sees all


def ensure_unique(model, company, field, value, exclude_id=None):
    qs = model.objects.filter(is_deleted=False, company=company, **{field: value})
    if exclude_id:
        qs = qs.exclude(id=exclude_id)
    if qs.exists():
        raise ApplicationError(f"Une entrée « {value} » existe déjà dans ce périmètre.")
