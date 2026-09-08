from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Role(BaseModel):
    """
    Rôle = ensemble de permissions.
    Les rôles système (is_system=True) sont prédéfinis et non modifiables par les admins institution.
    """
    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, null=True, blank=True, related_name="roles",
        help_text=_("Null = rôle système disponible pour toutes les institutions."),
    )
    name        = models.CharField(_("nom"), max_length=100)
    description = models.TextField(_("description"), blank=True)
    permissions = models.ManyToManyField(
        "admin_rbac.Permission",
        through="RolePermission",
        verbose_name=_("permissions"),
        blank=True,
    )
    is_system   = models.BooleanField(
        _("rôle système"), default=False,
        help_text=_("Les rôles système ne peuvent pas être supprimés ni modifiés par les institutions."),
    )

    class Meta(BaseModel.Meta):
        verbose_name        = _("rôle")
        verbose_name_plural = _("rôles")
        unique_together     = [("company", "name")]

    def __str__(self):
        scope = self.company.name if self.company_id else "Système"
        return f"{self.name} [{scope}]"


class RolePermission(BaseModel):
    """Table de jointure Role ↔ Permission (UUID pour la synchronisation multi-instances)."""
    role       = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="role_permissions")
    permission = models.ForeignKey("admin_rbac.Permission", on_delete=models.CASCADE)
    granted_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL,
        null=True, blank=True, related_name="+",
    )
    granted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together     = [("role", "permission")]
        verbose_name        = _("permission du rôle")
        verbose_name_plural = _("permissions du rôle")
