from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class ExternalDriver(BaseModel):
    """Conducteur externe — non utilisateur du système (prestataire, chauffeur freelance…)."""

    class LicenseCategory(models.TextChoices):
        A  = "A",  _("A — Moto")
        B  = "B",  _("B — Voiture")
        C  = "C",  _("C — Camion")
        D  = "D",  _("D — Bus")
        E  = "E",  _("E — Remorque")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                   on_delete=models.CASCADE, related_name="external_drivers")
    first_name = models.CharField(_("prénom"), max_length=150)
    last_name  = models.CharField(_("nom"), max_length=150)
    phone      = models.CharField(_("téléphone"), max_length=30, blank=True)
    email      = models.EmailField(_("email"), blank=True)

    license_number   = models.CharField(_("numéro de permis"), max_length=100)
    license_category = models.CharField(_("catégorie permis"), max_length=2,
                                        choices=LicenseCategory.choices, default=LicenseCategory.B)
    license_expiry   = models.DateField(_("expiration permis"), null=True, blank=True)

    notes = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("conducteur externe")
        verbose_name_plural = _("conducteurs externes")
        ordering = ["last_name", "first_name"]

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()
