from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Partner(BaseModel):
    """Partenaire (propriétaire de véhicules, bénéficiaire de revenus partagés)."""
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="business_partners")
    code           = models.CharField(_("code"), max_length=40)
    name           = models.CharField(_("nom"), max_length=200)
    postal_number  = models.CharField(_("numéro postal"), max_length=40, blank=True)
    phone          = models.CharField(_("téléphone"), max_length=40, blank=True)
    email          = models.EmailField(_("email"), blank=True)
    address        = models.CharField(_("adresse"), max_length=255, blank=True)
    tax_number     = models.CharField(_("numéro de contribuable"), max_length=60, blank=True)
    is_active      = models.BooleanField(_("actif"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("partenaire")
        verbose_name_plural = _("partenaires")
        unique_together = [("company", "code")]
        ordering = ["name"]

    def __str__(self):
        return f"{self.code} — {self.name}"
