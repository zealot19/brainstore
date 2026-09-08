from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class UserRole(BaseModel):
    """
    Attribution directe d'un rôle à un utilisateur (en dehors du profil).
    Peut être limité à une agence et avoir une date d'expiration.
    """
    user        = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_("utilisateur"),
        on_delete=models.CASCADE, related_name="user_roles",
    )
    role        = models.ForeignKey(
        "admin_rbac.Role", verbose_name=_("rôle"),
        on_delete=models.CASCADE, related_name="user_roles",
    )
    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, related_name="user_roles",
    )
    agency      = models.ForeignKey(
        "system_config.Agency", verbose_name=_("agence"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="user_roles",
        help_text=_("Restreint le rôle à une agence spécifique. Null = toutes agences."),
    )
    assigned_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_("attribué par"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="+",
    )
    assigned_at = models.DateTimeField(_("attribué le"), auto_now_add=True)
    expires_at  = models.DateTimeField(_("expire le"), null=True, blank=True)

    class Meta:
        unique_together     = [("user", "role", "company", "agency")]
        verbose_name        = _("rôle utilisateur")
        verbose_name_plural = _("rôles utilisateur")
        ordering            = ["user", "role"]

    def __str__(self):
        return f"{self.user} → {self.role} [{self.company}]"

    @property
    def is_expired(self):
        if not self.expires_at:
            return False
        from django.utils import timezone
        return timezone.now() > self.expires_at


class UserProfile(BaseModel):
    """Lien entre un utilisateur et son profil dans une institution."""
    user    = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_("utilisateur"),
        on_delete=models.CASCADE, related_name="user_profiles",
    )
    profile = models.ForeignKey(
        "admin_rbac.Profile", verbose_name=_("profil"),
        on_delete=models.CASCADE, related_name="user_profiles",
    )
    company = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, related_name="user_profiles",
    )
    assigned_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_("attribué par"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="+",
    )
    assigned_at = models.DateTimeField(_("attribué le"), auto_now_add=True)

    class Meta:
        unique_together     = [("user", "company")]
        verbose_name        = _("profil utilisateur")
        verbose_name_plural = _("profils utilisateur")

    def __str__(self):
        return f"{self.user} → {self.profile} [{self.company}]"
