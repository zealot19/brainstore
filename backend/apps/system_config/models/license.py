from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class License(BaseModel):
    """Licence d'utilisation signée d'une institution. L'autorité d'enforcement
    est le jeton signé (`token`) ; les autres colonnes sont des miroirs."""

    class Status(models.TextChoices):
        ACTIVE    = "active",    _("Active")
        SUSPENDED = "suspended", _("Suspendue")
        CANCELLED = "cancelled", _("Résiliée")

    company     = models.OneToOneField("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="license")
    expires_at  = models.DateField(_("expiration"), null=True, blank=True)
    status      = models.CharField(_("statut"), max_length=20,
                                   choices=Status.choices, default=Status.ACTIVE)
    token       = models.TextField(_("jeton signé"), blank=True, default="")
    issued_at   = models.DateTimeField(_("émis le"), null=True, blank=True)
    key_version = models.SmallIntegerField(_("version de clé"), default=1)

    class Meta(BaseModel.Meta):
        verbose_name        = _("licence")
        verbose_name_plural = _("licences")

    def __str__(self):
        return f"{self.company} — {self.status} (exp {self.expires_at})"
