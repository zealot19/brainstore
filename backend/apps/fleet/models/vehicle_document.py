from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class VehicleDocument(BaseModel):
    """Document administratif d'un véhicule (carte grise, CT, vignette…)."""

    class DocType(models.TextChoices):
        REGISTRATION         = "registration",          _("Carte grise")
        TECHNICAL_INSPECTION = "technical_inspection",  _("Contrôle technique")
        ROAD_TAX             = "road_tax",              _("Vignette / Taxe")
        PERMIT               = "permit",                _("Permis de circuler")
        OTHER                = "other",                 _("Autre")

    vehicle     = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                    on_delete=models.CASCADE, related_name="documents")
    doc_type    = models.CharField(_("type"), max_length=30, choices=DocType.choices)
    name        = models.CharField(_("intitulé"), max_length=200)
    number      = models.CharField(_("numéro"), max_length=100, blank=True)
    issue_date  = models.DateField(_("date d'émission"), null=True, blank=True)
    expiry_date = models.DateField(_("date d'expiration"), null=True, blank=True)
    notes       = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("document véhicule")
        verbose_name_plural = _("documents véhicule")
        ordering = ["expiry_date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.get_doc_type_display()} ({self.name})"

    @property
    def days_until_expiry(self):
        if not self.expiry_date:
            return None
        return (self.expiry_date - timezone.now().date()).days
