from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class License(BaseModel):
    """Licence d'utilisation d'une institution. L'autorité d'enforcement est la
    base de données (accès contrôlé) : `status` + `expires_at` pilotent le verrou."""

    class Status(models.TextChoices):
        ACTIVE    = "active",    _("Active")
        SUSPENDED = "suspended", _("Suspendue")
        CANCELLED = "cancelled", _("Résiliée")

    company    = models.OneToOneField("system_config.Company", verbose_name=_("institution"),
                                      on_delete=models.CASCADE, related_name="license")
    expires_at = models.DateField(_("expiration"), null=True, blank=True)
    status     = models.CharField(_("statut"), max_length=20,
                                  choices=Status.choices, default=Status.ACTIVE)

    class Meta(BaseModel.Meta):
        verbose_name        = _("licence")
        verbose_name_plural = _("licences")

    def __str__(self):
        return f"{self.company} — {self.status} (exp {self.expires_at})"
