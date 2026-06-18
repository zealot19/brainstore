from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class LeaveBalance(models.Model):
    """Solde de congé d'un employé pour un type de congé et une année donnée."""

    employee   = models.ForeignKey("hr.Employee",  verbose_name=_("employé"),
                                   on_delete=models.CASCADE, related_name="leave_balances")
    leave_type = models.ForeignKey("hr.LeaveType", verbose_name=_("type de congé"),
                                   on_delete=models.CASCADE, related_name="balances")
    year       = models.PositiveSmallIntegerField(_("année"))

    total_days   = models.DecimalField(_("jours alloués"),  max_digits=6, decimal_places=1, default=0)
    used_days    = models.DecimalField(_("jours pris"),     max_digits=6, decimal_places=1, default=0)
    carried_over = models.DecimalField(_("jours reportés"), max_digits=6, decimal_places=1, default=0)

    class Meta:
        verbose_name        = _("solde de congé")
        verbose_name_plural = _("soldes de congé")
        unique_together     = [("employee", "leave_type", "year")]

    def __str__(self):
        return f"{self.employee} — {self.leave_type} {self.year}"

    @property
    def remaining_days(self):
        return self.total_days + self.carried_over - self.used_days


class LeaveRequest(BaseModel):
    """Demande de congé d'un employé."""

    class Status(models.TextChoices):
        PENDING   = "pending",   _("En attente")
        APPROVED  = "approved",  _("Approuvé")
        REJECTED  = "rejected",  _("Refusé")
        CANCELLED = "cancelled", _("Annulé")

    employee   = models.ForeignKey("hr.Employee",  verbose_name=_("employé"),
                                   on_delete=models.CASCADE, related_name="leave_requests")
    leave_type = models.ForeignKey("hr.LeaveType", verbose_name=_("type de congé"),
                                   on_delete=models.PROTECT, related_name="requests")

    start_date  = models.DateField(_("début"))
    end_date    = models.DateField(_("fin"))
    days_count  = models.DecimalField(_("nombre de jours"), max_digits=6, decimal_places=1, default=0)
    reason      = models.TextField(_("motif"), blank=True)

    status      = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                   default=Status.PENDING)

    # ── Approbation ────────────────────────────────────────────────────────
    reviewed_by      = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("examiné par"),
                                         on_delete=models.SET_NULL, null=True, blank=True,
                                         related_name="reviewed_leave_requests")
    reviewed_at      = models.DateTimeField(_("examiné le"), null=True, blank=True)
    rejection_reason = models.TextField(_("motif de refus"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("demande de congé")
        verbose_name_plural = _("demandes de congé")
        ordering            = ["-start_date"]

    def __str__(self):
        return f"{self.employee} — {self.leave_type} {self.start_date}→{self.end_date} [{self.status}]"
