from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class DocumentFormat(_CompanyScoped):
    """Taille (format papier) par type de document, une ligne par institution + code.

    L'en-tête/pied reste partagé (ManifestTemplate / TicketTemplate) ; seul le FORMAT
    est réglable ici. height_mm = 0 signifie « auto » (rouleau thermique continu)."""
    code      = models.CharField(_("document"), max_length=40)
    width_mm  = models.DecimalField(_("largeur (mm)"), max_digits=6, decimal_places=2)
    height_mm = models.DecimalField(_("hauteur (mm)"), max_digits=6, decimal_places=2,
                                    help_text=_("0 = hauteur automatique (rouleau thermique)"))

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("format de document")
        verbose_name_plural = _("formats de documents")
        constraints = [
            models.UniqueConstraint(fields=["company", "code"], name="uniq_docformat_company_code"),
        ]

    def __str__(self):
        return f"{self.code} — {self.width_mm}×{self.height_mm}mm"
