from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import BaseModel


class Address(BaseModel):
    """
    Adresse unique réutilisée par tous les modules (HR, Fleet, Partenaires…).
    Aucun module ne redéfinit sa propre table d'adresses.
    """
    label       = models.CharField(_("libellé"), max_length=100, blank=True)
    line1       = models.CharField(_("adresse ligne 1"), max_length=255)
    line2       = models.CharField(_("adresse ligne 2"), max_length=255, blank=True)
    city        = models.CharField(_("ville"), max_length=100)
    state       = models.CharField(_("département / région"), max_length=100, blank=True)
    postal_code = models.CharField(_("code postal"), max_length=20, blank=True)
    country     = models.CharField(_("pays"), max_length=100, default="CI")
    latitude    = models.DecimalField(_("latitude"),  max_digits=9, decimal_places=6, null=True, blank=True)
    longitude   = models.DecimalField(_("longitude"), max_digits=9, decimal_places=6, null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("adresse")
        verbose_name_plural = _("adresses")

    def __str__(self):
        return f"{self.line1}, {self.city}"
