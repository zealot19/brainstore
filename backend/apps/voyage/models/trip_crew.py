from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TripCrew(BaseModel):
    """A crew member assigned to a trip."""

    class Role(models.TextChoices):
        DRIVER     = "driver",     _("Driver")
        CONDUCTOR  = "conductor",  _("Conductor / Ticket collector")
        SUPERVISOR = "supervisor", _("Supervisor")
        OTHER      = "other",      _("Other")

    trip  = models.ForeignKey("voyage.Trip", verbose_name=_("trip"),
                               on_delete=models.CASCADE, related_name="crew")
    user  = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("staff member"),
                               on_delete=models.PROTECT, related_name="trip_assignments")
    role  = models.CharField(_("role"), max_length=20, choices=Role.choices,
                              default=Role.CONDUCTOR)
    notes = models.CharField(_("notes"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("crew member")
        verbose_name_plural = _("crew members")
        ordering = ["role", "user__last_name"]
        unique_together = [("trip", "user")]

    def __str__(self):
        return f"{self.trip.reference} — {self.user.get_full_name() or self.user.username} ({self.get_role_display()})"
