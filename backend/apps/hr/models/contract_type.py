from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class ContractType(BaseModel):
    """Type de contrat de travail (CDI, CDD, Stage, Prestataire…)."""

    class DurationType(models.TextChoices):
        OPEN_ENDED = "open_ended", _("CDI (durée indéterminée)")
        FIXED_TERM = "fixed_term", _("CDD (durée déterminée)")
        INTERNSHIP = "internship", _("Stage")
        SEASONAL   = "seasonal",   _("Saisonnier")
        FREELANCE  = "freelance",  _("Prestataire / Freelance")

    # null = type système (partagé entre toutes les institutions)
    company             = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                            on_delete=models.CASCADE, null=True, blank=True,
                                            related_name="contract_types")
    code                = models.CharField(_("code"), max_length=50)
    name                = models.CharField(_("libellé"), max_length=200)
    duration_type       = models.CharField(_("type de durée"), max_length=20,
                                           choices=DurationType.choices, default=DurationType.OPEN_ENDED)
    notice_period_days  = models.PositiveSmallIntegerField(_("préavis (jours)"), default=30)
    trial_period_days   = models.PositiveSmallIntegerField(_("période d'essai (jours)"), default=90)
    is_renewable        = models.BooleanField(_("renouvelable"), default=False)
    is_system           = models.BooleanField(_("type système"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("type de contrat")
        verbose_name_plural = _("types de contrat")
        ordering            = ["name"]

    def __str__(self):
        return self.name
