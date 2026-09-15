from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped

DEFAULT_SIGN_VOYAGE = ["Chauffeur", "Motoboy", "Chef guichetier"]
DEFAULT_SIGN_COLIS = ["Visa de l'Agent", "Visa du Chef d'Agence", "Visa du Chauffeur"]


class ManifestTemplate(_CompanyScoped):
    """Config en-tête / pied des bordereaux (manifestes), une par institution."""
    brand_name    = models.CharField(_("nom affiché"), max_length=255, blank=True)
    slogan        = models.CharField(_("slogan"), max_length=255, blank=True)
    head_office   = models.CharField(_("direction / siège social"), max_length=255, blank=True)
    phones        = models.CharField(_("téléphones"), max_length=255, blank=True)
    agencies_line = models.CharField(_("agences"), max_length=255, blank=True)
    logo          = models.FileField(_("logo"), upload_to="manifests/logos/", null=True, blank=True)
    sign_labels_voyage = models.JSONField(_("signatures voyage"), default=list, blank=True)
    sign_labels_colis  = models.JSONField(_("signatures colis"), default=list, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("modèle de bordereau")

    def __str__(self):
        return f"Modèle de bordereau ({self.company_id or 'global'})"
