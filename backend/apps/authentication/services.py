import secrets
import pyotp
from django.contrib.auth import authenticate, get_user_model
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.db import transaction
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken

from apps.core.exceptions import ApplicationError
from .models import LoginAttempt, UserSession, PasswordResetToken
from .tokens import CustomRefreshToken

User = get_user_model()

MAX_ATTEMPTS   = 5
LOCKOUT_MINUTES = 30
RESET_TOKEN_TTL_HOURS = 1


# ── Authentification ──────────────────────────────────────────────────────────

def authenticate_user(*, identifier: str, password: str, ip: str = None, user_agent: str = "") -> User:
    """
    Vérifie les credentials, la politique de verrouillage et l'état du compte.
    `identifier` = email OU nom d'utilisateur. Enregistre chaque tentative dans LoginAttempt.
    """
    user = None
    failure_reason = ""

    # Résolution par email puis par nom d'utilisateur (comme EmailOrUsernameBackend).
    candidate = (User.objects.filter(email__iexact=identifier).first()
                 or User.objects.filter(username__iexact=identifier).first())

    if candidate is None:
        failure_reason = "user_not_found"
    elif candidate.is_locked:
        failure_reason = "account_locked"
    elif not candidate.is_active:
        failure_reason = "account_inactive"
    else:
        user = authenticate(username=identifier, password=password)
        if user is None:
            failure_reason = "wrong_password"
            candidate.increment_failed_attempts(
                max_attempts=MAX_ATTEMPTS,
                lockout_minutes=LOCKOUT_MINUTES,
            )

    _log_attempt(email=identifier, ip=ip, user_agent=user_agent,
                 success=(user is not None), reason=failure_reason, user=user)

    if user is None:
        if failure_reason == "account_locked":
            raise ApplicationError(
                _("Compte verrouillé. Réessayez dans %(min)s minutes.") % {"min": LOCKOUT_MINUTES},
                extra={"reason": failure_reason},
            )
        raise ApplicationError(
            _("Identifiant ou mot de passe incorrect."),
            extra={"reason": failure_reason},
        )

    # Réinitialise le compteur après succès
    user.reset_failed_attempts()
    if ip:
        user.last_login_ip = ip
        user.save(update_fields=["last_login_ip"])

    return user


def generate_tokens(user: User, ip: str = None, user_agent: str = "") -> dict:
    """Génère la paire access/refresh JWT et enregistre la session."""
    refresh = CustomRefreshToken.for_user(user)
    access  = refresh.access_token

    # Enregistre la session
    UserSession.objects.create(
        user=user,
        jti=str(refresh["jti"]),
        ip_address=ip,
        user_agent=user_agent[:500],
        is_active=True,
        expires_at=timezone.now() + timezone.timedelta(days=7),
    )

    from apps.core.services.audit_service import log_action
    log_action(user=user, action="LOGIN", module="AUTH",
               description="Connexion", ip_address=ip, company=user.company)

    return {
        "access":  str(access),
        "refresh": str(refresh),
    }


def logout_user(refresh_token_str: str) -> None:
    """Blackliste le refresh token courant (invalide cette session)."""
    try:
        token = CustomRefreshToken(refresh_token_str)
        token.blacklist()
        UserSession.objects.filter(jti=str(token["jti"])).update(is_active=False)
    except Exception:
        raise ApplicationError(_("Token invalide ou déjà révoqué."))


def logout_all_sessions(user: User) -> None:
    """Blackliste tous les refresh tokens actifs de l'utilisateur."""
    tokens = OutstandingToken.objects.filter(user=user)
    for token in tokens:
        BlacklistedToken.objects.get_or_create(token=token)
    UserSession.objects.filter(user=user, is_active=True).update(is_active=False)


# ── 2FA TOTP ──────────────────────────────────────────────────────────────────

