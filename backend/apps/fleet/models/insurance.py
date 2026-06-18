from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Insurance(BaseModel):
    """Police d'assurance d'un véhicule."""

    class InsuranceType(models.TextChoices):
        COMPREHENSIVE = "comprehensive", _("Tous risques")
        THIRD_PARTY   = "third_party",   _("Responsabilité civile")
        ALL_RISKS     = "all_risks",     _("Multi-risques")
        OTHER         = "other",         _("Autre")

    vehicle        = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                       on_delete=models.CASCADE, related_name="insurances")
    company_name   = models.CharField(_("compagnie d'assurance"), max_length=200)
    policy_number  = models.CharField(_("numéro de police"), max_length=100)
    insurance_type = models.CharField(_("type"), max_length=20, choices=InsuranceType.choices,
                                      default=InsuranceType.THIRD_PARTY)
    start_date     = models.DateField(_("date de début"))
    end_date       = models.DateField(_("date d'échéance"))
    premium_amount = models.DecimalField(_("prime annuelle"), max_digits=12, decimal_places=2)
    deductible     = models.DecimalField(_("franchise"), max_digits=12, decimal_places=2,
                                         null=True, blank=True)
    insurer_contact = models.CharField(_("contact assureur"), max_length=200, blank=True)
    notes           = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("assurance")
        verbose_name_plural = _("assurances")
        ordering = ["-end_date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.company_name} ({self.policy_number})"

    @property
    def is_active(self):
        today = timezone.now().date()
        return self.start_date <= today <= self.end_date

    @property
    def days_until_expiry(self):
        today = timezone.now().date()
        delta = self.end_date - today
        return delta.days
