from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class MaintenanceOrder(BaseModel):
    """Ordre de travail de maintenance pour un véhicule."""

    class Status(models.TextChoices):
        PLANNED     = "planned",     _("Planifié")
        IN_PROGRESS = "in_progress", _("En cours")
        DONE        = "done",        _("Terminé")
        CANCELLED   = "cancelled",   _("Annulé")

    vehicle          = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                         on_delete=models.CASCADE, related_name="maintenance_orders")
    maintenance_type = models.ForeignKey("fleet.MaintenanceType", verbose_name=_("type"),
                                         on_delete=models.PROTECT, related_name="orders")
    status           = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                        default=Status.PLANNED)
    planned_date     = models.DateField(_("date planifiée"))
    start_date       = models.DateField(_("date de début"), null=True, blank=True)
    done_date        = models.DateField(_("date de fin"), null=True, blank=True)

    odometer_at_start = models.DecimalField(_("km au début"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    odometer_at_done  = models.DecimalField(_("km à la fin"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)

    cost     = models.DecimalField(_("coût"), max_digits=12, decimal_places=2, null=True, blank=True)
    provider = models.CharField(_("prestataire / garage"), max_length=200, blank=True)
    notes    = models.TextField(_("notes"), blank=True)

    # Calculé automatiquement à la complétion depuis maintenance_type.interval_*
    next_due_km   = models.DecimalField(_("prochain entretien (km)"), max_digits=10, decimal_places=1,
                                        null=True, blank=True)
    next_due_date = models.DateField(_("prochain entretien (date)"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ordre de maintenance")
        verbose_name_plural = _("ordres de maintenance")
        ordering = ["-planned_date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.maintenance_type.name} ({self.get_status_display()})"
