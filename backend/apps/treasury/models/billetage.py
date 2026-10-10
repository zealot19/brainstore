from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CurrencyDenomination(BaseModel):
    """Coupure monétaire (billet ou pièce) configurable par institution."""

    class Kind(models.TextChoices):
        BANKNOTE = "banknote", _("Billet")
        COIN     = "coin",     _("Pièce")

    company       = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="denominations")
    currency      = models.ForeignKey("core.Currency", verbose_name=_("devise"),
                                       on_delete=models.PROTECT, related_name="denominations")
    value         = models.DecimalField(_("valeur"), max_digits=12, decimal_places=2)
    kind          = models.CharField(_("type"), max_length=10, choices=Kind.choices, default=Kind.BANKNOTE)
    is_active     = models.BooleanField(_("actif"), default=True)
    display_order = models.PositiveIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("coupure monétaire")
        verbose_name_plural = _("coupures monétaires")
        unique_together     = [("company", "currency", "value")]
        ordering            = ["-value"]

    def __str__(self):
        return f"{self.value} {self.currency_id}"


class CashValueType(BaseModel):
    """Type de valeur non-espèces saisissable au billetage (bon de caisse, monnaie électronique…)."""

    company       = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="cash_value_types")
    code          = models.CharField(_("code"), max_length=20)
    label         = models.CharField(_("libellé"), max_length=100)
    is_active     = models.BooleanField(_("actif"), default=True)
    display_order = models.PositiveIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("type de valeur")
        verbose_name_plural = _("types de valeur")
        unique_together     = [("company", "code")]
        ordering            = ["display_order", "label"]

    def __str__(self):
        return self.label


class CashCount(BaseModel):
    """Comptage physique (billetage) rattaché à une session de caisse."""

    class Kind(models.TextChoices):
        OPENING      = "opening",      _("Ouverture")
        CLOSING      = "closing",      _("Fermeture")
        INTERMEDIATE = "intermediate", _("Intermédiaire")

    cash_session = models.ForeignKey("treasury.CashSession", verbose_name=_("session"),
                                     on_delete=models.CASCADE, related_name="counts")
    kind         = models.CharField(_("type"), max_length=15, choices=Kind.choices)
    total_amount = models.DecimalField(_("montant compté"), max_digits=14, decimal_places=2, default=0)
    counted_by   = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("compté par"),
                                     on_delete=models.PROTECT, related_name="cash_counts")

    class Meta(BaseModel.Meta):
        verbose_name        = _("comptage de caisse")
        verbose_name_plural = _("comptages de caisse")
        ordering            = ["created_at"]

    def __str__(self):
        return f"{self.get_kind_display()} — {self.total_amount}"


class CashCountItem(BaseModel):
    """Ligne de comptage : quantité d'une coupure donnée (valeur unitaire figée)."""

    cash_count   = models.ForeignKey(CashCount, verbose_name=_("comptage"),
                                     on_delete=models.CASCADE, related_name="items")
    denomination = models.ForeignKey(CurrencyDenomination, verbose_name=_("coupure"),
                                     on_delete=models.PROTECT, related_name="+")
    quantity     = models.PositiveIntegerField(_("quantité"), default=0)
    unit_value   = models.DecimalField(_("valeur unitaire"), max_digits=12, decimal_places=2)
    subtotal     = models.DecimalField(_("sous-total"), max_digits=14, decimal_places=2, default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("ligne de comptage")
        verbose_name_plural = _("lignes de comptage")
        ordering            = ["-unit_value"]

    def __str__(self):
        return f"{self.quantity} × {self.unit_value} = {self.subtotal}"
