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
        """Résout le tenant depuis les claims du JWT (Authorization: Bearer …).

        Le middleware s'exécute AVANT l'authentification DRF : request.user n'est pas
        encore disponible. On décode donc le jeton directement depuis l'en-tête. On
        est indulgent — un en-tête absent ou un jeton invalide renvoie None ; c'est la
        vue (auth DRF) qui applique le vrai 401. Les super-admins ont company_id=None
        et restent donc sans tenant (ils précisent la société via ?company=).
        """
        from rest_framework_simplejwt.authentication import JWTAuthentication
        from rest_framework_simplejwt.exceptions import InvalidToken, TokenError

        auth = JWTAuthentication()
        header = auth.get_header(request)
        if header is None:
            return None
        raw = auth.get_raw_token(header)
        if raw is None:
            return None
        try:
            token = auth.get_validated_token(raw)
        except (InvalidToken, TokenError):
            return None
        company_id = token.get("company_id")
        if not company_id:
            return None
        return {
            "company_id": company_id,
            "agency_id":  token.get("agency_id"),
            "user_id":    token.get("user_id"),
        }
