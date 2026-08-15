from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Account(BaseModel):
    class Type(models.TextChoices):
        ASSET_CASH        = "asset_cash", _("Disponibilités")
        ASSET_RECEIVABLE  = "asset_receivable", _("Créances / Clients")
        ASSET_CURRENT     = "asset_current", _("Actif circulant")
        ASSET_FIXED       = "asset_fixed", _("Immobilisations")
        LIABILITY_PAYABLE = "liability_payable", _("Fournisseurs")
        LIABILITY_CURRENT = "liability_current", _("Dettes court terme")
        EQUITY            = "equity", _("Capitaux propres")
        INCOME            = "income", _("Produits")
        EXPENSE           = "expense", _("Charges")
        TAX               = "tax", _("Taxes")

    company      = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                     on_delete=models.CASCADE, related_name="accounts")
    code         = models.CharField(_("code"), max_length=10)
    name         = models.CharField(_("libellé"), max_length=255)
    account_type = models.CharField(_("type"), max_length=20, choices=Type.choices)
    reconcile    = models.BooleanField(_("lettrable"), default=False)
    deprecated   = models.BooleanField(_("déprécié"), default=False)
    currency     = models.CharField(_("devise"), max_length=3, default="XAF")
    parent       = models.ForeignKey("self", verbose_name=_("compte parent"), null=True, blank=True,
                                     on_delete=models.SET_NULL, related_name="children")
    note         = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("compte")
        verbose_name_plural = _("comptes")
        unique_together = [("company", "code")]
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
