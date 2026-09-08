from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Profile(BaseModel):
    """
    Profil = template de rôles.
    Assigné à un utilisateur lors de sa création pour lui donner un ensemble de rôles en une fois.
    Ex : "Comptable", "Vendeur", "Manager RH", "Admin Agence"
    """
    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, null=True, blank=True, related_name="profiles",
        help_text=_("Null = profil système disponible pour toutes les institutions."),
    )
    name        = models.CharField(_("nom"), max_length=100)
    description = models.TextField(_("description"), blank=True)
    roles       = models.ManyToManyField(
        "admin_rbac.Role",
        through="ProfileRole",
        verbose_name=_("rôles"),
        blank=True,
    )
    is_default  = models.BooleanField(
        _("profil par défaut"), default=False,
        help_text=_("Attribué automatiquement aux nouveaux utilisateurs de l'institution."),
    )
    is_system   = models.BooleanField(_("profil système"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("profil")
        verbose_name_plural = _("profils")
        unique_together     = [("company", "name")]

    def __str__(self):
        scope = self.company.name if self.company_id else "Système"
        return f"{self.name} [{scope}]"


class ProfileRole(BaseModel):
    """Table de jointure Profile ↔ Role."""
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_roles")
    role    = models.ForeignKey("admin_rbac.Role", on_delete=models.CASCADE)

    class Meta:
        unique_together     = [("profile", "role")]
        verbose_name        = _("rôle du profil")
        verbose_name_plural = _("rôles du profil")
