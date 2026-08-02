from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Booking(BaseModel):
    class Status(models.TextChoices):
        HELD      = "held",      _("Réservé")
        CONFIRMED = "confirmed", _("Confirmé")
        BOARDED   = "boarded",   _("Embarqué")
        CANCELLED = "cancelled", _("Annulé")
        EXPIRED   = "expired",   _("Expiré")
        NO_SHOW   = "no_show",   _("Non présenté")

    class TripType(models.TextChoices):
        ONE_WAY    = "one_way",    _("Aller simple")
        ROUND_TRIP = "round_trip", _("Aller-retour")

    class Channel(models.TextChoices):
        COUNTER = "counter", _("Guichet")
        ONLINE  = "online",  _("En ligne")

    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_bookings")
    reference      = models.CharField(_("référence"), max_length=40, blank=True)
    status         = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.HELD)
    trip_type      = models.CharField(_("type de voyage"), max_length=12, choices=TripType.choices, default=TripType.ONE_WAY)
    outbound_trip  = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage aller"),
                                        on_delete=models.PROTECT, related_name="bookings_outbound")
    return_trip    = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage retour"),
                                        on_delete=models.PROTECT, null=True, blank=True, related_name="bookings_return")
    buyer          = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("acheteur"),
                                        on_delete=models.PROTECT, related_name="bookings_bought")
    amount_due     = models.DecimalField(_("montant dû"), max_digits=12, decimal_places=2, default=0)
    amount_paid    = models.DecimalField(_("montant payé"), max_digits=12, decimal_places=2, default=0)
    payment_method = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    held_until     = models.DateTimeField(_("réservé jusqu'à"), null=True, blank=True)
    channel        = models.CharField(_("canal"), max_length=10, choices=Channel.choices, default=Channel.COUNTER)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("réservation")
        ordering = ["-created_at"]

    def __str__(self):
        return self.reference or str(self.id)


class Ticket(BaseModel):
    class Direction(models.TextChoices):
        OUTBOUND = "outbound", _("Aller")
        RETURN   = "return",   _("Retour")

    class Status(models.TextChoices):
        HELD      = "held",      _("Réservé")
        SOLD      = "sold",      _("Vendu")
        BOARDED   = "boarded",   _("Embarqué")
        CANCELLED = "cancelled", _("Annulé")

    booking    = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation"),
                                    on_delete=models.CASCADE, related_name="tickets")
    number     = models.CharField(_("numéro"), max_length=40, blank=True)
    passenger  = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("passager"),
                                    on_delete=models.PROTECT, related_name="tickets")
    trip       = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                    on_delete=models.PROTECT, related_name="tickets")
    trip_seat  = models.ForeignKey("voyages_trips.TripSeat", verbose_name=_("siège"),
                                    on_delete=models.PROTECT, related_name="tickets")
    direction  = models.CharField(_("sens"), max_length=10, choices=Direction.choices, default=Direction.OUTBOUND)
    return_of  = models.ForeignKey("self", verbose_name=_("retour de"),
                                    on_delete=models.SET_NULL, null=True, blank=True, related_name="return_tickets")
    fare       = models.ForeignKey("voyages_pricing.Fare", verbose_name=_("tarif"),
                                    on_delete=models.SET_NULL, null=True, blank=True, related_name="tickets")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                    on_delete=models.PROTECT, related_name="tickets")
    amount     = models.DecimalField(_("montant"), max_digits=12, decimal_places=2, default=0)
    is_reward  = models.BooleanField(_("billet récompense"), default=False)
    status     = models.CharField(_("statut"), max_length=10, choices=Status.choices, default=Status.HELD)
    boarded_at = models.DateTimeField(_("embarqué à"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("billet")
        ordering = ["booking", "direction"]

    def __str__(self):
        return self.number or str(self.id)
