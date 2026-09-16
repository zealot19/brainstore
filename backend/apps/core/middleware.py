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
        from django.utils import timezone as djtz

        tenant_token = _current_tenant.set(None)
        user_token   = _current_user.set(None)
        tz_activated = False

        try:
            tenant = self._resolve_tenant(request)
            _current_tenant.set(tenant)
            user_id = tenant.get("user_id") if tenant else None
            if user_id or request.META.get("HTTP_X_TIMEZONE"):
                tz_activated = self._activate_user_tz(user_id, request.META.get("HTTP_X_TIMEZONE"))
            response = self.get_response(request)
        finally:
            if tz_activated:
                djtz.deactivate()
            _current_tenant.reset(tenant_token)
            _current_user.reset(user_token)

        return response

    def _activate_user_tz(self, user_id, header_tz=None):
        """Active le fuseau horaire de la requête pour que les heures rendues côté
        serveur (bordereaux, reçus, rapports) soient à l'heure locale du poste.
        Priorité au fuseau de l'OS/navigateur (en-tête X-Timezone) ; à défaut, le
        fuseau enregistré de l'utilisateur."""
        from zoneinfo import ZoneInfo
        from django.utils import timezone as djtz
        from django.contrib.auth import get_user_model
        tzname = header_tz or None
        if not tzname and user_id:
            tzname = (get_user_model().objects.filter(id=user_id)
                      .values_list("timezone", flat=True).first())
        if not tzname:
            return False
        try:
            djtz.activate(ZoneInfo(tzname))
            return True
        except Exception:
            return False

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


# ── Journalisation d'audit automatique ────────────────────────────────────────
_MUTATIONS = {"POST": "CREATE", "PUT": "UPDATE", "PATCH": "UPDATE", "DELETE": "DELETE"}
_AUDIT_SKIP_PREFIXES = ("/api/v1/auth/", "/api/v1/sync/", "/api/v1/audit/")


def _audit_client_ip(request):
    xff = request.META.get("HTTP_X_FORWARDED_FOR", "")
    if xff:
        return xff.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")


def _audit_module_for_path(path):
    p = path[len("/api/v1/"):]
    parts = p.split("/")
    seg = parts[0] if parts else ""
    two = "/".join(parts[:2])
    if seg == "treasury":
        return "TREASURY"
    if two == "voyages/booking" or seg == "ticketing":
        return "TICKETING"
    if two == "voyages/consignment" or seg in ("parcels", "parcel"):
        return "PARCELS"
    if seg in ("voyage", "voyages"):
        return "VOYAGE"
    if seg in ("fleet", "fleet-config"):
        return "FLEET"
    if seg == "rbac":
        return "RBAC"
    if seg == "users":
        return "USERS"
    return "SYSTEM"


class AuditMiddleware:
    """Journalise chaque action modifiante (POST/PUT/PATCH/DELETE réussie) d'un
    utilisateur authentifié par JWT — couverture globale du journal d'audit.

    Les endpoints /auth/ (journalisés explicitement), /sync/ (inter-instances) et
    /audit/ (lecture) sont exclus. Silencieux en cas d'erreur.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        try:
            self._log(request, response)
        except Exception:
            pass
        return response

    def _log(self, request, response):
        action = _MUTATIONS.get(request.method)
        if not action or response.status_code >= 400:
            return
        path = request.path
        if not path.startswith("/api/v1/") or any(path.startswith(s) for s in _AUDIT_SKIP_PREFIXES):
            return

        from rest_framework_simplejwt.authentication import JWTAuthentication
        try:
            result = JWTAuthentication().authenticate(request)
        except Exception:
            result = None
        if not result:
            return
        user = result[0]

        from apps.core.services.audit_service import log_action
        log_action(
            user=user, action=action, module=_audit_module_for_path(path),
            description=f"{request.method} {path}",
            ip_address=_audit_client_ip(request),
            company=getattr(user, "company", None),
        )
