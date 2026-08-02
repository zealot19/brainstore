from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TripStop(BaseModel):
    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="stops")
    service_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de service"),
                                      on_delete=models.PROTECT, related_name="trip_stops")
    sequence = models.PositiveIntegerField(_("ordre"))
    scheduled_arrival = models.DateTimeField(_("arrivée prévue"), null=True, blank=True)
    actual_arrival = models.DateTimeField(_("arrivée réelle"), null=True, blank=True)
    boarded_count = models.PositiveIntegerField(_("montées"), default=0)
    alighted_count = models.PositiveIntegerField(_("descentes"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name = _("escale de voyage")
        ordering = ["trip", "sequence"]
        unique_together = [("trip", "sequence")]

    def __str__(self):
        return f"{self.trip_id} #{self.sequence}"


class TripCrew(BaseModel):
    class Role(models.TextChoices):
        DRIVER     = "DRIVER",     _("Chauffeur")
        CONVOYEUR  = "CONVOYEUR",  _("Convoyeur")
        CONTROLEUR = "CONTROLEUR", _("Contrôleur")

    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="crew")
    driver = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                               on_delete=models.PROTECT, related_name="trip_crew")
    role = models.CharField(_("rôle"), max_length=12, choices=Role.choices, default=Role.DRIVER)
    boarded_at = models.DateTimeField(_("embarqué à"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("équipage")
        ordering = ["trip", "role"]

    def __str__(self):
        return f"{self.trip_id} — {self.get_role_display()}"


class TripSeat(BaseModel):
    class Status(models.TextChoices):
        AVAILABLE = "available", _("Disponible")
        HELD      = "held",      _("Réservé (temporaire)")
        SOLD      = "sold",      _("Vendu")
        BLOCKED   = "blocked",   _("Bloqué")

    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.CASCADE, related_name="seats")
    seat_number = models.CharField(_("numéro"), max_length=10)
    row = models.PositiveSmallIntegerField(_("rangée"))
    column = models.PositiveSmallIntegerField(_("colonne"))
    seat_type = models.CharField(_("type"), max_length=10)
    status = models.CharField(_("statut"), max_length=10, choices=Status.choices, default=Status.AVAILABLE)
    held_until = models.DateTimeField(_("réservé jusqu'à"), null=True, blank=True)
    booking_id = models.UUIDField(_("réservation"), null=True, blank=True)  # placeholder; Booking wires later

    class Meta(BaseModel.Meta):
        verbose_name = _("siège de voyage")
        ordering = ["trip", "row", "column"]
        unique_together = [("trip", "seat_number")]

    def __str__(self):
        return f"{self.trip_id} · {self.seat_number}"
