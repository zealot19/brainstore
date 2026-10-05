# backend/apps/core/license_middleware.py
from django.conf import settings
from django.http import JsonResponse
from apps.core.middleware import get_current_tenant

_LOCK = {"success": False,
         "error": {"code": "LICENSE_EXPIRED",
                   "message": "Licence expirée, veuillez contacter l'administrateur."}}


def _is_exempt(path: str) -> bool:
    return "/api/v1/auth/" in path or path.rstrip("/").endswith("/api/v1/system/license")


class LicenseMiddleware:
    """Hard-locks an institution whose signed license is invalid/expired (I7).
    Runs after TenantMiddleware (company_id resolved) and before EntitlementMiddleware.
    Inert when no public key is configured (licensing not yet installed)."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if getattr(settings, "LICENSE_PUBLIC_KEYS", None):
            tenant = get_current_tenant()
            company_id = tenant["company_id"] if tenant else None
            if company_id and not _is_exempt(request.path):
                from apps.core.licensing import license_is_valid
                from apps.system_config.models import License
                lic = License.objects.filter(company_id=company_id).first()
                if not (lic and license_is_valid(lic.token)):
                    return JsonResponse(_LOCK, status=403)
        return self.get_response(request)
