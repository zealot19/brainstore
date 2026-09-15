from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class SeatingPlan(_CompanyScoped):
    code = models.CharField(_("code"), max_length=30)
    name = models.CharField(_("nom"), max_length=150)
    rows = models.PositiveSmallIntegerField(_("rangées"), default=0)
    columns = models.PositiveSmallIntegerField(_("colonnes"), default=0)
    total_seats = models.PositiveSmallIntegerField(_("places vendables"), default=0)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("plan de bus")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"


class PlanSeat(_CompanyScoped):
    class SeatType(models.TextChoices):
        STANDARD = "STANDARD", _("Standard")
        VIP      = "VIP",      _("VIP")
        DRIVER   = "DRIVER",   _("Chauffeur")
        CREW     = "CREW",     _("Personnel")

    plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan"),
                             on_delete=models.CASCADE, related_name="seats")
    seat_number = models.CharField(_("numéro"), max_length=10)
    row = models.PositiveSmallIntegerField(_("rangée"))
    column = models.PositiveSmallIntegerField(_("colonne"))
    seat_type = models.CharField(_("type"), max_length=10, choices=SeatType.choices,
                                 default=SeatType.STANDARD)
    is_sellable = models.BooleanField(_("vendable"), default=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("siège du plan")
        ordering = ["plan", "row", "column"]
        unique_together = [("plan", "seat_number"), ("plan", "row", "column")]

    def __str__(self):
        return f"{self.plan.code} · {self.seat_number}"


class VehicleSeatingAssignment(_CompanyScoped):
    vehicle = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                on_delete=models.PROTECT, related_name="seating_assignments")
    seating_plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan de bus"),
                                     on_delete=models.PROTECT, related_name="vehicle_assignments")

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("affectation de plan")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.vehicle} → {self.seating_plan.code}"
