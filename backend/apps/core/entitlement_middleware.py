from django.http import JsonResponse
from apps.core.module_map import module_for_path
from apps.core.middleware import get_current_tenant


class EntitlementMiddleware:
    """Bloque (403) l'accès aux modules non inclus dans le package de la société.

    S'exécute APRÈS TenantMiddleware, qui a déjà décodé le JWT et posé le tenant
    (company_id) dans le contexte. Contrairement à une permission DRF globale, un
    middleware s'applique à TOUTES les vues, même celles qui redéfinissent leur
    propre `permission_classes` (ce qui écraserait DEFAULT_PERMISSION_CLASSES).

    - Chemin non mappé (core : auth, system, users, rbac…) -> laisser passer.
    - Anonyme ou super admin (pas de company_id) -> laisser passer (l'auth gère).
    - Société sans le module -> 403 « Module non inclus dans votre offre ».
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        module = module_for_path(request.path)
        if module:
            tenant = get_current_tenant()
            company_id = tenant["company_id"] if tenant else None
            if company_id:
                from apps.system_config.selectors.entitlements import enabled_modules_for_company_id
                if module not in enabled_modules_for_company_id(company_id):
                    return JsonResponse(
                        {"success": False,
                         "error": {"message": "Module non inclus dans votre offre."}},
                        status=403,
                    )
        return self.get_response(request)
