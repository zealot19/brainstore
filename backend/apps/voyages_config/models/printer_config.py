from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class PrinterConfig(_CompanyScoped):
    """Mappage document → imprimante (Windows), central par agence/instance locale.

    L'instance locale (Docker) rend le PDF puis l'envoie à l'agent d'impression Windows
    (host.docker.internal) qui imprime en silence sur `printer_name`. Vide = pas de mappage
    (repli sur la boîte d'impression du navigateur)."""
    doc_code     = models.CharField(_("document"), max_length=40)
    printer_name = models.CharField(_("imprimante"), max_length=255, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("mappage imprimante")
        verbose_name_plural = _("mappages imprimantes")
        constraints = [
            models.UniqueConstraint(fields=["company", "doc_code"], name="uniq_printercfg_company_doc"),
        ]

    def __str__(self):
        return f"{self.doc_code} → {self.printer_name or '—'}"
