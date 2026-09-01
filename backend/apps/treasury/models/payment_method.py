from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel
from apps.treasury.models.transaction import Transaction


class PaymentMethod(BaseModel):
    """Moyen de paiement configurable par société."""
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, related_name="payment_methods")
    code = models.SlugField(_("code"), max_length=40)
    name = models.CharField(_("nom"), max_length=100)
    requires_payment = models.BooleanField(_("exige un paiement"), default=True)
    mode = models.CharField(_("mode trésorerie"), max_length=20,
                            choices=Transaction.PaymentMode.choices,
                            default=Transaction.PaymentMode.CASH)
    is_active = models.BooleanField(_("actif"), default=True)
    is_system = models.BooleanField(_("système"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name = _("moyen de paiement")
        unique_together = [("company", "code")]
        ordering = ["name"]

    def __str__(self):
        return self.name
