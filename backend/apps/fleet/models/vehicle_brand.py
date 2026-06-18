from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class VehicleBrand(BaseModel):
    """Marque de véhicule (Toyota, Mercedes, Renault…) — référentiel global."""

    name = models.CharField(_("nom"), max_length=100, unique=True)
    country_of_origin = models.CharField(_("pays d'origine"), max_length=100, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("marque de véhicule")
        verbose_name_plural = _("marques de véhicule")
        ordering = ["name"]

    def __str__(self):
        return self.name
