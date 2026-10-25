from django.db.models import Q
from apps.system_config.models import Company
from apps.core.responses import error_response
from django.utils.translation import gettext_lazy as _


def scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def resolve_company_or_global(request):
    """Company admin -> own company; superuser -> body/query company_id or None (global)."""
    if request.user.is_superuser:
        cid = request.data.get("company_id") or request.query_params.get("company_id")
        if not cid:
            return None, None
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response("Institution introuvable.", status_code=404)
    if not request.user.company_id:
        return None, error_response(_("Votre compte n'est lié à aucune institution."))
    return request.user.company, None


def scoped_qs(model, company_id):
    qs = model.objects.filter(is_deleted=False)
    if company_id:
        return qs.filter(Q(company_id=company_id) | Q(company__isnull=True))
    return qs


def cfg_lookup(model_cls, cid, company_id):
    if not cid:
        return None
    return model_cls.objects.filter(
        Q(company_id=company_id) | Q(company__isnull=True), id=cid, is_deleted=False).first()
