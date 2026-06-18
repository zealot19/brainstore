from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from datetime import timedelta
from apps.core.models import BaseModel


class OnlineBookingRequest(BaseModel):
    """
    A booking request submitted through the public API.
    Created before payment — becomes a real Booking on payment success.
    """

    class Status(models.TextChoices):
        PENDING   = "pending",   _("Pending Payment")
        PAID      = "paid",      _("Payment Successful")
        FAILED    = "failed",    _("Payment Failed")
        EXPIRED   = "expired",   _("Expired")

    class PaymentMethod(models.TextChoices):
        MTN_MOMO     = "mtn_momo",     _("MTN Mobile Money")
        ORANGE_MONEY = "orange_money", _("Orange Money")

    # ── Company & trip ─────────────────────────────────────────────────────────
    company = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                 on_delete=models.CASCADE, related_name="online_booking_requests")
    trip    = models.ForeignKey("voyage.Trip", verbose_name=_("trip"),
                                 on_delete=models.PROTECT, related_name="online_booking_requests")

    # ── Passenger info ─────────────────────────────────────────────────────────
    passenger_name  = models.CharField(_("passenger name"),  max_length=150)
    passenger_phone = models.CharField(_("passenger phone"), max_length=30)
    passenger_email = models.EmailField(_("passenger email"), blank=True)
    passenger_type  = models.CharField(_("passenger type"), max_length=20, default="adult")
    seat_number     = models.CharField(_("seat number"), max_length=10, blank=True)

    # ── Fare & amount ──────────────────────────────────────────────────────────
    fare   = models.ForeignKey("transport_config.Fare", verbose_name=_("fare"),
                                on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.DecimalField(_("amount"), max_digits=10, decimal_places=2)

    # ── Payment ────────────────────────────────────────────────────────────────
    payment_method    = models.CharField(_("payment method"), max_length=20,
                                          choices=PaymentMethod.choices)
    payment_phone     = models.CharField(_("payment phone"), max_length=30)
    payment_reference = models.CharField(_("Campay reference"), max_length=100, blank=True)
    payment_operator_ref = models.CharField(_("operator reference"), max_length=100, blank=True)

    # ── Status ─────────────────────────────────────────────────────────────────
    status     = models.CharField(_("status"), max_length=20,
                                   choices=Status.choices, default=Status.PENDING)
    expires_at = models.DateTimeField(_("expires at"))

    # ── Resulting booking (set on success) ────────────────────────────────────
    booking = models.OneToOneField("ticketing.Booking", verbose_name=_("booking"),
                                    on_delete=models.SET_NULL,
                                    null=True, blank=True,
                                    related_name="online_request")

    class Meta(BaseModel.Meta):
        verbose_name = _("online booking request")
        verbose_name_plural = _("online booking requests")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.passenger_name} — {self.trip.reference} [{self.status}]"

    @property
    def is_expired(self) -> bool:
        return self.status == self.Status.PENDING and timezone.now() > self.expires_at

    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(minutes=15)
        super().save(*args, **kwargs)
