from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import BaseModel


class Currency(BaseModel):
    code   = models.CharField(_("code ISO 4217"), max_length=3, unique=True)
    name   = models.CharField(_("nom"), max_length=100)
    symbol = models.CharField(_("symbole"), max_length=10)
    decimal_places = models.PositiveSmallIntegerField(_("décimales"), default=2)

    class Meta(BaseModel.Meta):
        verbose_name        = _("devise")
        verbose_name_plural = _("devises")

    def __str__(self):
        return f"{self.code} — {self.name}"


class ExchangeRate(BaseModel):
    from_currency = models.ForeignKey(
        Currency, verbose_name=_("devise source"),
        on_delete=models.CASCADE, related_name="rates_from",
    )
    to_currency = models.ForeignKey(
        Currency, verbose_name=_("devise cible"),
        on_delete=models.CASCADE, related_name="rates_to",
    )
    rate      = models.DecimalField(_("taux"), max_digits=18, decimal_places=6)
    valid_on  = models.DateField(_("valable le"))

    class Meta(BaseModel.Meta):
        verbose_name        = _("taux de change")
        verbose_name_plural = _("taux de change")
        unique_together = [("from_currency", "to_currency", "valid_on")]

    def __str__(self):
        return f"{self.from_currency_id} → {self.to_currency_id} : {self.rate}"
