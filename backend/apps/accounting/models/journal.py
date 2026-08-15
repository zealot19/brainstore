from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Journal(BaseModel):
    class Type(models.TextChoices):
        CASH     = "cash", _("Caisse")
        BANK     = "bank", _("Banque")
        SALE     = "sale", _("Ventes")
        PURCHASE = "purchase", _("Achats")
        GENERAL  = "general", _("Opérations diverses")

    company         = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                        related_name="journals")
    code            = models.CharField(_("code"), max_length=10)
    name            = models.CharField(_("nom"), max_length=100)
    journal_type    = models.CharField(_("type"), max_length=12, choices=Type.choices)
    default_account = models.ForeignKey("accounting.Account", null=True, blank=True,
                                        on_delete=models.SET_NULL, related_name="+")
    sequence_prefix = models.CharField(_("préfixe séquence"), max_length=30, blank=True)
    agency          = models.ForeignKey("system_config.Agency", null=True, blank=True,
                                        on_delete=models.SET_NULL, related_name="journals")
    active          = models.BooleanField(_("actif"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("journal")
        verbose_name_plural = _("journaux")
        unique_together = [("company", "code")]
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
