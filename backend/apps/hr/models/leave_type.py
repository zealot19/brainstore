from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class LeaveType(BaseModel):
    """Type de congé (Annuel, Maladie, Maternité, Sans solde…)."""

    # null = type système partagé
    company              = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                             on_delete=models.CASCADE, null=True, blank=True,
                                             related_name="leave_types")
    code                 = models.CharField(_("code"), max_length=50)
    name                 = models.CharField(_("libellé"), max_length=200)
    description          = models.TextField(_("description"), blank=True)

    # Paramètres du type de congé
    max_days_per_year    = models.DecimalField(_("jours max / an"), max_digits=6, decimal_places=1,
                                               null=True, blank=True)  # null = illimité
    is_paid              = models.BooleanField(_("payé"), default=True)
    requires_approval    = models.BooleanField(_("approbation requise"), default=True)
    carry_over           = models.BooleanField(_("report autorisé"), default=False)
    max_carry_over_days  = models.DecimalField(_("report max (jours)"), max_digits=6, decimal_places=1,
                                               null=True, blank=True)
    min_notice_days      = models.PositiveSmallIntegerField(_("délai de demande (jours)"), default=0)
    color                = models.CharField(_("couleur (hex)"), max_length=7, default="#3B82F6")
    is_system            = models.BooleanField(_("type système"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("type de congé")
        verbose_name_plural = _("types de congé")
        ordering            = ["name"]

    def __str__(self):
        return self.name
