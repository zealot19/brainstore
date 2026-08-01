from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parking(BaseModel):
    """Emplacement de stationnement / dépôt d'une institution."""
    company  = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                 on_delete=models.CASCADE, related_name="parkings")
    name     = models.CharField(_("nom"), max_length=255)
    location = models.CharField(_("emplacement"), max_length=255, blank=True,
                                help_text=_("Adresse ou coordonnées GPS"))
    notes    = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("parking")
        ordering = ["name"]

    def __str__(self):
        return self.name