def generate_totp_secret(user: User) -> dict:
    """
    Génère un nouveau secret TOTP et retourne l'URI pour QR Code.
    Le secret n'est PAS encore activé — l'utilisateur doit vérifier d'abord.
    """
    secret = pyotp.random_base32()
    # Stocke temporairement le secret (sera confirmé par verify_and_enable_totp)
    user.totp_secret = secret
    user.save(update_fields=["totp_secret"])

    totp = pyotp.TOTP(secret)
    uri  = totp.provisioning_uri(
        name=user.email,
        issuer_name="DreamsPOS ERP",
    )
    return {"secret": secret, "uri": uri}


def verify_and_enable_totp(user: User, code: str) -> None:
    """Vérifie le code TOTP et active le 2FA si correct."""
    if not user.totp_secret:
        raise ApplicationError(_("Aucun secret TOTP en attente. Lancez d'abord la configuration."))

    totp = pyotp.TOTP(user.totp_secret)
    if not totp.verify(code, valid_window=1):
        raise ApplicationError(_("Code TOTP invalide."))

    user.is_2fa_enabled = True
    user.save(update_fields=["is_2fa_enabled"])


def verify_totp(user: User, code: str) -> bool:
    """Vérifie un code TOTP lors de la connexion (2FA step 2)."""
    if not user.is_2fa_enabled or not user.totp_secret:
        raise ApplicationError(_("Le 2FA n'est pas activé pour cet utilisateur."))
    totp = pyotp.TOTP(user.totp_secret)
    return totp.verify(code, valid_window=1)


def disable_totp(user: User, password: str) -> None:
    """Désactive le 2FA après vérification du mot de passe."""
    if not user.check_password(password):
        raise ApplicationError(_("Mot de passe incorrect."))
    user.is_2fa_enabled = False
    user.totp_secret    = ""
    user.save(update_fields=["is_2fa_enabled", "totp_secret"])


# ── Mot de passe ──────────────────────────────────────────────────────────────

def change_password(user: User, old_password: str, new_password: str) -> None:
    """Change le mot de passe après vérification de l'ancien."""
    if not user.check_password(old_password):
        raise ApplicationError(_("Mot de passe actuel incorrect."))
    if old_password == new_password:
        raise ApplicationError(_("Le nouveau mot de passe doit être différent de l'ancien."))

    user.set_password(new_password)
    user.must_change_password = False
    user.password_changed_at  = timezone.now()
    user.save(update_fields=["password", "must_change_password", "password_changed_at"])
    logout_all_sessions(user)


@transaction.atomic
def request_password_reset(email: str) -> None:
    """Crée un token de réinitialisation (envoi email géré séparément)."""
    try:
        user = User.objects.get(email__iexact=email, is_active=True)
    except User.DoesNotExist:
        # Ne pas révéler si l'email existe ou non
        return

    # Invalide les anciens tokens
    PasswordResetToken.objects.filter(user=user, used_at__isnull=True).update(
        used_at=timezone.now()
    )
    token_value = secrets.token_urlsafe(48)
    PasswordResetToken.objects.create(
        user=user,
        token=token_value,
        expires_at=timezone.now() + timezone.timedelta(hours=RESET_TOKEN_TTL_HOURS),
    )
    # TODO: envoyer email avec le token


def confirm_password_reset(token_str: str, new_password: str) -> None:
    """Réinitialise le mot de passe via un token valide."""
    try:
        reset = PasswordResetToken.objects.select_related("user").get(token=token_str)
    except PasswordResetToken.DoesNotExist:
        raise ApplicationError(_("Token invalide ou expiré."))

    if not reset.is_valid:
        raise ApplicationError(_("Token invalide ou expiré."))

    user = reset.user
    user.set_password(new_password)
    user.must_change_password = False
    user.password_changed_at  = timezone.now()
    user.save(update_fields=["password", "must_change_password", "password_changed_at"])

    reset.used_at = timezone.now()
    reset.save(update_fields=["used_at"])
    logout_all_sessions(user)


# ── Helpers privés ────────────────────────────────────────────────────────────

def _log_attempt(*, email, ip, user_agent, success, reason, user):
    LoginAttempt.objects.create(
        email=email,
        ip_address=ip,
        user_agent=user_agent[:500],
        success=success,
        failure_reason=reason,
        user=user,
    )
