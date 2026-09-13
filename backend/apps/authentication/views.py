from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from apps.core.responses import success_response, created_response, error_response
from . import services, selectors
from .serializers import (
    LoginInputSerializer, LogoutInputSerializer, RefreshInputSerializer,
    TOTPSetupVerifySerializer, TOTPLoginVerifySerializer, TOTPDisableSerializer,
    ChangePasswordSerializer, PasswordResetRequestSerializer, PasswordResetConfirmSerializer,
    UserProfileSerializer, SessionSerializer, TokenOutputSerializer, UserCompactSerializer,
)

User = get_user_model()


def _get_client_ip(request):
    x_forwarded = request.META.get("HTTP_X_FORWARDED_FOR")
    return x_forwarded.split(",")[0].strip() if x_forwarded else request.META.get("REMOTE_ADDR")


# ── Login ─────────────────────────────────────────────────────────────────────

class LoginView(APIView):
    """
    POST /api/v1/auth/login/
    Retourne access + refresh tokens.
    Si 2FA activé, retourne requires_2fa=true et user_id pour l'étape suivante.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        payload = LoginInputSerializer(data=request.data)
        payload.is_valid(raise_exception=True)

        ip         = _get_client_ip(request)
        user_agent = request.META.get("HTTP_USER_AGENT", "")

        user = services.authenticate_user(
            identifier=payload.validated_data["identifier"],
            password=payload.validated_data["password"],
            ip=ip,
            user_agent=user_agent,
        )

        # Si 2FA activé → étape intermédiaire
        if user.is_2fa_enabled:
            return success_response({
                "requires_2fa": True,
                "user_id": str(user.id),
            })

        tokens = services.generate_tokens(user, ip=ip, user_agent=user_agent)
        return success_response({
            "requires_2fa": False,
            "access":  tokens["access"],
            "refresh": tokens["refresh"],
            "user": UserCompactSerializer(user).data,
        })


class Login2FAVerifyView(APIView):
    """
    POST /api/v1/auth/login/2fa/
    Étape 2 si le compte a le 2FA activé — valide le code TOTP et retourne les tokens.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        payload = TOTPLoginVerifySerializer(data=request.data)
        payload.is_valid(raise_exception=True)

        try:
            user = User.objects.get(id=payload.validated_data["user_id"], is_active=True)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)

        if not services.verify_totp(user, payload.validated_data["code"]):
            return error_response(_("Code TOTP invalide."), status_code=400)

        ip         = _get_client_ip(request)
        user_agent = request.META.get("HTTP_USER_AGENT", "")
        tokens = services.generate_tokens(user, ip=ip, user_agent=user_agent)

        return success_response({
            "requires_2fa": False,
            "access":  tokens["access"],
            "refresh": tokens["refresh"],
            "user": UserCompactSerializer(user).data,
        })


# ── Refresh / Logout ──────────────────────────────────────────────────────────

class RefreshView(APIView):
    """POST /api/v1/auth/refresh/ — Renouvelle l'access token."""
    permission_classes = [AllowAny]

    def post(self, request):
        payload = RefreshInputSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            refresh = RefreshToken(payload.validated_data["refresh"])
            return success_response({"access": str(refresh.access_token)})
        except Exception:
            return error_response(_("Token invalide ou expiré."), status_code=401)


class LogoutView(APIView):
    """POST /api/v1/auth/logout/ — Blackliste le refresh token courant."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        payload = LogoutInputSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.logout_user(payload.validated_data["refresh"])
        from apps.core.services.audit_service import log_action
        log_action(user=request.user, action="LOGOUT", module="AUTH",
                   description="Déconnexion", ip_address=_get_client_ip(request),
                   company=getattr(request.user, "company", None))
        return success_response(message=_("Déconnexion réussie."))


class LogoutAllView(APIView):
    """POST /api/v1/auth/logout-all/ — Invalide toutes les sessions actives."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        services.logout_all_sessions(request.user)
        return success_response(message=_("Toutes les sessions ont été révoquées."))


# ── Profil utilisateur ────────────────────────────────────────────────────────

