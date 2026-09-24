from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped

DEFAULT_SIGN_VOYAGE = ["Chauffeur", "Motoboy", "Chef guichetier"]
DEFAULT_SIGN_COLIS = ["Visa de l'Agent", "Visa du Chef d'Agence", "Visa du Chauffeur"]


class ManifestTemplate(_CompanyScoped):
    """Configuration des documents (en-tête / pied), une par institution.

    Source unique appliquée à TOUS les documents : bordereaux (manifestes),
    reçus/bons de trésorerie et rapports."""
    brand_name    = models.CharField(_("nom affiché"), max_length=255, blank=True)
    slogan        = models.CharField(_("slogan"), max_length=255, blank=True)
    head_office   = models.CharField(_("direction / siège social"), max_length=255, blank=True)
    phones        = models.CharField(_("téléphones"), max_length=255, blank=True)
    agencies_line = models.CharField(_("agences"), max_length=255, blank=True)
    logo          = models.FileField(_("logo"), upload_to="manifests/logos/", null=True, blank=True)
    sign_labels_voyage = models.JSONField(_("signatures voyage"), default=list, blank=True)
    sign_labels_colis  = models.JSONField(_("signatures colis"), default=list, blank=True)
    # Pied de page configurable, appliqué à TOUS les documents.
    footer_text   = models.TextField(_("pied de page (texte libre)"), blank=True)
    footer_show_generated = models.BooleanField(_("afficher « Généré le … »"), default=True)
    footer_show_page_numbers = models.BooleanField(_("afficher les numéros de page"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("configuration des documents")

    def __str__(self):
        return f"Modèle de bordereau ({self.company_id or 'global'})"
