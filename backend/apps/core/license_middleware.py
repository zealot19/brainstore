# backend/apps/core/license_middleware.py
from django.http import JsonResponse
from apps.core.middleware import get_current_tenant

_LOCK = {"success": False,
         "error": {"code": "LICENSE_EXPIRED",
                   "message": "Licence expirée, veuillez contacter l'administrateur."}}


def _is_exempt(path: str) -> bool:
    return path.startswith("/api/v1/auth/") or path.rstrip("/") == "/api/v1/system/license"


class LicenseMiddleware:
    """Hard-locks an institution whose license date has passed (or is suspended/
    cancelled). The DB row is the authority — no signature. Runs after
    TenantMiddleware (company_id resolved) and before EntitlementMiddleware.
    A company with no license row is not enforced; the platform super admin
    (no tenant) is never gated."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        tenant = get_current_tenant()
        company_id = tenant["company_id"] if tenant else None
        if company_id and not _is_exempt(request.path):
            from apps.system_config.services.licensing import company_is_licensed
            if not company_is_licensed(company_id):
                return JsonResponse(_LOCK, status=403)
        return self.get_response(request)