class MeView(APIView):
    """GET/PATCH /api/v1/auth/me/ — Profil de l'utilisateur connecté."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return success_response(UserProfileSerializer(request.user).data)

    def patch(self, request):
        serializer = UserProfileSerializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return success_response(serializer.data, message=_("Profil mis à jour."))


class MePermissionsView(APIView):
    """GET /api/v1/auth/me/permissions/ — Codes de permissions du user connecté."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        company = getattr(request.user, "company", None)
        company_id = getattr(company, "id", None)
        perms = get_user_permissions(request.user, company_id)
        # Admin d'institution = accès complet à sa société (miroir du bypass backend).
        is_admin = request.user.is_superuser or getattr(request.user, "is_institution_admin", False)
        # Modules activés : super admin (plateforme, sans société) -> tous ;
        # sinon modules du package de la société (entitlement NON contourné par l'admin d'institution).
        from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
        modules = sorted(ALL_MODULES) if (request.user.is_superuser or not company) else sorted(enabled_modules(company))
        return success_response({
            "permissions": ["*"] if (is_admin or "*" in perms) else sorted(perms),
            "is_superuser": request.user.is_superuser,
            "modules": modules,
        })


# ── Sessions ──────────────────────────────────────────────────────────────────

class SessionListView(APIView):
    """GET /api/v1/auth/sessions/ — Liste les sessions actives."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        sessions = selectors.list_active_sessions(request.user)
        return success_response(SessionSerializer(sessions, many=True).data)


class SessionRevokeView(APIView):
    """DELETE /api/v1/auth/sessions/<jti>/ — Révoque une session spécifique."""
    permission_classes = [IsAuthenticated]

    def delete(self, request, jti):
        from .models import UserSession
        from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
        try:
            session = UserSession.objects.get(jti=jti, user=request.user)
            session.is_active = False
            session.save(update_fields=["is_active"])
            # Blacklist le token JWT correspondant
            try:
                token = OutstandingToken.objects.get(jti=jti)
                BlacklistedToken.objects.get_or_create(token=token)
            except OutstandingToken.DoesNotExist:
                pass
        except UserSession.DoesNotExist:
            return error_response(_("Session introuvable."), status_code=404)
        return success_response(message=_("Session révoquée."))


# ── Mot de passe ──────────────────────────────────────────────────────────────

class ChangePasswordView(APIView):
    """POST /api/v1/auth/change-password/"""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        payload = ChangePasswordSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.change_password(
            user=request.user,
            old_password=payload.validated_data["old_password"],
            new_password=payload.validated_data["new_password"],
        )
        return success_response(message=_("Mot de passe modifié. Veuillez vous reconnecter."))


class PasswordResetRequestView(APIView):
    """POST /api/v1/auth/password-reset/ — Demande un lien de réinitialisation."""
    permission_classes = [AllowAny]

    def post(self, request):
        payload = PasswordResetRequestSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.request_password_reset(email=payload.validated_data["email"])
        # Toujours retourner 200 (ne pas révéler si l'email existe)
        return success_response(message=_("Si cet email existe, un lien de réinitialisation a été envoyé."))


class PasswordResetConfirmView(APIView):
    """POST /api/v1/auth/password-reset/confirm/ — Réinitialise avec le token."""
    permission_classes = [AllowAny]

    def post(self, request):
        payload = PasswordResetConfirmSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.confirm_password_reset(
            token_str=payload.validated_data["token"],
            new_password=payload.validated_data["new_password"],
        )
        return success_response(message=_("Mot de passe réinitialisé avec succès."))


# ── 2FA TOTP ──────────────────────────────────────────────────────────────────

class TOTP2FASetupView(APIView):
    """POST /api/v1/auth/2fa/setup/ — Génère un secret TOTP et l'URI QR Code."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        result = services.generate_totp_secret(request.user)
        return success_response({
            "secret": result["secret"],
            "qr_uri": result["uri"],
            "instructions": _("Scannez le QR code avec votre application d'authentification (Google Authenticator, Authy…), puis vérifiez avec un code."),
        })


class TOTP2FAVerifyEnableView(APIView):
    """POST /api/v1/auth/2fa/verify/ — Vérifie le code et active le 2FA."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        payload = TOTPSetupVerifySerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.verify_and_enable_totp(request.user, payload.validated_data["code"])
        return success_response(message=_("2FA activé avec succès."))


class TOTP2FADisableView(APIView):
    """POST /api/v1/auth/2fa/disable/ — Désactive le 2FA (mot de passe requis)."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        payload = TOTPDisableSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.disable_totp(request.user, payload.validated_data["password"])
        return success_response(message=_("2FA désactivé."))
