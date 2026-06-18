from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class FuelLog(BaseModel):
    """Enregistrement d'un plein de carburant pour un véhicule."""

    vehicle        = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                       on_delete=models.CASCADE, related_name="fuel_logs")
    date           = models.DateField(_("date"))
    odometer_km    = models.DecimalField(_("kilométrage au plein (km)"), max_digits=10, decimal_places=1)
    liters         = models.DecimalField(_("litres"), max_digits=8, decimal_places=2)
    cost_per_liter = models.DecimalField(_("coût/litre"), max_digits=8, decimal_places=3)
    total_cost     = models.DecimalField(_("coût total"), max_digits=12, decimal_places=2)
    fuel_type      = models.CharField(_("type carburant"), max_length=20, blank=True)
    station        = models.CharField(_("station"), max_length=200, blank=True)
    full_tank      = models.BooleanField(_("plein complet"), default=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("plein de carburant")
        verbose_name_plural = _("pleins de carburant")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.liters}L ({self.date})"
