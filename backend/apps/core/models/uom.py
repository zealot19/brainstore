from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import BaseModel


class UnitOfMeasureCategory(BaseModel):
    name = models.CharField(_("catégorie"), max_length=100, unique=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("catégorie d'unité")
        verbose_name_plural = _("catégories d'unités")

    def __str__(self):
        return self.name


class UnitOfMeasure(BaseModel):
    category = models.ForeignKey(
        UnitOfMeasureCategory, verbose_name=_("catégorie"),
        on_delete=models.PROTECT, related_name="uoms",
    )
    name     = models.CharField(_("nom"), max_length=100)
    symbol   = models.CharField(_("symbole"), max_length=20)
    factor   = models.DecimalField(_("facteur de conversion"), max_digits=18, decimal_places=6, default=1)
    is_reference = models.BooleanField(_("unité de référence"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("unité de mesure")
        verbose_name_plural = _("unités de mesure")
        unique_together     = [("category", "symbol")]

    def __str__(self):
        return f"{self.name} ({self.symbol})"
