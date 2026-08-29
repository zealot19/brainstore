from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class GeneralExpense(BaseModel):
    """Dépense générale / d'agence (non liée à un voyage)."""

    class Status(models.TextChoices):
        UNPAID = "unpaid", _("À décaisser")
        PAID   = "paid",   _("Décaissée")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                     related_name="general_expenses", verbose_name=_("company"))
    agency       = models.ForeignKey("system_config.Agency", on_delete=models.SET_NULL,
                                     null=True, blank=True, related_name="general_expenses",
                                     verbose_name=_("agence"))
    expense_type = models.ForeignKey("voyages_config.ExpenseType", on_delete=models.PROTECT,
                                     related_name="general_expenses", verbose_name=_("type de dépense"))
    label        = models.CharField(_("libellé"), max_length=200)
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)
    expense_date = models.DateField(_("date"), default=timezone.localdate)
    status       = models.CharField(_("statut"), max_length=10, choices=Status.choices,
                                    default=Status.UNPAID)
    cash_session = models.ForeignKey("treasury.CashSession", on_delete=models.SET_NULL,
                                     null=True, blank=True, related_name="general_expenses",
                                     verbose_name=_("session de caisse"))

    class Meta(BaseModel.Meta):
        verbose_name = _("dépense générale")
        verbose_name_plural = _("dépenses générales")
        ordering = ["-expense_date", "id"]

    def __str__(self):
        return f"{self.label} · {self.amount}"
