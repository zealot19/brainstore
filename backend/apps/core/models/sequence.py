from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import BaseModel


class Sequence(BaseModel):
    """
    Générateur de numéros automatiques (ex: HR/2026/00001).
    Un code par type de document, partagé ou isolé par institution.
    """
    code        = models.CharField(_("code"), max_length=50, unique=True)
    name        = models.CharField(_("nom"), max_length=150)
    prefix      = models.CharField(_("préfixe"), max_length=20, blank=True)
    suffix      = models.CharField(_("suffixe"), max_length=20, blank=True)
    padding     = models.PositiveSmallIntegerField(_("longueur avec zéros"), default=5)
    next_number = models.PositiveIntegerField(_("prochain numéro"), default=1)
    reset_yearly = models.BooleanField(_("remise à zéro annuelle"), default=False)
    reset_year  = models.PositiveSmallIntegerField(_("année de remise à zéro"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("séquence")
        verbose_name_plural = _("séquences")

    def __str__(self):
        return f"{self.code} — {self.name}"
