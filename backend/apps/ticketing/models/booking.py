from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Booking(BaseModel):
    """A passenger reservation on a trip."""

    class Status(models.TextChoices):
        PENDING   = "pending",   _("Pending")
        CONFIRMED = "confirmed", _("Confirmed")
        BOARDED   = "boarded",   _("Boarded")
        CANCELLED = "cancelled", _("Cancelled")
        NO_SHOW   = "no_show",   _("No Show")

    class PassengerType(models.TextChoices):
        ADULT   = "adult",   _("Adult")
        CHILD   = "child",   _("Child")
        STUDENT = "student", _("Student")
        SENIOR  = "senior",  _("Senior")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                    on_delete=models.CASCADE, related_name="bookings")
    reference  = models.CharField(_("reference"), max_length=30, blank=True)

    trip       = models.ForeignKey("voyage.Trip", verbose_name=_("trip"),
                                    on_delete=models.PROTECT, related_name="bookings")
    customer   = models.ForeignKey("ticketing.Customer", verbose_name=_("customer"),
                                    on_delete=models.PROTECT, related_name="bookings")

    passenger_type = models.CharField(_("passenger type"), max_length=20,
                                       choices=PassengerType.choices,
                                       default=PassengerType.ADULT)
    seat_number    = models.CharField(_("seat number"), max_length=10, blank=True)

    # Optional fare reference for pricing audit
    fare       = models.ForeignKey("transport_config.Fare", verbose_name=_("fare"),
                                    on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name="bookings")
    amount_paid = models.DecimalField(_("amount paid"), max_digits=10, decimal_places=2,
                                       default=0)

    status = models.CharField(_("status"), max_length=20, choices=Status.choices,
                               default=Status.CONFIRMED)
    notes  = models.CharField(_("notes"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("booking")
        verbose_name_plural = _("bookings")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.reference} — {self.customer.full_name} [{self.trip.reference}]"
