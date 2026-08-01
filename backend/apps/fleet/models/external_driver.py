from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class ExternalDriver(BaseModel):
    """Conducteur de la flotte. L'identité provient d'un employé RH ;
    seules les informations de permis sont propres à la flotte."""

    class LicenseCategory(models.TextChoices):
        A  = "A",  _("A — Moto")
        B  = "B",  _("B — Voiture")
        C  = "C",  _("C — Camion")
        D  = "D",  _("D — Bus")
        E  = "E",  _("E — Remorque")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                   on_delete=models.CASCADE, related_name="external_drivers")
    employee   = models.ForeignKey("hr.Employee", verbose_name=_("employé (RH)"),
                                   on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name="driver_profiles")

    license_number   = models.CharField(_("numéro de permis"), max_length=100)
    license_category = models.CharField(_("catégorie permis"), max_length=2,
                                        choices=LicenseCategory.choices, default=LicenseCategory.B)
    license_expiry   = models.DateField(_("expiration permis"), null=True, blank=True)

    notes = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("conducteur")
        verbose_name_plural = _("conducteurs")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.full_name} — {self.license_number}"

    @property
    def full_name(self):
        return self.employee.full_name if self.employee_id else "(sans employé)"
