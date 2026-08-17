from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TripExpense(BaseModel):
    class Status(models.TextChoices):
        PLANNED   = "planned",   _("Prévue")
        PAID      = "paid",      _("Décaissée")
        CANCELLED = "cancelled", _("Annulée")

    trip         = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                     on_delete=models.CASCADE, related_name="expenses")
    expense_type = models.ForeignKey("voyages_config.ExpenseType", verbose_name=_("type de dépense"),
                                     on_delete=models.PROTECT, related_name="trip_expenses")
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)
    description  = models.CharField(_("description"), max_length=255, blank=True)
    date         = models.DateField(_("date"), default=timezone.now)
    status       = models.CharField(_("statut"), max_length=12, choices=Status.choices,
                                    default=Status.PLANNED)
    cash_session = models.ForeignKey("treasury.CashSession", verbose_name=_("session de caisse"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="trip_expenses")

    class Meta(BaseModel.Meta):
        verbose_name = _("dépense de voyage")
        verbose_name_plural = _("dépenses de voyage")
        ordering = ["-date", "id"]

    def __str__(self):
        return f"{self.expense_type_id} · {self.amount}"
