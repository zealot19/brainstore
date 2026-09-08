from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class OdometerLog(BaseModel):
    """Historique des relevés kilométriques d'un véhicule."""

    class Source(models.TextChoices):
        MANUAL      = "manual",      _("Saisie manuelle")
        FUEL        = "fuel",        _("Plein de carburant")
        MAINTENANCE = "maintenance", _("Maintenance")
        ASSIGNMENT  = "assignment",  _("Mission")

    vehicle    = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                   on_delete=models.CASCADE, related_name="odometer_logs")
    value_km   = models.DecimalField(_("kilométrage (km)"), max_digits=10, decimal_places=1)
    date       = models.DateField(_("date"))
    source     = models.CharField(_("source"), max_length=20, choices=Source.choices,
                                  default=Source.MANUAL)
    note       = models.CharField(_("note"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("relevé kilométrique")
        verbose_name_plural = _("relevés kilométriques")
        ordering = ["-date", "-created_at"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.value_km} km ({self.date})"
