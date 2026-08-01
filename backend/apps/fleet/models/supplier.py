from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Supplier(BaseModel):
    """Fournisseur / société associée (pièces, carburant, contrats, véhicules)."""
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="suppliers")
    name           = models.CharField(_("nom"), max_length=255)
    code           = models.CharField(_("code"), max_length=20)
    tax_id         = models.CharField(_("NIU / identifiant fiscal"), max_length=50, blank=True)
    address        = models.TextField(_("adresse"), blank=True)
    city           = models.CharField(_("ville"), max_length=100, blank=True)
    country        = models.CharField(_("pays"), max_length=2, default="CM")
    phone          = models.CharField(_("téléphone"), max_length=30, blank=True)
    email          = models.EmailField(_("email"), blank=True)
    website        = models.URLField(_("site web"), blank=True)
    contact_person = models.CharField(_("personne de contact"), max_length=255, blank=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("fournisseur")
        ordering = ["name"]

    def __str__(self):
        return f"{self.code} — {self.name}"
