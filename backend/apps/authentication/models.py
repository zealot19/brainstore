import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from apps.core.models import BaseModel


class User(AbstractUser):
    """
    Modèle utilisateur étendu — remplace auth.User.
    Lié à une institution (Company) et à une ou plusieurs agences.
    Supporte le 2FA TOTP, la politique de mot de passe et le suivi de sécurité.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # ── Lien institution / agence ─────────────────────────────────────────
    company = models.ForeignKey(
        "system_config.Company",
        verbose_name=_("institution"),
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="users",
    )
    default_agency = models.ForeignKey(
        "system_config.Agency",
        verbose_name=_("agence par défaut"),
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="default_users",
    )
    agencies = models.ManyToManyField(
        "system_config.Agency",
        verbose_name=_("agences"),
        through="UserAgency",
        through_fields=("user", "agency"),
        related_name="users",
        blank=True,
    )

    # ── Profil ────────────────────────────────────────────────────────────
    phone        = models.CharField(_("téléphone"), max_length=30, blank=True)
    avatar       = models.FileField(_("avatar"), upload_to="users/avatars/", null=True, blank=True)
    job_title    = models.CharField(_("poste"), max_length=150, blank=True)
    language_code = models.CharField(_("langue"), max_length=10, default="fr")
    timezone     = models.CharField(_("fuseau horaire"), max_length=50, default="Africa/Abidjan")

    # ── Rôles d'administration ─────────────────────────────────────────────
    is_institution_admin = models.BooleanField(_("admin institution"), default=False)
    is_agency_admin      = models.BooleanField(_("admin agence"), default=False)

    # ── 2FA ───────────────────────────────────────────────────────────────
    is_2fa_enabled = models.BooleanField(_("2FA activé"), default=False)
    totp_secret    = models.CharField(_("secret TOTP"), max_length=64, blank=True)

    # ── Sécurité / politique mot de passe ─────────────────────────────────
    must_change_password  = models.BooleanField(_("doit changer le mot de passe"), default=True)
    password_changed_at   = models.DateTimeField(_("mot de passe changé le"), null=True, blank=True)
    failed_login_attempts = models.PositiveSmallIntegerField(_("tentatives échouées"), default=0)
    locked_until          = models.DateTimeField(_("verrouillé jusqu'au"), null=True, blank=True)
    last_login_ip         = models.GenericIPAddressField(_("dernière IP"), null=True, blank=True)

    class Meta:
        verbose_name        = _("utilisateur")
        verbose_name_plural = _("utilisateurs")
        ordering            = ["last_name", "first_name"]

    def __str__(self):
        return self.get_full_name() or self.email or self.username

    @property
    def is_locked(self):
        if self.locked_until and self.locked_until > timezone.now():
            return True
        return False

    def increment_failed_attempts(self, max_attempts=5, lockout_minutes=30):
        self.failed_login_attempts += 1
        if self.failed_login_attempts >= max_attempts:
            self.locked_until = timezone.now() + timezone.timedelta(minutes=lockout_minutes)
        self.save(update_fields=["failed_login_attempts", "locked_until"])

    def reset_failed_attempts(self):
        self.failed_login_attempts = 0
        self.locked_until = None
        self.save(update_fields=["failed_login_attempts", "locked_until"])


class UserAgency(BaseModel):
    """Table de liaison User ↔ Agency avec indicateur d'agence par défaut."""
    user       = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_agencies")
    agency     = models.ForeignKey("system_config.Agency", on_delete=models.CASCADE, related_name="agency_users")
    is_default = models.BooleanField(_("agence par défaut"), default=False)
    joined_at  = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name        = _("agence utilisateur")
        verbose_name_plural = _("agences utilisateur")
        unique_together     = [("user", "agency")]

    def __str__(self):
        return f"{self.user} → {self.agency}"


class UserSession(models.Model):
    """Suivi des sessions JWT actives par utilisateur."""
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user        = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sessions")
    jti         = models.CharField(_("JTI token"), max_length=255, unique=True)
    ip_address  = models.GenericIPAddressField(_("adresse IP"), null=True, blank=True)
    user_agent  = models.TextField(_("user agent"), blank=True)
    device      = models.CharField(_("appareil"), max_length=200, blank=True)
    is_active   = models.BooleanField(_("active"), default=True)
    last_activity = models.DateTimeField(_("dernière activité"), auto_now=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    expires_at  = models.DateTimeField(_("expire le"))

    class Meta:
        verbose_name        = _("session")
        verbose_name_plural = _("sessions")
        ordering            = ["-created_at"]

    def __str__(self):
        return f"{self.user} — {self.ip_address} ({self.created_at:%Y-%m-%d %H:%M})"


class LoginAttempt(models.Model):
    """Journal de toutes les tentatives de connexion (succès et échecs)."""
    id             = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email          = models.EmailField(_("email"), blank=True)
    ip_address     = models.GenericIPAddressField(_("adresse IP"), null=True, blank=True)
    success        = models.BooleanField(_("succès"))
    failure_reason = models.CharField(_("raison d'échec"), max_length=100, blank=True)
    user_agent     = models.CharField(_("user agent"), max_length=500, blank=True)
    attempted_at   = models.DateTimeField(auto_now_add=True)
    user           = models.ForeignKey(
        User, on_delete=models.SET_NULL,
        null=True, blank=True, related_name="login_attempts",
    )

    class Meta:
        verbose_name        = _("tentative de connexion")
        verbose_name_plural = _("tentatives de connexion")
        ordering            = ["-attempted_at"]

    def __str__(self):
        status = "✓" if self.success else "✗"
        return f"[{status}] {self.email} — {self.ip_address}"


class PasswordResetToken(models.Model):
    """Token à usage unique pour la réinitialisation de mot de passe."""
    id         = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user       = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reset_tokens")
    token      = models.CharField(_("token"), max_length=255, unique=True)
    expires_at = models.DateTimeField(_("expire le"))
    used_at    = models.DateTimeField(_("utilisé le"), null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name        = _("token de réinitialisation")
        verbose_name_plural = _("tokens de réinitialisation")

    @property
    def is_valid(self):
        return self.used_at is None and self.expires_at > timezone.now()

    def __str__(self):
        return f"Reset token — {self.user} (expires: {self.expires_at:%Y-%m-%d %H:%M})"
