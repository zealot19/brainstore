from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class SeatingPlan(_CompanyScoped):
    code = models.CharField(_("code"), max_length=30)
    name = models.CharField(_("nom"), max_length=150)
    total_seats = models.PositiveSmallIntegerField(_("nombre total de places"), default=0)
    blocked_seats = models.PositiveSmallIntegerField(_("places bloquées"), default=0)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("plan de bus")
        ordering = ["code"]

    @property
    def sellable_seats(self):
        """Places vendables = total − bloquées (jamais négatif)."""
        return max(0, (self.total_seats or 0) - (self.blocked_seats or 0))

    def clean(self):
        from django.core.exceptions import ValidationError
        super().clean()
        if (self.blocked_seats or 0) > (self.total_seats or 0):
            raise ValidationError(
                {"blocked_seats": _("Les places bloquées ne peuvent pas dépasser le total.")})

    def __str__(self):
        return f"{self.code} — {self.name}"
