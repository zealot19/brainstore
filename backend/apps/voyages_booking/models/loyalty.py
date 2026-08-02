from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class LoyaltyAccount(BaseModel):
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_loyalty_accounts")
    passenger      = models.OneToOneField("voyages_booking.Passenger", verbose_name=_("passager"),
                                           on_delete=models.CASCADE, related_name="loyalty_account")
    points_balance = models.IntegerField(_("solde de points"), default=0)
    lifetime_points = models.IntegerField(_("points cumulés"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name = _("compte fidélité")
        unique_together = [("company", "passenger")]

    def __str__(self):
        return f"{self.passenger_id}: {self.points_balance} pts"


class LoyaltyMovement(BaseModel):
    class Kind(models.TextChoices):
        EARN     = "earn",     _("Gain")
        REVERSAL = "reversal", _("Annulation")
        REDEEM   = "redeem",   _("Utilisation")

    account = models.ForeignKey("voyages_booking.LoyaltyAccount", verbose_name=_("compte"),
                                on_delete=models.CASCADE, related_name="movements")
    kind    = models.CharField(_("type"), max_length=10, choices=Kind.choices)
    points  = models.IntegerField(_("points"))
    booking = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation"),
                                on_delete=models.SET_NULL, null=True, blank=True, related_name="loyalty_movements")
    rule    = models.ForeignKey("voyages_config.LoyaltyRule", verbose_name=_("règle"),
                                on_delete=models.SET_NULL, null=True, blank=True, related_name="movements")
    note    = models.CharField(_("note"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("mouvement fidélité")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.get_kind_display()} {self.points:+d}"
