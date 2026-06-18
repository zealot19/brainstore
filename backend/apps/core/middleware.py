from contextvars import ContextVar
from django.utils.translation import gettext_lazy as _

_current_tenant: ContextVar = ContextVar("current_tenant", default=None)
_current_user: ContextVar   = ContextVar("current_user", default=None)


def get_current_tenant():
    return _current_tenant.get()


def get_current_user():
    return _current_user.get()


class TenantMiddleware:
    """
    Résout le tenant (Company) à chaque requête et le stocke dans un ContextVar.
    Stratégie : lecture du claim 'institution_id' dans le JWT.
    Toutes les vues peuvent appeler get_current_tenant() sans argument.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        tenant_token = _current_tenant.set(None)
        user_token   = _current_user.set(None)

        try:
            tenant = self._resolve_tenant(request)
            _current_tenant.set(tenant)
            response = self.get_response(request)
        finally:
            _current_tenant.reset(tenant_token)
            _current_user.reset(user_token)

        return response

    def _resolve_tenant(self, request):
        # Résolution différée — le tenant est injecté après validation JWT
        # La logique complète sera dans apps.system_config une fois l'app créée
        return None
