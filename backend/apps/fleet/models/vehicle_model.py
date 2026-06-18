from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class VehicleModel(BaseModel):
    """Modèle de véhicule lié à une marque — référentiel global."""

    class VehicleType(models.TextChoices):
        CAR        = "car",        _("Voiture")
        VAN        = "van",        _("Fourgon / Van")
        TRUCK      = "truck",      _("Camion")
        BUS        = "bus",        _("Bus / Minibus")
        MOTORCYCLE = "motorcycle", _("Moto")
        OTHER      = "other",      _("Autre")

    class FuelType(models.TextChoices):
        GASOLINE = "gasoline", _("Essence")
        DIESEL   = "diesel",   _("Diesel")
        ELECTRIC = "electric", _("Électrique")
        HYBRID   = "hybrid",   _("Hybride")
        LPG      = "lpg",      _("GPL")
        OTHER    = "other",    _("Autre")

    brand        = models.ForeignKey("fleet.VehicleBrand", verbose_name=_("marque"),
                                     on_delete=models.CASCADE, related_name="models")
    name         = models.CharField(_("modèle"), max_length=100)
    vehicle_type = models.CharField(_("type"), max_length=20, choices=VehicleType.choices,
                                    default=VehicleType.CAR)
    fuel_type    = models.CharField(_("carburant"), max_length=20, choices=FuelType.choices,
                                    default=FuelType.DIESEL)
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
