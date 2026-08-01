from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class VehicleModel(BaseModel):
    """Modèle de véhicule lié à une marque — référentiel global."""

    brand        = models.ForeignKey("fleet.VehicleBrand", verbose_name=_("marque"),
                                     on_delete=models.CASCADE, related_name="models")
    name         = models.CharField(_("modèle"), max_length=100)
    fuel_type    = models.ForeignKey("fleet.FuelType", verbose_name=_("carburant"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    transmission = models.ForeignKey("fleet.Transmission", verbose_name=_("transmission"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    traction_type= models.ForeignKey("fleet.TractionType", verbose_name=_("traction"),
                                     on_delete=models.PROTECT, related_name="vehicle_models",
                                     null=True, blank=True)
    seats        = models.PositiveSmallIntegerField(_("places assises"), null=True, blank=True)
    doors        = models.PositiveSmallIntegerField(_("portes"), null=True, blank=True)
    horsepower   = models.PositiveSmallIntegerField(_("puissance (ch)"), null=True, blank=True)
    payload_kg   = models.PositiveIntegerField(_("charge utile (kg)"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("modèle de véhicule")
        verbose_name_plural = _("modèles de véhicule")
        ordering = ["brand__name", "name"]
        unique_together = [("brand", "name")]

    def __str__(self):
        return f"{self.brand.name} {self.name}"
